/* Viz — shared interactive visualization engine for dsa_practice lessons.
 *
 * Core concepts:
 *   - A FRAME is a plain-object snapshot of algorithm state (+ a `note` string).
 *   - A VIEW is a function (state, mountEl) that renders one frame.
 *   - Viz.player(id, {caption, view, frames, ms}) steps/plays through frames.
 *   - Viz.runnable(id, {controls, make, view, ...}) adds a small form; `make(values)`
 *     regenerates the frames from user input — true "run it yourself" widgets.
 *
 * Built-in views: Viz.array, Viz.list, Viz.stack, Viz.kv, Viz.grid, Viz.spans,
 *   Viz.tree(config), Viz.graph(config).
 * Compose with Viz.group(viewA, viewB, ...) and Viz.sub("key", view).
 * Bespoke widgets: Viz.growthExplorer(id), Viz.hashDemo(id).
 *
 * Usage in a lesson:
 *   <div id="v1"></div>
 *   <script src="../assets/viz.js"></script>
 *   <script>
 *     Viz.player("v1", { caption: "…", view: Viz.array, frames: [...] });
 *   </script>
 */
window.Viz = (function () {
  "use strict";

  /* ---------------- helpers ---------------- */
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function cellObj(c) {
    return (c !== null && typeof c === "object") ? c : { v: c };
  }
  const SVGNS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs) {
    const e = document.createElementNS(SVGNS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  /* ---------------- player ---------------- */
  function player(id, opts) {
    const root = document.getElementById(id);
    root.classList.add("viz");
    if (opts.caption) root.appendChild(el("div", "viz-caption", opts.caption));
    const stage = el("div", "viz-stage");
    const note = el("div", "viz-note");
    const bar = el("div", "viz-controls");
    root.appendChild(stage); root.appendChild(note); root.appendChild(bar);

    const bFirst = el("button", null, "&#9198;");
    const bPrev = el("button", null, "&#9664;");
    const bPlay = el("button", null, "&#9654; play");
    const bNext = el("button", null, "step &#9654;");
    const counter = el("span", "viz-counter");
    [bFirst, bPrev, bPlay, bNext, counter].forEach(function (b) { bar.appendChild(b); });

    let frames = opts.frames.slice();
    let i = 0, timer = null;

    function stop() {
      if (timer) { clearInterval(timer); timer = null; bPlay.innerHTML = "&#9654; play"; }
    }
    function draw() {
      stage.innerHTML = "";
      opts.view(frames[i], stage);
      note.innerHTML = frames[i].note || "";
      counter.textContent = (i + 1) + "/" + frames.length;
      bFirst.disabled = bPrev.disabled = (i === 0);
      bNext.disabled = (i === frames.length - 1);
    }
    bFirst.onclick = function () { stop(); i = 0; draw(); };
    bPrev.onclick = function () { stop(); if (i > 0) i--; draw(); };
    bNext.onclick = function () { stop(); if (i < frames.length - 1) i++; draw(); };
    bPlay.onclick = function () {
      if (timer) { stop(); return; }
      if (i === frames.length - 1) { i = 0; draw(); }
      bPlay.innerHTML = "&#10074;&#10074; pause";
      timer = setInterval(function () {
        if (i < frames.length - 1) { i++; draw(); } else stop();
      }, opts.ms || 1100);
    };
    draw();
    return {
      set: function (fs) { stop(); frames = fs.slice(); i = 0; draw(); }
    };
  }

  /* ---------------- runnable: form + player ---------------- */
  function runnable(id, opts) {
    const root = document.getElementById(id);
    root.classList.add("viz");
    if (opts.caption) root.appendChild(el("div", "viz-caption", opts.caption));

    const form = el("div", "viz-form");
    const inputs = {};
    (opts.controls || []).forEach(function (c) {
      const lab = el("label", null, c.label + " ");
      let inp;
      if (c.type === "select") {
        inp = document.createElement("select");
        c.options.forEach(function (o) {
          const opt = document.createElement("option");
          opt.value = o; opt.textContent = o;
          inp.appendChild(opt);
        });
        inp.value = c.value;
      } else {
        inp = document.createElement("input");
        inp.type = c.type || "text";
        inp.value = c.value;
        if (c.min !== undefined) inp.min = c.min;
        if (c.max !== undefined) inp.max = c.max;
        if (c.size) inp.size = c.size;
      }
      inputs[c.key] = inp;
      lab.appendChild(inp);
      form.appendChild(lab);
    });
    const runBtn = el("button", null, opts.runLabel || "run &#9654;");
    form.appendChild(runBtn);
    root.appendChild(form);

    const inner = el("div");
    inner.id = id + "-inner";
    root.appendChild(inner);

    function values() {
      const v = {};
      for (const k in inputs) {
        v[k] = inputs[k].type === "number" ? Number(inputs[k].value) : inputs[k].value;
      }
      return v;
    }
    const p = player(inner.id, {
      view: opts.view,
      frames: opts.make(values()),
      ms: opts.ms
    });
    inner.classList.remove("viz");           // avoid double border
    inner.style.border = "none"; inner.style.padding = "0"; inner.style.margin = "0";
    runBtn.onclick = function () { p.set(opts.make(values())); };
    for (const k in inputs) {
      inputs[k].addEventListener("keydown", function (e) {
        if (e.key === "Enter") runBtn.onclick();
      });
    }
    return p;
  }

  /* ---------------- view: array (rows of cells) ---------------- */
  /* state (single row): {cells:[v|{v,cls}], ptrs:{idx:label}, win:[lo,hi], label, noIdx}
     or multi-row: {rows:[{label, cells, ptrs, win, noIdx}]}                       */
  function renderRow(row, mount) {
    const wrap = el("div", "viz-row");
    if (row.label !== undefined) wrap.appendChild(el("span", "viz-rowlabel", row.label));
    const cells = el("div", "viz-cells");
    (row.cells || []).forEach(function (c, idx) {
      const o = cellObj(c);
      const col = el("div", "viz-cellcol");
      col.appendChild(el("div", "viz-idx", row.noIdx ? "" : String(idx)));
      let cls = "viz-cell" + (o.cls ? " " + o.cls : "");
      if (row.win && idx >= row.win[0] && idx <= row.win[1]) cls += " win";
      if (String(o.v).length > 3) cls += " wide";
      col.appendChild(el("div", cls, o.v === undefined ? "&nbsp;" : String(o.v)));
      const p = row.ptrs && row.ptrs[idx];
      col.appendChild(el("div", "viz-ptr", p ? (Array.isArray(p) ? p.join(" ") : p) : "&nbsp;"));
      cells.appendChild(col);
    });
    wrap.appendChild(cells);
    mount.appendChild(wrap);
  }
  function array(state, mount) {
    const box = el("div", "viz-rows");
    (state.rows || [state]).forEach(function (r) { renderRow(r, box); });
    mount.appendChild(box);
  }

  /* ---------------- view: linked list ---------------- */
  /* state: {nodes:[v|{v,cls}], arrows:['>','<','.',{d:'>',cls:'hl'}], ptrs:{idx:label}} */
  function list(state, mount) {
    const wrap = el("div", "viz-list");
    (state.nodes || []).forEach(function (n, idx) {
      const o = cellObj(n);
      const col = el("div", "viz-cellcol");
      col.appendChild(el("div", "viz-idx", "&nbsp;"));
      col.appendChild(el("div", "viz-cell" + (o.cls ? " " + o.cls : ""), String(o.v)));
      const p = state.ptrs && state.ptrs[idx];
      col.appendChild(el("div", "viz-ptr", p ? (Array.isArray(p) ? p.join(" ") : p) : "&nbsp;"));
      wrap.appendChild(col);
      const a = state.arrows && state.arrows[idx];
      if (a !== undefined && idx < state.nodes.length - 1) {
        const ao = (typeof a === "object") ? a : { d: a };
        const sym = ao.d === ">" ? "&#8594;" : ao.d === "<" ? "&#8592;" : "&#183;";
        wrap.appendChild(el("span",
          "viz-arrow" + (ao.cls ? " " + ao.cls : "") + (ao.d === "." ? " none" : ""), sym));
      }
    });
    mount.appendChild(wrap);
  }

  /* ---------------- view: stack(s) ---------------- */
  /* state: {stacks:[{label, items:[v|{v,cls}]}]} — rendered bottom-up, side by side */
  function stack(state, mount) {
    const wrap = el("div", "viz-stackwrap");
    (state.stacks || []).forEach(function (s) {
      const col = el("div", "viz-stackcol");
      const st = el("div", "viz-stack");
      (s.items || []).forEach(function (it) {
        const o = cellObj(it);
        st.appendChild(el("div", "viz-cell wide" + (o.cls ? " " + o.cls : ""), String(o.v)));
      });
      if (!s.items || !s.items.length) st.appendChild(el("div", "viz-cell ghost wide", "empty"));
      col.appendChild(st);
      col.appendChild(el("div", "viz-stacklabel", s.label || ""));
      wrap.appendChild(col);
    });
    mount.appendChild(wrap);
  }

  /* ---------------- view: key-value chips ---------------- */
  /* state: {label, pairs:[{k,v,cls}]}  (v optional → set-style chips) */
  function kv(state, mount) {
    const wrap = el("div", "viz-kv");
    if (state.label !== undefined) wrap.appendChild(el("span", "viz-kvlabel", state.label));
    if (!state.pairs || !state.pairs.length) wrap.appendChild(el("span", "viz-chip ghost", "empty"));
    (state.pairs || []).forEach(function (p) {
      const txt = p.v === undefined ? String(p.k) : p.k + " &#8594; " + p.v;
      wrap.appendChild(el("span", "viz-chip" + (p.cls ? " " + p.cls : ""), txt));
    });
    mount.appendChild(wrap);
  }

  /* ---------------- view: grid ---------------- */
  /* state: {cells:[[v|{v,cls}]], rowLabels:[], colLabels:[]} */
  function grid(state, mount) {
    const t = el("table", "viz-grid");
    if (state.colLabels) {
      const tr = el("tr");
      tr.appendChild(el("th"));
      state.colLabels.forEach(function (c) { tr.appendChild(el("th", null, String(c))); });
      t.appendChild(tr);
    }
    state.cells.forEach(function (row, r) {
      const tr = el("tr");
      if (state.rowLabels) tr.appendChild(el("th", null, String(state.rowLabels[r])));
      row.forEach(function (c) {
        const o = cellObj(c);
        tr.appendChild(el("td", o.cls || null, o.v === undefined ? "" : String(o.v)));
      });
      t.appendChild(tr);
    });
    mount.appendChild(t);
  }

  /* ---------------- view: spans / timeline ---------------- */
  /* state: {min, max, rows, bars:[{lo,hi,row,cls,label}]}  — px = 40 per unit/scaled */
  function spans(state, mount) {
    const W = 560, rowH = 24;
    const scale = W / (state.max - state.min || 1);
    const box = el("div", "viz-spans");
    box.style.width = W + "px";
    box.style.height = (state.rows * rowH + 6) + "px";
    (state.bars || []).forEach(function (b) {
      const s = el("div", "viz-span" + (b.cls ? " " + b.cls : ""), b.label || "");
      const lo = (b.lo - state.min) * scale;
      const w = Math.max((b.hi - b.lo) * scale, 8);
      s.style.left = lo + "px";
      s.style.width = w + "px";
      s.style.top = (b.row * rowH + 4) + "px";
      if (b.cls && b.cls.indexOf("zone") >= 0) s.style.height = (state.rows * rowH - 4) + "px";
      box.appendChild(s);
    });
    mount.appendChild(box);
  }

  /* ---------------- view factory: tree ---------------- */
  /* config: {root: {id, v, children:[node|null,...]}, gapX, gapY, r}
     frame:  {hl:{id:cls}, badge:{id:text}, ehl:{"a-b":cls}, dim:[ids]}           */
  function tree(config) {
    const gapX = config.gapX || 46, gapY = config.gapY || 58, R = config.r || 15;
    const pos = {}, nodes = [], edges = [];
    let x = 0, maxD = 0;
    (function walk(n, d) {
      if (!n) { x += 0.6; return; }
      maxD = Math.max(maxD, d);
      const kids = n.children || [];
      if (!kids.length || kids.every(function (k) { return !k; })) {
        pos[n.id] = { x: x++, y: d };
      } else {
        const xs = [];
        kids.forEach(function (k) {
          if (k) { walk(k, d + 1); xs.push(pos[k.id].x); edges.push([n.id, k.id]); }
          else { xs.push(x); x += 0.6; }
        });
        pos[n.id] = { x: (Math.min.apply(null, xs) + Math.max.apply(null, xs)) / 2, y: d };
      }
      nodes.push(n);
    })(config.root, 0);
    const W = (x + 0.5) * gapX + 20, H = (maxD + 1) * gapY + 24;
    function P(id) { return { x: pos[id].x * gapX + gapX / 2 + 10, y: pos[id].y * gapY + 26 }; }

    return function (state, mount) {
      state = state || {};
      const dim = {};
      (state.dim || []).forEach(function (id) { dim[id] = true; });
      const svg = svgEl("svg", { width: W, height: H, viewBox: "0 0 " + W + " " + H });
      edges.forEach(function (e) {
        const a = P(e[0]), b = P(e[1]);
        let cls = "viz-svgedge";
        const hl = state.ehl && (state.ehl[e[0] + "-" + e[1]] || state.ehl[e[1] + "-" + e[0]]);
        if (hl) cls += " " + hl;
        if (dim[e[0]] || dim[e[1]]) cls += " dim";
        const ln = svgEl("line", { x1: a.x, y1: a.y, x2: b.x, y2: b.y, "class": cls });
        svg.appendChild(ln);
      });
      nodes.forEach(function (n) {
        const p = P(n.id);
        const g = svgEl("g", {
          "class": "viz-svgnode" +
            (state.hl && state.hl[n.id] ? " " + state.hl[n.id] : "") +
            (dim[n.id] ? " dim" : "")
        });
        g.appendChild(svgEl("circle", { cx: p.x, cy: p.y, r: R }));
        const t = svgEl("text", {
          x: p.x, y: p.y + 4, "text-anchor": "middle", "font-size": "12"
        });
        t.textContent = String(n.v);
        g.appendChild(t);
        const badge = state.badge && state.badge[n.id];
        if (badge !== undefined) {
          const bt = svgEl("text", {
            x: p.x + R + 3, y: p.y - R + 4, "font-size": "10", fill: "#a00000",
            "font-weight": "bold"
          });
          bt.textContent = String(badge);
          g.appendChild(bt);
        }
        svg.appendChild(g);
      });
      mount.appendChild(svg);
    };
  }

  /* ---------------- view factory: graph ---------------- */
  /* config: {nodes:{id:[x,y]}, edges:[[a,b,label?]], directed, width, height}
     frame:  {hl:{id:cls}, ehl:{"a-b":cls}, nlabel:{id:text}, edges: override}   */
  let markerSeq = 0;
  function graph(config) {
    const W = config.width || 460, H = config.height || 220, R = 16;
    return function (state, mount) {
      state = state || {};
      const svg = svgEl("svg", { width: W, height: H, viewBox: "0 0 " + W + " " + H });
      const mid = "vzarrow" + (markerSeq++);
      if (config.directed) {
        const defs = svgEl("defs", {});
        const m = svgEl("marker", {
          id: mid, viewBox: "0 0 10 10", refX: "9", refY: "5",
          markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse"
        });
        m.appendChild(svgEl("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#888" }));
        defs.appendChild(m);
        svg.appendChild(defs);
      }
      const edges = state.edges || config.edges || [];
      edges.forEach(function (e) {
        const a = config.nodes[e[0]], b = config.nodes[e[1]];
        let cls = "viz-svgedge";
        const hl = state.ehl && (state.ehl[e[0] + "-" + e[1]] ||
                                 (!config.directed && state.ehl[e[1] + "-" + e[0]]));
        if (hl) cls += " " + hl;
        // shorten line so arrowheads sit outside node circles
        const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
        const pad = R + 2;
        const x1 = a[0] + dx / len * pad, y1 = a[1] + dy / len * pad;
        const x2 = b[0] - dx / len * pad, y2 = b[1] - dy / len * pad;
        const attrs = { x1: x1, y1: y1, x2: x2, y2: y2, "class": cls };
        if (config.directed) attrs["marker-end"] = "url(#" + mid + ")";
        svg.appendChild(svgEl("line", attrs));
        if (e[2] !== undefined) {
          const t = svgEl("text", {
            x: (a[0] + b[0]) / 2 + 7, y: (a[1] + b[1]) / 2 - 5,
            "font-size": "11", fill: "#555"
          });
          t.textContent = String(e[2]);
          svg.appendChild(t);
        }
      });
      for (const id in config.nodes) {
        const p = config.nodes[id];
        const g = svgEl("g", {
          "class": "viz-svgnode" + (state.hl && state.hl[id] ? " " + state.hl[id] : "")
        });
        g.appendChild(svgEl("circle", { cx: p[0], cy: p[1], r: R }));
        const t = svgEl("text", { x: p[0], y: p[1] + 4, "text-anchor": "middle", "font-size": "12" });
        t.textContent = id;
        g.appendChild(t);
        const nl = state.nlabel && state.nlabel[id];
        if (nl !== undefined) {
          const lt = svgEl("text", {
            x: p[0], y: p[1] + R + 13, "text-anchor": "middle",
            "font-size": "10", fill: "#a00000", "font-weight": "bold"
          });
          lt.textContent = String(nl);
          g.appendChild(lt);
        }
        svg.appendChild(g);
      }
      mount.appendChild(svg);
    };
  }

  /* ---------------- composition ---------------- */
  function sub(key, view) {
    return function (state, mount) { if (state[key]) view(state[key], mount); };
  }
  function group() {
    const views = Array.prototype.slice.call(arguments);
    return function (state, mount) {
      views.forEach(function (v) {
        const box = el("div");
        box.style.marginBottom = "10px";
        v(state, box);
        mount.appendChild(box);
      });
    };
  }

  /* ---------------- bespoke: Big-O growth explorer ---------------- */
  function growthExplorer(id) {
    const root = document.getElementById(id);
    root.classList.add("viz");
    root.appendChild(el("div", "viz-caption",
      "Interactive — drag n and watch each class's operation count"));
    const ctl = el("div", "viz-form");
    const slider = document.createElement("input");
    slider.type = "range"; slider.min = "1"; slider.max = "60"; slider.value = "20";
    const lab = el("label", null, "n = ");
    const nOut = el("strong", null, "");
    lab.appendChild(nOut);
    ctl.appendChild(lab); ctl.appendChild(slider);
    root.appendChild(ctl);
    const stage = el("div", "viz-stage");
    root.appendChild(stage);
    const note = el("div", "viz-note",
      "The bars use a LOG scale — every extra notch of bar length is 10× more work. " +
      "Watch O(2&#8319;) fall off a cliff around n &#8776; 30, and how little separates " +
      "O(n) from O(n log n).");
    root.appendChild(note);

    function fmt(x) {
      if (x < 1000) return String(Math.round(x * 10) / 10);
      if (x < 1e15) return x.toExponential(1).replace("e+", "&#215;10^");
      return x.toExponential(0).replace("e+", "&#215;10^");
    }
    function draw() {
      // slider is exponential: n from 2 to ~1,000,000
      const t = Number(slider.value);
      const n = Math.round(Math.pow(10, 0.1 * t));
      nOut.innerHTML = n.toLocaleString();
      const classes = [
        ["O(1)", 1],
        ["O(log n)", Math.log2(n)],
        ["O(n)", n],
        ["O(n log n)", n * Math.log2(n)],
        ["O(n&#178;)", n * n],
        ["O(2&#8319;)", Math.pow(2, Math.min(n, 1024))]
      ];
      stage.innerHTML = "";
      const maxLog = 18; // bars max out at 10^18
      classes.forEach(function (c) {
        const row = el("div", "viz-growth-row");
        row.appendChild(el("span", "viz-growth-name", c[0]));
        const bar = el("div", "viz-growth-bar");
        const lg = Math.max(Math.log10(Math.max(c[1], 1)), 0.02);
        bar.style.width = Math.min(lg / maxLog, 1) * 420 + "px";
        if (c[1] > 1e12) bar.style.background = "#b42318";
        row.appendChild(bar);
        row.appendChild(el("span", "viz-growth-val",
          c[1] > 1e18 ? "&#8776;10^" + Math.round(Math.log10(c[1])) + " (heat death territory)" : fmt(c[1]) + " ops"));
        stage.appendChild(row);
      });
    }
    slider.addEventListener("input", draw);
    draw();
  }

  /* ---------------- bespoke: hash bucket demo ---------------- */
  function hashDemo(id) {
    const root = document.getElementById(id);
    root.classList.add("viz");
    root.appendChild(el("div", "viz-caption",
      "Interactive — type any key, watch it hash to a bucket"));
    const form = el("div", "viz-form");
    const inp = document.createElement("input");
    inp.type = "text"; inp.value = "cat"; inp.size = 12;
    const lab = el("label", null, "key: ");
    lab.appendChild(inp);
    const btn = el("button", null, "add to table");
    const clr = el("button", null, "reset");
    form.appendChild(lab); form.appendChild(btn); form.appendChild(clr);
    root.appendChild(form);
    const stage = el("div", "viz-stage");
    const note = el("div", "viz-note", "Add a few keys. Two keys landing in one bucket = a collision.");
    root.appendChild(stage); root.appendChild(note);

    const B = 8;
    let buckets = [];
    function reset() { buckets = []; for (let i = 0; i < B; i++) buckets.push([]); }
    reset();
    function hash(s) {                      // djb2, small and real
      let h = 5381;
      for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
      return h;
    }
    function draw(activeSlot) {
      stage.innerHTML = "";
      const wrap = el("div", "viz-stackwrap");
      for (let i = 0; i < B; i++) {
        const col = el("div", "viz-stackcol");
        const st = el("div", "viz-stack");
        buckets[i].forEach(function (k, j) {
          const isNew = (i === activeSlot && j === buckets[i].length - 1);
          const collided = buckets[i].length > 1;
          st.appendChild(el("div", "viz-cell wide" +
            (isNew ? " hl" : collided ? " bad" : " good"), k));
        });
        if (!buckets[i].length) st.appendChild(el("div", "viz-cell ghost wide", "&nbsp;"));
        col.appendChild(st);
        col.appendChild(el("div", "viz-stacklabel",
          (i === activeSlot ? "&#9650; " : "") + "slot " + i));
        wrap.appendChild(col);
      }
      stage.appendChild(wrap);
    }
    btn.onclick = function () {
      const k = inp.value.trim();
      if (!k) return;
      const h = hash(k), slot = h % B;
      const dupe = buckets[slot].indexOf(k) !== -1;
      if (!dupe) buckets[slot].push(k);
      draw(slot);
      note.innerHTML = "<code>hash(&quot;" + k.replace(/</g, "&lt;") + "&quot;) = " +
        h.toLocaleString() + "</code> &#8594; <code>" + h.toLocaleString() + " % " + B +
        " = slot " + slot + "</code>. " +
        (dupe ? "Already there — sets/dicts detect this in the same O(1) hop." :
          buckets[slot].length > 1
            ? "<strong>Collision!</strong> The bucket chains entries — still O(1) average while buckets stay short; the table resizes before they don't."
            : "Straight to its slot — no scanning, no comparisons with other keys. That arithmetic IS the O(1).");
    };
    clr.onclick = function () { reset(); draw(-1); note.innerHTML = "Table cleared."; };
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") btn.onclick(); });
    draw(-1);
  }

  return {
    player: player, runnable: runnable,
    array: array, list: list, stack: stack, kv: kv, grid: grid, spans: spans,
    tree: tree, graph: graph, sub: sub, group: group,
    growthExplorer: growthExplorer, hashDemo: hashDemo
  };
})();
