// 2014 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 13 题：选择 1、2、3、4；填空 9、10、11、12；解答 15、16、17、18、19
registerYear(2014, function (R) {
  return [
    /* ───────────────────────── 第 1 题 ───────────────────────── */
    {
      id: '2014-1', year: 2014, no: '第1题', type: '选择', score: 4,
      stem: R`下列曲线中有渐近线的是`,
      options: [R`$y=x+\sin x$`, R`$y=x^2+\sin x$`, R`$y=x+\sin\dfrac1x$`, R`$y=x^2+\sin\dfrac1x$`],
      answer: 'C',
      figure: null,
      kp: ['diff.asym'],
      methods: ['斜渐近线公式', '有界量乘无穷小', '逐项排除'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>渐近线的判定。曲线的渐近线只有三种：铅直渐近线 $x=x_0$、水平渐近线 $y=c$、斜渐近线 $y=kx+b$。题目问"有渐近线"，把四个选项按这三种逐一排查即可。</p>
<p><b>从第一性原理看斜渐近线：</b>"渐近"的意思是：点沿曲线跑向无穷远时，它到这条直线的距离趋于 $0$。对直线 $y=kx+b$，这等价于 $\lim\limits_{x\to\infty}[f(x)-(kx+b)]=0$。由此倒推出公式：两边除以 $x$ 得 $k=\lim\limits_{x\to\infty}\dfrac{f(x)}{x}$，再算 $b=\lim\limits_{x\to\infty}[f(x)-kx]$。<b>两个极限都必须存在（有限）</b>，才有斜渐近线。</p>
<p><b>观察选项的特征：</b>四个选项都是"多项式 + 有界的正弦项"。$\sin x$、$\sin\frac1x$ 都夹在 $-1$ 与 $1$ 之间，在有限点处不会跑到无穷，所以都不会有铅直渐近线；关键看 $x\to\infty$ 时：主体是 $x^2$ 的，增长比任何直线都快，不可能贴近直线；主体是 $x$ 的，再看后面的正弦项会不会"安静下来"（趋于 $0$）——$\sin\frac1x\to0$，而 $\sin x$ 永远在振荡。答案锁定在 C。</p>`,
      solution: R`<p><b>第一步：排除铅直渐近线。</b>铅直渐近线 $x=x_0$ 要求在 $x_0$ 的某一侧 $f(x)\to\infty$。A、B 在整个实轴上连续，不可能有。C、D 只在 $x=0$ 处无定义，但 $\left|\sin\frac1x\right|\leqslant1$，所以 $x\to0$ 时 $x+\sin\frac1x$ 与 $x^2+\sin\frac1x$ 都有界（在 $0$ 附近绝对值不超过 $2$），不趋于无穷，$x=0$ 不是铅直渐近线。</p>
<p><b>第二步：排除水平渐近线。</b>水平渐近线要求 $x\to+\infty$ 或 $x\to-\infty$ 时 $f(x)$ 趋于有限数。四个函数此时都趋于无穷（例如 $x+\sin x\geqslant x-1\to+\infty$，$x^2+\sin x\geqslant x^2-1\to+\infty$），都没有水平渐近线。</p>
<p><b>第三步：逐个检查斜渐近线。</b></p>
<ul><li><b>(A) $y=x+\sin x$：</b>$k=\lim\limits_{x\to\infty}\dfrac{x+\sin x}{x}=\lim\limits_{x\to\infty}\left(1+\dfrac{\sin x}{x}\right)=1$（有界量 $\sin x$ 乘无穷小 $\frac1x$ 仍是无穷小）。但 $b=\lim\limits_{x\to\infty}(y-x)=\lim\limits_{x\to\infty}\sin x$ 不存在（在 $-1$ 与 $1$ 之间来回振荡）。所以没有斜渐近线。几何上，曲线在直线 $y=x$ 上下宽度为 $1$ 的带子里不停摆动，永远贴不近任何一条直线。</li>
<li><b>(B) $y=x^2+\sin x$：</b>$\dfrac{y}{x}=x+\dfrac{\sin x}{x}\to\infty$，$k$ 不存在，没有斜渐近线。</li>
<li><b>(C) $y=x+\sin\frac1x$：</b>$k=\lim\limits_{x\to\infty}\left(1+\dfrac1x\sin\dfrac1x\right)=1$；$b=\lim\limits_{x\to\infty}\sin\dfrac1x=\sin0=0$。两个极限都存在，所以 $y=x$ 是斜渐近线（$x\to+\infty$ 与 $x\to-\infty$ 两个方向都是）。</li>
<li><b>(D) $y=x^2+\sin\frac1x$：</b>$\dfrac yx=x+\dfrac1x\sin\dfrac1x\to\infty$，没有斜渐近线。</li></ul>
<p><b>第四步：结论。</b>只有 (C) 有渐近线，选 <b>C</b>。</p>`,
      pitfalls: R`<ul><li><b>只算 $k$ 不算 $b$：</b>(A) 中 $\lim\frac yx=1$ 存在，很多人就以为有斜渐近线 $y=x$。斜渐近线要求 $k$ 和 $b$ <b>两个</b>极限都存在，(A) 的 $b=\lim\sin x$ 不存在。</li><li><b>见到 $\frac1x$ 就以为 $x=0$ 是铅直渐近线：</b>铅直渐近线的标准是函数值趋于无穷，而 $\sin\frac1x$ 有界，$x=0$ 只是振荡间断点，不是铅直渐近线。</li><li><b>两个 $\frac{\sin x}{x}$ 的极限搞混：</b>$x\to\infty$ 时 $\frac{\sin x}{x}\to0$（有界 × 无穷小），$x\to0$ 时 $\frac{\sin x}{x}\to1$（重要极限），不要混为一谈。</li></ul>`,
      summary: R`<p><b>方法要点：</b>求渐近线按"铅直 → 水平 → 斜"三步走：铅直看无定义点、区间端点处函数是否趋于无穷；水平看 $x\to\pm\infty$ 时函数极限是否有限；斜渐近线用两步公式 $k=\lim\frac{f(x)}{x}$、$b=\lim[f(x)-kx]$，两个都存在才算。同一方向（$+\infty$ 或 $-\infty$）上，水平渐近线与斜渐近线不会同时出现。</p>
<p><b>看到…想到…：</b></p><ul><li>看到"多项式 + 有界函数" → 次数高于 1 的直接排除斜渐近线；次数为 1 时看附加项在无穷远处是否趋于 $0$。</li><li>看到 $\sin\frac1x$、$\cos\frac1x$ 这种在 $x=0$ 附近振荡但有界的项 → $x=0$ 不是铅直渐近线。</li><li>看到 $f(x)=kx+b+\alpha(x)$ 且 $\alpha(x)\to0$ → 立刻得到斜渐近线 $y=kx+b$（这其实就是斜渐近线的定义）。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 对 x+sin x 求得 k=1 而 limit(sin x) 为 AccumBounds(-1,1)（不存在）；x+sin(1/x) 得 k=1、b=0；另两个 limit(f/x)=oo' },
      flags: []
    },

    /* ───────────────────────── 第 2 题 ───────────────────────── */
    {
      id: '2014-2', year: 2014, no: '第2题', type: '选择', score: 4,
      stem: R`设函数 $f(x)$ 具有 $2$ 阶导数，$g(x)=f(0)(1-x)+f(1)x$，则在区间 $[0,1]$ 上`,
      options: [R`当 $f'(x)\geqslant0$ 时，$f(x)\geqslant g(x)$`, R`当 $f'(x)\geqslant0$ 时，$f(x)\leqslant g(x)$`, R`当 $f''(x)\geqslant0$ 时，$f(x)\geqslant g(x)$`, R`当 $f''(x)\geqslant0$ 时，$f(x)\leqslant g(x)$`],
      answer: 'D',
      figure: null,
      kp: ['diff.convex', 'diff.ineq', 'diff.mvt'],
      methods: ['作差构造辅助函数', '凹凸性（曲线在弦下方）', '拉格朗日中值定理', '举反例'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>函数凹凸性的几何意义——"凹函数的图像在弦的下方"。</p>
<p><b>第一个关键观察：$g(x)$ 是什么？</b>$g$ 是 $x$ 的一次函数，且 $g(0)=f(0)$，$g(1)=f(1)$。过两点的直线是唯一的，所以 $y=g(x)$ 就是连接 $A(0,f(0))$ 与 $B(1,f(1))$ 的<b>弦</b>。题目其实在问：什么条件下曲线一定在弦的上方或下方？</p>
<p><b>第二个关键观察：</b>"曲线与弦的上下位置"取决于曲线往哪边弯，而弯曲方向由二阶导数决定，与一阶导数（单调性）无关——单调递增的曲线既可以向上弯，也可以向下弯。所以只给 $f'$ 条件的 A、B 不可能必然成立，答案在 C、D 之中。</p>
<p><b>想象一下：</b>$f''\geqslant0$（教材称为"凹"），图像像一只碗 ∪。把碗沿的两个点连成线段，碗底一定在线段下方。所以 $f\leqslant g$，选 D。下面把这个直观变成严格证明。</p>`,
      solution: R`<p><b>第一步：看清 $g(x)$ 的几何意义。</b>$g(x)=f(0)+[f(1)-f(0)]x$ 是一次函数，$g(0)=f(0)$，$g(1)=f(1)$，所以 $y=g(x)$ 是过 $A(0,f(0))$、$B(1,f(1))$ 的直线，在 $[0,1]$ 上就是弦 $AB$。</p>
<div style="text-align:center"><svg viewBox="0 0 300 170" width="300" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>f''≥0 时曲线在弦 AB 的下方</title><polygon points="60,90 85,95.6 110,97.5 135,95.6 160,90 185,80.6 210,67.5 235,50.6 260,30" fill="currentColor" fill-opacity="0.12" stroke="none"/><line x1="40" y1="140" x2="290" y2="140" stroke="currentColor" stroke-width="1"/><line x1="60" y1="160" x2="60" y2="12" stroke="currentColor" stroke-width="1"/><line x1="260" y1="30" x2="260" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><polyline points="60,90 85,95.6 110,97.5 135,95.6 160,90 185,80.6 210,67.5 235,50.6 260,30" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="60" y1="90" x2="260" y2="30" stroke="#2f7dd1" stroke-width="1.6"/><circle cx="60" cy="90" r="3" fill="currentColor"/><circle cx="260" cy="30" r="3" fill="currentColor"/><text x="52" y="86" font-size="12" fill="currentColor" text-anchor="end">A</text><text x="268" y="28" font-size="12" fill="currentColor">B</text><text x="150" y="116" font-size="11" fill="currentColor">y = f(x)</text><text x="100" y="66" font-size="11" fill="#2f7dd1">y = g(x)（弦）</text><text x="48" y="154" font-size="11" fill="currentColor">O</text><text x="256" y="154" font-size="11" fill="currentColor">1</text><text x="284" y="154" font-size="12" fill="currentColor">x</text><text x="66" y="20" font-size="12" fill="currentColor">y</text></svg></div>
<p><b>第二步：作差，构造辅助函数。</b>令 $\varphi(x)=f(x)-g(x)$，则</p>
$$\varphi(0)=f(0)-g(0)=0,\qquad\varphi(1)=f(1)-g(1)=0,\qquad\varphi''(x)=f''(x)-0=f''(x).$$
<p>（一次函数的二阶导数为 $0$。）比较 $f$ 与 $g$ 的大小，就是判断 $\varphi$ 的符号。</p>
<p><b>第三步：证明 D 正确——若 $f''\geqslant0$，则 $\varphi(x)\leqslant0$。</b>用反证法。假设存在 $x_0\in(0,1)$ 使 $\varphi(x_0)\gt0$。在 $[0,x_0]$ 与 $[x_0,1]$ 上分别用拉格朗日中值定理：</p>
$$\varphi'(\xi_1)=\frac{\varphi(x_0)-\varphi(0)}{x_0-0}=\frac{\varphi(x_0)}{x_0}\gt0,\qquad\xi_1\in(0,x_0);$$
$$\varphi'(\xi_2)=\frac{\varphi(1)-\varphi(x_0)}{1-x_0}=\frac{-\varphi(x_0)}{1-x_0}\lt0,\qquad\xi_2\in(x_0,1).$$
<p>于是 $\xi_1\lt\xi_2$ 而 $\varphi'(\xi_1)\gt\varphi'(\xi_2)$。但 $\varphi''=f''\geqslant0$ 说明 $\varphi'$ 单调不减，应有 $\varphi'(\xi_1)\leqslant\varphi'(\xi_2)$，矛盾。所以在 $[0,1]$ 上 $\varphi(x)\leqslant0$，即 $f(x)\leqslant g(x)$，D 正确。</p>
<p><b>第四步：逐个说明其他选项为什么错（举反例）。</b></p>
<ul><li><b>(C) 错：</b>取 $f(x)=x^2$，$f''=2\geqslant0$，$g(x)=0\cdot(1-x)+1\cdot x=x$。在 $x=\frac12$ 处 $f=\frac14\lt\frac12=g$，"$f\geqslant g$" 不成立。事实上 D 刚证明了此时一定是 $f\leqslant g$。</li>
<li><b>(A) 错：</b>同一个反例 $f(x)=x^2$ 在 $[0,1]$ 上 $f'(x)=2x\geqslant0$，但 $f\left(\frac12\right)\lt g\left(\frac12\right)$。</li>
<li><b>(B) 错：</b>取 $f(x)=2x-x^2$，在 $[0,1]$ 上 $f'(x)=2-2x\geqslant0$，$g(x)=0\cdot(1-x)+1\cdot x=x$。在 $x=\frac12$ 处 $f=\frac34\gt\frac12=g$，"$f\leqslant g$" 不成立。</li></ul>
<p>A、B 的反例说明：单调递增的函数可以向上弯（$x^2$），也可以向下弯（$2x-x^2$），一阶导数管不了曲线与弦的相对位置。故选 <b>D</b>。</p>`,
      pitfalls: R`<ul><li><b>凹凸术语混淆：</b>国内教材把 $f''\geqslant0$ 称为"凹"（图形开口向上，像 ∪），有些书称为"下凸"或 convex。记图形不记名词：$f''\geqslant0$ 就是"碗口朝上"，弦在曲线上方。</li><li><b>没认出 $g(x)$ 是弦：</b>把 $g$ 当成陌生函数去硬比较，很难下手。看到 $f(0)(1-x)+f(1)x$ 这种"端点值的加权平均"，就要反应过来这是线性插值，即弦。</li><li><b>只说"由凹性显然"：</b>选择题可以这样判断，但若作为证明题，必须像第三步那样用中值定理（或凹函数定义）给出严格论证。</li></ul>`,
      summary: R`<p><b>方法要点：</b>比较两个函数大小，先作差 $\varphi=f-g$；若 $\varphi$ 在区间两端为 $0$，就看 $\varphi''$ 的符号：$\varphi''\geqslant0\Rightarrow\varphi\leqslant0$（两端为零的凹函数冒不到 $0$ 的上方），$\varphi''\leqslant0\Rightarrow\varphi\geqslant0$。</p>
<p><b>口诀：</b>"∪ 形曲线在弦下，∩ 形曲线在弦上。"</p>
<p><b>看到…想到…：</b></p><ul><li>看到 $f(a)\dfrac{b-x}{b-a}+f(b)\dfrac{x-a}{b-a}$ → 想到弦（线性插值），问题转化为凹凸性。</li><li>看到只给 $f'$ 的条件却要判断曲线与直线的位置 → 很可能是干扰项，用 $x^2$ 与 $2x-x^2$ 这一对"同增而弯向相反"的函数举反例。</li><li>看到"两端函数值为 $0$ + 二阶导数定号" → 用两次拉格朗日中值定理或凹函数定义证明函数定号。</li></ul>`,
      alt: R`<p><b>另解一（凹函数定义）：</b>对 $x\in[0,1]$，$x=(1-x)\cdot0+x\cdot1$ 是 $0$ 与 $1$ 的凸组合。$f''\geqslant0$ 时 $f$ 是凹函数，满足</p>$$f\big((1-x)\cdot0+x\cdot1\big)\leqslant(1-x)f(0)+xf(1)=g(x),$$<p>一步得结论。</p>
<p><b>另解二（泰勒公式）：</b>把 $f(0)$、$f(1)$ 都在点 $x$ 处展开（拉格朗日余项）：</p>$$f(0)=f(x)-xf'(x)+\frac{f''(\xi_1)}{2}x^2\geqslant f(x)-xf'(x),$$$$f(1)=f(x)+(1-x)f'(x)+\frac{f''(\xi_2)}{2}(1-x)^2\geqslant f(x)+(1-x)f'(x).$$<p>第一式乘 $(1-x)$、第二式乘 $x$ 后相加，$f'(x)$ 的系数 $-x(1-x)+x(1-x)=0$ 恰好抵消，得 $(1-x)f(0)+xf(1)\geqslant f(x)$，即 $g(x)\geqslant f(x)$。这种"在中间点展开、加权消去一阶项"的手法在凹凸性证明中很常用。</p>`,
      verify: { by: 'mixed', ok: true, note: 'D 项给出中值定理严格证明；sympy 验证反例：f=x² 时 (f-g)(1/2)=-1/4（否定 A、C），f=2x-x² 时 (f-g)(1/2)=1/4（否定 B）' },
      flags: []
    },

    /* ───────────────────────── 第 3 题 ───────────────────────── */
    {
      id: '2014-3', year: 2014, no: '第3题', type: '选择', score: 4,
      stem: R`设 $f(x,y)$ 是连续函数，则 $\displaystyle\int_0^1\mathrm{d}y\int_{-\sqrt{1-y^2}}^{1-y}f(x,y)\,\mathrm{d}x=$`,
      options: [
        R`$\displaystyle\int_0^1\mathrm{d}x\int_0^{x-1}f(x,y)\,\mathrm{d}y+\int_{-1}^0\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\,\mathrm{d}y$`,
        R`$\displaystyle\int_0^1\mathrm{d}x\int_0^{1-x}f(x,y)\,\mathrm{d}y+\int_{-1}^0\mathrm{d}x\int_{-\sqrt{1-x^2}}^0f(x,y)\,\mathrm{d}y$`,
        R`$\displaystyle\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\frac{1}{\cos\theta+\sin\theta}}f(r\cos\theta,r\sin\theta)\,\mathrm{d}r+\int_{\frac{\pi}{2}}^{\pi}\mathrm{d}\theta\int_0^1f(r\cos\theta,r\sin\theta)\,\mathrm{d}r$`,
        R`$\displaystyle\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\frac{1}{\cos\theta+\sin\theta}}f(r\cos\theta,r\sin\theta)\,r\,\mathrm{d}r+\int_{\frac{\pi}{2}}^{\pi}\mathrm{d}\theta\int_0^1f(r\cos\theta,r\sin\theta)\,r\,\mathrm{d}r$`
      ],
      answer: 'D',
      figure: null,
      kp: ['mint.double'],
      methods: ['由限画域', '极坐标变换', '交换积分次序', '特殊函数验算'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二重积分积分区域的识别，以及直角坐标两种次序、直角坐标与极坐标之间的转换。</p>
<p><b>第一性原理：</b>累次积分只是二重积分的一种"算法"，真正决定积分值的是<b>区域 $D$</b> 与<b>被积表达式（含面积元素）</b>。所以任何换序、换坐标的题，第一步都是"由限画域"：把原累次积分的上下限翻译成区域并画出来；第二步再按新的方式"由域定限"。</p>
<p><b>本题的区域：</b>外层 $0\leqslant y\leqslant1$，内层 $-\sqrt{1-y^2}\leqslant x\leqslant1-y$。左边界 $x=-\sqrt{1-y^2}$ 是单位圆的左半边，右边界 $x=1-y$ 是直线 $x+y=1$。所以 $D$ 由第二象限的四分之一圆盘和第一象限的一个直角三角形拼成。再看选项：A、B 是先 $y$ 后 $x$ 的直角坐标次序，C、D 是极坐标，两者的区别只在于有没有面积元素中的 $r$——出题人显然在考雅可比因子。</p>`,
      solution: R`<p><b>第一步：由限画域。</b>原积分的区域为</p>
$$D=\{(x,y)\mid 0\leqslant y\leqslant1,\ -\sqrt{1-y^2}\leqslant x\leqslant1-y\}.$$
<p>左边界 $x=-\sqrt{1-y^2}$ 即 $x^2+y^2=1$ 且 $x\leqslant0$（单位圆左半）；右边界 $x=1-y$ 即直线 $x+y=1$；再加上 $y\geqslant0$。区域如下图：$y$ 轴左边是第二象限的四分之一单位圆盘 $D_2$，右边是以 $(0,0),(1,0),(0,1)$ 为顶点的三角形 $D_1$（虚线是极坐标定限时用的射线）。</p>
<div style="text-align:center"><svg viewBox="0 0 300 165" width="300" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>积分区域 D：第二象限四分之一圆盘与第一象限三角形</title><path d="M150,130 L50,130 A100,100 0 0,1 150,30 Z" fill="currentColor" fill-opacity="0.15" stroke="none"/><polygon points="150,130 250,130 150,30" fill="currentColor" fill-opacity="0.15" stroke="none"/><line x1="25" y1="130" x2="285" y2="130" stroke="currentColor" stroke-width="1"/><line x1="150" y1="158" x2="150" y2="10" stroke="currentColor" stroke-width="1"/><path d="M50,130 A100,100 0 0,1 150,30" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="150" y1="30" x2="250" y2="130" stroke="currentColor" stroke-width="1.8"/><line x1="150" y1="130" x2="213.4" y2="93.4" stroke="#2f7dd1" stroke-width="1.4" stroke-dasharray="4 3"/><line x1="150" y1="130" x2="79.3" y2="59.3" stroke="#2f7dd1" stroke-width="1.4" stroke-dasharray="4 3"/><text x="278" y="146" font-size="12" fill="currentColor">x</text><text x="156" y="18" font-size="12" fill="currentColor">y</text><text x="139" y="146" font-size="11" fill="currentColor">O</text><text x="246" y="146" font-size="11" fill="currentColor">1</text><text x="40" y="146" font-size="11" fill="currentColor">−1</text><text x="141" y="27" font-size="11" fill="currentColor" text-anchor="end">1</text><text x="205" y="72" font-size="11" fill="currentColor">x+y=1</text><text x="8" y="75" font-size="11" fill="currentColor">x²+y²=1</text><text x="166" y="120" font-size="12" fill="currentColor">D₁</text><text x="108" y="112" font-size="12" fill="currentColor">D₂</text></svg></div>
<p><b>第二步：极坐标下定限（检验 C、D 的积分限）。</b>令 $x=r\cos\theta$，$y=r\sin\theta$，用"射线穿区域"的办法：</p>
<ul><li>$D_1$（三角形）：$\theta$ 从 $0$ 到 $\frac{\pi}{2}$。从原点出发、倾角为 $\theta$ 的射线在原点进入区域，碰到直线 $x+y=1$ 时离开。把 $x=r\cos\theta,\ y=r\sin\theta$ 代入 $x+y=1$ 得 $r(\cos\theta+\sin\theta)=1$，即 $r=\dfrac{1}{\cos\theta+\sin\theta}$，所以 $0\leqslant r\leqslant\dfrac{1}{\cos\theta+\sin\theta}$。</li>
<li>$D_2$（四分之一圆盘）：$\theta$ 从 $\frac{\pi}{2}$ 到 $\pi$，射线碰到单位圆时离开，$0\leqslant r\leqslant1$。</li></ul>
<p>C、D 两项的积分限都与此一致。</p>
<p><b>第三步：别忘了面积元素。</b>极坐标下 $\mathrm{d}x\,\mathrm{d}y=r\,\mathrm{d}r\,\mathrm{d}\theta$。这个 $r$ 的来历：极坐标网格把区域切成许多小扇环，半径从 $r$ 到 $r+\mathrm{d}r$、角度从 $\theta$ 到 $\theta+\mathrm{d}\theta$ 的小扇环，径向边长 $\mathrm{d}r$，弧长 $r\,\mathrm{d}\theta$，近似为小矩形，面积 $\approx r\,\mathrm{d}r\,\mathrm{d}\theta$。离原点越远，同样的 $\mathrm{d}\theta$ 张开的弧越长，所以必须乘 $r$。于是</p>
$$\iint_Df(x,y)\,\mathrm{d}x\,\mathrm{d}y=\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\frac{1}{\cos\theta+\sin\theta}}f(r\cos\theta,r\sin\theta)\,r\,\mathrm{d}r+\int_{\frac{\pi}{2}}^{\pi}\mathrm{d}\theta\int_0^1f(r\cos\theta,r\sin\theta)\,r\,\mathrm{d}r,$$
<p>正是选项 D。C 漏掉了 $r$，错误。</p>
<p><b>第四步：检查 A、B（先 $y$ 后 $x$）。</b>竖着切：</p>
<ul><li>$0\leqslant x\leqslant1$ 时，竖线从 $y=0$ 进入、从直线 $y=1-x$ 离开，应为 $\int_0^1\mathrm{d}x\int_0^{1-x}f\,\mathrm{d}y$；</li>
<li>$-1\leqslant x\leqslant0$ 时，竖线从 $y=0$ 进入、从上半圆 $y=\sqrt{1-x^2}$ 离开，应为 $\int_{-1}^0\mathrm{d}x\int_0^{\sqrt{1-x^2}}f\,\mathrm{d}y$。</li></ul>
<p>A 的第一项内层上限写成了 $x-1$（在 $[0,1]$ 上 $x-1\leqslant0$，上限比下限还小，对应的是 $x$ 轴下方的三角形且符号相反），错误；B 的第二项写成了 $\int_{-\sqrt{1-x^2}}^0$，对应第三象限的四分之一圆盘，区域错了。所以选 <b>D</b>。</p>
<p><b>第五步：用具体函数验算。</b>取 $f\equiv1$，原式等于 $D$ 的面积 $\frac12+\frac{\pi}{4}$；A 给出 $\int_0^1(x-1)\,\mathrm{d}x+\frac{\pi}{4}=-\frac12+\frac{\pi}{4}$，不对。B 在 $f\equiv1$ 时恰好也得 $\frac12+\frac{\pi}{4}$（下半个四分之一圆与上半个面积相同），但取 $f=y$ 时，原式 $=\frac16+\frac13=\frac12$，B 却给出 $\frac16-\frac13=-\frac16$，可见 B 确实错。</p>`,
      pitfalls: R`<ul><li><b>极坐标忘乘 $r$（错选 C）：</b>这是本题设置的最主要陷阱。$\mathrm{d}x\,\mathrm{d}y=r\,\mathrm{d}r\,\mathrm{d}\theta$ 必须成套出现。</li><li><b>直线的极坐标方程写错：</b>$x+y=1$ 化为 $r=\dfrac{1}{\cos\theta+\sin\theta}$；不要写成 $r=\cos\theta+\sin\theta$（那是一个过原点的圆）。</li><li><b>不画图直接"搬"上下限：</b>B 项把 $-\sqrt{1-x^2}$ 从 $x$ 的下限照搬成了 $y$ 的下限，形似而区域跑到了 $x$ 轴下方。换序一定要先画图。</li><li><b>只用 $f\equiv1$ 验算：</b>面积相等不代表区域相同（B 就是例子），验算时最好再换一个不对称的函数，如 $f=y$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>累次积分换序、换坐标的通用流程是"由限画域 → 由域定限"。极坐标定限用"射线穿区域"：$\theta$ 的范围看区域张开的角度，$r$ 的下限是射线进入区域处，上限是离开区域处；面积元素 $\mathrm{d}\sigma=r\,\mathrm{d}r\,\mathrm{d}\theta$。</p>
<p><b>看到…想到…：</b></p><ul><li>看到 $\sqrt{1-y^2}$、$\sqrt{1-x^2}$ 这种根式限 → 是圆的一部分，考虑极坐标。</li><li>看到直线 $ax+by=c$ 作为边界 → 极坐标下 $r=\dfrac{c}{a\cos\theta+b\sin\theta}$。</li><li>看到选项里成对出现"有 $r$ / 无 $r$" → 在考雅可比因子 $r$。</li><li>区域由不同曲线拼接 → 按边界换函数的位置分块，各块分别定限。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 对 f=1、f=x²+y、f=y 分别计算原累次积分与 D 项，结果均一致（1/2+π/4、7/12+π/16、1/2）；B 项取 f=y 得 -1/6，与原式 1/2 不符' },
      flags: ['OCR 中 (D) 项丢失了选项标号 "(D)"，已按顺序补为第四个选项', '(A) 项第一部分内层上限 OCR 为 x−1，与通行的原卷版本一致，按原样保留（这正是该选项错误之处）']
    },

    /* ───────────────────────── 第 4 题 ───────────────────────── */
    {
      id: '2014-4', year: 2014, no: '第4题', type: '选择', score: 4,
      stem: R`若 $\displaystyle\int_{-\pi}^{\pi}(x-a_1\cos x-b_1\sin x)^2\,\mathrm{d}x=\min_{a,b\in\mathbf{R}}\left\{\int_{-\pi}^{\pi}(x-a\cos x-b\sin x)^2\,\mathrm{d}x\right\}$，则 $a_1\cos x+b_1\sin x=$`,
      options: [R`$2\sin x$`, R`$2\cos x$`, R`$2\pi\sin x$`, R`$2\pi\cos x$`],
      answer: 'A',
      figure: null,
      kp: ['int.defcalc', 'series.fourier', 'mdiff.extreme'],
      methods: ['对称区间奇偶性', '分部积分', '配方求最值', '傅里叶系数（最佳平方逼近）'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>表面上是"求二元函数的最小值"，实际只需会算几个定积分（利用奇偶性和三角函数积分），然后配方。背后的思想是傅里叶级数的<b>最佳平方逼近</b>性质。</p>
<p><b>怎么想到：</b>$(a_1,b_1)$ 是使积分 $\int_{-\pi}^{\pi}(x-a\cos x-b\sin x)^2\,\mathrm{d}x$ 最小的那组参数。这个积分算出来是 $a,b$ 的函数 $F(a,b)$，所以第一步是把它算出来。被积函数是平方，展开后是 $a,b$ 的二次式，求二次函数的最小值，配方最干净。</p>
<p><b>计算上的关键技巧：</b>积分区间 $[-\pi,\pi]$ 关于原点对称，奇函数的积分为 $0$。展开后的 $x\cos x$、$\sin x\cos x$ 都是奇函数，可以直接扔掉，省下一大半计算。</p>
<p><b>更深一层的直观：</b>把函数看成"向量"，把 $\int_{-\pi}^{\pi}u(x)v(x)\,\mathrm{d}x$ 看成"内积"，那么 $\int(x-a\cos x-b\sin x)^2\,\mathrm{d}x$ 就是 $x$ 到 $a\cos x+b\sin x$ 的"距离的平方"。距离最小的点是 $x$ 在 $\cos x,\sin x$ 张成的"平面"上的<b>正交投影</b>，投影系数恰好就是 $x$ 的傅里叶系数。</p>`,
      solution: R`<p><b>第一步：展开被积函数。</b></p>
$$(x-a\cos x-b\sin x)^2=x^2+a^2\cos^2x+b^2\sin^2x-2ax\cos x-2bx\sin x+2ab\sin x\cos x.$$
<p><b>第二步：逐项在 $[-\pi,\pi]$ 上积分。</b></p>
<ul><li>$\int_{-\pi}^{\pi}x^2\,\mathrm{d}x=\dfrac{2\pi^3}{3}$；</li>
<li>$\int_{-\pi}^{\pi}\cos^2x\,\mathrm{d}x=\int_{-\pi}^{\pi}\dfrac{1+\cos2x}{2}\,\mathrm{d}x=\pi$，同理 $\int_{-\pi}^{\pi}\sin^2x\,\mathrm{d}x=\pi$；</li>
<li>$x\cos x$ 与 $\sin x\cos x$ 是奇函数，在对称区间上积分为 $0$；</li>
<li>$x\sin x$ 是偶函数，$\int_{-\pi}^{\pi}x\sin x\,\mathrm{d}x=2\int_0^{\pi}x\sin x\,\mathrm{d}x$。分部积分：$\int_0^{\pi}x\sin x\,\mathrm{d}x=\big[-x\cos x\big]_0^{\pi}+\int_0^{\pi}\cos x\,\mathrm{d}x=\pi+0=\pi$，所以 $\int_{-\pi}^{\pi}x\sin x\,\mathrm{d}x=2\pi$。</li></ul>
<p>合起来：</p>
$$F(a,b)=\frac{2\pi^3}{3}+\pi a^2+\pi b^2-2b\cdot2\pi=\frac{2\pi^3}{3}+\pi a^2+\pi b^2-4\pi b.$$
<p><b>第三步：配方求最小值。</b></p>
$$F(a,b)=\pi a^2+\pi(b-2)^2+\frac{2\pi^3}{3}-4\pi\geqslant\frac{2\pi^3}{3}-4\pi,$$
<p>等号当且仅当 $a=0$，$b=2$ 时成立，所以最小值点唯一：$a_1=0$，$b_1=2$。</p>
<p><b>第四步：得结论。</b>$a_1\cos x+b_1\sin x=2\sin x$，选 <b>A</b>。</p>
<p><b>其他选项为什么错：</b>B、D 含 $\cos x$。$x$ 是奇函数，$\cos x$ 是偶函数，二者的"内积" $\int x\cos x=0$，用 $\cos x$ 去逼近 $x$ 只会白白增加 $\pi a^2\geqslant0$ 的误差，所以 $\cos x$ 的系数必为 $0$。C 的系数 $2\pi$ 是把 $\int_{-\pi}^{\pi}x\sin x\,\mathrm{d}x=2\pi$ 直接当成了系数，忘了除以 $\int_{-\pi}^{\pi}\sin^2x\,\mathrm{d}x=\pi$。</p>`,
      pitfalls: R`<ul><li><b>不用奇偶性硬算：</b>$\int x\cos x\,\mathrm{d}x$、$\int\sin x\cos x\,\mathrm{d}x$ 都能算，但浪费时间且易错。对称区间先看奇偶。</li><li><b>$\int_0^{\pi}x\sin x\,\mathrm{d}x$ 符号算错：</b>$\big[-x\cos x\big]_0^{\pi}=-\pi\cos\pi=\pi$，$\cos\pi=-1$ 的负号容易弄丢。</li><li><b>系数忘了归一化（错选 C）：</b>傅里叶系数是 $b_1=\dfrac{1}{\pi}\int_{-\pi}^{\pi}x\sin x\,\mathrm{d}x$，前面的 $\frac1\pi$ 来自 $\int_{-\pi}^{\pi}\sin^2x\,\mathrm{d}x=\pi$。</li><li>用偏导数求出驻点后，要说明它是最小值点；配方法一步到位，不需要再验证二阶条件。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"使 $\int(f-\sum c_k\varphi_k)^2$ 最小的参数" → 把积分算成参数的二次函数后配方；若 $\{\varphi_k\}$ 在区间上两两正交（如 $1,\cos nx,\sin nx$ 在 $[-\pi,\pi]$ 上），最优系数就是 $c_k=\dfrac{\int f\varphi_k}{\int\varphi_k^2}$，即傅里叶系数。</p>
<p><b>看到…想到…：</b></p><ul><li>看到 $\min\int_{-\pi}^{\pi}(f(x)-a\cos x-b\sin x)^2\,\mathrm{d}x$ → 想到傅里叶系数 $a=\frac1\pi\int f\cos x$，$b=\frac1\pi\int f\sin x$，可以秒答。</li><li>看到对称区间上的积分 → 先拆出奇函数部分直接得 $0$。</li><li>看到二元二次函数求最值 → 配方优先，比"驻点 + $AC-B^2$"更快、更不易错。</li></ul>`,
      alt: R`<p><b>傅里叶系数秒算：</b>$\cos x$、$\sin x$ 在 $[-\pi,\pi]$ 上正交（$\int_{-\pi}^{\pi}\cos x\sin x\,\mathrm{d}x=0$），由最佳平方逼近性质，最优系数就是 $f(x)=x$ 的傅里叶系数：</p>$$a_1=\frac1\pi\int_{-\pi}^{\pi}x\cos x\,\mathrm{d}x=0,\qquad b_1=\frac1\pi\int_{-\pi}^{\pi}x\sin x\,\mathrm{d}x=\frac{2\pi}{\pi}=2.$$<p>事实上 $x=2\left(\sin x-\dfrac{\sin2x}{2}+\dfrac{\sin3x}{3}-\cdots\right)$（$-\pi\lt x\lt\pi$），第一项正是 $2\sin x$。这也说明：傅里叶级数的部分和，是同阶三角多项式中"平均平方误差最小"的那一个。</p>
<p><b>驻点法：</b>$F_a=2\pi a=0$，$F_b=2\pi b-4\pi=0$，得 $(0,2)$；$A=F_{aa}=2\pi$，$B=F_{ab}=0$，$C=F_{bb}=2\pi$，$AC-B^2\gt0$ 且 $A\gt0$，是极小值；$F$ 是开口向上的二次函数，唯一的极小值就是最小值。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate((x-a cos x-b sin x)², (x,-π,π)) = πa²+πb²-4πb+2π³/3，驻点 {a:0, b:2}' },
      flags: []
    },

    /* ───────────────────────── 第 9 题 ───────────────────────── */
    {
      id: '2014-9', year: 2014, no: '第9题', type: '填空', score: 4,
      stem: R`曲面 $z=x^2(1-\sin y)+y^2(1-\sin x)$ 在点 $(1,0,1)$ 处的切平面方程为 ______.`,
      options: null,
      answer: R`$2x-y-z-1=0$`,
      figure: null,
      kp: ['mdiff.geo', 'mdiff.diffable'],
      methods: ['曲面法向量（梯度）', '点法式平面方程'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>曲面的切平面方程。核心是求出切点处的<b>法向量</b>，再用点法式写平面。</p>
<p><b>为什么法向量是 $(f_x,f_y,-1)$：</b>把曲面 $z=f(x,y)$ 写成 $F(x,y,z)=f(x,y)-z=0$。曲面上过切点的任意一条曲线 $(x(t),y(t),z(t))$ 都满足 $F(x(t),y(t),z(t))\equiv0$，两边对 $t$ 求导得 $\nabla F\cdot(x'(t),y'(t),z'(t))=0$。也就是说梯度 $\nabla F=(f_x,f_y,-1)$ 与曲面上所有曲线的切向量都垂直，它就是法向量。</p>
<p>本题曲面是显式的 $z=f(x,y)$，只要算两个偏导数在 $(1,0)$ 处的值。</p>`,
      solution: R`<p><b>第一步：确认点在曲面上。</b>$x=1,\ y=0$ 时 $z=1^2\cdot(1-\sin0)+0=1$，点 $(1,0,1)$ 确实在曲面上。</p>
<p><b>第二步：求偏导数。</b>记 $f(x,y)=x^2(1-\sin y)+y^2(1-\sin x)$。对 $x$ 求偏导时把 $y$ 看成常数：</p>
$$f_x=2x(1-\sin y)+y^2\cdot(-\cos x)=2x(1-\sin y)-y^2\cos x;$$
<p>对 $y$ 求偏导时把 $x$ 看成常数：</p>
$$f_y=x^2\cdot(-\cos y)+2y(1-\sin x)=-x^2\cos y+2y(1-\sin x).$$
<p><b>第三步：代入切点。</b></p>
$$f_x(1,0)=2\cdot1\cdot(1-0)-0=2,\qquad f_y(1,0)=-1\cdot\cos0+0=-1.$$
<p>法向量 $\mathbf{n}=(f_x,f_y,-1)=(2,-1,-1)$。</p>
<p><b>第四步：点法式写切平面。</b>过点 $(x_0,y_0,z_0)$、法向量为 $(A,B,C)$ 的平面是 $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$：</p>
$$2(x-1)-(y-0)-(z-1)=0\ \Longrightarrow\ 2x-y-z-1=0.$$`,
      pitfalls: R`<ul><li><b>求偏导时漏项：</b>$f$ 的两项都同时含 $x$ 和 $y$。对 $x$ 求偏导时第二项 $y^2(1-\sin x)$ 也要求导（得 $-y^2\cos x$），只是它在 $y=0$ 处恰好为 $0$；对 $y$ 求偏导同理。</li><li><b>法向量第三个分量的符号：</b>$F=f(x,y)-z$，所以第三个分量是 $-1$；写成 $(f_x,f_y,1)$ 平面就错了。</li><li><b>不验证点在曲面上：</b>本题点确实在曲面上；若点不在曲面上，就谈不上"切平面"，要警惕题目陷阱。</li></ul>`,
      summary: R`<p><b>方法要点：</b>曲面 $F(x,y,z)=0$ 在点 $P_0$ 处的法向量为 $\nabla F(P_0)=(F_x,F_y,F_z)$；显式曲面 $z=f(x,y)$ 的法向量为 $(f_x,f_y,-1)$。切平面用点法式，法线用对称式 $\dfrac{x-x_0}{F_x}=\dfrac{y-y_0}{F_y}=\dfrac{z-z_0}{F_z}$。</p>
<p><b>看到…想到…：</b>看到"切平面 / 法线" → 先求梯度当法向量；看到"空间曲线的切线 / 法平面" → 求切向量（参数式求导，或两个曲面法向量的叉乘）。切平面方程也可以看成全微分的几何形式：$z-z_0=f_x(x-x_0)+f_y(y-y_0)$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: z(1,0)=1，f_x(1,0)=2，f_y(1,0)=-1，切平面 2(x-1)-y-(z-1)=0' },
      flags: ['OCR 丢失填空横线，已补 "______"']
    },

    /* ───────────────────────── 第 10 题 ───────────────────────── */
    {
      id: '2014-10', year: 2014, no: '第10题', type: '填空', score: 4,
      stem: R`设 $f(x)$ 是周期为 $4$ 的可导奇函数，且 $f'(x)=2(x-1)$，$x\in[0,2]$，则 $f(7)=$ ______.`,
      options: null,
      answer: R`$1$`,
      figure: null,
      kp: ['lim.func', 'int.concept'],
      methods: ['周期性平移', '奇函数性质', '由导数求原函数'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>函数的周期性、奇偶性，以及"由导数求原函数"。</p>
<p><b>怎么想：</b>$7$ 不在已知区间 $[0,2]$ 里，要靠周期性把 $7$ "搬"回来：$7-8=-1$。但 $-1$ 也不在 $[0,2]$ 里，再用奇函数性质把 $-1$ 翻到 $1$。而求 $f(1)$ 需要 $f$ 在 $[0,2]$ 上的表达式，题目只给了导数，所以要积分，积分常数靠"奇函数在 $0$ 处的值为 $0$"确定。整题是一个"周期 → 奇偶 → 积分 → 定常数"的接力。</p>`,
      solution: R`<p><b>第一步：由导数求 $f$ 在 $[0,2]$ 上的表达式。</b>$f'(x)=2(x-1)$，而 $\big[(x-1)^2\big]'=2(x-1)$，所以在区间 $[0,2]$ 上 $f(x)-(x-1)^2$ 的导数恒为 $0$。由拉格朗日中值定理的推论（导数恒为零的函数在区间上是常数）：</p>
$$f(x)=(x-1)^2+C,\quad x\in[0,2].$$
<p><b>第二步：用奇函数确定常数。</b>奇函数满足 $f(-x)=-f(x)$，令 $x=0$ 得 $f(0)=-f(0)$，所以 $f(0)=0$。代入得 $1+C=0$，$C=-1$，于是</p>
$$f(x)=(x-1)^2-1=x^2-2x,\quad x\in[0,2].$$
<p><b>第三步：用周期把 $7$ 搬回来。</b>周期为 $4$，$f(x+4k)=f(x)$（$k$ 为整数），故 $f(7)=f(7-8)=f(-1)$。</p>
<p><b>第四步：用奇性把 $-1$ 翻到 $[0,2]$ 内。</b>$f(-1)=-f(1)=-(1^2-2\cdot1)=-(-1)=1$。</p>
<p>所以 $f(7)=1$。</p>`,
      pitfalls: R`<ul><li><b>直接把 $7$ 代入 $x^2-2x$：</b>得 $35$，错误。表达式只在 $[0,2]$ 上成立。</li><li><b>搬到 $3$ 就代公式：</b>$f(7)=f(3)$ 没错，但 $3\notin[0,2]$，代入 $x^2-2x$ 得 $3$ 是错的。应继续 $f(3)=f(-1)$。</li><li><b>积分常数没确定：</b>只写 $f(x)=x^2-2x+C$ 无法得出数值。"奇函数 ⇒ $f(0)=0$"是确定常数的唯一线索（前提是 $f$ 在 $0$ 处有定义；本题 $f$ 可导，自然有定义）。</li></ul>`,
      summary: R`<p><b>方法要点：</b>求远处的函数值，先用周期把自变量平移到一个基本周期区间内，再用奇偶性翻到已知表达式的区间。已知导数求函数值时，积分常数要靠一个已知函数值来定；奇函数自带条件 $f(0)=0$。</p>
<p><b>看到…想到…：</b></p><ul><li>看到"周期为 $T$" → $f(x)=f(x-kT)$，把自变量移到 $\left[-\frac T2,\frac T2\right]$ 最便于配合奇偶性。</li><li>看到"奇函数" → $f(0)=0$，$f(-x)=-f(x)$；看到"可导奇函数" → 导函数是偶函数。</li><li>看到只给 $f'$ 却要 $f$ 的值 → 积分 + 定常数，或用牛顿—莱布尼茨公式 $f(b)=f(a)+\int_a^bf'(t)\,\mathrm{d}t$。</li></ul>`,
      alt: R`<p><b>用牛顿—莱布尼茨公式：</b>可导奇函数的导数是偶函数，所以 $f'(t)=f'(-t)$。于是</p>$$f(-1)=f(0)-\int_{-1}^0f'(t)\,\mathrm{d}t=0-\int_0^1f'(u)\,\mathrm{d}u=-\int_0^12(u-1)\,\mathrm{d}u=-\big[(u-1)^2\big]_0^1=-(0-1)=1,$$<p>（中间令 $t=-u$ 并用 $f'$ 为偶函数。）再由周期性 $f(7)=f(-1)=1$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(2(x-1)) 加常数并令 f(0)=0 得 x²-2x，f(7)=f(-1)=-f(1)=1' },
      flags: []
    },

    /* ───────────────────────── 第 11 题 ───────────────────────── */
    {
      id: '2014-11', year: 2014, no: '第11题', type: '填空', score: 4,
      stem: R`微分方程 $xy'+y(\ln x-\ln y)=0$ 满足条件 $y(1)=\mathrm{e}^3$ 的解为 $y=$ ______.`,
      options: null,
      answer: R`$x\mathrm{e}^{2x+1}$`,
      figure: null,
      kp: ['ode.first'],
      methods: ['齐次方程换元 u=y/x', '分离变量', '凑微分'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>一阶齐次微分方程（$y'=\varphi\left(\frac yx\right)$ 型）的求解。</p>
<p><b>怎么认出来：</b>方程里的 $\ln x-\ln y$ 本身就是 $\ln\frac xy$，只依赖于比值 $\frac yx$。再把 $y'$ 解出来：$y'=\frac yx(\ln y-\ln x)=\frac yx\ln\frac yx$，右端整个是 $\frac yx$ 的函数——这就是齐次方程的标志。</p>
<p><b>为什么令 $u=\frac yx$：</b>齐次方程在放缩变换 $x\to\lambda x,\ y\to\lambda y$ 下不变，真正起作用的只有比值 $u=\frac yx$。令 $y=ux$，就把"两个变量纠缠在一起"变成"$u$ 与 $x$ 可以分离"。</p>
<p>另外，方程中出现 $\ln x$、$\ln y$，隐含 $x\gt0$，$y\gt0$。</p>`,
      solution: R`<p><b>第一步：化成标准形式。</b>$x\gt0$，两边除以 $x$ 并移项：</p>
$$y'=\frac yx(\ln y-\ln x)=\frac yx\ln\frac yx.$$
<p><b>第二步：换元。</b>令 $u=\frac yx$，即 $y=ux$，则 $y'=u+xu'$（乘积求导）。代入：</p>
$$u+x\frac{\mathrm{d}u}{\mathrm{d}x}=u\ln u\ \Longrightarrow\ x\frac{\mathrm{d}u}{\mathrm{d}x}=u(\ln u-1).$$
<p><b>第三步：分离变量。</b>当 $\ln u\ne1$ 时，</p>
$$\frac{\mathrm{d}u}{u(\ln u-1)}=\frac{\mathrm{d}x}{x}.$$
<p><b>第四步：积分。</b>左边令 $w=\ln u-1$，则 $\mathrm{d}w=\frac{\mathrm{d}u}{u}$，$\displaystyle\int\frac{\mathrm{d}u}{u(\ln u-1)}=\int\frac{\mathrm{d}w}{w}=\ln|w|$。所以</p>
$$\ln|\ln u-1|=\ln x+C_1\ \Longrightarrow\ \ln u-1=Cx\quad(C=\pm\mathrm{e}^{C_1}).$$
<p>另外 $\ln u=1$（即 $u=\mathrm{e}$，$y=\mathrm{e}x$）也是方程的解，对应 $C=0$，所以 $C$ 可取任意常数。</p>
<p><b>第五步：回代。</b>$\ln u=Cx+1$，$u=\mathrm{e}^{Cx+1}$，通解为 $y=x\mathrm{e}^{Cx+1}$。</p>
<p><b>第六步：用初值定常数。</b>$y(1)=\mathrm{e}^{C+1}=\mathrm{e}^3$，得 $C=2$。所求解为</p>
$$y=x\mathrm{e}^{2x+1}.$$
<p><b>第七步：代回检验。</b>$y'=\mathrm{e}^{2x+1}(1+2x)$，$\ln x-\ln y=\ln x-(\ln x+2x+1)=-(2x+1)$，于是 $xy'+y(\ln x-\ln y)=x\mathrm{e}^{2x+1}(1+2x)-x\mathrm{e}^{2x+1}(2x+1)=0$。✓</p>`,
      pitfalls: R`<ul><li><b>$y'$ 的换元公式写错：</b>$y=ux$ 时 $y'=u+xu'$，不是 $y'=u'$。漏掉 $u$ 会让方程完全变形错误。</li><li><b>积分 $\int\frac{\mathrm{d}u}{u(\ln u-1)}$ 不会：</b>看到 $\frac{\mathrm{d}u}{u}$ 就想到 $\mathrm{d}(\ln u)$，凑微分即可。</li><li><b>符号弄反：</b>原方程是 $+y(\ln x-\ln y)$，移项后 $xy'=y(\ln y-\ln x)$，得 $\ln\frac yx$。若写成 $\ln\frac xy$，后面全错。</li><li>答案写成 $\mathrm{e}x\mathrm{e}^{2x}$ 也对，但不要把通解中的常数和初值混在一起乱写。</li></ul>`,
      summary: R`<p><b>方法要点：</b>齐次方程 $y'=\varphi\left(\frac yx\right)$：令 $u=\frac yx$，$y'=u+xu'$，化为可分离变量方程 $\dfrac{\mathrm{d}u}{\varphi(u)-u}=\dfrac{\mathrm{d}x}{x}$。</p>
<p><b>看到…想到…：</b></p><ul><li>看到 $\ln x-\ln y$、$\frac yx$、$\frac{x^2+y^2}{xy}$ 这类"各项次数相同"的组合 → 齐次方程，令 $u=\frac yx$。</li><li>看到 $\frac{\mathrm{d}u}{u\ln u}$、$\frac{\mathrm{d}u}{u(\ln u-1)}$ → 凑 $\mathrm{d}(\ln u)$。</li><li>填空题求出特解后，一定代回原方程检验，几秒钟就能发现符号错误。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 将 y=x·e^(2x+1) 代入 x y\' + y(ln x - ln y) 化简为 0，且 y(1)=e³' },
      flags: ['OCR 丢失填空横线，已补 "______"']
    },

    /* ───────────────────────── 第 12 题 ───────────────────────── */
    {
      id: '2014-12', year: 2014, no: '第12题', type: '填空', score: 4,
      stem: R`设 $L$ 是柱面 $x^2+y^2=1$ 与平面 $y+z=0$ 的交线，从 $z$ 轴正向往 $z$ 轴负向看去为逆时针方向，则曲线积分 $\displaystyle\oint_Lz\,\mathrm{d}x+y\,\mathrm{d}z=$ ______.`,
      options: null,
      answer: R`$\pi$`,
      figure: null,
      kp: ['mint.stokes', 'mint.line2'],
      methods: ['参数化化为定积分', '斯托克斯公式', '格林公式'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>空间第二类曲线积分。两条主路：① 把曲线参数化，直接化为定积分；② 用斯托克斯公式化为曲面积分。</p>
<p><b>怎么想到参数化：</b>曲线是柱面 $x^2+y^2=1$ 与平面的交线。柱面上的点天然可以写成 $x=\cos t,\ y=\sin t$，再由平面方程 $z=-y$ 得 $z=-\sin t$。三个坐标都用同一个参数表示，曲线积分立刻变成关于 $t$ 的定积分。</p>
<p><b>方向怎么定：</b>"从 $z$ 轴正向往负向看"就是从上往下俯视，看到的是曲线在 $xOy$ 面上的投影——单位圆。俯视逆时针，就是投影圆按 $t$ 从 $0$ 增加到 $2\pi$ 的方向走。</p>
<p><b>为什么斯托克斯也好用：</b>向量场 $(z,0,y)$ 的旋度是常向量 $(1,1,0)$，曲线所围的又是一块平面，曲面积分几乎不用计算。</p>`,
      solution: R`<p><b>第一步：写出参数方程并确定方向。</b>$L:\ x=\cos t,\ y=\sin t,\ z=-\sin t$。俯视时投影点 $(\cos t,\sin t)$ 随 $t$ 增大沿单位圆逆时针转动，与题目要求一致，所以 $t$ 从 $0$ 到 $2\pi$。</p>
<p><b>第二步：求微分。</b>$\mathrm{d}x=-\sin t\,\mathrm{d}t$，$\mathrm{d}z=-\cos t\,\mathrm{d}t$。</p>
<p><b>第三步：代入化为定积分。</b></p>
$$z\,\mathrm{d}x=(-\sin t)(-\sin t)\,\mathrm{d}t=\sin^2t\,\mathrm{d}t,\qquad y\,\mathrm{d}z=\sin t\cdot(-\cos t)\,\mathrm{d}t,$$
$$\oint_Lz\,\mathrm{d}x+y\,\mathrm{d}z=\int_0^{2\pi}\sin^2t\,\mathrm{d}t-\int_0^{2\pi}\sin t\cos t\,\mathrm{d}t.$$
<p><b>第四步：计算。</b>$\displaystyle\int_0^{2\pi}\sin^2t\,\mathrm{d}t=\int_0^{2\pi}\frac{1-\cos2t}{2}\,\mathrm{d}t=\pi$；$\displaystyle\int_0^{2\pi}\sin t\cos t\,\mathrm{d}t=\left[\frac{\sin^2t}{2}\right]_0^{2\pi}=0$。所以</p>
$$\oint_Lz\,\mathrm{d}x+y\,\mathrm{d}z=\pi.$$`,
      pitfalls: R`<ul><li><b>方向弄反：</b>若误取 $t$ 从 $2\pi$ 到 $0$，结果变成 $-\pi$。"从 $z$ 轴正向往负向看"就是从上往下看，看到的是 $xOy$ 面的正常视角，逆时针就是 $t$ 增大的方向。</li><li><b>$z$ 的参数写错：</b>由 $y+z=0$ 得 $z=-y=-\sin t$，不是 $\sin t$。</li><li><b>斯托克斯法选错侧：</b>曲线方向与曲面的侧要符合右手法则：四指沿曲线方向弯曲，拇指指向曲面的法向。俯视逆时针对应上侧。</li><li><b>直接套格林公式：</b>$L$ 是空间曲线，不在 $xOy$ 面上，不能直接用格林公式；要先用 $z=-y$ 消去 $z$，化成投影曲线上的平面曲线积分后才能用（见另解）。</li></ul>`,
      summary: R`<p><b>方法要点：</b>空间曲线积分三条路：① 参数化（柱面交线用 $x=R\cos t,\ y=R\sin t$，再由另一方程解出 $z$）；② 斯托克斯公式（旋度简单、所围曲面是平面时最省事）；③ 用曲面方程消去 $z$，化为投影曲线上的平面曲线积分，再用格林公式。</p>
<p><b>看到…想到…：</b></p><ul><li>看到"柱面 $x^2+y^2=R^2$ 与某平面的交线" → 参数化 $x=R\cos t,\ y=R\sin t$。</li><li>看到"从 $z$ 轴正向看去为逆时针" → 投影曲线逆时针，斯托克斯公式取上侧。</li><li>看到被积式系数都是一次式（旋度为常向量） → 斯托克斯后变成"常数 × 面积"。</li></ul>`,
      alt: R`<p><b>另解一（斯托克斯公式）：</b>取 $\Sigma$ 为平面 $z=-y$ 被柱面截下的部分，$(x,y)\in D:x^2+y^2\leqslant1$；俯视逆时针，按右手法则取<b>上侧</b>。$P=z,\ Q=0,\ R=y$：</p>$$\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}=1,\qquad\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}=1,\qquad\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=0,$$<p>所以 $\displaystyle\oint_L=\iint_\Sigma\mathrm{d}y\,\mathrm{d}z+\mathrm{d}z\,\mathrm{d}x$。对上侧曲面 $z=z(x,y)$，$\mathrm{d}y\,\mathrm{d}z=-z_x\,\mathrm{d}x\,\mathrm{d}y$，$\mathrm{d}z\,\mathrm{d}x=-z_y\,\mathrm{d}x\,\mathrm{d}y$；这里 $z_x=0$，$z_y=-1$，故</p>$$\oint_L=\iint_D(0+1)\,\mathrm{d}x\,\mathrm{d}y=\pi.$$
<p><b>另解二（消元 + 格林公式）：</b>在 $L$ 上 $z=-y$，$\mathrm{d}z=-\mathrm{d}y$，所以 $\oint_Lz\,\mathrm{d}x+y\,\mathrm{d}z=\oint_{C}(-y)\,\mathrm{d}x-y\,\mathrm{d}y$，其中 $C$ 是逆时针的单位圆。对 $P=-y,\ Q=-y$ 用格林公式：$\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}=0-(-1)=1$，结果 $=\iint_D1\,\mathrm{d}x\,\mathrm{d}y=\pi$。三种方法一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 参数化 x=cos t, y=sin t, z=-sin t，integrate(z·x\'+y·z\', (t,0,2π)) = π；斯托克斯与格林两种另解手算均为 π' },
      flags: ['OCR 中 "\\mathrm{~d}" 多余空格已清理，并补上填空横线']
    },

    /* ───────────────────────── 第 15 题 ───────────────────────── */
    {
      id: '2014-15', year: 2014, no: '第15题', type: '解答', score: 10,
      stem: R`求极限 $\displaystyle\lim_{x\to+\infty}\frac{\int_1^x\left[t^2\left(\mathrm{e}^{\frac1t}-1\right)-t\right]\mathrm{d}t}{x^2\ln\left(1+\frac1x\right)}$.`,
      options: null,
      answer: R`$\dfrac12$`,
      figure: null,
      kp: ['lim.compute', 'int.ftc', 'diff.taylor'],
      methods: ['等价无穷小代换', '洛必达法则', '变限积分求导', '倒代换', '泰勒公式'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>$x\to+\infty$ 时的未定式极限，综合了等价无穷小、变限积分求导（洛必达法则）与泰勒展开。</p>
<p><b>拿到题先判类型：</b>分母 $x^2\ln\left(1+\frac1x\right)$ 中 $\frac1x\to0$，$\ln\left(1+\frac1x\right)\sim\frac1x$，所以分母 $\sim x\to+\infty$。分子是积分上限函数，被积函数 $t^2\left(\mathrm{e}^{1/t}-1\right)-t$ 当 $t\to+\infty$ 时趋于 $\frac12$（下面会算），所以积分大约像 $\frac12x$ 一样增长，也趋于 $+\infty$。这是 $\frac{\infty}{\infty}$ 型。</p>
<p><b>为什么用洛必达：</b>分子是变限积分，原函数 $\int t^2\mathrm{e}^{1/t}\,\mathrm{d}t$ 不是初等函数，没法直接算出来；但它的导数就是被积函数——"求导能把积分号去掉"，这是变限积分极限题用洛必达的根本原因。动手前先把分母中的乘积因子 $\ln\left(1+\frac1x\right)$ 等价替换掉，分母变成 $x$，求导后就是 $1$，非常干净。</p>
<p><b>最后为什么用倒代换：</b>$x\to+\infty$ 时 $\frac1x\to0$，令 $s=\frac1x$，把问题转到 $s\to0$，就能用熟悉的 $\mathrm{e}^s$ 的泰勒展开。</p>`,
      solution: R`<p><b>第一步：化简分母。</b>$x\to+\infty$ 时 $\frac1x\to0$，$\ln\left(1+\frac1x\right)\sim\frac1x$，它是分母中的乘积因子，可以等价代换：$x^2\ln\left(1+\frac1x\right)\sim x^2\cdot\frac1x=x$。于是</p>
$$\text{原式}=\lim_{x\to+\infty}\frac{\int_1^x\left[t^2\left(\mathrm{e}^{\frac1t}-1\right)-t\right]\mathrm{d}t}{x}.$$
<p><b>第二步：确认 $\frac{\infty}{\infty}$ 型，用洛必达法则。</b>记被积函数 $g(t)=t^2\left(\mathrm{e}^{\frac1t}-1\right)-t$。第三、四步会算出 $\lim\limits_{t\to+\infty}g(t)=\frac12$，所以当 $t$ 足够大时 $g(t)\gt\frac14$，分子积分趋于 $+\infty$；分母 $x\to+\infty$。由变限积分求导公式 $\left(\int_1^xg(t)\,\mathrm{d}t\right)'=g(x)$，得</p>
$$\text{原式}=\lim_{x\to+\infty}\frac{g(x)}{1}=\lim_{x\to+\infty}\left[x^2\left(\mathrm{e}^{\frac1x}-1\right)-x\right],$$
<p>只要右边极限存在，洛必达法则就保证两者相等。</p>
<p><b>第三步：倒代换。</b>令 $s=\frac1x$，$x\to+\infty$ 时 $s\to0^+$：</p>
$$x^2\left(\mathrm{e}^{\frac1x}-1\right)-x=\frac{\mathrm{e}^s-1}{s^2}-\frac1s=\frac{\mathrm{e}^s-1-s}{s^2}.$$
<p><b>第四步：泰勒展开。</b>$\mathrm{e}^s=1+s+\frac{s^2}{2}+o(s^2)$，所以 $\mathrm{e}^s-1-s=\frac{s^2}{2}+o(s^2)$，</p>
$$\lim_{s\to0^+}\frac{\mathrm{e}^s-1-s}{s^2}=\lim_{s\to0^+}\frac{\frac{s^2}{2}+o(s^2)}{s^2}=\frac12.$$
<p>所以原极限 $=\dfrac12$。</p>`,
      pitfalls: R`<ul><li><b>在加减中做等价替换：</b>把 $\mathrm{e}^{\frac1x}-1$ 直接换成 $\frac1x$，得 $x^2\cdot\frac1x-x=0$，错误。$x^2\left(\mathrm{e}^{\frac1x}-1\right)$ 后面还要减 $x$，首项被抵消了，必须展开到下一项 $\frac{1}{2x^2}$。</li><li><b>不先化简分母就洛必达：</b>直接对 $x^2\ln\left(1+\frac1x\right)$ 求导得 $2x\ln\left(1+\frac1x\right)-\frac{x}{x+1}$，虽然也趋于 $1$，但计算繁琐、容易出错。先等价化简再洛必达。</li><li><b>不判类型就洛必达：</b>使用洛必达前要确认是 $\frac{\infty}{\infty}$ 或 $\frac00$ 型；本题分子趋于 $+\infty$ 的理由是被积函数趋于 $\frac12\gt0$，答题时应写出来。</li></ul>`,
      summary: R`<p><b>方法要点：</b>含变限积分的极限，几乎都要用洛必达法则把积分号"求导去掉"；动手前先用等价无穷小化简乘积因子。$x\to\infty$ 的极限常用倒代换 $s=\frac1x$ 转化为 $s\to0$，以便用泰勒公式。</p>
<p><b>看到…想到…：</b></p><ul><li>看到 $\lim\dfrac{\int_a^x(\cdots)\,\mathrm{d}t}{(\cdots)}$ → 洛必达 + 变限积分求导。</li><li>看到 $x^2\ln\left(1+\frac1x\right)$、$x\sin\frac1x$ 这类"无穷大 × 无穷小" → 先等价代换化为简单幂。</li><li>看到 $x^2\left(\mathrm{e}^{1/x}-1\right)-x$ 这类"首项抵消"的差 → 倒代换后泰勒展开到第二项。</li><li>熟记"去掉首项后的余项"：$\mathrm{e}^s-1-s\sim\frac{s^2}{2}$，$s-\ln(1+s)\sim\frac{s^2}{2}$，$s-\sin s\sim\frac{s^3}{6}$，$\tan s-s\sim\frac{s^3}{3}$。</li></ul>`,
      alt: R`<p><b>从增长速度理解结果：</b>$t\to+\infty$ 时</p>$$g(t)=t^2\left(\frac1t+\frac{1}{2t^2}+\frac{1}{6t^3}+o\left(\frac1{t^3}\right)\right)-t=\frac12+\frac{1}{6t}+o\left(\frac1t\right).$$<p>被积函数趋于常数 $\frac12$，所以积分大约是"$\frac12\times$区间长度"，即 $\int_1^xg(t)\,\mathrm{d}t\approx\frac12x$，而分母 $\approx x$，比值趋于 $\frac12$。这正是洛必达法则背后的直观：极限等于分子分母"增长速度"之比。</p><p>第四步也可以再用一次洛必达：$\lim\limits_{s\to0}\dfrac{\mathrm{e}^s-1-s}{s^2}=\lim\limits_{s\to0}\dfrac{\mathrm{e}^s-1}{2s}=\dfrac12$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 被积函数在 t→∞ 的展开 1/2+1/(6t)+…；洛必达后 limit=1/2；mpmath 数值积分 x=1e5 时比值 0.500017' },
      flags: []
    },

    /* ───────────────────────── 第 16 题 ───────────────────────── */
    {
      id: '2014-16', year: 2014, no: '第16题', type: '解答', score: 10,
      stem: R`设函数 $y=f(x)$ 由方程 $y^3+xy^2+x^2y+6=0$ 确定，求 $f(x)$ 的极值.`,
      options: null,
      answer: R`$f(x)$ 在 $x=1$ 处取得极小值 $f(1)=-2$，没有极大值.`,
      figure: null,
      kp: ['diff.mono', 'diff.calc'],
      methods: ['隐函数求导', '驻点联立原方程', '极值第二充分条件'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>隐函数求导与一元函数极值的判定（第二充分条件）。</p>
<p><b>思路主线：</b>求极值 = 找驻点 + 判类型。$y=f(x)$ 没法从三次方程中显式解出来，但也不需要解：对方程两边关于 $x$ 求导（把 $y$ 看作 $x$ 的函数），就能得到 $y'$ 满足的关系；令 $y'=0$ 找驻点，再与原方程联立求出具体的点。判断极大还是极小，看二阶导数的符号——同样对求导后的等式再求一次导，不必先解出 $y'$ 的分式。</p>
<p><b>一个值得想清楚的问题：</b>方程真的确定了一个处处可导的函数吗？对 $y$ 求偏导：$F_y=3y^2+2xy+x^2=2y^2+(x+y)^2\geqslant0$，等号只在 $x=y=0$ 时成立，而 $(0,0)$ 不满足原方程。所以对每个固定的 $x$，方程左边关于 $y$ 严格递增，且 $y\to\pm\infty$ 时趋于 $\pm\infty$，恰有一个 $y$ 满足方程；再由隐函数存在定理，$f$ 处处可导。因此 $f$ 的极值点只能是驻点。</p>`,
      solution: R`<p><b>第一步：隐函数求导。</b>方程 $y^3+xy^2+x^2y+6=0$ 中 $y=f(x)$，两边对 $x$ 求导：$y^3$ 的导数为 $3y^2y'$；$xy^2$ 用乘积法则得 $y^2+2xyy'$；$x^2y$ 得 $2xy+x^2y'$。于是</p>
$$3y^2y'+y^2+2xyy'+2xy+x^2y'=0,$$
$$\text{即}\quad(3y^2+2xy+x^2)\,y'+y^2+2xy=0.\qquad(*)$$
<p>由于 $3y^2+2xy+x^2=2y^2+(x+y)^2\gt0$（曲线不过原点），可写成 $y'=-\dfrac{y(y+2x)}{3y^2+2xy+x^2}$。</p>
<p><b>第二步：求驻点。</b>$y'=0\iff y(y+2x)=0$。</p>
<ul><li>若 $y=0$，代入原方程得 $6=0$，矛盾，舍去。</li>
<li>若 $y=-2x$，代入原方程：$(-2x)^3+x(-2x)^2+x^2(-2x)+6=-8x^3+4x^3-2x^3+6=-6x^3+6=0$，得 $x=1$，$y=-2$。</li></ul>
<p>所以唯一驻点是 $x=1$，且 $f(1)=-2$。</p>
<p><b>第三步：求二阶导数。</b>对 $(*)$ 两边再对 $x$ 求导。第一项 $(3y^2+2xy+x^2)y'$ 用乘积法则，其中 $(3y^2+2xy+x^2)'=6yy'+2y+2xy'+2x$；第二部分 $(y^2+2xy)'=2yy'+2y+2xy'$。所以</p>
$$(6yy'+2y+2xy'+2x)\,y'+(3y^2+2xy+x^2)\,y''+2yy'+2y+2xy'=0.$$
<p><b>第四步：代入驻点。</b>在 $x=1,\ y=-2,\ y'=0$ 处，所有含 $y'$ 的项都为 $0$，剩下</p>
$$\big(3\cdot4+2\cdot1\cdot(-2)+1\big)\,y''+2\cdot(-2)=0\ \Longrightarrow\ 9y''-4=0\ \Longrightarrow\ y''(1)=\frac49\gt0.$$
<p><b>第五步：下结论。</b>由极值的第二充分条件（$f'(x_0)=0$，$f''(x_0)\gt0$ ⇒ 极小值），$x=1$ 是 $f(x)$ 的极小值点，极小值为 $f(1)=-2$。又因为 $f$ 处处可导，极值点必是驻点，而驻点只有这一个，所以 $f(x)$ <b>没有极大值</b>。</p>`,
      pitfalls: R`<ul><li><b>求导时忘记 $y$ 是 $x$ 的函数：</b>$(y^3)'=3y^2y'$，$(xy^2)'=y^2+2xyy'$，链式法则里的 $y'$ 最容易丢。</li><li><b>只令 $y'=0$ 不联立原方程：</b>$y=-2x$ 只是一条直线，驻点还必须在曲线上，所以要代回原方程解出 $x=1$。</li><li><b>漏写 $y=0$ 的讨论：</b>虽然它被排除，但必须写出排除理由（代入得 $6=0$ 矛盾）。</li><li><b>二阶导数硬套商的求导法则：</b>对 $y'=-\frac{y(y+2x)}{3y^2+2xy+x^2}$ 用商的法则很繁；对"乘开的等式" $(*)$ 再求导，代入 $y'=0$ 后大量项直接消失。</li><li><b>漏掉 $2y$ 这一项：</b>它来自 $(2xy)'=2y+2xy'$。漏掉它会得到 $y''(1)=0$，无法判断。</li></ul>`,
      summary: R`<p><b>方法要点：</b>隐函数求极值三步：① 方程两边对 $x$ 求导，得到 $y'$ 满足的等式；② 令 $y'=0$，与原方程联立解出驻点 $(x_0,y_0)$；③ 对求导后的等式再求导，代入 $x_0,\ y_0$ 和 $y'=0$ 求 $y''(x_0)$，按符号判定极大或极小。</p>
<p><b>看到…想到…：</b></p><ul><li>看到"由方程确定的函数求极值" → 不要试图解出 $y$，直接隐函数求导。</li><li>看到"驻点处求二阶导数" → 对未解出 $y'$ 的等式求导，再用 $y'=0$ 消项，或直接用公式 $y''=-\dfrac{F_{xx}}{F_y}$（仅在驻点处成立）。</li><li>看到 $F_y=3y^2+2xy+x^2$ 这类二次型 → 配方判断定号，保证隐函数存在且可导。</li></ul>`,
      alt: R`<p><b>用偏导数公式（驻点处的捷径）：</b>记 $F(x,y)=y^3+xy^2+x^2y+6$，隐函数 $y'=-\dfrac{F_x}{F_y}$。再求导：</p>$$y''=-\frac{(F_{xx}+F_{xy}y')F_y-F_x(F_{yx}+F_{yy}y')}{F_y^2}.$$<p>在驻点处 $F_x=0$、$y'=0$，化简为 $y''=-\dfrac{F_{xx}}{F_y}$。这里 $F_x=y^2+2xy$，$F_{xx}=2y$，$F_y=3y^2+2xy+x^2$。在 $(1,-2)$ 处 $F_{xx}=-4$，$F_y=9$，所以 $y''(1)=\dfrac49\gt0$，与上面结果一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: solve([F, F_x]) 唯一解 (1,-2)；用 y\'=-F_x/F_y 求 y\'\' 在 (1,-2) 处为 4/9；验证 F_y-[2y²+(x+y)²]=0' },
      flags: []
    },

    /* ───────────────────────── 第 17 题 ───────────────────────── */
    {
      id: '2014-17', year: 2014, no: '第17题', type: '解答', score: 10,
      stem: R`设函数 $f(u)$ 具有二阶连续导数，$z=f(\mathrm{e}^x\cos y)$ 满足 $$\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=(4z+\mathrm{e}^x\cos y)\mathrm{e}^{2x}.$$ 若 $f(0)=0$，$f'(0)=0$，求 $f(u)$ 的表达式.`,
      options: null,
      answer: R`$f(u)=\dfrac{1}{16}\left(\mathrm{e}^{2u}-\mathrm{e}^{-2u}\right)-\dfrac u4$`,
      figure: null,
      kp: ['mdiff.chain', 'ode.const'],
      methods: ['多元复合函数链式法则', '二阶常系数非齐次线性方程', '待定系数法'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>抽象复合函数的二阶偏导数 + 二阶常系数非齐次线性微分方程，是"多元微分 + 微分方程"的经典综合题。</p>
<p><b>为什么能把偏微分方程变成常微分方程：</b>$z=f(u)$ 只通过一个中间变量 $u=\mathrm{e}^x\cos y$ 依赖于 $x,y$。算出 $z_{xx}+z_{yy}$ 后，如果一切都能整理成 $u$ 的函数，那么题设等式就变成关于未知函数 $f(u)$ 的常微分方程。题目给出 $f(0)=0$、$f'(0)=0$ 两个初值，恰好对应二阶方程的两个任意常数——这是在"提示"我们最终会得到一个二阶常微分方程。</p>
<p><b>计算前的预判：</b>一般地，$z_{xx}+z_{yy}=f''(u)\,(u_x^2+u_y^2)+f'(u)\,(u_{xx}+u_{yy})$。而 $u=\mathrm{e}^x\cos y$ 满足 $u_{xx}+u_{yy}=0$（调和函数），$u_x^2+u_y^2=\mathrm{e}^{2x}$，所以 $f'$ 项会抵消，结果只剩 $\mathrm{e}^{2x}f''(u)$。下面一步一步算出来。</p>`,
      solution: R`<p><b>第一步：求一阶偏导数。</b>记 $u=\mathrm{e}^x\cos y$，则 $u_x=\mathrm{e}^x\cos y$，$u_y=-\mathrm{e}^x\sin y$。由链式法则：</p>
$$\frac{\partial z}{\partial x}=f'(u)\,\mathrm{e}^x\cos y,\qquad\frac{\partial z}{\partial y}=-f'(u)\,\mathrm{e}^x\sin y.$$
<p><b>第二步：求二阶偏导数。</b>注意 $f'(u)$ 仍是 $x,y$ 的复合函数，对它求偏导要再乘 $u_x$ 或 $u_y$。对 $x$（乘积法则）：</p>
$$\frac{\partial^2z}{\partial x^2}=\underbrace{f''(u)\,\mathrm{e}^x\cos y}_{\text{对 }f'(u)\text{ 求导}}\cdot\mathrm{e}^x\cos y+f'(u)\cdot\mathrm{e}^x\cos y=f''(u)\,\mathrm{e}^{2x}\cos^2y+f'(u)\,\mathrm{e}^x\cos y.$$
<p>对 $y$：</p>
$$\frac{\partial^2z}{\partial y^2}=f''(u)\,(-\mathrm{e}^x\sin y)\cdot(-\mathrm{e}^x\sin y)+f'(u)\cdot(-\mathrm{e}^x\cos y)=f''(u)\,\mathrm{e}^{2x}\sin^2y-f'(u)\,\mathrm{e}^x\cos y.$$
<p><b>第三步：相加。</b>$f'$ 项抵消，$\cos^2y+\sin^2y=1$：</p>
$$\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=\mathrm{e}^{2x}f''(u).$$
<p><b>第四步：得到常微分方程。</b>题设右端 $(4z+\mathrm{e}^x\cos y)\mathrm{e}^{2x}=\big(4f(u)+u\big)\mathrm{e}^{2x}$。两边约去 $\mathrm{e}^{2x}\gt0$：</p>
$$f''(u)=4f(u)+u.$$
<p>这个等式对一切 $(x,y)$ 成立，而 $u=\mathrm{e}^x\cos y$ 能取遍全体实数（$y=0$ 时 $u=\mathrm{e}^x$ 取遍正数，$y=\pi$ 时取遍负数，$y=\frac\pi2$ 时 $u=0$），所以它对一切实数 $u$ 成立：</p>
$$f''(u)-4f(u)=u.$$
<p><b>第五步：解对应的齐次方程。</b>特征方程 $r^2-4=0$，$r=\pm2$，齐次通解为 $C_1\mathrm{e}^{2u}+C_2\mathrm{e}^{-2u}$。</p>
<p><b>第六步：求非齐次特解。</b>右端 $u=u\cdot\mathrm{e}^{0\cdot u}$，$0$ 不是特征根，设 $f^*=Au+B$，则 $(f^*)''=0$。代入：$0-4(Au+B)=u$，比较系数得 $A=-\frac14$，$B=0$，所以 $f^*=-\frac u4$。</p>
<p>通解：$f(u)=C_1\mathrm{e}^{2u}+C_2\mathrm{e}^{-2u}-\dfrac u4$。</p>
<p><b>第七步：用初值定常数。</b>$f'(u)=2C_1\mathrm{e}^{2u}-2C_2\mathrm{e}^{-2u}-\frac14$，</p>
$$f(0)=C_1+C_2=0,\qquad f'(0)=2C_1-2C_2-\frac14=0.$$
<p>由第一式 $C_2=-C_1$，代入第二式得 $4C_1=\frac14$，$C_1=\frac1{16}$，$C_2=-\frac1{16}$。所以</p>
$$f(u)=\frac{1}{16}\left(\mathrm{e}^{2u}-\mathrm{e}^{-2u}\right)-\frac u4.$$`,
      pitfalls: R`<ul><li><b>二阶偏导漏项：</b>$\frac{\partial}{\partial x}\big[f'(u)\,\mathrm{e}^x\cos y\big]$ 是乘积求导，两项都要；并且 $f'(u)$ 对 $x$ 求导得 $f''(u)\cdot u_x$，漏乘 $u_x$ 是最常见的错误。</li><li><b>把 $f'(u)$ 当常数：</b>$f'$ 里面藏着 $u=\mathrm{e}^x\cos y$，它是 $x,y$ 的函数，必须继续用链式法则。</li><li><b>特解设得不完整：</b>右端是一次多项式 $u$，特解要设成完整的一次多项式 $Au+B$；只设 $Au$ 在本题碰巧不出错，但不是好习惯。</li><li><b>定常数时漏掉特解的导数：</b>$f'(0)=2C_1-2C_2-\frac14$，别忘了 $-\frac14$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"$z=f(u(x,y))$ 满足某偏微分方程，求 $f$"型题：① 用链式法则求出所需偏导，一律用 $f'$、$f''$ 和 $u$ 的偏导表示；② 代入方程，把含 $x,y$ 的部分整理成 $u$ 的函数，得到关于 $f(u)$ 的常微分方程；③ 判型求解，用初值定常数。</p>
<p><b>看到…想到…：</b></p><ul><li>看到 $z=f(\mathrm{e}^x\cos y)$、$z=f(\mathrm{e}^x\sin y)$、$z=f(\sqrt{x^2+y^2})$ 配 $z_{xx}+z_{yy}$ → 必化为 $f$ 的常微分方程。</li><li>看到 $f''-k^2f=$ 多项式 → 特征根 $\pm k$；$0$ 不是特征根，特解设同次多项式。</li><li>看到初值 $f(0)=f'(0)=0$ → 两个方程解出 $C_1,C_2$；结果常可写成双曲函数：$\frac1{16}\left(\mathrm{e}^{2u}-\mathrm{e}^{-2u}\right)=\frac18\sinh2u$。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: dsolve(f\'\'-4f=u, f(0)=0, f\'(0)=0) 得 -u/4+e^(2u)/16-e^(-2u)/16；并将 z=f(e^x cos y) 代回原偏微分方程，化简差为 0' },
      flags: []
    },

    /* ───────────────────────── 第 18 题 ───────────────────────── */
    {
      id: '2014-18', year: 2014, no: '第18题', type: '解答', score: 10,
      stem: R`设 $\Sigma$ 为曲面 $z=x^2+y^2\ (z\leqslant1)$ 的上侧，计算曲面积分 $$I=\iint_\Sigma(x-1)^3\,\mathrm{d}y\,\mathrm{d}z+(y-1)^3\,\mathrm{d}z\,\mathrm{d}x+(z-1)\,\mathrm{d}x\,\mathrm{d}y.$$`,
      options: null,
      answer: R`$I=-4\pi$`,
      figure: null,
      kp: ['mint.surf2', 'mint.triple'],
      methods: ['补面法', '高斯公式', '对称性', '先二后一截面法', '合一投影法'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>第二类曲面积分的计算，标准套路是"补面 + 高斯公式"。</p>
<p><b>为什么想到高斯公式：</b>积分里 $\mathrm{d}y\,\mathrm{d}z$、$\mathrm{d}z\,\mathrm{d}x$、$\mathrm{d}x\,\mathrm{d}y$ 三项都有，直接算要分别向三个坐标面投影，抛物面向 $yOz$、$zOx$ 面投影时还要分前后、左右两片，非常繁琐。而 $P=(x-1)^3$、$Q=(y-1)^3$、$R=z-1$ 各自只依赖一个变量，散度 $3(x-1)^2+3(y-1)^2+1$ 是简单的多项式，三重积分好算。</p>
<p><b>为什么要补面：</b>高斯公式只对<b>封闭</b>曲面成立。抛物面 $z=x^2+y^2\ (z\leqslant1)$ 是一只"碗"，碗口 $z=1$ 敞开着。用圆盘 $\Sigma_0:\ z=1,\ x^2+y^2\leqslant1$ 把碗口盖上，就围成了封闭区域 $\Omega$。补上的面是平面，并且在上面 $R=z-1=0$，积分轻松为 $0$——这是出题人特意设计的。</p>
<p><b>定侧是本题的关键：</b>$\Sigma$ 取上侧，法向量的 $z$ 分量为正，指向碗的里面，也就是指向 $\Omega$ 的内部（对 $\Omega$ 而言是内侧）。所以补面 $\Sigma_0$ 也要取指向 $\Omega$ 内部的一侧，即<b>下侧</b>，这样 $\Sigma+\Sigma_0$ 整体是封闭曲面的内侧，用高斯公式时要带负号。</p>`,
      solution: R`<p><b>第一步：补面构成封闭曲面。</b>令 $\Sigma_0:\ z=1\ (x^2+y^2\leqslant1)$，取下侧。$\Sigma$ 与 $\Sigma_0$ 围成区域</p>
$$\Omega=\{(x,y,z)\mid x^2+y^2\leqslant z\leqslant1\}.$$
<p>$\Sigma$ 的上侧与 $\Sigma_0$ 的下侧都指向 $\Omega$ 内部，所以 $\Sigma+\Sigma_0$ 是 $\Omega$ 边界曲面的<b>内侧</b>。</p>
<p><b>第二步：用高斯公式。</b>$P=(x-1)^3$，$Q=(y-1)^3$，$R=z-1$，</p>
$$\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=3(x-1)^2+3(y-1)^2+1.$$
<p>高斯公式对外侧成立，内侧要加负号：</p>
$$\iint_{\Sigma+\Sigma_0}P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y=-\iiint_\Omega\big[3(x-1)^2+3(y-1)^2+1\big]\,\mathrm{d}v.$$
<p><b>第三步：用对称性化简被积函数。</b>展开：$3(x-1)^2+3(y-1)^2+1=3(x^2+y^2)-6x-6y+7$。$\Omega$ 关于 $yOz$ 面对称（把 $x$ 换成 $-x$ 区域不变），而 $x$ 关于 $x$ 是奇函数，故 $\iiint_\Omega x\,\mathrm{d}v=0$；同理 $\iiint_\Omega y\,\mathrm{d}v=0$。于是</p>
$$\iiint_\Omega\big[3(x-1)^2+3(y-1)^2+1\big]\,\mathrm{d}v=\iiint_\Omega\big[3(x^2+y^2)+7\big]\,\mathrm{d}v.$$
<p><b>第四步：先二后一（截面法）计算三重积分。</b>对固定的 $z\in[0,1]$，截面是圆盘 $x^2+y^2\leqslant z$（半径 $\sqrt z$），用极坐标：</p>
$$\iint_{x^2+y^2\leqslant z}\big[3(x^2+y^2)+7\big]\,\mathrm{d}x\,\mathrm{d}y=\int_0^{2\pi}\mathrm{d}\theta\int_0^{\sqrt z}(3r^2+7)\,r\,\mathrm{d}r=2\pi\left[\frac{3r^4}{4}+\frac{7r^2}{2}\right]_0^{\sqrt z}=2\pi\left(\frac34z^2+\frac72z\right).$$
<p>再对 $z$ 积分：</p>
$$\iiint_\Omega\big[3(x^2+y^2)+7\big]\,\mathrm{d}v=2\pi\int_0^1\left(\frac34z^2+\frac72z\right)\mathrm{d}z=2\pi\left(\frac14+\frac74\right)=4\pi.$$
<p>所以 $\displaystyle\iint_{\Sigma+\Sigma_0}=-4\pi$。</p>
<p><b>第五步：计算补面上的积分。</b>$\Sigma_0$ 是水平面 $z=1$，它在 $yOz$ 面和 $zOx$ 面上的投影都是线段（面积为 $0$），所以 $\mathrm{d}y\,\mathrm{d}z$、$\mathrm{d}z\,\mathrm{d}x$ 两项积分为 $0$；而在 $\Sigma_0$ 上 $R=z-1=0$。故 $\displaystyle\iint_{\Sigma_0}=0$。</p>
<p><b>第六步：作差得结果。</b></p>
$$I=\iint_{\Sigma+\Sigma_0}-\iint_{\Sigma_0}=-4\pi-0=-4\pi.$$`,
      pitfalls: R`<ul><li><b>侧的判断出错：</b>上侧抛物面的法向指向 $\Omega$ 内部。很多人凭"上侧就是外侧"的错觉，用高斯公式时不加负号，得到 $4\pi$。判断方法：看法向量指向围成区域的里面还是外面。</li><li><b>补面的侧取错：</b>补面必须与原曲面一起构成"同为外侧"或"同为内侧"，本题原曲面对 $\Omega$ 是内侧，补面取下侧。</li><li><b>散度漏项：</b>$\frac{\partial}{\partial z}(z-1)=1$，这个常数 $1$ 别丢。</li><li><b>对称性用错：</b>能扔掉的是 $-6x$、$-6y$ 这种奇函数项；$3(x-1)^2$ 本身不是奇函数，必须先展开再用对称性。</li><li><b>截面半径写错：</b>$x^2+y^2\leqslant z$ 的半径是 $\sqrt z$，不是 $z$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>第二类曲面积分首选"补面 + 高斯公式"：① 补一个简单平面使曲面封闭；② 判断整体是外侧（取 $+$）还是内侧（取 $-$）；③ 散度的三重积分用对称性化简，再用截面法或柱坐标计算；④ 减去补面上的积分（补面常选在被积函数为 $0$ 或容易计算的位置）。</p>
<p><b>看到…想到…：</b></p><ul><li>看到 $\iint P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y$ 且曲面不封闭 → 补面 + 高斯。</li><li>看到旋转抛物面 $z=x^2+y^2$ 与平面 $z=c$ 围成的区域 → 三重积分用"先二后一"，截面是半径 $\sqrt z$ 的圆。</li><li>看到"上侧"的碗形曲面 → 法向朝碗内，对所围区域是内侧，高斯公式带负号。</li><li>看到 $(x-a)^n$ 型被积函数 → 展开后在对称区域上奇次项为 $0$。</li></ul>`,
      alt: R`<p><b>合一投影法（直接计算，作为验算）：</b>对上侧曲面 $z=x^2+y^2$，有 $\mathrm{d}y\,\mathrm{d}z=-z_x\,\mathrm{d}x\,\mathrm{d}y=-2x\,\mathrm{d}x\,\mathrm{d}y$，$\mathrm{d}z\,\mathrm{d}x=-z_y\,\mathrm{d}x\,\mathrm{d}y=-2y\,\mathrm{d}x\,\mathrm{d}y$。记 $D:\ x^2+y^2\leqslant1$，</p>
$$I=\iint_D\big[-2x(x-1)^3-2y(y-1)^3+(x^2+y^2-1)\big]\,\mathrm{d}x\,\mathrm{d}y.$$
<p>展开 $-2x(x-1)^3=-2x^4+6x^3-6x^2+2x$，奇次项 $6x^3$、$2x$ 在 $D$ 上积分为 $0$；$y$ 同理。剩下</p>
$$I=\iint_D\big(-2x^4-2y^4-5x^2-5y^2-1\big)\,\mathrm{d}x\,\mathrm{d}y.$$
<p>用极坐标：$\iint_Dx^4\,\mathrm{d}\sigma=\int_0^{2\pi}\cos^4\theta\,\mathrm{d}\theta\int_0^1r^5\,\mathrm{d}r=\frac{3\pi}{4}\cdot\frac16=\frac{\pi}{8}$，同理 $\iint_Dy^4\,\mathrm{d}\sigma=\frac\pi8$；$\iint_D(x^2+y^2)\,\mathrm{d}\sigma=2\pi\cdot\frac14=\frac\pi2$；$\iint_D1\,\mathrm{d}\sigma=\pi$。所以</p>
$$I=-\frac\pi4-\frac\pi4-\frac{5\pi}{2}-\pi=-4\pi,$$
<p>与高斯公式的结果一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 合一投影法直接参数化积分得 -4π；散度在 Ω 上的三重积分（柱坐标）得 4π，内侧取负号一致' },
      flags: []
    },

    /* ───────────────────────── 第 19 题 ───────────────────────── */
    {
      id: '2014-19', year: 2014, no: '第19题', type: '解答', score: 10,
      stem: R`设数列 $\{a_n\},\{b_n\}$ 满足 $0\lt a_n\lt\dfrac{\pi}{2}$，$0\lt b_n\lt\dfrac{\pi}{2}$，$\cos a_n-a_n=\cos b_n$，且级数 $\sum\limits_{n=1}^{\infty}b_n$ 收敛.<br>(Ⅰ) 证明 $\lim\limits_{n\to\infty}a_n=0$；<br>(Ⅱ) 证明级数 $\sum\limits_{n=1}^{\infty}\dfrac{a_n}{b_n}$ 收敛.`,
      options: null,
      answer: R`证明题。(Ⅰ) 由 $\cos a_n-\cos b_n=a_n\gt0$ 及余弦在 $\left(0,\frac\pi2\right)$ 上递减得 $0\lt a_n\lt b_n$，又 $b_n\to0$，夹逼得 $a_n\to0$；(Ⅱ) $a_n\lt1-\cos b_n\lt\dfrac{b_n^2}{2}$，故 $0\lt\dfrac{a_n}{b_n}\lt\dfrac{b_n}{2}$，由比较判别法收敛. 详见解答.`,
      figure: null,
      kp: ['series.positive', 'lim.seqcalc'],
      methods: ['余弦单调性比较大小', '夹逼准则', '三角不等式放缩', '比较判别法'],
      difficulty: 4,
      analysis: R`<p><b>这题考什么：</b>数列极限（夹逼准则）与正项级数的比较判别法。关键是从等式 $\cos a_n-a_n=\cos b_n$ 中"挤"出 $a_n$ 与 $b_n$ 的大小关系和数量级关系。</p>
<p><b>第（Ⅰ）问怎么想：</b>已知 $\sum b_n$ 收敛 ⇒ $b_n\to0$（级数收敛的必要条件）。要证 $a_n\to0$，最自然的是夹逼：只要证 $0\lt a_n\lt b_n$。而条件可改写为 $\cos a_n-\cos b_n=a_n\gt0$，即 $\cos a_n\gt\cos b_n$；余弦在 $\left(0,\frac\pi2\right)$ 上严格递减，大小关系反过来就是 $a_n\lt b_n$。</p>
<p><b>第（Ⅱ）问怎么想：</b>正项级数 $\sum\frac{a_n}{b_n}$ 的敛散性，自然要与已知收敛的 $\sum b_n$ 比较，也就是希望证明 $\frac{a_n}{b_n}\leqslant Cb_n$，即 $a_n\leqslant Cb_n^2$。这提示：$a_n$ 应该是 $b_n$ 的<b>二阶</b>小量。从等式看，$a_n=\cos a_n-\cos b_n\lt1-\cos b_n$，而 $1-\cos b_n\approx\frac{b_n^2}{2}$，二阶小量果然出现了。剩下的工作只是把"$\approx$"变成严格的不等式。</p>
<p><b>直观图像：</b>$b_n$ 很小时，$\cos b_n\approx1-\frac{b_n^2}{2}$。等式 $\cos a_n-a_n=\cos b_n$ 说明：$a_n$ 只需要"补上"余弦从 $1$ 往下掉的那一点点（约 $\frac{b_n^2}{2}$），所以 $a_n$ 比 $b_n$ 小一个数量级，$\frac{a_n}{b_n}$ 和 $b_n$ 同阶，自然收敛。</p>`,
      solution: R`<p><b>（Ⅰ）第一步：比较 $a_n$ 与 $b_n$。</b>由 $\cos a_n-a_n=\cos b_n$ 得</p>
$$\cos a_n-\cos b_n=a_n\gt0,\quad\text{即}\quad\cos a_n\gt\cos b_n.$$
<p>$\cos x$ 在 $\left(0,\frac\pi2\right)$ 内严格单调递减，$a_n,b_n$ 都在这个区间里，所以 $a_n\lt b_n$。于是</p>
$$0\lt a_n\lt b_n.$$
<p><b>（Ⅰ）第二步：夹逼。</b>级数 $\sum b_n$ 收敛，由级数收敛的必要条件，$\lim\limits_{n\to\infty}b_n=0$。由 $0\lt a_n\lt b_n$ 和夹逼准则，$\lim\limits_{n\to\infty}a_n=0$。</p>
<p><b>（Ⅱ）第一步：建立关键不等式 $a_n\lt\dfrac{b_n^2}{2}$。</b>因为 $0\lt a_n\lt\frac\pi2$，有 $\cos a_n\lt1$，所以</p>
$$a_n=\cos a_n-\cos b_n\lt1-\cos b_n.$$
<p>再由半角公式与不等式 $0\lt\sin t\lt t\ (t\gt0)$：</p>
$$1-\cos b_n=2\sin^2\frac{b_n}{2}\lt2\left(\frac{b_n}{2}\right)^2=\frac{b_n^2}{2}.$$
<p>合起来得 $0\lt a_n\lt\dfrac{b_n^2}{2}$。</p>
<p><b>（Ⅱ）第二步：比较判别。</b>两边除以 $b_n\gt0$：</p>
$$0\lt\frac{a_n}{b_n}\lt\frac{b_n}{2}.$$
<p>$\sum b_n$ 收敛，所以 $\sum\frac{b_n}{2}$ 收敛（收敛级数乘常数仍收敛）。$\sum\frac{a_n}{b_n}$ 是正项级数，且每一项都小于收敛级数 $\sum\frac{b_n}{2}$ 的对应项，由比较判别法，$\sum\limits_{n=1}^{\infty}\dfrac{a_n}{b_n}$ 收敛。证毕。</p>`,
      pitfalls: R`<ul><li><b>以为 $\frac{a_n}{b_n}\to0$ 就能推出收敛：</b>通项趋于 $0$ 只是级数收敛的必要条件，不是充分条件（$\sum\frac1n$ 就是反例）。必须把 $\frac{a_n}{b_n}$ 与一个收敛级数作比较。</li><li><b>以为"$\sum a_n,\ \sum b_n$ 都收敛 ⇒ $\sum\frac{a_n}{b_n}$ 收敛"：</b>级数没有这样的"除法法则"。例如一般情况下取 $a_n=b_n=\frac1{n^2}$，$\sum\frac{a_n}{b_n}=\sum1$ 发散。本题能收敛，靠的是 $a_n$ 比 $b_n$ 高一阶。</li><li><b>（Ⅰ）跳步：</b>"$\sum b_n$ 收敛 ⇒ $\sum a_n$ 收敛 ⇒ $a_n\to0$"这条路也对，但必须先证出 $0\lt a_n\lt b_n$ 才能用比较判别法，不能跳过。</li><li><b>滥用等价无穷小：</b>写"$\frac{a_n}{b_n}\sim\frac{b_n}{2}$"需要先知道 $a_n\to0$，才能说 $1-\cos a_n$ 是比 $a_n$ 高阶的无穷小（见另解）。用不等式放缩可以绕开这一点，论证更干净。</li></ul>`,
      summary: R`<p><b>方法要点：</b>正项级数敛散性的核心工具是比较判别法（含极限形式）。关键在于找出通项的"阶"：用 $1-\cos x\leqslant\frac{x^2}{2}$、$\sin x\leqslant x$、$\ln(1+x)\leqslant x$ 等不等式放缩，或用等价无穷小求 $\lim\frac{u_n}{v_n}$。</p>
<p><b>看到…想到…：</b></p><ul><li>看到"$\sum b_n$ 收敛" → 立刻写下 $b_n\to0$；要证别的数列趋于 $0$，想夹逼。</li><li>看到 $\cos a-\cos b$ 定号 → 用余弦的单调性比较 $a,b$ 的大小。</li><li>看到 $1-\cos x$ → 半角公式 $2\sin^2\frac x2$，再用 $\sin t\lt t$ 得 $1-\cos x\lt\frac{x^2}{2}$（$x\ne0$）。</li><li>看到 $\sum\frac{a_n}{b_n}$ 与已知收敛的 $\sum b_n$ → 目标是证 $a_n\leqslant Cb_n^2$。</li></ul>`,
      alt: R`<p><b>另解（比较判别法的极限形式）：</b>由（Ⅰ），$a_n\to0$，$b_n\to0$。条件可写为 $a_n+(1-\cos a_n)=1-\cos b_n$。于是</p>
$$\lim_{n\to\infty}\frac{a_n/b_n}{b_n}=\lim_{n\to\infty}\frac{a_n}{b_n^2}=\lim_{n\to\infty}\frac{a_n}{a_n+1-\cos a_n}\cdot\frac{1-\cos b_n}{b_n^2}.$$
<p>第一个因子 $\dfrac{a_n}{a_n+1-\cos a_n}=\dfrac{1}{1+\frac{1-\cos a_n}{a_n}}$，而 $\dfrac{1-\cos a_n}{a_n}\sim\dfrac{a_n}{2}\to0$，所以它趋于 $1$；第二个因子趋于 $\frac12$。故极限为 $\frac12$。$\sum b_n$ 收敛，由比较判别法的极限形式，$\sum\frac{a_n}{b_n}$ 收敛。这里用到了 $a_n\to0$，可见第（Ⅰ）问正是为这种做法铺路的。</p>`,
      verify: { by: 'proof', ok: true, note: '严格证明；另用 mpmath 取 b_n=n^(-1.5) 数值求解 a_n，逐项验证 0<a_n<b_n 且 a_n≤b_n²/2，部分和平稳增长（n=2000 时约 1.161）' },
      flags: []
    }
  ];
});
