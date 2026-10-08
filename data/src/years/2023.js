// 2023 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 12 题：选择 1、2、3、4；填空 11、12、13、14；解答 17、18、19、20
// （第 5–7、15、21 题为线性代数，第 8–10、16、22 题为概率论与数理统计，不收录）
registerYear(2023, function (R) {
  return [
    /* ───────────────────────── 第 1 题 ───────────────────────── */
    {
      id: '2023-1', year: 2023, no: '第1题', type: '选择', score: 5,
      stem: R`曲线 $y=x\ln\left(\mathrm{e}+\dfrac{1}{x-1}\right)$ 的斜渐近线方程为（　　）`,
      options: [R`$y=x+\mathrm{e}$`, R`$y=x+\dfrac{1}{\mathrm{e}}$`, R`$y=x$`, R`$y=x-\dfrac{1}{\mathrm{e}}$`],
      answer: 'B',
      figure: null,
      kp: ['diff.asym', 'lim.compute', 'lim.inf'],
      methods: ['斜渐近线公式', '等价无穷小代换', '提出常数后用 ln(1+u)∼u'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>斜渐近线的求法，本质是两个 $x\to\infty$ 的极限计算。</p>
<p><b>先从定义想清楚公式从哪来（第一性原理）：</b>直线 $y=kx+b$ 是曲线的斜渐近线，意思是"走得足够远时，曲线和这条直线的竖直距离趋于 $0$"，即</p>
$$\lim_{x\to\infty}\big[y-(kx+b)\big]=0.$$
<p>把这个式子除以 $x$：$\dfrac{y}{x}-k-\dfrac bx\to0$，而 $\dfrac bx\to0$，所以 $k=\lim\limits_{x\to\infty}\dfrac yx$——<b>斜率就是"远处 $y$ 与 $x$ 的比值"</b>。确定 $k$ 之后，定义式本身就说 $b=\lim\limits_{x\to\infty}(y-kx)$——<b>截距就是"去掉主部 $kx$ 后剩下的偏移量"</b>。</p>
<p><b>本题的信号：</b>$y=x\cdot\ln\left(\mathrm{e}+\frac{1}{x-1}\right)$，是"$x$ 乘一个趋于常数的因子"。因子 $\ln(\mathrm{e}+\text{小量})\to\ln\mathrm{e}=1$，所以 $k=1$ 几乎一眼可见；难点在 $b=\lim x\left[\ln\left(\mathrm{e}+\frac1{x-1}\right)-1\right]$，这是 $\infty\cdot0$ 型。处理思路：把"$\ln(\mathrm{e}+\text{小量})-1$"改写成"$\ln(1+\text{小量})$"，就能用最基本的等价无穷小 $\ln(1+u)\sim u$。</p>`,
      solution: R`<p><b>第一步：确认 $x\to\pm\infty$ 都在定义域内。</b>要求 $\mathrm{e}+\dfrac1{x-1}>0$：$x>1$ 时显然成立；$x<1$ 时等价于 $x<1-\dfrac1{\mathrm{e}}$。所以定义域向左、向右都无限延伸，两个方向都要考察。</p>
<p><b>第二步：求斜率 $k$。</b></p>
$$k=\lim_{x\to\infty}\frac{y}{x}=\lim_{x\to\infty}\ln\left(\mathrm{e}+\frac{1}{x-1}\right)=\ln\mathrm{e}=1.$$
<p>这里用的是 $\ln$ 的连续性：$\dfrac1{x-1}\to0$，所以括号里 $\to\mathrm{e}$。这一步对 $x\to+\infty$ 和 $x\to-\infty$ 同样成立。</p>
<p><b>第三步：求截距 $b$。</b></p>
$$b=\lim_{x\to\infty}(y-x)=\lim_{x\to\infty}x\left[\ln\left(\mathrm{e}+\frac{1}{x-1}\right)-1\right].$$
<p>关键变形：$1=\ln\mathrm{e}$，用对数的减法法则</p>
$$\ln\left(\mathrm{e}+\frac{1}{x-1}\right)-\ln\mathrm{e}=\ln\frac{\mathrm{e}+\frac1{x-1}}{\mathrm{e}}=\ln\left(1+\frac{1}{\mathrm{e}(x-1)}\right).$$
<p>令 $u=\dfrac{1}{\mathrm{e}(x-1)}$，$x\to\infty$ 时 $u\to0$，于是 $\ln(1+u)\sim u$。它是乘积 $x\cdot\ln(1+u)$ 中的一个因子，可以整体替换：</p>
$$b=\lim_{x\to\infty}x\cdot\frac{1}{\mathrm{e}(x-1)}=\frac1{\mathrm{e}}\lim_{x\to\infty}\frac{x}{x-1}=\frac{1}{\mathrm{e}}.$$
<p>同样，这个计算只用到了 $\dfrac1{x-1}\to0$，所以 $x\to+\infty$ 与 $x\to-\infty$ 结果相同。</p>
<p><b>第四步：写出结论并逐项排除。</b>斜渐近线为 $y=x+\dfrac1{\mathrm{e}}$，选 <b>B</b>。</p>
<ul><li><b>A</b>（$b=\mathrm{e}$）：通常是把 $\ln(\mathrm{e}+u)$ 当成 $\ln(1+u)$ 那样处理、或者把 $\frac{1}{\mathrm{e}}$ 写倒了。</li><li><b>C</b>（$b=0$）：只求了 $k=1$，然后误以为 $x\left[\ln(\cdots)-1\right]$ 是"$x\cdot0=0$"。实际上它是 $\infty\cdot0$ 型未定式，必须计算。</li><li><b>D</b>（$b=-\frac1{\mathrm{e}}$）：符号错误，例如把 $\ln\left(1+\frac{1}{\mathrm{e}(x-1)}\right)$ 误写成 $\ln\left(1-\frac{1}{\mathrm{e}(x-1)}\right)$。</li></ul>`,
      pitfalls: R`<ul><li><b>误用等价无穷小：</b>$\ln\left(\mathrm{e}+\frac1{x-1}\right)$ 本身趋于 $1$，<b>不是</b>无穷小，不能写成 $\sim\frac1{x-1}$。等价式 $\ln(1+u)\sim u$ 要求括号里是"$1+$无穷小"，所以必须先把 $\mathrm{e}$ 提出来。</li><li><b>把 $\infty\cdot0$ 当成 $0$：</b>求 $b$ 时最常见的错误，直接导致错选 C。</li><li><b>只算一个方向：</b>斜渐近线在 $x\to+\infty$ 与 $x\to-\infty$ 两侧可能不同（例如 $y=\sqrt{x^2+1}$ 两侧分别是 $y=x$ 和 $y=-x$）。本题两侧相同，但这个检查不能省。</li><li>题目问的是<b>斜</b>渐近线。曲线还有铅直渐近线 $x=1$ 和 $x=1-\frac1{\mathrm{e}}$，与本题无关，不要混淆。</li></ul>`,
      summary: R`<p><b>方法要点：</b>斜渐近线 $y=kx+b$：$k=\lim\limits_{x\to\infty}\dfrac yx$，$b=\lim\limits_{x\to\infty}(y-kx)$，$x\to+\infty$ 与 $x\to-\infty$ 分别计算。</p>
<p><b>题型识别：</b></p><ul><li>看到 $y=x\cdot g(x)$ 且 $g(x)\to1$ → 立刻得 $k=1$，$b=\lim x\,[g(x)-1]$。</li><li>看到 $\ln(a+\text{小量})$ → 先提常数：$\ln(a+u)=\ln a+\ln\left(1+\frac ua\right)$，再用 $\ln(1+v)\sim v$。</li><li>想一步到位 → 用渐近展开：把 $y$ 写成 $kx+b+o(1)$，常数项就是 $b$（见另解）。</li></ul>`,
      alt: R`<p><b>渐近展开法（一步看出 $k$ 和 $b$）：</b>由上面的变形，</p>
$$y=x\left[1+\ln\left(1+\frac{1}{\mathrm{e}(x-1)}\right)\right]=x+x\left[\frac{1}{\mathrm{e}(x-1)}+O\!\left(\frac1{x^2}\right)\right].$$
<p>又 $\dfrac{x}{x-1}=1+\dfrac1{x-1}$，所以</p>
$$y=x+\frac1{\mathrm{e}}+\frac{1}{\mathrm{e}(x-1)}+O\!\left(\frac1x\right)=x+\frac1{\mathrm{e}}+o(1).$$
<p>"$x$ 的一次项系数"就是 $k=1$，"常数项"就是 $b=\frac1{\mathrm{e}}$，其余部分趋于 $0$。这正是斜渐近线定义的直接体现。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: x→+∞ 与 x→−∞ 时 limit(y/x)=1，limit(y−x)=exp(−1)，斜渐近线 y=x+1/e' },
      flags: ['原卷 OCR 把选择题说明写成"每题 10 分，共 50 分"，实际每题 5 分（参考解析亦为 5 分），按 5 分录入（适用于第 1–4 题）', '参考解析题干写作"渐近线方程"，原卷为"斜渐近线方程"，按原卷录入']
    },

    /* ───────────────────────── 第 2 题 ───────────────────────── */
    {
      id: '2023-2', year: 2023, no: '第2题', type: '选择', score: 5,
      stem: R`若微分方程 $y''+ay'+by=0$ 的解在 $(-\infty,+\infty)$ 上有界，则（　　）`,
      options: [R`$a<0,\ b>0$`, R`$a>0,\ b>0$`, R`$a=0,\ b>0$`, R`$a=0,\ b<0$`],
      answer: 'C',
      figure: null,
      kp: ['ode.const', 'ode.linear'],
      methods: ['特征方程', '按判别式分类讨论', '韦达定理'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二阶常系数齐次线性方程的通解结构，以及"特征根的实部决定解的增长"。</p>
<p><b>题意先读准：</b>零解 $y\equiv0$ 永远有界，所以"解有界"只能理解为<b>方程的所有解</b>都在整条实轴上有界。</p>
<p><b>从最基本的事实出发：</b>通解是 $\mathrm{e}^{\lambda x}$、$x\mathrm{e}^{\lambda x}$、$\mathrm{e}^{\alpha x}\cos\beta x$ 这类函数的组合。而指数函数 $\mathrm{e}^{\alpha x}$ 在<b>整条实轴</b>上有界，当且仅当 $\alpha=0$：$\alpha>0$ 时 $x\to+\infty$ 爆炸，$\alpha<0$ 时 $x\to-\infty$ 爆炸。所以要所有解有界，特征根的实部必须都是 $0$，并且不能是重根（重根会带出因子 $x$）。剩下唯一可能：特征根是一对纯虚数 $\pm\mathrm{i}\beta$（$\beta\ne0$），解是纯粹的"无阻尼振动"。</p>`,
      solution: R`<p><b>第一步：写特征方程。</b>$\lambda^2+a\lambda+b=0$，判别式 $\Delta=a^2-4b$。</p>
<p><b>第二步：分三种情况讨论。</b></p>
<p>(i) $\Delta>0$：两个不等实根 $\lambda_1\ne\lambda_2$，二者不可能都为 $0$，不妨设 $\lambda_1\ne0$。则 $y=\mathrm{e}^{\lambda_1x}$ 是一个解：$\lambda_1>0$ 时在 $x\to+\infty$ 无界，$\lambda_1<0$ 时在 $x\to-\infty$ 无界。不满足要求。</p>
<p>(ii) $\Delta=0$：二重根 $\lambda=-\frac a2$，$y=x\mathrm{e}^{\lambda x}$ 是一个解。若 $\lambda=0$，它就是 $y=x$，无界；若 $\lambda\ne0$，另一个解 $y=\mathrm{e}^{\lambda x}$ 已经无界。不满足要求。</p>
<p>(iii) $\Delta<0$：共轭复根 $\lambda=\alpha\pm\mathrm{i}\beta$，其中 $\alpha=-\frac a2$，$\beta=\frac{\sqrt{4b-a^2}}{2}>0$，通解</p>
$$y=\mathrm{e}^{\alpha x}\left(C_1\cos\beta x+C_2\sin\beta x\right).$$
<p>若 $\alpha\ne0$，取解 $y=\mathrm{e}^{\alpha x}\cos\beta x$，在点 $x_k=\frac{2k\pi}{\beta}$ 处 $y(x_k)=\mathrm{e}^{2k\pi\alpha/\beta}$：$\alpha>0$ 时令 $k\to+\infty$，$\alpha<0$ 时令 $k\to-\infty$，都趋于 $+\infty$，无界。所以必须 $\alpha=0$，即 $a=0$；再由 $\Delta=-4b<0$ 得 $b>0$。</p>
<p><b>第三步：验证充分性。</b>$a=0,\ b>0$ 时通解为 $y=C_1\cos\sqrt b\,x+C_2\sin\sqrt b\,x$，显然 $|y|\leqslant|C_1|+|C_2|$，所有解都有界。所以选 <b>C</b>。</p>
<p><b>第四步：用反例排除其他选项。</b></p>
<ul><li><b>A</b>：取 $a=-2,\ b=1$，特征根 $\lambda=1$（二重），解 $y=\mathrm{e}^x$ 在 $x\to+\infty$ 无界。</li><li><b>B</b>：取 $a=2,\ b=1$，特征根 $\lambda=-1$（二重），解 $y=\mathrm{e}^{-x}$ 在 $x\to-\infty$ 无界。（它只在 $[0,+\infty)$ 上有界，但题目要求的是整条实轴。）</li><li><b>D</b>：取 $a=0,\ b=-4$，特征根 $\pm2$，解 $y=\mathrm{e}^{2x}$ 无界。</li></ul>`,
      pitfalls: R`<ul><li><b>只看 $x\to+\infty$：</b>受"阻尼振动 $a>0,b>0$ 时解衰减"的印象影响而错选 B。注意区间是 $(-\infty,+\infty)$，$\mathrm{e}^{-x}$ 在左端无界。</li><li><b>以为有 $\cos$、$\sin$ 振荡就有界：</b>$\mathrm{e}^{\alpha x}\cos\beta x$ 的振幅是 $\mathrm{e}^{\alpha x}$，$\alpha\ne0$ 时振幅在某一端无限增大。</li><li><b>忽略重根：</b>$a=b=0$ 时特征根 $0$ 是二重根，解 $y=C_1+C_2x$ 无界——"实部为 $0$"还不够，还必须是单根。</li></ul>`,
      summary: R`<p><b>核心原理：</b>常系数线性方程解的"长相"完全由特征根决定，实部管增长或衰减，虚部管振荡。</p>
<p><b>三个常用结论（对 $y''+ay'+by=0$）：</b></p><ul><li>所有解在 $(-\infty,+\infty)$ 上有界 $\iff a=0,\ b>0$。</li><li>所有解在 $[0,+\infty)$ 上有界 $\iff a\geqslant0,\ b\geqslant0$ 且 $a,b$ 不同时为 $0$。</li><li>所有解当 $x\to+\infty$ 时趋于 $0$ $\iff a>0,\ b>0$。</li></ul>
<p><b>题型识别：</b>看到"解有界""解趋于零""解是周期函数"→ 想到"特征根实部的符号 + 是否重根"；用韦达定理 $\lambda_1+\lambda_2=-a$，$\lambda_1\lambda_2=b$ 把根的条件翻译成系数条件。</p>`,
      alt: R`<p><b>韦达定理速解：</b>由分析，所有解有界 $\iff$ 两根是一对非零纯虚数 $\pm\mathrm{i}\beta$（$\beta\ne0$）。由韦达定理，两根之和 $\mathrm{i}\beta+(-\mathrm{i}\beta)=0=-a$，两根之积 $(\mathrm{i}\beta)(-\mathrm{i}\beta)=\beta^2>0$ 等于 $b$。所以 $a=0,\ b>0$，选 C。</p>`,
      verify: { by: 'mixed', ok: true, note: 'sympy dsolve：a=-2,b=1 得 (C1+C2x)e^x；a=2,b=1 得 (C1+C2x)e^{-x}；a=0,b=-4 得 C1e^{-2x}+C2e^{2x}；a=0,b=4 得 C1 sin2x+C2 cos2x，结合手工分类讨论确认选 C' },
      flags: []
    },

    /* ───────────────────────── 第 3 题 ───────────────────────── */
    {
      id: '2023-3', year: 2023, no: '第3题', type: '选择', score: 5,
      stem: R`设函数 $y=f(x)$ 由 $\begin{cases}x=2t+|t|,\\ y=|t|\sin t\end{cases}$ 确定，则（　　）`,
      options: [R`$f(x)$ 连续，$f'(0)$ 不存在`, R`$f'(0)$ 存在，$f'(x)$ 在 $x=0$ 处不连续`, R`$f'(x)$ 连续，$f''(0)$ 不存在`, R`$f''(0)$ 存在，$f''(x)$ 在 $x=0$ 处不连续`],
      answer: 'C',
      figure: null,
      kp: ['diff.calc', 'diff.def', 'lim.cont'],
      methods: ['分段讨论去绝对值', '消参数', '用定义求分段点处的导数', '左右导数'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>分段函数在分段点处的连续性、可导性、导函数连续性、二阶可导性——四个选项恰好是一级一级往上爬的"光滑程度阶梯"。</p>
<p><b>为什么要先消参：</b>参数方程求导公式 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{y'(t)}{x'(t)}$ 要求 $x'(t)$ 存在且不为 $0$。但 $x=2t+|t|$ 在 $t=0$ 处含 $|t|$，$x'(0)$ 根本不存在，公式在最关键的点失效。所以最稳的做法是：<b>按 $t$ 的符号去掉绝对值，把 $y$ 直接写成 $x$ 的分段函数</b>，再在分段点 $x=0$ 用导数定义逐级检验。</p>
<p><b>为什么 $x=0$ 对应 $t=0$：</b>$t\geqslant0$ 时 $x=3t\geqslant0$，$t<0$ 时 $x=t<0$，所以 $x$ 与 $t$ 同号，且 $x(t)$ 严格单调增，$t$ 与 $x$ 一一对应，$y=f(x)$ 确实是一个函数。</p>`,
      solution: R`<p><b>第一步：去绝对值、消参数。</b></p>
<p>当 $t\geqslant0$：$x=3t$，$y=t\sin t$。由 $t=\frac x3$ 得 $y=\frac x3\sin\frac x3$（$x\geqslant0$）。</p>
<p>当 $t<0$：$x=t$，$y=-t\sin t$。直接得 $y=-x\sin x$（$x<0$）。</p>
$$f(x)=\begin{cases}\dfrac x3\sin\dfrac x3, & x\geqslant0,\\[2mm] -x\sin x, & x<0.\end{cases}$$
<p><b>第二步：连续性。</b>两段在 $x\to0$ 时都趋于 $0$，且 $f(0)=0$，所以 $f$ 在 $x=0$ 连续（其余点是初等函数，自然连续）。</p>
<p><b>第三步：$f'(0)$——用定义算左右导数。</b></p>
$$f'_+(0)=\lim_{x\to0^+}\frac{\frac x3\sin\frac x3-0}{x}=\lim_{x\to0^+}\frac13\sin\frac x3=0,\qquad f'_-(0)=\lim_{x\to0^-}\frac{-x\sin x-0}{x}=\lim_{x\to0^-}(-\sin x)=0.$$
<p>左右导数相等，$f'(0)=0$ 存在，<b>A 错</b>。</p>
<p><b>第四步：$f'(x)$ 在 $x=0$ 是否连续。</b>$x\ne0$ 时按公式求导：</p>
$$f'(x)=\begin{cases}\dfrac13\sin\dfrac x3+\dfrac x9\cos\dfrac x3, & x>0,\\[2mm] 0, & x=0,\\[1mm] -\sin x-x\cos x, & x<0.\end{cases}$$
<p>$x\to0^+$ 时 $f'(x)\to0$，$x\to0^-$ 时 $f'(x)\to0$，都等于 $f'(0)=0$，所以 $f'$ 在 $x=0$ 连续，<b>B 错</b>。</p>
<p><b>第五步：$f''(0)$——再对 $f'$ 用定义。</b></p>
$$f''_+(0)=\lim_{x\to0^+}\frac{f'(x)-f'(0)}{x}=\lim_{x\to0^+}\left[\frac13\cdot\frac{\sin\frac x3}{x}+\frac19\cos\frac x3\right]=\frac13\cdot\frac13+\frac19=\frac29,$$
$$f''_-(0)=\lim_{x\to0^-}\frac{-\sin x-x\cos x}{x}=\lim_{x\to0^-}\left[-\frac{\sin x}{x}-\cos x\right]=-1-1=-2.$$
<p>$\frac29\ne-2$，所以 $f''(0)$ 不存在。于是 <b>C 正确</b>；D 说 $f''(0)$ 存在，<b>D 错</b>。</p>
<p><b>直观理解：</b>在 $0$ 附近，右段 $\frac x3\sin\frac x3\approx\frac{x^2}9$，左段 $-x\sin x\approx-x^2$。图像是"右边一条开口向上的扁抛物线、左边一条开口向下的陡抛物线"在原点拼接：两边在原点的切线都是水平的（一阶光滑），但弯曲程度和方向不同（二阶不光滑）。</p>`,
      pitfalls: R`<ul><li><b>在 $t=0$ 处硬套参数求导公式：</b>$x'(t)$ 在 $t=0$ 不存在，公式无效；只能对 $t\ne0$ 用，分段点必须回到定义。</li><li><b>消参时对应错段：</b>$t<0$ 时 $x=2t-t=t$（不是 $3t$），$y=|t|\sin t=-t\sin t$（不是 $t\sin t$）。</li><li><b>把"导函数的极限"当成"导数"：</b>判断 $f''(0)$ 时，严格做法是对 $f'$ 用定义；若要用"$f''(x)$ 的左右极限"，需先确认 $f'$ 在 $0$ 连续（导数极限定理），本题恰好满足，所以两种算法结论一致。</li><li><b>D 选项的陷阱：</b>"$f''(0)$ 存在而 $f''(x)$ 在 $0$ 不连续"在一般情况下是可能的（如 $x^4\sin\frac1x$ 补充定义 $f(0)=0$），但本题 $f''(0)$ 根本不存在，所以谈不上。</li></ul>`,
      summary: R`<p><b>方法要点：</b>分段点处判断光滑程度，按阶梯逐级检验：连续 → 左右导数（定义）→ 导函数左右极限 → 二阶左右导数（对 $f'$ 用定义）。</p>
<p><b>题型识别：</b></p><ul><li>看到参数方程里有 $|t|$ → 先按 $t$ 的正负拆开，消参得到显式分段函数。</li><li>看到"分段点处可导吗、导函数连续吗" → 一律回到导数定义，不要套公式。</li><li>选择题快速判断 → 在分段点两侧各做泰勒展开到所需阶，比较系数（见另解）。</li></ul>`,
      alt: R`<p><b>泰勒展开速判：</b>$x\to0^+$ 时 $\frac x3\sin\frac x3=\frac{x^2}{9}+o(x^2)$；$x\to0^-$ 时 $-x\sin x=-x^2+o(x^2)$。</p>
<ul><li>两侧常数项都是 $0$ → 连续；一次项系数都是 $0$ → $f'(0)=0$。</li><li>导函数两侧分别约为 $\frac{2x}{9}$ 和 $-2x$，都趋于 $0$ → $f'$ 连续。</li><li>二次项系数 $\frac19$ 与 $-1$ 不同 → 二阶左右导数 $2\cdot\frac19=\frac29$ 与 $2\cdot(-1)=-2$ 不等 → $f''(0)$ 不存在。</li></ul><p>一眼选 C。</p>`,
      verify: { by: 'sympy', ok: true, note: "sympy：f'_+(0)=f'_-(0)=0；x→0± 时 f'(x)→0；f''_+(0)=2/9，f''_-(0)=−2，故 f''(0) 不存在，选 C" },
      flags: ['原卷 OCR 的 D 选项为"f\'\'(0) 存在，f\'(x) 在 x=0 处不连续"，参考解析为"f\'\'(0) 存在，f\'\'(x) 在 x=0 处不连续"；前者自相矛盾（二阶可导必然一阶导数连续），按官方试卷录为 f\'\'(x)，不影响答案 C']
    },

    /* ───────────────────────── 第 4 题 ───────────────────────── */
    {
      id: '2023-4', year: 2023, no: '第4题', type: '选择', score: 5,
      stem: R`已知 $a_n<b_n\ (n=1,2,\cdots)$，若级数 $\sum\limits_{n=1}^{\infty}a_n$ 与 $\sum\limits_{n=1}^{\infty}b_n$ 均收敛，则"$\sum\limits_{n=1}^{\infty}a_n$ 绝对收敛"是"$\sum\limits_{n=1}^{\infty}b_n$ 绝对收敛"的（　　）`,
      options: [R`充分必要条件`, R`充分不必要条件`, R`必要不充分条件`, R`既不充分也不必要条件`],
      answer: 'A',
      figure: null,
      kp: ['series.alt', 'series.positive', 'series.concept'],
      methods: ['作差构造正项级数', '三角不等式', '比较判别法'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>绝对收敛的运算性质，以及"正项级数收敛就是绝对收敛"。</p>
<p><b>为什么想到作差：</b>$a_n$、$b_n$ 都可正可负，不能直接用比较判别法（比较判别法只适用于正项级数）。题目里唯一的"桥梁"是两者的差：令 $c_n=b_n-a_n$。两个条件合起来恰好说明 $\sum c_n$ 是<b>收敛的正项级数</b>，从而绝对收敛。</p>
<p><b>本质（第一性原理）：</b>"绝对收敛的级数"对加减法封闭（三角不等式保证）。$b_n=a_n+c_n$，而 $c_n$ 这一块是绝对收敛的，所以给 $a_n$ 加上它、或从 $b_n$ 减去它，都不改变"是否绝对收敛"。就像"偶数加偶数还是偶数"：若 $c$ 是偶数，则 $a$ 是偶数 $\iff a+c$ 是偶数。</p>`,
      solution: R`<p><b>第一步：构造正项级数。</b>令 $c_n=b_n-a_n$，由 $a_n<b_n$ 得 $c_n>0$。由收敛级数的线性性质，$\sum c_n=\sum b_n-\sum a_n$ 收敛。又因 $c_n>0$，$|c_n|=c_n$，所以 $\sum|c_n|$ 收敛，即 $\sum c_n$ 绝对收敛。</p>
<p><b>第二步：充分性（$a$ 绝对收敛 ⇒ $b$ 绝对收敛）。</b>由三角不等式</p>
$$|b_n|=|a_n+c_n|\leqslant|a_n|+c_n.$$
<p>右边是两个收敛的正项级数之和，收敛；由比较判别法，$\sum|b_n|$ 收敛。</p>
<p><b>第三步：必要性（$b$ 绝对收敛 ⇒ $a$ 绝对收敛）。</b>同理</p>
$$|a_n|=|b_n-c_n|\leqslant|b_n|+c_n,$$
<p>右边收敛，故 $\sum|a_n|$ 收敛。</p>
<p><b>第四步：结论。</b>二者互相推出，是充分必要条件，选 <b>A</b>。B、C、D 都否认了某一个方向，而上面两个方向都已严格证明，所以都错。</p>
<p><b>补充：两个条件缺一不可。</b></p><ul><li>去掉"均收敛"：取 $a_n=-\frac1{n^2}$，$b_n=\frac1n$，仍有 $a_n<b_n$，$\sum a_n$ 绝对收敛但 $\sum b_n$ 发散。</li><li>去掉"$a_n<b_n$"：取 $a_n=0$，$b_n=\frac{(-1)^n}{n}$，两者都收敛，$\sum a_n$ 绝对收敛，但 $\sum b_n$ 只是条件收敛。此时 $c_n=b_n-a_n$ 不再是正项，第一步失效。</li></ul>`,
      pitfalls: R`<ul><li><b>误用比较判别法：</b>看到 $a_n<b_n$ 就想"小的收敛推不出大的、大的收敛推出小的"，于是只承认一个方向，错选 B 或 C。比较判别法只对正项级数成立，这里 $a_n,b_n$ 符号不定。</li><li><b>忽略作差：</b>不构造 $c_n$，就很难同时用上"$a_n<b_n$"和"均收敛"两个条件。</li><li><b>举反例时不满足题设：</b>找反例必须同时满足 $a_n<b_n$ 与"两级数都收敛"，否则反例无效。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>正项级数：收敛 $=$ 绝对收敛。</li><li>绝对收敛 $\pm$ 绝对收敛 $=$ 绝对收敛；绝对收敛 $\pm$ 条件收敛 $=$ 条件收敛；条件收敛 $\pm$ 条件收敛 结论不定。</li></ul>
<p><b>题型识别：</b>看到两个任意项级数之间有大小关系 → 作差得到正项级数；看到"$\sum|b_n|$ 与 $\sum|a_n|$ 的关系" → 用三角不等式 $|b_n|\leqslant|a_n|+|b_n-a_n|$ 搭桥。</p>`,
      verify: { by: 'proof', ok: true, note: '两个方向均用三角不等式 + 比较判别法严格证明；并核对了去掉任一条件时的反例（a_n=−1/n², b_n=1/n；a_n=0, b_n=(−1)^n/n）' },
      flags: ['原卷 OCR 题干乱码（"∑ ∵"等），按上下文与参考解析恢复为："∑a_n 绝对收敛"是"∑b_n 绝对收敛"的（　　）']
    },

    /* ───────────────────────── 第 11 题 ───────────────────────── */
    {
      id: '2023-11', year: 2023, no: '第11题', type: '填空', score: 5,
      stem: R`当 $x\to0$ 时，函数 $f(x)=ax+bx^2+\ln(1+x)$ 与 $g(x)=\mathrm{e}^{x^2}-\cos x$ 是等价无穷小，则 $ab=$ ______.`,
      options: null,
      answer: R`$-2$`,
      figure: null,
      kp: ['lim.inf', 'diff.taylor', 'lim.compute'],
      methods: ['泰勒公式（麦克劳林展开）', '比较同次幂系数', '已知极限反求参数'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>无穷小的比较与"已知极限反求参数"，核心工具是泰勒展开。</p>
<p><b>思路：</b>"等价"的意思是 $\lim\dfrac{f(x)}{g(x)}=1$。先弄清 $g$ 是几阶无穷小、首项系数是多少，再要求 $f$ 的展开式"长得和 $g$ 一样"：比 $g$ 低阶的项系数必须为 $0$，同阶项系数必须相等。</p>
<p><b>为什么用泰勒而不是洛必达：</b>$f$ 里有两个待定参数。泰勒展开把 $f$ 直接写成 $(\cdots)x+(\cdots)x^2+\cdots$ 的形式，每一阶的系数一目了然，"待定系数"与"逐阶比较"天然匹配；洛必达也能做（见另解），但要多次求导并逐步论证。</p>
<p><b>展开到几阶：</b>$g$ 是 $2$ 阶（下面算出 $g\sim\frac32x^2$），所以 $f$ 也只需展开到 $x^2$ 项，这就是"上下同阶"原则。</p>`,
      solution: R`<p><b>第一步：展开 $g$。</b>$x\to0$ 时</p>
$$\mathrm{e}^{x^2}=1+x^2+o(x^2),\qquad \cos x=1-\frac{x^2}{2}+o(x^2),$$
$$g(x)=\mathrm{e}^{x^2}-\cos x=\frac32x^2+o(x^2).$$
<p>（$\mathrm{e}^{x^2}$ 的展开是把 $\mathrm{e}^u=1+u+\cdots$ 中的 $u$ 换成 $x^2$。）</p>
<p><b>第二步：展开 $f$。</b>由 $\ln(1+x)=x-\frac{x^2}{2}+o(x^2)$，</p>
$$f(x)=ax+bx^2+x-\frac{x^2}2+o(x^2)=(a+1)x+\left(b-\frac12\right)x^2+o(x^2).$$
<p><b>第三步：比较系数。</b></p>
$$\frac{f(x)}{g(x)}=\frac{(a+1)x+\left(b-\frac12\right)x^2+o(x^2)}{\frac32x^2+o(x^2)}.$$
<p>若 $a+1\ne0$，分子是 $1$ 阶、分母是 $2$ 阶，比值趋于 $\infty$，不可能等于 $1$。所以 $a+1=0$，即 $a=-1$。此时</p>
$$\lim_{x\to0}\frac{f(x)}{g(x)}=\frac{b-\frac12}{\frac32}=1\ \Rightarrow\ b-\frac12=\frac32\ \Rightarrow\ b=2.$$
<p><b>第四步：</b>$ab=(-1)\times2=-2$。</p>`,
      pitfalls: R`<ul><li><b>漏掉 $\cos x$ 的贡献：</b>只看到 $\mathrm{e}^{x^2}-1\sim x^2$，得出 $g\sim x^2$，于是 $b=\frac32$，$ab=-\frac32$。正确写法是 $g=(\mathrm{e}^{x^2}-1)+(1-\cos x)\sim x^2+\frac12x^2$（两项同号同阶、不会抵消，才可以这样相加）。</li><li><b>$\ln(1+x)$ 二次项符号错：</b>是 $-\frac{x^2}{2}$，不是 $+\frac{x^2}2$。</li><li><b>展开阶数不够：</b>只展开到一阶只能定出 $a$，定不出 $b$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"已知等价 / 同阶 / 极限值，反求参数"→ 泰勒展开到"分母的阶数"，低阶项系数令为 $0$，同阶项系数按条件列方程。</p>
<p><b>必背展开（$x\to0$）：</b>$\ln(1+x)=x-\frac{x^2}2+\frac{x^3}3+o(x^3)$；$\mathrm{e}^x=1+x+\frac{x^2}2+o(x^2)$；$\cos x=1-\frac{x^2}2+\frac{x^4}{24}+o(x^4)$。</p>
<p><b>题型识别：</b>看到"含参数的函数与已知函数等价/同阶" → 先确定已知函数的阶和首项系数 → 再展开含参函数比较系数。</p>`,
      alt: R`<p><b>洛必达法：</b>$\frac00$ 型，求导得 $\dfrac{f'(x)}{g'(x)}=\dfrac{a+2bx+\frac1{1+x}}{2x\mathrm{e}^{x^2}+\sin x}$。分母 $\to0$，若分子极限 $a+1\ne0$，比值 $\to\infty$，与极限为 $1$ 矛盾，故 $a=-1$。再用一次洛必达：</p>
$$\lim_{x\to0}\frac{2b-\frac{1}{(1+x)^2}}{2\mathrm{e}^{x^2}+4x^2\mathrm{e}^{x^2}+\cos x}=\frac{2b-1}{3}=1\ \Rightarrow\ b=2.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy series：f=(a+1)x+(b−1/2)x²+O(x³)，g=3x²/2+O(x³)；代入 a=−1,b=2 后 limit(f/g)=1，ab=−2' },
      flags: []
    },

    /* ───────────────────────── 第 12 题 ───────────────────────── */
    {
      id: '2023-12', year: 2023, no: '第12题', type: '填空', score: 5,
      stem: R`曲面 $z=x+2y+\ln(1+x^2+y^2)$ 在点 $(0,0,0)$ 处的切平面方程为 ______.`,
      options: null,
      answer: R`$x+2y-z=0$`,
      figure: null,
      kp: ['mdiff.geo', 'mdiff.diffable'],
      methods: ['曲面法向量', '偏导数', '线性近似'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>显式曲面 $z=f(x,y)$ 的切平面。</p>
<p><b>第一性原理：</b>可微的含义就是"在一点附近，函数可以用一个线性函数近似，误差是高阶无穷小"：</p>
$$f(x,y)=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)+o(\rho).$$
<p>把 $o(\rho)$ 扔掉，剩下的线性函数的图像就是切平面。所以求切平面 = 求两个偏导数。</p>
<p><b>本题的捷径：</b>在原点，$\ln(1+x^2+y^2)\approx x^2+y^2$ 是二阶小量，对线性部分没有贡献，所以切平面就是"去掉高阶项后剩下的" $z=x+2y$。</p>`,
      solution: R`<p><b>第一步：验证点在曲面上。</b>$x=y=0$ 时 $z=0+0+\ln1=0$，点 $(0,0,0)$ 在曲面上。</p>
<p><b>第二步：求偏导数。</b></p>
$$z_x=1+\frac{2x}{1+x^2+y^2},\qquad z_y=2+\frac{2y}{1+x^2+y^2}.$$
<p>在 $(0,0)$ 处：$z_x=1$，$z_y=2$。</p>
<p><b>第三步：写法向量。</b>把曲面写成 $F(x,y,z)=x+2y+\ln(1+x^2+y^2)-z=0$，法向量 $\mathbf n=(F_x,F_y,F_z)=(z_x,z_y,-1)=(1,2,-1)$。</p>
<p><b>第四步：点法式。</b></p>
$$1\cdot(x-0)+2\cdot(y-0)-1\cdot(z-0)=0,\quad\text{即}\quad x+2y-z=0.$$`,
      pitfalls: R`<ul><li><b>法向量第三个分量写成 $+1$：</b>得到 $x+2y+z=0$。$F=f(x,y)-z$ 对 $z$ 求偏导是 $-1$。</li><li><b>把切平面和法线混淆：</b>法线是 $\dfrac{x}{1}=\dfrac{y}{2}=\dfrac{z}{-1}$，不是本题所问。</li><li>求偏导时忘记 $\ln(1+x^2+y^2)$ 的链式法则因子 $2x$、$2y$（本题在原点恰好为 $0$，但其他点就会出错）。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>显式曲面 $z=f(x,y)$：切平面 $z-z_0=f_x(x-x_0)+f_y(y-y_0)$，法向量 $(f_x,f_y,-1)$。</li><li>隐式曲面 $F(x,y,z)=0$：法向量 $(F_x,F_y,F_z)$。</li></ul>
<p><b>题型识别：</b>看到"在原点处的切平面"→ 直接保留函数的一次项（线性部分），二次及以上的项一概不影响切平面。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：z_x(0,0)=1，z_y(0,0)=2，切平面 z=x+2y 即 x+2y−z=0' },
      flags: []
    },

    /* ───────────────────────── 第 13 题 ───────────────────────── */
    {
      id: '2023-13', year: 2023, no: '第13题', type: '填空', score: 5,
      stem: R`设 $f(x)$ 是周期为 $2$ 的周期函数，且 $f(x)=1-x,\ x\in[0,1]$. 若 $f(x)=\dfrac{a_0}{2}+\sum\limits_{n=1}^{\infty}a_n\cos n\pi x$，则 $\sum\limits_{n=1}^{\infty}a_{2n}=$ ______.`,
      options: null,
      answer: R`$0$`,
      figure: null,
      kp: ['series.fourier'],
      methods: ['偶延拓', '余弦级数系数公式', '分部积分', '狄利克雷收敛定理代特殊点'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>周期 $2l$（这里 $l=1$）的余弦级数：系数公式、偶延拓、狄利克雷收敛定理。</p>
<p><b>第一个关键信息：</b>题目只给了 $[0,1]$ 上的表达式，但说 $f$ 展开成只含余弦的级数。余弦级数的和函数是偶函数，所以这等于告诉你：<b>$f$ 是偶函数</b>，在 $[-1,0]$ 上 $f(x)=f(-x)=1+x$。于是在一个周期 $[-1,1]$ 上 $f(x)=1-|x|$，整体是一条"三角波"。</p>
<div><svg viewBox="0 0 320 120" width="320" height="120" role="img" aria-label="f(x) 的图形：周期为 2 的三角波"><line x1="8" y1="90" x2="312" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="160" y1="108" x2="160" y2="10" stroke="currentColor" stroke-width="1" opacity="0.5"/><polyline points="20,90 67,30 113,90 160,30 207,90 253,30 300,90" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="160" y1="30" x2="207" y2="90" stroke="currentColor" stroke-width="4"/><text x="146" y="34" font-size="12" fill="currentColor">1</text><text x="104" y="104" font-size="11" fill="currentColor">−1</text><text x="203" y="104" font-size="11" fill="currentColor">1</text><text x="249" y="104" font-size="11" fill="currentColor">2</text><text x="58" y="104" font-size="11" fill="currentColor">−2</text><text x="150" y="104" font-size="11" fill="currentColor">O</text><text x="304" y="84" font-size="12" fill="currentColor">x</text><text x="165" y="18" font-size="12" fill="currentColor">y</text></svg></div>
<p><small>示意图：粗线段是题目给出的 $f(x)=1-x$（$0\leqslant x\leqslant1$），其余部分由"偶函数 + 周期 2"确定。</small></p>
<p><b>两条路：</b>(1) 老老实实算出 $a_n$ 的通式，再求和；(2) 不算系数，利用狄利克雷定理在 $x=0$ 和 $x=1$ 两个特殊点取值，直接凑出 $\sum a_{2n}$（见另解）。填空题两条路都要会。</p>`,
      solution: R`<p><b>第一步：写系数公式。</b>周期 $2l=2$，$l=1$。偶函数的傅里叶系数</p>
$$a_n=\frac{2}{l}\int_0^l f(x)\cos\frac{n\pi x}{l}\,\mathrm{d}x=2\int_0^1(1-x)\cos n\pi x\,\mathrm{d}x,\quad n=0,1,2,\cdots$$
<p><b>第二步：算 $a_0$。</b>$a_0=2\displaystyle\int_0^1(1-x)\,\mathrm{d}x=2\cdot\frac12=1$。</p>
<p><b>第三步：算 $a_n\ (n\geqslant1)$——分部积分。</b>取 $u=1-x$，$\mathrm{d}v=\cos n\pi x\,\mathrm{d}x$，则 $v=\dfrac{\sin n\pi x}{n\pi}$：</p>
$$\int_0^1(1-x)\cos n\pi x\,\mathrm{d}x=\left[(1-x)\frac{\sin n\pi x}{n\pi}\right]_0^1+\frac{1}{n\pi}\int_0^1\sin n\pi x\,\mathrm{d}x.$$
<p>边界项：$x=1$ 时 $1-x=0$，$x=0$ 时 $\sin0=0$，所以为 $0$。剩下</p>
$$\frac1{n\pi}\left[-\frac{\cos n\pi x}{n\pi}\right]_0^1=\frac{1-\cos n\pi}{n^2\pi^2}=\frac{1-(-1)^n}{n^2\pi^2}.$$
<p>所以</p>
$$a_n=\frac{2\left[1-(-1)^n\right]}{n^2\pi^2}=\begin{cases}\dfrac{4}{n^2\pi^2}, & n\ \text{为奇数},\\[2mm] 0, & n\ \text{为偶数}.\end{cases}$$
<p><b>第四步：求和。</b>$a_{2n}=0$ 对所有 $n\geqslant1$ 成立，所以 $\sum\limits_{n=1}^{\infty}a_{2n}=0$。</p>
<p><b>为什么偶数项系数恰好为 $0$（对称性解释）：</b>在 $[0,1]$ 上，$f(x)-\frac12=\frac12-x$ 关于 $x=\frac12$ 是"奇对称"的（令 $s=x-\frac12$，它等于 $-s$）；而 $\cos 2k\pi x=\cos(k\pi+2k\pi s)=(-1)^k\cos2k\pi s$ 关于 $x=\frac12$ 是"偶对称"的。奇 × 偶在对称区间上积分为 $0$，常数 $\frac12$ 与 $\cos2k\pi x$ 的积分也为 $0$，所以 $a_{2k}=0$。</p>`,
      pitfalls: R`<ul><li><b>系数公式用错：</b>周期是 $2$ 不是 $2\pi$，要用 $\cos n\pi x$ 与 $\frac2l=2$，不要写成 $\frac1\pi\int\cdots\cos nx$。</li><li><b>分部积分符号错：</b>$\mathrm{d}u=-\mathrm{d}x$，"$-\int v\,\mathrm{d}u$"变成"$+\int v\,\mathrm{d}x$"，这里最容易丢负号。</li><li><b>$\cos n\pi$ 不会化简：</b>$\cos n\pi=(-1)^n$，偶数项时为 $1$。</li><li><b>用特殊点法时不检查连续性：</b>狄利克雷定理在间断点处收敛到左右极限的平均值。本题三角波处处连续，$x=0,1$ 处级数和就等于函数值；遇到间断点要改用平均值。</li></ul>`,
      summary: R`<p><b>方法要点：</b>周期 $2l$ 的余弦级数：$a_n=\dfrac2l\displaystyle\int_0^lf(x)\cos\frac{n\pi x}l\,\mathrm{d}x$；正弦级数：$b_n=\dfrac2l\displaystyle\int_0^lf(x)\sin\frac{n\pi x}l\,\mathrm{d}x$。</p>
<p><b>题型识别：</b></p><ul><li>只给半个周期 + 要求余弦级数 → 偶延拓；要求正弦级数 → 奇延拓。</li><li>求 $\sum a_n$、$\sum(-1)^na_n$、$\sum a_{2n}$ 之类 → 优先考虑"代特殊点 $x=0$、$x=l$ + 狄利克雷定理"，往往不用算系数。</li><li>分部积分算傅里叶系数：多项式那一项取作 $u$，三角函数取作 $\mathrm{d}v$。</li></ul>`,
      alt: R`<p><b>特殊点法（不算系数通式）：</b>$f$ 处处连续，由狄利克雷定理，级数在每一点都收敛到 $f(x)$。</p>
<p>取 $x=0$：$f(0)=1=\dfrac{a_0}2+\sum\limits_{n=1}^{\infty}a_n$。</p>
<p>取 $x=1$：$f(1)=0=\dfrac{a_0}2+\sum\limits_{n=1}^{\infty}a_n\cos n\pi=\dfrac{a_0}2+\sum\limits_{n=1}^{\infty}(-1)^na_n$。</p>
<p>两式相加：奇数项 $a_n+(-1)^na_n=0$，偶数项 $a_n+(-1)^na_n=2a_n$，所以</p>
$$1=a_0+2\sum_{n=1}^{\infty}a_{2n}.$$
<p>而 $a_0=2\int_0^1(1-x)\,\mathrm{d}x=1$，故 $\sum\limits_{n=1}^{\infty}a_{2n}=0$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：a_n=2∫₀¹(1−x)cos(nπx)dx=2(1−(−1)^n)/(n²π²)，a₀=1，a_{2n}=0；前 6 项为 4/π²,0,4/(9π²),0,4/(25π²),0' },
      flags: []
    },

    /* ───────────────────────── 第 14 题 ───────────────────────── */
    {
      id: '2023-14', year: 2023, no: '第14题', type: '填空', score: 5,
      stem: R`设连续函数 $f(x)$ 满足：$f(x+2)-f(x)=x$，$\displaystyle\int_0^2f(x)\,\mathrm{d}x=0$，则 $\displaystyle\int_1^3f(x)\,\mathrm{d}x=$ ______.`,
      options: null,
      answer: R`$\dfrac12$`,
      figure: null,
      kp: ['int.defcalc', 'int.ftc'],
      methods: ['拆分积分区间', '平移换元', '构造变限积分函数'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>定积分的区间可加性与平移换元，背后是"周期函数积分性质"的推广。</p>
<p><b>为什么不去求 $f$：</b>条件只有一个函数方程和一个积分值，$f$ 根本确定不下来（任意加上一个周期为 $2$、在 $[0,2]$ 上积分为 $0$ 的连续函数仍满足条件）。既然答案唯一，说明它只依赖于条件的"组合"，应当直接在积分层面操作。</p>
<p><b>怎么想到平移：</b>函数方程把 $f$ 在 $x+2$ 处的值和在 $x$ 处的值联系起来。目标区间 $[1,3]$ 中，$[2,3]$ 这一段往左平移 $2$ 正好落到 $[0,1]$；而 $[0,1]$ 与剩下的 $[1,2]$ 拼起来恰好是已知的 $[0,2]$。</p>
<p><b>直观图像：</b>如果 $f$ 是周期为 $2$ 的函数（$f(x+2)=f(x)$），任何长度为 $2$ 的"窗口"上积分都一样，答案就是 $0$。现在 $f$ 每右移一个周期就"抬高" $x$，所以窗口 $[1,3]$ 比 $[0,2]$ 多出来的，正是这个"抬高量"在 $[0,1]$ 上的积分 $\int_0^1x\,\mathrm{d}x=\frac12$。</p>`,
      solution: R`<p><b>第一步：拆区间。</b></p>
$$\int_1^3f(x)\,\mathrm{d}x=\int_1^2f(x)\,\mathrm{d}x+\int_2^3f(x)\,\mathrm{d}x.$$
<p><b>第二步：对第二个积分平移换元。</b>令 $x=t+2$，则 $\mathrm{d}x=\mathrm{d}t$；$x=2$ 时 $t=0$，$x=3$ 时 $t=1$：</p>
$$\int_2^3f(x)\,\mathrm{d}x=\int_0^1f(t+2)\,\mathrm{d}t=\int_0^1\left[f(t)+t\right]\mathrm{d}t=\int_0^1f(t)\,\mathrm{d}t+\frac12.$$
<p>这里用了已知条件 $f(t+2)=f(t)+t$。</p>
<p><b>第三步：拼回已知区间。</b></p>
$$\int_1^3f(x)\,\mathrm{d}x=\int_1^2f(x)\,\mathrm{d}x+\int_0^1f(x)\,\mathrm{d}x+\frac12=\int_0^2f(x)\,\mathrm{d}x+\frac12=0+\frac12=\frac12.$$
<p><b>第四步：用具体例子检验。</b>$f(x)=\frac{x^2}4-\frac x2+\frac16$ 满足 $f(x+2)-f(x)=\frac{(x+2)^2-x^2}{4}-1=x$，且 $\int_0^2f\,\mathrm{d}x=0$，直接算得 $\int_1^3f\,\mathrm{d}x=\frac12$，一致。</p>`,
      pitfalls: R`<ul><li><b>试图解出 $f$：</b>条件不足以确定 $f$，浪费时间，还可能把某个特例误当成唯一解。</li><li><b>换元忘改积分限：</b>$x$ 从 $2$ 到 $3$，对应 $t$ 从 $0$ 到 $1$。</li><li><b>函数方程方向用反：</b>$f(t+2)=f(t)+t$，不是 $f(t)-t$；若写反会得到 $-\frac12$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>看到 $f(x+T)$ 与 $f(x)$ 的关系式又要求积分 → 拆区间 + 平移换元，把所有积分搬到已知区间上。</p>
<p><b>相关结论：</b>周期为 $T$ 的连续函数在任一长度为 $T$ 的区间上积分相等，证明方法正是另解中的"对变限积分求导"：$\frac{\mathrm{d}}{\mathrm{d}a}\int_a^{a+T}f(x)\,\mathrm{d}x=f(a+T)-f(a)=0$。</p>
<p><b>题型识别：</b>"窗口积分" $\int_a^{a+T}f$ 随 $a$ 怎么变？→ 把它看成 $a$ 的函数求导。</p>`,
      alt: R`<p><b>变限积分法：</b>设 $F(a)=\displaystyle\int_a^{a+2}f(x)\,\mathrm{d}x$。由变限积分求导公式（$f$ 连续），</p>
$$F'(a)=f(a+2)-f(a)=a.$$
<p>所以 $F(a)=F(0)+\displaystyle\int_0^a s\,\mathrm{d}s=0+\frac{a^2}{2}$，于是 $\displaystyle\int_1^3f(x)\,\mathrm{d}x=F(1)=\frac12$。这个方法还顺带给出了所有窗口积分：$\int_a^{a+2}f=\frac{a^2}2$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：f=x²/4−x/2+1/6 满足条件，∫₁³f=1/2；再叠加周期扰动 sin(πx) 并重新调常数后 ∫₁³f 仍为 1/2' },
      flags: ['原卷 OCR 在"∫₀²f(x)dx=0"与"∫₁³f(x)dx="之间缺"则"字，已补全']
    },

    /* ───────────────────────── 第 17 题 ───────────────────────── */
    {
      id: '2023-17', year: 2023, no: '第17题', type: '解答', score: 10,
      stem: R`设曲线 $y=y(x)\ (x>0)$ 经过点 $(1,2)$，该曲线上任一点 $P(x,y)$ 到 $y$ 轴的距离等于该点处的切线在 $y$ 轴上的截距.<br>(1) 求 $y(x)$；<br>(2) 求函数 $f(x)=\displaystyle\int_1^xy(t)\,\mathrm{d}t$ 在 $(0,+\infty)$ 上的最大值.`,
      options: null,
      answer: R`(1) $y(x)=x(2-\ln x)$；(2) 最大值为 $f(\mathrm{e}^2)=\dfrac{\mathrm{e}^4-5}{4}$.`,
      figure: null,
      kp: ['ode.app', 'ode.first', 'diff.mono'],
      methods: ['几何条件列微分方程', '一阶线性微分方程（积分因子）', '变限积分求导', '单调性求最值', '分部积分'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>(1) 把几何语言翻译成微分方程并求解；(2) 变限积分函数的最值。</p>
<p><b>(1) 的翻译过程：</b>题目里每一句话都要变成一个式子。</p><ul><li>"$P(x,y)$ 到 $y$ 轴的距离"：$|x|$，因 $x>0$ 就是 $x$。</li><li>"该点处的切线"：过 $(x,y)$、斜率 $y'$ 的直线，用 $(X,Y)$ 表示切线上的动点：$Y-y=y'(X-x)$。</li><li>"切线在 $y$ 轴上的截距"：令 $X=0$，得 $Y=y-xy'$。</li></ul>
<p>于是 $x=y-xy'$，这是一阶线性方程。一个小观察能让求解更快：$xy'-y$ 正是 $\left(\frac yx\right)'$ 的分子 $\left(\left(\frac yx\right)'=\frac{xy'-y}{x^2}\right)$，所以两边除以 $x^2$ 就能直接积分——这其实就是积分因子 $\frac1x$ 的来历。</p>
<p><b>(2) 的思路：</b>$f(x)=\int_1^xy(t)\,\mathrm{d}t$ 是变限积分，$f'(x)=y(x)$，所以 $f$ 的增减完全由 $y(x)$ 的正负决定——不需要先把积分算出来就能找到最大值点，最后只在那一个点算一次积分。</p>`,
      solution: R`<p><b>(1) 第一步：写切线和截距。</b>曲线在点 $(x,y)$ 处的切线为 $Y-y=y'(X-x)$。令 $X=0$，得 $y$ 轴上的截距 $Y=y-xy'$。</p>
<p><b>第二步：列方程。</b>由于 $x>0$，点 $P$ 到 $y$ 轴的距离为 $x$。由题意</p>
$$x=y-xy',\quad\text{即}\quad y'-\frac1xy=-1.$$
<p><b>第三步：解方程。</b>这是一阶线性方程 $y'+P(x)y=Q(x)$，$P=-\frac1x$，$Q=-1$。积分因子 $\mathrm{e}^{\int P\,\mathrm{d}x}=\mathrm{e}^{-\ln x}=\frac1x$（$x>0$）。两边乘 $\frac1x$：</p>
$$\frac{y'}{x}-\frac{y}{x^2}=-\frac1x\iff\left(\frac yx\right)'=-\frac1x.$$
<p>两边积分：$\dfrac yx=-\ln x+C$，即 $y=x(C-\ln x)$。</p>
<p><b>第四步：定常数。</b>曲线过 $(1,2)$：$2=1\cdot(C-0)$，$C=2$。所以</p>
$$y(x)=x(2-\ln x),\quad x>0.$$
<p><b>验算：</b>$y'=2-\ln x-1=1-\ln x$，$y-xy'=2x-x\ln x-x+x\ln x=x$，与题意相符。</p>
<p><b>(2) 第一步：求导。</b>$y(t)$ 在 $(0,+\infty)$ 上连续，由变限积分求导公式</p>
$$f'(x)=y(x)=x(2-\ln x).$$
<p><b>第二步：判断单调性。</b>$x>0$，所以 $f'(x)$ 的符号与 $2-\ln x$ 相同：</p><ul><li>$0<x<\mathrm{e}^2$ 时 $\ln x<2$，$f'(x)>0$，$f$ 单调增加；</li><li>$x>\mathrm{e}^2$ 时 $\ln x>2$，$f'(x)<0$，$f$ 单调减少。</li></ul>
<p>$f$ 在整个 $(0,+\infty)$ 上"先增后减"，所以 $x=\mathrm{e}^2$ 不仅是极大值点，而且是最大值点：对任意 $x\in(0,\mathrm{e}^2)$ 有 $f(x)<f(\mathrm{e}^2)$，对任意 $x>\mathrm{e}^2$ 也有 $f(x)<f(\mathrm{e}^2)$。</p>
<p><b>第三步：计算最大值。</b></p>
$$f(\mathrm{e}^2)=\int_1^{\mathrm{e}^2}t(2-\ln t)\,\mathrm{d}t=\int_1^{\mathrm{e}^2}2t\,\mathrm{d}t-\int_1^{\mathrm{e}^2}t\ln t\,\mathrm{d}t.$$
<p>前一项：$\left[t^2\right]_1^{\mathrm{e}^2}=\mathrm{e}^4-1$。</p>
<p>后一项分部积分（取 $u=\ln t$，$\mathrm{d}v=t\,\mathrm{d}t$，$v=\frac{t^2}{2}$）：</p>
$$\int t\ln t\,\mathrm{d}t=\frac{t^2}{2}\ln t-\int\frac{t^2}{2}\cdot\frac1t\,\mathrm{d}t=\frac{t^2}{2}\ln t-\frac{t^2}{4}+C,$$
$$\int_1^{\mathrm{e}^2}t\ln t\,\mathrm{d}t=\left(\frac{\mathrm{e}^4}{2}\cdot2-\frac{\mathrm{e}^4}{4}\right)-\left(0-\frac14\right)=\frac{3\mathrm{e}^4}{4}+\frac14.$$
<p>所以</p>
$$f(\mathrm{e}^2)=\mathrm{e}^4-1-\frac{3\mathrm{e}^4}4-\frac14=\frac{\mathrm{e}^4}{4}-\frac54=\frac{\mathrm{e}^4-5}{4}.$$
<p><b>合理性检查：</b>$x\to0^+$ 时 $f(x)\to-\frac54$，$x\to+\infty$ 时 $f(x)\to-\infty$，都小于 $\frac{\mathrm{e}^4-5}{4}\approx12.4$，与"先增后减"一致。</p>`,
      pitfalls: R`<ul><li><b>截距写错：</b>$y$ 轴截距是 $y-xy'$；$x$ 轴截距才是 $x-\dfrac y{y'}$。不要凭记忆，令 $X=0$ 现推最可靠。</li><li><b>距离写成 $|x|$ 却不处理：</b>要明确说明 $x>0$，所以距离就是 $x$。</li><li><b>积分因子方向搞反：</b>$y'-\frac1xy=-1$ 中 $P=-\frac1x$，积分因子是 $\mathrm{e}^{\int P}=\frac1x$，不是 $x$。</li><li><b>(2) 舍近求远：</b>先把 $f(x)$ 的表达式积出来再求导，计算量大且容易错；直接用 $f'(x)=y(x)$。</li><li><b>只说"极大值"：</b>要说明在整个区间上先增后减，极大值才是最大值。</li></ul>`,
      summary: R`<p><b>几何问题列方程的"翻译表"：</b></p><ul><li>切线：$Y-y=y'(X-x)$；$y$ 轴截距 $y-xy'$；$x$ 轴截距 $x-\frac{y}{y'}$。</li><li>法线：$Y-y=-\frac1{y'}(X-x)$。</li><li>切线段、法线段长度，曲边梯形面积等，都先画出示意图再逐句翻译。</li></ul>
<p><b>一阶线性方程：</b>$y'+P(x)y=Q(x)$ 的通解 $y=\mathrm{e}^{-\int P\,\mathrm{d}x}\left[\int Q\,\mathrm{e}^{\int P\,\mathrm{d}x}\,\mathrm{d}x+C\right]$。</p>
<p><b>题型识别：</b></p><ul><li>看到 $xy'-y$ → 想到 $x^2\left(\frac yx\right)'$；看到 $xy'+y$ → 想到 $(xy)'$。</li><li>看到"求 $\int_a^xg(t)\,\mathrm{d}t$ 的最值"→ 导数就是 $g(x)$，看 $g$ 的符号。</li><li>唯一驻点 + 左增右减 → 极大值即最大值。</li></ul>`,
      alt: R`<p><b>(1) 的另一种看法——齐次方程：</b>方程可写成 $y'=\dfrac yx-1$，右端只依赖于 $\dfrac yx$。令 $u=\dfrac yx$，$y=xu$，$y'=u+xu'$，代入得 $u+xu'=u-1$，即 $u'=-\dfrac1x$，所以 $u=-\ln x+C$，$y=x(C-\ln x)$。三种方法（公式法、凑导数法、齐次方程法）殊途同归。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy dsolve(x=y−x·y\', y(1)=2) 得 y=x(2−ln x)；∫₁^{e²} t(2−ln t)dt=e⁴/4−5/4≈12.40；f(0⁺)=−5/4，f(+∞)=−∞' },
      flags: []
    },

    /* ───────────────────────── 第 18 题 ───────────────────────── */
    {
      id: '2023-18', year: 2023, no: '第18题', type: '解答', score: 12,
      stem: R`求函数 $f(x,y)=(y-x^2)(y-x^3)$ 的极值.`,
      options: null,
      answer: R`极小值 $f\left(\dfrac23,\dfrac{10}{27}\right)=-\dfrac{4}{729}$；驻点 $(0,0)$ 与 $(1,1)$ 都不是极值点，函数没有极大值.`,
      figure: null,
      kp: ['mdiff.extreme'],
      methods: ['驻点法', '二阶偏导数判别法（AC−B²）', '判别法失效时用定义（找变号路径）', '配方'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>二元函数无条件极值的完整流程，尤其是"$AC-B^2=0$、判别法失效"时如何处理。</p>
<p><b>标准流程：</b>(1) 解 $f_x=0,\ f_y=0$ 求驻点；(2) 在每个驻点算 $A=f_{xx}$，$B=f_{xy}$，$C=f_{yy}$，看 $AC-B^2$ 的符号。$f$ 是多项式，处处可微，所以极值点一定是驻点，不会漏掉别的候选点。</p>
<p><b>本题的"看点"：</b>$f$ 是两个因子的乘积，其符号可以用两条曲线 $y=x^2$、$y=x^3$ 划分：在两条曲线"之间"，一个因子正一个因子负，$f<0$；在两条曲线"同侧"，$f>0$；曲线上 $f=0$。</p>
<div><svg viewBox="0 0 340 240" width="340" height="240" role="img" aria-label="f 的符号分布示意图"><polygon points="25,147 32,153 39,159 46,164 54,169 61,173 68,177 75,181 82,184 89,186 97,188 104,189 111,190 118,191 125,191 132,190 139,189 147,188 154,186 161,184 168,181 175,177 182,173 190,169 197,164 204,159 211,153 218,147 225,140 232,133 240,125 247,117 254,108 261,99 268,89 275,79 283,68 290,57 297,45 304,33 304,12 297,32 290,51 283,68 275,84 268,98 261,111 254,123 247,133 240,143 232,151 225,158 218,164 211,170 204,175 197,179 190,182 182,184 175,186 168,188 161,189 154,190 147,191 139,191 132,191 125,191 118,191 111,191 104,191 97,191 89,192 82,193 75,194 68,196 61,198 54,200 46,204 39,207 32,212 25,218" fill="currentColor" opacity="0.15"/><line x1="25" y1="191" x2="315" y2="191" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="122" y1="228" x2="122" y2="12" stroke="currentColor" stroke-width="1" opacity="0.5"/><polyline points="25,147 36,156 46,164 57,171 68,177 79,182 89,186 100,189 111,190 122,191 132,190 143,189 154,186 165,182 175,177 186,171 197,164 208,156 218,147 229,136 240,125 251,112 261,98 272,83 283,68 294,51 304,32 315,13" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="25,218 35,210 46,204 56,199 66,196 77,194 87,192 97,191 108,191 118,191 128,191 139,191 149,190 159,189 170,188 180,185 190,181 201,176 211,170 221,162 232,152 242,140 252,125 263,108 273,89 283,66 294,41 304,12" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><circle cx="122" cy="191" r="3.5" fill="currentColor"/><circle cx="283" cy="68" r="3.5" fill="currentColor"/><circle cx="229" cy="145" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="108" y="205" font-size="12" fill="currentColor">O</text><text x="289" y="82" font-size="12" fill="currentColor">(1,1)</text><text x="238" y="174" font-size="11" fill="currentColor">(2/3,10/27)</text><text x="33" y="129" font-size="12" fill="currentColor">y=x²</text><text x="33" y="222" font-size="12" fill="currentColor">y=x³（虚线）</text><text x="162" y="80" font-size="12" fill="currentColor">f&gt;0</text><text x="200" y="213" font-size="12" fill="currentColor">f&gt;0</text><text x="60" y="185" font-size="11" fill="currentColor">f&lt;0</text><text x="303" y="185" font-size="12" fill="currentColor">x</text><text x="128" y="22" font-size="12" fill="currentColor">y</text></svg></div>
<p><small>示意图：实线 $y=x^2$，虚线 $y=x^3$，阴影（两曲线之间）为 $f<0$ 的区域，其余为 $f>0$。实心点是两曲线交点 $O$、$(1,1)$，空心点是阴影内部的驻点 $\left(\frac23,\frac{10}{27}\right)$。</small></p>
<p>看图就能预判：$O$ 和 $(1,1)$ 处 $f=0$，但旁边紧挨着 $f<0$ 的阴影和 $f>0$ 的空白，不可能是极值点；阴影"透镜"内部的驻点，是 $f$ 在这片负值区域里最低的地方，应该是极小值点。下面的计算会印证这一点。</p>`,
      solution: R`<p><b>第一步：展开，便于求导。</b></p>
$$f(x,y)=y^2-(x^2+x^3)\,y+x^5.$$
<p><b>第二步：求驻点。</b></p>
$$f_x=-(2x+3x^2)\,y+5x^4,\qquad f_y=2y-x^2-x^3.$$
<p>由 $f_y=0$ 得 $y=\dfrac{x^2+x^3}{2}$，代入 $f_x=0$：</p>
$$-(2x+3x^2)\cdot\frac{x^2(1+x)}{2}+5x^4=0\ \Longrightarrow\ x^3\left[(2+3x)(1+x)-10x\right]=0.$$
<p>注意不要两边直接约去 $x$。展开方括号：$(2+3x)(1+x)-10x=3x^2-5x+2=(3x-2)(x-1)$，所以</p>
$$x^3(3x-2)(x-1)=0\ \Longrightarrow\ x=0,\ \frac23,\ 1.$$
<p>对应 $y=\frac{x^2+x^3}2$：$x=0$ 时 $y=0$；$x=\frac23$ 时 $y=\frac12\left(\frac{12}{27}+\frac{8}{27}\right)=\frac{10}{27}$；$x=1$ 时 $y=1$。驻点为</p>
$$(0,0),\qquad\left(\frac23,\frac{10}{27}\right),\qquad(1,1).$$
<p><b>第三步：二阶偏导数。</b></p>
$$f_{xx}=-(2+6x)\,y+20x^3,\qquad f_{xy}=-(2x+3x^2),\qquad f_{yy}=2.$$
<p><b>第四步：逐点判别。</b></p>
<p>① 在 $\left(\frac23,\frac{10}{27}\right)$：$A=-6\cdot\frac{10}{27}+20\cdot\frac{8}{27}=\frac{100}{27}$，$B=-\left(\frac43+\frac43\right)=-\frac83$，$C=2$，</p>
$$AC-B^2=\frac{200}{27}-\frac{64}{9}=\frac{200-192}{27}=\frac{8}{27}>0,\quad A>0,$$
<p>所以是<b>极小值点</b>，极小值 $f\left(\frac23,\frac{10}{27}\right)=\left(\frac{10}{27}-\frac{12}{27}\right)\left(\frac{10}{27}-\frac{8}{27}\right)=-\frac{2}{27}\cdot\frac{2}{27}=-\frac{4}{729}$。</p>
<p>② 在 $(1,1)$：$A=-8+20=12$，$B=-5$，$C=2$，$AC-B^2=24-25=-1<0$，<b>不是极值点</b>。</p>
<p>③ 在 $(0,0)$：$A=0$，$B=0$，$C=2$，$AC-B^2=0$，<b>判别法失效</b>，要回到极值的定义。$f(0,0)=0$，考察它附近 $f$ 的取值：</p><ul><li>沿 $x$ 轴：$f(x,0)=(-x^2)(-x^3)=x^5$。$x>0$ 时 $f>0$，$x<0$ 时 $f<0$。</li></ul>
<p>于是在 $(0,0)$ 的任何邻域内，$f$ 既取到比 $f(0,0)=0$ 大的值，也取到比它小的值，所以 $(0,0)$ <b>不是极值点</b>。</p>
<p><b>第五步：结论。</b>$f$ 处处可微，极值点只能是驻点。三个驻点中只有 $\left(\frac23,\frac{10}{27}\right)$ 是极值点，所以 $f$ 只有极小值 $f\left(\frac23,\frac{10}{27}\right)=-\frac{4}{729}$，没有极大值。</p>
<p><b>补充：这个极小值不是最小值。</b>例如 $f(2,6)=(6-4)(6-8)=-4<-\frac4{729}$。极值是局部概念，题目问的是极值。</p>`,
      pitfalls: R`<ul><li><b>解驻点时约掉 $x$：</b>把 $x^3[\cdots]=0$ 两边除以 $x$，会漏掉驻点 $(0,0)$。</li><li><b>$AC-B^2=0$ 时直接下结论：</b>此时判别法什么也说明不了，既可能是极值也可能不是，必须另行分析。</li><li><b>只沿直线 $y=kx$ 检验：</b>沿 $y=kx\ (k\ne0)$ 有 $f=(kx-x^2)(kx-x^3)=k^2x^2+o(x^2)>0$，很容易误以为 $(0,0)$ 是极小值点。"沿所有直线都是极小"推不出"是极小"，反驳只需找到一条让 $f$ 变号的路径（本题 $x$ 轴就够了）。</li><li><b>二阶偏导数算错：</b>$f_{xx}$ 中 $-(2x+3x^2)y$ 对 $x$ 求导是 $-(2+6x)y$，系数 $6x$ 容易写成 $3x$。</li></ul>`,
      summary: R`<p><b>二元函数无条件极值的流程：</b></p><ol><li>求驻点（以及偏导数不存在的点）。</li><li>算 $A,B,C$：$AC-B^2>0$ 时是极值（$A>0$ 极小、$A<0$ 极大）；$AC-B^2<0$ 时不是极值；$AC-B^2=0$ 时失效。</li><li>失效时回到定义：找两条过该点的路径让 $f-f(P_0)$ 一正一负（否定极值），或者证明某邻域内恒有 $f\geqslant f(P_0)$（肯定极值，常用配方、不等式）。</li></ol>
<p><b>题型识别：</b></p><ul><li>看到 $f=g\cdot h$ 的乘积形式 → 画出 $g=0$、$h=0$ 两条曲线，用"符号图"预判哪些驻点不是极值。</li><li>看到 $f$ 是 $y$ 的二次函数 → 对 $y$ 配方，把问题降成一元问题（见另解）。</li><li>判别法失效时，先试坐标轴、$y=kx$、$y=kx^2$ 等简单路径找变号。</li></ul>`,
      alt: R`<p><b>配方法（一眼看清全局结构）：</b>记 $m=\dfrac{x^2+x^3}2$，$d=\dfrac{x^2-x^3}{2}$，则 $m+d=x^2$，$m-d=x^3$，于是</p>
$$f(x,y)=(y-m-d)(y-m+d)=(y-m)^2-d^2=\left(y-\frac{x^2+x^3}{2}\right)^2-\frac{x^4(1-x)^2}{4}.$$
<p>固定 $x$，$f$ 关于 $y$ 是开口向上的抛物线，最小值 $-\frac{x^4(1-x)^2}4$ 在 $y=\frac{x^2+x^3}2$ 处取到——这正是 $f_y=0$ 的那条曲线。</p>
<p>令 $\varphi(x)=x^2(1-x)$，在 $[0,1]$ 上 $\varphi'(x)=2x-3x^2$，最大值 $\varphi\left(\frac23\right)=\frac4{27}$。所以当 $0\leqslant x\leqslant1$ 时</p>
$$f(x,y)\geqslant-\frac{\varphi(x)^2}{4}\geqslant-\frac14\cdot\left(\frac4{27}\right)^2=-\frac{4}{729},$$
<p>等号恰在 $\left(\frac23,\frac{10}{27}\right)$ 成立。由于该点是带形区域 $0\leqslant x\leqslant1$ 的内点，它就是极小值点，极小值 $-\frac4{729}$，与判别法结果一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy solve 得驻点 (0,0)、(2/3,10/27)、(1,1)；Hessian：(2/3,10/27) 处 A=100/27,B=−8/3,C=2,AC−B²=8/27；(1,1) 处 AC−B²=−1；(0,0) 处 AC−B²=0；f(2/3,10/27)=−4/729；f(x,0)=x⁵ 变号；沿 y=(x²+x³)/2 有 f=−x⁴(x−1)²/4' },
      flags: ['参考解析判定 (0,0) 时用的是路径 y=x²+kx³；本讲解改用更简单的 x 轴路径 f(x,0)=x⁵，结论相同']
    },

    /* ───────────────────────── 第 19 题 ───────────────────────── */
    {
      id: '2023-19', year: 2023, no: '第19题', type: '解答', score: 12,
      stem: R`设空间有界区域 $\Omega$ 由柱面 $x^2+y^2=1$ 与平面 $z=0$ 和 $x+z=1$ 围成，$\Sigma$ 为 $\Omega$ 的边界曲面的外侧. 计算曲面积分 $$I=\iint_{\Sigma}2xz\,\mathrm{d}y\,\mathrm{d}z+xz\cos y\,\mathrm{d}z\,\mathrm{d}x+3yz\sin x\,\mathrm{d}x\,\mathrm{d}y.$$`,
      options: null,
      answer: R`$I=\dfrac{5\pi}{4}$`,
      figure: null,
      kp: ['mint.surf2', 'mint.triple', 'mint.double'],
      methods: ['高斯公式', '奇偶对称性', '先一后二（投影法）', '极坐标', '轮换对称性'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>闭曲面上的第二类曲面积分——高斯公式，以及三重积分中的对称性和投影法。</p>
<p><b>为什么用高斯公式：</b>$\Sigma$ 是封闭曲面（外侧），由三块组成：底面圆盘、斜顶面（一个椭圆）、圆柱侧面。如果直接算，三块各自要投影、定方向、写参数，被积函数里还有 $\cos y$、$\sin x$，很麻烦。高斯公式把它变成一个三重积分：</p>
$$\iint_{\Sigma}P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y=\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)\mathrm{d}V.$$
<p>直观含义：流出闭曲面的总通量 = 区域内各点"源的强度"（散度）之和。条件：$\Sigma$ 是 $\Omega$ 的整个边界、取外侧，$P,Q,R$ 在 $\Omega$ 上有连续一阶偏导数，本题全部满足。</p>
<p><b>为什么对称性能消掉难算的项：</b>散度中出现 $-xz\sin y$ 和 $3y\sin x$，它们都是 $y$ 的奇函数，而 $\Omega$ 关于平面 $y=0$ 对称（$\Omega$ 的边界方程中 $y$ 只以 $y^2$ 形式出现）。对称点 $(x,y,z)$ 与 $(x,-y,z)$ 处的函数值互为相反数，积分两两抵消。</p>
<div><svg viewBox="0 0 300 230" width="300" height="230" role="img" aria-label="区域在 y=0 平面上的截面"><polygon points="65,200 245,200 65,40" fill="currentColor" opacity="0.15"/><line x1="20" y1="200" x2="292" y2="200" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="155" y1="218" x2="155" y2="10" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="38" y1="16" x2="272" y2="224" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="65" y1="218" x2="65" y2="20" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/><line x1="245" y1="218" x2="245" y2="20" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/><polyline points="65,200 245,200 65,40 65,200" fill="none" stroke="currentColor" stroke-width="2"/><text x="182" y="118" font-size="12" fill="currentColor">x+z=1</text><text x="190" y="214" font-size="12" fill="currentColor">z=0</text><text x="30" y="226" font-size="11" fill="currentColor">x=−1</text><text x="250" y="226" font-size="11" fill="currentColor">x=1</text><text x="84" y="170" font-size="13" fill="currentColor">Ω</text><text x="143" y="124" font-size="11" fill="currentColor">1</text><text x="143" y="44" font-size="11" fill="currentColor">2</text><text x="284" y="194" font-size="12" fill="currentColor">x</text><text x="160" y="18" font-size="12" fill="currentColor">z</text></svg></div>
<p><small>示意图：$\Omega$ 被平面 $y=0$ 所截的截面（三角形）。一般地，固定 $(x,y)$ 在单位圆盘内，$z$ 从底面 $z=0$ 走到斜顶面 $z=1-x$；在单位圆盘上 $1-x\geqslant0$，所以顶面始终在底面上方。</small></p>`,
      solution: R`<p><b>第一步：描述区域。</b>$\Omega$ 在 $xOy$ 面上的投影是单位圆盘 $D:\ x^2+y^2\leqslant1$；对 $(x,y)\in D$，$z$ 的范围是 $0\leqslant z\leqslant1-x$。</p>
<p><b>第二步：用高斯公式。</b>$P=2xz$，$Q=xz\cos y$，$R=3yz\sin x$，</p>
$$\frac{\partial P}{\partial x}=2z,\qquad\frac{\partial Q}{\partial y}=-xz\sin y,\qquad\frac{\partial R}{\partial z}=3y\sin x.$$
<p>$\Sigma$ 为 $\Omega$ 边界的外侧，$P,Q,R$ 处处有连续偏导，由高斯公式</p>
$$I=\iiint_{\Omega}\left(2z-xz\sin y+3y\sin x\right)\mathrm{d}V.$$
<p><b>第三步：利用对称性。</b>$\Omega$ 关于 $xOz$ 面（$y=0$）对称：若 $(x,y,z)\in\Omega$，则 $(x,-y,z)\in\Omega$（因为 $x^2+y^2\leqslant1$、$0\leqslant z\leqslant1-x$ 都不受 $y$ 变号影响）。而 $-xz\sin y$ 与 $3y\sin x$ 都是 $y$ 的奇函数，所以</p>
$$\iiint_{\Omega}(-xz\sin y)\,\mathrm{d}V=0,\qquad\iiint_{\Omega}3y\sin x\,\mathrm{d}V=0.$$
<p>于是 $I=\displaystyle\iiint_{\Omega}2z\,\mathrm{d}V$。</p>
<p><b>第四步：先一后二（先对 $z$ 积分）。</b></p>
$$I=\iint_D\mathrm{d}x\,\mathrm{d}y\int_0^{1-x}2z\,\mathrm{d}z=\iint_D(1-x)^2\,\mathrm{d}x\,\mathrm{d}y=\iint_D\left(1-2x+x^2\right)\mathrm{d}x\,\mathrm{d}y.$$
<p><b>第五步：逐项计算二重积分。</b></p><ul><li>$\iint_D1\,\mathrm{d}x\,\mathrm{d}y=\pi$（单位圆面积）。</li><li>$\iint_D x\,\mathrm{d}x\,\mathrm{d}y=0$（$D$ 关于 $y$ 轴对称，$x$ 是 $x$ 的奇函数）。</li><li>$\iint_D x^2\,\mathrm{d}x\,\mathrm{d}y$：$D$ 关于直线 $y=x$ 对称，所以 $\iint_Dx^2=\iint_Dy^2$（轮换对称性），于是</li></ul>
$$\iint_Dx^2\,\mathrm{d}x\,\mathrm{d}y=\frac12\iint_D(x^2+y^2)\,\mathrm{d}x\,\mathrm{d}y=\frac12\int_0^{2\pi}\mathrm{d}\theta\int_0^1r^2\cdot r\,\mathrm{d}r=\frac12\cdot2\pi\cdot\frac14=\frac{\pi}{4}.$$
<p>（极坐标下 $\mathrm{d}x\,\mathrm{d}y=r\,\mathrm{d}r\,\mathrm{d}\theta$，别丢了这个 $r$。）</p>
<p><b>第六步：合并。</b></p>
$$I=\pi-0+\frac\pi4=\frac{5\pi}{4}.$$`,
      pitfalls: R`<ul><li><b>方向弄反：</b>高斯公式对应外侧；若曲面取内侧，结果要变号。</li><li><b>对称性用错变量：</b>奇偶性必须与区域的对称方向匹配。$\Omega$ 关于 $y=0$ 对称，所以只能消去 $y$ 的奇函数；$2z$ 不是 $z$ 的奇函数，区域也不关于 $z=0$ 对称，不能消。</li><li><b>积分上限写错：</b>由 $x+z=1$ 得 $z=1-x$，不是 $1+x$ 或 $x-1$。</li><li><b>硬算 $\iiint xz\sin y\,\mathrm{d}V$：</b>不用对称性几乎算不出来。看到"奇函数 × 对称区域"先删掉。</li><li><b>极坐标漏掉雅可比因子 $r$</b>，把 $\int_0^1 r^3\,\mathrm{d}r$ 写成 $\int_0^1r^2\,\mathrm{d}r$。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>第二类曲面积分：曲面封闭 → 直接高斯；不封闭 → 补面成封闭，再减去补面上的积分。</li><li>用高斯公式后，散度里先找"奇函数 × 对称区域"的项删掉，再计算剩余部分。</li><li>区域"上下两张曲面夹住、投影是圆盘" → 先一后二，再用极坐标。</li></ul>
<p><b>常用小结论：</b>$\displaystyle\iint_{x^2+y^2\leqslant R^2}x^2\,\mathrm{d}\sigma=\iint_{x^2+y^2\leqslant R^2}y^2\,\mathrm{d}\sigma=\frac{\pi R^4}{4}$。</p>
<p><b>题型识别：</b>看到"$\Sigma$ 为某区域边界的外侧"→ 高斯公式；看到被积函数里有 $\sin y$、$y\cos x$ 这类奇函数因子 → 先检查区域是否关于相应坐标面对称。</p>`,
      alt: R`<p><b>直接计算（验证高斯公式确实省力）：</b>把 $\Sigma$ 分成三块。</p>
<ul><li><b>底面</b> $z=0$：三个被积函数都含因子 $z$，积分为 $0$。</li><li><b>顶面</b> $z=1-x$（取上侧，即外侧）：对 $z=g(x,y)$ 的上侧，$\iint P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y=\iint_D\left[-Pg_x-Qg_y+R\right]\mathrm{d}x\,\mathrm{d}y$。这里 $g_x=-1$，$g_y=0$，得 $\iint_D\left[2x(1-x)+3y(1-x)\sin x\right]\mathrm{d}x\,\mathrm{d}y=0-2\cdot\frac\pi4+0=-\frac\pi2$（含 $y$ 的项是 $y$ 的奇函数）。</li><li><b>侧面</b> $x=\cos\theta$，$y=\sin\theta$，$0\leqslant z\leqslant1-\cos\theta$，外法向 $(\cos\theta,\sin\theta,0)$，$\mathrm{d}S=\mathrm{d}\theta\,\mathrm{d}z$：通量为 $\displaystyle\int_0^{2\pi}\!\!\int_0^{1-\cos\theta}\left[2z\cos^2\theta+z\cos\theta\sin\theta\cos(\sin\theta)\right]\mathrm{d}z\,\mathrm{d}\theta$。第二项关于 $\theta\mapsto-\theta$ 是奇函数，积分为 $0$；第一项为 $\displaystyle\int_0^{2\pi}(1-\cos\theta)^2\cos^2\theta\,\mathrm{d}\theta=\pi+\frac{3\pi}{4}=\frac{7\pi}{4}$。</li></ul>
<p>合计 $0-\frac\pi2+\frac{7\pi}4=\frac{5\pi}4$，与高斯公式结果一致，但过程明显繁琐得多。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：∭2z dV（z∈[0,1−x]，圆盘）=5π/4；mpmath 数值计算完整散度 2z−xz·sin y+3y·sin x 的三重积分 =3.92699≈5π/4；直接逐面数值计算通量：顶面 −π/2，侧面 7π/4，合计 5π/4' },
      flags: ['原卷积分号为闭曲面积分号（∯），因 MathJax 基础宏无 \\oiint，题面用 \\iint 并由文字说明 Σ 为闭曲面外侧', '参考解析题干把 xz cos y dzdx 误作 dzdy，原卷图片为 dzdx，按原卷录入']
    },

    /* ───────────────────────── 第 20 题 ───────────────────────── */
    {
      id: '2023-20', year: 2023, no: '第20题', type: '解答', score: 12,
      stem: R`设函数 $f(x)$ 在 $[-a,a]$ 上具有 $2$ 阶连续导数. 证明：<br>(1) 若 $f(0)=0$，则存在 $\xi\in(-a,a)$，使得 $$f''(\xi)=\frac{1}{a^2}\left[f(a)+f(-a)\right];$$(2) 若 $f(x)$ 在 $(-a,a)$ 内取得极值，则存在 $\eta\in(-a,a)$，使得 $$|f''(\eta)|\geqslant\frac{1}{2a^2}\left|f(a)-f(-a)\right|.$$`,
      options: null,
      answer: R`两问均成立（证明见详细解答）。核心：(1) 在 $x=0$ 处做带拉格朗日余项的二阶泰勒展开，相加后用介值定理把两个中值点合成一个；(2) 在极值点 $x_0$ 处（$f'(x_0)=0$）展开，相减后放缩，取 $|f''|$ 较大的那个中值点.`,
      figure: null,
      kp: ['diff.taylor', 'diff.mvt', 'lim.closed'],
      methods: ['带拉格朗日余项的泰勒公式', '费马引理', '连续函数介值定理', '三角不等式放缩'],
      difficulty: 4,
      analysis: R`<p><b>这题考什么：</b>泰勒公式在中值问题中的应用——"选哪个点展开"是全部关键。</p>
<p><b>为什么想到泰勒公式：</b>结论里同时出现了<b>二阶导数</b> $f''$ 和<b>端点函数值</b> $f(\pm a)$。能把"函数值"和"二阶导数"直接联系起来的工具，就是带拉格朗日余项的二阶泰勒公式：</p>
$$f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(\theta)}{2}(x-x_0)^2,\quad\theta\ \text{介于}\ x_0\ \text{与}\ x\ \text{之间}.$$
<p><b>在哪里展开：</b>原则是"哪里信息多就在哪里展开"。</p><ul><li>(1) 已知 $f(0)=0$，而且要证的式子里是 $f(a)+f(-a)$——关于 $0$ 对称的和。在 $0$ 处展开后，$f(a)$ 中的一阶项 $f'(0)a$ 和 $f(-a)$ 中的 $-f'(0)a$ <b>相加正好抵消</b>，未知的 $f'(0)$ 自动消失。</li><li>(2) 要证的是差 $f(a)-f(-a)$。若仍在 $0$ 处展开，一阶项相减得 $2f'(0)a$，消不掉。题目给出"在内部取得极值"，由费马引理极值点 $x_0$ 处 $f'(x_0)=0$——在 $x_0$ 处展开，一阶项本身就是 $0$。这就是这个条件的用途。</li></ul>
<p><b>收尾的技巧：</b>展开 $f(a)$ 和 $f(-a)$ 会产生<b>两个不同</b>的中值点。(1) 是等式，需要把两个 $f''$ 值的平均合成一个 $f''(\xi)$，用连续函数的介值定理；(2) 是不等式，只需取 $|f''|$ 较大的那一个。</p>`,
      solution: R`<p><b>(1) 第一步：在 $x=0$ 处展开。</b>$f$ 在 $[-a,a]$ 上有二阶连续导数，对 $x\in[-a,a]$，$x\ne0$，由带拉格朗日余项的泰勒公式及 $f(0)=0$：</p>
$$f(x)=f'(0)\,x+\frac{f''(\theta)}{2}x^2,\quad\theta\ \text{介于}\ 0\ \text{与}\ x\ \text{之间}.$$
<p><b>第二步：分别取 $x=a$ 与 $x=-a$。</b></p>
$$f(a)=f'(0)\,a+\frac{f''(\xi_1)}{2}a^2,\quad 0<\xi_1<a;\qquad f(-a)=-f'(0)\,a+\frac{f''(\xi_2)}{2}a^2,\quad -a<\xi_2<0.$$
<p>注意 $\xi_1$ 与 $\xi_2$ 一般不相同，必须用不同的记号。</p>
<p><b>第三步：相加，一阶项抵消。</b></p>
$$f(a)+f(-a)=\frac{a^2}{2}\left[f''(\xi_1)+f''(\xi_2)\right]\ \Longrightarrow\ \frac{1}{a^2}\left[f(a)+f(-a)\right]=\frac{f''(\xi_1)+f''(\xi_2)}{2}.$$
<p><b>第四步：用介值定理合成一个点。</b>$f''$ 在闭区间 $[\xi_2,\xi_1]$ 上连续，设其最小值为 $m$、最大值为 $M$。则 $m\leqslant f''(\xi_1)\leqslant M$，$m\leqslant f''(\xi_2)\leqslant M$，两式相加除以 $2$：</p>
$$m\leqslant\frac{f''(\xi_1)+f''(\xi_2)}{2}\leqslant M.$$
<p>由闭区间上连续函数的介值定理，存在 $\xi\in[\xi_2,\xi_1]$ 使 $f''(\xi)=\dfrac{f''(\xi_1)+f''(\xi_2)}2$。又 $-a<\xi_2<0<\xi_1<a$，所以 $\xi\in(-a,a)$，且</p>
$$f''(\xi)=\frac{1}{a^2}\left[f(a)+f(-a)\right].\qquad\text{(1) 得证.}$$
<p><b>(2) 第一步：极值点处导数为零。</b>设 $f$ 在 $x_0\in(-a,a)$ 处取得极值。$f$ 在 $x_0$ 可导，由费马引理 $f'(x_0)=0$。</p>
<p><b>第二步：在 $x_0$ 处展开。</b></p>
$$f(a)=f(x_0)+\frac{f''(\eta_1)}{2}(a-x_0)^2,\quad x_0<\eta_1<a;$$
$$f(-a)=f(x_0)+\frac{f''(\eta_2)}{2}(a+x_0)^2,\quad -a<\eta_2<x_0.$$
<p>（这里用了 $(-a-x_0)^2=(a+x_0)^2$。）</p>
<p><b>第三步：相减，$f(x_0)$ 抵消。</b></p>
$$f(a)-f(-a)=\frac12\left[f''(\eta_1)(a-x_0)^2-f''(\eta_2)(a+x_0)^2\right].$$
<p><b>第四步：放缩。</b>记 $M=\max\left\{|f''(\eta_1)|,\ |f''(\eta_2)|\right\}$。由三角不等式</p>
$$|f(a)-f(-a)|\leqslant\frac12\left[|f''(\eta_1)|(a-x_0)^2+|f''(\eta_2)|(a+x_0)^2\right]\leqslant\frac M2\left[(a-x_0)^2+(a+x_0)^2\right].$$
<p>而 $(a-x_0)^2+(a+x_0)^2=2a^2+2x_0^2$，又 $|x_0|<a$，所以</p>
$$|f(a)-f(-a)|\leqslant M\left(a^2+x_0^2\right)\leqslant2a^2M.$$
<p><b>第五步：取中值点。</b>于是 $M\geqslant\dfrac{1}{2a^2}|f(a)-f(-a)|$。取 $\eta$ 为 $\eta_1,\eta_2$ 中使 $|f''|$ 达到 $M$ 的那一个，则 $\eta\in(-a,a)$，且</p>
$$|f''(\eta)|=M\geqslant\frac{1}{2a^2}\left|f(a)-f(-a)\right|.\qquad\text{(2) 得证.}$$`,
      pitfalls: R`<ul><li><b>把两个中值点写成同一个 $\xi$：</b>$f(a)$ 与 $f(-a)$ 的展开式中余项的中间点一般不同，直接写成同一个 $\xi$ 再相加是严重的逻辑错误。</li><li><b>中值点范围写错：</b>(2) 中是在 $x_0$ 处展开，中间点分别在 $(x_0,a)$ 与 $(-a,x_0)$ 内，而不是 $(0,a)$ 与 $(-a,0)$。好在结论只需要它们落在 $(-a,a)$ 内。</li><li><b>漏掉费马引理的条件：</b>要说明 $f$ 在 $x_0$ 可导（题设二阶连续可导保证），才能由"极值"推出 $f'(x_0)=0$。</li><li><b>(2) 仍在 $0$ 处展开：</b>相减后剩下 $2af'(0)$ 这一项无法控制，证明卡死。</li><li><b>(1) 只写"由介值定理"而不说明平均值介于最小值与最大值之间：</b>这是使用介值定理的前提，要写出来。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>结论同时含高阶导数与若干点的函数值 → 泰勒公式（拉格朗日余项）。</li><li>展开点的选择：已知函数值的点、导数为零的点（极值点、最值点）、区间中点或对称中心。和式 $f(a)+f(-a)$ 在对称中心展开消一阶项；差式要在 $f'=0$ 的点展开。</li><li>两个中值点合成一个：等式用介值定理（平均值落在最小值与最大值之间）；不等式取较大（或较小）者。</li></ul>
<p><b>题型识别：</b>看到"存在 $\xi$ 使 $f''(\xi)=\cdots$"且右边是 $f(a)$、$f(b)$、$f(c)$ 的组合 → 泰勒展开 + 介值定理；看到"在区间内取得极值 / 最值" → 立刻写 $f'(x_0)=0$，在 $x_0$ 处展开。</p>`,
      alt: R`<p><b>(1) 的对称化写法：</b>令 $g(x)=f(x)+f(-x)$，则 $g(0)=2f(0)=0$，$g'(x)=f'(x)-f'(-x)$，$g'(0)=0$，$g''(x)=f''(x)+f''(-x)$。对 $g$ 在 $0$ 处做泰勒展开：</p>
$$f(a)+f(-a)=g(a)=\frac{g''(\theta)}{2}a^2=\frac{a^2}{2}\left[f''(\theta)+f''(-\theta)\right],\quad0<\theta<a.$$
<p>再对连续函数 $f''$ 在 $[-\theta,\theta]$ 上用介值定理，得到 $\xi\in[-\theta,\theta]\subset(-a,a)$ 使 $f''(\xi)=\frac{f''(\theta)+f''(-\theta)}2$，结论相同。这个写法把"一阶项抵消"的原因（$g'(0)=0$）表达得更清楚。</p>`,
      verify: { by: 'proof', ok: true, note: '逐步核对证明；另用 sympy/numpy 对具体函数做数值检验：(1) 取 x³+x²+sin x、eˣ−1 等（f(0)=0），(f(a)+f(−a))/a² 均落在 f\'\' 的值域内；(2) 取 (x−0.3)²+x³/5、cos2x+x³ 等内部有极值的函数，max|f\'\'| 均不小于 |f(a)−f(−a)|/(2a²)' },
      flags: ['参考解析 (1) 题干把 f(0)=0 误作 f(x)=0；(2) 中两个中值点的范围写成 (−a,0)、(0,a)，应为 (−a,x₀)、(x₀,a)，不影响结论']
    }
  ];
});
