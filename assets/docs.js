
/* ==========================================================================
   TANI DOCS — interactive behaviour (zero dependencies)
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Theme (dark default) ---------- */
  var root = document.documentElement;
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    root.classList.toggle("dark-mode", t === "dark");
    root.classList.toggle("light-mode", t === "light");
    try { localStorage.setItem("tani-theme", t); } catch (e) {}
    var btn = document.getElementById("themeToggle");
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light" : "Switch to dark");
  }
  var saved = "dark";
  try { saved = localStorage.getItem("tani-theme") || "dark"; } catch (e) {}
  applyTheme(saved);
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", function () {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ---------- Syntax highlighting (safe, self-contained) ---------- */
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function hl(code, lang) {
    var text = esc(code);
    var store = [];
    function push(html) { store.push(html); return "§" + (store.length - 1) + "§"; }
    if (lang === "html") {
      text = text.replace(/&lt;!--[\s\S]*?--&gt;/g, function (m) { return push('<span class="tok-com">' + m + "</span>"); });
      text = text.replace(/(&lt;\/?)([a-zA-Z][\w-]*)([\s\S]*?)(\/?&gt;)/g, function (m, open, tag, rest, close) {
        rest = rest.replace(/([\w-]+)(=)("[^"]*"|'[^']*')?/g, function (mm, a, b, c) {
          return '<span class="tok-attr">' + a + '</span><span class="tok-punc">' + b + '</span>' + (c ? '<span class="tok-str">' + c + "</span>" : "");
        });
        return '<span class="tok-punc">' + open + '</span><span class="tok-tag">' + tag + "</span>" + rest + '<span class="tok-punc">' + close + "</span>";
      });
    } else if (lang === "css") {
      text = text.replace(/\/\*[\s\S]*?\*\//g, function (m) { return push('<span class="tok-com">' + m + "</span>"); });
      text = text.replace(/("[^"]*"|'[^']*')/g, function (m) { return push('<span class="tok-str">' + m + "</span>"); });
      text = text.replace(/([^§{}]+?)(\{)/g, function (m, sel, br) { return '<span class="tok-sel">' + sel + "</span>" + br; });
      text = text.replace(/([\w-]+)(\s*:\s*)([^;{§]+§\d+§|[^;{§]+)(;)/g, function (m, p, colon, val, semi) {
        return '<span class="tok-prop">' + p + "</span>" + colon + val + semi;
      });
    }
    text = text.replace(/§(\d+)§/g, function (m, i) { return store[+i]; });
    return text;
  }
  document.querySelectorAll("code[data-lang]").forEach(function (el) {
    el.innerHTML = hl(el.textContent, el.getAttribute("data-lang"));
  });

  /* ---------- Copy buttons ---------- */
  document.querySelectorAll(".doc-copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var block = btn.closest(".doc-code").querySelector("code");
      var text = block ? block.textContent : "";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
          var old = btn.textContent; btn.textContent = "Copied!"; btn.classList.add("copied");
          setTimeout(function () { btn.textContent = old; btn.classList.remove("copied"); }, 1400);
        });
      }
    });
  });

  /* ---------- Mobile sidebar ---------- */
  var sidebar = document.getElementById("docSidebar");
  var backdrop = document.getElementById("docBackdrop");
  function closeSidebar() { if (sidebar) sidebar.classList.remove("open"); if (backdrop) backdrop.classList.remove("open"); }
  var menuBtn = document.getElementById("menuToggle");
  if (menuBtn) menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open"); backdrop.classList.toggle("open");
  });
  if (backdrop) backdrop.addEventListener("click", closeSidebar);

  /* ---------- Table of contents ---------- */
  var toc = document.getElementById("docToc");
  if (toc) {
    var heads = document.querySelectorAll(".doc-main .doc-section h2, .doc-main .doc-section h3");
    var html = '<div class="toc-title">On this page</div>';
    heads.forEach(function (h) {
      if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
      html += '<a href="#' + h.id + '" class="' + (h.tagName === "H3" ? "sub" : "") + '">' + h.textContent + "</a>";
    });
    toc.innerHTML = html;
  }

  /* ---------- Active nav + TOC highlight ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll(".doc-section[id]"));
  var navLinks = {};
  document.querySelectorAll(".doc-nav-link").forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (href.indexOf("#") === 0) navLinks[href.slice(1)] = a;
  });
  var tocLinks = {};
  if (toc) toc.querySelectorAll("a").forEach(function (a) {
    var href = a.getAttribute("href") || ""; if (href.indexOf("#") === 0) tocLinks[href.slice(1)] = a;
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var id = e.target.id;
        Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.toggle("active", k === id); });
        Object.keys(tocLinks).forEach(function (k) { tocLinks[k].classList.remove("active"); });
        if (tocLinks[id]) tocLinks[id].classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  sections.forEach(function (s) { io.observe(s); });

  /* ---------- Prev / Next pager ---------- */
  var order = sections.map(function (s) { return s.id; });
  sections.forEach(function (sec, i) {
    if (sec.classList.contains("doc-no-pager")) return;
    var prev = order[i - 1], next = order[i + 1];
    var pager = document.createElement("div");
    pager.className = "doc-pager";
    var prevTitle = prev ? (navLinks[prev] ? navLinks[prev].textContent.trim() : prev) : null;
    var nextTitle = next ? (navLinks[next] ? navLinks[next].textContent.trim() : next) : null;
    pager.innerHTML =
      (prev ? '<a class="prev" href="#' + prev + '"><span class="dir">&#8592; Previous</span><span class="ttl">' + prevTitle + "</span></a>" : "<span></span>") +
      (next ? '<a class="next" href="#' + next + '"><span class="dir">Next &#8594;</span><span class="ttl">' + nextTitle + "</span></a>" : "<span></span>");
    sec.appendChild(pager);
  });

  /* ---------- Search ---------- */
  var input = document.getElementById("docSearchInput");
  var results = document.getElementById("docSearchResults");
  var idx = [];
  document.querySelectorAll(".doc-section[id]").forEach(function (sec) {
    var titleEl = sec.querySelector("h2");
    var title = titleEl ? titleEl.textContent : (sec.getAttribute("data-title") || sec.id);
    var kw = (sec.getAttribute("data-keywords") || "") + " " + sec.textContent;
    idx.push({ id: sec.id, title: title, text: kw, type: "section" });
    sec.querySelectorAll("h3").forEach(function (h) {
      if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
      idx.push({ id: sec.id, anchor: h.id, title: h.textContent, text: h.textContent + " " + sec.textContent.slice(0, 200), type: "item" });
    });
  });
  function render(q) {
    q = q.trim().toLowerCase();
    if (!q) { results.classList.remove("open"); return; }
    var hits = idx.filter(function (it) { return it.text.toLowerCase().indexOf(q) !== -1; }).slice(0, 12);
    if (!hits.length) { results.innerHTML = '<div class="doc-search-empty">No results for "' + q + '"</div>'; results.classList.add("open"); return; }
    var out = "";
    var lastType = null;
    hits.forEach(function (h) {
      if (h.type !== lastType) { out += '<div class="sr-group">' + (h.type === "section" ? "Sections" : "Topics") + "</div>"; lastType = h.type; }
      out += '<a href="#' + h.id + (h.anchor ? "#" + h.anchor : "") + '">' + h.title + "</a>";
    });
    results.innerHTML = out; results.classList.add("open");
  }
  function debounce(fn, ms) { var t; return function () { var a = arguments, c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms); }; }
  if (input) {
    var doSearch = debounce(function () { render(input.value); }, 120);
    input.addEventListener("input", doSearch);
    input.addEventListener("focus", function () { if (input.value) render(input.value); });
    document.addEventListener("click", function (e) { if (!e.target.closest(".doc-search")) results.classList.remove("open"); });
    results.addEventListener("click", function (e) { if (e.target.closest("a")) { results.classList.remove("open"); input.value = ""; closeSidebar(); } });
    input.addEventListener("keydown", function (e) { if (e.key === "Escape") { results.classList.remove("open"); input.blur(); } });
  }
})();
