#!/usr/bin/env node
// 生成 Claude Artifact 版页面：去掉 doctype/html/head/body 外壳（发布时平台会加），
// 并列出需要一起上传的文件（相对仓库根目录）。用法：node tools/artifact.js <输出 html 路径>
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const out = process.argv[2];
if (!out) { console.error('用法：node tools/artifact.js <输出 html 路径>'); process.exit(1); }

let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
html = html
  .replace(/<!doctype html>\s*/i, '')
  .replace(/<html[^>]*>\s*/i, '')
  .replace(/<\/?head>\s*/gi, '')
  .replace(/<\/?body>\s*/gi, '')
  .replace(/<\/html>\s*/i, '')
  .replace(/<meta charset[^>]*>\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '');
fs.writeFileSync(out, html);

const files = ['css/style.css'];
for (const f of fs.readdirSync(path.join(ROOT, 'js'))) if (f.endsWith('.js')) files.push('js/' + f);
files.push('data/meta.js');
for (const d of ['data/sol', 'data/lessons', 'img']) {
  if (!fs.existsSync(path.join(ROOT, d))) continue;
  for (const f of fs.readdirSync(path.join(ROOT, d)).sort()) files.push(d + '/' + f);
}
const total = files.reduce((s, f) => s + fs.statSync(path.join(ROOT, f)).size, 0) + Buffer.byteLength(html);
fs.writeFileSync(out.replace(/\.html$/, '.files.json'), JSON.stringify(files));
console.log(`页面：${out}`);
console.log(`附带文件 ${files.length} 个，合计 ${(total / 1024 / 1024).toFixed(2)} MB`);
