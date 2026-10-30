// 题目卡：题面 + 分层提示（思路 → 答案 → 完整解析）+ 掌握标记 + 问 AI。
(function () {
  'use strict';
  var KY = window.KY;
  var LET = ['A', 'B', 'C', 'D'];
  var FLAG = { ok: '已掌握', bad: '错题本' };

  // 这道题在哪些讲解里被引用：[{id, title, secTitle, tok, worked}]，有完整精讲的在前
  KY.refsOf = function (pid) {
    return ((KY.meta.refs || {})[pid] || []).filter(function (r) { return KY.meta.lessons[r[0]]; }).map(function (r) {
      var L = KY.meta.lessons[r[0]];
      var sec = L.sections[r[1]];
      return { id: r[0], title: L.title, secTitle: sec ? KY.plain(sec.title) : '', tok: 'l-' + r[0] + '~s-' + r[1], worked: !!r[2] };
    });
  };

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
      // 有标准答案的选择题可以直接点选作答（样式沿用讲解自测的 .qz-opt）
      var pickable = /^[A-D]$/.test(p.answer);
      h += '<ol class="opts' + (long ? ' long' : '') + (pickable ? ' pick' : '') + '">' + p.options.map(function (t, i) {
        var inner = '<span class="opt-l">(' + LET[i] + ')</span><span class="opt-t">' + t + '</span>';
        return '<li>' + (pickable ? '<button type="button" class="qz-opt" data-pick="' + LET[i] + '">' + inner + '</button>' : inner) + '</li>';
      }).join('') + '</ol>';
      if (pickable) h += '<p class="pick-fb" hidden></p>';
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

  function solHtml(p, s, inPractice) {
    var h = '<section class="sol-part"><span class="lbl lbl-accent">详细解答</span>' + s.solution + '</section>';
    if (s.alt) h += '<section class="sol-part"><span class="lbl lbl-accent">另解</span>' + s.alt + '</section>';
    h += '<section class="sol-part pit"><span class="lbl">易错点</span>' + s.pitfalls + '</section>';
    h += '<section class="sol-part sum"><span class="lbl lbl-ok">方法总结</span>' + s.summary + '</section>';
    var foot = [];
    var refLessons = {};
    KY.refsOf(p.id).forEach(function (r) {
      refLessons[r.id] = true;
      foot.push(KY.link(r.tok, (r.worked ? '讲解里的精讲：' : '讲解里提到：') + KY.esc(r.title), 'chip chip-ref', ' title="' + KY.esc(r.secTitle) + '"'));
    });
    p.kp.forEach(function (k) { if (KY.meta.lessons[k] && !refLessons[k]) foot.push(KY.link('l-' + k, '回顾讲解：' + KY.esc(KY.kpById[k].title), 'chip')); });
    foot.push(KY.link('q-' + p.id, '单独打开这道题', 'chip'));
    h += '<div class="sol-foot">' + foot.join('') + '</div>';
    if (s.verify) {
      var by = { sympy: '已用 SymPy 验算', manual: '已人工逐步核对', proof: '证明已逐步核对', mixed: '已用 SymPy 与人工核对' }[s.verify.by] || '';
      h += '<p class="verify">' + by + (s.verify.note ? '：' + KY.esc(s.verify.note) : '') + '</p>';
    }
    if (p.flags && p.flags.length) h += '<p class="verify">整理说明：' + p.flags.map(KY.esc).join('；') + '</p>';
    if (KY.meta.status && KY.meta.status.reviewedYears.indexOf(p.year) < 0) h += '<p class="verify draft">这一年的解析是作者初稿：已用 SymPy 验算、对照过参考答案，但还没经过第二人独立审校。</p>';
    // 解析末尾再放一组标记按钮：读完长解析不用滚回题目上方（刷题页再加「下一道」）
    var st = KY.status(p.id);
    h += '<div class="sol-end"><span>看完了，这道题：</span>' +
      '<button type="button" class="btn mark ok" data-act="ok" aria-pressed="' + (st === 'ok') + '">会了</button>' +
      '<button type="button" class="btn mark bad" data-act="bad" aria-pressed="' + (st === 'bad') + '">不会</button>' +
      (inPractice ? '<button type="button" class="btn primary" data-act="next">下一道 →</button>' : '') + '</div>';
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
        if (!sol.dataset.filled) { sol.innerHTML = solHtml(p, s, !!q.closest('#pr-slot')); sol.dataset.filled = '1'; }
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
    // 题目下方和解析末尾各有一组「会了 / 不会」
    Array.prototype.forEach.call(q.querySelectorAll('[data-act="ok"], [data-act="bad"]'), function (b) {
      b.setAttribute('aria-pressed', String(st === b.dataset.act));
    });
  }

  // quiet：不弹通知（调用方自己在页面上说明了）
  KY.markCard = function (q, act, quiet) {
    var was = KY.status(q.dataset.id);
    KY.setStatus(q.dataset.id, act);
    var st = KY.status(q.dataset.id);
    Array.prototype.forEach.call(document.querySelectorAll('.q[data-id="' + q.dataset.id + '"]'), syncCard);
    if (!quiet) {
      if (act === 'bad') KY.toast(was === 'bad' ? '这道题已在错题本里，标记时间更新为今天。做对了点「会了」移出' : '已加入错题本');
      else if (st === 'ok') KY.toast('已标记为会了');
    }
    KY.emit('marked', { id: q.dataset.id, st: st });
  };

  // 选择题点选：立即判对错；选错自动进错题本，选对不自动标「会了」
  function pickOption(btn) {
    var q = btn.closest('.q');
    var p = KY.pById[q.dataset.id];
    var right = btn.dataset.pick === p.answer;
    var was = KY.status(p.id);
    Array.prototype.forEach.call(q.querySelectorAll('[data-pick]'), function (b) {
      b.disabled = true;
      if (b.dataset.pick === p.answer) b.classList.add('right');
    });
    if (!right) btn.classList.add('wrong');
    var fb = q.querySelector('.pick-fb');
    fb.innerHTML = right
      ? '<b class="ok-t">答对了。</b>有把握就点「会了」；想核对思路，看「完整解析」。'
      : '<b class="bad-t">不对，</b>正确答案是 (' + p.answer + ')。' + (was === 'bad' ? '这道题还在错题本里' : '已加入错题本') + '，看看「完整解析」里错在哪一步。';
    fb.hidden = false;
    if (!right) KY.markCard(q, 'bad', true);
  }

  document.addEventListener('click', function (e) {
    var pk = e.target.closest('.q [data-pick]');
    if (pk) { pickOption(pk); return; }
    var b = e.target.closest('.q [data-act]');
    if (!b) return;
    var q = b.closest('.q');
    var act = b.dataset.act;
    if (act === 'hint' || act === 'ans' || act === 'sol') KY.toggleCard(q, act);
    else if (act === 'ok' || act === 'bad') KY.markCard(q, act);
    else if (act === 'next') { if (KY.practiceStep) KY.practiceStep(1); }
    else if (act === 'ai') {
      var p = KY.pById[q.dataset.id];
      withSolution(p, function () { KY.ai.open({ kind: 'problem', id: p.id }); }, b);
    }
  });

  /* ── 看题浮层：在讲解里点真题引用时不离开当前页面 ── */
  var peekEl = null;
  var peekFrom = null;
  KY.peek = function (id, from) {
    var p = KY.pById[id];
    if (!p) return;
    peekEl = peekEl || document.getElementById('peek');
    peekFrom = from || document.activeElement;
    var body = peekEl.querySelector('.peek-body');
    KY.untypeset(body);
    body.innerHTML = KY.card(p) + '<p class="kbd-hint">快捷键：<kbd>H</kbd> 思路　<kbd>A</kbd> 答案　<kbd>S</kbd> 解析　<kbd>Y</kbd> 会了　<kbd>N</kbd> 不会　<kbd>Esc</kbd> 关闭</p>';
    peekEl.querySelector('.peek-title').textContent = p.year + ' 年数学一 ' + p.no + ' · ' + p.type + '题';
    var open = peekEl.querySelector('.peek-open');
    open.setAttribute('href', '#q-' + p.id);
    open.dataset.go = 'q-' + p.id;
    if (!peekEl.open) {
      if (typeof peekEl.showModal === 'function') peekEl.showModal(); else peekEl.setAttribute('open', '');
    }
    body.scrollTop = 0;
    KY.typeset(body);
    var first = body.querySelector('[data-act="hint"]');
    if (first) first.focus({ preventScroll: true });
  };
  KY.closePeek = function () { if (peekEl && peekEl.open) peekEl.close(); };
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-peek-close]')) { KY.closePeek(); return; }
    // 点浮层外面的灰色背景关闭
    if (e.target.id === 'peek' || e.target.id === 'sheet') e.target.close();
    if (e.target.closest('[data-sheet-close]')) document.getElementById('sheet').close();
  });
  document.addEventListener('close', function (e) {
    if (e.target.id !== 'peek') return;
    var body = peekEl.querySelector('.peek-body');
    KY.untypeset(body);
    body.innerHTML = '';
    if (peekFrom && document.contains(peekFrom) && peekFrom.focus) peekFrom.focus({ preventScroll: true });
    peekFrom = null;
  }, true);

  /* ── 快捷键：单题场景（看题浮层、单题页、随机刷题）里操作当前这道题 ── */
  function currentCard() {
    if (peekEl && peekEl.open) return peekEl.querySelector('.q');
    var r = KY.route;
    if (!r) return null;
    if (r.view === 'problem') return document.querySelector('#view .q');
    if (r.view === 'practice') return document.querySelector('#pr-slot .q');
    return null;
  }
  var KEYS = { h: 'hint', a: 'ans', s: 'sol', y: 'ok', n: 'bad' };
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
    var t = e.target;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
    var ai = document.getElementById('ai');
    if (ai && !ai.hidden && ai.contains(t)) return;
    var q = currentCard();
    if (!q) return;
    var k = e.key.toLowerCase();
    var act = KEYS[k];
    if (act) {
      e.preventDefault();
      if (act === 'ok' || act === 'bad') KY.markCard(q, act); else KY.toggleCard(q, act);
      return;
    }
    if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && !(peekEl && peekEl.open)) {
      var dir = e.key === 'ArrowRight' ? 1 : -1;
      if (KY.route.view === 'practice' && KY.practiceStep) { e.preventDefault(); KY.practiceStep(dir); }
      else if (KY.route.view === 'problem') {
        var nav = document.querySelector('#view .pager a[data-dir="' + dir + '"]');
        if (nav) { e.preventDefault(); nav.click(); }
      }
    }
  });
})();
