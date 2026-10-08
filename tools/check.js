#!/usr/bin/env node
// 数据校验器：node tools/check.js year 2008 | lesson lim.funcdef | years | lessons | all
// 检查结构、考点标签、HTML 标签配对，并用 MathJax（与网页相同的 TeX 包）实际解析每个公式。
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'data', 'src');
const PAPERS = '/home/user/tsekaluk/kaoyan-math1-papers';

/* ── 考点体系 ── */
let TAX = null;
vm.runInNewContext(fs.readFileSync(path.join(SRC, 'taxonomy.js'), 'utf8'), { registerTaxonomy: (t) => { TAX = t; } });
const KP = new Map(TAX.kps.map((k) => [k.id, k]));
const CH = new Set(TAX.chapters.map((c) => c.id));

/* ── MathJax TeX 解析（只用网页端 tex-svg 组件自带的包，不允许依赖自动加载的扩展） ── */
require('mathjax-full/js/util/entities/all.js');
const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { STATE } = require('mathjax-full/js/core/MathItem.js');
require('mathjax-full/js/input/tex/base/BaseConfiguration.js');
require('mathjax-full/js/input/tex/ams/AmsConfiguration.js');
require('mathjax-full/js/input/tex/newcommand/NewcommandConfiguration.js');
require('mathjax-full/js/input/tex/configmacros/ConfigMacrosConfiguration.js');
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
let texError = null;
const tex = new TeX({
  packages: ['base', 'ams', 'newcommand', 'configmacros'],
  formatError: (jax, err) => { texError = err.message; return jax.formatError(err); },
});
const mjDoc = mathjax.document('', { InputJax: tex });
function texProblem(src, display) {
  texError = null;
  try {
    mjDoc.convert(src, { display, end: STATE.CONVERT });
  } catch (e) {
    return e.message || String(e);
  }
  return texError;
}

/* ── 文本检查 ── */
const MATH = /\$\$[\s\S]*?\$\$|\$[^$]*\$/g;
const VOID = new Set(['br', 'hr', 'img', 'wbr']);
const ALLOWED = new Set(['p', 'br', 'b', 'strong', 'i', 'em', 'u', 'ul', 'ol', 'li', 'span', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'sup', 'sub', 'code', 'small', 'blockquote', 'hr', 'mark', 'figure', 'figcaption', 'img',
  'svg', 'g', 'path', 'line', 'circle', 'rect', 'text', 'polyline', 'polygon', 'ellipse', 'defs', 'marker', 'tspan', 'title']);

// 有效字数：正文字符 + 公式长度的 1/4（公式也算内容，但不能全靠堆公式）
function textLen(s) {
  let mathLen = 0;
  const text = s.replace(MATH, (m) => { mathLen += m.length; return ''; }).replace(/<[^>]+>/g, '');
  return text.length + Math.round(mathLen / 4);
}
function checkText(label, s, errs, opts) {
  opts = opts || {};
  if (s == null) { if (!opts.optional) errs.push(`${label}: 缺失`); return; }
  if (typeof s !== 'string') { errs.push(`${label}: 应为字符串`); return; }
  if (!opts.optional && !s.trim()) { errs.push(`${label}: 为空`); return; }
  if (opts.min && textLen(s) < opts.min) {
    errs.push(`${label}: 内容过短（少于 ${opts.min} 字），需要更详细`);
  }
  // 公式
  const maths = s.match(MATH) || [];
  for (const m of maths) {
    const display = m.startsWith('$$');
    const body = display ? m.slice(2, -2) : m.slice(1, -1);
    if (!body.trim()) { errs.push(`${label}: 空公式 ${m}`); continue; }
    const p = texProblem(body, display);
    if (p) errs.push(`${label}: 公式无法解析「${body.slice(0, 80)}」→ ${p}`);
  }
  const rest = s.replace(MATH, ' ');
  if (rest.includes('$')) errs.push(`${label}: 有落单的 $（公式定界符不成对）`);
  // HTML 标签
  const stack = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^<>]*?(\/?)>/g;
  let m;
  let last = 0;
  while ((m = re.exec(rest))) {
    const between = rest.slice(last, m.index);
    if (/<(?![a-zA-Z/])/.test(between) || /<[a-zA-Z/]/.test(between)) errs.push(`${label}: 正文中有裸露的 "<"（请写成 &lt; 或放进公式）`);
    last = re.lastIndex;
    const [, close, name, selfClose] = m;
    const tag = name.toLowerCase();
    if (!ALLOWED.has(tag)) { errs.push(`${label}: 不允许的标签 <${tag}>`); continue; }
    if (VOID.has(tag) || selfClose) continue;
    if (!close) stack.push(tag);
    else {
      const top = stack.pop();
      if (top !== tag) { errs.push(`${label}: 标签不配对（期望 </${top}>，遇到 </${tag}>）`); break; }
    }
  }
  if (/<(?![a-zA-Z/])/.test(rest.slice(last))) errs.push(`${label}: 正文中有裸露的 "<"（请写成 &lt; 或放进公式）`);
  if (stack.length) errs.push(`${label}: 有未闭合的标签 ${stack.map((t) => '<' + t + '>').join(' ')}`);
}

function loadModule(file, api) {
  const code = fs.readFileSync(file, 'utf8');
  const errs = [];
  if (code.includes('${')) errs.push('源文件里出现了 "${"，String.raw 模板会把它当成插值；请改写（例如在 $ 和 { 之间加空格）');
  try {
    vm.runInNewContext(code, Object.assign({ console }, api), { filename: file });
  } catch (e) {
    errs.push('源文件无法执行：' + e.message);
  }
  return errs;
}

/* ── 真题 ── */
const TYPES = new Set(['选择', '填空', '解答']);
const VERIFY_BY = new Set(['sympy', 'manual', 'proof', 'mixed']);
function checkYear(year) {
  const file = path.join(SRC, 'years', `${year}.js`);
  if (!fs.existsSync(file)) return { errs: [`找不到 ${file}`], n: 0 };
  let got = null;
  const errs = loadModule(file, { registerYear: (y, fn) => { got = { y, list: fn(String.raw) }; } });
  if (!got) { errs.push('文件没有调用 registerYear(year, function (R) { return [...] })'); return { errs, n: 0 }; }
  if (got.y !== year) errs.push(`registerYear 的年份 ${got.y} 与文件名 ${year} 不一致`);
  if (!Array.isArray(got.list) || !got.list.length) { errs.push('题目列表为空'); return { errs, n: 0 }; }
  const ids = new Set();
  got.list.forEach((p, i) => {
    const L = `[${p && p.id || '#' + i}]`;
    if (!p || typeof p !== 'object') { errs.push(`${L} 不是对象`); return; }
    if (!/^\d{4}-[0-9a-z]+(-[0-9a-z]+)*$/.test(p.id || '') || !String(p.id).startsWith(year + '-')) errs.push(`${L} id 格式应为 "${year}-15" 或 "${year}-3-2"`);
    if (ids.has(p.id)) errs.push(`${L} id 重复`);
    ids.add(p.id);
    if (p.year !== year) errs.push(`${L} year 字段应为 ${year}`);
    if (!p.no || typeof p.no !== 'string') errs.push(`${L} no（原卷题号，如 "第15题" 或 "一(3)"）缺失`);
    if (!TYPES.has(p.type)) errs.push(`${L} type 必须是 选择/填空/解答`);
    if (!(p.score === null || (typeof p.score === 'number' && p.score > 0 && p.score <= 20))) errs.push(`${L} score 应为分值数字或 null`);
    checkText(`${L}.stem`, p.stem, errs);
    if (p.type === '选择') {
      if (!Array.isArray(p.options) || p.options.length !== 4) errs.push(`${L} 选择题需要 4 个 options`);
      else p.options.forEach((o, j) => checkText(`${L}.options[${j}]`, o, errs));
      if (!/^[A-D]$/.test(p.answer || '')) errs.push(`${L} 选择题 answer 只写一个字母 A–D`);
    } else {
      if (p.options != null) errs.push(`${L} 非选择题 options 应为 null`);
      checkText(`${L}.answer`, p.answer, errs);
    }
    if (p.figure != null) {
      if (typeof p.figure !== 'object' || !p.figure.file || !p.figure.desc) errs.push(`${L} figure 应为 {file, desc}`);
      else if (!fs.existsSync(path.join(PAPERS, p.figure.file))) errs.push(`${L} figure.file 不存在：${p.figure.file}（相对于真题仓库根目录）`);
      else checkText(`${L}.figure.desc`, p.figure.desc, errs);
    }
    if (!Array.isArray(p.kp) || !p.kp.length) errs.push(`${L} kp 至少一个考点`);
    else p.kp.forEach((k) => { if (!KP.has(k)) errs.push(`${L} 未知考点 "${k}"（见 data/src/taxonomy.js）`); });
    if (!Array.isArray(p.methods) || !p.methods.length) errs.push(`${L} methods 至少列一个方法`);
    if (![1, 2, 3, 4, 5].includes(p.difficulty)) errs.push(`${L} difficulty 取 1–5`);
    const big = p.type === '解答';
    checkText(`${L}.analysis`, p.analysis, errs, { min: big ? 60 : 30 });
    checkText(`${L}.solution`, p.solution, errs, { min: big ? 150 : 50 });
    checkText(`${L}.pitfalls`, p.pitfalls, errs, { min: 20 });
    checkText(`${L}.summary`, p.summary, errs, { min: 20 });
    checkText(`${L}.alt`, p.alt, errs, { optional: true });
    if (!p.verify || !VERIFY_BY.has(p.verify.by) || typeof p.verify.ok !== 'boolean' || typeof p.verify.note !== 'string') errs.push(`${L} verify 应为 {by: sympy|manual|proof|mixed, ok: true/false, note: "…"}`);
    if (!Array.isArray(p.flags)) errs.push(`${L} flags 应为数组（没有就写 []）`);
  });
  return { errs, n: got.list.length, list: got.list };
}

/* ── 讲解 ── */
const KINDS = new Set(['why', 'def', 'thm', 'example', 'pitfall', 'method', 'check', 'text', 'exam']);
function checkLesson(id) {
  const file = path.join(SRC, 'lessons', `${id}.js`);
  if (!fs.existsSync(file)) return { errs: [`找不到 ${file}`] };
  let got = null;
  const errs = loadModule(file, { registerLesson: (fn) => { got = typeof fn === 'function' ? fn(String.raw) : fn; } });
  if (!got) { errs.push('文件没有调用 registerLesson(function (R) { return {...} })'); return { errs }; }
  const L = `[${id}]`;
  if (got.id !== id) errs.push(`${L} id 应为 "${id}"`);
  if (!KP.has(got.id)) errs.push(`${L} id 不在考点体系里`);
  else if (got.ch !== KP.get(got.id).ch) errs.push(`${L} ch 应为 "${KP.get(got.id).ch}"`);
  if (!got.title) errs.push(`${L} 缺 title`);
  checkText(`${L}.summary`, got.summary, errs, { min: 15 });
  if (!Array.isArray(got.prereq)) errs.push(`${L} prereq 应为数组`);
  else got.prereq.forEach((k) => { if (!KP.has(k)) errs.push(`${L} prereq 未知考点 "${k}"`); });
  if (!Array.isArray(got.sections) || got.sections.length < 4) { errs.push(`${L} sections 太少`); return { errs }; }
  let thm = 0; let def = 0; let check = 0; let chars = 0;
  got.sections.forEach((s, i) => {
    const S = `${L}.sections[${i}]${s && s.title ? '「' + s.title + '」' : ''}`;
    if (!s || !KINDS.has(s.kind)) { errs.push(`${S} kind 必须是 ${[...KINDS].join('/')}`); return; }
    if (!s.title) errs.push(`${S} 缺 title`);
    const count = (t) => { if (typeof t === 'string') chars += textLen(t); };
    if (s.kind === 'thm') {
      thm++;
      checkText(`${S}.statement`, s.statement, errs);
      checkText(`${S}.intuition`, s.intuition, errs, { optional: true });
      checkText(`${S}.remark`, s.remark, errs, { optional: true });
      if (s.steps != null) {
        if (!Array.isArray(s.steps) || !s.steps.length) errs.push(`${S} steps 应为非空数组`);
        else s.steps.forEach((st, j) => { checkText(`${S}.steps[${j}].s`, st && st.s, errs); checkText(`${S}.steps[${j}].why`, st && st.why, errs, { optional: true }); count(st && st.s); count(st && st.why); });
      } else if (s.proof != null) checkText(`${S}.proof`, s.proof, errs);
      else if (!s.noProof) errs.push(`${S} 定理需要 steps（分步证明）或 proof；超纲不证的写 noProof: "原因"`);
      [s.statement, s.intuition, s.remark, s.proof].forEach(count);
    } else if (s.kind === 'check') {
      check++;
      if (!Array.isArray(s.items) || !s.items.length) errs.push(`${S} items 应为非空数组`);
      else s.items.forEach((it, j) => {
        checkText(`${S}.items[${j}].q`, it.q, errs);
        if (Array.isArray(it.options)) {
          it.options.forEach((o, k) => checkText(`${S}.items[${j}].options[${k}]`, o, errs));
          if (!Number.isInteger(it.correct) || it.correct < 0 || it.correct >= it.options.length) errs.push(`${S}.items[${j}] correct 应为正确选项的下标`);
          checkText(`${S}.items[${j}].explain`, it.explain, errs);
        } else checkText(`${S}.items[${j}].a`, it.a, errs);
      });
    } else {
      if (s.kind === 'def') def++;
      checkText(`${S}.html`, s.html, errs);
      count(s.html);
    }
  });
  if (!check) errs.push(`${L} 至少要有一个 check（自测）小节`);
  return { errs, chars, thm, def, sections: got.sections.length };
}

/* ── 考点分析与预测 ── */
function checkAnalysis() {
  const file = path.join(SRC, 'analysis.js');
  if (!fs.existsSync(file)) return { errs: [`找不到 ${file}`] };
  let got = null;
  const errs = loadModule(file, { registerAnalysis: (fn) => { got = typeof fn === 'function' ? fn(String.raw) : fn; } });
  if (!got) { errs.push('文件没有调用 registerAnalysis(function (R) { return {...} })'); return { errs }; }
  checkText('summary', got.summary, errs, { min: 300 });
  checkText('method', got.method, errs, { min: 60 });
  if (!Array.isArray(got.predictions) || got.predictions.length < 10) errs.push('predictions 至少 10 条');
  else got.predictions.forEach((p, i) => {
    const L = `predictions[${i}]`;
    if (!KP.has(p.kp)) errs.push(`${L} 未知考点 "${p.kp}"`);
    if (!['极高', '高', '中'].includes(p.level)) errs.push(`${L} level 取 极高/高/中`);
    checkText(`${L}.reason`, p.reason, errs, { min: 60 });
    checkText(`${L}.form`, p.form, errs, { min: 20 });
  });
  return { errs, n: (got.predictions || []).length };
}

/* ── 入口 ── */
function report(name, r) {
  if (r.errs.length) {
    console.log(`✗ ${name}：${r.errs.length} 个问题`);
    r.errs.slice(0, 80).forEach((e) => console.log('  - ' + e));
    if (r.errs.length > 80) console.log(`  …还有 ${r.errs.length - 80} 个`);
    return false;
  }
  console.log(`✓ ${name}` + (r.n != null ? `：${r.n} 题` : '') + (r.chars != null ? `：${r.sections} 节，定义 ${r.def}，定理 ${r.thm}，约 ${r.chars} 字` : ''));
  return true;
}
const [what, arg] = process.argv.slice(2);
let ok = true;
if (what === 'year') ok = report(`${arg} 年`, checkYear(Number(arg)));
else if (what === 'lesson') ok = report(`讲解 ${arg}`, checkLesson(arg));
else if (what === 'years' || what === 'all') {
  fs.readdirSync(path.join(SRC, 'years')).filter((f) => /^\d{4}\.js$/.test(f)).sort().forEach((f) => { ok = report(`${f.slice(0, 4)} 年`, checkYear(Number(f.slice(0, 4)))) && ok; });
}
if (what === 'lessons' || what === 'all') {
  fs.readdirSync(path.join(SRC, 'lessons')).filter((f) => f.endsWith('.js')).sort().forEach((f) => { ok = report(`讲解 ${f.slice(0, -3)}`, checkLesson(f.slice(0, -3))) && ok; });
}
if (what === 'analysis') ok = report('考点分析', checkAnalysis());
if (!what) console.log('用法：node tools/check.js year 2008 | lesson lim.funcdef | years | lessons | analysis | all');
process.exit(ok ? 0 : 1);
