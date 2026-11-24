// main.ts — Token Launch Radar entry for make.fun token-radar-01.
// Node standard library only. No network at run time. Deterministic: two
// runs over the same snapshot bytes write byte-identical outputs.
// Usage: MAKEFUN_OUTPUT_DIR=out node main.ts --input input/snapshot.json
// In grading: node main.ts (reads /input/snapshot.json, writes /output).
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildBoard } from "./lib/model.ts";
import { buildDossier } from "./vendor/makefun-board.ts";

const REPO_ROOT = dirname(fileURLToPath(import.meta.url));

/** The scorer's own caps (reference/gate.json): the text cap shapes the bytes, the rest refuse. */
const TEXT_MAX_BYTES = 65536;
const SCREENSHOT_CAPS = { max: 4, max_bytes: 524288 };
const IMAGE_NAME = /^[A-Za-z0-9_][A-Za-z0-9._-]{0,127}$/;

function arg(name: string, fallback: string): string {
  const i = process.argv.indexOf(name);
  if (i >= 0 && process.argv[i + 1]) return process.argv[i + 1];
  const eq = process.argv.find((a) => a.startsWith(name + "="));
  return eq === undefined ? fallback : eq.slice(name.length + 1);
}

const inputArg = arg("--input", "/input");
const inputPath = resolve(inputArg.endsWith(".json") ? inputArg : join(inputArg, "snapshot.json"));
if (!existsSync(inputPath)) {
  process.stderr.write(`token radar: no snapshot at ${inputPath}: pass --input <snapshot.json|directory> or mount the sealed /input\n`);
  process.exit(2);
}
const outputDir = resolve(arg("--output", process.env.MAKEFUN_OUTPUT_DIR ?? "/output"));

const snapshot = JSON.parse(readFileSync(inputPath, "utf8"));
const { rows, multiples, meta } = buildBoard(snapshot);

// Gate-shape self-check before writing anything.
const watchMissing = (snapshot.watchlist as string[]).filter((s) => !rows.some((r) => r.slug === s));
if (watchMissing.length > 0) {
  process.stderr.write(`token radar: the board misses ${watchMissing.length} watchlist slugs: ${watchMissing.slice(0, 5).join(", ")}\n`);
  process.exit(1);
}

// 1. board.json
mkdirSync(outputDir, { recursive: true });
const board = { ...meta, rows };
writeFileSync(join(outputDir, "board.json"), JSON.stringify(board), "utf8");

// 2. dashboard: copy the static page, then write its data beside it.
const dashOut = join(outputDir, "dashboard");
mkdirSync(dashOut, { recursive: true });
cpSync(join(REPO_ROOT, "dashboard"), dashOut, { recursive: true });
const dataJs =
  "window.BOARD = " +
  JSON.stringify(
    {
      meta,
      multiples: {
        global: multiples.global,
        byCategory: multiples.byCategory,
      },
      rows,
    },
    null,
    1,
  ) +
  ";\n";
writeFileSync(join(dashOut, "z-data.js"), dataJs, "utf8");

// 3. screenshots: copy as-is (they are captures of this dashboard).
const shotsOut = join(outputDir, "screenshots");
mkdirSync(shotsOut, { recursive: true });
const shotsSrc = join(REPO_ROOT, "screenshots");
let shots: string[] = [];
if (existsSync(shotsSrc)) {
  cpSync(shotsSrc, shotsOut, { recursive: true });
  shots = readdirSync(shotsOut).filter((n) => !n.startsWith(".") && statSync(join(shotsOut, n)).isFile());
}
if (shots.length < 3) {
  process.stderr.write(`token radar: screenshots/ holds ${shots.length} images: hand in 3, the board, a detail view and a filtered view\n`);
  process.exit(1);
}
for (const name of shots) {
  if (!IMAGE_NAME.test(name)) {
    process.stderr.write(`token radar: screenshots/${name}: a name is letters, digits and . _ -, 1 to 128 characters\n`);
    process.exit(1);
  }
}

// 4. dossier.json from the kit's builder (vendor/makefun-board.ts).
// The dossier is written last: the scorer rebuilds it from this /output and compares bytes.
const dossierBytes = buildDossier(outputDir, {
  text_max_bytes: TEXT_MAX_BYTES,
  screenshots: SCREENSHOT_CAPS,
  dashboard: { max_files: 400, max_bytes: 4194304 },
});
writeFileSync(join(outputDir, "dossier.json"), dossierBytes);

console.log(
  "token-radar: " +
    rows.length +
    " rows, watchlist " +
    meta.watchlist_covered +
    "/" +
    meta.watchlist_total +
    ", global multiple " +
    multiples.global.multiple.toFixed(4) +
    " over " +
    multiples.global.peers +
    " traded peers, dossier " +
    dossierBytes.length +
    " bytes -> " +
    outputDir,
);
