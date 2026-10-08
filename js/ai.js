// AI 辅导面板。三种连接方式：
//   1. 在 Claude 里打开（artifact）：用平台的 sample 能力，花的是读者自己的 Claude 额度；
//   2. 单独部署（GitHub Pages / 本地打开）：读者填自己的 Anthropic API Key，用官方 SDK 直接调用；
//   3. 都没有：一键复制"题目 + 上下文 + 问题"，粘贴到任何 AI。
(function () {
  'use strict';
  var KY = window.KY;
  var CFG_KEY = 'ky2-ai';
  var SDK_URL = 'js/vendor/anthropic-sdk-0.128.0.mjs';
  var MODELS = [
    ['claude-opus-5-5', 'Claude Opus 5.5（默认，讲解最深入）'],
    ['claude-sonnet-5-5', 'Claude Sonnet 5.5（更快、更省）'],
    ['claude-haiku-5-5', 'Claude Haiku 5.5（最快、最省）'],
  ];

  var RULES = [
    '你是一位耐心、严谨的考研数学一（高等数学）辅导老师，正在一个复习网站里帮学生弄懂题目和概念。请遵守：',
    '1. 先诊断：如果学生没说清楚卡在哪，先用一个问题确认他是概念不懂、某一步推导看不懂、不知道怎么下手，还是看不懂记号。一次只问一个问题。',
    '2. 一步一步来：每次回复只推进一个要点，给一个小台阶（提示、直观解释、一个更简单的平行例子、复述他已经对的部分），再提一个问题让他自己往前走。回复简短，通常不超过 250 字。',
    '3. 学生明确要完整解答，或者反复尝试仍然卡住时，再给出完整、严谨的推导，每一步写明理由。',
    '4. 从第一性原理讲：这个方法为什么成立、为什么会想到它，而不是只给套路。',
    '5. 数学必须正确；不确定就直说。学生的思路有错时，具体指出错在哪一步、为什么错。',
    '6. 用中文回答。公式用 LaTeX：行内 $...$，独立 $$...$$；不要用 \\boldsymbol、\\color、\\cancel 等扩展宏。',
    '7. 不要寒暄，不要空洞的夸奖。',
  ].join('\n');

  var QUICK = [
    ['我完全没思路，帮我找到入口', '我完全没思路，不知道从哪里下手。先帮我找到入口，别直接给答案。'],
    ['这一步为什么成立？', '我看不懂这一步：'],
    ['换个更基础的讲法', '刚才的讲法我还是不太懂，请换一种更基础、更直观的方式讲一遍。'],
    ['出一道类似的题', '请出一道和这道题考法相似、难度相当的新题考考我，先只给题目。'],
    ['检查我的做法', '这是我的做法，请帮我检查哪里有问题：\n'],
    ['直接给完整解答', '请直接给出完整、严谨的解答，每一步写明理由。'],
  ];

  var state = {
    backend: 'detecting', // detecting | claude | api | copy
    sample: null,
    sdk: null,
    cfg: KY.readJSON(CFG_KEY, {}) || {},
    sessionKey: '',
    ctx: null,      // {kind, id, section, key, label, text}
    threads: {},    // ctx.key → [{role, content}]
    busy: false,
    abort: null,
  };
  if (!state.cfg.model) state.cfg.model = MODELS[0][0];
  if (!state.cfg.tier) state.cfg.tier = 'default';
  function apiKey() { return state.cfg.key || state.sessionKey; }
  function saveCfg() { KY.writeJSON(CFG_KEY, state.cfg); }

  /* ── 检测可用的连接方式 ── */
  function detect() {
    if (window.claude && typeof window.claude.use === 'function') {
      window.claude.use('sample').then(function (s) {
        if (s) { state.sample = s; state.backend = 'claude'; } else state.backend = apiKey() ? 'api' : 'copy';
        renderSettings();
      }, function () { state.backend = apiKey() ? 'api' : 'copy'; renderSettings(); });
    } else {
      state.backend = apiKey() ? 'api' : 'copy';
    }
  }

  /* ── 上下文 ── */
  function sectionText(s) {
    if (s.kind === 'thm') {
      return [s.statement && '【定理】' + KY.plain(s.statement), s.intuition && '【直观理解】' + KY.plain(s.intuition),
        s.steps && '【证明】\n' + s.steps.map(function (st, i) { return (i + 1) + '. ' + KY.plain(st.s) + (st.why ? '（理由：' + KY.plain(st.why) + '）' : ''); }).join('\n'),
        s.proof && '【证明】' + KY.plain(s.proof), s.remark && '【注意】' + KY.plain(s.remark)].filter(Boolean).join('\n');
    }
    if (s.kind === 'check') return s.items.map(function (it, i) { return (i + 1) + '. ' + KY.plain(it.q) + (it.options ? '\n   选项：' + it.options.map(KY.plain).join(' | ') : '') + '\n   参考答案：' + KY.plain(it.a || it.explain); }).join('\n');
    return KY.plain(s.html);
  }
  function buildCtx(c) {
    if (!c) return { key: 'general', label: '没有附带题目', text: '' };
    if (c.kind === 'problem') {
      var p = KY.pById[c.id];
      var s = KY.sol[c.id];
      var t = '【题目】' + p.year + ' 年数学一 ' + p.no + '（' + p.type + '题' + (p.score ? '，' + p.score + ' 分' : '') + '）\n' + KY.plain(p.stem);
      if (p.figure) t += '\n【图形说明】' + KY.plain(p.figure.desc);
      if (p.options) t += '\n' + p.options.map(function (o, i) { return '(' + 'ABCD'[i] + ') ' + KY.plain(o); }).join('\n');
      t += '\n【标准答案】' + (p.options ? p.answer : KY.plain(p.answer));
      if (s) t += '\n【本站参考解析——供你参考，引导学生时不要整段照搬】\n思路：' + KY.plain(s.analysis) + '\n解答：' + KY.plain(s.solution) + '\n易错点：' + KY.plain(s.pitfalls);
      return { key: 'p:' + c.id, label: p.year + ' 年 ' + p.no, text: t };
    }
    if (c.kind === 'lesson') {
      var L = KY.lessons[c.id];
      if (!L) return { key: 'l:' + c.id, label: KY.kpById[c.id].title, text: '【讲解】' + KY.kpById[c.id].title };
      if (c.section != null && L.sections[c.section]) {
        var sec = L.sections[c.section];
        return { key: 'l:' + c.id + ':' + c.section, label: L.title + ' · ' + KY.plain(sec.title), text: '【讲解】' + L.title + ' · ' + KY.plain(sec.title) + '\n' + sectionText(sec).slice(0, 12000) };
      }
      return { key: 'l:' + c.id, label: L.title, text: '【讲解】' + L.title + '\n' + KY.plain(L.summary) + '\n本篇小节：' + L.sections.map(function (x) { return KY.plain(x.title); }).join('、') };
    }
    return { key: 'general', label: '没有附带题目', text: '' };
  }
  function contextFromRoute() {
    var r = KY.route;
    if (!r) return null;
    if (r.view === 'problem') return { kind: 'problem', id: r.id };
    if (r.view === 'lesson') return { kind: 'lesson', id: r.id };
    return null;
  }

  /* ── 面板 ── */
  var el = {};
  function $(id) { return document.getElementById(id); }
  function initDom() {
    el.panel = $('ai');
    el.log = $('ai-log');
    el.ctx = $('ai-ctx');
    el.input = $('ai-input');
    el.send = $('ai-send');
    el.stop = $('ai-stop');
    el.mode = $('ai-mode');
    el.settings = $('ai-settings-body');
    $('ai-quick').innerHTML = QUICK.map(function (q, i) { return '<button type="button" class="chip" data-quick="' + i + '">' + q[0] + '</button>'; }).join('');
  }

  function open(c) {
    if (c && c.kind === 'lesson' && !KY.lessons[c.id]) {
      KY.ensureLesson(c.id).then(function () { open(c); });
      return;
    }
    state.ctx = buildCtx(c || contextFromRoute());
    el.panel.hidden = false;
    document.body.classList.add('ai-open');
    renderCtx();
    renderLog();
    renderSettings();
    setTimeout(function () { el.input.focus(); }, 50);
  }
  function close() {
    el.panel.hidden = true;
    document.body.classList.remove('ai-open');
  }
  function renderCtx() {
    el.ctx.innerHTML = state.ctx.text
      ? '<span class="lbl">正在讨论</span><span class="ai-ctx-label">' + KY.esc(state.ctx.label) + '</span><button type="button" class="btn btn-small btn-quiet" data-ai-clear>不带上下文提问</button>'
      : '<span class="ai-ctx-label">通用提问（没有附带题目或讲解）。在题目或讲解旁点「问 AI」会自动带上内容。</span>';
  }
  function thread() { return (state.threads[state.ctx.key] = state.threads[state.ctx.key] || []); }
  function renderLog() {
    var t = thread();
    if (!t.length) {
      el.log.innerHTML = '<div class="ai-empty">说说你卡在哪里，或者点下面的快捷问题。AI 会先弄清楚你哪里不懂，再一步步讲。</div>';
      return;
    }
    el.log.innerHTML = t.map(function (m) { return msgHtml(m.role, m.content); }).join('');
    KY.typeset(el.log);
    el.log.scrollTop = el.log.scrollHeight;
  }
  function msgHtml(role, content) {
    return '<div class="ai-msg ' + (role === 'user' ? 'me' : 'bot') + '">' + (role === 'user' ? '<div class="ai-text">' + KY.esc(content).replace(/\n/g, '<br>') + '</div>' : '<div class="ai-text">' + md(content) + '</div>') + '</div>';
  }

  function renderSettings() {
    if (!el.mode) return;
    var b = state.backend;
    el.mode.textContent = { detecting: '正在检测…', claude: '已连接 Claude', api: '使用你的 API Key', copy: '复制到其他 AI' }[b];
    el.mode.dataset.mode = b;
    var h = '';
    if (b === 'claude') {
      h += '<p>你正在 Claude 里打开这个页面，提问直接发给 Claude，<b>用的是你自己的 Claude 额度</b>；第一次提问时会请你确认。</p>' +
        '<label for="ai-tier">回答方式 <select id="ai-tier">' +
        [['default', '标准'], ['complex', '深入思考（更慢）'], ['quick', '快速简答']].map(function (o) { return '<option value="' + o[0] + '"' + (state.cfg.tier === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></label>';
    } else {
      h += '<p>单独打开本站时，可以填自己的 <b>Anthropic API Key</b>，题目会从你的浏览器直接发给 Anthropic（不经过任何第三方）。不想填 Key，就用下面的「复制问题」。</p>' +
        '<label for="ai-key">API Key <input type="password" id="ai-key" autocomplete="off" placeholder="sk-ant-…" value="' + KY.esc(apiKey()) + '"></label>' +
        '<label for="ai-remember"><input type="checkbox" id="ai-remember"' + (state.cfg.key ? ' checked' : '') + '> 记住在这个浏览器里（公用电脑不要勾选）</label>' +
        '<label for="ai-model">模型 <select id="ai-model">' + MODELS.map(function (m) { return '<option value="' + m[0] + '"' + (state.cfg.model === m[0] ? ' selected' : '') + '>' + m[1] + '</option>'; }).join('') + '</select></label>' +
        '<p class="note">API 用量按 Anthropic 的价格计费。Key 只保存在你自己的浏览器里。</p>';
    }
    h += '<button type="button" class="btn btn-small" data-ai-copy>复制问题，粘贴到任意 AI</button> <a class="btn btn-small btn-quiet" href="https://claude.ai/new" target="_blank" rel="noopener">打开 claude.ai</a>';
    el.settings.innerHTML = h;
  }

  /* ── 极简 Markdown（保护公式） ── */
  function md(src) {
    var maths = [];
    var s = String(src).replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, function (m) { maths.push(m); return '\u0000' + (maths.length - 1) + '\u0000'; });
    s = KY.esc(s);
    var lines = s.split('\n');
    var out = [];
    var list = null;
    function closeList() { if (list) { out.push('</' + list + '>'); list = null; } }
    lines.forEach(function (line) {
      var m;
      if ((m = /^\s*[-*]\s+(.*)$/.exec(line))) { if (list !== 'ul') { closeList(); out.push('<ul>'); list = 'ul'; } out.push('<li>' + inline(m[1]) + '</li>'); return; }
      if ((m = /^\s*\d+[.)、]\s+(.*)$/.exec(line))) { if (list !== 'ol') { closeList(); out.push('<ol>'); list = 'ol'; } out.push('<li>' + inline(m[1]) + '</li>'); return; }
      closeList();
      if ((m = /^#{1,4}\s+(.*)$/.exec(line))) { out.push('<p><b>' + inline(m[1]) + '</b></p>'); return; }
      if (!line.trim()) { out.push(''); return; }
      out.push('<p>' + inline(line) + '</p>');
    });
    closeList();
    var html = out.join('\n');
    return html.replace(/\u0000(\d+)\u0000/g, function (_, i) { return maths[+i].replace(/&/g, '&amp;').replace(/</g, '&lt;'); });
  }
  function inline(s) {
    return s.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  }

  /* ── 发送 ── */
  function promptTurns(question) {
    var t = thread();
    var head = RULES + (state.ctx.text ? '\n\n下面是学生正在看的内容：\n' + state.ctx.text : '');
    var turns = [{ role: 'user', content: head }];
    var hist = t.slice(-12);
    hist.forEach(function (m) { turns.push({ role: m.role, content: m.content }); });
    turns.push({ role: 'user', content: question });
    return turns;
  }
  function copyText(question) {
    var turns = promptTurns(question || '（请在这里写下你的问题）');
    return turns.map(function (m) { return (m.role === 'user' ? '' : '【AI 之前的回答】\n') + m.content; }).join('\n\n');
  }

  function send(question) {
    question = (question || '').trim();
    if (!question || state.busy) return;
    if (state.backend === 'copy' || state.backend === 'detecting') {
      KY.copy(copyText(question)).then(function (ok) {
        KY.toast(ok ? '已复制。打开任意 AI（如 claude.ai），粘贴后发送即可。' : '复制失败，请手动选中输入框里的内容复制。');
      });
      return;
    }
    var t = thread();
    var turns = promptTurns(question);
    t.push({ role: 'user', content: question });
    el.input.value = '';
    renderLog();
    var bubble = document.createElement('div');
    bubble.className = 'ai-msg bot streaming';
    bubble.innerHTML = '<div class="ai-text">思考中…</div>';
    el.log.appendChild(bubble);
    el.log.scrollTop = el.log.scrollHeight;
    setBusy(true);
    var textEl = bubble.firstChild;
    var shown = '';
    var onText = function (full) { shown = full; textEl.textContent = full; el.log.scrollTop = el.log.scrollHeight; };
    var finish = function (text, note) {
      setBusy(false);
      bubble.classList.remove('streaming');
      if (text) {
        t.push({ role: 'assistant', content: text });
        textEl.innerHTML = md(text) + (note ? '<p class="ai-note">' + KY.esc(note) + '</p>' : '');
        KY.typeset(bubble);
      } else {
        bubble.remove();
        t.pop();
        el.input.value = question;
        if (note) KY.toast(note);
      }
      el.log.scrollTop = el.log.scrollHeight;
    };
    if (state.backend === 'claude') askClaude(turns, onText, finish, function () { return shown; });
    else askApi(turns, onText, finish, function () { return shown; });
  }

  var SAMPLE_ERR = {
    not_granted: '你没有允许这个页面使用 Claude。可以改用「复制问题」发给 AI。',
    sampling_disabled: '你的账号或组织没有开放这个功能。可以改用「复制问题」。',
    not_declared: '这个页面没有开启 AI 功能。',
    capability_disabled: '当前环境不能使用 AI。可以改用「复制问题」。',
    rate_limited: '提问太频繁或额度用完了，过一会儿再试。',
    session_expired: '登录已过期，请重新登录 Claude 后再试。',
    refused: 'Claude 拒绝回答这个问题，换个问法试试。',
    empty_completion: '这次没有得到回答，换个问法或把问题拆小一点。',
    prompt_too_large: '内容太长了，请把问题拆小一点。',
  };
  function askClaude(turns, onText, finish, partial) {
    var ctl = new AbortController();
    state.abort = function () { ctl.abort(); };
    state.sample(turns, { signal: ctl.signal, cache: false, modelTier: state.cfg.tier || 'default', onText: function (u) { onText(u.text); } })
      .then(function (r) { finish(r.text, r.truncated ? '回答被截断了，可以让它"接着说"。' : ''); })
      .catch(function (e) {
        if (e && e.code === 'cancelled') { finish(e.text || partial(), '已停止'); return; }
        if (e && (e.code === 'not_granted' || e.code === 'sampling_disabled' || e.code === 'not_declared' || e.code === 'capability_disabled' || e.code === 'capability_removed')) {
          state.backend = 'copy';
          renderSettings();
        }
        finish(e && e.code === 'refused' ? '' : (e && e.text) || '', (e && SAMPLE_ERR[e.code]) || '连接出了问题，稍后再试。');
      });
  }

  function loadSdk() {
    if (state.sdk) return Promise.resolve(state.sdk);
    return import(new URL(SDK_URL, document.baseURI).href).then(function (m) { state.sdk = m.default; return state.sdk; });
  }
  function askApi(turns, onText, finish, partial) {
    var key = apiKey();
    if (!key) { finish('', '请先在下面的「连接设置」里填写 API Key。'); $('ai-settings').open = true; return; }
    loadSdk().catch(function () {
      throw { sdkLoad: true };
    }).then(function (Anthropic) {
      var client = new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true });
      var stream = client.beta.messages.stream({
        model: state.cfg.model || MODELS[0][0],
        max_tokens: 16000,
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        thinking: { type: 'adaptive' },
        output_config: { effort: 'medium' },
        system: RULES,
        // API 版把规则放进 system，第一条 user 只放上下文
        messages: [{ role: 'user', content: state.ctx.text ? '下面是我正在看的内容：\n' + state.ctx.text : '（没有附带题目）' }]
          .concat(turns.slice(1).map(function (m) { return { role: m.role, content: m.content }; }))
          .reduce(mergeSameRole, []),
      });
      state.abort = function () { stream.abort(); };
      var acc = '';
      stream.on('text', function (d) { acc += d; onText(acc); });
      return stream.finalMessage().then(function (msg) {
        if (msg.stop_reason === 'refusal') { finish(acc, '模型拒绝继续回答这个问题，换个问法试试。'); return; }
        finish(acc, msg.stop_reason === 'max_tokens' ? '回答达到长度上限被截断了。' : '');
      });
    }).catch(function (e) {
      var name = e && e.constructor && e.constructor.name;
      var status = e && e.status;
      var note = '请求失败：' + ((e && e.message) || '未知错误');
      if (e && e.sdkLoad) note = location.protocol === 'file:'
        ? '直接双击打开的本地文件不能加载 AI 模块。请用 GitHub Pages 或本地服务器（如 npx http-server）打开，或改用「复制问题」。'
        : 'AI 模块加载失败，请检查网络，或改用「复制问题」。';
      else if (name === 'APIUserAbortError' || (e && e.name === 'AbortError')) note = '已停止';
      else if (status === 401) note = 'API Key 无效，请检查后重新填写。';
      else if (status === 429) note = '请求太频繁或额度不足，过一会儿再试。';
      else if (status === 403) note = '这个 Key 没有权限使用所选模型。';
      else if (!status && /Failed to fetch|NetworkError|load/i.test(note)) note = '连不上 Anthropic 接口。如果你是在 Claude 的页面预览里打开的，请改用「复制问题」。';
      finish(partial(), note);
    });
  }
  function mergeSameRole(acc, m) {
    var last = acc[acc.length - 1];
    if (last && last.role === m.role) last.content += '\n\n' + m.content; else acc.push({ role: m.role, content: m.content });
    return acc;
  }
  function setBusy(b) {
    state.busy = b;
    el.send.hidden = b;
    el.stop.hidden = !b;
    if (!b) state.abort = null;
  }

  /* ── 事件 ── */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t.closest('[data-ai-open]')) { open(contextFromRoute()); return; }
    if (t.closest('#ai-close')) { close(); return; }
    if (t.closest('#ai-stop')) { if (state.abort) state.abort(); return; }
    if (t.closest('[data-ai-clear]')) { state.ctx = buildCtx(null); renderCtx(); renderLog(); return; }
    var q = t.closest('[data-quick]');
    if (q) {
      var item = QUICK[+q.dataset.quick];
      if (/：$|\n$/.test(item[1])) { el.input.value = item[1]; el.input.focus(); el.input.setSelectionRange(el.input.value.length, el.input.value.length); }
      else send(item[1]);
      return;
    }
    if (t.closest('[data-ai-copy]')) {
      KY.copy(copyText(el.input.value)).then(function (ok) { KY.toast(ok ? '已复制。打开任意 AI（如 claude.ai），粘贴后发送即可。' : '复制失败，请稍后再试。'); });
    }
  });
  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'ai-form') return;
    e.preventDefault();
    send(el.input.value);
  });
  document.addEventListener('keydown', function (e) {
    if (e.target.id === 'ai-input' && e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(el.input.value); }
    if (e.key === 'Escape' && el.panel && !el.panel.hidden) close();
  });
  document.addEventListener('change', function (e) {
    var id = e.target.id;
    if (id === 'ai-key' || id === 'ai-remember') {
      var key = $('ai-key').value.trim();
      var remember = $('ai-remember').checked;
      state.sessionKey = key;
      state.cfg.key = remember ? key : '';
      saveCfg();
      if (state.backend !== 'claude') { state.backend = key ? 'api' : 'copy'; renderSettings(); }
    } else if (id === 'ai-model') { state.cfg.model = e.target.value; saveCfg(); }
    else if (id === 'ai-tier') { state.cfg.tier = e.target.value; saveCfg(); }
  });

  KY.ai = { open: open, close: close, detect: detect, init: function () { initDom(); detect(); renderSettings(); } };
})();
