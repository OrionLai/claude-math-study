#!/usr/bin/env node
// 为"考点分析与预测"准备输入：在 tools/build.js 之后运行，输出 JSON（各考点逐年次数、题型、分值、代表题面）。
// 用法：node tools/analysis-input.js [输出路径] [--compact]
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const argv = process.argv.slice(2);
const compact = argv.includes('--compact'); // 只列题号，不带题面摘要（体积小很多）
const out = argv.filter((a) => !a.startsWith('--'))[0] || '/tmp/kywork/analysis-input.json';
let M = null;
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'data', 'meta.js'), 'utf8'), { KY_setMeta: (m) => { M = m; } });
const S = M.stats;
const plain = (h) => String(h || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const kps = M.taxonomy.kps.map((k) => {
  const K = S.byKp[k.id];
  const probs = M.problems.filter((p) => p.kp.includes(k.id)).sort((a, b) => b.year - a.year);
  return {
    id: k.id, chapter: k.ch, title: k.title, scope: k.scope,
    count: K.count, asPrimary: K.primary, scoreAsPrimary: K.score, yearsCovered: K.yearsCovered,
    recent10: K.recent10, last: K.last, gapYears: K.gap, frequencyIndex: K.index, byType: K.types,
    byYear: K.yearsList.map((y) => [y, K.years[y]]),
    problems: compact
      ? probs.map((p) => `${p.id}|${p.type}|${p.score == null ? '?' : p.score}`)
      : probs.map((p) => ({ id: p.id, year: p.year, no: p.no, type: p.type, score: p.score, difficulty: p.difficulty, methods: p.methods, stem: plain(p.stem).slice(0, 220) })),
  };
});
const data = {
  note: 'frequencyIndex = 每次出现按年份衰减加权求和（半衰期 10 年），解答题权重 2，选择/填空权重 1，作为辅助考点（非 kp 第一个）出现时再乘 0.5；count 含辅助考点出现次数，asPrimary 只算主考点；recent10 = 最近 10 年出现次数；gapYears = 距最近一次出现的年数',
  years: S.years, lastYear: S.lastYear, totalProblems: M.problems.length,
  byChapter: S.byChapter, yearChapterScore: S.yearChapter, byType: S.byType, difficulty: S.difficulty, topMethods: S.methods,
  kps,
};
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, compact ? JSON.stringify(data) : JSON.stringify(data, null, 1));
console.log(`写入 ${out}（${Math.round(fs.statSync(out).size / 1024)} KB）`);
