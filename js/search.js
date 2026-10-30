// 全站搜索（Ctrl/⌘ + K，或顶栏的放大镜）：考点、讲解小节、真题，一个框里搜。
(function () {
  'use strict';
  var KY = window.KY;
  var dlg, input, list, items = [], active = -1, timer = null, renderedQ = null;
  var cache = null;

  function norm(s) { return String(s || '').toLowerCase().replace(/\s+/g, ''); }
  // 建索引（只在第一次打开搜索时建）
  function index() {
    if (cache) return cache;
    var kps = KY.tax.kps.map(function (k) {
      return { k: k, text: norm(k.title + k.scope + k.id) };
    });
    var secs = [];
    Object.keys(KY.meta.lessons).forEach(function (id) {
      var L = KY.meta.lessons[id];
      L.sections.forEach(function (s, i) {
        var t = KY.plain(s.title);
        secs.push({ id: id, i: i, title: t, lesson: L.title, kind: s.kind, text: norm(L.title + t) });
      });
    });
    var probs = KY.meta.problems.map(function (p) {
      return { p: p, text: norm(p.year + '年' + p.no + KY.plain(p.stem) + (p.options || []).map(KY.plain).join('') + p.kp.map(function (k) { return KY.kpById[k].title; }).join('') + (p.methods || []).join('')) };
    });
    cache = { kps: kps, secs: secs, probs: probs };
    return cache;
  }
  // 多个关键词（空格分开）都要命中
  function match(text, words) { for (var i = 0; i < words.length; i++) if (text.indexOf(words[i]) < 0) return false; return true; }

  function results(q) {
    var words = String(q).toLowerCase().split(/\s+/).filter(Boolean).map(norm);
    if (!words.length) return [];
    var I = index();
    var out = [];
    // 考点：标题命中的排在只在大纲范围里命中的前面
    I.kps.filter(function (x) { return match(x.text, words); })
      .map(function (x, n) { return { x: x, s: (match(norm(x.k.title), words) ? 2 : 0) + (KY.meta.lessons[x.k.id] ? 1 : 0), n: n }; })
      .sort(function (a, b) { return b.s - a.s || a.n - b.n; })
      .map(function (o) { return o.x; })
      .slice(0, 6).forEach(function (x) {
      var has = !!KY.meta.lessons[x.k.id];
      out.push({ group: '考点', tok: has ? 'l-' + x.k.id : 'kp-' + x.k.id, html: '<b>' + KY.esc(x.k.title) + '</b><small>' + (has ? '基础讲解' : '考点分析（讲解整理中）') + ' · ' + KY.esc(KY.chById[x.k.ch].title) + '</small>' });
    });
    I.secs.filter(function (x) { return match(x.text, words); }).slice(0, 10).forEach(function (x) {
      out.push({ group: '讲解小节', tok: 'l-' + x.id + '~s-' + x.i, html: '<b>' + KY.esc(x.title) + '</b><small>' + KY.esc(x.lesson) + '</small>' });
    });
    var ps = I.probs.filter(function (x) { return match(x.text, words); });
    ps.sort(function (a, b) { return KY.byYearDesc(a.p, b.p); });
    ps.slice(0, 10).forEach(function (x) {
      var stem = KY.plain(x.p.stem).replace(/\s+/g, ' ');
      out.push({ group: '真题', peek: x.p.id, html: '<b>' + x.p.year + ' 年 ' + KY.esc(x.p.no) + ' · ' + x.p.type + '题</b><small>' + KY.esc(stem.slice(0, 70)) + (stem.length > 70 ? '…' : '') + '</small>' });
    });
    if (ps.length > 10) out.push({ group: '真题', bank: q, html: '<b>在真题库里看全部 ' + ps.length + ' 道</b><small>用真题库的筛选继续缩小范围</small>' });
    return out;
  }

  function render() {
    var q = input.value.trim();
    renderedQ = q;
    items = results(q);
    active = items.length ? 0 : -1;
    if (!q) { list.innerHTML = '<p class="search-empty">输入关键词，例如：拉格朗日、泰勒 极限、2019、渐近线。多个词用空格分开。</p>'; return; }
    if (!items.length) { list.innerHTML = '<p class="search-empty">没有找到「' + KY.esc(q) + '」。换个说法，或者少输几个字试试。</p>'; return; }
    var h = '';
    var g = '';
    items.forEach(function (it, i) {
      if (it.group !== g) { g = it.group; h += '<p class="search-g">' + g + '</p>'; }
      h += '<button type="button" class="search-it" role="option" id="sr-' + i + '" data-i="' + i + '" aria-selected="' + (i === active) + '">' + it.html + '</button>';
    });
    list.innerHTML = h;
    input.setAttribute('aria-activedescendant', 'sr-0');
  }
  function setActive(i) {
    if (!items.length) return;
    active = (i + items.length) % items.length;
    Array.prototype.forEach.call(list.querySelectorAll('.search-it'), function (b) { b.setAttribute('aria-selected', String(+b.dataset.i === active)); });
    var el = document.getElementById('sr-' + active);
    if (el) { el.scrollIntoView({ block: 'nearest' }); input.setAttribute('aria-activedescendant', el.id); }
  }
  function choose(i) {
    var it = items[i];
    if (!it) return;
    dlg.close();
    if (it.peek) KY.peek(it.peek);
    else if (it.bank) KY.openBank({ q: it.bank });
    else KY.go(it.tok);
  }

  KY.openSearch = function () {
    dlg = dlg || document.getElementById('search');
    input = input || document.getElementById('search-q');
    list = list || document.getElementById('search-list');
    if (!dlg.open) { if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', ''); }
    input.select();
    render();
  };

  document.addEventListener('click', function (e) {
    if (e.target.closest('#search-btn')) { KY.openSearch(); return; }
    var it = e.target.closest('.search-it');
    if (it) { choose(+it.dataset.i); return; }
    if (e.target.id === 'search' || e.target.closest('[data-search-close]')) document.getElementById('search').close();
  });
  document.addEventListener('input', function (e) {
    if (e.target.id !== 'search-q') return;
    clearTimeout(timer);
    timer = setTimeout(render, 120);
  });
  document.addEventListener('keydown', function (e) {
    var k = e.key;
    if ((e.ctrlKey || e.metaKey) && (k === 'k' || k === 'K')) { e.preventDefault(); KY.openSearch(); return; }
    if (e.target.id !== 'search-q') return;
    if (k === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (k === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (k === 'Enter') {
      e.preventDefault();
      clearTimeout(timer);
      if (input.value.trim() !== renderedQ) render(); // 还没来得及刷新结果就按了回车
      if (active >= 0) choose(active);
    }
  });
})();
