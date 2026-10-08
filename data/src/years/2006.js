// 2006 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 13 题：填空 1、2、3、4；选择 7、8、9、10；解答 15、16、17、18、19
registerYear(2006, function (R) {
  return [
    /* ───────────────────────── 第 1 题 ───────────────────────── */
    {
      id: '2006-1', year: 2006, no: '第1题', type: '填空', score: 4,
      stem: R`$\displaystyle\lim_{x\to 0}\frac{x\ln(1+x)}{1-\cos x}=$ ______．`,
      options: null,
      answer: R`$2$`,
      figure: null,
      kp: ['lim.compute', 'lim.inf'],
      methods: ['等价无穷小代换'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>最基本的 $\frac00$ 型未定式，核心工具是<b>等价无穷小代换</b>。</p>
<p><b>为什么想到等价代换：</b>先看结构——分子 $x\cdot\ln(1+x)$ 是两个因子<b>相乘</b>，分母 $1-\cos x$ 是一个整体。乘除结构是等价代换最舒服的场景，因为"乘除可以整体换"。而 $\ln(1+x)$ 与 $1-\cos x$ 恰好都在"常用等价无穷小表"里，这是出题人给的明显信号。</p>
<p><b>先用"阶数"估一估：</b>分子是 $x\cdot x$，2 阶无穷小；分母 $1-\cos x\sim\frac12x^2$，也是 2 阶。分子分母同阶，所以极限一定是一个非零常数，等于两边"首项系数"之比 $\dfrac{1}{1/2}=2$。养成先估阶的习惯，能在动笔之前就知道答案大概是什么样子。</p>`,
      solution: R`<p><b>第一步：判断类型。</b>$x\to0$ 时，分子 $x\ln(1+x)\to0\cdot0=0$，分母 $1-\cos x\to1-1=0$，是 $\frac00$ 型未定式，不能直接代入。</p>
<p><b>第二步：写出要用的等价无穷小。</b>$x\to0$ 时</p>
$$\ln(1+x)\sim x,\qquad 1-\cos x\sim\frac12x^2.$$
<p>第二个关系的来历：由半角公式 $1-\cos x=2\sin^2\frac x2$，而 $\sin\frac x2\sim\frac x2$，所以 $1-\cos x\sim2\cdot\left(\frac x2\right)^2=\frac12x^2$。这个式子必须记牢，系数 $\frac12$ 是最常被丢掉的地方。</p>
<p><b>第三步：说明为什么可以代换。</b>等价代换定理：若 $\alpha\sim\alpha'$，$\beta\sim\beta'$，且 $\lim\dfrac{\alpha'}{\beta'}$ 存在，则 $\lim\dfrac{\alpha}{\beta}=\lim\dfrac{\alpha'}{\beta'}$。证明只需一行：</p>
$$\frac{\alpha}{\beta}=\frac{\alpha}{\alpha'}\cdot\frac{\alpha'}{\beta'}\cdot\frac{\beta'}{\beta},$$
<p>两端的因子极限都是 $1$。可见代换的对象必须是整个分子（或分母）中的<b>乘积因子</b>。本题分子是 $x$ 与 $\ln(1+x)$ 的乘积，把因子 $\ln(1+x)$ 换成 $x$ 完全合法。</p>
<p><b>第四步：代换并计算。</b></p>
$$\lim_{x\to0}\frac{x\ln(1+x)}{1-\cos x}=\lim_{x\to0}\frac{x\cdot x}{\frac12x^2}=\lim_{x\to0}\frac{x^2}{\frac12x^2}=2.$$
<p>所以答案是 $2$。</p>`,
      pitfalls: R`<ul><li><b>把 $1-\cos x$ 记成 $\sim x^2$</b>，丢了系数 $\frac12$，得到错误答案 $1$。记忆方法：$\cos x=1-\frac{x^2}{2}+\cdots$，所以 $1-\cos x$ 的首项就是 $\frac{x^2}{2}$。</li><li><b>直接硬用洛必达</b>：第一次求导后得到 $\dfrac{\ln(1+x)+\frac{x}{1+x}}{\sin x}$，仍是 $\frac00$，还要再求一次，计算量大且容易出错。能等价代换就先等价代换。</li><li>等价代换只能对<b>乘除因子</b>使用，不能对加减中的某一项单独替换；本题恰好全是乘除，所以放心用。</li></ul>`,
      summary: R`<p><b>方法要点：</b>$\frac00$ 型极限的第一反应是"先化简、再等价、最后才洛必达或泰勒"。</p>
<p><b>必背等价无穷小（$x\to0$）：</b>$\sin x,\ \tan x,\ \arcsin x,\ \arctan x,\ \ln(1+x),\ \mathrm{e}^x-1\sim x$；$1-\cos x\sim\frac12x^2$；$(1+x)^a-1\sim ax$。</p>
<p><b>题型识别：</b></p><ul><li>看到 $\frac00$ 且分子分母都是"乘积形式" → 想到逐个因子等价代换。</li><li>看到 $1-\cos(\cdot)$ → 立刻写成 $\frac12(\cdot)^2$。</li><li>动笔前先数阶：分子分母同阶 → 极限为非零常数；分子阶高 → 极限为 0；分母阶高 → 极限为 ∞。</li></ul>`,
      alt: R`<p><b>泰勒展开法：</b>$x\ln(1+x)=x\left(x-\frac{x^2}{2}+o(x^2)\right)=x^2+o(x^2)$，$1-\cos x=\frac{x^2}{2}+o(x^2)$，于是</p>$$\lim_{x\to0}\frac{x^2+o(x^2)}{\frac{x^2}{2}+o(x^2)}=\lim_{x\to0}\frac{1+o(1)}{\frac12+o(1)}=2.$$<p>泰勒法是等价代换的"升级版"：等价代换只用到展开式的首项，泰勒展开则可以保留任意多项，加减运算时更可靠。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit(x*log(1+x)/(1-cos(x)), x, 0) = 2' },
      flags: []
    },

    /* ───────────────────────── 第 2 题 ───────────────────────── */
    {
      id: '2006-2', year: 2006, no: '第2题', type: '填空', score: 4,
      stem: R`微分方程 $y'=\dfrac{y(1-x)}{x}$ 的通解是 ______．`,
      options: null,
      answer: R`$y=Cx\mathrm{e}^{-x}$（$C$ 为任意常数）`,
      figure: null,
      kp: ['ode.first', 'ode.basic'],
      methods: ['分离变量法', '一阶线性齐次方程通解公式'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>一阶微分方程的判型与求解。</p>
<p><b>怎么判型：</b>解一阶方程的第一件事永远是"认类型"。右端 $\dfrac{y(1-x)}{x}=y\cdot\dfrac{1-x}{x}$，是"只含 $y$ 的因子"乘以"只含 $x$ 的因子"，即 $y'=g(y)h(x)$ 的形式——这正是<b>可分离变量方程</b>的标志。把含 $y$ 的放一边、含 $x$ 的放另一边，两边各自积分即可。</p>
<p><b>换个角度看：</b>移项得 $y'+\left(1-\frac1x\right)y=0$，它也是<b>一阶线性齐次方程</b> $y'+P(x)y=0$，可以直接套通解公式 $y=C\mathrm{e}^{-\int P(x)\,\mathrm{d}x}$。两种看法殊途同归。</p>`,
      solution: R`<p><b>第一步：先把显然的解记下来。</b>$y\equiv0$ 代入方程两边都是 $0$，所以 $y=0$ 是一个解。下面在 $y\ne0$ 时分离变量，最后再把它并进去。</p>
<p><b>第二步：分离变量。</b>把 $y'$ 写成 $\dfrac{\mathrm{d}y}{\mathrm{d}x}$，两边同除以 $y$、同乘以 $\mathrm{d}x$：</p>
$$\frac{\mathrm{d}y}{y}=\frac{1-x}{x}\,\mathrm{d}x=\left(\frac1x-1\right)\mathrm{d}x.$$
<p>这里把 $\frac{1-x}{x}$ 拆成 $\frac1x-1$，是为了每一项都能直接查积分表。</p>
<p><b>第三步：两边积分。</b></p>
$$\int\frac{\mathrm{d}y}{y}=\int\left(\frac1x-1\right)\mathrm{d}x\ \Longrightarrow\ \ln|y|=\ln|x|-x+C_1.$$
<p><b>第四步：去掉对数。</b>两边取指数：</p>
$$|y|=\mathrm{e}^{C_1}\,|x|\,\mathrm{e}^{-x}\ \Longrightarrow\ y=\pm\mathrm{e}^{C_1}\,x\,\mathrm{e}^{-x}.$$
<p>记 $C=\pm\mathrm{e}^{C_1}$，它可以取任意非零实数；再把第一步的解 $y=0$（对应 $C=0$）并进来，$C$ 就可以取任意实数。所以通解为</p>
$$y=Cx\mathrm{e}^{-x}\quad(C\ \text{为任意常数}).$$
<p><b>第五步：代回检验。</b>$y'=C\mathrm{e}^{-x}-Cx\mathrm{e}^{-x}=C\mathrm{e}^{-x}(1-x)$，而 $\dfrac{y(1-x)}{x}=\dfrac{Cx\mathrm{e}^{-x}(1-x)}{x}=C\mathrm{e}^{-x}(1-x)$，两者相等。✓</p>`,
      pitfalls: R`<ul><li><b>常数位置放错：</b>积分得到 $\ln|y|=\ln|x|-x+C_1$ 后，取指数时常数变成了<b>乘法因子</b>，通解是 $y=Cx\mathrm{e}^{-x}$，而不是 $y=x\mathrm{e}^{-x}+C$。这是初学者最常见的错误。</li><li><b>拆分出错：</b>$\frac{1-x}{x}=\frac1x-1$，有人误写成 $\frac1x-x$，积分就错了。</li><li><b>丢解：</b>分离变量时除以了 $y$，要回头检查 $y=0$ 是否为解；本题中它恰好被 $C=0$ 包含，所以通解写成"$C$ 为任意常数"是完整的。</li></ul>`,
      summary: R`<p><b>一阶方程判型顺序：</b>可分离变量 → 齐次方程（$y'=\varphi(y/x)$）→ 一阶线性（$y'+P(x)y=Q(x)$）→ 伯努利方程 → 全微分方程。按这个顺序一个个对照，总能找到类型。</p>
<p><b>题型识别：</b></p><ul><li>看到 $y'=h(x)g(y)$（右端能拆成"$x$ 的函数 × $y$ 的函数"）→ 想到分离变量。</li><li>看到 $y'+P(x)y=0$ → 直接写 $y=C\mathrm{e}^{-\int P(x)\mathrm{d}x}$。</li><li>积分出现 $\ln|y|=\cdots+C_1$ → 指数化后常数变为乘法常数 $C$，绝对值的正负号也被 $C$ 吸收。</li></ul>`,
      alt: R`<p><b>用一阶线性齐次方程的公式：</b>方程化为 $y'+P(x)y=0$，其中 $P(x)=1-\frac1x$。由公式</p>$$y=C\mathrm{e}^{-\int P(x)\,\mathrm{d}x}=C\mathrm{e}^{-\int\left(1-\frac1x\right)\mathrm{d}x}=C\mathrm{e}^{-x+\ln|x|}=C|x|\mathrm{e}^{-x},$$<p>绝对值的符号并入任意常数 $C$，得 $y=Cx\mathrm{e}^{-x}$。这个公式本质上就是分离变量法的结果，背下来可以节省时间。</p>`,
      verify: { by: 'sympy', ok: true, note: "sympy dsolve(Eq(f(x).diff(x), f(x)*(1-x)/x)) 得 f(x)=C1*x*exp(-x)；并手工代回验证" },
      flags: []
    },

    /* ───────────────────────── 第 3 题 ───────────────────────── */
    {
      id: '2006-3', year: 2006, no: '第3题', type: '填空', score: 4,
      stem: R`设 $\Sigma$ 是锥面 $z=\sqrt{x^2+y^2}\ (0\leqslant z\leqslant1)$ 的下侧，则 $\displaystyle\iint_{\Sigma}x\,\mathrm{d}y\,\mathrm{d}z+2y\,\mathrm{d}z\,\mathrm{d}x+3(z-1)\,\mathrm{d}x\,\mathrm{d}y=$ ______．`,
      options: null,
      answer: R`$2\pi$`,
      figure: null,
      kp: ['mint.surf2', 'mint.triple'],
      methods: ['补面法', '高斯公式', '三重积分（锥体体积）'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>第二类（对坐标的）曲面积分，标准解法是<b>"补面 + 高斯公式"</b>。</p>
<p><b>为什么不直接算：</b>积分里同时有 $\mathrm{d}y\,\mathrm{d}z$、$\mathrm{d}z\,\mathrm{d}x$、$\mathrm{d}x\,\mathrm{d}y$ 三项，直接算要把锥面分别投影到三个坐标面，还要分前后、左右两片讨论符号，非常繁琐。</p>
<p><b>为什么想到高斯公式：</b>记 $P=x$，$Q=2y$，$R=3(z-1)$，散度 $\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}=1+2+3=6$ 是常数！高斯公式会把曲面积分变成"$6\times$ 体积"，几乎不用算。</p>
<p><b>为什么要补面、补哪一块：</b>高斯公式要求曲面<b>封闭</b>，而锥面在顶部 $z=1$ 处是开口的。用平面圆盘 $z=1$（$x^2+y^2\leqslant1$）把它盖上即可。注意 $R=3(z-1)$ 在 $z=1$ 上恰好为 $0$——出题人特意这样设计，就是暗示你补 $z=1$ 这个面，补上的部分积分为零。</p>
<p><b>方向是否一致：</b>锥面与顶盖围成的立体 $\Omega=\{\sqrt{x^2+y^2}\leqslant z\leqslant1\}$ 在锥面的<b>上方</b>（锥面像一个漏斗，立体是漏斗里装的东西）。所以从 $\Omega$ 往外看，锥面的外法线是<b>斜向下</b>的，"下侧"正好就是外侧。顶盖取上侧也是外侧，两者合起来就是 $\Omega$ 整个边界的外侧，可以直接用高斯公式，不用变号。</p>`,
      solution: R`<p><b>第一步：确定 $P,Q,R$ 并求散度。</b></p>
$$P=x,\quad Q=2y,\quad R=3(z-1),\qquad \frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=1+2+3=6.$$
<p><b>第二步：补面。</b>取 $\Sigma_1:\ z=1\ (x^2+y^2\leqslant1)$，方向取<b>上侧</b>。则 $\Sigma+\Sigma_1$ 是一个封闭曲面，它围成圆锥体</p>
$$\Omega=\{(x,y,z)\mid \sqrt{x^2+y^2}\leqslant z\leqslant1\},$$
<p>并且 $\Sigma$ 的下侧、$\Sigma_1$ 的上侧都指向 $\Omega$ 的外部，即 $\Sigma+\Sigma_1$ 取的是外侧。</p>
<p><b>第三步：用高斯公式计算封闭曲面上的积分。</b></p>
$$\oint\!\!\!\!\oint_{\Sigma+\Sigma_1}P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y=\iiint_{\Omega}6\,\mathrm{d}V=6\,V(\Omega).$$
<p>$\Omega$ 是底面半径 $1$、高 $1$ 的圆锥，体积 $V=\frac13\pi\cdot1^2\cdot1=\frac{\pi}{3}$。如果忘了公式，也可以用"先二后一"切片：用高度为 $z$ 的平面去截，截面是半径为 $z$ 的圆，面积 $\pi z^2$，于是 $V=\int_0^1\pi z^2\,\mathrm{d}z=\frac{\pi}{3}$。所以</p>
$$\oint\!\!\!\!\oint_{\Sigma+\Sigma_1}=6\cdot\frac{\pi}{3}=2\pi.$$
<p><b>第四步：计算补面 $\Sigma_1$ 上的积分。</b></p>
<ul><li>$\Sigma_1$ 是水平面，它在 $yOz$ 面和 $zOx$ 面上的投影都是线段，面积为零，所以 $\iint_{\Sigma_1}x\,\mathrm{d}y\,\mathrm{d}z=\iint_{\Sigma_1}2y\,\mathrm{d}z\,\mathrm{d}x=0$。</li><li>在 $\Sigma_1$ 上 $z=1$，所以 $R=3(1-1)=0$，$\iint_{\Sigma_1}3(z-1)\,\mathrm{d}x\,\mathrm{d}y=0$。</li></ul>
<p>因此 $\iint_{\Sigma_1}\cdots=0$。</p>
<p><b>第五步：作差。</b></p>
$$\iint_{\Sigma}=\oint\!\!\!\!\oint_{\Sigma+\Sigma_1}-\iint_{\Sigma_1}=2\pi-0=2\pi.$$`,
      pitfalls: R`<ul><li><b>方向判断错误：</b>误以为"下侧"是指向锥体内部的内侧，于是给高斯公式加上负号，得到 $-2\pi$。判断方法：先想清楚立体 $\Omega$ 在曲面的哪一边，外侧就是背离 $\Omega$ 的那一侧。</li><li><b>圆锥体积漏掉 $\frac13$：</b>写成 $\pi r^2h=\pi$，得到 $6\pi$。</li><li><b>对不封闭的曲面直接用高斯公式：</b>忘记补面，或补了面却忘记减去补面上的积分（本题补面积分恰好为 0，但一般情况下不为 0）。</li><li>补面上 $\mathrm{d}y\,\mathrm{d}z$、$\mathrm{d}z\,\mathrm{d}x$ 项为 0 的理由是"投影面积为零"，不是"被积函数为零"，要分清。</li></ul>`,
      summary: R`<p><b>第二类曲面积分的解题流程：</b></p><ol><li>先求散度 $P_x+Q_y+R_z$。若很简单（常数或易积），优先考虑高斯公式。</li><li>曲面封闭 → 直接用高斯公式（注意内外侧）；不封闭 → 补一块简单的平面，使补面上的积分好算（最好为零），再减掉。</li><li>确认"原曲面方向 + 补面方向"合起来是整个边界的外侧（或整体内侧，再加负号）。</li></ol>
<p><b>题型识别：</b></p><ul><li>看到散度是常数 → 高斯公式，答案 = 常数 × 体积。</li><li>看到 $R$ 里含 $(z-c)$，而曲面的边界恰在平面 $z=c$ 上 → 补面 $z=c$，补面上积分为零。</li><li>看到"锥面/抛物面/半球面"等开口曲面 → 补底面或顶面。</li></ul>`,
      alt: R`<p><b>直接计算（合一投影法）：</b>对曲面 $z=g(x,y)$，有</p>$$\iint_{\Sigma}P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y=\pm\iint_{D_{xy}}\left[P\cdot(-g_x)+Q\cdot(-g_y)+R\right]\mathrm{d}x\,\mathrm{d}y,$$<p>上侧取正、下侧取负。这里 $g=\sqrt{x^2+y^2}$，$g_x=\frac{x}{r}$，$g_y=\frac{y}{r}$（$r=\sqrt{x^2+y^2}$），取下侧，于是</p>$$\iint_{\Sigma}=\iint_{x^2+y^2\leqslant1}\left[\frac{x^2}{r}+\frac{2y^2}{r}-3(r-1)\right]\mathrm{d}x\,\mathrm{d}y.$$<p>化极坐标：被积函数 $=r\cos^2\theta+2r\sin^2\theta-3r+3$，乘以面积元中的 $r$ 后积分：</p>$$\int_0^{2\pi}\!\!\int_0^1\left[r^2(\cos^2\theta+2\sin^2\theta)-3r^2+3r\right]\mathrm{d}r\,\mathrm{d}\theta=\frac13(\pi+2\pi)+2\pi\left(-1+\frac32\right)=\pi+\pi=2\pi.$$<p>结果相同，但明显比高斯公式麻烦，这也说明了"散度简单就用高斯"的价值。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 高斯公式 6·∫₀¹πz²dz = 2π；另用合一投影法在极坐标下直接积分，结果同为 2π' },
      flags: []
    },

    /* ───────────────────────── 第 4 题 ───────────────────────── */
    {
      id: '2006-4', year: 2006, no: '第4题', type: '填空', score: 4,
      stem: R`点 $(2,1,0)$ 到平面 $3x+4y+5z=0$ 的距离 $d=$ ______．`,
      options: null,
      answer: R`$\sqrt2$`,
      figure: null,
      kp: ['vec.planeline', 'vec.vector'],
      methods: ['点到平面距离公式', '向量投影'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>点到平面的距离公式。</p>
<p><b>不只是背公式——理解它从哪来：</b>点 $M$ 到平面的距离，就是从平面上<b>任取一点</b> $M_0$ 出发、指向 $M$ 的向量 $\overrightarrow{M_0M}$ 在平面<b>法向量</b> $\mathbf{n}$ 方向上的投影长度。想象一根竖直的旗杆：不管从地面上哪一点量到旗杆顶，只要把这段斜线"投影"到竖直方向上，得到的都是旗杆的高度。</p>`,
      solution: R`<p><b>第一步：找法向量和平面上的一点。</b>平面 $3x+4y+5z=0$ 的法向量是 $\mathbf{n}=(3,4,5)$（就是 $x,y,z$ 前面的系数）。常数项为 $0$，说明平面过原点，取 $M_0=(0,0,0)$。</p>
<p><b>第二步：写出连接向量。</b>$M=(2,1,0)$，$\overrightarrow{M_0M}=(2,1,0)$。</p>
<p><b>第三步：求投影长度。</b>向量 $\mathbf{a}$ 在方向 $\mathbf{n}$ 上的投影长度为 $\dfrac{|\mathbf{a}\cdot\mathbf{n}|}{|\mathbf{n}|}$，所以</p>
$$d=\frac{|\overrightarrow{M_0M}\cdot\mathbf{n}|}{|\mathbf{n}|}=\frac{|2\cdot3+1\cdot4+0\cdot5|}{\sqrt{3^2+4^2+5^2}}=\frac{10}{\sqrt{50}}=\frac{10}{5\sqrt2}=\sqrt2.$$
<p><b>第四步：与通用公式对照。</b>一般地，点 $(x_0,y_0,z_0)$ 到平面 $Ax+By+Cz+D=0$ 的距离为</p>
$$d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}},$$
<p>它正是上面"投影"思路的结果：分子 $|Ax_0+By_0+Cz_0+D|$ 就是 $|\overrightarrow{M_0M}\cdot\mathbf{n}|$（因为平面上的点满足 $Ax_1+By_1+Cz_1=-D$）。代入 $A=3,B=4,C=5,D=0$ 同样得到 $\sqrt2$。</p>`,
      pitfalls: R`<ul><li><b>分母算错：</b>写成 $\sqrt{3+4+5}$ 或 $3^2+4^2+5^2$ 忘记开方。分母是法向量的<b>模长</b> $\sqrt{50}=5\sqrt2$。</li><li><b>漏掉绝对值：</b>分子可能为负，距离必须非负。</li><li><b>结果没化简：</b>$\frac{10}{\sqrt{50}}$ 要化成 $\sqrt2$，填空题要写最简形式。</li></ul>`,
      summary: R`<p><b>方法要点：</b>空间中所有"距离"问题都可以归结为向量运算：</p><ul><li>点到平面：$\overrightarrow{M_0M}$ 在法向量上的投影长度 $\dfrac{|\overrightarrow{M_0M}\cdot\mathbf{n}|}{|\mathbf{n}|}$。</li><li>点到直线：以 $\overrightarrow{M_0M}$ 和方向向量 $\mathbf{s}$ 为邻边的平行四边形的高 $\dfrac{|\overrightarrow{M_0M}\times\mathbf{s}|}{|\mathbf{s}|}$。</li><li>两平行平面 $Ax+By+Cz+D_1=0$ 与 $Ax+By+Cz+D_2=0$ 的距离：$\dfrac{|D_1-D_2|}{\sqrt{A^2+B^2+C^2}}$。</li></ul><p><b>题型识别：</b>看到"点到平面的距离" → 直接套公式；忘了公式 → 用"任取平面上一点 + 向法向量投影"现推。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: Abs(3*2+4*1+5*0)/sqrt(50) = sqrt(2)' },
      flags: []
    },

    /* ───────────────────────── 第 7 题 ───────────────────────── */
    {
      id: '2006-7', year: 2006, no: '第7题', type: '选择', score: 4,
      stem: R`设函数 $y=f(x)$ 具有二阶导数，且 $f'(x)>0$，$f''(x)>0$，$\Delta x$ 为自变量 $x$ 在点 $x_0$ 处的增量，$\Delta y$ 与 $\mathrm{d}y$ 分别为 $f(x)$ 在点 $x_0$ 处对应的增量与微分．若 $\Delta x>0$，则（　　）`,
      options: [R`$0 < \mathrm{d}y < \Delta y$`, R`$0 < \Delta y < \mathrm{d}y$`, R`$\Delta y < \mathrm{d}y < 0$`, R`$\mathrm{d}y < \Delta y < 0$`],
      answer: 'A',
      figure: null,
      kp: ['diff.def', 'diff.convex', 'diff.mvt'],
      methods: ['微分的几何意义', '拉格朗日中值定理', '凹凸性'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>增量 $\Delta y$ 与微分 $\mathrm{d}y$ 的几何意义，以及凹凸性的含义。</p>
<p><b>先把两个量的几何意义想清楚：</b></p><ul><li>$\Delta y=f(x_0+\Delta x)-f(x_0)$：沿着<b>曲线</b>走，纵坐标真实的变化量。</li><li>$\mathrm{d}y=f'(x_0)\Delta x$：沿着 $x_0$ 处的<b>切线</b>走，纵坐标的变化量。</li></ul>
<p>所以比较 $\Delta y$ 和 $\mathrm{d}y$，就是比较"曲线"与"切线"谁高。$f''>0$ 表示曲线是<b>凹</b>的（向上弯，像碗口朝上），凹曲线总在切线的<b>上方</b>，所以 $\Delta y>\mathrm{d}y$。$f'>0$、$\Delta x>0$ 又保证 $\mathrm{d}y>0$。看图一目了然：</p>
<svg viewBox="0 0 290 210" width="290" height="210" role="img"><title>凹函数曲线与切线：Δy 大于 dy</title><line x1="20" y1="185" x2="282" y2="185" stroke="currentColor" stroke-width="1"/><line x1="30" y1="200" x2="30" y2="5" stroke="currentColor" stroke-width="1"/><polyline fill="none" stroke="currentColor" stroke-width="2" points="30.0,162.5 41.0,162.1 52.0,161.0 63.0,159.1 74.0,156.5 85.0,153.1 96.0,149.0 107.0,144.1 118.0,138.5 129.0,132.1 140.0,125.0 151.0,117.1 162.0,108.5 173.0,99.1 184.0,89.0 195.0,78.1 206.0,66.5 217.0,54.1 228.0,41.0 239.0,27.1 250.0,12.5"/><line x1="52" y1="174.5" x2="262" y2="60" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 3"/><line x1="118" y1="138.5" x2="248" y2="138.5" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><line x1="118" y1="138.5" x2="118" y2="185" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><line x1="228" y1="41" x2="228" y2="185" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><line x1="222" y1="138.5" x2="222" y2="78.5" stroke="#3a8fd9" stroke-width="3"/><line x1="240" y1="138.5" x2="240" y2="41" stroke="#e07a3f" stroke-width="3"/><circle cx="118" cy="138.5" r="3" fill="currentColor"/><circle cx="228" cy="41" r="3" fill="currentColor"/><circle cx="228" cy="78.5" r="3" fill="currentColor"/><text x="198" y="114" font-size="13" fill="#3a8fd9">dy</text><text x="245" y="95" font-size="13" fill="#e07a3f">Δy</text><text x="108" y="200" font-size="12" fill="currentColor">x₀</text><text x="206" y="200" font-size="12" fill="currentColor">x₀+Δx</text><text x="150" y="26" font-size="12" fill="currentColor">y=f(x)</text><text x="236" y="74" font-size="12" fill="currentColor">切线</text></svg>
<p>图中蓝色短线是 $\mathrm{d}y$（到切线），橙色长线是 $\Delta y$（到曲线）。</p>`,
      solution: R`<p><b>第一步：写出定义。</b></p>
$$\mathrm{d}y=f'(x_0)\Delta x,\qquad \Delta y=f(x_0+\Delta x)-f(x_0).$$
<p><b>第二步：判断 $\mathrm{d}y$ 的符号。</b>$f'(x_0)>0$，$\Delta x>0$，所以 $\mathrm{d}y=f'(x_0)\Delta x>0$。</p>
<p><b>第三步：用拉格朗日中值定理表示 $\Delta y$。</b>$f$ 在 $[x_0,x_0+\Delta x]$ 上可导，故存在 $\xi\in(x_0,x_0+\Delta x)$，使</p>
$$\Delta y=f'(\xi)\Delta x.$$
<p><b>第四步：比较 $f'(\xi)$ 与 $f'(x_0)$。</b>$f''(x)>0$ 说明 $f'(x)$ 严格单调增加；又 $\xi>x_0$，所以 $f'(\xi)>f'(x_0)$。两边同乘正数 $\Delta x$：</p>
$$\Delta y=f'(\xi)\Delta x>f'(x_0)\Delta x=\mathrm{d}y.$$
<p><b>第五步：合并结论。</b>$0 < \mathrm{d}y < \Delta y$，选 <b>A</b>。</p>
<p><b>逐项排除：</b></p><ul><li><b>B（$0 < \Delta y < \mathrm{d}y$）：</b>这是"曲线在切线下方"的情形，对应 $f''< 0$（凸函数）。例如 $f(x)=\ln x$，$x_0=1$，$\Delta x=1$：$\mathrm{d}y=1$，$\Delta y=\ln2\approx0.69$，确实 $\Delta y < \mathrm{d}y$，但它不满足 $f''>0$。本题条件下 B 不可能成立。</li><li><b>C、D：</b>都说 $\mathrm{d}y < 0$，与第二步 $\mathrm{d}y>0$ 矛盾。它们对应 $f'< 0$（函数递减）的情形。</li></ul>
<p><b>具体例子检验：</b>取 $f(x)=\mathrm{e}^x$（满足 $f'>0,f''>0$），则 $\Delta y-\mathrm{d}y=\mathrm{e}^{x_0}(\mathrm{e}^{\Delta x}-1-\Delta x)>0$（因为 $\mathrm{e}^h>1+h$ 对 $h\ne0$ 成立），与结论一致。</p>`,
      pitfalls: R`<ul><li><b>凹凸术语混淆：</b>国内教材把 $f''>0$ 叫"凹"（图形向上弯），有些书叫"下凸"。不要死记名字，记住"$f''>0$ ⇔ 曲线在切线上方 ⇔ 弦在曲线上方"。</li><li><b>以为 $\Delta y\approx\mathrm{d}y$ 就无法比较：</b>$\mathrm{d}y$ 只是 $\Delta y$ 的线性主部，两者差一个高阶无穷小 $o(\Delta x)$，这个差的符号恰恰由 $f''$ 决定。</li><li>用中值定理时，$\xi$ 一定在 $x_0$ 与 $x_0+\Delta x$ 之间，因 $\Delta x>0$，才有 $\xi>x_0$；若 $\Delta x< 0$，结论会改变（此时 $\Delta y< 0$，$\mathrm{d}y< 0$），要注意题目的条件。</li></ul>`,
      summary: R`<p><b>口诀：</b>"$\mathrm{d}y$ 走切线，$\Delta y$ 走曲线；凹在切线上，凸在切线下"。</p>
<p><b>方法要点：</b>比较 $\Delta y$ 与 $\mathrm{d}y$ 的三种工具——画图（最快）、拉格朗日中值定理（$\Delta y=f'(\xi)\Delta x$）、带二阶余项的泰勒公式（$\Delta y-\mathrm{d}y=\frac{f''(\eta)}{2}\Delta x^2$）。</p>
<p><b>题型识别：</b>看到"$f'$、$f''$ 的符号已知，比较 $\Delta y$、$\mathrm{d}y$ 或比较函数值与切线、弦的大小" → 先画一个满足条件的典型图像（如 $\mathrm{e}^x$），再用中值定理或泰勒公式严格化。</p>`,
      alt: R`<p><b>泰勒公式法：</b>由带拉格朗日余项的一阶泰勒公式，存在 $\eta$ 介于 $x_0$ 与 $x_0+\Delta x$ 之间，使</p>$$\Delta y=f(x_0+\Delta x)-f(x_0)=f'(x_0)\Delta x+\frac{f''(\eta)}{2}(\Delta x)^2=\mathrm{d}y+\frac{f''(\eta)}{2}(\Delta x)^2.$$<p>因 $f''(\eta)>0$，$(\Delta x)^2>0$，所以 $\Delta y>\mathrm{d}y>0$。这个式子也说明：$\Delta y-\mathrm{d}y$ 的符号完全由二阶导数决定，与 $\Delta x$ 的正负无关。</p>`,
      verify: { by: 'mixed', ok: true, note: '拉格朗日中值定理推理；sympy: series(exp(h)-1-h) = h²/2+… > 0，验证例子 f=eˣ 下 Δy>dy；ln x 例子验证 B 对应凸函数' },
      flags: ['OCR 中选项 A、D 的 \\mathrm{dy} 已改为 \\mathrm{d}y']
    },

    /* ───────────────────────── 第 8 题 ───────────────────────── */
    {
      id: '2006-8', year: 2006, no: '第8题', type: '选择', score: 4,
      stem: R`设 $f(x,y)$ 为连续函数，则 $\displaystyle\int_0^{\frac{\pi}{4}}\mathrm{d}\theta\int_0^1 f(r\cos\theta,r\sin\theta)\,r\,\mathrm{d}r$ 等于（　　）`,
      options: [
        R`$\displaystyle\int_0^{\frac{\sqrt2}{2}}\mathrm{d}x\int_x^{\sqrt{1-x^2}}f(x,y)\,\mathrm{d}y$`,
        R`$\displaystyle\int_0^{\frac{\sqrt2}{2}}\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\,\mathrm{d}y$`,
        R`$\displaystyle\int_0^{\frac{\sqrt2}{2}}\mathrm{d}y\int_y^{\sqrt{1-y^2}}f(x,y)\,\mathrm{d}x$`,
        R`$\displaystyle\int_0^{\frac{\sqrt2}{2}}\mathrm{d}y\int_0^{\sqrt{1-y^2}}f(x,y)\,\mathrm{d}x$`
      ],
      answer: 'C',
      figure: null,
      kp: ['mint.double'],
      methods: ['极坐标与直角坐标互化', '画积分区域', '穿线法定限'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二重积分从极坐标换回直角坐标。核心不是记公式，而是<b>"由积分限还原区域，再由区域重新定限"</b>。</p>
<p><b>第一步一定是画图：</b>$0\leqslant\theta\leqslant\frac{\pi}{4}$ 表示夹在射线 $\theta=0$（$x$ 轴正半轴）和射线 $\theta=\frac{\pi}{4}$（直线 $y=x$）之间；$0\leqslant r\leqslant1$ 表示在单位圆内。所以区域 $D$ 是一个 $45^\circ$ 的扇形：</p>
<svg viewBox="0 0 240 205" width="240" height="205" role="img"><title>扇形区域 0≤θ≤π/4，0≤r≤1</title><line x1="20" y1="180" x2="225" y2="180" stroke="currentColor" stroke-width="1"/><line x1="30" y1="195" x2="30" y2="10" stroke="currentColor" stroke-width="1"/><path d="M180 180 A150 150 0 0 0 30 30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><path d="M30 180 L180 180 A150 150 0 0 0 136.07 73.93 Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><line x1="30" y1="73.93" x2="136.07" y2="73.93" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><line x1="82.5" y1="127.5" x2="170.5" y2="127.5" stroke="#e07a3f" stroke-width="2.5"/><circle cx="82.5" cy="127.5" r="3" fill="#e07a3f"/><circle cx="170.5" cy="127.5" r="3" fill="#e07a3f"/><text x="16" y="195" font-size="12" fill="currentColor">O</text><text x="176" y="195" font-size="12" fill="currentColor">1</text><text x="0" y="78" font-size="11" fill="currentColor">√2/2</text><text x="66" y="104" font-size="12" fill="currentColor">y=x</text><text x="174" y="112" font-size="12" fill="currentColor">x²+y²=1</text><text x="42" y="146" font-size="11" fill="#e07a3f">从 x=y 进</text><text x="150" y="150" font-size="11" fill="#e07a3f">从圆出</text></svg>
<p><b>第二步：决定先积哪个变量。</b>用水平线（固定 $y$）从左往右穿过区域：总是从直线 $y=x$（即 $x=y$）进入、从圆弧 $x=\sqrt{1-y^2}$ 穿出，左右边界各只有一条曲线，<b>一次就能写完</b>。若改用竖直线（固定 $x$）从下往上穿：下边界始终是 $x$ 轴，但上边界在 $x=\frac{\sqrt2}{2}$ 处由直线 $y=x$ 变成了圆弧，必须<b>分成两块</b>。四个选项都是一块，所以答案只能在"先对 $x$ 积分"的 C、D 中找。</p>`,
      solution: R`<p><b>第一步：还原区域。</b>由积分限，$D=\{(r,\theta)\mid0\leqslant\theta\leqslant\frac{\pi}{4},\ 0\leqslant r\leqslant1\}$，即由 $x$ 轴正半轴、直线 $y=x\ (x\geqslant0)$ 和单位圆弧围成的扇形。直线 $y=x$ 与圆 $x^2+y^2=1$ 在第一象限的交点是 $\left(\frac{\sqrt2}{2},\frac{\sqrt2}{2}\right)$。</p>
<p><b>第二步：被积表达式的对应关系。</b>极坐标下面积元 $\mathrm{d}\sigma=r\,\mathrm{d}r\,\mathrm{d}\theta$（极坐标的小区域近似是边长为 $\mathrm{d}r$ 和 $r\,\mathrm{d}\theta$ 的小矩形）；直角坐标下 $\mathrm{d}\sigma=\mathrm{d}x\,\mathrm{d}y$。所以</p>
$$f(r\cos\theta,r\sin\theta)\,r\,\mathrm{d}r\,\mathrm{d}\theta\ \longleftrightarrow\ f(x,y)\,\mathrm{d}x\,\mathrm{d}y,$$
<p>题目中的因子 $r$ 正是面积元的一部分，换回直角坐标后它被 $\mathrm{d}x\,\mathrm{d}y$ 吸收，不再出现。</p>
<p><b>第三步：按 Y 型区域定限。</b>$y$ 的范围：区域最低点在 $x$ 轴上（$y=0$），最高点是交点 $\left(\frac{\sqrt2}{2},\frac{\sqrt2}{2}\right)$，所以 $0\leqslant y\leqslant\frac{\sqrt2}{2}$。对每个固定的 $y$，$x$ 从直线 $x=y$ 走到圆弧 $x=\sqrt{1-y^2}$。于是</p>
$$D=\left\{(x,y)\ \middle|\ 0\leqslant y\leqslant\tfrac{\sqrt2}{2},\ y\leqslant x\leqslant\sqrt{1-y^2}\right\},$$
$$\int_0^{\frac{\pi}{4}}\mathrm{d}\theta\int_0^1f(r\cos\theta,r\sin\theta)\,r\,\mathrm{d}r=\int_0^{\frac{\sqrt2}{2}}\mathrm{d}y\int_y^{\sqrt{1-y^2}}f(x,y)\,\mathrm{d}x.$$
<p>选 <b>C</b>。</p>
<p><b>第四步：逐项排除。</b></p><ul><li><b>A：</b>$0\leqslant x\leqslant\frac{\sqrt2}{2}$，$x\leqslant y\leqslant\sqrt{1-x^2}$，这是直线 $y=x$ <b>上方</b>的扇形（$\frac{\pi}{4}\leqslant\theta\leqslant\frac{\pi}{2}$），恰好是本题区域关于 $y=x$ 的镜像，不对。</li><li><b>B：</b>$0\leqslant x\leqslant\frac{\sqrt2}{2}$，$0\leqslant y\leqslant\sqrt{1-x^2}$，是圆内 $x\in\left[0,\frac{\sqrt2}{2}\right]$ 的整条竖带，既包含了 $y=x$ 上方的点（如 $(0.1,0.9)$），又漏掉了 $x>\frac{\sqrt2}{2}$ 的部分，不对。</li><li><b>D：</b>$0\leqslant y\leqslant\frac{\sqrt2}{2}$，$0\leqslant x\leqslant\sqrt{1-y^2}$，左边界写成了 $y$ 轴，包含了 $x< y$ 的点（如 $(0.1,0.5)$，其极角大于 $\frac{\pi}{4}$），不对。</li></ul>
<p><b>补充：如果坚持用 X 型</b>，必须分两块：</p>
$$\int_0^{\frac{\sqrt2}{2}}\mathrm{d}x\int_0^{x}f(x,y)\,\mathrm{d}y+\int_{\frac{\sqrt2}{2}}^{1}\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\,\mathrm{d}y.$$`,
      pitfalls: R`<ul><li><b>不画图凭感觉写限：</b>最常见的错误是把 $y=x$ 当成"下边界"写成 A。一定要画图，用穿线法确定"从哪进、从哪出"。</li><li><b>换回直角坐标时保留了 $r$：</b>$r\,\mathrm{d}r\,\mathrm{d}\theta$ 整体对应 $\mathrm{d}x\,\mathrm{d}y$，不能再多乘一个 $\sqrt{x^2+y^2}$。</li><li><b>选择 X 型却不分块：</b>上边界在 $x=\frac{\sqrt2}{2}$ 处发生了变化，一块写不下来。</li></ul>`,
      summary: R`<p><b>方法要点（换序、换坐标通用三步）：</b>① 由已知积分限写出区域不等式；② 画出区域图形；③ 按新的积分次序用穿线法重新定限。</p>
<p><b>题型识别：</b></p><ul><li>看到"极坐标与直角坐标互化"或"交换积分次序" → 先画图，再定序。</li><li>选积分次序的原则：哪个方向穿线时"进、出"边界各只有一条曲线，就先对那个变量积分，可以避免分块。</li><li>扇形区域 $\alpha\leqslant\theta\leqslant\beta$ 的两条边是射线 $y=x\tan\alpha$、$y=x\tan\beta$，圆弧是 $x^2+y^2=R^2$，交点坐标要算准。</li></ul>`,
      verify: { by: 'mixed', ok: true, note: '用 mpmath 取检验函数 f=x²y+eˣ+y³ 数值计算：原极坐标积分 ≈0.791437，C ≈0.791437 相同；A≈0.6525、B≈1.0850、D≈1.1596 均不同' },
      flags: ['OCR 中选项 A、D 缺少 "(A)""(D)" 标号，按顺序补回']
    },

    /* ───────────────────────── 第 9 题 ───────────────────────── */
    {
      id: '2006-9', year: 2006, no: '第9题', type: '选择', score: 4,
      stem: R`若级数 $\sum\limits_{n=1}^{\infty}a_n$ 收敛，则级数（　　）`,
      options: [
        R`$\sum\limits_{n=1}^{\infty}|a_n|$ 收敛`,
        R`$\sum\limits_{n=1}^{\infty}(-1)^na_n$ 收敛`,
        R`$\sum\limits_{n=1}^{\infty}a_na_{n+1}$ 收敛`,
        R`$\sum\limits_{n=1}^{\infty}\dfrac{a_n+a_{n+1}}{2}$ 收敛`
      ],
      answer: 'D',
      figure: null,
      kp: ['series.concept', 'series.alt'],
      methods: ['级数的基本性质', '部分和', '构造反例'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>收敛级数的基本性质，以及"条件收敛"级数有多脆弱。</p>
<p><b>关键观察：</b>题目只说 $\sum a_n$ 收敛，<b>没说 $a_n\geqslant0$</b>。所以 $a_n$ 可以有正有负，$\sum a_n$ 可能只是条件收敛（靠正负项相互抵消才收敛）。</p>
<ul><li>A、B、C 三个选项分别对 $a_n$ 做了"取绝对值""改变符号""两两相乘"——这些操作会<b>破坏正负抵消</b>，条件收敛的级数经不起这种折腾。</li><li>D 选项只是对 $a_n$ 做了<b>线性运算</b>（平移下标、相加、乘常数），线性运算保持收敛性。</li></ul>
<p><b>抽象级数选择题的标准打法：</b>对的选项用性质证明；错的选项用反例否定。反例首选 $a_n=\frac{(-1)^n}{n}$、$a_n=\frac{(-1)^n}{\sqrt n}$ 这类"条件收敛"的交错级数。</p>`,
      solution: R`<p><b>第一步：证明 D 正确（用部分和）。</b>设 $S_n=a_1+a_2+\cdots+a_n$，由 $\sum a_n$ 收敛，$\lim\limits_{n\to\infty}S_n=S$ 存在，且通项 $a_n\to0$（收敛的必要条件）。D 的部分和为</p>
$$T_n=\sum_{k=1}^{n}\frac{a_k+a_{k+1}}{2}=\frac12\sum_{k=1}^{n}a_k+\frac12\sum_{k=1}^{n}a_{k+1}=\frac12S_n+\frac12(S_{n+1}-a_1).$$
<p>令 $n\to\infty$：$T_n\to\frac12S+\frac12(S-a_1)=S-\frac{a_1}{2}$，极限存在，所以 D 收敛。</p>
<p><b>第二步：否定 A。</b>取 $a_n=\dfrac{(-1)^n}{n}$。由莱布尼茨判别法（$\frac1n$ 单调递减趋于 $0$），$\sum a_n$ 收敛；但 $\sum|a_n|=\sum\frac1n$ 是调和级数，发散。</p>
<p><b>第三步：否定 B。</b>仍取 $a_n=\dfrac{(-1)^n}{n}$，则 $(-1)^na_n=\dfrac{(-1)^{2n}}{n}=\dfrac1n$，$\sum\frac1n$ 发散。</p>
<p><b>第四步：否定 C。</b>注意上面的例子杀不掉 C：$a_na_{n+1}=-\dfrac{1}{n(n+1)}$，$\sum$ 是收敛的。原因是 $\frac1n$ 衰减得太快，相乘后变成 $\frac{1}{n^2}$ 量级。要让乘积"慢到发散"，需要衰减更慢的例子：取 $a_n=\dfrac{(-1)^n}{\sqrt n}$（同样由莱布尼茨判别法收敛），则</p>
$$a_na_{n+1}=\frac{(-1)^n(-1)^{n+1}}{\sqrt n\sqrt{n+1}}=-\frac{1}{\sqrt{n(n+1)}}.$$
<p>由于 $\lim\limits_{n\to\infty}\dfrac{1/\sqrt{n(n+1)}}{1/n}=\lim\limits_{n\to\infty}\sqrt{\dfrac{n}{n+1}}=1$，由比较判别法的极限形式，$\sum\frac{1}{\sqrt{n(n+1)}}$ 与 $\sum\frac1n$ 同敛散，发散。所以 C 不对。</p>
<p><b>结论：</b>选 <b>D</b>。</p>`,
      pitfalls: R`<ul><li><b>把正项级数的结论搬过来：</b>"$\sum a_n$ 收敛 ⟹ $\sum a_n^2$ 收敛""⟹ $\sum a_na_{n+1}$ 收敛"只在 $a_n\geqslant0$（或绝对收敛）时成立。$a_n$ 可正可负时全都可能失效。</li><li><b>反例选得不对就误判：</b>用 $\frac{(-1)^n}{n}$ 检验 C 会得到"收敛"，从而误以为 C 对。一个例子满足结论不能说明选项正确，必须给出证明；要否定一个选项则只需一个反例。</li><li>D 的证明里用到了 $a_{n+1}\to0$ 或"去掉有限项不改变敛散性"，不要忽略这一步。</li></ul>`,
      summary: R`<p><b>性质清单（$\sum a_n$ 收敛时）：</b></p><ul><li>一定成立：$\sum ka_n$ 收敛；$\sum(a_n\pm b_n)$ 在 $\sum b_n$ 也收敛时收敛；去掉、添加或改变有限项不改变敛散性；收敛级数任意加括号后仍收敛；$a_n\to0$。</li><li>不一定成立：$\sum|a_n|$、$\sum a_n^2$、$\sum(-1)^na_n$、$\sum a_na_{n+1}$、$\sum a_{2n}$ 收敛等等（$a_n$ 变号时都可能失效）。</li></ul>
<p><b>反例库：</b>$\frac{(-1)^n}{n}$（条件收敛，平方后收敛）、$\frac{(-1)^n}{\sqrt n}$（条件收敛，平方后 $\sum\frac1n$ 发散）、$\frac{(-1)^n}{\ln n}$（衰减极慢）。</p>
<p><b>题型识别：</b>看到"已知 $\sum a_n$ 收敛，问哪个级数必收敛"而没有说 $a_n$ 的符号 → 线性运算类选项为真，非线性类（绝对值、平方、乘积、变号）选项用交错级数反例否定。</p>`,
      verify: { by: 'mixed', ok: true, note: '部分和推导证明 D；数值验证 a_n=(-1)^n/√n 时 ∑a_n a_{n+1} 的前 2×10⁵ 项部分和 ≈ -12.23，与 -ln N 同步发散' },
      flags: []
    },

    /* ───────────────────────── 第 10 题 ───────────────────────── */
    {
      id: '2006-10', year: 2006, no: '第10题', type: '选择', score: 4,
      stem: R`设 $f(x,y)$ 与 $\varphi(x,y)$ 均为可微函数，且 $\varphi'_y(x,y)\neq0$．已知 $(x_0,y_0)$ 是 $f(x,y)$ 在约束条件 $\varphi(x,y)=0$ 下的一个极值点，下列选项正确的是（　　）`,
      options: [
        R`若 $f'_x(x_0,y_0)=0$，则 $f'_y(x_0,y_0)=0$`,
        R`若 $f'_x(x_0,y_0)=0$，则 $f'_y(x_0,y_0)\neq0$`,
        R`若 $f'_x(x_0,y_0)\neq0$，则 $f'_y(x_0,y_0)=0$`,
        R`若 $f'_x(x_0,y_0)\neq0$，则 $f'_y(x_0,y_0)\neq0$`
      ],
      answer: 'D',
      figure: null,
      kp: ['mdiff.extreme', 'mdiff.implicit'],
      methods: ['隐函数求导化为一元极值', '拉格朗日乘数法', '构造反例'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>条件极值的必要条件。它和无条件极值有本质区别：<b>条件极值点处 $f$ 的偏导数不必为零。</b>比如在一根铁丝（约束曲线）上找最高点，最高点处地面（$f$）本身的坡度不一定为零，只是"沿着铁丝方向"的坡度为零。</p>
<p><b>怎么把条件转化成可用的等式：</b>两条路。</p><ul><li><b>化为一元函数：</b>$\varphi'_y\ne0$ 正是隐函数存在定理的条件，它保证约束 $\varphi(x,y)=0$ 在 $(x_0,y_0)$ 附近能解出 $y=y(x)$。代入 $f$ 得到一元函数 $z(x)=f(x,y(x))$，它在 $x_0$ 处取极值，就可以用费马定理 $z'(x_0)=0$。</li><li><b>拉格朗日乘数法：</b>极值点满足 $f'_x+\lambda\varphi'_x=0$，$f'_y+\lambda\varphi'_y=0$。</li></ul>
<p>两种方法都能导出一个关于 $f'_x,f'_y$ 的关系式，再看哪个选项与之相符。</p>`,
      solution: R`<p><b>第一步：把约束解成 $y=y(x)$。</b>因为 $\varphi(x_0,y_0)=0$ 且 $\varphi'_y(x_0,y_0)\ne0$，由隐函数存在定理，方程 $\varphi(x,y)=0$ 在 $x_0$ 附近确定了可导函数 $y=y(x)$，$y(x_0)=y_0$，且</p>
$$y'(x_0)=-\frac{\varphi'_x(x_0,y_0)}{\varphi'_y(x_0,y_0)}.$$
<p><b>第二步：化为一元函数的极值。</b>约束曲线在 $(x_0,y_0)$ 附近的点就是 $(x,y(x))$，所以 $f$ 在约束下于 $(x_0,y_0)$ 取极值，等价于一元函数 $z(x)=f(x,y(x))$ 在 $x_0$ 处取极值。$z$ 可导，由费马定理 $z'(x_0)=0$。用链式法则：</p>
$$z'(x_0)=f'_x(x_0,y_0)+f'_y(x_0,y_0)\cdot y'(x_0)=0.\qquad(\ast)$$
<p><b>第三步：分析 D。</b>若 $f'_x(x_0,y_0)\ne0$，由 $(\ast)$：$f'_y(x_0,y_0)\cdot y'(x_0)=-f'_x(x_0,y_0)\ne0$，一个乘积不为零，它的每个因子都不为零，所以 $f'_y(x_0,y_0)\ne0$。<b>D 正确</b>，同时说明 C 错误。</p>
<p><b>第四步：用反例排除 A、B、C。</b>（下面的例子都满足 $\varphi'_y\equiv1\ne0$）</p><ul><li><b>A 错：</b>取 $f=y$，$\varphi=y-x^2$。约束下 $f=x^2$，在 $x=0$ 处取极小值，极值点 $(0,0)$。此处 $f'_x=0$，但 $f'_y=1\ne0$。</li><li><b>B 错：</b>取 $f=x^2+y^2$，$\varphi=y$。约束下 $f=x^2$，在 $(0,0)$ 取极小值。此处 $f'_x=0$，且 $f'_y=0$。</li><li><b>C 错：</b>取 $f=x^2+y^2$，$\varphi=x+y-2$。约束下 $f=x^2+(2-x)^2$，在 $x=1$ 处取极小值，极值点 $(1,1)$。此处 $f'_x=2\ne0$，而 $f'_y=2\ne0$，与 C 的结论矛盾（与 D 相符）。</li></ul>
<p>A、B 的反例说明：当 $f'_x=0$ 时，$f'_y$ 可以为零也可以不为零，无法确定。所以选 <b>D</b>。</p>
<p><b>几何解释：</b>$(\ast)$ 两边乘 $\varphi'_y$ 得 $f'_x\varphi'_y-f'_y\varphi'_x=0$，即梯度 $\nabla f$ 与 $\nabla\varphi$ 平行——在条件极值点，$f$ 的等值线与约束曲线<b>相切</b>。$\nabla\varphi=(\varphi'_x,\varphi'_y)$ 的第二个分量不为零；若 $f'_x\ne0$，则 $\nabla f$ 是 $\nabla\varphi$ 的非零倍数，它的第二个分量 $f'_y$ 也不为零。</p>`,
      pitfalls: R`<ul><li><b>把条件极值当成无条件极值：</b>以为极值点处必有 $f'_x=f'_y=0$，于是觉得 A 对。条件极值只要求 $f$ 沿约束曲线方向的导数为零。</li><li><b>只凭"感觉"选 C：</b>有人想"$f'_x$ 不为零，那就得靠 $f'_y=0$ 来平衡"，恰好弄反了：$(\ast)$ 式说明 $f'_x$ 要靠 $f'_y\,y'(x_0)$ 去抵消，所以 $f'_y$ 必须非零。</li><li>用拉格朗日法时忘了说明 $\lambda\ne0$ 的理由：由 $f'_x+\lambda\varphi'_x=0$ 及 $f'_x\ne0$ 推出 $\lambda\ne0$，再由 $f'_y=-\lambda\varphi'_y$ 推出 $f'_y\ne0$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>条件极值点的必要条件是 $\nabla f\parallel\nabla\varphi$，即</p>$$\begin{vmatrix}f'_x&f'_y\\ \varphi'_x&\varphi'_y\end{vmatrix}=0\quad\text{或}\quad\begin{cases}f'_x+\lambda\varphi'_x=0\\ f'_y+\lambda\varphi'_y=0\\ \varphi=0\end{cases}$$<p><b>题型识别：</b></p><ul><li>看到"条件极值点处偏导数之间的关系" → 写出拉格朗日方程组，或用隐函数化为一元函数后用费马定理。</li><li>看到 $\varphi'_y\ne0$ → 它是隐函数 $y=y(x)$ 存在的条件，提示"消元化一元"。</li><li>判断"若…则…"型选项 → 能推出的用推导，推不出的构造最简单的反例（线性或二次函数、直线或抛物线约束）。</li></ul>`,
      alt: R`<p><b>拉格朗日乘数法：</b>作 $F(x,y,\lambda)=f(x,y)+\lambda\varphi(x,y)$。由于 $\nabla\varphi(x_0,y_0)\ne\mathbf{0}$（因 $\varphi'_y\ne0$），极值点满足</p>$$f'_x(x_0,y_0)+\lambda\varphi'_x(x_0,y_0)=0,\qquad f'_y(x_0,y_0)+\lambda\varphi'_y(x_0,y_0)=0.$$<p>若 $f'_x(x_0,y_0)\ne0$，由第一式 $\lambda\varphi'_x=-f'_x\ne0$，得 $\lambda\ne0$；再由第二式 $f'_y=-\lambda\varphi'_y$，两个非零数之积不为零，所以 $f'_y(x_0,y_0)\ne0$。选 D。</p>`,
      verify: { by: 'mixed', ok: true, note: '隐函数 + 费马定理推导 D；三个反例逐一手工核对（sympy 求解 f=x+y、x²+y²=2 的拉格朗日方程组得 (1,1)，λ=-1/2，f_x=f_y=1，亦与 D 一致）' },
      flags: []
    },

    /* ───────────────────────── 第 15 题 ───────────────────────── */
    {
      id: '2006-15', year: 2006, no: '第15题', type: '解答', score: 10,
      stem: R`设区域 $D=\{(x,y)\mid x^2+y^2\leqslant1,\ x\geqslant0\}$，计算二重积分 $\displaystyle I=\iint_D\frac{1+xy}{1+x^2+y^2}\,\mathrm{d}x\,\mathrm{d}y$．`,
      options: null,
      answer: R`$I=\dfrac{\pi}{2}\ln2$`,
      figure: null,
      kp: ['mint.double'],
      methods: ['奇偶对称性', '极坐标计算二重积分'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二重积分的两大基本功——<b>利用对称性化简</b>和<b>极坐标计算</b>。</p>
<p><b>看区域：</b>$D$ 是单位圆的右半部分（$x\geqslant0$）。圆形区域、被积函数里有 $x^2+y^2$，这两个信号都指向极坐标。</p>
<p><b>看被积函数：</b>把分子拆开，$\dfrac{1+xy}{1+x^2+y^2}=\dfrac{1}{1+x^2+y^2}+\dfrac{xy}{1+x^2+y^2}$。第一项只依赖 $x^2+y^2$，用极坐标非常干净；第二项含 $xy$，看起来麻烦，但它是 $y$ 的<b>奇函数</b>，而右半圆盘恰好<b>关于 $x$ 轴对称</b>，所以这一项积分为零。</p>
<p><b>为什么要先看对称性：</b>对称性能"零成本"消掉一部分被积函数，是计算重积分的第一步。养成习惯：拿到重积分，先问"区域关于哪条轴对称？被积函数对相应变量是奇是偶？"</p>`,
      solution: R`<p><b>第一步：拆分被积函数。</b></p>
$$I=\iint_D\frac{1}{1+x^2+y^2}\,\mathrm{d}x\,\mathrm{d}y+\iint_D\frac{xy}{1+x^2+y^2}\,\mathrm{d}x\,\mathrm{d}y=I_1+I_2.$$
<p><b>第二步：用对称性求 $I_2$。</b></p>
<p>区域 $D$ 关于 $x$ 轴对称：若 $(x,y)\in D$，则 $(x,-y)\in D$（因为 $x^2+(-y)^2=x^2+y^2\leqslant1$，$x\geqslant0$ 不变）。</p>
<p>被积函数 $g(x,y)=\dfrac{xy}{1+x^2+y^2}$ 满足 $g(x,-y)=\dfrac{x\cdot(-y)}{1+x^2+y^2}=-g(x,y)$，是 $y$ 的奇函数。</p>
<p>把 $D$ 分成上半部分 $D_+$（$y\geqslant0$）和下半部分 $D_-$（$y\leqslant0$）。在 $D_-$ 上作代换 $y=-v$，$D_-$ 变成 $D_+$，且 $g(x,-v)=-g(x,v)$，所以 $\iint_{D_-}g=-\iint_{D_+}g$，两部分正好抵消：</p>
$$I_2=0.$$
<p>直观理解：点 $(x,y)$ 与它关于 $x$ 轴的对称点 $(x,-y)$ 处，被积函数值大小相等、符号相反，成对抵消。</p>
<p><b>第三步：用极坐标求 $I_1$。</b>令 $x=r\cos\theta$，$y=r\sin\theta$，则 $x^2+y^2=r^2$，面积元 $\mathrm{d}x\,\mathrm{d}y=r\,\mathrm{d}r\,\mathrm{d}\theta$。</p>
<p>区域 $D$（右半圆盘）在极坐标下是 $-\frac{\pi}{2}\leqslant\theta\leqslant\frac{\pi}{2}$，$0\leqslant r\leqslant1$（$x\geqslant0$ 对应 $\cos\theta\geqslant0$，即极角在第四、第一象限）。于是</p>
$$I_1=\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^1\frac{1}{1+r^2}\cdot r\,\mathrm{d}r.$$
<p><b>第四步：计算内层积分。</b>注意 $\mathrm{d}(1+r^2)=2r\,\mathrm{d}r$，凑微分：</p>
$$\int_0^1\frac{r}{1+r^2}\,\mathrm{d}r=\frac12\int_0^1\frac{\mathrm{d}(1+r^2)}{1+r^2}=\frac12\ln(1+r^2)\Big|_0^1=\frac12\ln2.$$
<p><b>第五步：计算外层积分。</b>内层结果与 $\theta$ 无关，外层只是乘以区间长度 $\pi$：</p>
$$I_1=\pi\cdot\frac12\ln2=\frac{\pi}{2}\ln2.$$
<p><b>第六步：写出结果。</b></p>
$$I=I_1+I_2=\frac{\pi}{2}\ln2.$$`,
      pitfalls: R`<ul><li><b>用错对称轴：</b>$xy$ 项对 $x$ 也是奇函数，但 $D$ <b>不关于 $y$ 轴对称</b>（只有右半边），不能用"对 $x$ 为奇"消掉它。必须"区域对称 + 被积函数奇偶性"两个条件对应同一个变量。</li><li><b>极角范围写错：</b>右半圆盘是 $-\frac{\pi}{2}\leqslant\theta\leqslant\frac{\pi}{2}$，不是 $0\leqslant\theta\leqslant\pi$（那是上半圆盘）。</li><li><b>漏掉面积元中的 $r$：</b>写成 $\int\frac{1}{1+r^2}\,\mathrm{d}r$，就会算出 $\arctan$ 型的错误结果。</li><li>硬算 $I_2$：在极坐标下也能算出 0（$\int_{-\pi/2}^{\pi/2}\sin\theta\cos\theta\,\mathrm{d}\theta=0$），但浪费时间且容易出错。</li></ul>`,
      summary: R`<p><b>二重积分的解题顺序：</b>① 画区域、看对称性，消去奇函数部分（偶函数部分可以只算一半再乘 2）；② 根据区域形状和被积函数选坐标系；③ 定限计算。</p>
<p><b>对称性规则：</b></p><ul><li>$D$ 关于 $x$ 轴对称：被积函数对 $y$ 为奇 → 积分为 0；对 $y$ 为偶 → 等于上半部分的 2 倍。</li><li>$D$ 关于 $y$ 轴对称：看被积函数对 $x$ 的奇偶性，结论同上。</li><li>$D$ 关于 $y=x$ 对称：$\iint_Df(x,y)\,\mathrm{d}\sigma=\iint_Df(y,x)\,\mathrm{d}\sigma$（轮换对称）。</li></ul>
<p><b>题型识别：</b></p><ul><li>看到圆、扇形、圆环区域，或被积函数含 $x^2+y^2$ → 极坐标。</li><li>看到被积函数是"一个好算的部分 + 一个奇函数部分" → 拆开，奇函数部分用对称性消掉。</li><li>看到 $\int\frac{r}{a+r^2}\,\mathrm{d}r$ → 凑微分 $\frac12\mathrm{d}(a+r^2)$。</li></ul>`,
      alt: R`<p><b>不拆分、直接在极坐标下算：</b></p>$$I=\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^1\frac{1+r^2\sin\theta\cos\theta}{1+r^2}\,r\,\mathrm{d}r=\pi\cdot\frac12\ln2+\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\sin\theta\cos\theta\,\mathrm{d}\theta\cdot\int_0^1\frac{r^3}{1+r^2}\,\mathrm{d}r.$$<p>其中 $\int_{-\pi/2}^{\pi/2}\sin\theta\cos\theta\,\mathrm{d}\theta=0$（奇函数在对称区间上积分），所以第二项为零，结果仍是 $\frac{\pi}{2}\ln2$。可以看出，极坐标下的"奇函数积分为零"与直角坐标下的对称性是同一件事。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 极坐标积分：∫_{-π/2}^{π/2}∫₀¹ r/(1+r²) dr dθ = π·ln2/2；xy 项的积分为 0' },
      flags: []
    },

    /* ───────────────────────── 第 16 题 ───────────────────────── */
    {
      id: '2006-16', year: 2006, no: '第16题', type: '解答', score: 12,
      stem: R`设数列 $\{x_n\}$ 满足 $0 < x_1 < \pi$，$x_{n+1}=\sin x_n\ (n=1,2,\cdots)$．<br>（Ⅰ）证明 $\lim\limits_{n\to\infty}x_n$ 存在，并求该极限；<br>（Ⅱ）计算 $\lim\limits_{n\to\infty}\left(\dfrac{x_{n+1}}{x_n}\right)^{\frac{1}{x_n^2}}$．`,
      options: null,
      answer: R`（Ⅰ）极限存在，且 $\lim\limits_{n\to\infty}x_n=0$；（Ⅱ）$\mathrm{e}^{-\frac16}$．`,
      figure: null,
      kp: ['lim.seqcalc', 'lim.rules', 'lim.compute'],
      methods: ['单调有界准则', '不动点（递推式两边取极限）', '归结原则（海涅定理）', '1^∞ 型极限', '泰勒公式'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>递推数列极限的标准两步曲（第Ⅰ问），以及"数列极限借函数极限来算"的思想（第Ⅱ问）。</p>
<p><b>第Ⅰ问的思路——为什么用单调有界准则：</b>递推数列 $x_{n+1}=g(x_n)$ 没有通项公式，无法直接算极限。最常用的工具是<b>单调有界准则</b>：单调且有界的数列必收敛。证明了"存在"之后，才能在递推式两边同时取极限，得到极限 $A$ 满足的方程 $A=g(A)$（叫"不动点方程"）。</p>
<p>为什么一定单调？关键不等式是 $\sin x< x\ (x>0)$——每"正弦一次"，数就变小一点；又因为正弦值在 $(0,\pi)$ 上是正的，数列不会跌破 $0$。于是数列单调递减、有下界。</p>
<p><b>第Ⅱ问的思路：</b>$\dfrac{x_{n+1}}{x_n}=\dfrac{\sin x_n}{x_n}\to1$，指数 $\dfrac{1}{x_n^2}\to+\infty$，是 $1^\infty$ 型未定式。处理 $1^\infty$ 的通用办法是化成指数：$u^v=\mathrm{e}^{v\ln u}$。但难点在于：这是一个<b>数列</b>极限，$n$ 是离散的，不能对 $n$ 求导用洛必达。解决办法是<b>归结原则（海涅定理）</b>：先算对应的函数极限 $\lim\limits_{t\to0^+}\left(\frac{\sin t}{t}\right)^{1/t^2}$，再把 $t$ 换成 $x_n$。</p>`,
      solution: R`<p style="margin-top:0"><b>（Ⅰ）</b></p>
<p><b>第一步：证明数列有界，且每项都在 $(0,\pi)$ 内。</b>用数学归纳法。$n=1$ 时 $0 < x_1 < \pi$ 成立。假设 $0 < x_n < \pi$，则 $\sin x_n>0$，且 $\sin x_n\leqslant1 < \pi$，所以 $0 < x_{n+1}=\sin x_n\leqslant1 < \pi$。故对一切 $n$ 都有 $0 < x_n < \pi$，数列有下界 $0$。</p>
<p><b>第二步：证明数列单调递减。</b>先证不等式：当 $x>0$ 时 $\sin x< x$。令 $h(x)=x-\sin x$，则 $h(0)=0$，$h'(x)=1-\cos x\geqslant0$，且等号只在孤立点 $x=2k\pi$ 处成立，所以 $h$ 在 $[0,+\infty)$ 上严格单调增加，从而 $x>0$ 时 $h(x)>h(0)=0$，即 $\sin x< x$。</p>
<p>由第一步 $x_n>0$，所以 $x_{n+1}=\sin x_n< x_n$，数列严格单调递减。</p>
<p><b>第三步：由单调有界准则得极限存在。</b>$\{x_n\}$ 单调递减且有下界 $0$，所以 $\lim\limits_{n\to\infty}x_n$ 存在，记为 $A$。由保号性（极限保持非严格不等式），$0\leqslant A\leqslant x_1 < \pi$。</p>
<p><b>第四步：求极限值。</b>在 $x_{n+1}=\sin x_n$ 两边令 $n\to\infty$：左边 $x_{n+1}\to A$（子数列与原数列极限相同）；右边由 $\sin$ 的连续性，$\sin x_n\to\sin A$。所以</p>
$$A=\sin A.$$
<p>若 $A>0$，由第二步的不等式 $\sin A< A$，矛盾。所以 $A=0$，即 $\lim\limits_{n\to\infty}x_n=0$。</p>
<p style="margin-top:1em"><b>（Ⅱ）</b></p>
<p><b>第一步：化简并判断类型。</b>由 $x_{n+1}=\sin x_n$，</p>
$$\left(\frac{x_{n+1}}{x_n}\right)^{\frac{1}{x_n^2}}=\left(\frac{\sin x_n}{x_n}\right)^{\frac{1}{x_n^2}}.$$
<p>由（Ⅰ），$x_n\to0$，所以底数 $\frac{\sin x_n}{x_n}\to1$，指数 $\frac{1}{x_n^2}\to+\infty$，是 $1^\infty$ 型。</p>
<p><b>第二步：转化为函数极限（归结原则）。</b>考虑函数极限</p>
$$L=\lim_{t\to0^+}\left(\frac{\sin t}{t}\right)^{\frac{1}{t^2}}.$$
<p>归结原则：若 $\lim\limits_{t\to0^+}F(t)=L$，且数列 $t_n\to0$，$t_n>0$，则 $\lim\limits_{n\to\infty}F(t_n)=L$。这里 $t_n=x_n>0$ 且 $x_n\to0$，所以只要求出 $L$，原数列极限就等于 $L$。之所以要转化，是因为函数可以求导、可以用泰勒公式，而数列不行。</p>
<p><b>第三步：化为指数形式。</b>$\left(\frac{\sin t}{t}\right)^{\frac{1}{t^2}}=\exp\left(\dfrac{1}{t^2}\ln\dfrac{\sin t}{t}\right)$，只需求指数部分的极限：</p>
$$\lim_{t\to0^+}\frac{1}{t^2}\ln\frac{\sin t}{t}=\lim_{t\to0^+}\frac{1}{t^2}\ln\left(1+\frac{\sin t-t}{t}\right).$$
<p><b>第四步：等价代换。</b>当 $t\to0$ 时 $\frac{\sin t-t}{t}\to0$，由 $\ln(1+u)\sim u\ (u\to0)$，</p>
$$\ln\left(1+\frac{\sin t-t}{t}\right)\sim\frac{\sin t-t}{t},$$
<p>它是乘积中的因子，可以替换：</p>
$$\lim_{t\to0^+}\frac{1}{t^2}\ln\frac{\sin t}{t}=\lim_{t\to0^+}\frac{\sin t-t}{t^3}.$$
<p><b>第五步：计算 $\frac00$ 型极限。</b>由泰勒公式 $\sin t=t-\frac{t^3}{6}+o(t^3)$，</p>
$$\frac{\sin t-t}{t^3}=\frac{-\frac{t^3}{6}+o(t^3)}{t^3}\to-\frac16.$$
<p>（也可以用洛必达：$\lim\frac{\cos t-1}{3t^2}=\lim\frac{-\frac12t^2}{3t^2}=-\frac16$。）</p>
<p><b>第六步：得出结论。</b>$L=\mathrm{e}^{-\frac16}$，由归结原则</p>
$$\lim_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac{1}{x_n^2}}=\mathrm{e}^{-\frac16}.$$`,
      pitfalls: R`<ul><li><b>先斩后奏：</b>没有证明极限存在，就直接在递推式两边取极限得 $A=\sin A$。这一步的前提是极限存在，否则毫无意义（例如 $x_{n+1}=-x_n$ 两边取极限得 $A=0$，但数列可能根本不收敛）。</li><li><b>只证单调不证有界（或反之）：</b>单调有界准则两个条件缺一不可。本题的"有界"还承担了一个任务：保证 $x_n>0$，从而 $\sin x_n< x_n$ 成立。</li><li><b>解 $A=\sin A$ 不说理由：</b>要说明为什么只有 $A=0$——因为 $A>0$ 时 $\sin A< A$。</li><li><b>对数列直接用洛必达：</b>$x_n$ 是 $n$ 的离散函数，不能对 $n$ 求导。必须先转化为函数极限。</li><li><b>以为 $1^\infty=1$：</b>$1^\infty$ 是未定式，底数趋于 1 的速度和指数趋于无穷的速度"赛跑"，结果可以是任何正数。</li></ul>`,
      summary: R`<p><b>递推数列 $x_{n+1}=g(x_n)$ 求极限的标准流程：</b></p><ol><li>先猜：解不动点方程 $A=g(A)$ 猜出极限。</li><li>证有界：数学归纳法。</li><li>证单调：看 $x_{n+1}-x_n$ 的符号（本题用 $\sin x< x$）；若 $g$ 单调递增，则数列单调性由 $x_2-x_1$ 的符号决定。</li><li>下结论：由单调有界准则得极限存在，再两边取极限解出 $A$，并说明舍去其他根的理由。</li></ol>
<p><b>$1^\infty$ 型公式：</b>若 $u\to1$，$v\to\infty$，则 $\lim u^v=\mathrm{e}^{\lim v(u-1)}$（因为 $\ln u\sim u-1$）。本题即 $\mathrm{e}^{\lim\frac{1}{t^2}\left(\frac{\sin t}{t}-1\right)}=\mathrm{e}^{\lim\frac{\sin t-t}{t^3}}$。</p>
<p><b>题型识别：</b></p><ul><li>看到 $x_{n+1}=g(x_n)$ 问极限是否存在 → 单调有界准则 + 不动点。</li><li>看到数列极限需要求导或泰勒展开 → 用归结原则转化为函数极限，注意要求 $x_n\ne$ 极限点。</li><li>看到 $(\text{趋于1的量})^{\text{趋于∞的量}}$ → 写成 $\mathrm{e}^{v\ln u}$，再用 $\ln u\sim u-1$。</li></ul>
<p><b>拓展：</b>进一步可以证明 $x_n\sim\sqrt{\frac3n}$，即 $x_n$ 趋于 0 的速度和 $\frac{1}{\sqrt n}$ 同阶，这是本题第Ⅱ问 $\frac{\sin t-t}{t^3}\to-\frac16$ 的一个漂亮推论。</p>`,
      alt: R`<p><b>第Ⅱ问用泰勒展开一步到位：</b>$t\to0$ 时</p>$$\frac{\sin t}{t}=1-\frac{t^2}{6}+o(t^2),\qquad \ln\frac{\sin t}{t}=\ln\left(1-\frac{t^2}{6}+o(t^2)\right)=-\frac{t^2}{6}+o(t^2),$$<p>所以 $\dfrac{1}{t^2}\ln\dfrac{\sin t}{t}\to-\dfrac16$，原极限为 $\mathrm{e}^{-\frac16}$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit((sin(t)/t)**(1/t**2), t, 0, "+") = exp(-1/6)，limit((sin t - t)/t³) = -1/6；数值迭代 x₁=2 迭代 2×10⁶ 次后 (x_{n+1}/x_n)^{1/x_n²} ≈ 0.8464817 与 e^{-1/6} 一致' },
      flags: ['OCR 把第Ⅱ问的指数识别成 \\frac{1}{x^n}，据原卷与参考解析改为 \\frac{1}{x_n^2}']
    },

    /* ───────────────────────── 第 17 题 ───────────────────────── */
    {
      id: '2006-17', year: 2006, no: '第17题', type: '解答', score: 12,
      stem: R`将函数 $f(x)=\dfrac{x}{2+x-x^2}$ 展开成 $x$ 的幂级数．`,
      options: null,
      answer: R`$\displaystyle f(x)=\sum_{n=0}^{\infty}\frac13\left[(-1)^n+\frac{1}{2^{n+1}}\right]x^{n+1}=\sum_{n=1}^{\infty}\frac13\left[(-1)^{n-1}+\frac{1}{2^{n}}\right]x^{n}$，$-1 < x < 1$．`,
      figure: null,
      kp: ['series.expand', 'series.power'],
      methods: ['因式分解与部分分式', '间接展开法（等比级数）', '收敛域取交集'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>用<b>间接法</b>把有理函数展开成幂级数。</p>
<p><b>为什么不用直接法：</b>直接法要算 $f^{(n)}(0)$ 的通项公式，对有理函数而言很难。间接法的依据是<b>幂级数展开的唯一性</b>：不管用什么方法得到一个在 $x=0$ 附近收敛到 $f(x)$ 的幂级数，它就是 $f$ 的泰勒级数。所以我们可以借助已知展开式"拼"出答案。</p>
<p><b>拼什么：</b>最基本的展开式是等比级数</p>$$\frac{1}{1-u}=\sum_{n=0}^{\infty}u^n,\quad|u|< 1.$$<p>有理函数通过<b>部分分式</b>拆成若干个 $\frac{A}{a-x}$ 型的简单分式，每一个都能化成 $\frac{1}{1-u}$ 的形式。所以思路是：<b>分母因式分解 → 部分分式 → 套等比级数 → 求收敛域</b>。</p>`,
      solution: R`<p><b>第一步：分母因式分解。</b>$2+x-x^2=-(x^2-x-2)=-(x-2)(x+1)=(2-x)(1+x)$。所以</p>
$$f(x)=\frac{x}{(1+x)(2-x)}.$$
<p><b>第二步：部分分式。</b>先把因子 $x$ 留在外面，只拆 $\frac{1}{(1+x)(2-x)}$。设</p>
$$\frac{1}{(1+x)(2-x)}=\frac{A}{1+x}+\frac{B}{2-x},$$
<p>去分母得 $1=A(2-x)+B(1+x)$。令 $x=-1$：$1=3A$，$A=\frac13$；令 $x=2$：$1=3B$，$B=\frac13$。于是</p>
$$f(x)=\frac{x}{3}\left(\frac{1}{1+x}+\frac{1}{2-x}\right).$$
<p>（检验：$\frac{1}{1+x}+\frac{1}{2-x}=\frac{(2-x)+(1+x)}{(1+x)(2-x)}=\frac{3}{(1+x)(2-x)}$ ✓）</p>
<p><b>第三步：分别展开两个简单分式。</b></p>
<ul><li>$\dfrac{1}{1+x}=\dfrac{1}{1-(-x)}=\displaystyle\sum_{n=0}^{\infty}(-x)^n=\sum_{n=0}^{\infty}(-1)^nx^n$，要求 $|-x|< 1$，即 $-1< x< 1$。</li><li>$\dfrac{1}{2-x}=\dfrac12\cdot\dfrac{1}{1-\frac x2}=\dfrac12\displaystyle\sum_{n=0}^{\infty}\left(\frac x2\right)^n=\sum_{n=0}^{\infty}\frac{x^n}{2^{n+1}}$，要求 $\left|\frac x2\right|< 1$，即 $-2< x< 2$。这里先提出 $\frac12$，是为了把分母变成"$1-$某某"的标准形式。</li></ul>
<p><b>第四步：相加并乘以 $\frac x3$。</b>两个级数在公共区间 $(-1,1)$ 内都收敛，可以逐项相加：</p>
$$f(x)=\frac x3\sum_{n=0}^{\infty}\left[(-1)^n+\frac{1}{2^{n+1}}\right]x^n=\sum_{n=0}^{\infty}\frac13\left[(-1)^n+\frac{1}{2^{n+1}}\right]x^{n+1},\quad -1< x< 1.$$
<p>若令 $m=n+1$ 重新编号，也可写成 $f(x)=\displaystyle\sum_{m=1}^{\infty}\frac13\left[(-1)^{m-1}+\frac{1}{2^{m}}\right]x^{m}$。</p>
<p><b>第五步：确定收敛域（检查端点）。</b>两个级数收敛区间的交集是 $(-1,1)$。在端点处，记通项 $u_n=\frac13\left[(-1)^n+\frac{1}{2^{n+1}}\right]x^{n+1}$：</p>
<ul><li>$x=1$：$u_n=\frac13\left[(-1)^n+\frac{1}{2^{n+1}}\right]$，当 $n\to\infty$ 时在 $\pm\frac13$ 附近摆动，不趋于 0，级数发散。</li><li>$x=-1$：$u_n=\frac13\left[(-1)^n+\frac{1}{2^{n+1}}\right](-1)^{n+1}=\frac13\left[-1+\frac{(-1)^{n+1}}{2^{n+1}}\right]\to-\frac13\ne0$，级数发散。</li></ul>
<p>所以展开式成立的范围是 $-1< x< 1$。</p>
<p><b>第六步：验算前几项。</b>$n=0,1,2,3$ 时系数依次为 $\frac13\left(1+\frac12\right)=\frac12$，$\frac13\left(-1+\frac14\right)=-\frac14$，$\frac13\left(1+\frac18\right)=\frac38$，$\frac13\left(-1+\frac1{16}\right)=-\frac{5}{16}$，即 $f(x)=\frac12x-\frac14x^2+\frac38x^3-\frac{5}{16}x^4+\cdots$。直接做多项式除法 $x\div(2+x-x^2)$ 也得到同样的前几项。</p>`,
      pitfalls: R`<ul><li><b>因式分解符号出错：</b>$2+x-x^2=(2-x)(1+x)$，不要写成 $(x-2)(x+1)$（差一个负号）。</li><li><b>$\frac{1}{2-x}$ 展开时漏了 $\frac12$：</b>写成 $\sum\frac{x^n}{2^n}$。正确做法是先提出 $\frac12$ 再套公式。</li><li><b>忘了乘外面的 $x$：</b>乘以 $x$ 后幂次整体加 1，求和下标或指数要相应调整。</li><li><b>不写收敛域或写错：</b>写成 $(-2,2)$，或忘记取交集。幂级数展开题必须写出成立范围，否则要扣分。端点要单独检验。</li></ul>`,
      summary: R`<p><b>方法要点：</b>有理函数展开 = 因式分解 + 部分分式 + 等比级数；收敛域取各部分收敛区间的交集，再单独检查端点。</p>
<p><b>直观理解收敛半径：</b>$f$ 的分母在 $x=-1$ 和 $x=2$ 处为零（函数"爆掉"的地方），离原点最近的是 $x=-1$，距离为 1，所以收敛半径就是 1。</p>
<p><b>题型识别：</b></p><ul><li>看到分母是可以因式分解的二次式 → 拆成两个 $\frac{A}{a-x}$ 型分式，各自化成 $\frac{1}{1-u}$。</li><li>看到 $\frac{1}{a-x}$ → 先提出 $\frac1a$，写成 $\frac1a\cdot\frac{1}{1-\frac xa}$，成立范围 $|x|< |a|$。</li><li>看到 $\frac{1}{(a-x)^2}$ → 对 $\frac{1}{a-x}$ 的展开式逐项求导。</li></ul>`,
      alt: R`<p><b>直接对 $f$ 本身作部分分式：</b>设 $\dfrac{x}{(1+x)(2-x)}=\dfrac{A}{1+x}+\dfrac{B}{2-x}$，则 $x=A(2-x)+B(1+x)$，令 $x=-1$ 得 $A=-\frac13$，令 $x=2$ 得 $B=\frac23$。于是</p>$$f(x)=-\frac13\sum_{n=0}^{\infty}(-1)^nx^n+\frac23\sum_{n=0}^{\infty}\frac{x^n}{2^{n+1}}=\sum_{n=0}^{\infty}\frac13\left[(-1)^{n+1}+\frac{1}{2^{n}}\right]x^n,\quad -1< x< 1.$$<p>$n=0$ 时系数为 $\frac13(-1+1)=0$，所以实际从 $x^1$ 开始，与上面的结果完全一致（展开式唯一）。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: series(x/(2+x-x**2), x, 0, 8) 的系数 [0,1/2,-1/4,3/8,-5/16,11/32,-21/64,43/128] 与通项公式逐项相同；apart 验证部分分式' },
      flags: []
    },

    /* ───────────────────────── 第 18 题 ───────────────────────── */
    {
      id: '2006-18', year: 2006, no: '第18题', type: '解答', score: 12,
      stem: R`设函数 $f(u)$ 在 $(0,+\infty)$ 内具有二阶导数，且 $z=f\left(\sqrt{x^2+y^2}\right)$ 满足等式 $\dfrac{\partial^2z}{\partial x^2}+\dfrac{\partial^2z}{\partial y^2}=0$．<br>（Ⅰ）验证 $f''(u)+\dfrac{f'(u)}{u}=0$；<br>（Ⅱ）若 $f(1)=0$，$f'(1)=1$，求函数 $f(u)$ 的表达式．`,
      options: null,
      answer: R`（Ⅰ）见解答；（Ⅱ）$f(u)=\ln u$．`,
      figure: null,
      kp: ['mdiff.chain', 'ode.reduce'],
      methods: ['多元复合函数求导（链式法则）', '可降阶微分方程', '凑导数'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>抽象复合函数的二阶偏导数计算（第Ⅰ问），以及可降阶的二阶微分方程（第Ⅱ问）。这是"多元微分 + 微分方程"的经典综合题型：<b>用复合函数求导把偏微分方程化成常微分方程</b>。</p>
<p><b>第Ⅰ问的思路：</b>$z$ 只通过一个中间变量 $u=\sqrt{x^2+y^2}$（到原点的距离）依赖于 $x,y$，这样的函数叫<b>径向函数</b>（在同一个圆上取值相同）。按链式法则先求 $\frac{\partial z}{\partial x}$，再求 $\frac{\partial^2z}{\partial x^2}$。难点在求二阶导时：$\frac{\partial z}{\partial x}=f'(u)\cdot\frac{x}{u}$ 是两个因子的乘积，而且 $f'(u)$ <b>仍然是 $u$ 的函数、$u$ 又是 $x$ 的函数</b>，对 $x$ 求导时还要再用一次链式法则。$\frac{\partial^2z}{\partial y^2}$ 由 $x,y$ 的对称性直接写出，不必重算。</p>
<p><b>第Ⅱ问的思路：</b>方程 $f''+\frac{f'}{u}=0$ 中不显含 $f$ 本身，属于"缺 $y$ 型"可降阶方程，令 $p=f'$ 降为一阶。更巧的看法：两边乘 $u$ 得 $uf''+f'=0$，左边正好是 $(uf')'$——乘积求导法则倒过来用。</p>`,
      solution: R`<p style="margin-top:0"><b>（Ⅰ）</b></p>
<p><b>第一步：求中间变量的偏导数。</b>记 $u=\sqrt{x^2+y^2}$，在 $(x,y)\ne(0,0)$ 处 $u>0$，且</p>
$$\frac{\partial u}{\partial x}=\frac{2x}{2\sqrt{x^2+y^2}}=\frac{x}{u},\qquad \frac{\partial u}{\partial y}=\frac{y}{u}.$$
<p><b>第二步：求一阶偏导数。</b>由链式法则，</p>
$$\frac{\partial z}{\partial x}=f'(u)\cdot\frac{\partial u}{\partial x}=f'(u)\cdot\frac{x}{u}.$$
<p><b>第三步：求二阶偏导数。</b>$\frac{\partial z}{\partial x}$ 是 $f'(u)$ 与 $\frac{x}{u}$ 的乘积，用乘积求导法则：</p>
$$\frac{\partial^2z}{\partial x^2}=\underbrace{\frac{\partial}{\partial x}\big[f'(u)\big]}_{\text{①}}\cdot\frac{x}{u}+f'(u)\cdot\underbrace{\frac{\partial}{\partial x}\left(\frac{x}{u}\right)}_{\text{②}}.$$
<p>① 再用一次链式法则：$\dfrac{\partial}{\partial x}\big[f'(u)\big]=f''(u)\cdot\dfrac{\partial u}{\partial x}=f''(u)\cdot\dfrac{x}{u}$。</p>
<p>② 用商的求导法则：$\dfrac{\partial}{\partial x}\left(\dfrac{x}{u}\right)=\dfrac{1\cdot u-x\cdot\frac{\partial u}{\partial x}}{u^2}=\dfrac{u-\frac{x^2}{u}}{u^2}=\dfrac{u^2-x^2}{u^3}=\dfrac{y^2}{u^3}$（用到 $u^2=x^2+y^2$）。</p>
<p>代回得</p>
$$\frac{\partial^2z}{\partial x^2}=f''(u)\frac{x^2}{u^2}+f'(u)\frac{y^2}{u^3}.$$
<p><b>第四步：由对称性写出 $\frac{\partial^2z}{\partial y^2}$。</b>$u$ 关于 $x,y$ 对称，把上式中的 $x$ 与 $y$ 互换即得</p>
$$\frac{\partial^2z}{\partial y^2}=f''(u)\frac{y^2}{u^2}+f'(u)\frac{x^2}{u^3}.$$
<p><b>第五步：相加。</b></p>
$$\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=f''(u)\frac{x^2+y^2}{u^2}+f'(u)\frac{x^2+y^2}{u^3}=f''(u)+\frac{f'(u)}{u}.$$
<p>由已知该和为 $0$，所以在 $u=\sqrt{x^2+y^2}$ 处 $f''(u)+\dfrac{f'(u)}{u}=0$。</p>
<p><b>第六步：说明对一切 $u>0$ 成立。</b>对任意给定的 $u_0>0$，取点 $(x,y)=(u_0,0)$，则 $\sqrt{x^2+y^2}=u_0$，上式在 $u=u_0$ 处成立。所以 $f''(u)+\dfrac{f'(u)}{u}=0$ 对一切 $u\in(0,+\infty)$ 成立。</p>
<p style="margin-top:1em"><b>（Ⅱ）</b></p>
<p><b>第一步：降阶。</b>方程两边乘以 $u$（$u>0$）：$uf''(u)+f'(u)=0$。注意到 $\big(uf'(u)\big)'=f'(u)+uf''(u)$，所以方程就是</p>
$$\big(uf'(u)\big)'=0\ \Longrightarrow\ uf'(u)=C_1.$$
<p><b>第二步：用 $f'(1)=1$ 定 $C_1$。</b>令 $u=1$：$1\cdot f'(1)=C_1$，所以 $C_1=1$，$f'(u)=\dfrac1u$。</p>
<p><b>第三步：再积分。</b>$f(u)=\displaystyle\int\frac{\mathrm{d}u}{u}=\ln u+C_2$（$u>0$，不需要绝对值）。</p>
<p><b>第四步：用 $f(1)=0$ 定 $C_2$。</b>$\ln1+C_2=0$，$C_2=0$。所以</p>
$$f(u)=\ln u.$$
<p><b>第五步：回代检验。</b>$z=\ln\sqrt{x^2+y^2}=\frac12\ln(x^2+y^2)$，$\frac{\partial z}{\partial x}=\frac{x}{x^2+y^2}$，$\frac{\partial^2z}{\partial x^2}=\frac{y^2-x^2}{(x^2+y^2)^2}$；同理 $\frac{\partial^2z}{\partial y^2}=\frac{x^2-y^2}{(x^2+y^2)^2}$，两者之和为 $0$。✓</p>`,
      pitfalls: R`<ul><li><b>二阶偏导漏项：</b>求 $\frac{\partial}{\partial x}\big[f'(u)\big]$ 时直接写成 $f''(u)$，忘了乘 $\frac{\partial u}{\partial x}=\frac xu$；或者把 $f'(u)$ 当常数，漏掉含 $f''$ 的整项。记住"抽象函数的导数仍是复合函数"。</li><li><b>商的求导出错：</b>$\frac{\partial}{\partial x}\left(\frac xu\right)$ 中 $u$ 也依赖 $x$，不能当成常数得出 $\frac1u$。</li><li><b>"验证"只停留在 $u=\sqrt{x^2+y^2}$：</b>严格来说要说明 $u$ 能取遍 $(0,+\infty)$，结论才对一切 $u>0$ 成立。</li><li><b>积分常数的顺序：</b>先用 $f'(1)=1$ 定 $C_1$，再积分、用 $f(1)=0$ 定 $C_2$。若先积分到底再代条件也可以，但更容易混乱。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>抽象复合函数求二阶偏导：一阶偏导是"$f'(u)\times$ 某个式子"，再求导时对两个因子分别求导，其中 $f'(u)$ 求导要"再链一次"得 $f''(u)\cdot u_x$。</li><li>利用变量的对称性省去重复计算。</li><li>结论：径向函数 $z=f(r)$（$r=\sqrt{x^2+y^2}$）的拉普拉斯算子为 $z_{xx}+z_{yy}=f''(r)+\frac1rf'(r)$。这个式子值得记住。</li></ul>
<p><b>题型识别：</b></p><ul><li>看到 "$z=f(\text{某个组合})$ 满足某个偏微分方程，求 $f$" → 链式法则把偏导数用 $f',f''$ 表示，代入后化为关于 $f$ 的常微分方程。</li><li>看到 $y''=F(x,y')$（不含 $y$）→ 令 $p=y'$ 降阶。</li><li>看到 $uf''+f'$ → 认出 $(uf')'$，一步积分。</li></ul>
<p><b>物理背景：</b>$\ln r$ 是平面拉普拉斯方程的"基本解"（无限长带电直线周围的电势），这道题实际上是在推导它。</p>`,
      alt: R`<p><b>第Ⅱ问用欧拉方程：</b>两边乘 $u^2$ 得 $u^2f''+uf'=0$，是欧拉方程。令 $u=\mathrm{e}^t$，则 $uf'=\frac{\mathrm{d}f}{\mathrm{d}t}$，$u^2f''=\frac{\mathrm{d}^2f}{\mathrm{d}t^2}-\frac{\mathrm{d}f}{\mathrm{d}t}$，方程化为 $\frac{\mathrm{d}^2f}{\mathrm{d}t^2}=0$，所以 $f=C_1+C_2t=C_1+C_2\ln u$。由 $f(1)=0$ 得 $C_1=0$，由 $f'(u)=\frac{C_2}{u}$ 及 $f'(1)=1$ 得 $C_2=1$，同样得到 $f(u)=\ln u$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 对 z=F(sqrt(x²+y²)) 求 z_xx+z_yy 化简为 F″(u)+F′(u)/u；dsolve 带初值 F(1)=0, F′(1)=1 得 F=log(u)；并验证 ln√(x²+y²) 的拉普拉斯为 0' },
      flags: []
    },

    /* ───────────────────────── 第 19 题 ───────────────────────── */
    {
      id: '2006-19', year: 2006, no: '第19题', type: '解答', score: 12,
      stem: R`设在上半平面 $D=\{(x,y)\mid y>0\}$ 内，函数 $f(x,y)$ 具有连续偏导数，且对任意的 $t>0$ 都有 $$f(tx,ty)=t^{-2}f(x,y).$$ 证明：对 $D$ 内的任意分段光滑的有向简单闭曲线 $L$，都有 $\displaystyle\oint_Lyf(x,y)\,\mathrm{d}x-xf(x,y)\,\mathrm{d}y=0$．`,
      options: null,
      answer: R`证明见解答。关键：由齐次条件对 $t$ 求导并令 $t=1$，得 $xf'_x+yf'_y=-2f$，从而 $\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}\equiv0$，再用格林公式。`,
      figure: null,
      kp: ['mint.line2', 'mdiff.chain'],
      methods: ['格林公式', '齐次函数的欧拉关系（对参数求导）', '复合函数求导'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>平面曲线积分与格林公式，结合"齐次函数"这个条件的用法。</p>
<p><b>从结论倒推：</b>要证"对任意闭曲线积分为零"，最直接的工具是<b>格林公式</b>：</p>$$\oint_LP\,\mathrm{d}x+Q\,\mathrm{d}y=\iint_{D_L}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\,\mathrm{d}y.$$<p>只要证明在 $D$ 内处处有 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$，右边就是 $0$。这里 $P=yf$，$Q=-xf$，算出来 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=-(xf'_x+yf'_y+2f)$。于是问题变成：<b>证明 $xf'_x+yf'_y=-2f$</b>。</p>
<p><b>条件怎么用：</b>$f(tx,ty)=t^{-2}f(x,y)$ 说的是"把点沿着射线拉伸 $t$ 倍，函数值变为原来的 $t^{-2}$ 倍"，叫做 $-2$ 次<b>齐次函数</b>（例如 $\frac{1}{x^2+y^2}$）。这个等式对<b>一切</b> $t>0$ 成立，所以两边作为 $t$ 的函数恒等，可以对 $t$ 求导；求导后令 $t=1$，就得到了关于 $f'_x,f'_y$ 的关系——正是我们需要的 $xf'_x+yf'_y=-2f$（欧拉齐次函数定理）。</p>
<p><b>为什么强调"上半平面"：</b>上半平面没有"洞"（单连通），闭曲线围住的区域整个落在 $D$ 内，格林公式才能用。如果区域包含原点，$f$ 可能在原点没定义（如 $\frac{1}{x^2+y^2}$），结论就会失败，见解答最后的说明。</p>`,
      solution: R`<p><b>第一步：设定 $P,Q$ 并求偏导。</b>令 $P(x,y)=yf(x,y)$，$Q(x,y)=-xf(x,y)$。由于 $f$ 在 $D$ 内有连续偏导数，$P,Q$ 在 $D$ 内也有连续偏导数，且</p>
$$\frac{\partial P}{\partial y}=f(x,y)+yf'_y(x,y),\qquad \frac{\partial Q}{\partial x}=-f(x,y)-xf'_x(x,y).$$
<p>所以</p>
$$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=-\big[xf'_x(x,y)+yf'_y(x,y)+2f(x,y)\big].\qquad(1)$$
<p><b>第二步：由齐次条件导出欧拉关系。</b>任取 $(x,y)\in D$。对 $t>0$，点 $(tx,ty)$ 的纵坐标 $ty>0$，仍在 $D$ 内，所以等式</p>
$$f(tx,ty)=t^{-2}f(x,y)$$
<p>对一切 $t>0$ 有意义且成立。固定 $(x,y)$，两边都是 $t$ 的可导函数，对 $t$ 求导。左边用链式法则（中间变量 $X=tx$，$Y=ty$，$\frac{\mathrm{d}X}{\mathrm{d}t}=x$，$\frac{\mathrm{d}Y}{\mathrm{d}t}=y$）：</p>
$$xf'_x(tx,ty)+yf'_y(tx,ty)=-2t^{-3}f(x,y).$$
<p>令 $t=1$，得</p>
$$xf'_x(x,y)+yf'_y(x,y)=-2f(x,y),\quad\text{即}\quad xf'_x+yf'_y+2f=0.\qquad(2)$$
<p><b>第三步：得到 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$。</b>把 (2) 代入 (1)，在 $D$ 内处处有</p>
$$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\equiv0.$$
<p><b>第四步：说明 $L$ 围成的区域整个在 $D$ 内。</b>设 $L$ 是 $D$ 内的分段光滑简单闭曲线，它围成有界区域 $D_L$。$L$ 是有界闭集，$y$ 在 $L$ 上取到最小值 $m$，由于 $L\subset D$，$m>0$。对任意一点 $(a,b)$，若 $b< m$，从它出发向正下方作射线，射线上所有点的纵坐标都小于 $m$，不会与 $L$ 相交，于是 $(a,b)$ 可以不穿过 $L$ 而走到无穷远处，它在 $L$ 的外部。所以 $D_L$ 内的点都满足 $y\geqslant m>0$，即 $D_L\cup L\subset D$。</p>
<p><b>第五步：用格林公式。</b>$P,Q$ 在闭区域 $D_L\cup L$ 上有连续偏导数，由格林公式（若 $L$ 为正向即逆时针取 "+"，为负向取 "−"）：</p>
$$\oint_Lyf\,\mathrm{d}x-xf\,\mathrm{d}y=\pm\iint_{D_L}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\,\mathrm{d}y=\pm\iint_{D_L}0\,\mathrm{d}x\,\mathrm{d}y=0.$$
<p>证毕。</p>
<p><b>说明：区域条件为什么不能去掉。</b>$f(x,y)=\dfrac{1}{x^2+y^2}$ 满足 $f(tx,ty)=t^{-2}f(x,y)$，在原点以外处处有 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$。但沿逆时针单位圆 $x=\cos\theta$，$y=\sin\theta$ 计算：</p>
$$\oint\frac{y\,\mathrm{d}x-x\,\mathrm{d}y}{x^2+y^2}=\int_0^{2\pi}(-\sin^2\theta-\cos^2\theta)\,\mathrm{d}\theta=-2\pi\ne0.$$
<p>原因是单位圆围住了 $f$ 没有定义的原点，格林公式不能用。上半平面不含原点、也没有洞，所以题目结论成立。</p>`,
      pitfalls: R`<ul><li><b>对 $t$ 求导时漏掉链式因子：</b>把 $\frac{\mathrm{d}}{\mathrm{d}t}f(tx,ty)$ 写成 $f'_x+f'_y$，忘了乘 $x$ 和 $y$。</li><li><b>求导后忘了令 $t=1$：</b>得到的是 $(tx,ty)$ 处的偏导，与 (1) 式中 $(x,y)$ 处的偏导对不上。</li><li><b>求 $\frac{\partial P}{\partial y}$ 时漏项：</b>$P=yf$ 是乘积，$\frac{\partial P}{\partial y}=f+yf'_y$，不是 $yf'_y$。</li><li><b>不说明格林公式的适用条件：</b>证明题要交代 $P,Q$ 偏导连续、$L$ 围成的区域在 $D$ 内。这正是题目强调"上半平面"的原因，略去会被扣分。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>证明"闭曲线积分为零"或"积分与路径无关" → 验证 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$，再在单连通区域上用格林公式。</li><li>在单连通区域内，以下四件事等价：$\frac{\partial Q}{\partial x}\equiv\frac{\partial P}{\partial y}$；任意闭曲线积分为零；积分与路径无关；$P\,\mathrm{d}x+Q\,\mathrm{d}y$ 是某个函数的全微分。</li><li>区域有"洞"（如去掉原点）时，上述等价性失效，要单独讨论绕洞的曲线。</li></ul>
<p><b>齐次函数的欧拉关系：</b>若 $f(tx,ty)=t^kf(x,y)$ 对一切 $t>0$ 成立，则 $xf'_x+yf'_y=kf$。推导口诀："对 $t$ 求导，再令 $t=1$"。</p>
<p><b>题型识别：</b>看到 $f(tx,ty)=t^kf(x,y)$ → 对 $t$ 求导、令 $t=1$；看到"对 $D$ 内任意闭曲线积分为零" → 格林公式 + 验证 $Q_x=P_y$。</p>`,
      alt: R`<p><b>用极坐标直接找原函数：</b>在上半平面内令 $x=r\cos\theta$，$y=r\sin\theta$，其中 $r>0$，$0< \theta< \pi$，$\theta=\theta(x,y)$ 是 $D$ 上连续可微的单值函数。由齐次条件（取 $t=r$，点取 $(\cos\theta,\sin\theta)$）：</p>$$f(x,y)=f(r\cos\theta,r\sin\theta)=r^{-2}f(\cos\theta,\sin\theta)=r^{-2}g(\theta),$$<p>其中 $g(\theta)=f(\cos\theta,\sin\theta)$ 在 $(0,\pi)$ 上连续。又 $x\,\mathrm{d}y-y\,\mathrm{d}x=r^2\,\mathrm{d}\theta$，所以</p>$$yf\,\mathrm{d}x-xf\,\mathrm{d}y=-f\cdot(x\,\mathrm{d}y-y\,\mathrm{d}x)=-r^{-2}g(\theta)\cdot r^2\,\mathrm{d}\theta=-g(\theta)\,\mathrm{d}\theta=\mathrm{d}\big[-G(\theta(x,y))\big],$$<p>其中 $G$ 是 $g$ 在 $(0,\pi)$ 上的一个原函数。被积表达式是 $D$ 上单值函数 $-G(\theta(x,y))$ 的全微分，沿任意闭曲线积分自然为零（起点终点相同，原函数值之差为零）。这个方法还解释了为什么区域不能绕原点：绕原点一圈后 $\theta$ 增加 $2\pi$，不再是单值函数。</p>`,
      verify: { by: 'mixed', ok: true, note: '证明为主；sympy 以一般 −2 次齐次函数 f=y⁻²φ(x/y) 验证 Q_x−P_y≡0，并验证 f=1/(x²+y²) 时绕原点单位圆积分为 −2π、上半平面内圆 (0,2) 半径 1 上积分为 0' },
      flags: []
    }
  ];
});
