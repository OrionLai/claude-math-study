# 数一高数真题研习

考研数学一 **高等数学** 的复习网站：收录 1987–2025 年全部数学一高数真题、从零讲起的基础讲解，以及基于历年考频的考点分析，并接入 AI 辅导。

## 有什么

- **真题库**：1987–2025 年（1994 年原卷缺失，题面据解析还原）全部高数题，逐题提供：
  - 思路分析：这题考什么、从哪个特征想到用什么方法、为什么这样想
  - 详细解答：分步骤写，每一步都说明理由；选择题逐个说明错误选项错在哪
  - 易错点、方法总结（"看到…想到…"），部分题有另解
  - 计算结果用 SymPy 验算；未经独立审校的年份标注为"作者初稿"
  - 可按章节、考点、题型、难度、年份、掌握情况筛选，也可以搜索关键词（按 <kbd>/</kbd> 直接聚焦搜索框）
- **基础讲解**：按考试大纲分成 8 章、59 个考点，按近十年考频从高到低陆续补全。每篇都包括：
  - 从问题出发（第一性原理）：这个概念要解决什么问题
  - 严格定义及逐字拆解，正例与反例
  - 每个定理的陈述、直观理解和**完整分步证明**（可以一步一步展开，每一步都能查看"为什么可以这样"）
  - 例题、**近十年真题精讲**、常见误区、解题方法、考研怎么考、自测题（选择题即时判对错）
  - 讲解里引用的真题（带 ↗ 的题号）点一下就在当前页弹出那道题，可以看思路、答案、解析，不用离开讲解
  - 阅读体验：左侧目录跟着滚动高亮当前小节（手机上点左下角「目录」），顶部有阅读进度条；记住读到哪一节，下次打开提示「接着读」，首页和讲解目录有「继续学习」
- **考点分析**：39 年的考频统计、考频指数排名、考点 × 年份热力图、"常考但近年没出现"的考点，以及最可能考的考点和理由
- **随机刷题**（可按考频加权，可回看上一道，统计本轮做题情况）、**错题本**、学习进度
- **快捷键**（单题页、刷题页、看题浮层）：<kbd>H</kbd> 思路、<kbd>A</kbd> 答案、<kbd>S</kbd> 解析、<kbd>Y</kbd> 会了、<kbd>N</kbd> 不会、<kbd>←</kbd> <kbd>→</kbd> 上一道 / 下一道
- **全站搜索**：右上角放大镜或 <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd>，一个框里搜考点、讲解小节和真题（多个词用空格分开），方向键选择、回车打开；真题在浮层里打开
- **配色**：右上角按钮在"跟随系统 / 浅色 / 深色"之间切换
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
js/search.js            全站搜索
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
tools/api-run.js        用 API 额度在本机跑内容工作流（见下）
tools/prompts/          给 api-run.js 追加的额外要求（如「结合近十年真题」）
tools/test-site.js      端到端测试：无头浏览器把各页面和交互走一遍（见下）
tools/svg-png.js        把讲解里的 SVG 示意图渲染成 PNG，检查画得对不对
```

## 测试

改完代码或内容后，跑一遍端到端测试（需要 Node 18+）：

```bash
cd tools && npm install && npx playwright install chromium   # 只需一次
npm test            # 常规：所有页面（桌面、手机、深色）、每篇讲解、每年整卷、每个考点页、各种交互
npm run test:full   # 额外把 520 道题的完整解析逐一打开排版（几分钟）
```

测试会检查：脚本报错、公式渲染错误、没排版的 TeX、行内公式被排成独占一行、手机宽度下横向溢出、讲解里的真题引用是否都指向存在的题，以及看题浮层、分步证明、自测、快捷键、真题库筛选与翻页、随机刷题、错题本、清空记录、配色切换、AI 面板等交互。MathJax 用本地同版本文件代替 CDN，所以测试不需要外网。设置了 `ANTHROPIC_API_KEY` 时加 `--live-ai` 会用 Haiku 真实问一次 AI（花费不到 1 美分）。

## 内容完成度与续做

内容按考频从高到低分批补全。随时运行下面的命令，可以看到还差什么：

```bash
node tools/remaining.js
```

- `data/src/status.json` 记录哪些年份、哪些讲解已经经过独立审校。网站上，未审校的解析和讲解都有"作者初稿"标注；还没写的讲解显示"讲解整理中"。
- `tools/workflows/content.workflow.js` 是生成内容用的工作流脚本：每项任务由一个作者撰写，再由一个审校员独立核对，全部使用最强模型。

### 用 API 额度补全（推荐）

Max 和 Team 套餐每月附带 Claude Platform 的 API 额度（Max 5x 每月 100 美元、Max 20x 每月 200 美元，当月用不完作废）。`tools/api-run.js` 把下面那套工作流改成在本机用 API Key 跑：它调用 `claude --bare -p`，这个模式不读登录凭据，只认环境变量 `ANTHROPIC_API_KEY`，按官方说明计入 API 额度，不占 Claude 订阅的 5 小时额度。

准备（只做一次）：

1. 领额度：claude.ai → 设置 → 账单 → API credits → Link organization，把一个 Console 组织关联到套餐。
2. 在 platform.claude.com 用这个组织创建一个 API Key。
3. 本机要有：Claude Code CLI（`claude --version` 能运行）、Node 18+、装了 sympy 的 Python（`python -m pip install sympy`）。真题审校任务还需要把 [TsekaLuk/Kaoyan-Math1-Papers](https://github.com/TsekaLuk/Kaoyan-Math1-Papers) 克隆到本地。

每月跑一次。在普通终端里运行；不要在 Claude Code、IDE 插件或桌面 App 里跑，那些算作 Claude Code 用量：

```bash
export ANTHROPIC_API_KEY=sk-ant-…                 # PowerShell：$env:ANTHROPIC_API_KEY="sk-ant-…"
export KY_PAPERS=/path/to/kaoyan-math1-papers      # 可选，只有真题任务需要；没设就跳过真题任务
node tools/api-run.js --dry-run                    # 看清单和预算分配，不花钱
node tools/api-run.js --limit 1                    # 先跑一项试水，看实际花费（台账在 tools/.api-run/runs.jsonl）
node tools/api-run.js --budget 90                  # 正式跑：花到 90 美元就不再开始新任务，正在跑的做完
```

跑完会自动校验、把审校通过的记入 `data/src/status.json`、重新构建。看一眼 `git status`，没问题就提交并重新发布。失败的任务会列出来，用 `--ids` 重跑即可。其他选项：`--only lessonWrite,lessonReview`、`--workers 2`、`--model claude-sonnet-5-5`（约为 Opus 一半价钱）、`--effort high`、`--task-budget 8`（单项上限）。

花费参考（经验值，跑过之后以台账为准）：用 Opus 写一篇讲解约 2–4 美元、审校一篇或一年约 1–2 美元。一个月 100 美元大约够写 25–40 篇讲解。

网站里的「问 AI」同理：在 GitHub Pages 版的 AI 面板「连接设置」里填这个 Key，自己提问也计入 API 额度。

### 在 Claude Code 里继续（备选，消耗订阅额度）

在 Claude Code 里打开这个仓库，对 Claude 说：

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
