// 2025 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 12 题：选择 1、2、3、4；填空 11、12、13、14；解答 17、18、19、20
// （第 5–7 题为线性代数，第 8–10、16、22 题为概率统计，第 15、21 题为线性代数，均不收录）
registerYear(2025, function (R) {
  return [
    /* ───────────────────────── 第 1 题 ───────────────────────── */
    {
      id: '2025-1', year: 2025, no: '第1题', type: '选择', score: 5,
      stem: R`已知函数 $f(x)=\displaystyle\int_0^x\mathrm e^{t^2}\sin t\,\mathrm dt$，$g(x)=\displaystyle\int_0^x\mathrm e^{t^2}\,\mathrm dt\cdot\sin^2x$，则`,
      options: [
        R`$x=0$ 是 $f(x)$ 的极值点，也是 $g(x)$ 的极值点`,
        R`$x=0$ 是 $f(x)$ 的极值点，$(0,0)$ 是曲线 $y=g(x)$ 的拐点`,
        R`$x=0$ 是 $f(x)$ 的极值点，$(0,0)$ 是曲线 $y=f(x)$ 的拐点`,
        R`$(0,0)$ 是曲线 $y=f(x)$ 的拐点，$(0,0)$ 也是曲线 $y=g(x)$ 的拐点`
      ],
      answer: 'B',
      figure: null,
      kp: ['diff.mono', 'diff.convex', 'int.ftc'],
      methods: ['变限积分求导', '极值的第二充分条件', '二阶导数变号判拐点', '泰勒展开看局部阶数（偶极奇拐）'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>判断一个点是不是<b>极值点</b>、是不是<b>拐点</b>。两个函数都由变限积分构成，所以求导要用"变限积分求导公式"。</p>
<p><b>从第一性原理想：</b>一个点是极值点还是拐点，只取决于函数在这一点附近"长什么样"。而函数在 $0$ 附近的样子，由它的泰勒展开的<b>第一个非零项</b>决定：</p>
<ul><li>若 $h(x)-h(0)\approx c\,x^2$（像抛物线），那么 $0$ 两侧 $h$ 都比 $h(0)$ 大（或都小），是<b>极值点</b>，曲线在 $0$ 附近同一个弯向，<b>不是拐点</b>；</li><li>若 $h(x)-h(0)\approx c\,x^3$（像立方曲线），那么 $0$ 左右两侧 $h-h(0)$ 异号，<b>不是极值点</b>，而弯曲方向在 $0$ 处翻转，<b>是拐点</b>。</li></ul>
<p>这就是常说的"<b>偶极奇拐</b>"：首项次数为偶数 → 极值；为奇数（且 $\ge3$）→ 拐点。</p>
<p><b>本题的信号：</b>$f$ 的被积函数 $\mathrm e^{t^2}\sin t\approx t$，积分一次升一阶，$f(x)\approx\frac{x^2}{2}$，偶次；$g$ 是 $\int_0^x\mathrm e^{t^2}\mathrm dt\approx x$ 乘 $\sin^2x\approx x^2$，$g(x)\approx x^3$，奇次。答案几乎一眼可见。下面再用导数的标准判别法把它严格写出来。</p>`,
      solution: R`<p><b>第一步：研究 $f$ 在 $x=0$ 处。</b>由变限积分求导公式（被积函数连续，上限为 $x$）：</p>
$$f'(x)=\mathrm e^{x^2}\sin x,\qquad f''(x)=2x\,\mathrm e^{x^2}\sin x+\mathrm e^{x^2}\cos x.$$
<p>于是 $f'(0)=0$，$f''(0)=0+1=1\gt0$。由<b>极值的第二充分条件</b>（驻点处二阶导数大于零则为极小值点），$x=0$ 是 $f(x)$ 的极小值点。</p>
<p>再看拐点：$f''(x)$ 连续且 $f''(0)=1\gt0$，由连续函数的保号性，在 $0$ 的某个邻域内 $f''(x)\gt0$，即曲线在 $0$ 的左右两侧都是凹（下凸）的，凹凸性没有改变，所以 $(0,0)$ <b>不是</b>曲线 $y=f(x)$ 的拐点。这一下就排除了选项 C 和 D。</p>
<p><b>第二步：$g$ 在 $x=0$ 处不是极值点。</b>记 $F(x)=\int_0^x\mathrm e^{t^2}\,\mathrm dt$，则 $g(x)=F(x)\sin^2x$，$g(0)=0$。</p>
<p>因为被积函数 $\mathrm e^{t^2}\gt0$：当 $x\gt0$ 时 $F(x)\gt0$；当 $x\lt0$ 时 $F(x)=-\int_x^0\mathrm e^{t^2}\mathrm dt\lt0$。又 $0\lt|x|\lt\pi$ 时 $\sin^2x\gt0$。所以在 $0$ 附近：</p>
$$x\lt0\Rightarrow g(x)\lt0=g(0),\qquad x\gt0\Rightarrow g(x)\gt0=g(0).$$
<p>$g(0)$ 既不是附近的最大值也不是最小值，$x=0$ <b>不是</b> $g$ 的极值点。选项 A 被排除。</p>
<p><b>第三步：$(0,0)$ 是曲线 $y=g(x)$ 的拐点。</b>用乘积法则与变限积分求导（$F'(x)=\mathrm e^{x^2}$，$(\sin^2x)'=\sin2x$）：</p>
$$g'(x)=\mathrm e^{x^2}\sin^2x+F(x)\sin2x,$$
$$g''(x)=2x\,\mathrm e^{x^2}\sin^2x+\mathrm e^{x^2}\sin2x+\mathrm e^{x^2}\sin2x+2F(x)\cos2x=2x\,\mathrm e^{x^2}\sin^2x+2\mathrm e^{x^2}\sin2x+2F(x)\cos2x.$$
<p>$g''(0)=0$。但"二阶导数为零"只是拐点的必要条件（反例 $y=x^4$），还要看 $g''$ 在 $0$ 两侧是否变号。计算 $\lim\limits_{x\to0}\dfrac{g''(x)}{x}$：</p>
<ul><li>$\dfrac{2x\,\mathrm e^{x^2}\sin^2x}{x}=2\mathrm e^{x^2}\sin^2x\to0$；</li><li>$\dfrac{2\mathrm e^{x^2}\sin2x}{x}\to2\cdot1\cdot2=4$（因为 $\sin2x\sim2x$）；</li><li>$\dfrac{2F(x)\cos2x}{x}\to2\cdot1\cdot1=2$（因为 $\lim\limits_{x\to0}\frac{F(x)}{x}=F'(0)=\mathrm e^0=1$）。</li></ul>
<p>所以 $\lim\limits_{x\to0}\dfrac{g''(x)}{x}=6\gt0$。由极限的保号性，在 $0$ 的某个去心邻域内 $\dfrac{g''(x)}{x}\gt0$，即 $g''(x)$ 与 $x$ 同号：左侧 $g''\lt0$（凸），右侧 $g''\gt0$（凹）。凹凸性在 $x=0$ 处改变，且 $g$ 在 $0$ 处连续，所以 $(0,0)$ 是曲线 $y=g(x)$ 的拐点。（等价地，可算出 $g'''(0)=6\ne0$，由"$g''(0)=0,\ g'''(0)\ne0$ 则为拐点"的充分条件也可得出。）</p>
<p><b>第四步：逐项判断。</b></p>
<ul><li>A 错：$x=0$ 不是 $g$ 的极值点（第二步）。</li><li><b>B 对</b>：$x=0$ 是 $f$ 的极小值点（第一步），$(0,0)$ 是 $y=g(x)$ 的拐点（第三步）。</li><li>C 错：$f''$ 在 $0$ 附近恒正，$(0,0)$ 不是 $y=f(x)$ 的拐点。</li><li>D 错：前半句同 C 错。</li></ul>
<p>答案选 <b>B</b>。</p>`,
      pitfalls: R`<ul><li><b>只看 $g''(0)=0$ 就断言是拐点</b>：$g''(x_0)=0$ 只是必要条件，$y=x^4$ 在 $0$ 处二阶导数为零却不是拐点。必须验证 $g''$ 变号，或 $g'''(x_0)\ne0$。</li><li><b>对 $g$ 求导漏项</b>：$g$ 是"变限积分 × 普通函数"，必须用乘积法则，两项都要求导；二阶导数中 $\mathrm e^{x^2}\sin2x$ 会出现两次，很多人只写一次。</li><li><b>混淆"极值点"与"拐点"的写法</b>：极值点是横坐标 $x_0$，拐点是曲线上的点 $(x_0,f(x_0))$。本题选项写法都是规范的，但自己作答时要注意。</li><li><b>以为驻点就是极值点</b>：$g'(0)=0$，但 $0$ 不是 $g$ 的极值点，和 $y=x^3$ 在原点的情况一样。</li></ul>`,
      summary: R`<p><b>判别工具箱：</b></p>
<ul><li>极值：第一充分条件（$f'$ 在 $x_0$ 两侧变号）；第二充分条件（$f'(x_0)=0,\ f''(x_0)\ne0$）；推广：若 $f'(x_0)=\cdots=f^{(k-1)}(x_0)=0,\ f^{(k)}(x_0)\ne0$，$k$ 为偶数则为极值点，$k$ 为奇数则不是。</li><li>拐点：$f''$ 在 $x_0$ 两侧变号；或 $f''(x_0)=0,\ f'''(x_0)\ne0$。</li><li>快速判定：把 $h(x)-h(x_0)$ 展开到第一个非零项 $c(x-x_0)^k$，"<b>偶极奇拐</b>"（$k$ 偶为极值点；$k\ge3$ 且为奇数时为拐点）。</li></ul>
<p><b>题型识别：</b>看到"变限积分在积分下限处的极值、拐点" → 先估被积函数在该点附近的阶，<b>积分一次升一阶</b>，乘上其他因子再相加阶数，选择题可以直接秒判；解答题再用导数判别法规范书写。</p>`,
      alt: R`<p><b>泰勒展开法（最快）：</b>$\mathrm e^{t^2}\sin t=t+\frac56t^3+o(t^3)$，积分得 $f(x)=\frac{x^2}{2}+o(x^2)$，首项为 $2$ 次 → $x=0$ 是极小值点，不是拐点。</p>
<p>$F(x)=\int_0^x\mathrm e^{t^2}\mathrm dt=x+\frac{x^3}{3}+o(x^3)$，$\sin^2x=x^2+o(x^2)$，相乘得 $g(x)=x^3+o(x^3)$，首项为 $3$ 次 → $(0,0)$ 是拐点，$0$ 不是极值点。由"偶极奇拐"立得 B。</p>`,
      verify: { by: 'sympy', ok: true, note: "sympy：f'(0)=0，f''(0)=1；g 在 0 处展开为 x^3+x^7/30+…，g''(0)=0，g''(x)=6x+O(x^5)，g'''(0)=6；f 展开为 x^2/2+5x^4/24+…。结论与原卷答案 B 一致" },
      flags: ['OCR 中的乘号 \\bullet 改为 \\cdot']
    },

    /* ───────────────────────── 第 2 题 ───────────────────────── */
    {
      id: '2025-2', year: 2025, no: '第2题', type: '选择', score: 5,
      stem: R`已知级数：① $\displaystyle\sum_{n=1}^{\infty}\sin\frac{n^3\pi}{n^2+1}$；② $\displaystyle\sum_{n=1}^{\infty}(-1)^n\left(\frac{1}{\sqrt[3]{n^2}}-\tan\frac{1}{\sqrt[3]{n^2}}\right)$，则`,
      options: [
        R`① 与 ② 均条件收敛`,
        R`① 条件收敛，② 绝对收敛`,
        R`① 绝对收敛，② 条件收敛`,
        R`① 与 ② 均绝对收敛`
      ],
      answer: 'B',
      figure: null,
      kp: ['series.alt', 'series.positive', 'diff.taylor'],
      methods: ['诱导公式剥离整数倍 π', '莱布尼茨判别法', '比较判别法的极限形式', '泰勒展开定阶'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>任意项级数的<b>绝对收敛与条件收敛</b>。标准流程是：先取绝对值，用正项级数的方法判断是否绝对收敛；若不绝对收敛，再用莱布尼茨判别法看是否条件收敛。</p>
<p><b>级数 ① 的突破口：</b>表面上看没有 $(-1)^n$，角度 $\frac{n^3\pi}{n^2+1}\to\infty$，似乎在乱振荡。但正弦函数只关心角度"除去 $\pi$ 的整数倍之后剩下多少"。用多项式除法：$\frac{n^3}{n^2+1}=n-\frac{n}{n^2+1}$，角度 $=n\pi-$（一个很小的正数）。$\sin(n\pi-\theta)$ 的符号随 $n$ 交替——这是一个<b>伪装的交错级数</b>。剥掉 $n\pi$ 后，剩下的 $\theta_n\approx\frac{\pi}{n}$，与调和级数同阶，所以不绝对收敛，但可以用莱布尼茨。</p>
<p><b>级数 ② 的突破口：</b>它显然是交错级数，但千万不要急着用莱布尼茨——先看绝对值。括号里是 $x-\tan x$ 的结构（$x=n^{-2/3}$），由泰勒公式它是 $x$ 的<b>三阶</b>无穷小，$x^3=n^{-2}$，于是通项绝对值 $\sim\frac{1}{3n^2}$，$p=2\gt1$，绝对收敛。</p>`,
      solution: R`<p><b>第一步：化简级数 ① 的通项。</b>做多项式除法：$n^3=n(n^2+1)-n$，所以</p>
$$\frac{n^3\pi}{n^2+1}=n\pi-\frac{n\pi}{n^2+1}.$$
<p>记 $\theta_n=\dfrac{n\pi}{n^2+1}$。由 $\sin(n\pi-\theta)=\sin n\pi\cos\theta-\cos n\pi\sin\theta=-(-1)^n\sin\theta$，得</p>
$$\sin\frac{n^3\pi}{n^2+1}=(-1)^{n+1}\sin\theta_n.$$
<p>由 $n^2+1\ge2n$ 知 $0\lt\frac{n}{n^2+1}\le\frac12$，即 $\theta_n\in\left(0,\frac{\pi}{2}\right]$，所以 $\sin\theta_n\gt0$。级数 ① 就是交错级数 $\sum(-1)^{n+1}\sin\theta_n$。</p>
<p><b>第二步：① 不绝对收敛。</b>$|u_n|=\sin\theta_n$，且 $\theta_n\to0$，故 $\sin\theta_n\sim\theta_n=\dfrac{n\pi}{n^2+1}$。比较判别法的极限形式：</p>
$$\lim_{n\to\infty}\frac{\sin\theta_n}{1/n}=\lim_{n\to\infty}\frac{n^2\pi}{n^2+1}=\pi\in(0,+\infty),$$
<p>而 $\sum\frac1n$ 发散，所以 $\sum|u_n|$ 发散，① 不绝对收敛。</p>
<p><b>第三步：① 收敛（莱布尼茨判别法）。</b>需要验证 $a_n=\sin\theta_n$ 单调递减且趋于 $0$。</p>
<ul><li>$a_n\to\sin0=0$。</li><li>单调性：令 $h(x)=\dfrac{x}{x^2+1}$，$h'(x)=\dfrac{1-x^2}{(x^2+1)^2}\lt0$（$x\gt1$），所以 $\theta_n=\pi h(n)$ 关于 $n$ 严格递减；又 $\theta_n\in(0,\frac\pi2]$，$\sin$ 在 $[0,\frac\pi2]$ 上严格递增，故 $a_n=\sin\theta_n$ 严格递减。</li></ul>
<p>所以 ① 收敛。结合第二步，① <b>条件收敛</b>。</p>
<p><b>第四步：级数 ② 绝对收敛。</b>令 $x_n=n^{-2/3}\to0^+$。由 $\tan x=x+\dfrac{x^3}{3}+o(x^3)$ 得</p>
$$x-\tan x=-\frac{x^3}{3}+o(x^3),\qquad\left|x_n-\tan x_n\right|\sim\frac{x_n^3}{3}=\frac{1}{3n^2}.$$
<p>$\lim\limits_{n\to\infty}\dfrac{|x_n-\tan x_n|}{1/n^2}=\dfrac13$，而 $\sum\frac{1}{n^2}$ 收敛（$p=2\gt1$），所以 $\sum|u_n|$ 收敛，② <b>绝对收敛</b>。</p>
<p><b>第五步：逐项判断。</b></p>
<ul><li>A 错：② 是绝对收敛，不是条件收敛。（"条件收敛"的定义是收敛但不绝对收敛，两者互斥。）</li><li><b>B 对</b>。</li><li>C 错：① 不绝对收敛，② 也不是条件收敛。</li><li>D 错：① 的绝对值级数与调和级数同阶，发散。</li></ul>
<p>答案选 <b>B</b>。</p>`,
      pitfalls: R`<ul><li><b>把 ① 误判为发散</b>：理由是"角度趋于无穷，正弦值不趋于零"。实际上角度非常接近 $n\pi$，正弦值趋于 $0$。判断三角函数的值，要先把整数倍的 $\pi$ 剥离出来。</li><li><b>诱导公式符号出错</b>：$\sin(n\pi-\theta)=(-1)^{n+1}\sin\theta$，$\sin(n\pi+\theta)=(-1)^n\sin\theta$。不放心就代 $n=1$ 检验：$\sin(\pi-\theta)=\sin\theta$。</li><li><b>见到 $(-1)^n$ 就直接用莱布尼茨</b>：对 ② 这样做只能得到"收敛"，得不到"绝对收敛"，从而误选 A。永远先检验绝对收敛。</li><li><b>$x-\tan x$ 定阶错误</b>：以为 $\tan x\sim x$ 就有 $x-\tan x\sim0$ 或 $\sim x$。等价无穷小不能用于加减中的抵消，必须用泰勒公式展开到不抵消的那一项。</li><li><b>莱布尼茨条件不验单调</b>：单调递减是判别法的条件之一，解答题中不能省。</li></ul>`,
      summary: R`<p><b>任意项级数判敛的固定流程：</b>① 通项是否趋于 $0$（不趋于 $0$ 直接发散）；② 取绝对值，用"等价无穷小 / 泰勒定阶 + $p$ 级数比较"判断是否绝对收敛；③ 若不绝对收敛，用莱布尼茨判别法判断是否条件收敛。</p>
<p><b>题型识别：</b></p>
<ul><li>看到 $\sin\left(\pi\cdot\frac{\text{多项式}}{\text{多项式}}\right)$、$\cos(\pi\sqrt{n^2+1})$ 之类 → 把角度写成"$n\pi$ + 小量"，剥离出 $(-1)^n$，得到伪装的交错级数。</li><li>看到"差"结构 $x-\sin x$、$\tan x-x$、$x-\ln(1+x)$、$\mathrm e^x-1-x$ → 立刻想到泰勒定阶。常用：$x-\sin x\sim\frac{x^3}{6}$，$\tan x-x\sim\frac{x^3}{3}$，$x-\arctan x\sim\frac{x^3}{3}$，$x-\ln(1+x)\sim\frac{x^2}{2}$，$\mathrm e^x-1-x\sim\frac{x^2}{2}$。</li><li>定阶之后，通项 $\sim\frac{c}{n^p}$：$p\gt1$ 绝对收敛；$0\lt p\le1$ 且为交错单调型则条件收敛。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：验证恒等式 n^3/(n^2+1)=n-n/(n^2+1)；lim sin(nπ/(n^2+1))/(1/n)=π；s-tan s=-s^3/3+O(s^5)；lim |通项②|/(1/n^2)=1/3；① 前 2000、2001 项部分和分别约 0.4903、0.4919，数值上收敛。与原卷答案 B 一致' },
      flags: ['OCR 题干末尾多出的残片 "1/∛(n²)，则，" 已删除']
    },

    /* ───────────────────────── 第 3 题 ───────────────────────── */
    {
      id: '2025-3', year: 2025, no: '第3题', type: '选择', score: 5,
      stem: R`设函数 $f(x)$ 在区间 $(0,+\infty)$ 上可导，则`,
      options: [
        R`当 $\lim\limits_{x\to+\infty}f(x)$ 存在时，$\lim\limits_{x\to+\infty}f'(x)$ 存在`,
        R`当 $\lim\limits_{x\to+\infty}f'(x)$ 存在时，$\lim\limits_{x\to+\infty}f(x)$ 存在`,
        R`当 $\lim\limits_{x\to+\infty}\dfrac{\int_0^xf(t)\,\mathrm dt}{x}$ 存在时，$\lim\limits_{x\to+\infty}f(x)$ 存在`,
        R`当 $\lim\limits_{x\to+\infty}f(x)$ 存在时，$\lim\limits_{x\to+\infty}\dfrac{\int_0^xf(t)\,\mathrm dt}{x}$ 存在`
      ],
      answer: 'D',
      figure: null,
      kp: ['lim.funcdef', 'diff.lhopital', 'int.ftc'],
      methods: ['构造反例', '洛必达法则（分母趋于无穷的情形）', 'ε-X 分段估计'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>"函数的极限""导数的极限""积分平均值的极限"三者之间的推出关系。这种抽象选择题的策略是：<b>觉得错的就找反例，觉得对的就给证明</b>。</p>
<p><b>先用直观判断每个选项：</b></p>
<ul><li>A：函数有极限，导数就有极限吗？不一定。函数可以一边"振幅越来越小"，一边"振动越来越快"。振幅趋于 $0$，函数值趋于 $0$；但斜率大约是"振幅 × 频率"，频率增长得足够快，斜率就不会消失。</li><li>B：导数趋于 $0$，函数就有极限吗？不一定。$\sqrt x$ 越来越平缓（导数趋于 $0$），但一直在涨，涨到无穷。</li><li>C：平均值有极限，函数就有极限吗？不一定。$\cos x$ 在 $\pm1$ 之间永远振荡，但它的"长期平均"是 $0$。</li><li>D：函数最终都靠近 $A$，那么"从 $0$ 到 $x$ 的平均值"也应该靠近 $A$——前面一段有限区间的贡献会被越来越长的后段"稀释"掉。这是对的。</li></ul>
<p>D 的证明：$\dfrac{\int_0^xf(t)\mathrm dt}{x}$ 的分母趋于 $+\infty$，正是洛必达法则"$\frac{*}{\infty}$ 型"的标准场景。</p>`,
      solution: R`<p><b>第一步：A 错。</b>取 $f(x)=\dfrac{\sin x^2}{x}$，它在 $(0,+\infty)$ 上可导。因为 $\left|f(x)\right|\le\dfrac1x\to0$，所以 $\lim\limits_{x\to+\infty}f(x)=0$ 存在。但</p>
$$f'(x)=\frac{2x^2\cos x^2-\sin x^2}{x^2}=2\cos x^2-\frac{\sin x^2}{x^2}.$$
<p>第二项趋于 $0$，第一项 $2\cos x^2$ 没有极限：取 $x_k=\sqrt{2k\pi}$，$f'(x_k)\to2$；取 $y_k=\sqrt{(2k+1)\pi}$，$f'(y_k)\to-2$。两个子列极限不同，由海涅定理，$\lim\limits_{x\to+\infty}f'(x)$ 不存在。</p>
<p><b>第二步：B 错。</b>取 $f(x)=\sqrt x$，$f'(x)=\dfrac{1}{2\sqrt x}\to0$，但 $f(x)\to+\infty$，极限不存在。</p>
<p><b>第三步：C 错。</b>取 $f(x)=\cos x$，$\int_0^x\cos t\,\mathrm dt=\sin x$，于是 $\dfrac{\sin x}{x}\to0$ 存在（有界量除以无穷大），但 $\lim\limits_{x\to+\infty}\cos x$ 不存在。</p>
<p><b>第四步：D 对，给出证明。</b>设 $\lim\limits_{x\to+\infty}f(x)=A$。记 $\Phi(x)=\int_0^xf(t)\,\mathrm dt$（选项中默认这个积分有意义）。$f$ 可导，从而连续，由微积分基本定理 $\Phi'(x)=f(x)$。分母 $x\to+\infty$，且</p>
$$\lim_{x\to+\infty}\frac{\Phi'(x)}{(x)'}=\lim_{x\to+\infty}\frac{f(x)}{1}=A$$
<p>存在，由洛必达法则（只要求<b>分母</b>趋于无穷，分子趋不趋于无穷都可以）得</p>
$$\lim_{x\to+\infty}\frac{\int_0^xf(t)\,\mathrm dt}{x}=A.$$
<p>答案选 <b>D</b>。</p>
<p><b>补充：</b>若把题目中的区间理解为 $[0,+\infty)$，A、B 的反例可分别换成 $\dfrac{\sin x^2}{1+x}$ 与 $\ln(1+x)$，结论不变。</p>`,
      pitfalls: R`<ul><li><b>误以为"函数收敛 ⇒ 导数趋于 0"</b>。正确的结论是：若 $\lim f(x)$ 存在<b>且</b> $\lim f'(x)$ 也存在，则 $\lim f'(x)=0$（用拉格朗日中值定理 $f(x+1)-f(x)=f'(\xi)$ 即证）。A 错就错在导数的极限可能根本不存在。</li><li><b>误以为洛必达的"$\frac\infty\infty$ 型"要求分子分母都趋于无穷</b>。实际上只要分母趋于无穷就能用，D 中分子 $\int_0^xf$ 未必趋于无穷（例如 $A=0$ 时）。</li><li><b>用洛必达"反推"</b>：洛必达只能从"导数之比有极限"推出"原比有极限"，不能反过来。C 恰好就是反推，所以错。</li><li><b>以为导数趋于 0 函数就有界</b>：$\sqrt x$、$\ln x$ 都是反例。</li></ul>`,
      summary: R`<p><b>方法要点：</b>抽象命题的真假判断——错的找反例，对的给证明。</p>
<p><b>常用反例库：</b></p>
<ul><li>"振幅衰减、频率加快"：$\dfrac{\sin x^2}{x}$（函数收敛，导数不收敛）。</li><li>"越来越平但无界"：$\sqrt x$、$\ln x$（导数趋于 0，函数趋于无穷）。</li><li>"振荡但平均稳定"：$\sin x$、$\cos x$（积分平均收敛，函数不收敛）。</li></ul>
<p><b>常用正确结论：</b>$\lim f=A\Rightarrow\lim\frac1x\int_0^xf=A$；$\lim f$ 与 $\lim f'$ 都存在 $\Rightarrow\lim f'=0$；$\lim f'=A\gt0\Rightarrow f\to+\infty$。</p>
<p><b>题型识别：</b>看到 $\dfrac{\int_0^xf(t)\mathrm dt}{x}$ 的极限 → 想到洛必达（分母趋于无穷型），或"拆成前一段 + 后一段"的 ε 估计。</p>`,
      alt: R`<p><b>D 的 ε-X 证明（不用洛必达）：</b>任给 $\varepsilon\gt0$，存在 $X\gt0$，当 $t\gt X$ 时 $|f(t)-A|\lt\varepsilon$。对 $x\gt X$，</p>
$$\left|\frac{\Phi(x)}{x}-A\right|=\frac1x\left|\int_0^x\big(f(t)-A\big)\mathrm dt\right|\le\frac{M}{x}+\frac1x\int_X^x|f(t)-A|\,\mathrm dt\lt\frac Mx+\varepsilon,$$
<p>其中 $M=\left|\int_0^X(f(t)-A)\,\mathrm dt\right|$ 是与 $x$ 无关的常数。再取 $X_1\gt X$ 使 $x\gt X_1$ 时 $\frac Mx\lt\varepsilon$，就有 $\left|\frac{\Phi(x)}{x}-A\right|\lt2\varepsilon$。这正是"前段被稀释、后段被控制"的直观。</p>`,
      verify: { by: 'mixed', ok: true, note: "sympy：(sin x²/x)' = 2cos x² − sin x²/x²，lim sin x²/x=0；sin x/x→0。反例与 D 的证明人工逐条核对，与原卷答案 D 一致" },
      flags: ['OCR 中选项 C 的公式重复、残缺，已按上下文复原', 'OCR 题干区间为 (0,+∞)。选项 D 中 ∫_0^x f(t)dt 需要 f 在 0 附近可积，若为开区间严格来说可能无意义（如 f=1/x），原卷可能是 [0,+∞)，未能核实，保留 OCR 写法并在解答中注明"默认积分有意义"']
    },

    /* ───────────────────────── 第 4 题 ───────────────────────── */
    {
      id: '2025-4', year: 2025, no: '第4题', type: '选择', score: 5,
      stem: R`设函数 $f(x,y)$ 连续，则 $\displaystyle\int_{-2}^{2}\mathrm dx\int_{4-x^2}^{4}f(x,y)\,\mathrm dy=$`,
      options: [
        R`$\displaystyle\int_0^4\left[\int_{-2}^{-\sqrt{4-y}}f(x,y)\,\mathrm dx+\int_{\sqrt{4-y}}^{2}f(x,y)\,\mathrm dx\right]\mathrm dy$`,
        R`$\displaystyle\int_0^4\left[\int_{-2}^{\sqrt{4-y}}f(x,y)\,\mathrm dx+\int_{\sqrt{4-y}}^{2}f(x,y)\,\mathrm dx\right]\mathrm dy$`,
        R`$\displaystyle\int_0^4\left[\int_{-2}^{-\sqrt{4-y}}f(x,y)\,\mathrm dx+\int_{2}^{\sqrt{4-y}}f(x,y)\,\mathrm dx\right]\mathrm dy$`,
        R`$\displaystyle2\int_0^4\mathrm dy\int_{\sqrt{4-y}}^{2}f(x,y)\,\mathrm dx$`
      ],
      answer: 'A',
      figure: null,
      kp: ['mint.double'],
      methods: ['由积分限还原积分区域', '交换积分次序（穿线法）', '特殊函数检验选项'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二重积分<b>交换积分次序</b>。</p>
<p><b>本质是什么：</b>累次积分只是同一个区域 $D$ 的两种"切片"方式。原积分是"竖着切"：先固定 $x$，让 $y$ 从下边界走到上边界。交换次序就是改成"横着切"：先固定 $y$，看水平线与区域相交成哪几段。所以永远是三步：<b>由积分限写出区域 → 画图 → 换一个方向重新描述区域</b>。</p>
<p><b>本题的特点：</b>区域在抛物线 $y=4-x^2$ <b>上方</b>、直线 $y=4$ 下方，抛物线顶点正好顶到 $y=4$，把区域劈成左右两块"弯角"。横着切时每条水平线都被中间挖空，与区域交成<b>两段</b>，所以换序后必须写成两个内层积分之和。</p>`,
      solution: R`<p><b>第一步：写出积分区域。</b>由原积分的上下限，</p>
$$D=\{(x,y)\mid-2\le x\le2,\ 4-x^2\le y\le4\}.$$
<p>下边界是抛物线 $y=4-x^2$（开口向下，顶点 $(0,4)$，与 $x$ 轴交于 $(\pm2,0)$），上边界是直线 $y=4$。区域是夹在两者之间的左右两块（下图阴影 $D_1$、$D_2$），两块只在顶点 $(0,4)$ 处相接。</p>
<div style="text-align:center"><svg viewBox="0 0 320 200" width="320" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>积分区域：抛物线 y=4−x² 与直线 y=4 之间、−2≤x≤2 的左右两块，以及一条水平穿线</title><polygon points="80,170 80,50 160,50 150,51.9 140,57.5 130,66.9 120,80 110,96.9 100,117.5 90,141.9" fill="currentColor" fill-opacity="0.15" stroke="none"/><polygon points="240,170 240,50 160,50 170,51.9 180,57.5 190,66.9 200,80 210,96.9 220,117.5 230,141.9" fill="currentColor" fill-opacity="0.15" stroke="none"/><line x1="20" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1"/><line x1="160" y1="190" x2="160" y2="18" stroke="currentColor" stroke-width="1"/><polyline points="80,170 90,141.9 100,117.5 110,96.9 120,80 130,66.9 140,57.5 150,51.9 160,50 170,51.9 180,57.5 190,66.9 200,80 210,96.9 220,117.5 230,141.9 240,170" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="80" y1="50" x2="240" y2="50" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="50" x2="80" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="240" y1="50" x2="240" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="80" y1="95" x2="111" y2="95" stroke="currentColor" stroke-width="3"/><line x1="209" y1="95" x2="240" y2="95" stroke="currentColor" stroke-width="3"/><line x1="111" y1="95" x2="209" y2="95" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/><circle cx="111" cy="95" r="2.5" fill="currentColor"/><circle cx="209" cy="95" r="2.5" fill="currentColor"/><text x="292" y="186" font-size="12" fill="currentColor">x</text><text x="166" y="26" font-size="12" fill="currentColor">y</text><text x="70" y="186" font-size="11" fill="currentColor">−2</text><text x="236" y="186" font-size="11" fill="currentColor">2</text><text x="148" y="186" font-size="11" fill="currentColor">O</text><text x="164" y="44" font-size="11" fill="currentColor">4</text><text x="86" y="72" font-size="12" fill="currentColor">D₁</text><text x="222" y="72" font-size="12" fill="currentColor">D₂</text><text x="246" y="128" font-size="11" fill="currentColor">y=4−x²</text><text x="114" y="110" font-size="10" fill="currentColor">x=−√(4−y)</text><text x="207" y="110" font-size="10" fill="currentColor" text-anchor="end">x=√(4−y)</text></svg></div>
<p><b>第二步：确定 $y$ 的范围。</b>在 $D$ 上，$y$ 的最小值是下边界 $4-x^2$ 在 $x=\pm2$ 处取到的 $0$，最大值是 $4$，所以 $0\le y\le4$。</p>
<p><b>第三步：固定 $y$，求 $x$ 的范围（穿线）。</b>对固定的 $y\in[0,4]$，条件 $4-x^2\le y$ 等价于</p>
$$x^2\ge4-y\iff x\le-\sqrt{4-y}\ \ \text{或}\ \ x\ge\sqrt{4-y}.$$
<p>再结合 $-2\le x\le2$，得 $x\in\left[-2,-\sqrt{4-y}\right]\cup\left[\sqrt{4-y},2\right]$。图中粗线就是这条水平线落在区域内的两段，中间虚线部分（抛物线下方）不属于 $D$。</p>
<p><b>第四步：写出换序后的积分。</b></p>
$$\int_{-2}^{2}\mathrm dx\int_{4-x^2}^{4}f(x,y)\,\mathrm dy=\int_0^4\left[\int_{-2}^{-\sqrt{4-y}}f(x,y)\,\mathrm dx+\int_{\sqrt{4-y}}^{2}f(x,y)\,\mathrm dx\right]\mathrm dy,$$
<p>正是选项 A。</p>
<p><b>第五步：说明其余选项为什么错（用特殊函数检验）。</b>原积分在 $f\equiv1$ 时等于区域面积 $\int_{-2}^2\big[4-(4-x^2)\big]\mathrm dx=\int_{-2}^2x^2\,\mathrm dx=\frac{16}{3}$。</p>
<ul><li>B：第一个内积分从 $-2$ 积到 $+\sqrt{4-y}$，把中间不属于 $D$ 的部分也包含进去了，还与第二段重叠。取 $f\equiv1$：$\int_0^4\big[(\sqrt{4-y}+2)+(2-\sqrt{4-y})\big]\mathrm dy=16\ne\frac{16}{3}$。</li><li>C：第二个内积分下限 $2$ 大于上限 $\sqrt{4-y}$，等于 $-\int_{\sqrt{4-y}}^2f\,\mathrm dx$，把右半块的贡献变成了负的。取 $f\equiv1$ 得 $0\ne\frac{16}{3}$。</li><li>D：用对称性"乘 $2$"需要区域关于 $y$ 轴对称<b>并且</b> $f$ 关于 $x$ 是偶函数，题目只说 $f$ 连续。取 $f=x$：原积分 $=\int_{-2}^2x\cdot x^2\,\mathrm dx=0$（奇函数），而 D 给出 $2\int_0^4\frac{4-(4-y)}{2}\mathrm dy=\int_0^4y\,\mathrm dy=8\ne0$。</li></ul>
<p>答案选 <b>A</b>。</p>`,
      pitfalls: R`<ul><li><b>把区域画反</b>：$4-x^2\le y$ 是在抛物线<b>上方</b>，不是下方。画错了就会以为横线只交一段。</li><li><b>解 $x^2\ge4-y$ 时漏掉负的一支</b>，只写 $x\ge\sqrt{4-y}$，丢掉左半块 $D_1$。</li><li><b>积分限上小下大</b>：二重积分化累次积分时，每个定积分都必须"下限 ≤ 上限"，这是选项 C 设的陷阱。</li><li><b>滥用对称性</b>：区域对称只是条件之一，被积函数的奇偶性同样要满足，这是选项 D 设的陷阱。</li></ul>`,
      summary: R`<p><b>交换积分次序四步法：</b>① 由原积分限写出区域不等式组；② 画图，标出边界曲线和交点；③ 确定新外层变量的总范围；④ 对新外层变量的每个固定值作"穿线"，看从哪条边界进入、从哪条边界离开——穿线与区域交成几段，内层就写几个积分（或把区域分成几块）。</p>
<p><b>题型识别：</b></p><ul><li>看到选择题给出几种换序结果 → 先画图；拿不准时用 $f\equiv1$（比面积）和 $f=x$（检验奇偶对称）快速排除。</li><li>看到"乘 2"或"等于 0" → 检查"区域对称 + 函数奇偶"两个条件是否同时满足。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：取 f=1, x, x²y, y·e^x 分别计算原积分与四个选项：A 与原积分处处相等；B、C、D 均出现不等（如 f=1 时原积分=A=16/3、B=16、C=0；f=x 时原积分=A=0、D=8）' },
      flags: ['OCR 中选项 A、B 的选项字母缺失；选项 C、D 的公式严重残缺，根据残留字符（4 4 4 0 2 2 / 4 2 0 4 2）复原为 C：∫_0^4[∫_{-2}^{-√(4-y)}f dx+∫_2^{√(4-y)}f dx]dy，D：2∫_0^4dy∫_{√(4-y)}^2 f dx，建议对照原卷核实', '原卷解析中的区域图属于解析而非题干，题目本身不依赖图形，故 figure 为 null，另在解答中绘制了示意图']
    },

    /* ───────────────────────── 第 11 题 ───────────────────────── */
    {
      id: '2025-11', year: 2025, no: '第11题', type: '填空', score: 5,
      stem: R`$\displaystyle\lim_{x\to0^+}\frac{x^x-1}{\ln x\cdot\ln(1-x)}=$ ______．`,
      options: null,
      answer: R`$-1$`,
      figure: null,
      kp: ['lim.compute', 'lim.inf'],
      methods: ['幂指函数化为指数形式', '等价无穷小代换', '符号检验'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>含幂指函数 $x^x$ 的未定式极限。</p>
<p><b>先判断类型：</b>$x\to0^+$ 时 $x^x\to1$（下面会说明），分子 $\to0$；分母中 $\ln x\to-\infty$，$\ln(1-x)\to0$，是"$\infty\cdot0$"，需要仔细算：$\ln(1-x)\sim-x$，分母 $\sim-x\ln x\to0$。所以整体是 $\frac00$ 型。</p>
<p><b>为什么这样处理：</b>幂指函数 $u^v$ 底数、指数都在变，没有直接的求导或等价公式，统一的办法是<b>化成指数</b>：$u^v=\mathrm e^{v\ln u}$。于是 $x^x-1=\mathrm e^{x\ln x}-1$，正好是"$\mathrm e^{\square}-1$，$\square\to0$"的结构，可以换成 $\square$。分母是两个因子相乘，其中 $\ln(1-x)$ 可以换成 $-x$。换完以后分子分母都是 $x\ln x$ 的倍数，直接约掉。</p>`,
      solution: R`<p><b>第一步：化幂指函数为指数函数。</b>$x^x=\mathrm e^{x\ln x}$。先求指数的极限：</p>
$$\lim_{x\to0^+}x\ln x=\lim_{x\to0^+}\frac{\ln x}{1/x}=\lim_{x\to0^+}\frac{1/x}{-1/x^2}=\lim_{x\to0^+}(-x)=0,$$
<p>（这里是 $\frac{\infty}{\infty}$ 型，用了洛必达法则。）所以 $x^x\to\mathrm e^0=1$，分子趋于 $0$。</p>
<p><b>第二步：分子的等价无穷小。</b>因为 $x\ln x\to0$，由 $\mathrm e^u-1\sim u\ (u\to0)$ 得</p>
$$x^x-1=\mathrm e^{x\ln x}-1\sim x\ln x.$$
<p><b>第三步：分母的等价无穷小。</b>$\ln(1-x)\sim-x$，它是分母中的乘积因子，可以替换：</p>
$$\ln x\cdot\ln(1-x)\sim\ln x\cdot(-x)=-x\ln x.$$
<p><b>第四步：计算。</b></p>
$$\lim_{x\to0^+}\frac{x^x-1}{\ln x\cdot\ln(1-x)}=\lim_{x\to0^+}\frac{x\ln x}{-x\ln x}=-1.$$
<p><b>第五步：符号检验。</b>当 $0\lt x\lt1$ 时，$x\ln x\lt0$，所以 $x^x\lt1$，分子为负；$\ln x\lt0$ 且 $\ln(1-x)\lt0$，分母为正。比值为负，答案确实是负数，与 $-1$ 吻合。</p>
<p>答案：$-1$。</p>`,
      pitfalls: R`<ul><li><b>丢掉 $\ln(1-x)\sim-x$ 的负号</b>，得到 $1$。这是本题最大的陷阱——原卷自带答案处就印成了 $1$，而其解析算出的是 $-1$。做完用"符号检验"看一眼就能避免。</li><li><b>写成 $x^x-1\sim x$ 或 $\sim\ln x$</b>：$x^x-1$ 的等价无穷小是 $x\ln x$，它比 $x$ 稍"大"一点（多一个对数因子）。</li><li><b>不会处理 $x^x$</b>：$0^0$ 型的幂指函数必须化为 $\mathrm e^{x\ln x}$，并且要知道 $x\ln x\to0$（$x\to0^+$）。</li></ul>`,
      summary: R`<p><b>方法要点：</b>幂指函数 $u(x)^{v(x)}$ 一律写成 $\mathrm e^{v\ln u}$；若 $v\ln u\to0$，则 $u^v-1\sim v\ln u$。</p>
<p><b>必备极限：</b>$\lim\limits_{x\to0^+}x^a\ln x=0\ (a\gt0)$，即"幂函数压倒对数函数"。</p>
<p><b>题型识别：</b></p><ul><li>看到 $x^x$、$(1+x)^{1/x}$、$(\cos x)^{1/x^2}$ → 化指数，再用 $\mathrm e^\square-1\sim\square$。</li><li>看到 $\ln(1-x)$、$\ln(1-x^2)$ → 等价于 $-x$、$-x^2$，注意负号。</li><li>填空题算完后做一次符号检验（或代一个很小的数估算），能抓住大多数符号错误。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：limit((x**x-1)/(log(x)*log(1-x)), x, 0, "+") = -1；x=1e-6 时数值约 -0.99999' },
      flags: ['原卷【答案】处印为 1，但同一份文件的解析推出 −1；经独立推导与 sympy 验证，正确答案为 −1，已采用 −1']
    },

    /* ───────────────────────── 第 12 题 ───────────────────────── */
    {
      id: '2025-12', year: 2025, no: '第12题', type: '填空', score: 5,
      stem: R`已知函数 $f(x)=\begin{cases}0,&0\le x\lt\dfrac12,\\[4pt] x^2,&\dfrac12\le x\le1\end{cases}$ 的傅里叶级数为 $\displaystyle\sum_{n=1}^{\infty}b_n\sin n\pi x$，$S(x)$ 为 $\displaystyle\sum_{n=1}^{\infty}b_n\sin n\pi x$ 的和函数，则 $S\left(-\dfrac72\right)=$ ______．`,
      options: null,
      answer: R`$\dfrac18$`,
      figure: null,
      kp: ['series.fourier'],
      methods: ['奇延拓与周期延拓', '狄利克雷收敛定理'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>傅里叶级数的<b>和函数</b>，核心是狄利克雷收敛定理。</p>
<p><b>为什么不用算 $b_n$：</b>狄利克雷定理直接告诉我们和函数是什么：在连续点处等于（延拓后的）函数值，在间断点处等于左右极限的平均值。所以只需要弄清楚三件事：<b>周期是多少、延拓方式是什么、所求点是不是间断点</b>。</p>
<p><b>从级数形式读信息：</b>只有 $\sin n\pi x$ 项 → 这是<b>正弦级数</b>，意味着把 $[0,1]$ 上的 $f$ 做了<b>奇延拓</b>到 $[-1,1]$；$\sin n\pi x$ 的周期是 $\frac{2\pi}{\pi}=2$ → 再以 $2$ 为周期延拓到整个数轴。</p>`,
      solution: R`<p><b>第一步：利用周期性平移到基本区间。</b>每一项 $\sin n\pi x$ 都以 $2$ 为周期，所以 $S(x+2)=S(x)$。$-\frac72+4=\frac12$，于是</p>
$$S\left(-\frac72\right)=S\left(-\frac72+2\times2\right)=S\left(\frac12\right).$$
<p><b>第二步：确定 $S$ 在 $[-1,1]$ 上对应的函数。</b>正弦级数是奇延拓函数</p>
$$F(x)=\begin{cases}f(x),&0\lt x\le1,\\0,&x=0,\\-f(-x),&-1\le x\lt0\end{cases}$$
<p>的傅里叶级数，再以 $2$ 为周期延拓。$x=\frac12$ 落在 $(0,1)$ 内，那里 $F=f$。</p>
<p><b>第三步：判断 $x=\frac12$ 处的连续性。</b></p>
$$f\left(\tfrac12^-\right)=0,\qquad f\left(\tfrac12^+\right)=\left(\tfrac12\right)^2=\tfrac14,$$
<p>左右极限不相等，$x=\frac12$ 是跳跃间断点。</p>
<p><b>第四步：用狄利克雷定理。</b>在间断点处和函数取左右极限的算术平均：</p>
$$S\left(\frac12\right)=\frac{f\left(\frac12^-\right)+f\left(\frac12^+\right)}{2}=\frac{0+\frac14}{2}=\frac18.$$
<p>所以 $S\left(-\dfrac72\right)=\dfrac18$。</p>
<p><b>附：$S$ 在一个周期 $[-1,1]$ 上的完整样子</b>（帮助建立整体图像）：$-\frac12\lt x\lt\frac12$ 时 $S(x)=0$；$\frac12\lt x\lt1$ 时 $S(x)=x^2$；$-1\lt x\lt-\frac12$ 时 $S(x)=-x^2$；$S\left(\pm\frac12\right)=\pm\frac18$；端点 $x=\pm1$ 处，左侧趋于 $1$，右侧（周期延拓后）趋于 $-1$，所以 $S(\pm1)=0$。</p>`,
      pitfalls: R`<ul><li><b>直接代函数值</b>：写 $S\left(\frac12\right)=f\left(\frac12\right)=\frac14$，忘了间断点处要取平均。</li><li><b>周期弄错</b>：$\sin n\pi x$ 的周期是 $2$，不是 $2\pi$。若误用 $2\pi$ 平移，就完全错了。</li><li><b>平移量不是周期的整数倍</b>：比如把 $-\frac72$ 加 $3$ 变成 $-\frac12$——$3$ 不是周期的整数倍，这样做不合法。</li><li><b>延拓方式弄错</b>：只有正弦项对应奇延拓；若误当成偶延拓，在负半轴上的值符号会反。</li></ul>`,
      summary: R`<p><b>求傅里叶级数和函数值的三步法：</b>① 由级数形式定周期 $2l$ 与延拓方式（只有 $\sin$ → 奇延拓；只有 $\cos$ → 偶延拓）；② 用周期把所求点平移到 $[-l,l]$；③ 判断该点是连续点还是间断点（含区间端点和分段点），连续点取函数值，间断点取左右极限平均。</p>
<p><b>题型识别：</b>看到"$S(x)$ 为傅里叶级数的和函数，求 $S(x_0)$" → 不要算系数，直接用狄利克雷定理；特别留意分段点与端点 $x=\pm l$（端点处取 $\frac{f(-l^+)+f(l^-)}{2}$）。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：b_n=2∫_{1/2}^1 x² sin(nπx)dx，取前 599 项部分和：S(-7/2)≈S(1/2)≈0.1246（→1/8），S(-1/2)≈-0.1246，S(1)=0，S(3/4)≈0.5611（≈9/16），与狄利克雷定理一致' },
      flags: ['OCR 题干中"的傅里叶级数为 Σb_n sin π,n x S(x)"语序错乱、填空处多出负号，已按题意整理']
    },

    /* ───────────────────────── 第 13 题 ───────────────────────── */
    {
      id: '2025-13', year: 2025, no: '第13题', type: '填空', score: 5,
      stem: R`已知函数 $u(x,y,z)=xy^2z^3$，向量 $\mathbf n=(2,2,-1)$，则 $\left.\dfrac{\partial u}{\partial\mathbf n}\right|_{(1,1,1)}=$ ______．`,
      options: null,
      answer: R`$1$`,
      figure: null,
      kp: ['mdiff.dir'],
      methods: ['方向导数公式（梯度点乘单位向量）'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>可微函数的方向导数计算。</p>
<p><b>方向导数的含义：</b>沿方向 $\mathbf l$ 每走<b>单位长度</b>，函数值变化多少。$u$ 是多项式，处处可微，所以有公式 $\dfrac{\partial u}{\partial\mathbf l}=\nabla u\cdot\mathbf e_{\mathbf l}$，其中 $\mathbf e_{\mathbf l}$ 是 $\mathbf l$ 方向的<b>单位</b>向量。</p>
<p><b>为什么是这个公式：</b>可微意味着 $u(P_0+t\mathbf e)-u(P_0)=\nabla u(P_0)\cdot(t\mathbf e)+o(t)$，两边除以 $t$ 再令 $t\to0^+$，就得到方向导数 $=\nabla u\cdot\mathbf e$。因为定义里是"除以走过的长度 $t$"，所以 $\mathbf e$ 必须是单位向量——这就是必须单位化的原因。</p>`,
      solution: R`<p><b>第一步：求梯度。</b></p>
$$\frac{\partial u}{\partial x}=y^2z^3,\qquad\frac{\partial u}{\partial y}=2xyz^3,\qquad\frac{\partial u}{\partial z}=3xy^2z^2.$$
<p>在点 $(1,1,1)$ 处，$\nabla u=(1,2,3)$。</p>
<p><b>第二步：把方向单位化。</b>$|\mathbf n|=\sqrt{2^2+2^2+(-1)^2}=3$，单位向量</p>
$$\mathbf e_{\mathbf n}=\left(\frac23,\frac23,-\frac13\right),$$
<p>即方向余弦 $\cos\alpha=\frac23,\ \cos\beta=\frac23,\ \cos\gamma=-\frac13$。</p>
<p><b>第三步：点乘。</b></p>
$$\left.\frac{\partial u}{\partial\mathbf n}\right|_{(1,1,1)}=1\cdot\frac23+2\cdot\frac23+3\cdot\left(-\frac13\right)=\frac23+\frac43-1=1.$$
<p>答案：$1$。</p>`,
      pitfalls: R`<ul><li><b>忘记单位化</b>：直接算 $(1,2,3)\cdot(2,2,-1)=3$，得到错误答案 $3$（恰好是 $|\mathbf n|$ 倍）。</li><li><b>第三个分量的负号</b>：$\cos\gamma=-\frac13$，代入时漏掉负号会得到 $3$ 或别的数。</li><li>公式 $\nabla u\cdot\mathbf e$ 的前提是函数在该点<b>可微</b>；对不可微的函数（如 $\sqrt{x^2+y^2}$ 在原点）要回到定义计算。</li></ul>`,
      summary: R`<p><b>方法要点：</b>可微时 $\dfrac{\partial u}{\partial\mathbf l}=u_x\cos\alpha+u_y\cos\beta+u_z\cos\gamma=\nabla u\cdot\mathbf e_{\mathbf l}$。</p>
<p><b>相关结论：</b>沿梯度方向方向导数最大，最大值为 $|\nabla u|$；沿梯度反方向最小，为 $-|\nabla u|$；与梯度垂直的方向上方向导数为 $0$。</p>
<p><b>题型识别：</b>看到"方向导数" → 先确认可微 → 求梯度 → 方向单位化 → 点乘，四步不能少。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：梯度在 (1,1,1) 处为 (1,2,3)，与 (2,2,-1)/3 的点积为 1，与原卷答案一致' },
      flags: ['OCR 中的 \\pmb n、\\hat\\alpha u/\\hat\\sigma n 等识别错误已改为 \\mathbf n 与 ∂u/∂n']
    },

    /* ───────────────────────── 第 14 题 ───────────────────────── */
    {
      id: '2025-14', year: 2025, no: '第14题', type: '填空', score: 5,
      stem: R`已知有向曲线 $L$ 是沿抛物线 $y=1-x^2$ 从点 $(1,0)$ 到点 $(-1,0)$ 的一段，则曲线积分 $\displaystyle\int_L(y+\cos x)\,\mathrm dx+(2x+\cos y)\,\mathrm dy=$ ______．`,
      options: null,
      answer: R`$\dfrac43-2\sin1$`,
      figure: null,
      kp: ['mint.line2'],
      methods: ['补线后用格林公式', '分离全微分部分', '参数化直接计算'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>平面第二类曲线积分，核心工具是<b>格林公式</b>。</p>
<p><b>第一反应：先算 $\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}$。</b>$P=y+\cos x$，$Q=2x+\cos y$，得 $2-1=1$。它不为零，说明积分与路径有关，不能随意换路径；但它是常数 $1$，用格林公式后二重积分就是<b>面积</b>，非常好算。</p>
<p><b>曲线不封闭怎么办：</b>"补线"。$L$ 的两个端点都在 $x$ 轴上，补上 $x$ 轴上的线段最自然：在线段上 $y=0$，$\mathrm dy=0$，积分只剩 $\int\cos x\,\mathrm dx$，一眼可算。</p>
<p><b>方向：</b>$L$ 从 $(1,0)$ 往上绕到 $(-1,0)$，是绕区域逆时针走的上半段；补的线段要从 $(-1,0)$ 走回 $(1,0)$，两段合起来就是区域边界的正向（区域始终在左手边）。</p>`,
      solution: R`<p><b>第一步：计算格林公式中的被积函数。</b></p>
$$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=\frac{\partial(2x+\cos y)}{\partial x}-\frac{\partial(y+\cos x)}{\partial y}=2-1=1.$$
<p><b>第二步：补线构成正向闭曲线。</b>记 $L_0$ 为 $x$ 轴上从 $(-1,0)$ 到 $(1,0)$ 的有向线段。$L+L_0$ 围成区域</p>
$$D=\{(x,y)\mid-1\le x\le1,\ 0\le y\le1-x^2\},$$
<p>并且沿 $L+L_0$ 走时 $D$ 始终在左侧，是正向边界。</p>
<div style="text-align:center"><svg viewBox="0 0 300 185" width="300" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>抛物线弧 L 从 (1,0) 到 (−1,0)，补线 L0 从 (−1,0) 到 (1,0)，围成区域 D</title><polygon points="70,150 80,131.3 90,115 100,101.3 110,90 120,81.3 130,75 140,71.3 150,70 160,71.3 170,75 180,81.3 190,90 200,101.3 210,115 220,131.3 230,150" fill="currentColor" fill-opacity="0.15" stroke="none"/><line x1="25" y1="150" x2="280" y2="150" stroke="currentColor" stroke-width="1"/><line x1="150" y1="178" x2="150" y2="25" stroke="currentColor" stroke-width="1"/><polyline points="70,150 80,131.3 90,115 100,101.3 110,90 120,81.3 130,75 140,71.3 150,70 160,71.3 170,75 180,81.3 190,90 200,101.3 210,115 220,131.3 230,150" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="70" y1="150" x2="230" y2="150" stroke="currentColor" stroke-width="2.4"/><polygon points="141,70 152,65 152,75" fill="currentColor"/><polygon points="200,150 189,145 189,155" fill="currentColor"/><text x="274" y="166" font-size="12" fill="currentColor">x</text><text x="156" y="32" font-size="12" fill="currentColor">y</text><text x="56" y="166" font-size="11" fill="currentColor">−1</text><text x="228" y="166" font-size="11" fill="currentColor">1</text><text x="138" y="166" font-size="11" fill="currentColor">O</text><text x="156" y="64" font-size="11" fill="currentColor">1</text><text x="214" y="100" font-size="12" fill="currentColor">L</text><text x="180" y="170" font-size="12" fill="currentColor">L₀</text><text x="160" y="122" font-size="12" fill="currentColor">D</text><text x="222" y="80" font-size="11" fill="currentColor">y=1−x²</text></svg></div>
<p><b>第三步：格林公式。</b></p>
$$\oint_{L+L_0}P\,\mathrm dx+Q\,\mathrm dy=\iint_D1\,\mathrm d\sigma=\int_{-1}^{1}(1-x^2)\,\mathrm dx=2-\frac23=\frac43.$$
<p><b>第四步：计算补线上的积分。</b>在 $L_0$ 上 $y=0$，$\mathrm dy=0$，$x$ 从 $-1$ 到 $1$：</p>
$$\int_{L_0}(y+\cos x)\,\mathrm dx+(2x+\cos y)\,\mathrm dy=\int_{-1}^{1}\cos x\,\mathrm dx=\sin1-\sin(-1)=2\sin1.$$
<p><b>第五步：相减。</b></p>
$$\int_L=\oint_{L+L_0}-\int_{L_0}=\frac43-2\sin1.$$
<p>答案：$\dfrac43-2\sin1$。</p>`,
      pitfalls: R`<ul><li><b>方向搞反</b>：若补的线段取成从 $(1,0)$ 到 $(-1,0)$，就不能和 $L$ 首尾相接构成闭曲线。补线后一定检查"区域在左手边"。</li><li><b>补线积分忘记减掉</b>，或者加减号弄反。记住：所求 $=$ 闭曲线积分 $-$ 补线积分。</li><li><b>格林公式两项的顺序</b>：是 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}$（"$Q$ 对 $x$ 减 $P$ 对 $y$"），写反会差一个符号。</li><li><b>误用对称性</b>：$\int_{-1}^1\cos x\,\mathrm dx=2\sin1$，$\cos x$ 是偶函数，积分不为零。</li></ul>`,
      summary: R`<p><b>平面第二类曲线积分的决策树：</b>先算 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}$。</p>
<ul><li>$=0$（单连通区域内）→ 与路径无关：换成折线路径，或直接找原函数。</li><li>$\ne0$ 但很简单（常数、简单多项式）且曲线不封闭 → 补线（优先补平行于坐标轴的线段）用格林公式。</li><li>以上都不方便 → 参数化直接算。</li></ul>
<p><b>小技巧：</b>被积表达式中形如 $g(x)\,\mathrm dx+h(y)\,\mathrm dy$ 的部分本身就是全微分，可以单独拿出来用"终点值减起点值"。</p>`,
      alt: R`<p><b>分离全微分 + 参数化：</b>把被积表达式拆成两部分：</p>
$$(y+\cos x)\,\mathrm dx+(2x+\cos y)\,\mathrm dy=\underbrace{(y\,\mathrm dx+2x\,\mathrm dy)}_{\text{需要计算}}+\underbrace{\mathrm d(\sin x+\sin y)}_{\text{全微分}}.$$
<p>全微分部分只与端点有关：$\big[\sin x+\sin y\big]_{(1,0)}^{(-1,0)}=\sin(-1)-\sin1=-2\sin1$。</p>
<p>剩下部分用参数 $x$：$y=1-x^2$，$\mathrm dy=-2x\,\mathrm dx$，$x$ 从 $1$ 到 $-1$：</p>
$$\int_1^{-1}\big[(1-x^2)+2x\cdot(-2x)\big]\mathrm dx=\int_1^{-1}(1-5x^2)\,\mathrm dx=-\left(2-\frac{10}{3}\right)=\frac43.$$
<p>合计 $\frac43-2\sin1$，与格林公式结果一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：以 x 为参数从 1 积到 -1 直接计算得 4/3 - 2 sin 1 ≈ -0.3496；分离出的 y dx+2x dy 部分为 4/3。与原卷答案一致' },
      flags: []
    },

    /* ───────────────────────── 第 17 题 ───────────────────────── */
    {
      id: '2025-17', year: 2025, no: '第17题', type: '解答', score: 10,
      stem: R`计算 $\displaystyle\int_0^1\frac{1}{(x+1)(x^2-2x+2)}\,\mathrm dx$．`,
      options: null,
      answer: R`$\dfrac{3}{10}\ln2+\dfrac{\pi}{10}$`,
      figure: null,
      kp: ['int.defcalc', 'int.indef'],
      methods: ['有理函数部分分式分解', '分子凑分母的导数', '配方后用反正切公式'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>有理函数的积分，标准方法是<b>部分分式分解</b>。</p>
<p><b>为什么用部分分式（第一性原理）：</b>代数上有一个定理：任何真分式都能唯一地拆成若干"最简分式"之和，而最简分式只有四种：$\frac{A}{x-a}$、$\frac{A}{(x-a)^k}$、$\frac{Bx+C}{x^2+px+q}$、$\frac{Bx+C}{(x^2+px+q)^k}$（$p^2-4q\lt0$）。每一种都有固定的积分方法。所以有理函数积分是一个"按流程一定能做完"的问题。</p>
<p><b>本题的分母：</b>$(x+1)$ 是一次因式；$x^2-2x+2$ 的判别式 $4-8\lt0$，在实数范围内不可约。所以设</p>
$$\frac{1}{(x+1)(x^2-2x+2)}=\frac{A}{x+1}+\frac{Bx+C}{x^2-2x+2}.$$
<p>拆开后：$\frac{A}{x+1}$ 积出对数；$\frac{Bx+C}{x^2-2x+2}$ 再拆成"分子是分母导数的倍数"（积出对数）加"常数 / 配方式"（积出反正切）。</p>`,
      solution: R`<p><b>第一步：部分分式分解。</b>设</p>
$$\frac{1}{(x+1)(x^2-2x+2)}=\frac{A}{x+1}+\frac{Bx+C}{x^2-2x+2},$$
<p>两边乘以 $(x+1)(x^2-2x+2)$：</p>
$$1=A(x^2-2x+2)+(Bx+C)(x+1).$$
<ul><li>令 $x=-1$：$1=A(1+2+2)=5A$，得 $A=\frac15$。（代入使某个因式为零的点，可以一次性"消掉"其他未知数。）</li><li>比较 $x^2$ 的系数：$0=A+B$，得 $B=-\frac15$。</li><li>比较常数项：$1=2A+C$，得 $C=1-\frac25=\frac35$。</li><li>验算 $x$ 的系数：$-2A+B+C=-\frac25-\frac15+\frac35=0$，与左边一致。</li></ul>
<p>所以</p>
$$\frac{1}{(x+1)(x^2-2x+2)}=\frac15\left[\frac{1}{x+1}-\frac{x-3}{x^2-2x+2}\right].$$
<p><b>第二步：积第一项。</b></p>
$$\int_0^1\frac{\mathrm dx}{x+1}=\ln(x+1)\Big|_0^1=\ln2.$$
<p><b>第三步：处理第二项的分子。</b>分母的导数是 $(x^2-2x+2)'=2x-2$。把分子 $x-3$ 写成"分母导数的倍数 + 常数"：</p>
$$x-3=\frac12(2x-2)-2.$$
<p>于是</p>
$$\int\frac{x-3}{x^2-2x+2}\,\mathrm dx=\frac12\int\frac{(2x-2)\,\mathrm dx}{x^2-2x+2}-2\int\frac{\mathrm dx}{(x-1)^2+1}=\frac12\ln(x^2-2x+2)-2\arctan(x-1)+C.$$
<p>这里第一部分是"凑微分" $\int\frac{\mathrm d(x^2-2x+2)}{x^2-2x+2}$（分母恒正，不需要绝对值）；第二部分把分母配方 $x^2-2x+2=(x-1)^2+1$，套用 $\int\frac{\mathrm du}{u^2+1}=\arctan u$。</p>
<p><b>第四步：代入上下限。</b></p>
$$\int_0^1\frac{x-3}{x^2-2x+2}\,\mathrm dx=\frac12(\ln1-\ln2)-2\big[\arctan0-\arctan(-1)\big]=-\frac12\ln2-2\cdot\frac\pi4=-\frac12\ln2-\frac\pi2.$$
<p><b>第五步：合并。</b></p>
$$\int_0^1\frac{\mathrm dx}{(x+1)(x^2-2x+2)}=\frac15\left[\ln2-\left(-\frac12\ln2-\frac\pi2\right)\right]=\frac15\left(\frac32\ln2+\frac\pi2\right)=\frac{3}{10}\ln2+\frac{\pi}{10}.$$
<p><b>检验（估值）：</b>数值上 $\frac{3}{10}\ln2+\frac{\pi}{10}\approx0.2079+0.3142=0.5221$。另一方面，分母展开为 $h(x)=(x+1)(x^2-2x+2)=x^3-x^2+2$，$h'(x)=x(3x-2)$，所以 $h$ 在 $[0,1]$ 上的最小值是 $h\left(\frac23\right)=\frac{50}{27}$，最大值是 $h(0)=h(1)=2$。于是被积函数 $\frac1h$ 介于 $\frac12$ 与 $\frac{27}{50}=0.54$ 之间，积分值（区间长度为 $1$）也应在 $[0.5,\,0.54]$ 内。$0.5221$ 恰在其中，结果合理。</p>
<p>答案：$\dfrac{3}{10}\ln2+\dfrac{\pi}{10}$。</p>`,
      pitfalls: R`<ul><li><b>待定系数解错</b>：建议先用"代零点"求出一次因式对应的系数（本题 $A$），再比较系数求其他的，最后用剩下的一个方程验算。</li><li><b>分子拆分出错</b>：$x-3=\frac12(2x-2)-2$，常数是 $-2$ 而不是 $-3$。拆完立即展开验证。</li><li><b>反正切代值符号错</b>：$\arctan(0-1)=\arctan(-1)=-\frac\pi4$，所以 $\arctan0-\arctan(-1)=+\frac\pi4$。</li><li><b>对二次因式也设 $\frac{B}{x^2-2x+2}$</b>（分子只放常数）是错误的：不可约二次因式对应的分子必须是一次式 $Bx+C$。</li></ul>`,
      summary: R`<p><b>有理函数积分的流程：</b>① 假分式先做多项式除法；② 分母因式分解（一次因式、不可约二次因式及其重数）；③ 部分分式待定系数；④ 逐项积分。</p>
<p><b>二次分母 $\frac{Bx+C}{x^2+px+q}$ 的标准动作：</b>"分子凑分母的导数 → 对数；剩余常数 → 配方 → 反正切"。</p>
<p><b>题型识别：</b>看到"一次因式 × 不可约二次因式"的分母 → 设 $\frac{A}{x-a}+\frac{Bx+C}{x^2+px+q}$；求 $A$ 用代 $x=a$ 的"掩盖法"最快：$A=\left.\frac{1}{x^2+px+q}\right|_{x=a}$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：apart 得 1/(5(x+1)) - (x-3)/(5(x^2-2x+2))；integrate 得 3 log2/10 + π/10 ≈ 0.52210' },
      flags: ['原卷自带解析中部分分式 OCR 为 "−1/3 x + 3/5"（应为 −1/5 x + 3/5），结果 OCR 为 "3/0 ln 2 + π/10"（应为 3/10 ln 2 + π/10），已按独立推导与 sympy 结果修正']
    },

    /* ───────────────────────── 第 18 题 ───────────────────────── */
    {
      id: '2025-18', year: 2025, no: '第18题', type: '解答', score: 10,
      stem: R`已知函数 $f(u)$ 在区间 $(0,+\infty)$ 内具有 $2$ 阶导数，记 $g(x,y)=f\left(\dfrac xy\right)$．若 $g(x,y)$ 满足
$$x^2\frac{\partial^2g}{\partial x^2}+xy\frac{\partial^2g}{\partial x\partial y}+y^2\frac{\partial^2g}{\partial y^2}=1,$$
且 $g(x,x)=1$，$\left.\dfrac{\partial g}{\partial x}\right|_{(x,x)}=\dfrac2x$，求 $f(u)$．`,
      options: null,
      answer: R`$f(u)=\dfrac12\ln^2u+2\ln u+1\ \ (u\gt0)$`,
      figure: null,
      kp: ['mdiff.chain', 'ode.euler', 'ode.reduce'],
      methods: ['多元复合函数链式法则', '偏微分方程化为常微分方程', '凑导数 (uf\')\' 降阶', '欧拉方程变量代换'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>"抽象复合函数的二阶偏导数 + 化为常微分方程"，是数学一的经典综合题型。</p>
<p><b>核心想法：</b>$g$ 只通过一个中间变量 $u=\frac xy$ 依赖于 $x,y$。所以 $g$ 的所有偏导数都能写成 $f'(u)$、$f''(u)$ 乘上 $x,y$ 的某些式子。方程左边的系数 $x^2$、$xy$、$y^2$ 是精心配好的：代进去以后，$x,y$ 会恰好组合成 $\frac xy=u$ 的形式，整个偏微分方程变成只含 $u$ 的<b>常微分方程</b>。这是出题的套路，也是检验计算是否正确的信号——如果代完还剩下单独的 $x$ 或 $y$，说明算错了。</p>
<p><b>条件怎么用：</b>$g(x,x)=f(1)=1$ 给出 $f(1)$；$\frac{\partial g}{\partial x}\big|_{(x,x)}=\frac{f'(1)}{x}$ 给出 $f'(1)$。两个初值条件正好确定二阶方程的两个任意常数。</p>
<p><b>得到的方程</b> $u^2f''+uf'=1$ 是<b>欧拉方程</b>；也可以观察到 $uf''+f'=(uf')'$，一次积分就降阶。</p>`,
      solution: R`<p><b>第一步：一阶偏导数。</b>令 $u=\dfrac xy$，则 $\dfrac{\partial u}{\partial x}=\dfrac1y$，$\dfrac{\partial u}{\partial y}=-\dfrac{x}{y^2}$。由链式法则：</p>
$$\frac{\partial g}{\partial x}=f'(u)\cdot\frac1y,\qquad\frac{\partial g}{\partial y}=f'(u)\cdot\left(-\frac{x}{y^2}\right)=-\frac{x}{y^2}f'(u).$$
<p><b>第二步：二阶偏导数。</b>关键：$f'(u)$ 仍然是 $x,y$ 的复合函数，对它再求偏导时还要乘 $\frac{\partial u}{\partial x}$ 或 $\frac{\partial u}{\partial y}$。</p>
$$\frac{\partial^2g}{\partial x^2}=\frac1y\cdot f''(u)\cdot\frac1y=\frac{1}{y^2}f''(u).$$
<p>对 $\frac{\partial g}{\partial x}=\frac1y\,f'(u)$ 关于 $y$ 求偏导，用乘积法则（$\frac1y$ 与 $f'(u)$ 都含 $y$）：</p>
$$\frac{\partial^2g}{\partial x\partial y}=-\frac{1}{y^2}f'(u)+\frac1y\cdot f''(u)\cdot\left(-\frac{x}{y^2}\right)=-\frac{x}{y^3}f''(u)-\frac{1}{y^2}f'(u).$$
<p>对 $\frac{\partial g}{\partial y}=-\frac{x}{y^2}f'(u)$ 关于 $y$ 求偏导，同样用乘积法则（$\left(-\frac{x}{y^2}\right)'_y=\frac{2x}{y^3}$）：</p>
$$\frac{\partial^2g}{\partial y^2}=\frac{2x}{y^3}f'(u)-\frac{x}{y^2}\cdot f''(u)\cdot\left(-\frac{x}{y^2}\right)=\frac{x^2}{y^4}f''(u)+\frac{2x}{y^3}f'(u).$$
<p><b>第三步：代入方程，化为常微分方程。</b>逐项计算并用 $u=\frac xy$ 表示：</p>
$$x^2\frac{\partial^2g}{\partial x^2}=\frac{x^2}{y^2}f''=u^2f'',$$
$$xy\frac{\partial^2g}{\partial x\partial y}=-\frac{x^2}{y^2}f''-\frac{x}{y}f'=-u^2f''-uf',$$
$$y^2\frac{\partial^2g}{\partial y^2}=\frac{x^2}{y^2}f''+\frac{2x}{y}f'=u^2f''+2uf'.$$
<p>三式相加：$u^2f''+(-u^2f'')+u^2f''=u^2f''$，$-uf'+2uf'=uf'$，所以方程化为</p>
$$u^2f''(u)+uf'(u)=1,\qquad u\gt0.$$
<p><b>第四步：由附加条件得初值。</b></p>
<ul><li>$g(x,x)=f\left(\frac xx\right)=f(1)=1$，所以 $f(1)=1$。</li><li>先求偏导再代 $y=x$：$\left.\frac{\partial g}{\partial x}\right|_{(x,x)}=\frac1xf'(1)=\frac2x$，所以 $f'(1)=2$。</li></ul>
<p><b>第五步：解常微分方程。</b>两边除以 $u$（$u\gt0$）：$uf''(u)+f'(u)=\dfrac1u$。左边恰好是乘积 $uf'(u)$ 的导数：</p>
$$\big(uf'(u)\big)'=f'(u)+uf''(u)=\frac1u.$$
<p>积分一次：$uf'(u)=\ln u+C_1$。令 $u=1$：$1\cdot f'(1)=0+C_1$，得 $C_1=2$，所以</p>
$$f'(u)=\frac{\ln u+2}{u}.$$
<p>再积分（注意 $\frac{\ln u}{u}\,\mathrm du=\ln u\,\mathrm d(\ln u)$）：</p>
$$f(u)=\int\frac{\ln u}{u}\,\mathrm du+\int\frac2u\,\mathrm du=\frac12\ln^2u+2\ln u+C_2.$$
<p>令 $u=1$：$f(1)=C_2=1$。</p>
<p><b>第六步：写出结果并验算。</b></p>
$$f(u)=\frac12\ln^2u+2\ln u+1\quad(u\gt0).$$
<p>验算：$f'(u)=\frac{\ln u+2}{u}$，$f''(u)=\frac{\frac1u\cdot u-(\ln u+2)}{u^2}=\frac{-1-\ln u}{u^2}$，于是 $u^2f''+uf'=(-1-\ln u)+(\ln u+2)=1$；且 $f(1)=1$，$f'(1)=2$，全部满足。</p>`,
      pitfalls: R`<ul><li><b>求二阶偏导时把 $f'(u)$ 当常数</b>：这是本题型最常见的错误。$f'(u)$ 依然通过 $u$ 依赖 $x,y$，对它求偏导一定会产生 $f''(u)$ 乘以 $u$ 的偏导数。</li><li><b>混合偏导和 $\frac{\partial^2g}{\partial y^2}$ 漏掉乘积法则的一项</b>：系数 $\frac1y$、$-\frac{x}{y^2}$ 里含 $y$，对 $y$ 求导时它们也要求导。</li><li><b>处理条件时"先代入后求导"</b>：若先把 $y=x$ 代进去得 $g(x,x)=f(1)$ 是常数，再对 $x$ 求导就得到 $0$，与 $\frac2x$ 矛盾。$\frac{\partial g}{\partial x}\big|_{(x,x)}$ 的意思是先求偏导函数，再在点 $(x,x)$ 处取值。</li><li><b>代入后剩下单独的 $x$ 或 $y$</b>：说明某个偏导数算错了，应该回头检查，而不是硬着头皮往下做。</li></ul>`,
      summary: R`<p><b>方法要点：</b>形如 $g=f(\varphi(x,y))$ 的抽象复合函数满足某个偏微分方程 → 用链式法则把各阶偏导写成 $f',f''$ 的组合 → 代入后化为关于 $u=\varphi(x,y)$ 的常微分方程 → 用附加条件定常数。</p>
<p><b>题型识别：</b></p><ul><li>中间变量 $u=\frac xy$、$xy$、$x^2+y^2$、$\sqrt{x^2+y^2}$ 等 → 方程一定能化成只含 $u$ 的形式；算不干净就是算错了。</li><li>看到 $u^2f''+auf'+bf=\cdots$ → 欧拉方程，令 $u=\mathrm e^t$；看到 $uf''+f'$ → 立刻认出 $(uf')'$。</li><li>条件"在 $(x,x)$ 处的偏导" → 先求偏导，再代入，不要先代入。</li></ul>`,
      alt: R`<p><b>用欧拉方程的标准代换解 $u^2f''+uf'=1$：</b>令 $u=\mathrm e^t$（$t=\ln u$），记 $\dot f=\frac{\mathrm df}{\mathrm dt}$。则 $uf'(u)=\dot f$，$u^2f''(u)=\ddot f-\dot f$，方程变成</p>
$$\ddot f-\dot f+\dot f=1\iff\ddot f=1.$$
<p>积分两次：$f=\frac{t^2}{2}+C_1t+C_2=\frac12\ln^2u+C_1\ln u+C_2$。由 $f(1)=1$ 得 $C_2=1$；由 $f'(u)=\frac{\ln u+C_1}{u}$ 及 $f'(1)=2$ 得 $C_1=2$。结果相同。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：把 x=u·y 代入后左边化为 u(u f\'\'+f\')；将 f=½ln²u+2ln u+1 代回原偏微分方程得 1，且 g(x,x)=1、g_x(x,x)=2/x；dsolve 通解为 C1+C2 ln u+½ln²u' },
      flags: ['OCR 题干"且 g(x,y)=1"应为"且 g(x,x)=1"，已按解析上下文修正；"记 g(x,y)=f(x/y)" 后多余的 "x" 已删除']
    },

    /* ───────────────────────── 第 19 题 ───────────────────────── */
    {
      id: '2025-19', year: 2025, no: '第19题', type: '解答', score: 10,
      stem: R`设函数 $f(x)$ 在区间 $(a,b)$ 内可导．证明导函数 $f'(x)$ 在 $(a,b)$ 内严格单调增加的充分必要条件是：对 $(a,b)$ 内任意的 $x_1,x_2,x_3$，当 $x_1\lt x_2\lt x_3$ 时，
$$\frac{f(x_2)-f(x_1)}{x_2-x_1}\lt\frac{f(x_3)-f(x_2)}{x_3-x_2}.$$`,
      options: null,
      answer: R`<p>证明见详细解答。必要性：两段分别用拉格朗日中值定理，把弦斜率化为导数值再比较；充分性：先由条件推出"三弦不等式"，再取单侧极限，得到 $f'(s)\le k(s,p)\lt k(p,t)\le f'(t)$。</p>`,
      figure: null,
      kp: ['diff.mvt', 'diff.convex', 'diff.def'],
      methods: ['拉格朗日中值定理', '三弦不等式（弦斜率的加权平均）', '导数定义与单侧极限', '极限的保序性'],
      difficulty: 4,
      analysis: R`<p><b>这题考什么：</b>导数单调性与"弦斜率单调性"之间的等价关系，本质是<b>凸函数</b>的刻画。</p>
<p><b>几何意义：</b>记弦斜率 $k(\alpha,\beta)=\dfrac{f(\beta)-f(\alpha)}{\beta-\alpha}$。条件说的是：相邻两段弦，右边那段更陡。也就是"割线斜率从左到右越来越大"——曲线向上弯（严格凸，下凸）。而 $f'$ 严格增加说的是"切线斜率从左到右越来越大"。题目要证：切线斜率递增 ⟺ 割线斜率递增。</p>
<div style="text-align:center"><svg viewBox="0 0 300 190" width="300" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>凸曲线上三点 x1、x2、x3 及两段相邻弦，右边的弦更陡</title><line x1="15" y1="170" x2="290" y2="170" stroke="currentColor" stroke-width="1"/><polyline points="20,160 46,158.6 72,154.4 98,147.4 124,137.6 150,125 176,109.6 202,91.4 228,70.4 254,46.6 280,20" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="72" y1="154.4" x2="163" y2="117.7" stroke="currentColor" stroke-width="1.6"/><line x1="163" y1="117.7" x2="254" y2="46.6" stroke="currentColor" stroke-width="1.6"/><line x1="72" y1="154.4" x2="254" y2="46.6" stroke="currentColor" stroke-width="1" stroke-dasharray="5 3"/><line x1="72" y1="154.4" x2="72" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><line x1="163" y1="117.7" x2="163" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><line x1="254" y1="46.6" x2="254" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><circle cx="72" cy="154.4" r="2.8" fill="currentColor"/><circle cx="163" cy="117.7" r="2.8" fill="currentColor"/><circle cx="254" cy="46.6" r="2.8" fill="currentColor"/><text x="66" y="184" font-size="12" fill="currentColor">x₁</text><text x="157" y="184" font-size="12" fill="currentColor">x₂</text><text x="248" y="184" font-size="12" fill="currentColor">x₃</text><text x="98" y="125" font-size="11" fill="currentColor">k(x₁,x₂)</text><text x="196" y="72" font-size="11" fill="currentColor" text-anchor="end">k(x₂,x₃)</text><text x="22" y="22" font-size="11" fill="currentColor">虚线：k(x₁,x₃) 夹在两者之间</text></svg></div>
<p><b>两个方向的工具：</b></p>
<ul><li><b>必要性</b>（导数 → 弦）：拉格朗日中值定理正好说"弦斜率 = 中间某点的导数"，把两段弦斜率化成两个导数值，比较即可。</li><li><b>充分性</b>（弦 → 导数）：导数是弦斜率的极限。但极限只能保持"$\le$"，会把严格不等号"$\lt$"磨成"$\le$"。所以要在 $f'(s)$ 与 $f'(t)$ 之间<b>留一个固定的严格缺口</b>：取中点 $p$，两段固定的弦满足 $k(s,p)\lt k(p,t)$，再证明 $f'(s)\le k(s,p)$、$k(p,t)\le f'(t)$，严格性就保住了。</li></ul>`,
      solution: R`<p>记号：对 $(a,b)$ 内的 $\alpha\ne\beta$，令 $k(\alpha,\beta)=\dfrac{f(\beta)-f(\alpha)}{\beta-\alpha}$（弦斜率，显然 $k(\alpha,\beta)=k(\beta,\alpha)$）。题中条件即：$x_1\lt x_2\lt x_3$ 时 $k(x_1,x_2)\lt k(x_2,x_3)$。</p>
<p><b>第一步：必要性。</b>设 $f'(x)$ 在 $(a,b)$ 内严格单调增加，任取 $a\lt x_1\lt x_2\lt x_3\lt b$。$f$ 在 $(a,b)$ 内可导，从而在 $[x_1,x_2]$、$[x_2,x_3]$ 上连续、在其内部可导，满足拉格朗日中值定理的条件，于是存在 $\xi_1\in(x_1,x_2)$，$\xi_2\in(x_2,x_3)$，使</p>
$$k(x_1,x_2)=f'(\xi_1),\qquad k(x_2,x_3)=f'(\xi_2).$$
<p>因为 $\xi_1\lt x_2\lt\xi_2$，且 $f'$ 严格单调增加，所以 $f'(\xi_1)\lt f'(\xi_2)$，即 $k(x_1,x_2)\lt k(x_2,x_3)$。必要性得证。</p>
<p><b>第二步：充分性的准备——三弦不等式。</b>设条件成立。断言：对任意 $x_1\lt x_2\lt x_3$（都在 $(a,b)$ 内），</p>
$$k(x_1,x_2)\lt k(x_1,x_3)\lt k(x_2,x_3).$$
<p>证明：由 $f(x_3)-f(x_1)=\big[f(x_2)-f(x_1)\big]+\big[f(x_3)-f(x_2)\big]$ 得</p>
$$(x_3-x_1)\,k(x_1,x_3)=(x_2-x_1)\,k(x_1,x_2)+(x_3-x_2)\,k(x_2,x_3).$$
<p>令 $\lambda=\dfrac{x_2-x_1}{x_3-x_1}\in(0,1)$，则 $k(x_1,x_3)=\lambda\,k(x_1,x_2)+(1-\lambda)\,k(x_2,x_3)$，是两个弦斜率的加权平均。于是</p>
$$k(x_1,x_3)-k(x_1,x_2)=(1-\lambda)\big[k(x_2,x_3)-k(x_1,x_2)\big]\gt0,$$
$$k(x_2,x_3)-k(x_1,x_3)=\lambda\big[k(x_2,x_3)-k(x_1,x_2)\big]\gt0.$$
<p>断言成立。（几何上：大弦的斜率夹在两段小弦的斜率之间。）</p>
<p><b>第三步：取中间点，得到固定的严格缺口。</b>任取 $a\lt s\lt t\lt b$，令 $p=\dfrac{s+t}{2}$。对三点 $s\lt p\lt t$ 用题设条件：</p>
$$k(s,p)\lt k(p,t).\qquad(\ast)$$
<p><b>第四步：证明 $f'(s)\le k(s,p)$。</b>对任意满足 $0\lt h\lt p-s$ 的 $h$，三点 $s\lt s+h\lt p$ 用三弦不等式的左半部分：</p>
$$k(s,s+h)\lt k(s,p).$$
<p>令 $h\to0^+$。因为 $f$ 在 $s$ 处可导，左边 $\dfrac{f(s+h)-f(s)}{h}\to f'(s)$；右边与 $h$ 无关。由极限的保序性（严格不等式取极限后变成非严格不等式），得 $f'(s)\le k(s,p)$。</p>
<p><b>第五步：证明 $k(p,t)\le f'(t)$。</b>对任意满足 $0\lt h\lt t-p$ 的 $h$，三点 $p\lt t-h\lt t$ 用三弦不等式的右半部分：</p>
$$k(p,t)\lt k(t-h,t)=\frac{f(t)-f(t-h)}{h}.$$
<p>令 $h\to0^+$，右边趋于 $f'(t)$（$f$ 在 $t$ 处可导，左导数等于导数），得 $k(p,t)\le f'(t)$。</p>
<p><b>第六步：串起来。</b>由第四步、$(\ast)$、第五步：</p>
$$f'(s)\le k(s,p)\lt k(p,t)\le f'(t),$$
<p>所以 $f'(s)\lt f'(t)$。由 $s\lt t$ 的任意性，$f'(x)$ 在 $(a,b)$ 内严格单调增加。充分性得证。</p>
<p>综上，充要条件成立。$\blacksquare$</p>`,
      pitfalls: R`<ul><li><b>充分性中直接对条件取极限</b>：在 $k(x_1,x_2)\lt k(x_2,x_3)$ 中同时令 $x_1\to x_2$、$x_3\to x_2$，只能得到 $f'(x_2)\le f'(x_2)$，毫无信息；即使比较两个不同点，直接取极限也只能得到"$\le$"，即单调不减，证不出<b>严格</b>增加。必须像正文那样保留一个固定的严格缺口 $k(s,p)\lt k(p,t)$。</li><li><b>误用二阶导数</b>：题目只给出 $f$ 一阶可导，$f''$ 可能不存在，不能用"$f''\gt0$"来论证。</li><li><b>拉格朗日中值定理的条件不写</b>：需要说明 $f$ 在闭区间 $[x_1,x_2]$ 上连续、在开区间内可导（由 $f$ 在 $(a,b)$ 内可导推出），这是证明题的得分点。</li><li><b>以为单侧极限不等于导数</b>：$f$ 在某点可导，则用右侧差商或左侧差商取极限都得到同一个导数值，所以第四、五步分别用单侧差商是合法的。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p>
<ul><li>"弦斜率"与"导数"之间的两座桥：从弦到导数用<b>拉格朗日中值定理</b>（弦斜率 = 某点导数）；从导数到弦用<b>导数定义</b>（导数 = 弦斜率的极限）。</li><li><b>三弦不等式</b>：凸函数（割线斜率递增）满足 $k(x_1,x_2)\lt k(x_1,x_3)\lt k(x_2,x_3)$，来源是"大弦斜率是两段小弦斜率的加权平均"。</li><li>严格不等式取极限只剩非严格不等式；要证严格结论，就在中间插入<b>与极限过程无关</b>的严格不等式。</li></ul>
<p><b>题型识别：</b>看到"差商（弦斜率）不等式"与"导数单调 / 凹凸性"的互推 → 想到拉格朗日中值定理和三弦不等式；本题结论等价于"可导函数严格凸 ⟺ 导函数严格增加"。</p>`,
      alt: R`<p><b>充分性的另一种写法（先证不减，再证严格）：</b></p>
<p>① 不减：对 $s\lt t$，由三弦不等式，$0\lt h\lt t-s$ 时 $k(s,s+h)\lt k(s,t)\lt k(t-h,t)$；令 $h\to0^+$ 得 $f'(s)\le k(s,t)\le f'(t)$，所以 $f'$ 单调不减。</p>
<p>② 严格：反设存在 $s\lt t$ 使 $f'(s)=f'(t)=c$。由单调不减，$f'$ 在 $[s,t]$ 上恒等于 $c$。令 $\varphi(x)=f(x)-cx$，则 $\varphi'=0$，$\varphi$ 在 $[s,t]$ 上为常数，即 $f$ 在 $[s,t]$ 上是一次函数。取 $m=\frac{s+t}{2}$，则 $k(s,m)=k(m,t)=c$，与题设的严格不等式 $k(s,m)\lt k(m,t)$ 矛盾。故 $f'$ 严格单调增加。</p>`,
      verify: { by: 'proof', ok: true, note: '证明题：逐步核对了必要性（拉格朗日中值定理及其条件）与充分性（三弦不等式 + 单侧差商极限 + 中点留出严格缺口）；sympy 验证了恒等式 (x3-x1)k13=(x2-x1)k12+(x3-x2)k23' },
      flags: ['原卷自带解析的充分性部分用五个点论证，且 OCR 残缺（如 "f\'_+(x_3) ≤ … ≤ f\'_-(x_5)" 下标错乱）；本解析改用三个点 s、p=(s+t)/2、t 的写法，逻辑完整且更简洁']
    },

    /* ───────────────────────── 第 20 题 ───────────────────────── */
    {
      id: '2025-20', year: 2025, no: '第20题', type: '解答', score: 10,
      stem: R`设 $\Sigma$ 是由直线 $\begin{cases}x=0,\\y=0\end{cases}$ 绕直线 $\begin{cases}x=t,\\y=t,\\z=t\end{cases}$（$t$ 为参数）旋转一周得到的曲面，$\Sigma_1$ 是 $\Sigma$ 介于平面 $x+y+z=0$ 与平面 $x+y+z=1$ 之间部分的外侧，计算曲面积分
$$I=\iint_{\Sigma_1}x\,\mathrm dy\,\mathrm dz+(y+1)\,\mathrm dz\,\mathrm dx+(z+2)\,\mathrm dx\,\mathrm dy.$$`,
      options: null,
      answer: R`$I=-\dfrac{2\sqrt3}{3}\pi$`,
      figure: null,
      kp: ['mint.surf2', 'vec.surface', 'mint.triple'],
      methods: ['纬圆法求旋转曲面方程', '高斯公式（补面法）', '圆锥体积公式', '两类曲面积分的转换（平面上通量）'],
      difficulty: 4,
      analysis: R`<p><b>这题考什么：</b>三件事串在一起——① 认出旋转曲面是什么；② 非封闭曲面上的第二类曲面积分，用<b>补面 + 高斯公式</b>；③ 补面上的通量计算。</p>
<p><b>第一层：曲面是什么？</b>母线是 $z$ 轴，旋转轴是过原点、方向为 $(1,1,1)$ 的直线。两条直线<b>相交于原点</b>。一条直线绕与它相交的轴旋转，扫出的是以交点为顶点的<b>圆锥面</b>，半顶角就是两直线的夹角 $\theta$，$\cos\theta=\frac{1}{\sqrt3}$。（若平行则得圆柱面；若异面且不垂直则得单叶双曲面；若与轴垂直，则得到平面或平面的一部分。）</p>
<p><b>第二层：为什么用高斯公式？</b>$\Sigma_1$ 是锥面侧面，不封闭；但只要补上底面（平面 $x+y+z=1$ 上的圆盘）就封闭了。而散度 $\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=1+1+1=3$ 是常数，三重积分就是 $3\times$ 圆锥体积——不用真的积分。</p>
<p><b>第三层：补面上怎么算？</b>补面是平面圆盘，单位法向量是常向量 $\frac{(1,1,1)}{\sqrt3}$，并且在平面上 $P+Q+R=x+y+z+3=4$ 也是常数。所以通量 $=$ 常数 $\times$ 圆盘面积。整道题最后归结为<b>求圆锥的高和底面半径</b>。</p>`,
      solution: R`<p><b>第一步：求旋转曲面 $\Sigma$ 的方程（纬圆法）。</b>旋转轴 $l$ 过原点 $O$，方向向量 $\mathbf s=(1,1,1)$。设 $M_0(0,0,z_0)$ 是母线（$z$ 轴）上任一点，它绕 $l$ 旋转画出一个圆（纬圆）。点 $P(x,y,z)$ 在这个纬圆上，当且仅当：</p>
<ul><li>$P$ 与 $M_0$ 在同一个垂直于轴的平面内：$\overrightarrow{M_0P}\cdot\mathbf s=0$，即 $x+y+(z-z_0)=0$，得 $z_0=x+y+z$；</li><li>$P$ 与 $M_0$ 到轴上定点 $O$ 的距离相等（同一纬圆上的点到圆心距离相等，再由勾股定理，到轴上任一点的距离也相等）：$x^2+y^2+z^2=z_0^2$。</li></ul>
<p>消去 $z_0$，得</p>
$$\Sigma:\ x^2+y^2+z^2=(x+y+z)^2\iff xy+yz+zx=0.$$
<p>这是以 $O$ 为顶点、以 $l$ 为轴的圆锥面。平面 $x+y+z=0$ 与它只交于一点：代入得 $x^2+y^2+z^2=0$，只有原点。所以 $\Sigma_1$ 是从顶点 $O$ 到平面 $x+y+z=1$ 的那一片锥面侧面。</p>
<p><b>第二步：求圆锥的高、底面半径与体积。</b>轴 $l$ 与平面 $x+y+z=1$ 的交点：$t+t+t=1$，得底面圆心 $C\left(\frac13,\frac13,\frac13\right)$。</p>
<ul><li>高 $H=|OC|=\sqrt{3\cdot\frac19}=\dfrac{\sqrt3}{3}$（也就是原点到平面 $x+y+z=1$ 的距离 $\frac{1}{\sqrt3}$）。</li><li>母线 $z$ 轴与该平面交于 $A(0,0,1)$，它在底面圆周上，所以半径 $R=|CA|=\sqrt{\frac19+\frac19+\frac49}=\dfrac{\sqrt6}{3}$。（检验：$\tan\theta=\frac RH=\sqrt2$，与 $\cos\theta=\frac1{\sqrt3}$ 一致。）</li></ul>
<div style="text-align:center"><svg viewBox="0 0 300 205" width="300" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>圆锥示意图：顶点 O，轴 OC，底面圆心 C，底面圆周上一点 A，高 H，半径 R</title><ellipse cx="150" cy="50" rx="75" ry="16" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="182" x2="75" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="182" x2="225" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="150" y1="182" x2="150" y2="14" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="150" y1="50" x2="225" y2="50" stroke="currentColor" stroke-width="1.2"/><circle cx="150" cy="50" r="2.5" fill="currentColor"/><circle cx="225" cy="50" r="2.5" fill="currentColor"/><circle cx="150" cy="182" r="2.5" fill="currentColor"/><path d="M150,152 A30,30 0 0,1 165,156" fill="none" stroke="currentColor" stroke-width="1"/><text x="156" y="146" font-size="11" fill="currentColor">θ</text><text x="157" y="197" font-size="12" fill="currentColor">O</text><text x="136" y="62" font-size="12" fill="currentColor">C</text><text x="230" y="54" font-size="11" fill="currentColor">A(0,0,1)</text><text x="174" y="45" font-size="11" fill="currentColor">R</text><text x="128" y="120" font-size="11" fill="currentColor" text-anchor="end">H</text><text x="200" y="125" font-size="12" fill="currentColor">Σ₁</text><text x="232" y="28" font-size="12" fill="currentColor">Σ₀</text><text x="156" y="14" font-size="11" fill="currentColor">l</text></svg></div>
<p>圆锥体 $\Omega$ 的体积：</p>
$$V=\frac13\pi R^2H=\frac13\pi\cdot\frac23\cdot\frac{\sqrt3}{3}=\frac{2\sqrt3}{27}\pi.$$
<p><b>第三步：补面，用高斯公式。</b>补上 $\Sigma_0$：平面 $x+y+z=1$ 上以 $C$ 为圆心、$R$ 为半径的圆盘，取<b>上侧</b>（法向量指向远离原点的方向 $\frac{(1,1,1)}{\sqrt3}$）。锥面的"外侧"指向远离轴的一侧，正是圆锥体 $\Omega$ 的外法向；$\Sigma_0$ 的上侧也是 $\Omega$ 的外法向。所以 $\Sigma_1+\Sigma_0$ 是 $\Omega$ 的整个边界曲面、取外侧。$P=x,\ Q=y+1,\ R=z+2$ 处处具有连续偏导数，由高斯公式：</p>
$$\iint_{\Sigma_1+\Sigma_0}P\,\mathrm dy\,\mathrm dz+Q\,\mathrm dz\,\mathrm dx+R\,\mathrm dx\,\mathrm dy=\iiint_\Omega\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)\mathrm dV=\iiint_\Omega3\,\mathrm dV=3V=\frac{2\sqrt3}{9}\pi.$$
<p><b>第四步：计算补面 $\Sigma_0$ 上的积分。</b>用两类曲面积分的关系 $\iint P\,\mathrm dy\,\mathrm dz+Q\,\mathrm dz\,\mathrm dx+R\,\mathrm dx\,\mathrm dy=\iint(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,\mathrm dS$。在 $\Sigma_0$ 上 $\cos\alpha=\cos\beta=\cos\gamma=\frac{1}{\sqrt3}$，且 $x+y+z=1$，所以</p>
$$P\cos\alpha+Q\cos\beta+R\cos\gamma=\frac{x+(y+1)+(z+2)}{\sqrt3}=\frac{(x+y+z)+3}{\sqrt3}=\frac{4}{\sqrt3}.$$
<p>被积函数是常数，积分 $=$ 常数 $\times$ 圆盘面积 $\pi R^2=\frac{2\pi}{3}$：</p>
$$\iint_{\Sigma_0}=\frac{4}{\sqrt3}\cdot\frac{2\pi}{3}=\frac{8\pi}{3\sqrt3}=\frac{8\sqrt3}{9}\pi.$$
<p><b>第五步：相减得结果。</b></p>
$$I=\iint_{\Sigma_1+\Sigma_0}-\iint_{\Sigma_0}=\frac{2\sqrt3}{9}\pi-\frac{8\sqrt3}{9}\pi=-\frac{6\sqrt3}{9}\pi=-\frac{2\sqrt3}{3}\pi.$$
<p>答案：$I=-\dfrac{2\sqrt3}{3}\pi$。</p>`,
      pitfalls: R`<ul><li><b>认不出曲面</b>：把"直线绕直线旋转"想成圆柱面。要先判断两直线的位置关系：相交（不垂直）→ 圆锥面，平行 → 圆柱面，异面（不垂直）→ 单叶双曲面。本题母线 $z$ 轴与旋转轴交于原点，夹角 $\theta$ 满足 $\cos\theta=\frac{1}{\sqrt3}$，所以是圆锥面。</li><li><b>圆锥的尺寸算错</b>：高是原点到平面 $x+y+z=1$ 的距离 $\frac{\sqrt3}{3}$，半径是底面圆心 $C$ 到 $A(0,0,1)$ 的距离 $\frac{\sqrt6}{3}$，都不是 $\frac{\sqrt2}{2}$。原卷附带的解析就在这里算错了，从而得到错误结果 $\frac{\sqrt2}{4}\pi-1$。</li><li><b>把补面当成三角形</b>：补面是平面 $x+y+z=1$ 上的<b>圆盘</b>，不是该平面在第一卦限中的三角形；它在 $xOy$ 面上的投影是椭圆区域，不是三角形 $\{x\ge0,y\ge0,x+y\le1\}$。由于法向量是常向量，且 $\mathbf F\cdot\mathbf n$ 在补面上是常数 $\frac{4}{\sqrt3}$，用"$\mathbf F\cdot\mathbf n$ × 圆盘面积"的方法最省事。</li><li><b>补面方向取错</b>：补面必须取 $\Omega$ 的外法向（远离原点一侧），否则高斯公式不成立。</li><li><b>最后加减弄反</b>：所求 $=$ 闭曲面积分 $-$ 补面积分。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p>
<ul><li><b>旋转曲面（纬圆法）：</b>母线上取点 $M_0$，曲面上点 $P$ 与 $M_0$ 同纬圆 ⟺ $\overrightarrow{M_0P}\perp$ 轴方向，且 $P$、$M_0$ 到轴上某定点的距离相等；联立消去参数。</li><li><b>第二类曲面积分不封闭 → 补面 + 高斯</b>；补面优先取平面，且散度为常数时三重积分 $=$ 常数 $\times$ 体积。</li><li><b>平面上的通量：</b>法向量是常向量，$\iint\mathbf F\cdot\mathrm d\mathbf S=\iint\mathbf F\cdot\mathbf n\,\mathrm dS$；若 $\mathbf F\cdot\mathbf n$ 在平面上为常数，直接乘面积。</li></ul>
<p><b>题型识别：</b>看到"直线绕直线旋转" → 先判断位置关系定曲面类型；看到"介于两平面之间、外侧" → 补平面用高斯公式；看到被积向量场是"位置向量 + 常向量"且曲面是以原点为顶点的锥面 → 可用"位置向量与锥面相切"的技巧（见另解）。</p>`,
      alt: R`<p><b>另解：拆向量场，利用锥面的几何特点。</b>记 $\mathbf r=(x,y,z)$，$\mathbf c=(0,1,2)$，则 $\mathbf F=(x,\,y+1,\,z+2)=\mathbf r+\mathbf c$。</p>
<p>① 对于以原点为顶点的锥面，曲面上任一点 $P$ 的位置向量 $\overrightarrow{OP}$ 恰好沿着过 $P$ 的母线方向，落在曲面的切平面内，所以 $\mathbf r\cdot\mathbf n=0$。于是 $\iint_{\Sigma_1}\mathbf r\cdot\mathbf n\,\mathrm dS=0$。</p>
<p>② 常向量场 $\mathbf c$ 的散度为 $0$，由高斯公式它穿过封闭曲面 $\Sigma_1+\Sigma_0$ 的总通量为 $0$，所以</p>
$$\iint_{\Sigma_1}\mathbf c\cdot\mathbf n\,\mathrm dS=-\iint_{\Sigma_0}\mathbf c\cdot\mathbf n_0\,\mathrm dS=-\frac{0+1+2}{\sqrt3}\cdot\frac{2\pi}{3}=-\frac{2\pi}{\sqrt3}=-\frac{2\sqrt3}{3}\pi.$$
<p>两部分相加，$I=0-\frac{2\sqrt3}{3}\pi=-\frac{2\sqrt3}{3}\pi$，与补面法结果一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 两种方法：(1) 参数化锥面 P=h·a+√2h(cosφ e1+sinφ e2)，取外法向直接积分得 -2√3π/3；(2) 补面法 3V=2√3π/9，补面通量 8√3π/9，相减得 -2√3π/3。另验证锥面方程 xy+yz+zx=0、半径² = 2/3。原卷自带解析结果 √2π/4−1 有误' },
      flags: ['原卷自带解析的结果为 √2π/4 − 1，有误：其圆锥体积按半径、高均为 √2/2 计算（实为 R=√6/3、H=√3/3），补面通量又按三角形区域 {x,y≥0, x+y≤1} 投影计算（补面实为圆盘）。经补面法与直接参数化两种方法 sympy 验证，正确结果为 −2√3π/3', '原卷解析中旋转曲面写作 (x−t)²+(y−t)²+(z−t)²=3t²，与正确方程不符（正确为 x²+y²+z²=(x+y+z)²，即 xy+yz+zx=0）', 'OCR 题面"曲面侧积分"应为"曲面积分"；旋转轴的参数方程 x=t, y=t, z=t 由残缺 OCR 复原']
    }
  ];
});
