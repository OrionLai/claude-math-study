#!/usr/bin/env node
// 把讲解里的 SVG 示意图渲染成 PNG，方便检查有没有画错、文字重叠。
// 用法：node tools/svg-png.js 图.svg 图.png    （需要 tools/node_modules 里的 playwright 和 chromium）
// SVG 里的 currentColor 按网页浅色主题的墨水色渲染，背景是白纸。
'use strict';
const fs = require('fs');
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require(path.join(__dirname, 'node_modules', 'playwright'))); }
const [src, out] = process.argv.slice(2);
if (!src || !out) { console.error('用法：node tools/svg-png.js 图.svg 图.png'); process.exit(1); }
const svg = fs.readFileSync(src, 'utf8');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 480, height: 400 }, deviceScaleFactor: 2 });
  await page.setContent('<!doctype html><meta charset="utf-8"><body style="margin:0;padding:12px;background:#fff;color:#1a2540;font-family:\'Noto Sans SC\',\'PingFang SC\',\'Microsoft YaHei\',sans-serif;width:440px"><div id="fig">' + svg + '</div></body>');
  const el = await page.$('#fig');
  await el.screenshot({ path: out });
  await browser.close();
  console.log('已渲染：' + out);
})().catch((e) => { console.error(e.message); process.exit(1); });
