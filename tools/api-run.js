#!/usr/bin/env node
// 用 API 额度补全网站内容（Max / Team 套餐每月附带的 Claude Platform 额度），不消耗 Claude 订阅的 5 小时额度。
//
// 原理：tools/workflows/content.workflow.js 是给 Claude Code 用的工作流，里面每个 agent(prompt) 就是派一个智能体
// 去写或审一篇内容。这个脚本把 agent() 换成在本机运行 `claude --bare -p`：--bare 模式不读登录凭据，只认环境变量
// ANTHROPIC_API_KEY，而官方说明「用已关联 Console 组织的 Key 自己运行 claude -p / Agent SDK」计入 API 额度。
//
// 用法（在仓库根目录、普通终端里运行；不要在 Claude Code、IDE 插件或桌面 App 里跑，那些算作 Claude Code 用量）：
//   export ANTHROPIC_API_KEY=sk-ant-…      （PowerShell：$env:ANTHROPIC_API_KEY="sk-ant-…"）
//   node tools/api-run.js --dry-run         看看会跑哪些任务、预算怎么分，不花钱
//   node tools/api-run.js --limit 1         先跑一项试水，看实际花费
//   node tools/api-run.js --budget 60       本次最多花 60 美元，花到就不再开始新任务（正在跑的做完）
// 选项：
//   --only lessonWrite,lessonReview,yearReview    只跑这些类型
//   --ids mdiff.extreme,lim.compute,2020          只跑这些讲解 / 年份
//   --kind lessonReview --ids a,b                 不看完成度，直接对这些讲解再审一轮（配合 --extra 写本轮重点）
//   --workers 2          同时跑几项（默认 2；新 Console 组织速率限制较低，别开太多）
//   --model …            默认 claude-opus-5-5；claude-sonnet-5-5 约为一半价钱
//   --effort high        思考深度（low/medium/high/xhigh/max），默认不传
//   --task-budget 8      单项任务的美元上限，防止失控（默认 8，用更贵的模型时自动放大）
//   --stop-after 70      跑了这么多分钟后不再开始新任务（正在跑的做完），适合在有时长限制的环境里分批跑
//   --extra 文件         把文件里的额外要求追加到每个任务的提示词末尾（{{id}}、{{year}}、{{tmp}} 会替换成本项的考点、年份、临时目录）
// 环境变量（与选项等价）：KY_MODEL KY_WORKERS KY_BUDGET KY_TASK_BUDGET KY_EFFORT KY_PYTHON KY_PAPERS KY_STOP_AFTER
//   KY_PAPERS：真题源仓库 TsekaLuk/Kaoyan-Math1-Papers 的本地路径。只有真题任务需要，没设就跳过真题任务。
// 产物：data/src/ 下的新内容；tools/.api-run/ 下的台账（runs.jsonl）和每项任务的完整输出（已 gitignore）。
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const cp = require('child_process');
const { listTasks } = require('./remaining.js');

const ROOT = path.resolve(__dirname, '..');
const RUNDIR = path.join(__dirname, '.api-run');
const WORKFLOW = path.join(__dirname, 'workflows', 'content.workflow.js');
const fwd = (p) => p.replace(/\\/g, '/'); // 提示词里统一用正斜杠，Git Bash、PowerShell、Python 都认

/* ── 参数 ── */
const argv = process.argv.slice(2);
const flag = (n) => argv.includes('--' + n);
function opt(n, env, dflt) {
  const i = argv.indexOf('--' + n);
  if (i >= 0 && argv[i + 1] !== undefined && !argv[i + 1].startsWith('--')) return argv[i + 1];
  if (env && process.env[env]) return process.env[env];
  return dflt;
}
const DRY = flag('dry-run');
const MOCK = flag('mock'); // 开发用：不真的调用模型，agent() 立刻返回成功（用来测试流程）
const MODEL = opt('model', 'KY_MODEL', 'claude-opus-5-5');
const EFFORT = opt('effort', 'KY_EFFORT', '');
const WORKERS = Math.max(1, Number(opt('workers', 'KY_WORKERS', 2)) || 2);
const BUDGET = Number(opt('budget', 'KY_BUDGET', 20)); // 默认 20 美元：第一次跑不至于把一个月的额度用光
const LIMIT = Number(opt('limit', null, 0)) || 0;
const ONLY = (opt('only', null, '') || '').split(',').map((s) => s.trim()).filter(Boolean);
const IDS = (opt('ids', null, '') || '').split(',').map((s) => s.trim()).filter(Boolean);
const PAPERS = opt('papers', 'KY_PAPERS', '');
const PYTHON_OPT = opt('python', 'KY_PYTHON', '');
const STOP_AFTER = Number(opt('stop-after', 'KY_STOP_AFTER', 0)) || 0; // 分钟：超过就不再开始新任务（正在跑的照常做完）
const EXTRA_FILE = opt('extra', 'KY_EXTRA', ''); // 追加到每个任务提示词末尾的额外要求（文本文件）
const EXTRA = EXTRA_FILE ? fs.readFileSync(EXTRA_FILE, 'utf8').trim() : '';

// 子进程的环境：去掉从外层 Claude Code 会话继承来的变量（CLAUDECODE、CLAUDE_CODE_ENTRYPOINT 等）和登录令牌。
// 不去掉的话，在 Claude Code / 桌面 App 的终端里运行时，这些调用会被识别成那个会话的 Claude Code 用量，
// API 额度不覆盖 Claude Code，结果就是「Credit balance is too low」。
function childEnv() {
  const env = { ...process.env };
  for (const k of Object.keys(env)) if (/^CLAUDE/i.test(k) || k === 'ANTHROPIC_AUTH_TOKEN') delete env[k];
  env.KY_PAPERS = PAPERS || process.env.KY_PAPERS || '';
  return env;
}

// 模型价格差异（相对 Opus）：用来做估算和放大单项上限
const factor = /haiku/.test(MODEL) ? 0.1 : /sonnet/.test(MODEL) ? 0.5 : /fable|mythos/.test(MODEL) ? 2.5 : 1;
const TASK_BUDGET = Number(opt('task-budget', 'KY_TASK_BUDGET', Math.round(8 * Math.max(1, factor))));
// 每类任务的大致花费（美元，Opus 档；是经验估计，跑过几项后改用实际平均值）
const BASE_EST = { lessonWrite: 1.5, lessonReview: 1, yearWrite: 2, yearReview: 1, analysisWrite: 1.5, analysisReview: 1 }; // 2026-10 实测：Opus 写一篇讲解约 1 美元
const KIND_NAME = { lessonWrite: '讲解撰写', lessonReview: '讲解审校', yearWrite: '真题整理', yearReview: '真题审校', analysisWrite: '考点分析撰写', analysisReview: '考点分析审校' };

const ts = () => new Date().toTimeString().slice(0, 8);
const log = (m) => console.log(`[${ts()}] ${m}`);
const money = (x) => '$' + (Math.round(x * 100) / 100).toFixed(2);
const keyOf = (t) => t.kind + ':' + (t.y || t.id || '');

/* ── 环境检查 ── */
function sh(cmd, opts = {}) {
  try { return cp.execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], ...opts }).trim(); } catch (e) { return null; }
}
function findClaude() {
  if (process.platform !== 'win32') return sh('claude --version') ? { cmd: 'claude', shell: false } : null;
  const out = sh('where claude');
  if (!out) return null;
  const lines = out.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  const exe = lines.find((l) => /\.exe$/i.test(l));
  if (exe) return { cmd: exe, shell: false }; // 原生安装的 claude.exe 可以直接启动
  return { cmd: lines[0], shell: true }; // npm 装的是 claude.cmd，得经由 cmd.exe
}
function findPython() {
  const cands = PYTHON_OPT ? [PYTHON_OPT] : process.platform === 'win32' ? ['python', 'py -3', 'python3'] : ['python3', 'python'];
  for (const c of cands) if (sh(`${c} -c "import sympy; print(sympy.__version__)"`)) return c;
  return null;
}
function ensureTools() {
  if (fs.existsSync(path.join(__dirname, 'node_modules', 'mathjax-full'))) return true;
  log('tools/node_modules 还没装（校验器需要 mathjax-full），先运行 npm install …');
  const r = cp.spawnSync('npm', ['install', '--no-audit', '--no-fund'], { cwd: __dirname, stdio: 'inherit', shell: true });
  return r.status === 0;
}

/* ── 任务清单 ── */
function selectTasks() {
  const r = listTasks();
  // --kind lessonReview --ids a,b：不管完成度清单，直接对这些考点 / 年份再做一遍（例如第二轮审校）
  const KIND = opt('kind', null, '');
  if (KIND) {
    if (!IDS.length) { console.error('--kind 需要和 --ids 一起用'); process.exit(2); }
    const tasks = IDS.map((x) => (KIND.startsWith('year') ? { kind: KIND, y: Number(x) } : { kind: KIND, id: x }));
    return { tasks: LIMIT ? tasks.slice(0, LIMIT) : tasks, remaining: r };
  }
  let tasks = r.tasks.slice();
  if (r.needAnalysis) tasks.unshift({ kind: 'analysisWrite' }, { kind: 'analysisReview' });
  if (ONLY.length) tasks = tasks.filter((t) => ONLY.includes(t.kind));
  if (IDS.length) tasks = tasks.filter((t) => IDS.includes(String(t.y || t.id)));
  const needPapers = tasks.filter((t) => t.kind.startsWith('year'));
  let papersOk = PAPERS && fs.existsSync(PAPERS);
  if (needPapers.length && !papersOk) {
    log(`跳过 ${needPapers.length} 项真题任务：${PAPERS ? '找不到目录 ' + PAPERS : '没有设置 KY_PAPERS（真题源仓库的本地路径）'}`);
    tasks = tasks.filter((t) => !t.kind.startsWith('year'));
  }
  if (LIMIT) tasks = tasks.slice(0, LIMIT);
  return { tasks, remaining: r };
}

/* ── 费用台账 ── */
const avg = {}; // kind -> { n, sum }
function estimate(kind) {
  const a = avg[kind];
  if (a && a.n) return a.sum / a.n;
  return (BASE_EST[kind] || 3) * factor;
}
let spent = 0;
let stopped = false;
let cheapFailures = 0;
const T0 = Date.now();
const inflight = new Map();
const ledger = [];
const skipped = [];
const children = new Set();
let runStamp = '';

function parseTask(opts) {
  // 工作流给每个 agent() 的 label 形如「mdiff.extreme 撰写」「2020 审校」「考点分析 撰写」，phase 标明阶段
  const phase = opts.phase || '';
  const label = opts.label || '';
  const first = label.split(/\s+/)[0];
  let kind;
  if (phase === '真题整理') kind = 'yearWrite';
  else if (phase === '真题审校') kind = 'yearReview';
  else if (phase === '讲解撰写') kind = 'lessonWrite';
  else if (phase === '讲解审校') kind = 'lessonReview';
  else if (phase === '考点分析') kind = /审校/.test(label) ? 'analysisReview' : 'analysisWrite';
  else kind = 'other';
  const t = { kind, label };
  if (kind.startsWith('year')) t.y = Number(first);
  else if (kind.startsWith('lesson')) t.id = first;
  t.key = keyOf(t);
  return t;
}

// 从模型的最后一条消息里取出 JSON（提示词要求最后只输出一个 JSON 对象）
function extractJson(text) {
  if (!text) return null;
  const tries = [text.trim(), (text.match(/\{[\s\S]*\}/) || [''])[0], text.slice(text.lastIndexOf('{'))];
  // 模型常在 JSON 字符串里直接写 LaTeX（\cos、\lambda），这是非法转义：把不合法的反斜杠补成 \\ 再试
  const fix = (s) => s.replace(/\\(?!["\\/bfnrtu])/g, '\\\\');
  for (const s of tries.concat(tries.map(fix))) { try { const o = JSON.parse(s); if (o && typeof o === 'object') return o; } catch (e) { /* 下一种 */ } }
  // 还解析不了（例如字符串里有没转义的引号）：至少认出 "ok": true/false，摘要用原文
  const m = /"ok"\s*:\s*(true|false)/.exec(text);
  if (m) return { ok: m[1] === 'true', summary: text.slice(0, 1200), issues: ['（模型返回的 JSON 格式不规范，以上摘要为原文）'] };
  return null;
}

/* ── 真正调用 claude --bare -p ── */
const CLAUDE = DRY || MOCK ? null : findClaude();
function runClaude(prompt, task) {
  return new Promise((resolve) => {
    const tmp = fwd(path.join(os.tmpdir(), 'kywork'));
    const args = ['--bare', '-p', '--output-format', 'json', '--model', MODEL, '--max-budget-usd', String(TASK_BUDGET),
      '--allowedTools', 'Read,Write,Edit,MultiEdit,Glob,Grep,Bash', '--add-dir', tmp];
    if (PAPERS) args.push('--add-dir', PAPERS);
    if (EFFORT) args.push('--effort', EFFORT);
    const spawnArgs = CLAUDE.shell ? args.map((a) => (/[\s"]/.test(a) ? '"' + a.replace(/"/g, '\\"') + '"' : a)) : args;
    const cmd = CLAUDE.shell && /\s/.test(CLAUDE.cmd) ? '"' + CLAUDE.cmd + '"' : CLAUDE.cmd;
    const child = cp.spawn(cmd, spawnArgs, { cwd: ROOT, shell: CLAUDE.shell, env: childEnv(), stdio: ['pipe', 'pipe', 'pipe'] });
    children.add(child);
    let out = '', err = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { err += d; });
    const t0 = Date.now();
    child.on('close', (code) => {
      children.delete(child);
      const dir = path.join(RUNDIR, runStamp);
      fs.mkdirSync(dir, { recursive: true });
      const base = path.join(dir, task.key.replace(/[:/\\]/g, '_'));
      fs.writeFileSync(base + '.stdout.json', out);
      if (err.trim()) fs.writeFileSync(base + '.stderr.log', err);
      let j = null;
      try { j = JSON.parse(out); } catch (e) { /* 不是 JSON */ }
      const resultText = j ? (typeof j.result === 'string' ? j.result : JSON.stringify(j.result)) : out;
      resolve({
        exit: code, cost: j && typeof j.total_cost_usd === 'number' ? j.total_cost_usd : 0,
        turns: j && j.num_turns, subtype: j && (j.is_error ? j.terminal_reason || j.subtype : j.subtype), session: j && j.session_id,
        isError: !j || j.is_error || code !== 0, resultText, parsed: j ? extractJson(resultText) : null,
        minutes: (Date.now() - t0) / 60000, stderr: err,
      });
    });
    child.on('error', (e) => { children.delete(child); resolve({ exit: -1, cost: 0, isError: true, resultText: String(e), parsed: null, minutes: 0, stderr: String(e) }); });
    child.stdin.on('error', () => {});
    child.stdin.end(prompt, 'utf8');
  });
}
function mockRun(task) {
  return new Promise((resolve) => setTimeout(() => resolve({
    exit: 0, cost: Math.round((0.5 + Math.random() * 2) * factor * 100) / 100, turns: 3, subtype: 'success', session: 'mock',
    isError: false, resultText: '{"ok":true,"count":1,"summary":"（mock）","issues":[]}', parsed: { ok: true, count: 1, summary: '（mock）', issues: [] }, minutes: 0.01, stderr: '',
  }), 300));
}

/* ── 用校验器核实结果；审校通过就记入 status.json ── */
function verify(task) {
  let what = null;
  if (task.kind.startsWith('lesson')) what = ['lesson', task.id];
  else if (task.kind.startsWith('year')) what = ['year', String(task.y)];
  else if (task.kind.startsWith('analysis')) what = ['analysis'];
  if (!what) return { ok: true, text: '' };
  const r = cp.spawnSync(process.execPath, [path.join(__dirname, 'check.js'), ...what], { cwd: ROOT, encoding: 'utf8', env: { ...process.env, KY_PAPERS: PAPERS || process.env.KY_PAPERS || '' } });
  return { ok: r.status === 0, text: (r.stdout || '').trim().split('\n')[0] };
}
function markReviewed(task) {
  const file = path.join(ROOT, 'data', 'src', 'status.json');
  const s = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (task.kind === 'lessonReview' && !s.reviewedLessons.includes(task.id)) s.reviewedLessons.push(task.id);
  if (task.kind === 'yearReview' && !s.reviewedYears.includes(task.y)) { s.reviewedYears.push(task.y); s.reviewedYears.sort((a, b) => a - b); }
  fs.writeFileSync(file, JSON.stringify(s, null, 2) + '\n');
}

/* ── 给工作流用的 agent()：预算闸门 → 调用 → 校验 → 记账 ── */
const RETURN_FORMAT = `
【返回格式】全部做完后，最后一条消息只输出一个 JSON 对象（不要代码块、不要别的文字）：{"ok": 校验是否通过（布尔）, "count": 题数（整数，讲解任务可省略）, "summary": "…", "issues": ["…"]}`;

async function agent(prompt, opts = {}) {
  const task = parseTask(opts);
  if (stopped) { skipped.push(task.key); return null; }
  if (STOP_AFTER && (Date.now() - T0) / 60000 > STOP_AFTER) {
    stopped = true;
    log(`已经跑了 ${Math.round((Date.now() - T0) / 60000)} 分钟，超过 --stop-after ${STOP_AFTER}：不再开始新任务`);
    skipped.push(task.key);
    return null;
  }
  const est = estimate(task.kind);
  const pending = [...inflight.values()].reduce((a, b) => a + b, 0) * 0.5;
  if (spent + est + pending > BUDGET) {
    stopped = true;
    log(`已花 ${money(spent)}，在跑的约还要 ${money(pending)}，${task.key} 预计 ${money(est)}，会超过预算 ${money(BUDGET)}：不再开始新任务`);
    skipped.push(task.key);
    return null;
  }
  inflight.set(task.key, est);
  log(`开始 ${task.key}（${KIND_NAME[task.kind] || task.kind}，预计约 ${money(est)}；已花 ${money(spent)}）`);
  const dir = path.join(RUNDIR, runStamp);
  fs.mkdirSync(dir, { recursive: true });
  const extra = EXTRA.replace(/\{\{id\}\}/g, task.id || '').replace(/\{\{year\}\}/g, task.y || '').replace(/\{\{tmp\}\}/g, fwd(path.join(os.tmpdir(), 'kywork')));
  const full = prompt + (EXTRA ? '\n' + extra + '\n' : '') + RETURN_FORMAT;
  fs.writeFileSync(path.join(dir, task.key.replace(/[:/\\]/g, '_') + '.prompt.txt'), full);
  let res;
  try { res = MOCK ? await mockRun(task) : await runClaude(full, task); } finally { inflight.delete(task.key); }
  spent += res.cost || 0;
  const chk = verify(task);
  const agentOk = !!(res.parsed && res.parsed.ok);
  const done = chk.ok && !res.isError;
  const a = (avg[task.kind] = avg[task.kind] || { n: 0, sum: 0 });
  if (done && res.cost) { a.n++; a.sum += res.cost; } // 只用成功的任务估算后面的花费
  if (done && agentOk && (task.kind === 'lessonReview' || task.kind === 'yearReview')) markReviewed(task);
  // 连续两项几乎没花钱就失败，多半是 Key、网络或环境的问题，别把整个清单都白跑一遍
  if (!done && (res.cost || 0) < 0.05) { if (++cheapFailures >= 2 && !stopped) { stopped = true; log('连续两项几乎没花钱就失败了，多半是 Key、网络或环境的问题，不再开始新任务'); } } else cheapFailures = 0;
  if (!done && /credit balance is too low/i.test(res.resultText || '')) log('  提示：「Credit balance is too low」= 这个 Key 所在的组织没有可用额度，或者这次调用被算成了 Claude Code 用量。到 platform.claude.com 的 Billing 页确认组织里有 API 额度（Max 套餐要先在 claude.ai 账单页 Link organization）。');
  const row = {
    time: new Date().toISOString(), key: task.key, kind: task.kind, model: MODEL, cost: res.cost || 0, minutes: Math.round(res.minutes * 10) / 10,
    turns: res.turns, subtype: res.subtype, session: res.session, checkOk: chk.ok, agentOk, done,
    summary: res.parsed ? res.parsed.summary : (res.resultText || '').slice(0, 300), issues: res.parsed ? res.parsed.issues : [],
  };
  ledger.push(row);
  fs.mkdirSync(RUNDIR, { recursive: true });
  fs.appendFileSync(path.join(RUNDIR, 'runs.jsonl'), JSON.stringify(row) + '\n');
  const why = !chk.ok && chk.text ? chk.text : (res.resultText || '').split('\n').find(Boolean) || res.stderr.split('\n').find(Boolean) || '';
  const status = done ? (agentOk ? '✓ 完成' : '✓ 校验通过（但模型自报 ok=false，看一下 issues）') : `✗ 失败（${res.subtype || 'exit ' + res.exit}；${why.slice(0, 160)}）`;
  log(`${task.key} ${status}，花费 ${money(res.cost || 0)}，${row.minutes} 分钟，累计 ${money(spent)}`);
  if (row.issues && row.issues.length) row.issues.slice(0, 5).forEach((s) => log(`  · ${s}`));
  return res.parsed || { ok: done, summary: (res.resultText || '').slice(0, 500), issues: res.parsed ? [] : ['未能解析模型返回的 JSON'] };
}

/* ── 把 Claude Code 的工作流文件当成普通函数加载 ── */
function loadWorkflow() {
  let src = fs.readFileSync(WORKFLOW, 'utf8').replace(/^export\s+const\s+meta\b/m, 'const meta');
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  return new AsyncFunction('args', 'agent', 'log', src);
}

/* ── 主流程 ── */
(async () => {
  const { tasks, remaining } = selectTasks();
  const nr = remaining.tasks.length + (remaining.needAnalysis ? 2 : 0);
  console.log(`剩余 ${nr} 项内容任务；本次选中 ${tasks.length} 项。模型 ${MODEL}，并行 ${WORKERS}，总预算 ${money(BUDGET)}，单项上限 ${money(TASK_BUDGET)}${EFFORT ? '，effort ' + EFFORT : ''}`);
  if (!tasks.length) { console.log('没有要跑的任务。'); return; }

  if (DRY) {
    let cum = 0;
    console.log('\n预计（经验估计，实际以跑完后的台账为准）：');
    for (const t of tasks) {
      const e = estimate(t.kind);
      cum += e;
      console.log(`  ${cum <= BUDGET ? '○' : '·'} ${keyOf(t).padEnd(26)} ${(KIND_NAME[t.kind] || t.kind).padEnd(8)} 约 ${money(e)}（累计 ${money(cum)}）`);
    }
    const fit = tasks.filter((t, i) => tasks.slice(0, i + 1).reduce((s, x) => s + estimate(x.kind), 0) <= BUDGET).length;
    console.log(`\n○ 的 ${fit} 项大约能装进 ${money(BUDGET)} 的预算；加 --budget 可以调整。`);
    console.log(`claude：${findClaude() ? findClaude().cmd + '（' + (sh('claude --version') || '?') + '）' : '未找到！'}；Python+sympy：${findPython() || '未找到！'}；真题仓库：${PAPERS && fs.existsSync(PAPERS) ? PAPERS : '未设置（真题任务会跳过）'}`);
    console.log(`API Key：${process.env.ANTHROPIC_API_KEY ? '已设置' : '未设置（运行前要 export ANTHROPIC_API_KEY）'}`);
    return;
  }

  // 运行前检查
  if (!MOCK) {
    if (!process.env.ANTHROPIC_API_KEY) { console.error('没有设置 ANTHROPIC_API_KEY。到 platform.claude.com 用已关联套餐额度的组织创建 Key，然后 export ANTHROPIC_API_KEY=sk-ant-…'); process.exit(2); }
    if (!CLAUDE) { console.error('找不到 claude 命令（Claude Code CLI）。安装见 https://code.claude.com/docs/en/getting-started'); process.exit(2); }
  }
  if (!ensureTools()) { console.error('tools/ 依赖安装失败，请手动 cd tools && npm install'); process.exit(2); }
  const python = MOCK ? 'python3' : findPython();
  if (!python) { console.error('找不到装有 sympy 的 Python（内容要用 sympy 验算）。安装：python -m pip install sympy，或用 --python 指定命令'); process.exit(2); }
  const tmp = path.join(os.tmpdir(), 'kywork');
  fs.mkdirSync(tmp, { recursive: true });
  runStamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15);
  fs.mkdirSync(path.join(RUNDIR, runStamp), { recursive: true });

  const stop = () => { log('收到中断，结束正在运行的任务…'); for (const c of children) { try { c.kill(); } catch (e) { /* 忽略 */ } } process.exit(130); };
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);

  const seq = tasks.filter((t) => t.kind.startsWith('analysis'));
  const par = tasks.filter((t) => !t.kind.startsWith('analysis'));
  const args = { seq, par, workers: Math.min(WORKERS, Math.max(1, par.length + (seq.length ? 1 : 0))), repo: fwd(ROOT), papers: PAPERS ? fwd(PAPERS) : undefined, tmp: fwd(tmp), python };
  const run = loadWorkflow();
  const t0 = Date.now();
  try {
    await run(args, agent, log);
  } catch (e) {
    log('工作流出错：' + (e && e.stack || e));
  }

  // 收尾
  const done = ledger.filter((r) => r.done);
  const failed = ledger.filter((r) => !r.done);
  console.log('\n══ 本次结果 ══');
  for (const r of ledger) console.log(`  ${r.done ? '✓' : '✗'} ${r.key.padEnd(26)} ${money(r.cost).padStart(7)}  ${String(r.minutes).padStart(5)} 分钟`);
  if (skipped.length) console.log(`  未开始（下次接着跑）：${skipped.join('、')}`);
  console.log(`完成 ${done.length} 项，失败 ${failed.length} 项，共花费 ${money(spent)}，用时 ${Math.round((Date.now() - t0) / 60000)} 分钟。`);
  for (const k of Object.keys(avg)) if (avg[k].n) console.log(`  ${KIND_NAME[k] || k} 平均 ${money(avg[k].sum / avg[k].n)}/项（${avg[k].n} 项）`);
  if (failed.length) console.log(`失败项的完整输出在 tools/.api-run/${runStamp}/，可以直接重跑：node tools/api-run.js --ids ${failed.map((r) => r.key.split(':')[1]).join(',')}`);
  if (done.length) {
    log('重新构建站点数据 …');
    const b = cp.spawnSync(process.execPath, [path.join(__dirname, 'build.js')], { cwd: ROOT, stdio: 'inherit', env: { ...process.env, KY_PAPERS: PAPERS || process.env.KY_PAPERS || '' } });
    if (b.status !== 0) console.log('构建失败，请运行 node tools/build.js 查看原因。');
    const left = listTasks();
    console.log(`\n还剩 ${left.tasks.length} 项（node tools/remaining.js 查看）。确认无误后提交：\n  git add -A data && git commit -m "内容补全：${done.map((r) => r.key).join('、')}"`);
  }
  process.exit(failed.length ? 1 : 0);
})();
