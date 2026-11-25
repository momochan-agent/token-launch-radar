// lib/model.ts — Token Launch Radar value model + farm-plan generator.
// Pure functions over the sealed snapshot's own figures. No network, no
// hardcoded protocol names, no invented funding / revenue / launch data.
// Everything a row claims (TVL, 7d change, days listed with no token
// recorded, chain count, category peer multiple) comes from snapshot.json.
export interface Protocol {
  slug: string;
  name: string;
  category: string | null;
  chains: string[];
  tvl_usd: number;
  change_7d: number | null;
  mcap_usd: number | null;
  listed_at: string | null;
  gecko_id: string | null;
  symbol: string | null;
}

export interface Snapshot {
  as_of: string;
  source: string;
  floor_usd: number;
  protocols: Protocol[];
  watchlist: string[];
}

export interface BoardRow {
  slug: string;
  name: string;
  rank: number;
  implied_value_usd: number;
  farm_steps: string[];
  category: string | null;
  chains: string[];
  tvl_usd: number;
  change_7d: number | null;
  multiple: number;
  multiple_peers: number;
  days_no_token: number | null;
  listed_at: string | null;
  watchlist: boolean;
  token_status: string;
}

export interface CategoryMultiple {
  multiple: number;
  peers: number;
  fallback?: boolean;
}

export interface Multiples {
  byCategory: Record<string, CategoryMultiple>;
  global: CategoryMultiple;
}

export function isPreToken(p: Protocol): boolean {
  return p.mcap_usd === null && p.gecko_id === null && p.symbol === null;
}

// The watchlist rule, applied to board candidates with only the snapshot's
// own ten fields (parentProtocol is not one of them): a wrapped, staked or
// bridged product of a token that already trades is not a launch candidate,
// even though its record shows no token. Without this, WBTC, Coinbase
// Bridge, USDT0 and the like would top the board on TVL alone.
const EXCLUDED_CATEGORIES = new Set([
  "Bridge",
  "Canonical Bridge",
  "Liquid Staking",
  "Liquid Restaking",
  "Restaked BTC",
  "CEX",
]);
const EXCHANGE_PREFIXES = [
  "Binance",
  "Coinbase",
  "Bybit",
  "Kraken",
  "Bitget",
  "OKX",
  "Bitfinex",
  "Gemini",
];
const VERSION_SUFFIX = /\s+(V\d+|v\d+|\d+\.\d+.*)$/;
const WRAPPED_WORD = /\b(wrapped|staked|staking)\b/i;

export function isRadarEligible(p: Protocol): boolean {
  if (p.category !== null && EXCLUDED_CATEGORIES.has(p.category)) return false;
  if (VERSION_SUFFIX.test(p.name)) return false;
  if (WRAPPED_WORD.test(p.name)) return false;
  if (EXCHANGE_PREFIXES.some((e) => p.name.startsWith(e))) return false;
  return true;
}

export function median(values: number[]): number {
  const xs = values.slice().sort((a, b) => a - b);
  if (xs.length === 0) return 0;
  const mid = Math.floor(xs.length / 2);
  return xs.length % 2 === 1 ? xs[mid] : (xs[mid - 1] + xs[mid]) / 2;
}

/** Category peer multiples from protocols whose token already trades:
 *  median(mcap / tvl) per category (needs >= 3 traded peers), else the
 *  global median across all traded protocols. This is the comparables
 *  base of the implied value; it separates traded from pre-token rows. */
export function categoryMultiples(protocols: Protocol[]): Multiples {
  const byCat: Record<string, number[]> = {};
  const all: number[] = [];
  for (const p of protocols) {
    if (isPreToken(p)) continue;
    if (!p.mcap_usd || p.mcap_usd <= 0 || !p.tvl_usd || p.tvl_usd <= 0) continue;
    const ratio = p.mcap_usd / p.tvl_usd;
    if (!Number.isFinite(ratio) || ratio <= 0) continue;
    all.push(ratio);
    const cat = p.category ?? "Uncategorised";
    if (!byCat[cat]) byCat[cat] = [];
    byCat[cat].push(ratio);
  }
  const global: CategoryMultiple = { multiple: median(all), peers: all.length };
  const byCategory: Record<string, CategoryMultiple> = {};
  for (const cat of Object.keys(byCat)) {
    const peers = byCat[cat];
    byCategory[cat] =
      peers.length >= 3
        ? { multiple: median(peers), peers: peers.length }
        : { multiple: global.multiple, peers: global.peers, fallback: true };
  }
  return { byCategory, global };
}

export function daysSince(listedAt: string | null, asOf: string): number | null {
  if (!listedAt) return null;
  const start = Date.parse(listedAt + "T00:00:00Z");
  const end = Date.parse(asOf + "T00:00:00Z");
  if (!Number.isFinite(start) || !Number.isFinite(end)) return null;
  return Math.max(0, Math.floor((end - start) / 86400000));
}

function clamp(x: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, x));
}

/** 7-day TVL growth factor: neutral at 0%, +35% at +100% a week, -10.5% at -30%. */
export function growthFactor(change7d: number | null): number {
  if (change7d === null || !Number.isFinite(change7d)) return 1;
  return 1 + clamp(change7d / 100, -0.3, 1.0) * 0.35;
}

/** Maturity factor: how long the protocol has run with no token recorded.
 *  0.85 at listing, rising to 1.00 after ~3 years of un-tokenised operation. */
export function maturityFactor(days: number | null): number {
  if (days === null) return 1;
  return 0.85 + 0.15 * Math.min(1, days / 1095);
}

/** Chain-diversity factor: +3% per extra chain, capped at +12%. */
export function chainFactor(chainCount: number): number {
  return 1 + 0.03 * Math.min(Math.max(chainCount - 1, 0), 4);
}

export function multipleFor(p: Protocol, multiples: Multiples): CategoryMultiple {
  const cat = p.category ?? "Uncategorised";
  return multiples.byCategory[cat] ?? multiples.global;
}

/** Implied value: TVL x category peer multiple x growth x maturity x chains.
 *  A claim about what a token would be worth if the protocol's record
 *  stayed as it is — not a prediction that a token will be issued. */
export function impliedValue(p: Protocol, multiples: Multiples, asOf: string): number {
  const m = multipleFor(p, multiples);
  const days = daysSince(p.listed_at, asOf);
  const value =
    p.tvl_usd *
    m.multiple *
    growthFactor(p.change_7d) *
    maturityFactor(days) *
    chainFactor(p.chains.length);
  return Math.max(1, Math.round(value));
}

// ---- farm plans -----------------------------------------------------------

const GAS_USD: Record<string, number> = {
  Ethereum: 4.0,
  Arbitrum: 0.3,
  Base: 0.1,
  Optimism: 0.15,
  Solana: 0.02,
  "BNB Chain": 0.3,
  Binance: 0.3,
  Polygon: 0.05,
  Avalanche: 0.4,
  Sui: 0.05,
  Aptos: 0.05,
  zkSync: 0.25,
  "zkSync Era": 0.25,
  Linea: 0.2,
  Scroll: 0.2,
  Blast: 0.15,
  Mode: 0.1,
  Sonic: 0.1,
  Berachain: 0.1,
  Hyperliquid: 0.05,
  Tron: 0.5,
  Fantom: 0.1,
  Gnosis: 0.2,
};

function gasFor(chain: string): number {
  return GAS_USD[chain] ?? 0.5;
}

function money(n: number): string {
  return "$" + n.toFixed(n < 1 ? 2 : 0);
}

// Category-specific core actions: [verb phrase for step 3, second action for step 4]
function coreActions(category: string | null): [string, string] {
  switch (category) {
    case "Lending":
      return [
        "supply {amt} of a stablecoin to the lending market",
        "borrow a small amount against the supplied collateral",
      ];
    case "Dexs":
      return [
        "swap {amt} between two assets the protocol lists",
        "add {amt} as liquidity to one of its pools",
      ];
    case "Yield":
    case "Yield Aggregator":
      return [
        "deposit {amt} into the protocol's highest-TVL vault",
        "deposit a second, smaller amount into a different vault",
      ];
    case "Derivatives":
      return [
        "open a small {amt} perpetual or options position",
        "close half the position and re-open it after a day",
      ];
    case "CDP":
    case "CDP Manager":
      return [
        "lock {amt} of collateral and mint the protocol's stablecoin",
        "repay part of the minted stablecoin and re-mint it",
      ];
    case "Risk Curators":
      return [
        "deposit {amt} into a curator-managed vault",
        "allocate a smaller amount to a second curator's vault",
      ];
    case "Onchain Capital Allocator":
      return [
        "allocate {amt} to the protocol's highest-TVL strategy",
        "allocate a smaller amount to a second strategy",
      ];
    case "Collateral Markets":
      return [
        "supply {amt} of collateral to a market",
        "borrow a small amount against the supplied collateral",
      ];
    case "Basis Trading":
      return [
        "open a {amt} basis position through the protocol",
        "close half of the position and re-open it after a day",
      ];
    case "Liquidity Manager":
      return [
        "deposit {amt} into a managed liquidity position",
        "adjust the position's range once after a day",
      ];
    case "Leveraged Farming":
      return [
        "open a {amt} leveraged farming position",
        "reduce the leverage by half after a day",
      ];
    case "Liquid Staking":
    case "Liquid Restaking":
    case "Staking Pool":
      return [
        "stake {amt} through the protocol and hold the receipt token",
        "use the receipt token once in a supported DeFi pool",
      ];
    case "Bridge":
    case "Canonical Bridge":
    case "Cross Chain Bridge":
      return [
        "bridge {amt} to another chain the protocol supports",
        "bridge a second, smaller amount back the other way",
      ];
    case "RWA":
      return [
        "buy {amt} of the protocol's tokenised real-world asset",
        "hold the position and claim any yield it distributes",
      ];
    case "Perpetuals":
      return [
        "open a small {amt} perpetual position with low leverage",
        "close half the position and re-open it after a day",
      ];
    case "Options":
      return [
        "buy a small {amt} option on the protocol",
        "sell or exercise the option before expiry",
      ];
    case "Prediction Market":
      return [
        "place a {amt} trade on one of the protocol's markets",
        "place a second trade on a different market outcome",
      ];
    case "NFT Marketplace":
    case "NFT Lending":
      return [
        "list or buy an item worth about {amt} on the protocol",
        "complete a second transaction on a different collection",
      ];
    default:
      return [
        "use the protocol's main feature with {amt}",
        "use a second feature of the protocol with a smaller amount",
      ];
  }
}

function fmtPct(x: number | null): string {
  if (x === null || !Number.isFinite(x)) return "unreported";
  return (x >= 0 ? "+" : "") + x.toFixed(1) + "%";
}

function fmtUsd(n: number): string {
  if (n >= 1e9) return "$" + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return "$" + (n / 1e3).toFixed(1) + "K";
  return "$" + Math.round(n);
}

/** 7 concrete farm steps with costs and times. Nothing here claims an
 *  airdrop, a launch date, funding or revenue: the protocol records no
 *  token, so the plan farms usage of the protocol itself. */
export function farmSteps(p: Protocol, implied: number, asOf: string): string[] {
  const chain = p.chains.length > 0 ? p.chains[0] : "Ethereum";
  const gas = gasFor(chain);
  const trial = implied >= 5e8 ? 500 : implied >= 1e8 ? 250 : 100;
  const amt = money(trial);
  const [act1, act2] = coreActions(p.category);
  const a1 = act1.replace("{amt}", amt);
  const a2 = act2.replace("{amt}", money(Math.max(25, Math.round(trial / 2))));
  const days = daysSince(p.listed_at, asOf);
  const age =
    days === null
      ? "an unreported listing date"
      : days >= 365
        ? "about " + Math.floor(days / 365) + (Math.floor(days / 365) === 1 ? " year" : " years") + " listed"
        : "about " + days + " days listed";
  return [
    "Check " + p.name + "'s official site and docs (linked from DefiLlama) and confirm it records no token: TVL " + fmtUsd(p.tvl_usd) + ", 7-day change " + fmtPct(p.change_7d) + ", " + age + ". No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with " + amt + " plus about " + money(gas * 4) + " for gas on " + chain + ", and store the seed phrase offline. Time: about 20 minutes. Cost: about " + money(gas) + " in gas.",
    "Make a first real transaction: " + a1 + " on " + chain + " through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about " + money(gas) + " in gas plus the " + amt + " position.",
    "Use a second feature a day later: " + a2 + " on " + chain + ", so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about " + money(gas) + " in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount (" + money(Math.max(10, Math.round(trial / 10))) + " each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about " + money(gas) + " in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the " + fmtUsd(p.tvl_usd) + " TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about " + money(gas * 2) + " in gas to withdraw.",
  ];
}

// ---- board ----------------------------------------------------------------

export const BOARD_SIZE = 200;

export function buildBoard(snapshot: Snapshot, size = BOARD_SIZE): {
  rows: BoardRow[];
  multiples: Multiples;
  meta: Record<string, unknown>;
} {
  const multiples = categoryMultiples(snapshot.protocols);
  const watchSet = new Set(snapshot.watchlist);
  const candidates = snapshot.protocols.filter((p) => isPreToken(p) && isRadarEligible(p));
  const excluded = snapshot.protocols.filter((p) => isPreToken(p) && !isRadarEligible(p)).length;
  const scored = candidates.map((p) => {
    const value = impliedValue(p, multiples, snapshot.as_of);
    const m = multipleFor(p, multiples);
    return { p, value, multiple: m.multiple, peers: m.peers };
  });
  scored.sort((a, b) => b.value - a.value || (a.p.slug < b.p.slug ? -1 : 1));
  let picked = scored.slice(0, size);
  // Guarantee full watchlist coverage even if a watchlist row falls outside the top N.
  const pickedSlugs = new Set(picked.map((s) => s.p.slug));
  for (const slug of snapshot.watchlist) {
    if (!pickedSlugs.has(slug)) {
      const hit = scored.find((s) => s.p.slug === slug);
      if (hit) {
        picked.push(hit);
        pickedSlugs.add(slug);
      }
    }
  }
  picked.sort((a, b) => b.value - a.value || (a.p.slug < b.p.slug ? -1 : 1));
  const rows: BoardRow[] = picked.map((s, i) => ({
    slug: s.p.slug,
    name: s.p.name,
    rank: i + 1,
    implied_value_usd: s.value,
    farm_steps: farmSteps(s.p, s.value, snapshot.as_of),
    category: s.p.category,
    chains: s.p.chains,
    tvl_usd: s.p.tvl_usd,
    change_7d: s.p.change_7d,
    multiple: s.multiple,
    multiple_peers: s.peers,
    days_no_token: daysSince(s.p.listed_at, snapshot.as_of),
    listed_at: s.p.listed_at,
    watchlist: watchSet.has(s.p.slug),
    token_status: "no token recorded",
  }));
  const meta = {
    as_of: snapshot.as_of,
    source: snapshot.source,
    floor_usd: snapshot.floor_usd,
    model: "radar-1",
    model_note:
      "implied_value_usd = tvl_usd x category peer multiple (median mcap/tvl of traded protocols in the same category, global median fallback) x 7-day growth factor x maturity factor (days listed with no token recorded) x chain-diversity factor. Board rows are pre-token protocols that also pass the watchlist's own eligibility rule (no Bridge / Liquid Staking / CEX category, no wrapped/staked/staking name, no version suffix, no exchange prefix), so wrapped or bridged products of tokens that already trade never rank. A protocol records no token, never that it has none.",
    global_multiple: multiples.global.multiple,
    global_multiple_peers: multiples.global.peers,
    board_rows: rows.length,
    watchlist_total: snapshot.watchlist.length,
    watchlist_covered: rows.filter((r) => r.watchlist).length,
    pre_token_total: candidates.length,
    pre_token_excluded_wrapped_staked_bridge: excluded,
    snapshot_protocols: snapshot.protocols.length,
    // Traded protocols, kept apart from the ranked board: the market's own
    // values, shown as the comparables the multiples come from. Only sane
    // comparables: no bridges, no versioned pools, mcap/TVL within 0.02–3x.
    live_peers: snapshot.protocols
      .filter(
        (p) =>
          !isPreToken(p) &&
          p.category !== "CEX" &&
          p.category !== "Bridge" &&
          p.category !== "Canonical Bridge" &&
          p.mcap_usd !== null &&
          p.mcap_usd >= 10_000_000 &&
          p.mcap_usd / p.tvl_usd >= 0.02 &&
          p.mcap_usd / p.tvl_usd <= 3 &&
          !VERSION_SUFFIX.test(p.name),
      )
      .sort((a, b) => (b.mcap_usd as number) - (a.mcap_usd as number) || b.tvl_usd - a.tvl_usd)
      .slice(0, 12)
      .map((p) => ({
        slug: p.slug,
        name: p.name,
        category: p.category,
        tvl_usd: p.tvl_usd,
        mcap_usd: p.mcap_usd,
        multiple: (p.mcap_usd as number) / p.tvl_usd,
      })),
  };
  return { rows, multiples, meta };
}
