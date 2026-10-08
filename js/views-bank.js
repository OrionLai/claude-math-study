// 真题库（筛选、搜索、分页）、年份卷、单题页、随机刷题、错题本。
(function () {
  'use strict';
  var KY = window.KY;
  var PAGE = 12;

  /* ── 筛选状态（记在本浏览器里） ── */
  function defaults() {
    var ys = KY.meta.stats.years;
    return { ch: '', kp: '', type: '', diff: '', from: ys[0], to: ys[ys.length - 1], status: '', q: '', sort: 'new', page: 1 };
  }
  var F = null;
  function filters() {
    if (!F) {
      F = Object.assign(defaults(), KY.readJSON('ky2-bank', {}) || {});
      F.page = 1;
    }
    return F;
  }
  function saveFilters() { var c = Object.assign({}, F); delete c.page; KY.writeJSON('ky2-bank', c); }

  var plainCache = {};
  function searchText(p) {
    if (!plainCache[p.id]) {
      plainCache[p.id] = (p.year + ' ' + p.no + ' ' + KY.plain(p.stem) + ' ' + (p.options || []).map(KY.plain).join(' ') + ' ' +
        p.kp.map(function (k) { return KY.kpById[k].title; }).join(' ') + ' ' + (p.methods || []).join(' ')).toLowerCase();
    }
    return plainCache[p.id];
  }
  function applyFilters(f) {
    var q = f.q.trim().toLowerCase();
    var list = KY.meta.problems.filter(function (p) {
      if (f.ch && KY.kpById[p.kp[0]].ch !== f.ch && !p.kp.some(function (k) { return KY.kpById[k].ch === f.ch; })) return false;
      if (f.kp && p.kp.indexOf(f.kp) < 0) return false;
      if (f.type && p.type !== f.type) return false;
      if (f.diff && String(p.difficulty) !== f.diff) return false;
      if (p.year < f.from || p.year > f.to) return false;
      if (f.status === 'todo' && KY.status(p.id)) return false;
      if ((f.status === 'ok' || f.status === 'bad') && KY.status(p.id) !== f.status) return false;
      if (q && searchText(p).indexOf(q) < 0) return false;
      return true;
    });
    if (f.sort === 'new') list.sort(KY.byYearDesc);
    else if (f.sort === 'old') list.sort(KY.byYearAsc);
    else if (f.sort === 'hard') list.sort(function (a, b) { return b.difficulty - a.difficulty || KY.byYearDesc(a, b); });
    else if (f.sort === 'easy') list.sort(function (a, b) { return a.difficulty - b.difficulty || KY.byYearDesc(a, b); });
    return list;
  }

  function opt(v, label, cur) { return '<option value="' + v + '"' + (String(cur) === String(v) ? ' selected' : '') + '>' + label + '</option>'; }
  function kpOptions(f) {
    var kps = KY.tax.kps.filter(function (k) { return !f.ch || k.ch === f.ch; });
    return opt('', '全部考点', f.kp) + kps.map(function (k) { return opt(k.id, KY.esc(k.title) + '（' + (KY.meta.stats.byKp[k.id].count) + '）', f.kp); }).join('');
  }

  function resultsHtml(f) {
    var list = applyFilters(f);
    var pages = Math.max(1, Math.ceil(list.length / PAGE));
    if (f.page > pages) f.page = pages;
    var slice = list.slice((f.page - 1) * PAGE, f.page * PAGE);
    var h = '<p class="result-count">共 <b>' + list.length + '</b> 道' + (list.length ? '，第 ' + f.page + ' / ' + pages + ' 页' : '') + '</p>';
    if (!list.length) return h + '<div class="empty"><b>没有符合条件的题</b><span>放宽一下筛选条件，或者清空搜索词。</span><button type="button" class="btn" data-bank-reset>清空筛选</button></div>';
    h += '<div class="qs">' + slice.map(function (p) { return KY.card(p); }).join('') + '</div>';
    if (pages > 1) {
      h += '<nav class="pagination" aria-label="翻页">' +
        '<button type="button" class="btn" data-page="' + (f.page - 1) + '"' + (f.page <= 1 ? ' disabled' : '') + '>上一页</button>' +
        '<span>' + f.page + ' / ' + pages + '</span>' +
        '<button type="button" class="btn" data-page="' + (f.page + 1) + '"' + (f.page >= pages ? ' disabled' : '') + '>下一页</button></nav>';
    }
    return h;
  }

  KY.views.bank = function () {
    var f = filters();
    var ys = KY.meta.stats.years;
    var t = KY.tally(KY.meta.problems);
    var h = '<div class="wrap"><div class="narrow-wide">';
    h += '<header class="page-head"><p class="eyebrow">真题库 · ' + ys[0] + '–' + ys[ys.length - 1] + '</p><h1>' + KY.meta.problems.length + ' 道数学一高数真题</h1>' +
      '<p class="lede">每道题都有分层提示：先看「思路提示」自己动笔，再看答案，最后看完整解析和易错点。按考点、年份、题型、难度筛选，或者直接搜关键词。</p>' + KY.meter(t) + '</header>';
    h += '<form class="filters" id="bank-f" role="search">' +
      '<label for="bf-q" class="grow-2">搜索 <input type="search" id="bf-q" value="' + KY.esc(f.q) + '" placeholder="如：拉格朗日、2019、渐近线"></label>' +
      '<label for="bf-ch">章节 <select id="bf-ch">' + opt('', '全部章节', f.ch) + KY.tax.chapters.map(function (c) { return opt(c.id, c.no + '. ' + c.title, f.ch); }).join('') + '</select></label>' +
      '<label for="bf-kp">考点 <select id="bf-kp">' + kpOptions(f) + '</select></label>' +
      '<label for="bf-type">题型 <select id="bf-type">' + opt('', '全部', f.type) + ['选择', '填空', '解答'].map(function (x) { return opt(x, x + '题', f.type); }).join('') + '</select></label>' +
      '<label for="bf-diff">难度 <select id="bf-diff">' + opt('', '全部', f.diff) + [1, 2, 3, 4, 5].map(function (d) { return opt(d, d + ' 级', f.diff); }).join('') + '</select></label>' +
      '<label for="bf-from">年份 <select id="bf-from">' + ys.map(function (y) { return opt(y, y, f.from); }).join('') + '</select> 至 <select id="bf-to" aria-label="截止年份">' + ys.map(function (y) { return opt(y, y, f.to); }).join('') + '</select></label>' +
      '<label for="bf-status">状态 <select id="bf-status">' + opt('', '全部', f.status) + opt('todo', '未标记', f.status) + opt('ok', '已掌握', f.status) + opt('bad', '错题', f.status) + '</select></label>' +
      '<label for="bf-sort">排序 <select id="bf-sort">' + opt('new', '年份新→旧', f.sort) + opt('old', '年份旧→新', f.sort) + opt('hard', '难→易', f.sort) + opt('easy', '易→难', f.sort) + '</select></label>' +
      '<button type="button" class="btn btn-quiet" data-bank-reset>清空</button>' +
      '</form>';
    h += '<div id="bank-results">' + resultsHtml(f) + '</div>';
    h += '<section class="section"><h2>按年份看整套</h2><div class="years">' + yearChips() + '</div></section>';
    h += '</div></div>';
    return h;
  };

  function yearChips(cur) {
    var yc = KY.meta.stats.yearCount;
    return KY.meta.stats.years.map(function (y) {
      return KY.link('y' + y, '<b>' + y + '</b><span>' + yc[y] + ' 题</span>', 'year', y === cur ? ' aria-current="page"' : '');
    }).join('');
  }

  function refreshBank(scrollTop) {
    var box = document.getElementById('bank-results');
    if (!box) return;
    KY.untypeset(box);
    box.innerHTML = resultsHtml(F);
    KY.typeset(box);
    if (scrollTop) document.getElementById('bank-f').scrollIntoView();
  }
  var qTimer = null;
  document.addEventListener('input', function (e) {
    if (e.target.id !== 'bf-q') return;
    clearTimeout(qTimer);
    qTimer = setTimeout(function () { F.q = e.target.value; F.page = 1; saveFilters(); refreshBank(); }, 250);
  });
  document.addEventListener('change', function (e) {
    var form = e.target.closest('#bank-f');
    if (!form) return;
    var id = e.target.id;
    var map = { 'bf-ch': 'ch', 'bf-kp': 'kp', 'bf-type': 'type', 'bf-diff': 'diff', 'bf-status': 'status', 'bf-sort': 'sort' };
    if (map[id]) F[map[id]] = e.target.value;
    if (id === 'bf-from') F.from = +e.target.value;
    if (id === 'bf-to') F.to = +e.target.value;
    if (F.from > F.to) { var x = F.from; F.from = F.to; F.to = x; }
    if (id === 'bf-ch') {
      if (F.kp && KY.kpById[F.kp].ch !== F.ch && F.ch) F.kp = '';
      document.getElementById('bf-kp').innerHTML = kpOptions(F);
    }
    F.page = 1;
    saveFilters();
    refreshBank();
  });
  document.addEventListener('submit', function (e) { if (e.target.closest('form')) e.preventDefault(); });
  document.addEventListener('click', function (e) {
    var pg = e.target.closest('[data-page]');
    if (pg) { F.page = +pg.dataset.page; refreshBank(true); return; }
    if (e.target.closest('[data-bank-reset]')) { F = defaults(); saveFilters(); KY.render('bank', { keepScroll: true }); }
  });
  // 从考点页等处带着筛选条件跳进题库
  KY.openBank = function (patch) {
    filters();
    F = Object.assign(defaults(), patch || {});
    saveFilters();
    KY.go('bank');
  };

  /* ── 年份卷 ── */
  var TYPE_ORDER = { 选择: 0, 填空: 1, 解答: 2 };
  KY.views.year = function (r) {
    var y = r.year;
    var list = KY.meta.problems.filter(function (p) { return p.year === y; }).sort(function (a, b) { return a.id.localeCompare(b.id, 'en', { numeric: true }); });
    var score = list.reduce(function (s, p) { return s + (p.score || 0); }, 0);
    var types = {};
    list.forEach(function (p) { types[p.type] = (types[p.type] || 0) + 1; });
    var h = '<div class="wrap"><div class="narrow-wide">';
    h += '<header class="page-head"><p class="eyebrow">' + KY.link('bank', '真题库', 'crumb') + ' / 按年份</p><h1>' + y + ' 年数学一 · 高数部分</h1>' +
      '<p class="lede">共 ' + list.length + ' 题' + (score ? '，合计 ' + score + ' 分' : '') + '（' + Object.keys(types).sort(function (a, b) { return TYPE_ORDER[a] - TYPE_ORDER[b]; }).map(function (t) { return t + ' ' + types[t]; }).join('、') + '）。按原卷题号排列，可以当一套卷子限时做。</p>' +
      KY.meter(KY.tally(list)) + '</header>';
    h += '<div class="qs">' + list.map(function (p) { return KY.card(p); }).join('') + '</div>';
    h += '<section class="section"><h2>其他年份</h2><div class="years">' + yearChips(y) + '</div></section></div></div>';
    return h;
  };

  /* ── 单题页 ── */
  KY.views.problem = function (r) {
    var p = KY.pById[r.id];
    var same = KY.meta.problems.filter(function (x) { return x.id !== p.id && x.kp[0] === p.kp[0]; }).sort(KY.byYearDesc).slice(0, 8);
    var yearList = KY.meta.problems.filter(function (x) { return x.year === p.year; }).sort(function (a, b) { return a.id.localeCompare(b.id, 'en', { numeric: true }); });
    var i = yearList.indexOf(p);
    var h = '<div class="wrap"><div class="narrow-wide">';
    h += '<header class="page-head"><p class="eyebrow">' + KY.link('bank', '真题库', 'crumb') + ' / ' + KY.link('y' + p.year, p.year + ' 年', 'crumb') + ' / ' + KY.esc(p.no) + '</p></header>';
    h += KY.card(p);
    h += '<nav class="pager" aria-label="同年上下题">' +
      (i > 0 ? KY.link('q-' + yearList[i - 1].id, '← ' + KY.esc(yearList[i - 1].no), 'btn') : '<span></span>') +
      (i < yearList.length - 1 ? KY.link('q-' + yearList[i + 1].id, KY.esc(yearList[i + 1].no) + ' →', 'btn') : '<span></span>') + '</nav>';
    if (same.length) {
      h += '<section class="section"><h2>同一考点的其他真题<span class="eyebrow">' + KY.esc(KY.kpById[p.kp[0]].title) + '</span></h2><ul class="mini-list">' +
        same.map(function (x) { return '<li>' + KY.link('q-' + x.id, '<span class="yr">' + x.year + '</span><span class="tp">' + KY.esc(x.no) + ' · ' + x.type + '题</span>' + KY.dots(x.difficulty), 'mini-head') + '<div class="mini-stem">' + x.stem + '</div></li>'; }).join('') +
        '</ul>' + KY.link('kp-' + p.kp[0], '这个考点的全部真题与考频', 'btn') + '</section>';
    }
    h += '</div></div>';
    return h;
  };

  /* ── 随机刷题 ── */
  var PR = { ch: '', type: '', mode: 'uniform', skip: true, cur: null, history: [] };
  function pool() {
    return KY.meta.problems.filter(function (p) {
      if (PR.ch && KY.kpById[p.kp[0]].ch !== PR.ch) return false;
      if (PR.type && p.type !== PR.type) return false;
      if (PR.mode === 'wrong') return KY.status(p.id) === 'bad';
      if (PR.skip && KY.status(p.id) === 'ok') return false;
      return true;
    });
  }
  // 按考频加权：每道题的权重 = 主考点的考频指数（近年、解答题权重更高）
  function weight(p) {
    if (PR.mode !== 'freq') return 1;
    var K = KY.meta.stats.byKp[p.kp[0]];
    return 0.5 + (K ? K.index : 0) + Math.max(0, 6 - (KY.meta.stats.lastYear - p.year) / 3);
  }
  function pick() {
    var list = pool().filter(function (p) { return p.id !== PR.cur; });
    if (!list.length) list = pool();
    if (!list.length) { PR.cur = null; return; }
    var total = list.reduce(function (s, p) { return s + weight(p); }, 0);
    var r = Math.random() * total;
    for (var i = 0; i < list.length; i++) { r -= weight(list[i]); if (r <= 0) { PR.cur = list[i].id; return; } }
    PR.cur = list[list.length - 1].id;
  }
  function slotHtml() {
    var n = pool().length;
    if (!PR.cur || !KY.pById[PR.cur]) pick();
    var head = '<p class="result-count">题池 <b>' + n + '</b> 道</p>';
    if (!PR.cur) return head + '<div class="empty"><b>这个范围里没有题了</b><span>换个章节或题型，或者取消「跳过已掌握」。</span></div>';
    return head + KY.card(KY.pById[PR.cur]);
  }
  KY.views.practice = function () {
    var h = '<div class="wrap"><div class="narrow-wide">';
    h += '<header class="page-head"><p class="eyebrow">随机刷题</p><h1>抽一道，做一道</h1>' +
      '<p class="lede">「按考频加权」会更多地抽到高频考点和近年的题，适合冲刺；「只抽错题」用来回炉。做完给题目标记「会了」或「不会」。</p></header>';
    h += '<form class="filters" id="pr-f">' +
      '<label for="pr-ch">章节 <select id="pr-ch">' + opt('', '全部章节', PR.ch) + KY.tax.chapters.map(function (c) { return opt(c.id, c.no + '. ' + c.title, PR.ch); }).join('') + '</select></label>' +
      '<label for="pr-type">题型 <select id="pr-type">' + opt('', '全部', PR.type) + ['选择', '填空', '解答'].map(function (x) { return opt(x, x + '题', PR.type); }).join('') + '</select></label>' +
      '<label for="pr-mode">抽题方式 <select id="pr-mode">' + opt('uniform', '均匀随机', PR.mode) + opt('freq', '按考频加权', PR.mode) + opt('wrong', '只抽错题', PR.mode) + '</select></label>' +
      '<label for="pr-skip"><input type="checkbox" id="pr-skip"' + (PR.skip ? ' checked' : '') + '> 跳过已掌握</label>' +
      '</form>';
    h += '<div id="pr-slot">' + slotHtml() + '</div>';
    h += '<div class="pr-nav"><button type="button" class="btn primary" id="pr-next">换一道</button></div>';
    h += '</div></div>';
    return h;
  };
  function refreshPractice(repick) {
    var slot = document.getElementById('pr-slot');
    if (!slot) return;
    if (repick) pick();
    KY.untypeset(slot);
    slot.innerHTML = slotHtml();
    KY.typeset(slot);
  }
  document.addEventListener('change', function (e) {
    if (!e.target.closest('#pr-f')) return;
    PR.ch = document.getElementById('pr-ch').value;
    PR.type = document.getElementById('pr-type').value;
    PR.mode = document.getElementById('pr-mode').value;
    PR.skip = document.getElementById('pr-skip').checked;
    refreshPractice(true);
  });
  document.addEventListener('click', function (e) { if (e.target.id === 'pr-next') refreshPractice(true); });

  /* ── 错题本 ── */
  KY.views.wrong = function () {
    var list = KY.meta.problems.filter(function (p) { return KY.status(p.id) === 'bad'; }).sort(function (a, b) {
      return KY.chOrder[KY.kpById[a.kp[0]].ch] - KY.chOrder[KY.kpById[b.kp[0]].ch] || KY.byYearDesc(a, b);
    });
    var h = '<div class="wrap"><div class="narrow-wide">';
    h += '<header class="page-head"><p class="eyebrow">错题本</p><h1>还没吃透的题</h1>' +
      '<p class="lede">做题时点「不会」，题目就会收进这里，按章节分组。隔几天重做一遍，做对了点「会了」移出去。哪一步想不通，点「问 AI」。</p></header>';
    if (!list.length) {
      h += '<div class="empty"><b>错题本是空的</b><span>去做几道题吧，标成「不会」的题会出现在这里。</span>' + KY.link('practice', '随机刷一道', 'btn primary') + '</div>';
    } else {
      var cur = '';
      list.forEach(function (p) {
        var ch = KY.kpById[p.kp[0]].ch;
        if (ch !== cur) {
          if (cur) h += '</div>';
          cur = ch;
          h += '<h2 class="topic-h">第 ' + KY.chById[ch].no + ' 章 ' + KY.chById[ch].title + '</h2><div class="qs">';
        }
        h += KY.card(p);
      });
      h += '</div>';
    }
    h += '</div></div>';
    return h;
  };
})();
