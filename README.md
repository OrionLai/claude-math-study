# 数一高数真题研习

考研数学一 **高等数学** 的复习网站：收录 1987–2025 年全部数学一高数真题、从零讲起的基础讲解，以及基于历年考频的考点分析，并接入 AI 辅导。

## 有什么

- **真题库**：1987–2025 年（1994 年原卷缺失，题面据解析还原）全部高数题，逐题提供：
  - 思路分析：这题考什么、从哪个特征想到用什么方法、为什么这样想
  - 详细解答：分步骤写，每一步都说明理由；选择题逐个说明错误选项错在哪
  - 易错点、方法总结（"看到…想到…"），部分题有另解
  - 计算结果用 SymPy 验算，每年的题都经过独立审校
  - 可按章节、考点、题型、难度、年份、掌握情况筛选，也可以搜索关键词
- **基础讲解**：按考试大纲分成 8 章、59 个考点，每篇都包括：
  - 从问题出发（第一性原理）：这个概念要解决什么问题
  - 严格定义及逐字拆解，正例与反例
  - 每个定理的陈述、直观理解和**完整分步证明**（可以一步一步展开，每一步都能查看"为什么可以这样"）
  - 例题、常见误区、解题方法、考研怎么考、自测题（选择题即时判对错）
- **考点分析**：39 年的考频统计、考频指数排名、考点 × 年份热力图、"常考但近年没出现"的考点，以及最可能考的考点和理由
- **随机刷题**（可按考频加权）、**错题本**、学习进度
- **AI 辅导**：每道题、每一节讲解旁都有「问 AI」，会带上当前内容，先诊断你卡在哪，再一步步讲

## 怎么打开

- **在 Claude 里打开**（发布的 artifact 链接）：「问 AI」直接可用，消耗的是读者自己的 Claude 额度，第一次提问时会请读者确认。
- **GitHub Pages**：仓库 Settings → Pages → Source 选 `Deploy from a branch`，选这个分支和 `/ (root)`。打开后在 AI 面板的「连接设置」里填自己的 Anthropic API Key 即可提问（Key 只存在自己的浏览器里，请求从浏览器直接发给 Anthropic）。
- **本地**：在仓库目录运行 `npx http-server .`，再用浏览器打开显示的地址。直接双击 `index.html` 也能看题和讲解，但浏览器不允许本地文件加载 AI 模块，这时请用「复制问题」把内容发给任意 AI。

公式渲染（MathJax）和字体从 CDN 加载，需要联网。

## 目录结构

```
index.html              页面骨架
css/style.css           样式（浅色是坐标纸，深色是黑板）
js/core.js              数据加载、进度、路由、公式排版
js/card.js              题目卡（分层提示、掌握标记）
js/views-*.js           各页面：讲解、真题库、考点分析
js/ai.js                AI 辅导面板
js/vendor/              官方 @anthropic-ai/sdk 的浏览器打包版（MIT）
data/src/taxonomy.js    考点体系（59 个考点）
data/src/years/*.js     每年的真题与解析（源文件）
data/src/lessons/*.js   每个考点的讲解（源文件）
data/src/analysis.js    考点分析与预测
data/                   构建产物（meta.js、sol/、lessons/），由 tools/build.js 生成
img/                    题目配图
tools/check.js          校验器：结构、考点标签、HTML、并用 MathJax 实际解析每个公式
tools/build.js          构建：源文件 → 站点数据与统计
tools/artifact.js       生成 Claude artifact 版页面
```

## 内容完成度与续做

内容按考频从高到低分批补全。随时运行下面的命令，可以看到还差什么：

```bash
node tools/remaining.js
```

- `data/src/status.json` 记录哪些年份、哪些讲解已经经过独立审校。网站上，未审校的解析和讲解都有"作者初稿"标注；还没写的讲解显示"讲解整理中"。
- `tools/workflows/content.workflow.js` 是生成内容用的工作流脚本：每项任务由一个作者撰写，再由一个审校员独立核对，全部使用最强模型。

**额度重置后怎么继续：** 在 Claude Code 里打开这个仓库，对 Claude 说：

> 运行 `node tools/remaining.js --args 1`，用 `tools/workflows/content.workflow.js` 按清单继续补全内容，5 小时额度用到 60% 就停；跑完后更新 `data/src/status.json`，校验、构建、提交，并重新发布网站。

清单已经按优先级排好：先补缺的年份，再写高频考点的讲解，然后审校讲解，最后审校早年的真题。

工作流自带额度闸门（参数 `gate`）：每开始一项任务之前，先读取当前 5 小时额度的实时用量。如果"已用 + 本项预计 + 在跑任务预计剩余"超过 `stopAt`，就不再开始新任务，正在跑的任务照常做完。没开始的任务会列在返回结果的 `notStarted` 里，下次接着做。按经验，每篇讲解约占 5 小时额度的 15%，每年真题审校约占 4%。用量是成批上报的，有时几秒内跳 10 个百分点，所以 `stopAt` 要比目标低 10–15 个百分点（例如目标 60% 时设 0.45–0.5）。

## 修改内容

1. 改 `data/src/` 下的源文件（文本用 `String.raw` 模板，LaTeX 不用转义；格式示例见 `tools/examples/`）。
2. 校验：`cd tools && npm install && cd .. && node tools/check.js all`
3. 构建：`node tools/build.js`

## 来源与许可

- 真题题面整理自 [TsekaLuk/Kaoyan-Math1-Papers](https://github.com/TsekaLuk/Kaoyan-Math1-Papers)（CC BY-NC-SA 4.0），OCR 错误已逐题校对。真题版权归原出题单位。
- 本站的解析、讲解、考点分析与代码中的内容数据，按相同方式以 **CC BY-NC-SA 4.0** 共享：可以转载和改编，但要署名、不得商用，改编作品须用相同许可。
- `js/vendor/anthropic-sdk-*.mjs` 是 Anthropic 官方 SDK 的打包版，MIT 许可（见同目录 LICENSE 文件）。
- 内容经过 SymPy 验算和独立审校，但仍可能有疏漏，欢迎指正。
