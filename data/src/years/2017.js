// 2017 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 13 题：选择 1、2、3、4；填空 9、10、11、12；解答 15、16、17、18、19
// （选择 5–8、填空 13–14、解答 20–23 属于线性代数与概率统计，不收录）
registerYear(2017, function (R) {
  return [
    /* ───────────────────────── 第 1 题 ───────────────────────── */
    {
      id: '2017-1', year: 2017, no: '第1题', type: '选择', score: 4,
      stem: R`若函数 $f(x)=\begin{cases}\dfrac{1-\cos\sqrt{x}}{ax}, & x>0,\\ b, & x\leqslant 0\end{cases}$ 在 $x=0$ 处连续，则`,
      options: [R`$ab=\dfrac12$.`, R`$ab=-\dfrac12$.`, R`$ab=0$.`, R`$ab=2$.`],
      answer: 'A',
      figure: null,
      kp: ['lim.cont', 'lim.inf'],
      methods: ['连续的定义（左极限 = 右极限 = 函数值）', '等价无穷小代换', '已知极限反求参数'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>分段函数在分段点处的连续性。连续的定义是一句话：$\lim\limits_{x\to x_0}f(x)=f(x_0)$。在分段点，左右两侧的表达式不同，所以要拆成三样东西分别求：<b>左极限、右极限、函数值</b>，三者相等才连续。</p>
<p><b>为什么这样想：</b>极限描述的是"$x$ 靠近 $0$ 时 $f(x)$ 往哪里去"，而 $x$ 从左边靠近和从右边靠近时，$f$ 用的是两个不同的公式，自然要分开算。本题左边是常数 $b$，最好算；右边是 $\frac{0}{0}$ 型，里面的 $1-\cos\sqrt x$ 正好是"$1-\cos(\text{小量})$"的结构，一眼就该想到等价无穷小 $1-\cos u\sim\frac12u^2$。</p>
<p><b>先估一估：</b>$u=\sqrt x$ 时 $\frac12u^2=\frac12x$，与分母 $ax$ 同为一阶，所以右极限是一个非零常数 $\frac{1}{2a}$，答案只能是"$b$ 等于某个与 $a$ 有关的数"，即 $ab$ 为定值。</p>`,
      solution: R`<p><b>第一步：写出连续的条件。</b>$f$ 在 $x=0$ 处连续 $\iff$</p>
$$\lim_{x\to0^-}f(x)=\lim_{x\to0^+}f(x)=f(0).$$
<p><b>第二步：函数值与左极限。</b>$x\leqslant0$ 时 $f(x)=b$，所以 $f(0)=b$，且 $\lim\limits_{x\to0^-}f(x)=\lim\limits_{x\to0^-}b=b$。</p>
<p><b>第三步：右极限。</b>首先注意 $a\neq0$，否则 $x>0$ 时的表达式分母为零、函数没有定义。当 $x\to0^+$ 时 $u=\sqrt x\to0^+$，由 $1-\cos u\sim\frac12u^2$ 得</p>
$$1-\cos\sqrt x\sim\frac12(\sqrt x)^2=\frac12x.$$
<p>分子是整体（乘除结构中的一个因子），可以整体替换：</p>
$$\lim_{x\to0^+}\frac{1-\cos\sqrt x}{ax}=\lim_{x\to0^+}\frac{\frac12x}{ax}=\frac{1}{2a}.$$
<p>顺便回忆 $1-\cos u\sim\frac12u^2$ 的来历：$1-\cos u=2\sin^2\frac u2$，而 $\sin\frac u2\sim\frac u2$，所以 $1-\cos u\sim2\cdot\frac{u^2}{4}=\frac{u^2}{2}$。</p>
<p><b>第四步：列等式。</b>由连续条件 $\frac{1}{2a}=b$，两边乘 $a$ 得 $ab=\frac12$，选 <b>A</b>。</p>
<p><b>错误选项分析：</b></p>
<ul><li>B（$ab=-\frac12$）：把等价式记成 $1-\cos u\sim-\frac12u^2$ 的符号错误。注意 $1-\cos u\geqslant0$，它的等价量必然非负。</li>
<li>C（$ab=0$）：要 $ab=0$ 必须 $b=0$（因为 $a\neq0$），但右极限 $\frac{1}{2a}$ 永远不为 $0$，不可能等于 $b=0$。</li>
<li>D（$ab=2$）：对应右极限为 $\frac2a$，与正确的 $\frac{1}{2a}$ 相差 4 倍，是把系数 $\frac12$ 处理错（如误用成乘 2）的结果。</li></ul>`,
      pitfalls: R`<ul><li><b>代换时把 $\sqrt x$ 当成 $x$：</b>写成 $1-\cos\sqrt x\sim\frac12x^2$，得到右极限 $0$，从而误以为 $b=0$ 选 C。等价式里的 $u$ 是"整个小量" $\sqrt x$，平方后是 $x$ 而不是 $x^2$。</li><li><b>丢掉系数 $\frac12$：</b>得到 $ab=1$，四个选项都对不上，只好乱猜。</li><li><b>只算一侧：</b>分段点的连续性必须左、右、函数值三者都考虑，虽然本题左侧是常数很简单，但书写时要完整。</li></ul>`,
      summary: R`<p><b>方法要点：</b>分段函数在分段点的连续性 = 左极限、右极限、函数值三者相等；求单侧极限时，用该侧的表达式。</p>
<p><b>看到…想到…：</b>看到 $1-\cos(\square)$ 且 $\square\to0$，想到 $\frac12\square^2$；看到"分段函数在分段点连续/可导，求参数"，想到"左 = 右 = 函数值"列方程。</p>
<p><b>常用等价无穷小（$\square\to0$）：</b>$\sin\square,\tan\square,\arcsin\square,\arctan\square,\ln(1+\square),\mathrm e^\square-1\sim\square$；$1-\cos\square\sim\frac12\square^2$；$(1+\square)^\alpha-1\sim\alpha\square$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit((1-cos(sqrt(x)))/(a*x), x, 0, "+") = 1/(2a)，令其等于 b 得 ab=1/2' },
      flags: ['OCR 原文选项 C、D 缺句末句点，已按选项 A、B 的格式补齐，不影响内容']
    },

    /* ───────────────────────── 第 2 题 ───────────────────────── */
    {
      id: '2017-2', year: 2017, no: '第2题', type: '选择', score: 4,
      stem: R`设函数 $f(x)$ 可导，且 $f(x)f'(x)>0$，则`,
      options: [R`$f(1)>f(-1)$.`, R`$f(1) < f(-1)$.`, R`$|f(1)|>|f(-1)|$.`, R`$|f(1)| < |f(-1)|$.`],
      answer: 'C',
      figure: null,
      kp: ['diff.mono', 'diff.mvt'],
      methods: ['凑导数', '用导数符号判断单调性', '拉格朗日中值定理', '构造反例'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>用导数的符号判断单调性，难点在于"$f(x)f'(x)>0$"并不直接告诉你 $f$ 增还是减——它只说 $f$ 与 $f'$ <b>同号</b>。</p>
<p><b>为什么想到 $f^2$：</b>看到乘积 $f\cdot f'$，应当条件反射地想起复合函数求导 $\left[f^2(x)\right]'=2f(x)f'(x)$。于是题设等价于"$f^2$ 的导数恒正"，即 $f^2$ 严格单调递增。这是"把条件看成某个函数的导数"的典型手法：<b>与其分析两个因子各自的符号，不如找一个函数，让条件恰好是它的导数</b>。</p>
<p><b>直观理解：</b>$f>0$ 时 $f'>0$，函数值往上走、离 $0$ 越来越远；$f < 0$ 时 $f' < 0$，函数值往下走，也离 $0$ 越来越远。无论哪种情况，$|f|$ 都在增大——这正是"$f^2$ 递增"的含义。</p>`,
      solution: R`<p><b>第一步：改写条件。</b>由复合函数求导法则，</p>
$$\left[f^2(x)\right]'=2f(x)f'(x)>0\quad(\text{对一切 }x).$$
<p><b>第二步：得到单调性。</b>导数恒正的函数严格单调递增。严格地说：$f^2$ 在 $[-1,1]$ 上可导，由拉格朗日中值定理，存在 $\xi\in(-1,1)$ 使</p>
$$f^2(1)-f^2(-1)=\left[f^2\right]'(\xi)\cdot\big(1-(-1)\big)=4f(\xi)f'(\xi)>0.$$
<p><b>第三步：开方。</b>$f^2(1)>f^2(-1)\geqslant0$，两边开平方（平方根函数在 $[0,+\infty)$ 上递增）得</p>
$$|f(1)|>|f(-1)|,$$
<p>选 <b>C</b>。</p>
<p><b>第四步：用反例排除其余选项。</b></p>
<ul><li>取 $f(x)=\mathrm e^x$：$ff'=\mathrm e^{2x}>0$，满足条件。此时 $f(1)=\mathrm e>\mathrm e^{-1}=f(-1)$，所以 B"$f(1) < f(-1)$"不成立；$|f(1)|=\mathrm e>\mathrm e^{-1}=|f(-1)|$，所以 D 不成立。</li>
<li>取 $f(x)=-\mathrm e^x$：$f'=-\mathrm e^x$，$ff'=\mathrm e^{2x}>0$，也满足条件。此时 $f(1)=-\mathrm e < -\mathrm e^{-1}=f(-1)$，所以 A"$f(1)>f(-1)$"不成立。</li></ul>
<p>A 与 B 都依赖 $f$ 的正负，而题设允许 $f$ 恒正，也允许 $f$ 恒负，所以 A、B 都不是"必然"结论。</p>
<p><b>补充（分类讨论的视角）：</b>由 $ff'>0$ 知 $f(x)\neq0$ 处处成立；$f$ 可导必连续，若 $f$ 有正有负，由零点定理它必有零点，矛盾。所以 $f$ 要么恒正、要么恒负。恒正时 $f'>0$，$f$ 增，$f(1)>f(-1)>0$；恒负时 $f' < 0$，$f$ 减，$f(1) < f(-1) < 0$。两种情况都有 $|f(1)|>|f(-1)|$。</p>`,
      pitfalls: R`<ul><li><b>只考虑 $f>0$ 的情形：</b>想当然认为 $f'>0$，$f$ 递增，错选 A。要警惕题目只给出"乘积的符号"，两个因子可以同时为负。</li><li><b>把"$f^2$ 增"误推成"$f$ 增"：</b>平方会抹掉符号信息，只能推出绝对值的大小关系。</li><li><b>忘了说明 $f$ 不变号：</b>如果用分类讨论法，必须说明 $f$ 不会在 $[-1,1]$ 上改变符号（靠连续性与 $f\neq0$），否则"恒正/恒负"两种情况并不完整。</li></ul>`,
      summary: R`<p><b>方法要点：</b>条件中出现 $f\cdot f'$，就把它看成 $\left(\frac12f^2\right)'$；同理 $f'g+fg'=(fg)'$，$f'+f=\mathrm e^{-x}(\mathrm e^xf)'$……"把条件凑成某个函数的导数"是处理抽象函数不等式的第一招。</p>
<p><b>看到…想到…：</b>看到 $ff'>0$，想到 $f^2$ 递增、$|f|$ 递增；看到"则必有"的抽象选择题，想到用 $\mathrm e^x$、$-\mathrm e^x$ 这类最简单的满足条件的函数举反例。</p>`,
      verify: { by: 'mixed', ok: true, note: '拉格朗日中值定理证明 f²(1)>f²(-1)；sympy 验证反例：f=e^x 与 f=-e^x 均满足 f·f′=e^{2x}>0，前者排除 B、D，后者排除 A' },
      flags: []
    },

    /* ───────────────────────── 第 3 题 ───────────────────────── */
    {
      id: '2017-3', year: 2017, no: '第3题', type: '选择', score: 4,
      stem: R`函数 $f(x,y,z)=x^2y+z^2$ 在点 $(1,2,0)$ 处沿向量 $\mathbf{n}=(1,2,2)$ 的方向导数为`,
      options: [R`$12$.`, R`$6$.`, R`$4$.`, R`$2$.`],
      answer: 'D',
      figure: null,
      kp: ['mdiff.dir'],
      methods: ['方向导数公式（梯度点乘单位方向向量）', '方向向量单位化'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>方向导数的计算公式。若 $f$ 在该点可微，沿单位向量 $\mathbf e=(\cos\alpha,\cos\beta,\cos\gamma)$ 的方向导数为</p>
$$\frac{\partial f}{\partial\mathbf l}=f_x\cos\alpha+f_y\cos\beta+f_z\cos\gamma=\mathrm{grad}\,f\cdot\mathbf e.$$
<p><b>为什么是这个公式（第一性原理）：</b>方向导数的定义是"沿方向 $\mathbf e$ 走一小步 $t$，函数的变化率"：$\lim\limits_{t\to0^+}\frac{f(P+t\mathbf e)-f(P)}{t}$。可微意味着 $f(P+\Delta)-f(P)\approx\mathrm{grad}\,f\cdot\Delta$，把 $\Delta=t\mathbf e$ 代入、除以 $t$ 就得到上式。注意定义里步长是 $t$，所以 $\mathbf e$ 必须是<b>单位</b>向量——这就是本题的关键陷阱：题目给的 $\mathbf n=(1,2,2)$ 长度是 $3$，必须先单位化。</p>`,
      solution: R`<p><b>第一步：判断可微。</b>$f=x^2y+z^2$ 是多项式，各偏导数连续，所以处处可微，可以使用梯度公式。</p>
<p><b>第二步：求梯度。</b></p>
$$f_x=2xy,\quad f_y=x^2,\quad f_z=2z.$$
<p>在点 $(1,2,0)$ 处：$f_x=2\cdot1\cdot2=4$，$f_y=1^2=1$，$f_z=2\cdot0=0$，即 $\mathrm{grad}\,f(1,2,0)=(4,1,0)$。</p>
<p><b>第三步：单位化方向向量。</b>$|\mathbf n|=\sqrt{1^2+2^2+2^2}=3$，所以</p>
$$\mathbf e=\frac{\mathbf n}{|\mathbf n|}=\left(\frac13,\frac23,\frac23\right),$$
<p>即方向余弦 $\cos\alpha=\frac13$，$\cos\beta=\frac23$，$\cos\gamma=\frac23$。</p>
<p><b>第四步：点乘。</b></p>
$$\frac{\partial f}{\partial\mathbf n}\bigg|_{(1,2,0)}=4\cdot\frac13+1\cdot\frac23+0\cdot\frac23=\frac43+\frac23=2,$$
<p>选 <b>D</b>。</p>
<p><b>错误选项分析与快速检验：</b></p>
<ul><li>B（$6$）：直接用未单位化的 $\mathbf n$ 点乘，$(4,1,0)\cdot(1,2,2)=6$，正是"忘记单位化"的陷阱，结果被放大了 $|\mathbf n|=3$ 倍。</li>
<li>C（$4$）：恰好是 $f_x=4$，即沿 $x$ 轴正向的方向导数，不是沿 $\mathbf n$ 的。</li>
<li>A（$12$）：数值过大。有一个一眼排除的办法：方向导数的绝对值不超过梯度的模（柯西—施瓦茨不等式 $|\mathrm{grad}\,f\cdot\mathbf e|\leqslant|\mathrm{grad}\,f|\cdot1$），而 $|\mathrm{grad}\,f|=\sqrt{16+1+0}=\sqrt{17}\approx4.12$，所以 $12$ 和 $6$ 都不可能是方向导数。</li></ul>`,
      pitfalls: R`<ul><li><b>不单位化：</b>这是方向导数题最常见的失分点，结果放大 $|\mathbf n|$ 倍。</li><li><b>代错点：</b>把 $f_y=x^2$ 在 $(1,2,0)$ 处算成 $2^2=4$（误用了 $y$ 的值），偏导数代点时要看清自变量。</li><li><b>公式的前提：</b>$\mathrm{grad}\,f\cdot\mathbf e$ 这个公式要求 $f$ 可微；若只是偏导数存在，必须回到定义去算。</li></ul>`,
      summary: R`<p><b>方法要点：</b>方向导数 = 梯度 · 单位方向向量。三步：求梯度 → 单位化 → 点乘。</p>
<p><b>看到…想到…：</b>看到"沿向量 $\mathbf n$ 的方向导数"，第一反应是算 $|\mathbf n|$ 并单位化；看到选项里的数比梯度的模还大，立刻排除。</p>
<p><b>相关结论：</b>梯度方向是方向导数最大的方向，最大值为 $|\mathrm{grad}\,f|$；与梯度垂直的方向上方向导数为 $0$；反方向上取最小值 $-|\mathrm{grad}\,f|$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 梯度在 (1,2,0) 处为 (4,1,0)，与 (1,2,2)/3 点乘得 2；未单位化时为 6（选项 B 的陷阱）' },
      flags: []
    },

    /* ───────────────────────── 第 4 题 ───────────────────────── */
    {
      id: '2017-4', year: 2017, no: '第4题', type: '选择', score: 4,
      stem: R`甲、乙两人赛跑，计时开始时，甲在乙前方 $10$（单位：$\mathrm{m}$）处。图中，实线表示甲的速度曲线 $v=v_1(t)$（单位：$\mathrm{m/s}$），虚线表示乙的速度曲线 $v=v_2(t)$，三块阴影部分面积的数值依次是 $10$，$20$，$3$。计时开始后乙追上甲的时刻记为 $t_0$（单位：$\mathrm{s}$），则`,
      options: [R`$t_0=10$.`, R`$15 < t_0 < 20$.`, R`$t_0=25$.`, R`$t_0>25$.`],
      answer: 'C',
      figure: {
        file: 'papers/images/2017年考研数学(一)真题/8e8f4df12e914f4ef16f2f4912ebc91d19101c0d902a3618f59ad880069238a3.jpg',
        desc: R`横轴为时间 $t$（单位 s），刻度 $0,5,10,15,20,25,30$；纵轴为速度 $v$（单位 m/s）。实线是甲的速度曲线 $v=v_1(t)$，虚线是乙的速度曲线 $v=v_2(t)$，两条曲线都画在 $t\in[0,30]$ 上，且在 $t=10$ 与 $t=25$ 处相交（图中在这两处各画了一条竖直虚线）。在 $[0,10]$ 上实线在虚线上方（甲比乙快），两曲线之间的阴影面积为 $10$；在 $[10,25]$ 上虚线在实线上方（乙比甲快），阴影面积为 $20$；在 $[25,30]$ 上实线又在虚线上方，阴影面积为 $3$。`
      },
      kp: ['int.app', 'int.def'],
      methods: ['定积分的物理意义', '两曲线间面积', '建立距离差函数'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>定积分的物理意义——速度曲线下方的面积是路程，<b>两条速度曲线之间的面积是两人路程之差</b>。题目把一个运动问题包装成了读图题。</p>
<p><b>为什么要建立"距离差函数"：</b>"追上"的意思是两人位置相同。与其分别跟踪两人的位置，不如只跟踪一个量：甲领先乙的距离</p>
$$d(t)=10+\int_0^t\big[v_1(s)-v_2(s)\big]\,\mathrm ds.$$
<p>$10$ 是起跑时甲的领先量，积分是之后甲比乙多跑的路程。乙追上甲，就是 $d(t)$ <b>第一次</b>变成 $0$ 的时刻。$d'(t)=v_1(t)-v_2(t)$：实线在上方时 $d$ 增大（甲在拉开差距），虚线在上方时 $d$ 减小（乙在缩小差距）。</p>`,
      solution: R`<p><b>第一步：$[0,10]$ 段。</b>这段实线在上，$v_1>v_2$，甲比乙快，领先距离增加，增量等于阴影面积 $10$：</p>
$$d(10)=10+\int_0^{10}(v_1-v_2)\,\mathrm dt=10+10=20.$$
<p>在这段时间内 $d(t)\geqslant10>0$，乙不可能追上。</p>
<p><b>第二步：$[10,25]$ 段。</b>这段虚线在上，$v_2>v_1$，乙在缩小差距。对 $t\in[10,25]$，</p>
$$d(t)=20-\int_{10}^t\big[v_2(s)-v_1(s)\big]\,\mathrm ds.$$
<p>被积函数在 $(10,25)$ 内为正，所以 $d(t)$ 在 $[10,25]$ 上严格递减；当 $t=25$ 时减去的恰好是整块阴影面积 $20$：</p>
$$d(25)=20-20=0.$$
<p>而对 $10\leqslant t < 25$，减去的面积小于 $20$，故 $d(t)>0$，乙还没追上。</p>
<p><b>第三步：结论。</b>$d(t)$ 第一次等于 $0$ 是在 $t=25$，即乙在 $t_0=25$ 时追上甲，选 <b>C</b>。（之后 $[25,30]$ 段甲又更快，面积 $3$ 是追上之后的事，与 $t_0$ 无关。）</p>
<p><b>错误选项分析：</b></p>
<ul><li>A（$t_0=10$）：误把"前 10 秒甲乙之间的面积 10"理解为乙追回了 10 米。实际上前 10 秒甲更快，差距是从 10 米<b>扩大</b>到 20 米，方向恰好相反。</li>
<li>B（$15 < t_0 < 20$）：大约是虚线最高点附近，误把"乙速度最大"当成"乙追上"。速度大只说明差距缩得快，追上要看累积的面积。</li>
<li>D（$t_0>25$）：若以为还要把最后那块面积 $3$ 也算进来才追上，就会得到这个结论；但 $t=25$ 时差距已是 $0$。</li></ul>`,
      pitfalls: R`<ul><li><b>搞反面积的含义：</b>实线（甲）在上方的阴影表示甲多跑的路程，会让差距<b>变大</b>；虚线（乙）在上方的阴影才表示乙追回的路程。</li><li><b>忘记起始的 10 米：</b>若忽略初始领先量，会以为第一次"面积抵消"（$10$ 抵消 $10$）时就追上。正确的账是：$10$（起始）$+10$（甲多跑）$-20$（乙追回）$=0$。</li><li><b>把速度交点当成相遇点：</b>速度曲线的交点只说明两人那一刻一样快，与"位置相同"毫无关系。</li></ul>`,
      summary: R`<p><b>方法要点：</b>速度—时间图中，曲线下的面积 = 路程；两条速度曲线之间的面积 = 路程差。追及问题设"领先距离" $d(t)=d_0+\int_0^t(v_1-v_2)\,\mathrm dt$，令 $d(t)=0$ 求第一次零点。</p>
<p><b>看到…想到…：</b>看到"速度曲线 + 阴影面积"，想到定积分的物理意义；看到"追上/相遇"，想到"位置差为零"，而不是"速度相等"。</p>`,
      verify: { by: 'manual', ok: true, note: '按图列出领先距离 d(t)：d(0)=10，d(10)=10+10=20，d 在 [10,25] 上严格递减且 d(25)=20−20=0，此前恒为正，故 t₀=25，与参考答案 C 一致' },
      flags: ['OCR 原文把题干在"实线表示甲的速度曲线"之后断行，已合并；"10（单位：m）"中的单位 m 原被识别为斜体变量，已改为正体；选项 D 的字母标号被 OCR 混进了公式，已整理格式']
    },

    /* ───────────────────────── 第 9 题 ───────────────────────── */
    {
      id: '2017-9', year: 2017, no: '第9题', type: '填空', score: 4,
      stem: R`已知函数 $f(x)=\dfrac{1}{1+x^2}$，则 $f^{(3)}(0)=$ ______.`,
      options: null,
      answer: R`$0$`,
      figure: null,
      kp: ['diff.calc', 'diff.taylor'],
      methods: ['函数奇偶性', '麦克劳林展开比较系数', '几何级数展开'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>求某一点处的高阶导数值。硬算三阶导数当然可以，但很繁；考研更想考的是两个"巧方法"：</p>
<ul><li><b>奇偶性：</b>$f(x)=\frac1{1+x^2}$ 是偶函数。偶函数求一次导变奇函数，再求一次变偶函数……所以 $f'''$ 是奇函数，而奇函数在 $0$ 处有定义时必有 $g(0)=0$。</li>
<li><b>泰勒展开比较系数：</b>麦克劳林展开 $f(x)=\sum\frac{f^{(n)}(0)}{n!}x^n$ 是唯一的，所以只要用别的办法写出 $f$ 的幂级数展开，$x^3$ 的系数乘 $3!$ 就是 $f'''(0)$。而 $\frac1{1+x^2}$ 可以直接用等比级数展开。</li></ul>
<p><b>为什么想到这两招：</b>题目问的是"<b>在 0 点</b>的导数值"，而 $0$ 恰好是对称中心，也是麦克劳林展开的展开点——这两个信号都在提示不必真的去求导。</p>`,
      solution: R`<p><b>方法一：奇偶性。</b></p>
<p><b>第一步：</b>$f(-x)=\frac{1}{1+(-x)^2}=f(x)$，$f$ 是偶函数。</p>
<p><b>第二步：证明"偶函数的导数是奇函数"。</b>对恒等式 $f(-x)=f(x)$ 两边求导，左边用链式法则：$-f'(-x)=f'(x)$，即 $f'(-x)=-f'(x)$，所以 $f'$ 是奇函数。同理对 $f'(-x)=-f'(x)$ 求导得 $-f''(-x)=-f''(x)$，$f''$ 是偶函数；再求导得 $f'''$ 是奇函数。</p>
<p><b>第三步：</b>奇函数 $g$ 满足 $g(-0)=-g(0)$，即 $g(0)=-g(0)$，所以 $g(0)=0$。因此 $f'''(0)=0$。</p>
<p><b>方法二：麦克劳林展开。</b></p>
<p>当 $|x| < 1$ 时，由等比级数 $\frac{1}{1-q}=1+q+q^2+\cdots$（取 $q=-x^2$）得</p>
$$\frac{1}{1+x^2}=1-x^2+x^4-x^6+\cdots,$$
<p>展开式中只有偶次幂，$x^3$ 的系数为 $0$。由展开式的唯一性，$\frac{f'''(0)}{3!}=0$，所以 $f'''(0)=0$。</p>
<p><b>方法三（直接求导，作为核对）：</b></p>
$$f'(x)=\frac{-2x}{(1+x^2)^2},\quad f''(x)=\frac{2(3x^2-1)}{(1+x^2)^3},\quad f'''(x)=\frac{24x(1-x^2)}{(1+x^2)^4},$$
<p>代入 $x=0$ 得 $f'''(0)=0$。可以看到 $f'''$ 确实是奇函数（分子含因子 $x$，其余部分是偶函数）。</p>
<p>答案：$0$。</p>`,
      pitfalls: R`<ul><li><b>直接求导时出错：</b>三阶导数用商法则要连续求三次，项多易错，考场上不划算。</li><li><b>比较系数时忘记乘 $n!$：</b>展开式中 $x^n$ 的系数是 $\frac{f^{(n)}(0)}{n!}$，不是 $f^{(n)}(0)$ 本身。本题系数为 $0$ 不受影响，但若问 $f^{(4)}(0)$，系数是 $1$，答案应为 $4!=24$ 而不是 $1$。</li><li><b>以为"偶函数的导数也是偶函数"：</b>求导会改变奇偶性。</li></ul>`,
      summary: R`<p><b>方法要点：</b>求 $f^{(n)}(0)$ 的三条路：(1) 奇偶性（偶函数的奇数阶导数、奇函数的偶数阶导数在 $0$ 处为 $0$）；(2) 写出麦克劳林展开，$f^{(n)}(0)=n!\times(x^n\text{ 的系数})$；(3) 莱布尼茨公式。</p>
<p><b>看到…想到…：</b>看到"求 $f^{(n)}(0)$"且 $n$ 较大或函数较复杂，想到先展开成幂级数再比较系数；看到偶函数问奇数阶导数（或奇函数问偶数阶导数），答案直接是 $0$。</p>
<p><b>举一反三：</b>同一函数 $f^{(4)}(0)=4!\cdot1=24$，$f^{(6)}(0)=6!\cdot(-1)=-720$，$f^{(2n)}(0)=(-1)^n(2n)!$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: diff(1/(1+x**2), x, 3).subs(x,0) = 0；factor 得 f‴=24x(1−x²)/(1+x²)⁴；series 展开 1−x²+x⁴−x⁶+…' },
      flags: []
    },

    /* ───────────────────────── 第 10 题 ───────────────────────── */
    {
      id: '2017-10', year: 2017, no: '第10题', type: '填空', score: 4,
      stem: R`微分方程 $y''+2y'+3y=0$ 的通解为 $y=$ ______.`,
      options: null,
      answer: R`$y=\mathrm e^{-x}\left(C_1\cos\sqrt2x+C_2\sin\sqrt2x\right)$，其中 $C_1,C_2$ 为任意常数`,
      figure: null,
      kp: ['ode.const', 'ode.linear'],
      methods: ['特征方程法', '解的结构定理'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>二阶常系数齐次线性微分方程的标准解法——特征方程法，且特征根是一对共轭复根。</p>
<p><b>为什么要写特征方程（第一性原理）：</b>方程 $y''+py'+qy=0$ 要求 $y$ 与它的一阶、二阶导数作线性组合后恰好抵消。什么函数求导后"长相不变"？指数函数 $\mathrm e^{rx}$：$(\mathrm e^{rx})'=r\mathrm e^{rx}$，$(\mathrm e^{rx})''=r^2\mathrm e^{rx}$。代入方程得 $(r^2+pr+q)\mathrm e^{rx}=0$，而 $\mathrm e^{rx}\neq0$，所以 $r$ 必须满足代数方程 $r^2+pr+q=0$——这就是特征方程，它把微分方程变成了解一元二次方程。</p>
<p><b>复根时为什么出现 $\cos$ 和 $\sin$：</b>根为 $\alpha\pm\beta\mathrm i$ 时，$\mathrm e^{(\alpha+\beta\mathrm i)x}=\mathrm e^{\alpha x}(\cos\beta x+\mathrm i\sin\beta x)$（欧拉公式）。线性齐次方程的复数解的实部、虚部分别也是解，于是得到两个线性无关的实值解 $\mathrm e^{\alpha x}\cos\beta x$ 与 $\mathrm e^{\alpha x}\sin\beta x$。</p>`,
      solution: R`<p><b>第一步：写出特征方程。</b>把 $y''\to r^2$，$y'\to r$，$y\to1$：</p>
$$r^2+2r+3=0.$$
<p><b>第二步：求根。</b>判别式 $\Delta=2^2-4\cdot3=-8 < 0$，有一对共轭复根：</p>
$$r=\frac{-2\pm\sqrt{-8}}{2}=\frac{-2\pm2\sqrt2\,\mathrm i}{2}=-1\pm\sqrt2\,\mathrm i,$$
<p>即 $\alpha=-1$，$\beta=\sqrt2$。</p>
<p><b>第三步：写出两个线性无关的实值解。</b>$y_1=\mathrm e^{-x}\cos\sqrt2x$，$y_2=\mathrm e^{-x}\sin\sqrt2x$。它们之比 $\tan\sqrt2x$ 不是常数，所以线性无关。</p>
<p><b>第四步：由解的结构定理写通解。</b>二阶齐次线性方程的通解是两个线性无关解的任意线性组合：</p>
$$y=\mathrm e^{-x}\left(C_1\cos\sqrt2x+C_2\sin\sqrt2x\right),\quad C_1,C_2\text{ 为任意常数}.$$
<p><b>检验（可选）：</b>取 $y=\mathrm e^{-x}\cos\sqrt2x$，$y'=\mathrm e^{-x}(-\cos\sqrt2x-\sqrt2\sin\sqrt2x)$，$y''=\mathrm e^{-x}(-\cos\sqrt2x+2\sqrt2\sin\sqrt2x)$，代入得 $y''+2y'+3y=\mathrm e^{-x}\big[(-1-2+3)\cos\sqrt2x+(2\sqrt2-2\sqrt2)\sin\sqrt2x\big]=0$。</p>`,
      pitfalls: R`<ul><li><b>实部虚部放错位置：</b>写成 $\mathrm e^{\sqrt2x}(C_1\cos x+C_2\sin x)$。记住：实部 $\alpha$ 进指数，虚部 $\beta$ 进三角函数。</li><li><b>求根时约分出错：</b>$\frac{-2\pm2\sqrt2\mathrm i}{2}$ 要整体除以 $2$，得 $-1\pm\sqrt2\mathrm i$，不是 $-1\pm2\sqrt2\mathrm i$。</li><li><b>漏写"$C_1,C_2$ 为任意常数"：</b>通解必须含两个独立的任意常数，答题时应注明。</li></ul>`,
      summary: R`<p><b>方法要点：</b>$y''+py'+qy=0$ 的通解按特征根分三种：</p>
<ul><li>两个不等实根 $r_1\neq r_2$：$y=C_1\mathrm e^{r_1x}+C_2\mathrm e^{r_2x}$；</li><li>二重根 $r$：$y=(C_1+C_2x)\mathrm e^{rx}$；</li><li>共轭复根 $\alpha\pm\beta\mathrm i$：$y=\mathrm e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$。</li></ul>
<p><b>看到…想到…：</b>看到常系数齐次线性方程，立刻写特征方程；判别式为负，就写"$\mathrm e^{\text{实部}\cdot x}$ 乘以 $\cos/\sin$（虚部 $\cdot x$）"。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy dsolve(y″+2y′+3y=0) 得 y=(C1·sin(√2x)+C2·cos(√2x))·e^{−x}，与答案一致；并手工代回验证' },
      flags: ['OCR 原文的填空横线被识别为转义下划线，已改为标准横线']
    },

    /* ───────────────────────── 第 11 题 ───────────────────────── */
    {
      id: '2017-11', year: 2017, no: '第11题', type: '填空', score: 4,
      stem: R`若曲线积分 $\displaystyle\int_L\frac{x\,\mathrm{d}x-ay\,\mathrm{d}y}{x^2+y^2-1}$ 在区域 $D=\{(x,y)\mid x^2+y^2 < 1\}$ 内与路径无关，则 $a=$ ______.`,
      options: null,
      answer: R`$-1$`,
      figure: null,
      kp: ['mint.line2'],
      methods: ['曲线积分与路径无关的条件', '凑全微分'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>平面上第二类曲线积分与路径无关的判定定理：设 $D$ 是<b>单连通</b>区域，$P,Q$ 在 $D$ 内有连续的一阶偏导数，则</p>
$$\int_LP\,\mathrm dx+Q\,\mathrm dy\text{ 在 }D\text{ 内与路径无关}\iff\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}\text{ 在 }D\text{ 内恒成立}.$$
<p><b>为什么是这个条件：</b>由格林公式，沿 $D$ 内任一闭曲线 $C$ 的积分等于 $\iint(Q_x-P_y)\,\mathrm d\sigma$；"与路径无关"等价于"沿任意闭曲线积分为零"，于是需要 $Q_x-P_y\equiv0$。单连通保证闭曲线围成的区域整个落在 $D$ 内，格林公式才能用。</p>
<p><b>先检查前提：</b>在 $D$ 内 $x^2+y^2 < 1$，分母 $x^2+y^2-1 < 0$，从不为零，所以 $P,Q$ 在 $D$ 内光滑；$D$ 是圆盘，单连通。前提齐备，直接用条件解 $a$。</p>`,
      solution: R`<p><b>第一步：认出 $P$、$Q$。</b>把积分写成 $\int_LP\,\mathrm dx+Q\,\mathrm dy$：</p>
$$P=\frac{x}{x^2+y^2-1},\qquad Q=\frac{-ay}{x^2+y^2-1}.$$
<p><b>第二步：求偏导。</b>对 $P$ 关于 $y$ 求偏导（$x$ 看成常数，分子不含 $y$）：</p>
$$\frac{\partial P}{\partial y}=x\cdot\frac{-2y}{(x^2+y^2-1)^2}=\frac{-2xy}{(x^2+y^2-1)^2}.$$
<p>对 $Q$ 关于 $x$ 求偏导（$y$ 看成常数，分子 $-ay$ 不含 $x$）：</p>
$$\frac{\partial Q}{\partial x}=-ay\cdot\frac{-2x}{(x^2+y^2-1)^2}=\frac{2axy}{(x^2+y^2-1)^2}.$$
<p><b>第三步：令二者相等。</b>与路径无关要求在 $D$ 内处处 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$，即</p>
$$2axy=-2xy\iff 2(a+1)xy=0\quad\text{对 }D\text{ 内一切点成立}.$$
<p>取 $D$ 内一点 $\left(\frac12,\frac12\right)$，$xy=\frac14\neq0$，得 $a+1=0$，即 $a=-1$。</p>
<p><b>第四步：反过来验证充分性。</b>$a=-1$ 时被积表达式为 $\frac{x\,\mathrm dx+y\,\mathrm dy}{x^2+y^2-1}$。在 $D$ 内令 $u=\frac12\ln(1-x^2-y^2)$，则 $u_x=\frac{-x}{1-x^2-y^2}=\frac{x}{x^2+y^2-1}$，$u_y=\frac{y}{x^2+y^2-1}$，被积表达式恰好是全微分 $\mathrm du$，积分只取决于起点与终点，确实与路径无关。</p>
<p>答案：$a=-1$。</p>`,
      pitfalls: R`<ul><li><b>把 $Q$ 的符号漏掉：</b>分子是 $x\,\mathrm dx-ay\,\mathrm dy$，$Q$ 是 $-\frac{ay}{\cdots}$，负号必须带上，否则得到 $a=1$。</li><li><b>求偏导时把分母当常数：</b>分母同时含 $x$ 和 $y$，对谁求偏导都要用商法则（或链式法则）。</li><li><b>忽视定理前提：</b>若区域内含使分母为零的点（例如区域换成整个平面），$P,Q$ 不连续，判别条件不能直接用。本题特意把区域限制在单位圆内部，就是为了让前提成立。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"与路径无关"⟺（单连通、偏导连续）$Q_x=P_y$ ⟺ $P\,\mathrm dx+Q\,\mathrm dy$ 是某函数的全微分 ⟺ 沿任意闭曲线积分为 $0$。四个说法在条件满足时互相等价，做题时选最方便的一个。</p>
<p><b>看到…想到…：</b>看到"与路径无关，求参数"，立刻算 $Q_x$ 与 $P_y$ 令其相等；做完后检查区域是否单连通、$P,Q$ 是否有奇点。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: solve(diff(Q,x)−diff(P,y)=0, a) = [−1]；并验证 a=−1 时 u=½ln(1−x²−y²) 满足 u_x=P、u_y=Q' },
      flags: ['OCR 原文的微分号写作 \\mathrm{~d}（多出 ~ 空格），已改为 \\mathrm{d}；原文缺填空横线，已补写']
    },

    /* ───────────────────────── 第 12 题 ───────────────────────── */
    {
      id: '2017-12', year: 2017, no: '第12题', type: '填空', score: 4,
      stem: R`幂级数 $\displaystyle\sum_{n=1}^{\infty}(-1)^{n-1}nx^{n-1}$ 在区间 $(-1,1)$ 内的和函数 $S(x)=$ ______.`,
      options: null,
      answer: R`$\dfrac{1}{(1+x)^2}$`,
      figure: null,
      kp: ['series.sum'],
      methods: ['逐项求导', '几何级数展开'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>幂级数求和函数的基本功——把通项"化归"为等比级数。</p>
<p><b>为什么想到逐项求导：</b>通项里有一个"多余的" $n$ 乘在 $x^{n-1}$ 前面。等比级数 $\sum x^n$ 我们会求和，可是带系数 $n$ 的就不会了。注意到</p>
$$nx^{n-1}=(x^n)',$$
<p>系数 $n$ 恰好是对 $x^n$ 求导"掉下来"的。所以先把 $\sum(-1)^{n-1}x^n$ 求出和（等比级数），再求导，就能得到原级数的和。口诀：<b>系数 $n$ 在分子，先积分再求导（或认出它是某个级数的导数）；系数 $n$ 在分母，先求导再积分</b>。</p>
<p><b>为什么可以逐项求导：</b>幂级数在收敛区间内部可以逐项求导、逐项积分，且收敛半径不变。本题收敛半径 $R=1$（由 $\lim\left|\frac{a_{n+1}}{a_n}\right|=\lim\frac{n+1}{n}=1$），所以在 $(-1,1)$ 内可以放心操作。</p>`,
      solution: R`<p><b>第一步：找一个"原函数级数"。</b>设</p>
$$T(x)=\sum_{n=1}^{\infty}(-1)^{n-1}x^n=x-x^2+x^3-\cdots,\quad|x| < 1.$$
<p>这是首项 $x$、公比 $-x$ 的等比级数，$|-x| < 1$ 时收敛，</p>
$$T(x)=\frac{x}{1-(-x)}=\frac{x}{1+x}.$$
<p><b>第二步：逐项求导。</b>在 $(-1,1)$ 内，</p>
$$T'(x)=\sum_{n=1}^{\infty}(-1)^{n-1}\left(x^n\right)'=\sum_{n=1}^{\infty}(-1)^{n-1}nx^{n-1}=S(x).$$
<p><b>第三步：对闭式求导。</b></p>
$$S(x)=\left(\frac{x}{1+x}\right)'=\frac{(1+x)-x}{(1+x)^2}=\frac{1}{(1+x)^2}.$$
<p><b>第四步：检验。</b>$x=0$ 时原级数只有 $n=1$ 项 $(-1)^0\cdot1\cdot x^0=1$，而 $\frac{1}{(1+0)^2}=1$，一致。再展开 $\frac1{(1+x)^2}=1-2x+3x^2-4x^3+\cdots$，与原级数逐项吻合。</p>
<p>答案：$S(x)=\dfrac{1}{(1+x)^2}$，$-1 < x < 1$。</p>`,
      pitfalls: R`<ul><li><b>求等比级数时首项写错：</b>$\sum_{n=1}^\infty(-1)^{n-1}x^n$ 的首项是 $x$ 不是 $1$，和是 $\frac{x}{1+x}$ 而不是 $\frac{1}{1+x}$。若用 $\frac{1}{1+x}$ 求导，会得到 $-\frac{1}{(1+x)^2}$，差一个符号。</li><li><b>符号 $(-1)^{n-1}$ 处理错：</b>公比是 $-x$，不是 $x$。</li><li><b>忘记检验：</b>代入 $x=0$ 看常数项，是发现符号错误最快的办法。</li></ul>`,
      summary: R`<p><b>方法要点：</b>幂级数求和的核心是"凑等比级数"：通项系数含 $n$（在分子）→ 认作导数，先求"积分后"的级数和再求导；系数含 $\frac1n$ → 认作积分，先求导再积分。</p>
<p><b>看到…想到…：</b>看到 $\sum nx^{n-1}$ 型，想到 $\left(\sum x^n\right)'=\left(\frac{x}{1-x}\right)'=\frac{1}{(1-x)^2}$；看到 $\sum\frac{x^n}{n}$ 型，想到 $-\ln(1-x)$。</p>
<p><b>必背结论：</b>$\sum_{n=1}^\infty nx^{n-1}=\frac{1}{(1-x)^2}$，把 $x$ 换成 $-x$ 就得到本题。</p>`,
      alt: R`<p><b>另解（直接对 $\frac{1}{1+x}$ 的展开求导）：</b>$\frac{1}{1+x}=\sum_{n=0}^\infty(-1)^nx^n$，两边求导：</p>
$$-\frac{1}{(1+x)^2}=\sum_{n=1}^\infty(-1)^nnx^{n-1}=-\sum_{n=1}^\infty(-1)^{n-1}nx^{n-1},$$
<p>所以 $S(x)=\frac{1}{(1+x)^2}$。也可以先逐项积分：$\int_0^xS(t)\,\mathrm dt=\sum(-1)^{n-1}x^n=\frac{x}{1+x}$，再求导，效果相同。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: Sum((-1)**(n-1)*n*x**(n-1),(n,1,oo)).doit() 在 −1<x<1 上为 (x+1)^(−2)；series(1/(1+x)**2) = 1−2x+3x²−4x³+5x⁴−… 与原级数逐项一致' },
      flags: []
    },

    /* ───────────────────────── 第 15 题 ───────────────────────── */
    {
      id: '2017-15', year: 2017, no: '第15题', type: '解答', score: 10,
      stem: R`设函数 $f(u,v)$ 具有 2 阶连续偏导数，$y=f(\mathrm{e}^x,\cos x)$，求 $\left.\dfrac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=0}$，$\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{x=0}$.`,
      options: null,
      answer: R`$\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=0}=f_1'(1,1)$，$\left.\dfrac{\mathrm d^2y}{\mathrm dx^2}\right|_{x=0}=f_1'(1,1)+f_{11}''(1,1)-f_2'(1,1)$.`,
      figure: null,
      kp: ['mdiff.chain', 'mdiff.diffable'],
      methods: ['多元复合函数链式法则', '乘积求导法则', '先求导后代点'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>多元抽象复合函数的一阶、二阶导数。结构是"一元 → 二元 → 一元"：$x$ 通过两条路径 $u=\mathrm e^x$、$v=\cos x$ 影响 $f$，最后得到 $x$ 的一元函数 $y$。</p>
<p><b>链式法则的直观（画"树形图"）：</b>从 $y$ 出发画两条线到 $u$、$v$，再各自连到 $x$。$y$ 对 $x$ 的导数 = 沿每条路径把"偏导 × 导数"乘起来，再把各路径相加：</p>
$$\frac{\mathrm dy}{\mathrm dx}=\frac{\partial f}{\partial u}\frac{\mathrm du}{\mathrm dx}+\frac{\partial f}{\partial v}\frac{\mathrm dv}{\mathrm dx}.$$
<p><b>二阶导数的核心难点：</b>一阶导数里的 $f_1'$、$f_2'$ 仍然是 $(u,v)=(\mathrm e^x,\cos x)$ 的函数，<b>它们也是复合函数</b>，对 $x$ 再求导时必须再用一次链式法则，同时 $\mathrm e^x$、$-\sin x$ 这些系数也要用乘积法则求导。这两层"再求导"是本题唯一的考点。</p>
<p><b>代点技巧：</b>$x=0$ 时 $u=\mathrm e^0=1$，$v=\cos0=1$，所有偏导数都在 $(1,1)$ 处取值；且 $\sin0=0$ 会让很多项消失。所以先写出一般表达式，再代 $x=0$ 化简。</p>`,
      solution: R`<p>记号：$f_1'=\frac{\partial f}{\partial u}$，$f_2'=\frac{\partial f}{\partial v}$，$f_{11}''=\frac{\partial^2f}{\partial u^2}$，$f_{12}''=\frac{\partial^2f}{\partial u\partial v}$ 等，它们都在 $(u,v)=(\mathrm e^x,\cos x)$ 处取值。</p>
<p><b>第一步：求一阶导数。</b>$\frac{\mathrm du}{\mathrm dx}=\mathrm e^x$，$\frac{\mathrm dv}{\mathrm dx}=-\sin x$，由链式法则</p>
$$\frac{\mathrm dy}{\mathrm dx}=\mathrm e^xf_1'-\sin x\cdot f_2'.$$
<p><b>第二步：代入 $x=0$。</b>此时 $(u,v)=(1,1)$，$\mathrm e^0=1$，$\sin0=0$：</p>
$$\left.\frac{\mathrm dy}{\mathrm dx}\right|_{x=0}=f_1'(1,1).$$
<p><b>第三步：对第一项 $\mathrm e^xf_1'$ 求导。</b>这是乘积，用乘积法则：</p>
$$\left(\mathrm e^xf_1'\right)'=\mathrm e^xf_1'+\mathrm e^x\cdot\frac{\mathrm d}{\mathrm dx}f_1'.$$
<p>而 $f_1'=f_1'(u,v)$ 本身又是 $u,v$ 的函数，再用一次链式法则：</p>
$$\frac{\mathrm d}{\mathrm dx}f_1'=f_{11}''\cdot\mathrm e^x+f_{12}''\cdot(-\sin x).$$
<p>所以</p>
$$\left(\mathrm e^xf_1'\right)'=\mathrm e^xf_1'+\mathrm e^x\left(\mathrm e^xf_{11}''-\sin x\,f_{12}''\right).$$
<p><b>第四步：对第二项 $-\sin x\cdot f_2'$ 求导。</b>同理，</p>
$$\left(-\sin x\cdot f_2'\right)'=-\cos x\cdot f_2'-\sin x\left(\mathrm e^xf_{21}''-\sin x\,f_{22}''\right).$$
<p><b>第五步：合并得二阶导数的一般表达式。</b></p>
$$\frac{\mathrm d^2y}{\mathrm dx^2}=\mathrm e^xf_1'+\mathrm e^{2x}f_{11}''-\mathrm e^x\sin x\,f_{12}''-\cos x\,f_2'-\mathrm e^x\sin x\,f_{21}''+\sin^2x\,f_{22}''.$$
<p>由于 $f$ 有二阶连续偏导数，$f_{12}''=f_{21}''$，中间两项可合并为 $-2\mathrm e^x\sin x\,f_{12}''$。</p>
<p><b>第六步：代入 $x=0$。</b>$\mathrm e^0=1$，$\sin0=0$，$\cos0=1$，含 $\sin x$ 的三项全部消失：</p>
$$\left.\frac{\mathrm d^2y}{\mathrm dx^2}\right|_{x=0}=f_1'(1,1)+f_{11}''(1,1)-f_2'(1,1).$$`,
      pitfalls: R`<ul><li><b>把 $f_1'$ 当常数：</b>对 $\mathrm e^xf_1'$ 求导时只写 $\mathrm e^xf_1'$，漏掉 $\mathrm e^x\cdot\frac{\mathrm d}{\mathrm dx}f_1'$ 这部分，就丢了 $f_{11}''$ 项。</li><li><b>漏乘积法则：</b>只对 $f_1'$ 用链式法则，忘了系数 $\mathrm e^x$ 自身也要求导，就丢了 $f_1'(1,1)$ 项；同理丢掉 $-\cos x\,f_2'$ 会少 $-f_2'(1,1)$。</li><li><b>代错点：</b>把偏导数写成在 $(0,0)$ 或 $(0,1)$ 处的值。$x=0$ 对应的是 $u=\mathrm e^0=1$，$v=\cos0=1$。</li><li><b>先代点再求导：</b>先把 $x=0$ 代进一阶导数得到常数 $f_1'(1,1)$，再对常数求导得 $0$——这是根本性的错误，必须先求出关于 $x$ 的一般表达式再代点。</li></ul>`,
      summary: R`<p><b>方法要点：</b>抽象复合函数求高阶导，记住一句话：<b>"偏导数仍是复合函数"</b>——$f_1'$、$f_2'$ 与 $f$ 有相同的复合结构，再求导时照样要沿树形图的每条路径走一遍。乘积项要先用乘积法则，再对抽象函数部分用链式法则。</p>
<p><b>看到…想到…：</b>看到 $y=f(\varphi(x),\psi(x))$ 求二阶导，想到"乘积法则 + 链式法则"两层，并利用"二阶偏导连续 ⇒ 混合偏导相等"合并同类项；看到求某点处的值，先找出该点对应的 $(u,v)$，并留意哪些系数在该点为零可以提前消去（但只能在求完导之后代入）。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 对抽象函数 f(e^x, cos x) 求一、二阶导并代 x=0，得 f₁′(1,1) 与 f₁′(1,1)+f₁₁″(1,1)−f₂′(1,1)；另取具体函数 f=u³v²+sin(uv)+u·e^v 数值核对，差为 0' },
      flags: ['OCR 原文把 dy/dx 识别成 \\mathrm{dy}/\\mathrm{dx}（d 与变量连成一个正体整体），已改为 \\mathrm{d}y/\\mathrm{d}x']
    },

    /* ───────────────────────── 第 16 题 ───────────────────────── */
    {
      id: '2017-16', year: 2017, no: '第16题', type: '解答', score: 10,
      stem: R`求 $\displaystyle\lim_{n\to\infty}\sum_{k=1}^{n}\frac{k}{n^2}\ln\left(1+\frac{k}{n}\right)$.`,
      options: null,
      answer: R`$\dfrac14$`,
      figure: null,
      kp: ['lim.seqcalc', 'int.def', 'int.defcalc'],
      methods: ['定积分定义求和式极限', '分部积分', '有理函数积分'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>用定积分的定义（黎曼和）求 $n$ 项和的极限，再算一个分部积分。</p>
<p><b>定积分定义回顾：</b>把 $[0,1]$ 分成 $n$ 等份，每份长 $\frac1n$，第 $k$ 个小区间 $\left[\frac{k-1}{n},\frac kn\right]$ 取右端点 $\frac kn$，则对连续函数 $g$，</p>
$$\lim_{n\to\infty}\frac1n\sum_{k=1}^ng\!\left(\frac kn\right)=\int_0^1g(x)\,\mathrm dx.$$
<p>几何上就是 $n$ 个窄矩形面积之和（宽 $\frac1n$、高 $g(\frac kn)$）逼近曲边梯形面积。</p>
<p><b>从题目哪个特征想到它：</b>和式中 $k$ 和 $n$ 总是以 $\frac kn$ 的形式成对出现（$\ln(1+\frac kn)$），而且多出来的 $\frac{k}{n^2}$ 恰好能拆成 $\frac1n\cdot\frac kn$——"一个 $\frac1n$ 乘以只含 $\frac kn$ 的函数"，正是黎曼和的标准形状。辨认规则：<b>能提出 $\frac1n$，剩下的部分只依赖 $\frac kn$</b>，就化为定积分。</p>`,
      solution: R`<p><b>第一步：凑成黎曼和。</b></p>
$$\sum_{k=1}^n\frac{k}{n^2}\ln\left(1+\frac kn\right)=\frac1n\sum_{k=1}^n\frac kn\ln\left(1+\frac kn\right)=\frac1n\sum_{k=1}^ng\!\left(\frac kn\right),\quad g(x)=x\ln(1+x).$$
<p><b>第二步：化为定积分。</b>$g$ 在 $[0,1]$ 上连续，因而可积，任意分法、任意取点的黎曼和的极限都等于积分值。上式正是"等分 $[0,1]$、取右端点"的黎曼和，所以</p>
$$\text{原式}=\int_0^1x\ln(1+x)\,\mathrm dx.$$
<p><b>第三步：分部积分。</b>被积函数是"幂函数 × 对数函数"，按"反对幂指三"的顺序，让对数函数当 $u$（求导后变成有理函数，变简单），幂函数凑微分：$x\,\mathrm dx=\mathrm d\frac{x^2}{2}$。</p>
$$\int_0^1x\ln(1+x)\,\mathrm dx=\left[\frac{x^2}{2}\ln(1+x)\right]_0^1-\int_0^1\frac{x^2}{2}\cdot\frac{1}{1+x}\,\mathrm dx=\frac12\ln2-\frac12\int_0^1\frac{x^2}{1+x}\,\mathrm dx.$$
<p><b>第四步：算有理函数积分。</b>分子次数不低于分母，先做多项式除法：$x^2=(x^2-1)+1=(x-1)(x+1)+1$，所以</p>
$$\frac{x^2}{1+x}=x-1+\frac{1}{1+x},$$
$$\int_0^1\frac{x^2}{1+x}\,\mathrm dx=\left[\frac{x^2}{2}-x+\ln(1+x)\right]_0^1=\frac12-1+\ln2=\ln2-\frac12.$$
<p><b>第五步：合并。</b></p>
$$\text{原式}=\frac12\ln2-\frac12\left(\ln2-\frac12\right)=\frac12\ln2-\frac12\ln2+\frac14=\frac14.$$`,
      pitfalls: R`<ul><li><b>拆 $\frac{k}{n^2}$ 时拆错：</b>写成 $\frac{1}{n^2}\cdot k$ 然后不知如何处理。要主动凑出 $\frac1n\cdot\frac kn$。</li><li><b>积分区间写错：</b>$k$ 从 $1$ 到 $n$ 时 $\frac kn$ 从 $\frac1n$ 变到 $1$，对应区间是 $[0,1]$，不是 $[1,2]$（$1+\frac kn$ 在 $[1,2]$ 上，但被积函数自变量是 $\frac kn$）。若令 $t=1+x$ 也可以，但被积函数要相应改写为 $(t-1)\ln t$，区间 $[1,2]$。</li><li><b>分部积分选错 $u$：</b>若让 $x$ 当 $u$、$\ln(1+x)\,\mathrm dx$ 当 $\mathrm dv$，需要先求 $\ln(1+x)$ 的原函数，反而更繁。</li><li><b>$\frac{x^2}{1+x}$ 不做除法：</b>假分式必须先化为"多项式 + 真分式"。</li></ul>`,
      summary: R`<p><b>方法要点：</b>$n$ 项和的极限有两条主路：(1) 每项都能写成 $\frac1n g(\frac kn)$ → 定积分定义；(2) 各项"不整齐"（如分母是 $n^2+k$，与 $n^2$ 只差低阶项）→ 夹逼准则，往往先放缩成可以化为积分的形式。</p>
<p><b>看到…想到…：</b>看到 $\lim\sum_{k=1}^n$ 且通项中 $k,n$ 以 $\frac kn$ 成对出现，想到黎曼和；看到"多项式 × 对数"的积分，想到对数当 $u$ 做分部积分。</p>`,
      alt: R`<p><b>另解（分部积分时巧选原函数）：</b>$x\,\mathrm dx$ 的原函数可以取 $\frac{x^2-1}{2}$（与 $\frac{x^2}{2}$ 只差常数，同样合法）。这样</p>
$$\int_0^1x\ln(1+x)\,\mathrm dx=\left[\frac{x^2-1}{2}\ln(1+x)\right]_0^1-\int_0^1\frac{x^2-1}{2}\cdot\frac{1}{1+x}\,\mathrm dx.$$
<p>边界项在 $x=1$ 时因 $x^2-1=0$ 为零、在 $x=0$ 时因 $\ln1=0$ 为零；而 $\frac{x^2-1}{1+x}=x-1$ 直接约分：</p>
$$=0-\frac12\int_0^1(x-1)\,\mathrm dx=-\frac12\left(\frac12-1\right)=\frac14.$$
<p>原函数中的常数是可以自由选取的，选得好能让分部积分后的被积函数直接约掉分母——这是一个值得记住的小技巧。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(x*log(1+x),(x,0,1)) = 1/4；mpmath 计算 n=200000 时的部分和 ≈ 0.2500017，与 1/4 吻合' },
      flags: []
    },

    /* ───────────────────────── 第 17 题 ───────────────────────── */
    {
      id: '2017-17', year: 2017, no: '第17题', type: '解答', score: 10,
      stem: R`已知函数 $y(x)$ 由方程 $x^3+y^3-3x+3y-2=0$ 确定，求 $y(x)$ 的极值.`,
      options: null,
      answer: R`极大值 $y(1)=1$，极小值 $y(-1)=0$.`,
      figure: null,
      kp: ['diff.mono', 'diff.calc'],
      methods: ['隐函数求导（方程两边对 x 求导）', '极值的第二充分条件', '极值的第一充分条件'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>隐函数的极值。思路与显函数完全一样——"求驻点 → 判别"，只是求导要用隐函数求导法。</p>
<p><b>先想清楚 $y(x)$ 是不是一个好函数：</b>把方程看作关于 $y$ 的方程：$y^3+3y=-x^3+3x+2$。左边 $g(y)=y^3+3y$ 满足 $g'(y)=3y^2+3>0$，严格递增，且值域为全体实数，所以对每个 $x$ 恰有唯一的 $y$，$y(x)$ 在整个数轴上有定义。又 $F_y=3y^2+3\neq0$，由隐函数存在定理，$y(x)$ 处处可导。这样极值只可能出现在驻点处（没有不可导点要考虑）。</p>
<p><b>为什么判别时用二阶导很方便：</b>在驻点处 $y'=0$，二阶导数表达式中所有含 $y'$ 的项都消失，计算量很小。</p>`,
      solution: R`<p><b>第一步：隐函数求导。</b>方程两边对 $x$ 求导，$y$ 是 $x$ 的函数，$y^3$ 要用链式法则：$(y^3)'=3y^2y'$。</p>
$$3x^2+3y^2y'-3+3y'=0\quad\Longrightarrow\quad y'=\frac{1-x^2}{1+y^2}.\tag{1}$$
<p><b>第二步：求驻点。</b>分母 $1+y^2>0$ 恒不为零，所以 $y'=0\iff1-x^2=0\iff x=\pm1$。</p>
<p><b>第三步：求驻点处的函数值。</b></p>
<ul><li>$x=1$：代入原方程 $1+y^3-3+3y-2=0$，即 $y^3+3y-4=0$。观察到 $y=1$ 是根，因式分解 $(y-1)(y^2+y+4)=0$，而 $y^2+y+4$ 的判别式 $1-16 < 0$ 无实根，所以 $y(1)=1$。</li>
<li>$x=-1$：代入得 $-1+y^3+3+3y-2=0$，即 $y^3+3y=0$，$y(y^2+3)=0$，唯一实根 $y=0$，所以 $y(-1)=0$。</li></ul>
<p><b>第四步：求二阶导数。</b>对 $3x^2+3y^2y'-3+3y'=0$ 两边再对 $x$ 求导，注意 $y^2y'$ 是乘积，$(y^2)'=2yy'$：</p>
$$6x+6y(y')^2+3y^2y''+3y''=0.$$
<p>在驻点处 $y'=0$，中间项消失，得</p>
$$y''=\frac{-2x}{1+y^2}\quad(\text{在驻点处}).$$
<p><b>第五步：判别。</b></p>
<ul><li>在 $(x,y)=(1,1)$：$y''(1)=\frac{-2}{1+1}=-1 < 0$，由第二充分条件，$x=1$ 是极大值点，<b>极大值 $y(1)=1$</b>。</li>
<li>在 $(x,y)=(-1,0)$：$y''(-1)=\frac{2}{1+0}=2>0$，$x=-1$ 是极小值点，<b>极小值 $y(-1)=0$</b>。</li></ul>`,
      pitfalls: R`<ul><li><b>求导时把 $y$ 当常数：</b>$(y^3)'$ 写成 $0$ 或 $3y^2$，漏掉 $y'$。</li><li><b>二阶导数漏项：</b>对 $3y^2y'$ 求导要用乘积法则得 $6y(y')^2+3y^2y''$，漏掉其中一项虽然在驻点处碰巧不影响结果，但推导本身是错的，阅卷会扣分。</li><li><b>只求出驻点不求函数值：</b>题目问"极值"，要给出 $y$ 的值；求 $x=\pm1$ 对应的 $y$ 需要解三次方程，要说明实根唯一。</li><li><b>混淆"极值点"与"极值"：</b>极值点是 $x=\pm1$，极值是 $y=1$ 和 $y=0$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>隐函数求极值四步：(1) 两边对 $x$ 求导，解出 $y'$；(2) 令 $y'=0$，与原方程联立求驻点 $(x_0,y_0)$；(3) 再求导得 $y''$，利用 $y'(x_0)=0$ 化简；(4) 用 $y''$ 的符号判别。</p>
<p><b>看到…想到…：</b>看到"由方程确定的函数求极值"，想到隐函数求导 + 联立原方程；看到求驻点处的二阶导，想到先把 $y'=0$ 代进去，省掉大部分计算。</p>`,
      alt: R`<p><b>另解（第一充分条件，看导数变号）：</b>由 (1)，$y'$ 与 $1-x^2$ 同号（分母恒正）：</p>
<ul><li>$x < -1$ 时 $1-x^2 < 0$，$y$ 递减；</li><li>$-1 < x < 1$ 时 $1-x^2>0$，$y$ 递增；</li><li>$x>1$ 时 $1-x^2 < 0$，$y$ 递减。</li></ul>
<p>所以 $x=-1$ 处先减后增，是极小值点；$x=1$ 处先增后减，是极大值点。这个方法根本不需要二阶导数，而且本题 $y'$ 的符号一目了然，反而更简洁。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: y′=(1−x²)/(1+y²)；solve 得 x=1 时实根 y=1、x=−1 时实根 y=0（其余为复根）；隐函数二阶导代入驻点得 y″(1)=−1、y″(−1)=2' },
      flags: ['OCR 原文题末缺句点，已补']
    },

    /* ───────────────────────── 第 18 题 ───────────────────────── */
    {
      id: '2017-18', year: 2017, no: '第18题', type: '解答', score: 10,
      stem: R`设函数 $f(x)$ 在区间 $[0,1]$ 上具有 2 阶导数，且 $f(1)>0$，$\lim\limits_{x\to0^+}\dfrac{f(x)}{x} < 0$. 证明：<br>(Ⅰ) 方程 $f(x)=0$ 在区间 $(0,1)$ 内至少存在一个实根；<br>(Ⅱ) 方程 $f(x)f''(x)+[f'(x)]^2=0$ 在区间 $(0,1)$ 内至少存在两个不同实根.`,
      options: null,
      answer: R`证明见解答。要点：(Ⅰ) 由极限保号性得 $f$ 在 $0$ 右侧某点取负值，结合 $f(1)>0$ 用零点定理；(Ⅱ) 由已知极限得 $f(0)=0$，对 $f$ 用罗尔定理得 $f'(\eta)=0$，再对 $F(x)=f(x)f'(x)$ 在两个区间上用罗尔定理。`,
      figure: null,
      kp: ['diff.mvt', 'lim.closed', 'lim.funcdef'],
      methods: ['极限的局部保号性', '零点定理', '罗尔定理', '构造辅助函数'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>(Ⅰ) 零点定理；(Ⅱ) 用罗尔定理证明导数方程有根——核心是<b>构造辅助函数</b>。</p>
<p><b>(Ⅰ) 的思路：</b>零点定理需要两个异号的函数值。$f(1)>0$ 已经给了一个正值；负值从哪来？从 $\lim\limits_{x\to0^+}\frac{f(x)}{x} < 0$：极限为负，由<b>局部保号性</b>，$x$ 足够靠近 $0^+$ 时 $\frac{f(x)}{x} < 0$，而 $x>0$，所以 $f(x) < 0$。</p>
<p><b>(Ⅱ) 的思路——为什么构造 $F=ff'$：</b>要证明"某个式子等于 $0$ 有根"，罗尔定理的套路是：找一个函数 $F$，使得这个式子恰好是 $F'$。观察 $f f''+(f')^2$：它正是乘积 $f\cdot f'$ 的导数，</p>
$$(ff')'=f'\cdot f'+f\cdot f''=ff''+(f')^2.$$
<p>所以只要 $F=ff'$ 有<b>三个</b>不同的零点，用两次罗尔定理就得到 $F'$ 的两个不同零点。$F=ff'$ 为零，要么 $f=0$，要么 $f'=0$：$f$ 的零点有 $0$（需要从已知极限推出 $f(0)=0$）和 (Ⅰ) 中找到的 $\xi$；在 $0$ 与 $\xi$ 之间对 $f$ 用罗尔定理还能得到一个 $f'=0$ 的点。三个零点就凑齐了。</p>`,
      solution: R`<p>记 $A=\lim\limits_{x\to0^+}\frac{f(x)}{x}$，题设 $A < 0$（是一个确定的负数）。$f$ 在 $[0,1]$ 上二阶可导，所以 $f$ 与 $f'$ 都在 $[0,1]$ 上可导、从而连续。</p>
<p><b>(Ⅰ) 第一步：用保号性找一个负值。</b>由极限的局部保号性，因为 $A < 0$，存在 $\delta\in(0,1)$，使得当 $0 < x < \delta$ 时 $\frac{f(x)}{x} < 0$。此时 $x>0$，所以 $f(x) < 0$。取定一点 $c\in(0,\delta)$，有 $f(c) < 0$。</p>
<p>（保号性的来历：取 $\varepsilon=\frac{|A|}{2}$，由极限定义，存在 $\delta$，当 $0 < x < \delta$ 时 $\left|\frac{f(x)}{x}-A\right| < \frac{|A|}2$，从而 $\frac{f(x)}{x} < A+\frac{|A|}{2}=\frac A2 < 0$。）</p>
<p><b>(Ⅰ) 第二步：零点定理。</b>$f$ 在 $[c,1]$ 上连续，$f(c) < 0 < f(1)$，由零点定理，存在 $\xi\in(c,1)\subset(0,1)$，使 $f(\xi)=0$。(Ⅰ) 得证。</p>
<p><b>(Ⅱ) 第一步：证明 $f(0)=0$。</b>$f$ 在 $x=0$ 处右连续，所以</p>
$$f(0)=\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\frac{f(x)}{x}\cdot x=A\cdot0=0.$$
<p>（这里用到 $\frac{f(x)}{x}$ 的极限是有限数 $A$，乘以趋于 $0$ 的 $x$，乘积趋于 $0$。）</p>
<p><b>(Ⅱ) 第二步：对 $f$ 用罗尔定理。</b>$f$ 在 $[0,\xi]$ 上连续、在 $(0,\xi)$ 内可导，且 $f(0)=f(\xi)=0$，由罗尔定理，存在 $\eta\in(0,\xi)$，使 $f'(\eta)=0$。</p>
<p><b>(Ⅱ) 第三步：构造辅助函数。</b>令</p>
$$F(x)=f(x)f'(x),\quad x\in[0,1].$$
<p>由于 $f$、$f'$ 在 $[0,1]$ 上都可导，$F$ 在 $[0,1]$ 上可导（从而连续），且</p>
$$F'(x)=f'(x)f'(x)+f(x)f''(x)=f(x)f''(x)+[f'(x)]^2.$$
<p><b>(Ⅱ) 第四步：找 $F$ 的三个零点。</b></p>
$$F(0)=f(0)f'(0)=0,\qquad F(\eta)=f(\eta)f'(\eta)=0,\qquad F(\xi)=f(\xi)f'(\xi)=0,$$
<p>且 $0 < \eta < \xi < 1$。</p>
<p><b>(Ⅱ) 第五步：两次罗尔定理。</b>$F$ 在 $[0,\eta]$ 上满足罗尔定理条件，存在 $\zeta_1\in(0,\eta)$ 使 $F'(\zeta_1)=0$；$F$ 在 $[\eta,\xi]$ 上满足罗尔定理条件，存在 $\zeta_2\in(\eta,\xi)$ 使 $F'(\zeta_2)=0$。</p>
<p>两个区间 $(0,\eta)$ 与 $(\eta,\xi)$ 不相交，所以 $\zeta_1\neq\zeta_2$，且都在 $(0,1)$ 内。即方程 $f(x)f''(x)+[f'(x)]^2=0$ 在 $(0,1)$ 内至少有两个不同实根 $\zeta_1,\zeta_2$。证毕。</p>`,
      pitfalls: R`<ul><li><b>直接写"$f(0)=0$"而不加说明：</b>题目没有给出 $f(0)$ 的值，它是从"$\lim\frac{f(x)}{x}$ 存在（有限）+ $f$ 在 $0$ 处连续"推出来的，必须写出推导，这是本题的得分点。</li><li><b>保号性用错方向：</b>由 $\frac{f(x)}{x} < 0$ 推 $f(x) < 0$ 依赖 $x>0$，要写明是右侧。</li><li><b>罗尔定理只用一次：</b>只找到 $F$ 的两个零点 $0$ 和 $\xi$，只能得到一个根。要证"两个不同的根"，需要 $F$ 有三个零点，关键是想到在 $0$ 与 $\xi$ 之间还有 $f'$ 的零点 $\eta$。</li><li><b>两个根可能相同：</b>必须说明 $\zeta_1,\zeta_2$ 落在不相交的开区间里，才能保证"不同"。</li></ul>`,
      summary: R`<p><b>方法要点：</b>证明"含导数的方程至少有 $k$ 个根"：(1) 把方程左边认作某个函数 $F$ 的导数（常见：$ff''+f'^2=(ff')'$，$f'g+fg'=(fg)'$，$f'+\lambda f\to(\mathrm e^{\lambda x}f)'$）；(2) 找出 $F$ 的 $k+1$ 个零点；(3) 在相邻零点之间用罗尔定理。</p>
<p><b>看到…想到…：</b>看到 $\lim\limits_{x\to0^+}\frac{f(x)}{x}=A$（有限）且 $f$ 连续，想到 $f(0)=0$ 且 $f'_+(0)=A$；看到极限的符号，想到保号性在附近给出函数值的符号；看到 $ff''+(f')^2$，想到 $(ff')'$，也就是 $\frac12(f^2)''$。</p>`,
      alt: R`<p><b>另一视角（$f^2$ 的二阶导）：</b>令 $G(x)=f^2(x)$，则 $G'=2ff'$，$G''=2\left[ff''+(f')^2\right]$。$G'$ 在 $0$ 和 $\xi$ 处为零（因为 $f$ 在这两点为零）；$G(0)=G(\xi)=0$，由罗尔定理 $G'$ 在 $(0,\xi)$ 内还有一个零点。于是 $G'$ 有三个零点，再用两次罗尔定理得 $G''$ 有两个不同零点。这与上面的证明本质相同，但"$ff''+f'^2=\frac12(f^2)''$"这个观察有助于记忆辅助函数的来源。</p>`,
      verify: { by: 'proof', ok: true, note: '证明逐步依据保号性、零点定理、罗尔定理；sympy 以满足题设的例子 f=x(x−1/2)（f(1)=1/2>0，f(x)/x→−1/2）检验 ff″+f′²=0 在 (0,1) 内有两个根 (3∓√3)/12' },
      flags: ['参考解析（Ⅱ）中写"由 f(0)=f(c)=0"复用了（Ⅰ）里表示 f(c)<0 的字母 c，且"存在 x∈(0,c)"应为"存在 ξ₁∈(0,c)"，属笔误；参考解析也未说明 f(0)=0 的来历。本讲解已改用 ξ 表示零点并补出 f(0)=0 的推导，结论一致']
    },

    /* ───────────────────────── 第 19 题 ───────────────────────── */
    {
      id: '2017-19', year: 2017, no: '第19题', type: '解答', score: 10,
      stem: R`设薄片型物体 $S$ 是圆锥面 $z=\sqrt{x^2+y^2}$ 被柱面 $z^2=2x$ 割下的有限部分，其上任一点的密度为 $\mu(x,y,z)=9\sqrt{x^2+y^2+z^2}$. 记圆锥面与柱面的交线为 $C$.<br>(Ⅰ) 求 $C$ 在 $xOy$ 平面上的投影曲线的方程；<br>(Ⅱ) 求 $S$ 的质量 $M$.`,
      options: null,
      answer: R`(Ⅰ) $\begin{cases}x^2+y^2=2x,\\ z=0,\end{cases}$ 即 $\begin{cases}(x-1)^2+y^2=1,\\ z=0;\end{cases}$　(Ⅱ) $M=64$.`,
      figure: null,
      kp: ['mint.surf1', 'vec.surface', 'mint.field'],
      methods: ['消元法求投影曲线', '第一类曲面积分化为二重积分', '极坐标计算二重积分', '华里士公式'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>(Ⅰ) 空间曲线在坐标面上的投影；(Ⅱ) 用第一类曲面积分求曲面薄片的质量。</p>
<p><b>(Ⅰ) 为什么消去 $z$：</b>交线 $C$ 上的点同时满足两个方程。投影到 $xOy$ 面，就是"忽略 $z$ 坐标"。从两个方程中消去 $z$，得到的方程是一个<b>母线平行于 $z$ 轴的柱面</b>（投影柱面），它与平面 $z=0$ 的交线就是投影曲线。所以答案必须是两个方程联立，只写一个是柱面而不是曲线。</p>
<p><b>(Ⅱ) 为什么是曲面积分：</b>薄片的质量 = 密度对面积的"累加"，即 $M=\iint_S\mu\,\mathrm dS$（第一类曲面积分）。计算方法是"一投二代三换"：<b>投影</b>到 $xOy$ 面得区域 $D$；把 $z=z(x,y)$ <b>代入</b>被积函数；把 $\mathrm dS$ <b>换</b>成 $\sqrt{1+z_x^2+z_y^2}\,\mathrm dx\mathrm dy$。</p>
<p><b>本题的"巧"：</b>圆锥面 $z=\sqrt{x^2+y^2}$ 上有 $z^2=x^2+y^2$，所以密度 $9\sqrt{x^2+y^2+z^2}=9\sqrt2\sqrt{x^2+y^2}$；面积元 $\mathrm dS=\sqrt2\,\mathrm dx\mathrm dy$ 是常数倍。积分最终变成 $\iint_D\sqrt{x^2+y^2}\,\mathrm d\sigma$，投影区域又是过原点的圆，极坐标一步到位。</p>`,
      solution: R`<p><b>(Ⅰ) 第一步：消去 $z$。</b>由 $z=\sqrt{x^2+y^2}$ 得 $z^2=x^2+y^2$，与 $z^2=2x$ 比较，得</p>
$$x^2+y^2=2x,\quad\text{即}\quad(x-1)^2+y^2=1.$$
<p><b>(Ⅰ) 第二步：写投影曲线。</b>这是母线平行于 $z$ 轴的圆柱面，与 $xOy$ 面相交，得投影曲线</p>
$$\begin{cases}(x-1)^2+y^2=1,\\ z=0,\end{cases}$$
<p>它是 $xOy$ 面上以 $(1,0)$ 为圆心、半径为 $1$ 的圆。</p>
<p><b>(Ⅱ) 第一步：确定 $S$ 的投影区域 $D$。</b>在锥面上 $z^2=x^2+y^2$。柱面 $z^2=2x$ 把锥面分成两部分：$z^2\leqslant2x$ 即 $x^2+y^2\leqslant2x$ 的部分，投影是圆盘，有界；$x^2+y^2\geqslant2x$ 的部分无界。所以"有限部分" $S$ 的投影是</p>
$$D=\{(x,y)\mid(x-1)^2+y^2\leqslant1\}.$$
<div style="text-align:center"><svg viewBox="0 0 260 200" width="260" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>投影区域 D：圆 (x−1)²+y²≤1，极坐标边界 r=2cosθ</title><circle cx="110" cy="100" r="70" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.6"/><line x1="15" y1="100" x2="245" y2="100" stroke="currentColor" stroke-width="1"/><line x1="40" y1="190" x2="40" y2="10" stroke="currentColor" stroke-width="1"/><line x1="40" y1="100" x2="133.9" y2="34.2" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><circle cx="133.9" cy="34.2" r="2.5" fill="currentColor"/><circle cx="110" cy="100" r="2" fill="currentColor"/><text x="238" y="116" font-size="12" fill="currentColor">x</text><text x="46" y="18" font-size="12" fill="currentColor">y</text><text x="26" y="116" font-size="11" fill="currentColor">O</text><text x="104" y="116" font-size="11" fill="currentColor">1</text><text x="182" y="116" font-size="11" fill="currentColor">2</text><text x="58" y="92" font-size="11" fill="currentColor">θ</text><text x="140" y="30" font-size="11" fill="currentColor">r = 2cosθ</text><text x="140" y="140" font-size="13" fill="currentColor">D</text></svg></div>
<p><b>(Ⅱ) 第二步：写出质量公式。</b></p>
$$M=\iint_S\mu(x,y,z)\,\mathrm dS=\iint_S9\sqrt{x^2+y^2+z^2}\,\mathrm dS.$$
<p><b>(Ⅱ) 第三步：算面积元。</b>$z=\sqrt{x^2+y^2}$，</p>
$$z_x=\frac{x}{\sqrt{x^2+y^2}},\quad z_y=\frac{y}{\sqrt{x^2+y^2}},\quad1+z_x^2+z_y^2=1+\frac{x^2+y^2}{x^2+y^2}=2,$$
<p>所以 $\mathrm dS=\sqrt2\,\mathrm dx\mathrm dy$。（几何意义：锥面与 $xOy$ 面成 $45^\circ$ 角，面积放大 $\frac{1}{\cos45^\circ}=\sqrt2$ 倍。）</p>
<p><b>(Ⅱ) 第四步：代入被积函数。</b>在 $S$ 上 $z^2=x^2+y^2$，所以 $\sqrt{x^2+y^2+z^2}=\sqrt{2(x^2+y^2)}=\sqrt2\sqrt{x^2+y^2}$。于是</p>
$$M=\iint_D9\sqrt2\sqrt{x^2+y^2}\cdot\sqrt2\,\mathrm dx\mathrm dy=18\iint_D\sqrt{x^2+y^2}\,\mathrm dx\mathrm dy.$$
<p><b>(Ⅱ) 第五步：化为极坐标。</b>令 $x=r\cos\theta$，$y=r\sin\theta$，圆 $x^2+y^2=2x$ 变成 $r^2=2r\cos\theta$，即 $r=2\cos\theta$。圆在 $y$ 轴右侧、与 $y$ 轴相切于原点，所以 $\theta\in\left[-\frac\pi2,\frac\pi2\right]$，$0\leqslant r\leqslant2\cos\theta$。被积函数 $\sqrt{x^2+y^2}=r$，面积元 $\mathrm dx\mathrm dy=r\,\mathrm dr\,\mathrm d\theta$：</p>
$$M=18\int_{-\frac\pi2}^{\frac\pi2}\mathrm d\theta\int_0^{2\cos\theta}r\cdot r\,\mathrm dr=18\int_{-\frac\pi2}^{\frac\pi2}\frac{(2\cos\theta)^3}{3}\,\mathrm d\theta=48\int_{-\frac\pi2}^{\frac\pi2}\cos^3\theta\,\mathrm d\theta.$$
<p><b>(Ⅱ) 第六步：算三角积分。</b>$\cos^3\theta$ 是偶函数，由对称性和华里士公式 $\int_0^{\frac\pi2}\cos^3\theta\,\mathrm d\theta=\frac23$：</p>
$$\int_{-\frac\pi2}^{\frac\pi2}\cos^3\theta\,\mathrm d\theta=2\cdot\frac23=\frac43.$$
<p>（也可直接算：$\int\cos^3\theta\,\mathrm d\theta=\int(1-\sin^2\theta)\,\mathrm d\sin\theta=\sin\theta-\frac{\sin^3\theta}{3}$，在 $\left[-\frac\pi2,\frac\pi2\right]$ 上的增量为 $2\left(1-\frac13\right)=\frac43$。）</p>
<p><b>(Ⅱ) 第七步：得结果。</b></p>
$$M=48\cdot\frac43=64.$$`,
      pitfalls: R`<ul><li><b>投影曲线只写一个方程：</b>$x^2+y^2=2x$ 在空间中是圆柱面，必须与 $z=0$ 联立才是曲线。</li><li><b>忘了把锥面方程代入被积函数：</b>曲面积分的被积函数定义在曲面上，$z$ 必须用 $z=\sqrt{x^2+y^2}$ 代换。若保留 $z$ 当独立变量，就无法在 $D$ 上积分。</li><li><b>漏掉 $\mathrm dS$ 的 $\sqrt2$：</b>把 $\mathrm dS$ 直接当 $\mathrm dx\mathrm dy$，结果少一半（得 $32$）。</li><li><b>极坐标的角度范围写成 $[0,2\pi]$：</b>圆 $r=2\cos\theta$ 只在 $\cos\theta\geqslant0$ 的半平面内，$\theta\in\left[-\frac\pi2,\frac\pi2\right]$。</li><li><b>极坐标漏了 $r$：</b>$\mathrm dx\mathrm dy=r\,\mathrm dr\,\mathrm d\theta$，被积函数 $r$ 与雅可比因子 $r$ 相乘得 $r^2$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>第一类曲面积分"一投二代三换"：投影得 $D$，代 $z=z(x,y)$，换 $\mathrm dS=\sqrt{1+z_x^2+z_y^2}\,\mathrm d\sigma$。锥面 $z=\sqrt{x^2+y^2}$ 的面积元恒为 $\sqrt2\,\mathrm d\sigma$；投影曲线 = 消元得到的投影柱面 ∩ 坐标面。</p>
<p><b>看到…想到…：</b>看到"曲面薄片的质量"，想到 $\iint_S\mu\,\mathrm dS$；看到锥面，想到 $z^2=x^2+y^2$ 可用来化简被积函数、$\mathrm dS=\sqrt2\,\mathrm d\sigma$；看到区域边界 $x^2+y^2=2x$，想到极坐标 $r=2\cos\theta$，$\theta\in\left[-\frac\pi2,\frac\pi2\right]$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 1+z_x²+z_y² 化简为 2；integrate(18*r**2,(r,0,2cosθ),(θ,−π/2,π/2)) = 64；另用锥面参数化 (r cosθ, r sinθ, r)、dS=√2·r dr dθ 直接积分也得 64' },
      flags: []
    }
  ];
});
