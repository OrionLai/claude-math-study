// 2000 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 原卷编号：一、填空 (1)(2)(3)；二、选择 (1)(2)(3)；三 ~ 九 解答。
// 一(4)(5)、二(4)(5)、十、十一（线性代数）、十二、十三（概率统计）不属于高等数学，未收录。
registerYear(2000, function (R) {
  return [
    /* ───────────── 一(1) ───────────── */
    {
      id: '2000-1-1', year: 2000, no: '一(1)', type: '填空', score: 3,
      stem: R`$\displaystyle\int_0^1\sqrt{2x-x^2}\,\mathrm{d}x=\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$\dfrac{\pi}{4}$`,
      figure: null,
      kp: ['int.defcalc', 'int.def'],
      methods: ['定积分的几何意义', '配方', '三角换元'],
      difficulty: 1,
      analysis: R`<p>被积函数是"根号里套一个二次多项式"。这种形状最该先问一句：<b>它的图像是不是圆的一部分？</b>因为 $y=\sqrt{a^2-u^2}$ 平方后就是 $u^2+y^2=a^2$，是半圆。</p><p>把 $2x-x^2$ 配方：$2x-x^2=1-(x-1)^2$，于是 $y=\sqrt{1-(x-1)^2}$，这正是以 $(1,0)$ 为圆心、$1$ 为半径的<b>上半圆</b>。</p><p>定积分的几何意义：被积函数非负时，$\int_a^b f(x)\,\mathrm{d}x$ 就是曲线 $y=f(x)$、$x$ 轴、直线 $x=a$、$x=b$ 围成的曲边梯形面积。所以这道题本质是"算一块圆的面积"，根本不用硬积分。</p>`,
      solution: R`<p><b>第一步：配方，认出图形。</b></p>$$2x-x^2=-(x^2-2x+1)+1=1-(x-1)^2,$$<p>所以 $y=\sqrt{2x-x^2}\ (y\ge 0)$ 平方后为 $(x-1)^2+y^2=1$，取 $y\ge0$ 的部分，即圆心 $(1,0)$、半径 $1$ 的上半圆，它从 $x=0$ 走到 $x=2$。</p><p><b>第二步：看积分区间对应哪一块。</b>积分区间是 $[0,1]$，正好是从圆的最左点 $x=0$ 到圆心正上方 $x=1$，即上半圆的左半部分——<b>四分之一个圆</b>（下图阴影）。</p><svg viewBox="0 0 200 135" width="220" height="148" role="img" aria-label="四分之一圆面积示意"><title>阴影部分为四分之一单位圆</title><path d="M 20 110 A 80 80 0 0 1 100 30 L 100 110 Z" fill="currentColor" fill-opacity="0.18" stroke="none"/><path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="8" y1="110" x2="196" y2="110" stroke="currentColor" stroke-width="1"/><line x1="20" y1="122" x2="20" y2="10" stroke="currentColor" stroke-width="1"/><line x1="100" y1="110" x2="100" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><text x="8" y="124" font-size="11" fill="currentColor">O</text><text x="96" y="124" font-size="11" fill="currentColor">1</text><text x="176" y="124" font-size="11" fill="currentColor">2</text><text x="188" y="104" font-size="11" fill="currentColor">x</text><text x="25" y="18" font-size="11" fill="currentColor">y</text></svg><p><b>第三步：用面积公式。</b>半径为 $1$ 的圆面积为 $\pi$，四分之一是</p>$$\int_0^1\sqrt{2x-x^2}\,\mathrm{d}x=\frac14\cdot\pi\cdot1^2=\frac{\pi}{4}.$$<p><b>第四步（代数验算，体会几何法省了多少事）：</b>令 $x-1=\sin t$，则 $x$ 从 $0$ 到 $1$ 时 $t$ 从 $-\frac{\pi}{2}$ 到 $0$，$\mathrm{d}x=\cos t\,\mathrm{d}t$，且在 $t\in\left[-\frac{\pi}{2},0\right]$ 上 $\cos t\ge0$，所以 $\sqrt{1-\sin^2t}=|\cos t|=\cos t$：</p>$$\int_0^1\sqrt{1-(x-1)^2}\,\mathrm{d}x=\int_{-\pi/2}^{0}\cos^2t\,\mathrm{d}t=\int_{-\pi/2}^{0}\frac{1+\cos2t}{2}\,\mathrm{d}t=\left[\frac t2+\frac{\sin2t}{4}\right]_{-\pi/2}^{0}=\frac{\pi}{4}.$$<p>两种方法结果一致，答案为 $\dfrac{\pi}{4}$。</p>`,
      pitfalls: R`<ul><li>把积分区间 $[0,1]$ 误看成整个半圆 $[0,2]$，得出 $\dfrac{\pi}{2}$。一定要画图确认区间对应圆的哪一段。</li><li>用三角换元时，$\sqrt{\cos^2t}=|\cos t|$，必须根据 $t$ 的范围确定符号；换元后上下限也要跟着换，不能还写 $0$ 到 $1$。</li><li>配方出错（如写成 $1-(x+1)^2$），圆心位置就错了。</li></ul>`,
      summary: R`<p><b>方法要点：</b>定积分 = 有向面积。被积函数是"根号下二次式"时，先配方看是不是圆（或椭圆）的一部分，能用面积就用面积。</p><p><b>看到…想到…：</b></p><ul><li>看到 $\sqrt{a^2-x^2}$、$\sqrt{2ax-x^2}$ → 想到半圆，$\int_0^a\sqrt{a^2-x^2}\,\mathrm{d}x=\dfrac{\pi a^2}{4}$。</li><li>几何法不方便时 → 三角换元 $x-x_0=a\sin t$，注意 $|\cos t|$ 的符号。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(sqrt(2x-x^2),(x,0,1)) = pi/4；三角换元后的 integrate(cos(t)^2,(t,-pi/2,0)) = pi/4' },
      flags: []
    },

    /* ───────────── 一(2) ───────────── */
    {
      id: '2000-1-2', year: 2000, no: '一(2)', type: '填空', score: 3,
      stem: R`曲面 $x^2+2y^2+3z^2=21$ 在点 $(1,-2,2)$ 处的法线方程为 $\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$\dfrac{x-1}{1}=\dfrac{y+2}{-4}=\dfrac{z-2}{6}$`,
      figure: null,
      kp: ['mdiff.geo', 'vec.planeline'],
      methods: ['梯度作法向量', '直线的点向式（对称式）方程'],
      difficulty: 1,
      analysis: R`<p>写一条直线需要两样东西：<b>一个点</b>和<b>一个方向</b>。点已经给了 $(1,-2,2)$；法线的方向就是曲面在该点的法向量。</p><p>曲面以 $F(x,y,z)=0$ 的隐式给出时，法向量取梯度 $\nabla F=(F_x,F_y,F_z)$。为什么梯度是法向量？在曲面上任取一条过该点的曲线 $\mathbf{r}(t)=(x(t),y(t),z(t))$，它满足 $F(x(t),y(t),z(t))\equiv0$，对 $t$ 求导得</p>$$F_x x'(t)+F_y y'(t)+F_z z'(t)=0,\quad\text{即}\quad\nabla F\cdot\mathbf{r}'(t)=0.$$<p>$\mathbf{r}'(t)$ 是曲面上任意一条曲线的切向量，梯度和所有这些切向量都垂直，所以它垂直于切平面——就是法向量。</p>`,
      solution: R`<p><b>第一步：确认点在曲面上。</b>$1^2+2\cdot(-2)^2+3\cdot2^2=1+8+12=21$，成立。</p><p><b>第二步：求法向量。</b>令 $F(x,y,z)=x^2+2y^2+3z^2-21$，则</p>$$\nabla F=(F_x,F_y,F_z)=(2x,\,4y,\,6z),\qquad\nabla F\big|_{(1,-2,2)}=(2,\,-8,\,12).$$<p>方向向量可以取任意非零倍数，约去公因子 $2$，取 $\mathbf{n}=(1,-4,6)$。</p><p><b>第三步：写点向式方程。</b>过点 $(x_0,y_0,z_0)$、方向为 $(l,m,n)$ 的直线为 $\dfrac{x-x_0}{l}=\dfrac{y-y_0}{m}=\dfrac{z-z_0}{n}$，代入得法线方程</p>$$\frac{x-1}{1}=\frac{y+2}{-4}=\frac{z-2}{6}.$$<p><b>顺带一提：</b>同一个法向量配上点法式，就得到该点的切平面：$(x-1)-4(y+2)+6(z-2)=0$，即 $x-4y+6z-21=0$。</p>`,
      pitfalls: R`<ul><li>$y_0=-2$，所以分子是 $y-(-2)=y+2$，最容易写成 $y-2$。</li><li>把"法线"和"切平面"弄混：法线是直线（用点向式），切平面是平面（用点法式），两者用的是同一个法向量。</li><li>把曲面硬解成 $z=\sqrt{\cdots}$ 再求偏导，既麻烦又容易丢符号；隐式 $F=0$ 直接求梯度最稳。</li></ul>`,
      summary: R`<p><b>方法要点：</b>曲面 $F(x,y,z)=0$ 在 $P_0$ 处的法向量 $\mathbf{n}=\nabla F(P_0)$；法线 = 点向式，切平面 = 点法式。</p><p><b>看到…想到…：</b></p><ul><li>看到"曲面在某点的切平面 / 法线" → 想到求 $\nabla F$ 在该点的值。</li><li>曲面是显式 $z=f(x,y)$ → 令 $F=f(x,y)-z$，法向量 $(f_x,f_y,-1)$。</li><li>空间曲线 $\mathbf{r}(t)$ 的切线 → 方向向量是 $\mathbf{r}'(t)$；这正好与曲面"法向量 = 梯度"成对记忆。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 点 (1,-2,2) 代入 F 得 0；grad F 在该点为 (2,-8,12)，化简方向 (1,-4,6)' },
      flags: []
    },

    /* ───────────── 一(3) ───────────── */
    {
      id: '2000-1-3', year: 2000, no: '一(3)', type: '填空', score: 3,
      stem: R`微分方程 $xy''+3y'=0$ 的通解为 $\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$y=\dfrac{C_1}{x^2}+C_2$（$C_1,C_2$ 为任意常数）`,
      figure: null,
      kp: ['ode.reduce', 'ode.first', 'ode.euler'],
      methods: ['可降阶方程（令 p=y′）', '分离变量', '凑导数'],
      difficulty: 2,
      analysis: R`<p>这是一个二阶方程，但方程里<b>只出现 $y''$ 和 $y'$，没有 $y$ 本身</b>。这是"$y''=f(x,y')$ 型"可降阶方程的标志。</p><p>为什么能降阶？方程只关心 $y$ 的导数，那就把 $y'$ 当成新的未知函数 $p(x)$，于是 $y''=p'$，原方程变成关于 $p$ 的<b>一阶</b>方程。先求 $p$，再积分一次得 $y$。二阶方程的通解要有两个独立的任意常数，正好"解 $p$ 一个常数、积分一次又一个常数"。</p>`,
      solution: R`<p><b>第一步：降阶。</b>令 $p=y'$，则 $y''=p'$，方程变为</p>$$xp'+3p=0.$$<p><b>第二步：解关于 $p$ 的一阶方程（分离变量）。</b>当 $p\ne0$ 时，</p>$$\frac{\mathrm{d}p}{p}=-\frac{3}{x}\,\mathrm{d}x\ \Longrightarrow\ \ln|p|=-3\ln|x|+C\ \Longrightarrow\ p=\frac{C_0}{x^3}.$$<p>其中 $C_0$ 为任意常数；$p\equiv0$ 也是解，对应 $C_0=0$，所以不会丢解。</p><p><b>第三步：再积分一次求 $y$。</b></p>$$y=\int\frac{C_0}{x^3}\,\mathrm{d}x=-\frac{C_0}{2x^2}+C_2.$$<p>记 $C_1=-\dfrac{C_0}{2}$（$C_0$ 任意，$C_1$ 也任意），得通解</p>$$y=\frac{C_1}{x^2}+C_2.$$<p><b>第四步：代回检验。</b>$y'=-\dfrac{2C_1}{x^3}$，$y''=\dfrac{6C_1}{x^4}$，于是 $xy''+3y'=\dfrac{6C_1}{x^3}-\dfrac{6C_1}{x^3}=0$。✓</p>`,
      pitfalls: R`<ul><li>只写出一个任意常数（例如只写 $y=\dfrac{C}{x^2}$）。二阶方程的通解必须含两个相互独立的任意常数，$y=C_2$（常数）显然也是解。</li><li>$\int x^{-3}\,\mathrm{d}x=\dfrac{x^{-2}}{-2}=-\dfrac{1}{2x^2}$，指数和系数容易算错。</li><li>分离变量时除以 $p$，要想到 $p\equiv0$ 是否被包含在通解里。</li></ul>`,
      summary: R`<p><b>方法要点：</b>可降阶二阶方程的两种类型：</p><ul><li>看到<b>缺 $y$</b>（只有 $x,y',y''$）→ 令 $y'=p(x)$，$y''=p'(x)$。</li><li>看到<b>缺 $x$</b>（只有 $y,y',y''$）→ 令 $y'=p(y)$，$y''=p\dfrac{\mathrm{d}p}{\mathrm{d}y}$。</li></ul><p>另外，看到 $x^ky''+kx^{k-1}y'$ 这种"一项是另一项的导数配对"的结构，想到它是 $(x^ky')'$，可以直接凑导数。</p>`,
      alt: R`<p><b>另解一（凑导数）：</b>两边乘 $x^2$ 得 $x^3y''+3x^2y'=0$，注意到左边恰是 $(x^3y')'$，所以 $x^3y'=C_0$，$y'=\dfrac{C_0}{x^3}$，再积分即得。</p><p><b>另解二（欧拉方程）：</b>两边乘 $x$ 得 $x^2y''+3xy'=0$，这是欧拉方程。试 $y=x^r$：$r(r-1)+3r=0$，即 $r^2+2r=0$，$r=0$ 或 $r=-2$，所以 $y=C_2x^0+C_1x^{-2}=C_2+\dfrac{C_1}{x^2}$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy dsolve(x*y\'\'+3*y\'=0) 得 y = C1 + C2/x^2，并代回检验' },
      flags: []
    },

    /* ───────────── 二(1) ───────────── */
    {
      id: '2000-2-1', year: 2000, no: '二(1)', type: '选择', score: 3,
      stem: R`设 $f(x),g(x)$ 是恒大于零的可导函数，且 $f'(x)g(x)-f(x)g'(x)<0$，则当 $a<x<b$ 时，有`,
      options: [R`$f(x)g(b)>f(b)g(x)$`, R`$f(x)g(a)>f(a)g(x)$`, R`$f(x)g(x)>f(b)g(b)$`, R`$f(x)g(x)>f(a)g(a)$`],
      answer: 'A',
      figure: null,
      kp: ['diff.mono', 'diff.ineq'],
      methods: ['构造辅助函数 f/g', '商的求导法则', '利用单调性比较大小'],
      difficulty: 2,
      analysis: R`<p>这是一道"认式子"的题。条件里的 $f'g-fg'$ 正是商的导数的分子：</p>$$\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}.$$<p>一旦认出来，条件就翻译成"$\dfrac fg$ 的导数小于零"，也就是 $\dfrac fg$ 严格单调减少。而四个选项都是在比较 $x$ 处和端点 $a$、$b$ 处的值，正是单调性能回答的问题。</p><p>再看选项结构：A、B 两项"交叉相乘"的形式（$f(x)g(b)$ 与 $f(b)g(x)$），两边同除以正数 $g(x)g(b)$ 就是比较 $\dfrac fg$ 的值；C、D 比的是乘积 $fg$，而条件对乘积没有任何约束——这两项多半要靠反例排除。</p>`,
      solution: R`<p><b>第一步：构造辅助函数。</b>令 $\varphi(x)=\dfrac{f(x)}{g(x)}$。因为 $g(x)>0$，所以 $g^2(x)>0$，于是</p>$$\varphi'(x)=\frac{f'(x)g(x)-f(x)g'(x)}{g^2(x)}<0,$$<p>故 $\varphi(x)$ 严格单调减少。</p><p><b>第二步：用单调性比较。</b>当 $a<x<b$ 时，</p>$$\varphi(a)>\varphi(x)>\varphi(b),\quad\text{即}\quad\frac{f(a)}{g(a)}>\frac{f(x)}{g(x)}>\frac{f(b)}{g(b)}.$$<p><b>第三步：化成选项的形式。</b>由右半边 $\dfrac{f(x)}{g(x)}>\dfrac{f(b)}{g(b)}$，两边同乘正数 $g(x)g(b)$（不等号方向不变），得</p>$$f(x)g(b)>f(b)g(x),$$<p>这就是 <b>A</b>。</p><p><b>第四步：逐一排除其余选项。</b></p><ul><li><b>B 错：</b>由左半边 $\dfrac{f(a)}{g(a)}>\dfrac{f(x)}{g(x)}$ 同乘 $g(a)g(x)>0$ 得 $f(a)g(x)>f(x)g(a)$，与 B 恰好相反。</li><li><b>C 错：</b>反例 $f(x)\equiv1$，$g(x)=\mathrm{e}^x$。两者恒正可导，且 $f'g-fg'=0-\mathrm{e}^x<0$ 满足条件；但 $f(x)g(x)=\mathrm{e}^x$ 单调增加，$a<x<b$ 时 $f(x)g(x)<f(b)g(b)$，C 不成立。</li><li><b>D 错：</b>反例 $f(x)=\mathrm{e}^{-x}$，$g(x)\equiv1$。$f'g-fg'=-\mathrm{e}^{-x}<0$ 满足条件；但 $f(x)g(x)=\mathrm{e}^{-x}$ 单调减少，$f(x)g(x)<f(a)g(a)$，D 不成立。</li></ul><p>故选 <b>A</b>。</p>`,
      pitfalls: R`<ul><li>方向搞反而错选 B：单调<b>减</b>函数在左端点 $a$ 处最大、右端点 $b$ 处最小，所以 $x$ 处的值比 $a$ 处小、比 $b$ 处大。</li><li>交叉相乘时要用到 $g>0$；如果题目没说 $g$ 恒正，就不能随便乘，不等号可能变向。</li><li>以为条件能推出关于 $fg$ 的结论而选 C 或 D——条件只约束了商，乘积可增可减，两个反例说明了这一点。</li></ul>`,
      summary: R`<p><b>方法要点：</b>比较大小 / 证明不等式的题，核心是"构造函数 + 判单调"。构造什么函数，看条件里的导数组合长什么样：</p><ul><li>看到 $f'g-fg'$ → 想到 $\left(\dfrac fg\right)'$；</li><li>看到 $f'g+fg'$ → 想到 $(fg)'$；</li><li>看到 $f'+f$ → 想到 $(\mathrm{e}^xf)'$；看到 $f'-f$ → 想到 $(\mathrm{e}^{-x}f)'$；</li><li>看到 $xf'+f$ → 想到 $(xf)'$；看到 $xf'-f$ → 想到 $\left(\dfrac fx\right)'$。</li></ul><p>排除选项时，选最简单的具体函数（常数、$\mathrm{e}^{\pm x}$）做反例最快。</p>`,
      verify: { by: 'mixed', ok: true, note: '主推导手工完成；sympy 验证反例 f=1,g=e^x 与 f=e^{-x},g=1 都满足 f\'g-fg\'<0（分别为 -e^x、-e^{-x}）' },
      flags: []
    },

    /* ───────────── 二(2) ───────────── */
    {
      id: '2000-2-2', year: 2000, no: '二(2)', type: '选择', score: 3,
      stem: R`设 $S:\ x^2+y^2+z^2=a^2\ (z\geqslant0)$，$S_1$ 为 $S$ 在第一卦限中的部分，则有`,
      options: [R`$\displaystyle\iint_S x\,\mathrm{d}S=4\iint_{S_1}x\,\mathrm{d}S$`, R`$\displaystyle\iint_S y\,\mathrm{d}S=4\iint_{S_1}x\,\mathrm{d}S$`, R`$\displaystyle\iint_S z\,\mathrm{d}S=4\iint_{S_1}x\,\mathrm{d}S$`, R`$\displaystyle\iint_S xyz\,\mathrm{d}S=4\iint_{S_1}xyz\,\mathrm{d}S$`],
      answer: 'C',
      figure: null,
      kp: ['mint.surf1'],
      methods: ['对称性（奇零偶倍）', '轮换对称性'],
      difficulty: 2,
      analysis: R`<p>四个选项都是"整个上半球面上的积分"与"第一卦限那一块上的积分"之间的关系，显然在考<b>对称性</b>，而不是让你真去算。</p><p>第一类曲面积分（对面积的曲面积分）里的 $\mathrm{d}S$ 是面积元，永远为正，它的对称性和二重积分完全一样：</p><ul><li>曲面关于某坐标面对称，被积函数关于相应变量是<b>奇</b>函数 → 积分为 $0$；</li><li>是<b>偶</b>函数 → 积分等于一半上的 $2$ 倍。</li></ul><p>上半球面 $S$ 关于 $yOz$ 面（$x\to-x$）和 $xOz$ 面（$y\to-y$）都对称，但关于 $xOy$ 面<b>不</b>对称（只有上半）。$S$ 按 $x,y$ 的正负被分成 $4$ 块，每块都和 $S_1$ 全等。</p><p>此外 $S_1$ 是 $x,y,z\ge0$ 的那八分之一球面，它的方程交换任意两个变量都不变——这叫<b>轮换对称</b>，于是在 $S_1$ 上 $x,y,z$ 地位平等。</p>`,
      solution: R`<p><b>第一步：看 A、B、D 的左边。</b></p><ul><li>$x$ 关于 $x$ 是奇函数，$S$ 关于 $yOz$ 面对称，所以 $\displaystyle\iint_S x\,\mathrm{d}S=0$。</li><li>同理 $y$ 关于 $y$ 是奇函数，$S$ 关于 $xOz$ 面对称，$\displaystyle\iint_S y\,\mathrm{d}S=0$。</li><li>$xyz$ 关于 $x$ 是奇函数，所以 $\displaystyle\iint_S xyz\,\mathrm{d}S=0$。</li></ul><p><b>第二步：看右边。</b>在 $S_1$ 上 $x\ge0$、$xyz\ge0$，且在 $S_1$ 内部严格大于 $0$，所以 $\displaystyle\iint_{S_1}x\,\mathrm{d}S>0$，$\displaystyle\iint_{S_1}xyz\,\mathrm{d}S>0$。因此 A、B、D 都是"$0=$ 正数"，全错。</p><p><b>第三步：验证 C。</b>$z$ 关于 $x$ 是偶函数、关于 $y$ 也是偶函数，用两次"偶倍"：</p>$$\iint_S z\,\mathrm{d}S=4\iint_{S_1}z\,\mathrm{d}S.$$<p>再由 $S_1$ 的轮换对称性（把 $x$ 和 $z$ 互换，$S_1$ 不变，只是给积分变量换了个名字）：</p>$$\iint_{S_1}z\,\mathrm{d}S=\iint_{S_1}x\,\mathrm{d}S.$$<p>所以 $\displaystyle\iint_S z\,\mathrm{d}S=4\iint_{S_1}x\,\mathrm{d}S$，<b>C 正确</b>。</p><p><b>第四步（数值验算）：</b>上半球面 $z=\sqrt{a^2-x^2-y^2}$，$\mathrm{d}S=\dfrac{a}{z}\,\mathrm{d}x\,\mathrm{d}y$，所以</p>$$\iint_S z\,\mathrm{d}S=\iint_{x^2+y^2\le a^2}z\cdot\frac az\,\mathrm{d}x\,\mathrm{d}y=a\cdot\pi a^2=\pi a^3,$$<p>而 $\displaystyle\iint_{S_1}x\,\mathrm{d}S=\frac{\pi a^3}{4}$，确实满足 $4$ 倍关系。</p>`,
      pitfalls: R`<ul><li>选 D 的同学往往觉得"$S$ 由 4 块全等的部分组成，所以 $4$ 倍"，但忘了 $xyz$ 在不同的块上符号不同（$x$ 或 $y$ 为负的块上 $xyz\le0$），正负抵消为 $0$。</li><li>把第二类曲面积分（有方向）的对称性规则搬过来——第二类的规则恰好"反过来"（奇倍偶零），两者一定要分清。</li><li>$S$ 只是上半球面，关于 $xOy$ 面不对称，不能说 $\iint_S z\,\mathrm{d}S=0$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>第一类积分（重积分、第一类曲线 / 曲面积分）用对称性三步走：①区域关于哪个面（线）对称；②被积函数关于对应变量的奇偶性；③奇零偶倍。</p><p><b>看到…想到…：</b></p><ul><li>看到区域方程交换变量不变（如球面、$x+y+z=1$ 的第一卦限部分）→ 想到轮换对称：$\iint x=\iint y=\iint z$，常可配合 $x+y+z$ 或 $x^2+y^2+z^2$ 整体计算。</li><li>选择题中出现"$=4\iint_{S_1}$""$=2\iint_{D_1}$" → 想到逐一检查奇偶性。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 球坐标计算：∬_S x dS=∬_S y dS=∬_S xyz dS=0，∬_S z dS=πa³；∬_{S1} x dS=∬_{S1} z dS=πa³/4，∬_{S1} xyz dS=a⁵/8>0' },
      flags: []
    },

    /* ───────────── 二(3) ───────────── */
    {
      id: '2000-2-3', year: 2000, no: '二(3)', type: '选择', score: 3,
      stem: R`设级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛，则必收敛的级数为`,
      options: [R`$\sum\limits_{n=1}^{\infty}(-1)^n\dfrac{u_n}{n}$`, R`$\sum\limits_{n=1}^{\infty}u_n^2$`, R`$\sum\limits_{n=1}^{\infty}\left(u_{2n-1}-u_{2n}\right)$`, R`$\sum\limits_{n=1}^{\infty}\left(u_n+u_{n+1}\right)$`],
      answer: 'D',
      figure: null,
      kp: ['series.concept', 'series.alt', 'series.positive'],
      methods: ['收敛级数的线性性质', '部分和', '构造条件收敛的反例'],
      difficulty: 3,
      analysis: R`<p>"必收敛"三个字决定了做法：</p><ul><li>正确选项要对<b>所有</b>收敛的 $\sum u_n$ 都成立，只能用级数的一般性质来证明；</li><li>错误选项只需<b>一个</b>反例。</li></ul><p>最关键的观察：题目<b>没有说 $u_n\ge0$</b>。$\sum u_n$ 可以是条件收敛的交错级数，而条件收敛的级数很"脆弱"——给它乘上符号因子、平方、或把分组中间的加号改成减号，都可能把"正负抵消"破坏掉，从而发散。反例就从 $\dfrac{(-1)^n}{\sqrt n}$、$\dfrac{(-1)^n}{n}$、$\dfrac{(-1)^n}{\ln(n+1)}$ 这几个经典交错级数里找。</p><p>而 D 中的 $\sum u_{n+1}$ 只是原级数去掉第一项，两个收敛级数相加还收敛，这一项"看起来就稳"。</p>`,
      solution: R`<p><b>第一步：证明 D 必收敛。</b>设 $\sum\limits_{n=1}^{\infty}u_n=S$。级数 $\sum\limits_{n=1}^{\infty}u_{n+1}=u_2+u_3+\cdots$ 是原级数去掉首项，去掉有限项不改变敛散性，所以它收敛，和为 $S-u_1$。由收敛级数的线性性质，</p>$$\sum_{n=1}^{\infty}(u_n+u_{n+1})=\sum_{n=1}^{\infty}u_n+\sum_{n=1}^{\infty}u_{n+1}=S+(S-u_1)=2S-u_1,$$<p>收敛。（用部分和看也一样：$S_n'=\sum_{k=1}^{n}(u_k+u_{k+1})=2S_n-u_1+u_{n+1}\to2S-u_1$，因为 $u_{n+1}\to0$。）</p><p><b>第二步：给 A、B、C 各找一个反例。</b></p><table><thead><tr><th>选项</th><th>反例 $u_n$</th><th>为什么 $\sum u_n$ 收敛</th><th>新级数为什么发散</th></tr></thead><tbody><tr><td>A</td><td>$\dfrac{(-1)^n}{\ln(n+1)}$</td><td>莱布尼茨：$\dfrac1{\ln(n+1)}$ 单调减趋于 $0$</td><td>$(-1)^n\dfrac{u_n}{n}=\dfrac{1}{n\ln(n+1)}$，与 $\int_2^{+\infty}\dfrac{\mathrm{d}x}{x\ln x}=\left[\ln\ln x\right]_2^{+\infty}=+\infty$ 比较知发散</td></tr><tr><td>B</td><td>$\dfrac{(-1)^n}{\sqrt n}$</td><td>莱布尼茨：$\dfrac1{\sqrt n}$ 单调减趋于 $0$</td><td>$u_n^2=\dfrac1n$，调和级数发散</td></tr><tr><td>C</td><td>$\dfrac{(-1)^{n-1}}{n}$</td><td>莱布尼茨</td><td>$u_{2n-1}-u_{2n}=\dfrac1{2n-1}+\dfrac1{2n}>\dfrac1{2n}$，而 $\sum\dfrac1{2n}$ 发散</td></tr></tbody></table><p>A 中的比较具体是：$\dfrac{1}{n\ln(n+1)}\ge\dfrac{1}{(n+1)\ln(n+1)}$，而 $\sum\dfrac{1}{(n+1)\ln(n+1)}=\sum\limits_{m=2}^{\infty}\dfrac1{m\ln m}$，由积分判别法（$\dfrac{1}{x\ln x}$ 在 $[2,+\infty)$ 上正且单调减）与上面发散的积分同敛散，所以发散。</p><p>故选 <b>D</b>。</p>`,
      pitfalls: R`<ul><li>默认 $u_n$ 是正项：若 $u_n\ge0$，A 确实收敛（$\left|\dfrac{(-1)^nu_n}{n}\right|\le u_n$），B 也收敛（$u_n\to0$ 后 $u_n^2\le u_n$），于是会误以为 A、B 对。题目没给正项条件，这两项都不"必收敛"。</li><li>把 C 当成"加括号"：收敛级数加括号后仍收敛，说的是 $\sum(u_{2n-1}+u_{2n})$；C 中间是减号，等于把所有偶数项变了号，已经不是原级数了。</li><li>不敢选 D，觉得 $u_n$ 与 $u_{n+1}$ "重复"了。其实就是两个收敛级数逐项相加。</li></ul>`,
      summary: R`<p><b>方法要点：</b>抽象级数的选择题，"正确项靠性质，错误项靠反例"。常用性质：线性性、去掉或添加有限项、收敛级数加括号仍收敛、收敛则通项趋于 $0$。</p><p><b>反例库（条件收敛的交错级数）：</b>$\dfrac{(-1)^n}{\sqrt n}$（平方后变调和级数）、$\dfrac{(-1)^n}{n}$（改号后变调和级数）、$\dfrac{(-1)^n}{\ln(n+1)}$（乘 $\dfrac{(-1)^n}{n}$ 后变 $\dfrac{1}{n\ln n}$ 型）。</p><p><b>看到…想到…：</b>看到"$\sum u_n$ 收敛"而没说正项 → 想到用条件收敛的交错级数造反例；看到 $u_n\pm u_{n+k}$ → 想到线性性质。</p>`,
      verify: { by: 'mixed', ok: true, note: 'D 由级数性质证明；sympy: integrate(1/(x log x),(x,2,oo)) = oo（A 反例发散），summation((-1)^n/n) = -log 2（C、B 反例中原级数收敛）' },
      flags: ['参考解析对 C 项的反例写作 Σ(u_{2n-1}-u_{2n})=Σ1/n，严格说应为 Σ[1/(2n-1)+1/(2n)]（调和级数相邻两项加括号），并非逐项相等；结论“发散”正确。本稿改用 1/(2n-1)+1/(2n)>1/(2n) 的比较论证']
    },

    /* ───────────── 三 ───────────── */
    {
      id: '2000-3', year: 2000, no: '三', type: '解答', score: 5,
      stem: R`求 $\displaystyle\lim_{x\to0}\left(\frac{2+\mathrm{e}^{\frac1x}}{1+\mathrm{e}^{\frac4x}}+\frac{\sin x}{|x|}\right)$.`,
      options: null,
      answer: R`$1$`,
      figure: null,
      kp: ['lim.funcdef', 'lim.compute'],
      methods: ['分左右极限讨论', '分子分母同除以增长最快的项', '重要极限'],
      difficulty: 2,
      analysis: R`<p>题目里有两个"危险信号"：</p><ul><li>$\mathrm{e}^{\frac1x}$：$x\to0^+$ 时 $\dfrac1x\to+\infty$，$\mathrm{e}^{\frac1x}\to+\infty$；$x\to0^-$ 时 $\dfrac1x\to-\infty$，$\mathrm{e}^{\frac1x}\to0$。左右两侧的行为截然不同。</li><li>$|x|$：在 $0$ 的右侧等于 $x$，左侧等于 $-x$，本身就是分段函数。</li></ul><p>两侧表达式 / 极限值不同，就不能"一把算"，必须<b>分别求左、右极限</b>。依据是：$\lim\limits_{x\to0}F(x)$ 存在 $\iff$ 左、右极限都存在且相等。</p><p>右极限里遇到 $\dfrac{\infty}{\infty}$，处理原则是：<b>分子分母同除以增长最快的那一项</b>（这里是 $\mathrm{e}^{\frac4x}$），让其余各项都变成趋于 $0$ 的量。</p>`,
      solution: R`<p><b>第一步：右极限 $x\to0^+$。</b>此时 $\dfrac1x\to+\infty$。对分式，分子分母同除以 $\mathrm{e}^{\frac4x}$：</p>$$\frac{2+\mathrm{e}^{\frac1x}}{1+\mathrm{e}^{\frac4x}}=\frac{2\mathrm{e}^{-\frac4x}+\mathrm{e}^{-\frac3x}}{\mathrm{e}^{-\frac4x}+1}\to\frac{0+0}{0+1}=0,$$<p>这里 $-\dfrac4x\to-\infty$、$-\dfrac3x\to-\infty$，所以对应的指数都趋于 $0$。另一项中 $|x|=x$，</p>$$\frac{\sin x}{|x|}=\frac{\sin x}{x}\to1.$$<p>所以右极限 $=0+1=1$。</p><p><b>第二步：左极限 $x\to0^-$。</b>此时 $\dfrac1x\to-\infty$，$\mathrm{e}^{\frac1x}\to0$，$\mathrm{e}^{\frac4x}\to0$，分式直接代入：</p>$$\frac{2+\mathrm{e}^{\frac1x}}{1+\mathrm{e}^{\frac4x}}\to\frac{2+0}{1+0}=2.$$<p>另一项中 $|x|=-x$，</p>$$\frac{\sin x}{|x|}=-\frac{\sin x}{x}\to-1.$$<p>所以左极限 $=2+(-1)=1$。</p><p><b>第三步：下结论。</b>左、右极限都存在且都等于 $1$，所以</p>$$\lim_{x\to0}\left(\frac{2+\mathrm{e}^{\frac1x}}{1+\mathrm{e}^{\frac4x}}+\frac{\sin x}{|x|}\right)=1.$$<p><b>值得体会：</b>两部分各自在 $x=0$ 处的左右极限都不相等（第一部分是 $2$ 与 $0$，第二部分是 $-1$ 与 $1$），单独看都没有极限；但两者的"跳跃"大小相等、方向相反，加起来恰好抵消。这也说明"和的极限存在"并不要求每一项的极限都存在。</p>`,
      pitfalls: R`<ul><li>不分左右，直接说"$x\to0$ 时 $\mathrm{e}^{\frac1x}\to\infty$"——这只在右侧成立。</li><li>右极限中把 $\dfrac{2+\mathrm{e}^{1/x}}{1+\mathrm{e}^{4/x}}$ 看成"$\dfrac{\infty}{\infty}=1$"。$\dfrac{\infty}{\infty}$ 是未定式，要比较增长速度：$\mathrm{e}^{\frac4x}$ 比 $\mathrm{e}^{\frac1x}$ 快得多，所以极限是 $0$。</li><li>左侧忘了 $|x|=-x$，算成 $2+1=3$，得出"左右不等、极限不存在"的错误结论。</li><li>想把极限拆成两项之和分别求——两项各自的极限都不存在，拆开后无法下结论，只能在每一侧分别拆。</li></ul>`,
      summary: R`<p><b>方法要点：</b>函数在某点两侧表达式或趋势不同，就分左右极限计算，左右相等才有极限。</p><p><b>看到…想到…：</b></p><ul><li>看到 $\mathrm{e}^{\frac1x}$、$\arctan\dfrac1x$、$|x|$、取整函数 $[x]$、分段函数在分段点 → 想到分左右极限。</li><li>看到含指数的 $\dfrac{\infty}{\infty}$ → 想到分子分母同除以增长最快的项（"抓大头"）。</li><li>记住：$x\to0^+$ 时 $\mathrm{e}^{\frac1x}\to+\infty$，$x\to0^-$ 时 $\mathrm{e}^{\frac1x}\to0$；$\arctan\dfrac1x$ 两侧分别趋于 $\pm\dfrac{\pi}{2}$。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: "sympy: limit(expr,x,0,'+') = 1，limit(expr,x,0,'-') = 1" },
      flags: []
    },

    /* ───────────── 四 ───────────── */
    {
      id: '2000-4', year: 2000, no: '四', type: '解答', score: 5,
      stem: R`设 $z=f\left(xy,\dfrac{x}{y}\right)+g\left(\dfrac{y}{x}\right)$，其中 $f$ 具有二阶连续偏导数，$g$ 具有二阶连续导数，求 $\dfrac{\partial^2z}{\partial x\partial y}$.`,
      options: null,
      answer: R`$\dfrac{\partial^2z}{\partial x\partial y}=f_1'-\dfrac{1}{y^2}f_2'+xyf_{11}''-\dfrac{x}{y^3}f_{22}''-\dfrac{1}{x^2}g'-\dfrac{y}{x^3}g''$`,
      figure: null,
      kp: ['mdiff.chain', 'mdiff.diffable'],
      methods: ['多元复合函数链式法则', '树形图', '混合偏导数相等'],
      difficulty: 3,
      analysis: R`<p>这是"抽象复合函数求二阶偏导"的标准题。$f$、$g$ 都没有具体表达式，只能用链式法则把结果写成 $f_1',f_2',f_{11}'',\dots$ 的组合。</p><p><b>先理清变量关系（画树形图）：</b></p><ul><li>$f$ 有两个中间变量：$u=xy$，$v=\dfrac xy$，每个都依赖 $x$ 和 $y$；</li><li>$g$ 有一个中间变量：$w=\dfrac yx$，也依赖 $x$ 和 $y$。</li></ul><p><b>最核心的一点：</b>求出一阶偏导后，里面的 $f_1'$、$f_2'$、$g'$ 仍然是 $u,v$（或 $w$）的函数，因而仍然通过 $u,v,w$ 依赖于 $x,y$。对它们再求偏导时，必须<b>再用一次链式法则</b>，绝不能当常数。很多人丢分就丢在这里。</p><p>顺序上，先求 $\dfrac{\partial z}{\partial x}$，再对 $y$ 求偏导。题目说 $f$ 具有二阶<b>连续</b>偏导数，这保证了 $f_{12}''=f_{21}''$，最后可以合并。</p>`,
      solution: R`<p><b>记号：</b>$u=xy$，$v=\dfrac xy$，$w=\dfrac yx$；$f_1'=\dfrac{\partial f}{\partial u}$，$f_{12}''=\dfrac{\partial^2f}{\partial u\partial v}$，依此类推。先备好中间变量的偏导：</p>$$u_x=y,\ u_y=x;\qquad v_x=\frac1y,\ v_y=-\frac{x}{y^2};\qquad w_x=-\frac{y}{x^2},\ w_y=\frac1x.$$<p><b>第一步：求 $\dfrac{\partial z}{\partial x}$。</b></p>$$\frac{\partial z}{\partial x}=f_1'\cdot u_x+f_2'\cdot v_x+g'\cdot w_x=yf_1'+\frac1yf_2'-\frac{y}{x^2}g'.$$<p><b>第二步：对第一项 $yf_1'$ 关于 $y$ 求偏导。</b>这是乘积，用乘积法则；$f_1'$ 是 $u,v$ 的函数，对 $y$ 求导要走链式：$\dfrac{\partial f_1'}{\partial y}=f_{11}''u_y+f_{12}''v_y=xf_{11}''-\dfrac{x}{y^2}f_{12}''$。所以</p>$$\frac{\partial}{\partial y}\left(yf_1'\right)=f_1'+y\left(xf_{11}''-\frac{x}{y^2}f_{12}''\right)=f_1'+xyf_{11}''-\frac xyf_{12}''.$$<p><b>第三步：对第二项 $\dfrac1yf_2'$ 关于 $y$ 求偏导。</b>同理，$\dfrac{\partial f_2'}{\partial y}=f_{21}''u_y+f_{22}''v_y=xf_{21}''-\dfrac{x}{y^2}f_{22}''$，于是</p>$$\frac{\partial}{\partial y}\left(\frac1yf_2'\right)=-\frac{1}{y^2}f_2'+\frac1y\left(xf_{21}''-\frac{x}{y^2}f_{22}''\right)=-\frac{1}{y^2}f_2'+\frac xyf_{21}''-\frac{x}{y^3}f_{22}''.$$<p><b>第四步：对第三项 $-\dfrac{y}{x^2}g'$ 关于 $y$ 求偏导。</b>$g'$ 是 $w$ 的函数，$\dfrac{\partial g'}{\partial y}=g''\cdot w_y=\dfrac1xg''$，于是</p>$$\frac{\partial}{\partial y}\left(-\frac{y}{x^2}g'\right)=-\frac{1}{x^2}g'-\frac{y}{x^2}\cdot\frac1xg''=-\frac1{x^2}g'-\frac{y}{x^3}g''.$$<p><b>第五步：相加并合并。</b>因 $f$ 的二阶偏导数连续，$f_{12}''=f_{21}''$，于是 $-\dfrac xyf_{12}''+\dfrac xyf_{21}''=0$，恰好抵消。最终</p>$$\frac{\partial^2z}{\partial x\partial y}=f_1'-\frac{1}{y^2}f_2'+xyf_{11}''-\frac{x}{y^3}f_{22}''-\frac{1}{x^2}g'-\frac{y}{x^3}g''.$$<p>其中 $f$ 的各阶偏导在 $\left(xy,\dfrac xy\right)$ 处取值，$g',g''$ 在 $\dfrac yx$ 处取值。</p>`,
      pitfalls: R`<ul><li>对 $f_1'$、$f_2'$、$g'$ 求偏导时把它们当常数，漏掉整组二阶偏导项——这是最常见、扣分最多的错误。</li><li>乘积求导漏项：$yf_1'$ 对 $y$ 求导时，前面的系数 $y$ 也要求导，产生 $f_1'$ 这一项；$\dfrac1yf_2'$ 同理产生 $-\dfrac1{y^2}f_2'$。</li><li>符号错误：$v_y=-\dfrac{x}{y^2}$、$w_x=-\dfrac{y}{x^2}$ 的负号容易丢。</li><li>没有利用 $f_{12}''=f_{21}''$ 合并（或在没有连续性条件时擅自合并）。</li></ul>`,
      summary: R`<p><b>方法要点（抽象复合函数二阶偏导三步法）：</b></p><ol><li>画树形图，写清每个中间变量对 $x,y$ 的偏导；</li><li>求一阶偏导：每条"路径"贡献一项；</li><li>求二阶偏导：对一阶结果的每一项用乘积法则，并牢记 $f_i'$ 仍是"$u,v$ 的函数"，要再沿树形图链式求导一次。</li></ol><p><b>看到…想到…：</b>看到"$f$ 具有二阶连续偏导数" → 想到 $f_{12}''=f_{21}''$ 可以合并；看到 $f(xy,\frac xy)$ 这类结构 → 先算好 $u_x,u_y,v_x,v_y$ 备用，避免反复出错。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 取具体 f(u,v)=u³v²+sin(u)v³+e^{uv}、g(w)=ln(1+w²)+w⁴，直接求 z_xy 与公式结果相减化简为 0' },
      flags: []
    },

    /* ───────────── 五 ───────────── */
    {
      id: '2000-5', year: 2000, no: '五', type: '解答', score: 6,
      stem: R`计算曲线积分 $I=\displaystyle\oint_L\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{4x^2+y^2}$，其中 $L$ 是以点 $(1,0)$ 为中心、$R$ 为半径的圆周 $(R>1)$，取逆时针方向.`,
      options: null,
      answer: R`$I=\pi$`,
      figure: null,
      kp: ['mint.line2'],
      methods: ['格林公式', '挖去奇点（作小椭圆）', '用曲线方程化简被积函数'],
      difficulty: 4,
      analysis: R`<p>封闭曲线上的第二类曲线积分，第一反应是<b>格林公式</b>。先算 $\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}$，会发现它等于 $0$——但是先别急着说答案是 $0$。</p><p>格林公式成立的前提是：$P,Q$ 在曲线围成的<b>整个闭区域</b>上有连续的一阶偏导数。这里 $P,Q$ 的分母 $4x^2+y^2$ 在原点为 $0$，原点是<b>奇点</b>。而 $R>1$ 正是为了让原点落在 $L$ 内部：圆心 $(1,0)$ 到原点的距离是 $1$，小于半径 $R$。所以不能对 $L$ 围成的区域直接用格林公式。</p><p><b>解决办法："挖洞"。</b>在原点周围挖掉一个小区域，在剩下的环形区域上用格林公式。因为环形区域上 $\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}=0$，所以沿大圆 $L$ 的积分等于沿小曲线的积分（同方向）。</p><p><b>小曲线怎么选？</b>这是本题的精髓：选 $4x^2+y^2=\varepsilon^2$ 这个小<b>椭圆</b>，而不是小圆。原因是在这条曲线上分母恒等于 $\varepsilon^2$，是个常数，可以直接提出来，剩下的 $x\,\mathrm{d}y-y\,\mathrm{d}x$ 就很好算了。原则：<b>曲线积分的被积函数可以用积分曲线的方程化简</b>。</p>`,
      solution: R`<p><b>第一步：计算偏导数。</b>$P=\dfrac{-y}{4x^2+y^2}$，$Q=\dfrac{x}{4x^2+y^2}$，当 $(x,y)\ne(0,0)$ 时，</p>$$\frac{\partial Q}{\partial x}=\frac{(4x^2+y^2)-x\cdot8x}{(4x^2+y^2)^2}=\frac{y^2-4x^2}{(4x^2+y^2)^2},\qquad\frac{\partial P}{\partial y}=\frac{-(4x^2+y^2)+y\cdot2y}{(4x^2+y^2)^2}=\frac{y^2-4x^2}{(4x^2+y^2)^2}.$$<p>所以在除原点外的地方 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$。</p><p><b>第二步：确定奇点的位置。</b>原点到圆心 $(1,0)$ 的距离为 $1\lt R$，所以原点在 $L$ 的内部，不能直接对 $L$ 用格林公式。</p><p><b>第三步：挖去奇点。</b>取充分小的 $\varepsilon>0$，作椭圆 $C_\varepsilon:\ 4x^2+y^2=\varepsilon^2$（半轴为 $\dfrac\varepsilon2$ 和 $\varepsilon$），使它完全落在 $L$ 内部，取<b>逆时针</b>方向。记 $L$ 与 $C_\varepsilon$ 之间的环形区域为 $D$（见下图）。</p><svg viewBox="0 0 240 200" width="240" height="200" role="img" aria-label="挖去奇点示意"><title>大圆 L 包含原点，原点处挖去小椭圆</title><line x1="15" y1="100" x2="232" y2="100" stroke="currentColor" stroke-width="1"/><line x1="100" y1="192" x2="100" y2="8" stroke="currentColor" stroke-width="1"/><circle cx="140" cy="100" r="72" fill="none" stroke="currentColor" stroke-width="1.6"/><ellipse cx="100" cy="100" rx="8" ry="16" fill="none" stroke="currentColor" stroke-width="1.4"/><polygon points="132,28 142,23 142,33" fill="currentColor"/><polygon points="96,84 103,80.5 103,87.5" fill="currentColor"/><circle cx="140" cy="100" r="2" fill="currentColor"/><text x="196" y="40" font-size="12" fill="currentColor">L</text><text x="86" y="114" font-size="11" fill="currentColor">O</text><text x="132" y="115" font-size="10" fill="currentColor">(1,0)</text><text x="108" y="80" font-size="11" fill="currentColor">C</text><text x="225" y="94" font-size="11" fill="currentColor">x</text><text x="105" y="14" font-size="11" fill="currentColor">y</text></svg><p>$D$ 内不含原点，$P,Q$ 在 $D$ 上有连续偏导数，可用格林公式。$D$ 的正向边界是：外边界 $L$ 取逆时针，内边界 $C_\varepsilon$ 取<b>顺时针</b>（记作 $C_\varepsilon^-$）——沿边界走时区域始终在左手边。于是</p>$$\oint_L P\,\mathrm{d}x+Q\,\mathrm{d}y+\oint_{C_\varepsilon^-}P\,\mathrm{d}x+Q\,\mathrm{d}y=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\,\mathrm{d}y=0,$$<p>即</p>$$I=\oint_L\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{4x^2+y^2}=\oint_{C_\varepsilon}\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{4x^2+y^2}\quad(C_\varepsilon\ \text{逆时针}).$$<p><b>第四步：在小椭圆上计算。</b>在 $C_\varepsilon$ 上 $4x^2+y^2=\varepsilon^2$，代入分母：</p>$$I=\frac{1}{\varepsilon^2}\oint_{C_\varepsilon}x\,\mathrm{d}y-y\,\mathrm{d}x.$$<p>现在被积式 $-y\,\mathrm{d}x+x\,\mathrm{d}y$ 处处光滑，可以对 $C_\varepsilon$ 围成的椭圆域 $D_\varepsilon$ 用格林公式：$\dfrac{\partial x}{\partial x}-\dfrac{\partial(-y)}{\partial y}=1+1=2$，所以</p>$$\oint_{C_\varepsilon}x\,\mathrm{d}y-y\,\mathrm{d}x=\iint_{D_\varepsilon}2\,\mathrm{d}x\,\mathrm{d}y=2\cdot\pi\cdot\frac{\varepsilon}{2}\cdot\varepsilon=\pi\varepsilon^2,$$<p>这里用了椭圆面积 $=\pi\times$ 两个半轴之积。因此</p>$$I=\frac{1}{\varepsilon^2}\cdot\pi\varepsilon^2=\pi.$$<p><b>结果分析：</b>答案与 $R$ 无关、也与 $\varepsilon$ 无关。这正反映了 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$ 的意义：只要曲线逆时针绕原点一圈，积分值都一样；若 $0\lt R\lt1$（原点在 $L$ 外），直接用格林公式得 $I=0$；$R=1$ 时 $L$ 经过原点，积分无意义。</p>`,
      pitfalls: R`<ul><li>算出 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$ 就直接得 $I=0$——忽略了奇点在 $L$ 内部，格林公式的条件不满足。$R>1$ 这个条件就是在提醒你。</li><li>小曲线的方向搞错。环形区域的正向边界中，内边界是顺时针的；移项后变成沿逆时针 $C_\varepsilon$ 的积分。方向搞反就会得到 $-\pi$。</li><li>小曲线选成圆 $x^2+y^2=\varepsilon^2$：分母 $4x^2+y^2$ 在圆上不是常数，积分变得很难算。</li><li>"用曲线方程代入"只能在<b>曲线积分</b>里做；不能在 $D$ 上的二重积分里把 $4x^2+y^2$ 换成常数。本题中先在曲线上提出 $\dfrac1{\varepsilon^2}$，再对新的光滑被积式 $x\,\mathrm{d}y-y\,\mathrm{d}x$ 用格林公式，这是合法的。</li><li>直接在 $L$ 上参数化（$x=1+R\cos t$，$y=R\sin t$）硬算，积分极其复杂，考场上几乎做不完。</li></ul>`,
      summary: R`<p><b>方法要点：</b>封闭曲线积分的三种情形：</p><ul><li>$Q_x=P_y$ 且曲线内部无奇点 → 积分为 $0$；</li><li>$Q_x=P_y$ 但内部有奇点 → 挖去奇点，换成绕奇点的小曲线，小曲线选成"让分母变常数"的形状；</li><li>$Q_x\ne P_y$ → 直接用格林公式化为二重积分（不封闭就补线）。</li></ul><p><b>看到…想到…：</b>看到分母 $ax^2+by^2$ → 小曲线取 $ax^2+by^2=\varepsilon^2$；看到分母 $(x^2+y^2)^k$ → 取小圆 $x^2+y^2=\varepsilon^2$。看到题目给"$R>1$""$R\ne1$"之类的条件 → 想到在判断奇点是否在曲线内部。</p>`,
      alt: R`<p><b>第四步的另一种算法（参数化小椭圆）：</b>令 $x=\dfrac\varepsilon2\cos t$，$y=\varepsilon\sin t$，$t$ 从 $0$ 到 $2\pi$（逆时针）。则 $4x^2+y^2=\varepsilon^2$，且</p>$$x\,\mathrm{d}y-y\,\mathrm{d}x=\frac\varepsilon2\cos t\cdot\varepsilon\cos t\,\mathrm{d}t-\varepsilon\sin t\cdot\left(-\frac\varepsilon2\sin t\right)\mathrm{d}t=\frac{\varepsilon^2}{2}\,\mathrm{d}t,$$<p>所以 $I=\displaystyle\int_0^{2\pi}\frac{1}{\varepsilon^2}\cdot\frac{\varepsilon^2}{2}\,\mathrm{d}t=\pi$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: Q_x-P_y 化简为 0；对 R=3/2、2、5 在 L 上参数化数值积分均得 3.14159265…=π；R=1/2（原点在外）数值积分为 0' },
      flags: []
    },

    /* ───────────── 六 ───────────── */
    {
      id: '2000-6', year: 2000, no: '六', type: '解答', score: 7,
      stem: R`设对于半空间 $x>0$ 内任意的光滑有向封闭曲面 $S$，都有$$\iint_S xf(x)\,\mathrm{d}y\,\mathrm{d}z-xyf(x)\,\mathrm{d}z\,\mathrm{d}x-\mathrm{e}^{2x}z\,\mathrm{d}x\,\mathrm{d}y=0,$$其中函数 $f(x)$ 在 $(0,+\infty)$ 内具有连续的一阶导数，且 $\lim\limits_{x\to0^+}f(x)=1$. 求 $f(x)$.`,
      options: null,
      answer: R`$f(x)=\dfrac{\mathrm{e}^{x}\left(\mathrm{e}^{x}-1\right)}{x}\quad(x>0)$`,
      figure: null,
      kp: ['mint.surf2', 'ode.first'],
      methods: ['高斯公式', '由区域的任意性得被积函数恒为零', '一阶线性微分方程（积分因子）', '由极限条件确定常数'],
      difficulty: 4,
      analysis: R`<p>未知函数 $f$ 藏在一个积分等式里，目标是把这个等式"翻译"成关于 $f$ 的方程。</p><p><b>为什么想到高斯公式？</b>"封闭曲面 + 第二类曲面积分"是高斯公式的标准使用场景：它把曲面积分变成所围区域上散度的三重积分。</p><p><b>"任意"二字的作用：</b>对任意闭曲面积分为零 → 对任意区域，散度的三重积分为零 → 散度本身恒为零（散度连续时）。这样，积分条件就变成了一个关于 $f$ 的微分方程。</p><p>这类题的整体思路是"<b>积分等式 → 微分方程 → 解方程 → 定常数</b>"。最后一步常数不是用 $f(0)$（$f$ 在 $0$ 处无定义），而是用极限条件 $\lim\limits_{x\to0^+}f(x)=1$ 来定。</p>`,
      solution: R`<p><b>第一步：写出 $P,Q,R$ 并求散度。</b>$P=xf(x)$，$Q=-xyf(x)$，$R=-\mathrm{e}^{2x}z$，</p>$$\frac{\partial P}{\partial x}=f(x)+xf'(x),\qquad\frac{\partial Q}{\partial y}=-xf(x),\qquad\frac{\partial R}{\partial z}=-\mathrm{e}^{2x},$$$$\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=xf'(x)+(1-x)f(x)-\mathrm{e}^{2x}.$$<p><b>第二步：用高斯公式。</b>设 $S$ 所围的有界闭区域为 $\Omega$。因为半空间 $x>0$ 是凸集，$S$ 在其中，$\Omega$ 也完全在 $x>0$ 中，$P,Q,R$ 在 $\Omega$ 上有连续偏导数。由高斯公式（$S$ 取外侧为正、取内侧为负）：</p>$$0=\iint_S P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y=\pm\iiint_\Omega\left[xf'(x)+(1-x)f(x)-\mathrm{e}^{2x}\right]\mathrm{d}v.$$<p><b>第三步：由任意性推出被积函数恒为零。</b>记 $h(x)=xf'(x)+(1-x)f(x)-\mathrm{e}^{2x}$，它在 $x>0$ 上连续。若有某点 $x_0>0$ 使 $h(x_0)\ne0$，不妨设 $h(x_0)>0$，由连续性，存在以 $(x_0,0,0)$ 为心的小球 $\Omega_0\subset\{x>0\}$，在其上 $h>0$；取 $S$ 为这个小球的球面，则 $\iiint_{\Omega_0}h\,\mathrm{d}v>0$，与上式矛盾。所以在 $x>0$ 内</p>$$xf'(x)+(1-x)f(x)=\mathrm{e}^{2x}.$$<p><b>第四步：解一阶线性方程。</b>化成标准形（两边除以 $x>0$）：</p>$$f'(x)+\left(\frac1x-1\right)f(x)=\frac{\mathrm{e}^{2x}}{x}.$$<p>积分因子 $\mu(x)=\mathrm{e}^{\int\left(\frac1x-1\right)\mathrm{d}x}=\mathrm{e}^{\ln x-x}=x\mathrm{e}^{-x}$。两边乘 $\mu$，左边恰为 $\left(x\mathrm{e}^{-x}f\right)'$：</p>$$\left(x\mathrm{e}^{-x}f(x)\right)'=x\mathrm{e}^{-x}\cdot\frac{\mathrm{e}^{2x}}{x}=\mathrm{e}^{x}.$$<p>（验证：$\left(x\mathrm{e}^{-x}f\right)'=\mathrm{e}^{-x}f-x\mathrm{e}^{-x}f+x\mathrm{e}^{-x}f'=\mathrm{e}^{-x}\left[xf'+(1-x)f\right]$，与原方程左边乘 $\mathrm{e}^{-x}$ 一致。）积分得</p>$$x\mathrm{e}^{-x}f(x)=\mathrm{e}^{x}+C\ \Longrightarrow\ f(x)=\frac{\mathrm{e}^{x}\left(\mathrm{e}^{x}+C\right)}{x}=\frac{\mathrm{e}^{2x}+C\mathrm{e}^{x}}{x}.$$<p><b>第五步：用极限条件定常数。</b>$x\to0^+$ 时分母 $x\to0$，而 $f(x)$ 的极限是有限数 $1$，所以分子也必须趋于 $0$：</p>$$\lim_{x\to0^+}\left(\mathrm{e}^{2x}+C\mathrm{e}^{x}\right)=1+C=0\ \Longrightarrow\ C=-1.$$<p>检验：$C=-1$ 时 $f(x)=\mathrm{e}^{x}\cdot\dfrac{\mathrm{e}^{x}-1}{x}$，由 $\mathrm{e}^x-1\sim x$ 得 $\lim\limits_{x\to0^+}f(x)=1\cdot1=1$，满足条件。</p><p>所以</p>$$f(x)=\frac{\mathrm{e}^{x}\left(\mathrm{e}^{x}-1\right)}{x}\quad(x>0).$$`,
      pitfalls: R`<ul><li>求 $\dfrac{\partial Q}{\partial y}$ 时，$Q=-xyf(x)$ 对 $y$ 求导得 $-xf(x)$；$\dfrac{\partial R}{\partial z}$ 中 $R=-\mathrm{e}^{2x}z$ 对 $z$ 求导得 $-\mathrm{e}^{2x}$（不是 $0$）。这两项最容易漏。</li><li>积分因子算错：$\mathrm{e}^{\int(\frac1x-1)\mathrm{d}x}=x\mathrm{e}^{-x}$，不是 $x\mathrm{e}^{x}$。建议求出后像上面那样回代验证"左边是不是 $(\mu f)'$"。</li><li>定常数时把 $x=0$ 代入 $f$——$f$ 在 $0$ 处无定义，必须用"分母趋于 $0$ 则分子也趋于 $0$"的极限思想。</li><li>只写"由 $S$ 的任意性得被积函数为零"而不给理由。考试中简要说明连续性与局部保号即可，但要知道这一步为什么成立。</li><li>忽略半空间的作用：$f$ 只在 $x>0$ 有定义，高斯公式要求 $\Omega$ 在 $x>0$ 内，这是题目强调"半空间 $x>0$ 内"的原因。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"积分等式 → 微分方程"的两条主线：</p><ul><li>对任意闭曲面的曲面积分为零 → 高斯公式 → 散度 $\equiv0$；</li><li>对任意闭曲线的曲线积分为零（或积分与路径无关）→ 格林公式 → $\dfrac{\partial Q}{\partial x}\equiv\dfrac{\partial P}{\partial y}$。</li></ul><p>得到的方程多为一阶线性：$y'+p(x)y=q(x)$，积分因子 $\mathrm{e}^{\int p\,\mathrm{d}x}$，乘完后左边就是 $\left(\mathrm{e}^{\int p}y\right)'$。</p><p><b>看到…想到…：</b>看到"已知 $\lim\limits_{x\to0}f(x)$ 存在"而 $f$ 的表达式分母趋于 $0$ → 想到分子也必须趋于 $0$，由此定常数。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy dsolve 得 f=(C1+e^x)e^x/x；代入 f=e^x(e^x-1)/x：散度 xf\'+(1-x)f-e^{2x} 化简为 0，limit(f,x,0,+)=1' },
      flags: ['原卷图片中积分号为闭曲面积分号 ∯（OCR 转写为 \\iint）；网站 MathJax 不支持 \\oiint，题面仍写作 \\iint_S，题干已明确 S 为封闭曲面，不影响题意']
    },

    /* ───────────── 七 ───────────── */
    {
      id: '2000-7', year: 2000, no: '七', type: '解答', score: 6,
      stem: R`求幂级数 $\displaystyle\sum_{n=1}^{\infty}\frac{1}{3^n+(-2)^n}\frac{x^n}{n}$ 的收敛区间，并讨论该区间端点处的收敛性.`,
      options: null,
      answer: R`收敛区间为 $(-3,3)$；在端点 $x=3$ 处级数发散，在端点 $x=-3$ 处级数收敛（条件收敛），故收敛域为 $[-3,3)$.`,
      figure: null,
      kp: ['series.power', 'series.alt', 'series.positive'],
      methods: ['比值法求收敛半径', '比较判别法', '拆项：收敛 ± 收敛', '莱布尼茨判别法'],
      difficulty: 3,
      analysis: R`<p>幂级数题的标准流程：<b>①求收敛半径 → ②得收敛区间（开区间）→ ③端点处代入，变成数项级数单独判断</b>。</p><p>本题的特点是系数里有 $(-2)^n$，正负交替，看着别扭。处理原则是<b>"抓大头"</b>：$3^n$ 比 $2^n$ 增长快，把它提出来，</p>$$3^n+(-2)^n=3^n\left[1+\left(-\frac23\right)^n\right],\qquad\left(-\frac23\right)^n\to0.$$<p>所以直观上这个级数"很像" $\sum\dfrac{x^n}{n\cdot3^n}$：半径为 $3$，在 $x=3$ 处像调和级数（发散），在 $x=-3$ 处像交错调和级数（收敛）。</p><p>但直观要变成严格论证。难点在 $x=-3$：此时通项的绝对值<b>不单调</b>，不能直接套莱布尼茨判别法。办法是把通项拆成"主部 + 余项"：主部是 $\dfrac{(-1)^n}{n}$（收敛），余项是一个正项级数，用比较法证明它收敛。</p>`,
      solution: R`<p><b>第一步：求收敛半径。</b>记 $a_n=\dfrac{1}{n\left[3^n+(-2)^n\right]}$。由于 $3^n+(-2)^n\ge3^n-2^n>0$，$a_n>0$。</p>$$\frac{a_{n+1}}{a_n}=\frac{n}{n+1}\cdot\frac{3^n+(-2)^n}{3^{n+1}+(-2)^{n+1}}=\frac{n}{n+1}\cdot\frac{3^n\left[1+\left(-\frac23\right)^n\right]}{3^{n+1}\left[1+\left(-\frac23\right)^{n+1}\right]}\to1\cdot\frac13\cdot\frac{1+0}{1+0}=\frac13.$$<p>所以收敛半径 $R=3$，收敛区间为 $(-3,3)$。</p><p><b>第二步：端点 $x=3$。</b>级数为 $\displaystyle\sum_{n=1}^{\infty}\frac{3^n}{3^n+(-2)^n}\cdot\frac1n$，这是正项级数。因为 $3^n+(-2)^n\le3^n+2^n\lt2\cdot3^n$，所以</p>$$\frac{3^n}{3^n+(-2)^n}\cdot\frac1n>\frac{3^n}{2\cdot3^n}\cdot\frac1n=\frac{1}{2n}.$$<p>而 $\sum\dfrac1{2n}$ 发散，由比较判别法，级数在 $x=3$ 处<b>发散</b>。</p><p><b>第三步：端点 $x=-3$——先说明为什么不能直接用莱布尼茨。</b>级数为 $\displaystyle\sum_{n=1}^{\infty}(-1)^nb_n$，其中 $b_n=\dfrac{3^n}{n\left[3^n+(-2)^n\right]}$。算几项：$b_2=\dfrac{9}{26}\approx0.346$，$b_3=\dfrac{9}{19}\approx0.474$，$b_3>b_2$，$b_n$ 并不单调减少，莱布尼茨判别法的条件不满足。</p><p><b>第四步：拆项。</b>利用恒等式</p>$$\frac{3^n}{3^n+(-2)^n}=1-\frac{(-2)^n}{3^n+(-2)^n},$$<p>两边乘 $(-1)^n$，并注意 $(-1)^n(-2)^n=2^n$：</p>$$\frac{(-3)^n}{3^n+(-2)^n}=(-1)^n-\frac{2^n}{3^n+(-2)^n}.$$<p>于是 $x=-3$ 时的通项为</p>$$\frac{(-1)^n}{n}-\frac{2^n}{n\left[3^n+(-2)^n\right]}.$$<p><b>第五步：两部分分别判断。</b></p><ul><li>$\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n}$：$\dfrac1n$ 单调减趋于 $0$，由莱布尼茨判别法收敛。</li><li>$\displaystyle\sum_{n=1}^{\infty}\frac{2^n}{n\left[3^n+(-2)^n\right]}$：正项级数。由于 $3^n-2^n-3^{n-1}=2\left(3^{n-1}-2^{n-1}\right)\ge0$，有 $3^n+(-2)^n\ge3^n-2^n\ge3^{n-1}$，所以通项 $\le\dfrac{2^n}{3^{n-1}}=3\left(\dfrac23\right)^n$，而几何级数 $\sum3\left(\dfrac23\right)^n$ 收敛，由比较判别法它收敛。</li></ul><p>两个收敛级数之差收敛，所以级数在 $x=-3$ 处<b>收敛</b>。又因为 $|(-1)^nb_n|=b_n>\dfrac1{2n}$（同第二步），$\sum b_n$ 发散，所以是<b>条件收敛</b>。</p><p><b>结论：</b>收敛区间为 $(-3,3)$；$x=3$ 处发散，$x=-3$ 处（条件）收敛，收敛域为 $[-3,3)$。</p>`,
      pitfalls: R`<ul><li>在 $x=-3$ 处直接用莱布尼茨判别法：$b_n$ 不单调（$b_3>b_2$，$b_5>b_4$），条件不满足，论证不成立。</li><li>在 $x=-3$ 处用"通项与 $\dfrac{(-1)^n}{n}$ 等价"来下结论——<b>等价（极限形式的比较）判别法只适用于正项级数</b>，对变号级数无效。在 $x=3$ 处级数是正项的，用"$n\cdot$ 通项 $\to1$，与 $\sum\frac1n$ 同敛散"是可以的。</li><li>处理 $(-2)^n$ 时符号出错：$(-1)^n(-2)^n=2^n$，要算清楚。</li><li>混淆"收敛区间"与"收敛域"：收敛区间指开区间 $(-R,R)$，收敛域还要加上收敛的端点。</li></ul>`,
      summary: R`<p><b>方法要点：</b>系数中出现 $a^n+b^n$ 时，提出绝对值较大的那个，收敛半径由 $\max\{|a|,|b|\}$ 决定。端点处：正项级数用比较法（含极限形式）；变号级数若通项绝对值不单调，就"拆成主部 + 余项"，主部用莱布尼茨，余项用比较法证绝对收敛。</p><p><b>看到…想到…：</b></p><ul><li>看到 $3^n+(-2)^n$ → 想到 $3^n\left[1+\left(-\frac23\right)^n\right]$，"抓大头"。</li><li>看到交错级数但 $b_n$ 不单调 → 想到拆项或泰勒展开分离出主部。</li><li>看到"等价"判别 → 先确认级数是不是正项的。</li></ul>`,
      alt: R`<p><b>收敛半径的另一种求法（根值法）：</b></p>$$\sqrt[n]{a_n}=\frac{1}{3\sqrt[n]{n}\cdot\sqrt[n]{1+\left(-\frac23\right)^n}}\to\frac13,$$<p>同样得 $R=3$。这里用到 $\sqrt[n]n\to1$，以及 $1+\left(-\frac23\right)^n$ 介于 $\frac13$ 与 $\frac53$ 之间，其 $n$ 次方根趋于 $1$。</p>`,
      verify: { by: 'mixed', ok: true, note: '精确有理数计算：a_{n+1}/a_n 在 n=1000 时为 0.333…；n·(x=3 处通项) → 1；拆项恒等式对 n=1..29 逐一验证；3^n+(-2)^n≥3^{n-1} 及 3^n/(3^n+(-2)^n)>1/2 对 n<200 验证；b_2=9/26<b_3=9/19 确认不单调；mpmath nsum 在 x=-3 处收敛到约 -3.0934' },
      flags: []
    },

    /* ───────────── 八 ───────────── */
    {
      id: '2000-8', year: 2000, no: '八', type: '解答', score: 7,
      stem: R`设有一半径为 $R$ 的球体，$P_0$ 是此球的表面上的一个定点，球体上任一点的密度与该点到 $P_0$ 距离的平方成正比（比例常数 $k>0$），求球体的重心位置.`,
      options: null,
      answer: R`以球心 $O$ 为原点、射线 $OP_0$ 为 $z$ 轴正向建立坐标系（$P_0=(0,0,R)$），重心为 $\left(0,0,-\dfrac R4\right)$. 即重心在直线 $P_0O$ 上、位于球心背离 $P_0$ 的一侧，与球心相距 $\dfrac R4$（与 $P_0$ 相距 $\dfrac{5R}{4}$）.`,
      figure: null,
      kp: ['mint.field', 'mint.triple'],
      methods: ['重心（质心）公式', '建立坐标系', '对称性与奇偶性', '轮换对称性', '球面坐标'],
      difficulty: 3,
      analysis: R`<p>题目没有给坐标系，<b>第一步是自己建系</b>。建系的原则：让区域和被积函数都尽量简单，最好能用上对称性。</p><p>两种自然的选择：</p><ul><li>球心为原点，$P_0=(0,0,R)$：球体是 $x^2+y^2+z^2\le R^2$，非常简单；密度 $k\left[x^2+y^2+(z-R)^2\right]$ 展开后是 $k(x^2+y^2+z^2-2Rz+R^2)$，各项都能用对称性或球坐标轻松处理。</li><li>$P_0$ 为原点：密度变成 $k(x^2+y^2+z^2)$ 很简单，但球体变成 $x^2+y^2+(z-R)^2\le R^2$，在球坐标下是 $r\le2R\cos\varphi$，积分稍繁。</li></ul><p>选第一种。重心公式 $\bar z=\dfrac{\iiint z\rho\,\mathrm{d}v}{\iiint\rho\,\mathrm{d}v}$。</p><p><b>先用物理直觉预判：</b>密度随离 $P_0$ 的距离增大而增大，远离 $P_0$ 的那半边更"重"，所以重心应当从球心向<b>背离</b> $P_0$ 的方向偏移，即 $\bar z\lt0$。算完后用它检查结果。</p>`,
      solution: R`<p><b>第一步：建系。</b>以球心为原点，使 $P_0=(0,0,R)$，球体 $\Omega:\ x^2+y^2+z^2\le R^2$，密度</p>$$\rho(x,y,z)=k\left[x^2+y^2+(z-R)^2\right]=k\left(x^2+y^2+z^2-2Rz+R^2\right).$$<p><b>第二步：用对称性定出 $\bar x,\bar y$。</b>$\rho$ 只通过 $x^2$ 依赖 $x$，所以 $x\rho$ 关于 $x$ 是奇函数，而 $\Omega$ 关于 $yOz$ 面对称，故 $\iiint_\Omega x\rho\,\mathrm{d}v=0$，$\bar x=0$。同理 $\bar y=0$。（物理上：质量分布绕 $z$ 轴旋转对称，重心必在 $z$ 轴上。）</p><p><b>第三步：准备两个基本积分。</b>用球面坐标（$\mathrm{d}v=r^2\sin\varphi\,\mathrm{d}r\,\mathrm{d}\varphi\,\mathrm{d}\theta$）：</p>$$\iiint_\Omega(x^2+y^2+z^2)\,\mathrm{d}v=\int_0^{2\pi}\mathrm{d}\theta\int_0^{\pi}\sin\varphi\,\mathrm{d}\varphi\int_0^R r^4\,\mathrm{d}r=2\pi\cdot2\cdot\frac{R^5}{5}=\frac{4\pi R^5}{5}.$$<p>由轮换对称性（球体关于 $x,y,z$ 地位相同），$\iiint x^2=\iiint y^2=\iiint z^2$，所以</p>$$\iiint_\Omega z^2\,\mathrm{d}v=\frac13\iiint_\Omega(x^2+y^2+z^2)\,\mathrm{d}v=\frac{4\pi R^5}{15}.$$<p><b>第四步：求质量 $M$。</b></p>$$M=k\iiint_\Omega(x^2+y^2+z^2)\,\mathrm{d}v-2Rk\iiint_\Omega z\,\mathrm{d}v+kR^2\iiint_\Omega\mathrm{d}v.$$<p>中间一项：$z$ 关于 $z$ 是奇函数，$\Omega$ 关于 $xOy$ 面对称，积分为 $0$。最后一项是球的体积 $\dfrac43\pi R^3$。所以</p>$$M=k\left(\frac{4\pi R^5}{5}+\frac{4\pi R^5}{3}\right)=\frac{32\pi kR^5}{15}.$$<p><b>第五步：求 $\iiint z\rho\,\mathrm{d}v$。</b></p>$$\iiint_\Omega z\rho\,\mathrm{d}v=k\iiint_\Omega z(x^2+y^2+z^2)\,\mathrm{d}v-2Rk\iiint_\Omega z^2\,\mathrm{d}v+kR^2\iiint_\Omega z\,\mathrm{d}v.$$<p>第一、三项被积函数关于 $z$ 是奇函数，积分为 $0$，只剩中间一项：</p>$$\iiint_\Omega z\rho\,\mathrm{d}v=-2Rk\cdot\frac{4\pi R^5}{15}=-\frac{8\pi kR^6}{15}.$$<p><b>第六步：求重心。</b></p>$$\bar z=\frac{-\frac{8\pi kR^6}{15}}{\frac{32\pi kR^5}{15}}=-\frac R4.$$<p>重心为 $\left(0,0,-\dfrac R4\right)$，与"重心偏离 $P_0$"的直觉一致。</p><p><b>第七步：用几何语言回答。</b>坐标系是我们自己建的，答案要说清楚它在球里的位置：重心在 $P_0$ 与球心 $O$ 的连线上，位于球心背离 $P_0$ 的一侧，到球心的距离为 $\dfrac R4$（到 $P_0$ 的距离为 $\dfrac{5R}{4}$），而且与比例常数 $k$ 无关。</p>`,
      pitfalls: R`<ul><li>密度写错：点 $(x,y,z)$ 到 $P_0(0,0,R)$ 的距离平方是 $x^2+y^2+(z-R)^2$，不是 $x^2+y^2+z^2$（后者是到球心的距离）。</li><li>"逢积分必硬算"：$\iiint z\,\mathrm{d}v$、$\iiint z(x^2+y^2+z^2)\,\mathrm{d}v$ 用奇偶性一眼为 $0$，硬算既慢又容易出错。</li><li>球面坐标体积元漏掉 $r^2\sin\varphi$，或 $\varphi$ 的范围写成 $[0,2\pi]$（应为 $[0,\pi]$）。</li><li>只给坐标 $\left(0,0,-\frac R4\right)$ 而不说明坐标系——题目没有坐标系，答案必须说明建系方式或用几何语言描述。</li></ul>`,
      summary: R`<p><b>方法要点：</b>求重心（质心）：$\bar x=\dfrac{\iiint x\rho\,\mathrm{d}v}{\iiint\rho\,\mathrm{d}v}$ 等。计算前先做三件事：①建系让区域最简单；②用对称性直接定出某些坐标为 $0$；③展开被积函数，奇函数项直接扔掉，$x^2,y^2,z^2$ 用轮换对称化成 $\frac13(x^2+y^2+z^2)$。</p><p><b>看到…想到…：</b></p><ul><li>看到"题目没给坐标系"→ 想到自己建系，优先让区域关于坐标面对称。</li><li>看到在球体上积分 $z^2$ → 想到 $\iiint z^2=\frac13\iiint r^2$。</li><li>算出结果后 → 用物理直觉（"重的一侧把重心拉过去"）检查符号。</li></ul>`,
      alt: R`<p><b>另解（以 $P_0$ 为原点）：</b>令 $P_0$ 为原点、球心为 $(0,0,R)$，则球体为 $x^2+y^2+(z-R)^2\le R^2$，在球面坐标下为 $0\le r\le2R\cos\varphi$，$0\le\varphi\le\dfrac\pi2$；密度 $\rho=kr^2$。</p>$$M=k\int_0^{2\pi}\mathrm{d}\theta\int_0^{\pi/2}\sin\varphi\,\mathrm{d}\varphi\int_0^{2R\cos\varphi}r^4\,\mathrm{d}r=2\pi k\int_0^{\pi/2}\frac{32R^5\cos^5\varphi}{5}\sin\varphi\,\mathrm{d}\varphi=2\pi k\cdot\frac{32R^5}{5}\cdot\frac16=\frac{32\pi kR^5}{15},$$$$\iiint z\rho\,\mathrm{d}v=k\int_0^{2\pi}\mathrm{d}\theta\int_0^{\pi/2}\cos\varphi\sin\varphi\,\mathrm{d}\varphi\int_0^{2R\cos\varphi}r^5\,\mathrm{d}r=2\pi k\cdot\frac{64R^6}{6}\int_0^{\pi/2}\cos^7\varphi\sin\varphi\,\mathrm{d}\varphi=2\pi k\cdot\frac{32R^6}{3}\cdot\frac18=\frac{8\pi kR^6}{3}.$$<p>于是 $\bar z=\dfrac{8\pi kR^6/3}{32\pi kR^5/15}=\dfrac{5R}{4}$，即重心距 $P_0$ 为 $\dfrac{5R}4$、在球心 $(0,0,R)$ 再往外 $\dfrac R4$ 处，与上面的结论一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 球坐标三重积分：球心为原点时 M=32πkR⁵/15，∭zρ=-8πkR⁶/15，z̄=-R/4；以 P0 为原点时 M 相同，z̄=5R/4，两种建系结果一致' },
      flags: []
    },

    /* ───────────── 九 ───────────── */
    {
      id: '2000-9', year: 2000, no: '九', type: '解答', score: 6,
      stem: R`设函数 $f(x)$ 在 $[0,\pi]$ 上连续，且 $\displaystyle\int_0^\pi f(x)\,\mathrm{d}x=0$，$\displaystyle\int_0^\pi f(x)\cos x\,\mathrm{d}x=0$. 试证：在 $(0,\pi)$ 内至少存在两个不同的点 $\xi_1,\xi_2$，使 $f(\xi_1)=f(\xi_2)=0$.`,
      options: null,
      answer: R`证明题。要点：令 $F(x)=\displaystyle\int_0^xf(t)\,\mathrm{d}t$，则 $F(0)=F(\pi)=0$；分部积分得 $\displaystyle\int_0^\pi F(x)\sin x\,\mathrm{d}x=0$，从而 $F$ 在 $(0,\pi)$ 内有零点 $\eta$；再对 $F$ 在 $[0,\eta]$、$[\eta,\pi]$ 上分别用罗尔定理.`,
      figure: null,
      kp: ['int.proof', 'diff.mvt', 'lim.closed'],
      methods: ['变限积分构造辅助函数', '分部积分', '积分的保号性（反证）', '罗尔定理'],
      difficulty: 5,
      analysis: R`<p><b>目标是什么？</b>证 $f$ 在 $(0,\pi)$ 内有两个不同的零点。</p><p><b>手里有什么？</b>$f$ 只是连续，没说可导——所以不能对 $f$ 用罗尔定理。条件全是积分形式。</p><p><b>怎么把"积分条件"和"零点"联系起来？</b>引入原函数 $F(x)=\int_0^xf(t)\,\mathrm{d}t$。因为 $F'=f$，"$f$ 的零点"就是"$F'$ 的零点"，而罗尔定理正是用来找导数零点的：</p><ul><li>$F$ 有 $2$ 个零点 → 罗尔一次 → $f$ 有 $1$ 个零点；</li><li>$F$ 有 $3$ 个零点 → 罗尔两次 → $f$ 有 $2$ 个零点。</li></ul><p>$F(0)=0$ 是天然的，$F(\pi)=\int_0^\pi f=0$ 是第一个条件给的——已经有两个零点了，还差<b>一个在内部的零点</b>。</p><p><b>第二个条件怎么用？</b>$\int_0^\pi f(x)\cos x\,\mathrm{d}x$ 里出现的是 $f$，而我们关心的是 $F$。<b>分部积分</b>正好能把 $f$ "积回" $F$，把导数转移到 $\cos x$ 上：它会变成 $\int_0^\pi F(x)\sin x\,\mathrm{d}x=0$。而 $\sin x$ 在 $(0,\pi)$ 内恒正，一个连续函数乘上恒正的权重后积分为零，它就不可能在 $(0,\pi)$ 内保持同号——必有零点。这就是缺的第三个零点。</p>`,
      solution: R`<p><b>第一步：构造辅助函数。</b>令 $F(x)=\displaystyle\int_0^xf(t)\,\mathrm{d}t,\ x\in[0,\pi]$。因为 $f$ 在 $[0,\pi]$ 上连续，由微积分基本定理，$F$ 在 $[0,\pi]$ 上可导且 $F'(x)=f(x)$。并且</p>$$F(0)=0,\qquad F(\pi)=\int_0^\pi f(x)\,\mathrm{d}x=0.$$<p><b>第二步：分部积分，翻译第二个条件。</b></p>$$0=\int_0^\pi f(x)\cos x\,\mathrm{d}x=\int_0^\pi\cos x\,\mathrm{d}F(x)=\Big[F(x)\cos x\Big]_0^\pi+\int_0^\pi F(x)\sin x\,\mathrm{d}x.$$<p>边界项 $F(\pi)\cos\pi-F(0)\cos0=0-0=0$，所以</p>$$\int_0^\pi F(x)\sin x\,\mathrm{d}x=0.$$<p><b>第三步：证明 $F$ 在 $(0,\pi)$ 内有零点 $\eta$。</b>用反证法。假设 $F$ 在 $(0,\pi)$ 内没有零点。$F$ 连续，由介值定理，$F$ 在 $(0,\pi)$ 内不变号（否则一正一负之间必有零点），不妨设 $F(x)>0$，$x\in(0,\pi)$。又 $\sin x>0$，$x\in(0,\pi)$，于是 $g(x)=F(x)\sin x$ 在 $[0,\pi]$ 上连续、非负，且在内部某点 $x_0$ 处 $g(x_0)>0$。由连续性，存在 $\delta>0$ 使 $[x_0-\delta,x_0+\delta]\subset(0,\pi)$ 且其上 $g(x)>\dfrac{g(x_0)}{2}$，所以</p>$$\int_0^\pi g(x)\,\mathrm{d}x\ge\int_{x_0-\delta}^{x_0+\delta}g(x)\,\mathrm{d}x\ge\frac{g(x_0)}{2}\cdot2\delta>0,$$<p>与第二步矛盾。（若 $F\lt0$，同理得积分 $\lt0$，也矛盾。）所以存在 $\eta\in(0,\pi)$，使 $F(\eta)=0$。</p><p><b>第四步：两次罗尔定理。</b>现在 $F(0)=F(\eta)=F(\pi)=0$，其中 $0\lt\eta\lt\pi$。</p><ul><li>在 $[0,\eta]$ 上：$F$ 连续，在 $(0,\eta)$ 内可导，$F(0)=F(\eta)$，由罗尔定理存在 $\xi_1\in(0,\eta)$ 使 $F'(\xi_1)=f(\xi_1)=0$；</li><li>在 $[\eta,\pi]$ 上：同理存在 $\xi_2\in(\eta,\pi)$ 使 $f(\xi_2)=0$。</li></ul><p>由于 $\xi_1\lt\eta\lt\xi_2$，两点不同，且都在 $(0,\pi)$ 内。证毕。</p><p><b>一个具体例子帮助理解：</b>$f(x)=\cos2x$ 满足 $\int_0^\pi\cos2x\,\mathrm{d}x=0$、$\int_0^\pi\cos2x\cos x\,\mathrm{d}x=0$，它在 $(0,\pi)$ 内的零点是 $\dfrac\pi4$ 和 $\dfrac{3\pi}4$；此时 $F(x)=\dfrac{\sin2x}{2}$，内部零点 $\eta=\dfrac\pi2$，恰好夹在两个零点之间。</p>`,
      pitfalls: R`<ul><li>直接对 $f$ 用罗尔定理：$f$ 只连续、不一定可导，而且也没有 $f$ 的函数值条件。正确的对象是原函数 $F$。</li><li>只用第一个条件 $F(0)=F(\pi)=0$，罗尔一次只能得到一个零点，第二个条件被浪费了。</li><li>用积分中值定理写"存在 $\xi\in[0,\pi]$ 使 $F(\xi)\sin\xi=0$"——教材版本的 $\xi$ 可能是端点 $0$ 或 $\pi$，而那里 $\sin\xi=0$，什么也推不出。必须用上面的反证法（或说明中值点可取在开区间内）。</li><li>没有说明 $\xi_1\ne\xi_2$。它们分别属于不相交的开区间 $(0,\eta)$ 与 $(\eta,\pi)$，这一句不能省。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"由积分条件证零点个数"的标准套路——<b>积分条件求零点，原函数来帮忙；$F$ 多一个零点，罗尔多用一次</b>。</p><ul><li>令 $F(x)=\int_a^xf(t)\,\mathrm{d}t$，把"$f$ 的零点"转化为"$F'$ 的零点"；</li><li>"$\int f\cdot g=0$"型条件，用分部积分把 $f$ 变成 $F$；</li><li>"连续函数 $\times$ 恒正权重，积分为 $0$"→ 该函数在区间内必有零点（保号性反证）。</li></ul><p><b>看到…想到…：</b>看到"$f$ 连续 + 若干积分为 $0$ + 证 $f$ 有若干零点" → 想到构造变限积分 $F$ 并数 $F$ 的零点。</p>`,
      alt: R`<p><b>另证（直接对 $f$ 反证，构造"同步变号"的检验函数）：</b></p><p>①先证 $f$ 在 $(0,\pi)$ 内至少有一个零点：若没有，$f$ 在 $(0,\pi)$ 内不变号且连续，则 $\int_0^\pi f\ne0$，矛盾。设零点为 $c$。</p><p>②假设 $c$ 是 $(0,\pi)$ 内唯一零点。则 $f$ 在 $(0,c)$ 和 $(c,\pi)$ 内各自不变号，而且两侧<b>符号相反</b>（若同号，则 $f$ 在 $(0,\pi)$ 内除一点外同号，$\int_0^\pi f\ne0$，矛盾）。不妨设 $f>0$ 于 $(0,c)$，$f\lt0$ 于 $(c,\pi)$。</p><p>③关键构造：考虑 $\cos x-\cos c$。因为 $\cos x$ 在 $[0,\pi]$ 上严格减，所以它在 $(0,c)$ 内为正、在 $(c,\pi)$ 内为负——<b>与 $f$ 同步变号</b>。于是 $f(x)(\cos x-\cos c)>0$ 对 $x\in(0,c)\cup(c,\pi)$ 成立，从而</p>$$\int_0^\pi f(x)(\cos x-\cos c)\,\mathrm{d}x>0.$$<p>④但由两个条件，$\displaystyle\int_0^\pi f(x)(\cos x-\cos c)\,\mathrm{d}x=\int_0^\pi f(x)\cos x\,\mathrm{d}x-\cos c\int_0^\pi f(x)\,\mathrm{d}x=0$，矛盾。所以 $f$ 至少有两个零点。</p><p>这个证法揭示了题目的本质：$f$ 与 $1$、$\cos x$ 都"正交"，而 $1$ 与 $\cos x$ 的线性组合可以在任意一点 $c$ 处变号，所以 $f$ 至少要变号两次。</p>`,
      verify: { by: 'proof', ok: true, note: '证明逐步核对（FTC、分部积分边界项、介值定理与保号性反证、罗尔定理条件）；sympy 验证例子 f=cos2x：两积分均为 0，F=sin(2x)/2，∫F sin x=0，零点 π/4、3π/4' },
      flags: []
    }
  ];
});
