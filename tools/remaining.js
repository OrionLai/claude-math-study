#!/usr/bin/env node
// 列出还没完成的内容，并按优先级生成工作流参数。
// 用法：node tools/remaining.js            查看剩余清单
//       node tools/remaining.js --args 3   生成 3 组工作流参数（JSON），交给 tools/workflows/content.workflow.js
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'data', 'src');
let TAX;
vm.runInNewContext(fs.readFileSync(path.join(SRC, 'taxonomy.js'), 'utf8'), { registerTaxonomy: (t) => { TAX = t; } });
const status = JSON.parse(fs.readFileSync(path.join(SRC, 'status.json'), 'utf8'));
const years = [];
for (let y = 1987; y <= 2025; y++) years.push(y);
const has = (dir, name) => fs.existsSync(path.join(SRC, dir, name));

// 讲解按考频指数排序（有统计时），高频优先
let order = TAX.kps.map((k) => k.id);
try {
  let M;
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'data', 'meta.js'), 'utf8'), { KY_setMeta: (m) => { M = m; } });
  order.sort((a, b) => M.stats.byKp[b].index - M.stats.byKp[a].index);
} catch (e) { /* 没有构建产物时按大纲顺序 */ }

const missingYears = years.filter((y) => !has('years', `${y}.js`));
const unreviewedYears = years.filter((y) => has('years', `${y}.js`) && !status.reviewedYears.includes(y)).sort((a, b) => b - a); // 近年优先
const missingLessons = order.filter((id) => !has('lessons', `${id}.js`));
const unreviewedLessons = order.filter((id) => has('lessons', `${id}.js`) && !status.reviewedLessons.includes(id));
const needAnalysis = !has('', 'analysis.js');

const tasks = [
  ...missingYears.map((y) => ({ kind: 'yearWrite', y })),
  ...missingLessons.map((id) => ({ kind: 'lessonWrite', id })),
  ...unreviewedLessons.map((id) => ({ kind: 'lessonReview', id })),
  ...unreviewedYears.map((y) => ({ kind: 'yearReview', y })),
];

const n = process.argv.indexOf('--args');
if (n > 0) {
  const groups = Math.max(1, Number(process.argv[n + 1]) || 3);
  const out = Array.from({ length: groups }, () => ({ par: [] }));
  tasks.forEach((t, i) => out[i % groups].par.push(t));
  if (needAnalysis) out[0].seq = [{ kind: 'analysisWrite' }, { kind: 'analysisReview' }];
  console.log(JSON.stringify(out, null, 1));
} else {
  console.log(`真题：缺 ${missingYears.length} 年${missingYears.length ? '（' + missingYears.join('、') + '）' : ''}；已审校 ${status.reviewedYears.length}/39 年，待审校 ${unreviewedYears.length} 年`);
  console.log(`讲解：已写 ${TAX.kps.length - missingLessons.length}/${TAX.kps.length} 篇；待写 ${missingLessons.length} 篇；已写未审校 ${unreviewedLessons.length} 篇`);
  console.log(`考点分析：${needAnalysis ? '未完成' : '已完成'}`);
  console.log(`剩余任务共 ${tasks.length + (needAnalysis ? 2 : 0)} 项（按优先级）：`);
  tasks.forEach((t) => console.log(`  ${t.kind}  ${t.y || t.id}`));
}
