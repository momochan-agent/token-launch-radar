// app.js — Token Launch Radar dashboard. Reads window.BOARD (z-data.js),
// renders the sortable/filterable board and a detail view per protocol.
// No network: all data is embedded. Hash state: #detail=<slug>,
// #watchlist=1, #cat=<category> (used for the three screenshots).
(function () {
  "use strict";
  var B = window.BOARD;
  if (!B) { document.body.textContent = "Board data failed to load."; return; }
  var rows = B.rows.slice();
  var meta = B.meta;

  function $(id) { return document.getElementById(id); }
  function money(n) {
    if (n >= 1e9) return "$" + (n / 1e9).toFixed(2) + "B";
    if (n >= 1e6) return "$" + (n / 1e6).toFixed(1) + "M";
    if (n >= 1e3) return "$" + (n / 1e3).toFixed(1) + "K";
    return "$" + Math.round(n);
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function pct(x) {
    if (x === null || x === undefined) return "&mdash;";
    var c = x >= 0 ? "pos" : "neg";
    return '<span class="' + c + '">' + (x >= 0 ? "+" : "") + x.toFixed(1) + "%</span>";
  }

  $("asof").textContent = meta.as_of;
  var asof2 = document.querySelectorAll(".asof2");
  for (var i = 0; i < asof2.length; i++) asof2[i].textContent = meta.as_of;
  $("counts").innerHTML =
    "<b>" + rows.length + " protocols</b> ranked &middot; " +
    meta.watchlist_covered + " of " + meta.watchlist_total + " watchlist protocols covered &middot; " +
    meta.pre_token_total + " pre-token protocols in the snapshot &middot; " +
    "global peer multiple <b>" + meta.global_multiple.toFixed(3) + "x</b> over " +
    meta.global_multiple_peers + " traded protocols";
  $("footrows").textContent = rows.length + " rows";

  // Category multiples table (traded peers = comparables).
  var cats = Object.keys(B.multiples.byCategory).sort();
  var mh = "<table><tr><th>Category</th><th>Peer multiple</th><th>Traded peers</th></tr>";
  cats.forEach(function (c) {
    var m = B.multiples.byCategory[c];
    mh += "<tr><td>" + esc(c) + (m.fallback ? " (global fallback)" : "") + "</td><td>" + m.multiple.toFixed(3) + "x</td><td>" + m.peers + "</td></tr>";
  });
  mh += "<tr><td><b>Global</b></td><td><b>" + B.multiples.global.multiple.toFixed(3) + "x</b></td><td>" + B.multiples.global.peers + "</td></tr></table>";
  $("multiples").innerHTML = mh;

  // Traded peers: top by market cap, market values only, never ranked.
  var lp = "<table><tr><th>Protocol</th><th>Category</th><th>TVL</th><th>Market cap</th><th>mcap / TVL</th></tr>";
  (meta.live_peers || []).forEach(function (p) {
    lp += "<tr><td>" + esc(p.name) + "</td><td>" + esc(p.category || "—") + "</td><td>" + money(p.tvl_usd) + "</td><td>" + money(p.mcap_usd) + "</td><td>" + p.multiple.toFixed(2) + "x</td></tr>";
  });
  lp += "</table>";
  $("livepeers").innerHTML = lp;

  var catSel = $("cat");
  var seen = {};
  rows.forEach(function (r) { if (r.category && !seen[r.category]) { seen[r.category] = 1; } });
  Object.keys(seen).sort().forEach(function (c) {
    var o = document.createElement("option"); o.value = c; o.textContent = c; catSel.appendChild(o);
  });

  var state = { q: "", cat: "", minTvl: 0, watch: false, sort: "rank" };
  var sortFns = {
    rank: function (a, b) { return a.rank - b.rank; },
    tvl: function (a, b) { return b.tvl_usd - a.tvl_usd; },
    growth: function (a, b) { return (b.change_7d === null ? -1e9 : b.change_7d) - (a.change_7d === null ? -1e9 : a.change_7d); },
    age: function (a, b) { return (b.days_no_token === null ? -1 : b.days_no_token) - (a.days_no_token === null ? -1 : a.days_no_token); }
  };

  function filtered() {
    var q = state.q.trim().toLowerCase();
    return rows.filter(function (r) {
      if (state.watch && !r.watchlist) return false;
      if (state.cat && r.category !== state.cat) return false;
      if (r.tvl_usd < state.minTvl) return false;
      if (q && r.name.toLowerCase().indexOf(q) < 0 && r.slug.indexOf(q) < 0) return false;
      return true;
    }).sort(sortFns[state.sort]);
  }

  function render() {
    var list = filtered();
    var html = "";
    list.forEach(function (r) {
      html += '<tr data-slug="' + esc(r.slug) + '">' +
        '<td class="rank">' + r.rank + "</td>" +
        '<td class="name">' + esc(r.name) + (r.watchlist ? '<span class="wtag">W</span>' : "") + "</td>" +
        "<td>" + esc(r.category || "—") + "</td>" +
        "<td>" + esc(r.chains.slice(0, 2).join(", ")) + (r.chains.length > 2 ? " +" + (r.chains.length - 2) : "") + "</td>" +
        '<td class="num">' + money(r.tvl_usd) + "</td>" +
        '<td class="num">' + pct(r.change_7d) + "</td>" +
        '<td class="num">' + r.multiple.toFixed(2) + "x</td>" +
        '<td class="num"><b>' + money(r.implied_value_usd) + "</b></td>" +
        '<td class="num">' + (r.days_no_token === null ? "—" : r.days_no_token) + "</td></tr>";
    });
    $("rows").innerHTML = html;
    $("shown").textContent = list.length + " of " + rows.length + " shown";
  }

  function showDetail(slug) {
    var r = null;
    rows.forEach(function (x) { if (x.slug === slug) r = x; });
    var box = $("detail");
    if (!r) { box.hidden = true; box.innerHTML = ""; return; }
    var steps = r.farm_steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
    box.innerHTML =
      '<button class="close" id="dclose">Close</button>' +
      "<h2>" + esc(r.name) + ' <span class="wtag">' + (r.watchlist ? "WATCHLIST" : "BELOW FLOOR") + "</span></h2>" +
      '<div class="stats">' +
      "<span>Rank <b>#" + r.rank + "</b></span>" +
      "<span>Implied value <b>" + money(r.implied_value_usd) + "</b></span>" +
      "<span>TVL <b>" + money(r.tvl_usd) + "</b></span>" +
      "<span>7-day <b>" + (r.change_7d === null ? "unreported" : (r.change_7d >= 0 ? "+" : "") + r.change_7d.toFixed(1) + "%") + "</b></span>" +
      "<span>Peer multiple <b>" + r.multiple.toFixed(3) + "x</b> (" + r.multiple_peers + " traded peers)</span>" +
      "<span>Listed <b>" + esc(r.listed_at || "unknown") + "</b> &middot; <b>" + (r.days_no_token === null ? "?" : r.days_no_token) + " days</b> with no token recorded</span>" +
      "<span>Chains <b>" + esc(r.chains.join(", ")) + "</b></span>" +
      "<span>Category <b>" + esc(r.category || "—") + "</b></span>" +
      "</div>" +
      "<p class=\"note\">Token status: <b>no token recorded</b> in the snapshot. This plan farms usage of the protocol itself; " +
      "it does not claim a token will be issued or an airdrop will happen.</p>" +
      "<h3>Farm plan &mdash; 7 steps with costs and times</h3><ol>" + steps + "</ol>";
    box.hidden = false;
    $("dclose").addEventListener("click", function () {
      history.replaceState(null, "", location.pathname);
      showDetail(null);
    });
    box.scrollIntoView({ block: "nearest" });
  }

  $("rows").addEventListener("click", function (e) {
    var tr = e.target.closest("tr[data-slug]");
    if (!tr) return;
    location.hash = "detail=" + tr.getAttribute("data-slug");
  });
  $("q").addEventListener("input", function () { state.q = $("q").value; render(); });
  catSel.addEventListener("change", function () { state.cat = catSel.value; render(); });
  $("minTvl").addEventListener("change", function () { state.minTvl = +$("minTvl").value; render(); });
  $("watch").addEventListener("change", function () { state.watch = $("watch").checked; render(); });
  $("sort").addEventListener("change", function () { state.sort = $("sort").value; render(); });

  document.querySelectorAll("th[data-k]").forEach(function (th) {
    th.addEventListener("click", function () {
      var k = th.getAttribute("data-k");
      state.sort = k === "value" ? "rank" : k === "growth" ? "growth" : k === "age" ? "age" : k === "tvl" ? "tvl" : "rank";
      $("sort").value = state.sort;
      render();
    });
  });

  function applyHash() {
    var h = location.hash.slice(1);
    var params = {};
    h.split("&").forEach(function (kv) {
      var p = kv.split("=");
      if (p[0]) params[p[0]] = decodeURIComponent(p[1] || "");
    });
    if (params.watchlist === "1") { state.watch = true; $("watch").checked = true; }
    if (params.cat) { state.cat = params.cat; catSel.value = params.cat; }
    if (params.minTvl) { state.minTvl = +params.minTvl; $("minTvl").value = params.minTvl; }
    render();
    if (params.detail) showDetail(params.detail);
  }
  window.addEventListener("hashchange", applyHash);
  applyHash();
})();
