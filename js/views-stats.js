// 总览、考点分析（考频柱状图、年份热力图、考点表）、考点详情页。
(function () {
  'use strict';
  var KY = window.KY;

  /* ── 图表小件 ── */
  function seqClass(v, max) {
    if (!v) return 'seq-0';
    var r = v / max;
    return 'seq-' + Math.min(5, Math.max(1, Math.ceil(r * 5)));
  }
  // 横向柱状图（单一数量，单一色）。rows: [{label, value, note, go, tip}]
  function hbars(rows, opts) {
    opts = opts || {};
    var max = Math.max.apply(null, rows.map(function (r) { return r.value; }).concat([1]));
    return '<div class="hbars" role="list">' + rows.map(function (r) {
      var w = (r.value / max) * 100;
      var label = r.go ? KY.link(r.go, KY.esc(r.label), 'hb-label') : '<span class="hb-label">' + KY.esc(r.label) + '</span>';
      return '<div class="hb-row" role="listitem" data-tip="' + KY.esc(r.tip || (r.label + '：' + r.value)) + '">' + label +
        '<span class="hb-track"><i style="width:' + w.toFixed(1) + '%"></i></span><span class="hb-val">' + (opts.fmt ? opts.fmt(r.value) : r.value) + (r.note ? '<small>' + KY.esc(r.note) + '</small>' : '') + '</span></div>';
    }).join('') + '</div>';
  }
  KY.hbars = hbars;

  function topKps(n) {
    var S = KY.meta.stats.byKp;
    return KY.tax.kps.slice().sort(function (a, b) { return S[b.id].index - S[a.id].index || S[b.id].count - S[a.id].count; }).slice(0, n);
  }

  /* ── 总览 ── */
  KY.views.home = function () {
    var M = KY.meta;
    var S = M.stats;
    var t = KY.tally(M.problems);
    var lessonsReady = Object.keys(M.lessons).length;
    var lessonsDone = Object.keys(M.lessons).filter(KY.lessonDone).length;
    var h = '<div class="wrap">';
    h += '<section class="hero"><p class="eyebrow">考研数学一 · 高等数学</p>' +
      '<h1>从定义学起，<em>用真题</em>练透</h1>' +
      '<p class="lede">收录 ' + S.years[0] + '–' + S.lastYear + ' 年共 ' + S.years.length + ' 年数学一的全部高数真题（' + M.problems.length + ' 道），每题配思路分析、详细解答、易错点和方法总结；' + KY.tax.kps.length + ' 个考点各有一篇从零讲起的基础讲解，定理都有分步证明。按 ' + S.years.length + ' 年考频统计出最可能考的考点。看不懂随时问 AI。</p>' +
      '<div class="stats">' +
      '<div class="stat"><b>' + M.problems.length + '</b><span>道真题</span></div>' +
      '<div class="stat"><b>' + lessonsReady + '</b><span>篇基础讲解</span></div>' +
      '<div class="stat"><b>' + t.ok + '</b><span>道已掌握</span></div>' +
      '<div class="stat"><b>' + lessonsDone + '</b><span>篇已学完</span></div>' +
      '</div>' +
      '<div class="cta">' + KY.link('learn', '从零开始学', 'btn primary') + KY.link('bank', '进真题库', 'btn') + KY.link('stats', '看最可能考什么', 'btn') + '</div></section>';

    h += '<section class="section"><h2>建议的复习顺序</h2><ol class="route">' +
      '<li><b>' + KY.link('learn', '基础讲解') + '</b><span>按章节读，每篇先看"从问题出发"，再看定义和证明，最后做自测。</span></li>' +
      '<li><b>' + KY.link('stats', '分考点做真题') + '</b><span>学完一个考点，就去它的考点页做这个考点的历年真题，先看思路提示再动笔。</span></li>' +
      '<li><b>' + KY.link('bank', '整套年份卷') + '</b><span>基础过完后，按年份做整套高数题，从近年往前做。</span></li>' +
      '<li><b>' + KY.link('wrong', '错题回炉') + '</b><span>"不会"的题进错题本，隔几天重做。</span></li>' +
      '<li><b>' + KY.link('practice', '冲刺抽题') + '</b><span>用"按考频加权"随机抽题，高频考点出现得更多。</span></li></ol></section>';

    var top = topKps(10);
    h += '<section class="section"><h2>最该优先掌握的 10 个考点<span class="eyebrow">按考频指数</span></h2>' +
      '<p class="note">考频指数把每一次出现按年份衰减加权（每过 10 年权重减半；解答题算两次；只作为辅助考点出现时算半次），衡量这个考点"现在还在常考"的程度。' + KY.link('stats', '完整分析与预测', 'chip') + '</p>' +
      hbars(top.map(function (k) {
        var K = S.byKp[k.id];
        return { label: k.title, value: K.index, note: '共 ' + K.count + ' 次 · 最近 ' + K.last, go: 'kp-' + k.id, tip: k.title + '：考频指数 ' + K.index + '，' + S.years.length + ' 年共出现 ' + K.count + ' 次，最近 ' + K.last + ' 年' };
      }), { fmt: function (v) { return v.toFixed(1); } }) + '</section>';

    h += '<section class="section"><h2>按章节</h2><div class="tiles">' + KY.tax.chapters.map(function (c) {
      var C = S.byChapter[c.id];
      var kps = KY.tax.kps.filter(function (k) { return k.ch === c.id; });
      var done = kps.filter(function (k) { return KY.lessonDone(k.id); }).length;
      var list = M.problems.filter(function (p) { return KY.kpById[p.kp[0]].ch === c.id; });
      return '<div class="tile"><span class="no">第 ' + c.no + ' 章 · ' + kps.length + ' 个考点 · ' + C.count + ' 道真题</span><h3>' + c.title + '</h3>' +
        '<div class="tile-links">' + KY.link('learn', '讲解 ' + done + '/' + kps.length, 'chip') + '<button type="button" class="chip" data-open-bank="' + c.id + '">做这章真题</button></div>' +
        KY.meter(KY.tally(list)) + '</div>';
    }).join('') + '</div></section>';

    h += '<section class="section ai-intro"><h2>看不懂？问 AI</h2><p class="note">每道题、每一节讲解旁边都有「问 AI」。它会带着这道题或这一节的内容，先问清你卡在哪里，再一步步讲，不会一上来就甩完整答案。在 Claude 里打开本页时直接可用（用的是你自己的 Claude 额度，第一次会请你确认）；单独部署时可以填自己的 API Key，或者一键复制问题发给任意 AI。</p>' +
      '<button type="button" class="btn" data-ai-open>打开 AI 辅导</button></section>';

    h += '<p class="disclaimer">真题题面整理自开源项目 TsekaLuk/Kaoyan-Math1-Papers（CC BY-NC-SA 4.0），OCR 识别错误已逐题校对；1994 年原卷缺失，题面据解析还原。解析、讲解与考点分析为本站撰写，计算结果用 SymPy 验算、并经独立审校。仍可能有疏漏，建议对照官方原卷使用。本站内容同样以 CC BY-NC-SA 4.0 共享，仅供学习，不得商用。</p>';
    h += '</div>';
    return h;
  };
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-open-bank]');
    if (b) KY.openBank({ ch: b.dataset.openBank });
  });

  /* ── 考点分析 ── */
  var tableSort = { key: 'index', dir: -1 };
  function kpTable() {
    var S = KY.meta.stats.byKp;
    var cols = [
      ['title', '考点'], ['ch', '章'], ['count', '出现'], ['solve', '解答题'], ['yearsCovered', '覆盖年数'], ['recent10', '近 10 年'], ['last', '最近一次'], ['index', '考频指数']
    ];
    var rows = KY.tax.kps.map(function (k) {
      var K = S[k.id];
      return { id: k.id, title: k.title, ch: KY.chById[k.ch].no, count: K.count, solve: K.types['解答'], yearsCovered: K.yearsCovered, recent10: K.recent10, last: K.last || 0, index: K.index };
    });
    var key = tableSort.key;
    rows.sort(function (a, b) {
      var x = a[key], y = b[key];
      if (typeof x === 'string') return tableSort.dir * x.localeCompare(y, 'zh');
      return tableSort.dir * (x - y) || b.index - a.index;
    });
    return '<div class="tbl"><table class="kp-table"><thead><tr>' + cols.map(function (c) {
      var cur = c[0] === key;
      return '<th scope="col" aria-sort="' + (cur ? (tableSort.dir < 0 ? 'descending' : 'ascending') : 'none') + '"><button type="button" data-sort="' + c[0] + '">' + c[1] + (cur ? (tableSort.dir < 0 ? ' ↓' : ' ↑') : '') + '</button></th>';
    }).join('') + '</tr></thead><tbody>' + rows.map(function (r) {
      return '<tr><th scope="row">' + KY.link('kp-' + r.id, KY.esc(r.title)) + '</th><td>' + r.ch + '</td><td>' + r.count + '</td><td>' + r.solve + '</td><td>' + r.yearsCovered + '</td><td>' + r.recent10 + '</td><td>' + (r.last || '—') + '</td><td>' + r.index.toFixed(1) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
  }
  document.addEventListener('click', function (e) {
    var s = e.target.closest('[data-sort]');
    if (!s) return;
    var k = s.dataset.sort;
    if (tableSort.key === k) tableSort.dir *= -1; else { tableSort.key = k; tableSort.dir = (k === 'title' || k === 'ch') ? 1 : -1; }
    var box = document.getElementById('kp-table');
    if (box) box.innerHTML = kpTable();
  });

  function heatmap() {
    var S = KY.meta.stats;
    var years = S.years;
    var max = 1;
    KY.tax.kps.forEach(function (k) { years.forEach(function (y) { max = Math.max(max, S.byKp[k.id].years[y] || 0); }); });
    var h = '<div class="heat-wrap"><table class="heat" aria-label="考点 × 年份 出现次数热力图"><thead><tr><th scope="col" class="heat-corner">考点 \\ 年份</th>' +
      years.map(function (y) { return '<th scope="col" class="heat-y' + (y % 5 === 0 ? ' major' : '') + '"><span>' + String(y).slice(2) + '</span></th>'; }).join('') + '<th scope="col" class="heat-sum">合计</th></tr></thead><tbody>';
    KY.tax.chapters.forEach(function (c) {
      h += '<tr class="heat-ch"><th scope="rowgroup" colspan="' + (years.length + 2) + '">第 ' + c.no + ' 章 ' + c.title + '</th></tr>';
      KY.tax.kps.filter(function (k) { return k.ch === c.id; }).forEach(function (k) {
        var K = S.byKp[k.id];
        h += '<tr><th scope="row">' + KY.link('kp-' + k.id, KY.esc(k.title)) + '</th>' + years.map(function (y) {
          var v = K.years[y] || 0;
          return '<td class="' + seqClass(v, max) + '" data-tip="' + KY.esc(k.title) + ' · ' + y + ' 年：' + (v ? v + ' 道' : '未考') + '"></td>';
        }).join('') + '<td class="heat-sum">' + K.count + '</td></tr>';
      });
    });
    h += '</tbody></table></div>';
    h += '<div class="legend" aria-hidden="true"><span>未考</span><i class="seq-0"></i><i class="seq-1"></i><i class="seq-2"></i><i class="seq-3"></i><i class="seq-4"></i><i class="seq-5"></i><span>当年 ' + max + ' 道</span></div>';
    return h;
  }

  KY.views.stats = function () {
    var M = KY.meta;
    var S = M.stats;
    var A = M.analysis;
    var n = S.years.length;
    var h = '<div class="wrap">';
    h += '<header class="page-head"><p class="eyebrow">考点分析 · ' + S.years[0] + '–' + S.lastYear + '</p><h1>' + n + ' 年真题，哪些考点最常考</h1>' +
      '<p class="lede">把 ' + M.problems.length + ' 道高数真题逐题标注考点后统计。每道题按"主考点"计入分值，也计入它涉及的其他考点的出现次数。</p></header>';

    if (A && A.summary) {
      h += '<section class="section analysis"><h2>结论先说</h2><div class="sec-body">' + A.summary + '</div></section>';
    }
    if (A && A.predictions && A.predictions.length) {
      h += '<section class="section"><h2>最可能考的考点与理由</h2><ol class="predict">' + A.predictions.map(function (p) {
        var k = KY.kpById[p.kp];
        var K = S.byKp[p.kp];
        return '<li><div class="pr-head">' + KY.link('kp-' + p.kp, KY.esc(k ? k.title : p.kp), 'pr-title') + (p.level ? '<span class="pr-level lv-' + p.level + '">' + KY.esc(p.level) + '</span>' : '') +
          (K ? '<span class="pr-data">共 ' + K.count + ' 次 · 近 10 年 ' + K.recent10 + ' 次 · 最近 ' + K.last + '</span>' : '') + '</div>' +
          '<div class="pr-why">' + p.reason + '</div>' + (p.form ? '<div class="pr-form"><span class="lbl">可能的考法</span>' + p.form + '</div>' : '') +
          (KY.meta.lessons[p.kp] ? KY.link('l-' + p.kp, '去学这个考点', 'chip') : '') + '</li>';
      }).join('') + '</ol></section>';
    }

    var top = topKps(15);
    h += '<section class="section"><h2>考频指数前 15<span class="eyebrow">越近年、越是解答题，权重越大</span></h2>' +
      hbars(top.map(function (k) {
        var K = S.byKp[k.id];
        return { label: k.title, value: K.index, note: K.count + ' 次 · 近10年 ' + K.recent10, go: 'kp-' + k.id, tip: k.title + '：指数 ' + K.index + '；共 ' + K.count + ' 次，近 10 年 ' + K.recent10 + ' 次，最近 ' + K.last };
      }), { fmt: function (v) { return v.toFixed(1); } }) + '</section>';

    var chRows = function (fromYear) {
      var tot = 0;
      var by = {};
      KY.tax.chapters.forEach(function (c) { by[c.id] = 0; });
      M.problems.forEach(function (p) {
        if (p.year < fromYear) return;
        by[KY.kpById[p.kp[0]].ch] += 1;
        tot += 1;
      });
      return KY.tax.chapters.map(function (c) {
        var v = tot ? (by[c.id] / tot) * 100 : 0;
        return { label: c.title, value: Math.round(v * 10) / 10, tip: c.title + '：' + by[c.id] + ' 道，占 ' + v.toFixed(1) + '%' };
      });
    };
    h += '<section class="section"><h2>各章题量占比</h2><div class="two-col">' +
      '<div><h3>全部 ' + n + ' 年</h3>' + hbars(chRows(0), { fmt: function (v) { return v.toFixed(1) + '%'; } }) + '</div>' +
      '<div><h3>近 10 年（' + (S.lastYear - 9) + '–' + S.lastYear + '）</h3>' + hbars(chRows(S.lastYear - 9), { fmt: function (v) { return v.toFixed(1) + '%'; } }) + '</div></div></section>';

    var cold = KY.tax.kps.filter(function (k) { var K = S.byKp[k.id]; return K.count >= 5 && K.gap >= 4; })
      .sort(function (a, b) { return S.byKp[b.id].count - S.byKp[a.id].count; });
    if (cold.length) {
      h += '<section class="section"><h2>常考但近几年没出现的考点<span class="eyebrow">出现 ≥ 5 次，且已 ≥ 4 年没考</span></h2>' +
        '<p class="note">历史上常考、近几年"沉寂"的考点，命题组有可能重新启用，复习时不能放掉。</p><ul class="cold">' + cold.map(function (k) {
          var K = S.byKp[k.id];
          return '<li>' + KY.link('kp-' + k.id, KY.esc(k.title)) + '<span>共 ' + K.count + ' 次，最近一次 ' + K.last + ' 年（已 ' + K.gap + ' 年未考）</span></li>';
        }).join('') + '</ul></section>';
    }

    h += '<section class="section"><h2>考点 × 年份<span class="eyebrow">颜色越深，当年考得越多；悬停看数字</span></h2>' + heatmap() + '</section>';
    h += '<section class="section"><h2>全部考点数据表<span class="eyebrow">点表头排序</span></h2><div id="kp-table">' + kpTable() + '</div></section>';
    h += '<section class="section"><h2>最常用的解题方法</h2>' + hbars(S.methods.slice(0, 20).map(function (m) { return { label: m[0], value: m[1], tip: m[0] + '：用于 ' + m[1] + ' 道题' }; })) + '</section>';
    if (A && A.method) h += '<p class="disclaimer">' + A.method + '</p>';
    h += '</div>';
    return h;
  };

  /* ── 考点详情 ── */
  KY.views.kp = function (r) {
    var id = r.id;
    var k = KY.kpById[id];
    var c = KY.chById[k.ch];
    var S = KY.meta.stats;
    var K = S.byKp[id];
    var list = KY.problemsOfKp(id).sort(KY.byYearDesc);
    var rank = KY.tax.kps.slice().sort(function (a, b) { return S.byKp[b.id].index - S.byKp[a.id].index; }).map(function (x) { return x.id; }).indexOf(id) + 1;
    var max = Math.max.apply(null, S.years.map(function (y) { return K.years[y] || 0; }).concat([1]));
    var methods = {};
    list.forEach(function (p) { (p.methods || []).forEach(function (m) { methods[m] = (methods[m] || 0) + 1; }); });
    var mlist = Object.keys(methods).sort(function (a, b) { return methods[b] - methods[a]; }).slice(0, 10);
    var h = '<div class="wrap"><div class="narrow-wide">';
    h += '<header class="page-head"><p class="eyebrow">' + KY.link('stats', '考点分析', 'crumb') + ' / 第 ' + c.no + ' 章 ' + c.title + '</p><h1>' + KY.esc(k.title) + '</h1>' +
      '<p class="lede">大纲范围：' + KY.esc(k.scope) + '</p><div class="head-row">' +
      (KY.meta.lessons[id] ? KY.link('l-' + id, '读基础讲解', 'btn primary') : '<span class="chip">讲解整理中</span>') +
      '<button type="button" class="btn" data-open-bank-kp="' + id + '">在真题库里筛选</button></div></header>';
    h += '<div class="kpis">' +
      '<div class="kpi"><b>' + K.count + '</b><span>出现次数</span></div>' +
      '<div class="kpi"><b>' + K.yearsCovered + '</b><span>覆盖年份</span></div>' +
      '<div class="kpi"><b>' + (K.last || '—') + '</b><span>最近一次</span></div>' +
      '<div class="kpi"><b>' + rank + ' / ' + KY.tax.kps.length + '</b><span>考频指数排名</span></div></div>';
    h += '<section class="section"><h2>历年出现情况</h2><div class="strip" role="img" aria-label="' + KY.esc(k.title) + ' 各年出现次数">' + S.years.map(function (y) {
      var v = K.years[y] || 0;
      return '<span class="strip-cell ' + seqClass(v, max) + '" data-tip="' + y + ' 年：' + (v ? v + ' 道' : '未考') + '"><i>' + String(y).slice(2) + '</i></span>';
    }).join('') + '</div><p class="note">选择 ' + K.types['选择'] + ' · 填空 ' + K.types['填空'] + ' · 解答 ' + K.types['解答'] + '</p></section>';
    if (mlist.length) h += '<section class="section"><h2>这类题常用的方法</h2><div class="chips">' + mlist.map(function (m) { return '<span class="chip">' + KY.esc(m) + ' · ' + methods[m] + '</span>'; }).join('') + '</div></section>';
    h += '<section class="section"><h2>全部 ' + list.length + ' 道真题<span class="eyebrow">从新到旧</span></h2>';
    h += list.length ? '<div class="qs">' + list.map(function (p) { return KY.card(p); }).join('') + '</div>' : '<div class="empty"><b>没有以它为考点的真题</b><span>这个考点在数学一里通常作为其他题的工具出现。</span></div>';
    h += '</section></div></div>';
    return h;
  };
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-open-bank-kp]');
    if (b) KY.openBank({ kp: b.dataset.openBankKp, ch: KY.kpById[b.dataset.openBankKp].ch });
  });

  /* ── 悬停提示 ── */
  var tip = null;
  function showTip(el, x, y) {
    if (!tip) tip = document.getElementById('tip');
    tip.textContent = el.dataset.tip;
    tip.hidden = false;
    var w = tip.offsetWidth, hgt = tip.offsetHeight;
    var left = Math.min(window.innerWidth - w - 8, Math.max(8, x + 12));
    var top = y - hgt - 12 < 8 ? y + 16 : y - hgt - 12;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }
  document.addEventListener('mouseover', function (e) {
    var el = e.target.closest('[data-tip]');
    if (el) showTip(el, e.clientX, e.clientY); else if (tip) tip.hidden = true;
  });
  document.addEventListener('mousemove', function (e) {
    var el = e.target.closest('[data-tip]');
    if (el && tip && !tip.hidden) showTip(el, e.clientX, e.clientY);
  });
  document.addEventListener('click', function (e) {
    var el = e.target.closest('td[data-tip], .strip-cell[data-tip]');
    if (el) { var r = el.getBoundingClientRect(); showTip(el, r.left + r.width / 2, r.top); }
  });
  window.addEventListener('scroll', function () { if (tip) tip.hidden = true; }, { passive: true });
})();
