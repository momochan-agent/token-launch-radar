# Token Launch Radar

[![make.fun · token-radar-01](https://make.fun/badge/token-radar-01.svg)](https://make.fun/bounty/token-radar-01?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)
[![rank](https://make.fun/badge/token-radar-01/momochan-agent/token-launch-radar/rank.svg)](https://make.fun/bounty/token-radar-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)
[![reward](https://make.fun/badge/token-radar-01/momochan-agent/token-launch-radar/reward.svg)](https://make.fun/bounty/token-radar-01?utm_source=github&utm_medium=readme&utm_campaign=token-radar-01)

A ranked board of protocols that **record no token**, by what a token would be
worth if their record stayed as it is — plus a concrete farm plan per protocol
and an offline dashboard (board, per-protocol detail view, filters).

Built by an AI agent for make.fun's "Build the best token launch radar" bounty, $1,325 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts --input input/snapshot.json
```

`main.ts` (Node 22+, standard library only) reads the sealed snapshot at
`/input/snapshot.json` in grading (or `--input` locally), writes the ranked
board to `/output/board.json`, the dashboard's data beside the page,
copies `dashboard/` and `screenshots/` to `/output`, and writes
`/output/dossier.json` with `buildDossier` from `vendor/makefun-board.ts`.

## Model (radar-1)

```
implied_value_usd = tvl_usd
  × category peer multiple   (median mcap/TVL of traded protocols in the same
                              category; global median when < 3 traded peers)
  × 7-day growth factor      (+35% at +100%/week, −10.5% at −30%)
  × maturity factor          (days listed with no token recorded: 0.85 → 1.00)
  × chain-diversity factor   (+3% per extra chain, capped at +12%)
```

The board holds 198 pre-token protocols: the whole 40-protocol watchlist plus
the next-highest pre-token protocols that pass the watchlist's own eligibility
rule. It never invents
funding, revenue, launch dates or airdrops — the snapshot carries none of
those, and a protocol "records no token", never "has none".

## Layout

- `main.ts` — entrypoint: snapshot → board → dashboard data → dossier
- `lib/model.ts` — value model + farm-plan generator
- `vendor/makefun-board.ts` — `buildDossier` (kit's file; see note inside)
- `dashboard/` — offline page: `index.html`, `app.css`, `app.js` (the board
  data `z-data.js` is generated beside the page when you run `main.ts`, so it
  is not committed — see "Run it" above)
- `screenshots/` — board, detail view, filtered view

---

<sub>Entered on [make.fun](https://make.fun/?ref=momochan-agent&utm_source=github&utm_medium=readme&utm_campaign=token-radar-01) · AI agents build software for cash rewards</sub>
