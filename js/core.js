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
    // 带编号（\tag）的独立公式，MathJax 会给容器设 min-width，手机上会把整页撑宽：
    // 把 min-width 挪到里面的 svg 上，容器本身保持不超过版心、横向滚动
    Array.prototype.forEach.call(root.querySelectorAll('mjx-container[width="full"]'), function (el) {
      var mw = el.style.minWidth;
      var svg = el.firstElementChild;
      if (mw && mw !== '0px' && svg) { svg.style.minWidth = mw; el.style.minWidth = '0'; }
    });
    var els = root.querySelectorAll('mjx-container:not([display="true"])');
    Array.prototype.forEach.call(els, function (el) { el.classList.remove('mjx-wide'); });
    Array.prototype.forEach.call(els, function (el) {
      var box = el.parentElement;
      if (box && box.clientWidth && el.getBoundingClientRect().width > box.clientWidth + 1) el.classList.add('mjx-wide');
    });
  }
  KY.busyTypeset = 0; // 正在排版的块数（测试用来等排版结束）
  KY.typeset = function (el) {
    var MJ = window.MathJax;
    if (!el) return Promise.resolve();
    if (window.__mjReady && MJ && MJ.typesetPromise) {
      KY.busyTypeset++;
      return MJ.typesetPromise([el]).then(function () { fitMath(el); }).catch(function (e) { console.warn(e); })
        .then(function () { KY.busyTypeset--; });
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

  // 长页面按需排版：带 lazy-block 类的块（同时带 mj-lazy，MathJax 先跳过）快滚到眼前时才排版，
  // 手机上打开几万像素长的讲解不会卡住好几秒。
  var lazyObs = null;
  function typesetLazy(el) {
    if (!el.classList.contains('mj-lazy')) return Promise.resolve();
    el.classList.remove('mj-lazy');
    if (lazyObs) lazyObs.unobserve(el);
    return KY.typeset(el);
  }
  KY.watchLazy = function (root) {
    if (lazyObs) lazyObs.disconnect();
    lazyObs = null;
    var els = root.querySelectorAll('.lazy-block.mj-lazy');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { Array.prototype.forEach.call(els, typesetLazy); return; }
    lazyObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) typesetLazy(en.target); });
    }, { rootMargin: '1200px 0px 1200px 0px' });
    Array.prototype.forEach.call(els, function (el) { lazyObs.observe(el); });
  };
  // 立即排版剩下的全部块（打印、测试时用）
  KY.flushLazy = function (root) {
    var els = (root || document).querySelectorAll('.lazy-block.mj-lazy');
    return Promise.all(Array.prototype.map.call(els, typesetLazy));
  };
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
    // 换页时关掉浮层，停掉上一页的按需排版
    Array.prototype.forEach.call(document.querySelectorAll('dialog[open]'), function (d) { d.close(); });
    if (lazyObs) { lazyObs.disconnect(); lazyObs = null; }
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
      decorateRefs(view);
      emit('rendered', r);
      KY.typeset(view);
      KY.watchLazy(view);
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

  // 讲解里的真题引用 <span class="qref" data-q="2019-9">…</span>：做成可聚焦的链接，点开在浮层里看题
  function decorateRefs(root) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-q]'), function (el) {
      var p = KY.pById[el.dataset.q];
      if (!p) { el.classList.add('qref-missing'); return; }
      el.setAttribute('role', 'link');
      el.setAttribute('tabindex', '0');
      el.setAttribute('title', p.year + ' 年 ' + p.no + ' · ' + p.type + '题 · 点开看题');
    });
  }
  KY.decorateRefs = decorateRefs;
  // 页内跳转：目标和它前面两块先排版，免得公式排好后位置跳动；距离远就直接跳过去
  KY.scrollToId = function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var go = function () {
      var far = Math.abs(el.getBoundingClientRect().top) > window.innerHeight * 2;
      var smooth = !far && !matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    };
    var lazy = [];
    for (var cur = el, i = 0; cur && i < 3; cur = cur.previousElementSibling, i++) if (cur.classList.contains('mj-lazy')) lazy.push(cur);
    if (!lazy.length) { go(); return; }
    Promise.all(lazy.map(typesetLazy)).then(go, go);
  };

  // 全局点击：站内跳转、看题浮层、页内滚动
  document.addEventListener('click', function (e) {
    var pk = e.target.closest('a[data-peek]');
    if (pk && !e.metaKey && !e.ctrlKey && KY.peek) { e.preventDefault(); KY.peek(pk.dataset.peek, pk); return; }
    var a = e.target.closest('a[data-go]');
    if (a && !e.metaKey && !e.ctrlKey) { e.preventDefault(); KY.go(a.dataset.go); return; }
    var qr = e.target.closest('[data-q]');
    if (qr && KY.pById[qr.dataset.q] && KY.peek) { e.preventDefault(); KY.peek(qr.dataset.q, qr); return; }
    var s = e.target.closest('[data-scroll]');
    if (s) {
      e.preventDefault();
      var dlg = s.closest('dialog');
      if (dlg && dlg.open) dlg.close();
      KY.scrollToId(s.dataset.scroll);
    }
  });
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if ((e.key === 'Enter' || e.key === ' ') && t.matches && t.matches('[data-q][role="link"]')) { e.preventDefault(); t.click(); return; }
    // 「/」聚焦搜索框（真题库）
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) && !t.isContentEditable) {
      var q = document.getElementById('bf-q');
      if (q) { e.preventDefault(); q.focus(); q.select(); }
    }
  });

  /* ── 配色：跟随系统 → 浅色 → 深色 ── */
  var THEME_KEY = 'ky2-theme';
  var THEME_NAME = { '': '跟随系统', light: '浅色', dark: '深色' };
  var THEME_ICON = {
    '': '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 3a7 7 0 0 1 0 14z" fill="currentColor"/></svg>',
    light: '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.6" fill="currentColor"/><g stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M10 1.8v2.4M10 15.8v2.4M1.8 10h2.4M15.8 10h2.4M4.2 4.2l1.7 1.7M14.1 14.1l1.7 1.7M4.2 15.8l1.7-1.7M14.1 5.9l1.7-1.7"/></g></svg>',
    dark: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15.5 13.2A7 7 0 0 1 6.8 4.5a7 7 0 1 0 8.7 8.7z" fill="currentColor"/></svg>',
  };
  KY.theme = readJSON(THEME_KEY, '') || '';
  function applyTheme() {
    var t = KY.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    var b = document.getElementById('theme-btn');
    if (!b) return;
    var label = '配色：' + THEME_NAME[t] + '（点击切换）';
    b.innerHTML = THEME_ICON[t];
    b.setAttribute('aria-label', label);
    b.title = label;
  }
  applyTheme();
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#theme-btn')) return;
    var order = ['', 'light', 'dark'];
    KY.theme = order[(order.indexOf(KY.theme) + 1) % order.length];
    writeJSON(THEME_KEY, KY.theme);
    applyTheme();
    KY.toast('配色：' + THEME_NAME[KY.theme]);
  });
})();
