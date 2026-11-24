// check-gate.mjs — self-check replicating the competition gate's seven rows
// (rules "The gate") plus the no-network scan, against out/ and the snapshot.
// Usage: node check-gate.mjs [outDir] [snapshotPath]
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.argv[2] ?? "out";
const snapPath = process.argv[3] ?? "input/snapshot.json";
const snap = JSON.parse(readFileSync(snapPath, "utf8"));
const watch = new Set(snap.watchlist);
const slugs = new Set(snap.protocols.map((p) => p.slug));
const fails = [];
const pass = (name, ok, detail = "") => {
  console.log((ok ? "PASS" : "FAIL") + " " + name + (detail ? " — " + detail : ""));
  if (!ok) fails.push(name);
};
const NAME_RE = /^[A-Za-z0-9._-]+$/;

// 1. dashboard_files
let dashOk = true, dashDetail = "";
try {
  const files = [];
  const walk = (dir, rel) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const r = rel ? rel + "/" + e.name : e.name;
      if (e.isDirectory()) { if (e.name.startsWith(".")) throw new Error("dot dir " + r); walk(join(dir, e.name), r); }
      else if (e.isFile()) files.push(r);
      else throw new Error("not plain " + r);
    }
  };
  walk(join(outDir, "dashboard"), "");
  const total = files.reduce((n, f) => n + statSync(join(outDir, "dashboard", f)).size, 0);
  const hasHtml = files.includes("index.html");
  const hasCss = files.some((f) => f.endsWith(".css"));
  const hasJs = files.some((f) => f.endsWith(".js"));
  const badName = files.find((f) => f.split("/").some((p) => !NAME_RE.test(p) || p.length > 128 || p.startsWith(".") || p.startsWith("-")));
  let netRef = null;
  for (const f of files) {
    const text = readFileSync(join(outDir, "dashboard", f), "utf8");
    if (f.endsWith(".html")) {
      const m = text.match(/(?:src|href)\s*=\s*["']https?:[^"']*["']/i) || text.match(/<style[^>]*>[^<]*https?:/i);
      if (m) { netRef = f + ": " + m[0].slice(0, 80); break; }
    }
    if (f.endsWith(".css") && /https?:\/\//.test(text)) { netRef = f + ": url in css"; break; }
    if ((f.endsWith(".js") || f.endsWith(".mjs")) && /(?:from\s+["']https?:|import\s*\(\s*["']https?:|require\s*\(\s*["']https?:)/.test(text)) { netRef = f; break; }
  }
  dashOk = hasHtml && hasCss && hasJs && files.length <= 400 && total <= 4 * 1024 * 1024 && !badName && !netRef;
  dashDetail = `${files.length} files, ${total} bytes, html=${hasHtml} css=${hasCss} js=${hasJs}` +
    (badName ? ", bad name: " + badName : "") + (netRef ? ", network ref: " + netRef : "");
} catch (e) { dashOk = false; dashDetail = String(e); }
pass("dashboard_files", dashOk, dashDetail);

// 2. board_file + 3. sorted_by_value + 4. coverage + 5. farm_steps
const boardRaw = readFileSync(join(outDir, "board.json"));
const board = JSON.parse(boardRaw.toString("utf8"));
const rows = board.rows;
let boardOk = true, boardDetail = "";
if (!Array.isArray(rows) || rows.length < 100 || rows.length > 4000 || boardRaw.length > 8 * 1024 * 1024) {
  boardOk = false; boardDetail = "row count/size";
} else {
  const seen = new Set();
  for (const r of rows) {
    if (!slugs.has(r.slug)) { boardOk = false; boardDetail = "unknown slug " + r.slug; break; }
    if (seen.has(r.slug)) { boardOk = false; boardDetail = "dup slug " + r.slug; break; }
    seen.add(r.slug);
    if (!r.name || typeof r.name !== "string") { boardOk = false; boardDetail = "bad name " + r.slug; break; }
    if (!Number.isInteger(r.rank) || r.rank < 1) { boardOk = false; boardDetail = "bad rank " + r.slug; break; }
    if (!Number.isInteger(r.implied_value_usd) || r.implied_value_usd < 1 || r.implied_value_usd > 1e14) { boardOk = false; boardDetail = "bad value " + r.slug; break; }
  }
  boardDetail = boardDetail || rows.length + " rows";
}
pass("board_file", boardOk, boardDetail);
const ranks = rows.map((r) => r.rank).sort((a, b) => a - b);
const ranksOk = ranks.every((v, i) => v === i + 1);
const vals = rows.slice().sort((a, b) => a.rank - b.rank).map((r) => r.implied_value_usd);
const sortedOk = vals.every((v, i) => i === 0 || v <= vals[i - 1]);
const allSame = vals.length > 1 && vals.every((v) => v === vals[0]);
pass("sorted_by_value", ranksOk && sortedOk && !allSame,
  `ranks 1..N=${ranksOk}, non-increasing=${sortedOk}, all-same=${allSame}`);
const missing = [...watch].filter((s) => !rows.some((r) => r.slug === s));
pass("coverage", missing.length === 0, missing.length ? "missing: " + missing.join(",") : `${watch.size}/${watch.size} watchlist covered`);
let farmOk = true, farmDetail = "";
for (const r of rows) {
  if (!Array.isArray(r.farm_steps) || r.farm_steps.length < 3 || r.farm_steps.length > 12) { farmOk = false; farmDetail = r.slug + ": step count"; break; }
  const bad = r.farm_steps.find((s) => typeof s !== "string" || s.trim().length < 20 || s.trim().length > 600);
  if (bad !== undefined) { farmOk = false; farmDetail = r.slug + ": step length " + (typeof bad === "string" ? bad.trim().length : "?"); break; }
}
pass("farm_steps", farmOk, farmDetail || rows.length + " rows x " + rows[0].farm_steps.length + " steps");

// 6. screenshots
let shotsOk = true, shotsDetail = "";
try {
  const names = readdirSync(join(outDir, "screenshots")).filter((n) => !n.startsWith(".")).sort();
  if (names.length < 3 || names.length > 4) { shotsOk = false; shotsDetail = "count " + names.length; }
  else {
    const dims = [];
    for (const n of names) {
      const buf = readFileSync(join(outDir, "screenshots", n));
      if (buf.length > 512 * 1024) { shotsOk = false; shotsDetail = n + " over 512KiB"; break; }
      const isPng = buf[0] === 0x89 && buf[1] === 0x50;
      const isJpg = buf[0] === 0xff && buf[1] === 0xd8;
      if (!isPng && !isJpg) { shotsOk = false; shotsDetail = n + " not PNG/JPEG"; break; }
      if (isPng) {
        if (!buf.subarray(buf.length - 12).toString("latin1").includes("IEND")) { shotsOk = false; shotsDetail = n + " truncated PNG"; break; }
        dims.push(n + " " + buf.readUInt32BE(16) + "x" + buf.readUInt32BE(20));
        if (Math.max(buf.readUInt32BE(16), buf.readUInt32BE(20)) > 1440 || Math.min(buf.readUInt32BE(16), buf.readUInt32BE(20)) < 800) { shotsOk = false; shotsDetail = n + " dims out of range"; break; }
      } else {
        if (!(buf[buf.length - 2] === 0xff && buf[buf.length - 1] === 0xd9)) { shotsOk = false; shotsDetail = n + " truncated JPEG"; break; }
        dims.push(n + " jpeg");
      }
    }
    shotsDetail = shotsDetail || dims.join(", ");
  }
} catch (e) { shotsOk = false; shotsDetail = String(e); }
pass("screenshots", shotsOk, shotsDetail);

// 7. dossier_matches (kit's buildDossier, re-run and compare bytes)
const { buildDossier } = await import("./vendor/makefun-board.ts");
const before = readFileSync(join(outDir, "dossier.json"));
const rebuilt = buildDossier(outDir, { text_max_bytes: 65536, screenshots: { max: 4, max_bytes: 524288 }, dashboard: { max_files: 400, max_bytes: 4194304 } });
const dosOk = Buffer.from(before).equals(Buffer.from(rebuilt)) && before.length <= 1.5 * 1024 * 1024;
pass("dossier_matches", dosOk, `${before.length} bytes, rebuild identical=${Buffer.from(before).equals(Buffer.from(rebuilt))} (kit vendor file)`);

console.log(fails.length === 0 ? "\nALL GATE CHECKS PASS" : "\nFAILED: " + fails.join(", "));
process.exit(fails.length === 0 ? 0 : 1);
