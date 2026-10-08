#!/usr/bin/env node
// 构建：data/src → 站点数据
//   data/meta.js            考点体系、题目索引（题面/选项/答案）、讲解目录、统计、考点分析
//   data/sol/<year>.js      每年的详细解析（按需加载）
//   data/lessons/<id>.js    每篇讲解（按需加载）
//   img/<file>              题目配图
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'data', 'src');
const OUT = path.join(ROOT, 'data');
const PAPERS = '/home/user/tsekaluk/kaoyan-math1-papers';

const MATH = /\$\$[\s\S]*?\$\$|\$[^$]*\$/g;
// 公式里的 "<" 会被浏览器当成标签开头，统一转义
const esc = (s) => (typeof s === 'string' ? s.replace(MATH, (m) => m.replace(/</g, '&lt;')) : s);
function escDeep(v) {
  if (typeof v === 'string') return esc(v);
  if (Array.isArray(v)) return v.map(escDeep);
  if (v && typeof v === 'object') { const o = {}; for (const k of Object.keys(v)) o[k] = escDeep(v[k]); return o; }
  return v;
}
const run = (file, api) => vm.runInNewContext(fs.readFileSync(file, 'utf8'), Object.assign({ console }, api), { filename: file });

/* ── 读取源数据 ── */
let TAX = null;
run(path.join(SRC, 'taxonomy.js'), { registerTaxonomy: (t) => { TAX = t; } });
const chOrder = Object.fromEntries(TAX.chapters.map((c, i) => [c.id, i]));
const kpById = Object.fromEntries(TAX.kps.map((k) => [k.id, k]));

const problems = [];
const yearFiles = fs.readdirSync(path.join(SRC, 'years')).filter((f) => /^\d{4}\.js$/.test(f)).sort();
for (const f of yearFiles) {
  run(path.join(SRC, 'years', f), { registerYear: (y, fn) => { fn(String.raw).forEach((p) => problems.push(escDeep(p))); } });
}
const lessons = {};
for (const f of fs.readdirSync(path.join(SRC, 'lessons')).filter((x) => x.endsWith('.js')).sort()) {
  run(path.join(SRC, 'lessons', f), { registerLesson: (fn) => { const l = typeof fn === 'function' ? fn(String.raw) : fn; lessons[l.id] = escDeep(l); } });
}
let analysis = null;
if (fs.existsSync(path.join(SRC, 'analysis.js'))) run(path.join(SRC, 'analysis.js'), { registerAnalysis: (fn) => { analysis = escDeep(typeof fn === 'function' ? fn(String.raw) : fn); } });

/* ── 配图 ── */
fs.mkdirSync(path.join(ROOT, 'img'), { recursive: true });
const imgName = (file) => path.basename(file);
for (const p of problems) {
  if (p.figure && p.figure.file) {
    const src = path.join(PAPERS, p.figure.file);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(ROOT, 'img', imgName(p.figure.file)));
  }
}

/* ── 排序：按年份、题号 ── */
const numKey = (id) => id.split('-').slice(1).map((x) => (/^\d+$/.test(x) ? x.padStart(3, '0') : x)).join('-');
problems.sort((a, b) => a.year - b.year || numKey(a.id).localeCompare(numKey(b.id)));

/* ── 统计 ── */
const years = [...new Set(problems.map((p) => p.year))].sort((a, b) => a - b);
const lastYear = years[years.length - 1];
const scoreOf = (p) => (typeof p.score === 'number' ? p.score : 0);
const stats = { years, lastYear, total: problems.length, byChapter: {}, byKp: {}, byType: {}, difficulty: [0, 0, 0, 0, 0], methods: [], yearChapter: {}, yearCount: {} };
for (const c of TAX.chapters) stats.byChapter[c.id] = { count: 0, score: 0, years: {} };
for (const k of TAX.kps) stats.byKp[k.id] = { count: 0, primary: 0, score: 0, years: {}, types: { 选择: 0, 填空: 0, 解答: 0 }, ids: [] };
const methodCount = {};
for (const p of problems) {
  const primary = p.kp[0];
  const ch = kpById[primary].ch;
  const C = stats.byChapter[ch];
  C.count++; C.score += scoreOf(p); C.years[p.year] = (C.years[p.year] || 0) + 1;
  stats.yearChapter[p.year] = stats.yearChapter[p.year] || {};
  stats.yearChapter[p.year][ch] = (stats.yearChapter[p.year][ch] || 0) + scoreOf(p);
  stats.yearCount[p.year] = (stats.yearCount[p.year] || 0) + 1;
  stats.byType[p.type] = (stats.byType[p.type] || 0) + 1;
  stats.difficulty[p.difficulty - 1]++;
  p.kp.forEach((k, i) => {
    const K = stats.byKp[k];
    K.count++;
    if (i === 0) { K.primary++; K.score += scoreOf(p); }
    K.years[p.year] = (K.years[p.year] || 0) + 1;
    K.types[p.type]++;
    K.ids.push(p.id);
  });
  (p.methods || []).forEach((m) => { methodCount[m] = (methodCount[m] || 0) + 1; });
}
stats.methods = Object.entries(methodCount).sort((a, b) => b[1] - a[1]).slice(0, 40);
// 考频指数：每次出现按年份衰减加权（半衰期 10 年），解答题权重 2，作为辅助考点出现时减半
const HALF = 10;
for (const k of TAX.kps) {
  const K = stats.byKp[k.id];
  const ys = Object.keys(K.years).map(Number).sort((a, b) => a - b);
  K.yearsList = ys;
  K.last = ys.length ? ys[ys.length - 1] : null;
  K.yearsCovered = ys.length;
  K.recent10 = ys.filter((y) => y > lastYear - 10).reduce((s, y) => s + K.years[y], 0);
  K.gap = K.last ? lastYear - K.last : null;
  let w = 0;
  for (const id of K.ids) {
    const p = problems.find((x) => x.id === id);
    const role = p.kp[0] === k.id ? 1 : 0.5; // 主考点计 1，辅助考点计 0.5
    w += Math.pow(0.5, (lastYear - p.year) / HALF) * (p.type === '解答' ? 2 : 1) * role;
  }
  K.index = Math.round(w * 10) / 10;
}

/* ── 输出 ── */
const js = (name, value) => `${name}(${JSON.stringify(value)});\n`;
fs.mkdirSync(path.join(OUT, 'sol'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'lessons'), { recursive: true });
for (const f of fs.readdirSync(path.join(OUT, 'sol'))) fs.unlinkSync(path.join(OUT, 'sol', f));
for (const f of fs.readdirSync(path.join(OUT, 'lessons'))) fs.unlinkSync(path.join(OUT, 'lessons', f));

const index = problems.map((p) => ({
  id: p.id, year: p.year, no: p.no, type: p.type, score: p.score, kp: p.kp, methods: p.methods, difficulty: p.difficulty,
  stem: p.stem, options: p.options || null, answer: p.answer,
  figure: p.figure ? { src: 'img/' + imgName(p.figure.file), desc: p.figure.desc } : null,
  flags: p.flags && p.flags.length ? p.flags : undefined,
}));
for (const y of years) {
  const sol = {};
  problems.filter((p) => p.year === y).forEach((p) => {
    sol[p.id] = { analysis: p.analysis, solution: p.solution, pitfalls: p.pitfalls, summary: p.summary, alt: p.alt || null, verify: p.verify };
  });
  fs.writeFileSync(path.join(OUT, 'sol', `${y}.js`), js('KY_addSolutions', { year: y, sol }));
}
const lessonIndex = {};
for (const id of Object.keys(lessons)) {
  const l = lessons[id];
  lessonIndex[id] = { title: l.title, summary: l.summary, prereq: l.prereq || [], sections: l.sections.map((s) => ({ kind: s.kind, title: s.title })) };
  fs.writeFileSync(path.join(OUT, 'lessons', `${id}.js`), js('KY_addLesson', l));
}
const meta = {
  built: new Date().toISOString().slice(0, 10),
  taxonomy: TAX,
  problems: index,
  lessons: lessonIndex,
  stats,
  analysis,
};
fs.writeFileSync(path.join(OUT, 'meta.js'), js('KY_setMeta', meta));

const kb = (f) => Math.round(fs.statSync(f).size / 1024);
console.log(`题目 ${problems.length} 道（${years[0]}–${lastYear}，共 ${years.length} 年）；讲解 ${Object.keys(lessons).length} 篇`);
console.log(`meta.js ${kb(path.join(OUT, 'meta.js'))} KB；解析 ${years.reduce((s, y) => s + kb(path.join(OUT, 'sol', `${y}.js`)), 0)} KB；讲解 ${Object.keys(lessons).reduce((s, id) => s + kb(path.join(OUT, 'lessons', `${id}.js`)), 0)} KB`);
const missing = TAX.kps.filter((k) => !lessons[k.id]).map((k) => k.id);
if (missing.length) console.log(`尚缺讲解：${missing.join('、')}`);
