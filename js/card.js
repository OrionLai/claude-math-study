// 题目卡：题面 + 分层提示（思路 → 答案 → 完整解析）+ 掌握标记 + 问 AI。
(function () {
  'use strict';
  var KY = window.KY;
  var LET = ['A', 'B', 'C', 'D'];
  var FLAG = { ok: '已掌握', bad: '错题本' };

  KY.answerHtml = function (p) {
    if (p.options && /^[A-D]$/.test(p.answer)) return '<b>' + p.answer + '</b>　' + p.options[LET.indexOf(p.answer)];
    return p.answer;
  };

  KY.card = function (p, o) {
    o = o || {};
    var st = KY.status(p.id);
    var h = '<article class="q" id="q-' + p.id + '" data-id="' + p.id + '" data-st="' + st + '">';
    h += '<header class="q-meta">' +
      KY.link('y' + p.year, p.year, 'yr', ' title="查看 ' + p.year + ' 年全部高数题"') +
      '<span class="tp">' + KY.esc(p.no) + ' · ' + p.type + '题' + (p.score ? ' · ' + p.score + ' 分' : '') + '</span>' +
      KY.dots(p.difficulty) +
      '<span class="flag">' + (FLAG[st] || '') + '</span></header>';
    h += '<div class="q-kps">' + p.kp.map(function (k, i) { return KY.kpChip(k, i === 0 ? 'main' : ''); }).join('') + '</div>';
    h += '<div class="q-stem">' + p.stem + '</div>';
    if (p.figure) {
      h += '<figure class="q-fig"><img src="' + p.figure.src + '" alt="题目配图" loading="lazy">' +
        '<figcaption><details><summary>图形的文字说明</summary><div>' + p.figure.desc + '</div></details></figcaption></figure>';
    }
    if (p.options) {
      var long = p.options.some(function (t) { return KY.plain(t).length > 28; });
      h += '<ol class="opts' + (long ? ' long' : '') + '">' + p.options.map(function (t, i) {
        return '<li><span class="opt-l">(' + LET[i] + ')</span><span class="opt-t">' + t + '</span></li>';
      }).join('') + '</ol>';
    }
    h += '<div class="q-act">' +
      '<button type="button" class="btn" data-act="hint" aria-expanded="false">思路提示</button>' +
      '<button type="button" class="btn" data-act="ans" aria-expanded="false">看答案</button>' +
      '<button type="button" class="btn" data-act="sol" aria-expanded="false">完整解析</button>' +
      '<button type="button" class="btn ai-btn" data-act="ai">问 AI</button>' +
      '<span class="grow"></span>' +
      '<button type="button" class="btn mark ok" data-act="ok" aria-pressed="' + (st === 'ok') + '">会了</button>' +
      '<button type="button" class="btn mark bad" data-act="bad" aria-pressed="' + (st === 'bad') + '">不会</button>' +
      '</div>';
    h += '<div class="q-panel q-hint mj-lazy" hidden></div>';
    h += '<div class="q-panel q-ans mj-lazy" hidden><span class="lbl">答案</span><div>' + KY.answerHtml(p) + '</div></div>';
    h += '<div class="q-panel q-sol mj-lazy" hidden></div>';
    h += '</article>';
    return h;
  };

  function solHtml(p, s) {
    var h = '<section class="sol-part"><span class="lbl lbl-accent">详细解答</span>' + s.solution + '</section>';
    if (s.alt) h += '<section class="sol-part"><span class="lbl lbl-accent">另解</span>' + s.alt + '</section>';
    h += '<section class="sol-part tip"><span class="lbl">易错点</span>' + s.pitfalls + '</section>';
    h += '<section class="sol-part sum"><span class="lbl lbl-ok">方法总结</span>' + s.summary + '</section>';
    var foot = [];
    p.kp.forEach(function (k) { if (KY.meta.lessons[k]) foot.push(KY.link('l-' + k, '回顾讲解：' + KY.esc(KY.kpById[k].title), 'chip')); });
    foot.push(KY.link('q-' + p.id, '单独打开这道题', 'chip'));
    h += '<div class="sol-foot">' + foot.join('') + '</div>';
    if (s.verify) {
      var by = { sympy: '已用 SymPy 验算', manual: '已人工逐步核对', proof: '证明已逐步核对', mixed: '已用 SymPy 与人工核对' }[s.verify.by] || '';
      h += '<p class="verify">' + by + (s.verify.note ? '：' + KY.esc(s.verify.note) : '') + '</p>';
    }
    if (p.flags && p.flags.length) h += '<p class="verify">整理说明：' + p.flags.map(KY.esc).join('；') + '</p>';
    if (KY.meta.status && KY.meta.status.reviewedYears.indexOf(p.year) < 0) h += '<p class="verify draft">这一年的解析是作者初稿：已用 SymPy 验算、对照过参考答案，但还没经过第二人独立审校。</p>';
    return h;
  }

  function reveal(el) {
    el.hidden = false;
    if (el.classList.contains('mj-lazy')) { el.classList.remove('mj-lazy'); KY.typeset(el); }
  }
  function setBtn(q, act, open, labels) {
    var b = q.querySelector('[data-act="' + act + '"]');
    b.setAttribute('aria-expanded', String(open));
    b.textContent = open ? labels[1] : labels[0];
  }
  var LABELS = { hint: ['思路提示', '收起思路'], ans: ['看答案', '收起答案'], sol: ['完整解析', '收起解析'] };

  function withSolution(p, fn, btn) {
    if (KY.sol[p.id]) { fn(KY.sol[p.id]); return; }
    if (btn) btn.classList.add('busy');
    KY.ensureSolutions(p.year).then(function () {
      if (btn) btn.classList.remove('busy');
      if (KY.sol[p.id]) fn(KY.sol[p.id]); else KY.toast('这道题的解析还没有整理好');
    }, function () { if (btn) btn.classList.remove('busy'); KY.toast('解析加载失败，请检查网络后再试'); });
  }

  KY.toggleCard = function (q, act) {
    var p = KY.pById[q.dataset.id];
    var hint = q.querySelector('.q-hint');
    var ans = q.querySelector('.q-ans');
    var sol = q.querySelector('.q-sol');
    var btn = q.querySelector('[data-act="' + act + '"]');
    if (act === 'ans') {
      if (ans.hidden) { reveal(ans); setBtn(q, 'ans', true, LABELS.ans); } else { ans.hidden = true; setBtn(q, 'ans', false, LABELS.ans); }
      return;
    }
    if (act === 'hint') {
      if (!hint.hidden) { hint.hidden = true; setBtn(q, 'hint', false, LABELS.hint); return; }
      withSolution(p, function (s) {
        if (!hint.dataset.filled) { hint.innerHTML = '<span class="lbl lbl-accent">思路分析</span>' + s.analysis + '<p class="nudge">先按这个思路自己动笔，卡住了再看答案或完整解析。</p>'; hint.dataset.filled = '1'; }
        reveal(hint); setBtn(q, 'hint', true, LABELS.hint);
      }, btn);
      return;
    }
    if (act === 'sol') {
      if (!sol.hidden) { sol.hidden = true; setBtn(q, 'sol', false, LABELS.sol); return; }
      withSolution(p, function (s) {
        if (!sol.dataset.filled) { sol.innerHTML = solHtml(p, s); sol.dataset.filled = '1'; }
        if (!hint.dataset.filled) { hint.innerHTML = '<span class="lbl lbl-accent">思路分析</span>' + s.analysis; hint.dataset.filled = '1'; }
        reveal(hint); reveal(ans); reveal(sol);
        setBtn(q, 'hint', true, LABELS.hint); setBtn(q, 'ans', true, LABELS.ans); setBtn(q, 'sol', true, LABELS.sol);
      }, btn);
    }
  };

  function syncCard(q) {
    var st = KY.status(q.dataset.id);
    q.dataset.st = st;
    q.querySelector('.flag').textContent = FLAG[st] || '';
    q.querySelector('[data-act="ok"]').setAttribute('aria-pressed', String(st === 'ok'));
    q.querySelector('[data-act="bad"]').setAttribute('aria-pressed', String(st === 'bad'));
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.q [data-act]');
    if (!b) return;
    var q = b.closest('.q');
    var act = b.dataset.act;
    if (act === 'hint' || act === 'ans' || act === 'sol') KY.toggleCard(q, act);
    else if (act === 'ok' || act === 'bad') {
      KY.setStatus(q.dataset.id, act);
      Array.prototype.forEach.call(document.querySelectorAll('.q[data-id="' + q.dataset.id + '"]'), syncCard);
      if (act === 'bad' && KY.status(q.dataset.id) === 'bad') KY.toast('已加入错题本');
    } else if (act === 'ai') {
      var p = KY.pById[q.dataset.id];
      withSolution(p, function () { KY.ai.open({ kind: 'problem', id: p.id }); }, b);
    }
  });
})();
