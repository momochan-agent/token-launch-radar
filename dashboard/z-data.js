window.BOARD = {
 "meta": {
  "as_of": "2026-11-14",
  "source": "DefiLlama https://api.llama.fi/protocols, fetched 2026-11-14T01:18:33.201Z",
  "floor_usd": 50000000,
  "model": "radar-1",
  "model_note": "implied_value_usd = tvl_usd x category peer multiple (median mcap/tvl of traded protocols in the same category, global median fallback) x 7-day growth factor x maturity factor (days listed with no token recorded) x chain-diversity factor. Board rows are pre-token protocols that also pass the watchlist's own eligibility rule (no Bridge / Liquid Staking / CEX category, no wrapped/staked/staking name, no version suffix, no exchange prefix), so wrapped or bridged products of tokens that already trade never rank. A protocol records no token, never that it has none.",
  "global_multiple": 0.21380325885644053,
  "global_multiple_peers": 128,
  "board_rows": 198,
  "watchlist_total": 40,
  "watchlist_covered": 40,
  "pre_token_total": 198,
  "pre_token_excluded_wrapped_staked_bridge": 144,
  "snapshot_protocols": 758,
  "live_peers": [
   {
    "slug": "falcon-finance",
    "name": "Falcon Finance",
    "category": "Basis Trading",
    "tvl_usd": 1557707205,
    "mcap_usd": 318146200,
    "multiple": 0.20424005164693323
   },
   {
    "slug": "cap",
    "name": "cap",
    "category": "Lending",
    "tvl_usd": 159772077,
    "mcap_usd": 166714858,
    "multiple": 1.0434542826904603
   },
   {
    "slug": "eigencloud",
    "name": "EigenCloud",
    "category": "Restaking",
    "tvl_usd": 4903633832,
    "mcap_usd": 155971221,
    "multiple": 0.03180727320669159
   },
   {
    "slug": "convex-finance",
    "name": "Convex Finance",
    "category": "Yield",
    "tvl_usd": 461947766,
    "mcap_usd": 148210942,
    "multiple": 0.32083917903393433
   },
   {
    "slug": "zama",
    "name": "Zama",
    "category": "Privacy",
    "tvl_usd": 90279448,
    "mcap_usd": 147586329,
    "multiple": 1.6347721687443193
   },
   {
    "slug": "railgun",
    "name": "Railgun",
    "category": "Privacy",
    "tvl_usd": 107702928,
    "mcap_usd": 104378062,
    "multiple": 0.9691292886670639
   },
   {
    "slug": "reserve-protocol",
    "name": "Reserve Protocol",
    "category": "Indexes",
    "tvl_usd": 43278603,
    "mcap_usd": 89351713,
    "multiple": 2.064570175705533
   },
   {
    "slug": "chutes",
    "name": "Chutes",
    "category": "Decentralized AI",
    "tvl_usd": 40658464,
    "mcap_usd": 83774453,
    "multiple": 2.0604431343004004
   },
   {
    "slug": "usd-ai",
    "name": "USD AI",
    "category": "RWA",
    "tvl_usd": 157258085,
    "mcap_usd": 63408224,
    "multiple": 0.4032112180432567
   },
   {
    "slug": "sushiswap",
    "name": "SushiSwap",
    "category": "Dexs",
    "tvl_usd": 31730814,
    "mcap_usd": 48362138,
    "multiple": 1.5241379562465684
   },
   {
    "slug": "re",
    "name": "Re",
    "category": "RWA",
    "tvl_usd": 487561390,
    "mcap_usd": 39968695,
    "multiple": 0.08197674348249766
   },
   {
    "slug": "sdai",
    "name": "sDAI",
    "category": "Yield",
    "tvl_usd": 37353080,
    "mcap_usd": 37389910,
    "multiple": 1.0009859963355097
   }
  ]
 },
 "multiples": {
  "global": {
   "multiple": 0.21380325885644053,
   "peers": 128
  },
  "byCategory": {
   "Lending": {
    "multiple": 0.13239465563049407,
    "peers": 15
   },
   "Cross Chain Bridge": {
    "multiple": 1.2204617199899799,
    "peers": 4
   },
   "Liquidity Manager": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Liquid Staking": {
    "multiple": 0.0405926473657955,
    "peers": 9
   },
   "Collateral Management": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Risk Curators": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Dexs": {
    "multiple": 0.3424347567468315,
    "peers": 11
   },
   "Chain": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Yield": {
    "multiple": 0.1914144905351388,
    "peers": 9
   },
   "Canonical Bridge": {
    "multiple": 0.7463925400668032,
    "peers": 8
   },
   "Restaking": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "CEX": {
    "multiple": 0.07483070804051081,
    "peers": 9
   },
   "Yield Aggregator": {
    "multiple": 0.1509594423418544,
    "peers": 4
   },
   "Basis Trading": {
    "multiple": 0.6544182484481614,
    "peers": 7
   },
   "NFT Marketplace": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "RWA": {
    "multiple": 0.27478004488804697,
    "peers": 9
   },
   "Bridge": {
    "multiple": 0.5567308746044083,
    "peers": 6
   },
   "Decentralized AI": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Onchain Capital Allocator": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Indexes": {
    "multiple": 0.14767790358555363,
    "peers": 3
   },
   "Token Locker": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "CDP": {
    "multiple": 0.16870131101842134,
    "peers": 3
   },
   "Dual-Token Stablecoin": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Derivatives": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Options": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Liquid Restaking": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "AI Agents": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Staking Pool": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Launchpad": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Privacy": {
    "multiple": 0.9691292886670639,
    "peers": 3
   },
   "Prediction Market": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Payments": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "DOR": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   },
   "Leveraged Farming": {
    "multiple": 0.21380325885644053,
    "peers": 128,
    "fallback": true
   }
  }
 },
 "rows": [
  {
   "slug": "steakhouse-financial",
   "name": "Steakhouse Financial",
   "rank": 1,
   "implied_value_usd": 604920807,
   "farm_steps": [
    "Check Steakhouse Financial's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $2.75B, 7-day change -2.2%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $500 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: deposit $500 into a curator-managed vault on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $500 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($50 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $2.75B TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Base",
    "Ethereum",
    "Robinhood Chain",
    "Arbitrum",
    "Solana",
    "Monad",
    "Arc",
    "Katana",
    "Polygon",
    "Unichain",
    "Corn"
   ],
   "tvl_usd": 2753981495,
   "change_7d": -2.1935,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "sentora-curator",
   "name": "Sentora Curator",
   "rank": 2,
   "implied_value_usd": 586898767,
   "farm_steps": [
    "Check Sentora Curator's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $2.76B, 7-day change +2.4%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $500 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $500 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $500 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($50 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $2.76B TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Ink",
    "Solana",
    "Tempo"
   ],
   "tvl_usd": 2757585593,
   "change_7d": 2.3672,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 407,
   "listed_at": "2025-10-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "gauntlet",
   "name": "Gauntlet",
   "rank": 3,
   "implied_value_usd": 356124530,
   "farm_steps": [
    "Check Gauntlet's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $1.58B, 7-day change +5.6%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $250 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: deposit $250 into a curator-managed vault on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $250 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($25 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $1.58B TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Base",
    "Binance",
    "Ethereum",
    "Arbitrum",
    "Stable",
    "Morph",
    "Solana",
    "Hyperliquid L1",
    "Polygon",
    "Optimism",
    "Unichain",
    "Katana",
    "Arc",
    "Tempo"
   ],
   "tvl_usd": 1577685462,
   "change_7d": 5.645,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "veda",
   "name": "Veda",
   "rank": 4,
   "implied_value_usd": 340457029,
   "farm_steps": [
    "Check Veda's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $1.56B, 7-day change -8.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $250 plus about $2 for gas on Ink, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: allocate $250 to the protocol's highest-TVL strategy on Ink through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $250 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Ink, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($25 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $1.56B TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Ink",
    "Ethereum",
    "Optimism",
    "Monad",
    "Plasma",
    "Hyperliquid L1",
    "Arbitrum",
    "Base",
    "Berachain",
    "Sonic",
    "Binance",
    "BOB",
    "Scroll"
   ],
   "tvl_usd": 1563415482,
   "change_7d": -8.2898,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 632,
   "listed_at": "2025-02-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "usdd",
   "name": "USDD",
   "rank": 5,
   "implied_value_usd": 174551456,
   "farm_steps": [
    "Check USDD's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $1.06B, 7-day change -2.8%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $250 plus about $2 for gas on Tron, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: lock $250 of collateral and mint the protocol's stablecoin on Tron through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $250 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Tron, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($25 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $1.06B TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Tron",
    "Ethereum",
    "Binance"
   ],
   "tvl_usd": 1055793606,
   "change_7d": -2.8062,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": 611,
   "listed_at": "2025-03-13",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "bitfi-basis",
   "name": "BitFi Basis",
   "rank": 6,
   "implied_value_usd": 142370476,
   "farm_steps": [
    "Check BitFi Basis's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $214.9M, 7-day change -10.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $250 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: open a $250 basis position through the protocol on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $250 position.",
    "Use a second feature a day later: close half of the position and re-open it after a day on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($25 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $214.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Basis Trading",
   "chains": [
    "Binance",
    "Ethereum",
    "Base",
    "Pharos",
    "Hemi",
    "Bitlayer",
    "CORE"
   ],
   "tvl_usd": 214934379,
   "change_7d": -10.2604,
   "multiple": 0.6544182484481614,
   "multiple_peers": 7,
   "days_no_token": 638,
   "listed_at": "2025-02-14",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "upshift",
   "name": "Upshift",
   "rank": 7,
   "implied_value_usd": 116500782,
   "farm_steps": [
    "Check Upshift's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $499.1M, 7-day change +8.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $250 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: allocate $250 to the protocol's highest-TVL strategy on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $250 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($25 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $499.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Ethereum",
    "Stellar",
    "Flare",
    "Monad",
    "Hyperliquid L1",
    "Avalanche",
    "Solana",
    "Fluent",
    "Base",
    "Citrea",
    "Sui",
    "Plasma",
    "Binance",
    "Mezo",
    "Ink"
   ],
   "tvl_usd": 499083733,
   "change_7d": 8.3117,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 710,
   "listed_at": "2024-12-04",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "bittensor-dtao",
   "name": "Bittensor dTAO",
   "rank": 8,
   "implied_value_usd": 107902235,
   "farm_steps": [
    "Check Bittensor dTAO's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $376.0M, 7-day change -6.6%, about 56 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $250 plus about $2 for gas on Bittensor, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $250 between two assets the protocol lists on Bittensor through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $250 position.",
    "Use a second feature a day later: add $125 as liquidity to one of its pools on Bittensor, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($25 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $376.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Bittensor"
   ],
   "tvl_usd": 376026255,
   "change_7d": -6.5592,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 56,
   "listed_at": "2026-09-19",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "nonce-capital",
   "name": "Nonce Capital",
   "rank": 9,
   "implied_value_usd": 93568417,
   "farm_steps": [
    "Check Nonce Capital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $513.8M, 7-day change -9.7%, about 45 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $513.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Optimism"
   ],
   "tvl_usd": 513783671,
   "change_7d": -9.7377,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 45,
   "listed_at": "2026-09-30",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "onre",
   "name": "OnRe",
   "rank": 10,
   "implied_value_usd": 77846787,
   "farm_steps": [
    "Check OnRe's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $308.9M, 7-day change +0.1%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $308.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 308882355,
   "change_7d": 0.1082,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 488,
   "listed_at": "2025-07-14",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "circle-gateway",
   "name": "Circle Gateway",
   "rank": 11,
   "implied_value_usd": 69132372,
   "farm_steps": [
    "Check Circle Gateway's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $65.3M, 7-day change -8.8%, about 137 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: bridge $100 to another chain the protocol supports on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: bridge a second, smaller amount back the other way on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $65.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Cross Chain Bridge",
   "chains": [
    "Ethereum",
    "Arc"
   ],
   "tvl_usd": 65310531,
   "change_7d": -8.7872,
   "multiple": 1.2204617199899799,
   "multiple_peers": 4,
   "days_no_token": 137,
   "listed_at": "2026-06-30",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "polymarket-international",
   "name": "Polymarket International",
   "rank": 12,
   "implied_value_usd": 68199221,
   "farm_steps": [
    "Check Polymarket International's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $320.2M, 7-day change -1.1%, about 5 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.20 for gas on Polygon, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.05 in gas.",
    "Make a first real transaction: place a $100 trade on one of the protocol's markets on Polygon through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.05 in gas plus the $100 position.",
    "Use a second feature a day later: place a second trade on a different market outcome on Polygon, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.05 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.05 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $320.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.10 in gas to withdraw."
   ],
   "category": "Prediction Market",
   "chains": [
    "Polygon"
   ],
   "tvl_usd": 320193439,
   "change_7d": -1.0817,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 1845,
   "listed_at": "2021-10-26",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "opentrade",
   "name": "OpenTrade",
   "rank": 13,
   "implied_value_usd": 66229510,
   "farm_steps": [
    "Check OpenTrade's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $241.5M, 7-day change -1.6%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Avalanche, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.40 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Avalanche through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.40 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Avalanche, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.40 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.40 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $241.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.80 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Avalanche",
    "Ethereum",
    "Plume Mainnet"
   ],
   "tvl_usd": 241501527,
   "change_7d": -1.642,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 708,
   "listed_at": "2024-12-06",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "plume-vaults",
   "name": "Plume Vaults",
   "rank": 14,
   "implied_value_usd": 61347199,
   "farm_steps": [
    "Check Plume Vaults's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $211.5M, 7-day change -3.1%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $211.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Ethereum",
    "Plume Mainnet",
    "Solana",
    "Binance",
    "Avalanche"
   ],
   "tvl_usd": 211537977,
   "change_7d": -3.081,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 749,
   "listed_at": "2024-10-26",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "rockawayx",
   "name": "RockawayX",
   "rank": 15,
   "implied_value_usd": 61222206,
   "farm_steps": [
    "Check RockawayX's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $292.5M, 7-day change -2.5%, about 233 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $292.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Solana",
    "Pharos",
    "Monad",
    "Sei",
    "Base",
    "Binance",
    "Citrea",
    "Etherlink",
    "Plume Mainnet"
   ],
   "tvl_usd": 292506628,
   "change_7d": -2.5459,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 233,
   "listed_at": "2026-03-26",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "defi-saver-asset-management",
   "name": "Defi Saver Asset Management",
   "rank": 16,
   "implied_value_usd": 59992265,
   "farm_steps": [
    "Check Defi Saver Asset Management's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $276.4M, 7-day change -19.6%, an unreported listing date. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $276.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "CDP Manager",
   "chains": [
    "Ethereum",
    "Arbitrum",
    "Optimism",
    "Base"
   ],
   "tvl_usd": 276366296,
   "change_7d": -19.5797,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": null,
   "listed_at": null,
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "symbiotic",
   "name": "Symbiotic",
   "rank": 17,
   "implied_value_usd": 50514557,
   "farm_steps": [
    "Check Symbiotic's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $253.9M, 7-day change -12.0%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: supply $100 of collateral to a market on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $253.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Collateral Markets",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 253923299,
   "change_7d": -12.0318,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 886,
   "listed_at": "2024-06-11",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "r25",
   "name": "R25",
   "rank": 18,
   "implied_value_usd": 49263221,
   "farm_steps": [
    "Check R25's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $198.2M, 7-day change +0.3%, about 199 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Pharos, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Pharos through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Pharos, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $198.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Pharos",
    "Sui"
   ],
   "tvl_usd": 198206607,
   "change_7d": 0.2987,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 199,
   "listed_at": "2026-04-29",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "hyperithm",
   "name": "Hyperithm",
   "rank": 19,
   "implied_value_usd": 48309023,
   "farm_steps": [
    "Check Hyperithm's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $221.6M, 7-day change -4.4%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Monad, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Monad through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Monad, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $221.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Monad",
    "Ethereum",
    "Arbitrum",
    "Plasma",
    "Solana",
    "Hyperliquid L1",
    "Katana",
    "Stable",
    "XRPL EVM",
    "Binance"
   ],
   "tvl_usd": 221638535,
   "change_7d": -4.375,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "mellow-core",
   "name": "Mellow Core",
   "rank": 20,
   "implied_value_usd": 48070502,
   "farm_steps": [
    "Check Mellow Core's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $232.6M, 7-day change -8.5%, about 290 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $232.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Ethereum",
    "Robinhood Chain",
    "RSK",
    "Mezo",
    "Monad"
   ],
   "tvl_usd": 232572763,
   "change_7d": -8.5335,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 290,
   "listed_at": "2026-01-28",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "cian-yield-layer",
   "name": "CIAN Yield Layer",
   "rank": 21,
   "implied_value_usd": 45728746,
   "farm_steps": [
    "Check CIAN Yield Layer's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $280.3M, 7-day change +4.7%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $280.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Ethereum",
    "Mantle",
    "Arbitrum",
    "Optimism",
    "Base",
    "Binance",
    "Scroll"
   ],
   "tvl_usd": 280281384,
   "change_7d": 4.6717,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 726,
   "listed_at": "2024-11-18",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "lightning-network",
   "name": "Lightning Network",
   "rank": 22,
   "implied_value_usd": 44925833,
   "farm_steps": [
    "Check Lightning Network's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $217.9M, 7-day change -10.1%, an unreported listing date. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Bitcoin, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Bitcoin through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Bitcoin, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $217.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Payments",
   "chains": [
    "Bitcoin"
   ],
   "tvl_usd": 217862346,
   "change_7d": -10.1445,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": null,
   "listed_at": null,
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "tori-finance",
   "name": "Tori Finance",
   "rank": 23,
   "implied_value_usd": 44756818,
   "farm_steps": [
    "Check Tori Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $77.4M, 7-day change +4.6%, about 143 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: open a $100 basis position through the protocol on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: close half of the position and re-open it after a day on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $77.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Basis Trading",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 77392441,
   "change_7d": 4.6366,
   "multiple": 0.6544182484481614,
   "multiple_peers": 7,
   "days_no_token": 143,
   "listed_at": "2026-06-24",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "k3-capital",
   "name": "K3 Capital",
   "rank": 24,
   "implied_value_usd": 44544816,
   "farm_steps": [
    "Check K3 Capital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $207.7M, 7-day change -8.9%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Monad, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Monad through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Monad, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $207.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Monad",
    "Ethereum",
    "Optimism",
    "Hyperliquid L1",
    "Plasma",
    "Arbitrum",
    "Binance",
    "Unichain",
    "Avalanche"
   ],
   "tvl_usd": 207711162,
   "change_7d": -8.9024,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "hive-protocol",
   "name": "Hive Protocol",
   "rank": 25,
   "implied_value_usd": 40030289,
   "farm_steps": [
    "Check Hive Protocol's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $198.8M, 7-day change -10.2%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on BSquared, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on BSquared through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on BSquared, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $198.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Chain",
   "chains": [
    "BSquared"
   ],
   "tvl_usd": 198776765,
   "change_7d": -10.181,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 925,
   "listed_at": "2024-05-03",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "axis",
   "name": "Axis",
   "rank": 26,
   "implied_value_usd": 39882361,
   "farm_steps": [
    "Check Axis's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $70.1M, 7-day change +2.3%, about 86 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: open a $100 basis position through the protocol on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: close half of the position and re-open it after a day on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $70.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Basis Trading",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 70145354,
   "change_7d": 2.3316,
   "multiple": 0.6544182484481614,
   "multiple_peers": 7,
   "days_no_token": 86,
   "listed_at": "2026-08-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "clearstar",
   "name": "Clearstar",
   "rank": 27,
   "implied_value_usd": 34543932,
   "farm_steps": [
    "Check Clearstar's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $161.8M, 7-day change -10.1%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Flare, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Flare through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Flare, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $161.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Flare",
    "Base",
    "Ethereum",
    "Monad",
    "Hyperliquid L1",
    "Starknet",
    "Katana",
    "Arbitrum",
    "Hemi",
    "Unichain",
    "Polygon"
   ],
   "tvl_usd": 161773491,
   "change_7d": -10.0936,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "lagoon",
   "name": "Lagoon",
   "rank": 28,
   "implied_value_usd": 33822256,
   "farm_steps": [
    "Check Lagoon's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $151.3M, 7-day change -3.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $151.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Ethereum",
    "Arbitrum",
    "Base",
    "Binance",
    "Avalanche",
    "Plasma",
    "Hyperliquid L1",
    "TAC",
    "Hemi",
    "Linea",
    "Rayls",
    "Monad",
    "Robinhood Chain",
    "Optimism",
    "Katana",
    "Sonic",
    "Mantle",
    "Arc",
    "Berachain",
    "Flare",
    "Polygon",
    "Unichain",
    "World Chain"
   ],
   "tvl_usd": 151263522,
   "change_7d": -3.2955,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 691,
   "listed_at": "2024-12-23",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "b14g",
   "name": "b14g",
   "rank": 29,
   "implied_value_usd": 33534695,
   "farm_steps": [
    "Check b14g's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $173.9M, 7-day change -28.5%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Bitcoin, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Bitcoin through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Bitcoin, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $173.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Restaking",
   "chains": [
    "Bitcoin",
    "CORE",
    "Babylon Genesis"
   ],
   "tvl_usd": 173941404,
   "change_7d": -28.5327,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 694,
   "listed_at": "2024-12-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "theo-network-thusd",
   "name": "Theo Network thUSD",
   "rank": 30,
   "implied_value_usd": 32708895,
   "farm_steps": [
    "Check Theo Network thUSD's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $138.6M, 7-day change +0.0%, about 65 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $138.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 138588449,
   "change_7d": 0.0059,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 65,
   "listed_at": "2026-09-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "saturn",
   "name": "Saturn",
   "rank": 31,
   "implied_value_usd": 30695019,
   "farm_steps": [
    "Check Saturn's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $154.3M, 7-day change -0.7%, about 219 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $154.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Stablecoin Wrapper",
   "chains": [
    "Ethereum",
    "Monad",
    "Binance"
   ],
   "tvl_usd": 154313682,
   "change_7d": -0.7486,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 219,
   "listed_at": "2026-04-09",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "lofty",
   "name": "Lofty",
   "rank": 32,
   "implied_value_usd": 27792559,
   "farm_steps": [
    "Check Lofty's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $101.1M, 7-day change +0.0%, about 4 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Algorand, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Algorand through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Algorand, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $101.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Algorand"
   ],
   "tvl_usd": 101135900,
   "change_7d": 0.025,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 1563,
   "listed_at": "2022-08-04",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "galaxy-curation",
   "name": "Galaxy Curation",
   "rank": 33,
   "implied_value_usd": 26768642,
   "farm_steps": [
    "Check Galaxy Curation's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $130.0M, 7-day change +11.2%, about 177 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Arc, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Arc through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Arc, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $130.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Arc",
    "Ethereum",
    "Base"
   ],
   "tvl_usd": 129994276,
   "change_7d": 11.2334,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 177,
   "listed_at": "2026-05-21",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "figure-markets-exchange",
   "name": "Figure Markets Exchange",
   "rank": 34,
   "implied_value_usd": 25882869,
   "farm_steps": [
    "Check Figure Markets Exchange's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $131.3M, 7-day change +2.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Provenance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Provenance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Provenance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $131.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "OTC Marketplace",
   "chains": [
    "Provenance"
   ],
   "tvl_usd": 131265792,
   "change_7d": 2.284,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 474,
   "listed_at": "2025-07-28",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "valos",
   "name": "Valos",
   "rank": 35,
   "implied_value_usd": 25299442,
   "farm_steps": [
    "Check Valos's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $106.3M, 7-day change +0.1%, about 113 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Monad, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Monad through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Monad, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $106.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Monad"
   ],
   "tvl_usd": 106328133,
   "change_7d": 0.1453,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 113,
   "listed_at": "2026-07-24",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "ember",
   "name": "Ember",
   "rank": 36,
   "implied_value_usd": 24626962,
   "farm_steps": [
    "Check Ember's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $90.0M, 7-day change -6.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $90.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Ethereum",
    "Sui",
    "Base",
    "Pharos",
    "Monad",
    "Arbitrum"
   ],
   "tvl_usd": 90012351,
   "change_7d": -5.9593,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 423,
   "listed_at": "2025-09-17",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "figure-markets-prime",
   "name": "Figure Markets Prime",
   "rank": 37,
   "implied_value_usd": 24533051,
   "farm_steps": [
    "Check Figure Markets Prime's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $190.5M, 7-day change +18.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Provenance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Provenance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Provenance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $190.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Provenance"
   ],
   "tvl_usd": 190506995,
   "change_7d": 18.0338,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 474,
   "listed_at": "2025-07-28",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "aegis-yusd",
   "name": "Aegis YUSD",
   "rank": 38,
   "implied_value_usd": 21605844,
   "farm_steps": [
    "Check Aegis YUSD's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $34.5M, 7-day change +0.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: open a $100 basis position through the protocol on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: close half of the position and re-open it after a day on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $34.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Basis Trading",
   "chains": [
    "Ethereum",
    "Binance"
   ],
   "tvl_usd": 34465848,
   "change_7d": 0.0465,
   "multiple": 0.6544182484481614,
   "multiple_peers": 7,
   "days_no_token": 583,
   "listed_at": "2025-04-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "extended-perps",
   "name": "Extended Perps",
   "rank": 39,
   "implied_value_usd": 20059819,
   "farm_steps": [
    "Check Extended Perps's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $96.4M, 7-day change -4.9%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Arc, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Arc through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Arc, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $96.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Arc",
    "Ethereum",
    "Starknet"
   ],
   "tvl_usd": 96412875,
   "change_7d": -4.8674,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 613,
   "listed_at": "2025-03-11",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "armitage-by-wintermute",
   "name": "Armitage by Wintermute",
   "rank": 40,
   "implied_value_usd": 19735969,
   "farm_steps": [
    "Check Armitage by Wintermute's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $103.5M, 7-day change +5.8%, about 178 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $103.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 103480212,
   "change_7d": 5.7711,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 178,
   "listed_at": "2026-05-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "doppler-finance",
   "name": "Doppler Finance",
   "rank": 41,
   "implied_value_usd": 18286667,
   "farm_steps": [
    "Check Doppler Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $93.3M, 7-day change -14.5%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Ripple, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Ripple through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Ripple, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $93.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "CeDeFi",
   "chains": [
    "Ripple",
    "Ethereum"
   ],
   "tvl_usd": 93316487,
   "change_7d": -14.4873,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 638,
   "listed_at": "2025-02-14",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "avant-avusd",
   "name": "Avant avUSD",
   "rank": 42,
   "implied_value_usd": 17784926,
   "farm_steps": [
    "Check Avant avUSD's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $94.6M, 7-day change -14.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Avalanche, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.40 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Avalanche through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.40 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Avalanche, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.40 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.40 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $94.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.80 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Avalanche"
   ],
   "tvl_usd": 94636180,
   "change_7d": -13.9521,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 541,
   "listed_at": "2025-05-22",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "noble",
   "name": "Noble",
   "rank": 43,
   "implied_value_usd": 17429160,
   "farm_steps": [
    "Check Noble's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $83.0M, 7-day change -5.2%, an unreported listing date. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Noble, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Noble through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Noble, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $83.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Chain",
   "chains": [
    "Noble"
   ],
   "tvl_usd": 83040073,
   "change_7d": -5.2314,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": null,
   "listed_at": null,
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "drakewell",
   "name": "Drakewell",
   "rank": 44,
   "implied_value_usd": 16952161,
   "farm_steps": [
    "Check Drakewell's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $28.2M, 7-day change +3.3%, about 43 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Arbitrum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: open a $100 basis position through the protocol on Arbitrum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: close half of the position and re-open it after a day on Arbitrum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $28.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Basis Trading",
   "chains": [
    "Arbitrum",
    "Ethereum",
    "Aleo"
   ],
   "tvl_usd": 28230939,
   "change_7d": 3.2554,
   "multiple": 0.6544182484481614,
   "multiple_peers": 7,
   "days_no_token": 43,
   "listed_at": "2026-10-02",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "manta-cedefi",
   "name": "Manta CeDeFi",
   "rank": 45,
   "implied_value_usd": 16867930,
   "farm_steps": [
    "Check Manta CeDeFi's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $26.5M, 7-day change -0.7%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Manta, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: open a $100 basis position through the protocol on Manta through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: close half of the position and re-open it after a day on Manta, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $26.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Basis Trading",
   "chains": [
    "Manta"
   ],
   "tvl_usd": 26526263,
   "change_7d": -0.6679,
   "multiple": 0.6544182484481614,
   "multiple_peers": 7,
   "days_no_token": 905,
   "listed_at": "2024-05-23",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "liminal-basis",
   "name": "Liminal Basis",
   "rank": 46,
   "implied_value_usd": 16514114,
   "farm_steps": [
    "Check Liminal Basis's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $25.7M, 7-day change +21.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Hyperliquid L1, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: open a $100 basis position through the protocol on Hyperliquid L1 through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: close half of the position and re-open it after a day on Hyperliquid L1, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $25.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Basis Trading",
   "chains": [
    "Hyperliquid L1"
   ],
   "tvl_usd": 25662087,
   "change_7d": 21.2736,
   "multiple": 0.6544182484481614,
   "multiple_peers": 7,
   "days_no_token": 476,
   "listed_at": "2025-07-26",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "curvance",
   "name": "Curvance",
   "rank": 47,
   "implied_value_usd": 16252523,
   "farm_steps": [
    "Check Curvance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $136.3M, 7-day change +0.7%, about 352 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Monad, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Monad through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Monad, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $136.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Monad"
   ],
   "tvl_usd": 136345059,
   "change_7d": 0.6775,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 352,
   "listed_at": "2025-11-27",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "keyrock",
   "name": "Keyrock",
   "rank": 48,
   "implied_value_usd": 15699613,
   "farm_steps": [
    "Check Keyrock's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $83.1M, 7-day change -0.6%, about 73 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Arc, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Arc through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Arc, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $83.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Arc",
    "Ethereum"
   ],
   "tvl_usd": 83070632,
   "change_7d": -0.5971,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 73,
   "listed_at": "2026-09-02",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "nado-spot",
   "name": "Nado Spot",
   "rank": 49,
   "implied_value_usd": 15436398,
   "farm_steps": [
    "Check Nado Spot's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $51.1M, 7-day change -4.8%, about 345 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Ink, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Ink through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Ink, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $51.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Ink"
   ],
   "tvl_usd": 51104757,
   "change_7d": -4.8346,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 345,
   "listed_at": "2025-12-04",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "stellar-defi-hub",
   "name": "Stellar DeFi Hub",
   "rank": 50,
   "implied_value_usd": 15369686,
   "farm_steps": [
    "Check Stellar DeFi Hub's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $83.2M, 7-day change +0.6%, about 92 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stellar, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Stellar through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Stellar, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $83.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Farm",
   "chains": [
    "Stellar"
   ],
   "tvl_usd": 83161634,
   "change_7d": 0.6038,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 92,
   "listed_at": "2026-08-14",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "ipor-fusion",
   "name": "IPOR Fusion",
   "rank": 51,
   "implied_value_usd": 14920786,
   "farm_steps": [
    "Check IPOR Fusion's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $68.3M, 7-day change -13.6%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $68.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Base",
    "Ethereum",
    "Arbitrum",
    "Katana",
    "Unichain",
    "Avalanche",
    "Plasma",
    "Hyperliquid L1",
    "Monad",
    "Ink",
    "Robinhood Chain",
    "Flare"
   ],
   "tvl_usd": 68250116,
   "change_7d": -13.5702,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 792,
   "listed_at": "2024-09-13",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "gami-labs",
   "name": "Gami Labs",
   "rank": 52,
   "implied_value_usd": 13612108,
   "farm_steps": [
    "Check Gami Labs's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $63.1M, 7-day change +9.0%, about 169 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stellar, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Stellar through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Stellar, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $63.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Stellar",
    "Ethereum",
    "Base",
    "Flare",
    "Avalanche",
    "Robinhood Chain",
    "Hemi"
   ],
   "tvl_usd": 63109489,
   "change_7d": 9.0271,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 169,
   "listed_at": "2026-05-29",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "infinifi",
   "name": "infiniFi",
   "rank": 53,
   "implied_value_usd": 13095695,
   "farm_steps": [
    "Check infiniFi's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $70.7M, 7-day change -3.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $70.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Ethereum",
    "Monad",
    "Base"
   ],
   "tvl_usd": 70716524,
   "change_7d": -3.2771,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 535,
   "listed_at": "2025-05-28",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "tydro",
   "name": "Tydro",
   "rank": 54,
   "implied_value_usd": 13094270,
   "farm_steps": [
    "Check Tydro's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $111.3M, 7-day change -4.9%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Ink, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Ink through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Ink, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $111.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Ink"
   ],
   "tvl_usd": 111314194,
   "change_7d": -4.8885,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 394,
   "listed_at": "2025-10-16",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "reti-pooling",
   "name": "Reti Pooling",
   "rank": 55,
   "implied_value_usd": 12627666,
   "farm_steps": [
    "Check Reti Pooling's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $65.3M, 7-day change -10.7%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Algorand, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: stake $100 through the protocol and hold the receipt token on Algorand through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use the receipt token once in a supported DeFi pool on Algorand, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $65.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Staking Pool",
   "chains": [
    "Algorand"
   ],
   "tvl_usd": 65254391,
   "change_7d": -10.6865,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 659,
   "listed_at": "2025-01-24",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "solv-strategies",
   "name": "Solv Strategies",
   "rank": 56,
   "implied_value_usd": 12333696,
   "farm_steps": [
    "Check Solv Strategies's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $56.6M, 7-day change -5.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $56.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Binance",
    "Avalanche",
    "Ethereum",
    "Berachain",
    "BOB"
   ],
   "tvl_usd": 56603770,
   "change_7d": -5.0448,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 557,
   "listed_at": "2025-05-06",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "tulipa-capital",
   "name": "Tulipa Capital",
   "rank": 57,
   "implied_value_usd": 11220214,
   "farm_steps": [
    "Check Tulipa Capital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $52.4M, 7-day change -9.4%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $52.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Base",
    "Berachain",
    "Avalanche",
    "BOB",
    "Binance",
    "Monad",
    "TAC"
   ],
   "tvl_usd": 52404471,
   "change_7d": -9.3511,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "arcus-perps",
   "name": "Arcus Perps",
   "rank": 58,
   "implied_value_usd": 10927924,
   "farm_steps": [
    "Check Arcus Perps's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $60.2M, 7-day change -5.8%, about 127 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Robinhood Chain, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Robinhood Chain through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Robinhood Chain, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $60.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Robinhood Chain"
   ],
   "tvl_usd": 60151458,
   "change_7d": -5.8219,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 127,
   "listed_at": "2026-07-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "azverse-perps",
   "name": "AZverse Perps",
   "rank": 59,
   "implied_value_usd": 10766834,
   "farm_steps": [
    "Check AZverse Perps's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $52.0M, 7-day change +0.1%, about 106 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Arbitrum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Arbitrum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Arbitrum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $52.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Arbitrum",
    "Binance",
    "Ethereum",
    "Bitcoin",
    "Berachain"
   ],
   "tvl_usd": 51982966,
   "change_7d": 0.1443,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 106,
   "listed_at": "2026-07-31",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "project-x",
   "name": "Project X",
   "rank": 60,
   "implied_value_usd": 10690563,
   "farm_steps": [
    "Check Project X's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $34.4M, 7-day change -2.4%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Hyperliquid L1, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Hyperliquid L1 through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Hyperliquid L1, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $34.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Hyperliquid L1"
   ],
   "tvl_usd": 34354598,
   "change_7d": -2.4436,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 486,
   "listed_at": "2025-07-16",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "arrakis-modular",
   "name": "Arrakis Modular",
   "rank": 61,
   "implied_value_usd": 10681579,
   "farm_steps": [
    "Check Arrakis Modular's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $48.5M, 7-day change -9.9%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a managed liquidity position on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: adjust the position's range once after a day on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $48.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Liquidity Manager",
   "chains": [
    "Ethereum",
    "Base",
    "Arbitrum",
    "Plasma",
    "Robinhood Chain",
    "Binance"
   ],
   "tvl_usd": 48488073,
   "change_7d": -9.91,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 752,
   "listed_at": "2024-10-23",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "shift-defi",
   "name": "Shift DeFi",
   "rank": 62,
   "implied_value_usd": 10530886,
   "farm_steps": [
    "Check Shift DeFi's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $47.6M, 7-day change +4448.5%, about 45 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $47.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 47599147,
   "change_7d": 4448.4747,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 45,
   "listed_at": "2026-09-30",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "usdcx",
   "name": "USDCx",
   "rank": 63,
   "implied_value_usd": 10388041,
   "farm_steps": [
    "Check USDCx's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $56.6M, 7-day change -3.8%, about 142 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $56.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Stablecoin Wrapper",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 56626077,
   "change_7d": -3.7532,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 142,
   "listed_at": "2026-06-25",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "yuzu-money",
   "name": "Yuzu Money",
   "rank": 64,
   "implied_value_usd": 10140403,
   "farm_steps": [
    "Check Yuzu Money's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $57.3M, 7-day change -9.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Plasma, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Plasma through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Plasma, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $57.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Plasma",
    "Monad",
    "Ethereum"
   ],
   "tvl_usd": 57346091,
   "change_7d": -9.0455,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 365,
   "listed_at": "2025-11-14",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "re7-labs",
   "name": "Re7 Labs",
   "rank": 65,
   "implied_value_usd": 9873822,
   "farm_steps": [
    "Check Re7 Labs's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $46.9M, 7-day change -13.9%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on World Chain, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on World Chain through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on World Chain, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $46.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "World Chain",
    "Ethereum",
    "Starknet",
    "Avalanche",
    "Optimism",
    "Base",
    "Plume Mainnet",
    "Linea",
    "Binance",
    "Sonic",
    "Unichain",
    "TAC",
    "BOB",
    "Berachain",
    "Arc",
    "Polygon",
    "Plasma"
   ],
   "tvl_usd": 46889655,
   "change_7d": -13.9104,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "mezo-earn",
   "name": "Mezo Earn",
   "rank": 66,
   "implied_value_usd": 9610669,
   "farm_steps": [
    "Check Mezo Earn's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $53.6M, 7-day change -12.2%, about 186 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Mezo, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Mezo through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Mezo, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $53.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Governance Incentives",
   "chains": [
    "Mezo"
   ],
   "tvl_usd": 53638061,
   "change_7d": -12.2175,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 186,
   "listed_at": "2026-05-12",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "firelight",
   "name": "Firelight",
   "rank": 67,
   "implied_value_usd": 9332795,
   "farm_steps": [
    "Check Firelight's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $51.3M, 7-day change -14.4%, about 340 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Flare, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Flare through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Flare, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $51.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Insurance",
   "chains": [
    "Flare"
   ],
   "tvl_usd": 51272081,
   "change_7d": -14.4069,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 340,
   "listed_at": "2025-12-09",
   "watchlist": true,
   "token_status": "no token recorded"
  },
  {
   "slug": "xrpl-dex",
   "name": "XRPL DEX",
   "rank": 68,
   "implied_value_usd": 8759935,
   "farm_steps": [
    "Check XRPL DEX's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $27.7M, 7-day change -12.5%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Ripple, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Ripple through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Ripple, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $27.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Ripple"
   ],
   "tvl_usd": 27708356,
   "change_7d": -12.4626,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 842,
   "listed_at": "2024-07-25",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "vishwa",
   "name": "Vishwa",
   "rank": 69,
   "implied_value_usd": 8715006,
   "farm_steps": [
    "Check Vishwa's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $45.3M, 7-day change -10.6%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Bitcoin, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Bitcoin through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Bitcoin, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $45.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Anchor BTC",
   "chains": [
    "Bitcoin",
    "Sui"
   ],
   "tvl_usd": 45307916,
   "change_7d": -10.645,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 418,
   "listed_at": "2025-09-22",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "ultrayield-curator",
   "name": "UltraYield Curator",
   "rank": 70,
   "implied_value_usd": 8409221,
   "farm_steps": [
    "Check UltraYield Curator's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $40.4M, 7-day change -10.4%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $40.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Hyperliquid L1",
    "Etherlink",
    "Base",
    "Monad",
    "Plasma",
    "Plume Mainnet",
    "TAC",
    "Linea",
    "Arbitrum",
    "Optimism"
   ],
   "tvl_usd": 40359035,
   "change_7d": -10.3636,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 386,
   "listed_at": "2025-10-24",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "loopscale-lending",
   "name": "Loopscale Lending",
   "rank": 71,
   "implied_value_usd": 8178531,
   "farm_steps": [
    "Check Loopscale Lending's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $71.0M, 7-day change -14.1%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $71.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 70960213,
   "change_7d": -14.1058,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 480,
   "listed_at": "2025-07-22",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "exponent-yield-exchange",
   "name": "Exponent Yield Exchange",
   "rank": 72,
   "implied_value_usd": 8081765,
   "farm_steps": [
    "Check Exponent Yield Exchange's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $45.2M, 7-day change -1.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $45.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 45177163,
   "change_7d": -1.3185,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 649,
   "listed_at": "2025-02-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "makina",
   "name": "Makina",
   "rank": 73,
   "implied_value_usd": 7681104,
   "farm_steps": [
    "Check Makina's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $38.7M, 7-day change -0.1%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $38.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Ethereum",
    "Base"
   ],
   "tvl_usd": 38711093,
   "change_7d": -0.066,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 374,
   "listed_at": "2025-11-05",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "3f",
   "name": "3F",
   "rank": 74,
   "implied_value_usd": 7539709,
   "farm_steps": [
    "Check 3F's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $40.4M, 7-day change -0.0%, about 173 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: open a $100 leveraged farming position on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: reduce the leverage by half after a day on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $40.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Leveraged Farming",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 40368186,
   "change_7d": -0.0399,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 173,
   "listed_at": "2026-05-25",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "noon",
   "name": "Noon",
   "rank": 75,
   "implied_value_usd": 7538406,
   "farm_steps": [
    "Check Noon's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $38.3M, 7-day change +1.1%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $38.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Ethereum",
    "Sophon",
    "zkSync Era",
    "TAC"
   ],
   "tvl_usd": 38329220,
   "change_7d": 1.1384,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 649,
   "listed_at": "2025-02-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "bouncebit-prime",
   "name": "BounceBit Prime",
   "rank": 76,
   "implied_value_usd": 6946691,
   "farm_steps": [
    "Check BounceBit Prime's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $11.4M, 7-day change +0.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: open a $100 basis position through the protocol on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: close half of the position and re-open it after a day on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $11.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Basis Trading",
   "chains": [
    "Binance",
    "Ethereum"
   ],
   "tvl_usd": 11443356,
   "change_7d": 0.0165,
   "multiple": 0.6544182484481614,
   "multiple_peers": 7,
   "days_no_token": 369,
   "listed_at": "2025-11-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "anemoy-capital",
   "name": "Anemoy Capital",
   "rank": 77,
   "implied_value_usd": 6891388,
   "farm_steps": [
    "Check Anemoy Capital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $27.9M, 7-day change -72.7%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $27.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Ethereum",
    "Base",
    "Celo"
   ],
   "tvl_usd": 27927845,
   "change_7d": -72.7093,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 705,
   "listed_at": "2024-12-09",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "plasma-one",
   "name": "Plasma One",
   "rank": 78,
   "implied_value_usd": 6830777,
   "farm_steps": [
    "Check Plasma One's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $31.9M, 7-day change +0.2%, an unreported listing date. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Plasma, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Plasma through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Plasma, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $31.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Crypto Card Issuer",
   "chains": [
    "Plasma"
   ],
   "tvl_usd": 31926318,
   "change_7d": 0.202,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": null,
   "listed_at": null,
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "felix-vaults",
   "name": "Felix Vaults",
   "rank": 79,
   "implied_value_usd": 6415857,
   "farm_steps": [
    "Check Felix Vaults's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $31.9M, 7-day change +5.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Hyperliquid L1, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Hyperliquid L1 through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Hyperliquid L1, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $31.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Hyperliquid L1"
   ],
   "tvl_usd": 31906510,
   "change_7d": 5.3279,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 535,
   "listed_at": "2025-05-28",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "apex-omni",
   "name": "Apex Omni",
   "rank": 80,
   "implied_value_usd": 6200277,
   "farm_steps": [
    "Check Apex Omni's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $26.8M, 7-day change -1.3%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Arbitrum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Arbitrum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Arbitrum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $26.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Arbitrum",
    "Ethereum",
    "Base",
    "Binance",
    "Mantle"
   ],
   "tvl_usd": 26834758,
   "change_7d": -1.262,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 870,
   "listed_at": "2024-06-27",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "plasma-saving-vaults",
   "name": "Plasma Saving Vaults",
   "rank": 81,
   "implied_value_usd": 6159065,
   "farm_steps": [
    "Check Plasma Saving Vaults's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $31.7M, 7-day change +0.2%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Plasma, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Plasma through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Plasma, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $31.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Plasma"
   ],
   "tvl_usd": 31744697,
   "change_7d": 0.2368,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 414,
   "listed_at": "2025-09-26",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "bisonfi",
   "name": "BisonFi",
   "rank": 82,
   "implied_value_usd": 5833063,
   "farm_steps": [
    "Check BisonFi's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $20.0M, 7-day change -3.1%, about 80 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $20.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 20001683,
   "change_7d": -3.095,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 80,
   "listed_at": "2026-08-26",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "flux-finance",
   "name": "Flux Finance",
   "rank": 83,
   "implied_value_usd": 5773179,
   "farm_steps": [
    "Check Flux Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $43.6M, 7-day change -0.1%, about 3 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $43.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 43614505,
   "change_7d": -0.0568,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 1368,
   "listed_at": "2023-02-15",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "origami-finance",
   "name": "Origami Finance",
   "rank": 84,
   "implied_value_usd": 5758075,
   "farm_steps": [
    "Check Origami Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $28.8M, 7-day change -27.6%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: open a $100 leveraged farming position on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: reduce the leverage by half after a day on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $28.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Leveraged Farming",
   "chains": [
    "Ethereum",
    "Plasma",
    "Berachain"
   ],
   "tvl_usd": 28834258,
   "change_7d": -27.5934,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 915,
   "listed_at": "2024-05-13",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "current",
   "name": "Current",
   "rank": 85,
   "implied_value_usd": 5632178,
   "farm_steps": [
    "Check Current's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $49.6M, 7-day change -7.8%, about 228 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.20 for gas on Sui, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.05 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Sui through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.05 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Sui, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.05 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.05 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $49.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.10 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Sui"
   ],
   "tvl_usd": 49631964,
   "change_7d": -7.8161,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 228,
   "listed_at": "2026-03-31",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "project-0",
   "name": "Project 0",
   "rank": 86,
   "implied_value_usd": 5587763,
   "farm_steps": [
    "Check Project 0's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $48.9M, 7-day change -9.9%, about 325 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $48.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 48867055,
   "change_7d": -9.8516,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 325,
   "listed_at": "2025-12-24",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "decibel",
   "name": "Decibel",
   "rank": 87,
   "implied_value_usd": 5544167,
   "farm_steps": [
    "Check Decibel's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $29.3M, 7-day change +0.2%, about 261 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.20 for gas on Aptos, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.05 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Aptos through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.05 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Aptos, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.05 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.05 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $29.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.10 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Aptos"
   ],
   "tvl_usd": 29253135,
   "change_7d": 0.2216,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 261,
   "listed_at": "2026-02-26",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "y10k-capital",
   "name": "Y10K Capital",
   "rank": 88,
   "implied_value_usd": 5519554,
   "farm_steps": [
    "Check Y10K Capital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $28.3M, 7-day change -2.4%, about 122 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $28.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Monad",
    "Sei"
   ],
   "tvl_usd": 28339301,
   "change_7d": -2.411,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 122,
   "listed_at": "2026-07-15",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "bitlayer-ybtc-family",
   "name": "Bitlayer YBTC Family",
   "rank": 89,
   "implied_value_usd": 5470813,
   "farm_steps": [
    "Check Bitlayer YBTC Family's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $27.2M, 7-day change -10.5%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Bitcoin, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Bitcoin through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Bitcoin, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $27.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Anchor BTC",
   "chains": [
    "Bitcoin",
    "Ethereum"
   ],
   "tvl_usd": 27174703,
   "change_7d": -10.4927,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 723,
   "listed_at": "2024-11-21",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "communityv3",
   "name": "CommunityV3",
   "rank": 90,
   "implied_value_usd": 5412472,
   "farm_steps": [
    "Check CommunityV3's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $17.4M, 7-day change +18.2%, about 26 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $17.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 17407286,
   "change_7d": 18.2229,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 26,
   "listed_at": "2026-10-19",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "hylo-protocol",
   "name": "Hylo Protocol",
   "rank": 91,
   "implied_value_usd": 5400139,
   "farm_steps": [
    "Check Hylo Protocol's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $29.2M, 7-day change -15.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $29.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Dual-Token Stablecoin",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 29173196,
   "change_7d": -15.3091,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 473,
   "listed_at": "2025-07-29",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "august-digital",
   "name": "August Digital",
   "rank": 92,
   "implied_value_usd": 5393858,
   "farm_steps": [
    "Check August Digital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $22.4M, 7-day change +78.0%, about 73 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Monad, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Monad through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Monad, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $22.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Monad",
    "Ethereum"
   ],
   "tvl_usd": 22373995,
   "change_7d": 77.9812,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 73,
   "listed_at": "2026-09-02",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "tempo-stablecoin-dex",
   "name": "Tempo Stablecoin Dex",
   "rank": 93,
   "implied_value_usd": 5173586,
   "farm_steps": [
    "Check Tempo Stablecoin Dex's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $17.0M, 7-day change +1.8%, about 226 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Tempo, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Tempo through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Tempo, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $17.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Tempo"
   ],
   "tvl_usd": 17043713,
   "change_7d": 1.7778,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 226,
   "listed_at": "2026-04-02",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "d2-finance",
   "name": "D2 Finance",
   "rank": 94,
   "implied_value_usd": 5164740,
   "farm_steps": [
    "Check D2 Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $22.6M, 7-day change -3.9%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Hyperliquid L1, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Hyperliquid L1 through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Hyperliquid L1, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $22.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Hyperliquid L1",
    "Arbitrum",
    "Base",
    "Ethereum",
    "Robinhood Chain",
    "Berachain",
    "Optimism"
   ],
   "tvl_usd": 22590871,
   "change_7d": -3.939,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 862,
   "listed_at": "2024-07-05",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "agni-finance",
   "name": "Agni Finance",
   "rank": 95,
   "implied_value_usd": 5105584,
   "farm_steps": [
    "Check Agni Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $15.1M, 7-day change -4.1%, about 3 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Mantle, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Mantle through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Mantle, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $15.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Mantle"
   ],
   "tvl_usd": 15126696,
   "change_7d": -4.0995,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 1212,
   "listed_at": "2023-07-21",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "zoo-finance",
   "name": "Zoo Finance",
   "rank": 96,
   "implied_value_usd": 4710023,
   "farm_steps": [
    "Check Zoo Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $24.6M, 7-day change -13.2%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $24.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Binance",
    "Story",
    "Sei",
    "Arbitrum",
    "Base",
    "Berachain"
   ],
   "tvl_usd": 24557589,
   "change_7d": -13.1939,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 642,
   "listed_at": "2025-02-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "flowdesk",
   "name": "Flowdesk",
   "rank": 97,
   "implied_value_usd": 4657621,
   "farm_steps": [
    "Check Flowdesk's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $28.0M, 7-day change -27.6%, about 73 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $28.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 28044836,
   "change_7d": -27.6485,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 73,
   "listed_at": "2026-09-02",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "neutral-trade",
   "name": "Neutral Trade",
   "rank": 98,
   "implied_value_usd": 4636585,
   "farm_steps": [
    "Check Neutral Trade's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $21.4M, 7-day change -4.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $21.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Solana",
    "Robinhood Chain",
    "Ethereum",
    "Monad"
   ],
   "tvl_usd": 21380669,
   "change_7d": -4.2692,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 691,
   "listed_at": "2024-12-23",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "vfat.io",
   "name": "vfat.io",
   "rank": 99,
   "implied_value_usd": 4448645,
   "farm_steps": [
    "Check vfat.io's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $28.1M, 7-day change -11.1%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $28.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Base",
    "Ethereum",
    "Hyperliquid L1",
    "Robinhood Chain",
    "Arbitrum",
    "Monad",
    "Binance",
    "Optimism",
    "Avalanche",
    "Polygon",
    "Arc",
    "Unichain",
    "Ink",
    "Sonic",
    "Hemi",
    "Cronos",
    "Elysium Kinetiq",
    "Celo",
    "Linea",
    "Plasma",
    "Katana",
    "Berachain",
    "World Chain",
    "Mantle",
    "Peaq",
    "MegaETH",
    "Pulse",
    "Soneium",
    "Fraxtal",
    "Scroll",
    "Mode",
    "BOT Chain",
    "Tempo",
    "Telos",
    "Etherlink",
    "MetalL2",
    "ZetaChain",
    "Fantom",
    "Lisk"
   ],
   "tvl_usd": 28071625,
   "change_7d": -11.1034,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 914,
   "listed_at": "2024-05-14",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "avant-aveth",
   "name": "Avant avETH",
   "rank": 100,
   "implied_value_usd": 4403107,
   "farm_steps": [
    "Check Avant avETH's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $23.9M, 7-day change -12.9%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $23.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 23890230,
   "change_7d": -12.9245,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 386,
   "listed_at": "2025-10-24",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "theo-network-thbill",
   "name": "Theo Network thBill",
   "rank": 101,
   "implied_value_usd": 4390560,
   "farm_steps": [
    "Check Theo Network thBill's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $11.8M, 7-day change +94.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stable, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Stable through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Stable, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $11.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Stable",
    "Ethereum",
    "Arbitrum",
    "Base",
    "Monad",
    "Solana"
   ],
   "tvl_usd": 11810283,
   "change_7d": 94.0117,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 430,
   "listed_at": "2025-09-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "gamma-research",
   "name": "Gamma Research",
   "rank": 102,
   "implied_value_usd": 4288595,
   "farm_steps": [
    "Check Gamma Research's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $21.7M, 7-day change +21.3%, about 72 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Monad, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Monad through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Monad, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $21.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Monad"
   ],
   "tvl_usd": 21709938,
   "change_7d": 21.2903,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 72,
   "listed_at": "2026-09-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "xion-finance",
   "name": "XION Finance",
   "rank": 103,
   "implied_value_usd": 4264434,
   "farm_steps": [
    "Check XION Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $22.0M, 7-day change -3.6%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on XION, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on XION through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on XION, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $22.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Chain",
   "chains": [
    "XION"
   ],
   "tvl_usd": 22019898,
   "change_7d": -3.5701,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 491,
   "listed_at": "2025-07-11",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "chain-fusion",
   "name": "Chain Fusion",
   "rank": 104,
   "implied_value_usd": 4263889,
   "farm_steps": [
    "Check Chain Fusion's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $20.1M, 7-day change -9.4%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Bitcoin, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Bitcoin through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Bitcoin, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $20.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Decentralized BTC",
   "chains": [
    "Bitcoin",
    "Ethereum"
   ],
   "tvl_usd": 20121715,
   "change_7d": -9.4223,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 1059,
   "listed_at": "2023-12-21",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "gmx-solana",
   "name": "GMX Solana",
   "rank": 105,
   "implied_value_usd": 4237130,
   "farm_steps": [
    "Check GMX Solana's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $22.6M, 7-day change -4.6%, about 295 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $22.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 22620052,
   "change_7d": -4.5855,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 295,
   "listed_at": "2026-01-23",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "waterline",
   "name": "Waterline",
   "rank": 106,
   "implied_value_usd": 4227704,
   "farm_steps": [
    "Check Waterline's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $22.6M, 7-day change +5.0%, about 72 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $22.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 22598710,
   "change_7d": 5.0287,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 72,
   "listed_at": "2026-09-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "phoenix-perp",
   "name": "Phoenix Perp",
   "rank": 107,
   "implied_value_usd": 4206536,
   "farm_steps": [
    "Check Phoenix Perp's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $22.5M, 7-day change -2.6%, about 231 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $22.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 22522562,
   "change_7d": -2.6199,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 231,
   "listed_at": "2026-03-28",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "stellar-dex",
   "name": "Stellar DEX",
   "rank": 108,
   "implied_value_usd": 4162210,
   "farm_steps": [
    "Check Stellar DEX's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $13.4M, 7-day change -4.1%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stellar, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Stellar through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Stellar, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $13.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Stellar"
   ],
   "tvl_usd": 13370320,
   "change_7d": -4.1027,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 528,
   "listed_at": "2025-06-04",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "adrastea-validator",
   "name": "Adrastea Validator",
   "rank": 109,
   "implied_value_usd": 4041611,
   "farm_steps": [
    "Check Adrastea Validator's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $22.1M, 7-day change -16.7%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: stake $100 through the protocol and hold the receipt token on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: use the receipt token once in a supported DeFi pool on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $22.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Staking Pool",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 22106682,
   "change_7d": -16.7108,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 425,
   "listed_at": "2025-09-15",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "risex",
   "name": "RISEx",
   "rank": 110,
   "implied_value_usd": 4002707,
   "farm_steps": [
    "Check RISEx's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $21.6M, 7-day change -2.5%, about 192 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on RISE, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on RISE through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on RISE, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $21.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "RISE"
   ],
   "tvl_usd": 21553525,
   "change_7d": -2.5101,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 192,
   "listed_at": "2026-05-06",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "fstswap",
   "name": "FstSwap",
   "rank": 111,
   "implied_value_usd": 3924479,
   "farm_steps": [
    "Check FstSwap's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $11.8M, 7-day change -7.1%, about 4 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $11.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Binance"
   ],
   "tvl_usd": 11751516,
   "change_7d": -7.0751,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 1516,
   "listed_at": "2022-09-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "mystic-finance-lending",
   "name": "Mystic Finance Lending",
   "rank": 112,
   "implied_value_usd": 3882710,
   "farm_steps": [
    "Check Mystic Finance Lending's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $30.2M, 7-day change -4.6%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Flare, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Flare through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Flare, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $30.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Flare",
    "Citrea",
    "Plume Mainnet"
   ],
   "tvl_usd": 30236632,
   "change_7d": -4.6056,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 584,
   "listed_at": "2025-04-09",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "agua",
   "name": "Agua",
   "rank": 113,
   "implied_value_usd": 3775793,
   "farm_steps": [
    "Check Agua's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $20.2M, 7-day change -5.0%, about 103 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $20.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Ethereum",
    "Monad"
   ],
   "tvl_usd": 20194381,
   "change_7d": -4.984,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 103,
   "listed_at": "2026-08-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "sygnum-fiusd-liquidity-fund",
   "name": "Sygnum FIUSD Liquidity Fund",
   "rank": 114,
   "implied_value_usd": 3733041,
   "farm_steps": [
    "Check Sygnum FIUSD Liquidity Fund's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $14.2M, 7-day change +0.1%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on zkSync Era, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.25 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on zkSync Era through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.25 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on zkSync Era, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.25 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.25 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $14.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.50 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "zkSync Era"
   ],
   "tvl_usd": 14194453,
   "change_7d": 0.0759,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 780,
   "listed_at": "2024-09-25",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "manifest-trade",
   "name": "Manifest Trade",
   "rank": 115,
   "implied_value_usd": 3717507,
   "farm_steps": [
    "Check Manifest Trade's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $9.1M, 7-day change +73.7%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $9.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 9084105,
   "change_7d": 73.6522,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 731,
   "listed_at": "2024-11-13",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "nemo-trading",
   "name": "NEMO Trading",
   "rank": 116,
   "implied_value_usd": 3674225,
   "farm_steps": [
    "Check NEMO Trading's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $20.1M, 7-day change -0.7%, about 56 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $20.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 20088275,
   "change_7d": -0.7307,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 56,
   "listed_at": "2026-09-19",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "nuva",
   "name": "NUVA",
   "rank": 117,
   "implied_value_usd": 3664358,
   "farm_steps": [
    "Check NUVA's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $15.9M, 7-day change +160.8%, about 130 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Provenance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Provenance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Provenance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $15.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Provenance",
    "Ethereum"
   ],
   "tvl_usd": 15864571,
   "change_7d": 160.8009,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 130,
   "listed_at": "2026-07-07",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "estate-protocol",
   "name": "Estate Protocol",
   "rank": 118,
   "implied_value_usd": 3659263,
   "farm_steps": [
    "Check Estate Protocol's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $13.9M, 7-day change unreported, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Arbitrum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Arbitrum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Arbitrum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $13.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Arbitrum"
   ],
   "tvl_usd": 13945568,
   "change_7d": null,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 766,
   "listed_at": "2024-10-09",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "templar-lending",
   "name": "Templar Lending",
   "rank": 119,
   "implied_value_usd": 3616872,
   "farm_steps": [
    "Check Templar Lending's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $27.2M, 7-day change -5.2%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stellar, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Stellar through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Stellar, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $27.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Stellar",
    "Ethereum",
    "Bitcoin",
    "Near",
    "Zcash",
    "Ripple",
    "Solana",
    "Flare",
    "Doge",
    "Cardano",
    "Litecoin"
   ],
   "tvl_usd": 27210513,
   "change_7d": -5.153,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 459,
   "listed_at": "2025-08-12",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "marginfi-lending",
   "name": "marginfi Lending",
   "rank": 120,
   "implied_value_usd": 3515116,
   "farm_steps": [
    "Check marginfi Lending's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $27.7M, 7-day change -12.0%, about 3 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $27.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 27713022,
   "change_7d": -11.9875,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 1361,
   "listed_at": "2023-02-22",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "lulo",
   "name": "Lulo",
   "rank": 121,
   "implied_value_usd": 3492924,
   "farm_steps": [
    "Check Lulo's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $24.5M, 7-day change -4.8%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $24.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 24457058,
   "change_7d": -4.7863,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 819,
   "listed_at": "2024-08-17",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "paimon",
   "name": "Paimon",
   "rank": 122,
   "implied_value_usd": 3436516,
   "farm_steps": [
    "Check Paimon's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $14.1M, 7-day change +0.0%, about 270 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $14.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Binance"
   ],
   "tvl_usd": 14099539,
   "change_7d": 0.0075,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 270,
   "listed_at": "2026-02-17",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "katana-pre-launch",
   "name": "Katana Pre-Launch",
   "rank": 123,
   "implied_value_usd": 3430021,
   "farm_steps": [
    "Check Katana Pre-Launch's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $17.6M, 7-day change -3.1%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $17.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Farm",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 17633413,
   "change_7d": -3.1255,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 510,
   "listed_at": "2025-06-22",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "ultrayield-vaults",
   "name": "UltraYield Vaults",
   "rank": 124,
   "implied_value_usd": 3421479,
   "farm_steps": [
    "Check UltraYield Vaults's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $18.4M, 7-day change -10.7%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $18.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 18404824,
   "change_7d": -10.6883,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 389,
   "listed_at": "2025-10-21",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "rif-on-chain",
   "name": "RIF ON CHAIN",
   "rank": 125,
   "implied_value_usd": 3416751,
   "farm_steps": [
    "Check RIF ON CHAIN's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $16.7M, 7-day change -9.7%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on RSK, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on RSK through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on RSK, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $16.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dual-Token Stablecoin",
   "chains": [
    "RSK"
   ],
   "tvl_usd": 16676100,
   "change_7d": -9.7195,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 1037,
   "listed_at": "2024-01-12",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "9summits",
   "name": "9Summits",
   "rank": 126,
   "implied_value_usd": 3359304,
   "farm_steps": [
    "Check 9Summits's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $16.0M, 7-day change -7.9%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $16.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Avalanche",
    "Base",
    "Unichain"
   ],
   "tvl_usd": 16040161,
   "change_7d": -7.948,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "perena-vaults",
   "name": "Perena Vaults",
   "rank": 127,
   "implied_value_usd": 3278538,
   "farm_steps": [
    "Check Perena Vaults's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $17.2M, 7-day change -1.2%, about 318 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $17.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 17232534,
   "change_7d": -1.1868,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 318,
   "listed_at": "2025-12-31",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "tessera-v",
   "name": "Tessera V",
   "rank": 128,
   "implied_value_usd": 3235967,
   "farm_steps": [
    "Check Tessera V's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $11.1M, 7-day change -3.8%, about 77 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $11.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 11128196,
   "change_7d": -3.7732,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 77,
   "listed_at": "2026-08-29",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "hakutora",
   "name": "Hakutora",
   "rank": 129,
   "implied_value_usd": 3230481,
   "farm_steps": [
    "Check Hakutora's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $16.2M, 7-day change +2.7%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $16.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 16194180,
   "change_7d": 2.6714,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "steer-protocol",
   "name": "Steer Protocol",
   "rank": 130,
   "implied_value_usd": 3201387,
   "farm_steps": [
    "Check Steer Protocol's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $13.7M, 7-day change -7.7%, about 3 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: deposit $100 into a managed liquidity position on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: adjust the position's range once after a day on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $13.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Liquidity Manager",
   "chains": [
    "Binance",
    "Katana",
    "Base",
    "Flare",
    "Ethereum",
    "Bittensor EVM",
    "Polygon",
    "Manta",
    "Nibiru",
    "Robinhood Chain",
    "Avalanche",
    "Metis",
    "Mode",
    "Arbitrum",
    "Linea",
    "Hyperliquid L1",
    "Sonic",
    "Zircuit",
    "Sei",
    "Optimism",
    "Celo",
    "Scroll",
    "RSK",
    "Berachain",
    "X Layer",
    "Mantle",
    "Telos",
    "Fantom",
    "Filecoin",
    "Unichain",
    "ApeChain",
    "Taiko",
    "zkLink",
    "Evmos",
    "ThunderCore",
    "Kava",
    "Polygon zkEVM",
    "Astar",
    "Blast",
    "Moonbeam",
    "ZetaChain",
    "Hemi",
    "Saga",
    "Ronin",
    "Soneium"
   ],
   "tvl_usd": 13740727,
   "change_7d": -7.725,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 1264,
   "listed_at": "2023-05-30",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "exponent-strategy-vaults",
   "name": "Exponent Strategy Vaults",
   "rank": 131,
   "implied_value_usd": 3072212,
   "farm_steps": [
    "Check Exponent Strategy Vaults's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $17.0M, 7-day change -7.5%, about 150 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $17.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 16952539,
   "change_7d": -7.5244,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 150,
   "listed_at": "2026-06-17",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "3jane-lending",
   "name": "3Jane Lending",
   "rank": 132,
   "implied_value_usd": 2980690,
   "farm_steps": [
    "Check 3Jane Lending's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $14.0M, 7-day change +26.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $14.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Uncollateralized Lending",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 14030807,
   "change_7d": 26.3009,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 437,
   "listed_at": "2025-09-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "rocksolid-network",
   "name": "RockSolid Network",
   "rank": 133,
   "implied_value_usd": 2974079,
   "farm_steps": [
    "Check RockSolid Network's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $18.2M, 7-day change -14.5%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $18.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 18161180,
   "change_7d": -14.49,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 374,
   "listed_at": "2025-11-05",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "felix-cdp",
   "name": "Felix CDP",
   "rank": 134,
   "implied_value_usd": 2857154,
   "farm_steps": [
    "Check Felix CDP's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $18.9M, 7-day change -10.4%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Hyperliquid L1, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Hyperliquid L1 through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Hyperliquid L1, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $18.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Hyperliquid L1"
   ],
   "tvl_usd": 18895180,
   "change_7d": -10.387,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": 585,
   "listed_at": "2025-04-08",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "goose",
   "name": "Goose",
   "rank": 135,
   "implied_value_usd": 2833613,
   "farm_steps": [
    "Check Goose's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $12.8M, 7-day change +0.0%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $12.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "CeDeFi",
   "chains": [
    "Binance",
    "Op_Bnb",
    "Arbitrum",
    "Ethereum"
   ],
   "tvl_usd": 12798539,
   "change_7d": 0.0103,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 730,
   "listed_at": "2024-11-14",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "byreal",
   "name": "Byreal",
   "rank": 136,
   "implied_value_usd": 2725560,
   "farm_steps": [
    "Check Byreal's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $8.9M, 7-day change -6.9%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $8.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 8878040,
   "change_7d": -6.9178,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 502,
   "listed_at": "2025-06-30",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "t3tris-finance",
   "name": "T3tris Finance",
   "rank": 137,
   "implied_value_usd": 2716806,
   "farm_steps": [
    "Check T3tris Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $13.9M, 7-day change +6.7%, about 142 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Arbitrum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: allocate $100 to the protocol's highest-TVL strategy on Arbitrum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second strategy on Arbitrum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $13.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Onchain Capital Allocator",
   "chains": [
    "Arbitrum",
    "Robinhood Chain"
   ],
   "tvl_usd": 13863510,
   "change_7d": 6.7145,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 142,
   "listed_at": "2026-06-25",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "native-credit-pool",
   "name": "Native Credit Pool",
   "rank": 138,
   "implied_value_usd": 2688197,
   "farm_steps": [
    "Check Native Credit Pool's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $19.1M, 7-day change -7.1%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Morph, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Morph through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Morph, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $19.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Morph",
    "Ethereum",
    "Binance",
    "Base",
    "Arbitrum",
    "Robinhood Chain",
    "X Layer"
   ],
   "tvl_usd": 19086720,
   "change_7d": -7.0851,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 905,
   "listed_at": "2024-05-23",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "syncswap",
   "name": "SyncSwap",
   "rank": 139,
   "implied_value_usd": 2632596,
   "farm_steps": [
    "Check SyncSwap's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.3M, 7-day change -8.4%, about 3 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on zkSync Era, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.25 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on zkSync Era through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.25 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on zkSync Era, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.25 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.25 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.50 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "zkSync Era",
    "Linea",
    "Scroll",
    "Sophon"
   ],
   "tvl_usd": 7266961,
   "change_7d": -8.4085,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 1328,
   "listed_at": "2023-03-27",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "syntetika",
   "name": "Syntetika",
   "rank": 140,
   "implied_value_usd": 2599055,
   "farm_steps": [
    "Check Syntetika's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $14.6M, 7-day change -10.0%, about 87 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $14.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Base"
   ],
   "tvl_usd": 14612979,
   "change_7d": -9.956,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 87,
   "listed_at": "2026-08-19",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "strata-markets",
   "name": "Strata Markets",
   "rank": 141,
   "implied_value_usd": 2542352,
   "farm_steps": [
    "Check Strata Markets's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $14.9M, 7-day change -4.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $14.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 14899908,
   "change_7d": -3.9707,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 394,
   "listed_at": "2025-10-16",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "metalx-swap",
   "name": "MetalX Swap",
   "rank": 142,
   "implied_value_usd": 2503209,
   "farm_steps": [
    "Check MetalX Swap's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.2M, 7-day change +4.6%, about 4 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Proton, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Proton through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Proton, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Proton"
   ],
   "tvl_usd": 7194753,
   "change_7d": 4.5779,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 1685,
   "listed_at": "2022-04-04",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "katana-dex",
   "name": "Katana DEX",
   "rank": 143,
   "implied_value_usd": 2467468,
   "farm_steps": [
    "Check Katana DEX's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.5M, 7-day change -10.1%, about 5 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Ronin, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Ronin through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Ronin, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Ronin"
   ],
   "tvl_usd": 7469630,
   "change_7d": -10.0969,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 1833,
   "listed_at": "2021-11-07",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "defindex",
   "name": "DeFindex",
   "rank": 144,
   "implied_value_usd": 2466418,
   "farm_steps": [
    "Check DeFindex's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $18.5M, 7-day change -1.6%, about 276 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stellar, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Stellar through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Stellar, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $18.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Stellar"
   ],
   "tvl_usd": 18508985,
   "change_7d": -1.637,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 276,
   "listed_at": "2026-02-11",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "fira",
   "name": "Fira",
   "rank": 145,
   "implied_value_usd": 2452103,
   "farm_steps": [
    "Check Fira's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $20.0M, 7-day change +11.6%, about 291 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $20.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 19999009,
   "change_7d": 11.6361,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 291,
   "listed_at": "2026-01-27",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "binaryx-platform",
   "name": "Binaryx Platform",
   "rank": 146,
   "implied_value_usd": 2444930,
   "farm_steps": [
    "Check Binaryx Platform's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $9.0M, 7-day change +0.0%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.20 for gas on Polygon, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.05 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Polygon through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.05 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Polygon, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.05 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.05 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $9.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.10 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Polygon"
   ],
   "tvl_usd": 8993770,
   "change_7d": 0.0032,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 1017,
   "listed_at": "2024-02-01",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "hyperbeat-earn",
   "name": "Hyperbeat Earn",
   "rank": 147,
   "implied_value_usd": 2423222,
   "farm_steps": [
    "Check Hyperbeat Earn's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $17.6M, 7-day change -5.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Hyperliquid L1, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Hyperliquid L1 through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Hyperliquid L1, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $17.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Hyperliquid L1"
   ],
   "tvl_usd": 17615173,
   "change_7d": -4.9692,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 565,
   "listed_at": "2025-04-28",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "growihf",
   "name": "GrowiHF",
   "rank": 148,
   "implied_value_usd": 2368850,
   "farm_steps": [
    "Check GrowiHF's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $12.8M, 7-day change +1.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Hyperliquid L1, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Hyperliquid L1 through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Hyperliquid L1, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $12.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Hyperliquid L1",
    "Hibachi"
   ],
   "tvl_usd": 12818453,
   "change_7d": 0.9833,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 614,
   "listed_at": "2025-03-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "icarus-cl",
   "name": "Icarus CL",
   "rank": 149,
   "implied_value_usd": 2367007,
   "farm_steps": [
    "Check Icarus CL's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $8.0M, 7-day change -0.1%, about 85 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on RISE, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on RISE through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on RISE, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $8.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "RISE"
   ],
   "tvl_usd": 8023861,
   "change_7d": -0.0588,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 85,
   "listed_at": "2026-08-21",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "predict-fun",
   "name": "Predict Fun",
   "rank": 150,
   "implied_value_usd": 2325674,
   "farm_steps": [
    "Check Predict Fun's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $10.7M, 7-day change +9.4%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: place a $100 trade on one of the protocol's markets on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: place a second trade on a different market outcome on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $10.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Prediction Market",
   "chains": [
    "Binance",
    "Blast"
   ],
   "tvl_usd": 10662527,
   "change_7d": 9.4025,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 795,
   "listed_at": "2024-09-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "stellar-amm",
   "name": "Stellar AMM",
   "rank": 151,
   "implied_value_usd": 2257262,
   "farm_steps": [
    "Check Stellar AMM's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.7M, 7-day change -4.5%, about 180 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stellar, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Stellar through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Stellar, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Stellar"
   ],
   "tvl_usd": 7656553,
   "change_7d": -4.4823,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 180,
   "listed_at": "2026-05-18",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "exponent-risk-tranching",
   "name": "Exponent Risk Tranching",
   "rank": 152,
   "implied_value_usd": 2215003,
   "farm_steps": [
    "Check Exponent Risk Tranching's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $13.4M, 7-day change -1.6%, about 122 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $13.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 13424399,
   "change_7d": -1.5552,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 122,
   "listed_at": "2026-07-15",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "fluxion-network",
   "name": "Fluxion Network",
   "rank": 153,
   "implied_value_usd": 2196198,
   "farm_steps": [
    "Check Fluxion Network's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.1M, 7-day change +2.1%, about 315 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Mantle, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Mantle through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Mantle, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Mantle"
   ],
   "tvl_usd": 7128833,
   "change_7d": 2.0802,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 315,
   "listed_at": "2026-01-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "snuggle",
   "name": "Snuggle",
   "rank": 154,
   "implied_value_usd": 2127528,
   "farm_steps": [
    "Check Snuggle's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $10.7M, 7-day change -2.8%, about 273 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Robinhood Chain, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a managed liquidity position on Robinhood Chain through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: adjust the position's range once after a day on Robinhood Chain, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $10.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Liquidity Manager",
   "chains": [
    "Robinhood Chain",
    "Base",
    "Arbitrum"
   ],
   "tvl_usd": 10681820,
   "change_7d": -2.7551,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 273,
   "listed_at": "2026-02-14",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "qearn",
   "name": "Qearn",
   "rank": 155,
   "implied_value_usd": 2126641,
   "farm_steps": [
    "Check Qearn's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $11.0M, 7-day change -8.5%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Qubic, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: stake $100 through the protocol and hold the receipt token on Qubic through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use the receipt token once in a supported DeFi pool on Qubic, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $11.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Staking Pool",
   "chains": [
    "Qubic"
   ],
   "tvl_usd": 10991952,
   "change_7d": -8.5249,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 604,
   "listed_at": "2025-03-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "tau-labs",
   "name": "TAU Labs",
   "rank": 156,
   "implied_value_usd": 2124130,
   "farm_steps": [
    "Check TAU Labs's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $10.5M, 7-day change -10.0%, about 332 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $10.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Base",
    "Flow",
    "Plasma"
   ],
   "tvl_usd": 10548591,
   "change_7d": -10.0236,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 332,
   "listed_at": "2025-12-17",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "bucket-cdp",
   "name": "Bucket CDP",
   "rank": 157,
   "implied_value_usd": 2074989,
   "farm_steps": [
    "Check Bucket CDP's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $12.7M, 7-day change -8.8%, about 3 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.20 for gas on Sui, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.05 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Sui through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.05 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Sui, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.05 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.05 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $12.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.10 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Sui"
   ],
   "tvl_usd": 12689880,
   "change_7d": -8.7832,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": 1227,
   "listed_at": "2023-07-06",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "sharpbyte-capital",
   "name": "SharpByte Capital",
   "rank": 158,
   "implied_value_usd": 2016662,
   "farm_steps": [
    "Check SharpByte Capital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $10.6M, 7-day change -8.1%, about 72 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Monad, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Monad through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Monad, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $10.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Monad",
    "Ethereum",
    "Fluent"
   ],
   "tvl_usd": 10649873,
   "change_7d": -8.0812,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 72,
   "listed_at": "2026-09-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "reya-perps",
   "name": "Reya Perps",
   "rank": 159,
   "implied_value_usd": 2007841,
   "farm_steps": [
    "Check Reya Perps's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $9.8M, 7-day change -1.3%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Reya Network, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Reya Network through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Reya Network, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $9.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Reya Network"
   ],
   "tvl_usd": 9800082,
   "change_7d": -1.3282,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 823,
   "listed_at": "2024-08-13",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "abstract",
   "name": "Abstract",
   "rank": 160,
   "implied_value_usd": 1893284,
   "farm_steps": [
    "Check Abstract's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $9.4M, 7-day change -16.1%, an unreported listing date. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $9.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Chain",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 9383801,
   "change_7d": -16.0928,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": null,
   "listed_at": null,
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "defa-by-invoicemate",
   "name": "Defa By InvoiceMate",
   "rank": 161,
   "implied_value_usd": 1854746,
   "farm_steps": [
    "Check Defa By InvoiceMate's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.2M, 7-day change -0.0%, about 262 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stellar, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Stellar through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Stellar, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Stellar",
    "ZIGChain",
    "Starknet"
   ],
   "tvl_usd": 7188149,
   "change_7d": -0.0025,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 262,
   "listed_at": "2026-02-25",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "syntropia",
   "name": "Syntropia",
   "rank": 162,
   "implied_value_usd": 1854526,
   "farm_steps": [
    "Check Syntropia's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $13.6M, 7-day change -0.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $13.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 13588961,
   "change_7d": -0.0228,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 395,
   "listed_at": "2025-10-15",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "temple",
   "name": "Temple",
   "rank": 163,
   "implied_value_usd": 1826268,
   "farm_steps": [
    "Check Temple's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.3M, 7-day change -5.3%, about 95 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Canton, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Canton through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Canton, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Canton"
   ],
   "tvl_usd": 6296885,
   "change_7d": -5.3161,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 95,
   "listed_at": "2026-08-11",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "mev-capital",
   "name": "MEV Capital",
   "rank": 164,
   "implied_value_usd": 1766964,
   "farm_steps": [
    "Check MEV Capital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $8.3M, 7-day change -11.6%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $8.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Hyperliquid L1",
    "Base",
    "Sui",
    "Avalanche",
    "Arbitrum",
    "Unichain",
    "Sonic",
    "Polygon",
    "Plume",
    "Berachain",
    "Binance"
   ],
   "tvl_usd": 8320641,
   "change_7d": -11.6085,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "strato-cdp",
   "name": "STRATO CDP",
   "rank": 165,
   "implied_value_usd": 1745213,
   "farm_steps": [
    "Check STRATO CDP's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $12.6M, 7-day change -18.4%, about 183 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Strato, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Strato through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Strato, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $12.6M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Strato"
   ],
   "tvl_usd": 12637917,
   "change_7d": -18.4478,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": 183,
   "listed_at": "2026-05-15",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "kava-mint",
   "name": "Kava Mint",
   "rank": 166,
   "implied_value_usd": 1720657,
   "farm_steps": [
    "Check Kava Mint's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $10.5M, 7-day change -8.1%, an unreported listing date. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Kava, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Kava through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Kava, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $10.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Kava"
   ],
   "tvl_usd": 10497149,
   "change_7d": -8.1034,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": null,
   "listed_at": null,
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "superearn",
   "name": "SuperEarn",
   "rank": 167,
   "implied_value_usd": 1701637,
   "farm_steps": [
    "Check SuperEarn's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $9.8M, 7-day change +5.3%, about 319 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Klaytn, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Klaytn through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Klaytn, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $9.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Klaytn"
   ],
   "tvl_usd": 9764948,
   "change_7d": 5.3326,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 319,
   "listed_at": "2025-12-30",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "yieldfi",
   "name": "YieldFi",
   "rank": 168,
   "implied_value_usd": 1694109,
   "farm_steps": [
    "Check YieldFi's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $10.8M, 7-day change -3.5%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $10.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Ethereum",
    "Base",
    "Arbitrum",
    "Plume Mainnet",
    "Sonic",
    "Binance",
    "Optimism",
    "Plasma",
    "Katana",
    "TAC",
    "Saga",
    "Avalanche",
    "Linea"
   ],
   "tvl_usd": 10760030,
   "change_7d": -3.4931,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 677,
   "listed_at": "2025-01-06",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "vault-street",
   "name": "Vault Street",
   "rank": 169,
   "implied_value_usd": 1665730,
   "farm_steps": [
    "Check Vault Street's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.0M, 7-day change -0.5%, about 127 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: buy $100 of the protocol's tokenised real-world asset on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: hold the position and claim any yield it distributes on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "RWA",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 7001824,
   "change_7d": -0.5323,
   "multiple": 0.27478004488804697,
   "multiple_peers": 9,
   "days_no_token": 127,
   "listed_at": "2026-07-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "bima-cdp",
   "name": "BIMA CDP",
   "rank": 170,
   "implied_value_usd": 1646925,
   "farm_steps": [
    "Check BIMA CDP's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $9.7M, 7-day change -6.4%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Bitcoin, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Bitcoin through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Bitcoin, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $9.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Bitcoin",
    "Ethereum",
    "Hemi",
    "CORE",
    "Sonic",
    "Plume Mainnet",
    "Binance",
    "Goat"
   ],
   "tvl_usd": 9657334,
   "change_7d": -6.4116,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": 535,
   "listed_at": "2025-05-28",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "block-analitica",
   "name": "Block Analitica",
   "rank": 171,
   "implied_value_usd": 1607988,
   "farm_steps": [
    "Check Block Analitica's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.7M, 7-day change -10.2%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Base",
    "Ethereum",
    "Arbitrum",
    "Sonic"
   ],
   "tvl_usd": 7739360,
   "change_7d": -10.154,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 543,
   "listed_at": "2025-05-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "antarctic",
   "name": "Antarctic",
   "rank": 172,
   "implied_value_usd": 1582294,
   "farm_steps": [
    "Check Antarctic's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $8.4M, 7-day change -4.6%, about 359 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Arbitrum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Arbitrum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Arbitrum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $8.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Arbitrum"
   ],
   "tvl_usd": 8365056,
   "change_7d": -4.5952,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 359,
   "listed_at": "2025-11-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "pangolins",
   "name": "Pangolins",
   "rank": 173,
   "implied_value_usd": 1532825,
   "farm_steps": [
    "Check Pangolins's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $8.2M, 7-day change -3.1%, about 71 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $8.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Base",
    "Binance"
   ],
   "tvl_usd": 8184353,
   "change_7d": -3.0776,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 71,
   "listed_at": "2026-09-04",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "goonfi",
   "name": "GoonFi",
   "rank": 174,
   "implied_value_usd": 1527969,
   "farm_steps": [
    "Check GoonFi's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $5.2M, 7-day change -2.2%, about 75 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: swap $100 between two assets the protocol lists on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: add $50 as liquidity to one of its pools on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $5.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Dexs",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 5227088,
   "change_7d": -2.2019,
   "multiple": 0.3424347567468315,
   "multiple_peers": 11,
   "days_no_token": 75,
   "listed_at": "2026-08-31",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "valantis-sthype-restaking",
   "name": "Valantis stHYPE Restaking",
   "rank": 175,
   "implied_value_usd": 1485857,
   "farm_steps": [
    "Check Valantis stHYPE Restaking's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $8.2M, 7-day change -1.3%, about 15 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Hyperliquid L1, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Hyperliquid L1 through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Hyperliquid L1, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $8.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Restaking",
   "chains": [
    "Hyperliquid L1"
   ],
   "tvl_usd": 8193911,
   "change_7d": -1.3102,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 15,
   "listed_at": "2026-10-30",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "subfrost",
   "name": "SUBFROST",
   "rank": 176,
   "implied_value_usd": 1433179,
   "farm_steps": [
    "Check SUBFROST's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.8M, 7-day change -9.4%, about 108 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Bitcoin, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Bitcoin through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Bitcoin, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Decentralized BTC",
   "chains": [
    "Bitcoin",
    "Ethereum"
   ],
   "tvl_usd": 7781298,
   "change_7d": -9.3921,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 108,
   "listed_at": "2026-07-29",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "monolith-market",
   "name": "Monolith Market",
   "rank": 177,
   "implied_value_usd": 1427954,
   "farm_steps": [
    "Check Monolith Market's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.2M, 7-day change +162.9%, about 191 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 7156099,
   "change_7d": 162.8578,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": 191,
   "listed_at": "2026-05-07",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "set-protocol",
   "name": "Set Protocol",
   "rank": 178,
   "implied_value_usd": 1426731,
   "farm_steps": [
    "Check Set Protocol's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $10.1M, 7-day change -12.7%, an unreported listing date. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $10.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Indexes",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 10110428,
   "change_7d": -12.6978,
   "multiple": 0.14767790358555363,
   "multiple_peers": 3,
   "days_no_token": null,
   "listed_at": null,
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "bulk",
   "name": "BULK",
   "rank": 179,
   "implied_value_usd": 1395195,
   "farm_steps": [
    "Check BULK's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.5M, 7-day change +0.5%, about 159 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 7473241,
   "change_7d": 0.4638,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 159,
   "listed_at": "2026-06-08",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "anthias-labs",
   "name": "Anthias Labs",
   "rank": 180,
   "implied_value_usd": 1328069,
   "farm_steps": [
    "Check Anthias Labs's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $7.3M, 7-day change -9.9%, about 193 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $7.3M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Base"
   ],
   "tvl_usd": 7340723,
   "change_7d": -9.861,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 193,
   "listed_at": "2026-05-05",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "turboflow-perps",
   "name": "TurboFlow Perps",
   "rank": 181,
   "implied_value_usd": 1318125,
   "farm_steps": [
    "Check TurboFlow Perps's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.7M, 7-day change -1.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Binance",
    "Solana"
   ],
   "tvl_usd": 6664850,
   "change_7d": -0.9998,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 374,
   "listed_at": "2025-11-05",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "boros",
   "name": "Boros",
   "rank": 182,
   "implied_value_usd": 1287115,
   "farm_steps": [
    "Check Boros's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.8M, 7-day change -10.4%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Arbitrum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: use the protocol's main feature with $100 on Arbitrum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: use a second feature of the protocol with a smaller amount on Arbitrum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Interest Rate Derivatives",
   "chains": [
    "Arbitrum"
   ],
   "tvl_usd": 6838100,
   "change_7d": -10.3792,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 464,
   "listed_at": "2025-08-07",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "hertzflow",
   "name": "HertzFlow",
   "rank": 183,
   "implied_value_usd": 1276089,
   "farm_steps": [
    "Check HertzFlow's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.9M, 7-day change +0.0%, about 75 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $1 for gas on Binance, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.30 in gas.",
    "Make a first real transaction: open a small $100 perpetual or options position on Binance through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.30 in gas plus the $100 position.",
    "Use a second feature a day later: close half the position and re-open it after a day on Binance, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.30 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.30 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.60 in gas to withdraw."
   ],
   "category": "Derivatives",
   "chains": [
    "Binance"
   ],
   "tvl_usd": 6937718,
   "change_7d": 0.0088,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 75,
   "listed_at": "2026-08-31",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "stablehodl",
   "name": "StableHodl",
   "rank": 184,
   "implied_value_usd": 1220186,
   "farm_steps": [
    "Check StableHodl's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.4M, 7-day change +0.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.20 for gas on Polygon, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.05 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Polygon through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.05 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Polygon, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.05 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.05 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.10 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Polygon",
    "Ethereum",
    "Binance",
    "HeLa"
   ],
   "tvl_usd": 6358544,
   "change_7d": 0.0056,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 509,
   "listed_at": "2025-06-23",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "alphagrowth",
   "name": "alphagrowth",
   "rank": 185,
   "implied_value_usd": 1217682,
   "farm_steps": [
    "Check alphagrowth's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $5.8M, 7-day change -9.1%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.40 for gas on Base, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Base through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Base, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $5.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Base",
    "Unichain",
    "Ethereum",
    "Linea",
    "Monad"
   ],
   "tvl_usd": 5798353,
   "change_7d": -9.0719,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 407,
   "listed_at": "2025-10-03",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "loopscale-curation",
   "name": "Loopscale Curation",
   "rank": 186,
   "implied_value_usd": 1152175,
   "farm_steps": [
    "Check Loopscale Curation's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.4M, 7-day change -3.6%, about 45 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.08 for gas on Solana, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.02 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Solana through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.02 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Solana, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.02 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.02 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.4M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.04 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Solana"
   ],
   "tvl_usd": 6374060,
   "change_7d": -3.5755,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 45,
   "listed_at": "2026-09-30",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "vesu",
   "name": "Vesu",
   "rank": 187,
   "implied_value_usd": 1099134,
   "farm_steps": [
    "Check Vesu's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $8.9M, 7-day change -10.5%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Starknet, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Starknet through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Starknet, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $8.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Starknet"
   ],
   "tvl_usd": 8910633,
   "change_7d": -10.4678,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 855,
   "listed_at": "2024-07-12",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "aftermath-aflp",
   "name": "Aftermath afLP",
   "rank": 188,
   "implied_value_usd": 1082445,
   "farm_steps": [
    "Check Aftermath afLP's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.5M, 7-day change -1.7%, about 233 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.20 for gas on Sui, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.05 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Sui through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.05 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Sui, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.05 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.05 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.5M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.10 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Sui"
   ],
   "tvl_usd": 6451190,
   "change_7d": -1.7294,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 233,
   "listed_at": "2026-03-26",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "vena-finance",
   "name": "Vena Finance",
   "rank": 189,
   "implied_value_usd": 1068907,
   "farm_steps": [
    "Check Vena Finance's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $9.2M, 7-day change +0.3%, about 178 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Fluent, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Fluent through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Fluent, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $9.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Fluent"
   ],
   "tvl_usd": 9223143,
   "change_7d": 0.3217,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 178,
   "listed_at": "2026-05-20",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "bend",
   "name": "BEND",
   "rank": 190,
   "implied_value_usd": 1059704,
   "farm_steps": [
    "Check BEND's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $9.0M, 7-day change -5.0%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $0.40 for gas on Berachain, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.10 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Berachain through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.10 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Berachain, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.10 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.10 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $9.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $0.20 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Berachain"
   ],
   "tvl_usd": 9018862,
   "change_7d": -4.9551,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 388,
   "listed_at": "2025-10-22",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "damm-capital",
   "name": "DAMM Capital",
   "rank": 191,
   "implied_value_usd": 1059536,
   "farm_steps": [
    "Check DAMM Capital's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $5.8M, 7-day change -10.6%, about 65 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $5.8M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Ethereum",
    "Arbitrum"
   ],
   "tvl_usd": 5816640,
   "change_7d": -10.5582,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 65,
   "listed_at": "2026-09-10",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "mezzanine",
   "name": "Mezzanine",
   "rank": 192,
   "implied_value_usd": 1047434,
   "farm_steps": [
    "Check Mezzanine's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $5.9M, 7-day change +18.6%, about 18 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $5.9M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield",
   "chains": [
    "Ethereum",
    "Solana"
   ],
   "tvl_usd": 5851280,
   "change_7d": 18.5975,
   "multiple": 0.1914144905351388,
   "multiple_peers": 9,
   "days_no_token": 18,
   "listed_at": "2026-10-27",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "btcfi-cdp",
   "name": "BTCFi CDP",
   "rank": 193,
   "implied_value_usd": 1046565,
   "farm_steps": [
    "Check BTCFi CDP's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.0M, 7-day change -10.5%, about 2 years listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Bifrost Network, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Bifrost Network through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Bifrost Network, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Bifrost Network",
    "Bitcoin",
    "Base",
    "CORE"
   ],
   "tvl_usd": 6039993,
   "change_7d": -10.494,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": 936,
   "listed_at": "2024-04-22",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "monarq",
   "name": "Monarq",
   "rank": 194,
   "implied_value_usd": 881647,
   "farm_steps": [
    "Check Monarq's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $5.1M, 7-day change -18.5%, about 67 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Flare, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into a curator-managed vault on Flare through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: allocate a smaller amount to a second curator's vault on Flare, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $5.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Risk Curators",
   "chains": [
    "Flare"
   ],
   "tvl_usd": 5132234,
   "change_7d": -18.5227,
   "multiple": 0.21380325885644053,
   "multiple_peers": 128,
   "days_no_token": 67,
   "listed_at": "2026-09-08",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "swan-dao",
   "name": "Swan DAO",
   "rank": 195,
   "implied_value_usd": 881033,
   "farm_steps": [
    "Check Swan DAO's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.1M, 7-day change unreported, about 2 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: lock $100 of collateral and mint the protocol's stablecoin on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: repay part of the minted stablecoin and re-mint it on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.1M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "CDP",
   "chains": [
    "Ethereum"
   ],
   "tvl_usd": 6142072,
   "change_7d": null,
   "multiple": 0.16870131101842134,
   "multiple_peers": 3,
   "days_no_token": 2,
   "listed_at": "2026-11-12",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "flying-tulip-ftusd",
   "name": "Flying Tulip ftUSD",
   "rank": 196,
   "implied_value_usd": 795111,
   "farm_steps": [
    "Check Flying Tulip ftUSD's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $5.7M, 7-day change -1.6%, about 201 days listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $16 for gas on Ethereum, and store the seed phrase offline. Time: about 20 minutes. Cost: about $4 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Ethereum through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $4 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Ethereum, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $4 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $4 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $5.7M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $8 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Ethereum",
    "Sonic",
    "Binance"
   ],
   "tvl_usd": 5694315,
   "change_7d": -1.6033,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 201,
   "listed_at": "2026-04-27",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "granite",
   "name": "Granite",
   "rank": 197,
   "implied_value_usd": 743775,
   "farm_steps": [
    "Check Granite's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $6.2M, 7-day change -4.3%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Stacks, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: supply $100 of a stablecoin to the lending market on Stacks through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: borrow a small amount against the supplied collateral on Stacks, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $6.2M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Lending",
   "chains": [
    "Stacks"
   ],
   "tvl_usd": 6183687,
   "change_7d": -4.2845,
   "multiple": 0.13239465563049407,
   "multiple_peers": 15,
   "days_no_token": 528,
   "listed_at": "2025-06-04",
   "watchlist": false,
   "token_status": "no token recorded"
  },
  {
   "slug": "nucleus",
   "name": "Nucleus",
   "rank": 198,
   "implied_value_usd": 713530,
   "farm_steps": [
    "Check Nucleus's official site and docs (linked from DefiLlama) and confirm it records no token: TVL $5.0M, 7-day change -24.2%, about 1 year listed. No airdrop is announced, so treat any future token as unconfirmed. Time: about 30 minutes. Cost: $0.",
    "Set up a fresh wallet used only for this protocol, fund it with $100 plus about $2 for gas on Plume Mainnet, and store the seed phrase offline. Time: about 20 minutes. Cost: about $0.50 in gas.",
    "Make a first real transaction: deposit $100 into the protocol's highest-TVL vault on Plume Mainnet through the protocol's official interface, and save the transaction hash. Time: about 15 minutes. Cost: about $0.50 in gas plus the $100 position.",
    "Use a second feature a day later: deposit a second, smaller amount into a different vault on Plume Mainnet, so the wallet shows more than one kind of activity. Time: about 15 minutes. Cost: about $0.50 in gas.",
    "Return weekly for four weeks and repeat the main action with a small amount ($10 each time), keeping the position open between visits. Time: about 15 minutes a week. Cost: about $0.50 in gas per visit.",
    "Keep a simple log: date, action, amount, transaction hash and fees paid, and check the position's value against the $5.0M TVL figure each week. Time: about 10 minutes a week. Cost: $0.",
    "Plan the exit before you start: decide the loss limit and the point at which you withdraw, and remember a token may never be issued, so only use money you can afford to lose. Time: about 10 minutes. Cost: about $1 in gas to withdraw."
   ],
   "category": "Yield Aggregator",
   "chains": [
    "Plume Mainnet",
    "Ethereum",
    "Arbitrum",
    "Swellchain"
   ],
   "tvl_usd": 5007171,
   "change_7d": -24.2361,
   "multiple": 0.1509594423418544,
   "multiple_peers": 4,
   "days_no_token": 703,
   "listed_at": "2024-12-11",
   "watchlist": false,
   "token_status": "no token recorded"
  }
 ]
};
