/* ==========================================================================
   TANI DOCS — extended interactivity (playground, reference, templates, quiz)
   Zero dependencies. Loaded after docs.js.
   ========================================================================== */
(function () {
  "use strict";

  function debounce(fn, ms) { var t; return function () { var a = arguments, c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms); }; }

  /* ----------------------- UTILITY REFERENCE ----------------------- */
  var refSearch = document.getElementById("docRefSearch");
  var refCats = document.getElementById("docRefCats");
  var refGroups = document.getElementById("docRefGroups");
  if (refGroups) {
    var refItems = Array.prototype.slice.call(refGroups.querySelectorAll(".doc-ref-item"));
    var refGroupEls = Array.prototype.slice.call(refGroups.querySelectorAll(".doc-ref-group"));
    var activeCat = "all";

    function applyRef() {
      var q = (refSearch ? refSearch.value : "").trim().toLowerCase();
      refGroupEls.forEach(function (g) {
        var gcat = g.getAttribute("data-cat");
        var any = false;
        var list = g.querySelector(".doc-ref-list");
        Array.prototype.slice.call(list.children).forEach(function (it) {
          var name = (it.getAttribute("data-name") || "").toLowerCase();
          var match = (!q || name.indexOf(q) !== -1) && (activeCat === "all" || gcat === activeCat);
          it.style.display = match ? "" : "none";
          if (match) any = true;
        });
        g.style.display = any ? "" : "none";
      });
    }
    if (refSearch) refSearch.addEventListener("input", debounce(applyRef, 100));
    if (refCats) refCats.addEventListener("click", function (e) {
      var btn = e.target.closest(".doc-ref-cat");
      if (!btn) return;
      Array.prototype.slice.call(refCats.querySelectorAll(".doc-ref-cat")).forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      activeCat = btn.getAttribute("data-cat");
      applyRef();
    });
    var printBtn = document.getElementById("docRefPrint");
    if (printBtn) printBtn.addEventListener("click", function () { window.print(); });
    applyRef();
  }

  /* ----------------------- PLAYGROUND ----------------------- */
  var pg = document.getElementById("pgCode");
  var frame = document.getElementById("pgFrame");
  var bp = document.getElementById("pgBp");
  var tokens = document.getElementById("pgTokens");
  var spacingViz = document.getElementById("pgSpacing");
  var typeViz = document.getElementById("pgType");

  function renderFrame() {
    if (!pg || !frame) return;
    var styleVars = ":root{";
    if (tokens) {
      tokens.querySelectorAll("input").forEach(function (inp) {
        var v = inp.value;
        if (inp.getAttribute("data-isradius")) v = v + "px";
        styleVars += inp.getAttribute("data-var") + ":" + v + ";";
      });
    }
    styleVars += "}";
    var srcdoc = '<!DOCTYPE html><html data-theme="dark"><head><meta charset="UTF-8"><link rel="stylesheet" href="./dist/css/tani.css"><style>' + styleVars + "</style></head><body>" + pg.value + "</body></html>";
    frame.srcdoc = srcdoc;
  }

  if (pg && frame) {
    var t;
    pg.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(renderFrame, 150);
    });
    if (bp) bp.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      Array.prototype.slice.call(bp.querySelectorAll("button")).forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      frame.style.width = b.getAttribute("data-w");
      frame.style.margin = b.getAttribute("data-w") === "100%" ? "0" : "0 auto";
    });
    if (tokens) tokens.addEventListener("input", renderFrame);
    renderFrame();

    // Spacing scale visualizer
    if (spacingViz) {
      var sp = '<div class="doc-table-wrap"><table class="doc-table"><thead><tr><th>Scale</th><th>Rem</th><th>Box</th></tr></thead><tbody>';
      var rems = { "0": "0", "1": "0.25", "2": "0.5", "3": "0.75", "4": "1", "5": "1.25", "6": "1.5", "8": "2", "10": "2.5", "12": "3" };
      Object.keys(rems).forEach(function (k) {
        var px = (parseFloat(rems[k]) * 16).toFixed(0);
        sp += '<tr><td><code>m-' + k + '</code></td><td>' + rems[k] + 'rem</td><td><div style="width:' + px + 'px;height:' + px + 'px;background:linear-gradient(135deg,var(--primary),var(--gold));border-radius:4px"></div></td></tr>';
      });
      sp += "</tbody></table></div>";
      spacingViz.innerHTML = sp;
    }
    // Type scale visualizer
    if (typeViz) {
      var sizes = [
        ["display-1", "Display 1"], ["display-3", "Display 3"], ["h1", "Heading 1"],
        ["text-2xl", "Text 2XL"], ["text-lg", "Text LG"], ["text-base", "Text base"],
        ["text-sm", "Text SM"], ["text-xs", "Text XS"]
      ];
      var tv = "";
      sizes.forEach(function (s) {
        tv += '<div class="mb-2"><div class="' + s[0] + '">' + s[1] + '</div><div class="text-muted" style="font-size:.75rem">' + s[0] + '</div></div>';
      });
      typeViz.innerHTML = tv;
    }
  }

  /* ----------------------- TEMPLATES DOWNLOAD ----------------------- */
  document.querySelectorAll(".pg-dl").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-key");
      var ta = document.querySelector('#tplStore textarea[data-key="' + key + '"]');
      if (!ta) return;
      var html = ta.value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      var blob = new Blob([html], { type: "text/html" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = key + ".html";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
      var old = btn.textContent;
      btn.textContent = "Downloaded!";
      setTimeout(function () { btn.textContent = old; }, 1500);
    });
  });

  /* ----------------------- QUIZ ----------------------- */
  var quiz = document.getElementById("docQuiz");
  if (quiz) {
    var total = quiz.querySelectorAll(".doc-quiz-q").length;
    var answered = 0, correct = 0;
    quiz.querySelectorAll(".doc-quiz-q").forEach(function (q) {
      var ans = q.getAttribute("data-answer");
      q.querySelectorAll(".doc-quiz-opt").forEach(function (opt) {
        opt.addEventListener("click", function () {
          if (q.getAttribute("data-done")) return;
          q.setAttribute("data-done", "1");
          if (opt.getAttribute("data-o") === ans) { opt.classList.add("correct"); correct++; }
          else { opt.classList.add("wrong"); var right = q.querySelector('[data-o="' + ans + '"]'); if (right) right.classList.add("correct"); }
          answered++;
          if (answered === total) {
            var s = document.getElementById("docQuizScore");
            if (s) { s.style.display = ""; s.textContent = "Score: " + correct + " / " + total + (correct === total ? " — perfect! 🎉" : ""); }
          }
        });
      });
    });
  }
})();
