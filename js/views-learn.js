// 基础讲解：目录页与单篇讲解页（定义框、分步证明、自测、问 AI）。
(function () {
  'use strict';
  var KY = window.KY;
  var KIND = { why: '从问题出发', def: '定义', thm: '定理', example: '例题', pitfall: '常见误区', method: '方法', exam: '考研怎么考', check: '自测', text: '' };

  function freqLine(id) {
    var K = KY.meta.stats.byKp[id];
    if (!K || !K.count) return '<span class="freq freq-0">' + KY.meta.stats.years.length + ' 年里未单独考过</span>';
    return '<span class="freq">考过 ' + K.count + ' 次 · 最近 ' + K.last + '</span>';
  }

  /* ── 目录 ── */
  KY.views.learn = function () {
    var L = KY.meta.lessons;
    var done = Object.keys(L).filter(KY.lessonDone).length;
    var h = '<div class="wrap">';
    h += '<header class="page-head"><p class="eyebrow">基础讲解 · 从零开始</p><h1>把每个概念学透</h1>' +
      '<p class="lede">按考试大纲分成 ' + KY.tax.chapters.length + ' 章、' + KY.tax.kps.length + ' 个考点。每篇都从"这个概念要解决什么问题"讲起，给出严格定义的逐字拆解、定理的完整分步证明、例题、常见误区和自测题。看不懂的地方随时点「问 AI」。</p>' +
      KY.meter({ ok: done, bad: 0, n: KY.tax.kps.length }, '已学完') + '</header>';
    KY.tax.chapters.forEach(function (c) {
      var kps = KY.tax.kps.filter(function (k) { return k.ch === c.id; });
      h += '<section class="section"><h2><span class="eyebrow">第 ' + c.no + ' 章</span>' + c.title + '</h2><div class="kp-list">';
      kps.forEach(function (k) {
        var ready = !!L[k.id];
        var inner = '<span class="kp-title">' + KY.esc(k.title) + (KY.lessonDone(k.id) ? '<span class="done-mark">已学完</span>' : '') + '</span>' +
          '<span class="kp-scope">' + KY.esc(k.scope) + '</span>' +
          '<span class="kp-foot">' + freqLine(k.id) + (ready ? '' : '<span class="freq freq-0">讲解整理中</span>') + '</span>';
        h += ready ? KY.link('l-' + k.id, inner, 'kp-item') : '<div class="kp-item is-pending">' + inner + '</div>';
      });
      h += '</div></section>';
    });
    h += '</div>';
    return h;
  };

  /* ── 单篇讲解 ── */
  function secHead(s, i) {
    var k = KIND[s.kind];
    return '<header class="sec-head"><h2>' + (k ? '<span class="kind kind-' + s.kind + '">' + k + '</span>' : '') + '<span class="sec-title">' + s.title + '</span></h2>' +
      '<button type="button" class="btn btn-quiet ai-btn" data-ai-sec="' + i + '" title="把这一节发给 AI，让它换个方式讲">问 AI</button></header>';
  }

  function thmHtml(s, i) {
    var h = '<div class="box box-thm">' + s.statement + '</div>';
    if (s.intuition) h += '<div class="intuition"><span class="lbl lbl-accent">直观理解</span>' + s.intuition + '</div>';
    if (s.steps && s.steps.length) {
      h += '<div class="proof" data-next="0">' +
        '<div class="proof-head"><span class="lbl">证明</span><span class="proof-ctl">' +
        '<button type="button" class="btn btn-small" data-proof="next">先想一想，再看第 1 步</button>' +
        '<button type="button" class="btn btn-small btn-quiet" data-proof="all">展开完整证明</button></span></div>' +
        '<ol class="steps">' + s.steps.map(function (st, j) {
          return '<li class="step mj-lazy" hidden><div class="step-s">' + st.s + '</div>' +
            (st.why ? '<button type="button" class="why-btn" data-why aria-expanded="false">为什么可以这样？</button><div class="step-why mj-lazy" hidden>' + st.why + '</div>' : '') + '</li>';
        }).join('') + '</ol><p class="qed" hidden>证毕 ∎</p></div>';
    } else if (s.proof) {
      h += '<details class="proof-plain"><summary>证明</summary><div class="mj-lazy">' + s.proof + '</div></details>';
    } else if (s.noProof) {
      h += '<p class="noproof"><span class="lbl">证明说明</span>' + KY.esc(s.noProof) + '</p>';
    }
    if (s.remark) h += '<div class="remark"><span class="lbl">注意</span>' + s.remark + '</div>';
    return h;
  }

  function checkHtml(s, lessonId, i) {
    var rec = (KY.prog.quiz[lessonId] || {});
    return '<ol class="quiz">' + s.items.map(function (it, j) {
      var key = i + '.' + j;
      var h = '<li class="qz" data-key="' + key + '"><div class="qz-q">' + it.q + '</div>';
      if (Array.isArray(it.options)) {
        h += '<div class="qz-opts">' + it.options.map(function (o, k) {
          return '<button type="button" class="qz-opt" data-qz-opt="' + k + '" data-correct="' + (k === it.correct) + '"><span class="opt-l">' + 'ABCDEFG'[k] + '</span><span>' + o + '</span></button>';
        }).join('') + '</div><div class="qz-fb mj-lazy" hidden>' + it.explain + '</div>';
      } else {
        h += '<button type="button" class="btn btn-small" data-qz-show>想好了，看答案</button>' +
          '<div class="qz-a mj-lazy" hidden>' + it.a + '<div class="qz-self">我刚才：<button type="button" class="btn btn-small" data-qz-self="1">答对了</button><button type="button" class="btn btn-small" data-qz-self="0">没答对</button></div></div>';
      }
      if (rec[key] != null) h += '<span class="qz-rec">上次：' + (rec[key] ? '答对' : '答错') + '</span>';
      return h + '</li>';
    }).join('') + '</ol>';
  }

  function sectionHtml(s, i, lessonId) {
    var body;
    if (s.kind === 'thm') body = thmHtml(s, i);
    else if (s.kind === 'check') body = checkHtml(s, lessonId, i);
    else if (s.kind === 'def') body = '<div class="box box-def">' + s.html + '</div>';
    else body = '<div class="sec-body">' + s.html + '</div>';
    if (s.kind === 'exam') body += examStats(lessonId);
    return '<section class="sec sec-' + s.kind + '" id="s-' + i + '">' + secHead(s, i) + body + '</section>';
  }

  function examStats(id) {
    var K = KY.meta.stats.byKp[id];
    if (!K || !K.count) return '<p class="exam-data">在收录的 ' + KY.meta.stats.years.length + ' 年数学一真题里，这个考点没有作为主要考点单独出现过。</p>';
    return '<p class="exam-data">真题数据：' + KY.meta.stats.years.length + ' 年里出现 ' + K.count + ' 次（选择 ' + K.types['选择'] + '、填空 ' + K.types['填空'] + '、解答 ' + K.types['解答'] + '），覆盖 ' + K.yearsCovered + ' 个年份，最近一次是 ' + K.last + ' 年。' + KY.link('kp-' + id, '看全部真题与年份分布', 'chip') + '</p>';
  }

  function relatedHtml(id) {
    var list = KY.problemsOfKp(id).sort(KY.byYearDesc);
    if (!list.length) return '';
    var show = list.slice(0, 8);
    return '<section class="section related" id="s-rel"><h2>这个考点的真题<span class="eyebrow">共 ' + list.length + ' 道，按年份从新到旧</span></h2><ul class="mini-list">' +
      show.map(function (p) {
        return '<li>' + KY.link('q-' + p.id, '<span class="yr">' + p.year + '</span><span class="tp">' + KY.esc(p.no) + ' · ' + p.type + '题</span>' + KY.dots(p.difficulty), 'mini-head') + '<div class="mini-stem">' + p.stem + '</div></li>';
      }).join('') + '</ul>' + (list.length > show.length ? KY.link('kp-' + id, '查看全部 ' + list.length + ' 道', 'btn') : '') + '</section>';
  }

  KY.views.lesson = function (r) {
    var id = r.id;
    return KY.ensureLesson(id).then(function (L) {
      var k = KY.kpById[id];
      var c = KY.chById[k.ch];
      var all = KY.tax.kps;
      var idx = KY.kpOrder[id];
      var prev = all[idx - 1];
      var next = all[idx + 1];
      var toc = '<aside class="toc"><div><p class="eyebrow">本篇</p><nav class="in-page" aria-label="本篇目录">' + L.sections.map(function (s, i) {
        return '<a href="#s-' + i + '" data-scroll="s-' + i + '"><span class="kind-dot kind-' + s.kind + '"></span><span>' + s.title + '</span></a>';
      }).join('') + (KY.problemsOfKp(id).length ? '<a href="#s-rel" data-scroll="s-rel"><span class="kind-dot"></span><span>这个考点的真题</span></a>' : '') + '</nav></div>' +
        '<div><p class="eyebrow">' + c.title + '</p><nav class="chs" aria-label="同章考点">' + all.filter(function (x) { return x.ch === k.ch; }).map(function (x) {
          return KY.meta.lessons[x.id] ? KY.link('l-' + x.id, KY.esc(x.title), '', x.id === id ? ' aria-current="page"' : '') : '<span class="toc-pending">' + KY.esc(x.title) + '</span>';
        }).join('') + '</nav></div></aside>';
      var m = '<div class="ch-main lesson" data-lesson="' + id + '">';
      m += '<header class="page-head"><p class="eyebrow">' + KY.link('learn', '基础讲解', 'crumb') + ' / 第 ' + c.no + ' 章 ' + c.title + '</p><h1>' + KY.esc(L.title) + '</h1>' +
        '<p class="lede">' + L.summary + '</p><div class="head-row">' + freqLine(id) + KY.link('kp-' + id, '考频分析', 'chip') +
        (L.prereq && L.prereq.length ? '<span class="prereq">先修：' + L.prereq.map(function (p) { return KY.meta.lessons[p] ? KY.link('l-' + p, KY.esc(KY.kpById[p].title), 'chip') : '<span class="chip">' + KY.esc(KY.kpById[p].title) + '</span>'; }).join('') + '</span>' : '') +
        '</div></header>';
      if (KY.meta.status && KY.meta.status.reviewedLessons.indexOf(id) < 0) m += '<p class="draft-note">本篇是作者初稿，还没经过第二人独立审校。读到可疑的地方，可以点那一节右上角的「问 AI」核对。</p>';
      m += L.sections.map(function (s, i) { return sectionHtml(s, i, id); }).join('');
      m += '<div class="lesson-done"><button type="button" class="btn ' + (KY.lessonDone(id) ? '' : 'primary') + '" data-lesson-done>' + (KY.lessonDone(id) ? '已学完（点击取消）' : '这一篇我学完了') + '</button></div>';
      m += relatedHtml(id);
      m += '<nav class="pager" aria-label="翻篇">' +
        (prev && KY.meta.lessons[prev.id] ? KY.link('l-' + prev.id, '← ' + KY.esc(prev.title), 'btn') : '<span></span>') +
        (next && KY.meta.lessons[next.id] ? KY.link('l-' + next.id, KY.esc(next.title) + ' →', 'btn') : '<span></span>') + '</nav>';
      m += '</div>';
      return '<div class="wrap"><div class="ch-layout">' + toc + m + '</div></div>';
    });
  };

  /* ── 交互：分步证明、自测、问 AI ── */
  function revealEl(el) {
    el.hidden = false;
    if (el.classList.contains('mj-lazy')) { el.classList.remove('mj-lazy'); KY.typeset(el); }
  }
  document.addEventListener('click', function (e) {
    var t = e.target;
    var pb = t.closest('[data-proof]');
    if (pb) {
      var proof = pb.closest('.proof');
      var steps = proof.querySelectorAll('.step');
      var n = +proof.dataset.next;
      if (pb.dataset.proof === 'all') n = steps.length;
      else n = Math.min(steps.length, n + 1);
      for (var i = 0; i < n; i++) revealEl(steps[i]);
      proof.dataset.next = n;
      var nextBtn = proof.querySelector('[data-proof="next"]');
      if (n >= steps.length) {
        proof.querySelector('.qed').hidden = false;
        proof.querySelector('.proof-ctl').hidden = true;
      } else nextBtn.textContent = '下一步（第 ' + (n + 1) + ' / ' + steps.length + ' 步）';
      return;
    }
    var wb = t.closest('[data-why]');
    if (wb) {
      var w = wb.nextElementSibling;
      if (w.hidden) { revealEl(w); wb.setAttribute('aria-expanded', 'true'); wb.textContent = '收起理由'; }
      else { w.hidden = true; wb.setAttribute('aria-expanded', 'false'); wb.textContent = '为什么可以这样？'; }
      return;
    }
    var lessonEl = t.closest('.lesson');
    var lid = lessonEl && lessonEl.dataset.lesson;
    var opt = t.closest('[data-qz-opt]');
    if (opt) {
      var li = opt.closest('.qz');
      li.querySelectorAll('.qz-opt').forEach(function (b) { b.disabled = true; if (b.dataset.correct === 'true') b.classList.add('right'); });
      var right = opt.dataset.correct === 'true';
      if (!right) opt.classList.add('wrong');
      var fb = li.querySelector('.qz-fb');
      fb.insertAdjacentHTML('afterbegin', '<b class="' + (right ? 'ok-t' : 'bad-t') + '">' + (right ? '答对了。' : '不对。') + '</b>');
      revealEl(fb);
      recordQuiz(lid, li.dataset.key, right);
      return;
    }
    if (t.closest('[data-qz-show]')) {
      var li2 = t.closest('.qz');
      t.closest('[data-qz-show]').hidden = true;
      revealEl(li2.querySelector('.qz-a'));
      return;
    }
    var self = t.closest('[data-qz-self]');
    if (self) {
      var li3 = self.closest('.qz');
      recordQuiz(lid, li3.dataset.key, self.dataset.qzSelf === '1');
      self.parentElement.innerHTML = self.dataset.qzSelf === '1' ? '已记录：答对' : '已记录：没答对。可以点这一节右上角的「问 AI」让它换个方式讲。';
      return;
    }
    if (t.closest('[data-lesson-done]')) {
      KY.setLessonDone(lid, !KY.lessonDone(lid));
      var b2 = t.closest('[data-lesson-done]');
      b2.textContent = KY.lessonDone(lid) ? '已学完（点击取消）' : '这一篇我学完了';
      b2.classList.toggle('primary', !KY.lessonDone(lid));
      return;
    }
    var ai = t.closest('[data-ai-sec]');
    if (ai && lid) KY.ai.open({ kind: 'lesson', id: lid, section: +ai.dataset.aiSec });
  });
  function recordQuiz(lid, key, right) {
    if (!lid) return;
    KY.prog.quiz[lid] = KY.prog.quiz[lid] || {};
    KY.prog.quiz[lid][key] = right;
    KY.saveProg();
  }
})();
