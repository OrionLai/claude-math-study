// 2018 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 13 题：选择 1、2、3、4；填空 9、10、11、12；解答 15、16、17、18、19
registerYear(2018, function (R) {
  return [
    /* ───────────────────────── 第 1 题 ───────────────────────── */
    {
      id: '2018-1', year: 2018, no: '第1题', type: '选择', score: 4,
      stem: R`下列函数中，在 $x=0$ 处不可导的是（　　）`,
      options: [R`$f(x)=|x|\sin|x|$`, R`$f(x)=|x|\sin\sqrt{|x|}$`, R`$f(x)=\cos|x|$`, R`$f(x)=\cos\sqrt{|x|}$`],
      answer: 'D',
      figure: null,
      kp: ['diff.def', 'lim.inf'],
      methods: ['导数定义', '左右导数', '等价无穷小估阶'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>导数的定义。$f$ 在 $x=0$ 处可导，指的是差商 $\dfrac{f(x)-f(0)}{x-0}$ 在 $x\to0$ 时极限存在——也就是左、右两侧的极限都存在并且相等。</p>
<p><b>为什么不能"套公式求导"：</b>四个函数里都有 $|x|$，而 $|x|$ 本身在 $x=0$ 处就不可导，复合函数求导法则要求内层函数可导，所以在 $x=0$ 这一点上公式用不了。这时只能回到最原始的判据——导数的定义。这就是"第一性原理"：一点处可不可导，唯一的标准是差商极限。</p>
<p><b>更快的视角——数阶：</b>差商的分母是 $x$（一阶无穷小）。</p>
<ul><li>若分子 $f(x)-f(0)$ 是比 $x$ 高阶的无穷小，差商 $\to0$，可导且导数为 $0$；</li><li>若分子 $\sim c|x|$（$c\ne0$），差商 $\to c\cdot\dfrac{|x|}{x}$，右侧是 $c$、左侧是 $-c$，不相等，不可导——图像上是一个"尖角"。</li></ul>
<p>所以只需用等价无穷小估计每个选项中 $f(x)-f(0)$ 的阶即可。</p>`,
      solution: R`<p><b>第一步：明确判别标准。</b>$f$ 在 $x=0$ 处可导 $\iff\displaystyle\lim_{x\to0}\frac{f(x)-f(0)}{x}$ 存在。下面逐个计算 $f(x)-f(0)$ 并估阶。</p>
<p><b>第二步：(A) $f(x)=|x|\sin|x|$。</b>$f(0)=0$。$x\to0$ 时 $\sin|x|\sim|x|$，所以 $f(x)-f(0)=|x|\sin|x|\sim|x|^2=x^2$，</p>
$$\lim_{x\to0}\frac{|x|\sin|x|}{x}=\lim_{x\to0}\frac{x^2}{x}=0,$$
<p>可导，$f'(0)=0$。其实对一切 $x$ 都有 $|x|\sin|x|=x\sin x$（$x$ 为负时 $|x|=-x$，$\sin|x|=-\sin x$，两个负号抵消），它本来就是处处可导的初等函数。</p>
<p><b>第三步：(B) $f(x)=|x|\sin\sqrt{|x|}$。</b>$f(0)=0$，</p>
$$\frac{f(x)-f(0)}{x}=\frac{|x|}{x}\cdot\sin\sqrt{|x|}.$$
<p>第一个因子 $\frac{|x|}{x}=\pm1$ 有界，第二个因子 $\sin\sqrt{|x|}\to0$。"有界量乘无穷小仍是无穷小"，所以差商的极限为 $0$，可导，$f'(0)=0$。用阶来看：$f(x)\sim|x|\cdot|x|^{1/2}=|x|^{3/2}$，比 $x$ 高阶。</p>
<p><b>第四步：(C) $f(x)=\cos|x|$。</b>余弦是偶函数，$\cos|x|=\cos x$ 对一切 $x$ 成立，处处可导，$f'(0)=-\sin0=0$。用定义也一样：$\cos|x|-1\sim-\frac12x^2$，比 $x$ 高阶，差商 $\to0$。</p>
<p><b>第五步：(D) $f(x)=\cos\sqrt{|x|}$。</b>$f(0)=\cos0=1$。由 $1-\cos u\sim\frac12u^2$，取 $u=\sqrt{|x|}\to0$：</p>
$$f(x)-f(0)=\cos\sqrt{|x|}-1\sim-\frac12\left(\sqrt{|x|}\right)^2=-\frac12|x|.$$
<p>它与 $|x|$ 同阶，系数 $-\frac12\ne0$，所以分左右计算：</p>
$$\lim_{x\to0^+}\frac{f(x)-f(0)}{x}=\lim_{x\to0^+}\frac{-\frac12x}{x}=-\frac12,\qquad\lim_{x\to0^-}\frac{f(x)-f(0)}{x}=\lim_{x\to0^-}\frac{-\frac12(-x)}{x}=\frac12.$$
<p>右导数 $-\frac12$，左导数 $\frac12$，不相等，所以 $f$ 在 $x=0$ 处不可导。在原点附近它的图像像 $y=1-\frac12|x|$，是一个朝上的尖角。</p>
<p><b>结论：</b>选 <b>D</b>。</p>`,
      pitfalls: R`<ul><li><b>"见绝对值就不可导"</b>：$|x|$ 在 $0$ 处不可导，但乘上或复合上别的函数后，尖角可能被"磨平"。(A)(B)(C) 都含 $|x|$ 却都可导，判断要靠差商极限，不能凭长相。</li><li><b>用求导公式硬算</b>：例如对 (B) 写出 $f'(x)$ 中含 $\frac{1}{2\sqrt{|x|}}$ 的项，再说"$x=0$ 时分母为零所以不可导"——这是错的，公式在 $x=0$ 处本来就不适用，(B) 实际上可导。一点处的可导性要用定义判断。</li><li><b>只算单侧</b>：(D) 只算右侧会得到 $-\frac12$，误以为可导。含 $|x|$ 的函数必须左右分开算。</li><li>$1-\cos u\sim\frac12u^2$ 中 $u=\sqrt{|x|}$，平方后得到的是 $|x|$ 而不是 $x$，左右导数的符号差异正出在这里。</li></ul>`,
      summary: R`<p><b>方法要点：</b>问"在某点是否可导"→ 回到导数定义，算差商的左右极限；配合等价无穷小估计 $f(x)-f(x_0)$ 的阶。</p>
<p><b>一个好用的结论（偶函数原理）：</b>$f(x)=g(|x|)$ 一定是偶函数。偶函数若在 $0$ 处可导，则 $f'(0)=-f'(0)$，必有 $f'(0)=0$。由此可得：$g(|x|)$ 在 $0$ 处可导 $\iff g'_+(0)=0$。检验四个选项：(A) $g(u)=u\sin u$，$g'(0)=0$；(B) $g(u)=u\sin\sqrt u$，$g'_+(0)=\lim\limits_{u\to0^+}\sin\sqrt u=0$；(C) $g(u)=\cos u$，$g'(0)=0$；(D) $g(u)=\cos\sqrt u$，$g'_+(0)=\lim\limits_{u\to0^+}\dfrac{\cos\sqrt u-1}{u}=-\dfrac12\ne0$。一眼锁定 D。</p>
<p><b>题型识别：</b></p><ul><li>看到"某点处是否可导"且函数含 $|x|$、分段、根号 → 用定义，分左右。</li><li>看到 $f(x)-f(0)$ 与 $|x|$ 同阶（系数非零）→ 尖角，不可导；比 $x$ 高阶 → 可导且导数为 $0$。</li><li>看到 $g(|x|)$ → "偶函数可导则导数为 0"，只需检验 $g'_+(0)$ 是否为 $0$。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 计算四个差商 (f(x)-f(0))/x 在 0 处的左右极限：A、B、C 均为 0 与 0；D 右极限 -1/2、左极限 1/2，故仅 D 不可导' },
      flags: []
    },

    /* ───────────────────────── 第 2 题 ───────────────────────── */
    {
      id: '2018-2', year: 2018, no: '第2题', type: '选择', score: 4,
      stem: R`过点 $(1,0,0)$，$(0,1,0)$，且与曲面 $z=x^2+y^2$ 相切的平面为（　　）`,
      options: [R`$z=0$ 与 $x+y-z=1$`, R`$z=0$ 与 $2x+2y-z=2$`, R`$x=y$ 与 $x+y-z=1$`, R`$x=y$ 与 $2x+2y-z=2$`],
      answer: 'B',
      figure: null,
      kp: ['mdiff.geo', 'vec.planeline'],
      methods: ['设切点法', '曲面切平面方程', '平面过点条件'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>曲面的切平面方程 + 平面过定点的条件，是"多元微分的几何应用"与"空间解析几何"的交汇。</p>
<p><b>思路从哪来：</b>切平面由切点唯一确定，而切点未知。于是<b>先设切点</b> $(x_0,y_0,z_0)$，把所有条件都翻译成关于切点的方程：①切点在曲面上；②写出该点处的切平面；③这张平面经过两个已知点。三个未知数、三个条件，正好可解。这是"过曲面外的点（或直线）作切平面/切线"类问题的通用套路。</p>
<p><b>先用选项排除：</b>点 $(1,0,0)$ 不满足 $x=y$，所以含 $x=y$ 的 C、D 直接排除。剩下只需判断 $x+y-z=1$ 与 $2x+2y-z=2$ 哪一个真正与曲面相切。</p>`,
      solution: R`<p><b>第一步：写出一般切点处的切平面。</b>把曲面写成 $F(x,y,z)=x^2+y^2-z=0$，法向量 $\mathbf{n}=(F_x,F_y,F_z)=(2x,2y,-1)$。在切点 $(x_0,y_0,z_0)$（满足 $z_0=x_0^2+y_0^2$）处的切平面为</p>
$$2x_0(x-x_0)+2y_0(y-y_0)-(z-z_0)=0.$$
<p>展开，并利用 $x_0^2+y_0^2=z_0$：右端常数 $2x_0^2+2y_0^2-z_0=2z_0-z_0=z_0$，所以切平面可写成</p>
$$2x_0x+2y_0y-z=z_0.$$
<p><b>第二步：代入两个已知点。</b>过 $(1,0,0)$：$2x_0=z_0$；过 $(0,1,0)$：$2y_0=z_0$。于是 $x_0=y_0$，$z_0=2x_0$。</p>
<p><b>第三步：结合"切点在曲面上"。</b>$z_0=x_0^2+y_0^2=2x_0^2$，又 $z_0=2x_0$，得 $2x_0^2=2x_0$，即 $x_0(x_0-1)=0$，$x_0=0$ 或 $x_0=1$。</p>
<ul><li>$x_0=0$：切点 $(0,0,0)$，切平面 $z=0$；</li><li>$x_0=1$：切点 $(1,1,2)$，切平面 $2x+2y-z=2$。</li></ul>
<p><b>第四步：对照选项。</b>所求平面为 $z=0$ 与 $2x+2y-z=2$，选 <b>B</b>。</p>
<p><b>错误选项为什么错：</b></p>
<ul><li>(C)(D) 中的 $x=y$：点 $(1,0,0)$ 的坐标 $1\ne0$，不满足 $x=y$，这张平面根本不过已知点。</li><li>(A) 中的 $x+y-z=1$：它确实过两个已知点，但不是切平面。把 $z=x+y-1$ 代入 $z=x^2+y^2$，得 $x^2-x+y^2-y+1=0$，配方为 $\left(x-\frac12\right)^2+\left(y-\frac12\right)^2=-\frac12$，无实数解——这张平面与抛物面<b>根本不相交</b>，当然谈不上相切。</li></ul>`,
      pitfalls: R`<ul><li><b>法向量符号</b>：$z=x^2+y^2$ 要先移项为 $x^2+y^2-z=0$ 再求梯度，$z$ 方向的分量是 $-1$；漏掉它切平面就写错了。</li><li><b>只验证"过点"而不验证"相切"</b>：$x+y-z=1$ 过两个已知点却不相切，这正是选项 A 设的陷阱。</li><li><b>约分丢根</b>：解 $2x_0^2=2x_0$ 时两边直接约去 $x_0$，会丢掉 $x_0=0$，从而漏掉切平面 $z=0$。方程两边有公因式时要移项提取，不要约分。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"过某些点作曲面的切平面" → 设切点 $(x_0,y_0,z_0)$，列三类方程：切点在曲面上；切平面方程（用切点表示）；切平面过已知点。</p>
<p><b>公式：</b>曲面 $F(x,y,z)=0$ 在 $P_0$ 处的法向量为 $\nabla F(P_0)=(F_x,F_y,F_z)\big|_{P_0}$；显式曲面 $z=f(x,y)$ 取 $F=f(x,y)-z$，法向量为 $(f_x,f_y,-1)$。</p>
<p><b>题型识别：</b></p><ul><li>看到"过点 + 与曲面相切" → 先设切点，切平面用切点表示后代入已知点。</li><li>看到选项是具体的平面 → 先用"是否过已知点"快速排除，再验证相切。</li><li>看到凸曲面（如 $z=x^2+y^2$）与非竖直平面 → "相切 ⇔ 恰有一个公共点"，可以联立后配方判断。</li></ul>`,
      alt: R`<p><b>另解（平面束 + "恰有一个公共点"）：</b>过 $(1,0,0)$、$(0,1,0)$ 的非竖直平面可写成 $z=ax+by+c$，代入两点得 $a+c=0$，$b+c=0$，即 $z=a(x+y-1)$。抛物面 $z=x^2+y^2$ 向上开口且是严格凸的，非竖直平面与它相切当且仅当二者恰有一个公共点。联立并配方：</p>
$$x^2+y^2-ax-ay+a=0\iff\left(x-\frac a2\right)^2+\left(y-\frac a2\right)^2=\frac{a^2}{2}-a.$$
<p>恰有一个解 $\iff\frac{a^2}{2}-a=0\iff a=0$ 或 $a=2$，对应 $z=0$ 与 $z=2x+2y-2$。过这两点的竖直平面只有 $x+y=1$，它与抛物面交于一条抛物线，不相切。结论与正解一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 解切平面过两点的条件 2x0=z0, 2y0=z0（z0=x0²+y0²），得 (x0,y0)=(0,0) 或 (1,1)，切平面为 z=0 与 2x+2y-z=2；并验证 x+y-z=1 与曲面联立无实解' },
      flags: []
    },

    /* ───────────────────────── 第 3 题 ───────────────────────── */
    {
      id: '2018-3', year: 2018, no: '第3题', type: '选择', score: 4,
      stem: R`$\displaystyle\sum_{n=0}^{\infty}(-1)^n\frac{2n+3}{(2n+1)!}=$（　　）`,
      options: [R`$\sin1+\cos1$`, R`$2\sin1+\cos1$`, R`$2\sin1+2\cos1$`, R`$2\sin1+3\cos1$`],
      answer: 'B',
      figure: null,
      kp: ['series.sum', 'series.expand'],
      methods: ['拆项与阶乘约分', '利用已知麦克劳林展开式'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>利用已知幂级数展开式求数项级数的和。</p>
<p><b>思路从哪来：</b>分母是 $(2n+1)!$、又带交错符号 $(-1)^n$，立刻联想到</p>
$$\sin x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!},\qquad\cos x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n}}{(2n)!}.$$
<p>麻烦在于分子多了个 $2n+3$。但阶乘 $(2n+1)!$ 的最后一个因子正是 $2n+1$，而 $2n+3=(2n+1)+2$——<b>拆分子、约阶乘</b>，就能把未知级数拆成 $\cos1$ 与 $\sin1$ 两个已知级数。</p>`,
      solution: R`<p><b>第一步：写出要用的两个展开式（取 $x=1$）。</b></p>
$$\sin1=\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)!},\qquad\cos1=\sum_{n=0}^\infty\frac{(-1)^n}{(2n)!}.$$
<p>它们来自 $\sin x$、$\cos x$ 的麦克劳林级数，对一切实数 $x$ 成立。</p>
<p><b>第二步：拆分子。</b>$2n+3=(2n+1)+2$，所以</p>
$$\frac{2n+3}{(2n+1)!}=\frac{2n+1}{(2n+1)!}+\frac{2}{(2n+1)!}=\frac{1}{(2n)!}+\frac{2}{(2n+1)!}.$$
<p>这里用到 $(2n+1)!=(2n+1)\cdot(2n)!$，分子的 $2n+1$ 与阶乘的最后一个因子约掉，剩下 $(2n)!$。</p>
<p><b>第三步：逐项相加。</b>级数 $\sum\frac{(-1)^n}{(2n)!}$ 与 $\sum\frac{(-1)^n}{(2n+1)!}$ 都收敛（甚至绝对收敛）。两个收敛级数可以逐项相加、数乘，所以</p>
$$\sum_{n=0}^\infty(-1)^n\frac{2n+3}{(2n+1)!}=\sum_{n=0}^\infty\frac{(-1)^n}{(2n)!}+2\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)!}=\cos1+2\sin1.$$
<p><b>结论：</b>选 <b>B</b>。</p>
<p><b>数值核对与排除：</b>$2\sin1+\cos1\approx2\times0.8415+0.5403\approx2.2232$。原级数前四项 $3-\frac56+\frac{7}{120}-\frac{9}{5040}\approx2.2232$，吻合。其余选项：A $\approx1.38$，C $\approx2.76$，D $\approx3.30$，都与部分和明显不符。</p>`,
      pitfalls: R`<ul><li><b>$\sin$、$\cos$ 的级数记混</b>：分母是奇数阶乘 $(2n+1)!$ 的对应 $\sin$，偶数阶乘 $(2n)!$ 的对应 $\cos$。记法：$\sin x$ 是奇函数，展开式只有奇次幂。</li><li><b>约分出错</b>：误写成 $\frac{2n+1}{(2n+1)!}=\frac{1}{(2n-1)!}$。$(2n+1)!$ 去掉最后一个因子 $(2n+1)$ 剩下的是 $(2n)!$。</li><li><b>拆开后未确认收敛</b>：逐项相加的前提是拆出来的两个级数各自收敛；本题都绝对收敛，可放心拆。</li></ul>`,
      summary: R`<p><b>方法要点：</b>数项级数求和 → 设法把它看成某个已知幂级数在某一点的值。常用手段：①拆分子，使之与分母阶乘约分；②构造幂级数，逐项求导或逐项积分。</p>
<p><b>必背展开（对一切 $x$）：</b>$\mathrm{e}^x=\sum\limits_{n=0}^\infty\frac{x^n}{n!}$，$\sin x=\sum\limits_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!}$，$\cos x=\sum\limits_{n=0}^\infty\frac{(-1)^nx^{2n}}{(2n)!}$。</p>
<p><b>题型识别：</b></p><ul><li>分母有 $n!$、$(2n)!$、$(2n+1)!$ → 想 $\mathrm{e}^x$、$\cos x$、$\sin x$。</li><li>分子是 $n$ 的多项式、分母是阶乘 → 把分子改写成"阶乘尾部因子"的组合（如 $n^2=n(n-1)+n$），逐项约分。</li><li>分子中 $n$ 的一次式恰好是某个幂次（如本题 $2n+3$ 是 $x^{2n+3}$ 求导落下的系数）→ 想"先构造、后求导"。</li></ul>`,
      alt: R`<p><b>另解（构造幂级数后求导）：</b>分子 $2n+3$ 恰好是 $x^{2n+3}$ 求导后落下来的系数，于是考虑</p>
$$S(x)=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+3}}{(2n+1)!}=x^2\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!}=x^2\sin x.$$
<p>幂级数在收敛区间内可逐项求导：$S'(x)=\displaystyle\sum_{n=0}^\infty\frac{(-1)^n(2n+3)x^{2n+2}}{(2n+1)!}$，令 $x=1$ 正是所求。而 $S'(x)=2x\sin x+x^2\cos x$，所以所求 $=S'(1)=2\sin1+\cos1$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: Sum((-1)**n*(2n+3)/factorial(2n+1),(n,0,oo)).doit() = cos(1)+2sin(1) ≈ 2.22324' },
      flags: []
    },

    /* ───────────────────────── 第 4 题 ───────────────────────── */
    {
      id: '2018-4', year: 2018, no: '第4题', type: '选择', score: 4,
      stem: R`设 $M=\displaystyle\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\frac{(1+x)^2}{1+x^2}\,\mathrm{d}x$，$N=\displaystyle\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\frac{1+x}{\mathrm{e}^x}\,\mathrm{d}x$，$K=\displaystyle\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\left(1+\sqrt{\cos x}\right)\mathrm{d}x$，则（　　）`,
      options: [R`$M>N>K$`, R`$M>K>N$`, R`$K>M>N$`, R`$K>N>M$`],
      answer: 'C',
      figure: null,
      kp: ['int.def', 'int.defcalc'],
      methods: ['对称区间奇函数积分为零', '定积分比较性质', '不等式 e^x ≥ 1+x'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>定积分大小的比较。三个积分的区间相同，比较有两条路：能直接算出来的就算出来；算不出来的就比较被积函数（定积分的比较性质）。</p>
<p><b>观察 $M$：</b>被积函数展开后是 $1+\frac{2x}{1+x^2}$，后一项是奇函数，在对称区间上积分为 $0$，所以 $M=\pi$——恰好等于"被积函数为 1"时的积分。这启发我们<b>以常数 1 为标尺</b>：</p>
<ul><li>$K$ 的被积函数 $1+\sqrt{\cos x}\ge1$；</li><li>$N$ 的被积函数 $\frac{1+x}{\mathrm{e}^x}$ 与 1 比较，就是比较 $1+x$ 与 $\mathrm{e}^x$——这正是最著名的不等式 $\mathrm{e}^x\ge1+x$：曲线 $y=\mathrm{e}^x$ 总在它在 $x=0$ 处的切线 $y=1+x$ 的上方。</li></ul>
<p>于是三者与 $\pi$ 的大小关系一目了然。</p>`,
      solution: R`<p><b>第一步：算出 $M$。</b>分子展开 $(1+x)^2=1+x^2+2x$，于是</p>
$$\frac{(1+x)^2}{1+x^2}=\frac{1+x^2}{1+x^2}+\frac{2x}{1+x^2}=1+\frac{2x}{1+x^2}.$$
<p>$\frac{2x}{1+x^2}$ 是奇函数，在关于原点对称的区间 $\left[-\frac\pi2,\frac\pi2\right]$ 上积分为 $0$，所以</p>
$$M=\int_{-\frac\pi2}^{\frac\pi2}1\,\mathrm{d}x+0=\pi.$$
<p><b>第二步：证明 $N$ 小于 $\pi$。</b>令 $\varphi(x)=\mathrm{e}^x-1-x$，$\varphi'(x)=\mathrm{e}^x-1$：在 $x=0$ 左侧为负、右侧为正，所以 $\varphi$ 在 $x=0$ 处取最小值 $\varphi(0)=0$。因此 $\mathrm{e}^x\ge1+x$，等号仅在 $x=0$ 成立。两边除以正数 $\mathrm{e}^x$：</p>
$$\frac{1+x}{\mathrm{e}^x}\le1,\quad\text{仅在 }x=0\text{ 处取等号}.$$
<p>两边都是连续函数，且不恒相等，由定积分的比较性质得严格不等式</p>
$$N=\int_{-\frac\pi2}^{\frac\pi2}\frac{1+x}{\mathrm{e}^x}\,\mathrm{d}x < \int_{-\frac\pi2}^{\frac\pi2}1\,\mathrm{d}x=\pi.$$
<p><b>第三步：证明 $K$ 大于 $\pi$。</b>在 $\left(-\frac\pi2,\frac\pi2\right)$ 内 $\cos x>0$，所以 $\sqrt{\cos x}>0$，</p>
$$K=\pi+\int_{-\frac\pi2}^{\frac\pi2}\sqrt{\cos x}\,\mathrm{d}x>\pi.$$
<p><b>第四步：结论。</b>$K>\pi=M>N$，即 $K>M>N$，选 <b>C</b>。</p>
<p><b>数值核对：</b>$M=\pi\approx3.14$。$N$ 其实也能精确算出：$(1+x)\mathrm{e}^{-x}$ 的一个原函数是 $-(x+2)\mathrm{e}^{-x}$（求导验证：$-\mathrm{e}^{-x}+(x+2)\mathrm{e}^{-x}=(x+1)\mathrm{e}^{-x}$），所以 $N=\left(2-\frac\pi2\right)\mathrm{e}^{\frac\pi2}-\left(2+\frac\pi2\right)\mathrm{e}^{-\frac\pi2}\approx1.32$；$K\approx\pi+2.40\approx5.54$。</p>`,
      pitfalls: R`<ul><li><b>没看出奇函数</b>：直接去求 $\frac{(1+x)^2}{1+x^2}$ 的原函数 $x+\ln(1+x^2)$ 也能做，但浪费时间。对称区间先拆奇偶。</li><li><b>比较对象选错</b>：只看到"$x>0$ 时 $1+x>1$"就以为 $N>\pi$——被积函数的分母 $\mathrm{e}^x$ 也在变。正确的比较是 $1+x$ 对 $\mathrm{e}^x$。</li><li><b>严格不等号的依据</b>：比较性质一般给出 $\le$；要得到 $&lt;$，需要被积函数连续且不恒相等。</li></ul>`,
      summary: R`<p><b>方法要点：</b>比较同一区间上的几个定积分 → 能用对称性等手段直接算出的先算；其余找一个公共"标尺"（本题是常数 1），分别与之比较。</p>
<p><b>常用工具：</b>①对称区间上奇函数积分为 0；②基本不等式 $\mathrm{e}^x\ge1+x$、$\ln(1+x)\le x$、$\sin x\le x\ (x\ge0)$；③比较性质：$f\le g$ 连续且不恒等 ⇒ $\int_a^bf\,\mathrm{d}x < \int_a^bg\,\mathrm{d}x$。</p>
<p><b>题型识别：</b></p><ul><li>看到对称区间 → 先拆奇偶部分。</li><li>看到 $\frac{1+x}{\mathrm{e}^x}$、$\frac{x}{\ln(1+x)}$ 之类 → 想到 $\mathrm{e}^x$ 与 $\ln(1+x)$ 的切线不等式。</li><li>看到三个积分比大小 → 先找一个能算出来的作标尺。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: M = π；N 精确值 ((4-π)e^π-4-π)e^(-π/2)/2 ≈ 1.3224；K 数值积分 ≈ 5.5379，故 K>M>N' },
      flags: []
    },

    /* ───────────────────────── 第 9 题 ───────────────────────── */
    {
      id: '2018-9', year: 2018, no: '第9题', type: '填空', score: 4,
      stem: R`若 $\displaystyle\lim_{x\to0}\left(\frac{1-\tan x}{1+\tan x}\right)^{\frac{1}{\sin kx}}=\mathrm{e}$，则 $k=$ ______．`,
      options: null,
      answer: R`$-2$`,
      figure: null,
      kp: ['lim.compute', 'lim.inf'],
      methods: ['1^∞ 型公式', '等价无穷小代换', '已知极限反求参数'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>$1^\infty$ 型未定式的计算，以及由极限值反求参数。</p>
<p><b>怎么认出 $1^\infty$：</b>$x\to0$ 时，底数 $\frac{1-\tan x}{1+\tan x}\to1$，指数 $\frac{1}{\sin kx}\to\infty$（$k\ne0$）。"底数趋于 1、指数趋于无穷"就是 $1^\infty$ 型，不能直接代入说"等于 1"。</p>
<p><b>为什么有固定公式：</b>$1^\infty$ 的本质是重要极限 $\lim\limits_{\alpha\to0}(1+\alpha)^{1/\alpha}=\mathrm{e}$。把底数写成 $u=1+(u-1)$，</p>
$$u^v=\left[\big(1+(u-1)\big)^{\frac{1}{u-1}}\right]^{(u-1)v}.$$
<p>方括号里趋于 $\mathrm{e}$，所以只要算出 $(u-1)v$ 的极限 $A$，原极限就是 $\mathrm{e}^A$。</p>`,
      solution: R`<p><b>第一步：套 $1^\infty$ 公式。</b>若 $u\to1$，$v\to\infty$，且 $\lim(u-1)v=A$，则 $\lim u^v=\mathrm{e}^A$。这里 $u=\frac{1-\tan x}{1+\tan x}$，$v=\frac{1}{\sin kx}$。</p>
<p><b>第二步：化简 $u-1$。</b>通分：</p>
$$u-1=\frac{1-\tan x}{1+\tan x}-1=\frac{(1-\tan x)-(1+\tan x)}{1+\tan x}=\frac{-2\tan x}{1+\tan x}.$$
<p><b>第三步：求 $A$。</b>$x\to0$ 时 $\tan x\sim x$，$\sin kx\sim kx$，$1+\tan x\to1$。它们都是乘除因子，可以等价代换：</p>
$$A=\lim_{x\to0}\frac{-2\tan x}{(1+\tan x)\sin kx}=\lim_{x\to0}\frac{-2x}{1\cdot kx}=-\frac2k.$$
<p><b>第四步：由条件确定 $k$。</b>原极限 $=\mathrm{e}^{-\frac2k}=\mathrm{e}$，所以 $-\frac2k=1$，解得 $k=-2$。</p>
<p><b>检验：</b>$k=-2$ 时 $A=\lim\limits_{x\to0}\frac{-2x}{-2x}=1$，极限为 $\mathrm{e}$ ✓。</p>`,
      pitfalls: R`<ul><li><b>丢负号</b>：$u-1$ 化简后是 $-2\tan x$；若写成 $2\tan x$ 会得到 $k=2$，而 $k=2$ 时极限其实是 $\mathrm{e}^{-1}$。</li><li><b>误判类型</b>：认为"底数趋于 1，所以极限是 1"。$1^\infty$ 是未定式，结果可以是任何正数。</li><li><b>取对数法也要用对等价</b>：$\ln u\sim u-1$（$u\to1$），与公式本质相同；不要把 $\ln\frac{1-\tan x}{1+\tan x}$ 误化成 $\ln(1-\tan x)$ 之类。</li></ul>`,
      summary: R`<p><b>方法要点：</b>$1^\infty$ 型：$\lim u^v=\mathrm{e}^{\lim(u-1)v}$。三步走：确认是 $1^\infty$ → 求 $(u-1)v$ 的极限 → 取指数。</p>
<p><b>题型识别：</b></p><ul><li>看到幂指函数 $u(x)^{v(x)}$ → 先代值判断类型，底 → 1、指 → ∞ 就用上述公式。</li><li>看到"已知极限值，求参数" → 先把极限用参数表示出来，再列方程，最后代回检验。</li><li>看到 $\frac{1-\tan x}{1+\tan x}$ 这类比值 → 减 1 后通分最干净。</li></ul>`,
      alt: R`<p><b>另解（取对数 + 泰勒）：</b>$\ln\frac{1-\tan x}{1+\tan x}=\ln(1-\tan x)-\ln(1+\tan x)=-2\tan x+o(x)=-2x+o(x)$，所以 $\lim\limits_{x\to0}\frac{\ln u}{\sin kx}=\lim\limits_{x\to0}\frac{-2x}{kx}=-\frac2k$，原极限 $=\mathrm{e}^{-2/k}$，同样得 $k=-2$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit(log((1-tan x)/(1+tan x))/sin(kx), x, 0) = -2/k；代入 k=-2 直接求原极限得 E（k=2 时得 e^-1）' },
      flags: []
    },

    /* ───────────────────────── 第 10 题 ───────────────────────── */
    {
      id: '2018-10', year: 2018, no: '第10题', type: '填空', score: 4,
      stem: R`设函数 $f(x)$ 具有 2 阶连续导数．若曲线 $y=f(x)$ 过点 $(0,0)$ 且与曲线 $y=2^x$ 在点 $(1,2)$ 处相切，则 $\displaystyle\int_0^1xf''(x)\,\mathrm{d}x=$ ______．`,
      options: null,
      answer: R`$2\ln2-2$`,
      figure: null,
      kp: ['int.defcalc', 'diff.def'],
      methods: ['定积分分部积分', '导数的几何意义（相切）'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>定积分的分部积分 + 导数的几何意义（相切）。</p>
<p><b>为什么用分部积分：</b>被积函数是 $x\cdot f''(x)$，$f$ 是抽象函数，我们并不知道它的表达式，只知道它在端点处的一些信息（过点、相切）。分部积分可以把 $f''$ "降阶"为 $f'$、再积成 $f$，最后只剩<b>端点值</b>——恰好是题目给出的信息。这是处理"抽象函数的定积分"的典型思路：<b>让导数从被积函数里消失，变成端点值</b>。</p>
<p><b>条件翻译：</b>过 $(0,0)$ ⇒ $f(0)=0$；在 $(1,2)$ 处与 $y=2^x$ 相切 ⇒ 两曲线在该点有公共点且切线斜率相同 ⇒ $f(1)=2$，$f'(1)=(2^x)'\big|_{x=1}$。</p>`,
      solution: R`<p><b>第一步：翻译条件。</b></p>
<ul><li>曲线过 $(0,0)$：$f(0)=0$。</li><li>曲线过切点 $(1,2)$：$f(1)=2$。</li><li>在 $(1,2)$ 处与 $y=2^x$ 相切，即两曲线在该点切线相同、斜率相等：$f'(1)=(2^x)'\big|_{x=1}=2^x\ln2\big|_{x=1}=2\ln2$。</li></ul>
<p><b>第二步：分部积分。</b>取 $u=x$，$\mathrm{d}v=f''(x)\,\mathrm{d}x$，则 $\mathrm{d}u=\mathrm{d}x$，$v=f'(x)$：</p>
$$\int_0^1xf''(x)\,\mathrm{d}x=\int_0^1x\,\mathrm{d}f'(x)=\Big[xf'(x)\Big]_0^1-\int_0^1f'(x)\,\mathrm{d}x.$$
<p><b>第三步：分别计算两部分。</b></p>
<ul><li>边界项：$\Big[xf'(x)\Big]_0^1=1\cdot f'(1)-0\cdot f'(0)=f'(1)=2\ln2$。注意 $x=0$ 处因子 $x$ 为零，不需要知道 $f'(0)$。</li><li>剩余积分：由牛顿—莱布尼茨公式，$\int_0^1f'(x)\,\mathrm{d}x=f(1)-f(0)=2-0=2$。</li></ul>
<p>（$f''$ 连续保证了分部积分与牛顿—莱布尼茨公式都可以使用。）</p>
<p><b>第四步：合并。</b></p>
$$\int_0^1xf''(x)\,\mathrm{d}x=2\ln2-2=2(\ln2-1).$$`,
      pitfalls: R`<ul><li><b>"相切"只翻译一半</b>：只写了斜率相等 $f'(1)=2\ln2$，忘了切点是公共点，$f(1)=2$。</li><li><b>指数函数求导错</b>：$(2^x)'=2^x\ln2$，不是 $x\cdot2^{x-1}$（那是把指数函数当成幂函数求导了）。</li><li><b>以为缺条件</b>：边界项在 $x=0$ 处是 $0\cdot f'(0)=0$，用不到 $f'(0)$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>被积函数含抽象函数的高阶导数（如 $xf''(x)$、$x^2f'''(x)$）→ 分部积分，把导数"转移"给多项式。多项式求几次导，抽象函数就降几阶，最后只剩端点值。</p>
<p><b>条件翻译表：</b>"曲线过点 $(a,b)$" ⇒ $f(a)=b$；"在 $x=a$ 处与曲线 $y=g(x)$ 相切" ⇒ $f(a)=g(a)$ 且 $f'(a)=g'(a)$。</p>
<p><b>题型识别：</b>看到 $\int xf''(x)\,\mathrm{d}x$ → 写成 $\int x\,\mathrm{d}f'(x)$；看到"过点""相切""切线"等几何描述 → 立刻翻译成函数值与导数值。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 取满足 f(0)=0, f(1)=2, f\'(1)=2ln2 的含参三次多项式，积分 ∫0^1 x f\'\'(x) dx 恒为 2ln2-2（与参数无关）' },
      flags: []
    },

    /* ───────────────────────── 第 11 题 ───────────────────────── */
    {
      id: '2018-11', year: 2018, no: '第11题', type: '填空', score: 4,
      stem: R`设 $\mathbf{F}(x,y,z)=xy\,\mathbf{i}-yz\,\mathbf{j}+zx\,\mathbf{k}$，则 $\operatorname{rot}\mathbf{F}(1,1,0)=$ ______．`,
      options: null,
      answer: R`$\mathbf{i}-\mathbf{k}$（即 $(1,0,-1)$）`,
      figure: null,
      kp: ['mint.field'],
      methods: ['旋度的行列式公式'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>旋度的定义与计算。</p>
<p><b>旋度是什么：</b>向量场 $\mathbf{F}=(P,Q,R)$ 的旋度 $\operatorname{rot}\mathbf{F}=\nabla\times\mathbf{F}$ 描述场在一点附近"打旋"的强弱与转轴方向。直观地想：把一个极小的桨轮放进流场，它转得最快时的转轴方向就是旋度的方向，转速与旋度的大小成正比。计算上，它是"$\nabla$ 与 $\mathbf{F}$ 的叉积"，所以用三阶行列式来记最方便。</p>`,
      solution: R`<p><b>第一步：写出分量。</b>$P=xy$，$Q=-yz$，$R=zx$。</p>
<p><b>第二步：旋度的行列式公式。</b></p>
$$\operatorname{rot}\mathbf{F}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\ \dfrac{\partial}{\partial x}&\dfrac{\partial}{\partial y}&\dfrac{\partial}{\partial z}\\ P&Q&R\end{vmatrix}=\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)\mathbf{i}+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)\mathbf{j}+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathbf{k}.$$
<p><b>第三步：逐项求偏导。</b></p>
<ul><li>$\mathbf{i}$ 分量：$\frac{\partial(zx)}{\partial y}=0$，$\frac{\partial(-yz)}{\partial z}=-y$，差为 $0-(-y)=y$；</li><li>$\mathbf{j}$ 分量：$\frac{\partial(xy)}{\partial z}=0$，$\frac{\partial(zx)}{\partial x}=z$，差为 $0-z=-z$；</li><li>$\mathbf{k}$ 分量：$\frac{\partial(-yz)}{\partial x}=0$，$\frac{\partial(xy)}{\partial y}=x$，差为 $0-x=-x$。</li></ul>
<p>所以 $\operatorname{rot}\mathbf{F}=y\,\mathbf{i}-z\,\mathbf{j}-x\,\mathbf{k}$。</p>
<p><b>第四步：代入点 $(1,1,0)$。</b></p>
$$\operatorname{rot}\mathbf{F}(1,1,0)=1\cdot\mathbf{i}-0\cdot\mathbf{j}-1\cdot\mathbf{k}=\mathbf{i}-\mathbf{k}.$$`,
      pitfalls: R`<ul><li><b>$\mathbf{j}$ 分量顺序反了</b>：是 $\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}$（行列式按第一行展开时 $\mathbf{j}$ 前面带负号）。记忆方法：$\mathbf{i}$ 分量是 "$R_y-Q_z$"，把字母按 $P\to Q\to R\to P$、$x\to y\to z\to x$ 同时轮换，就依次得到 $\mathbf{j}$ 分量 "$P_z-R_x$"、$\mathbf{k}$ 分量 "$Q_x-P_y$"。</li><li><b>与散度混淆</b>：散度 $\operatorname{div}\mathbf{F}=P_x+Q_y+R_z$ 是一个数，旋度是一个向量。</li><li>$Q=-yz$ 的负号不要丢。</li></ul>`,
      summary: R`<p><b>公式：</b>$\operatorname{rot}\mathbf{F}=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)$；$\operatorname{div}\mathbf{F}=P_x+Q_y+R_z$；$\operatorname{grad}u=(u_x,u_y,u_z)$。</p>
<p><b>联系：</b>旋度出现在斯托克斯公式 $\oint_\Gamma\mathbf{F}\cdot\mathrm{d}\mathbf{r}=\iint_\Sigma\operatorname{rot}\mathbf{F}\cdot\mathbf{n}\,\mathrm{d}S$ 中，散度出现在高斯公式中。</p>
<p><b>题型识别：</b>看到 rot → 写三阶行列式，按第一行展开；看到 div → 三个分量各自对"自己的变量"求偏导再相加。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: (R_y-Q_z, P_z-R_x, Q_x-P_y) = (y, -z, -x)，在 (1,1,0) 处为 (1, 0, -1)' },
      flags: ['OCR 稿中 F 未加粗（写作 F(x,y,z)），按向量场记号统一写成 \\mathbf{F}']
    },

    /* ───────────────────────── 第 12 题 ───────────────────────── */
    {
      id: '2018-12', year: 2018, no: '第12题', type: '填空', score: 4,
      stem: R`设 $L$ 为球面 $x^2+y^2+z^2=1$ 与平面 $x+y+z=0$ 的交线，则 $\displaystyle\oint_Lxy\,\mathrm{d}s=$ ______．`,
      options: null,
      answer: R`$-\dfrac{\pi}{3}$`,
      figure: null,
      kp: ['mint.line1', 'vec.surface'],
      methods: ['轮换对称性', '用曲线方程化简被积函数'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>第一类曲线积分（对弧长的曲线积分），核心技巧是<b>轮换对称性</b>与"把曲线方程代入被积函数"。</p>
<p><b>为什么不直接参数化：</b>$L$ 是球面与过球心的平面的交线，是一个半径为 1 的大圆，但它斜着放在空间里，写参数方程需要先在平面内找一组正交基，比较繁琐。</p>
<p><b>观察对称性：</b>$L$ 的两个方程 $x^2+y^2+z^2=1$ 与 $x+y+z=0$ 在 $x\to y\to z\to x$ 的轮换下都不变，所以 $\oint_Lxy\,\mathrm{d}s=\oint_Lyz\,\mathrm{d}s=\oint_Lzx\,\mathrm{d}s$。三者相加得到 $xy+yz+zx$，而它可以用 $(x+y+z)^2$ 与 $x^2+y^2+z^2$ 表示——这两个量在 $L$ 上都是常数！</p>
<p><b>第一类曲线积分的"特权"：</b>积分点始终在曲线上，所以被积函数中可以直接用曲线方程替换（例如把 $x+y+z$ 换成 $0$）。</p>`,
      solution: R`<p><b>第一步：认清曲线。</b>平面 $x+y+z=0$ 过球心 $O$，所以 $L$ 是单位球面上的大圆，半径为 1，周长</p>
$$\oint_L\mathrm{d}s=2\pi.$$
<p><b>第二步：轮换对称性。</b>把 $(x,y,z)$ 换成 $(y,z,x)$，球面方程和平面方程都不变，所以 $L$ 被映成它自己；而坐标轮换是保持距离的变换，弧长元素 $\mathrm{d}s$ 不变。因此</p>
$$\oint_Lxy\,\mathrm{d}s=\oint_Lyz\,\mathrm{d}s=\oint_Lzx\,\mathrm{d}s,\qquad\oint_Lxy\,\mathrm{d}s=\frac13\oint_L(xy+yz+zx)\,\mathrm{d}s.$$
<p><b>第三步：用恒等式把被积函数化成常数。</b>由 $(x+y+z)^2=x^2+y^2+z^2+2(xy+yz+zx)$，得</p>
$$xy+yz+zx=\frac12\left[(x+y+z)^2-(x^2+y^2+z^2)\right].$$
<p>在 $L$ 上 $x+y+z=0$，$x^2+y^2+z^2=1$，代入得 $xy+yz+zx=\frac12(0-1)=-\frac12$。</p>
<p><b>第四步：计算。</b></p>
$$\oint_Lxy\,\mathrm{d}s=\frac13\oint_L\left(-\frac12\right)\mathrm{d}s=-\frac16\cdot2\pi=-\frac\pi3.$$`,
      pitfalls: R`<ul><li><b>误用奇偶对称</b>：以为 $xy$ 对某个变量是奇函数而积分为 $0$。$L$ 关于 $x\to-x$ 并不对称（$x+y+z=0$ 中把 $x$ 换成 $-x$ 方程就变了），不能用奇偶性。</li><li><b>忘了代入曲线方程</b>：转去参数化，计算量大增，容易出错。</li><li><b>曲线长度算错</b>：平面过球心，交线是大圆，半径等于球半径 1，周长 $2\pi$。若平面不过球心，交线圆半径为 $\sqrt{R^2-d^2}$（$d$ 为球心到平面的距离）。</li></ul>`,
      summary: R`<p><b>方法要点：</b>第一类曲线（曲面）积分的三板斧：①用曲线（曲面）方程化简被积函数；②奇偶对称性；③轮换对称性。</p>
<p><b>轮换对称的判断：</b>积分曲线（曲面）的方程在 $x\to y\to z\to x$ 下不变，则 $\oint_Lf(x,y,z)\,\mathrm{d}s=\oint_Lf(y,z,x)\,\mathrm{d}s$。常见推论：在这样的 $L$ 上 $\oint x^2\,\mathrm{d}s=\oint y^2\,\mathrm{d}s=\oint z^2\,\mathrm{d}s=\frac13\oint(x^2+y^2+z^2)\,\mathrm{d}s$。</p>
<p><b>题型识别：</b></p><ul><li>看到"球面 ∩ 过原点且对称的平面"（如 $x+y+z=0$）→ 立刻想到轮换对称 + 大圆周长 $2\pi R$。</li><li>看到被积函数是 $xy$、$x^2$ 之类的单项 → 轮换后凑成 $x^2+y^2+z^2$、$(x+y+z)^2$ 这种在曲线上为常数的组合。</li></ul>`,
      alt: R`<p><b>另解（参数化验证）：</b>在平面 $x+y+z=0$ 内取两个互相垂直的单位向量 $\mathbf{a}=\frac{1}{\sqrt2}(1,-1,0)$，$\mathbf{b}=\frac{1}{\sqrt6}(1,1,-2)$，则 $L$：$\mathbf{r}(\theta)=\cos\theta\,\mathbf{a}+\sin\theta\,\mathbf{b}$，$0\le\theta\le2\pi$，且 $|\mathbf{r}'(\theta)|=1$，所以 $\mathrm{d}s=\mathrm{d}\theta$。此时 $x=\frac{\cos\theta}{\sqrt2}+\frac{\sin\theta}{\sqrt6}$，$y=-\frac{\cos\theta}{\sqrt2}+\frac{\sin\theta}{\sqrt6}$，</p>
$$xy=\frac{\sin^2\theta}{6}-\frac{\cos^2\theta}{2},\qquad\oint_Lxy\,\mathrm{d}s=\int_0^{2\pi}\left(\frac{\sin^2\theta}{6}-\frac{\cos^2\theta}{2}\right)\mathrm{d}\theta=\frac\pi6-\frac\pi2=-\frac\pi3.$$
<p>结果一致，但显然比对称性方法繁琐。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 用平面内正交基参数化大圆（验证点在球面与平面上、|r\'|=1），∫0^{2π} x·y dθ = -π/3' },
      flags: []
    },

    /* ───────────────────────── 第 15 题 ───────────────────────── */
    {
      id: '2018-15', year: 2018, no: '第15题', type: '解答', score: 10,
      stem: R`求不定积分 $\displaystyle\int\mathrm{e}^{2x}\arctan\sqrt{\mathrm{e}^x-1}\,\mathrm{d}x$．`,
      options: null,
      answer: R`$\dfrac12\mathrm{e}^{2x}\arctan\sqrt{\mathrm{e}^x-1}-\dfrac16(\mathrm{e}^x+2)\sqrt{\mathrm{e}^x-1}+C$`,
      figure: null,
      kp: ['int.indef'],
      methods: ['根式整体换元', '分部积分（反对幂指三）', '巧选原函数'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>不定积分的换元法与分部积分法的综合运用。</p>
<p><b>难点在哪：</b>被积函数是"指数函数 × 反三角函数"，而且反三角函数里还套着根号 $\sqrt{\mathrm{e}^x-1}$。有两条路：</p>
<ul><li><b>路线一：先换元去根号。</b>令 $u=\sqrt{\mathrm{e}^x-1}$，根号消失，指数函数也变成了 $u$ 的多项式，问题化为"多项式 × $\arctan u$"——这是分部积分最标准的类型。按口诀"反对幂指三"：反三角函数排在最前，留下来求导；多项式拿去凑微分。</li><li><b>路线二：直接分部积分。</b>$\mathrm{e}^{2x}$ 很容易积分，而 $\arctan\sqrt{\mathrm{e}^x-1}$ 求导后会变得出奇地简单。</li></ul>
<p>为什么 $\arctan\sqrt{\mathrm{e}^x-1}$ 求导会简单？因为 $\arctan$ 的导数 $\frac{1}{1+t^2}$ 遇到 $t=\sqrt{\mathrm{e}^x-1}$ 时，分母变成 $1+(\mathrm{e}^x-1)=\mathrm{e}^x$，正好与链式法则产生的 $\mathrm{e}^x$ 约掉。下面用路线一详细解答，路线二放在"另解"。</p>`,
      solution: R`<p><b>第一步：定义域。</b>根号要求 $\mathrm{e}^x-1\ge0$，即 $x\ge0$。下面在 $x>0$ 上计算。</p>
<p><b>第二步：换元去根号。</b>令 $u=\sqrt{\mathrm{e}^x-1}$（$u>0$），则 $\mathrm{e}^x=1+u^2$，$x=\ln(1+u^2)$，于是</p>
$$\mathrm{d}x=\frac{2u}{1+u^2}\,\mathrm{d}u,\qquad\mathrm{e}^{2x}=(1+u^2)^2.$$
<p>代入原积分（被积函数、微分都要换）：</p>
$$\int\mathrm{e}^{2x}\arctan\sqrt{\mathrm{e}^x-1}\,\mathrm{d}x=\int(1+u^2)^2\arctan u\cdot\frac{2u}{1+u^2}\,\mathrm{d}u=\int2u(1+u^2)\arctan u\,\mathrm{d}u.$$
<p><b>第三步：分部积分——巧选原函数。</b>$\arctan u$ 留作求导对象，$2u(1+u^2)\,\mathrm{d}u$ 去凑微分。注意</p>
$$\frac{\mathrm{d}}{\mathrm{d}u}(1+u^2)^2=2(1+u^2)\cdot2u=4u(1+u^2),\quad\text{所以}\quad2u(1+u^2)\,\mathrm{d}u=\mathrm{d}\left[\frac12(1+u^2)^2\right].$$
<p>为什么选 $\frac12(1+u^2)^2$ 而不选 $u^2+\frac12u^4$？两者只差常数 $\frac12$，都是原函数；但前者含因子 $(1+u^2)$，待会儿能与 $(\arctan u)'=\frac{1}{1+u^2}$ 约分。由分部积分公式 $\int v\,\mathrm{d}w=vw-\int w\,\mathrm{d}v$：</p>
$$\int2u(1+u^2)\arctan u\,\mathrm{d}u=\frac12(1+u^2)^2\arctan u-\int\frac12(1+u^2)^2\cdot\frac{1}{1+u^2}\,\mathrm{d}u.$$
<p><b>第四步：剩下的是多项式积分。</b></p>
$$\int\frac12(1+u^2)\,\mathrm{d}u=\frac12u+\frac16u^3+C_0=\frac{u(u^2+3)}{6}+C_0.$$
<p>所以</p>
$$\int2u(1+u^2)\arctan u\,\mathrm{d}u=\frac12(1+u^2)^2\arctan u-\frac{u(u^2+3)}{6}+C.$$
<p><b>第五步：回代。</b>$1+u^2=\mathrm{e}^x$，$u^2+3=\mathrm{e}^x+2$，$u=\sqrt{\mathrm{e}^x-1}$，得</p>
$$\int\mathrm{e}^{2x}\arctan\sqrt{\mathrm{e}^x-1}\,\mathrm{d}x=\frac12\mathrm{e}^{2x}\arctan\sqrt{\mathrm{e}^x-1}-\frac16(\mathrm{e}^x+2)\sqrt{\mathrm{e}^x-1}+C.$$
<p><b>第六步：求导检验。</b>记右端为 $F(x)$。先算</p>
$$\left(\arctan\sqrt{\mathrm{e}^x-1}\right)'=\frac{1}{1+(\mathrm{e}^x-1)}\cdot\frac{\mathrm{e}^x}{2\sqrt{\mathrm{e}^x-1}}=\frac{1}{2\sqrt{\mathrm{e}^x-1}}.$$
<p>于是</p>
$$F'(x)=\mathrm{e}^{2x}\arctan\sqrt{\mathrm{e}^x-1}+\frac{\mathrm{e}^{2x}}{4\sqrt{\mathrm{e}^x-1}}-\frac16\left[\mathrm{e}^x\sqrt{\mathrm{e}^x-1}+\frac{(\mathrm{e}^x+2)\mathrm{e}^x}{2\sqrt{\mathrm{e}^x-1}}\right].$$
<p>方括号通分：$\dfrac{2\mathrm{e}^x(\mathrm{e}^x-1)+\mathrm{e}^x(\mathrm{e}^x+2)}{2\sqrt{\mathrm{e}^x-1}}=\dfrac{3\mathrm{e}^{2x}}{2\sqrt{\mathrm{e}^x-1}}$，乘以 $\frac16$ 得 $\dfrac{\mathrm{e}^{2x}}{4\sqrt{\mathrm{e}^x-1}}$，恰好与前一项抵消，$F'(x)=\mathrm{e}^{2x}\arctan\sqrt{\mathrm{e}^x-1}$ ✓。</p>`,
      pitfalls: R`<ul><li><b>换元漏掉微分</b>：$\mathrm{d}x=\frac{2u}{1+u^2}\,\mathrm{d}u$，不是 $\mathrm{d}u$。换元要同时换三样：被积函数、微分、（定积分时）上下限。</li><li><b>分部积分选反</b>：若把 $\arctan u$ 拿去积分，会越积越复杂。口诀"反对幂指三"：排在前面的（反三角、对数）留下求导，排在后面的拿去凑微分。</li><li><b>回代整理出错</b>：$\frac12u+\frac16u^3=\frac{u(u^2+3)}{6}$，再用 $u^2=\mathrm{e}^x-1$ 得 $\frac16(\mathrm{e}^x+2)\sqrt{\mathrm{e}^x-1}$。最后一定求导检验。</li><li>不定积分结果漏写 $+C$。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li><b>根式整体换元：</b>被积函数含 $\sqrt{\mathrm{e}^x-1}$、$\sqrt{\mathrm{e}^x+a}$、$\sqrt{ax+b}$ 等，令整个根式为新变量，往往立刻化为有理函数或"多项式 × 反三角函数"。</li><li><b>分部积分口诀"反对幂指三"：</b>谁排在前面谁留下来求导。</li><li><b>巧选原函数：</b>凑微分时原函数可以加任意常数，挑一个能与另一部分约分的（本题挑 $\frac12(1+u^2)^2$）。</li></ul>
<p><b>题型识别：</b>看到 $\arctan\sqrt{\cdots}$、$\ln(\cdots)$ 乘以指数函数或多项式 → 分部积分；看到根号里是 $\mathrm{e}^x$ 的一次式 → 令根号为新变量。</p>`,
      alt: R`<p><b>另解（直接在 $x$ 下分部积分）：</b>由上面算出的 $\left(\arctan\sqrt{\mathrm{e}^x-1}\right)'=\frac{1}{2\sqrt{\mathrm{e}^x-1}}$，</p>
$$\int\arctan\sqrt{\mathrm{e}^x-1}\,\mathrm{d}\left(\frac12\mathrm{e}^{2x}\right)=\frac12\mathrm{e}^{2x}\arctan\sqrt{\mathrm{e}^x-1}-\frac14\int\frac{\mathrm{e}^{2x}}{\sqrt{\mathrm{e}^x-1}}\,\mathrm{d}x.$$
<p>对后一个积分令 $w=\mathrm{e}^x$，$\mathrm{d}w=\mathrm{e}^x\,\mathrm{d}x$：</p>
$$\int\frac{\mathrm{e}^{2x}}{\sqrt{\mathrm{e}^x-1}}\,\mathrm{d}x=\int\frac{w}{\sqrt{w-1}}\,\mathrm{d}w=\int\left(\sqrt{w-1}+\frac{1}{\sqrt{w-1}}\right)\mathrm{d}w=\frac23(w-1)^{\frac32}+2(w-1)^{\frac12}+C_1.$$
<p>乘以 $\frac14$：$\frac16(w-1)^{\frac32}+\frac12(w-1)^{\frac12}=\frac16\sqrt{w-1}\,(w-1+3)=\frac16(\mathrm{e}^x+2)\sqrt{\mathrm{e}^x-1}$，结果与正解相同。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 对答案求导减去被积函数 simplify 为 0，并在 x=0.3,1,2.5 处数值核对；换元后 sympy 积分 ∫2u(1+u²)arctan u du 与手算结果一致' },
      flags: []
    },

    /* ───────────────────────── 第 16 题 ───────────────────────── */
    {
      id: '2018-16', year: 2018, no: '第16题', type: '解答', score: 10,
      stem: R`将长为 $2\,\mathrm{m}$ 的铁丝分成三段，依次围成圆、正方形与正三角形．三个图形的面积之和是否存在最小值？若存在，求出最小值．`,
      options: null,
      answer: R`存在．最小值为 $\dfrac{1}{\pi+4+3\sqrt3}\ \mathrm{m}^2$，此时围圆、正方形、正三角形的铁丝长分别为 $\dfrac{2\pi}{\pi+4+3\sqrt3}$、$\dfrac{8}{\pi+4+3\sqrt3}$、$\dfrac{6\sqrt3}{\pi+4+3\sqrt3}$（m）．`,
      figure: null,
      kp: ['mdiff.extreme'],
      methods: ['拉格朗日乘数法', '有界闭区域上的最值定理', '柯西不等式'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>多元函数的条件极值（拉格朗日乘数法）在应用题中的使用，外加一个"最小值是否存在"的论证。</p>
<p><b>建模：</b>设三段长分别为 $x,y,z$（米），约束 $x+y+z=2$。</p>
<ul><li>周长为 $x$ 的圆：半径 $\frac{x}{2\pi}$，面积 $\pi\left(\frac{x}{2\pi}\right)^2=\frac{x^2}{4\pi}$；</li><li>周长为 $y$ 的正方形：边长 $\frac y4$，面积 $\frac{y^2}{16}$；</li><li>周长为 $z$ 的正三角形：边长 $\frac z3$，面积 $\frac{\sqrt3}{4}\left(\frac z3\right)^2=\frac{\sqrt3}{36}z^2$。</li></ul>
<p>问题变成：在 $x+y+z=2$ 下求 $S=\frac{x^2}{4\pi}+\frac{y^2}{16}+\frac{\sqrt3}{36}z^2$ 的最小值——一个等式约束下的条件极值，标准工具是<b>拉格朗日乘数法</b>。</p>
<p><b>为什么还要讨论"是否存在"：</b>拉格朗日乘数法只给出"可能的极值点"（必要条件），既不保证最小值存在，也不保证求出的点就是最小值点。题目特意问"是否存在"，就是要你补上这个论证。</p>
<p><b>一个漂亮的直观：</b>拉格朗日条件 $\frac{\partial S}{\partial x}=\frac{\partial S}{\partial y}=\frac{\partial S}{\partial z}$ 的含义是"多给哪个图形 1 厘米铁丝，面积的增加率都一样"——否则把铁丝从增长快的图形挪给增长慢的，总面积还能更小。而对圆、正方形、正三角形这类有内切圆的图形，面积 $=\frac12\times$周长$\times$内切圆半径，"面积对周长的增长率"恰好就是内切圆半径。所以最优时三个图形的<b>内切圆半径相等</b>。解答末尾会验证这一点。</p>`,
      solution: R`<p><b>第一步：目标函数与约束。</b>设分给圆、正方形、正三角形的铁丝长分别为 $x,y,z$（米），则</p>
$$S(x,y,z)=\frac{x^2}{4\pi}+\frac{y^2}{16}+\frac{\sqrt3}{36}z^2,\qquad x+y+z=2,\quad x,y,z>0.$$
<p><b>第二步：拉格朗日乘数法求驻点。</b>令 $L=\frac{x^2}{4\pi}+\frac{y^2}{16}+\frac{\sqrt3}{36}z^2+\lambda(x+y+z-2)$，</p>
$$\begin{cases}L_x=\dfrac{x}{2\pi}+\lambda=0,\\[2mm] L_y=\dfrac{y}{8}+\lambda=0,\\[2mm] L_z=\dfrac{\sqrt3}{18}z+\lambda=0,\\[2mm] x+y+z=2.\end{cases}$$
<p>由前三式得 $x=-2\pi\lambda$，$y=-8\lambda$，$z=-\frac{18}{\sqrt3}\lambda=-6\sqrt3\lambda$。代入第四式：$-\lambda(2\pi+8+6\sqrt3)=2$，</p>
$$\lambda=-\frac{1}{\pi+4+3\sqrt3}.$$
<p>记 $D=\pi+4+3\sqrt3$，得唯一驻点</p>
$$x_0=\frac{2\pi}{D},\qquad y_0=\frac{8}{D},\qquad z_0=\frac{6\sqrt3}{D}.$$
<p><b>第三步：驻点处的函数值。</b></p>
$$S_0=\frac{1}{4\pi}\cdot\frac{4\pi^2}{D^2}+\frac{1}{16}\cdot\frac{64}{D^2}+\frac{\sqrt3}{36}\cdot\frac{108}{D^2}=\frac{\pi+4+3\sqrt3}{D^2}=\frac1D.$$
<p><b>第四步：论证最小值存在，且就是 $S_0$。</b>把允许范围扩大到闭三角形 $\overline{G}=\{(x,y,z)\mid x,y,z\ge0,\ x+y+z=2\}$（允许某一段长度为 0，即"退化"的分法）。$\overline{G}$ 是有界闭集，$S$ 连续，由最值定理，$S$ 在 $\overline{G}$ 上一定取得最小值。最小值点要么在内部（三段都为正）——这时必满足拉格朗日条件，只能是 $(x_0,y_0,z_0)$；要么在边界上（某段为 0）。下面求边界上的最小值。</p>
<p>边界上只剩两项。对两项的情形同样用乘数法（或配方）可得：在 $a+b=2$ 下，$\alpha a^2+\beta b^2$ 的最小值为 $\dfrac{4}{\frac1\alpha+\frac1\beta}$。三个面积系数的倒数分别是 $4\pi$、$16$、$12\sqrt3$，于是</p>
<ul><li>$x=0$（没有圆）：最小值 $\dfrac{4}{16+12\sqrt3}=\dfrac{1}{4+3\sqrt3}\approx0.109$；</li><li>$y=0$（没有正方形）：最小值 $\dfrac{4}{4\pi+12\sqrt3}=\dfrac{1}{\pi+3\sqrt3}\approx0.120$；</li><li>$z=0$（没有三角形）：最小值 $\dfrac{4}{4\pi+16}=\dfrac{1}{\pi+4}\approx0.140$。</li></ul>
<p>它们的分母都比 $D=\pi+4+3\sqrt3$ 小，所以都大于 $S_0=\frac1D\approx0.081$。因此 $S$ 在 $\overline{G}$ 上的最小值在内部点 $(x_0,y_0,z_0)$ 取得，而这个点三段都为正，是真正的"分成三段"。</p>
<p><b>结论：</b>面积之和存在最小值，</p>
$$S_{\min}=\frac{1}{\pi+4+3\sqrt3}\ \mathrm{m}^2\approx0.081\ \mathrm{m}^2,$$
<p>此时三段长依次为 $\dfrac{2\pi}{\pi+4+3\sqrt3}$、$\dfrac{8}{\pi+4+3\sqrt3}$、$\dfrac{6\sqrt3}{\pi+4+3\sqrt3}$（米）。</p>
<p><b>第五步（加深理解）：内切圆半径相等。</b>记 $r=\frac1D$。最优时：圆的半径 $\frac{x_0}{2\pi}=r$；正方形边长 $\frac{y_0}{4}=2r$，内切圆半径 $r$；正三角形边长 $\frac{z_0}{3}=2\sqrt3\,r$，内切圆半径 $\frac{2\sqrt3\,r}{2\sqrt3}=r$。三个图形的内切圆一样大！再由"面积 $=\frac12\times$周长$\times$内切圆半径"，总面积 $=\frac12\times2\times r=r=\frac1D$，与第三步一致。</p>
<svg viewBox="0 0 310 110" width="310" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="最优分法下三个图形的内切圆相同">
<circle cx="50" cy="65" r="30" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="115" y="35" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="145" cy="65" r="30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
<polygon points="250,5 198.04,95 301.96,95" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="250" cy="65" r="30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
</svg>
<p><small>最优分法：圆、正方形、正三角形的内切圆（虚线）半径都等于 $r=\frac{1}{\pi+4+3\sqrt3}$。</small></p>`,
      pitfalls: R`<ul><li><b>面积公式算错</b>：周长 $x$ 的圆半径是 $\frac{x}{2\pi}$，不是 $\frac x\pi$；边长 $t$ 的正三角形面积是 $\frac{\sqrt3}{4}t^2$，周长 $z$ 时 $t=\frac z3$，面积 $\frac{\sqrt3}{36}z^2$。</li><li><b>只求驻点不论证</b>：求出驻点就宣布"这是最小值"，没有回答"是否存在"。拉格朗日乘数法只是必要条件；要么用闭区域最值定理 + 边界比较，要么用凸性或柯西不等式给出证明。</li><li><b>化简出错</b>：$\frac{18}{\sqrt3}=6\sqrt3$；$\frac{\sqrt3}{36}\cdot(6\sqrt3)^2=\frac{\sqrt3\cdot108}{36}=3\sqrt3$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>条件最值应用题四步：①设变量，写目标函数与约束；②拉格朗日函数求驻点；③说明最值存在（闭区域最值定理、实际意义、或不等式）；④比较驻点与边界上的值。</p>
<p><b>速算结论：</b>$\sum a_ix_i^2$（$a_i>0$）在 $\sum x_i=s$ 下的最小值为 $\dfrac{s^2}{\sum\frac{1}{a_i}}$，最小值点满足 $a_1x_1=a_2x_2=\cdots$（柯西不等式取等条件）。</p>
<p><b>题型识别：</b></p><ul><li>看到"总量固定、分给几部分、求某指标最优" → 条件极值，拉格朗日乘数法。</li><li>看到"是否存在最大（小）值" → 必须给出存在性论证，不能只求驻点。</li><li>看到目标是平方和、约束是线性 → 也可用柯西不等式一步到位。</li></ul>`,
      alt: R`<p><b>另解（柯西不等式，一步到位并自带"最小"的证明）：</b>记 $a=\frac{1}{4\pi}$，$b=\frac{1}{16}$，$c=\frac{\sqrt3}{36}$。由柯西—施瓦茨不等式，</p>
$$4=(x+y+z)^2=\left(\sqrt a\,x\cdot\frac{1}{\sqrt a}+\sqrt b\,y\cdot\frac{1}{\sqrt b}+\sqrt c\,z\cdot\frac{1}{\sqrt c}\right)^2\le\left(ax^2+by^2+cz^2\right)\left(\frac1a+\frac1b+\frac1c\right).$$
<p>而 $\frac1a+\frac1b+\frac1c=4\pi+16+12\sqrt3=4(\pi+4+3\sqrt3)$，所以</p>
$$S=ax^2+by^2+cz^2\ge\frac{4}{4(\pi+4+3\sqrt3)}=\frac{1}{\pi+4+3\sqrt3},$$
<p>等号当且仅当两组数成比例，即 $ax=by=cz$ 时成立；结合 $x+y+z=2$ 解出的正是 $(x_0,y_0,z_0)$。这个方法同时证明了最小值的存在与取值，不需要讨论边界。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy solve 拉格朗日方程组得唯一驻点 (2π/D, 8/D, 6√3/D)，D=π+4+3√3，S 值化简为 1/D ≈ 0.0811；数值计算三条边界上的最小值 1/(4+3√3)≈0.1087、1/(π+3√3)≈0.1199、1/(π+4)≈0.1400 均更大' },
      flags: []
    },

    /* ───────────────────────── 第 17 题 ───────────────────────── */
    {
      id: '2018-17', year: 2018, no: '第17题', type: '解答', score: 10,
      stem: R`<p>设 $\Sigma$ 是曲面 $x=\sqrt{1-3y^2-3z^2}$ 的前侧，计算曲面积分</p>
$$I=\iint_\Sigma x\,\mathrm{d}y\,\mathrm{d}z+(y^3+2)\,\mathrm{d}z\,\mathrm{d}x+z^3\,\mathrm{d}x\,\mathrm{d}y.$$`,
      options: null,
      answer: R`$I=\dfrac{14\pi}{45}$`,
      figure: null,
      kp: ['mint.surf2', 'mint.triple'],
      methods: ['补面 + 高斯公式', '柱面坐标（以 x 轴为轴）', '先二后一截面法'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>第二类曲面积分（对坐标的曲面积分），标准方法是<b>补面 + 高斯公式</b>。</p>
<p><b>先认曲面：</b>$x=\sqrt{1-3y^2-3z^2}$ 两边平方得 $x^2+3y^2+3z^2=1$（且 $x\ge0$），这是一个绕 $x$ 轴旋转的椭球面的"前半个"：$x$ 方向半轴 1，$y,z$ 方向半轴 $\frac{1}{\sqrt3}$。"前侧"指法向量指向 $x$ 轴正方向的一侧，对这半个椭球来说就是外侧。</p>
<p><b>为什么想到高斯公式：</b>直接计算要把三项分别投影到三个坐标面，曲面又是半个椭球，非常麻烦。而散度</p>
$$\frac{\partial x}{\partial x}+\frac{\partial(y^3+2)}{\partial y}+\frac{\partial z^3}{\partial z}=1+3y^2+3z^2$$
<p>很简单，体积分容易算。曲面不封闭怎么办？在 $x=0$ 处补一个圆盘把"碗口"封上即可——而补上的这块平面上的积分恰好为 $0$：$x=0$ 让第一项消失；这块平面垂直于 $zOx$、$xOy$ 两个坐标面，让后两项也消失。</p>`,
      solution: R`<p><b>第一步：补面使之封闭。</b>取 $\Sigma_1$：$x=0$，$3y^2+3z^2\le1$（$yOz$ 面上半径为 $\frac{1}{\sqrt3}$ 的圆盘），取<b>后侧</b>（法向量指向 $x$ 负方向）。$\Sigma$ 与 $\Sigma_1$ 合起来是封闭曲面，围成半椭球体</p>
$$\Omega=\left\{(x,y,z)\ \middle|\ 0\le x\le\sqrt{1-3y^2-3z^2},\ 3y^2+3z^2\le1\right\}.$$
<p>$\Sigma$ 取前侧、$\Sigma_1$ 取后侧，合起来恰好是 $\Omega$ 边界的<b>外侧</b>——这是使用高斯公式的方向要求。</p>
<p><b>第二步：高斯公式。</b>$P=x$，$Q=y^3+2$，$R=z^3$ 在 $\Omega$ 上具有连续偏导数，</p>
$$\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=1+3y^2+3z^2,$$
$$\iint_{\Sigma+\Sigma_1}x\,\mathrm{d}y\,\mathrm{d}z+(y^3+2)\,\mathrm{d}z\,\mathrm{d}x+z^3\,\mathrm{d}x\,\mathrm{d}y=\iiint_\Omega(1+3y^2+3z^2)\,\mathrm{d}V.$$
<p><b>第三步：补面上的积分为 0。</b></p>
<ul><li>$\iint_{\Sigma_1}x\,\mathrm{d}y\,\mathrm{d}z$：$\Sigma_1$ 上 $x\equiv0$，被积函数为 0，积分为 0；</li><li>$\iint_{\Sigma_1}(y^3+2)\,\mathrm{d}z\,\mathrm{d}x$ 与 $\iint_{\Sigma_1}z^3\,\mathrm{d}x\,\mathrm{d}y$：$\Sigma_1$ 位于平面 $x=0$ 内，它在 $zOx$ 面和 $xOy$ 面上的投影都是线段（面积为 0），所以这两个积分都为 0。</li></ul>
<p>因此</p>
$$I=\iint_{\Sigma+\Sigma_1}-\iint_{\Sigma_1}=\iiint_\Omega(1+3y^2+3z^2)\,\mathrm{d}V-0.$$
<p><b>第四步：用"以 $x$ 轴为轴"的柱面坐标。</b>$\Omega$ 关于 $x$ 轴旋转对称，被积函数含 $y^2+z^2$，所以令 $y=r\cos\theta$，$z=r\sin\theta$，$x=x$，体积元 $\mathrm{d}V=r\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}x$。$\Omega$ 化为 $0\le\theta\le2\pi$，$0\le r\le\frac{1}{\sqrt3}$，$0\le x\le\sqrt{1-3r^2}$：</p>
$$I=\int_0^{2\pi}\mathrm{d}\theta\int_0^{\frac{1}{\sqrt3}}(1+3r^2)\,r\,\mathrm{d}r\int_0^{\sqrt{1-3r^2}}\mathrm{d}x=2\pi\int_0^{\frac{1}{\sqrt3}}(1+3r^2)\sqrt{1-3r^2}\,r\,\mathrm{d}r.$$
<p><b>第五步：换元算一元积分。</b>令 $t=\sqrt{1-3r^2}$，则 $t^2=1-3r^2$，$2t\,\mathrm{d}t=-6r\,\mathrm{d}r$，即 $r\,\mathrm{d}r=-\frac t3\,\mathrm{d}t$；$1+3r^2=2-t^2$；$r$ 从 $0$ 到 $\frac{1}{\sqrt3}$ 时 $t$ 从 $1$ 到 $0$。</p>
$$\int_0^{\frac{1}{\sqrt3}}(1+3r^2)\sqrt{1-3r^2}\,r\,\mathrm{d}r=\int_1^0(2-t^2)\,t\cdot\left(-\frac t3\right)\mathrm{d}t=\frac13\int_0^1(2t^2-t^4)\,\mathrm{d}t=\frac13\left(\frac23-\frac15\right)=\frac{7}{45}.$$
<p><b>第六步：结论。</b></p>
$$I=2\pi\cdot\frac{7}{45}=\frac{14\pi}{45}.$$`,
      pitfalls: R`<ul><li><b>补面方向取错</b>：$\Sigma$ 取前侧（对 $\Omega$ 而言是外侧），补面必须取后侧，合起来才是外侧；若补面取前侧，就不能直接套高斯公式。</li><li><b>补面上的积分算错</b>：把 $\iint_{\Sigma_1}(y^3+2)\,\mathrm{d}z\,\mathrm{d}x$ 误算成"$2\times$圆盘面积"。$\mathrm{d}z\,\mathrm{d}x$ 表示向 $zOx$ 面投影，而 $\Sigma_1$ 垂直于 $zOx$ 面，投影面积为 0。</li><li><b>柱坐标的轴选错</b>：本题旋转轴是 $x$ 轴，应令 $y=r\cos\theta$，$z=r\sin\theta$，不要习惯性地对 $x,y$ 用极坐标。</li><li>忘记体积元中的因子 $r$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>第二类曲面积分 → 首选高斯公式。曲面不封闭就补面，补面通常取坐标平面上的部分，使其上的积分容易（常常为 0）。</p>
<p><b>补面法公式：</b>$\iint_\Sigma=\iint_{\Sigma+\Sigma_1}-\iint_{\Sigma_1}$，其中 $\iint_{\Sigma+\Sigma_1}=\pm\iiint_\Omega\operatorname{div}\mathbf{F}\,\mathrm{d}V$（外侧取正、内侧取负）。</p>
<p><b>题型识别：</b></p><ul><li>看到 $\iint P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y$ 且 $P_x+Q_y+R_z$ 简单 → 高斯公式。</li><li>看到 $x=\sqrt{\cdots}$ 形式的曲面 → 它是绕 $x$ 轴的半个旋转面：补 $x=$ 常数的平面；三重积分用"绕 $x$ 轴"的柱坐标或垂直于 $x$ 轴的截面法。</li><li>补面垂直于某个坐标面 → 投影到该坐标面的那一项直接为 0。</li></ul>`,
      alt: R`<p><b>另解（先二后一，截面法）：</b>用垂直于 $x$ 轴的平面截 $\Omega$，截面 $D_x$ 是圆盘 $y^2+z^2\le\rho^2$，其中 $\rho^2=\frac{1-x^2}{3}$，$0\le x\le1$。在圆盘上</p>
$$\iint_{D_x}1\,\mathrm{d}y\,\mathrm{d}z=\pi\rho^2,\qquad\iint_{D_x}(y^2+z^2)\,\mathrm{d}y\,\mathrm{d}z=\int_0^{2\pi}\mathrm{d}\theta\int_0^\rho r^3\,\mathrm{d}r=\frac{\pi\rho^4}{2}.$$
<p>所以</p>
$$I=\int_0^1\left[\pi\cdot\frac{1-x^2}{3}+3\cdot\frac\pi2\cdot\frac{(1-x^2)^2}{9}\right]\mathrm{d}x=\frac\pi3\cdot\frac23+\frac\pi6\cdot\frac{8}{15}=\frac{2\pi}{9}+\frac{4\pi}{45}=\frac{14\pi}{45}.$$
<p>其中 $\frac{2\pi}{9}$ 正是半椭球的体积 $\frac12\cdot\frac43\pi\cdot1\cdot\frac{1}{\sqrt3}\cdot\frac{1}{\sqrt3}$，可以顺便检验。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 柱坐标三重积分 = 14π/45；另把 Σ 写成 x=g(y,z) 直接按投影公式 ∬(P - Q g_y - R g_z) dydz 数值积分 ≈ 0.977384 = 14π/45；体积部分 2π/9 与 4π/45 分别核对' },
      flags: []
    },

    /* ───────────────────────── 第 18 题 ───────────────────────── */
    {
      id: '2018-18', year: 2018, no: '第18题', type: '解答', score: 10,
      stem: R`已知微分方程 $y'+y=f(x)$，其中 $f(x)$ 是 $\mathbf{R}$ 上的连续函数．<br>(Ⅰ) 若 $f(x)=x$，求方程的通解；<br>(Ⅱ) 若 $f(x)$ 是周期为 $T$ 的函数，证明：方程存在唯一的以 $T$ 为周期的解．`,
      options: null,
      answer: R`(Ⅰ) $y=C\mathrm{e}^{-x}+x-1$（$C$ 为任意常数）；(Ⅱ) 唯一的以 $T$ 为周期的解为 $y=\mathrm{e}^{-x}\left[\dfrac{1}{\mathrm{e}^T-1}\displaystyle\int_0^T\mathrm{e}^tf(t)\,\mathrm{d}t+\int_0^x\mathrm{e}^tf(t)\,\mathrm{d}t\right]$（证明见解答）．`,
      figure: null,
      kp: ['ode.first', 'ode.linear', 'int.defcalc'],
      methods: ['一阶线性方程积分因子法', '解的结构（两解之差满足齐次方程）', '周期函数积分换元'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>(Ⅰ) 一阶线性微分方程的通解；(Ⅱ) 利用通解的结构研究解的性质——周期解的存在唯一性。</p>
<p><b>(Ⅰ) 的思路：</b>$y'+P(x)y=Q(x)$ 是一阶线性方程。乘上积分因子 $\mathrm{e}^{\int P\,\mathrm{d}x}$ 后，左端恰好变成一个乘积的导数，两边积分即可。</p>
<p><b>(Ⅱ) 的思路：</b>"以 $T$ 为周期的解"指的是 $y(x+T)=y(x)$ 对一切 $x$ 成立。通解里有一个任意常数 $C$，要证的就是：<b>恰好有一个 $C$</b> 使解成为周期函数。两个关键观察：</p>
<ul><li><b>平移不变：</b>$f$ 以 $T$ 为周期，所以若 $y(x)$ 是解，$y(x+T)$ 也是解——方程"察觉不到"自变量被平移了 $T$。</li><li><b>两解之差满足齐次方程：</b>$w(x)=y(x+T)-y(x)$ 满足 $w'+w=0$，所以 $w=K\mathrm{e}^{-x}$，它要么恒为 0，要么处处不为 0。因此"$y$ 是周期解" ⇔ $w\equiv0$ ⇔ 只需检查一个点：$w(0)=0$，即 $y(T)=y(0)$。</li></ul>
<p>于是"对一切 $x$ 成立"的条件被压缩成"一个点上的方程"，它是关于 $C$ 的一次方程，有且只有一个解——存在性与唯一性一并得到。</p>`,
      solution: R`<p><b>(Ⅰ) 第一步：乘积分因子。</b>方程为 $y'+y=x$，$P(x)=1$，积分因子 $\mathrm{e}^{\int1\,\mathrm{d}x}=\mathrm{e}^x$。两边乘以 $\mathrm{e}^x$：</p>
$$\mathrm{e}^xy'+\mathrm{e}^xy=x\mathrm{e}^x\iff(\mathrm{e}^xy)'=x\mathrm{e}^x.$$
<p><b>第二步：两边积分。</b>由分部积分 $\int x\mathrm{e}^x\,\mathrm{d}x=x\mathrm{e}^x-\mathrm{e}^x+C$，</p>
$$\mathrm{e}^xy=(x-1)\mathrm{e}^x+C\ \Longrightarrow\ y=C\mathrm{e}^{-x}+x-1\quad(C\text{ 为任意常数}).$$
<p><b>检验：</b>$y'=-C\mathrm{e}^{-x}+1$，$y'+y=-C\mathrm{e}^{-x}+1+C\mathrm{e}^{-x}+x-1=x$ ✓。</p>
<p><b>(Ⅱ) 第一步：写出通解。</b>同样乘积分因子 $\mathrm{e}^x$ 得 $(\mathrm{e}^xy)'=\mathrm{e}^xf(x)$。$f$ 连续，两边从 $0$ 到 $x$ 积分：</p>
$$y(x)=\mathrm{e}^{-x}\left[C+\int_0^x\mathrm{e}^tf(t)\,\mathrm{d}t\right],\qquad C=y(0).$$
<p>方程的每一个解都是这种形式，不同的解对应不同的 $C$。</p>
<p><b>第二步：平移后仍是解。</b>设 $y(x)$ 是任意一个解，令 $z(x)=y(x+T)$。由链式法则 $z'(x)=y'(x+T)$，于是</p>
$$z'(x)+z(x)=y'(x+T)+y(x+T)=f(x+T)=f(x),$$
<p>最后一步用到 $f$ 以 $T$ 为周期。所以 $z$ 也是方程的解。</p>
<p><b>第三步：两解之差满足齐次方程。</b>令 $w(x)=z(x)-y(x)=y(x+T)-y(x)$。两个方程相减得 $w'+w=0$，即 $(\mathrm{e}^xw)'=0$，所以 $\mathrm{e}^xw(x)$ 恒为常数 $\mathrm{e}^0w(0)$：</p>
$$w(x)=w(0)\,\mathrm{e}^{-x}=\big[y(T)-y(0)\big]\,\mathrm{e}^{-x}.$$
<p><b>第四步：化为一个点上的条件。</b>由上式，$y(x+T)=y(x)$ 对一切 $x$ 成立（即 $w\equiv0$）当且仅当 $y(T)=y(0)$。</p>
<p><b>第五步：解出唯一的 $C$。</b>由通解，$y(0)=C$，$y(T)=\mathrm{e}^{-T}\left[C+A\right]$，其中 $A=\displaystyle\int_0^T\mathrm{e}^tf(t)\,\mathrm{d}t$ 是一个确定的常数。于是</p>
$$y(T)=y(0)\iff\mathrm{e}^{-T}(C+A)=C\iff C\left(\mathrm{e}^T-1\right)=A\iff C=\frac{A}{\mathrm{e}^T-1}.$$
<p>周期 $T>0$，所以 $\mathrm{e}^T-1>0$，这样的 $C$ 存在且唯一。</p>
<p><b>第六步：结论。</b></p>
<ul><li><b>存在性：</b>取 $C=\dfrac{A}{\mathrm{e}^T-1}$，得到的解满足 $y(T)=y(0)$，由第四步，它以 $T$ 为周期：$$y^*(x)=\mathrm{e}^{-x}\left[\frac{1}{\mathrm{e}^T-1}\int_0^T\mathrm{e}^tf(t)\,\mathrm{d}t+\int_0^x\mathrm{e}^tf(t)\,\mathrm{d}t\right].$$</li><li><b>唯一性：</b>任何以 $T$ 为周期的解都满足 $y(T)=y(0)$，所以它的常数 $C=y(0)$ 只能等于 $\dfrac{A}{\mathrm{e}^T-1}$；而 $C$ 一旦确定，解就确定了。</li></ul>
<p>所以方程存在唯一的以 $T$ 为周期的解。证毕。</p>`,
      pitfalls: R`<ul><li><b>(Ⅰ) 只写特解</b>：$y=x-1$ 只是一个特解，"通解"必须带上齐次通解 $C\mathrm{e}^{-x}$。</li><li><b>(Ⅱ) 只证存在、不证唯一</b>：找到一个 $C$ 只说明了存在；唯一性要说明"任何周期解对应的 $C$ 都只能是这个值"。</li><li><b>误以为 $\mathrm{e}^tf(t)$ 也是周期函数</b>：它不是。做 $t=u+T$ 换元时会多出因子 $\mathrm{e}^T$。</li><li><b>把 $y(T)=y(0)$ 当作周期的定义</b>：对一般函数，$y(T)=y(0)$ 推不出周期性。本题之所以可以，是因为第三步证明了差 $w$ 必为 $K\mathrm{e}^{-x}$ 的形式。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>一阶线性方程 $y'+P(x)y=Q(x)$：通解 $y=\mathrm{e}^{-\int P\,\mathrm{d}x}\left[\int Q\,\mathrm{e}^{\int P\,\mathrm{d}x}\,\mathrm{d}x+C\right]$；证明题中写成变限积分形式 $y=\mathrm{e}^{-x}\left[C+\int_0^x\mathrm{e}^tf(t)\,\mathrm{d}t\right]$ 更好操作。</li><li>研究解的性质（周期、有界、极限）→ 先写出含 $C$ 的通解，再把性质翻译成关于 $C$ 的方程。</li><li>线性方程的结构：两个非齐次解之差是齐次方程的解。</li></ul>
<p><b>直观理解：</b>齐次解 $C\mathrm{e}^{-x}$ 随 $x$ 增大而衰减，就像一个有阻尼的系统：不管初值如何，"暂态"都会消失，只剩下与外力同周期的"稳态"响应——所以周期解恰有一个。</p>
<p><b>题型识别：</b></p><ul><li>看到"$f$ 以 $T$ 为周期，证明解以 $T$ 为周期" → 考虑 $y(x+T)$ 也是解，研究两者之差。</li><li>看到"证明存在唯一的……解" → 把条件化为关于任意常数 $C$ 的方程，说明它恰有一个解。</li><li>看到 $\int_T^{x+T}$ 与周期函数 → 换元 $t=u+T$ 把区间移回 $[0,x]$。</li></ul>`,
      alt: R`<p><b>另解（直接计算 $y(x+T)-y(x)$）：</b>由通解，</p>
$$y(x+T)=\mathrm{e}^{-x-T}\left[C+\int_0^T\mathrm{e}^tf(t)\,\mathrm{d}t+\int_T^{x+T}\mathrm{e}^tf(t)\,\mathrm{d}t\right].$$
<p>对最后一个积分令 $t=u+T$，并用 $f(u+T)=f(u)$：</p>
$$\int_T^{x+T}\mathrm{e}^tf(t)\,\mathrm{d}t=\int_0^x\mathrm{e}^{u+T}f(u)\,\mathrm{d}u=\mathrm{e}^T\int_0^x\mathrm{e}^uf(u)\,\mathrm{d}u.$$
<p>代回并记 $A=\int_0^T\mathrm{e}^tf(t)\,\mathrm{d}t$：</p>
$$y(x+T)=\mathrm{e}^{-x}\left[\mathrm{e}^{-T}(C+A)+\int_0^x\mathrm{e}^uf(u)\,\mathrm{d}u\right],\qquad y(x+T)-y(x)=\mathrm{e}^{-x}\left[\mathrm{e}^{-T}(C+A)-C\right].$$
<p>它对一切 $x$ 为 0 当且仅当 $\mathrm{e}^{-T}(C+A)=C$，即 $C=\dfrac{A}{\mathrm{e}^T-1}$，结论相同。</p>`,
      verify: { by: 'mixed', ok: true, note: 'sympy dsolve(y\'+y=x) 得 C1·e^(-x)+x-1；(Ⅱ) 为证明题，另用 sympy 对 f=sin x、cos²x、1（T=2π）代入唯一周期解公式，验证 y(x+T)-y(x)=0 且 y\'+y-f=0' },
      flags: []
    },

    /* ───────────────────────── 第 19 题 ───────────────────────── */
    {
      id: '2018-19', year: 2018, no: '第19题', type: '解答', score: 10,
      stem: R`设数列 $\{x_n\}$ 满足：$x_1>0$，$x_n\mathrm{e}^{x_{n+1}}=\mathrm{e}^{x_n}-1\ (n=1,2,\cdots)$．证明数列 $\{x_n\}$ 收敛，并求 $\lim\limits_{n\to\infty}x_n$．`,
      options: null,
      answer: R`数列 $\{x_n\}$ 单调递减且有下界 $0$，故收敛，且 $\lim\limits_{n\to\infty}x_n=0$．`,
      figure: null,
      kp: ['lim.seqcalc', 'lim.rules', 'diff.mvt'],
      methods: ['单调有界准则', '拉格朗日中值定理', '数学归纳法', '构造函数证明方程根唯一'],
      difficulty: 4,
      analysis: R`<p><b>这题考什么：</b>递推数列的极限：单调有界准则 + 递推式取极限；其中单调性的证明需要借助拉格朗日中值定理（或构造函数）。</p>
<p><b>先把递推式写成显式：</b>若 $x_n\ne0$，$x_n\mathrm{e}^{x_{n+1}}=\mathrm{e}^{x_n}-1$ 可写成</p>
$$\mathrm{e}^{x_{n+1}}=\frac{\mathrm{e}^{x_n}-1}{x_n}=\frac{\mathrm{e}^{x_n}-\mathrm{e}^0}{x_n-0}.$$
<p>右边正是函数 $\mathrm{e}^x$ 在区间 $[0,x_n]$ 上的<b>差商</b>（割线斜率）！拉格朗日中值定理说：割线斜率等于某个中间点处的导数 $\mathrm{e}^{\xi}$，$\xi\in(0,x_n)$。于是 $\mathrm{e}^{x_{n+1}}=\mathrm{e}^{\xi}$，即 $x_{n+1}=\xi$——<b>$x_{n+1}$ 就是中值定理里的那个中间点</b>，自然夹在 $0$ 与 $x_n$ 之间。为正、递减、有下界，一下子全有了。</p>
<p><b>为什么走"单调有界"这条路：</b>递推数列求极限的标准路线是：先证收敛（最常用单调有界准则），再在递推式两边取极限解出极限值。先猜一猜结果：若极限 $a$ 存在，应满足 $a\mathrm{e}^a=\mathrm{e}^a-1$，$a=0$ 显然是解。数值试算 $x_1=1$：$x_2\approx0.54$，$x_3\approx0.28$，$x_4\approx0.14$……确实单调减少趋于 0，而且大约每次减半。</p>`,
      solution: R`<p><b>第一步：用数学归纳法证明对一切 $n$ 有 $x_n>0$，并且 $x_{n+1} < x_n$。</b></p>
<p>$n=1$ 时 $x_1>0$ 已知。设 $x_n>0$，则可以两边除以 $x_n$，递推式化为</p>
$$\mathrm{e}^{x_{n+1}}=\frac{\mathrm{e}^{x_n}-1}{x_n}=\frac{\mathrm{e}^{x_n}-\mathrm{e}^0}{x_n-0}.$$
<p>函数 $\mathrm{e}^x$ 在 $[0,x_n]$ 上连续、在 $(0,x_n)$ 内可导，由拉格朗日中值定理，存在 $\xi_n\in(0,x_n)$，使</p>
$$\frac{\mathrm{e}^{x_n}-\mathrm{e}^0}{x_n-0}=\mathrm{e}^{\xi_n}.$$
<p>于是 $\mathrm{e}^{x_{n+1}}=\mathrm{e}^{\xi_n}$。$\mathrm{e}^x$ 严格单调递增（因而一一对应），所以 $x_{n+1}=\xi_n$，即</p>
$$0 < x_{n+1} < x_n.$$
<p>特别地 $x_{n+1}>0$，归纳完成。这同时证明了：数列各项为正，并且<b>严格单调递减</b>。</p>
<p><b>第二步：由单调有界准则得收敛。</b>$\{x_n\}$ 单调递减且有下界 $0$，由单调有界准则，$\lim\limits_{n\to\infty}x_n$ 存在，记为 $a$。由极限的保号性（各项 $x_n>0$，极限 $a\ge0$），得 $a\ge0$。</p>
<p><b>第三步：两边取极限。</b>在 $x_n\mathrm{e}^{x_{n+1}}=\mathrm{e}^{x_n}-1$ 中令 $n\to\infty$：$x_n\to a$，$x_{n+1}\to a$，由 $\mathrm{e}^x$ 的连续性，</p>
$$a\mathrm{e}^a=\mathrm{e}^a-1.$$
<p><b>第四步：证明此方程在 $[0,+\infty)$ 上只有 $a=0$。</b>令 $g(t)=t\mathrm{e}^t-\mathrm{e}^t+1$，则 $g(0)=0$，且</p>
$$g'(t)=\mathrm{e}^t+t\mathrm{e}^t-\mathrm{e}^t=t\mathrm{e}^t>0\quad(t>0),$$
<p>所以 $g$ 在 $[0,+\infty)$ 上严格单调递增，$t>0$ 时 $g(t)>g(0)=0$。而 $a$ 满足 $g(a)=0$ 且 $a\ge0$，只能 $a=0$。</p>
<p><b>结论：</b>数列 $\{x_n\}$ 收敛，且</p>
$$\lim_{n\to\infty}x_n=0.$$`,
      pitfalls: R`<ul><li><b>先除后证</b>：变形 $\mathrm{e}^{x_{n+1}}=\frac{\mathrm{e}^{x_n}-1}{x_n}$ 需要 $x_n\ne0$，而 $x_n>0$ 本身要靠归纳得到，不能默认。</li><li><b>不证收敛就解方程</b>：假设极限存在、解出 $a=0$ 就当作答案，是不完整的——收敛性才是本题的主体（反例：$x_{n+1}=-x_n$ 也能"解出" $a=0$，但 $x_1\ne0$ 时数列发散）。</li><li><b>在对数形式下取极限</b>：写成 $x_{n+1}=\ln\frac{\mathrm{e}^{x_n}-1}{x_n}$ 再取极限，得到 $a=\ln\frac{\mathrm{e}^a-1}{a}$，它在 $a=0$ 处无定义，会卡住。应在原来的乘积形式上取极限。</li><li><b>不证根唯一</b>：取极限后只说"$a=0$ 是解"还不够，要说明 $[0,+\infty)$ 上没有其他解（$a\ge0$ 来自 $x_n>0$）。</li></ul>`,
      summary: R`<p><b>方法要点（递推数列极限三部曲）：</b>①证有界（常用归纳法）；②证单调（作差、作商、借助函数或中值定理）；③单调有界 ⇒ 收敛，递推式两边取极限解出极限值，并用取值范围排除多余的根。</p>
<p><b>本题亮点：</b>$\frac{\mathrm{e}^{x_n}-1}{x_n}$ 是差商 → 想到拉格朗日中值定理，$x_{n+1}$ 恰好是中值点 $\xi\in(0,x_n)$。更进一步，由 $\frac{\mathrm{e}^x-1}{x}=1+\frac x2+o(x)$ 可得 $x_{n+1}=\ln\left(1+\frac{x_n}{2}+o(x_n)\right)\approx\frac{x_n}{2}$——中值点大约落在区间中点，这解释了数值上"每次减半"的现象。</p>
<p><b>题型识别：</b></p><ul><li>看到递推式 + "证明收敛并求极限" → 单调有界准则。</li><li>看到 $\frac{f(b)-f(a)}{b-a}$ 形式的式子（尤其 $\frac{\mathrm{e}^x-1}{x}$、$\frac{\ln(1+x)}{x}$）→ 想到拉格朗日中值定理。</li><li>取极限后得到超越方程 → 构造函数，用单调性证明根唯一。</li></ul>`,
      alt: R`<p><b>另解（不用中值定理，直接构造函数）：</b>设 $x_n>0$。</p>
<ul><li><b>正性：</b>由 $\mathrm{e}^t>1+t\ (t\ne0)$ 得 $\mathrm{e}^{x_n}-1>x_n$，所以 $\mathrm{e}^{x_{n+1}}=\frac{\mathrm{e}^{x_n}-1}{x_n}>1$，$x_{n+1}>0$。</li><li><b>单调：</b>$x_{n+1} < x_n\iff\mathrm{e}^{x_{n+1}} < \mathrm{e}^{x_n}\iff\frac{\mathrm{e}^{x_n}-1}{x_n} < \mathrm{e}^{x_n}\iff\mathrm{e}^{x_n}-1 < x_n\mathrm{e}^{x_n}\iff g(x_n)>0$，其中 $g(t)=t\mathrm{e}^t-\mathrm{e}^t+1$（第三个等价用到 $x_n>0$），正解第四步已证 $t>0$ 时 $g(t)>0$。</li></ul>
<p>这个方法与正解共用同一个辅助函数 $g$，书写更"机械"，想不到中值定理时可以用它。</p>`,
      verify: { by: 'mixed', ok: true, note: '证明题。mpmath 取 x1=0.1,1,5,20 迭代 12 步，数列均严格递减趋于 0，且后期 x_{n+1}/x_n → 1/2；sympy 验证 g(t)=te^t-e^t+1 的导数为 te^t' },
      flags: []
    }
  ];
});
