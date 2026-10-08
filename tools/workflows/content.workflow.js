export const meta = {
  name: 'kaoyan-gaoshu-content',
  description: '数学一高数内容补全：按清单撰写或审校真题、讲解、考点分析（全部用最强模型）',
  whenToUse: '额度重置后补全剩余内容：先运行 node tools/remaining.js 得到清单，再把清单作为 args 传入',
  phases: [
    { title: '真题整理', detail: '每年一个作者：提取全部高数题，写详细解析，sympy 验证' },
    { title: '真题审校', detail: '独立审校员逐题核对题面、答案、解析并修正' },
    { title: '讲解撰写', detail: '每个考点一篇：定义、定理与完整证明、例题、自测' },
    { title: '讲解审校', detail: '独立审校员检查数学正确性、完整性、教学质量并修正' },
    { title: '考点分析', detail: '基于全部真题的考频统计写出分析与预测，再由审校员逐个核对数字' },
  ],
}

const TAX = {"chapters":[["lim","函数、极限、连续"],["diff","一元函数微分学"],["int","一元函数积分学"],["vec","向量代数与空间解析几何"],["mdiff","多元函数微分学"],["mint","多元函数积分学"],["series","无穷级数"],["ode","常微分方程"]],"kps":[["lim.func","lim","函数的概念与性质","函数、复合函数、反函数、分段函数、隐函数；有界性、单调性、奇偶性、周期性；基本初等函数与初等函数"],["lim.seqdef","lim","数列极限的定义与性质","ε-N 定义；唯一性、有界性、保号性；子数列与收敛的关系"],["lim.funcdef","lim","函数极限的定义与性质","ε-δ 与 ε-X 定义；左右极限；唯一性、局部有界性、局部保号性；海涅定理（归结原则）"],["lim.inf","lim","无穷小与无穷大","无穷小与无穷大的概念和关系；无穷小的比较（高阶、同阶、等价、k 阶）；等价无穷小代换定理"],["lim.rules","lim","极限运算法则与存在准则","四则运算法则、复合函数极限；夹逼准则、单调有界准则；两个重要极限"],["lim.compute","lim","未定式极限的计算","0/0、∞/∞、0·∞、∞−∞、1^∞、0^0、∞^0 七种未定式；等价代换、洛必达、泰勒展开的综合运用；已知极限反求参数"],["lim.seqcalc","lim","数列极限的计算与证明","递推数列（单调有界 + 不动点）、夹逼求和式极限、化为定积分、Stolz 思想、数列极限证明题"],["lim.cont","lim","函数的连续性与间断点","连续的定义（含左右连续）；间断点分类（可去、跳跃、无穷、振荡）；初等函数的连续性"],["lim.closed","lim","闭区间上连续函数的性质","有界性与最值定理、介值定理、零点定理及其应用"],["diff.def","diff","导数与微分的概念","导数定义（含左右导数）、几何与物理意义、可导与连续的关系；微分的定义与几何意义；切线与法线"],["diff.calc","diff","求导法则与高阶导数","四则、复合、反函数、隐函数、参数方程求导；对数求导法；高阶导数与莱布尼茨公式；分段函数求导"],["diff.mvt","diff","微分中值定理","费马引理、罗尔定理、拉格朗日中值定理、柯西中值定理；构造辅助函数证明中值等式"],["diff.taylor","diff","泰勒公式","带佩亚诺余项与拉格朗日余项的泰勒公式；常用麦克劳林展开；泰勒公式在极限、证明、高阶导数中的应用"],["diff.lhopital","diff","洛必达法则","洛必达法则的条件、证明与使用限制"],["diff.mono","diff","单调性、极值与最值","单调性判别；极值的必要条件与两个充分条件；最大值最小值及应用题"],["diff.convex","diff","凹凸性与拐点","凹凸性的定义与判别；拐点的必要条件与充分条件"],["diff.asym","diff","渐近线与函数作图","铅直、水平、斜渐近线；函数图形的描绘"],["diff.curv","diff","弧微分与曲率","弧微分；曲率、曲率半径、曲率圆"],["diff.ineq","diff","不等式证明与方程的根","用单调性、最值、中值定理、泰勒公式证明不等式；方程实根个数与存在性"],["int.concept","int","原函数与不定积分的概念","原函数存在定理、不定积分的性质、基本积分公式表"],["int.indef","int","不定积分的计算","第一、二类换元法，分部积分法；有理函数、三角函数有理式、简单无理函数的积分"],["int.def","int","定积分的概念与性质","定积分定义（黎曼和）、可积条件、几何意义；线性、区间可加、比较、估值、积分中值定理"],["int.ftc","int","变限积分与微积分基本定理","积分上限函数及其导数；牛顿—莱布尼茨公式；变限积分的极限、单调性、奇偶性"],["int.defcalc","int","定积分的计算","换元与分部积分；对称性、周期性、区间再现；华里士公式；分段函数与绝对值的积分"],["int.improper","int","反常积分","无穷限与无界函数的反常积分；计算；比较判别法与 p 判别；Γ 函数思想"],["int.app","int","定积分的应用","平面图形面积、旋转体体积、平行截面体积、弧长、旋转曲面面积；功、水压力、引力、质心形心；函数平均值"],["int.proof","int","积分等式与不等式的证明","利用积分中值定理、变限积分构造函数、柯西—施瓦茨等证明积分等式与不等式"],["vec.vector","vec","向量及其运算","向量的坐标表示；数量积、向量积、混合积；方向角与方向余弦；平行、垂直、共面的条件"],["vec.planeline","vec","平面与直线","平面方程与直线方程的各种形式；夹角、平行垂直关系；点到平面、点到直线距离；平面束"],["vec.surface","vec","曲面与空间曲线","曲面方程；旋转曲面、柱面、常用二次曲面；空间曲线的一般式与参数式；投影曲线"],["mdiff.limit","mdiff","多元函数的极限与连续","二元函数的概念；二重极限的定义与存在性判断；连续性；有界闭区域上连续函数的性质"],["mdiff.diffable","mdiff","偏导数与全微分","偏导数的定义与几何意义；全微分的定义；可微的必要条件与充分条件；连续、偏导存在、可微之间的关系；高阶偏导与混合偏导相等的条件"],["mdiff.chain","mdiff","多元复合函数求导","链式法则；抽象复合函数的一阶、二阶偏导；全微分形式不变性；变量代换化简偏微分方程"],["mdiff.implicit","mdiff","隐函数求导","隐函数存在定理；一个方程与方程组确定的隐函数的偏导数"],["mdiff.dir","mdiff","方向导数与梯度","方向导数的定义与计算公式；梯度及其与方向导数的关系"],["mdiff.geo","mdiff","多元微分的几何应用","空间曲线的切线与法平面；曲面的切平面与法线"],["mdiff.extreme","mdiff","多元函数的极值与最值","无条件极值的必要条件与充分条件；条件极值与拉格朗日乘数法；有界闭区域上的最值；应用题"],["mint.double","mint","二重积分","概念与性质、中值定理；直角坐标与极坐标计算；交换积分次序；对称性与轮换对称性；无界区域简单情形"],["mint.triple","mint","三重积分","概念与性质；直角坐标（先一后二、先二后一）、柱面坐标、球面坐标计算；对称性"],["mint.line1","mint","第一类曲线积分","对弧长的曲线积分的概念、性质与计算；对称性"],["mint.line2","mint","第二类曲线积分与格林公式","对坐标的曲线积分；两类曲线积分的关系；格林公式；平面曲线积分与路径无关的条件；全微分的原函数"],["mint.surf1","mint","第一类曲面积分","对面积的曲面积分的概念、性质与计算；曲面面积；对称性"],["mint.surf2","mint","第二类曲面积分与高斯公式","对坐标的曲面积分；两类曲面积分的关系；高斯公式与补面法"],["mint.stokes","mint","斯托克斯公式","斯托克斯公式及其应用；空间曲线积分与路径无关"],["mint.field","mint","场论初步与积分的应用","散度、旋度；重积分与曲线曲面积分的几何与物理应用（体积、面积、质量、质心、转动惯量、引力、功、通量）"],["series.concept","series","常数项级数的概念与性质","收敛、发散与和；基本性质；收敛的必要条件；几何级数与 p 级数"],["series.positive","series","正项级数的审敛法","比较判别法（含极限形式）、比值判别法、根值判别法、积分判别法"],["series.alt","series","交错级数与绝对收敛","莱布尼茨判别法；绝对收敛与条件收敛；任意项级数敛散性判断"],["series.power","series","幂级数的收敛域","阿贝尔定理；收敛半径、收敛区间、收敛域的求法；缺项幂级数"],["series.sum","series","幂级数的和函数与数项级数求和","幂级数的运算与分析性质（逐项求导、逐项积分）；求和函数；借助幂级数求数项级数的和"],["series.expand","series","函数展开成幂级数","泰勒级数与展开的条件；常用展开式；间接展开法"],["series.fourier","series","傅里叶级数","傅里叶系数；狄利克雷收敛定理；正弦级数与余弦级数；一般周期 2l 的展开"],["ode.basic","ode","微分方程的基本概念","阶、解、通解、特解、初始条件、积分曲线"],["ode.first","ode","一阶微分方程","变量可分离方程、齐次方程、一阶线性方程、伯努利方程、全微分方程；简单变量代换"],["ode.reduce","ode","可降阶的高阶方程","y^(n)=f(x)、y''=f(x,y')、y''=f(y,y') 型方程"],["ode.linear","ode","线性微分方程解的结构","齐次与非齐次线性方程解的性质与结构定理；叠加原理"],["ode.const","ode","常系数线性微分方程","二阶及高阶常系数齐次方程；常见自由项的非齐次方程特解设法"],["ode.euler","ode","欧拉方程","欧拉方程的变换与求解"],["ode.app","ode","微分方程的应用","几何问题、物理问题建模；与积分方程、变限积分结合的综合题"]]}

function yearItem(y) {
  if (typeof y === "object") return y
  let papers = [`papers/${y}年考研数学(一)真题.md`]
  let solutions = [`solutions/${y}年解析/${y}年解析.md`]
  if (y === 1994) papers = []
  if (y === 2024) { papers = ["papers/2024年数学(一)真题及参考答案.md", "papers/2024考研数学一真题+答案.md", "papers/2024考研数学一真题.md"]; solutions = ["solutions/2024年解析/2024.md", "solutions/2024年数学（一）真题及参考答案.pdf"] }
  if (y === 2025) { papers = ["papers/2025年数学一真题.md"]; solutions = [] }
  return { y, papers, solutions }
}
function lessonItem(id) {
  if (typeof id === "object") return id
  const k = TAX.kps.find((x) => x[0] === id)
  const ch = TAX.chapters.find((c) => c[0] === k[1])
  return { id, ch: k[1], title: k[2], scope: k[3], chTitle: ch[1], siblings: TAX.kps.filter((x) => x[1] === k[1] && x[0] !== id).map((x) => x[0] + " " + x[2]).join("；") }
}
const REPO = '/home/user/claude-math-study'
const PAPERS = '/home/user/tsekaluk/kaoyan-math1-papers'
const STAGE = {
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    count: { type: 'integer' },
    summary: { type: 'string' },
    issues: { type: 'array', items: { type: 'string' } },
  },
  required: ['ok', 'summary', 'issues'],
}

const COMMON = `
【工作环境】
- 网站仓库：${REPO}（工作目录）。只写本任务指定的那一个文件，不要改其他文件，不要做任何 git 操作。
- 真题源仓库（只读）：${PAPERS}
- 考点体系：${REPO}/data/src/taxonomy.js（kp 标签、讲解 id 只能取自这里）
- 校验器：在 ${REPO} 下运行 node tools/check.js …（结构、HTML 标签配对、并用 MathJax 实际解析每个公式）
- python3 已安装 sympy；临时脚本放 /tmp/kywork/ 下你自己的子目录。
【文本格式硬性规定】
- 文件里的文本用 R 加反引号的模板字符串（String.raw），LaTeX 反斜杠不用转义。文本内容里绝对不能出现反引号字符，也不能出现 "$" 紧跟 "{" 的写法。
- 正文（公式之外）出现小于号必须写成 &lt;；公式里可以直接写。
- 行内公式 $…$，独立公式 $$…$$。公式只能用 MathJax 的 base 和 ams 宏：不要用 \\boldsymbol（改 \\mathbf）、\\color、\\cancel、\\oiint、\\xlongequal（改 \\overset{…}{=}）、\\bm。
- 允许的 HTML：p br b strong i em ul ol li span div table thead tbody tr th td sup sub small blockquote，以及内联 svg。
`

function yearSources(it) {
  let s = `- 原卷（OCR 转写的 Markdown，可能有识别错误）：${it.papers.map((p) => PAPERS + '/' + p).join('；') || '（无）'}\n`
  s += `- 参考解析（OCR，只用来核对，不要照抄）：${it.solutions.map((p) => PAPERS + '/' + p).join('；') || '（无，原卷文件里带解析）'}\n`
  s += `- 图片在对应目录的 images/ 子目录下；题目依赖图形时，用 Read 工具直接查看图片。\n`
  if (it.y === 1994) s += `- 特别说明：1994 年原卷缺失，只能从解析文件还原题面；每道题的 flags 里写入 "题面据解析还原"。\n`
  if (it.y === 2024) s += `- 特别说明：2024 年有多个版本的原卷文件，互相对照，取最可靠的题面。\n`
  if (it.y === 2025) s += `- 特别说明：2025 年没有单独的解析文件，原卷文件里自带答案与解析。\n`
  return s
}

function yearWriter(it) {
  const y = it.y
  return `你在为一个「考研数学一 · 高等数学」复习网站整理真题数据。本次任务：${y} 年数学一试卷中的全部高等数学题。
【资料】
${yearSources(it)}${COMMON}
【要做的事】
1. 通读原卷，找出所有属于高等数学的题（含向量代数与空间解析几何），排除线性代数、概率论与数理统计。早年试卷编排和现在不同（如"一、填空题(1)…(5)"、"三、计算题"、"四、证明题"），每个独立小题算一道；同一题干下的 (1)(2) 小问合成一道。一道都不能漏。
2. 题面忠实于原卷：数字、符号、上下限、指数、选项内容与顺序都不能错。OCR 错误根据上下文修正，并在 flags 里写明修正了什么。\\pmb 改成 \\mathbf，去掉 OCR 产生的多余空格。
3. 先自己独立做每道题，再与参考解析核对。凡是能算的（极限、导数、积分、级数和、微分方程的解、极值……）都必须用 sympy 验证。与参考解析不一致时查清谁对，在 flags 里写明。
4. 用中文给每道题写全新的、非常详细的讲解（不要照抄参考解析）。读者是刚开始系统学高数的考研生，要让人真正理解透彻：
   - analysis（思路分析）：这题考什么；从题目的哪个特征想到用什么方法；为什么这样想（讲清动机，不要只说"用洛必达"）。
   - solution（详细解答）：分步骤写（<p><b>第一步：…</b>…</p>），每个不显然的步骤都说明理由，代数变形不跳步。选择题要说明正确选项为什么对，并逐一说明错误选项错在哪（能举反例就举反例）。证明题要严密，每一步都有依据。
   - pitfalls（易错点）：学生最容易在哪里错、为什么会错。
   - summary（方法总结）：方法要点，加上"看到…想到…"式的题型识别规则，便于举一反三。
   - alt（另解，可选）：有明显不同的好方法时给出。
   讲法可以借鉴国内考研名师广受好评的方式（直观图像、口诀、题型与方法对应、"为什么想到这么做"），但不要冒用任何老师的名字，也不要编造他们的原话。
5. 标注 kp（1–3 个考点 id，主考点放第一个）、methods（中文方法名列表）、difficulty（1 基础直接，3 典型中档，5 全卷最难档）、score（原卷分值，看不出就写 null）、verify（{by: 'sympy'|'manual'|'proof'|'mixed', ok, note 写清验证了什么}）、flags（没有就写 []）。依赖图形的题写 figure: {file: '相对真题仓库根目录的图片路径，如 papers/images/xxx.jpg', desc: '足以让人不看图也能做题的文字描述'}，否则 figure: null。
6. 先读 ${REPO}/tools/examples/year-example.js 这个格式示例，然后写入 ${REPO}/data/src/years/${y}.js：registerYear(${y}, function (R) { return [ … ]; }); id 用 "${y}-题号"（早年按大题小题编号如 "${y}-3-2"），no 写原卷题号（如 "第15题"、"一(3)"）。
7. 运行 node tools/check.js year ${y}，把所有报错改到 ✓ 为止。
最后返回：ok（校验是否通过）、count（题数）、summary（包含的题号列表与整体情况）、issues（OCR 修正、与参考答案不一致、仍不确定的地方）。`
}

function yearVerifier(it) {
  const y = it.y
  return `你是严格的审校员。另一位作者刚整理了 ${y} 年数学一的高数真题：${REPO}/data/src/years/${y}.js。默认它有错，逐题挑刺，找出并改正所有错误。
【资料】
${yearSources(it)}${COMMON}
【逐项检查】
1. 完整性：对照原卷列出全部高等数学题（含空间解析几何），确认一题不漏、没有混入线代或概率题，no（原卷题号）正确。
2. 题面忠实：逐字核对数字、符号、上下限、指数、选项内容和顺序；修正残留的 OCR 错误。
3. 答案正确：每道题自己重新独立求解；能算的都用 sympy 重新验证；选择题的答案字母要和选项内容对应。
4. 解析正确且讲透：每一步推导都要成立；证明题检查逻辑是否严密、有无循环论证、有无漏掉条件或情形；讲解是否足够详细，初学者能否看懂"为什么这样做"；太简略或跳步的地方补充展开。
5. 标签合理：kp 是否确实是这道题考查的核心考点（只能用 taxonomy 里的 id）；difficulty 是否合理。
发现问题直接在文件里改（局部修改，保留写得好的内容，不要整份重写）。改完运行 node tools/check.js year ${y} 直到 ✓。如果文件不存在或大面积缺失，就按整理要求把它补完整（格式见 ${REPO}/tools/examples/year-example.js）。
返回：ok、count、summary（改了哪些地方）、issues（仍存疑、需要人工对照原卷的地方）。`
}

function lessonWriter(it) {
  return `你在为「考研数学一 · 高等数学」复习网站写基础讲解。本篇考点：${it.id}「${it.title}」，属于「${it.chTitle}」一章。
本篇覆盖范围（考试大纲）：${it.scope}
同章其他考点（各有单独一篇；不要大段重复它们的内容，可以引用）：${it.siblings}
${COMMON}
【读者与目标】读者是刚开始系统学高数的考研生。读完要能真正理解透彻：知道每个概念为什么这样定义、每个定理为什么成立、怎么用、考研怎么考。
【写法要求】
1. why：先从第一性原理讲"这个概念或工具要解决什么问题"，用具体例子或图像建立直觉，再引出严格定义。
2. def：范围内每个概念都要有严格定义，一个都不能漏。给出定义后逐字拆解：每个量词、每个条件起什么作用，去掉会怎样；再给正例和反例。
3. thm：范围内每个定理、公式、判别法都要写成一节：statement（准确的条件和结论）、intuition（直观解释或几何意义）、steps（完整严格的证明，拆成若干步；每步 s 写做什么，why 写为什么可以这样做、这一步的想法从哪里来）、remark（条件能否去掉、反例、和其他定理的关系）。证明必须严格完整，不能用"显然"跳过关键步骤。依赖实数完备性（确界原理、单调有界准则、闭区间套）的定理，明确说明以哪条作为出发点再证明。超出考研要求且篇幅很长的证明可以讲完整思路并写 noProof: "原因"；但大纲要求掌握的定理（如两个重要极限、夹逼准则、费马引理、罗尔、拉格朗日、柯西、泰勒、洛必达、积分中值定理、微积分基本定理、格林公式、各类级数判别法、阿贝尔定理等，凡在本篇范围内的）必须给完整证明。
4. example：每个重要知识点配有讲解的例题，逐步写出过程和"为什么这样想"；包括"条件不满足时会怎样"的反例。
5. pitfall：初学者最常见的误解，说清错在哪、怎么避免。
6. method：解题方法与题型识别（"看到…想到…"），方法要和适用条件对应。
7. exam：数学一怎么考这个考点（常见题型、设问方式、与其他考点的综合），概括说明即可，不要编造具体年份的题目。
8. check：至少 6 个自测题（概念辨析、判断对错并说理由、简单计算、选择题），附详细答案说明，用来主动回忆。
9. 适合画图的地方可以嵌入小的 SVG 示意图（带 viewBox，width="100%"，style="max-width:420px"，线条和文字用 currentColor，不要写死颜色，填充用 none 或 currentColor 加 fill-opacity），图要真正帮助理解。
10. 讲法可以借鉴国内考研名师广受好评的风格（直观图像、口诀、题型与方法对应、"为什么想到这么做"），但不要冒用任何老师的名字，也不要编造他们的原话。
11. 篇幅要充分：一般 6000–15000 字（校验器会打印字数）。宁可详细，不要概括。
【格式】先读 ${REPO}/tools/examples/lesson-example.js，然后写入 ${REPO}/data/src/lessons/${it.id}.js：registerLesson(function (R) { return { id: '${it.id}', ch: '${it.ch}', title, summary, prereq, sections: [ … ] }; }); kind 取 why/def/thm/example/pitfall/method/exam/check/text。
运行 node tools/check.js lesson ${it.id}，改到 ✓ 为止。
返回：ok、summary（各小节标题，以及证明了哪些定理）、issues。`
}

function lessonVerifier(it) {
  return `你是严格的数学审校员兼教学评审。审查讲解文件 ${REPO}/data/src/lessons/${it.id}.js（考点「${it.title}」，范围：${it.scope}）。默认它有错误和遗漏，逐段挑刺。
${COMMON}
1. 数学正确性：每个定义的表述是否准确；每个定理的条件是否完整、结论是否准确；证明的每一步是否成立，有无循环论证、遗漏情形；例题计算是否正确（能算的用 sympy 验证）；自测题答案是否正确。
2. 完整性：对照范围逐项核对。所有概念都有定义；所有定理、公式、判别法都有陈述和证明（大纲要求掌握的必须是完整证明）；缺的补上。
3. 教学质量：初学者能否看懂；是否先讲动机和直觉再讲形式；关键步骤是否解释了"为什么"；太简略、跳步的地方展开补充。
发现问题直接在文件里改（局部修改，保留写得好的内容，不要整篇重写）。改完运行 node tools/check.js lesson ${it.id} 直到 ✓。如果文件不存在或严重残缺，就按格式示例 ${REPO}/tools/examples/lesson-example.js 把它写完整。
返回：ok、summary（改了哪些地方）、issues（仍存疑的地方）。`
}

function analysisWriter() {
  return `你是考研数学一命题规律研究员。任务：基于 1987–2025 年数学一高数真题的逐题考点标注，写出"考点分析与预测"，写入 ${REPO}/data/src/analysis.js。
${COMMON}
【步骤】
1. 在 ${REPO} 下运行：node tools/build.js && node tools/analysis-input.js /tmp/kywork/analysis/input.json，然后读取 input.json。里面有各考点逐年出现次数、题型分布、作为主考点的分值、考频指数（定义见 note 字段）以及该考点全部真题的题面摘要。需要时可以读 data/src/years/*.js 看具体题目和解析。
2. 分析这些问题：各章题量与分值占比及其变化（注意 2021 年起题型结构调整：选择题与填空题每题 5 分，解答题分值也有变化）；几乎每年必考的考点（覆盖年数高、近 10 年连续出现）；考频指数排名和近 10 年相对早年的升温、降温趋势；哪些考点主要以解答题出现、哪些多在小题；历史高频但已多年没考的考点（gapYears 大）；常见的综合方式（例如多元积分配合空间曲面、级数配合微分方程）。
3. predictions：12–18 条，按可能性从高到低排序。每条包含：kp（taxonomy 里的 id）；level（极高/高/中）；reason（必须引用 input.json 里的具体数字，如出现次数、近 10 年次数、最近一次年份、连续性、题型分布，可以点名具体年份的真题作为例证）；form（下一年最可能的考法：题型、设问方式、可能与哪些考点结合）。
4. summary：一段结论性的 HTML，约 600–1200 字。先说结论（最该保分的考点、各章权重、该怎么分配复习时间），再讲规律和复习建议。必须说明：预测是基于历史考频的概率判断，不是押题；每个考点都要复习。
5. method：说明统计口径（逐题人工标注 1–3 个考点、主考点与辅助考点、考频指数的定义与权重、1994 年原卷缺失而题面据解析还原等）。
【硬性要求】所有数字都必须来自 input.json，不得编造；不要编造命题组、考试中心或任何老师的说法。
【格式】registerAnalysis(function (R) { return { summary: R\`…\`, predictions: [ { kp: 'mint.surf2', level: '极高', reason: R\`…\`, form: R\`…\` }, … ], method: R\`…\` }; }); 运行 node tools/check.js analysis，改到 ✓ 为止。
返回：ok、summary（预测清单概要）、issues。`
}

function analysisChecker() {
  return `你是严格的数据审校员。审查 ${REPO}/data/src/analysis.js（数学一高数考点分析与预测）。默认它有错，逐句挑刺。
${COMMON}
1. 在 ${REPO} 下运行 node tools/build.js && node tools/analysis-input.js /tmp/kywork/analysis-v/input.json，用这份数据逐个核对文中出现的每一个数字（出现次数、近 10 年次数、最近一次年份、占比、点名的真题年份与题号）。不一致的改正。
2. 检查推理：结论是否由数据支持，有没有过度断言（预测只能是概率判断），有没有遗漏明显的高频考点或趋势，kp 与 level 是否合理。
3. 检查是否有编造的"官方说法"，有就删掉。
直接在文件里改（局部修改，保留写得好的部分）。改完运行 node tools/check.js analysis 直到 ✓。
返回：ok、summary（改了什么）、issues。`
}

const RUN = {
  yearWrite: (it) => agent(yearWriter(yearItem(it.y)), { label: `${it.y} 整理`, phase: '真题整理', schema: STAGE }),
  yearReview: (it) => agent(yearVerifier(yearItem(it.y)), { label: `${it.y} 审校`, phase: '真题审校', schema: STAGE }),
  lessonWrite: (it) => agent(lessonWriter(lessonItem(it.id)), { label: `${it.id} 撰写`, phase: '讲解撰写', schema: STAGE }),
  lessonReview: (it) => agent(lessonVerifier(lessonItem(it.id)), { label: `${it.id} 审校`, phase: '讲解审校', schema: STAGE }),
  analysisWrite: () => agent(analysisWriter(), { label: '考点分析 撰写', phase: '考点分析', schema: STAGE }),
  analysisReview: () => agent(analysisChecker(), { label: '考点分析 审校', phase: '考点分析', schema: STAGE }),
}
const key = (it) => it.kind + ':' + (it.y || it.id || '')
async function runOne(it) {
  const r = await RUN[it.kind](it)
  return { item: key(it), result: r }
}
// seq：按顺序一个接一个（后一项依赖前一项）；par：并行流水
const seq = args.seq || []
const par = args.par || []
log(`顺序项：${seq.map(key).join(' → ') || '无'}；并行项：${par.map(key).join('、') || '无'}`)
const [a, b] = await Promise.all([
  (async () => { const out = []; for (const it of seq) out.push(await runOne(it)); return out })(),
  pipeline(par, (it) => runOne(it)),
])
return [...a, ...b]
