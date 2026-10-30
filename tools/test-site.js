#!/usr/bin/env node
// 网站端到端测试：本地起一个静态服务器，用无头 Chromium 把各个页面和交互都走一遍。
//
// 准备（只做一次）：cd tools && npm install && npx playwright install chromium
// 运行：           node tools/test-site.js            常规（解析抽样打开）
//                  node tools/test-site.js --full     每道题的完整解析都打开排版（慢，几分钟）
//                  node tools/test-site.js --only lessons,peek   只跑名字里含这些词的测试
//                  ANTHROPIC_API_KEY=… node tools/test-site.js --live-ai   额外真实问一次 AI（用 Haiku，花费不到 1 美分）
//
// MathJax 用 tools/node_modules/mathjax-full 里同版本（3.2.2）的本地文件代替 CDN，Google 字体直接拦掉，
// 所以测试不依赖外网，结果也稳定。
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

let chromium;
try { ({ chromium } = require('playwright')); } catch (e) {
  try { ({ chromium } = require(path.join(__dirname, 'node_modules', 'playwright'))); } catch (e2) {
    console.error('缺少 playwright。请先运行：cd tools && npm install && npx playwright install chromium');
    process.exit(2);
  }
}

const ROOT = path.resolve(__dirname, '..');
const MJ = path.join(__dirname, 'node_modules', 'mathjax-full', 'es5', 'tex-svg.js');
if (!fs.existsSync(MJ)) { console.error('缺少 tools/node_modules/mathjax-full，请先运行：cd tools && npm install'); process.exit(2); }
const argv = process.argv.slice(2);
const FULL = argv.includes('--full');
const LIVE_AI = argv.includes('--live-ai');
const ONLY = (() => { const i = argv.indexOf('--only'); return i >= 0 ? (argv[i + 1] || '').split(',').filter(Boolean) : []; })();
const DESKTOP = { width: 1280, height: 860 };
const PHONE = { width: 390, height: 844 };

/* ── 静态服务器 ── */
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(f).pipe(res);
});

/* ── 小工具 ── */
const results = [];
let BASE = '';
let browser;
function assert(cond, msg) { if (!cond) throw new Error(msg); }

async function newPage(viewport, opts = {}) {
  // ignoreHTTPSErrors：只给实测 AI 用（有些 CI / 公司网络用自签证书的代理转发 HTTPS）
  const ctx = await browser.newContext({ viewport, colorScheme: opts.colorScheme || 'light', deviceScaleFactor: 1, ignoreHTTPSErrors: !!opts.ignoreHTTPSErrors });
  await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/mathjax\//, (r) => r.fulfill({ path: MJ, contentType: 'text/javascript' }));
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  const page = await ctx.newPage();
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push('脚本错误：' + e.message));
  page.on('console', (m) => {
    if (m.type() !== 'error') return;
    const t = m.text();
    if (/Failed to load resource/.test(t) && /fonts|ERR_FAILED/.test(t)) return; // 拦掉的字体
    page.errors.push('控制台错误：' + t);
  });
  return page;
}
async function open(page, tok) {
  await page.goto(BASE + '#' + tok);
  await page.waitForFunction(() => window.KY && window.KY.meta && window.__mjReady, null, { timeout: 30000 });
  await settle(page);
}
// 等页面渲染和排版都结束
async function settle(page) {
  await page.waitForFunction(() => !document.querySelector('#view .loading') && window.KY.busyTypeset === 0, null, { timeout: 60000 });
  await page.waitForTimeout(50);
  await page.waitForFunction(() => window.KY.busyTypeset === 0, null, { timeout: 60000 });
}
async function flush(page) {
  await page.evaluate(() => window.KY.flushLazy());
  await settle(page);
}
// 页面体检：MathJax 报错、没排版的 TeX、行内公式被排成块、横向溢出、空按钮
async function audit(page, where, opts = {}) {
  const r = await page.evaluate(() => {
    const view = document.getElementById('view');
    const vw = document.documentElement.clientWidth;
    const raw = (view.innerText.match(/\$[^$\n]{1,60}\$/g) || []).slice(0, 3);
    const merr = Array.from(document.querySelectorAll('#view mjx-merror')).slice(0, 3).map((e) => e.getAttribute('data-mjx-error') || e.textContent.slice(0, 60));
    const blocks = Array.from(view.querySelectorAll('mjx-container:not([display])')).filter((c) => { const s = c.querySelector('svg'); return s && getComputedStyle(s).display === 'block'; }).length;
    const emptyBtn = Array.from(document.querySelectorAll('button:not([hidden])')).filter((b) => b.offsetParent && !b.textContent.trim() && !b.getAttribute('aria-label')).length;
    const h1 = view.querySelectorAll('h1').length;
    // 正文里不该有 position: fixed 的元素（例如类名撞上了浮动提示框的样式）
    const fixed = Array.from(document.querySelectorAll('#view *:not(svg *):not(mjx-container *), #peek .peek-body *:not(svg *):not(mjx-container *)'))
      .filter((e) => getComputedStyle(e).position === 'fixed').slice(0, 3).map((e) => e.tagName.toLowerCase() + '.' + e.className);
    return { overflow: document.documentElement.scrollWidth - vw, raw, merr, blocks, emptyBtn, h1, fixed, missingRefs: view.querySelectorAll('.qref-missing').length };
  });
  const errs = [];
  if (page.errors.length) errs.push(...page.errors.splice(0));
  if (r.merr.length) errs.push('公式渲染错误 ' + JSON.stringify(r.merr));
  if (!opts.allowRaw && r.raw.length) errs.push('有没排版的公式 ' + JSON.stringify(r.raw));
  if (r.blocks) errs.push(r.blocks + ' 个行内公式被排成了独占一行');
  if (r.overflow > 1) errs.push('横向溢出 ' + r.overflow + 'px');
  if (r.emptyBtn) errs.push(r.emptyBtn + ' 个按钮没有文字或 aria-label');
  if (r.h1 !== 1) errs.push('页面 h1 数量为 ' + r.h1 + '（应为 1）');
  if (r.missingRefs) errs.push(r.missingRefs + ' 个真题引用指向不存在的题');
  if (r.fixed.length) errs.push('正文里有浮在页面上的 position:fixed 元素 ' + JSON.stringify(r.fixed));
  if (errs.length) throw new Error(where + '：' + errs.join('；'));
}

async function test(name, fn) {
  if (ONLY.length && !ONLY.some((o) => name.includes(o))) return;
  const t0 = Date.now();
  try {
    const note = await fn();
    results.push({ name, ok: true, ms: Date.now() - t0, note });
    console.log(`✓ ${name}（${((Date.now() - t0) / 1000).toFixed(1)}s）${note ? '：' + note : ''}`);
  } catch (e) {
    results.push({ name, ok: false, ms: Date.now() - t0, err: e.message });
    console.log(`✗ ${name}\n    ${e.message.split('\n').join('\n    ')}`);
  }
}

/* ── 测试 ── */
async function run() {
  const meta = await (async () => {
    const page = await newPage(DESKTOP);
    await open(page, 'home');
    const m = await page.evaluate(() => ({ lessons: Object.keys(KY.meta.lessons), years: KY.meta.stats.years, kps: KY.tax.kps.map((k) => k.id), problems: KY.meta.problems.length }));
    await page.context().close();
    return m;
  })();
  console.log(`数据：${meta.problems} 道题、${meta.years.length} 年、${meta.lessons.length} 篇讲解、${meta.kps.length} 个考点\n`);

  await test('主要页面（桌面、手机、深色）', async () => {
    for (const [vp, scheme] of [[DESKTOP, 'light'], [PHONE, 'light'], [DESKTOP, 'dark']]) {
      const page = await newPage(vp, { colorScheme: scheme });
      for (const tok of ['home', 'learn', 'bank', 'stats', 'practice', 'wrong']) {
        await open(page, tok);
        await audit(page, `${tok}（${vp.width}px ${scheme}）`);
      }
      await page.context().close();
    }
    return '6 个页面 × 3 种外观';
  });

  await test('每一篇讲解：公式、布局、真题引用', async () => {
    const page = await newPage(PHONE);
    const slow = [];
    let refs = 0;
    for (const id of meta.lessons) {
      const t0 = Date.now();
      await open(page, 'l-' + id);
      const first = Date.now() - t0;
      if (first > 4000) slow.push(id + ' ' + first + 'ms');
      await audit(page, `讲解 ${id} 首屏`, { allowRaw: true }); // 后面的小节按需排版，首屏允许还有没排的
      await flush(page);
      await audit(page, `讲解 ${id} 全部排版后`);
      refs += await page.evaluate(() => document.querySelectorAll('#view .qref[data-q]').length);
    }
    await page.context().close();
    return `${meta.lessons.length} 篇，真题引用 ${refs} 处` + (slow.length ? '；首屏较慢：' + slow.join('、') : '');
  });

  await test('讲解交互：分步证明、自测、学完标记、目录高亮', async () => {
    const page = await newPage(DESKTOP);
    const id = meta.lessons.includes('diff.mvt') ? 'diff.mvt' : meta.lessons[0];
    await open(page, 'l-' + id);
    await flush(page);
    const proof = await page.$('[data-proof="next"]');
    assert(proof, '找不到「看下一步」按钮');
    await proof.click();
    await settle(page);
    assert(await page.evaluate(() => !document.querySelector('.proof .step').hidden), '点「先想一想，再看第 1 步」后第 1 步没有出现');
    await page.click('[data-proof="all"]');
    await settle(page);
    assert(await page.evaluate(() => !document.querySelector('.proof .qed').hidden), '展开完整证明后没有出现「证毕」');
    const why = await page.$('[data-why]');
    if (why) { await why.click(); await settle(page); assert(await why.evaluate((b) => b.getAttribute('aria-expanded') === 'true'), '「为什么可以这样？」没有展开'); }
    const opt = await page.$('[data-qz-opt]');
    if (opt) {
      await opt.click();
      assert(await page.evaluate(() => !!document.querySelector('.qz-opt.right')), '自测选择题点选后没有标出正确答案');
    }
    await page.click('[data-lesson-done]');
    assert(await page.evaluate((x) => KY.lessonDone(x), id), '点「这一篇我学完了」没有记录');
    await page.evaluate(() => KY.scrollToId('s-4'));
    await page.waitForTimeout(600);
    const cur = await page.evaluate(() => (document.querySelector('.toc .in-page a[aria-current]') || {}).dataset);
    assert(cur && cur.scroll === 's-4', '跳到第 5 节后目录没有高亮第 5 节（高亮的是 ' + JSON.stringify(cur) + '）');
    assert(await page.evaluate(() => parseFloat(document.querySelector('#readbar i').style.width) > 0), '阅读进度条没有前进');
    await audit(page, '讲解交互后');
    await page.context().close();
  });

  await test('看题浮层：真题引用、相关真题、快捷键、Esc 关闭', async () => {
    const page = await newPage(DESKTOP);
    // 优先找有真题引用的讲解
    let id = null;
    for (const l of meta.lessons) {
      await open(page, 'l-' + l);
      if (await page.evaluate(() => !!document.querySelector('#view .qref[data-q]'))) { id = l; break; }
    }
    let note = '';
    if (id) {
      await flush(page);
      const ref = await page.$('#view .qref[data-q]');
      const q = await ref.getAttribute('data-q');
      await ref.scrollIntoViewIfNeeded();
      await ref.click();
      await settle(page);
      assert(await page.evaluate(() => document.getElementById('peek').open), '点真题引用后浮层没有打开');
      assert(await page.evaluate((x) => document.querySelector('#peek .q').dataset.id === x, q), '浮层里打开的不是被引用的那道题');
      await page.keyboard.press('a');
      assert(await page.evaluate(() => !document.querySelector('#peek .q-ans').hidden), '浮层里按 A 没有显示答案');
      await page.keyboard.press('s');
      await settle(page);
      assert(await page.evaluate(() => !document.querySelector('#peek .q-sol').hidden && document.querySelector('#peek .q-sol').textContent.length > 50), '浮层里按 S 没有显示完整解析');
      await audit(page, '浮层解析', { allowRaw: true });
      const bad = await page.evaluate(() => document.querySelectorAll('#peek mjx-merror').length);
      assert(!bad, '浮层解析里有公式错误');
      await page.keyboard.press('Escape');
      await page.waitForTimeout(200);
      assert(await page.evaluate(() => !document.getElementById('peek').open), '按 Esc 没有关闭浮层');
      assert(await page.evaluate(() => document.activeElement && document.activeElement.matches('.qref')), '关闭浮层后焦点没有回到原来的引用');
      // 键盘打开
      await ref.focus();
      await page.keyboard.press('Enter');
      await settle(page);
      assert(await page.evaluate(() => document.getElementById('peek').open), '在真题引用上按回车没有打开浮层');
      await page.click('[data-peek-close]');
      note = `讲解 ${id} 的引用 ${q}`;
    } else note = '还没有讲解含真题引用，只测了相关真题';
    await open(page, 'l-' + meta.lessons[0]);
    await flush(page);
    const rel = await page.$('#s-rel a[data-peek]');
    if (rel) {
      await rel.scrollIntoViewIfNeeded();
      await rel.click();
      await settle(page);
      assert(await page.evaluate(() => document.getElementById('peek').open && location.hash.startsWith('#l-')), '点「这个考点的真题」应在当前页打开浮层');
      // 浮层里点「单独打开这道题」应跳转并关闭浮层
      await page.click('#peek .peek-open');
      await settle(page);
      assert(await page.evaluate(() => location.hash.startsWith('#q-') && !document.getElementById('peek').open), '「单独打开这道题」没有跳转或浮层没有关闭');
    }
    await page.context().close();
    return note;
  });

  await test('真题 → 讲解精讲：单题页与解析里的反向链接', async () => {
    const page = await newPage(DESKTOP);
    const pid = await (async () => { await open(page, 'home'); return page.evaluate(() => Object.keys(KY.meta.refs || {}).find((q) => KY.meta.refs[q].some((r) => r[2]))); })();
    if (!pid) return '还没有讲解精讲真题，跳过';
    await open(page, 'q-' + pid);
    const chip = await page.$('#view .page-head .chip-ref');
    assert(chip, `单题页 ${pid} 没有显示「讲解里有这道题的精讲」`);
    const tok = await chip.getAttribute('data-go');
    await chip.click();
    await settle(page);
    await page.waitForTimeout(700);
    const anchor = tok.split('~')[1];
    const pos = await page.evaluate((a) => ({ hash: location.hash, top: document.getElementById(a).getBoundingClientRect().top, head: document.querySelector('.top').getBoundingClientRect().bottom }), anchor);
    assert(pos.hash === '#' + tok, '跳转后地址不对：' + pos.hash);
    assert(pos.top >= pos.head - 2 && pos.top < pos.head + 80, `没有定位到精讲那一节（节标题在 ${Math.round(pos.top)}px）`);
    assert(await page.evaluate((q) => !!document.querySelector('#' + CSS.escape(location.hash.split('~')[1]) + ' [data-q="' + q + '"]'), pid), '定位到的那一节里没有引用这道题');
    // 解析底部也有链接
    await open(page, 'q-' + pid);
    await page.keyboard.press('s');
    await settle(page);
    assert(await page.evaluate(() => !!document.querySelector('#view .sol-foot .chip-ref')), '解析底部没有「讲解里的精讲」链接');
    await page.context().close();
    return `${pid} → ${tok}`;
  });

  await test('手机：目录按钮、跳转落点、记住读到哪里', async () => {
    const page = await newPage(PHONE);
    const id = meta.lessons[0];
    await open(page, 'l-' + id);
    assert(await page.evaluate(() => !document.getElementById('toc-btn').hidden), '手机讲解页没有显示「目录」按钮');
    await page.click('#toc-btn');
    assert(await page.evaluate(() => document.getElementById('sheet').open), '点「目录」没有打开目录');
    await page.click('#sheet a[data-scroll="s-3"]');
    await page.waitForTimeout(900);
    const pos = await page.evaluate(() => ({ top: document.getElementById('s-3').getBoundingClientRect().top, head: document.querySelector('.top').getBoundingClientRect().bottom, open: document.getElementById('sheet').open }));
    assert(!pos.open, '跳转后目录没有关闭');
    assert(pos.top >= pos.head - 2 && pos.top < pos.head + 80, `跳转后小节标题位置不对（标题 ${Math.round(pos.top)}px，顶栏底边 ${Math.round(pos.head)}px）`);
    await page.waitForTimeout(1200); // 位置是延迟保存的
    await open(page, 'home');
    assert(await page.evaluate(() => !!document.querySelector('.cont-card')), '首页没有出现「继续学习」');
    await open(page, 'l-' + id);
    assert(await page.evaluate(() => !!document.getElementById('resume')), '再次打开讲解没有提示「接着读」');
    await open(page, 'bank');
    assert(await page.evaluate(() => document.getElementById('toc-btn').hidden), '离开讲解后「目录」按钮没有隐藏');
    await page.context().close();
  });

  await test('每一年整卷：题面公式与布局', async () => {
    const page = await newPage(PHONE);
    let sols = 0;
    for (const y of meta.years) {
      await open(page, 'y' + y);
      await audit(page, `${y} 年整卷`);
      // 解析：抽第一道和最后一道（--full 时全部）
      const ids = await page.evaluate(() => Array.from(document.querySelectorAll('#view .q')).map((q) => q.dataset.id));
      const pick = FULL ? ids : [ids[0], ids[ids.length - 1]];
      for (const qid of pick) {
        await page.click(`#view .q[data-id="${qid}"] [data-act="sol"]`);
        await settle(page);
        sols++;
      }
      await audit(page, `${y} 年解析`);
    }
    await page.context().close();
    return `${meta.years.length} 年，打开解析 ${sols} 道`;
  });

  await test('每个考点页', async () => {
    const page = await newPage(DESKTOP);
    for (const kp of meta.kps) { await open(page, 'kp-' + kp); await audit(page, `考点 ${kp}`); }
    await page.context().close();
    return meta.kps.length + ' 个';
  });

  await test('题目卡与单题页：提示分层、标记、快捷键、上下题', async () => {
    const page = await newPage(DESKTOP);
    await open(page, 'q-2019-9');
    assert(await page.evaluate(() => /2019/.test(document.querySelector('#view h1').textContent)), '单题页标题不对');
    await page.keyboard.press('h');
    await settle(page);
    assert(await page.evaluate(() => !document.querySelector('.q-hint').hidden), '按 H 没有显示思路');
    await page.keyboard.press('a');
    assert(await page.evaluate(() => !document.querySelector('.q-ans').hidden), '按 A 没有显示答案');
    await page.keyboard.press('s');
    await settle(page);
    assert(await page.evaluate(() => !document.querySelector('.q-sol').hidden), '按 S 没有显示解析');
    await audit(page, '单题页解析');
    await page.keyboard.press('n');
    assert(await page.evaluate(() => KY.status('2019-9') === 'bad' && document.getElementById('wrong-count').textContent === '1'), '按 N 没有加入错题本，或导航上的错题数没更新');
    await page.keyboard.press('ArrowRight');
    await settle(page);
    assert(await page.evaluate(() => location.hash !== '#q-2019-9'), '按 → 没有跳到下一题');
    await page.keyboard.press('ArrowLeft');
    await settle(page);
    assert(await page.evaluate(() => location.hash === '#q-2019-9'), '按 ← 没有回到上一题');
    // 错题本：标记时间、按「最久没做」排序
    await open(page, 'wrong');
    assert(await page.evaluate(() => !!document.querySelector('#view .q[data-id="2019-9"]')), '错题本里没有刚标记的题');
    assert(await page.evaluate(() => /今天标记/.test(document.querySelector('.wr-age').textContent)), '错题没有显示标记时间');
    await page.evaluate(() => { KY.setStatus('2009-17', 'bad'); KY.prog.pt['2009-17'] = Date.now() - 5 * 86400000; KY.saveProg(); });
    await page.click('[data-wr-sort="due"]');
    await settle(page);
    const order = await page.evaluate(() => Array.from(document.querySelectorAll('#view .q')).map((q) => q.dataset.id));
    assert(order[0] === '2009-17', '「最久没做的在前」排序不对：' + order.join(','));
    assert(await page.evaluate(() => /该回炉了/.test(document.querySelector('.topic-h').textContent) && /1<\/b> 道已经/.test(document.querySelector('.wr-sum').innerHTML)), '没有提示该回炉的错题');
    await audit(page, '错题本');
    await page.click('[data-wr-sort="chapter"]');
    await settle(page);
    await page.evaluate(() => KY.setStatus('2009-17', 'bad')); // 再点一次「不会」= 取消标记
    await page.click('#view .q[data-id="2019-9"] [data-act="ok"]');
    assert(await page.evaluate(() => KY.status('2019-9') === 'ok' && document.getElementById('wrong-count').hasAttribute('data-zero')), '点「会了」后状态或错题数不对');
    // 清空记录（页面内二次确认）
    await page.click('#reset');
    await page.click('#reset-yes');
    assert(await page.evaluate(() => !KY.status('2019-9') && !Object.keys(KY.prog.l).length), '清空记录没有生效');
    await page.context().close();
  });

  await test('真题库：搜索、筛选、翻页、「/」快捷键', async () => {
    const page = await newPage(DESKTOP);
    await open(page, 'bank');
    await page.click('[data-bank-reset]');
    await settle(page);
    const all = await page.evaluate(() => +document.querySelector('.result-count b').textContent);
    assert(all === meta.problems, `清空筛选后应有 ${meta.problems} 道，实际 ${all}`);
    await page.keyboard.press('/');
    assert(await page.evaluate(() => document.activeElement.id === 'bf-q'), '按「/」没有聚焦搜索框');
    await page.keyboard.type('拉格朗日');
    await page.waitForTimeout(450);
    await settle(page);
    const found = await page.evaluate(() => +document.querySelector('.result-count b').textContent);
    assert(found > 0 && found < all, `搜索「拉格朗日」结果数不合理：${found}`);
    await page.fill('#bf-q', '');
    await page.waitForTimeout(450);
    await page.selectOption('#bf-ch', 'mint');
    await settle(page);
    const ch = await page.evaluate(() => +document.querySelector('.result-count b').textContent);
    assert(ch > 0 && ch < all, '按章节筛选结果不对');
    await page.click('[data-page="2"]');
    await settle(page);
    assert(await page.evaluate(() => /第 2 \//.test(document.querySelector('.result-count').textContent)), '翻页没有生效');
    await audit(page, '真题库筛选后');
    await page.click('[data-bank-reset]');
    await page.context().close();
    return `全部 ${all} 道，搜「拉格朗日」${found} 道，多元积分章 ${ch} 道`;
  });

  await test('随机刷题：换一道、上一道、本轮统计、只抽错题', async () => {
    const page = await newPage(DESKTOP);
    await open(page, 'practice');
    const a = await page.evaluate(() => document.querySelector('#pr-slot .q').dataset.id);
    await page.keyboard.press('y');
    await page.click('#pr-next');
    await settle(page);
    const b = await page.evaluate(() => document.querySelector('#pr-slot .q').dataset.id);
    assert(a !== b, '「换一道」没有换题');
    assert(await page.evaluate(() => /本轮标记了 1 道/.test(document.querySelector('#pr-slot .result-count').textContent)), '本轮统计没有更新');
    await page.click('#pr-prev');
    await settle(page);
    assert(await page.evaluate((x) => document.querySelector('#pr-slot .q').dataset.id === x, a), '「上一道」没有回到刚才那道');
    await page.keyboard.press('ArrowRight');
    await settle(page);
    assert(await page.evaluate((x) => document.querySelector('#pr-slot .q').dataset.id === x, b), '回看后按 → 应回到较新的那道');
    await page.selectOption('#pr-mode', 'wrong');
    await settle(page);
    assert(await page.evaluate(() => !!document.querySelector('#pr-slot .empty')), '没有错题时「只抽错题」应显示空状态');
    await audit(page, '刷题');
    await page.context().close();
  });

  await test('全站搜索：Ctrl+K、分组结果、键盘选择、打开题目浮层', async () => {
    const page = await newPage(DESKTOP);
    await open(page, 'home');
    await page.keyboard.press('Control+k');
    assert(await page.evaluate(() => document.getElementById('search').open && document.activeElement.id === 'search-q'), 'Ctrl+K 没有打开搜索框');
    await page.keyboard.type('泰勒');
    await page.waitForTimeout(300);
    const groups = await page.evaluate(() => Array.from(document.querySelectorAll('#search-list .search-g')).map((g) => g.textContent));
    assert(groups.includes('考点') && groups.includes('真题'), '搜「泰勒」应有考点和真题两组结果，实际：' + groups.join('、'));
    // 回车打开第一条（考点 → 讲解）
    await page.keyboard.press('Enter');
    await settle(page);
    assert(await page.evaluate(() => !document.getElementById('search').open && /^#(l|kp)-/.test(location.hash)), '回车没有打开第一条结果');
    // 讲解小节结果带定位
    await page.click('#search-btn');
    await page.fill('#search-q', '近十年真题精讲');
    await page.waitForTimeout(300);
    const sec = await page.$('#search-list .search-it');
    assert(sec, '搜「近十年真题精讲」没有结果');
    // 题目结果 → 浮层
    await page.fill('#search-q', '2021 拉格朗日');
    await page.waitForTimeout(300);
    const n = await page.evaluate(() => Array.from(document.querySelectorAll('#search-list .search-it')).findIndex((b) => /2021 年/.test(b.textContent)));
    assert(n >= 0, '搜「2021 拉格朗日」没有找到 2021 年的题');
    for (let i = 0; i < n; i++) await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await settle(page);
    assert(await page.evaluate(() => document.getElementById('peek').open && /2021/.test(document.querySelector('#peek .peek-title').textContent)), '选中题目后没有在浮层里打开');
    await page.keyboard.press('Escape');
    // 没有结果时的提示
    await page.keyboard.press('Control+k');
    await page.fill('#search-q', 'zzzz没有这个词');
    await page.waitForTimeout(300);
    assert(await page.evaluate(() => /没有找到/.test(document.getElementById('search-list').textContent)), '没有结果时应给出提示');
    await page.keyboard.press('Escape');
    await page.context().close();
    return '搜「泰勒」结果分组：' + groups.join('、');
  });

  await test('配色切换并记住', async () => {
    const page = await newPage(DESKTOP);
    await open(page, 'home');
    await page.click('#theme-btn');
    assert(await page.evaluate(() => document.documentElement.dataset.theme === 'light'), '第一次点应切到浅色');
    await page.click('#theme-btn');
    assert(await page.evaluate(() => document.documentElement.dataset.theme === 'dark'), '第二次点应切到深色');
    await page.reload();
    await page.waitForFunction(() => window.KY && KY.meta);
    assert(await page.evaluate(() => document.documentElement.dataset.theme === 'dark'), '刷新后没有保持深色');
    await page.click('#theme-btn');
    assert(await page.evaluate(() => !document.documentElement.dataset.theme), '第三次点应回到跟随系统');
    await page.context().close();
  });

  await test('AI 面板：打开、带上下文、设置、关闭', async () => {
    const page = await newPage(DESKTOP);
    await open(page, 'q-2019-9');
    await page.click('#view .q [data-act="ai"]');
    await page.waitForFunction(() => !document.getElementById('ai').hidden);
    assert(await page.evaluate(() => /2019/.test(document.getElementById('ai-ctx').textContent)), 'AI 面板没有带上这道题');
    assert(await page.evaluate(() => document.querySelectorAll('#ai-quick [data-quick]').length >= 4), '快捷问题没有显示');
    await page.click('#ai-settings summary');
    assert(await page.evaluate(() => !!document.getElementById('ai-key') || !!document.getElementById('ai-tier')), '连接设置没有内容');
    await page.keyboard.press('Escape');
    assert(await page.evaluate(() => document.getElementById('ai').hidden), '按 Esc 没有关闭 AI 面板');
    // 讲解小节的「问 AI」
    await open(page, 'l-' + meta.lessons[0]);
    await page.click('#s-0 [data-ai-sec]');
    await page.waitForFunction(() => !document.getElementById('ai').hidden);
    assert(await page.evaluate(() => /·/.test(document.querySelector('.ai-ctx-label').textContent)), '讲解小节的「问 AI」没有带上小节');
    await page.context().close();
  });

  if (LIVE_AI) {
    await test('AI 实测：用 API Key 真实提问一次（Haiku）', async () => {
      const key = process.env.ANTHROPIC_API_KEY;
      assert(key, '没有设置 ANTHROPIC_API_KEY');
      const page = await newPage(DESKTOP, { ignoreHTTPSErrors: true });
      await open(page, 'q-2019-9');
      await page.click('#view .q [data-act="ai"]');
      await page.click('#ai-settings summary');
      await page.fill('#ai-key', key);
      await page.dispatchEvent('#ai-key', 'change');
      await page.selectOption('#ai-model', 'claude-haiku-5-5');
      await page.dispatchEvent('#ai-model', 'change');
      await page.fill('#ai-input', '这道题第一步应该做什么？只用一句话回答。');
      await page.click('#ai-send');
      // 等到回答写完，或者出错提示弹出
      await page.waitForFunction(() => (!document.querySelector('#ai-log .streaming') && document.querySelectorAll('#ai-log .ai-msg.bot').length > 0) || !document.getElementById('toast').hidden, null, { timeout: 90000 });
      const r = await page.evaluate(() => ({ text: (document.querySelector('#ai-log .ai-msg.bot') || {}).textContent, toast: document.getElementById('toast').hidden ? '' : document.getElementById('toast').textContent }));
      assert(r.text && r.text.length > 5, 'AI 没有返回内容' + (r.toast ? '：' + r.toast : ''));
      const text = r.text;
      await page.context().close();
      return '回答：' + text.slice(0, 60).replace(/\s+/g, ' ');
    });
  }
}

(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  BASE = `http://127.0.0.1:${server.address().port}/`;
  browser = await chromium.launch();
  const t0 = Date.now();
  try { await run(); } finally { await browser.close(); server.close(); }
  const bad = results.filter((r) => !r.ok);
  console.log(`\n${results.length - bad.length} / ${results.length} 项通过，用时 ${Math.round((Date.now() - t0) / 1000)} 秒`);
  process.exit(bad.length ? 1 : 0);
})();
