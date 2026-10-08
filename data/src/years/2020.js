// 2020 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 14 题：选择 1、2、3、4、6（第 6 题为空间直线与向量的交叉题）；填空 9、10、11、12；解答 15、16、17、18、19
registerYear(2020, function (R) {
  return [
    /* ───────────── 第1题 变限积分型无穷小比阶 ───────────── */
    {
      id: '2020-1', year: 2020, no: '第1题', type: '选择', score: 4,
      stem: R`当 $x\to0^{+}$ 时，下列无穷小量中最高阶的是（　　）.`,
      options: [
        R`$\displaystyle\int_0^x\left(\mathrm{e}^{t^2}-1\right)\mathrm{d}t$`,
        R`$\displaystyle\int_0^x\ln\left(1+\sqrt{t^3}\right)\mathrm{d}t$`,
        R`$\displaystyle\int_0^{\sin x}\sin t^2\,\mathrm{d}t$`,
        R`$\displaystyle\int_0^{1-\cos x}\sqrt{\sin^3t}\,\mathrm{d}t$`
      ],
      answer: 'D',
      figure: null,
      kp: ['lim.inf', 'int.ftc', 'diff.lhopital'],
      methods: ['变限积分求导', '洛必达法则', '等价无穷小代换', '"求导降一阶"比阶法'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>无穷小阶的比较，对象是四个<b>变限积分</b>。"最高阶"就是趋于 $0$ 最快的那一个，也就是写成 $C x^k$ 时指数 $k$ 最大的那一个。</p>
<p><b>难点在哪：</b>这四个积分都算不出初等的原函数（比如 $\int\mathrm{e}^{t^2}\mathrm{d}t$ 根本不是初等函数），所以不能"先积出来再看阶"。</p>
<p><b>为什么想到求导：</b>变限积分最大的特点是——它本身难算，但它的<b>导数一眼就能写出来</b>（微积分基本定理）。而函数与它导数的阶数之间有一个非常干净的关系：</p>
$$F(x)\sim Cx^k\ \Longleftrightarrow\ F'(x)\sim Ckx^{k-1}\quad(\text{在 }F(0)=0\text{ 的前提下}).$$
<p>直观上，$x^k$ 求一次导变成 $kx^{k-1}$，阶数降 1；反过来，积分一次阶数升 1。于是策略就是：<b>对每个选项求导 → 看导数是几阶 → 再加 1</b>。这是处理"变限积分比阶"的通法。</p>
<p><b>一个可以直接套用的口诀：</b>若被积函数 $g(t)\sim t^m$，积分上限 $u(x)\sim c\,x^p$，那么 $\displaystyle\int_0^{u(x)}g(t)\,\mathrm{d}t$ 的阶数是 $p(m+1)$——"被积函数的阶加一，再乘上限的阶"。</p>`,
      solution: R`<p><b>第一步：把"求导降一阶"说严格。</b>设 $F(x)=\displaystyle\int_0^{u(x)}g(t)\,\mathrm{d}t$，$u(0)=0$，则 $F(0)=0$。如果算出 $F'(x)\sim Cx^{k-1}$（$x\to0^+$，$C\ne0$），那么 $\dfrac{F(x)}{x^k}$ 是 $\dfrac00$ 型，由洛必达法则</p>
$$\lim_{x\to0^+}\frac{F(x)}{x^k}=\lim_{x\to0^+}\frac{F'(x)}{kx^{k-1}}=\frac Ck\ne0,$$
<p>所以 $F(x)\sim\dfrac Ck x^k$，$F$ 是 $k$ 阶无穷小。下面逐个求导（变限积分求导 = 被积函数在上限处的值 × 上限的导数）。</p>
<p><b>第二步：选项 (A)。</b></p>
$$F_A'(x)=\mathrm{e}^{x^2}-1\sim x^2,$$
<p>导数 2 阶，所以 $F_A$ 是 <b>3 阶</b>，$F_A\sim\frac13x^3$。</p>
<p><b>第三步：选项 (B)。</b>注意 $t\geqslant0$ 时 $\sqrt{t^3}=t^{3/2}$：</p>
$$F_B'(x)=\ln\left(1+x^{3/2}\right)\sim x^{3/2},$$
<p>导数 $\frac32$ 阶，所以 $F_B$ 是 <b>$\frac52$ 阶</b>，$F_B\sim\frac25x^{5/2}$。</p>
<p><b>第四步：选项 (C)。</b>上限是 $\sin x$，求导要乘 $(\sin x)'=\cos x$：</p>
$$F_C'(x)=\sin\left(\sin^2x\right)\cdot\cos x\sim\sin^2x\cdot1\sim x^2,$$
<p>这里用了 $\sin(\sin^2x)\sim\sin^2x$（因为 $\sin^2x\to0$）以及 $\cos x\to1$。导数 2 阶，所以 $F_C$ 是 <b>3 阶</b>，$F_C\sim\frac13x^3$。</p>
<p><b>第五步：选项 (D)。</b>上限是 $1-\cos x$，求导要乘 $(1-\cos x)'=\sin x$：</p>
$$F_D'(x)=\sqrt{\sin^3(1-\cos x)}\cdot\sin x.$$
<p>由 $1-\cos x\sim\frac{x^2}{2}$，且 $\sin u\sim u$（$u=1-\cos x\to0$），得 $\sin(1-\cos x)\sim\frac{x^2}{2}$，于是</p>
$$\sqrt{\sin^3(1-\cos x)}\sim\left(\frac{x^2}{2}\right)^{3/2}=\frac{x^3}{2\sqrt2},\qquad F_D'(x)\sim\frac{x^3}{2\sqrt2}\cdot x=\frac{x^4}{2\sqrt2}.$$
<p>导数 4 阶，所以 $F_D$ 是 <b>5 阶</b>，$F_D\sim\dfrac{x^5}{10\sqrt2}=\dfrac{\sqrt2}{20}x^5$。</p>
<p><b>第六步：比较。</b>四个阶数分别是 $3,\ \frac52,\ 3,\ 5$，最大的是 (D) 的 $5$，选 <b>D</b>。</p>
<p><b>错误选项为什么错：</b>(A) 和 (C) 都是 3 阶，彼此同阶，都比 (D) 低两阶；(B) 只有 $\frac52$ 阶，是四个里阶数最低的，恰好是"最低阶"而不是"最高阶"。</p>`,
      pitfalls: R`<ul><li><b>(D) 的上限阶数看错：</b>$1-\cos x$ 是 <b>2 阶</b>（$\sim\frac{x^2}{2}$），如果当成 1 阶，会算出 $\frac52$ 阶，从而误判。</li><li><b>(B) 的 $\sqrt{t^3}$ 当成 $t^3$：</b>$\sqrt{t^3}=t^{3/2}$，被积函数是 $\frac32$ 阶，积分后是 $\frac52$ 阶。</li><li><b>求导忘乘上限的导数：</b>(C) 漏乘 $\cos x$ 影响不大（它趋于 1），但 (D) 漏乘 $\sin x$ 会少一阶，变成 4 阶。</li><li><b>"高阶"与"低阶"方向搞反：</b>阶数越大，趋于 0 越快，才叫"越高阶"。</li></ul>`,
      summary: R`<p><b>方法要点：</b>变限积分 $F(x)=\int_0^{u(x)}g(t)\,\mathrm{d}t$ 比阶，用"<b>求导降一阶</b>"：$F'(x)=g(u(x))u'(x)$ 是几阶，$F$ 就是几加一阶。等价地：$g(t)\sim t^m$，$u(x)\sim cx^p$ $\Rightarrow$ $F$ 是 $p(m+1)$ 阶。</p>
<p><b>题型识别：</b></p><ul><li>看到"无穷小比阶"且对象是变限积分 → 想到求导（或口诀 $p(m+1)$）。</li><li>看到上限是 $\sin x$、$\tan x$、$\ln(1+x)$ → 1 阶；看到 $1-\cos x$、$x-\ln(1+x)$ → 2 阶；看到 $x-\sin x$ → 3 阶。</li><li>被积函数先用等价无穷小化成 $t^m$，根式要化成分数指数。</li></ul>`,
      alt: R`<p><b>"等价替换进积分"的快速估算：</b>把被积函数和上限都换成等价无穷小再积分，例如</p>$$\int_0^{1-\cos x}\sqrt{\sin^3t}\,\mathrm{d}t\ \sim\ \int_0^{x^2/2}t^{3/2}\,\mathrm{d}t=\frac25\left(\frac{x^2}{2}\right)^{5/2}=\frac{\sqrt2}{20}x^5.$$<p>这种做法在被积函数连续、正负号固定时是成立的，其严格性正是由上面"求导 + 洛必达"的论证保证的。考场上可以用它快速出答案，心里要知道它为什么对。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 对四个选项分别求导后计算 lim F\'(x)/(k x^(k-1))：A(k=3) 得 1/3，B(k=5/2) 得 2/5，C(k=3) 得 1/3，D(k=5) 得 √2/20，确认阶数为 3、5/2、3、5' },
      flags: []
    },

    /* ───────────── 第2题 可导与极限条件 ───────────── */
    {
      id: '2020-2', year: 2020, no: '第2题', type: '选择', score: 4,
      stem: R`设函数 $f(x)$ 在区间 $(-1,1)$ 内有定义，且 $\lim\limits_{x\to0}f(x)=0$，则（　　）.`,
      options: [
        R`当 $\lim\limits_{x\to0}\dfrac{f(x)}{\sqrt{|x|}}=0$ 时，$f(x)$ 在 $x=0$ 处可导`,
        R`当 $\lim\limits_{x\to0}\dfrac{f(x)}{x^2}=0$ 时，$f(x)$ 在 $x=0$ 处可导`,
        R`当 $f(x)$ 在 $x=0$ 处可导时，$\lim\limits_{x\to0}\dfrac{f(x)}{\sqrt{|x|}}=0$`,
        R`当 $f(x)$ 在 $x=0$ 处可导时，$\lim\limits_{x\to0}\dfrac{f(x)}{x^2}=0$`
      ],
      answer: 'C',
      figure: null,
      kp: ['diff.def', 'lim.inf', 'lim.cont'],
      methods: ['导数定义', '可导必连续', '构造反例', '无穷小阶的比较'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>导数的定义、"可导必连续"，以及<b>极限值与函数值的区别</b>。</p>
<p><b>第一个关键观察：</b>题目只说 $\lim\limits_{x\to0}f(x)=0$，<b>没说 $f(0)$ 等于多少</b>。而导数的定义</p>
$$f'(0)=\lim_{x\to0}\frac{f(x)-f(0)}{x-0}$$
<p>里必须用到 $f(0)$。选项 (A)(B) 给的条件全是极限条件，极限根本"看不见" $x=0$ 这一点的函数值——所以只要把 $f(0)$ 改成别的数，可导性就被破坏了。这让我们立刻怀疑 (A)(B)。</p>
<p><b>第二个关键观察（阶数思维）：</b>如果 $f$ 在 $0$ 处可导，那么 $f$ 连续，$f(0)=\lim f(x)=0$，并且</p>
$$f(x)=f'(0)x+o(x),$$
<p>也就是说 $f(x)$ 是"<b>不低于 1 阶</b>"的无穷小（$f'(0)\ne0$ 时恰好 1 阶，$f'(0)=0$ 时更高阶）。拿它去除以 $\sqrt{|x|}$（$\frac12$ 阶），分子阶数更高，商趋于 $0$——这就是 (C)；拿它去除以 $x^2$（2 阶），分母阶数可能更高，商不一定有极限——这就是 (D) 失败的原因。</p>`,
      solution: R`<p><b>第一步：从"可导"能推出什么。</b>设 $f$ 在 $x=0$ 处可导。可导必连续，所以 $f(0)=\lim\limits_{x\to0}f(x)=0$。于是导数定义变成</p>
$$f'(0)=\lim_{x\to0}\frac{f(x)-0}{x}=\lim_{x\to0}\frac{f(x)}{x}.$$
<p><b>第二步：证明 (C) 正确。</b>当 $x\ne0$ 时，把要求的式子拆成两个因子：</p>
$$\frac{f(x)}{\sqrt{|x|}}=\frac{f(x)}{x}\cdot\frac{x}{\sqrt{|x|}}.$$
<p>第一个因子 $\to f'(0)$（有限数）；第二个因子 $\frac{x}{\sqrt{|x|}}=\pm\sqrt{|x|}$（$x>0$ 取正、$x<0$ 取负），其绝对值 $\sqrt{|x|}\to0$，所以它趋于 $0$。由极限乘法法则，</p>
$$\lim_{x\to0}\frac{f(x)}{\sqrt{|x|}}=f'(0)\cdot0=0.$$
<p>(C) 正确。</p>
<p><b>第三步：逐一否定其余选项（构造反例）。</b></p>
<p><b>(A) 错。</b>取 $f(x)=|x|$。则 $\lim\limits_{x\to0}|x|=0$；$\dfrac{|x|}{\sqrt{|x|}}=\sqrt{|x|}\to0$，条件满足。但 $|x|$ 在 $0$ 处右导数为 $1$、左导数为 $-1$，不可导。原因：条件只说明 $f$ 比 $\frac12$ 阶高，而"比 $\frac12$ 阶高"远不足以保证左右两侧的变化率一致。</p>
<p><b>(B) 错。</b>取</p>
$$f(x)=\begin{cases}0, & x\ne0,\\ 1, & x=0.\end{cases}$$
<p>则 $\lim\limits_{x\to0}f(x)=0$；当 $x\ne0$ 时 $\dfrac{f(x)}{x^2}=0$，所以 $\lim\limits_{x\to0}\dfrac{f(x)}{x^2}=0$，条件满足。但 $f(0)=1\ne\lim\limits_{x\to0}f(x)$，$f$ 在 $0$ 处不连续，当然不可导。</p>
<p>值得体会：(B) 的条件其实很"强"（$f$ 比 $x^2$ 还高阶），之所以仍然推不出可导，<b>唯一的原因就是 $f(0)$ 未知</b>。如果再补上 $f(0)=0$，则 $\dfrac{f(x)-f(0)}{x}=x\cdot\dfrac{f(x)}{x^2}\to0\cdot0=0$，$f'(0)=0$ 存在，(B) 就对了。而 (A) 即使补上 $f(0)=0$ 也不对（反例 $|x|$ 本来就满足 $f(0)=0$）。</p>
<p><b>(D) 错。</b>取 $f(x)=x$，它在 $0$ 处可导，但 $\dfrac{f(x)}{x^2}=\dfrac1x$，$x\to0^+$ 时趋于 $+\infty$，$x\to0^-$ 时趋于 $-\infty$，极限不存在。</p>
<p>综上，选 <b>C</b>。</p>`,
      pitfalls: R`<ul><li><b>把"$\lim f(x)=0$"当成"$f(0)=0$"：</b>这是本题最大的陷阱，会误选 (B)。极限描述的是"$x$ 靠近 0 时"，与 $x=0$ 这一点的函数值无关。</li><li><b>以为分母阶数越高、条件越强，就越能推出可导：</b>对极限条件而言确实越强，但再强也弥补不了"$f(0)$ 未知"这个缺口。</li><li>证 (C) 时写成 $\dfrac{f(x)}{\sqrt{|x|}}=\dfrac{f(x)}{x}\cdot\sqrt{|x|}$，丢了 $x&lt;0$ 时的负号；虽然不影响结果为 0，但推导要严谨。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>可导 $\Rightarrow$ 连续 $\Rightarrow$ $f(0)=\lim\limits_{x\to0}f(x)$；可导 $\Leftrightarrow$ $f(x)=f(0)+f'(0)x+o(x)$。</li><li>可导的 $f$（且 $f(0)=0$）是不低于 1 阶的无穷小：除以低于 1 阶的量趋于 0，除以高于 1 阶的量不一定有极限。</li></ul>
<p><b>题型识别：</b></p><ul><li>看到"由极限条件推可导" → 先问：$f(0)$ 已知吗？未知就用"修改一点函数值"构造反例。</li><li>看到"由可导推某个极限" → 把 $f(x)$ 写成 $f'(0)x+o(x)$，比较分子分母的阶。</li><li>抽象函数选择题的常用反例库：$|x|$（连续不可导）、$x$（最简单的可导函数）、"去心处为 0、该点为 1"（极限存在但不连续）。</li></ul>`,
      verify: { by: 'mixed', ok: true, note: '证明 (C) 正确；sympy 验证反例：lim |x|/√|x| = 0，lim x/x² 在 0⁺、0⁻ 分别为 +∞、−∞；(B) 反例 f(x)=0(x≠0), f(0)=1 手工核对' },
      flags: ['参考解析否定 (B) 时所举反例 f(x)=x²(x≠0)、f(0)=2 并不满足 lim f(x)/x²=0（该比值恒为 1），反例有误；本文改用 f(x)=0(x≠0)、f(0)=1，结论 (C) 不变']
    },

    /* ───────────── 第3题 二元函数可微与切平面法向量 ───────────── */
    {
      id: '2020-3', year: 2020, no: '第3题', type: '选择', score: 4,
      stem: R`设函数 $f(x,y)$ 在点 $(0,0)$ 处可微，$f(0,0)=0$，$\mathbf{n}=\left.\left(\dfrac{\partial f}{\partial x},\dfrac{\partial f}{\partial y},-1\right)\right|_{(0,0)}$，非零向量 $\mathbf{\alpha}$ 与 $\mathbf{n}$ 垂直，则（　　）.`,
      options: [
        R`$\lim\limits_{(x,y)\to(0,0)}\dfrac{|\mathbf{n}\cdot(x,y,f(x,y))|}{\sqrt{x^2+y^2}}$ 存在`,
        R`$\lim\limits_{(x,y)\to(0,0)}\dfrac{|\mathbf{n}\times(x,y,f(x,y))|}{\sqrt{x^2+y^2}}$ 存在`,
        R`$\lim\limits_{(x,y)\to(0,0)}\dfrac{|\mathbf{\alpha}\cdot(x,y,f(x,y))|}{\sqrt{x^2+y^2}}$ 存在`,
        R`$\lim\limits_{(x,y)\to(0,0)}\dfrac{|\mathbf{\alpha}\times(x,y,f(x,y))|}{\sqrt{x^2+y^2}}$ 存在`
      ],
      answer: 'A',
      figure: null,
      kp: ['mdiff.diffable', 'mdiff.geo', 'vec.vector'],
      methods: ['全微分的定义', '切平面法向量', '数量积与向量积', '沿不同路径取极限构造反例'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>二元函数<b>可微的定义</b>，以及它的几何意义（切平面），外加向量的数量积、向量积运算。</p>
<p><b>第一步永远是"翻译条件"：</b>记 $A=f_x(0,0)$，$B=f_y(0,0)$，$\rho=\sqrt{x^2+y^2}$。$f$ 在 $(0,0)$ 可微、且 $f(0,0)=0$，意思是</p>
$$f(x,y)=Ax+By+o(\rho)\quad\Longleftrightarrow\quad\lim_{(x,y)\to(0,0)}\frac{f(x,y)-Ax-By}{\rho}=0.$$
<p><b>再看选项 (A) 的分子：</b>$\mathbf n=(A,B,-1)$，所以</p>
$$\mathbf n\cdot(x,y,f(x,y))=Ax+By-f(x,y),$$
<p>这恰好就是可微定义里的那个"余项"（差一个负号）。所以 (A) 几乎就是定义本身。</p>
<p><b>几何图像（理解透彻的关键）：</b>曲面 $z=f(x,y)$ 在原点的切平面是 $z=Ax+By$，即 $Ax+By-z=0$，它的法向量正是 $\mathbf n=(A,B,-1)$。向量 $(x,y,f(x,y))$ 是从原点 $O$ 指向曲面上点 $P$ 的向量 $\overrightarrow{OP}$。于是 $\dfrac{|\mathbf n\cdot\overrightarrow{OP}|}{|\mathbf n|}$ 就是<b>点 $P$ 到切平面的距离</b>。可微的几何含义就是：曲面上的点到切平面的距离，比它的水平距离 $\rho$ 还要高阶地趋于 0——"曲面在切点附近紧紧贴着切平面"。</p>
<p><b>其他选项怎么处理：</b>"存在"是一个对所有满足条件的 $f$ 和 $\mathbf\alpha$ 都要成立的断言，只需一个反例就能否定。最简单的可微函数就是平面 $f=0$、$f=x$，拿它们试。</p>`,
      solution: R`<p><b>第一步：写出可微的定义。</b>记 $A=f_x(0,0)$，$B=f_y(0,0)$，$\rho=\sqrt{x^2+y^2}$。因为 $f$ 在 $(0,0)$ 可微且 $f(0,0)=0$，所以</p>
$$\lim_{(x,y)\to(0,0)}\frac{f(x,y)-Ax-By}{\rho}=0.$$
<p><b>第二步：(A) 正确。</b>$\mathbf n=(A,B,-1)$，数量积</p>
$$\mathbf n\cdot(x,y,f(x,y))=Ax+By-f(x,y)=-\bigl[f(x,y)-Ax-By\bigr],$$
<p>因此</p>
$$\lim_{(x,y)\to(0,0)}\frac{|\mathbf n\cdot(x,y,f(x,y))|}{\rho}=\lim_{(x,y)\to(0,0)}\left|\frac{f(x,y)-Ax-By}{\rho}\right|=0,$$
<p>极限存在（等于 0）。</p>
<p><b>第三步：(B) 错，反例 $f(x,y)=x$。</b>它处处可微，$f(0,0)=0$，$A=1$，$B=0$，$\mathbf n=(1,0,-1)$，$(x,y,f)=(x,y,x)$。向量积</p>
$$\mathbf n\times(x,y,x)=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\1&0&-1\\x&y&x\end{vmatrix}=\bigl(0\cdot x-(-1)y\bigr)\mathbf i-\bigl(1\cdot x-(-1)x\bigr)\mathbf j+\bigl(1\cdot y-0\cdot x\bigr)\mathbf k=(y,\,-2x,\,y),$$
<p>模长 $\sqrt{4x^2+2y^2}$。沿 $y=0$ 趋于原点时 $\dfrac{2|x|}{|x|}=2$；沿 $x=0$ 趋于原点时 $\dfrac{\sqrt2|y|}{|y|}=\sqrt2$。两条路径极限不同，二重极限不存在。</p>
<p>为什么会这样：$\overrightarrow{OP}$ 几乎躺在切平面里、几乎与 $\mathbf n$ 垂直，所以 $|\mathbf n\times\overrightarrow{OP}|\approx|\mathbf n|\cdot|\overrightarrow{OP}|$，而 $\dfrac{|\overrightarrow{OP}|}{\rho}$ 随方向变化（切平面是斜的，不同方向上"爬升"不同）。</p>
<p><b>第四步：(C) 错，反例 $f(x,y)\equiv0$，$\mathbf\alpha=(1,0,0)$。</b>此时 $\mathbf n=(0,0,-1)$，$\mathbf\alpha\cdot\mathbf n=0$，$\mathbf\alpha$ 是与 $\mathbf n$ 垂直的非零向量，符合题设。$(x,y,f)=(x,y,0)$，</p>
$$\frac{|\mathbf\alpha\cdot(x,y,0)|}{\rho}=\frac{|x|}{\sqrt{x^2+y^2}},$$
<p>沿 $y=0$ 极限为 $1$，沿 $x=0$ 极限为 $0$，极限不存在。直观上，$\mathbf\alpha$ 是切平面内的一个方向，$\mathbf\alpha\cdot\overrightarrow{OP}$ 衡量 $P$ 沿 $\mathbf\alpha$ 方向走了多远，它与 $\rho$ 的比值就是方向夹角的余弦，当然随方向而变。</p>
<p><b>第五步：(D) 错，同一个反例。</b></p>
$$\mathbf\alpha\times(x,y,0)=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\1&0&0\\x&y&0\end{vmatrix}=(0,\,0,\,y),\qquad\frac{|y|}{\sqrt{x^2+y^2}},$$
<p>沿 $y=0$ 极限为 $0$，沿 $x=0$ 极限为 $1$，不存在。</p>
<p>综上，选 <b>A</b>。</p>`,
      pitfalls: R`<ul><li><b>认不出 $\mathbf n$ 是切平面的法向量</b>，于是不会把 $\mathbf n\cdot(x,y,f)$ 翻译成可微定义中的余项，只能硬算。</li><li><b>把"可微"和"偏导数存在"混为一谈：</b>只有偏导存在推不出 $f=Ax+By+o(\rho)$。</li><li><b>向量积展开出错：</b>三阶行列式按第一行展开时，$\mathbf j$ 的系数前有负号。</li><li><b>以为某个特殊例子里极限存在就说明选项对：</b>选择题的"则……"是必然性断言，举出一个反例即可否定；但要否定，例子必须满足全部题设（例如 $\mathbf\alpha$ 必须非零且与 $\mathbf n$ 垂直）。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>可微定义：$\Delta z=f_x\Delta x+f_y\Delta y+o(\rho)$；判断可微就看 $\lim\dfrac{\Delta z-f_x\Delta x-f_y\Delta y}{\rho}$ 是否为 0。</li><li>曲面 $z=f(x,y)$ 的切平面法向量是 $(f_x,f_y,-1)$；$\dfrac{|\mathbf n\cdot\overrightarrow{OP}|}{|\mathbf n|}$ 是点到切平面的距离。</li></ul>
<p><b>题型识别：</b></p><ul><li>看到 $(f_x,f_y,-1)$ → 想到切平面法向量 → 想到可微的几何意义。</li><li>看到"$\dfrac{\cdots}{\sqrt{x^2+y^2}}$ 的极限" → 想到可微定义中的 $o(\rho)$。</li><li>二重极限"不存在"→ 找两条路径（通常是两条坐标轴或 $y=kx$）得到不同极限；构造可微函数的反例优先用平面 $z=0$、$z=x$。</li></ul>`,
      verify: { by: 'mixed', ok: true, note: '(A) 由可微定义直接推出；sympy 计算反例：f=x 时 n×v=(y,−2x,y)，|n×v|/ρ 沿 x 轴→2、沿 y 轴→√2；f≡0、α=(1,0,0) 时 C 的比值沿两轴→1、0，D 的 α×v=(0,0,y) 比值沿两轴→0、1' },
      flags: ['OCR 中粗体 n、α（\\pmb）按格式要求改为 \\mathbf；OCR 漏掉了 (D) 的选项字母，按顺序补为 (D)']
    },

    /* ───────────── 第4题 收敛半径与子级数 ───────────── */
    {
      id: '2020-4', year: 2020, no: '第4题', type: '选择', score: 4,
      stem: R`设 $R$ 为幂级数 $\sum\limits_{n=1}^{\infty}a_nx^n$ 的收敛半径，$r$ 是实数，则（　　）.`,
      options: [
        R`当 $\sum\limits_{n=1}^{\infty}a_{2n}r^{2n}$ 发散时，$|r|\geqslant R$`,
        R`当 $\sum\limits_{n=1}^{\infty}a_{2n}r^{2n}$ 收敛时，$|r|\leqslant R$`,
        R`当 $|r|\geqslant R$ 时，$\sum\limits_{n=1}^{\infty}a_{2n}r^{2n}$ 发散`,
        R`当 $|r|\leqslant R$ 时，$\sum\limits_{n=1}^{\infty}a_{2n}r^{2n}$ 收敛`
      ],
      answer: 'A',
      figure: null,
      kp: ['series.power', 'series.alt', 'series.positive'],
      methods: ['阿贝尔定理', '绝对收敛级数的子级数', '逆否命题', '构造反例'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>收敛半径 $R$ 的准确含义（阿贝尔定理），以及"从一个级数中抽出一部分项"之后敛散性如何变化。</p>
<p><b>先把 $R$ 的含义说清楚：</b>收敛半径 $R$ 告诉我们三件事——</p>
<ul><li>$|x|&lt;R$：$\sum a_nx^n$ <b>绝对收敛</b>；</li><li>$|x|>R$：$\sum a_nx^n$ 发散；</li><li>$|x|=R$：什么都不知道，要具体分析。</li></ul>
<p><b>再看 $\sum a_{2n}r^{2n}$ 是什么：</b>它是把 $\sum a_nr^n$ 的<b>偶数项</b>单独挑出来组成的级数（子级数）。子级数的敛散性和原级数有什么关系？</p>
<ul><li>原级数<b>绝对收敛</b> ⇒ 任何子级数都收敛（正项级数部分和更小，当然有界）。</li><li>原级数发散 ⇒ 子级数可能收敛也可能发散（比如偶数项全是 0）。</li></ul>
<p>所以唯一能可靠"传递"的信息是：<b>$|r|&lt;R$ 时偶数项子级数一定收敛</b>。选项 (A) 正好是这句话的逆否命题。其余选项都试图在 $|r|\geqslant R$ 这个"信息不传递"的区域下结论，用反例打掉即可。</p>`,
      solution: R`<p><b>第一步：证明"若 $|r|&lt;R$，则 $\sum a_{2n}r^{2n}$ 收敛"。</b>由阿贝尔定理，$|r|&lt;R$ 时 $\sum\limits_{k=1}^\infty|a_kr^k|$ 收敛，设其和为 $S$。对正项级数 $\sum|a_{2n}r^{2n}|$，它的前 $N$ 项部分和满足</p>
$$\sum_{n=1}^{N}|a_{2n}r^{2n}|\leqslant\sum_{k=1}^{2N}|a_kr^k|\leqslant S,$$
<p>因为左边只是右边的一部分项（全是非负数）。正项级数部分和有界 ⇒ 收敛，所以 $\sum a_{2n}r^{2n}$ 绝对收敛，从而收敛。</p>
<p><b>第二步：(A) 正确。</b>第一步的命题"$|r|&lt;R\Rightarrow$ 收敛"，其逆否命题就是"发散 $\Rightarrow|r|\geqslant R$"，即 (A)。原命题与逆否命题同真同假。</p>
<p><b>第三步：(B)(C) 错，反例：奇数项为 1、偶数项为 0。</b>取 $a_n=\begin{cases}1,&n\text{ 为奇数},\\0,&n\text{ 为偶数},\end{cases}$ 则</p>
$$\sum_{n=1}^\infty a_nx^n=x+x^3+x^5+\cdots.$$
<p>$|x|&lt;1$ 时它是公比 $x^2$ 的几何级数，收敛；$|x|\geqslant1$ 时通项 $x^{2k-1}$ 不趋于 0，发散。所以 $R=1$。但 $a_{2n}=0$，$\sum a_{2n}r^{2n}=0+0+\cdots$ 对任何 $r$ 都收敛。取 $r=2$：</p>
<ul><li>(B) 说"收敛时 $|r|\leqslant R$"，而这里收敛却有 $|r|=2>1=R$，错；</li><li>(C) 说"$|r|\geqslant R$ 时发散"，而这里 $|r|=2\geqslant R$ 却收敛，错。</li></ul>
<p>（(C) 还有一个更"正常"的反例：$a_n=\frac1{n^2}$，$R=1$，取 $r=1$，$\sum\frac{1}{4n^2}$ 收敛。）</p>
<p><b>第四步：(D) 错，反例 $a_n=1$。</b>$\sum x^n$ 的 $R=1$，取 $r=1$（满足 $|r|\leqslant R$），$\sum a_{2n}r^{2n}=\sum1$ 发散。(D) 的毛病在于把端点 $|r|=R$ 也包括进去了，而端点处敛散性不确定。</p>
<p>综上，选 <b>A</b>。</p>`,
      pitfalls: R`<ul><li><b>以为 $\sum a_{2n}r^{2n}$ 和 $\sum a_nr^n$ 敛散性一致：</b>只有在 $|r|&lt;R$（绝对收敛）时，子级数才能"继承"收敛性。</li><li><b>忽视端点：</b>$|r|=R$ 时什么都可能发生，(C)(D) 都含端点，必然出问题。</li><li><b>对缺项级数机械套公式</b> $R=\lim\left|\frac{a_n}{a_{n+1}}\right|$：系数有 0 时这个比值无意义，应直接看通项或用根值法。</li><li>(A) 的方向别弄反：它是"发散 ⇒ 在收敛区间外或边界上"，不是"在区间外 ⇒ 发散"。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>阿贝尔定理三句话：$|x|&lt;R$ 绝对收敛；$|x|>R$ 发散；$|x|=R$ 不确定。</li><li>绝对收敛级数的任意子级数（抽出部分项）都绝对收敛；发散级数的子级数什么都可能。</li><li>换个角度：$\sum a_{2n}r^{2n}$ 本身是关于 $r$ 的幂级数，它的收敛半径 $\geqslant R$（可以更大），所以它在 $|r|&lt;R$ 内一定收敛，在外面则不确定。</li></ul>
<p><b>题型识别：</b>看到"从幂级数中抽出奇数项/偶数项"或"$\sum a_nx^{2n}$ 与 $\sum a_nx^n$ 的关系" → 只信任 $|x|&lt;R$ 内的绝对收敛；判断选项时，把"$P$ 时 $Q$"转成逆否命题看是否等价于已知定理，再用"偶数项为 0""$a_n=1$""$a_n=\frac1{n^2}$"这几个经典反例检验。</p>`,
      verify: { by: 'manual', ok: true, note: '逐项核对：(A) 由阿贝尔定理与正项级数部分和有界推出；三个反例 x+x³+x⁵+…（R=1）、a_n=1（r=1）、a_n=1/n²（r=1）的收敛半径与敛散性均手工验证' },
      flags: []
    },

    /* ───────────── 第6题 空间直线相交与向量的线性表示 ───────────── */
    {
      id: '2020-6', year: 2020, no: '第6题', type: '选择', score: 4,
      stem: R`已知直线 $L_1:\dfrac{x-a_2}{a_1}=\dfrac{y-b_2}{b_1}=\dfrac{z-c_2}{c_1}$ 与直线 $L_2:\dfrac{x-a_3}{a_2}=\dfrac{y-b_3}{b_2}=\dfrac{z-c_3}{c_2}$ 相交于一点，记向量 $\mathbf{\alpha}_i=\begin{pmatrix}a_i\\b_i\\c_i\end{pmatrix}$，$i=1,2,3$，则（　　）.`,
      options: [
        R`$\mathbf{\alpha}_1$ 可由 $\mathbf{\alpha}_2,\mathbf{\alpha}_3$ 线性表示`,
        R`$\mathbf{\alpha}_2$ 可由 $\mathbf{\alpha}_1,\mathbf{\alpha}_3$ 线性表示`,
        R`$\mathbf{\alpha}_3$ 可由 $\mathbf{\alpha}_1,\mathbf{\alpha}_2$ 线性表示`,
        R`$\mathbf{\alpha}_1,\mathbf{\alpha}_2,\mathbf{\alpha}_3$ 线性无关`
      ],
      answer: 'C',
      figure: null,
      kp: ['vec.planeline', 'vec.vector'],
      methods: ['直线的对称式化参数式', '两直线相交（共面）条件', '混合积', '构造反例'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>空间直线的对称式（点向式）方程——从方程里<b>读出直线经过的点和方向向量</b>；两直线相交的代数表达；结论用"线性表示"的语言表述。</p>
<p><b>第一步：读方程。</b>对称式 $\dfrac{x-x_0}{l}=\dfrac{y-y_0}{m}=\dfrac{z-z_0}{n}$ 表示过点 $(x_0,y_0,z_0)$、方向向量为 $(l,m,n)$ 的直线。于是</p>
<ul><li>$L_1$：过点 $\mathbf\alpha_2=(a_2,b_2,c_2)^{\mathrm T}$，方向 $\mathbf\alpha_1$；</li><li>$L_2$：过点 $\mathbf\alpha_3=(a_3,b_3,c_3)^{\mathrm T}$，方向 $\mathbf\alpha_2$。</li></ul>
<p>注意 $\mathbf\alpha_2$ 身兼两职：既是 $L_1$ 上的一个点，又是 $L_2$ 的方向。</p>
<p><b>第二步：为什么化成参数式。</b>对称式的连等号不方便运算；令连等式等于参数，直线就写成"<b>点 + 参数 × 方向</b>"，"相交"就变成"两个参数式相等有解"——一个向量方程，正好能看出线性表示关系。</p>
<p><b>第三步：别漏了隐含条件。</b>"相交于<b>一点</b>"意味着两直线不平行也不重合，所以方向向量 $\mathbf\alpha_1,\mathbf\alpha_2$ 不共线（线性无关）。这一条专门用来否定 (D)。</p>`,
      solution: R`<p><b>第一步：化为参数式。</b>令 $L_1$ 的连等式等于 $t$，$L_2$ 的连等式等于 $s$（两条直线用<b>不同</b>的参数），得</p>
$$L_1:\ \begin{pmatrix}x\\y\\z\end{pmatrix}=\mathbf\alpha_2+t\,\mathbf\alpha_1,\qquad L_2:\ \begin{pmatrix}x\\y\\z\end{pmatrix}=\mathbf\alpha_3+s\,\mathbf\alpha_2.$$
<p><b>第二步：用"相交"。</b>交点同时在两条直线上，所以存在 $t_0,s_0$ 使</p>
$$\mathbf\alpha_2+t_0\mathbf\alpha_1=\mathbf\alpha_3+s_0\mathbf\alpha_2\quad\Longrightarrow\quad\mathbf\alpha_3=t_0\mathbf\alpha_1+(1-s_0)\mathbf\alpha_2.$$
<p>这正说明 $\mathbf\alpha_3$ 可由 $\mathbf\alpha_1,\mathbf\alpha_2$ 线性表示，(C) 正确。</p>
<p><b>第三步：(D) 一定错。</b>两直线恰交于一点，方向向量 $\mathbf\alpha_1,\mathbf\alpha_2$ 不平行，即线性无关；又由第二步 $\mathbf\alpha_3$ 是它们的线性组合，于是 $t_0\mathbf\alpha_1+(1-s_0)\mathbf\alpha_2-\mathbf\alpha_3=\mathbf 0$ 是一个系数不全为零（$\mathbf\alpha_3$ 的系数为 $-1$）的线性关系，$\mathbf\alpha_1,\mathbf\alpha_2,\mathbf\alpha_3$ 线性相关。</p>
<p><b>第四步：(A) 不一定成立。</b>取 $\mathbf\alpha_1=(1,2,3)^{\mathrm T}$，$\mathbf\alpha_2=(1,1,1)^{\mathrm T}$，$\mathbf\alpha_3=(2,2,2)^{\mathrm T}$，则</p>
$$L_1:\ \frac{x-1}{1}=\frac{y-1}{2}=\frac{z-1}{3},\qquad L_2:\ \frac{x-2}{1}=\frac{y-2}{1}=\frac{z-2}{1}.$$
<p>点 $(1,1,1)$ 在 $L_1$ 上（$t=0$），也在 $L_2$ 上（$s=-1$）；方向 $(1,2,3)$ 与 $(1,1,1)$ 不平行，所以两直线恰交于一点，满足题设。但 $\mathbf\alpha_2,\mathbf\alpha_3$ 都是 $(1,1,1)^{\mathrm T}$ 的倍数，它们的线性组合只能是 $(k,k,k)^{\mathrm T}$，表示不出 $\mathbf\alpha_1=(1,2,3)^{\mathrm T}$。(A) 错。</p>
<p><b>第五步：(B) 不一定成立。</b>取 $\mathbf\alpha_1=(1,2,3)^{\mathrm T}$，$\mathbf\alpha_2=(1,1,1)^{\mathrm T}$，$\mathbf\alpha_3=(1,2,3)^{\mathrm T}$，则</p>
$$L_1:\ \frac{x-1}{1}=\frac{y-1}{2}=\frac{z-1}{3},\qquad L_2:\ \frac{x-1}{1}=\frac{y-2}{1}=\frac{z-3}{1}.$$
<p>点 $(2,3,4)$ 在 $L_1$ 上（$t=1$），也在 $L_2$ 上（$s=1$），两直线恰交于一点。但 $\mathbf\alpha_1,\mathbf\alpha_3$ 相同，组合只能是 $(k,2k,3k)^{\mathrm T}$，表示不出 $\mathbf\alpha_2=(1,1,1)^{\mathrm T}$。(B) 错。</p>
<p>综上，选 <b>C</b>。</p>`,
      pitfalls: R`<ul><li><b>点和方向读反：</b>对称式中分母是方向向量，分子里被减去的是点的坐标。$L_1$ 的方向是 $\mathbf\alpha_1$ 而不是 $\mathbf\alpha_2$。</li><li><b>两条直线共用一个参数 $t$：</b>交点在两条直线上对应的参数一般不同，写成同一个 $t$ 是逻辑错误（本题碰巧不影响结论，但换一道题就会出错）。</li><li><b>忽视"相交于一点"的隐含信息：</b>它保证了 $\mathbf\alpha_1,\mathbf\alpha_2$ 线性无关，这是排除 (D) 的依据。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>对称式 $\dfrac{x-x_0}{l}=\dfrac{y-y_0}{m}=\dfrac{z-z_0}{n}$：点 $(x_0,y_0,z_0)$，方向 $(l,m,n)$；化参数式：点 $+\,t\,$方向。</li><li>两直线相交 ⇔ 参数方程联立有解；两直线共面 ⇔ 混合积 $(\mathbf s_1\times\mathbf s_2)\cdot\overrightarrow{M_1M_2}=0$；相交于一点 ⇔ 共面且方向不平行。</li></ul>
<p><b>题型识别：</b>看到直线的对称式 → 先圈出"点"和"方向"；看到"两直线相交/共面/异面" → 参数式联立，或用混合积；看到选项问"谁能由谁线性表示" → 把几何关系写成一个向量等式，看谁在等号一边单独出现。</p>`,
      alt: R`<p><b>混合积（共面条件）的看法：</b>两条直线相交，必定共面，于是两方向向量 $\mathbf\alpha_1,\mathbf\alpha_2$ 与连接两条直线上点的向量 $\mathbf\alpha_3-\mathbf\alpha_2$ 共面：</p>$$(\mathbf\alpha_1\times\mathbf\alpha_2)\cdot(\mathbf\alpha_3-\mathbf\alpha_2)=0.$$<p>由于 $(\mathbf\alpha_1\times\mathbf\alpha_2)\cdot\mathbf\alpha_2=0$（向量积与因子垂直），上式化为 $(\mathbf\alpha_1\times\mathbf\alpha_2)\cdot\mathbf\alpha_3=0$，即 $\det(\mathbf\alpha_1,\mathbf\alpha_2,\mathbf\alpha_3)=0$，三向量线性相关。再加上 $\mathbf\alpha_1,\mathbf\alpha_2$ 线性无关，就得到 $\mathbf\alpha_3$ 可由 $\mathbf\alpha_1,\mathbf\alpha_2$ 线性表示（且表示唯一）。</p>`,
      verify: { by: 'mixed', ok: true, note: '推导 α3=t0α1+(1−s0)α2；sympy 验证两个反例：A 反例联立解 t=0,s=−1 且 rank(α2,α3)=1、rank(α2,α3,α1)=2；B 反例联立解 t=1,s=1 且 rank(α1,α3)=1、rank(α1,α3,α2)=2' },
      flags: ['本题位于原卷线性代数部分（选择题第5、6题），结论用"线性表示"表述，但核心是空间直线的对称式方程与两直线相交（共面）条件，按"向量代数与空间解析几何"收录；若统计时只计纯高数题可剔除', 'OCR 中粗体 α（\\pmb）改为 \\mathbf；参考解析中两条直线共用一个参数 t，本文改用两个参数 t、s']
    },

    /* ───────────── 第9题 ∞−∞ 型极限 ───────────── */
    {
      id: '2020-9', year: 2020, no: '第9题', type: '填空', score: 4,
      stem: R`$\displaystyle\lim_{x\to0}\left[\frac{1}{\mathrm{e}^x-1}-\frac{1}{\ln(1+x)}\right]=$ ______.`,
      options: null,
      answer: R`$-1$`,
      figure: null,
      kp: ['lim.compute', 'diff.taylor', 'lim.inf'],
      methods: ['通分化为 0/0 型', '等价无穷小代换', '泰勒公式'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>$\infty-\infty$ 型未定式。$x\to0$ 时两个分式都趋于无穷，相减是未定式，不能各自求极限再相减。</p>
<p><b>为什么先通分：</b>我们手里的工具（等价代换、洛必达、泰勒）都是为 $\frac00$ 或 $\frac\infty\infty$ 准备的。两个<b>分式</b>相减，最自然的变形就是通分，把它变成一个分式，从而变成 $\frac00$ 型。</p>
<p><b>通分后为什么分母能等价、分子要泰勒：</b>分母 $(\mathrm{e}^x-1)\ln(1+x)$ 是<b>乘积</b>，每个因子都可以换成 $x$；分子 $\ln(1+x)-(\mathrm{e}^x-1)$ 是<b>差</b>，两项的首项都是 $x$，相减后首项抵消——这时必须知道"下一项"是什么，这正是泰勒公式的用武之地。</p>
<p><b>展开到几阶：</b>分母是 2 阶（$\sim x^2$），所以分子也展开到 $x^2$ 项即可（"上下同阶"原则）。</p>`,
      solution: R`<p><b>第一步：通分。</b></p>
$$\frac{1}{\mathrm{e}^x-1}-\frac{1}{\ln(1+x)}=\frac{\ln(1+x)-(\mathrm{e}^x-1)}{(\mathrm{e}^x-1)\ln(1+x)}.$$
<p>$x\to0$ 时分子、分母都趋于 0，化成了 $\frac00$ 型。</p>
<p><b>第二步：分母等价代换。</b>分母是两个因子的乘积，$\mathrm{e}^x-1\sim x$，$\ln(1+x)\sim x$，所以分母 $\sim x^2$：</p>
$$\text{原式}=\lim_{x\to0}\frac{\ln(1+x)-\mathrm{e}^x+1}{x^2}.$$
<p><b>第三步：分子泰勒展开到 $x^2$。</b></p>
$$\ln(1+x)=x-\frac{x^2}{2}+o(x^2),\qquad\mathrm{e}^x=1+x+\frac{x^2}{2}+o(x^2),$$
<p>所以</p>
$$\ln(1+x)-\mathrm{e}^x+1=\left(x-\frac{x^2}{2}\right)-\left(x+\frac{x^2}{2}\right)+o(x^2)=-x^2+o(x^2).$$
<p>一次项 $x$ 正好抵消，留下 $-x^2$。</p>
<p><b>第四步：求极限。</b></p>
$$\text{原式}=\lim_{x\to0}\frac{-x^2+o(x^2)}{x^2}=\lim_{x\to0}\left(-1+\frac{o(x^2)}{x^2}\right)=-1.$$`,
      pitfalls: R`<ul><li><b>在差中直接等价代换：</b>把两个分母都换成 $x$，得到 $\frac1x-\frac1x=0$，错。加减运算中首项抵消时，等价代换会丢掉决定结果的高阶项。</li><li><b>泰勒只展开到一阶：</b>得到分子 $=o(x)$，无法确定极限。</li><li><b>记错展开式的符号：</b>$\ln(1+x)$ 的二次项是 $-\frac{x^2}{2}$，$\mathrm{e}^x$ 的二次项是 $+\frac{x^2}{2}$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>$\infty-\infty$ 型：有分式就<b>通分</b>，有根式就<b>有理化</b>，都没有就<b>倒代换</b>（令 $x=\frac1t$）——目标都是化成 $\frac00$ 或 $\frac\infty\infty$。</p>
<p><b>题型识别：</b></p><ul><li>看到"$\frac1{\square}-\frac1{\triangle}$"且两者都趋于无穷 → 通分。</li><li>通分后分母是乘积 → 逐因子等价；分子是"首项相同的两个函数之差" → 泰勒展开到与分母同阶。</li><li>常用：$x\to0$ 时 $\mathrm{e}^x-1-\ln(1+x)\sim x^2$（本题分子的相反数），值得记住。</li></ul>`,
      alt: R`<p><b>洛必达法则：</b>第二步之后</p>$$\lim_{x\to0}\frac{\ln(1+x)-\mathrm{e}^x+1}{x^2}\overset{\text{洛}}{=}\lim_{x\to0}\frac{\frac{1}{1+x}-\mathrm{e}^x}{2x}\overset{\text{洛}}{=}\lim_{x\to0}\frac{-\frac{1}{(1+x)^2}-\mathrm{e}^x}{2}=\frac{-1-1}{2}=-1.$$<p>两次洛必达都是 $\frac00$ 型，条件满足。注意必须<b>先</b>把分母等价成 $x^2$ 再求导，否则对乘积 $(\mathrm{e}^x-1)\ln(1+x)$ 求导会很繁。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit(1/(exp(x)-1)-1/log(1+x), x, 0) = -1' },
      flags: []
    },

    /* ───────────── 第10题 参数方程二阶导数 ───────────── */
    {
      id: '2020-10', year: 2020, no: '第10题', type: '填空', score: 4,
      stem: R`设 $\begin{cases}x=\sqrt{t^2+1},\\ y=\ln\left(t+\sqrt{t^2+1}\right),\end{cases}$ 则 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=1}=$ ______.`,
      options: null,
      answer: R`$-\sqrt2$`,
      figure: null,
      kp: ['diff.calc'],
      methods: ['参数方程求导', '链式法则', '复合函数求导'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>参数方程确定的函数的二阶导数。</p>
<p><b>一阶导数为什么是 $\dfrac{y'(t)}{x'(t)}$：</b>$y$ 通过 $t$ 依赖于 $x$，由链式法则 $\dfrac{\mathrm dy}{\mathrm dx}=\dfrac{\mathrm dy}{\mathrm dt}\cdot\dfrac{\mathrm dt}{\mathrm dx}$，而反函数求导给出 $\dfrac{\mathrm dt}{\mathrm dx}=\dfrac{1}{x'(t)}$。</p>
<p><b>二阶导数的关键：</b>$\dfrac{\mathrm dy}{\mathrm dx}$ 算出来仍是 <b>$t$ 的函数</b>，记作 $u(t)$。现在要对 $x$ 求导，又一次遇到"对 $x$ 求导但手里是 $t$ 的函数"的情形，所以用同样的套路：</p>
$$\frac{\mathrm d^2y}{\mathrm dx^2}=\frac{\mathrm du}{\mathrm dx}=\frac{u'(t)}{x'(t)}.$$
<p>一句话：<b>"对 $t$ 求导，再除以 $x'(t)$"</b>，每求一阶导都这样做一次。</p>`,
      solution: R`<p><b>第一步：求 $x'(t)$。</b></p>
$$x'(t)=\frac{2t}{2\sqrt{t^2+1}}=\frac{t}{\sqrt{t^2+1}}.$$
<p><b>第二步：求 $y'(t)$。</b>由复合函数求导，</p>
$$y'(t)=\frac{1}{t+\sqrt{t^2+1}}\cdot\left(1+\frac{t}{\sqrt{t^2+1}}\right)=\frac{1}{t+\sqrt{t^2+1}}\cdot\frac{\sqrt{t^2+1}+t}{\sqrt{t^2+1}}=\frac{1}{\sqrt{t^2+1}}.$$
<p>（$\ln(t+\sqrt{t^2+1})$ 是反双曲正弦函数，它的导数 $\frac1{\sqrt{t^2+1}}$ 值得记住。）</p>
<p><b>第三步：一阶导数。</b></p>
$$\frac{\mathrm dy}{\mathrm dx}=\frac{y'(t)}{x'(t)}=\frac{\frac{1}{\sqrt{t^2+1}}}{\frac{t}{\sqrt{t^2+1}}}=\frac1t.$$
<p><b>第四步：二阶导数。</b>把 $\frac1t$ 对 $t$ 求导，再除以 $x'(t)$：</p>
$$\frac{\mathrm d^2y}{\mathrm dx^2}=\frac{\left(\frac1t\right)'}{x'(t)}=\frac{-\frac1{t^2}}{\frac{t}{\sqrt{t^2+1}}}=-\frac{\sqrt{t^2+1}}{t^3}.$$
<p><b>第五步：代入 $t=1$。</b></p>
$$\left.\frac{\mathrm d^2y}{\mathrm dx^2}\right|_{t=1}=-\frac{\sqrt2}{1}=-\sqrt2.$$`,
      pitfalls: R`<ul><li><b>把二阶导数写成 $\dfrac{y''(t)}{x''(t)}$：</b>这是最常见的错误，没有任何道理。正确的是 $\dfrac{\mathrm d}{\mathrm dt}\left(\dfrac{y'}{x'}\right)\Big/x'(t)$。</li><li><b>第二次忘了除以 $x'(t)$：</b>只算了 $\left(\frac1t\right)'=-\frac1{t^2}$，得到 $-1$。</li><li><b>过早代值：</b>先把 $t=1$ 代入 $\frac{\mathrm dy}{\mathrm dx}$ 得到常数 1，再求导得 0。必须先求出关于 $t$ 的表达式，最后才代值。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p>$$\frac{\mathrm dy}{\mathrm dx}=\frac{y'(t)}{x'(t)},\qquad\frac{\mathrm d^2y}{\mathrm dx^2}=\frac{\frac{\mathrm d}{\mathrm dt}\left(\frac{\mathrm dy}{\mathrm dx}\right)}{x'(t)}=\frac{y''(t)x'(t)-y'(t)x''(t)}{[x'(t)]^3}.$$
<p><b>题型识别：</b>看到参数方程求高阶导 → "对 $t$ 求导，再除以 $x'(t)$"，每阶做一次；一阶导数先化简（本题化成 $\frac1t$）会让二阶导非常好算。</p>`,
      alt: R`<p><b>消去参数：</b>$t=1$ 附近 $t>0$，由 $x=\sqrt{t^2+1}$ 得 $t=\sqrt{x^2-1}$，于是 $y=\ln\left(x+\sqrt{x^2-1}\right)$。求导：</p>$$y'=\frac{1+\frac{x}{\sqrt{x^2-1}}}{x+\sqrt{x^2-1}}=\frac{1}{\sqrt{x^2-1}},\qquad y''=-\frac12(x^2-1)^{-3/2}\cdot2x=-\frac{x}{(x^2-1)^{3/2}}.$$<p>$t=1$ 对应 $x=\sqrt2$，$y''=-\dfrac{\sqrt2}{1}=-\sqrt2$。结果一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: dy/dx 化简为 1/t，d²y/dx² 化简为 −√(t²+1)/t³，t=1 时为 −√2；公式 (y\'\'x\'−y\'x\'\')/x\'³ 与消参法 y=ln(x+√(x²−1)) 在 x=√2 处均得 −√2' },
      flags: ['OCR 原卷漏印了填空横线，按题意补为"______"']
    },

    /* ───────────── 第11题 常系数方程 + 反常积分 ───────────── */
    {
      id: '2020-11', year: 2020, no: '第11题', type: '填空', score: 4,
      stem: R`设函数 $f(x)$ 满足 $f''(x)+af'(x)+f(x)=0\ (a>0)$，且 $f(0)=m$，$f'(0)=n$，则 $\displaystyle\int_0^{+\infty}f(x)\,\mathrm{d}x=$ ______.`,
      options: null,
      answer: R`$am+n$`,
      figure: null,
      kp: ['ode.const', 'int.improper'],
      methods: ['对微分方程两边直接积分', '特征方程', '特征根实部为负则解趋于零'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>二阶常系数齐次线性方程的解的性态 + 反常积分。</p>
<p><b>直接解方程行不行？</b>可以，但特征方程 $\lambda^2+a\lambda+1=0$ 的判别式 $a^2-4$ 符号不定，要分 $0&lt;a&lt;2$（复根）、$a=2$（重根）、$a>2$（两不等实根）三种情况，每种情况再用初值定常数、再积分，非常繁。</p>
<p><b>第一性原理：我们要的是 $\int f$，而方程恰好把 $f$ 写成了"某个东西的导数"：</b></p>
$$f=-f''-af'=-\bigl(f'+af\bigr)'.$$
<p>一个函数如果能写成导数，它的积分就只取决于原函数在两端的值（牛顿—莱布尼茨）！所以</p>
$$\int_0^{+\infty}f\,\mathrm dx=-\bigl[f'+af\bigr]_0^{+\infty}.$$
<p>下端值由初值条件直接给出；上端只需知道 $x\to+\infty$ 时 $f,f'\to0$。这一点不需要把解精确求出，只需知道特征根的实部都是负的。</p>
<p><b>物理图像：</b>$f''+af'+f=0$ 是带阻尼（阻尼系数 $a>0$）的弹簧振子，能量不断耗散，最终一定停在平衡位置 $f=0$，速度 $f'$ 也趋于 0。</p>`,
      solution: R`<p><b>第一步：说明 $x\to+\infty$ 时 $f(x)\to0$，$f'(x)\to0$。</b>特征方程 $\lambda^2+a\lambda+1=0$，分三种情况：</p>
<ul><li>$0&lt;a&lt;2$：特征根 $\lambda=-\frac a2\pm\beta\mathrm i$，$\beta=\frac{\sqrt{4-a^2}}{2}$，$f=\mathrm e^{-\frac a2x}(C_1\cos\beta x+C_2\sin\beta x)$，于是 $|f|\leqslant(|C_1|+|C_2|)\mathrm e^{-\frac a2x}\to0$；$f'$ 同样是 $\mathrm e^{-\frac a2x}$ 乘有界的三角函数组合，也趋于 0。</li><li>$a=2$：重根 $\lambda=-1$，$f=(C_1+C_2x)\mathrm e^{-x}\to0$，$f'=(C_2-C_1-C_2x)\mathrm e^{-x}\to0$。</li><li>$a>2$：两不等实根 $\lambda_1,\lambda_2$，由韦达定理 $\lambda_1+\lambda_2=-a&lt;0$，$\lambda_1\lambda_2=1>0$，两根同号且和为负，所以都是负数。$f=C_1\mathrm e^{\lambda_1x}+C_2\mathrm e^{\lambda_2x}\to0$，$f'=C_1\lambda_1\mathrm e^{\lambda_1x}+C_2\lambda_2\mathrm e^{\lambda_2x}\to0$。</li></ul>
<p>三种情况下特征根的实部都为负，所以总有 $\lim\limits_{x\to+\infty}f(x)=\lim\limits_{x\to+\infty}f'(x)=0$。</p>
<p><b>第二步：在有限区间 $[0,X]$ 上积分方程。</b>由方程 $f=-f''-af'$，</p>
$$\int_0^Xf(x)\,\mathrm dx=-\int_0^Xf''(x)\,\mathrm dx-a\int_0^Xf'(x)\,\mathrm dx=-\bigl[f'(X)-f'(0)\bigr]-a\bigl[f(X)-f(0)\bigr].$$
<p>代入 $f(0)=m$，$f'(0)=n$：</p>
$$\int_0^Xf(x)\,\mathrm dx=n+am-f'(X)-af(X).$$
<p><b>第三步：令 $X\to+\infty$。</b>由第一步，右端极限存在且等于 $n+am$。这同时说明反常积分收敛，并且</p>
$$\int_0^{+\infty}f(x)\,\mathrm dx=am+n.$$`,
      pitfalls: R`<ul><li><b>只讨论两个不等实根的情况：</b>$0&lt;a&lt;2$ 时是复根、$a=2$ 时是重根，严格的论证要覆盖所有情况（结论都是"实部为负 ⇒ 趋于 0"）。</li><li><b>不说明 $f(+\infty)=f'(+\infty)=0$ 就直接写结果</b>，丢掉了反常积分收敛的依据。</li><li><b>符号错误：</b>$-[f']_0^{+\infty}=-(0-n)=n$，$-a[f]_0^{+\infty}=-a(0-m)=am$。</li><li>一上来就去解方程、分情况定常数，浪费大量时间。</li></ul>`,
      summary: R`<p><b>方法要点：</b>要求 $\int f$，而 $f$ 满足微分方程 → 把方程移项写成 $f=(\cdots)'$，<b>两边直接积分</b>，不必解方程。</p>
<p><b>稳定性结论：</b>常系数齐次方程的所有特征根实部为负 ⇔ 所有解（及其各阶导数）在 $x\to+\infty$ 时趋于 0。对 $\lambda^2+p\lambda+q=0$，这等价于 $p>0$ 且 $q>0$。</p>
<p><b>题型识别：</b>看到"$f$ 满足某微分方程，求 $\int_0^{+\infty}f$ 或 $\int_0^{+\infty}f'$" → 对方程整体积分；看到"$a>0$""阻尼"之类条件 → 想到解衰减到 0。</p>`,
      alt: R`<p><b>"积分方程化"记法：</b>记 $I_0=\int_0^{+\infty}f$，$I_1=\int_0^{+\infty}f'=f(+\infty)-f(0)=-m$，$I_2=\int_0^{+\infty}f''=f'(+\infty)-f'(0)=-n$。对方程积分得 $I_2+aI_1+I_0=0$，所以 $I_0=n+am$。</p><p><b>特例检验：</b>取 $a=2$，解为 $f=\bigl(m+(n+m)x\bigr)\mathrm e^{-x}$，$\int_0^{+\infty}f=m+(n+m)=n+2m$，与公式 $am+n$ 一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 对 a=1/2, 1, 2, 3, 5（覆盖复根、重根、实根三种情形）用 dsolve 求带初值 f(0)=m, f\'(0)=n 的解，再 integrate(f,(x,0,oo))，与 n+am 之差均为 0' },
      flags: []
    },

    /* ───────────── 第12题 变限积分的混合偏导 ───────────── */
    {
      id: '2020-12', year: 2020, no: '第12题', type: '填空', score: 4,
      stem: R`设函数 $f(x,y)=\displaystyle\int_0^{xy}\mathrm{e}^{xt^2}\,\mathrm{d}t$，则 $\left.\dfrac{\partial^2f}{\partial x\partial y}\right|_{(1,1)}=$ ______.`,
      options: null,
      answer: R`$4\mathrm{e}$`,
      figure: null,
      kp: ['mdiff.diffable', 'int.ftc', 'mdiff.chain'],
      methods: ['变限积分求导', '混合偏导数相等定理', '选择求导顺序'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二元函数的二阶混合偏导数，函数由变限积分给出。</p>
<p><b>难点：</b>$x$ <b>既出现在积分上限，也出现在被积函数里</b>；而 $y$ <b>只出现在上限</b>。如果先对 $x$ 求偏导，被积函数中的 $x$ 也要求导，需要"含参变量积分求导"，麻烦。</p>
<p><b>怎么绕开：</b>当二阶混合偏导数连续时，求导次序可以交换（$f_{xy}=f_{yx}$）。本题的被积函数 $\mathrm e^{xt^2}$ 和上限 $xy$ 都是光滑函数，$f$ 的各阶偏导都连续，所以可以<b>先对 $y$ 求导</b>：对 $y$ 而言，这就是一个最普通的"上限是 $y$ 的函数"的变限积分，被积函数里的 $x$ 只是常数。</p>
<p><b>原则：</b>先对"干净"的变量（只出现在简单位置的那个）求导。</p>`,
      solution: R`<p><b>第一步：说明可以交换求导次序。</b>$f(x,y)=\int_0^{xy}\mathrm e^{xt^2}\mathrm dt$ 中被积函数 $\mathrm e^{xt^2}$ 关于 $(x,t)$ 有任意阶连续偏导，上限 $xy$ 是多项式，所以 $f$ 的二阶混合偏导数 $f_{xy}$、$f_{yx}$ 都连续，因而相等。我们计算 $\dfrac{\partial}{\partial x}\left(\dfrac{\partial f}{\partial y}\right)$。</p>
<p><b>第二步：对 $y$ 求偏导。</b>把 $x$ 看成常数，由变限积分求导公式（被积函数在上限处的值 × 上限对 $y$ 的导数）：</p>
$$\frac{\partial f}{\partial y}=\mathrm e^{x(xy)^2}\cdot\frac{\partial(xy)}{\partial y}=\mathrm e^{x^3y^2}\cdot x=x\,\mathrm e^{x^3y^2}.$$
<p>这里 $x\cdot(xy)^2=x\cdot x^2y^2=x^3y^2$。</p>
<p><b>第三步：再对 $x$ 求偏导。</b>乘积求导：</p>
$$\frac{\partial^2f}{\partial y\partial x}=\frac{\partial}{\partial x}\left(x\,\mathrm e^{x^3y^2}\right)=\mathrm e^{x^3y^2}+x\cdot\mathrm e^{x^3y^2}\cdot3x^2y^2=\left(1+3x^3y^2\right)\mathrm e^{x^3y^2}.$$
<p><b>第四步：代入 $(1,1)$。</b></p>
$$\left.\frac{\partial^2f}{\partial x\partial y}\right|_{(1,1)}=(1+3)\mathrm e^{1}=4\mathrm e.$$`,
      pitfalls: R`<ul><li><b>先对 $x$ 求导时只对上限求导：</b>得到 $y\,\mathrm e^{x^3y^2}$，漏掉了被积函数里 $x$ 带来的 $\int_0^{xy}t^2\mathrm e^{xt^2}\mathrm dt$ 这一项，最后算出 $3\mathrm e$。</li><li><b>对 $y$ 求导时忘乘上限的导数 $x$</b>：在 $(1,1)$ 处 $x=1$，这一项再求导会贡献 $\mathrm e$，漏掉同样得到 $3\mathrm e$。</li><li><b>指数算错：</b>上限代入被积函数是 $\mathrm e^{x\cdot(xy)^2}=\mathrm e^{x^3y^2}$，不是 $\mathrm e^{xy^2}$ 或 $\mathrm e^{x^2y^2}$。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>变限积分 $\int_0^{\varphi(y)}g(t)\,\mathrm dt$ 对 $y$ 求导 $=g(\varphi(y))\varphi'(y)$，前提是被积函数不含 $y$。</li><li>混合偏导数连续 ⇒ 与求导次序无关，可以挑好算的次序。</li></ul>
<p><b>题型识别：</b>看到"变限积分 + 求偏导"，先检查每个变量出现在哪里：只在上下限的变量直接用公式；也在被积函数里的变量，要么换元把它"赶出"被积函数，要么换个求导次序避开它。</p>`,
      alt: R`<p><b>先对 $x$ 求导（含参积分求导）：</b>上限和被积函数都含 $x$，</p>$$\frac{\partial f}{\partial x}=\mathrm e^{x(xy)^2}\cdot y+\int_0^{xy}t^2\mathrm e^{xt^2}\,\mathrm dt=y\,\mathrm e^{x^3y^2}+\int_0^{xy}t^2\mathrm e^{xt^2}\,\mathrm dt.$$<p>再对 $y$ 求导（第二项的被积函数不含 $y$，直接用变限积分公式）：</p>$$\frac{\partial^2f}{\partial x\partial y}=\mathrm e^{x^3y^2}+2x^3y^2\mathrm e^{x^3y^2}+(xy)^2\mathrm e^{x(xy)^2}\cdot x=(1+3x^3y^2)\mathrm e^{x^3y^2},$$<p>结果相同。也可以对 $x>0$ 作换元 $u=\sqrt x\,t$，把 $f$ 化成 $\dfrac{1}{\sqrt x}\displaystyle\int_0^{x^{3/2}y}\mathrm e^{u^2}\mathrm du$，使 $x$ 离开被积函数。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 对 Integral(exp(x*t**2),(t,0,x*y)) 两种次序求混合偏导均得 (3x³y²+1)e^(x³y²)，在 (1,1) 处为 4e' },
      flags: []
    },

    /* ───────────── 第15题 二元函数无条件极值 ───────────── */
    {
      id: '2020-15', year: 2020, no: '第15题', type: '解答', score: 10,
      stem: R`求函数 $f(x,y)=x^3+8y^3-xy$ 的极值.`,
      options: null,
      answer: R`$f$ 在 $\left(\dfrac16,\dfrac1{12}\right)$ 处取得极小值 $f\left(\dfrac16,\dfrac1{12}\right)=-\dfrac{1}{216}$；驻点 $(0,0)$ 不是极值点；无极大值.`,
      figure: null,
      kp: ['mdiff.extreme'],
      methods: ['驻点（极值必要条件）', '二阶偏导判别法（AC−B²）', '沿坐标轴检验'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二元函数无条件极值的标准流程。</p>
<p><b>为什么先找驻点：</b>多项式处处可微，所以极值点必然满足必要条件 $f_x=0$、$f_y=0$（与一元的费马引理同理：在极值点沿 $x$ 方向、沿 $y$ 方向看都是一元极值，偏导必为 0）。因此极值只可能出现在驻点处。</p>
<p><b>为什么用 $AC-B^2$ 判别：</b>在驻点 $(x_0,y_0)$ 附近，二元泰勒公式给出</p>
$$f(x_0+h,y_0+k)-f(x_0,y_0)\approx\frac12\left(Ah^2+2Bhk+Ck^2\right),$$
<p>其中 $A=f_{xx}$，$B=f_{xy}$，$C=f_{yy}$（一阶项因驻点而消失）。函数在驻点附近是升是降，就看这个二次型的符号：</p>
<ul><li>$AC-B^2>0$：二次型定号，$A>0$ 时恒正（极小），$A&lt;0$ 时恒负（极大）；</li><li>$AC-B^2&lt;0$：二次型有正有负，像马鞍面，不是极值；</li><li>$AC-B^2=0$：二阶信息不够，需另行判断。</li></ul>`,
      solution: R`<p><b>第一步：求一阶偏导，列驻点方程。</b></p>
$$f_x=3x^2-y=0,\qquad f_y=24y^2-x=0.$$
<p><b>第二步：解方程组。</b>由第一个方程得 $y=3x^2$，代入第二个：</p>
$$x=24y^2=24\cdot9x^4=216x^4\ \Longrightarrow\ x\left(216x^3-1\right)=0.$$
<p>实数解为 $x=0$ 或 $x^3=\frac1{216}$，即 $x=\frac16$。对应 $y=3x^2$ 分别为 $0$ 和 $3\cdot\frac1{36}=\frac1{12}$。驻点为</p>
$$(0,0),\qquad\left(\frac16,\frac1{12}\right).$$
<p><b>第三步：求二阶偏导。</b></p>
$$A=f_{xx}=6x,\qquad B=f_{xy}=-1,\qquad C=f_{yy}=48y.$$
<p><b>第四步：判别驻点 $(0,0)$。</b>$A=0$，$B=-1$，$C=0$，$AC-B^2=0-1=-1&lt;0$，所以 $(0,0)$ 不是极值点。</p>
<p>也可以直接验证：沿 $x$ 轴 $f(x,0)=x^3$，在 $x=0$ 两侧变号，$(0,0)$ 的任何邻域内 $f$ 既有正值又有负值，而 $f(0,0)=0$，确实不是极值。</p>
<p><b>第五步：判别驻点 $\left(\frac16,\frac1{12}\right)$。</b></p>
$$A=6\cdot\frac16=1,\qquad B=-1,\qquad C=48\cdot\frac1{12}=4,\qquad AC-B^2=4-1=3>0,$$
<p>且 $A=1>0$，所以这是<b>极小值点</b>。</p>
<p><b>第六步：计算极小值。</b></p>
$$f\left(\frac16,\frac1{12}\right)=\frac1{216}+8\cdot\frac{1}{1728}-\frac16\cdot\frac1{12}=\frac{1}{216}+\frac{1}{216}-\frac{3}{216}=-\frac{1}{216}.$$
<p>其中 $8\cdot\frac1{1728}=\frac{1}{216}$，$\frac1{72}=\frac{3}{216}$。</p>
<p><b>结论：</b>$f$ 的极小值为 $f\left(\dfrac16,\dfrac1{12}\right)=-\dfrac1{216}$，没有极大值。</p>`,
      pitfalls: R`<ul><li><b>解驻点方程时两边约去 $x$：</b>由 $x=216x^4$ 直接得 $216x^3=1$，丢掉了驻点 $(0,0)$。约去变量前必须先讨论它是否为 0。</li><li><b>判别条件记混：</b>$AC-B^2>0$ 且 $A>0$ 是极<b>小</b>值（类比一元 $f''>0$ 是极小）。</li><li><b>把驻点 $(0,0)$ 处的函数值 0 也写成极值</b>：驻点不一定是极值点。</li><li>分数运算出错：$\frac{1}{6^3}=\frac{1}{216}$，$\frac{8}{12^3}=\frac{8}{1728}=\frac1{216}$。</li></ul>`,
      summary: R`<p><b>方法要点（无条件极值四步法）：</b>① 解 $f_x=f_y=0$ 求驻点（还要留意偏导不存在的点）；② 求 $A=f_{xx}$，$B=f_{xy}$，$C=f_{yy}$；③ 在每个驻点算 $AC-B^2$：$>0$ 有极值（$A>0$ 极小、$A&lt;0$ 极大），$&lt;0$ 无极值，$=0$ 另行判断；④ 计算极值。</p>
<p><b>题型识别：</b>看到"求 $f(x,y)$ 的极值"且无约束 → 四步法；解驻点方程组时用"代入消元"，消元后提公因式而不是约分。$AC-B^2=0$ 时常用"沿某条路径代入"检验是否为极值。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy solve 求得实驻点 (0,0)、(1/6,1/12)；Hessian 行列式分别为 −1、3，(1/6,1/12) 处 f_xx=1>0；f(1/6,1/12) = −1/216' },
      flags: []
    },

    /* ───────────── 第16题 含奇点的第二类曲线积分 ───────────── */
    {
      id: '2020-16', year: 2020, no: '第16题', type: '解答', score: 10,
      stem: R`计算曲线积分 $I=\displaystyle\int_L\frac{4x-y}{4x^2+y^2}\,\mathrm{d}x+\frac{x+y}{4x^2+y^2}\,\mathrm{d}y$，其中 $L$ 是 $x^2+y^2=2$，方向为逆时针方向.`,
      options: null,
      answer: R`$I=\pi$`,
      figure: null,
      kp: ['mint.line2', 'mint.double'],
      methods: ['格林公式', '挖去奇点（换成与分母匹配的小椭圆）', '椭圆面积公式'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>第二类曲线积分与格林公式，重点是<b>积分曲线内部有奇点</b>的处理。</p>
<p><b>第一反应：</b>闭曲线上的第二类曲线积分 → 想格林公式。但 $P,Q$ 的分母 $4x^2+y^2$ 在原点为 0，原点又在圆 $x^2+y^2=2$ 内部，格林公式的条件（$P,Q$ 在闭区域上有连续偏导）不满足，<b>不能直接用</b>。</p>
<p><b>第二反应：</b>分母是二次式、分子是一次式，这种题几乎都有 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$（在原点以外）。如果成立，就意味着：<b>绕原点一圈的积分值与曲线形状无关</b>——因为任意两条绕原点的闭曲线之间夹着的环形区域上，格林公式给出的二重积分为 0。</p>
<p><b>第三反应（关键技巧）：</b>既然可以随便换曲线，就换一条让计算最简单的：选 <b>$4x^2+y^2=r^2$</b>（小椭圆）。为什么是椭圆而不是圆？因为在这条曲线上<b>分母恒等于常数 $r^2$</b>，被积表达式变成多项式，奇点消失，于是可以在椭圆内部放心地用格林公式。原曲线是圆 $x^2+y^2=2$，在它上面分母 $4x^2+y^2$ 并不是常数，这也是为什么不能在原曲线上直接"代入"化简。</p>`,
      solution: R`<p><b>第一步：验证 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$（$(x,y)\ne(0,0)$）。</b>记 $D=4x^2+y^2$，$P=\dfrac{4x-y}{D}$，$Q=\dfrac{x+y}{D}$。由商的求导法则（$D_y=2y$，$D_x=8x$）：</p>
$$\frac{\partial P}{\partial y}=\frac{-1\cdot D-(4x-y)\cdot2y}{D^2}=\frac{-4x^2-y^2-8xy+2y^2}{D^2}=\frac{-4x^2+y^2-8xy}{D^2},$$
$$\frac{\partial Q}{\partial x}=\frac{1\cdot D-(x+y)\cdot8x}{D^2}=\frac{4x^2+y^2-8x^2-8xy}{D^2}=\frac{-4x^2+y^2-8xy}{D^2}.$$
<p>两者相等，所以在除去原点的平面上 $\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}=0$。</p>
<p><b>第二步：挖去奇点。</b>取 $L_r:\ 4x^2+y^2=r^2$，逆时针方向，$0&lt;r&lt;\sqrt2$。这是半轴为 $\frac r2$（$x$ 方向）和 $r$（$y$ 方向）的椭圆，它上面的点到原点距离不超过 $r&lt;\sqrt2$，所以完全落在圆 $L$ 内部。设 $L$ 与 $L_r$ 之间的环形闭区域为 $D_1$，它不含原点，$P,Q$ 在 $D_1$ 上有连续偏导。$D_1$ 的正向边界是"外圈 $L$ 逆时针 + 内圈 $L_r$ 顺时针（记作 $L_r^-$）"。由格林公式，</p>
$$\oint_{L}P\,\mathrm dx+Q\,\mathrm dy+\oint_{L_r^-}P\,\mathrm dx+Q\,\mathrm dy=\iint_{D_1}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm dx\,\mathrm dy=0,$$
<p>所以</p>
$$I=\oint_{L_r}P\,\mathrm dx+Q\,\mathrm dy.$$
<p><b>第三步：在 $L_r$ 上把分母换成常数。</b>曲线积分只在曲线上取值，而 $L_r$ 上 $4x^2+y^2=r^2$，可以直接代入：</p>
$$I=\frac1{r^2}\oint_{L_r}(4x-y)\,\mathrm dx+(x+y)\,\mathrm dy.$$
<p><b>第四步：对多项式被积式用格林公式。</b>现在 $P_1=4x-y$，$Q_1=x+y$ 在整个平面光滑，设 $D_r$ 为椭圆 $4x^2+y^2\leqslant r^2$，则</p>
$$\oint_{L_r}(4x-y)\,\mathrm dx+(x+y)\,\mathrm dy=\iint_{D_r}\left(\frac{\partial(x+y)}{\partial x}-\frac{\partial(4x-y)}{\partial y}\right)\mathrm dx\,\mathrm dy=\iint_{D_r}\bigl(1-(-1)\bigr)\mathrm dx\,\mathrm dy=2\,S(D_r).$$
<p>椭圆面积 $=\pi\cdot$ 两半轴之积 $=\pi\cdot\frac r2\cdot r=\frac{\pi r^2}{2}$，所以上式 $=\pi r^2$。</p>
<p><b>第五步：得结果。</b></p>
$$I=\frac{1}{r^2}\cdot\pi r^2=\pi.$$
<p>结果与 $r$ 无关，正印证了"绕奇点一圈的积分是常数"。</p>`,
      pitfalls: R`<ul><li><b>无视奇点直接用格林公式：</b>因为 $Q_x-P_y=0$，会得到 $I=0$，这是最典型的错误答案。</li><li><b>挖洞时用圆 $x^2+y^2=r^2$：</b>圆上分母 $4x^2+y^2$ 不是常数，无法化简。挖洞曲线要和分母"配套"。</li><li><b>用格林公式后在二重积分里代入曲线方程：</b>二重积分在整个区域上取值，不能把 $4x^2+y^2$ 换成 $r^2$；本题是在<b>曲线积分</b>阶段代入，然后才用格林公式，顺序不能颠倒。</li><li><b>方向错误：</b>环形区域的正向边界中，内圈是顺时针。</li><li><b>椭圆面积算错：</b>$4x^2+y^2=r^2$ 化为 $\frac{x^2}{(r/2)^2}+\frac{y^2}{r^2}=1$，半轴是 $\frac r2$ 和 $r$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>闭曲线内部有奇点，且 $Q_x=P_y$（奇点外）→ 积分只取决于"绕了奇点几圈"，可换成任意绕奇点的简单曲线；选<b>使分母为常数</b>的曲线（分母 $x^2+y^2$ 选圆，$4x^2+y^2$ 选椭圆，$x^2+4y^2$ 选另一椭圆），代入后再用格林公式。</p>
<p><b>题型识别：</b>看到 $\oint\frac{(\cdots)\mathrm dx+(\cdots)\mathrm dy}{ax^2+by^2}$ → 先算 $Q_x-P_y$，再看奇点在不在曲线内：不在内部就直接用格林公式（结果为 0）；在内部就"挖洞 + 配套曲线"。</p>`,
      alt: R`<p><b>在小椭圆上直接参数化：</b>令 $x=\frac r2\cos\theta$，$y=r\sin\theta$，$\theta:0\to2\pi$，则 $\mathrm dx=-\frac r2\sin\theta\,\mathrm d\theta$，$\mathrm dy=r\cos\theta\,\mathrm d\theta$，</p>$$(4x-y)\mathrm dx+(x+y)\mathrm dy=\left[-r^2\sin\theta\cos\theta+\frac{r^2}{2}\sin^2\theta+\frac{r^2}{2}\cos^2\theta+r^2\sin\theta\cos\theta\right]\mathrm d\theta=\frac{r^2}{2}\mathrm d\theta,$$<p>所以 $I=\dfrac1{r^2}\displaystyle\int_0^{2\pi}\frac{r^2}{2}\,\mathrm d\theta=\pi$。</p><p><b>在原来的圆上硬算也可以：</b>令 $x=\sqrt2\cos\theta$，$y=\sqrt2\sin\theta$，化简得 $I=\displaystyle\int_0^{2\pi}\frac{1-3\sin\theta\cos\theta}{4\cos^2\theta+\sin^2\theta}\,\mathrm d\theta$。含 $\sin\theta\cos\theta$ 的部分积分为 0，而 $\displaystyle\int_0^{2\pi}\frac{\mathrm d\theta}{4\cos^2\theta+\sin^2\theta}=4\int_0^{\pi/2}\frac{\sec^2\theta\,\mathrm d\theta}{4+\tan^2\theta}=4\cdot\frac12\cdot\frac\pi2=\pi$。结果相同，但计算量明显更大。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 验证 Q_x−P_y 化简为 0；在圆 x²+y²=2 上参数化数值积分得 3.14159265358979…=π；在椭圆 4x²+y²=r² 上参数化被积式化简为常数 1/2，积分得 π' },
      flags: []
    },

    /* ───────────── 第17题 递推系数幂级数求和 ───────────── */
    {
      id: '2020-17', year: 2020, no: '第17题', type: '解答', score: 10,
      stem: R`设数列 $\{a_n\}$ 满足：$a_1=1$，$(n+1)a_{n+1}=\left(n+\dfrac12\right)a_n$，证明：当 $|x|<1$ 时，幂级数 $\sum\limits_{n=1}^{\infty}a_nx^n$ 收敛，并求其和函数.`,
      options: null,
      answer: R`收敛半径为 $1$，故 $|x|&lt;1$ 时收敛；和函数 $S(x)=\dfrac{2}{\sqrt{1-x}}-2$，$|x|&lt;1$.`,
      figure: null,
      kp: ['series.sum', 'series.power', 'ode.first'],
      methods: ['比值审敛法', '逐项求导', '由系数递推式建立和函数的微分方程', '一阶线性微分方程'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>幂级数的收敛性与和函数，系数不是显式给出，而是由<b>递推关系</b>给出。</p>
<p><b>收敛性：</b>递推式直接给出了相邻两项系数之比 $\dfrac{a_{n+1}}{a_n}=\dfrac{n+\frac12}{n+1}\to1$，正好用比值法，收敛半径 $R=1$。</p>
<p><b>求和的核心思想——"系数的递推 ⇔ 和函数的微分方程"：</b>幂级数的运算与系数的运算之间有一张对应表：</p>
<ul><li>$\sum na_nx^{n-1}=S'(x)$（乘 $n$ 再降一次幂 ↔ 求导）；</li><li>$\sum na_nx^n=xS'(x)$；</li><li>$\sum(n+1)a_{n+1}x^n$ 是 $S'(x)$ 的重新编号（下标平移）。</li></ul>
<p>递推式左边 $(n+1)a_{n+1}$ 对应 $S'$，右边 $na_n$ 对应 $xS'$，$\frac12a_n$ 对应 $\frac12S$。所以把递推式两边乘 $x^n$ 再求和，就得到一个关于 $S$ 的一阶微分方程。这比先求出 $a_n$ 的通项再去凑已知展开式更"自动化"。</p>`,
      solution: R`<p><b>第一步：所有 $a_n>0$。</b>$a_1=1>0$；若 $a_n>0$，则 $a_{n+1}=\dfrac{n+\frac12}{n+1}a_n>0$。由归纳法，$a_n>0$ 对一切 $n$ 成立，所以下面可以做除法。</p>
<p><b>第二步：证明 $|x|&lt;1$ 时收敛。</b>对 $x\ne0$，考虑正项级数 $\sum|a_nx^n|$，</p>
$$\lim_{n\to\infty}\frac{|a_{n+1}x^{n+1}|}{|a_nx^n|}=|x|\lim_{n\to\infty}\frac{n+\frac12}{n+1}=|x|.$$
<p>由比值审敛法，$|x|&lt;1$ 时 $\sum|a_nx^n|$ 收敛，所以 $\sum a_nx^n$ 绝对收敛（$x=0$ 时显然收敛）。同理 $|x|>1$ 时发散，收敛半径 $R=1$。</p>
<p><b>第三步：逐项求导并重新编号。</b>设 $S(x)=\sum\limits_{n=1}^\infty a_nx^n$，$|x|&lt;1$，显然 $S(0)=0$。幂级数在收敛区间内可以逐项求导：</p>
$$S'(x)=\sum_{n=1}^\infty na_nx^{n-1}=a_1+\sum_{n=2}^\infty na_nx^{n-1}=1+\sum_{n=1}^\infty(n+1)a_{n+1}x^n.$$
<p>最后一步把求和下标 $n$ 换成 $n+1$（令 $m=n-1$ 再改写回 $n$），目的是让 $(n+1)a_{n+1}$ 出现，好代入递推式。</p>
<p><b>第四步：代入递推式。</b>$(n+1)a_{n+1}=na_n+\frac12a_n$，所以</p>
$$S'(x)=1+\sum_{n=1}^\infty na_nx^n+\frac12\sum_{n=1}^\infty a_nx^n=1+x\sum_{n=1}^\infty na_nx^{n-1}+\frac12S(x)=1+xS'(x)+\frac12S(x).$$
<p><b>第五步：整理成一阶线性方程。</b></p>
$$(1-x)S'(x)-\frac12S(x)=1\quad\Longrightarrow\quad S'(x)-\frac{1}{2(1-x)}S(x)=\frac{1}{1-x},\qquad S(0)=0.$$
<p><b>第六步：求积分因子。</b>$P(x)=-\dfrac{1}{2(1-x)}$，因为 $\int\dfrac{\mathrm dx}{1-x}=-\ln(1-x)$（$x&lt;1$），所以</p>
$$\mu(x)=\mathrm e^{\int P(x)\,\mathrm dx}=\mathrm e^{\frac12\ln(1-x)}=\sqrt{1-x}.$$
<p>验证：$\left(\sqrt{1-x}\,S\right)'=\sqrt{1-x}\,S'-\dfrac{S}{2\sqrt{1-x}}=\sqrt{1-x}\left[S'-\dfrac{S}{2(1-x)}\right]$，正是方程左边乘 $\sqrt{1-x}$。</p>
<p><b>第七步：积分。</b>方程两边乘 $\sqrt{1-x}$：</p>
$$\left(\sqrt{1-x}\,S(x)\right)'=\frac{\sqrt{1-x}}{1-x}=\frac{1}{\sqrt{1-x}},$$
$$\sqrt{1-x}\,S(x)=\int\frac{\mathrm dx}{\sqrt{1-x}}=-2\sqrt{1-x}+C\ \Longrightarrow\ S(x)=-2+\frac{C}{\sqrt{1-x}}.$$
<p><b>第八步：定常数。</b>$S(0)=0\Rightarrow-2+C=0\Rightarrow C=2$。所以</p>
$$S(x)=\frac{2}{\sqrt{1-x}}-2,\qquad|x|&lt;1.$$
<p><b>检验：</b>$\frac{2}{\sqrt{1-x}}=2\left(1+\frac12x+\frac38x^2+\cdots\right)$，所以 $S(x)=x+\frac34x^2+\cdots$；而由递推式 $2a_2=\frac32a_1$，$a_2=\frac34$。吻合。</p>`,
      pitfalls: R`<ul><li><b>逐项求导后丢掉首项：</b>$S'(x)$ 的常数项是 $a_1=1$，重新编号时最容易漏掉它，导致方程右端少了 1。</li><li><b>下标平移出错：</b>$\sum_{n=2}^\infty na_nx^{n-1}$ 换成 $\sum_{n=1}^\infty(n+1)a_{n+1}x^n$，起点和指数要同时改。</li><li><b>积分因子符号错：</b>$\int\frac{\mathrm dx}{1-x}=-\ln(1-x)$，带负号。</li><li><b>忘了用 $S(0)=0$：</b>级数从 $n=1$ 开始，没有常数项，所以 $S(0)=0$，这是定常数的唯一依据。</li><li>证明收敛时直接写"$R=1$"而不说明比值审敛法及 $a_n\ne0$，论证不完整。</li></ul>`,
      summary: R`<p><b>方法要点：</b>系数满足递推关系的幂级数求和：把递推式两边乘 $x^n$ 并求和，利用对应关系 $\sum na_nx^{n-1}=S'$、$\sum na_nx^n=xS'$、$\sum(n+1)a_{n+1}x^n=S'-a_1$ 化成关于 $S$ 的微分方程，再用 $S(0)$ 定常数。</p>
<p><b>题型识别：</b>看到"$a_n$ 由递推式给出，求 $\sum a_nx^n$ 的和函数" → 建立微分方程；看到递推式里有 $(n+1)a_{n+1}$ 与 $na_n$ → 对应 $S'$ 与 $xS'$；比值 $\frac{a_{n+1}}{a_n}$ 现成 → 比值法求收敛半径。</p>`,
      alt: R`<p><b>先求通项，再对照二项式展开：</b>由递推式</p>$$a_n=a_1\prod_{k=1}^{n-1}\frac{k+\frac12}{k+1}=\prod_{k=1}^{n-1}\frac{2k+1}{2k+2}=\frac{3\cdot5\cdots(2n-1)}{4\cdot6\cdots(2n)}=\frac{2\,(2n-1)!!}{(2n)!!}.$$<p>而由二项式级数，$|x|&lt;1$ 时</p>$$(1-x)^{-1/2}=\sum_{n=0}^\infty\frac{\frac12\cdot\frac32\cdots\frac{2n-1}{2}}{n!}x^n=\sum_{n=0}^\infty\frac{(2n-1)!!}{(2n)!!}x^n\quad\left(\text{约定 }n=0\text{ 时系数为 }1\right).$$<p>所以 $S(x)=2\left[(1-x)^{-1/2}-1\right]=\dfrac{2}{\sqrt{1-x}}-2$。这条路要求熟悉 $(1-x)^{-1/2}$ 的展开式。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 按递推式生成 a_1…a_39，与 2/√(1−x)−2 的麦克劳林系数逐项相等；dsolve((1−x)S\'−S/2=1, S(0)=0) 得 −2+2/√(1−x)' },
      flags: []
    },

    /* ───────────── 第18题 锥面上的第二类曲面积分 ───────────── */
    {
      id: '2020-18', year: 2020, no: '第18题', type: '解答', score: 10,
      stem: R`设 $\Sigma$ 为曲面 $z=\sqrt{x^2+y^2}\ (1\leqslant x^2+y^2\leqslant4)$ 的下侧，$f(x)$ 是连续函数，计算$$I=\iint_\Sigma\bigl[xf(xy)+2x-y\bigr]\mathrm{d}y\,\mathrm{d}z+\bigl[yf(xy)+2y+x\bigr]\mathrm{d}z\,\mathrm{d}x+\bigl[zf(xy)+z\bigr]\mathrm{d}x\,\mathrm{d}y.$$`,
      options: null,
      answer: R`$I=\dfrac{14}{3}\pi$`,
      figure: null,
      kp: ['mint.surf2', 'mint.double', 'mint.surf1'],
      methods: ['合一投影法（转换投影法）', '两类曲面积分的关系', '极坐标计算二重积分', '高斯公式（另解）'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>第二类曲面积分（通量）的计算。曲面是圆锥面 $z=\sqrt{x^2+y^2}$ 在 $1\leqslant x^2+y^2\leqslant4$ 之间的一段（一个"锥台侧面"），取下侧。</p>
<p><b>第一个判断：能不能用高斯公式？</b>被积函数含抽象函数 $f(xy)$，而 $f$ 只说<b>连续</b>。高斯公式要求 $P,Q,R$ 有连续偏导，$\frac{\partial}{\partial x}[xf(xy)]=f(xy)+xyf'(xy)$ 需要 $f'$，题目没给。所以<b>不能对整个被积式直接用高斯公式</b>。这个"$f$ 只连续"的条件是出题人的明确暗示：$f$ 的部分一定会自己消失。</p>
<p><b>第二个判断：$f$ 的部分为什么会消失？</b>把三个分量里含 $f$ 的部分拿出来：$f(xy)\cdot(x,y,z)$——它是位置向量 $(x,y,z)$ 的倍数。圆锥面是由过顶点（原点）的直线（母线）组成的，锥面上一点的位置向量恰好沿着过该点的母线，而母线躺在锥面上，所以<b>位置向量与锥面相切、与法向量垂直</b>，通量为 0。（对比：球面上位置向量与法向量平行，通量最大。）</p>
<p><b>第三个判断：用什么方法算剩下的部分。</b>曲面是 $z=z(x,y)$ 的显式形式，投影到 $xOy$ 面是圆环，用"<b>合一投影法</b>"把三个坐标面上的积分统一投影到 $xOy$ 面最省事。</p>`,
      solution: R`<p><b>第一步：曲面的法向量与侧。</b>记 $\rho=\sqrt{x^2+y^2}$，$\Sigma:z=\rho$，投影区域 $D_{xy}:1\leqslant x^2+y^2\leqslant4$。</p>
$$z_x=\frac{x}{\rho},\qquad z_y=\frac{y}{\rho}.$$
<p>曲面 $z=z(x,y)$ 的上侧法向量为 $(-z_x,-z_y,1)$，下侧为 $(z_x,z_y,-1)$（$z$ 分量为负，指向下方）。</p>
<p><b>第二步：合一投影公式的来历。</b>第二类曲面积分可以写成</p>
$$\iint_\Sigma P\,\mathrm dy\mathrm dz+Q\,\mathrm dz\mathrm dx+R\,\mathrm dx\mathrm dy=\iint_\Sigma(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,\mathrm dS,$$
<p>其中 $(\cos\alpha,\cos\beta,\cos\gamma)$ 是所取一侧的单位法向量，它与 $(-z_x,-z_y,1)$ 平行（上侧同向，下侧反向），因此 $\dfrac{\cos\alpha}{\cos\gamma}=-z_x$，$\dfrac{\cos\beta}{\cos\gamma}=-z_y$，而 $\cos\gamma\,\mathrm dS=\mathrm dx\mathrm dy$。于是</p>
$$I=\iint_\Sigma\bigl(-Pz_x-Qz_y+R\bigr)\mathrm dx\,\mathrm dy,$$
<p>投影到 $D_{xy}$ 时，上侧取正号，<b>下侧取负号</b>：</p>
$$I=-\iint_{D_{xy}}\bigl(-Pz_x-Qz_y+R\bigr)\Big|_{z=\rho}\,\mathrm dx\,\mathrm dy.$$
<p><b>第三步：计算括号（关键的化简）。</b>代入 $z=\rho$：</p>
$$-Pz_x-Qz_y+R=-\frac{x}{\rho}\bigl[xf+2x-y\bigr]-\frac{y}{\rho}\bigl[yf+2y+x\bigr]+\bigl[\rho f+\rho\bigr],$$
<p>这里 $f$ 是 $f(xy)$ 的简写。前两项合并：</p>
$$-\frac1\rho\Bigl[(x^2+y^2)f+2(x^2+y^2)-xy+xy\Bigr]=-\frac1\rho\bigl[\rho^2f+2\rho^2\bigr]=-\rho f-2\rho.$$
<p>所以</p>
$$-Pz_x-Qz_y+R=-\rho f-2\rho+\rho f+\rho=-\rho.$$
<p>含 $f$ 的项完全抵消，与分析中的几何判断一致。</p>
<p><b>第四步：化为二重积分并用极坐标计算。</b></p>
$$I=-\iint_{D_{xy}}(-\rho)\,\mathrm dx\,\mathrm dy=\iint_{D_{xy}}\sqrt{x^2+y^2}\,\mathrm dx\,\mathrm dy.$$
<p>令 $x=r\cos\theta$，$y=r\sin\theta$，$\mathrm dx\,\mathrm dy=r\,\mathrm dr\,\mathrm d\theta$，$D_{xy}$ 对应 $0\leqslant\theta\leqslant2\pi$，$1\leqslant r\leqslant2$：</p>
$$I=\int_0^{2\pi}\mathrm d\theta\int_1^2r\cdot r\,\mathrm dr=2\pi\cdot\left[\frac{r^3}{3}\right]_1^2=2\pi\cdot\frac{8-1}{3}=\frac{14}{3}\pi.$$`,
      pitfalls: R`<ul><li><b>直接用高斯公式：</b>$f$ 只连续，$\frac{\partial}{\partial x}[xf(xy)]$ 不存在保证，不满足高斯公式条件。</li><li><b>下侧的符号：</b>合一投影后投影到 $xOy$ 面时，下侧要取负号；漏掉会得到 $-\frac{14}{3}\pi$。</li><li><b>忘记把 $z=\sqrt{x^2+y^2}$ 代入</b>：$R$ 中的 $z$ 必须换成 $\rho$，否则 $f$ 项无法抵消。</li><li><b>极坐标漏掉雅可比因子 $r$</b>：$\iint\rho\,\mathrm dx\mathrm dy=\iint r\cdot r\,\mathrm dr\mathrm d\theta$，不是 $\iint r\,\mathrm dr\mathrm d\theta$。</li><li>把投影区域写成圆盘 $x^2+y^2\leqslant4$，忘记挖掉中间的 $x^2+y^2&lt;1$。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>合一投影法：$\Sigma:z=z(x,y)$ 时，$\displaystyle\iint_\Sigma P\,\mathrm dy\mathrm dz+Q\,\mathrm dz\mathrm dx+R\,\mathrm dx\mathrm dy=\pm\iint_{D_{xy}}(-Pz_x-Qz_y+R)\,\mathrm dx\mathrm dy$，上侧取 $+$，下侧取 $-$。</li><li>位置向量 $(x,y,z)$ 与常见曲面的关系：锥面（顶点在原点）上与法向量垂直；球面（球心在原点）上与法向量平行。</li></ul>
<p><b>题型识别：</b>看到第二类曲面积分里有"只连续"的抽象函数 → 不能用高斯公式，想到合一投影或化成第一类，并预期抽象函数项会抵消；看到 $f(\cdot)\cdot(x,y,z)$ 结构配上锥面 → 这部分通量为 0。</p>`,
      alt: R`<p><b>拆分 + 高斯公式：</b>把向量场拆成 $\mathbf F_1=f(xy)(x,y,z)$ 与 $\mathbf F_2=(2x-y,\ 2y+x,\ z)$。在锥面上下侧法向量与 $(x,y,-z)$ 同向，而 $(x,y,z)\cdot(x,y,-z)=x^2+y^2-z^2=0$，所以 $\mathbf F_1$ 的通量为 0。</p><p>对光滑的 $\mathbf F_2$ 用高斯公式：补上 $\Sigma_1$：$z=2$（$x^2+y^2\leqslant4$，上侧）和 $\Sigma_2$：$z=1$（$x^2+y^2\leqslant1$，下侧），与 $\Sigma$ 一起围成 $\Omega=\{1\leqslant z\leqslant2,\ x^2+y^2\leqslant z^2\}$，且三片曲面都取外侧（锥面的外法向指向远离 $z$ 轴且向下，正是下侧）。$\operatorname{div}\mathbf F_2=2+2+1=5$，$\Omega$ 的体积 $=\displaystyle\int_1^2\pi z^2\,\mathrm dz=\frac{7\pi}{3}$，所以闭曲面上的总通量为 $\dfrac{35\pi}{3}$。水平圆盘上 $\mathrm dy\mathrm dz=\mathrm dz\mathrm dx=0$，只有 $R=z$ 一项：$\Sigma_1$ 上为 $\iint2\,\mathrm dx\mathrm dy=8\pi$，$\Sigma_2$ 上为 $-\iint1\,\mathrm dx\mathrm dy=-\pi$。于是</p>$$I=\frac{35\pi}{3}-8\pi-(-\pi)=\frac{35\pi}{3}-7\pi=\frac{14\pi}{3}.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy 对抽象函数 F 计算 P·z_x+Q·z_y−R（下侧法向）化简为 √(x²+y²)，f 项抵消；极坐标积分得 14π/3；拆分后用高斯公式 5·(7π/3)−8π+π 亦得 14π/3' },
      flags: ['OCR 中面积元 d y d z 等的多余空格已整理']
    },

    /* ───────────── 第19题 中值定理证明 ───────────── */
    {
      id: '2020-19', year: 2020, no: '第19题', type: '解答', score: 10,
      stem: R`设函数 $f(x)$ 在区间 $[0,2]$ 上具有连续导数，$f(0)=f(2)=0$，$M=\max\limits_{x\in[0,2]}\{|f(x)|\}$，证明：<br>（Ⅰ）存在 $\xi\in(0,2)$，使得 $|f'(\xi)|\geqslant M$；<br>（Ⅱ）若对任意的 $x\in(0,2)$，$|f'(x)|\leqslant M$，则 $M=0$.`,
      options: null,
      answer: R`证明见解答.`,
      figure: null,
      kp: ['diff.mvt', 'lim.closed', 'diff.mono'],
      methods: ['最值定理', '拉格朗日中值定理', '反证法', '费马引理', '构造辅助函数利用单调性'],
      difficulty: 4,
      analysis: R`<p><b>这题考什么：</b>拉格朗日中值定理的运用——它是把"函数值的变化"与"导数"联系起来的桥梁。</p>
<p><b>直观图像（先想清楚为什么对）：</b>函数从 $x=0$ 处的 $0$ 出发，在某点 $c$ 处 $|f|$ 达到最大值 $M$，最后在 $x=2$ 处回到 $0$。这就像走 2 公里的山路，先爬到高度 $M$ 再下到 0：</p>
<ul><li>上坡用了 $c$ 的水平距离，平均坡度是 $\frac Mc$；下坡用了 $2-c$，平均坡度是 $\frac{M}{2-c}$。</li><li>$c$ 和 $2-c$ 中<b>较短的那一段不超过 1</b>，所以那一段的平均坡度至少是 $M$。</li><li>拉格朗日中值定理说"平均坡度一定在某点被导数取到"，于是存在 $\xi$ 使 $|f'(\xi)|\geqslant M$。这就是第（Ⅰ）问。</li></ul>
<p><b>第（Ⅱ）问的图像：</b>如果处处 $|f'|\leqslant M$，那么上面两段都"刚好不能更陡"，只能是 $c=1$，并且函数必须是从 $(0,0)$ 直线爬到 $(1,M)$、再直线下降到 $(2,0)$ 的"帐篷"形折线。但帐篷在顶点处有尖角，<b>不可导</b>，与"$f$ 有连续导数"矛盾——除非帐篷高度 $M=0$。这正是证明的思路：用反证法，分 $c\ne1$ 和 $c=1$ 两种情况。</p>`,
      solution: R`<p><b>第（Ⅰ）问。</b></p>
<p><b>第一步：$M=0$ 的情形。</b>此时 $f\equiv0$，$f'\equiv0$，任取 $\xi\in(0,2)$ 都有 $|f'(\xi)|=0\geqslant0=M$，结论成立。</p>
<p><b>第二步：$M>0$ 时找最大值点。</b>$|f|$ 在闭区间 $[0,2]$ 上连续，由最值定理存在 $c\in[0,2]$ 使 $|f(c)|=M>0$。由于 $f(0)=f(2)=0$，$c\ne0$ 且 $c\ne2$，所以 $c\in(0,2)$。</p>
<p><b>第三步：在两段上分别用拉格朗日中值定理。</b>$f$ 在 $[0,c]$、$[c,2]$ 上连续、在内部可导，所以存在 $\xi_1\in(0,c)$，$\xi_2\in(c,2)$，使</p>
$$f(c)-f(0)=f'(\xi_1)\,c,\qquad f(2)-f(c)=f'(\xi_2)(2-c).$$
<p>取绝对值，并利用 $f(0)=f(2)=0$，$|f(c)|=M$：</p>
$$|f'(\xi_1)|=\frac{M}{c},\qquad|f'(\xi_2)|=\frac{M}{2-c}.$$
<p><b>第四步：取较短的那一段。</b></p>
<ul><li>若 $0&lt;c\leqslant1$，则 $\dfrac Mc\geqslant M$，取 $\xi=\xi_1$；</li><li>若 $1&lt;c&lt;2$，则 $0&lt;2-c&lt;1$，$\dfrac{M}{2-c}>M$，取 $\xi=\xi_2$。</li></ul>
<p>总之存在 $\xi\in(0,2)$，使 $|f'(\xi)|\geqslant M$。</p>
<p><b>第（Ⅱ）问。</b>用反证法。假设 $M>0$，取第（Ⅰ）问中的 $c\in(0,2)$，$|f(c)|=M$，并沿用 $\xi_1,\xi_2$。</p>
<p><b>第五步：$c\ne1$ 的情形导出矛盾。</b></p>
<ul><li>若 $0&lt;c&lt;1$：$|f'(\xi_1)|=\dfrac Mc>M$，而 $\xi_1\in(0,c)\subset(0,2)$，与 $|f'(x)|\leqslant M$ 矛盾。</li><li>若 $1&lt;c&lt;2$：$|f'(\xi_2)|=\dfrac{M}{2-c}>M$，同样矛盾。</li></ul>
<p>因此只能 $c=1$，即 $|f(1)|=M$。</p>
<p><b>第六步：$c=1$ 的情形。</b>不妨设 $f(1)=M$（若 $f(1)=-M$，用 $-f$ 代替 $f$，它满足全部条件且 $M$ 不变）。在 $[0,1]$ 上令</p>
$$g(x)=f(x)-Mx.$$
<p>$g$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内 $g'(x)=f'(x)-M\leqslant0$（因为 $f'(x)\leqslant|f'(x)|\leqslant M$），所以 $g$ 在 $[0,1]$ 上单调不增。又 $g(0)=0$，$g(1)=M-M=0$，于是对 $x\in[0,1]$，</p>
$$0=g(0)\geqslant g(x)\geqslant g(1)=0\ \Longrightarrow\ g(x)\equiv0,\quad\text{即 }f(x)=Mx\ (0\leqslant x\leqslant1).$$
<p><b>第七步：在 $x=1$ 处导出矛盾。</b>一方面，由 $f(x)=Mx$（$x\leqslant1$），左导数</p>
$$f'_-(1)=\lim_{x\to1^-}\frac{f(x)-f(1)}{x-1}=\lim_{x\to1^-}\frac{Mx-M}{x-1}=M,$$
<p>$f$ 在 $x=1$ 处可导，所以 $f'(1)=M$。另一方面，对一切 $x\in[0,2]$ 有 $f(x)\leqslant|f(x)|\leqslant M=f(1)$，所以 $x=1$ 是 $f$ 在区间内部的最大值点，由费马引理 $f'(1)=0$。于是 $M=0$，与假设 $M>0$ 矛盾。</p>
<p><b>结论：</b>$M=0$。</p>`,
      pitfalls: R`<ul><li><b>不讨论 $M=0$：</b>若 $M=0$，最大值点 $c$ 可能取在端点，"在 $[0,c]$ 上用拉格朗日"就无从谈起。</li><li><b>把 $|f(c)|=M$ 写成 $f(c)=M$：</b>最大值可能是负的最小值的绝对值，需要"不妨设"并说明理由（用 $-f$ 代替 $f$）。</li><li><b>第（Ⅱ）问只处理 $c\ne1$</b>，以为 $c=1$ 时也能直接得到矛盾。实际上 $c=1$ 时两段的平均坡度都恰好等于 $M$，中值定理本身导不出矛盾，必须用"帐篷顶点不可导"的论证。</li><li><b>第（Ⅰ）问不等号方向：</b>$0&lt;c\leqslant1$ 时 $\frac Mc\geqslant M$；$c=1$ 时取等号，所以（Ⅰ）只能写 $\geqslant$。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>已知若干点的函数值、要证导数的估计 → 在这些点之间用拉格朗日中值定理，"平均变化率 = 某点导数"。</li><li>两段长度之和固定为 2 → 较短的一段不超过 1，在那一段上估计。</li><li>内部最大值点 → 费马引理，导数为 0。</li><li>"导数 $\leqslant M$ + 端点值相等" → 构造 $g(x)=f(x)-Mx$，利用单调性夹出 $g\equiv0$。</li></ul>
<p><b>题型识别：</b>看到"$f$ 在端点为 0、$M=\max|f|$、证 $|f'(\xi)|\geqslant kM$" → 取最大值点 $c$，在 $[a,c]$、$[c,b]$ 上分别用拉格朗日；看到"若 $|f'|\leqslant M$ 则……" → 反证法，极端情况一般是折线，用可导性否定。</p>`,
      alt: R`<p><b>第（Ⅱ）问的积分证法（利用导数连续）：</b>同样先得到 $c=1$，不妨 $f(1)=M$。由牛顿—莱布尼茨公式，</p>$$M=f(1)-f(0)=\int_0^1f'(t)\,\mathrm dt\leqslant\int_0^1M\,\mathrm dt=M,$$<p>等号成立，所以 $\displaystyle\int_0^1\bigl[M-f'(t)\bigr]\mathrm dt=0$。被积函数 $M-f'(t)$ 连续且非负，积分为 0 只能恒为 0，于是在 $[0,1]$ 上 $f'(t)\equiv M$，特别地 $f'(1)=M$。再由费马引理 $f'(1)=0$，得 $M=0$。</p><p><b>为什么条件"可导"不能去掉：</b>帐篷函数 $f(x)=M(1-|x-1|)$ 满足 $f(0)=f(2)=0$、$\max|f|=M$、除 $x=1$ 外 $|f'|=M$，但 $M$ 可以是任何正数。它唯一的"缺陷"就是在 $x=1$ 处不可导——这说明第（Ⅱ）问的结论本质上来自可导性。</p>`,
      verify: { by: 'proof', ok: true, note: '逐步核对：最值定理保证 c 存在且 M>0 时 c 在开区间内；拉格朗日中值定理条件满足；(Ⅰ) 按 c≤1、c>1 分类完整；(Ⅱ) c≠1 时得严格不等式矛盾，c=1 时用单调性得 f(x)=Mx 再与费马引理矛盾；另用积分法交叉验证；补充了参考解析未单独处理的 M=0 情形' },
      flags: ['参考解析第（Ⅰ）问未单独讨论 M=0（此时最大值点可能在端点，拉格朗日中值定理无法在 [0,c] 上使用），本文补充了这一情形']
    }
  ];
});
