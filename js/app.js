// 页面路由与交互。所有视图都是字符串拼接后写入 #view，再交给 MathJax 排版。
(function () {
  'use strict';

  var CH = window.CHAPTERS || [];
  var P = window.PROBLEMS || [];
  var view = document.getElementById('view');
  var LET = ['A', 'B', 'C', 'D'];
  var TYPE_ORDER = { '选择': 0, '填空': 1, '解答': 2 };
  var KEY = 'shuyi-gaoshu-progress-v1';

  // 公式里的 "<"（如 $0<x<1$）会被浏览器当成标签开头，写入页面前统一转义成 &lt;
  var MATH = /\$\$[\s\S]*?\$\$|\$[^$]*\$/g;
  function escMath(s) {
    return typeof s === 'string' ? s.replace(MATH, function (m) { return m.replace(/</g, '&lt;'); }) : s;
  }
  P.forEach(function (p) {
    ['stem', 'answer', 'solution', 'tip', 'topic'].forEach(function (k) { p[k] = escMath(p[k]); });
    if (p.options) p.options = p.options.map(escMath);
  });
  CH.forEach(function (c) {
    c.brief = escMath(c.brief);
    c.syllabus = c.syllabus.map(escMath);
    c.patterns = c.patterns.map(escMath);
    c.tools.forEach(function (t) { t.name = escMath(t.name); t.body = escMath(t.body); });
  });

  var chById = {};
  var chOrder = {};
  CH.forEach(function (c, i) { chById[c.id] = c; chOrder[c.id] = i; });
  var byId = {};
  P.forEach(function (p) { byId[p.id] = p; });

  /* ── 做题记录：只存在本浏览器 ── */
  var prog = {};
  try { prog = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { prog = {}; }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(prog)); } catch (e) { /* 存不了就只在本次会话有效 */ }
  }

  /* ── MathJax ── */
  var pending = [];
  function typeset(el) {
    var MJ = window.MathJax;
    if (window.__mjReady && MJ && MJ.typesetPromise) {
      MJ.typesetPromise([el]).then(function () { fitMath(el); }).catch(function () {});
    } else {
      pending.push(el);
    }
  }
  // 行内公式比所在段落还宽时（手机上常见），让它单独成行并在自身内部横向滚动
  function fitMath(root) {
    var els = root.querySelectorAll('mjx-container:not([display="true"])');
    Array.prototype.forEach.call(els, function (el) { el.classList.remove('mjx-wide'); });
    Array.prototype.forEach.call(els, function (el) {
      var box = el.parentElement;
      if (box && box.clientWidth && el.getBoundingClientRect().width > box.clientWidth + 1) el.classList.add('mjx-wide');
    });
  }
  var fitTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(function () { if (window.__mjReady) fitMath(view); }, 150);
  });
  function untypeset(el) {
    var MJ = window.MathJax;
    if (window.__mjReady && MJ && MJ.typesetClear) MJ.typesetClear([el]);
  }
  document.addEventListener('mj-ready', function () {
    pending.splice(0).forEach(function (el) { if (document.contains(el)) typeset(el); });
  });

  /* ── 工具函数 ── */
  function primaryOf(id) { return P.filter(function (p) { return p.ch === id; }); }
  function crossOf(id) { return P.filter(function (p) { return p.ch !== id && p.also && p.also.indexOf(id) >= 0; }); }
  function byYear(a, b) { return a.year - b.year || TYPE_ORDER[a.type] - TYPE_ORDER[b.type]; }
  function byChapter(a, b) { return chOrder[a.ch] - chOrder[b.ch] || byYear(a, b); }
  function tally(list) {
    var t = { ok: 0, bad: 0, n: list.length };
    list.forEach(function (p) {
      if (prog[p.id] === 'ok') t.ok++;
      else if (prog[p.id] === 'bad') t.bad++;
    });
    return t;
  }
  function years() {
    var m = {};
    P.forEach(function (p) { m[p.year] = (m[p.year] || 0) + 1; });
    return Object.keys(m).map(Number).sort(function (a, b) { return a - b; }).map(function (y) { return { y: y, n: m[y] }; });
  }
  function link(tok, html, cls, extra) {
    return '<a href="#' + tok + '" data-go="' + tok + '"' + (cls ? ' class="' + cls + '"' : '') + (extra || '') + '>' + html + '</a>';
  }
  function meter(t) {
    var okp = t.n ? (t.ok / t.n) * 100 : 0;
    var badp = t.n ? (t.bad / t.n) * 100 : 0;
    return '<div class="meter"><div class="meter-track" role="img" aria-label="已掌握 ' + t.ok + ' 题，错题 ' + t.bad + ' 题，共 ' + t.n + ' 题">' +
      '<i class="m-ok" style="width:' + okp + '%"></i><i class="m-bad" style="width:' + badp + '%"></i></div>' +
      '<span class="meter-label">已掌握 ' + t.ok + ' / ' + t.n + (t.bad ? ' · 错题 ' + t.bad : '') + '</span></div>';
  }
  var FLAG = { ok: '已掌握', bad: '错题本' };

  /* ── 题目卡 ── */
  function card(p, o) {
    o = o || {};
    var st = prog[p.id] || '';
    var c = chById[p.ch];
    var h = '<article class="q" id="q-' + p.id + '" data-id="' + p.id + '" data-st="' + st + '">';
    h += '<header class="q-meta">' + link('y' + p.year, p.year, 'yr', ' title="查看 ' + p.year + ' 年全部题目"') +
      '<span class="tp">数一 · ' + p.type + '题</span>' +
      '<span>' + (o.showCh ? '第 ' + c.no + ' 章 · ' : '') + p.topic + '</span>' +
      '<span class="flag">' + (FLAG[st] || '') + '</span></header>';
    h += '<div class="q-stem">' + p.stem + '</div>';
    if (p.options) {
      var long = p.options.some(function (t) { return t.replace(/\$[^$]*\$/g, 'xx').length > 26; });
      h += '<ol class="opts' + (long ? ' long' : '') + '">' + p.options.map(function (t, i) {
        return '<li><span class="opt-l">(' + LET[i] + ')</span><span class="opt-t">' + t + '</span></li>';
      }).join('') + '</ol>';
    }
    if (p.note) h += '<p class="q-note">' + p.note + '</p>';
    h += '<div class="q-act">' +
      '<button type="button" class="btn" data-act="ans" aria-expanded="false">看答案</button>' +
      '<button type="button" class="btn" data-act="sol" aria-expanded="false">看解析</button>' +
      '<span class="grow"></span>' +
      '<button type="button" class="btn mark ok" data-act="ok" aria-pressed="' + (st === 'ok') + '">会了</button>' +
      '<button type="button" class="btn mark bad" data-act="bad" aria-pressed="' + (st === 'bad') + '">不会</button>' +
      '</div>';
    var ans = p.answer;
    if (p.options && /^[A-D]$/.test(p.answer)) {
      ans = '<b>' + p.answer + '</b>　' + p.options[LET.indexOf(p.answer)];
    }
    h += '<div class="q-ans mj-lazy" hidden><span class="lbl">答案</span><div>' + ans + '</div></div>';
    h += '<div class="q-sol mj-lazy" hidden><span class="lbl">解析</span>' + p.solution +
      (p.tip ? '<p class="tip"><b>易错提醒</b>' + p.tip + '</p>' : '') + '</div>';
    h += '</article>';
    return h;
  }

  function reveal(el) {
    if (!el.hidden) return;
    el.hidden = false;
    if (el.classList.contains('mj-lazy')) {
      el.classList.remove('mj-lazy');
      typeset(el);
    }
  }

  function syncCard(q) {
    var st = prog[q.dataset.id] || '';
    q.dataset.st = st;
    q.querySelector('.flag').textContent = FLAG[st] || '';
    q.querySelector('[data-act="ok"]').setAttribute('aria-pressed', String(st === 'ok'));
    q.querySelector('[data-act="bad"]').setAttribute('aria-pressed', String(st === 'bad'));
  }

  function updateWrongCount() {
    var n = tally(P).bad;
    var el = document.getElementById('wrong-count');
    el.textContent = n;
    if (n) el.removeAttribute('data-zero'); else el.setAttribute('data-zero', '');
  }

  /* ── 视图：总览 ── */
  function viewHome() {
    var t = tally(P);
    var ys = years();
    var notes = P.filter(function (p) { return p.note; }).length;
    var h = '<div class="wrap">';
    h += '<section class="hero">' +
      '<p class="eyebrow">考研数学一 · 高等数学</p>' +
      '<h1>数一高数，<em>从真题</em>复习</h1>' +
      '<p class="lede">收录 ' + P.length + ' 道数学一高数真题（' + ys[0].y + '–' + ys[ys.length - 1].y + '），按考试大纲分成 ' + CH.length + ' 章。每章先讲大纲要求和必会工具，再按考点精讲真题，每题都有完整解析和易错提醒。</p>' +
      '<div class="stats">' +
      '<div class="stat"><b>' + P.length + '</b><span>收录真题</span></div>' +
      '<div class="stat"><b>' + ys.length + '</b><span>覆盖年份</span></div>' +
      '<div class="stat"><b>' + t.ok + '</b><span>已掌握</span></div>' +
      '<div class="stat"><b>' + t.bad + '</b><span>错题</span></div>' +
      '</div>' +
      '<div class="cta">' + link('ch-' + CH[0].id, '从第 1 章开始', 'btn primary') + link('practice', '随机刷一道', 'btn') + link('wrong', '打开错题本', 'btn') + '</div>' +
      '</section>';

    h += '<section class="section paper-bar"><h2>试卷里的高数</h2>' +
      '<div class="bar" role="img" aria-label="数学一 150 分中，高等数学约占 56%，线性代数和概率统计各约 22%">' +
      '<div class="seg-gs" style="width:56%">高等数学 约 56% · 84 分</div>' +
      '<div class="seg-xd" style="width:22%">线代 22%</div>' +
      '<div class="seg-gl" style="width:22%">概率 22%</div></div>' +
      '<div class="paper-types"><span><b>选择</b> 10 题 × 5 分</span><span><b>填空</b> 6 题 × 5 分</span><span><b>解答</b> 6 题 共 70 分</span><span><b>满分</b> 150 分 · 180 分钟</span></div>' +
      '<p class="paper-note">2021 年起数学一的题型结构。高数大约 84 分，是决定总分的主战场。</p>' +
      '</section>';

    h += '<section class="section"><h2>按章节复习</h2><div class="tiles">' + CH.map(function (c) {
      var list = primaryOf(c.id);
      return link('ch-' + c.id,
        '<span class="no">第 ' + c.no + ' 章 · ' + list.length + ' 题</span><h3>' + c.title + '</h3><p>' + c.brief + '</p>' + meter(tally(list)),
        'tile');
    }).join('') + '</div></section>';

    h += '<section class="section"><h2>按年份浏览</h2><div class="years">' + ys.map(function (o) {
      return link('y' + o.y, '<b>' + o.y + '</b><span>' + o.n + ' 题</span>', 'year');
    }).join('') + '</div></section>';

    h += '<section class="section"><h2>怎么用</h2><ol class="steps">' +
      '<li>先读每章开头的「大纲要求」和「必会工具」，弄清这一章要掌握什么。</li>' +
      '<li>做「真题精讲」：先自己动笔做，再点「看答案」「看解析」对照。</li>' +
      '<li>做完给题目打标记：「会了」或「不会」。</li>' +
      '<li>标成「不会」的题自动进错题本。隔几天回来重做，做对了改成「会了」。</li>' +
      '<li>用「随机刷题」按章节、题型抽题，检查是不是真的掌握了。</li>' +
      '</ol></section>';

    h += '<p class="disclaimer">题目按年份整理自历年全国硕士研究生招生考试数学一试卷的高等数学部分，题干措辞可能与原卷略有出入；其中 ' + notes +
      ' 道选择题为方便练习改成了直接求解，已在题目下注明。所有答案都用计算机代数系统（SymPy）复核过。建议对照官方原卷使用。</p>';
    h += '</div>';
    return h;
  }

  /* ── 视图：章节 ── */
  function viewChapter(id) {
    var c = chById[id];
    var list = primaryOf(id).sort(byYear);
    var cross = crossOf(id).sort(byYear);
    var topics = [];
    primaryOf(id).forEach(function (p) { if (topics.indexOf(p.topic) < 0) topics.push(p.topic); });

    var toc = '<aside class="toc"><div><p class="eyebrow">章节</p><nav class="chs" aria-label="章节">' + CH.map(function (x) {
      return link('ch-' + x.id, '<span>' + x.no + '. ' + x.title + '</span><span class="n">' + primaryOf(x.id).length + '</span>', '', x.id === id ? ' aria-current="page"' : '');
    }).join('') + '</nav></div>' +
      '<div class="in-page"><p class="eyebrow">本章</p><nav aria-label="本章内容">' +
      '<a href="#s-syl" data-scroll="s-syl">大纲要求</a>' +
      '<a href="#s-tools" data-scroll="s-tools">必会工具</a>' +
      '<a href="#s-pat" data-scroll="s-pat">真题规律</a>' +
      '<a href="#s-q" data-scroll="s-q">真题精讲</a>' +
      topics.map(function (tp, i) {
        var n = list.filter(function (p) { return p.topic === tp; }).length;
        return '<a href="#t-' + i + '" data-scroll="t-' + i + '" class="sub"><span>' + tp + '</span><span class="n">' + n + '</span></a>';
      }).join('') +
      (cross.length ? '<a href="#t-x" data-scroll="t-x" class="sub"><span>相关真题</span><span class="n">' + cross.length + '</span></a>' : '') +
      '</nav></div></aside>';

    var m = '<div class="ch-main">';
    m += '<header class="ch-head"><p class="eyebrow">第 ' + c.no + ' 章 · 收录 ' + list.length + ' 题</p><h1>' + c.title + '</h1>' + meter(tally(list.concat(cross))) + '</header>';
    m += '<section class="section" id="s-syl"><h2>大纲要求</h2><ul class="syl">' + c.syllabus.map(function (s) {
      return '<li>' + s.replace(/(了解|理解|掌握|会)/g, '<b>$1</b>') + '</li>';
    }).join('') + '</ul></section>';
    m += '<section class="section" id="s-tools"><h2>必会工具</h2><div class="tools">' + c.tools.map(function (t) {
      return '<div class="tool"><h3>' + t.name + '</h3>' + t.body + '</div>';
    }).join('') + '</div></section>';
    m += '<section class="section" id="s-pat"><h2>真题规律</h2><ul class="patterns">' + c.patterns.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul></section>';
    m += '<section class="section" id="s-q"><h2>真题精讲</h2>';
    topics.forEach(function (tp, i) {
      var qs = list.filter(function (p) { return p.topic === tp; });
      m += '<h3 class="topic-h" id="t-' + i + '"><span>' + tp + '</span><span class="eyebrow">' + qs.length + ' 题</span></h3><div class="qs">' + qs.map(function (p) { return card(p); }).join('') + '</div>';
    });
    if (cross.length) {
      m += '<h3 class="topic-h" id="t-x">相关真题<span class="eyebrow">主归属在其他章</span></h3><div class="qs">' + cross.map(function (p) { return card(p, { showCh: true }); }).join('') + '</div>';
    }
    m += '</section>';
    var i = chOrder[id];
    m += '<nav class="pager" aria-label="翻章">' +
      (i > 0 ? link('ch-' + CH[i - 1].id, '← 第 ' + CH[i - 1].no + ' 章 ' + CH[i - 1].title, 'btn') : '<span></span>') +
      (i < CH.length - 1 ? link('ch-' + CH[i + 1].id, '第 ' + CH[i + 1].no + ' 章 ' + CH[i + 1].title + ' →', 'btn') : '<span></span>') +
      '</nav>';
    m += '</div>';
    return '<div class="wrap"><div class="ch-layout">' + toc + m + '</div></div>';
  }

  /* ── 视图：年份 ── */
  function viewYear(y) {
    var list = P.filter(function (p) { return p.year === y; }).sort(function (a, b) {
      return TYPE_ORDER[a.type] - TYPE_ORDER[b.type] || chOrder[a.ch] - chOrder[b.ch];
    });
    var h = '<div class="wrap"><div class="narrow" style="max-width:56rem">';
    h += '<header class="ch-head"><p class="eyebrow">按年份</p><h1>' + y + ' 年数学一 · 高数真题</h1>' +
      '<p class="lede">本站收录该年 ' + list.length + ' 题，按题型排列。</p>' + meter(tally(list)) + '</header>';
    h += '<div class="qs" style="margin-top:1.5rem">' + list.map(function (p) { return card(p, { showCh: true }); }).join('') + '</div>';
    h += '<section class="section"><h2>其他年份</h2><div class="years">' + years().map(function (o) {
      return link('y' + o.y, '<b>' + o.y + '</b><span>' + o.n + ' 题</span>', 'year', o.y === y ? ' aria-current="page"' : '');
    }).join('') + '</div></section>';
    h += '</div></div>';
    return h;
  }

  /* ── 视图：随机刷题 ── */
  var pf = { ch: '', type: '', skip: false, cur: null };
  function pool() {
    return P.filter(function (p) {
      return (!pf.ch || p.ch === pf.ch) && (!pf.type || p.type === pf.type) && (!pf.skip || prog[p.id] !== 'ok');
    });
  }
  function pick() {
    var list = pool();
    if (!list.length) { pf.cur = null; return; }
    var choices = list.length > 1 ? list.filter(function (p) { return p.id !== pf.cur; }) : list;
    pf.cur = choices[Math.floor(Math.random() * choices.length)].id;
  }
  function practiceSlot() {
    var list = pool();
    var countEl = document.getElementById('pool-n');
    if (countEl) countEl.textContent = '题池 ' + list.length + ' 道';
    if (!pf.cur || !list.some(function (p) { return p.id === pf.cur; })) pick();
    if (!pf.cur) {
      return '<div class="empty"><b>这个范围里没有题了</b><span>换个章节或题型，或者取消「跳过已掌握」。</span></div>';
    }
    return card(byId[pf.cur], { showCh: true });
  }
  function viewPractice() {
    var h = '<div class="wrap"><div class="narrow" style="max-width:56rem">';
    h += '<header class="ch-head"><p class="eyebrow">随机刷题</p><h1>抽一道，做一道</h1>' +
      '<p class="lede">先选范围，再点「换一道」。做完记得标记「会了」或「不会」，「不会」的题会进错题本。</p></header>';
    h += '<form class="filters" id="pf" style="margin-top:1.5rem">' +
      '<label for="f-ch">章节 <select id="f-ch"><option value="">全部章节</option>' + CH.map(function (c) {
        return '<option value="' + c.id + '"' + (pf.ch === c.id ? ' selected' : '') + '>' + c.no + '. ' + c.title + '</option>';
      }).join('') + '</select></label>' +
      '<label for="f-type">题型 <select id="f-type"><option value="">全部题型</option>' + ['选择', '填空', '解答'].map(function (t) {
        return '<option value="' + t + '"' + (pf.type === t ? ' selected' : '') + '>' + t + '题</option>';
      }).join('') + '</select></label>' +
      '<label for="f-skip"><input type="checkbox" id="f-skip"' + (pf.skip ? ' checked' : '') + '> 跳过已掌握</label>' +
      '<span class="pool" id="pool-n">题池 ' + pool().length + ' 道</span>' +
      '</form>';
    h += '<div id="pr-slot" style="margin-top:1rem">' + practiceSlot() + '</div>';
    h += '<div class="pr-nav" style="margin-top:1rem"><button type="button" class="btn primary" id="pr-next">换一道</button></div>';
    h += '</div></div>';
    return h;
  }
  function refreshPractice(repick) {
    var slot = document.getElementById('pr-slot');
    if (!slot) return;
    if (repick) pick();
    untypeset(slot);
    slot.innerHTML = practiceSlot();
    typeset(slot);
  }

  /* ── 视图：错题本 ── */
  function viewWrong() {
    var list = P.filter(function (p) { return prog[p.id] === 'bad'; }).sort(byChapter);
    var h = '<div class="wrap"><div class="narrow" style="max-width:56rem">';
    h += '<header class="ch-head"><p class="eyebrow">错题本</p><h1>还没吃透的题</h1>' +
      '<p class="lede">做题时点「不会」，题目就会收进这里。重做对了，点「会了」把它移出去。</p></header>';
    if (!list.length) {
      h += '<div class="empty" style="margin-top:1.5rem"><b>错题本是空的</b><span>去做几道题吧，标成「不会」的题会出现在这里。</span>' +
        link('practice', '随机刷一道', 'btn primary') + '</div>';
    } else {
      var cur = '';
      list.forEach(function (p) {
        if (p.ch !== cur) {
          if (cur) h += '</div>';
          cur = p.ch;
          var c = chById[p.ch];
          h += '<h3 class="topic-h">第 ' + c.no + ' 章 ' + c.title + '</h3><div class="qs">';
        }
        h += card(p);
      });
      h += '</div>';
    }
    h += '</div></div>';
    return h;
  }

  /* ── 路由 ── */
  var current = '';
  function parse(tok) {
    if (tok && tok.indexOf('ch-') === 0 && chById[tok.slice(3)]) return { v: 'ch', id: tok.slice(3), tok: tok };
    if (/^y\d{4}$/.test(tok || '') && P.some(function (p) { return p.year === +tok.slice(1); })) return { v: 'year', y: +tok.slice(1), tok: tok };
    if (tok === 'practice' || tok === 'wrong') return { v: tok, tok: tok };
    if (tok && tok.indexOf('q-') === 0 && byId[tok.slice(2)]) return { v: 'ch', id: byId[tok.slice(2)].ch, tok: 'ch-' + byId[tok.slice(2)].ch, focus: tok };
    return { v: 'home', tok: 'home' };
  }
  function render(tok) {
    var r = parse(tok);
    untypeset(view);
    if (r.v === 'ch') view.innerHTML = viewChapter(r.id);
    else if (r.v === 'year') view.innerHTML = viewYear(r.y);
    else if (r.v === 'practice') view.innerHTML = viewPractice();
    else if (r.v === 'wrong') view.innerHTML = viewWrong();
    else view.innerHTML = viewHome();
    current = r.tok;
    var navKey = r.v === 'practice' || r.v === 'wrong' ? r.v : (r.v === 'home' ? 'home' : '');
    Array.prototype.forEach.call(document.querySelectorAll('[data-nav]'), function (a) {
      if (a.dataset.nav === navKey) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    updateWrongCount();
    typeset(view);
    var target = r.focus && document.getElementById(r.focus);
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }
  function go(tok) {
    try { history.pushState(null, '', '#' + tok); } catch (e) { /* 部分嵌入环境不允许改地址 */ }
    render(tok);
  }
  window.addEventListener('popstate', function () { render(location.hash.slice(1)); });

  /* ── 事件 ── */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-go]');
    if (a) { e.preventDefault(); go(a.dataset.go); return; }

    var s = e.target.closest('a[data-scroll]');
    if (s) {
      e.preventDefault();
      var el = document.getElementById(s.dataset.scroll);
      if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      return;
    }

    var b = e.target.closest('[data-act]');
    if (!b) return;
    var q = b.closest('.q');
    var id = q.dataset.id;
    var act = b.dataset.act;
    var ans = q.querySelector('.q-ans');
    var sol = q.querySelector('.q-sol');
    var ansBtn = q.querySelector('[data-act="ans"]');
    var solBtn = q.querySelector('[data-act="sol"]');
    if (act === 'ans') {
      if (ans.hidden) { reveal(ans); ansBtn.setAttribute('aria-expanded', 'true'); ansBtn.textContent = '收起答案'; }
      else { ans.hidden = true; ansBtn.setAttribute('aria-expanded', 'false'); ansBtn.textContent = '看答案'; }
    } else if (act === 'sol') {
      if (sol.hidden) {
        reveal(ans); reveal(sol);
        ansBtn.setAttribute('aria-expanded', 'true'); ansBtn.textContent = '收起答案';
        solBtn.setAttribute('aria-expanded', 'true'); solBtn.textContent = '收起解析';
      } else {
        sol.hidden = true; solBtn.setAttribute('aria-expanded', 'false'); solBtn.textContent = '看解析';
      }
    } else if (act === 'ok' || act === 'bad') {
      if (prog[id] === act) delete prog[id]; else prog[id] = act;
      save();
      syncCard(q);
      updateWrongCount();
    }
  });

  document.addEventListener('change', function (e) {
    if (!e.target.closest('#pf')) return;
    pf.ch = document.getElementById('f-ch').value;
    pf.type = document.getElementById('f-type').value;
    pf.skip = document.getElementById('f-skip').checked;
    refreshPractice(true);
  });
  document.addEventListener('submit', function (e) { e.preventDefault(); });
  document.addEventListener('click', function (e) {
    if (e.target.id === 'pr-next') refreshPractice(true);
  });

  /* 清空记录：页面内确认，不用 confirm() */
  var resetSlot = document.getElementById('reset-slot');
  function resetIdle() { resetSlot.innerHTML = '<button type="button" id="reset">清空做题记录</button>'; }
  resetSlot.addEventListener('click', function (e) {
    if (e.target.id === 'reset') {
      resetSlot.innerHTML = '<span class="confirm">确定清空全部标记？<button type="button" id="reset-yes">清空</button><button type="button" id="reset-no">取消</button></span>';
    } else if (e.target.id === 'reset-yes') {
      prog = {};
      save();
      resetIdle();
      render(current);
    } else if (e.target.id === 'reset-no') {
      resetIdle();
    }
  });

  render(location.hash.slice(1));
})();
