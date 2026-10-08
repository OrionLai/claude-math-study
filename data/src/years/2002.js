// 2002 年数学一 · 高等数学部分（共 12 题）
// 原卷编排：一、填空题(1)–(5)；二、选择题(1)–(5)；三–十二 为解答题。
// 其中 一(4)、一(5)、二(4)、二(5)、九、十、十一、十二 属于线性代数 / 概率统计，未收录。
registerYear(2002, function (R) {
  return [
    /* ───────────────────────── 一(1) ───────────────────────── */
    {
      id: '2002-1-1', year: 2002, no: '一(1)', type: '填空', score: 3,
      stem: R`$\displaystyle\int_{e}^{+\infty}\frac{dx}{x\ln^{2}x}=$______.`,
      options: null,
      answer: R`$1$`,
      figure: null,
      kp: ['int.improper', 'int.indef'],
      methods: ['反常积分的定义（先积分后取极限）', '凑微分（第一类换元法）'],
      difficulty: 1,
      analysis: R`<p>这道题考<b>无穷限反常积分</b>的计算。看到积分上限是 $+\infty$，首先要意识到：这不是普通的定积分，而是"先在有限区间上积分，再取极限"：</p>$$\int_e^{+\infty}\frac{dx}{x\ln^2x}=\lim_{b\to+\infty}\int_e^{b}\frac{dx}{x\ln^2x}.$$<p>再看被积函数：分母里同时出现了 $x$ 和 $\ln x$，而 $\dfrac{1}{x}dx$ 恰好是 $d(\ln x)$。这是最典型的<b>凑微分</b>信号——把 $\ln x$ 整体看成新变量 $u$，积分立刻变成幂函数 $u^{-2}$ 的积分，而幂函数的积分人人会算。</p>`,
      solution: R`<p><b>第一步：用定义把反常积分写成极限。</b>当 $x\ge e$ 时 $\ln x\ge1$，分母不为零，被积函数在 $[e,+\infty)$ 上连续，没有瑕点；唯一的"反常"之处是上限为 $+\infty$。所以</p>$$I=\lim_{b\to+\infty}\int_e^{b}\frac{dx}{x\ln^2x}.$$<p><b>第二步：求原函数（凑微分）。</b>因为 $(\ln x)'=\dfrac1x$，所以 $\dfrac{dx}{x}=d(\ln x)$。令 $u=\ln x$：</p>$$\int\frac{dx}{x\ln^2x}=\int\frac{d(\ln x)}{(\ln x)^2}=\int u^{-2}\,du=-\frac1u+C=-\frac{1}{\ln x}+C.$$<p>求导检验：$\left(-\dfrac1{\ln x}\right)'=\dfrac{1}{\ln^2x}\cdot\dfrac1x$，正是被积函数。</p><p><b>第三步：在有限区间 $[e,b]$ 上用牛顿—莱布尼茨公式。</b></p>$$\int_e^{b}\frac{dx}{x\ln^2x}=\left[-\frac1{\ln x}\right]_e^{b}=-\frac1{\ln b}+\frac{1}{\ln e}=1-\frac{1}{\ln b}.$$<p><b>第四步：取极限。</b>$b\to+\infty$ 时 $\ln b\to+\infty$，故 $\dfrac1{\ln b}\to0$，于是</p>$$I=\lim_{b\to+\infty}\left(1-\frac1{\ln b}\right)=1.$$<p>极限存在且有限，说明反常积分<b>收敛</b>，其值为 $1$。熟练以后可以直接写 $\left[-\dfrac1{\ln x}\right]_e^{+\infty}=0-(-1)=1$，其中"代入 $+\infty$"只是"取极限"的简写。</p>`,
      pitfalls: R`<p>① 把 $\ln^2x$ 误读成 $\ln(\ln x)$ 或 $\ln(x^2)$。约定 $\ln^2x=(\ln x)^2$，与 $\sin^2x=(\sin x)^2$ 的写法一样。</p><p>② 代下限时符号出错：$-\left(-\dfrac{1}{\ln e}\right)=+1$，很多人算成 $-1$。</p><p>③ 不要以为"被积函数趋于 0 就收敛"。形状几乎一样的 $\displaystyle\int_e^{+\infty}\frac{dx}{x\ln x}=\Big[\ln(\ln x)\Big]_e^{+\infty}=+\infty$ 就是发散的，真正决定敛散的是 $\ln x$ 的幂次。</p>`,
      summary: R`<p><b>方法要点：</b>反常积分 = 有限区间上的定积分 + 取极限；原函数用凑微分 $\dfrac{dx}{x}=d(\ln x)$。</p><p><b>看到…想到…：</b>看到被积函数是"$\dfrac1x\times$ 关于 $\ln x$ 的函数"，就想到令 $u=\ln x$。</p><p><b>可推广的结论：</b>令 $u=\ln x$，则 $\displaystyle\int_e^{+\infty}\frac{dx}{x\ln^px}=\int_1^{+\infty}\frac{du}{u^p}$，它和 $p$-积分完全平行：$p>1$ 时收敛（值为 $\dfrac1{p-1}$），$p\le1$ 时发散。本题 $p=2$，值为 $\dfrac{1}{2-1}=1$，可用来秒杀或检验。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(1/(x*log(x)**2), (x, E, oo)) = 1' },
      flags: []
    },

    /* ───────────────────────── 一(2) ───────────────────────── */
    {
      id: '2002-1-2', year: 2002, no: '一(2)', type: '填空', score: 3,
      stem: R`已知函数 $y=y(x)$ 由方程 $e^{y}+6xy+x^{2}-1=0$ 确定，则 $y''(0)=$______.`,
      options: null,
      answer: R`$-2$`,
      figure: null,
      kp: ['diff.calc'],
      methods: ['隐函数求导（方程两边对 x 求导）', '逐次求导、逐次代值', '待定系数（泰勒展开）'],
      difficulty: 2,
      analysis: R`<p>$y$ 是由方程<b>隐式</b>确定的函数：$e^y$ 和 $6xy$ 混在一起，根本解不出 $y=\cdots$ 的显式表达式，所以只能用<b>隐函数求导法</b>。它的原理很朴素：把 $y$ 看成 $x$ 的函数 $y(x)$ 代回方程，方程就变成一个关于 $x$ 的<b>恒等式</b>；恒等式两边的导数当然也相等。</p><p>题目只要 $x=0$ 这一点的二阶导数，不需要 $y''$ 的一般表达式。最省力的策略是"<b>求一次导，代一次值</b>"：依次求出 $y(0)$、$y'(0)$、$y''(0)$，每一步都用上一步的数值。</p>`,
      solution: R`<p><b>第一步：求 $y(0)$。</b>把 $x=0$ 代入原方程：$e^{y(0)}+0+0-1=0$，所以 $e^{y(0)}=1$，$y(0)=0$。这是后面每一步代值的起点，不能省。</p><p><b>第二步：一阶导数。</b>方程两边对 $x$ 求导，注意 $y$ 是 $x$ 的函数：</p><ul><li>$(e^y)'=e^y\cdot y'$（链式法则，外层 $e^u$，内层 $u=y(x)$）；</li><li>$(6xy)'=6y+6xy'$（乘积法则）；</li><li>$(x^2)'=2x$，$(-1)'=0$。</li></ul><p>得到</p>$$e^y\,y'+6y+6x\,y'+2x=0.\qquad(*)$$<p>代入 $x=0,\ y=0$：$e^0\cdot y'(0)+0+0+0=0$，所以 $y'(0)=0$。</p><p><b>第三步：二阶导数。</b>对 $(*)$ 两边再对 $x$ 求导，逐项计算：</p><ul><li>$(e^y y')'=(e^y)'\,y'+e^y\,y''=e^y(y')^2+e^y\,y''$；</li><li>$(6y)'=6y'$；</li><li>$(6xy')'=6y'+6x\,y''$；</li><li>$(2x)'=2$。</li></ul><p>相加得</p>$$e^y(y')^2+e^y\,y''+12y'+6x\,y''+2=0.$$<p>代入 $x=0,\ y(0)=0,\ y'(0)=0$：$0+y''(0)+0+0+2=0$，所以</p>$$y''(0)=-2.$$`,
      pitfalls: R`<p>① 对 $e^y$ 求导时把 $y$ 当常数，漏乘 $y'$；或对 $6xy$ 求导时只写一项。</p><p>② 不先由原方程求出 $y(0)$，后面 $e^{y(0)}$ 就无从代入。</p><p>③ 先解出 $y'=-\dfrac{6y+2x}{e^y+6x}$，再对这个商求导——方法没错，但运算量大、极易出错。只求某一点的导数值时，"求一次导、代一次值"更稳。</p>`,
      summary: R`<p><b>方法要点：</b>隐函数在一点的高阶导数：① 由原方程求该点的函数值；② 两边求导 → 代值 → 得 $y'$；③ 再求导 → 代值 → 得 $y''$。</p><p><b>看到…想到…：</b>看到"由方程确定 $y=y(x)$，求 $y^{(k)}(x_0)$"，就想到<b>逐次求导、逐次代值</b>，不要去求一般表达式；求导时时刻记住"$y$ 是 $x$ 的函数，对它的复合要乘 $y'$"。</p>`,
      alt: R`<p><b>待定系数（泰勒）法：</b>由 $y(0)=0$，设 $y=bx+ax^2+o(x^2)$，其中 $b=y'(0)$，$a=\dfrac{y''(0)}{2}$。则</p>$$e^y=1+y+\frac{y^2}{2}+o(y^2)=1+bx+\left(a+\frac{b^2}{2}\right)x^2+o(x^2),\qquad 6xy=6bx^2+o(x^2).$$<p>代入原方程：$bx+\left(a+\dfrac{b^2}{2}+6b+1\right)x^2+o(x^2)=0$。恒等于零，各次系数都为零：$b=0$，$a+1=0$。所以 $y'(0)=0$，$y''(0)=2a=-2$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: idiff(exp(y)+6*x*y+x**2-1, y, x, 2) 在 (0,0) 处为 -2，一阶为 0；待定系数解得 y = -x² + 6x³ + …，与 y″(0) = -2 一致' },
      flags: []
    },

    /* ───────────────────────── 一(3) ───────────────────────── */
    {
      id: '2002-1-3', year: 2002, no: '一(3)', type: '填空', score: 3,
      stem: R`微分方程 $yy''+(y')^{2}=0$ 满足初始条件 $y\big|_{x=0}=1,\ y'\big|_{x=0}=\dfrac12$ 的特解是______.`,
      options: null,
      answer: R`$y=\sqrt{x+1}$`,
      figure: null,
      kp: ['ode.reduce', 'ode.basic'],
      methods: ['识别全导数（逆用乘积求导法则）', "可降阶方程 y''=f(y,y') 型：令 y'=p(y)", '边积分边定常数'],
      difficulty: 2,
      analysis: R`<p>方程里不显含自变量 $x$，属于 $y''=f(y,y')$ 型<b>可降阶方程</b>，标准做法是令 $y'=p$ 并把 $p$ 看作 $y$ 的函数。</p><p>但还有更快的观察：$yy''+(y')^2$ 两项系数都是 1，像极了乘积求导的结果。回忆乘积法则 $(uv)'=u'v+uv'$，取 $u=y,\ v=y'$：</p>$$(y\,y')'=y'\cdot y'+y\cdot y''=(y')^2+yy''.$$<p>于是方程就是 $(yy')'=0$——"某个东西的导数为零"，直接积分即可。识别"<b>全导数</b>"是解微分方程的第一性原理：微分方程本质上是"已知导数求原来的函数"，能写成 $(\cdots)'=\cdots$ 的形式就能直接积分。</p>`,
      solution: R`<p><b>第一步：写成全导数。</b>由乘积法则 $(yy')'=(y')^2+yy''$，原方程等价于</p>$$(yy')'=0.$$<p><b>第二步：第一次积分并立即定常数。</b>导数恒为零的函数是常数，所以 $yy'=C_1$。代入 $x=0$：$y(0)\,y'(0)=1\cdot\dfrac12=C_1$，得 $C_1=\dfrac12$，即</p>$$yy'=\frac12.$$<p>及时代入初值可以让后面的积分少带一个常数。</p><p><b>第三步：第二次积分。</b>注意 $yy'=\left(\dfrac{y^2}{2}\right)'$，所以 $\left(\dfrac{y^2}{2}\right)'=\dfrac12$，即 $(y^2)'=1$，积分得</p>$$y^2=x+C_2.$$<p>代入 $x=0,\ y=1$：$C_2=1$，所以 $y^2=x+1$。</p><p><b>第四步：开方并确定符号。</b>$y=\pm\sqrt{x+1}$，由 $y(0)=1>0$ 取正号：$y=\sqrt{x+1}$。</p><p><b>第五步：检验。</b>$y'=\dfrac{1}{2\sqrt{x+1}}$，$y''=-\dfrac{1}{4(x+1)^{3/2}}$。于是 $yy''=-\dfrac1{4(x+1)}$，$(y')^2=\dfrac1{4(x+1)}$，二者之和为 $0$；且 $y'(0)=\dfrac12$。全部满足。</p>`,
      pitfalls: R`<p>① 用 $y'=p$ 降阶时，把 $y''$ 写成 $\dfrac{dp}{dx}$。不显含 $x$ 的方程要把 $p$ 看成 $y$ 的函数：$y''=\dfrac{dp}{dx}=\dfrac{dp}{dy}\cdot\dfrac{dy}{dx}=p\dfrac{dp}{dy}$。</p><p>② 开方时忘记根据初值 $y(0)=1>0$ 选正号，写成 $y=\pm\sqrt{x+1}$。</p><p>③ 用降阶法两边除以 $p$ 时没说明 $p\ne0$。$p\equiv0$ 对应 $y=$ 常数，与 $y'(0)=\dfrac12$ 矛盾，所以可以除。</p>`,
      summary: R`<p><b>可降阶方程三类：</b>$y^{(n)}=f(x)$ 直接积分；$y''=f(x,y')$ 令 $y'=p(x)$，$y''=p'$；$y''=f(y,y')$ 令 $y'=p(y)$，$y''=p\dfrac{dp}{dy}$。</p><p><b>看到…想到…：</b>看到 $yy''+(y')^2$ 想到 $(yy')'$；类似地 $xy''+y'=(xy')'$，$y''+\dfrac{y'}{x}=\dfrac{(xy')'}{x}$。<b>初值问题</b>要"边积分边定常数"，开方时用初值定符号。</p>`,
      alt: R`<p><b>标准降阶法：</b>令 $y'=p(y)$，则 $y''=p\dfrac{dp}{dy}$，方程化为 $yp\dfrac{dp}{dy}+p^2=0$。由于 $p\ne0$，得 $y\dfrac{dp}{dy}=-p$，分离变量 $\dfrac{dp}{p}=-\dfrac{dy}{y}$，积分得 $p=\dfrac{C_1}{y}$。由 $y=1$ 时 $p=\dfrac12$ 得 $C_1=\dfrac12$，即 $y\dfrac{dy}{dx}=\dfrac12$，再分离变量积分得 $y^2=x+1$，取正号 $y=\sqrt{x+1}$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 将 y=sqrt(x+1) 代入 y*y″+(y′)² 化简为 0，且 y(0)=1、y′(0)=1/2' },
      flags: []
    },

    /* ───────────────────────── 二(1) ───────────────────────── */
    {
      id: '2002-2-1', year: 2002, no: '二(1)', type: '选择', score: 3,
      stem: R`考虑二元函数 $f(x,y)$ 的下面 4 条性质：<br>① $f(x,y)$ 在点 $(x_0,y_0)$ 处连续；<br>② $f(x,y)$ 在点 $(x_0,y_0)$ 处的两个偏导数连续；<br>③ $f(x,y)$ 在点 $(x_0,y_0)$ 处可微；<br>④ $f(x,y)$ 在点 $(x_0,y_0)$ 处的两个偏导数存在.<br>若用"$P\Rightarrow Q$"表示可由性质 $P$ 推出性质 $Q$，则有`,
      options: [R`② $\Rightarrow$ ③ $\Rightarrow$ ①`, R`③ $\Rightarrow$ ② $\Rightarrow$ ①`, R`③ $\Rightarrow$ ④ $\Rightarrow$ ①`, R`③ $\Rightarrow$ ① $\Rightarrow$ ④`],
      answer: 'A',
      figure: null,
      kp: ['mdiff.diffable', 'mdiff.limit'],
      methods: ['概念辨析（连续、偏导、可微、偏导连续的关系）', '构造反例'],
      difficulty: 2,
      analysis: R`<p>这是纯概念题，考多元微分学最核心的一张"关系图"：<b>连续、偏导存在、可微、偏导连续</b>四者谁能推出谁。</p><p>做法：先把四者关系默写出来，再逐个选项检查每一个箭头。一个选项里只要有一个箭头不成立，整个选项就错，所以对每个错误箭头只需找<b>一个反例</b>。</p><p>为什么一元的直觉在这里会失效？一元函数"可导 ⇔ 可微 ⇒ 连续"；但二元函数的偏导数只看了过该点的<b>两条坐标轴方向</b>上的函数值，对其他方向一无所知，所以"偏导存在"是非常弱的条件，连连续都保证不了。真正"各个方向都光滑"的是可微。</p>`,
      solution: R`<p><b>第一步：回顾四个定义</b>（记 $\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)$，$\rho=\sqrt{\Delta x^2+\Delta y^2}$）。</p><ul><li><b>连续</b>：$\displaystyle\lim_{(x,y)\to(x_0,y_0)}f(x,y)=f(x_0,y_0)$，要求以<b>任何方式</b>趋近都成立。</li><li><b>偏导存在</b>：$f_x(x_0,y_0)=\displaystyle\lim_{\Delta x\to0}\frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x}$ 存在，$f_y$ 同理——只用到两条坐标轴方向直线上的值。</li><li><b>可微</b>：$\Delta z=A\Delta x+B\Delta y+o(\rho)$，即函数增量在<b>所有方向</b>上都能被一个线性函数（切平面）近似。</li><li><b>偏导连续</b>：$f_x,f_y$ 在该点附近存在，且在该点连续。</li></ul><p><b>第二步：四者关系</b>（教材定理）。</p>$$\text{②偏导连续}\ \Rightarrow\ \text{③可微}\ \Rightarrow\ \begin{cases}\text{①连续}\\ \text{④偏导存在}\end{cases}$$<ul><li>②⇒③：可微的<b>充分条件</b>定理（证明用两次一元拉格朗日中值定理）。</li><li>③⇒①：$\Delta z=A\Delta x+B\Delta y+o(\rho)\to0$。</li><li>③⇒④：可微的<b>必要条件</b>，在定义中令 $\Delta y=0$ 即得 $f_x=A$，同理 $f_y=B$。</li><li>其余箭头（包括所有反向箭头、①与④之间）<b>都不成立</b>。</li></ul><p><b>第三步：逐项检查。</b></p><p><b>(A)</b> ②⇒③（充分条件定理）、③⇒①（可微必连续），两个箭头都成立。<b>正确。</b></p><p><b>(B)</b> ③⇒② 不成立。反例：$f(x,y)=(x^2+y^2)\sin\dfrac{1}{x^2+y^2}$，$f(0,0)=0$。因为 $|f|\le\rho^2=o(\rho)$，所以 $\Delta z=0\cdot\Delta x+0\cdot\Delta y+o(\rho)$，在原点可微。但在 $(x,y)\ne(0,0)$ 处 $f_x=2x\sin\dfrac{1}{x^2+y^2}-\dfrac{2x}{x^2+y^2}\cos\dfrac1{x^2+y^2}$，沿 $x$ 轴 $f_x(x,0)=2x\sin\dfrac1{x^2}-\dfrac2x\cos\dfrac1{x^2}$，第二项在 $x\to0$ 时无界振荡，$f_x$ 在原点不连续。</p><p><b>(C)</b> ④⇒① 不成立。反例：$f(x,y)=\dfrac{xy}{x^2+y^2}$，$f(0,0)=0$。因为 $f(x,0)\equiv0$、$f(0,y)\equiv0$，所以 $f_x(0,0)=f_y(0,0)=0$ 存在；但沿 $y=x$ 趋近时 $f=\dfrac12\ne f(0,0)$，不连续。</p><p><b>(D)</b> ①⇒④ 不成立。反例：圆锥 $f(x,y)=\sqrt{x^2+y^2}$ 处处连续，但 $f(x,0)=|x|$ 在 $x=0$ 处左导数 $-1$、右导数 $1$，$f_x(0,0)$ 不存在。</p><p>所以选 <b>A</b>。</p>`,
      pitfalls: R`<p>① 把一元函数"可导 ⇒ 连续"照搬成"偏导存在 ⇒ 连续"，错选 C。二元函数的偏导存在与连续<b>互不推出</b>。</p><p>② 把"偏导连续 ⇒ 可微"当成充要条件，以为可微也能推出偏导连续，错选 B。</p><p>③ 以为连续函数一定有偏导数，错选 D；圆锥顶点就是反例。</p>`,
      summary: R`<p><b>记住一条链：</b>偏导连续 ⇒ 可微 ⇒ {连续，偏导存在}，其余箭头全部不成立。</p><p><b>记住三个标准反例：</b>圆锥 $\sqrt{x^2+y^2}$（连续但偏导不存在）；$\dfrac{xy}{x^2+y^2}$（偏导存在但不连续）；$\rho^2\sin\dfrac1{\rho^2}$（可微但偏导不连续）。</p><p><b>看到…想到…：</b>看到"几条性质之间的推出关系"，先画关系图再对照选项；对每个可疑箭头，从三个标准反例里挑一个去否定它。</p>`,
      verify: { by: 'mixed', ok: true, note: 'sympy 核对三个反例：xy/(x²+y²) 沿 y=x 极限 1/2、沿 x 轴 0；(x²+y²)sin(1/(x²+y²)) 在原点差商极限 0（可微），f_x(x,0) 含 -(2/x)cos(1/x²) 无极限；√(x²+y²) 沿 x 轴左右导数 -1 与 1。推出关系为教材定理' },
      flags: ['OCR 丢失了性质①②的文字（只剩残缺的 f(x,y)、(x0,y0) 公式碎片），根据原卷与参考解析补全为"① 在点 (x0,y0) 处连续；② 在点 (x0,y0) 处的两个偏导数连续"', 'OCR 把③④前的圈号放进了公式里，已移出公式']
    },

    /* ───────────────────────── 二(2) ───────────────────────── */
    {
      id: '2002-2-2', year: 2002, no: '二(2)', type: '选择', score: 3,
      stem: R`设 $u_n\neq0\ (n=1,2,3,\cdots)$，且 $\displaystyle\lim_{n\to\infty}\frac{n}{u_n}=1$，则级数 $\displaystyle\sum_{n=1}^{\infty}(-1)^{n+1}\left(\frac{1}{u_n}+\frac{1}{u_{n+1}}\right)$`,
      options: [R`发散.`, R`绝对收敛.`, R`条件收敛.`, R`收敛性根据所给条件不能判定.`],
      answer: 'C',
      figure: null,
      kp: ['series.alt', 'series.positive', 'series.concept'],
      methods: ['部分和（裂项相消）', '比较判别法的极限形式', '绝对收敛与条件收敛的判定'],
      difficulty: 3,
      analysis: R`<p>判断任意项级数要回答两个问题：<b>① 原级数收不收敛；② 绝对值级数收不收敛。</b></p><p>条件 $\dfrac{n}{u_n}\to1$ 说明 $\dfrac1{u_n}$ 与 $\dfrac1n$ 等价，所以通项的大小像 $\dfrac2n$——绝对值级数像调和级数，大概率发散。</p><p>原级数是交错级数，第一反应是莱布尼茨判别法，但它要求 $\dfrac1{u_n}+\dfrac1{u_{n+1}}$ <b>单调递减</b>，题目根本没给单调性，<b>用不了</b>！这时要退回到收敛的定义——部分和数列有极限（这就是第一性原理）。注意通项是"相邻两项之和"再加交错符号，写出部分和会发现中间项一正一负<b>相互抵消</b>（裂项相消），这是本题的突破口。</p>`,
      solution: R`<p>记 $a_n=\dfrac1{u_n}$。</p><p><b>第一步：从条件读出信息。</b>$a_n=\dfrac{n}{u_n}\cdot\dfrac1n\to1\cdot0=0$。又由极限保号性，$n$ 充分大时 $\dfrac{n}{u_n}>\dfrac12>0$，所以 $u_n>0$，即 $a_n>0$。</p><p><b>第二步：写出部分和。</b></p>$$S_n=(a_1+a_2)-(a_2+a_3)+(a_3+a_4)-\cdots+(-1)^{n+1}(a_n+a_{n+1}).$$<p>对 $2\le k\le n$，$a_k$ 在第 $k-1$ 项里带符号 $(-1)^{k}$，在第 $k$ 项里带符号 $(-1)^{k+1}$，正好抵消。只剩首尾：</p>$$S_n=a_1+(-1)^{n+1}a_{n+1}.$$<p><b>第三步：求部分和的极限。</b>$a_{n+1}\to0$，所以 $S_n\to a_1=\dfrac1{u_1}$。级数<b>收敛</b>，和为 $\dfrac{1}{u_1}$。排除 A、D。</p><p><b>第四步：考察绝对值级数。</b>$n$ 充分大时 $a_n,a_{n+1}>0$，$\left|(-1)^{n+1}(a_n+a_{n+1})\right|=a_n+a_{n+1}$。与 $\dfrac1n$ 比较：</p>$$\lim_{n\to\infty}\frac{a_n+a_{n+1}}{1/n}=\lim_{n\to\infty}\left(\frac{n}{u_n}+\frac{n}{n+1}\cdot\frac{n+1}{u_{n+1}}\right)=1+1\cdot1=2.$$<p>由比较判别法的极限形式（极限 $2\in(0,+\infty)$），$\sum(a_n+a_{n+1})$ 与调和级数 $\sum\dfrac1n$ 同敛散，<b>发散</b>。所以不是绝对收敛，排除 B。</p><p><b>结论：</b>级数收敛但不绝对收敛，即<b>条件收敛</b>，选 <b>C</b>。</p><p>例：取 $u_n=n$，级数 $\sum(-1)^{n+1}\left(\dfrac1n+\dfrac1{n+1}\right)$ 的和为 $\dfrac1{u_1}=1$，而 $\sum\left(\dfrac1n+\dfrac1{n+1}\right)$ 发散。</p>`,
      pitfalls: R`<p>① 直接套莱布尼茨判别法：题目没给 $\dfrac1{u_n}$ 单调，条件无法验证，这样做不严谨。</p><p>② 把级数拆成 $\sum(-1)^{n+1}\dfrac1{u_n}+\sum(-1)^{n+1}\dfrac1{u_{n+1}}$ 分别讨论：两部分各自的敛散性同样不知道（也缺单调性），拆开相加只有在两部分都收敛时才合法。</p><p>③ 觉得"条件太少"而选 D。其实裂项相消让部分和有明确的公式，条件完全够用。</p><p>④ 去绝对值时没注意 $u_n$ 最终为正。也可以不去绝对值，直接用 $n\left|a_n+a_{n+1}\right|\to2$。</p>`,
      summary: R`<p><b>任意项级数判别顺序：</b>先看绝对值级数（比较、比值、根值）；若发散，再看原级数（莱布尼茨、部分和、拆成已知级数）。</p><p><b>看到…想到…：</b>看到通项是"相邻两项的和或差"（如 $a_n\pm a_{n+1}$），想到写部分和、<b>裂项相消</b>；看到 $\lim\dfrac{n}{u_n}=1$，想到 $\dfrac1{u_n}\sim\dfrac1n$，与调和级数比较。</p><p><b>原则：</b>判别法的条件不满足时，回到定义"部分和有极限"。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 符号验证 n=8 时部分和恒等式 S_n = a_1 + (-1)^(n+1) a_(n+1)；取 u_n=n 时级数和为 1；lim (1/n+1/(n+1))/(1/n) = 2' },
      flags: []
    },

    /* ───────────────────────── 二(3) ───────────────────────── */
    {
      id: '2002-2-3', year: 2002, no: '二(3)', type: '选择', score: 3,
      stem: R`设函数 $y=f(x)$ 在 $(0,+\infty)$ 内有界且可导，则`,
      options: [
        R`当 $\displaystyle\lim_{x\to+\infty}f(x)=0$ 时，必有 $\displaystyle\lim_{x\to+\infty}f'(x)=0$.`,
        R`当 $\displaystyle\lim_{x\to+\infty}f'(x)$ 存在时，必有 $\displaystyle\lim_{x\to+\infty}f'(x)=0$.`,
        R`当 $\displaystyle\lim_{x\to0^{+}}f(x)=0$ 时，必有 $\displaystyle\lim_{x\to0^{+}}f'(x)=0$.`,
        R`当 $\displaystyle\lim_{x\to0^{+}}f'(x)$ 存在时，必有 $\displaystyle\lim_{x\to0^{+}}f'(x)=0$.`
      ],
      answer: 'B',
      figure: null,
      kp: ['diff.mvt', 'lim.funcdef'],
      methods: ['拉格朗日中值定理', '反证法', '极限的保号性', '构造反例'],
      difficulty: 3,
      analysis: R`<p>四个选项都在问：<b>由函数（或导数）的性质能否推出导数的极限为 0</b>。</p><p>先建立直觉：导数描述的是"变化有多快"。函数值很小不代表变化慢——一条振幅越来越小、但振动越来越快的曲线，函数值趋于 0，斜率却在剧烈摆动。所以 A、C 这种"$f\to0\Rightarrow f'\to0$"的说法很可疑，用<b>振荡函数</b>找反例。</p><p>B、D 结构相同，区别只在 $x\to+\infty$ 还是 $x\to0^+$。在无穷远处，如果斜率始终保持在某个正数以上，函数要沿着这个坡度走无穷远，必然无界——与"有界"矛盾；而在 $0$ 附近只是一小段有限区间，斜率不为零也不会让函数无界。联系"导数"与"函数值"的桥梁是<b>拉格朗日中值定理</b>，所以 B 用"反证法 + 中值定理"证明。</p>`,
      solution: R`<p><b>第一步：证明 B 正确。</b>设 $\displaystyle\lim_{x\to+\infty}f'(x)=A$，反设 $A\ne0$，不妨设 $A>0$（$A\lt 0$ 时对 $-f$ 讨论）。</p><p>由极限的保号性（取 $\varepsilon=\dfrac A2$），存在 $X>0$，当 $x>X$ 时 $f'(x)>\dfrac A2$。</p><p>任取 $x>X$。$f$ 在 $(0,+\infty)$ 内可导，所以在 $[X,x]$ 上连续、在 $(X,x)$ 内可导，由拉格朗日中值定理，存在 $\xi\in(X,x)$ 使</p>$$f(x)-f(X)=f'(\xi)(x-X)>\frac A2(x-X).$$<p>于是 $f(x)>f(X)+\dfrac A2(x-X)\to+\infty\ (x\to+\infty)$，$f$ 在 $(0,+\infty)$ 内无界，与题设矛盾。故 $A=0$。</p><p><b>第二步：A 错误。</b>反例 $f(x)=\dfrac{\sin x^2}{x}$。由 $|\sin x^2|\le x^2$ 且 $|\sin x^2|\le1$，得 $|f(x)|\le\min\left\{x,\dfrac1x\right\}\le1$，有界、可导，且 $\displaystyle\lim_{x\to+\infty}f(x)=0$。但</p>$$f'(x)=2\cos x^2-\frac{\sin x^2}{x^2},$$<p>第二项趋于 0，而 $2\cos x^2$ 在 $x\to+\infty$ 时无限振荡：取 $x_k=\sqrt{2k\pi}$ 得 $f'(x_k)\to2$，取 $x_k=\sqrt{(2k+1)\pi}$ 得 $f'(x_k)\to-2$，所以 $\displaystyle\lim_{x\to+\infty}f'(x)$ 不存在。</p><p><b>第三步：C、D 错误。</b>反例 $f(x)=\sin x$：在 $(0,+\infty)$ 内 $|\sin x|\le1$ 有界且可导，$\displaystyle\lim_{x\to0^+}\sin x=0$，$\displaystyle\lim_{x\to0^+}f'(x)=\lim_{x\to0^+}\cos x=1$ 存在但不为 0。这一个例子同时推翻了 C 和 D。</p><p>所以选 <b>B</b>。</p>`,
      pitfalls: R`<p>① 误以为"函数趋于常数，导数就趋于 0"而选 A。正确的说法是：若 $\lim\limits_{x\to+\infty}f(x)$ 存在<b>且</b> $\lim\limits_{x\to+\infty}f'(x)$ 也存在，则后者为 0。</p><p>② 看不出 B 与 D 的本质区别：无穷区间上"斜率不为零"会累积成无界，有限端点处不会。</p><p>③ 证明 B 时写"$f'(x)\to A>0$，所以 $f$ 单调增加趋于无穷"——单调增加并不意味着趋于无穷（如 $\arctan x$），必须用中值定理得到<b>线性下界</b> $f(X)+\dfrac A2(x-X)$。</p>`,
      summary: R`<p><b>方法要点：</b>"函数性质 ⇒ 导数性质"一般不成立，反例是"小振幅、高频振荡"的 $\dfrac{\sin x^2}{x}$ 型；"导数性质 ⇒ 函数性质"用拉格朗日中值定理 $f(x)-f(X)=f'(\xi)(x-X)$ 把导数信息转成函数信息。</p><p><b>看到…想到…：</b>看到"有界 + 导数的极限 + $x\to+\infty$"，想到"导数极限若不为 0，函数至少线性增长，与有界矛盾"。</p><p><b>值得记住的结论：</b>$f$ 在 $[a,+\infty)$ 上有界、可导，且 $\lim\limits_{x\to+\infty}f'(x)$ 存在，则此极限必为 $0$。</p>`,
      alt: R`<p><b>B 的另一种证法（倍长区间）：</b>设 $\lim\limits_{x\to+\infty}f'(x)=A$。对任意 $x>0$，在 $[x,2x]$ 上用拉格朗日中值定理：存在 $\xi_x\in(x,2x)$，使</p>$$f'(\xi_x)=\frac{f(2x)-f(x)}{x}.$$<p>右边分子有界（$|f|\le M$ 则分子绝对值不超过 $2M$），分母趋于 $+\infty$，所以右边 $\to0$；而 $\xi_x>x\to+\infty$，左边 $\to A$。因此 $A=0$。</p>`,
      verify: { by: 'mixed', ok: true, note: 'sympy: sin(x²)/x 在 +∞ 处极限为 0，导数为 2cos(x²) - sin(x²)/x²（无极限）；sin x 在 0⁺ 处导数极限为 1。B 的结论用中值定理手工证明' },
      flags: []
    },

    /* ───────────────────────── 三 ───────────────────────── */
    {
      id: '2002-3', year: 2002, no: '三', type: '解答', score: 6,
      stem: R`设函数 $f(x)$ 在 $x=0$ 的某邻域内具有一阶连续导数，且 $f(0)\neq0,\ f'(0)\neq0$，若 $af(h)+bf(2h)-f(0)$ 在 $h\to0$ 时是比 $h$ 高阶的无穷小，试确定 $a,b$ 的值.`,
      options: null,
      answer: R`$a=2,\ b=-1$`,
      figure: null,
      kp: ['lim.inf', 'diff.def', 'lim.compute'],
      methods: ['高阶无穷小的定义', '"分母趋于零则分子趋于零"', '导数定义', '一阶泰勒公式', '洛必达法则'],
      difficulty: 2,
      analysis: R`<p>第一步永远是<b>翻译</b>："$af(h)+bf(2h)-f(0)$ 是比 $h$ 高阶的无穷小"就是</p>$$\lim_{h\to0}\frac{af(h)+bf(2h)-f(0)}{h}=0.$$<p>这个条件里藏着两层信息：（1）分子本身是无穷小（趋于 0）——这是"零阶"信息，给出一个方程；（2）分子除以 $h$ 后仍趋于 0——这是"一阶"信息，给出第二个方程。两个未知数，正好两个方程。</p><p>更本质的看法（第一性原理）：$h$ 很小时 $f(h)\approx f(0)+f'(0)h$，把分子展开成"常数项 + $h$ 的一次项 + $o(h)$"，要它是 $o(h)$，就是常数项和一次项系数都为 0。题目给 $f(0)\ne0,\ f'(0)\ne0$，正是为了能把这两个系数约掉，得到关于 $a,b$ 的方程。</p>`,
      solution: R`<p><b>第一步：翻译条件。</b>由高阶无穷小的定义，</p>$$\lim_{h\to0}\frac{af(h)+bf(2h)-f(0)}{h}=0.\qquad(1)$$<p><b>第二步：零阶条件——分子必须趋于 0。</b>分母 $h\to0$，而比值的极限存在（等于 0），所以分子也必须趋于 0：分子 $=\dfrac{\text{分子}}{h}\cdot h\to0\cdot0=0$。$f$ 可导，故在 $0$ 处连续，于是</p>$$\lim_{h\to0}\left[af(h)+bf(2h)-f(0)\right]=(a+b-1)f(0)=0.$$<p>因为 $f(0)\ne0$，得</p>$$a+b=1.\qquad(2)$$<p><b>第三步：一阶条件——凑出导数定义。</b>利用 (2)，把 $f(0)$ 写成 $(a+b)f(0)$，分子化为</p>$$af(h)+bf(2h)-(a+b)f(0)=a\left[f(h)-f(0)\right]+b\left[f(2h)-f(0)\right].$$<p>除以 $h$，并把第二项凑成以 $2h$ 为增量的差商：</p>$$\frac{\text{分子}}{h}=a\cdot\frac{f(h)-f(0)}{h}+2b\cdot\frac{f(2h)-f(0)}{2h}.$$<p>$h\to0$ 时 $2h\to0$，由导数定义两个差商都趋于 $f'(0)$，所以</p>$$\lim_{h\to0}\frac{\text{分子}}{h}=(a+2b)f'(0).$$<p>由 (1) 它等于 0，又 $f'(0)\ne0$，得</p>$$a+2b=0.\qquad(3)$$<p><b>第四步：解方程组。</b>(3) 减 (2)：$b=-1$；代回 (2)：$a=2$。</p><p><b>第五步：检验。</b>$2f(h)-f(2h)-f(0)=2[f(0)+f'(0)h+o(h)]-[f(0)+2f'(0)h+o(h)]-f(0)=o(h)$，确实是比 $h$ 高阶的无穷小。</p><p>所以 $a=2,\ b=-1$。</p>`,
      pitfalls: R`<p>① 漏掉零阶条件，只用洛必达法则得到 $a+2b=0$ 一个方程，解不出两个未知数。</p><p>② 在确认分子趋于 0 之前就用洛必达法则。洛必达法则要求 $\dfrac00$ 型，必须先有 $a+b=1$。</p><p>③ $f(2h)$ 求导或展开时漏掉因子 2（$[f(2h)]'=2f'(2h)$，$f(2h)=f(0)+2f'(0)h+o(h)$）。</p><p>④ 用洛必达后写 $\lim\limits_{h\to0}[af'(h)+2bf'(2h)]=(a+2b)f'(0)$，这一步需要 $f'$ 在 0 处连续——题目说"具有一阶连续导数"正是为此；用导数定义的做法则不需要这个条件。</p>`,
      summary: R`<p><b>方法要点：</b>"$A(h)$ 是比 $h^k$ 高阶的无穷小" ⇔ $A(h)$ 展开式中 $h^0,h^1,\cdots,h^k$ 的系数全为 0。</p><p><b>已知极限反求参数的通用套路：</b>先用"分母趋于 0 且极限存在 ⇒ 分子趋于 0"得到第一个方程；再用导数定义、洛必达或泰勒得到下一个方程。</p><p><b>看到…想到…：</b>看到 $f(h)$、$f(2h)$、$f(0)$ 这样的组合，想到凑导数定义或写一阶泰勒公式 $f(kh)=f(0)+kf'(0)h+o(h)$。</p>`,
      alt: R`<p><b>泰勒公式法（最直接）：</b>由 $f$ 在 0 处可导，$f(h)=f(0)+f'(0)h+o(h)$，$f(2h)=f(0)+2f'(0)h+o(h)$，所以</p>$$af(h)+bf(2h)-f(0)=(a+b-1)f(0)+(a+2b)f'(0)\,h+o(h).$$<p>它是 $o(h)$ 当且仅当 $(a+b-1)f(0)=0$ 且 $(a+2b)f'(0)=0$。由 $f(0)\ne0,\ f'(0)\ne0$ 得 $a+b=1,\ a+2b=0$，解得 $a=2,\ b=-1$。</p><p><b>洛必达法：</b>先由零阶条件得 $a+b=1$，此时 (1) 为 $\dfrac00$ 型，由洛必达法则与 $f'$ 的连续性，$\lim\limits_{h\to0}[af'(h)+2bf'(2h)]=(a+2b)f'(0)=0$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 对 f(kh)=f0+f1·kh+f2·k²h² 展开后令 h⁰、h¹ 系数为 0，解得 a=2, b=-1；取 f(x)=e^x+2x 检验 2f(h)-f(2h)-f(0) = -h² + O(h³)' },
      flags: []
    },

    /* ───────────────────────── 四 ───────────────────────── */
    {
      id: '2002-4', year: 2002, no: '四', type: '解答', score: 7,
      stem: R`已知两曲线 $y=f(x)$ 与 $y=\displaystyle\int_{0}^{\arctan x}e^{-t^{2}}\,dt$ 在点 $(0,0)$ 处的切线相同，写出此切线方程，并求极限 $\displaystyle\lim_{n\to\infty}nf\left(\frac{2}{n}\right)$.`,
      options: null,
      answer: R`切线方程为 $y=x$；$\displaystyle\lim_{n\to\infty}nf\left(\frac{2}{n}\right)=2$.`,
      figure: null,
      kp: ['diff.def', 'int.ftc', 'lim.seqcalc'],
      methods: ['变限积分求导', '切线方程', '凑导数定义', '海涅定理（函数极限与数列极限）'],
      difficulty: 2,
      analysis: R`<p>两问由"切线相同"串起来。</p><p><b>"两曲线在某点切线相同"</b>翻译成数学语言就是两件事：都过这一点（函数值相等）；在这一点的斜率相同（导数相等）。第二条曲线是变上限积分，上限是 $\arctan x$（复合函数），用变限积分求导公式即可求出斜率。</p><p><b>第二问</b>：$n\to\infty$ 时 $\dfrac2n\to0$，而 $f(0)=0$，所以 $nf\left(\dfrac2n\right)$ 是"$\infty\cdot0$"型。关于 $f$，我们只知道 $f(0)$ 和 $f'(0)$，连表达式都没有，所以唯一能用的工具就是<b>导数定义</b>——把 $nf\left(\dfrac2n\right)$ 改写成差商 $\dfrac{f(2/n)-f(0)}{2/n}$ 的样子。</p>`,
      solution: R`<p><b>第一步：求第二条曲线在原点的斜率。</b>记 $g(x)=\displaystyle\int_0^{\arctan x}e^{-t^2}\,dt$。先验证它过原点：$g(0)=\displaystyle\int_0^{0}e^{-t^2}dt=0$。由变限积分求导公式（被积函数在上限处的值 × 上限的导数）：</p>$$g'(x)=e^{-(\arctan x)^2}\cdot(\arctan x)'=\frac{e^{-\arctan^2x}}{1+x^2},\qquad g'(0)=\frac{e^0}{1}=1.$$<p><b>第二步：写切线方程。</b>切点 $(0,0)$，斜率 $1$，切线为 $y-0=1\cdot(x-0)$，即</p>$$y=x.$$<p><b>第三步：把"切线相同"翻译到 $f$ 上。</b>曲线 $y=f(x)$ 过 $(0,0)$，所以 $f(0)=0$；它在该点的切线斜率也是 1，所以 $f'(0)=1$。</p><p><b>第四步：凑导数定义。</b></p>$$nf\left(\frac2n\right)=2\cdot\frac{f\left(\frac2n\right)}{\frac2n}=2\cdot\frac{f\left(\frac2n\right)-f(0)}{\frac2n-0}.$$<p>这里补上 $-f(0)$（它等于 0）就是为了凑成差商的形状。</p><p><b>第五步：取极限。</b>令 $h_n=\dfrac2n$，则 $h_n\to0$ 且 $h_n\ne0$。由于函数极限 $\displaystyle\lim_{h\to0}\frac{f(h)-f(0)}{h}=f'(0)=1$ 存在，由海涅定理（函数极限存在，则沿任何趋于该点的数列取值，极限也存在且相等），</p>$$\lim_{n\to\infty}\frac{f(h_n)-f(0)}{h_n}=1.$$<p>所以</p>$$\lim_{n\to\infty}nf\left(\frac2n\right)=2\times1=2.$$`,
      pitfalls: R`<p>① 对数列直接用洛必达法则。$n$ 是离散变量，不能对 $n$ 求导；而且题目只告诉 $f$ 在 0 点可导，没说 $f'$ 连续，即使化成函数极限也不能用洛必达。</p><p>② 变限积分求导忘乘 $(\arctan x)'=\dfrac1{1+x^2}$。本题在 $x=0$ 处它恰好等于 1，侥幸不影响结果，但这种习惯在别的题里一定出错。</p><p>③ 忘了 $f(0)=0$ 也是"切线相同"给出的（切点在曲线上）；没有它就凑不出差商。</p><p>④ 结果写成 1，漏了提出来的系数 2。</p>`,
      summary: R`<p><b>方法要点：</b>"两曲线在某点相切 / 切线相同" ⇔ 该点函数值相等且导数相等。变上限积分 $\displaystyle\int_a^{\varphi(x)}f(t)dt$ 的导数为 $f(\varphi(x))\varphi'(x)$。</p><p><b>看到…想到…：</b>看到"只知道某点的导数值，却要求含 $f$ 的极限"，就凑导数定义 $\displaystyle\lim_{\square\to0}\frac{f(x_0+\square)-f(x_0)}{\square}=f'(x_0)$，其中 $\square$ 可以是任何趋于 0 的量（这里是 $\dfrac2n$）。数列极限与函数极限之间用<b>海涅定理</b>转换。</p>`,
      alt: R`<p><b>等价无穷小视角：</b>由 $f(0)=0,\ f'(0)=1$ 得 $f(x)=x+o(x)$，即 $x\to0$ 时 $f(x)\sim x$。所以</p>$$nf\left(\frac2n\right)=n\left[\frac2n+o\left(\frac1n\right)\right]=2+n\cdot o\left(\frac1n\right)\to2.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy: g(0)=0，g′(0)=1；取 f=g（即 √π/2·erf(arctan x)）验证 lim n·f(2/n) = 2' },
      flags: []
    },

    /* ───────────────────────── 五 ───────────────────────── */
    {
      id: '2002-5', year: 2002, no: '五', type: '解答', score: 7,
      stem: R`计算二重积分 $\displaystyle\iint_{D}e^{\max\{x^{2},y^{2}\}}\,dx\,dy$，其中 $D=\{(x,y)\mid 0\leqslant x\leqslant1,\ 0\leqslant y\leqslant1\}$.`,
      options: null,
      answer: R`$e-1$`,
      figure: null,
      kp: ['mint.double'],
      methods: ['分区域积分（去掉 max）', '选择积分次序', '轮换对称性'],
      difficulty: 2,
      analysis: R`<p>本题有两个关键点。</p><p><b>关键一：被积函数含 $\max\{x^2,y^2\}$。</b>max 本质上是分段函数——哪个大取哪个。处理 max、min、绝对值的统一思路是：<b>找分界线，把区域切开，使每一块上表达式唯一确定</b>。在 $x,y\ge0$ 时 $x^2\ge y^2\iff x\ge y$，所以分界线是对角线 $y=x$。</p><p><b>关键二：$e^{x^2}$ 的原函数不是初等函数</b>，$\displaystyle\int e^{x^2}dx$ 写不出来！所以积分次序不能随便选：在 $e^{x^2}$ 所在的那一块上必须<b>先对 $y$ 积分</b>，内层积分会产生一个因子 $x$，变成可以凑微分的 $xe^{x^2}$。</p>`,
      solution: R`<p><b>第一步：用 $y=x$ 去掉 max。</b>把 $D$ 分成</p><ul><li>$D_1=\{(x,y)\mid 0\le y\le x\le1\}$（对角线下方）：这里 $x\ge y\ge0$，所以 $x^2\ge y^2$，$\max\{x^2,y^2\}=x^2$；</li><li>$D_2=\{(x,y)\mid 0\le x\le y\le1\}$（对角线上方）：$\max\{x^2,y^2\}=y^2$。</li></ul><p>分界线 $y=x$ 本身面积为零，不影响积分值。</p><svg viewBox="0 0 220 215" width="220" height="215" style="max-width:100%;height:auto"><polygon points="30,190 190,190 190,30" fill="currentColor" fill-opacity="0.12" stroke="none"/><line x1="15" y1="190" x2="210" y2="190" stroke="currentColor" stroke-width="1"/><line x1="30" y1="205" x2="30" y2="12" stroke="currentColor" stroke-width="1"/><rect x="30" y="30" width="160" height="160" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="190" x2="190" y2="30" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5,4"/><text x="98" y="168" font-size="13" fill="currentColor">D₁: max = x²</text><text x="40" y="78" font-size="13" fill="currentColor">D₂: max = y²</text><text x="156" y="82" font-size="12" fill="currentColor">y = x</text><text x="18" y="204" font-size="12" fill="currentColor">O</text><text x="186" y="205" font-size="12" fill="currentColor">1</text><text x="18" y="35" font-size="12" fill="currentColor">1</text><text x="203" y="205" font-size="12" fill="currentColor">x</text><text x="36" y="18" font-size="12" fill="currentColor">y</text></svg><p><small>图：正方形被对角线 $y=x$ 分成两个三角形，阴影部分为 $D_1$。</small></p><p>于是</p>$$\iint_De^{\max\{x^2,y^2\}}dxdy=\iint_{D_1}e^{x^2}dxdy+\iint_{D_2}e^{y^2}dxdy.$$<p><b>第二步：$D_1$ 上先对 $y$ 积分。</b>$D_1$ 写成 X 型区域：$0\le x\le1,\ 0\le y\le x$。内层对 $y$ 积分时 $e^{x^2}$ 是常数：</p>$$\iint_{D_1}e^{x^2}dxdy=\int_0^1e^{x^2}\left(\int_0^x dy\right)dx=\int_0^1xe^{x^2}dx.$$<p>再凑微分 $x\,dx=\dfrac12d(x^2)$：</p>$$\int_0^1xe^{x^2}dx=\frac12\int_0^1e^{x^2}d(x^2)=\frac12\Big[e^{x^2}\Big]_0^1=\frac{e-1}{2}.$$<p><b>第三步：$D_2$ 用对称性。</b>把 $x,y$ 互换，$D_2$ 恰好变成 $D_1$，被积函数 $e^{y^2}$ 变成 $e^{x^2}$，积分值不变（积分值与积分变量用什么字母无关），所以</p>$$\iint_{D_2}e^{y^2}dxdy=\iint_{D_1}e^{x^2}dxdy=\frac{e-1}{2}.$$<p>（也可以直接算：$D_2$ 写成 Y 型 $0\le y\le1,\ 0\le x\le y$，$\displaystyle\int_0^1e^{y^2}dy\int_0^ydx=\int_0^1ye^{y^2}dy=\frac{e-1}2$。）</p><p><b>第四步：相加。</b></p>$$\iint_De^{\max\{x^2,y^2\}}dxdy=\frac{e-1}2+\frac{e-1}2=e-1.$$`,
      pitfalls: R`<p>① 在 $D_1$ 上先对 $x$ 积分：$\displaystyle\int_0^1dy\int_y^1e^{x^2}dx$，内层积分写不出初等原函数，直接卡死。</p><p>② 分区域时把 max 取反（在对角线下方取了 $y^2$）。可以用一个具体点检验：$(1,0)$ 在 $D_1$ 里，$\max\{1,0\}=1=x^2$。</p><p>③ 以为 $\max\{x^2,y^2\}$ 总等于 $(\max\{x,y\})^2$。这只在 $x,y\ge0$ 时成立；若区域含负值（如 $x=-2,\ y=1$）就不对了，分界线会变成 $y=\pm x$。</p>`,
      summary: R`<p><b>方法要点：</b>被积函数含 max、min、绝对值、符号函数、取整函数时，先找分界线分块，再逐块积分。</p><p><b>看到…想到…：</b>看到 $e^{x^2}$、$e^{-x^2}$、$\sin x^2$、$\dfrac{\sin x}{x}$、$\dfrac1{\ln x}$ 等"积不出来"的函数，立刻检查积分次序：让这个函数的变量放在<b>外层</b>，内层先积另一个变量，往往会产生可凑微分的因子。区域关于 $y=x$ 对称、被积函数交换 $x,y$ 后对应时，用轮换对称性只算一半。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 分块累次积分结果 E - 1；mpmath 对原被积函数做二重数值积分得 1.71827，与 e-1 一致' },
      flags: []
    },

    /* ───────────────────────── 六 ───────────────────────── */
    {
      id: '2002-6', year: 2002, no: '六', type: '解答', score: 8,
      stem: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 内具有一阶连续导数，$L$ 是上半平面 $(y>0)$ 内的有向分段光滑曲线，其起点为 $(a,b)$，终点为 $(c,d)$. 记$$I=\int_{L}\frac{1}{y}\left[1+y^{2}f(xy)\right]dx+\frac{x}{y^{2}}\left[y^{2}f(xy)-1\right]dy.$$(1) 证明曲线积分 $I$ 与路径 $L$ 无关；<br>(2) 当 $ab=cd$ 时，求 $I$ 的值.`,
      options: null,
      answer: R`(1) 在单连通区域 $y>0$ 内 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}=f(xy)+xyf'(xy)-\dfrac{1}{y^2}$，故积分与路径无关；(2) $I=\dfrac{c}{d}-\dfrac{a}{b}$.`,
      figure: null,
      kp: ['mint.line2'],
      methods: ['平面曲线积分与路径无关的判定', '凑全微分求原函数', '选取折线路径积分'],
      difficulty: 3,
      analysis: R`<p><b>第 (1) 问</b>直接用定理：设 $G$ 是<b>单连通</b>区域，$P,Q$ 在 $G$ 内具有一阶连续偏导数，则 $\displaystyle\int_LP\,dx+Q\,dy$ 在 $G$ 内与路径无关 $\iff$ 在 $G$ 内 $\dfrac{\partial Q}{\partial x}\equiv\dfrac{\partial P}{\partial y}$。所以只要算两个偏导数比较。</p><p>为什么题目强调"上半平面"？被积式中有 $\dfrac1y$，在 $x$ 轴上没有定义，区域必须避开 $y=0$；上半平面没有"洞"，是单连通的，定理才能用。</p><p><b>第 (2) 问</b>：与路径无关意味着积分值只依赖起点和终点，就像物理里"保守力做功 = 势能差"。最好的办法是找<b>原函数（势函数）</b> $u$，使 $du=P\,dx+Q\,dy$，则 $I=u(\text{终点})-u(\text{起点})$。$f$ 是抽象函数，算不出具体积分，所以要把被积式拆开，认出 $d\left(\dfrac xy\right)$ 和 $f(xy)\,d(xy)$ 两块；条件 $ab=cd$ 正是为了让含 $f$ 的部分抵消。</p>`,
      solution: R`<p><b>第一步：写出 $P,Q$ 并展开。</b></p>$$P=\frac1y\left[1+y^2f(xy)\right]=\frac1y+yf(xy),\qquad Q=\frac{x}{y^2}\left[y^2f(xy)-1\right]=xf(xy)-\frac{x}{y^2}.$$<p><b>第二步：求偏导数。</b>$f(xy)$ 是复合函数，对 $y$ 求偏导时内层 $xy$ 的偏导是 $x$，对 $x$ 求偏导时是 $y$：</p>$$\frac{\partial P}{\partial y}=-\frac1{y^2}+f(xy)+y\cdot f'(xy)\cdot x=f(xy)+xyf'(xy)-\frac1{y^2},$$$$\frac{\partial Q}{\partial x}=f(xy)+x\cdot f'(xy)\cdot y-\frac1{y^2}=f(xy)+xyf'(xy)-\frac1{y^2}.$$<p><b>第三步：下结论（1）。</b>在上半平面 $G=\{(x,y)\mid y>0\}$ 内：$G$ 是单连通区域；$f'$ 连续且 $y\ne0$，故 $P,Q$ 的一阶偏导数连续；并且 $\dfrac{\partial Q}{\partial x}\equiv\dfrac{\partial P}{\partial y}$。由定理，$I$ 在 $G$ 内与路径无关。</p><p><b>第四步：（2）拆分被积式。</b>按"是否含 $f$"分组：</p>$$P\,dx+Q\,dy=\left(\frac{dx}{y}-\frac{x\,dy}{y^2}\right)+f(xy)\,(y\,dx+x\,dy).$$<p>认出两个全微分：</p>$$d\left(\frac xy\right)=\frac{y\,dx-x\,dy}{y^2}=\frac{dx}y-\frac{x\,dy}{y^2},\qquad d(xy)=y\,dx+x\,dy.$$<p><b>第五步：求原函数。</b>$f$ 连续，所以有原函数，取 $F(u)=\displaystyle\int_0^uf(t)\,dt$，$F'=f$。由复合函数的微分，$d\left[F(xy)\right]=F'(xy)\,d(xy)=f(xy)(y\,dx+x\,dy)$。因此</p>$$P\,dx+Q\,dy=d\left[\frac xy+F(xy)\right],\qquad u(x,y)=\frac xy+F(xy).$$<p>验证：$u_x=\dfrac1y+yf(xy)=P$，$u_y=-\dfrac x{y^2}+xf(xy)=Q$。</p><p><b>第六步：终点值减起点值。</b></p>$$I=u(c,d)-u(a,b)=\frac cd+F(cd)-\frac ab-F(ab).$$<p>由 $ab=cd$ 得 $F(cd)=F(ab)$，所以</p>$$I=\frac cd-\frac ab.$$`,
      pitfalls: R`<p>① 证明路径无关时只算 $\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}$，不说明"区域单连通、偏导数连续"——这是定理的前提，缺了会扣分。</p><p>② 对 $f(xy)$ 求偏导漏乘内层导数（$y$ 或 $x$），导致两边"不相等"。</p><p>③ 第 (2) 问自选路径时穿过 $x$ 轴（例如经过原点的折线），路径离开了 $y>0$ 的区域，被积函数在 $y=0$ 处无定义，积分没有意义。</p><p>④ 试图把含 $f$ 的积分具体算出来——$f$ 是抽象函数，只能写成 $F(cd)-F(ab)$，靠条件 $ab=cd$ 消掉。</p>`,
      summary: R`<p><b>路径无关题三步走：</b>① 验证 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$（并说明单连通、偏导连续）；② 找原函数（凑全微分，或沿折线积分）；③ 终点值减起点值。</p><p><b>必背全微分：</b>$d(xy)=y\,dx+x\,dy$；$d\left(\dfrac xy\right)=\dfrac{y\,dx-x\,dy}{y^2}$；$d\left(\dfrac yx\right)=\dfrac{x\,dy-y\,dx}{x^2}$；$d\left(\dfrac12\ln(x^2+y^2)\right)=\dfrac{x\,dx+y\,dy}{x^2+y^2}$；$d\left(\arctan\dfrac yx\right)=\dfrac{x\,dy-y\,dx}{x^2+y^2}$。</p><p><b>看到…想到…：</b>看到 $f(xy)$ 与 $(y\,dx+x\,dy)$ 搭配，想到 $d\left[F(xy)\right]$；看到起点终点满足 $ab=cd$ 这类关系，想到被积式中有 $f(xy)$ 的部分会抵消。</p>`,
      alt: R`<p><b>折线路径法：</b>因为与路径无关，取折线 $(a,b)\to(c,b)\to(c,d)$。由于 $b>0,\ d>0$，两段都在上半平面内。</p><p>水平段 $y=b$，$dy=0$，$x$ 从 $a$ 到 $c$：</p>$$\int_a^c\left[\frac1b+bf(bx)\right]dx=\frac{c-a}{b}+\int_{ab}^{bc}f(t)\,dt\quad(t=bx).$$<p>竖直段 $x=c$，$dx=0$，$y$ 从 $b$ 到 $d$：</p>$$\int_b^d\left[cf(cy)-\frac{c}{y^2}\right]dy=\int_{bc}^{cd}f(t)\,dt+\left(\frac cd-\frac cb\right)\quad(t=cy).$$<p>相加：$I=\dfrac{c-a}b+\dfrac cd-\dfrac cb+\displaystyle\int_{ab}^{cd}f(t)\,dt=\dfrac cd-\dfrac ab+0$（因 $ab=cd$）。</p>`,
      verify: { by: 'mixed', ok: true, note: 'sympy: 对抽象 f 验证 ∂P/∂y - ∂Q/∂x = 0；取 f=cos 验证 u=x/y+sin(xy) 满足 u_x=P、u_y=Q；取 f=cos、(a,b)=(1,2)、(c,d)=(2,1)，沿直线段与折线两条路径数值积分均为 1.5 = c/d - a/b' },
      flags: []
    },

    /* ───────────────────────── 七 ───────────────────────── */
    {
      id: '2002-7', year: 2002, no: '七', type: '解答', score: 7,
      stem: R`(1) 验证函数$$y(x)=1+\frac{x^{3}}{3!}+\frac{x^{6}}{6!}+\frac{x^{9}}{9!}+\cdots+\frac{x^{3n}}{(3n)!}+\cdots\quad(-\infty\lt x\lt+\infty)$$满足微分方程 $y''+y'+y=e^{x}$；<br>(2) 利用 (1) 的结果求幂级数 $\displaystyle\sum_{n=0}^{\infty}\frac{x^{3n}}{(3n)!}$ 的和函数.`,
      options: null,
      answer: R`(1) 逐项求导后三式相加恰为 $\displaystyle\sum_{k=0}^{\infty}\frac{x^k}{k!}=e^x$；(2) $\displaystyle\sum_{n=0}^{\infty}\frac{x^{3n}}{(3n)!}=\frac23e^{-\frac x2}\cos\frac{\sqrt3}{2}x+\frac13e^{x}$，$-\infty\lt x\lt+\infty$.`,
      figure: null,
      kp: ['series.sum', 'ode.const', 'series.power'],
      methods: ['幂级数逐项求导', '二阶常系数非齐次线性方程', '由初值确定特解'],
      difficulty: 3,
      analysis: R`<p>$\displaystyle\sum\frac{x^{3n}}{(3n)!}$ 不能直接套常见展开式：$e^x=\sum\dfrac{x^k}{k!}$ 是所有项都有，而这里只取了指数是 3 的倍数的那些项，"三个取一个"。</p><p>题目给的路线是：<b>先证明它满足一个微分方程，再解这个微分方程</b>。为什么行得通？</p><ul><li>幂级数在收敛区间内可以<b>逐项求导</b>。$\dfrac{x^{3n}}{(3n)!}$ 求一次导，指数和阶乘同时降 1，变成 $\dfrac{x^{3n-1}}{(3n-1)!}$；再求一次变成 $\dfrac{x^{3n-2}}{(3n-2)!}$。指数模 3 余 0、余 2、余 1 的三类项加在一起，恰好拼出 $e^x$ 的完整级数。</li><li>二阶线性微分方程加上两个初始条件 $y(0),\ y'(0)$，<b>解是唯一的</b>；而级数在 $x=0$ 处的值和导数值可以直接从级数读出来。所以解出的那个初值问题的解，就是级数的和函数。</li></ul>`,
      solution: R`<p><b>第一步：收敛域。</b>用比值法：</p>$$\lim_{n\to\infty}\left|\frac{x^{3n+3}/(3n+3)!}{x^{3n}/(3n)!}\right|=\lim_{n\to\infty}\frac{|x|^3}{(3n+1)(3n+2)(3n+3)}=0\lt1,$$<p>对一切 $x$ 成立，收敛半径 $R=+\infty$。所以在 $(-\infty,+\infty)$ 内可以逐项求导任意次——这是下面运算合法的依据。</p><p><b>第二步：逐项求导。</b>$y=\displaystyle\sum_{n=0}^\infty\frac{x^{3n}}{(3n)!}$，$n=0$ 的项是常数 1，导数为 0，所以求导后从 $n=1$ 开始。利用 $(3n)!=3n\cdot(3n-1)!$：</p>$$y'=\sum_{n=1}^\infty\frac{3n\,x^{3n-1}}{(3n)!}=\sum_{n=1}^\infty\frac{x^{3n-1}}{(3n-1)!}=\frac{x^2}{2!}+\frac{x^5}{5!}+\frac{x^8}{8!}+\cdots,$$$$y''=\sum_{n=1}^\infty\frac{x^{3n-2}}{(3n-2)!}=x+\frac{x^4}{4!}+\frac{x^7}{7!}+\cdots.$$<p><b>第三步：三式相加。</b></p>$$y+y'+y''=\Big(1+\frac{x^3}{3!}+\cdots\Big)+\Big(\frac{x^2}{2!}+\frac{x^5}{5!}+\cdots\Big)+\Big(x+\frac{x^4}{4!}+\cdots\Big).$$<p>三组的指数分别是：3 的倍数、模 3 余 2、模 3 余 1。每个非负整数 $k$ 恰好出现一次，且系数都是 $\dfrac1{k!}$，所以</p>$$y''+y'+y=\sum_{k=0}^\infty\frac{x^k}{k!}=e^x.$$<p>(1) 得证。</p><p><b>第四步：读出初始条件。</b>$y(0)=1$（只剩常数项）；$y'(0)=0$（$y'$ 的级数从 $x^2$ 开始）。</p><p><b>第五步：解方程 $y''+y'+y=e^x$。</b></p><ul><li>齐次方程的特征方程 $r^2+r+1=0$，$r=\dfrac{-1\pm\sqrt{1-4}}{2}=-\dfrac12\pm\dfrac{\sqrt3}{2}i$，齐次通解 $Y=e^{-\frac x2}\left(C_1\cos\dfrac{\sqrt3}2x+C_2\sin\dfrac{\sqrt3}2x\right)$。</li><li>自由项 $e^x$，$1$ 不是特征根，设特解 $y^*=Ae^x$，代入得 $A+A+A=1$，$A=\dfrac13$。</li></ul><p>通解：</p>$$y=e^{-\frac x2}\left(C_1\cos\frac{\sqrt3}2x+C_2\sin\frac{\sqrt3}2x\right)+\frac13e^x.$$<p><b>第六步：定常数。</b>$y(0)=C_1+\dfrac13=1$，得 $C_1=\dfrac23$。求导：</p>$$y'=e^{-\frac x2}\left[\left(-\frac{C_1}2+\frac{\sqrt3}2C_2\right)\cos\frac{\sqrt3}2x+\left(-\frac{\sqrt3}2C_1-\frac{C_2}2\right)\sin\frac{\sqrt3}2x\right]+\frac13e^x,$$<p>$y'(0)=-\dfrac{C_1}2+\dfrac{\sqrt3}2C_2+\dfrac13=-\dfrac13+\dfrac{\sqrt3}2C_2+\dfrac13=0$，得 $C_2=0$。</p><p><b>第七步：结论。</b>由初值问题解的唯一性，</p>$$\sum_{n=0}^\infty\frac{x^{3n}}{(3n)!}=\frac23e^{-\frac x2}\cos\frac{\sqrt3}2x+\frac13e^x,\qquad -\infty\lt x\lt+\infty.$$<p>检验：$x=0$ 时右边 $=\dfrac23+\dfrac13=1$，与级数一致。</p>`,
      pitfalls: R`<p>① 逐项求导时下标处理错：常数项求导为 0，$y'$ 要从 $n=1$ 开始；若仍从 $n=0$ 开始，会出现 $\dfrac{x^{-1}}{(-1)!}$ 这种没有意义的项。</p><p>② 没有说明收敛半径为 $+\infty$。逐项求导的合法性依赖于"在收敛区间内部"，这一句不能省。</p><p>③ 把 $y'(0)$ 误当成 1：$y'$ 的首项是 $\dfrac{x^2}{2!}$，没有常数项，所以 $y'(0)=0$。</p><p>④ 复特征根 $\alpha\pm\beta i$ 对应 $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$，常见错误是把 $\alpha$ 与 $\beta$ 放反，或漏掉 $e^{\alpha x}$。</p><p>⑤ 第 (2) 问只写通解不定常数——和函数是一个确定的函数，必须用初值定出 $C_1,C_2$。</p>`,
      summary: R`<p><b>求和函数的"微分方程法"：</b>当级数逐项求导后能与自身组合出已知函数时，先建立和函数 $S(x)$ 满足的方程（常为一阶或二阶线性方程），再用 $S(0)$、$S'(0)$ 定解。</p><p><b>看到…想到…：</b>看到 $\dfrac{x^{3n}}{(3n)!}$、$\dfrac{x^{2n}}{(2n)!}$、$\dfrac{x^{4n}}{(4n)!}$ 这类"从 $e^x$ 中隔项抽取"的级数，想到"求导循环 + 微分方程"。对照：$\displaystyle\sum\frac{x^{2n}}{(2n)!}$ 满足 $y''=y,\ y(0)=1,\ y'(0)=0$，和函数为 $\dfrac{e^x+e^{-x}}2$。</p><p><b>常系数方程：</b>先特征根定齐次通解，再按自由项设特解，最后用初值定常数。</p>`,
      alt: R`<p><b>单位根滤波法（拓展，了解即可）：</b>设 $\omega=e^{\frac{2\pi i}3}=-\dfrac12+\dfrac{\sqrt3}2i$。对整数 $k$，若 $3\mid k$ 则 $1+\omega^k+\omega^{2k}=3$；否则 $\omega^k\ne1$ 是 $t^2+t+1=0$ 的根（因为 $1+t+t^2=\dfrac{t^3-1}{t-1}$），和为 0。所以</p>$$\sum_{n=0}^\infty\frac{x^{3n}}{(3n)!}=\frac13\left(e^x+e^{\omega x}+e^{\bar\omega x}\right).$$<p>而 $e^{\omega x}+e^{\bar\omega x}=2\,\mathrm{Re}\,e^{\omega x}=2e^{-\frac x2}\cos\dfrac{\sqrt3}2x$，结果与上面一致。这也解释了为什么特征方程 $r^2+r+1=0$ 的根恰好是 $\omega,\bar\omega$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 前 12 项部分和代入 y″+y′+y 与 e^x 的前 33 个系数逐一相等；dsolve(y″+y′+y=e^x, y(0)=1, y′(0)=0) 得 e^x/3 + (2/3)e^(-x/2)cos(√3x/2)；该闭式的麦克劳林展开与 Σx^(3n)/(3n)! 到 x^19 一致' },
      flags: []
    },

    /* ───────────────────────── 八 ───────────────────────── */
    {
      id: '2002-8', year: 2002, no: '八', type: '解答', score: 7,
      stem: R`设有一小山，取它的底面所在的平面为 $xOy$ 坐标面，其底部所占的区域为 $D=\{(x,y)\mid x^{2}+y^{2}-xy\leqslant75\}$，小山的高度函数为 $h(x,y)=75-x^{2}-y^{2}+xy$.<br>(1) 设 $M(x_0,y_0)$ 为区域 $D$ 上一点，问 $h(x,y)$ 在该点沿平面上什么方向的方向导数最大？若记此方向导数的最大值为 $g(x_0,y_0)$，试写出 $g(x_0,y_0)$ 的表达式.<br>(2) 现欲利用此小山开展攀岩活动，为此需要在山脚寻找一上山坡度最大的点作为攀登的起点. 也就是说，要在 $D$ 的边界线 $x^{2}+y^{2}-xy=75$ 上找出使 (1) 中的 $g(x,y)$ 达到最大值的点. 试确定攀登起点的位置.`,
      options: null,
      answer: R`(1) 沿梯度方向 $\mathbf{grad}\,h(x_0,y_0)=(y_0-2x_0,\ x_0-2y_0)$ 的方向导数最大，$g(x_0,y_0)=\sqrt{5x_0^2+5y_0^2-8x_0y_0}$；(2) 攀登起点为 $M_1(5,-5)$ 或 $M_2(-5,5)$，此处 $g=15\sqrt2$.`,
      figure: null,
      kp: ['mdiff.dir', 'mdiff.extreme'],
      methods: ['梯度与方向导数的关系', '拉格朗日乘数法', '目标函数平方化简', '利用约束代入消元'],
      difficulty: 3,
      analysis: R`<p>题目是应用题的包装，数学上就是两件事。</p><p><b>(1) 方向导数何时最大？</b>可微函数沿单位向量 $\mathbf e$ 的方向导数等于 $\mathbf{grad}\,h\cdot\mathbf e=|\mathbf{grad}\,h|\cos\theta$（$\theta$ 是 $\mathbf e$ 与梯度的夹角）。$\cos\theta\le1$，所以沿梯度方向（$\theta=0$）最大，最大值就是梯度的模。这就是梯度的几何意义：<b>梯度指向函数增长最快的方向，它的长度就是最大增长率（最陡坡度）</b>。</p><p><b>(2) 在椭圆边界上求 $g$ 的最大值</b>——典型的条件极值，用拉格朗日乘数法。技巧：$g$ 带根号，直接求导很繁。因为 $g\ge0$，而 $t\mapsto t^2$ 在 $[0,+\infty)$ 上单调递增，$g$ 与 $g^2$ 在同一点取最大，所以改求 $g^2$ 的最大值。</p>`,
      solution: R`<p><b>第一步：（1）计算梯度。</b>$h_x=-2x+y$，$h_y=-2y+x$，所以在 $M(x_0,y_0)$ 处</p>$$\mathbf{grad}\,h(x_0,y_0)=(y_0-2x_0,\ x_0-2y_0).$$<p><b>第二步：方向导数的最大值。</b>任取单位向量 $\mathbf e=(\cos\alpha,\sin\alpha)$。$h$ 是多项式，处处可微，所以</p>$$\frac{\partial h}{\partial\mathbf e}\bigg|_M=h_x\cos\alpha+h_y\sin\alpha=\mathbf{grad}\,h\cdot\mathbf e=|\mathbf{grad}\,h|\cos\theta,$$<p>其中 $\theta$ 为 $\mathbf e$ 与梯度的夹角。$\cos\theta\le1$，当 $\theta=0$ 即 $\mathbf e$ 与梯度同向时取到最大值 $|\mathbf{grad}\,h|$。所以 $h$ 在 $M$ 点沿梯度方向 $(y_0-2x_0,\ x_0-2y_0)$ 的方向导数最大。</p><p><b>第三步：写出 $g$。</b></p>$$g(x_0,y_0)=\sqrt{(y_0-2x_0)^2+(x_0-2y_0)^2}.$$<p>展开：$(y_0-2x_0)^2=4x_0^2-4x_0y_0+y_0^2$，$(x_0-2y_0)^2=x_0^2-4x_0y_0+4y_0^2$，相加得</p>$$g(x_0,y_0)=\sqrt{5x_0^2+5y_0^2-8x_0y_0}.$$<p>（在山顶 $(0,0)$ 处梯度为零，各方向的方向导数都是 0，公式给出 $g=0$，同样成立。）</p><p><b>第四步：（2）建立条件极值问题。</b>求</p>$$\varphi(x,y)=g^2=5x^2+5y^2-8xy\quad\text{在约束}\quad x^2+y^2-xy=75\quad\text{下的最大值}.$$<p>约束曲线是椭圆（有界闭集），$\varphi$ 连续，最大值一定存在，而且一定在拉格朗日函数的驻点之中。</p><p><b>第五步：拉格朗日函数与方程组。</b>令 $L=5x^2+5y^2-8xy+\lambda(x^2+y^2-xy-75)$：</p>$$\begin{cases}L_x=10x-8y+\lambda(2x-y)=0,&(1)\\ L_y=10y-8x+\lambda(2y-x)=0,&(2)\\ x^2+y^2-xy=75.&(3)\end{cases}$$<p><b>第六步：解方程组——相加后因式分解。</b>(1)+(2)：$2x+2y+\lambda(x+y)=0$，即</p>$$(x+y)(\lambda+2)=0.$$<ul><li><b>情形一：$y=-x$。</b>代入 (3)：$x^2+x^2+x^2=75$，$x=\pm5$。得点 $(5,-5)$、$(-5,5)$（此时由 (1) 得 $\lambda=-6$）。</li><li><b>情形二：$\lambda=-2$。</b>代入 (1)：$10x-8y-4x+2y=6x-6y=0$，$y=x$。代入 (3)：$x^2=75$，$x=\pm5\sqrt3$。得点 $(5\sqrt3,5\sqrt3)$、$(-5\sqrt3,-5\sqrt3)$。</li></ul><p><b>第七步：比较函数值。</b></p>$$\varphi(5,-5)=\varphi(-5,5)=125+125+200=450,\qquad \varphi(\pm5\sqrt3,\pm5\sqrt3)=375+375-600=150.$$<p>最大值为 450，对应 $g=\sqrt{450}=15\sqrt2$。所以攀登起点应选在 $M_1(5,-5)$ 或 $M_2(-5,5)$。（另外两点 $g=5\sqrt6$，是山脚坡度最缓处。）</p><svg viewBox="0 0 240 240" width="240" height="240" style="max-width:100%;height:auto"><line x1="10" y1="120" x2="232" y2="120" stroke="currentColor" stroke-width="0.8"/><line x1="120" y1="232" x2="120" y2="8" stroke="currentColor" stroke-width="0.8"/><ellipse cx="120" cy="120" rx="73.5" ry="42.4" transform="rotate(-45 120 120)" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><ellipse cx="120" cy="120" rx="60" ry="34.6" transform="rotate(-45 120 120)" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4,3"/><ellipse cx="120" cy="120" rx="42.4" ry="24.5" transform="rotate(-45 120 120)" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="4,3"/><circle cx="150" cy="150" r="4" fill="currentColor"/><circle cx="90" cy="90" r="4" fill="currentColor"/><circle cx="172" cy="68" r="3.5" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="68" cy="172" r="3.5" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="156" y="166" font-size="11" fill="currentColor">(5, −5) 最陡</text><text x="22" y="84" font-size="11" fill="currentColor">最陡 (−5, 5)</text><text x="150" y="56" font-size="11" fill="currentColor">(5√3, 5√3)</text><text x="226" y="134" font-size="11" fill="currentColor">x</text><text x="126" y="16" font-size="11" fill="currentColor">y</text></svg><p><small>图：实线为山脚椭圆 $x^2+y^2-xy=75$，虚线为等高线 $h=25,\ h=50$。实心点是最陡的起点，空心点是最缓处。</small></p><p><b>直观理解：</b>等高线 $h=c$ 就是 $x^2+y^2-xy=75-c$，是一族相似椭圆，长轴沿 $y=x$、短轴沿 $y=-x$。在短轴方向上，等高线挤得最密，所以坡度最大——就像地图上等高线越密的地方山越陡。</p>`,
      pitfalls: R`<p>① 把"方向导数的最大值"写成梯度向量本身，而不是梯度的<b>模</b>。</p><p>② 混淆目标函数：(2) 要最大化的是坡度 $g$，不是高度 $h$——在山脚边界上 $h$ 恒为 0。</p><p>③ 直接对带根号的 $g$ 用拉格朗日乘数法，求导繁琐易错；应先平方。</p><p>④ 解方程组时把 (1)(2) 两式相除，可能丢掉 $x+y=0$ 或分母为零的情形；应"相加 / 相减后因式分解"再分情形讨论。</p><p>⑤ 求出驻点后不比较函数值，把 $(\pm5\sqrt3,\pm5\sqrt3)$ 也当成答案——那是坡度最小的点。</p>`,
      summary: R`<p><b>梯度三句话：</b>方向是函数增长最快的方向；模是最大方向导数；与等值线（等高线）垂直。</p><p><b>条件极值套路：</b>目标函数（可先做平方、取对数等单调变换来化简）+ 约束 → 拉格朗日函数 → 方程组"加减消元、因式分解"分情形 → 比较所有候选点的函数值。</p><p><b>看到…想到…：</b>看到"沿什么方向变化最快 / 最大变化率"，想到梯度及其模；看到"在一条闭曲线上求最值"，想到拉格朗日乘数法；若约束是二次曲线且目标函数与约束结构相似，试试用约束代入消元，往往更快。</p>`,
      alt: R`<p><b>代入消元法（更快）：</b>在边界上 $x^2+y^2=75+xy$，所以</p>$$g^2=5(x^2+y^2)-8xy=5(75+xy)-8xy=375-3xy.$$<p>只需求 $xy$ 在椭圆上的最小值。由 $(x+y)^2\ge0$ 得 $x^2+y^2\ge-2xy$，即 $75+xy\ge-2xy$，所以 $xy\ge-25$，等号当且仅当 $x=-y$，代入约束得 $x=\pm5$。于是 $g^2$ 的最大值为 $375+75=450$，$g_{\max}=15\sqrt2$，在 $(5,-5)$、$(-5,5)$ 取到。同理由 $(x-y)^2\ge0$ 得 $xy\le75$，$g_{\min}=\sqrt{150}=5\sqrt6$，在 $(\pm5\sqrt3,\pm5\sqrt3)$（同号）取到。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: grad h = (y-2x, x-2y)，|grad h|² = 5x²-8xy+5y²；solve 拉格朗日方程组得 4 个驻点 (±5,∓5) 处 g=15√2、(±5√3,±5√3) 处 g=5√6' },
      flags: ['OCR 把区域 D 的不等式 x²+y²−xy ≤ 75 拆成了两段公式，已合并']
    }
  ];
});
