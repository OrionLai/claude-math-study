// 2021 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 12 题：选择 1、2、3、4；填空 11、12、13、14；解答 17、18、19、20
registerYear(2021, function (R) {
  return [
    /* ───────────────────────── 第 1 题 ───────────────────────── */
    {
      id: '2021-1', year: 2021, no: '第1题', type: '选择', score: 5,
      stem: R`函数 $f(x)=\begin{cases}\dfrac{\mathrm{e}^x-1}{x}, & x\neq0,\\ 1, & x=0\end{cases}$ 在 $x=0$ 处（ ）．`,
      options: [R`连续且取得极大值`, R`连续且取得极小值`, R`可导且导数等于零`, R`可导且导数不为零`],
      answer: 'D',
      figure: null,
      kp: ['diff.def', 'lim.cont', 'diff.mono'],
      methods: ['连续的定义', '导数定义', '泰勒公式', '费马引理'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>分段函数在<b>分段点</b>处的三个性质——连续、可导、极值。这是考研最常见的"概念辨析"选择题。</p>
<p><b>为什么一律回到定义：</b>$x=0$ 是分段点，左右两侧的表达式 $\dfrac{\mathrm{e}^x-1}{x}$ 在 $x=0$ 处根本没有意义（分母为 0），而 $f(0)=1$ 是单独规定的。所以既不能"直接代入"判断连续，也不能"先求导再代入"判断可导，只能回到最原始的定义：</p>
<ul><li>连续：$\lim\limits_{x\to0}f(x)$ 是否等于 $f(0)$；</li><li>可导：差商 $\dfrac{f(x)-f(0)}{x-0}$ 的极限是否存在；</li><li>极值：可导点处取极值的必要条件是导数为 $0$（费马引理）。</li></ul>
<p><b>第一性原理的视角：</b>导数的本质就是"差商的极限"，它刻画函数在这一点附近"像一条什么斜率的直线"。如果算出 $f'(0)\neq0$，说明函数在 $0$ 附近像一条斜直线，一侧比 $f(0)$ 大、另一侧比 $f(0)$ 小，自然不可能是极值点。所以这题的全部关键就是把 $f'(0)$ 算出来。</p>`,
      solution: R`<p><b>第一步：判断连续性。</b>由等价无穷小 $\mathrm{e}^x-1\sim x\ (x\to0)$，</p>
$$\lim_{x\to0}f(x)=\lim_{x\to0}\frac{\mathrm{e}^x-1}{x}=1=f(0),$$
<p>极限值等于函数值，所以 $f(x)$ 在 $x=0$ 处连续。</p>
<p><b>第二步：用导数定义求 $f'(0)$。</b></p>
$$f'(0)=\lim_{x\to0}\frac{f(x)-f(0)}{x-0}=\lim_{x\to0}\frac{\frac{\mathrm{e}^x-1}{x}-1}{x}=\lim_{x\to0}\frac{\mathrm{e}^x-1-x}{x^2}.$$
<p>这是 $\frac00$ 型。由泰勒公式 $\mathrm{e}^x=1+x+\dfrac{x^2}{2}+o(x^2)$，分子 $\mathrm{e}^x-1-x=\dfrac{x^2}{2}+o(x^2)$，于是</p>
$$f'(0)=\lim_{x\to0}\frac{\frac{x^2}{2}+o(x^2)}{x^2}=\frac12.$$
<p>（也可以用一次洛必达：$\lim\limits_{x\to0}\dfrac{\mathrm{e}^x-1}{2x}=\dfrac12$。）所以 $f(x)$ 在 $x=0$ 处可导，且 $f'(0)=\dfrac12\neq0$。</p>
<p><b>第三步：逐一判断选项。</b></p>
<ul><li><b>(D) 正确：</b>可导且 $f'(0)=\frac12\neq0$。</li>
<li><b>(C) 错误：</b>导数是 $\frac12$，不是 $0$。</li>
<li><b>(A)(B) 错误：</b>费马引理说：若 $f$ 在 $x_0$ 处可导且 $x_0$ 是极值点，则 $f'(x_0)=0$。它的逆否命题是：可导点处导数不为零，就一定不是极值点。这里 $f'(0)=\frac12\neq0$，所以 $x=0$ 既不是极大值点也不是极小值点。</li></ul>
<p>直观地看：$f'(0)=\frac12>0$ 意味着 $\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x}=\frac12>0$，由极限的局部保号性，在 $0$ 附近 $\dfrac{f(x)-f(0)}{x}>0$，即 $x>0$ 时 $f(x)>f(0)$、$x<0$ 时 $f(x)<f(0)$——函数"穿过" $f(0)$ 往上走，当然不是极值。</p>
<p>故选 <b>D</b>。</p>`,
      pitfalls: R`<ul><li><b>先求导再代入：</b>对 $\dfrac{\mathrm{e}^x-1}{x}$ 求导得 $\dfrac{x\mathrm{e}^x-\mathrm{e}^x+1}{x^2}$，再把 $x=0$ 代进去——分母为 $0$，毫无意义。分段点处的导数必须用定义（或在已知连续的前提下用"导数极限定理"）。</li><li><b>把"连续"误当成"极值"的信号：</b>看到 $f(0)=1$ 恰好"补"上了极限值，就以为这里有什么特殊，于是选 A 或 B。可导点是不是极值，先看导数是不是 $0$。</li><li><b>泰勒展开阶数不够：</b>只写 $\mathrm{e}^x=1+x+o(x)$，则分子 $\mathrm{e}^x-1-x=o(x)$，除以 $x^2$ 后无法确定极限。分母是 $x^2$，分子就要展开到 $x^2$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>分段函数在分段点处的问题——<b>一律回到定义</b>：连续看"极限 = 函数值"，可导看"差商极限"，极值看"可导点处导数是否为 0、或用定义比较大小"。</p>
<p><b>题型识别：</b></p><ul><li>看到"分段点处是否可导 / 导数是多少" → 想到导数定义 $\lim\dfrac{f(x)-f(x_0)}{x-x_0}$。</li><li>看到 $\mathrm{e}^x-1-x$ → 想到 $\sim\dfrac{x^2}{2}$；看到 $x-\sin x$ → $\sim\dfrac{x^3}{6}$；看到 $x-\ln(1+x)$ → $\sim\dfrac{x^2}{2}$。</li><li>看到"可导点 + 导数不为零" → 立刻排除极值（费马引理逆否）。</li></ul>`,
      alt: R`<p><b>导数极限定理：</b>若 $f$ 在 $x_0$ 连续、在 $x_0$ 的去心邻域内可导，且 $\lim\limits_{x\to x_0}f'(x)=A$，则 $f'(x_0)=A$（由拉格朗日中值定理可证）。本题第一步已证连续，而 $x\neq0$ 时</p>$$f'(x)=\frac{x\mathrm{e}^x-\mathrm{e}^x+1}{x^2}\to\frac12\quad(x\to0),$$<p>所以 $f'(0)=\frac12$。顺带还能看出：令 $g(x)=x\mathrm{e}^x-\mathrm{e}^x+1$，$g(0)=0$，$g'(x)=x\mathrm{e}^x$ 在 $0$ 左负右正，$g$ 在 $0$ 取最小值 $0$，故 $x\neq0$ 时 $f'(x)>0$，$f$ 在整个实数轴上严格单调增加，当然没有极值。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit((e^x-1)/x, x, 0)=1=f(0)；limit((f(x)-1)/x, x, 0)=1/2；f\'(x) 分子 g=x e^x-e^x+1，g\'=x e^x，故 f\'>0（x≠0）' },
      flags: []
    },

    /* ───────────────────────── 第 2 题 ───────────────────────── */
    {
      id: '2021-2', year: 2021, no: '第2题', type: '选择', score: 5,
      stem: R`设函数 $f(x,y)$ 可微，且 $f(x+1,\mathrm{e}^x)=x(x+1)^2$，$f(x,x^2)=2x^2\ln x$，则 $\mathrm{d}f(1,1)=$（ ）．`,
      options: [R`$\mathrm{d}x+\mathrm{d}y$`, R`$\mathrm{d}x-\mathrm{d}y$`, R`$\mathrm{d}y$`, R`$-\mathrm{d}y$`],
      answer: 'C',
      figure: null,
      kp: ['mdiff.chain', 'mdiff.diffable'],
      methods: ['多元复合函数链式法则', '解线性方程组'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>全微分的计算公式 $\mathrm{d}f=f'_x\,\mathrm{d}x+f'_y\,\mathrm{d}y$ 与多元复合函数的链式法则。</p>
<p><b>目标是什么：</b>要求 $\mathrm{d}f(1,1)$，本质上就是要求两个数：$f'_1(1,1)$ 和 $f'_2(1,1)$。两个未知数，需要两个方程——题目恰好给了两个恒等式。</p>
<p><b>为什么想到"两边对 $x$ 求导"：</b>我们不知道 $f$ 的表达式，只知道它沿着两条曲线 $(x+1,\mathrm{e}^x)$ 与 $(x,x^2)$ 上的取值。恒等式对一切 $x$ 成立，两边就可以对 $x$ 求导；左边是复合函数，用链式法则就会"吐出"偏导数。再选取合适的 $x$，让点 $(x+1,\mathrm{e}^x)$ 和 $(x,x^2)$ 都落在 $(1,1)$：前者取 $x=0$，后者取 $x=1$。</p>
<p><b>几何直观：</b>沿一条曲线求导 = 梯度 · 切向量。两条曲线在 $(1,1)$ 处的切向量分别是 $(1,\mathrm{e}^0)=(1,1)$ 和 $(1,2\cdot1)=(1,2)$，不平行，所以两个方向导数恰好能唯一确定梯度 $(f'_1,f'_2)$。</p>`,
      solution: R`<p><b>第一步：明确目标。</b>因为 $f$ 可微，$\mathrm{d}f(1,1)=f'_1(1,1)\,\mathrm{d}x+f'_2(1,1)\,\mathrm{d}y$，只需求出两个偏导数。（这里 $f'_1$、$f'_2$ 分别表示 $f$ 对第一、第二个位置变量的偏导数。"可微"保证了链式法则成立。）</p>
<p><b>第二步：对第一个恒等式求导。</b>$f(x+1,\mathrm{e}^x)=x(x+1)^2$ 两边对 $x$ 求导。左边：第一个位置是 $x+1$，对 $x$ 的导数为 $1$；第二个位置是 $\mathrm{e}^x$，导数为 $\mathrm{e}^x$。右边用乘积法则：</p>
$$f'_1(x+1,\mathrm{e}^x)\cdot1+f'_2(x+1,\mathrm{e}^x)\cdot\mathrm{e}^x=(x+1)^2+2x(x+1).$$
<p>取 $x=0$，此时 $(x+1,\mathrm{e}^x)=(1,1)$，右边 $=1+0=1$，得</p>
$$f'_1(1,1)+f'_2(1,1)=1.\qquad①$$
<p><b>第三步：对第二个恒等式求导。</b>$f(x,x^2)=2x^2\ln x$ 两边对 $x$ 求导：</p>
$$f'_1(x,x^2)\cdot1+f'_2(x,x^2)\cdot2x=4x\ln x+2x^2\cdot\frac1x=4x\ln x+2x.$$
<p>取 $x=1$，此时 $(x,x^2)=(1,1)$，右边 $=0+2=2$，得</p>
$$f'_1(1,1)+2f'_2(1,1)=2.\qquad②$$
<p><b>第四步：解方程组。</b>② − ① 得 $f'_2(1,1)=1$，代回 ① 得 $f'_1(1,1)=0$。所以</p>
$$\mathrm{d}f(1,1)=0\cdot\mathrm{d}x+1\cdot\mathrm{d}y=\mathrm{d}y.$$
<p><b>第五步：检查错误选项。</b>把各选项对应的 $(f'_1,f'_2)$ 代入方程 ①：(A) $(1,1)$ 得 $2\neq1$；(B) $(1,-1)$ 得 $0\neq1$；(D) $(0,-1)$ 得 $-1\neq1$。都不满足，只有 (C) $(0,1)$ 同时满足 ①②。</p>
<p>故选 <b>C</b>。</p>`,
      pitfalls: R`<ul><li><b>丢掉内层导数：</b>第二个位置是 $\mathrm{e}^x$ 和 $x^2$，求导时必须乘上 $\mathrm{e}^x$ 和 $2x$。本题中 ① 因 $\mathrm{e}^0=1$ 恰好不受影响，但 ② 若漏乘 $2x$ 就变成 $f'_1+f'_2=2$，与 ① 的 $f'_1+f'_2=1$ 自相矛盾——一旦出现这种矛盾，首先回头检查内层导数。</li><li><b>代错点：</b>在第一个式子里直接令 $x=1$，得到的是点 $(2,\mathrm{e})$ 处的信息，与 $(1,1)$ 无关。一定先问"$x$ 取多少时括号里恰好是 $(1,1)$"。</li><li><b>以为要把 $f$ 解出来：</b>题目给的信息不足以确定 $f$ 本身，也不需要——只要某一点的偏导数。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"已知 $f(\varphi(x),\psi(x))=g(x)$，求某点偏导或全微分" → 两边对 $x$ 求导（链式法则）→ 选 $x$ 使 $(\varphi(x),\psi(x))$ 落到目标点 → 得到关于偏导数的线性方程。</p>
<p><b>题型识别：</b></p><ul><li>看到 $\mathrm{d}f(x_0,y_0)$ → 想到"求两个偏导数"。</li><li>看到抽象函数满足的恒等式 → 想到"恒等式两边可以求导"。</li><li>两个恒等式 ↔ 两个方程 ↔ 两个未知偏导数，个数对上就是正确的方向。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: d/dx[x(x+1)^2] 在 x=0 处为 1；d/dx[2x^2 ln x] 在 x=1 处为 2；解 a+b=1, a+2b=2 得 a=0, b=1' },
      flags: ['OCR 修正：题干 "\\mathrm{df}(1,1)" 改为 $\\mathrm{d}f(1,1)$；选项 (C)(D) 的 "dy" 统一写成 $\\mathrm{d}y$。']
    },

    /* ───────────────────────── 第 3 题 ───────────────────────── */
    {
      id: '2021-3', year: 2021, no: '第3题', type: '选择', score: 5,
      stem: R`设函数 $f(x)=\dfrac{\sin x}{1+x^2}$ 在 $x=0$ 处的 $3$ 次泰勒多项式为 $ax+bx^2+cx^3$，则（ ）．`,
      options: [R`$a=1,\ b=0,\ c=-\dfrac76$`, R`$a=1,\ b=0,\ c=\dfrac76$`, R`$a=-1,\ b=-1,\ c=-\dfrac76$`, R`$a=-1,\ b=-1,\ c=\dfrac76$`],
      answer: 'A',
      figure: null,
      kp: ['diff.taylor', 'series.expand'],
      methods: ['间接展开法', '奇偶性', '待定系数法'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>泰勒多项式的求法。$3$ 次泰勒多项式就是 $f(x)=ax+bx^2+cx^3+o(x^3)$ 中的多项式部分。</p>
<p><b>为什么不直接求导：</b>按定义，$c=\dfrac{f'''(0)}{3!}$，要对商 $\dfrac{\sin x}{1+x^2}$ 求三阶导，计算量很大、极易出错。更聪明的做法是<b>间接展开</b>：$\sin x$ 和 $\dfrac{1}{1+x^2}$ 的展开式都是现成的，把它们相乘、只保留到 $x^3$ 即可。这么做之所以合法，是因为<b>泰勒展开式是唯一的</b>：只要写成"多项式 $+\,o(x^3)$"的形式，这个多项式就一定是泰勒多项式。</p>
<p><b>先用"看结构"排除：</b>$f(-x)=\dfrac{\sin(-x)}{1+x^2}=-f(x)$，$f$ 是奇函数，展开式里只有奇次项，所以 $b=0$；又 $f(x)\approx x$（$x$ 很小时分母约为 $1$），所以 $a=1$。一眼就能排除 C、D。</p>`,
      solution: R`<p><b>第一步：用奇偶性确定 $b$。</b>$f$ 是奇函数。若 $f(x)=ax+bx^2+cx^3+o(x^3)$，则 $-f(-x)=ax-bx^2+cx^3+o(x^3)$。两者是同一个函数的展开，由唯一性，$x^2$ 的系数相等：$b=-b$，所以 $b=0$。</p>
<p><b>第二步：写出两个已知展开式。</b>$x\to0$ 时</p>
$$\sin x=x-\frac{x^3}{6}+o(x^3),\qquad \frac{1}{1+x^2}=1-x^2+o(x^3).$$
<p>第二个式子来自 $\dfrac{1}{1+u}=1-u+u^2-\cdots$，令 $u=x^2$，而 $u^2=x^4=o(x^3)$。</p>
<p><b>第三步：相乘，只保留到 $x^3$。</b></p>
$$f(x)=\left(x-\frac{x^3}{6}+o(x^3)\right)\left(1-x^2+o(x^3)\right)=x-x^3-\frac{x^3}{6}+o(x^3)=x-\frac76x^3+o(x^3).$$
<p>乘开时，$x\cdot(-x^2)=-x^3$ 与 $-\dfrac{x^3}{6}\cdot1$ 是仅有的两个三次项；$-\dfrac{x^3}{6}\cdot(-x^2)=\dfrac{x^5}{6}$ 以及与 $o(x^3)$ 相乘的项都是 $o(x^3)$。</p>
<p><b>第四步：读出系数。</b>由泰勒展开的唯一性（若两个次数不超过 $3$ 的多项式之差是 $o(x^3)$，则它们的各项系数必然相同），得 $a=1,\ b=0,\ c=-\dfrac76$。</p>
<p><b>错误选项分析：</b>(B) $c$ 的符号错——两个三次项 $-x^3$ 与 $-\frac{x^3}{6}$ 同号相加，结果必为负；(C)(D) 的 $a=-1$ 与 $f'(0)=\lim\limits_{x\to0}\frac{\sin x}{x(1+x^2)}=1$ 矛盾，$b=-1$ 又与奇函数矛盾。</p>
<p>故选 <b>A</b>。</p>`,
      pitfalls: R`<ul><li><b>漏掉交叉项：</b>只把 $\sin x$ 的展开抄下来，得 $c=-\frac16$；忘了分母 $1+x^2$ 还贡献一个 $-x^3$。</li><li><b>把除法当乘法：</b>误写成 $\sin x\cdot(1+x^2)$，得到 $c=-\frac16+1=\frac56$，符号与大小全错。分母要先变成 $\frac{1}{1+x^2}=1-x^2+\cdots$ 再乘。</li><li><b>展开精度不匹配：</b>乘积中一个因子从 $x$ 开始，另一个因子只需展开到 $x^2$；判断"需要几阶"的依据是乘积后的最高次不低于 $3$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>求复杂函数的低阶泰勒多项式，优先用<b>已知展开式做四则运算</b>（间接展开），而不是逐阶求导；理论依据是展开式的唯一性。</p>
<p><b>题型识别：</b></p><ul><li>看到"$n$ 次泰勒多项式 / $x^n$ 的系数 / $f^{(n)}(0)$" → 想到间接展开。</li><li>看到奇函数 → 只有奇次项；偶函数 → 只有偶次项，可以先排除选项。</li><li>商的展开 → 把分母写成 $\frac{1}{1+u}$ 的展开再乘，或用待定系数法。</li></ul>`,
      alt: R`<p><b>待定系数法：</b>由 $\sin x=(1+x^2)\left(ax+bx^2+cx^3+o(x^3)\right)$，右边乘开为 $ax+bx^2+(c+a)x^3+o(x^3)$，与 $x-\frac{x^3}{6}$ 比较系数：</p>$$a=1,\qquad b=0,\qquad c+a=-\frac16\ \Rightarrow\ c=-\frac76.$$<p>这种做法避免了"$\frac{1}{1+x^2}$ 要展开到几阶"的犹豫，处理"商"的展开特别好用。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: series(sin(x)/(1+x**2), x, 0, 5) = x - 7x^3/6 + O(x^5)' },
      flags: []
    },

    /* ───────────────────────── 第 4 题 ───────────────────────── */
    {
      id: '2021-4', year: 2021, no: '第4题', type: '选择', score: 5,
      stem: R`设函数 $f(x)$ 在区间 $[0,1]$ 上连续，则 $\displaystyle\int_0^1f(x)\,\mathrm{d}x=$（ ）．`,
      options: [
        R`$\displaystyle\lim_{n\to\infty}\sum_{k=1}^{n}f\left(\frac{2k-1}{2n}\right)\frac{1}{2n}$`,
        R`$\displaystyle\lim_{n\to\infty}\sum_{k=1}^{n}f\left(\frac{2k-1}{2n}\right)\frac{1}{n}$`,
        R`$\displaystyle\lim_{n\to\infty}\sum_{k=1}^{2n}f\left(\frac{k-1}{2n}\right)\frac{1}{n}$`,
        R`$\displaystyle\lim_{n\to\infty}\sum_{k=1}^{2n}f\left(\frac{k}{2n}\right)\frac{2}{n}$`
      ],
      answer: 'B',
      figure: null,
      kp: ['int.def', 'lim.seqcalc'],
      methods: ['定积分定义（黎曼和）', '特殊值法'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>定积分的定义——"分割、取点、求和、取极限"。</p>
<p><b>回到定义：</b>把 $[0,1]$ 分成若干小区间，在第 $k$ 个小区间里任取一点 $\xi_k$，作和 $\sum f(\xi_k)\Delta x_k$，当最大小区间长度趋于 $0$ 时，和的极限就是 $\int_0^1f(x)\,\mathrm{d}x$。$f$ 连续保证可积，所以<b>点取在小区间内的任何位置都行</b>。</p>
<p><b>怎么判断一个和式是不是黎曼和：</b>问三个问题——(1) 小区间长度 $\Delta x$ 是多少？(2) 和式里乘的"权重"是不是恰好等于 $\Delta x$？(3) 取的点是不是落在对应的小区间里？最快的检验是：<b>项数 × 权重 必须等于区间长度 $1$</b>。</p>
<p><b>特殊值法的动机：</b>正确选项必须对<b>一切</b>连续函数成立，那么对最简单的 $f\equiv1$ 也必须成立。$f\equiv1$ 时 $\int_0^1=1$，而各选项的和恰好等于"项数 × 权重"，一算便知。</p>`,
      solution: R`<p><b>第一步：用 $f\equiv1$ 筛选。</b>$\int_0^11\,\mathrm{d}x=1$，各选项的和式变成"项数 × 权重"：</p>
<ul><li>(A) $n\cdot\dfrac{1}{2n}=\dfrac12$；</li><li>(B) $n\cdot\dfrac1n=1$；</li><li>(C) $2n\cdot\dfrac1n=2$；</li><li>(D) $2n\cdot\dfrac2n=4$。</li></ul>
<p>只有 (B) 等于 $1$，A、C、D 对 $f\equiv1$ 就不成立，一定错。</p>
<p><b>第二步：证明 (B) 确实正确。</b>把 $[0,1]$ 作 $n$ 等分，第 $k$ 个小区间为 $\left[\dfrac{k-1}{n},\dfrac{k}{n}\right]$，长度 $\Delta x=\dfrac1n$。注意</p>
$$\frac{2k-1}{2n}=\frac12\left(\frac{k-1}{n}+\frac{k}{n}\right),$$
<p>它恰好是第 $k$ 个小区间的<b>中点</b>，当然落在该小区间内。于是</p>
$$\sum_{k=1}^{n}f\left(\frac{2k-1}{2n}\right)\frac1n=\sum_{k=1}^{n}f(\xi_k)\Delta x,\qquad \xi_k=\frac{2k-1}{2n}\in\left[\frac{k-1}{n},\frac kn\right],$$
<p>这正是 $f$ 在 $[0,1]$ 上的一个黎曼和。$n\to\infty$ 时 $\Delta x=\frac1n\to0$，$f$ 连续从而可积，所以极限等于 $\int_0^1f(x)\,\mathrm{d}x$。</p>
<p><b>第三步：看清错误选项各等于什么。</b>同样的道理可知：(A) 的权重只有 $\Delta x$ 的一半，极限为 $\frac12\int_0^1f(x)\,\mathrm{d}x$；(C) 是把 $[0,1]$ 作 $2n$ 等分取左端点，$\Delta x=\frac{1}{2n}$，而权重 $\frac1n=2\Delta x$，极限为 $2\int_0^1f(x)\,\mathrm{d}x$；(D) 取右端点，权重 $\frac2n=4\Delta x$，极限为 $4\int_0^1f(x)\,\mathrm{d}x$。</p>
<p><svg viewBox="0 0 320 175" width="320" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>中点黎曼和示意（n=4）</title><rect x="20" y="88.4" width="70" height="61.6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="0.8"/><rect x="90" y="70.9" width="70" height="79.1" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="0.8"/><rect x="160" y="60.9" width="70" height="89.1" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="0.8"/><rect x="230" y="58.4" width="70" height="91.6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="0.8"/><polyline points="20,100 48,90.6 76,82.4 104,75.4 132,69.6 160,65 188,61.6 216,59.4 244,58.4 272,58.6 300,60" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="10" y1="150" x2="312" y2="150" stroke="currentColor" stroke-width="1"/><circle cx="55" cy="88.4" r="2.6" fill="currentColor"/><circle cx="125" cy="70.9" r="2.6" fill="currentColor"/><circle cx="195" cy="60.9" r="2.6" fill="currentColor"/><circle cx="265" cy="58.4" r="2.6" fill="currentColor"/><text x="17" y="165" font-size="11" fill="currentColor">0</text><text x="297" y="165" font-size="11" fill="currentColor">1</text><text x="42" y="165" font-size="10" fill="currentColor">1/(2n)</text><text x="112" y="165" font-size="10" fill="currentColor">3/(2n)</text><text x="242" y="40" font-size="11" fill="currentColor">y = f(x)</text><text x="20" y="22" font-size="11" fill="currentColor">每个矩形宽 1/n，高取中点处的函数值</text></svg></p>
<p>故选 <b>B</b>。</p>`,
      pitfalls: R`<ul><li><b>把"取点的分母"当成"等分的份数"：</b>(B) 里出现 $2n$，但它只是用来表示中点，区间仍是 $n$ 等分，宽度是 $\frac1n$。</li><li><b>只看取点不看权重：</b>(C)(D) 的取点都在 $[0,1]$ 内且合法，错就错在权重与小区间长度不匹配。</li><li><b>以为只能取端点：</b>定积分定义里 $\xi_k$ 可以是小区间中的任意一点；中点、左端点、右端点都可以，只要 $f$ 可积。有的资料把 $f\left(\frac{2k-1}{2n}\right)$ 直接换成 $f\left(\frac{2k}{2n}\right)$，这一步需要额外的理由（连续函数的一致连续性），不如直接认出"中点取点"干净。</li></ul>`,
      summary: R`<p><b>方法要点：</b>和式极限化定积分的标准形：$\lim\limits_{n\to\infty}\dfrac{b-a}{n}\sum\limits_{k=1}^{n}f(\xi_k)=\int_a^bf(x)\,\mathrm{d}x$，其中 $\xi_k$ 落在第 $k$ 个小区间内。</p>
<p><b>题型识别：</b></p><ul><li>看到 $\dfrac1n\sum f\left(\dfrac kn\right)$、$\dfrac1n\sum f\left(\dfrac{2k-1}{2n}\right)$ 之类 → 想到 $\int_0^1f(x)\,\mathrm{d}x$。</li><li>选择题判断和式是否等于积分 → 先用 $f\equiv1$ 检查"项数 × 权重 = 区间长度"。</li><li>口诀：<b>宽度乘高度，点要落在格子里</b>。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 对 f=x^2 与 f=e^x 分别求四个和式的极限，得 (A)=½∫, (B)=∫, (C)=2∫, (D)=4∫，只有 B 与 ∫_0^1 f 相等' },
      flags: ['参考解析在 (B) 中把 f((2k−1)/(2n)) 直接换成 f(2k/(2n)) 而未说明理由；本讲解改为直接认出中点取点的黎曼和，结论一致。']
    },

    /* ───────────────────────── 第 11 题 ───────────────────────── */
    {
      id: '2021-11', year: 2021, no: '第11题', type: '填空', score: 5,
      stem: R`$\displaystyle\int_0^{+\infty}\frac{\mathrm{d}x}{x^2+2x+2}=$ ______．`,
      options: null,
      answer: R`$\dfrac{\pi}{4}$`,
      figure: null,
      kp: ['int.improper', 'int.indef'],
      methods: ['配方', '反正切积分公式', '反常积分定义'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>无穷限反常积分的计算，以及"分母是二次式"这一类有理函数的积分。</p>
<p><b>为什么想到配方 + 反正切：</b>分母 $x^2+2x+2$ 的判别式 $\Delta=4-8<0$，没有实根，不能因式分解拆成部分分式。这类二次式的标准处理是<b>配方</b>成 $(x+1)^2+1$，于是被积函数变成 $\dfrac{1}{1+u^2}$ 的样子，而 $\dfrac{1}{1+u^2}$ 的原函数正是 $\arctan u$。</p>
<p><b>反常积分怎么算：</b>上限是 $+\infty$，按定义是 $\lim\limits_{b\to+\infty}\int_0^b$。先求原函数，再让上限趋于无穷，$\arctan$ 趋于 $\frac{\pi}{2}$。</p>`,
      solution: R`<p><b>第一步：配方。</b></p>
$$x^2+2x+2=(x^2+2x+1)+1=(x+1)^2+1.$$
<p><b>第二步：求原函数。</b>令 $u=x+1$，$\mathrm{d}u=\mathrm{d}x$：</p>
$$\int\frac{\mathrm{d}x}{(x+1)^2+1}=\int\frac{\mathrm{d}u}{u^2+1}=\arctan u+C=\arctan(x+1)+C.$$
<p><b>第三步：按反常积分的定义取极限。</b></p>
$$\int_0^{+\infty}\frac{\mathrm{d}x}{x^2+2x+2}=\lim_{b\to+\infty}\Big[\arctan(x+1)\Big]_0^b=\lim_{b\to+\infty}\arctan(b+1)-\arctan1=\frac{\pi}{2}-\frac{\pi}{4}=\frac{\pi}{4}.$$
<p>（这里也顺便说明了积分收敛。事先也可以判断：$x\to+\infty$ 时被积函数 $\sim\dfrac{1}{x^2}$，$p=2>1$，收敛。）</p>`,
      pitfalls: R`<ul><li><b>把 $\arctan1$ 算成 $1$ 或 $0$：</b>$\tan\frac{\pi}{4}=1$，所以 $\arctan1=\frac{\pi}{4}$。</li><li><b>忘了下限：</b>只写 $\arctan(+\infty)=\frac{\pi}{2}$，答案错成 $\frac{\pi}{2}$。下限 $x=0$ 对应 $u=1$，不是 $u=0$。</li><li><b>硬做部分分式：</b>判别式小于 $0$ 时分母在实数范围内分解不了，这条路走不通。</li></ul>`,
      summary: R`<p><b>方法要点：</b>$\displaystyle\int\frac{\mathrm{d}x}{x^2+px+q}$：判别式 $<0$ → 配方 → $\displaystyle\int\frac{\mathrm{d}u}{u^2+a^2}=\frac1a\arctan\frac ua+C$；判别式 $>0$ → 因式分解后拆成部分分式，得到对数。</p>
<p><b>题型识别：</b></p><ul><li>看到二次分母且无实根 → 配方 + $\arctan$。</li><li>看到上限 $+\infty$ → 原函数在无穷远处取极限；$\arctan(+\infty)=\frac{\pi}{2}$、$\arctan(-\infty)=-\frac{\pi}{2}$。</li></ul>`,
      alt: R`<p><b>三角换元：</b>令 $x+1=\tan\theta$，$x:0\to+\infty$ 对应 $\theta:\frac{\pi}{4}\to\frac{\pi}{2}$，$\mathrm{d}x=\sec^2\theta\,\mathrm{d}\theta$，$(x+1)^2+1=\sec^2\theta$，于是原式 $=\displaystyle\int_{\pi/4}^{\pi/2}\mathrm{d}\theta=\frac{\pi}{4}$。这其实就是 $\arctan$ 公式的来历。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(1/(x**2+2*x+2), (x, 0, oo)) = pi/4' },
      flags: ['OCR 修正：题号 "11)" 补全为 (11)。']
    },

    /* ───────────────────────── 第 12 题 ───────────────────────── */
    {
      id: '2021-12', year: 2021, no: '第12题', type: '填空', score: 5,
      stem: R`设函数 $y=y(x)$ 由参数方程 $\begin{cases}x=2\mathrm{e}^t+t+1,\\ y=4(t-1)\mathrm{e}^t+t^2\end{cases}$ 所确定，则 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=0}=$ ______．`,
      options: null,
      answer: R`$\dfrac23$`,
      figure: null,
      kp: ['diff.calc'],
      methods: ['参数方程求导', '链式法则'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>参数方程确定的函数的二阶导数。</p>
<p><b>关键是想清楚"对谁求导"：</b>$\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{y'(t)}{x'(t)}$ 求出来以后，它仍然是 $t$ 的函数。二阶导数是"$\frac{\mathrm{d}y}{\mathrm{d}x}$ 再对 $x$ 求导"，而不是对 $t$ 求导。由于 $x$ 和 $t$ 之间隔着一层关系，对 $x$ 求导 = 先对 $t$ 求导、再除以 $\dfrac{\mathrm{d}x}{\mathrm{d}t}$（链式法则 + 反函数求导）。</p>
<p><b>为什么这题算起来很顺：</b>算出 $y'(t)=2t(2\mathrm{e}^t+1)$，恰好含有 $x'(t)=2\mathrm{e}^t+1$ 这个因子，一阶导化简为 $2t$。命题人有意设计成能约分，这也提示我们：算完一阶导先化简，再求二阶导。</p>`,
      solution: R`<p><b>第一步：求 $x'(t)$ 与 $y'(t)$。</b></p>
$$x'(t)=2\mathrm{e}^t+1,$$
$$y'(t)=4\mathrm{e}^t+4(t-1)\mathrm{e}^t+2t=4t\mathrm{e}^t+2t=2t(2\mathrm{e}^t+1).$$
<p>（$4(t-1)\mathrm{e}^t$ 用乘积法则：$4\cdot\mathrm{e}^t+4(t-1)\cdot\mathrm{e}^t=4t\mathrm{e}^t$。）由于 $x'(t)>0$，$x$ 关于 $t$ 严格单增，存在反函数 $t=t(x)$，$y$ 确实是 $x$ 的函数。</p>
<p><b>第二步：一阶导数。</b></p>
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y'(t)}{x'(t)}=\frac{2t(2\mathrm{e}^t+1)}{2\mathrm{e}^t+1}=2t.$$
<p><b>第三步：二阶导数。</b>$\frac{\mathrm{d}y}{\mathrm{d}x}=2t$ 是 $t$ 的函数，对 $x$ 求导要用链式法则 $\dfrac{\mathrm{d}}{\mathrm{d}x}=\dfrac{\mathrm{d}}{\mathrm{d}t}\cdot\dfrac{\mathrm{d}t}{\mathrm{d}x}$，而 $\dfrac{\mathrm{d}t}{\mathrm{d}x}=\dfrac{1}{x'(t)}$：</p>
$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}(2t)}{\mathrm{d}t}\cdot\frac{1}{x'(t)}=\frac{2}{2\mathrm{e}^t+1}.$$
<p><b>第四步：代入 $t=0$。</b></p>
$$\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=0}=\frac{2}{2+1}=\frac23.$$`,
      pitfalls: R`<ul><li><b>二阶导写成 $\dfrac{y''(t)}{x''(t)}$：</b>$y''(0)=6$、$x''(0)=2$，会得到错误答案 $3$。二阶导不是"分子分母各求二阶导"。</li><li><b>对 $t$ 求导后忘了再除以 $x'(t)$：</b>得到 $\frac{\mathrm{d}(2t)}{\mathrm{d}t}=2$，错。</li><li><b>$y'(t)$ 漏项：</b>$4(t-1)\mathrm{e}^t$ 求导时漏掉 $4\mathrm{e}^t$ 这一项，后面就无法约分。</li></ul>`,
      summary: R`<p><b>方法要点：</b>参数方程 $x=x(t),\ y=y(t)$：</p>$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y'(t)}{x'(t)},\qquad \frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)'_t}{x'(t)}=\frac{y''x'-y'x''}{(x')^3}.$$
<p><b>题型识别：</b></p><ul><li>看到参数方程求二阶导 → "对 $t$ 求导后，再除以一次 $x'(t)$"。</li><li>算完一阶导先化简，往往会出现可约的公因子。</li></ul>`,
      alt: R`<p><b>直接套公式验证：</b>$t=0$ 时 $x'=3,\ x''=2,\ y'=0,\ y''=4\mathrm{e}^t+4t\mathrm{e}^t+2\big|_{t=0}=6$，于是</p>$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{y''x'-y'x''}{(x')^3}=\frac{6\cdot3-0\cdot2}{27}=\frac23.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy: dy/dx 化简为 2t，d²y/dx² = 2/(2e^t+1)，t=0 时为 2/3' },
      flags: ['OCR 修正：原文题号识别为 "(2)"，按顺序应为第 (12) 题。']
    },

    /* ───────────────────────── 第 13 题 ───────────────────────── */
    {
      id: '2021-13', year: 2021, no: '第13题', type: '填空', score: 5,
      stem: R`欧拉方程 $x^2y''+xy'-4y=0$ 满足条件 $y(1)=1$，$y'(1)=2$ 的解为 $y=$ ______．`,
      options: null,
      answer: R`$x^2$`,
      figure: null,
      kp: ['ode.euler', 'ode.const'],
      methods: ['欧拉方程变换 x = e^t', '常系数齐次线性方程', '初值定常数'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>欧拉方程的解法。欧拉方程的特征是：每一项都是 $x^k y^{(k)}$ 的形式——<b>$x$ 的幂次与导数的阶数相同</b>。</p>
<p><b>为什么用 $x=\mathrm{e}^t$：</b>求一次导，函数的"次数"降一次（$(x^r)'=rx^{r-1}$），再乘一个 $x$ 又升回来。所以 $x\dfrac{\mathrm{d}}{\mathrm{d}x}$ 作用在幂函数 $x^r$ 上只是乘了一个常数 $r$——它对幂函数而言就像"常系数"。令 $x=\mathrm{e}^t$，则 $x\dfrac{\mathrm{d}}{\mathrm{d}x}=\dfrac{\mathrm{d}}{\mathrm{d}t}$，变系数方程立即变成常系数方程，而常系数方程我们有特征方程这一套成熟方法。</p>
<p>初始条件给在 $x=1>0$ 处，所以在 $x>0$ 上讨论，令 $x=\mathrm{e}^t$ 是合法的。</p>`,
      solution: R`<p><b>第一步：推导变换公式。</b>令 $x=\mathrm{e}^t$，即 $t=\ln x$，$\dfrac{\mathrm{d}t}{\mathrm{d}x}=\dfrac1x$。由链式法则</p>
$$y'=\frac{\mathrm{d}y}{\mathrm{d}t}\cdot\frac1x\quad\Rightarrow\quad xy'=\frac{\mathrm{d}y}{\mathrm{d}t}.$$
<p>再求一次导（乘积法则，注意 $\frac{\mathrm{d}y}{\mathrm{d}t}$ 也是通过 $t$ 依赖于 $x$ 的）：</p>
$$y''=-\frac{1}{x^2}\frac{\mathrm{d}y}{\mathrm{d}t}+\frac1x\cdot\frac{\mathrm{d}^2y}{\mathrm{d}t^2}\cdot\frac1x\quad\Rightarrow\quad x^2y''=\frac{\mathrm{d}^2y}{\mathrm{d}t^2}-\frac{\mathrm{d}y}{\mathrm{d}t}.$$
<p><b>第二步：代入原方程。</b></p>
$$\left(\frac{\mathrm{d}^2y}{\mathrm{d}t^2}-\frac{\mathrm{d}y}{\mathrm{d}t}\right)+\frac{\mathrm{d}y}{\mathrm{d}t}-4y=0\quad\Rightarrow\quad\frac{\mathrm{d}^2y}{\mathrm{d}t^2}-4y=0.$$
<p><b>第三步：解常系数方程。</b>特征方程 $r^2-4=0$，$r=\pm2$，通解</p>
$$y=C_1\mathrm{e}^{2t}+C_2\mathrm{e}^{-2t}=C_1x^2+\frac{C_2}{x^2}.$$
<p><b>第四步：由初值定常数。</b>$y'=2C_1x-\dfrac{2C_2}{x^3}$。</p>
$$y(1)=C_1+C_2=1,\qquad y'(1)=2C_1-2C_2=2\ \Rightarrow\ C_1-C_2=1.$$
<p>两式相加得 $C_1=1$，相减得 $C_2=0$。所以 $y=x^2$。</p>
<p><b>第五步：验算。</b>$y=x^2$，$y'=2x$，$y''=2$：$x^2\cdot2+x\cdot2x-4x^2=0$ ✓；$y(1)=1$，$y'(1)=2$ ✓。</p>`,
      pitfalls: R`<ul><li><b>把 $x^2y''$ 写成 $\frac{\mathrm{d}^2y}{\mathrm{d}t^2}$：</b>漏掉 $-\frac{\mathrm{d}y}{\mathrm{d}t}$。正确的是 $x^2y''=D(D-1)y$，其中 $D=\frac{\mathrm{d}}{\mathrm{d}t}$。</li><li><b>初始条件的导数对象搞错：</b>$y'(1)$ 是对 $x$ 的导数。本题 $x=1$ 时恰好 $\frac{\mathrm{d}y}{\mathrm{d}t}=x\,y'=y'$，看不出差别；但在其他点上两者差一个因子 $x$，最稳妥的做法是先换回 $x$ 再代初值。</li><li><b>忘了换回原变量：</b>答案要写成 $x$ 的函数，$\mathrm{e}^{2t}=x^2$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>欧拉方程 $x^ny^{(n)}+\cdots+a_1xy'+a_0y=f(x)$：令 $x=\mathrm{e}^t$，记 $D=\frac{\mathrm{d}}{\mathrm{d}t}$，则</p>$$xy'=Dy,\quad x^2y''=D(D-1)y,\quad x^3y'''=D(D-1)(D-2)y,$$<p>化为常系数线性方程。</p>
<p><b>题型识别：</b></p><ul><li>看到每一项都是"$x^k$ 乘 $k$ 阶导" → 欧拉方程 → $x=\mathrm{e}^t$ 或直接设 $y=x^r$。</li><li>齐次欧拉方程的特征方程可以"一步到位"：把 $x^ky^{(k)}$ 换成 $r(r-1)\cdots(r-k+1)$。</li></ul>`,
      alt: R`<p><b>直接设幂函数解：</b>设 $y=x^r$，则 $x^2y''=r(r-1)x^r$，$xy'=rx^r$，代入得</p>$$\left[r(r-1)+r-4\right]x^r=0\ \Rightarrow\ r^2-4=0\ \Rightarrow\ r=\pm2,$$<p>通解 $y=C_1x^2+C_2x^{-2}$，后面同上。这正是"幂函数是 $x\frac{\mathrm{d}}{\mathrm{d}x}$ 的特征函数"这一原理的直接应用。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: dsolve(x^2 y\'\' + x y\' - 4y = 0, ics={y(1)=1, y\'(1)=2}) = x^2' },
      flags: ['OCR 修正：原文题号识别为 "(3)"，按顺序应为第 (13) 题。']
    },

    /* ───────────────────────── 第 14 题 ───────────────────────── */
    {
      id: '2021-14', year: 2021, no: '第14题', type: '填空', score: 5,
      stem: R`设 $\Sigma$ 为空间区域 $\{(x,y,z)\mid x^2+4y^2\leqslant4,\ 0\leqslant z\leqslant2\}$ 表面的外侧，则曲面积分 $\displaystyle\iint_{\Sigma}x^2\,\mathrm{d}y\,\mathrm{d}z+y^2\,\mathrm{d}z\,\mathrm{d}x+z\,\mathrm{d}x\,\mathrm{d}y=$ ______．`,
      options: null,
      answer: R`$4\pi$`,
      figure: null,
      kp: ['mint.surf2', 'mint.triple'],
      methods: ['高斯公式', '对称性（奇函数在对称区域上积分为零）', '椭圆面积公式'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>第二类曲面积分 + 高斯公式 + 三重积分的对称性。</p>
<p><b>为什么想到高斯公式：</b>$\Sigma$ 是一个空间区域的<b>整个表面</b>（封闭曲面），取<b>外侧</b>，被积的 $P=x^2,\ Q=y^2,\ R=z$ 处处有连续偏导数——高斯公式的三个条件全部满足。直接算要分侧面、顶面、底面三块，每块还要投影；用高斯公式一步化成三重积分。</p>
<p><b>为什么想到对称性：</b>散度 $2x+2y+1$ 中的 $2x$ 关于 $x$ 是奇函数，而区域 $x^2+4y^2\leqslant4$ 关于 $yOz$ 面对称（$x$ 换成 $-x$ 不变），奇函数在对称区域上的积分为 $0$；$2y$ 同理。剩下的 $\iiint1\,\mathrm{d}v$ 就是体积。</p>
<p><b>认清区域：</b>$x^2+4y^2\leqslant4$ 即 $\dfrac{x^2}{4}+y^2\leqslant1$，是半轴为 $2$（$x$ 方向）和 $1$（$y$ 方向）的椭圆，区域是高为 $2$ 的椭圆柱体。</p>`,
      solution: R`<p><b>第一步：验证高斯公式的条件。</b>$\Sigma$ 是区域 $\Omega=\{x^2+4y^2\leqslant4,\ 0\leqslant z\leqslant2\}$ 的边界曲面，取外侧；$P=x^2,\ Q=y^2,\ R=z$ 在 $\Omega$ 上有连续一阶偏导数。</p>
<p><b>第二步：计算散度并用高斯公式。</b></p>
$$\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=2x+2y+1,$$
$$\iint_{\Sigma}x^2\,\mathrm{d}y\,\mathrm{d}z+y^2\,\mathrm{d}z\,\mathrm{d}x+z\,\mathrm{d}x\,\mathrm{d}y=\iiint_{\Omega}(2x+2y+1)\,\mathrm{d}v.$$
<p><b>第三步：利用对称性。</b>$\Omega$ 关于 $yOz$ 面对称（点 $(x,y,z)\in\Omega\iff(-x,y,z)\in\Omega$），$2x$ 是 $x$ 的奇函数，故 $\iiint_\Omega2x\,\mathrm{d}v=0$；$\Omega$ 关于 $xOz$ 面对称，$2y$ 是 $y$ 的奇函数，故 $\iiint_\Omega2y\,\mathrm{d}v=0$。于是</p>
$$\text{原式}=\iiint_\Omega1\,\mathrm{d}v=V(\Omega).$$
<p><b>第四步：求体积。</b>柱体体积 = 底面积 × 高。底面是椭圆 $\dfrac{x^2}{2^2}+\dfrac{y^2}{1^2}\leqslant1$，面积 $\pi ab=\pi\cdot2\cdot1=2\pi$（可由 $x=2u,\ y=v$ 把椭圆变成单位圆，面积放大 $2$ 倍得到）。高为 $2$，所以</p>
$$\text{原式}=2\pi\cdot2=4\pi.$$`,
      pitfalls: R`<ul><li><b>半轴看错：</b>$x^2+4y^2\leqslant4$ 化成标准形 $\frac{x^2}{4}+y^2\leqslant1$ 后，半轴是 $2$ 和 $1$，不是 $2$ 和 $4$，也不是 $1$ 和 $\frac12$。底面积是 $2\pi$。</li><li><b>以为曲面不封闭而去补面：</b>题目说的是"空间区域表面"，已经包括顶面、底面和侧面，是封闭曲面，直接用高斯公式。</li><li><b>对称性用错对象：</b>能消掉的条件是"区域对称 + 被积函数关于相应变量为奇函数"，二者缺一不可。这里 $z$ 方向区域 $[0,2]$ 不对称，所以常数项 $1$ 不会消失。</li></ul>`,
      summary: R`<p><b>方法要点：</b>封闭曲面 + 外侧 + 光滑的 $P,Q,R$ → 高斯公式 $\displaystyle\iint_{\Sigma\text{外侧}}=\iiint_\Omega\left(P_x+Q_y+R_z\right)\mathrm{d}v$；化成三重积分后先用对称性消去奇函数部分。</p>
<p><b>题型识别：</b></p><ul><li>看到"某空间区域表面的外侧/内侧" → 直接高斯（内侧要加负号）。</li><li>看到散度中出现 $x$、$y$ 的一次项，区域又关于坐标面对称 → 这些项积分为 $0$。</li><li>椭圆 $\frac{x^2}{a^2}+\frac{y^2}{b^2}\leqslant1$ 的面积 $\pi ab$，椭球体积 $\frac43\pi abc$。</li></ul>`,
      alt: R`<p><b>直接计算（理解第二类曲面积分的本质）：</b>(1) 顶面 $z=2$ 取上侧：在它上面 $\mathrm{d}y\,\mathrm{d}z=\mathrm{d}z\,\mathrm{d}x=0$（平面垂直于 $z$ 轴，向 $yOz$、$zOx$ 面的投影面积为 $0$），只剩 $\iint z\,\mathrm{d}x\,\mathrm{d}y=\iint_{D}2\,\mathrm{d}x\,\mathrm{d}y=2\cdot2\pi=4\pi$。(2) 底面 $z=0$：$z\,\mathrm{d}x\,\mathrm{d}y$ 中 $z=0$，其余两项同样为 $0$，贡献 $0$。(3) 侧面：向 $xOy$ 面投影为一条曲线，$z\,\mathrm{d}x\,\mathrm{d}y$ 项为 $0$；$x^2\,\mathrm{d}y\,\mathrm{d}z$ 项中，前后两片（$x>0$ 与 $x<0$）在同一 $(y,z)$ 处 $x^2$ 相同而法向在 $x$ 方向的分量相反，互相抵消；$y^2\,\mathrm{d}z\,\mathrm{d}x$ 同理。合计 $4\pi$，与高斯公式结果一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 广义极坐标 x=2r cosθ, y=r sinθ 计算 ∭(2x+2y+1)dv = 4π；另用参数化直接算三块曲面：侧面 0、顶面 4π、底面 0，合计 4π' },
      flags: ['OCR 修正：原文题号识别为 "4)"，按顺序应为第 (14) 题。']
    },

    /* ───────────────────────── 第 17 题 ───────────────────────── */
    {
      id: '2021-17', year: 2021, no: '第17题', type: '解答', score: 10,
      stem: R`求极限 $\displaystyle\lim_{x\to0}\left(\frac{1+\int_0^x\mathrm{e}^{t^2}\,\mathrm{d}t}{\mathrm{e}^x-1}-\frac{1}{\sin x}\right)$．`,
      options: null,
      answer: R`$\dfrac12$`,
      figure: null,
      kp: ['lim.compute', 'int.ftc', 'diff.taylor'],
      methods: ['通分化为 0/0 型', '等价无穷小代换', '泰勒公式', '变限积分的展开'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>$\infty-\infty$ 型未定式，外加一个变限积分。</p>
<p><b>类型判断：</b>$x\to0$ 时，第一项分子 $\to1$、分母 $\mathrm{e}^x-1\to0$，第一项 $\to\infty$；第二项 $\frac{1}{\sin x}\to\infty$。两个无穷大相减，是 $\infty-\infty$ 型，结果可能是任何值，必须变形。</p>
<p><b>为什么通分：</b>$\infty-\infty$ 的标准处理是<b>通分</b>，把它变成一个分式，从而化为 $\frac00$ 型。通分后分母是 $(\mathrm{e}^x-1)\sin x$，这是<b>乘积</b>，可以放心地等价替换成 $x^2$。分母是 $2$ 阶无穷小，那么分子只需精确到 $x^2$——这就告诉我们泰勒公式要展开到几阶。</p>
<p><b>变限积分怎么处理：</b>$\int_0^x\mathrm{e}^{t^2}\,\mathrm{d}t$ 没有初等原函数，但我们只关心它在 $0$ 附近的样子：先把被积函数 $\mathrm{e}^{t^2}$ 展开，再逐项积分，就得到它的泰勒展开。</p>`,
      solution: R`<p><b>第一步：通分。</b>记 $F(x)=\int_0^x\mathrm{e}^{t^2}\,\mathrm{d}t$。</p>
$$\text{原式}=\lim_{x\to0}\frac{\left(1+F(x)\right)\sin x-(\mathrm{e}^x-1)}{(\mathrm{e}^x-1)\sin x}.$$
<p><b>第二步：分母等价替换。</b>分母是两个因子的乘积，$\mathrm{e}^x-1\sim x$，$\sin x\sim x$，所以 $(\mathrm{e}^x-1)\sin x\sim x^2$：</p>
$$\text{原式}=\lim_{x\to0}\frac{\left(1+F(x)\right)\sin x-(\mathrm{e}^x-1)}{x^2}.$$
<p><b>第三步：把分子展开到 $x^2$。</b></p>
<p>(1) 变限积分：$\mathrm{e}^{t^2}=1+t^2+o(t^2)$，逐项积分（$o(t^2)$ 在 $[0,x]$ 上积分得到 $o(x^3)$）：</p>
$$F(x)=\int_0^x\left(1+t^2+o(t^2)\right)\mathrm{d}t=x+\frac{x^3}{3}+o(x^3)=x+o(x^2).$$
<p>(2) $\sin x=x-\dfrac{x^3}{6}+o(x^3)=x+o(x^2)$。</p>
<p>(3) 两者相乘：</p>
$$\left(1+F(x)\right)\sin x=\left(1+x+o(x^2)\right)\left(x+o(x^2)\right)=x+x^2+o(x^2).$$
<p>(4) $\mathrm{e}^x-1=x+\dfrac{x^2}{2}+o(x^2)$。</p>
<p>(5) 相减：</p>
$$\left(1+F(x)\right)\sin x-(\mathrm{e}^x-1)=\left(x+x^2\right)-\left(x+\frac{x^2}{2}\right)+o(x^2)=\frac{x^2}{2}+o(x^2).$$
<p><b>第四步：求极限。</b></p>
$$\text{原式}=\lim_{x\to0}\frac{\frac{x^2}{2}+o(x^2)}{x^2}=\frac12.$$`,
      pitfalls: R`<ul><li><b>在加减中做等价替换：</b>通分前就把 $\mathrm{e}^x-1$ 和 $\sin x$ 都换成 $x$，得到 $\dfrac{1+F(x)}{x}-\dfrac1x=\dfrac{F(x)}{x}\to1$，答案错成 $1$。原因是两项各自都是无穷大，替换时丢掉的高阶部分在相减后恰好变成了主要部分。</li><li><b>拆开取极限时不检查是否存在：</b>把原式写成 $\lim\frac{1}{\mathrm{e}^x-1}-\lim\frac{1}{\sin x}+\cdots$，两个极限都是 $\infty$，拆分非法。只有拆出来的每一部分极限都存在，才能拆。</li><li><b>展开阶数不够：</b>若 $\mathrm{e}^x-1$ 只写到 $x+o(x)$，分子相减后剩下 $o(x)$，除以 $x^2$ 无法确定。分母是几阶，分子就展开到几阶。</li></ul>`,
      summary: R`<p><b>方法要点：</b>$\infty-\infty$ → 通分（或提公因式、倒代换）→ $\frac00$ → 分母中的乘积因子先等价替换 → 分子用泰勒展开到与分母同阶。</p>
<p><b>题型识别：</b></p><ul><li>看到 $\dfrac1A-\dfrac1B$（$A,B\to0$）→ 通分。</li><li>看到极限中的变限积分 $\int_0^xg(t)\,\mathrm{d}t$ → 把 $g$ 展开后逐项积分，或者用洛必达把积分"求导消掉"。</li><li>口诀：<b>乘除可换，加减慎换；分母几阶，分子展几阶</b>。</li></ul>`,
      alt: R`<p><b>拆项法：</b>先把原式拆成两部分</p>$$\text{原式}=\lim_{x\to0}\frac{F(x)}{\mathrm{e}^x-1}+\lim_{x\to0}\left(\frac{1}{\mathrm{e}^x-1}-\frac{1}{\sin x}\right),$$<p>前提是两部分的极限都存在——下面算出来确实存在，所以拆分合法。第一部分用洛必达（变限积分求导）：$\lim\limits_{x\to0}\dfrac{\mathrm{e}^{x^2}}{\mathrm{e}^x}=1$。第二部分通分：</p>$$\lim_{x\to0}\frac{\sin x-\mathrm{e}^x+1}{(\mathrm{e}^x-1)\sin x}=\lim_{x\to0}\frac{\sin x-\mathrm{e}^x+1}{x^2}=\lim_{x\to0}\frac{\cos x-\mathrm{e}^x}{2x}=\lim_{x\to0}\frac{-\sin x-\mathrm{e}^x}{2}=-\frac12.$$<p>所以原式 $=1-\frac12=\frac12$。拆项的好处是把"难的部分"（变限积分）隔离出来单独处理。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 双侧 limit 均为 1/2；分项验证 lim F(x)/(e^x−1)=1，lim[1/(e^x−1)−1/sin x]=−1/2；series(F) = x + x^3/3 + O(x^5)' },
      flags: []
    },

    /* ───────────────────────── 第 18 题 ───────────────────────── */
    {
      id: '2021-18', year: 2021, no: '第18题', type: '解答', score: 12,
      stem: R`设 $u_n(x)=\mathrm{e}^{-nx}+\dfrac{x^{n+1}}{n(n+1)}\ (n=1,2,\cdots)$，求级数 $\displaystyle\sum_{n=1}^{\infty}u_n(x)$ 的收敛域及和函数．`,
      options: null,
      answer: R`收敛域为 $(0,1]$；和函数 $S(x)=\begin{cases}\dfrac{1}{\mathrm{e}^x-1}+(1-x)\ln(1-x)+x, & 0<x<1,\\[2mm] \dfrac{\mathrm{e}}{\mathrm{e}-1}, & x=1.\end{cases}$`,
      figure: null,
      kp: ['series.sum', 'series.power', 'series.concept'],
      methods: ['几何级数求和', '幂级数收敛半径', '裂项（部分分式）', '利用 ln(1−x) 的展开式', '级数敛散性的运算性质'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>函数项级数的收敛域与和函数。它不是一个纯粹的幂级数，而是"几何级数 + 幂级数"的拼盘。</p>
<p><b>为什么拆成两部分：</b>$u_n(x)$ 由两块性质完全不同的东西相加：$\mathrm{e}^{-nx}=(\mathrm{e}^{-x})^n$ 是以 $\mathrm{e}^{-x}$ 为公比的几何级数的通项；$\dfrac{x^{n+1}}{n(n+1)}$ 是幂级数的通项。各自都有现成的方法，所以分开处理，最后再"合并"。</p>
<p><b>合并收敛域时的逻辑（本题的考点所在）：</b></p><ul><li>收敛 + 收敛 = 收敛；</li><li>收敛 + 发散 = 发散（否则发散的那个 = 总和 − 收敛的那个，就收敛了，矛盾）；</li><li>发散 + 发散 = <b>不一定</b>！需要单独论证。</li></ul>
<p><b>求和函数的思路：</b>几何级数直接用公式；$\dfrac{1}{n(n+1)}$ 一看就该<b>裂项</b>成 $\dfrac1n-\dfrac{1}{n+1}$，拆出来的两个级数都和 $\sum\dfrac{x^n}{n}=-\ln(1-x)$ 有关。</p>`,
      solution: R`<p><b>第一步：几何级数部分。</b>$\sum\limits_{n=1}^\infty\mathrm{e}^{-nx}=\sum\limits_{n=1}^\infty q^n$，$q=\mathrm{e}^{-x}>0$。几何级数收敛 $\iff q<1\iff x>0$。此时</p>
$$S_1(x)=\sum_{n=1}^\infty\mathrm{e}^{-nx}=\frac{q}{1-q}=\frac{\mathrm{e}^{-x}}{1-\mathrm{e}^{-x}}=\frac{1}{\mathrm{e}^x-1}\qquad(x>0).$$
<p><b>第二步：幂级数部分的收敛域。</b>$\sum\limits_{n=1}^\infty\dfrac{x^{n+1}}{n(n+1)}=x\sum\limits_{n=1}^\infty\dfrac{x^n}{n(n+1)}$，系数 $a_n=\dfrac{1}{n(n+1)}$，</p>
$$\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=\lim_{n\to\infty}\frac{n(n+1)}{(n+1)(n+2)}=1,$$
<p>收敛半径 $R=1$。端点 $x=\pm1$：$\left|\dfrac{(\pm1)^{n+1}}{n(n+1)}\right|=\dfrac{1}{n(n+1)}\leqslant\dfrac{1}{n^2}$，由 $p$ 级数（$p=2$）与比较判别法，绝对收敛。所以这部分的收敛域是 $[-1,1]$。</p>
<p><b>第三步：合并收敛域，分段讨论。</b></p>
<ul><li>$0<x\leqslant1$：两部分都收敛，原级数收敛。</li>
<li>$x>1$：几何部分收敛、幂级数部分发散，原级数发散。</li>
<li>$-1\leqslant x\leqslant0$：几何部分发散（$q\geqslant1$）、幂级数部分收敛，原级数发散。</li>
<li>$x<-1$：两部分都发散，不能直接下结论，改看通项。记 $a=|x|>1$，</li></ul>
$$u_n(x)\geqslant\mathrm{e}^{na}-\frac{a^{n+1}}{n(n+1)}\geqslant\mathrm{e}^{na}-a^{n+1}=\mathrm{e}^{na}\left[1-a\left(\frac{a}{\mathrm{e}^a}\right)^n\right].$$
<p>由于 $\mathrm{e}^a>1+a>a$，$0<\dfrac{a}{\mathrm{e}^a}<1$，方括号 $\to1$，而 $\mathrm{e}^{na}\to+\infty$，所以 $u_n(x)\to+\infty$，通项不趋于 $0$，原级数发散。</p>
<p>综上，收敛域为 $(0,1]$。</p>
<p><b>第四步：求幂级数部分的和（$0<x<1$）。</b>裂项 $\dfrac{1}{n(n+1)}=\dfrac1n-\dfrac{1}{n+1}$。当 $|x|<1$ 时，下面两个级数都收敛，因此可以拆开：</p>
$$S_2(x)=\sum_{n=1}^\infty\frac{x^{n+1}}{n}-\sum_{n=1}^\infty\frac{x^{n+1}}{n+1}.$$
<p>利用基本展开式 $\sum\limits_{n=1}^\infty\dfrac{x^n}{n}=-\ln(1-x)\ (-1\leqslant x<1)$（它由 $\sum\limits_{n=1}^\infty x^{n-1}=\dfrac{1}{1-x}$ 从 $0$ 到 $x$ 逐项积分得到）：</p>
$$\sum_{n=1}^\infty\frac{x^{n+1}}{n}=x\sum_{n=1}^\infty\frac{x^n}{n}=-x\ln(1-x),$$
$$\sum_{n=1}^\infty\frac{x^{n+1}}{n+1}=\sum_{m=2}^\infty\frac{x^m}{m}=\sum_{m=1}^\infty\frac{x^m}{m}-x=-\ln(1-x)-x.$$
<p>所以</p>
$$S_2(x)=-x\ln(1-x)+\ln(1-x)+x=(1-x)\ln(1-x)+x\qquad(0<x<1).$$
<p><b>第五步：单独处理端点 $x=1$。</b>此时 $\sum\frac1n$ 与 $\sum\frac{1}{n+1}$ 都发散，第四步的"拆开"不再合法，公式里 $\ln(1-x)$ 也无意义，必须直接算：</p>
$$S_2(1)=\sum_{n=1}^\infty\left(\frac1n-\frac{1}{n+1}\right)=\lim_{N\to\infty}\left(1-\frac{1}{N+1}\right)=1,\qquad S_1(1)=\frac{1}{\mathrm{e}-1}.$$
<p>于是 $S(1)=\dfrac{1}{\mathrm{e}-1}+1=\dfrac{\mathrm{e}}{\mathrm{e}-1}$。（检验：$\lim\limits_{x\to1^-}(1-x)\ln(1-x)=0$，所以 $\lim\limits_{x\to1^-}S_2(x)=1=S_2(1)$，与"和函数在收敛域上连续"一致。）</p>
<p><b>第六步：写出结论。</b>收敛域为 $(0,1]$，和函数</p>
$$S(x)=\begin{cases}\dfrac{1}{\mathrm{e}^x-1}+(1-x)\ln(1-x)+x, & 0<x<1,\\[2mm] \dfrac{\mathrm{e}}{\mathrm{e}-1}, & x=1.\end{cases}$$`,
      pitfalls: R`<ul><li><b>只算幂级数部分的收敛域：</b>答成 $[-1,1]$，忘了几何部分要求 $x>0$。</li><li><b>把"发散 + 发散"当成发散：</b>这不是定理（反例：$\sum1$ 与 $\sum(-1)$ 都发散，相加却收敛）。$x<-1$ 时必须看通项。</li><li><b>下标平移出错：</b>$\sum\limits_{n=1}^\infty\dfrac{x^{n+1}}{n+1}$ 从 $x^2$ 开始，等于 $-\ln(1-x)-x$，漏掉"$-x$"是最常见的错误。</li><li><b>端点处照搬公式：</b>$x=1$ 时 $(1-x)\ln(1-x)$ 没有定义，且裂项后的两个级数都发散，必须单独求和（或用和函数的连续性取左极限）。</li><li><b>答案漏写定义域或分段：</b>和函数必须连同收敛域一起写出。</li></ul>`,
      summary: R`<p><b>方法要点：</b>求和函数的三步：① 求收敛域（端点单独判断）；② 通过裂项、逐项求导/积分、提出 $x$ 的幂次，把级数化成已知展开式；③ 端点处单独验证。</p>
<p><b>必记展开：</b>$\sum\limits_{n=0}^\infty x^n=\dfrac{1}{1-x}$；$\sum\limits_{n=1}^\infty\dfrac{x^n}{n}=-\ln(1-x)$；$\sum\limits_{n=0}^\infty\dfrac{x^n}{n!}=\mathrm{e}^x$。</p>
<p><b>题型识别：</b></p><ul><li>看到 $\mathrm{e}^{-nx}$、$a^n$ → 几何级数，收敛条件 $|q|<1$。</li><li>看到系数 $\dfrac{1}{n(n+1)}$ → 裂项；看到分母 $n$ → 逐项求导消掉，或联想 $-\ln(1-x)$。</li><li>看到"通项 = 两部分之和" → 分别讨论，合并时牢记"收敛 + 发散 = 发散；发散 + 发散 = 待定"。</li></ul>`,
      alt: R`<p><b>求导—积分法求 $S_2$：</b>在 $(-1,1)$ 内逐项求导两次：</p>$$S_2'(x)=\sum_{n=1}^\infty\frac{x^n}{n},\qquad S_2''(x)=\sum_{n=1}^\infty x^{n-1}=\frac{1}{1-x}.$$<p>由 $S_2'(0)=0$ 得 $S_2'(x)=\int_0^x\frac{\mathrm{d}t}{1-t}=-\ln(1-x)$；再由 $S_2(0)=0$ 得</p>$$S_2(x)=-\int_0^x\ln(1-t)\,\mathrm{d}t=\Big[(1-t)\ln(1-t)-(1-t)\Big]_0^x=(1-x)\ln(1-x)+x.$$<p>思想是：分母上有 $n(n+1)$ 两个因子，就求两次导把它们"消掉"，变成几何级数，再积分两次回来。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: Σx^{n+1}/(n(n+1)) 在 x=1/2, −1/2, 9/10, −1 处数值与 (1−x)ln(1−x)+x 一致；Σ1/(n(n+1))=1；x=1/3 时整个级数数值和与公式一致（2.5907…）；S(1) 数值 1.58198 = e/(e−1)；x=−3 时通项数值迅速增大' },
      flags: ['参考解析未讨论 x &lt; −1（两部分都发散）时原级数的敛散性；本讲解用通项不趋于 0 补上了这一步，结论（收敛域 (0,1]）一致。']
    },

    /* ───────────────────────── 第 19 题 ───────────────────────── */
    {
      id: '2021-19', year: 2021, no: '第19题', type: '解答', score: 12,
      stem: R`已知曲线 $C:\begin{cases}x^2+2y^2-z=6,\\ 4x+2y+z=30,\end{cases}$ 求 $C$ 上的点到 $xOy$ 坐标面距离的最大值．`,
      options: null,
      answer: R`最大值为 $66$（在点 $(-8,-2,66)$ 处取得）`,
      figure: null,
      kp: ['mdiff.extreme', 'vec.surface'],
      methods: ['拉格朗日乘数法（两个约束）', '平方去绝对值', '最值存在性论证', '消元 + 参数化'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>条件极值（最值）——约束是两个方程，所以要用<b>两个</b>拉格朗日乘数。</p>
<p><b>目标函数是什么：</b>点 $(x,y,z)$ 到 $xOy$ 面（即平面 $z=0$）的距离是 $|z|$。绝对值不可导，处理成 $z^2$：因为 $|z|\geqslant0$ 而 $t\mapsto t^2$ 在 $[0,+\infty)$ 上单调增加，$|z|$ 最大与 $z^2$ 最大发生在同一点。</p>
<p><b>几何图像：</b>第一个方程 $z=x^2+2y^2-6$ 是开口向上的椭圆抛物面，第二个是平面；平面斜切抛物面，交线是一条<b>封闭的椭圆形空间曲线</b>。问题就是：这条倾斜的"圈"上最高（或最低）的点离 $xOy$ 面多远。曲线有界闭，连续函数在上面一定能取到最大值，所以只需找出候选点比较即可。</p>
<p><b>为什么拉格朗日法是自然的选择：</b>两个约束、三个变量，消元也行（见另解），但拉格朗日法步骤固定、不容易漏点，是这类题的通用方法。</p>`,
      solution: R`<p><b>第一步：建立目标函数与拉格朗日函数。</b>设 $(x,y,z)\in C$，它到 $xOy$ 面的距离为 $d=|z|$。改为求 $z^2$ 的最大值，令</p>
$$L=z^2+\lambda\left(x^2+2y^2-z-6\right)+\mu\left(4x+2y+z-30\right).$$
<p><b>第二步：列方程组。</b></p>
$$\begin{cases}L_x=2\lambda x+4\mu=0, & ①\\ L_y=4\lambda y+2\mu=0, & ②\\ L_z=2z-\lambda+\mu=0, & ③\\ x^2+2y^2-z=6, & ④\\ 4x+2y+z=30. & ⑤\end{cases}$$
<p><b>第三步：解方程组。</b>由 ① 得 $\mu=-\dfrac{\lambda x}{2}$，由 ② 得 $\mu=-2\lambda y$，所以 $\lambda\left(\dfrac x2-2y\right)=0$，即 $\lambda=0$ 或 $x=4y$。</p>
<p><i>若 $\lambda=0$：</i>则 $\mu=0$，由 ③ 得 $z=0$。代入 ④⑤：$x^2+2y^2=6$ 且 $y=15-2x$，消去 $y$ 得 $9x^2-120x+444=0$，即 $3x^2-40x+148=0$，判别式 $1600-1776<0$，无实解。所以 $\lambda\neq0$。</p>
<p><i>若 $x=4y$：</i>由 ⑤ 得 $z=30-4x-2y=30-18y$，代入 ④：</p>
$$16y^2+2y^2-(30-18y)-6=0\ \Rightarrow\ 18y^2+18y-36=0\ \Rightarrow\ y^2+y-2=0,$$
<p>解得 $y=1$ 或 $y=-2$，对应两个候选点 $(4,1,12)$ 与 $(-8,-2,66)$。（验证：$64+8-66=6$，$-32-4+66=30$ ✓。）</p>
<p><b>第四步：说明最大值一定存在且在候选点中。</b>由 ⑤ 得 $z=30-4x-2y$，代入 ④ 并配方：</p>
$$x^2+4x+2y^2+2y=36\ \Rightarrow\ (x+2)^2+2\left(y+\tfrac12\right)^2=\frac{81}{2},$$
<p>所以 $C$ 在 $xOy$ 面上的投影是椭圆，$x,y$ 有界，从而 $z=30-4x-2y$ 也有界；$C$ 是两个连续函数零点集的交，因而是闭集，所以 $C$ 是有界闭集，连续函数 $z^2$ 在 $C$ 上必取得最大值和最小值。两个约束的法向量 $(2x,4y,-1)$ 与 $(4,2,1)$ 只在 $x=-2,\ y=-\frac12$ 处平行，而此时由 ⑤ 得 $z=39$、由 ④ 得 $z=-\frac32$，矛盾，所以这样的点不在 $C$ 上——拉格朗日条件在 $C$ 上处处适用，最值点必在上面求出的候选点中。</p>
<p><b>第五步：比较。</b>两点处 $|z|$ 分别为 $12$ 和 $66$，所以 $C$ 上的点到 $xOy$ 面距离的最大值为 $66$，在点 $(-8,-2,66)$ 处取得（$12$ 是最小值）。</p>`,
      pitfalls: R`<ul><li><b>直接用 $|z|$ 当目标函数求偏导：</b>$|z|$ 在 $z=0$ 处不可导，应改用 $z^2$（或先说明 $C$ 上 $z>0$ 后直接用 $z$）。</li><li><b>漏掉 $\lambda=0$ 的情形：</b>从 ①② 推出 $x=4y$ 时是两边约去了 $\lambda$，必须单独检查 $\lambda=0$，否则推理不完整。</li><li><b>只求出驻点不比较：</b>拉格朗日法只给出候选点，哪个最大、哪个最小要代值比较；本题 $12$ 是最小距离，不要误作答案。</li><li><b>距离写错：</b>到 $xOy$ 面的距离是 $|z|$，不是 $\sqrt{x^2+y^2+z^2}$（那是到原点的距离）。</li></ul>`,
      summary: R`<p><b>方法要点：</b>曲线（两曲面交线）上的最值 → 目标函数 + 两个乘数的拉格朗日函数 → 解方程组（先用前几个方程找变量间的比例关系，再代入约束）→ 比较候选点的函数值。</p>
<p><b>题型识别：</b></p><ul><li>"到 $xOy$ 面的距离" → $|z|$；"到 $yOz$ 面" → $|x|$；"到原点" → $\sqrt{x^2+y^2+z^2}$。距离一律平方后再优化。</li><li>约束是"平面 ∩ 二次曲面" → 也可以用平面方程消去一个变量，化成平面椭圆上的最值，再用参数化或柯西不等式。</li><li>解拉格朗日方程组的套路：从关于 $x,y$ 的偏导方程中消去乘数，得到 $x,y$ 的比例关系；约去乘数时记得讨论乘数为 $0$。</li></ul>`,
      alt: R`<p><b>消元 + 参数化：</b>由平面方程 $z=30-4x-2y$，上面已得投影椭圆 $(x+2)^2+2\left(y+\frac12\right)^2=\frac{81}{2}$。令 $x+2=\dfrac{9}{\sqrt2}\cos\theta,\ y+\dfrac12=\dfrac92\sin\theta$，则</p>$$z=30-4x-2y=39-18\sqrt2\cos\theta-9\sin\theta.$$<p>由辅助角公式，$18\sqrt2\cos\theta+9\sin\theta$ 的取值范围是 $\left[-\sqrt{648+81},\sqrt{648+81}\right]=[-27,27]$，所以 $z\in[12,66]$。$z$ 恒为正，$|z|=z$ 的最大值为 $66$。这种方法还一并说明了最值的存在性，而且直接看出曲线完全位于 $xOy$ 面上方。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: solve 拉格朗日方程组得 (−8,−2,66) 与 (4,1,12) 两组解；参数化后 z = 39 − 18√2cosθ − 9sinθ，数值最大值 66、最小值 12' },
      flags: ['参考解析（OCR）中的解组被识别成 "x=4, y=1, z=12, z=66" 的混乱形式；实际两组驻点为 (4,1,12) 与 (−8,−2,66)，最大值 66 与参考答案一致。']
    },

    /* ───────────────────────── 第 20 题 ───────────────────────── */
    {
      id: '2021-20', year: 2021, no: '第20题', type: '解答', score: 12,
      stem: R`设 $D\subset\mathbf{R}^2$ 是有界单连通闭区域，$I(D)=\displaystyle\iint_D\left(4-x^2-y^2\right)\mathrm{d}x\,\mathrm{d}y$ 取得最大值的积分区域为 $D_1$．<br>（Ⅰ）求 $I(D_1)$ 的值；<br>（Ⅱ）计算 $\displaystyle\int_{\partial D_1}\frac{\left(x\mathrm{e}^{x^2+4y^2}+y\right)\mathrm{d}x+\left(4y\mathrm{e}^{x^2+4y^2}-x\right)\mathrm{d}y}{x^2+4y^2}$，其中 $\partial D_1$ 是 $D_1$ 的正向边界．`,
      options: null,
      answer: R`（Ⅰ）$I(D_1)=8\pi$；（Ⅱ）$-\pi$`,
      figure: null,
      kp: ['mint.line2', 'mint.double'],
      methods: ['被积函数符号分析', '极坐标计算二重积分', '格林公式', '挖洞法（小椭圆）', '对称性/全微分'],
      difficulty: 4,
      analysis: R`<p><b>第（Ⅰ）问考什么：</b>二重积分的"可加性 + 保号性"。积分可以看成"把每一小块的值累加起来"。要让总和最大，就应该把所有<b>贡献为正</b>的点都收进来，把所有<b>贡献为负</b>的点都排除出去。被积函数 $4-x^2-y^2\geqslant0\iff x^2+y^2\leqslant4$，所以 $D_1$ 就是半径为 $2$ 的圆盘。</p>
<p><b>第（Ⅱ）问考什么：</b>第二类曲线积分 + 格林公式 + "挖洞"。</p>
<ul><li>$\partial D_1$ 是圆周 $x^2+y^2=4$，逆时针。被积函数在原点处分母为 $0$，而原点在圆内部，所以<b>不能</b>直接在 $D_1$ 上用格林公式。</li>
<li>先算 $\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}$，若在原点以外处处为 $0$，就说明积分只与"绕不绕原点"有关，与曲线的具体形状无关，可以把大圆换成任意一条绕原点一圈的小曲线。</li>
<li><b>挖洞曲线选什么：</b>选让分母变成常数的曲线 $x^2+4y^2=\varepsilon^2$（小椭圆）。在它上面分母恒为 $\varepsilon^2$，可以提出去，剩下的被积式处处光滑，就能放心地再用一次格林公式。</li></ul>`,
      solution: R`<p><b>（Ⅰ）第一步：确定 $D_1$。</b>记 $g(x,y)=4-x^2-y^2$，$D_1=\{(x,y)\mid x^2+y^2\leqslant4\}$。在 $D_1$ 上 $g\geqslant0$，在 $D_1$ 外 $g<0$。对任意有界闭区域 $D$，由积分对区域的可加性：</p>
$$I(D)=\iint_{D\cap D_1}g\,\mathrm{d}\sigma+\iint_{D\setminus D_1}g\,\mathrm{d}\sigma\leqslant\iint_{D\cap D_1}g\,\mathrm{d}\sigma\leqslant\iint_{D_1}g\,\mathrm{d}\sigma=I(D_1).$$
<p>第一个不等号：$D\setminus D_1$ 上 $g<0$，积分 $\leqslant0$；第二个不等号：$D_1\setminus D$ 上 $g\geqslant0$，补上这部分只会更大。而 $D_1$ 本身是有界单连通闭区域，所以最大值在 $D_1$ 处取得。</p>
<p><b>（Ⅰ）第二步：极坐标计算。</b>$x=r\cos\theta,\ y=r\sin\theta$，$\mathrm{d}x\,\mathrm{d}y=r\,\mathrm{d}r\,\mathrm{d}\theta$：</p>
$$I(D_1)=\int_0^{2\pi}\mathrm{d}\theta\int_0^2\left(4-r^2\right)r\,\mathrm{d}r=2\pi\left[2r^2-\frac{r^4}{4}\right]_0^2=2\pi(8-4)=8\pi.$$
<p><b>（Ⅱ）第一步：写出 $P,Q$，找奇点。</b>记 $s=x^2+4y^2$，</p>
$$P=\frac{x\mathrm{e}^{s}+y}{s},\qquad Q=\frac{4y\mathrm{e}^{s}-x}{s}.$$
<p>它们在除原点外的地方都有连续偏导数；原点在圆 $x^2+y^2=4$ 内部。</p>
<p><b>（Ⅱ）第二步：验证 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$（$(x,y)\neq(0,0)$）。</b>把 $P,Q$ 各拆成两块：</p>
<p>含指数的部分：$\dfrac{x\mathrm{e}^s}{s}\mathrm{d}x+\dfrac{4y\mathrm{e}^s}{s}\mathrm{d}y=\dfrac{\mathrm{e}^s}{2s}(2x\,\mathrm{d}x+8y\,\mathrm{d}y)=\dfrac{\mathrm{e}^s}{2s}\,\mathrm{d}s$，它只是 $s$ 的函数乘 $\mathrm{d}s$，是某个函数的全微分，所以这部分的"旋度"为 $0$。（直接求导也可：两者的交叉偏导都等于 $\dfrac{8xy\,\mathrm{e}^s(s-1)}{s^2}$。）</p>
<p>其余部分：</p>
$$\frac{\partial}{\partial x}\left(\frac{-x}{s}\right)=-\frac{s-x\cdot2x}{s^2}=\frac{x^2-4y^2}{s^2},\qquad \frac{\partial}{\partial y}\left(\frac{y}{s}\right)=\frac{s-y\cdot8y}{s^2}=\frac{x^2-4y^2}{s^2}.$$
<p>两者相等。所以在原点以外 $\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}=0$。</p>
<p><b>（Ⅱ）第三步：挖洞。</b>取小椭圆 $L_\varepsilon:\ x^2+4y^2=\varepsilon^2$（$0<\varepsilon<2$，它整个落在圆内），$L_\varepsilon$ 取逆时针，$L_\varepsilon^-$ 表示顺时针。设 $D_\varepsilon$ 为圆与小椭圆之间的环形区域，它的正向边界是 $\partial D_1$（逆时针）加上 $L_\varepsilon^-$（顺时针）。在 $D_\varepsilon$ 上 $P,Q$ 光滑，用格林公式：</p>
$$\oint_{\partial D_1}P\,\mathrm{d}x+Q\,\mathrm{d}y+\oint_{L_\varepsilon^-}P\,\mathrm{d}x+Q\,\mathrm{d}y=\iint_{D_\varepsilon}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\,\mathrm{d}y=0,$$
<p>所以</p>
$$\oint_{\partial D_1}P\,\mathrm{d}x+Q\,\mathrm{d}y=\oint_{L_\varepsilon}P\,\mathrm{d}x+Q\,\mathrm{d}y.$$
<p><svg viewBox="0 0 240 230" width="240" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>挖洞法示意：大圆与小椭圆之间的环形区域</title><circle cx="120" cy="115" r="90" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.6"/><ellipse cx="120" cy="115" rx="26" ry="13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 2"/><polygon points="110,25 120,20 120,30" fill="currentColor"/><polygon points="130,102 122,98 122,106" fill="currentColor"/><circle cx="120" cy="115" r="2.2" fill="currentColor"/><text x="124" y="128" font-size="10" fill="currentColor">O</text><text x="150" y="20" font-size="11" fill="currentColor">∂D₁ 逆时针</text><text x="100" y="94" font-size="10" fill="currentColor">L<tspan font-size="7" dy="3">ε</tspan><tspan font-size="8" dy="-8">−</tspan></text><text x="150" y="160" font-size="11" fill="currentColor">D<tspan font-size="8" dy="3">ε</tspan></text><text x="12" y="222" font-size="10" fill="currentColor">小椭圆 x²+4y²=ε²，在其上分母恒为 ε²</text></svg></p>
<p><b>（Ⅱ）第四步：在小椭圆上计算。</b>在 $L_\varepsilon$ 上 $x^2+4y^2=\varepsilon^2$，分母是常数，可以提出：</p>
$$\oint_{L_\varepsilon}P\,\mathrm{d}x+Q\,\mathrm{d}y=\frac{1}{\varepsilon^2}\oint_{L_\varepsilon}\left(x\mathrm{e}^{x^2+4y^2}+y\right)\mathrm{d}x+\left(4y\mathrm{e}^{x^2+4y^2}-x\right)\mathrm{d}y.$$
<p>现在被积式在整个小椭圆内部（包括原点）都光滑了，记 $\tilde P=x\mathrm{e}^{x^2+4y^2}+y$，$\tilde Q=4y\mathrm{e}^{x^2+4y^2}-x$，对椭圆内部 $D_2=\{x^2+4y^2\leqslant\varepsilon^2\}$ 用格林公式：</p>
$$\frac{\partial\tilde Q}{\partial x}-\frac{\partial\tilde P}{\partial y}=\left(8xy\,\mathrm{e}^{x^2+4y^2}-1\right)-\left(8xy\,\mathrm{e}^{x^2+4y^2}+1\right)=-2,$$
$$\oint_{L_\varepsilon}\tilde P\,\mathrm{d}x+\tilde Q\,\mathrm{d}y=\iint_{D_2}(-2)\,\mathrm{d}x\,\mathrm{d}y=-2\cdot\pi\cdot\varepsilon\cdot\frac{\varepsilon}{2}=-\pi\varepsilon^2.$$
<p>（椭圆 $\dfrac{x^2}{\varepsilon^2}+\dfrac{y^2}{(\varepsilon/2)^2}\leqslant1$ 的半轴为 $\varepsilon$ 和 $\dfrac\varepsilon2$，面积 $\dfrac{\pi\varepsilon^2}{2}$。）</p>
<p><b>（Ⅱ）第五步：得出结果。</b></p>
$$\int_{\partial D_1}\frac{\left(x\mathrm{e}^{x^2+4y^2}+y\right)\mathrm{d}x+\left(4y\mathrm{e}^{x^2+4y^2}-x\right)\mathrm{d}y}{x^2+4y^2}=\frac{1}{\varepsilon^2}\cdot\left(-\pi\varepsilon^2\right)=-\pi.$$
<p>结果与 $\varepsilon$ 无关，这正是"旋度为 $0$ 时积分只取决于绕奇点的圈数"的体现。</p>`,
      pitfalls: R`<ul><li><b>无视奇点直接用格林公式：</b>算出 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=0$ 就说积分为 $0$——错！原点在 $D_1$ 内，$P,Q$ 在那里没有定义，格林公式的条件不满足。</li><li><b>挖洞时用小圆 $x^2+y^2=\varepsilon^2$：</b>在小圆上分母 $x^2+4y^2$ 不是常数，提不出去，只能硬算参数积分，非常麻烦。挖洞曲线要"迎合分母"。</li><li><b>内外边界方向搞反：</b>环形区域的正向边界是外圈逆时针、内圈顺时针。</li><li><b>椭圆面积算错：</b>$x^2+4y^2\leqslant\varepsilon^2$ 的 $y$ 半轴是 $\frac\varepsilon2$，面积 $\frac{\pi\varepsilon^2}{2}$，不是 $\pi\varepsilon^2$ 或 $2\pi\varepsilon^2$。</li><li><b>（Ⅰ）中漏掉极坐标的 $r$：</b>写成 $\int_0^2(4-r^2)\,\mathrm{d}r$，得到错误的 $\frac{32\pi}{3}$。</li></ul>`,
      summary: R`<p><b>方法要点（第二类曲线积分四步法）：</b>① 看曲线是否封闭、内部有无奇点；② 算 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}$；③ 若为 $0$ 且内部有奇点 → 挖洞，用"让分母变常数"的小曲线替换原曲线；④ 在小曲线上把分母换成常数，再用格林公式或参数化。</p>
<p><b>题型识别：</b></p><ul><li>看到分母 $ax^2+by^2$ 且 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$ → 用 $ax^2+by^2=\varepsilon^2$ 挖洞。</li><li>看到 $\oint(y\,\mathrm{d}x-x\,\mathrm{d}y)$ → 等于 $-2\times$ 所围面积（逆时针）；$\oint(x\,\mathrm{d}y-y\,\mathrm{d}x)=2\times$ 面积。</li><li>看到"使积分取最大值的区域" → 取被积函数 $\geqslant0$ 的全部点。</li></ul>`,
      alt: R`<p><b>（Ⅱ）在小椭圆上直接参数化：</b>在 $L_\varepsilon$ 上 $\mathrm{e}^{x^2+4y^2}=\mathrm{e}^{\varepsilon^2}$ 是常数，含指数的部分变成 $\dfrac{\mathrm{e}^{\varepsilon^2}}{\varepsilon^2}\oint(x\,\mathrm{d}x+4y\,\mathrm{d}y)=\dfrac{\mathrm{e}^{\varepsilon^2}}{2\varepsilon^2}\oint\mathrm{d}\left(x^2+4y^2\right)=0$。剩下 $\dfrac{1}{\varepsilon^2}\oint(y\,\mathrm{d}x-x\,\mathrm{d}y)$，令 $x=\varepsilon\cos\theta,\ y=\dfrac\varepsilon2\sin\theta$（$\theta:0\to2\pi$）：</p>$$y\,\mathrm{d}x-x\,\mathrm{d}y=\left(-\frac{\varepsilon^2}{2}\sin^2\theta-\frac{\varepsilon^2}{2}\cos^2\theta\right)\mathrm{d}\theta=-\frac{\varepsilon^2}{2}\,\mathrm{d}\theta,$$<p>积分得 $\dfrac{1}{\varepsilon^2}\cdot\left(-\dfrac{\varepsilon^2}{2}\right)\cdot2\pi=-\pi$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: (Ⅰ) 极坐标积分 = 8π；(Ⅱ) simplify(Q_x − P_y) = 0（原点外），在圆 x²+y²=4 上数值积分得 −3.14159265…= −π，小椭圆参数化积分精确为 −π' },
      flags: []
    }
  ];
});
