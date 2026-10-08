// 核心：数据注册、按需加载、进度存储、路由、公式排版与通用小工具。
// 其他脚本都挂在全局 KY 上。
(function () {
  'use strict';

  var KY = (window.KY = {
    meta: null,
    sol: {},       // 题目 id → 详细解析
    solYears: {},  // 已加载的年份
    lessons: {},   // 考点 id → 讲解全文
    views: {},     // 路由名 → 渲染函数
    on: {},        // 事件钩子
  });

  /* ── 数据回调（由 data/*.js 调用） ── */
  window.KY_setMeta = function (m) {
    KY.meta = m;
    KY.tax = m.taxonomy;
    KY.chById = {};
    KY.chOrder = {};
    m.taxonomy.chapters.forEach(function (c, i) { KY.chById[c.id] = c; KY.chOrder[c.id] = i; });
    KY.kpById = {};
    KY.kpOrder = {};
    m.taxonomy.kps.forEach(function (k, i) { KY.kpById[k.id] = k; KY.kpOrder[k.id] = i; });
    KY.pById = {};
    m.problems.forEach(function (p) { KY.pById[p.id] = p; });
  };
  window.KY_addSolutions = function (d) {
    KY.solYears[d.year] = true;
    Object.keys(d.sol).forEach(function (id) { KY.sol[id] = d.sol[id]; });
  };
  window.KY_addLesson = function (l) { KY.lessons[l.id] = l; };

  /* ── 按需加载脚本（file:// 与 artifact 都可用） ── */
  var loading = {};
  KY.loadScript = function (src) {
    if (loading[src]) return loading[src];
    loading[src] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { resolve(); };
      s.onerror = function () { delete loading[src]; reject(new Error('加载失败：' + src)); };
      document.head.appendChild(s);
    });
    return loading[src];
  };
  KY.ensureSolutions = function (year) {
    if (KY.solYears[year]) return Promise.resolve();
    return KY.loadScript('data/sol/' + year + '.js');
  };
  KY.ensureLesson = function (id) {
    if (KY.lessons[id]) return Promise.resolve(KY.lessons[id]);
    if (!KY.meta.lessons[id]) return Promise.reject(new Error('这一篇讲解还没有写好'));
    return KY.loadScript('data/lessons/' + id + '.js').then(function () { return KY.lessons[id]; });
  };

  /* ── 本地存储（只存在这个浏览器里） ── */
  function readJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch (e) { return fallback; }
  }
  function writeJSON(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* 隐私模式等情况下存不了，只在本次有效 */ }
  }
  KY.readJSON = readJSON;
  KY.writeJSON = writeJSON;
  var PKEY = 'ky2-progress';
  KY.prog = readJSON(PKEY, null) || { p: {}, l: {}, quiz: {} };
  ['p', 'l', 'quiz'].forEach(function (k) { if (!KY.prog[k]) KY.prog[k] = {}; });
  KY.saveProg = function () { writeJSON(PKEY, KY.prog); emit('progress'); };
  KY.status = function (id) { return KY.prog.p[id] || ''; };
  KY.setStatus = function (id, st) {
    if (KY.prog.p[id] === st) delete KY.prog.p[id]; else KY.prog.p[id] = st;
    KY.saveProg();
  };
  KY.lessonDone = function (id) { return !!(KY.prog.l[id] && KY.prog.l[id].done); };
  KY.setLessonDone = function (id, done) {
    KY.prog.l[id] = KY.prog.l[id] || {};
    KY.prog.l[id].done = !!done;
    KY.saveProg();
  };
  KY.resetProgress = function () { KY.prog = { p: {}, l: {}, quiz: {} }; KY.saveProg(); };

  /* ── 事件 ── */
  function emit(name, data) { (KY.on[name] || []).forEach(function (fn) { try { fn(data); } catch (e) { console.error(e); } }); }
  KY.emit = emit;
  KY.listen = function (name, fn) { (KY.on[name] = KY.on[name] || []).push(fn); };

  /* ── 小工具 ── */
  KY.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  };
  KY.link = function (tok, html, cls, extra) {
    return '<a href="#' + tok + '" data-go="' + tok + '"' + (cls ? ' class="' + cls + '"' : '') + (extra || '') + '>' + html + '</a>';
  };
  // HTML（含 TeX 源码）→ 纯文本，用于给 AI 的上下文与搜索
  var scratch = document.createElement('div');
  KY.plain = function (html) {
    if (!html) return '';
    scratch.innerHTML = String(html).replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|li|div|tr|h\d)>/gi, '\n');
    return scratch.textContent.replace(/\n{3,}/g, '\n\n').trim();
  };
  KY.dots = function (n) {
    var s = '';
    for (var i = 1; i <= 5; i++) s += '<i class="' + (i <= n ? 'on' : '') + '"></i>';
    return '<span class="dots" role="img" aria-label="难度 ' + n + ' / 5" title="难度 ' + n + ' / 5">' + s + '</span>';
  };
  KY.kpChip = function (id, extra) {
    var k = KY.kpById[id];
    if (!k) return '';
    return KY.link('kp-' + id, KY.esc(k.title), 'chip' + (extra ? ' ' + extra : ''));
  };
  KY.byYearDesc = function (a, b) { return b.year - a.year || a.id.localeCompare(b.id, 'en', { numeric: true }); };
  KY.byYearAsc = function (a, b) { return a.year - b.year || a.id.localeCompare(b.id, 'en', { numeric: true }); };
  KY.problemsOfKp = function (kp, primaryOnly) {
    return KY.meta.problems.filter(function (p) { return primaryOnly ? p.kp[0] === kp : p.kp.indexOf(kp) >= 0; });
  };
  KY.tally = function (list) {
    var t = { ok: 0, bad: 0, n: list.length };
    list.forEach(function (p) { var s = KY.prog.p[p.id]; if (s === 'ok') t.ok++; else if (s === 'bad') t.bad++; });
    return t;
  };
  KY.meter = function (t, label) {
    var okp = t.n ? (t.ok / t.n) * 100 : 0;
    var badp = t.n ? (t.bad / t.n) * 100 : 0;
    return '<div class="meter"><div class="meter-track" role="img" aria-label="已掌握 ' + t.ok + '，错题 ' + t.bad + '，共 ' + t.n + '">' +
      '<i class="m-ok" style="width:' + okp + '%"></i><i class="m-bad" style="width:' + badp + '%"></i></div>' +
      '<span class="meter-label">' + (label || '已掌握') + ' ' + t.ok + ' / ' + t.n + (t.bad ? ' · 错题 ' + t.bad : '') + '</span></div>';
  };
  KY.toast = function (msg) {
    var el = document.getElementById('toast');
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(KY.toast.t);
    KY.toast.t = setTimeout(function () { el.hidden = true; }, 2600);
  };
  KY.copy = function (text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return false; });
    }
    return Promise.resolve(false);
  };

  /* ── MathJax 排版 ── */
  var pending = [];
  function fitMath(root) {
    var els = root.querySelectorAll('mjx-container:not([display="true"])');
    Array.prototype.forEach.call(els, function (el) { el.classList.remove('mjx-wide'); });
    Array.prototype.forEach.call(els, function (el) {
      var box = el.parentElement;
      if (box && box.clientWidth && el.getBoundingClientRect().width > box.clientWidth + 1) el.classList.add('mjx-wide');
    });
  }
  KY.typeset = function (el) {
    var MJ = window.MathJax;
    if (!el) return Promise.resolve();
    if (window.__mjReady && MJ && MJ.typesetPromise) {
      return MJ.typesetPromise([el]).then(function () { fitMath(el); }).catch(function (e) { console.warn(e); });
    }
    pending.push(el);
    return Promise.resolve();
  };
  KY.untypeset = function (el) {
    var MJ = window.MathJax;
    if (window.__mjReady && MJ && MJ.typesetClear && el) MJ.typesetClear([el]);
  };
  document.addEventListener('mj-ready', function () {
    pending.splice(0).forEach(function (el) { if (document.contains(el)) KY.typeset(el); });
  });
  var fitTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(function () { if (window.__mjReady) fitMath(document.getElementById('view')); }, 150);
  });

  /* ── 路由 ── */
  KY.current = '';
  function parse(tok) {
    tok = tok || 'home';
    var m;
    if (tok === 'home' || tok === 'learn' || tok === 'bank' || tok === 'stats' || tok === 'practice' || tok === 'wrong') return { view: tok, tok: tok };
    if ((m = /^l-(.+)$/.exec(tok)) && KY.kpById[m[1]]) return { view: 'lesson', id: m[1], tok: tok };
    if ((m = /^kp-(.+)$/.exec(tok)) && KY.kpById[m[1]]) return { view: 'kp', id: m[1], tok: tok };
    if ((m = /^q-(.+)$/.exec(tok)) && KY.pById[m[1]]) return { view: 'problem', id: m[1], tok: tok };
    if ((m = /^y(\d{4})$/.exec(tok)) && KY.meta.stats.years.indexOf(+m[1]) >= 0) return { view: 'year', year: +m[1], tok: tok };
    return { view: 'home', tok: 'home' };
  }
  var NAV_OF = { home: 'home', learn: 'learn', lesson: 'learn', bank: 'bank', year: 'bank', problem: 'bank', stats: 'stats', kp: 'stats', practice: 'practice', wrong: 'wrong' };
  KY.render = function (tok, opts) {
    opts = opts || {};
    var r = parse(tok);
    var view = document.getElementById('view');
    KY.untypeset(view);
    KY.current = r.tok;
    KY.route = r;
    var fn = KY.views[r.view];
    var out = fn(r);
    var done = function (html) {
      if (KY.route !== r) return; // 期间已切换到别的页面
      view.innerHTML = html;
      Array.prototype.forEach.call(document.querySelectorAll('[data-nav]'), function (a) {
        if (a.dataset.nav === NAV_OF[r.view]) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      });
      emit('rendered', r);
      KY.typeset(view);
      if (opts.anchor && document.getElementById(opts.anchor)) document.getElementById(opts.anchor).scrollIntoView();
      else if (!opts.keepScroll) window.scrollTo(0, 0);
    };
    if (out && typeof out.then === 'function') {
      view.innerHTML = '<div class="wrap"><p class="loading">正在加载…</p></div>';
      out.then(done, function (e) { done('<div class="wrap"><div class="empty"><b>没能打开这一页</b><span>' + KY.esc(e.message) + '</span>' + KY.link('home', '回到总览', 'btn') + '</div></div>'); });
    } else done(out);
  };
  KY.go = function (tok, opts) {
    try { history.pushState(null, '', '#' + tok); } catch (e) { /* 部分嵌入环境不允许改地址 */ }
    KY.render(tok, opts);
  };
  window.addEventListener('popstate', function () { KY.render(location.hash.slice(1)); });

  // 全局点击：站内跳转、页内滚动
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-go]');
    if (a && !e.metaKey && !e.ctrlKey) { e.preventDefault(); KY.go(a.dataset.go); return; }
    var s = e.target.closest('[data-scroll]');
    if (s) {
      e.preventDefault();
      var el = document.getElementById(s.dataset.scroll);
      if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  });
})();
