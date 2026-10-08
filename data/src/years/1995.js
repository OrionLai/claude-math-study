// 1995 年数学（一）· 高等数学部分（含向量代数与空间解析几何）
// 原卷：一(1)–(4)、二(1)–(4)、三(1)(2)、四(1)(2)、五、六、七；一(5)、二(5)、八、九为线性代数，十、十一为概率统计，不收录。
registerYear(1995, function (R) {
  return [
    /* ───────────── 一(1) ───────────── */
    {
      id: '1995-1-1', year: 1995, no: '一(1)', type: '填空', score: 3,
      stem: R`$\displaystyle\lim_{x\to 0}(1+3x)^{\frac{2}{\sin x}}=\underline{\qquad}$.`,
      options: null,
      answer: R`$\mathrm{e}^6$`,
      figure: null,
      kp: ['lim.compute', 'lim.rules'],
      methods: ['1^∞ 型未定式化为 e 的指数', '等价无穷小代换', '第二重要极限'],
      difficulty: 1,
      analysis: R`<p><b>先认类型。</b>$x\to0$ 时底数 $1+3x\to1$，指数 $\dfrac{2}{\sin x}\to\infty$，这是 $1^\infty$ 型未定式。</p><p><b>为什么它"未定"？</b>底数比 1 稍大一点点，单独看会把结果往 1 拉；可它又被自乘了"无穷多次"，会把一点点偏差放大。两股力量谁赢，取决于"底数偏离 1 的速度"和"指数变大的速度"之比，所以结果不能直接写成 1。</p><p><b>从第一性原理出发：</b>任何幂指函数都可以写成 $u^v=\mathrm{e}^{v\ln u}$，于是"幂"的问题变成"乘积" $v\ln u$ 的问题，而乘积正是等价无穷小最擅长处理的。再利用 $u\to1$ 时 $\ln u=\ln(1+(u-1))\sim u-1$，就得到 $1^\infty$ 型的万能公式：</p>$$\lim u^v=\mathrm{e}^{\lim v(u-1)}.$$`,
      solution: R`<p><b>第一步：化成指数形式。</b>因为 $1+3x>0$（$x$ 在 0 附近），可以写</p>$$(1+3x)^{\frac{2}{\sin x}}=\mathrm{e}^{\frac{2}{\sin x}\ln(1+3x)}.$$<p>指数函数 $\mathrm{e}^t$ 连续，所以极限可以"穿进"指数里：原式 $=\mathrm{e}^{\lim\limits_{x\to0}\frac{2\ln(1+3x)}{\sin x}}$。</p><p><b>第二步：算指数上的极限。</b>这是 $\frac00$ 型的乘除式，可以用等价无穷小整体替换：$x\to0$ 时 $\ln(1+3x)\sim3x$，$\sin x\sim x$，所以</p>$$\lim_{x\to0}\frac{2\ln(1+3x)}{\sin x}=\lim_{x\to0}\frac{2\cdot3x}{x}=6.$$<p><b>第三步：写出结果。</b>原式 $=\mathrm{e}^6$。</p>`,
      pitfalls: R`<p>① 看到底数趋于 1 就直接写"极限为 1"——这是把 $1^\infty$ 当成了确定型。</p><p>② 凑重要极限时配错系数：$(1+3x)^{\frac{1}{3x}}\to\mathrm{e}$，剩下的指数是 $\frac{2}{\sin x}\cdot3x=\frac{6x}{\sin x}\to6$，若把 $3x$ 漏掉会得到 $\mathrm{e}^2$。</p><p>③ 忘记 $\sin x\sim x$ 这一步，只算了 $\ln(1+3x)\sim3x$ 就停下。</p>`,
      summary: R`<p><b>方法要点：</b>$1^\infty$ 型 $\Rightarrow$ $\lim u^v=\mathrm{e}^{\lim v(u-1)}$。口诀："底减一，乘指数，放到 e 的头上"。</p><p><b>题型识别：</b>看到"底数 $\to1$、指数 $\to\infty$"的幂指函数，想到取对数或直接用上面的公式；指数上的极限再用等价无穷小、洛必达或泰勒去算。</p>`,
      alt: R`<p><b>凑第二重要极限：</b></p>$$(1+3x)^{\frac{2}{\sin x}}=\left[(1+3x)^{\frac{1}{3x}}\right]^{\frac{6x}{\sin x}},$$<p>方括号内 $\to\mathrm{e}$，指数 $\frac{6x}{\sin x}\to6$，故极限为 $\mathrm{e}^6$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit((1+3x)^(2/sin x), x, 0) = exp(6)；指数部分 limit(2·log(1+3x)/sin x) = 6' },
      flags: []
    },

    /* ───────────── 一(2) ───────────── */
    {
      id: '1995-1-2', year: 1995, no: '一(2)', type: '填空', score: 3,
      stem: R`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_{x^2}^{0}x\cos t^2\,\mathrm{d}t=\underline{\qquad}$.`,
      options: null,
      answer: R`$-\displaystyle\int_0^{x^2}\cos t^2\,\mathrm{d}t-2x^2\cos x^4$`,
      figure: null,
      kp: ['int.ftc'],
      methods: ['变限积分求导', '把与积分变量无关的因子提到积分号外', '乘积求导法则'],
      difficulty: 2,
      analysis: R`<p><b>这题的"坑"在被积函数里的 $x$。</b>积分变量是 $t$，求导变量是 $x$，而被积函数 $x\cos t^2$ 里同时含有 $x$。</p><p>变限积分求导公式 $\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_a^{\varphi(x)}f(t)\,\mathrm{d}t=f(\varphi(x))\varphi'(x)$ 是怎么来的？设 $F$ 是 $f$ 的一个原函数，积分等于 $F(\varphi(x))-F(a)$，再用链式法则求导。这个推导要求 $f$ <b>与 $x$ 无关</b>——如果被积函数里也有 $x$，$x$ 一变，被积函数本身也跟着变，公式就不再适用。</p><p><b>所以第一件事是把 $x$ 从积分号里请出来：</b>对 $t$ 积分时 $x$ 是常数，可以提到积分号外面。之后就变成"$x$ 乘一个变限积分"，用乘积求导即可。</p>`,
      solution: R`<p><b>第一步：提出常数因子 $x$ 并交换上下限。</b>在对 $t$ 积分的过程中 $x$ 不变，所以</p>$$\int_{x^2}^{0}x\cos t^2\,\mathrm{d}t=x\int_{x^2}^{0}\cos t^2\,\mathrm{d}t=-x\int_0^{x^2}\cos t^2\,\mathrm{d}t.$$<p>交换上下限要变号，这样变量 $x^2$ 就出现在上限，便于套公式。</p><p><b>第二步：记 $G(x)=\displaystyle\int_0^{x^2}\cos t^2\,\mathrm{d}t$，用乘积求导法则。</b></p>$$\frac{\mathrm{d}}{\mathrm{d}x}\bigl[-xG(x)\bigr]=-G(x)-xG'(x).$$<p><b>第三步：求 $G'(x)$。</b>$\cos t^2$ 是连续函数，由变上限积分求导公式（上限是 $x^2$，要乘上限的导数 $2x$）：</p>$$G'(x)=\cos\bigl((x^2)^2\bigr)\cdot(x^2)'=2x\cos x^4.$$<p>注意 $\cos t^2$ 表示 $\cos(t^2)$，把 $t=x^2$ 代进去得到 $\cos(x^4)$。</p><p><b>第四步：合并。</b></p>$$\frac{\mathrm{d}}{\mathrm{d}x}\int_{x^2}^{0}x\cos t^2\,\mathrm{d}t=-\int_0^{x^2}\cos t^2\,\mathrm{d}t-2x^2\cos x^4.$$<p>说明：$\cos t^2$ 没有初等原函数（它是菲涅耳积分），所以答案里保留积分号是正常的，不需要也不可能把它算出来。</p>`,
      pitfalls: R`<p>① 没把 $x$ 提出来，直接套公式写成 $-x\cos x^4\cdot2x$，漏掉了 $-\int_0^{x^2}\cos t^2\,\mathrm{d}t$ 这一项。</p><p>② 代入上限时写成 $\cos x^2$：被积函数是 $\cos(t^2)$，$t=x^2$ 时是 $\cos(x^4)$。</p><p>③ 忘了下限是 $x^2$、上限是 $0$，丢掉负号。</p><p>④ 试图先把 $\int\cos t^2\,\mathrm{d}t$ 求出来——它没有初等原函数，白费工夫。</p>`,
      summary: R`<p><b>一般公式：</b>$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_{\psi(x)}^{\varphi(x)}f(t)\,\mathrm{d}t=f(\varphi(x))\varphi'(x)-f(\psi(x))\psi'(x)$，前提是 $f$ 与 $x$ 无关。</p><p><b>看到被积函数里含求导变量 $x$：</b>能作为因子提出就提出（本题）；提不出来（如 $\int_0^x f(x-t)\,\mathrm{d}t$）就换元 $u=x-t$，把 $x$ 赶到积分限上。口诀："积分号里不留 $x$"。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: diff(Integral(x·cos t², (t, x², 0)), x) 与 −∫₀^{x²}cos t² dt − 2x²cos x⁴ 之差化简为 0' },
      flags: []
    },

    /* ───────────── 一(3) ───────────── */
    {
      id: '1995-1-3', year: 1995, no: '一(3)', type: '填空', score: 3,
      stem: R`设 $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}=2$，则 $[(\mathbf{a}+\mathbf{b})\times(\mathbf{b}+\mathbf{c})]\cdot(\mathbf{c}+\mathbf{a})=\underline{\qquad}$.`,
      options: null,
      answer: R`$4$`,
      figure: null,
      kp: ['vec.vector'],
      methods: ['混合积按分配律展开', '含重复向量的混合积为零', '混合积的轮换不变性', '行列式（系数矩阵）观点'],
      difficulty: 2,
      analysis: R`<p><b>混合积的本质是三阶行列式。</b>$(\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}$ 等于以 $\mathbf{a},\mathbf{b},\mathbf{c}$ 的坐标为三行的行列式，几何上是以三个向量为棱的平行六面体的"有向体积"。</p><p>于是行列式的性质全都可以用：</p><ul><li>对每个向量都是线性的（可以拆成几项相加）；</li><li>两个向量相同（或平行）时为 0——"扁平"的六面体体积为 0；</li><li>交换两个向量变号，轮换 $\mathbf{a}\to\mathbf{b}\to\mathbf{c}\to\mathbf{a}$ 不变号。</li></ul><p>已知条件只有 $[\mathbf{a}\,\mathbf{b}\,\mathbf{c}]=2$，所以思路就是：把所求式子展开，扔掉为 0 的项，剩下的都轮换成 $[\mathbf{a}\,\mathbf{b}\,\mathbf{c}]$。</p>`,
      solution: R`<p><b>第一步：先展开叉积。</b>叉积对加法满足分配律，且 $\mathbf{b}\times\mathbf{b}=\mathbf{0}$：</p>$$(\mathbf{a}+\mathbf{b})\times(\mathbf{b}+\mathbf{c})=\mathbf{a}\times\mathbf{b}+\mathbf{a}\times\mathbf{c}+\mathbf{b}\times\mathbf{b}+\mathbf{b}\times\mathbf{c}=\mathbf{a}\times\mathbf{b}+\mathbf{a}\times\mathbf{c}+\mathbf{b}\times\mathbf{c}.$$<p><b>第二步：再与 $\mathbf{c}+\mathbf{a}$ 作点积，共 6 项：</b></p>$$(\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}+(\mathbf{a}\times\mathbf{b})\cdot\mathbf{a}+(\mathbf{a}\times\mathbf{c})\cdot\mathbf{c}+(\mathbf{a}\times\mathbf{c})\cdot\mathbf{a}+(\mathbf{b}\times\mathbf{c})\cdot\mathbf{c}+(\mathbf{b}\times\mathbf{c})\cdot\mathbf{a}.$$<p><b>第三步：去掉为零的项。</b>$\mathbf{a}\times\mathbf{b}$ 同时垂直于 $\mathbf{a}$ 和 $\mathbf{b}$，所以 $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{a}=0$；同理 $(\mathbf{a}\times\mathbf{c})\cdot\mathbf{c}=(\mathbf{a}\times\mathbf{c})\cdot\mathbf{a}=(\mathbf{b}\times\mathbf{c})\cdot\mathbf{c}=0$。只剩</p>$$(\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}+(\mathbf{b}\times\mathbf{c})\cdot\mathbf{a}.$$<p><b>第四步：轮换。</b>$(\mathbf{b}\times\mathbf{c})\cdot\mathbf{a}$ 对应行列式的行顺序是 $\mathbf{b},\mathbf{c},\mathbf{a}$，由 $\mathbf{a},\mathbf{b},\mathbf{c}$ 经过一次轮换（相当于交换两次行）得到，符号不变，所以 $(\mathbf{b}\times\mathbf{c})\cdot\mathbf{a}=(\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}=2$。</p><p><b>第五步：</b>原式 $=2+2=4$。</p>`,
      pitfalls: R`<p>① 把叉积当成可交换的，写出 $\mathbf{a}\times\mathbf{c}=\mathbf{c}\times\mathbf{a}$（实际差一个负号）。</p><p>② 误以为 $(\mathbf{b}\times\mathbf{c})\cdot\mathbf{a}=-(\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}$：轮换不变号，只有"对换"才变号。</p><p>③ 展开时漏项或重复，建议像第二步那样把 6 项全部写出来再逐一判断。</p>`,
      summary: R`<p><b>方法要点：</b>混合积 = 行列式。若 $(\mathbf{u},\mathbf{v},\mathbf{w})=(\mathbf{a},\mathbf{b},\mathbf{c})M$（$M$ 为系数矩阵），则 $[\mathbf{u}\,\mathbf{v}\,\mathbf{w}]=\det M\cdot[\mathbf{a}\,\mathbf{b}\,\mathbf{c}]$。</p><p><b>题型识别：</b>看到"已知一组向量的混合积，求它们线性组合的混合积"，想到"展开 + 去重 + 轮换"，或直接算系数行列式。</p>`,
      alt: R`<p><b>系数行列式法：</b>三个新向量 $\mathbf{a}+\mathbf{b}$、$\mathbf{b}+\mathbf{c}$、$\mathbf{c}+\mathbf{a}$ 关于 $\mathbf{a},\mathbf{b},\mathbf{c}$ 的系数分别是 $(1,1,0)$、$(0,1,1)$、$(1,0,1)$。由行列式的乘法性质，</p>$$[(\mathbf{a}+\mathbf{b})\times(\mathbf{b}+\mathbf{c})]\cdot(\mathbf{c}+\mathbf{a})=\begin{vmatrix}1&1&0\\0&1&1\\1&0&1\end{vmatrix}\cdot(\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}=2\times2=4.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 用符号坐标向量 a,b,c 展开 [(a+b)×(b+c)]·(c+a) − 2(a×b)·c，化简为 0，故结果为 2×2=4' },
      flags: ['原卷 OCR 中向量 a、b、c 未加粗，按向量记号改为 \\mathbf{a} 等']
    },

    /* ───────────── 一(4) ───────────── */
    {
      id: '1995-1-4', year: 1995, no: '一(4)', type: '填空', score: 3,
      stem: R`幂级数 $\displaystyle\sum_{n=1}^{\infty}\frac{n}{2^n+(-3)^n}x^{2n-1}$ 的收敛半径 $R=\underline{\qquad}$.`,
      options: null,
      answer: R`$\sqrt3$`,
      figure: null,
      kp: ['series.power'],
      methods: ['缺项幂级数：对通项绝对值用比值判别法', '提出主导项 (-3)^n'],
      difficulty: 3,
      analysis: R`<p>本题有两个"特征"，各自决定了一步怎么做：</p><p><b>特征一：只有奇次幂 $x^{2n-1}$，是缺项幂级数。</b>公式 $R=\lim\left|\dfrac{a_n}{a_{n+1}}\right|$ 的前提是第 $n$ 项为 $a_nx^n$，即每个幂次都有。本题若写成 $\sum c_kx^k$，偶数次的 $c_k$ 全是 0，比值根本无意义；硬套公式会把 $x^{2n-1}$ 当成 $x^n$，得出 $R=3$ 的错误答案。</p><p><b>正确做法回到源头：</b>收敛半径是由"比值（或根值）判别法"推出来的，所以直接把 $x$ 当常数，对正项级数 $\sum|u_n(x)|$ 用比值判别法，解出使极限小于 1 的 $x$ 范围。</p><p><b>特征二：分母 $2^n+(-3)^n$。</b>$n$ 很大时 $3^n$ 远大于 $2^n$，所以分母"由 $(-3)^n$ 主导"。处理办法是把 $(-3)^n$ 提出来。</p>`,
      solution: R`<p><b>第一步：写出通项。</b>记 $u_n(x)=\dfrac{n}{2^n+(-3)^n}x^{2n-1}$，取 $x\ne0$。</p><p><b>第二步：整理分母。</b>$2^n+(-3)^n=(-3)^n\left[1+\left(-\tfrac23\right)^n\right]$，而 $\left(-\tfrac23\right)^n\to0$。</p><p><b>第三步：求相邻两项之比的极限。</b></p>$$\left|\frac{u_{n+1}(x)}{u_n(x)}\right|=\frac{n+1}{n}\cdot\frac{|(-3)^n|\,\bigl|1+(-\frac23)^n\bigr|}{|(-3)^{n+1}|\,\bigl|1+(-\frac23)^{n+1}\bigr|}\cdot\frac{|x|^{2n+1}}{|x|^{2n-1}}=\frac{n+1}{n}\cdot\frac13\cdot\frac{\bigl|1+(-\frac23)^n\bigr|}{\bigl|1+(-\frac23)^{n+1}\bigr|}\cdot x^2\ \longrightarrow\ \frac{x^2}{3}.$$<p><b>第四步：用比值判别法下结论。</b></p><ul><li>当 $\dfrac{x^2}{3}<1$，即 $|x|<\sqrt3$ 时，$\sum|u_n|$ 收敛，原级数绝对收敛；</li><li>当 $\dfrac{x^2}{3}>1$，即 $|x|>\sqrt3$ 时，从某项起 $|u_{n+1}|>|u_n|$，通项不趋于 0，级数发散。</li></ul><p>所以收敛半径 $R=\sqrt3$。</p><p>（补充：在 $x=\pm\sqrt3$ 处 $|u_n|=\dfrac{n\cdot3^{n-\frac12}}{|2^n+(-3)^n|}\sim\dfrac{n}{\sqrt3}\to\infty$，级数发散，收敛域为 $(-\sqrt3,\sqrt3)$；但本题只问半径。）</p>`,
      pitfalls: R`<p>① 直接套 $R=\lim\left|\dfrac{a_n}{a_{n+1}}\right|=3$，忽略了幂次是 $2n-1$ 而不是 $n$，错填 $3$。</p><p>② 认为 $(-3)^n$ 正负交替，"分母振荡导致极限不存在"——取绝对值并提出主导项后，振荡部分 $(-\frac23)^n$ 趋于 0，极限存在。</p><p>③ 由 $\frac{x^2}{3}<1$ 解成 $|x|<\frac{1}{\sqrt3}$ 或 $|x|<3$，不等式要解对。</p>`,
      summary: R`<p><b>方法要点：</b>缺项（只有奇次或偶次）或幂次形如 $x^{2n}$、$(x-1)^{3n}$ 的幂级数，一律"对通项的绝对值用比值法或根值法，把 $x$ 当常数解不等式"。</p><p><b>看到 $a^n+b^n$：</b>想到"大的说了算"，$\sqrt[n]{|a^n+b^n|}\to\max(|a|,|b|)$；计算时把绝对值大的那项提出来。</p>`,
      alt: R`<p><b>换元法：</b>令 $t=x^2$，则原级数 $=\dfrac1x\displaystyle\sum_{n=1}^{\infty}\frac{n}{2^n+(-3)^n}t^n$（$x\ne0$）。这是不缺项的幂级数，$\sqrt[n]{|a_n|}=\dfrac{\sqrt[n]{n}}{3\sqrt[n]{|1+(-\frac23)^n|}}\to\dfrac13$，所以关于 $t$ 的收敛半径为 $3$，即 $x^2<3$，$R=\sqrt3$。</p>`,
      verify: { by: 'mixed', ok: true, note: '手算比值极限为 x²/3；数值验证 |a_{n+1}/a_n| 在 n=20,50,100 时为 0.350、0.340、0.3367，趋于 1/3；n 次根在 n=200 时 0.342，同样趋于 1/3' },
      flags: []
    },

    /* ───────────── 二(1) ───────────── */
    {
      id: '1995-2-1', year: 1995, no: '二(1)', type: '选择', score: 3,
      stem: R`设有直线 $L:\begin{cases}x+3y+2z+1=0,\\2x-y-10z+3=0\end{cases}$ 及平面 $\pi:4x-2y+z-2=0$，则直线 $L$（　　）.`,
      options: [R`平行于 $\pi$`, R`在 $\pi$ 上`, R`垂直于 $\pi$`, R`与 $\pi$ 斜交`],
      answer: 'C',
      figure: null,
      kp: ['vec.planeline', 'vec.vector'],
      methods: ['一般式直线的方向向量 = 两法向量的叉积', '比较方向向量与法向量的关系'],
      difficulty: 1,
      analysis: R`<p>直线与平面的位置关系，完全由两个向量决定：直线的方向向量 $\mathbf{s}$ 和平面的法向量 $\mathbf{n}$。</p><ul><li>$\mathbf{s}\parallel\mathbf{n}$：直线沿着法线方向走，所以<b>线垂直于面</b>；</li><li>$\mathbf{s}\perp\mathbf{n}$（$\mathbf{s}\cdot\mathbf{n}=0$）：直线与法线垂直，<b>线平行于面或在面内</b>，再看直线上一点是否在平面上来区分；</li><li>两者都不是：斜交。</li></ul><p>题中直线是两个平面的交线（一般式），它同时躺在两个平面里，所以它的方向同时垂直于两个平面的法向量，于是 $\mathbf{s}=\mathbf{n}_1\times\mathbf{n}_2$。</p>`,
      solution: R`<p><b>第一步：求直线的方向向量。</b>两平面的法向量为 $\mathbf{n}_1=(1,3,2)$，$\mathbf{n}_2=(2,-1,-10)$，</p>$$\mathbf{s}=\mathbf{n}_1\times\mathbf{n}_2=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\1&3&2\\2&-1&-10\end{vmatrix}=\bigl(3\cdot(-10)-2\cdot(-1),\ -[1\cdot(-10)-2\cdot2],\ 1\cdot(-1)-3\cdot2\bigr)=(-28,14,-7).$$<p><b>第二步：与平面法向量比较。</b>平面 $\pi$ 的法向量 $\mathbf{n}=(4,-2,1)$，而 $\mathbf{s}=-7(4,-2,1)=-7\mathbf{n}$，所以 $\mathbf{s}\parallel\mathbf{n}$，直线 $L$ 垂直于平面 $\pi$，选 <b>C</b>。</p><p><b>第三步：逐一排除。</b></p><ul><li>A、B：线平行于面或在面内，都要求 $\mathbf{s}\cdot\mathbf{n}=0$；但 $\mathbf{s}\cdot\mathbf{n}=-112-28-7=-147\ne0$，均错。</li><li>D：斜交指既不平行也不垂直，而这里恰好垂直，错。</li></ul>`,
      pitfalls: R`<p>① 叉积的 $\mathbf{j}$ 分量前面有负号，最容易算错符号。算完可以用 $\mathbf{s}\cdot\mathbf{n}_1=0$、$\mathbf{s}\cdot\mathbf{n}_2=0$ 自检：$-28+42-14=0$，$-56-14+70=0$。</p><p>② 把关系记反：看到 $\mathbf{s}\parallel\mathbf{n}$ 就以为"线平行于面"。记住 $\mathbf{n}$ 是垂直于面的方向。</p>`,
      summary: R`<p><b>口诀：</b>"$\mathbf{s}$ 平行 $\mathbf{n}$，线垂直面；$\mathbf{s}$ 垂直 $\mathbf{n}$，线平行面（或在面内）"。</p><p><b>题型识别：</b>看到一般式直线，想到 $\mathbf{s}=\mathbf{n}_1\times\mathbf{n}_2$；判断线面关系只需算 $\mathbf{s}$ 与 $\mathbf{n}$ 是否成比例、点积是否为零。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: (1,3,2)×(2,−1,−10)=(−28,14,−7)=−7·(4,−2,1)；与法向量点积 −147≠0' },
      flags: []
    },

    /* ───────────── 二(2) ───────────── */
    {
      id: '1995-2-2', year: 1995, no: '二(2)', type: '选择', score: 3,
      stem: R`设在 $[0,1]$ 上 $f''(x)>0$，则 $f'(0)$，$f'(1)$，$f(1)-f(0)$ 或 $f(0)-f(1)$ 的大小顺序是（　　）.`,
      options: [R`$f'(1)>f'(0)>f(1)-f(0)$`, R`$f'(1)>f(1)-f(0)>f'(0)$`, R`$f(1)-f(0)>f'(1)>f'(0)$`, R`$f'(1)>f(0)-f(1)>f'(0)$`],
      answer: 'B',
      figure: null,
      kp: ['diff.mvt', 'diff.convex'],
      methods: ['拉格朗日中值定理', '由 f″>0 得 f′ 单调递增', '特例排除法'],
      difficulty: 2,
      analysis: R`<p><b>把三个量翻译成几何语言：</b>$f'(0)$、$f'(1)$ 是曲线在两个端点处的切线斜率；$f(1)-f(0)=\dfrac{f(1)-f(0)}{1-0}$ 是连接两端点的割线斜率。</p><p>"割线斜率"和"切线斜率"之间的桥梁正是<b>拉格朗日中值定理</b>：割线斜率等于中间某点的切线斜率。而 $f''>0$ 说明 $f'$ 单调增加，曲线是凹的（向上弯），切线越往右越陡。于是割线斜率被夹在两端的切线斜率之间。</p><svg viewBox="0 0 240 150" style="max-width:300px;width:100%;display:block;margin:8px auto"><title>凹曲线的割线与两端切线</title><path d="M40 130 Q120 130 200 40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="20" y1="130" x2="120" y2="130" stroke="currentColor" stroke-dasharray="2 3"/><line x1="155" y1="90.6" x2="215" y2="23.1" stroke="currentColor" stroke-dasharray="2 3"/><line x1="40" y1="130" x2="200" y2="40" stroke="currentColor" stroke-dasharray="6 4"/><circle cx="40" cy="130" r="3" fill="currentColor"/><circle cx="200" cy="40" r="3" fill="currentColor"/><text x="44" y="146" font-size="11" fill="currentColor">切线斜率 f′(0)（最平）</text><text x="70" y="30" font-size="11" fill="currentColor">切线斜率 f′(1)（最陡）</text><text x="20" y="80" font-size="11" fill="currentColor">割线斜率 f(1)−f(0)</text></svg>`,
      solution: R`<p><b>第一步：用拉格朗日中值定理。</b>$f''$ 在 $[0,1]$ 上存在，说明 $f'$ 存在，从而 $f$ 在 $[0,1]$ 上连续、可导。于是存在 $c\in(0,1)$，使</p>$$f(1)-f(0)=f'(c)\cdot(1-0)=f'(c).$$<p><b>第二步：用 $f''>0$。</b>$f''(x)>0$ 说明 $f'(x)$ 在 $[0,1]$ 上严格单调递增。由 $0< c< 1$ 得</p>$$f'(0)< f'(c)< f'(1).$$<p><b>第三步：合并。</b>$f'(1)>f(1)-f(0)>f'(0)$，选 <b>B</b>。</p><p><b>第四步：用特例排除其余选项。</b>取 $f(x)=x^2$（满足 $f''=2>0$），则 $f'(0)=0$，$f'(1)=2$，$f(1)-f(0)=1$，$f(0)-f(1)=-1$：</p><ul><li>A 说 $2>0>1$，错；</li><li>C 说 $1>2$，错；</li><li>D 说 $2>-1>0$，错；</li><li>B 说 $2>1>0$，对。</li></ul><p>选择题问的是"对所有满足条件的 $f$ 都成立"的结论，所以一个特例不满足就足以否定一个选项。</p>`,
      pitfalls: R`<p>① 把凹凸记反：$f''>0$ 时切线斜率递增（曲线"开口向上"），不是递减。</p><p>② 被选项 D 中的 $f(0)-f(1)$ 干扰——它是割线斜率的相反数，与本题结论无关。</p><p>③ 写拉格朗日中值定理时把 $c$ 取成端点：$c$ 一定在开区间 $(0,1)$ 内，这才保证不等号是严格的。</p>`,
      summary: R`<p><b>方法要点：</b>"差值 $f(b)-f(a)$ 与某点导数比大小" $\Rightarrow$ 拉格朗日中值定理把差值变成 $f'(c)(b-a)$，再用 $f''$ 的符号判断 $f'$ 的单调性。</p><p><b>几何记忆：</b>凹函数（$f''>0$）的割线斜率夹在左端切线斜率与右端切线斜率之间；凸函数则相反。</p><p><b>选择题技巧：</b>抽象函数比大小，先取最简单的特例（如 $x^2$、$\mathrm{e}^x$）快速排除。</p>`,
      verify: { by: 'mixed', ok: true, note: '拉格朗日中值定理推理；sympy 用 f=x²、eˣ、−ln(1+x) 三个满足 f″>0 的特例验证 f′(1)>f(1)−f(0)>f′(0) 均成立' },
      flags: []
    },

    /* ───────────── 二(3) ───────────── */
    {
      id: '1995-2-3', year: 1995, no: '二(3)', type: '选择', score: 3,
      stem: R`设 $f(x)$ 可导，$F(x)=f(x)(1+|\sin x|)$，则 $f(0)=0$ 是 $F(x)$ 在 $x=0$ 处可导的（　　）.`,
      options: [R`充分必要条件`, R`充分条件但非必要条件`, R`必要条件但非充分条件`, R`既非充分条件又非必要条件`],
      answer: 'A',
      figure: null,
      kp: ['diff.def'],
      methods: ['拆分：可导部分 + 含绝对值部分', '用导数定义求左右导数'],
      difficulty: 3,
      analysis: R`<p><b>问题出在 $|\sin x|$。</b>它在 $x=0$ 处有一个"尖角"：右导数为 $1$，左导数为 $-1$，不可导。所以不能对 $F$ 直接用乘积求导法则（法则要求两个因子都可导）。</p><p><b>拆开看：</b>$F(x)=f(x)+f(x)|\sin x|$。第一项 $f(x)$ 本来就可导，所以 $F$ 在 0 处可不可导，完全取决于 $g(x)=f(x)|\sin x|$ 在 0 处可不可导（可导 ± 可导仍可导；反过来 $g=F-f$）。</p><p><b>直观理解：</b>$g$ 是"尖角" $|\sin x|$ 乘上一个"放大系数" $f(x)$。在 $x=0$ 附近这个系数约等于 $f(0)$：若 $f(0)\ne0$，尖角被保留下来；若 $f(0)=0$，相当于把尖角"压扁"成平的，就可导了。用定义算左右导数即可把这个直观变成严格结论。</p>`,
      solution: R`<p><b>第一步：拆分。</b>$F(x)=f(x)+g(x)$，其中 $g(x)=f(x)|\sin x|$。因为 $f$ 在 $0$ 处可导，所以</p><p style="text-align:center">$F$ 在 $0$ 处可导 $\iff$ $g$ 在 $0$ 处可导。</p><p><b>第二步：用定义求 $g$ 的右导数。</b>$g(0)=f(0)\cdot0=0$，</p>$$g'_+(0)=\lim_{x\to0^+}\frac{f(x)|\sin x|-0}{x}=\lim_{x\to0^+}f(x)\cdot\frac{\sin x}{x}=f(0)\cdot1=f(0).$$<p>这里用到：$f$ 可导必连续，所以 $f(x)\to f(0)$；$x>0$ 且很小时 $|\sin x|=\sin x$。</p><p><b>第三步：求左导数。</b>$x\to0^-$ 时 $\sin x< 0$，$|\sin x|=-\sin x$，</p>$$g'_-(0)=\lim_{x\to0^-}f(x)\cdot\frac{-\sin x}{x}=-f(0).$$<p><b>第四步：下结论。</b>$g$ 在 $0$ 处可导 $\iff g'_+(0)=g'_-(0)\iff f(0)=-f(0)\iff f(0)=0$。所以 $f(0)=0$ 是 $F$ 在 $x=0$ 处可导的<b>充分必要条件</b>，选 <b>A</b>。</p><p><b>第五步：检验与排除。</b>B、C、D 都否认了"充分"或"必要"之一，而上面两个方向都证明了，故都错。特例验证：$f(x)=1$ 时 $F=1+|\sin x|$，在 0 处是尖角，不可导（$f(0)\ne0$）；$f(x)=x$ 时 $F=x+x|\sin x|$，$F'(0)=1$ 存在（$f(0)=0$）。</p>`,
      pitfalls: R`<p>① 对 $F$ 直接用乘积法则，或认为"含不可导因子就一定不可导"而选 D。乘积 $f(x)|\sin x|$ 的可导性要用定义判断。</p><p>② 只算一侧导数就下结论；绝对值函数一定要分左右。</p><p>③ 求极限时 $f(x)\to f(0)$ 依据的是"可导必连续"，要会说出理由。</p>`,
      summary: R`<p><b>重要结论：</b>若 $\varphi(x)$ 在 $x=a$ 处连续，则 $\varphi(x)|x-a|$ 在 $x=a$ 处可导 $\iff\varphi(a)=0$。本题 $|\sin x|$ 在 0 附近与 $|x|$ 同样是"尖角"，结论相同。</p><p><b>题型识别：</b>看到"可导函数 × 绝对值因子"问可导性，想到"拆出可导部分 + 对剩余部分用定义分左右求导"；零因子能把尖角抹平。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 对 f=1+x、x、2+3x+x²、x² 分别算 F 在 0 处的左右导数，结果都等于 f′(0)∓f(0)，仅 f(0)=0 时左右相等' },
      flags: []
    },

    /* ───────────── 二(4) ───────────── */
    {
      id: '1995-2-4', year: 1995, no: '二(4)', type: '选择', score: 3,
      stem: R`设 $u_n=(-1)^n\ln\left(1+\dfrac{1}{\sqrt n}\right)$，则级数（　　）.`,
      options: [
        R`$\displaystyle\sum_{n=1}^{\infty}u_n$ 与 $\displaystyle\sum_{n=1}^{\infty}u_n^2$ 都收敛`,
        R`$\displaystyle\sum_{n=1}^{\infty}u_n$ 与 $\displaystyle\sum_{n=1}^{\infty}u_n^2$ 都发散`,
        R`$\displaystyle\sum_{n=1}^{\infty}u_n$ 收敛而 $\displaystyle\sum_{n=1}^{\infty}u_n^2$ 发散`,
        R`$\displaystyle\sum_{n=1}^{\infty}u_n$ 发散而 $\displaystyle\sum_{n=1}^{\infty}u_n^2$ 收敛`
      ],
      answer: 'C',
      figure: null,
      kp: ['series.alt', 'series.positive'],
      methods: ['莱布尼茨判别法', '比较判别法的极限形式（等价无穷小）', 'p 级数'],
      difficulty: 2,
      analysis: R`<p>两个级数性质完全不同，要用不同的工具：</p><ul><li>$\sum u_n$ 带 $(-1)^n$，是<b>交错级数</b>，首选莱布尼茨判别法：看 $|u_n|$ 是否单调递减趋于 0。</li><li>$\sum u_n^2$ 每一项都非负，是<b>正项级数</b>，首选比较判别法：$\ln(1+\square)\sim\square$，把它"翻译"成 $p$ 级数。</li></ul><p>这道题的价值在于它揭示了一个事实：<b>一般项级数收敛，平方后不一定收敛</b>。原因是 $\sum u_n$ 的收敛靠的是正负项相互抵消（条件收敛），平方后符号全变正，抵消机制没有了。</p>`,
      solution: R`<p><b>第一步：判断 $\sum u_n$。</b>记 $a_n=\ln\left(1+\frac{1}{\sqrt n}\right)>0$，则 $u_n=(-1)^na_n$。</p><ul><li>单调递减：$n$ 增大时 $1+\frac1{\sqrt n}$ 减小，$\ln$ 是增函数，所以 $a_n$ 递减；</li><li>趋于零：$a_n\to\ln1=0$。</li></ul><p>由莱布尼茨判别法，$\sum u_n$ 收敛。</p><p><b>第二步：判断 $\sum u_n^2$。</b>$u_n^2=\ln^2\left(1+\frac1{\sqrt n}\right)>0$。因为 $\ln(1+t)\sim t$（$t\to0$），</p>$$\lim_{n\to\infty}\frac{u_n^2}{1/n}=\lim_{n\to\infty}\left[\frac{\ln(1+\frac{1}{\sqrt n})}{\frac{1}{\sqrt n}}\right]^2=1.$$<p>调和级数 $\sum\frac1n$ 发散，由比较判别法的极限形式，$\sum u_n^2$ 发散。</p><p><b>第三步：选择。</b>$\sum u_n$ 收敛、$\sum u_n^2$ 发散，选 <b>C</b>。A 错在 $\sum u_n^2$ 并不收敛；B 错在 $\sum u_n$ 收敛；D 两半都说反了。</p><p><b>补充：</b>$\sum|u_n|$ 与 $\sum\frac{1}{\sqrt n}$ 同敛散，发散，所以 $\sum u_n$ 是<b>条件收敛</b>。</p>`,
      pitfalls: R`<p>① 以为"$\sum u_n$ 收敛 $\Rightarrow\sum u_n^2$ 收敛"而选 A。这个推断只在 $\sum u_n$ <b>绝对收敛</b>时成立（那时 $|u_n|\to0$，从某项起 $u_n^2\le|u_n|$）。</p><p>② 用莱布尼茨判别法时只验证 $a_n\to0$，忘了验证单调递减。</p><p>③ 把 $\ln^2(1+\frac1{\sqrt n})$ 的阶算成 $\frac{1}{\sqrt n}$ 或 $\frac1{n^2}$；平方后是 $\frac1n$。</p>`,
      summary: R`<p><b>题型识别：</b>看到 $(-1)^n\times$（正的、递减趋于 0 的量）$\Rightarrow$ 莱布尼茨；看到含 $\ln(1+\square)$、$\sin\square$、$1-\cos\square$ 的正项级数 $\Rightarrow$ 等价无穷小换成 $p$ 级数比较。</p><p><b>经典反例：</b>$\sum\frac{(-1)^n}{\sqrt n}$ 收敛，但 $\sum\left(\frac{(-1)^n}{\sqrt n}\right)^2=\sum\frac1n$ 发散。记住它，很多"收敛性能否传递"的选择题都能秒杀。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit(n·ln²(1+1/√n), n→∞) = 1，故 Σu_n² 与调和级数同敛散；Σu_n 由莱布尼茨判别法收敛' },
      flags: []
    },

    /* ───────────── 三(1) ───────────── */
    {
      id: '1995-3-1', year: 1995, no: '三(1)', type: '解答', score: 5,
      stem: R`设 $u=f(x,y,z)$，$\varphi(x^2,\mathrm{e}^y,z)=0$，$y=\sin x$，其中 $f,\varphi$ 都具有一阶连续偏导数，且 $\dfrac{\partial\varphi}{\partial z}\ne0$，求 $\dfrac{\mathrm{d}u}{\mathrm{d}x}$.`,
      options: null,
      answer: R`$\dfrac{\mathrm{d}u}{\mathrm{d}x}=f_1'+f_2'\cos x-\dfrac{f_3'}{\varphi_3'}\left(2x\varphi_1'+\mathrm{e}^{\sin x}\cos x\,\varphi_2'\right)$，其中 $f_i'$ 在 $(x,\sin x,z)$ 处取值，$\varphi_i'$ 在 $(x^2,\mathrm{e}^{\sin x},z)$ 处取值。`,
      figure: null,
      kp: ['mdiff.chain', 'mdiff.implicit'],
      methods: ['数变量、画变量关系图', '多元复合函数链式法则（全导数）', '隐函数求导：方程两边对 x 求导'],
      difficulty: 3,
      analysis: R`<p><b>第一步永远是"理清谁依赖谁"。</b>题中共有 $u,x,y,z$ 四个变量、三个方程（$u=f$、$\varphi=0$、$y=\sin x$），所以只有 $4-3=1$ 个自变量。题目问 $\frac{\mathrm{d}u}{\mathrm{d}x}$（用的是 $\mathrm{d}$ 不是 $\partial$），说明自变量是 $x$，其余都是 $x$ 的一元函数：</p><ul><li>$y=\sin x$ 是显式给出的；</li><li>$z$ 由方程 $\varphi(x^2,\mathrm{e}^{y},z)=0$ 隐式确定，$z=z(x)$。条件 $\frac{\partial\varphi}{\partial z}\ne0$ 正是隐函数存在定理要求的条件，它保证 $z(x)$ 存在且可导——题目给这个条件，就是在提示你"$z$ 是由方程确定的隐函数"；</li><li>$u=f(x,y(x),z(x))$ 是 $x$ 的一元函数，要求的是全导数。</li></ul><svg viewBox="0 0 240 130" style="max-width:280px;width:100%;display:block;margin:8px auto"><title>变量关系图</title><line x1="120" y1="24" x2="45" y2="62" stroke="currentColor"/><line x1="120" y1="24" x2="120" y2="62" stroke="currentColor"/><line x1="120" y1="24" x2="195" y2="62" stroke="currentColor"/><line x1="120" y1="78" x2="120" y2="108" stroke="currentColor"/><line x1="195" y1="78" x2="195" y2="108" stroke="currentColor"/><text x="115" y="18" font-size="14" fill="currentColor">u</text><text x="40" y="75" font-size="14" fill="currentColor">x</text><text x="115" y="75" font-size="14" fill="currentColor">y</text><text x="190" y="75" font-size="14" fill="currentColor">z</text><text x="115" y="122" font-size="14" fill="currentColor">x</text><text x="190" y="122" font-size="14" fill="currentColor">x</text><text x="62" y="40" font-size="10" fill="currentColor">f₁′</text><text x="124" y="48" font-size="10" fill="currentColor">f₂′</text><text x="166" y="40" font-size="10" fill="currentColor">f₃′</text><text x="124" y="97" font-size="10" fill="currentColor">cos x</text><text x="199" y="97" font-size="10" fill="currentColor">dz/dx</text></svg><p>按图"分线相加、连线相乘"：$\dfrac{\mathrm{d}u}{\mathrm{d}x}=f_1'+f_2'\dfrac{\mathrm{d}y}{\mathrm{d}x}+f_3'\dfrac{\mathrm{d}z}{\mathrm{d}x}$。剩下唯一未知的是 $\dfrac{\mathrm{d}z}{\mathrm{d}x}$，从方程 $\varphi=0$ 里求。</p>`,
      solution: R`<p>记号：$f_1',f_2',f_3'$ 表示 $f$ 对第 1、2、3 个位置变量的偏导数；$\varphi_1',\varphi_2',\varphi_3'$ 同理（注意 $\varphi_1'$ 是对第一个位置 $x^2$ 的偏导，不是对 $x$ 的偏导）。</p><p><b>第一步：对 $u$ 求全导数。</b>$u=f(x,y,z)$，其中 $y=\sin x$，$z=z(x)$，由链式法则</p>$$\frac{\mathrm{d}u}{\mathrm{d}x}=f_1'\cdot1+f_2'\cdot\frac{\mathrm{d}y}{\mathrm{d}x}+f_3'\cdot\frac{\mathrm{d}z}{\mathrm{d}x}=f_1'+f_2'\cos x+f_3'\frac{\mathrm{d}z}{\mathrm{d}x}.$$<p><b>第二步：把方程 $\varphi(x^2,\mathrm{e}^y,z)=0$ 两边对 $x$ 求导。</b>三个位置上的中间变量分别是 $x^2$、$\mathrm{e}^y$、$z$，它们对 $x$ 的导数分别是</p>$$(x^2)'=2x,\qquad(\mathrm{e}^y)'=\mathrm{e}^y\cdot y'=\mathrm{e}^{\sin x}\cos x,\qquad z'=\frac{\mathrm{d}z}{\mathrm{d}x}.$$<p>所以</p>$$2x\,\varphi_1'+\mathrm{e}^{\sin x}\cos x\,\varphi_2'+\varphi_3'\frac{\mathrm{d}z}{\mathrm{d}x}=0.$$<p><b>第三步：解出 $\dfrac{\mathrm{d}z}{\mathrm{d}x}$。</b>因为 $\varphi_3'=\dfrac{\partial\varphi}{\partial z}\ne0$，可以除过去：</p>$$\frac{\mathrm{d}z}{\mathrm{d}x}=-\frac{2x\,\varphi_1'+\mathrm{e}^{\sin x}\cos x\,\varphi_2'}{\varphi_3'}.$$<p><b>第四步：代回第一步。</b></p>$$\frac{\mathrm{d}u}{\mathrm{d}x}=f_1'+f_2'\cos x-\frac{f_3'}{\varphi_3'}\left(2x\,\varphi_1'+\mathrm{e}^{\sin x}\cos x\,\varphi_2'\right),$$<p>其中 $f_i'$ 在点 $(x,\sin x,z)$ 处取值，$\varphi_i'$ 在点 $(x^2,\mathrm{e}^{\sin x},z)$ 处取值。</p>`,
      pitfalls: R`<p>① 混淆 $\frac{\partial u}{\partial x}$ 与 $\frac{\mathrm{d}u}{\mathrm{d}x}$：$\frac{\partial f}{\partial x}=f_1'$ 只是"其余变量不动"时的变化率；而这里 $y,z$ 都随 $x$ 变，要的是全导数。</p><p>② 对 $\varphi$ 求导时，把 $\varphi_1'$ 当成"对 $x$ 的偏导"，漏乘 $(x^2)'=2x$；或者对 $\mathrm{e}^y$ 求导时漏掉 $y'=\cos x$。</p><p>③ 忘记 $\varphi_2'$ 前面的系数是 $\mathrm{e}^y=\mathrm{e}^{\sin x}$，最后结果里应把 $y$ 代成 $\sin x$。</p>`,
      summary: R`<p><b>方法要点：</b>多元复合 + 隐函数的三步曲——① 数变量：变量个数 − 方程个数 = 自变量个数；② 画关系图，"分线相加，连线相乘"；③ 隐函数部分：方程两边对自变量求导，再解出所需导数。</p><p><b>题型识别：</b>看到"$\frac{\partial\varphi}{\partial z}\ne0$"这类条件，就知道 $z$ 是由 $\varphi=0$ 确定的隐函数；看到 $\mathrm{d}$ 而不是 $\partial$，就知道只有一个自变量，要求全导数。</p>`,
      alt: R`<p><b>全微分法（利用一阶全微分形式不变性）：</b>不必先分清谁是自变量，直接对三个关系式取全微分：</p>$$\mathrm{d}u=f_1'\mathrm{d}x+f_2'\mathrm{d}y+f_3'\mathrm{d}z,\qquad \mathrm{d}y=\cos x\,\mathrm{d}x,\qquad 2x\varphi_1'\mathrm{d}x+\mathrm{e}^y\varphi_2'\mathrm{d}y+\varphi_3'\mathrm{d}z=0.$$<p>由后两式把 $\mathrm{d}y,\mathrm{d}z$ 都用 $\mathrm{d}x$ 表示：$\mathrm{d}z=-\dfrac{2x\varphi_1'+\mathrm{e}^{\sin x}\cos x\,\varphi_2'}{\varphi_3'}\mathrm{d}x$，代入第一式，$\mathrm{d}x$ 前的系数就是 $\frac{\mathrm{d}u}{\mathrm{d}x}$，结果相同。这种方法在变量多、关系复杂时更不容易出错。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 取具体函数 f=x²y+y·sin z+xz³、φ=pq+w³+w−5（φ_w≠0），直接对 u(x)=f(x,sin x,z(x)) 隐式求导，与公式结果之差化简为 0' },
      flags: []
    },

    /* ───────────── 三(2) ───────────── */
    {
      id: '1995-3-2', year: 1995, no: '三(2)', type: '解答', score: 5,
      stem: R`设函数 $f(x)$ 在区间 $[0,1]$ 上连续，并设 $\displaystyle\int_0^1 f(x)\,\mathrm{d}x=A$，求 $\displaystyle\int_0^1\mathrm{d}x\int_x^1 f(x)f(y)\,\mathrm{d}y$.`,
      options: null,
      answer: R`$\dfrac{A^2}{2}$`,
      figure: null,
      kp: ['mint.double', 'int.ftc'],
      methods: ['构造变上限积分 F(x)=∫₀ˣf(t)dt', '凑微分', '交换积分变量名 + 对称性'],
      difficulty: 3,
      analysis: R`<p><b>困难在哪？</b>$f$ 是抽象函数，我们只知道它在 $[0,1]$ 上的积分是 $A$。所以不可能"直接算"，必须设法把所求的量用 $\int_0^1f$ 表示出来。</p><p><b>思路一（原函数法）：</b>内层积分 $\int_x^1f(y)\,\mathrm{d}y$ 是一个"变下限积分"，要表达它，最自然的工具是 $f$ 的原函数 $F(x)=\int_0^xf(t)\,\mathrm{d}t$。一旦全部写成 $F$ 的式子，$f(x)\,\mathrm{d}x=\mathrm{d}F(x)$，积分就变成 $\int F\,\mathrm{d}F$ 这类能直接积出来的形式。</p><p><b>思路二（对称法，几何直观）：</b>把它看成二重积分，积分区域是正方形 $[0,1]^2$ 中对角线 $y=x$ 上方的三角形 $D_1$；被积函数 $f(x)f(y)$ 关于 $x,y$ 对称。对角线下方的三角形 $D_2$ 上的积分一定与 $D_1$ 上的相等，而两块拼起来是整个正方形，其上积分为 $\left(\int_0^1f\right)^2=A^2$，于是答案是一半。</p><svg viewBox="0 0 170 150" style="max-width:220px;width:100%;display:block;margin:8px auto"><title>积分区域：正方形对角线上方的三角形</title><polygon points="30,130 30,20 140,20" fill="currentColor" fill-opacity="0.18" stroke="none"/><rect x="30" y="20" width="110" height="110" fill="none" stroke="currentColor"/><line x1="30" y1="130" x2="140" y2="20" stroke="currentColor" stroke-dasharray="4 3"/><text x="45" y="55" font-size="12" fill="currentColor">D₁: x≤y</text><text x="95" y="112" font-size="12" fill="currentColor">D₂</text><text x="112" y="58" font-size="11" fill="currentColor">y=x</text><text x="16" y="143" font-size="11" fill="currentColor">O</text><text x="137" y="143" font-size="11" fill="currentColor">1</text><text x="18" y="24" font-size="11" fill="currentColor">1</text></svg>`,
      solution: R`<p><b>第一步：把 $f(x)$ 提到内层积分外面。</b>内层是对 $y$ 积分，$f(x)$ 与 $y$ 无关，所以</p>$$I=\int_0^1\mathrm{d}x\int_x^1f(x)f(y)\,\mathrm{d}y=\int_0^1f(x)\left[\int_x^1f(y)\,\mathrm{d}y\right]\mathrm{d}x.$$<p><b>第二步：引入变上限积分。</b>令 $F(x)=\displaystyle\int_0^xf(t)\,\mathrm{d}t$。因为 $f$ 连续，由微积分基本定理 $F$ 可导且 $F'(x)=f(x)$；并且 $F(0)=0$，$F(1)=A$。于是</p>$$\int_x^1f(y)\,\mathrm{d}y=F(1)-F(x)=A-F(x).$$<p><b>第三步：代入并拆开。</b></p>$$I=\int_0^1f(x)\bigl[A-F(x)\bigr]\mathrm{d}x=A\int_0^1f(x)\,\mathrm{d}x-\int_0^1F(x)f(x)\,\mathrm{d}x=A^2-\int_0^1F(x)F'(x)\,\mathrm{d}x.$$<p><b>第四步：凑微分计算剩下的积分。</b>$F(x)F'(x)\,\mathrm{d}x=F(x)\,\mathrm{d}F(x)=\mathrm{d}\left[\tfrac12F^2(x)\right]$，所以</p>$$\int_0^1F(x)F'(x)\,\mathrm{d}x=\frac12F^2(x)\Big|_0^1=\frac12\bigl(A^2-0\bigr)=\frac{A^2}{2}.$$<p><b>第五步：得结果。</b>$I=A^2-\dfrac{A^2}{2}=\dfrac{A^2}{2}$。</p>`,
      pitfalls: R`<p>① 把 $f(x)$ 当成常数 $A$ 直接提出来——$A$ 是 $f$ 的积分，不是 $f$ 本身。</p><p>② 在对 $x$ 积分时把 $F(x)$ 当常数处理，写成 $A\cdot\int_0^1f\,\mathrm{d}x-F(x)\int_0^1f\,\mathrm{d}x$。</p><p>③ 用对称法时，只交换了被积函数里的 $x,y$，却忘了积分区域也要随之变成 $D_2$；或者误以为原积分就等于整个正方形上的 $A^2$。</p>`,
      summary: R`<p><b>方法要点：</b>抽象函数只给了积分值 $\int f=A$ 时，构造变上限函数 $F(x)=\int_0^xf$，把一切写成 $F$ 的表达式，利用 $f\,\mathrm{d}x=\mathrm{d}F$。</p><p><b>题型识别：</b>被积函数关于 $x,y$ 对称、区域是正方形被对角线分出的一半 $\Rightarrow$ 想到"补成整块再除以 2"。</p><p><b>值得记住的结论：</b>$\displaystyle\int_a^bf(x)\,\mathrm{d}x\int_x^bf(y)\,\mathrm{d}y=\frac12\left(\int_a^bf(x)\,\mathrm{d}x\right)^2$。</p>`,
      alt: R`<p><b>对称法：</b>记 $D_1=\{(x,y)\mid0\le x\le1,\ x\le y\le1\}$，则 $I=\iint_{D_1}f(x)f(y)\,\mathrm{d}\sigma$。把积分变量的名字 $x,y$ 互换（这不改变积分值），得到</p>$$I=\iint_{D_2}f(y)f(x)\,\mathrm{d}\sigma,\qquad D_2=\{(x,y)\mid0\le y\le1,\ y\le x\le1\}.$$<p>$D_1\cup D_2=[0,1]^2$，二者只在对角线（面积为 0）上重叠，所以</p>$$2I=\iint_{[0,1]^2}f(x)f(y)\,\mathrm{d}\sigma=\int_0^1f(x)\,\mathrm{d}x\cdot\int_0^1f(y)\,\mathrm{d}y=A^2,\qquad I=\frac{A^2}{2}.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 取 f=eˣ、x²+1、sin3x+x 三个具体函数，直接计算二次积分与 A²/2 之差均为 0' },
      flags: []
    },

    /* ───────────── 四(1) ───────────── */
    {
      id: '1995-4-1', year: 1995, no: '四(1)', type: '解答', score: 6,
      stem: R`计算曲面积分 $\displaystyle\iint_{\Sigma}z\,\mathrm{d}S$，其中 $\Sigma$ 为锥面 $z=\sqrt{x^2+y^2}$ 在柱体 $x^2+y^2\leqslant 2x$ 内的部分.`,
      options: null,
      answer: R`$\dfrac{32\sqrt2}{9}$`,
      figure: null,
      kp: ['mint.surf1', 'mint.double'],
      methods: ['第一类曲面积分化为二重积分（一投二代三换）', '极坐标', '华里士公式与奇偶性'],
      difficulty: 3,
      analysis: R`<p><b>第一类曲面积分（对面积的曲面积分）的标准算法是"一投、二代、三换"：</b></p><ol><li><b>投影：</b>曲面 $\Sigma$ 是 $z=z(x,y)$ 的图形，把它投影到 $xOy$ 面得到区域 $D$。"在柱体 $x^2+y^2\le2x$ 内的部分"恰好告诉我们投影区域就是圆盘 $D:(x-1)^2+y^2\le1$。</li><li><b>代入：</b>曲面上的点满足 $z=\sqrt{x^2+y^2}$，被积函数中的 $z$ 直接用它代替。</li><li><b>换面积元：</b>$\mathrm{d}S=\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y$。</li></ol><p><b>为什么 $\mathrm{d}S$ 是这个公式？</b>曲面上的一小块是倾斜的，它在 $xOy$ 面上的投影面积是 $\mathrm{d}x\mathrm{d}y$。倾斜面积 = 投影面积 ÷ $\cos\gamma$（$\gamma$ 是法向量与 $z$ 轴的夹角），而法向量 $(-z_x,-z_y,1)$ 给出 $\frac1{\cos\gamma}=\sqrt{1+z_x^2+z_y^2}$。锥面 $z=\sqrt{x^2+y^2}$ 的母线与 $z$ 轴成 $45^\circ$，所以处处 $\frac1{\cos\gamma}=\sqrt2$。</p><p>投影区域是过原点的圆盘，被积函数化为 $\sqrt{x^2+y^2}$，这两点都在暗示用<b>极坐标</b>。</p>`,
      solution: R`<p><b>第一步：求面积元。</b>在 $(x,y)\ne(0,0)$ 处，</p>$$z_x=\frac{x}{\sqrt{x^2+y^2}},\quad z_y=\frac{y}{\sqrt{x^2+y^2}},\quad 1+z_x^2+z_y^2=1+\frac{x^2+y^2}{x^2+y^2}=2,$$<p>所以 $\mathrm{d}S=\sqrt2\,\mathrm{d}x\mathrm{d}y$。（原点只是一个点，不影响积分值。）</p><p><b>第二步：确定投影区域。</b>$x^2+y^2\le2x\iff(x-1)^2+y^2\le1$，是圆心 $(1,0)$、半径 $1$ 的圆盘 $D$。</p><p><b>第三步：化为二重积分。</b>把 $z=\sqrt{x^2+y^2}$ 代入：</p>$$\iint_\Sigma z\,\mathrm{d}S=\sqrt2\iint_D\sqrt{x^2+y^2}\,\mathrm{d}x\mathrm{d}y.$$<p><b>第四步：极坐标。</b>令 $x=r\cos\theta$，$y=r\sin\theta$，$\mathrm{d}x\mathrm{d}y=r\,\mathrm{d}r\mathrm{d}\theta$。边界 $x^2+y^2=2x$ 化为 $r^2=2r\cos\theta$，即 $r=2\cos\theta$；要求 $r\ge0$，所以 $\cos\theta\ge0$，$\theta\in\left[-\frac\pi2,\frac\pi2\right]$。于是</p>$$\sqrt2\iint_D\sqrt{x^2+y^2}\,\mathrm{d}x\mathrm{d}y=\sqrt2\int_{-\pi/2}^{\pi/2}\mathrm{d}\theta\int_0^{2\cos\theta}r\cdot r\,\mathrm{d}r=\sqrt2\int_{-\pi/2}^{\pi/2}\frac{8\cos^3\theta}{3}\,\mathrm{d}\theta.$$<p><b>第五步：计算 $\theta$ 积分。</b>$\cos^3\theta$ 是偶函数，</p>$$\int_{-\pi/2}^{\pi/2}\cos^3\theta\,\mathrm{d}\theta=2\int_0^{\pi/2}\cos^3\theta\,\mathrm{d}\theta=2\int_0^{\pi/2}(1-\sin^2\theta)\,\mathrm{d}(\sin\theta)=2\left(1-\frac13\right)=\frac43.$$<p>（也可直接用华里士公式 $\int_0^{\pi/2}\cos^3\theta\,\mathrm{d}\theta=\frac23$。）</p><p><b>第六步：得结果。</b></p>$$\iint_\Sigma z\,\mathrm{d}S=\sqrt2\cdot\frac83\cdot\frac43=\frac{32\sqrt2}{9}.$$`,
      pitfalls: R`<p>① 漏掉 $\mathrm{d}S$ 中的 $\sqrt2$，把曲面积分当成二重积分直接算，得到 $\frac{32}{9}$。</p><p>② 极坐标忘记雅可比因子 $r$，被积式应是 $r\cdot r=r^2$ 而不是 $r$。</p><p>③ $\theta$ 的范围写成 $[0,2\pi]$ 或 $[0,\pi]$：圆 $r=2\cos\theta$ 在 $y$ 轴右侧，$\theta\in[-\frac\pi2,\frac\pi2]$。</p><p>④ 把 $z$ 当成独立的积分变量去积分——在曲面上 $z$ 由 $x,y$ 决定，必须代入。</p>`,
      summary: R`<p><b>方法要点：</b>$\iint_\Sigma g(x,y,z)\,\mathrm{d}S$，$\Sigma:z=z(x,y)$ $\Rightarrow$ $\iint_Dg(x,y,z(x,y))\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\mathrm{d}y$（一投二代三换）。</p><p><b>常用结果：</b>锥面 $z=\sqrt{x^2+y^2}$ 的 $\mathrm{d}S=\sqrt2\,\mathrm{d}x\mathrm{d}y$。</p><p><b>题型识别：</b>看到圆 $x^2+y^2\le2ax$（或 $\le2ay$）想到极坐标 $r\le2a\cos\theta$（或 $r\le2a\sin\theta$）；看到 $\int_0^{\pi/2}\cos^n\theta$ 想到华里士公式。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: √2∫_{−π/2}^{π/2}∫_0^{2cosθ} r² dr dθ = 32√2/9 ≈ 5.0283；另用参数化 (ρcosθ, ρsinθ, ρ) 验证 |r_ρ×r_θ| = √2ρ，即 dS=√2 dxdy' },
      flags: []
    },

    /* ───────────── 四(2) ───────────── */
    {
      id: '1995-4-2', year: 1995, no: '四(2)', type: '解答', score: 6,
      stem: R`将函数 $f(x)=x-1\ (0\leqslant x\leqslant 2)$ 展开成周期为 $4$ 的余弦级数.`,
      options: null,
      answer: R`$x-1=-\dfrac{8}{\pi^2}\displaystyle\sum_{k=1}^{\infty}\frac{1}{(2k-1)^2}\cos\frac{(2k-1)\pi x}{2}=-\frac{8}{\pi^2}\left(\cos\frac{\pi x}{2}+\frac1{3^2}\cos\frac{3\pi x}{2}+\frac1{5^2}\cos\frac{5\pi x}{2}+\cdots\right)$，$0\leqslant x\leqslant 2$.`,
      figure: null,
      kp: ['series.fourier'],
      methods: ['偶延拓 + 周期延拓', '周期 2l 的傅里叶系数公式', '分部积分', '狄利克雷收敛定理'],
      difficulty: 3,
      analysis: R`<p><b>把题目的每个关键词翻译成操作：</b></p><ul><li>"余弦级数"：只含 $\cos$ 项，而只有<b>偶函数</b>的傅里叶级数才只含余弦。所以要先把 $[0,2]$ 上的 $f$ <b>偶延拓</b>到 $[-2,2]$。</li><li>"周期为 4"：$2l=4$，$l=2$，恰好就是延拓后区间 $[-2,2]$ 的长度。</li></ul><p><b>从第一性原理看傅里叶系数：</b>函数族 $1,\cos\frac{n\pi x}{l},\sin\frac{n\pi x}{l}$ 在 $[-l,l]$ 上两两正交，就像坐标系的一组互相垂直的坐标轴；傅里叶系数就是 $f$ 在每根"轴"上的投影（内积 ÷ 轴长的平方）。偶函数与奇函数 $\sin\frac{n\pi x}{l}$ 的内积为 0，所以 $b_n=0$；对偶函数，$[-l,l]$ 上的积分等于 $[0,l]$ 上的两倍，于是</p>$$a_n=\frac{2}{l}\int_0^lf(x)\cos\frac{n\pi x}{l}\,\mathrm{d}x\quad(n=0,1,2,\cdots).$$<p>延拓后的函数图像是一条"三角波"（下图粗线是原来的 $f$）：</p><svg viewBox="0 0 300 100" style="max-width:340px;width:100%;display:block;margin:8px auto"><title>偶延拓后的周期函数（三角波）</title><line x1="5" y1="50" x2="295" y2="50" stroke="currentColor" stroke-width="0.8"/><line x1="150" y1="92" x2="150" y2="8" stroke="currentColor" stroke-width="0.8"/><polyline points="12,25 58,75 104,25 150,75 196,25 242,75 288,25" fill="none" stroke="currentColor" stroke-dasharray="4 3"/><line x1="150" y1="75" x2="196" y2="25" stroke="currentColor" stroke-width="3"/><text x="192" y="64" font-size="10" fill="currentColor">2</text><text x="96" y="64" font-size="10" fill="currentColor">−2</text><text x="154" y="22" font-size="10" fill="currentColor">1</text><text x="154" y="88" font-size="10" fill="currentColor">−1</text><text x="138" y="62" font-size="10" fill="currentColor">O</text></svg>`,
      solution: R`<p><b>第一步：延拓。</b>令 $F(x)=|x|-1$（$-2\le x\le2$），再以 $4$ 为周期延拓到整个数轴。$F$ 是偶函数，在 $[0,2]$ 上等于 $f$。它处处连续：在 $x=0$ 处左右都是 $-1$；在 $x=\pm2$ 处，$F(2)=F(-2)=1$，周期延拓后衔接无缝。</p><p><b>第二步：正弦系数。</b>$F$ 是偶函数，$b_n=0$（$n=1,2,\cdots$）。</p><p><b>第三步：求 $a_0$。</b>$l=2$，</p>$$a_0=\frac22\int_0^2(x-1)\,\mathrm{d}x=\left[\frac{x^2}{2}-x\right]_0^2=2-2=0.$$<p><b>第四步：求 $a_n$（$n\ge1$），用分部积分。</b>取 $u=x-1$，$\mathrm{d}v=\cos\frac{n\pi x}{2}\mathrm{d}x$，则 $v=\frac{2}{n\pi}\sin\frac{n\pi x}{2}$：</p>$$a_n=\int_0^2(x-1)\cos\frac{n\pi x}{2}\,\mathrm{d}x=\left[\frac{2(x-1)}{n\pi}\sin\frac{n\pi x}{2}\right]_0^2-\frac{2}{n\pi}\int_0^2\sin\frac{n\pi x}{2}\,\mathrm{d}x.$$<p>边界项：$x=2$ 时 $\sin n\pi=0$，$x=0$ 时 $\sin0=0$，所以为 $0$。剩下的积分</p>$$\int_0^2\sin\frac{n\pi x}{2}\,\mathrm{d}x=\left[-\frac{2}{n\pi}\cos\frac{n\pi x}{2}\right]_0^2=\frac{2}{n\pi}\bigl(1-\cos n\pi\bigr)=\frac{2}{n\pi}\bigl(1-(-1)^n\bigr).$$<p>因此</p>$$a_n=-\frac{2}{n\pi}\cdot\frac{2}{n\pi}\bigl(1-(-1)^n\bigr)=\frac{4}{n^2\pi^2}\bigl((-1)^n-1\bigr)=\begin{cases}-\dfrac{8}{n^2\pi^2},&n\text{ 为奇数},\\[2mm]0,&n\text{ 为偶数}.\end{cases}$$<p><b>第五步：确定收敛情况。</b>$F$ 连续且分段单调（满足狄利克雷条件），所以它的傅里叶级数在每一点都收敛于 $F(x)$；在 $[0,2]$ 上 $F(x)=f(x)$。记 $n=2k-1$，得</p>$$x-1=-\frac{8}{\pi^2}\sum_{k=1}^{\infty}\frac{1}{(2k-1)^2}\cos\frac{(2k-1)\pi x}{2},\qquad0\le x\le2.$$<p><b>副产品：</b>令 $x=0$，$-1=-\frac{8}{\pi^2}\sum\frac{1}{(2k-1)^2}$，得到著名结果 $\displaystyle\sum_{k=1}^{\infty}\frac{1}{(2k-1)^2}=\frac{\pi^2}{8}$。</p>`,
      pitfalls: R`<p>① 把"周期为 4"理解成 $l=4$；正确的是 $2l=4$，$l=2$，三角函数里是 $\frac{n\pi x}{2}$。</p><p>② 求 $a_0$ 后在展开式里忘了常数项是 $\frac{a_0}{2}$（本题 $a_0=0$ 侥幸无影响，但要养成习惯）。</p><p>③ 分部积分符号出错，或没有分 $n$ 的奇偶讨论，写成"$a_n=-\frac{8}{n^2\pi^2}$"对所有 $n$ 成立。</p><p>④ 不写等式成立的范围，或误以为端点 $x=0,2$ 处级数不收敛于 $f$。本题延拓后连续，端点处也相等。</p>`,
      summary: R`<p><b>方法要点：</b>"正弦级数 → 奇延拓，余弦级数 → 偶延拓"；周期 $2l$ 时用 $\frac{n\pi x}{l}$；系数 $a_n=\frac2l\int_0^lf\cos\frac{n\pi x}{l}\mathrm{d}x$。最后必须用狄利克雷定理说明等号在哪些点成立：连续点收敛到函数值，间断点收敛到左右极限的平均值。</p><p><b>题型识别：</b>看到"展开成余弦/正弦级数"先想延拓方式；被积函数是"多项式 × 三角函数"就用分部积分，边界项常因 $\sin n\pi=0$ 消失；看到 $(-1)^n-1$ 就分奇偶。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: a₀=∫₀²(x−1)dx=0，a_n=4((−1)ⁿ−1)/(n²π²)；399 项部分和在 x=0, 1/2, 1, 3/2, 2 处分别 ≈ −0.9995, −0.5, 0, 0.5, 0.9995，与 x−1 吻合；Σ1/(2k−1)²=π²/8' },
      flags: []
    },

    /* ───────────── 五 ───────────── */
    {
      id: '1995-5', year: 1995, no: '五', type: '解答', score: 7,
      stem: R`设曲线 $L$ 位于 $xOy$ 平面的第一象限内，$L$ 上任一点 $M$ 处的切线与 $y$ 轴总相交，交点记为 $A$. 已知 $|\overline{MA}|=|\overline{OA}|$，且 $L$ 过点 $\left(\dfrac32,\dfrac32\right)$，求 $L$ 的方程.`,
      options: null,
      answer: R`$y=\sqrt{3x-x^2}\ (0< x< 3)$，即圆 $\left(x-\dfrac32\right)^2+y^2=\dfrac94$ 位于第一象限的部分。`,
      figure: null,
      kp: ['ode.app', 'ode.first', 'diff.def'],
      methods: ['切线方程求截距', '几何条件建立微分方程', '换元 z=y² 化为一阶线性方程', '齐次方程换元 u=y/x'],
      difficulty: 4,
      analysis: R`<p><b>几何应用题的统一套路："设点 → 写切线 → 求交点 → 列条件 → 得方程 → 解方程 → 定常数"。</b>未知的是曲线 $y=y(x)$，题目给的是曲线上<b>每一点</b>都满足的几何关系，这种"每一点都满足"的条件翻译出来就是一个微分方程。</p><p><b>关键的记号区分：</b>切点 $M(x,y)$ 是固定的，切线上的动点用大写 $(X,Y)$ 表示，切线方程 $Y-y=y'(X-x)$。令 $X=0$ 就得到切线在 $y$ 轴上的截距 $y-xy'$。</p><p><b>解方程时的观察：</b>得到的方程是 $2xyy'=y^2-x^2$。里面同时出现了 $y^2$ 和 $2yy'$，而 $2yy'$ 恰好是 $(y^2)'$——这个特征提示换元 $z=y^2$，方程立刻变成关于 $z$ 的一阶线性方程。</p><p><b>几何直观（可以用来检验答案）：</b>答案是一个与 $y$ 轴在原点相切的圆。从圆外一点 $A$ 向圆引两条切线，切线长相等；$y$ 轴在 $O$ 处与圆相切，所以 $AO$、$AM$ 都是从 $A$ 出发的切线段，自然 $|AM|=|AO|$。</p><svg viewBox="0 0 260 170" style="max-width:300px;width:100%;display:block;margin:8px auto"><title>曲线 L、切线与交点 A</title><line x1="20" y1="150" x2="250" y2="150" stroke="currentColor" stroke-width="0.8"/><line x1="30" y1="162" x2="30" y2="6" stroke="currentColor" stroke-width="0.8"/><path d="M30 150 A75 75 0 0 1 180 150" fill="none" stroke="currentColor" stroke-width="2"/><line x1="30" y1="20.1" x2="187.5" y2="111" stroke="currentColor" stroke-dasharray="5 3"/><line x1="30" y1="150" x2="30" y2="20.1" stroke="currentColor" stroke-width="3"/><circle cx="30" cy="150" r="3" fill="currentColor"/><circle cx="30" cy="20.1" r="3" fill="currentColor"/><circle cx="142.5" cy="85" r="3" fill="currentColor"/><circle cx="105" cy="150" r="2" fill="currentColor"/><text x="16" y="164" font-size="12" fill="currentColor">O</text><text x="14" y="24" font-size="12" fill="currentColor">A</text><text x="148" y="80" font-size="12" fill="currentColor">M</text><text x="92" y="165" font-size="10" fill="currentColor">(3/2, 0)</text><text x="242" y="164" font-size="11" fill="currentColor">x</text><text x="36" y="12" font-size="11" fill="currentColor">y</text><text x="40" y="100" font-size="10" fill="currentColor">|OA|</text><text x="90" y="45" font-size="10" fill="currentColor">|MA|</text></svg>`,
      solution: R`<p><b>第一步：设点、写切线。</b>设 $L:y=y(x)$，$M(x,y)$ 为 $L$ 上任一点（$x>0$，$y>0$）。$M$ 处切线方程为</p>$$Y-y=y'(X-x),$$<p>其中 $(X,Y)$ 是切线上的动点坐标。</p><p><b>第二步：求交点 $A$。</b>令 $X=0$，得 $Y=y-xy'$，所以 $A(0,\ y-xy')$。</p><p><b>第三步：把条件 $|MA|=|OA|$ 写成方程。</b></p>$$|MA|^2=(x-0)^2+\bigl[y-(y-xy')\bigr]^2=x^2+x^2y'^2,\qquad|OA|^2=(y-xy')^2.$$<p>两边都是非负数，$|MA|=|OA|\iff|MA|^2=|OA|^2$：</p>$$x^2+x^2y'^2=y^2-2xyy'+x^2y'^2\ \Longrightarrow\ 2xyy'=y^2-x^2.$$<p><b>第四步：换元化为线性方程。</b>令 $z=y^2$，则 $z'=2yy'$，方程变为 $xz'=z-x^2$，即（$x>0$）</p>$$z'-\frac1xz=-x.$$<p><b>第五步：解一阶线性方程。</b>乘积分因子 $\mu=\mathrm{e}^{\int(-\frac1x)\mathrm{d}x}=\frac1x$，左边恰好成为一个导数：</p>$$\frac1xz'-\frac1{x^2}z=\left(\frac zx\right)'=-1\ \Longrightarrow\ \frac zx=-x+C\ \Longrightarrow\ y^2=Cx-x^2.$$<p><b>第六步：定常数。</b>曲线过 $\left(\frac32,\frac32\right)$：$\frac94=\frac32C-\frac94$，解得 $C=3$。所以 $y^2=3x-x^2$；曲线在第一象限，$y>0$，取正根：</p>$$y=\sqrt{3x-x^2},\qquad0< x< 3.$$<p><b>第七步：检验。</b>$y^2=3x-x^2$ 即 $\left(x-\frac32\right)^2+y^2=\frac94$，是圆心 $\left(\frac32,0\right)$、半径 $\frac32$ 的圆（上半部分）。在 $0< x< 3$ 内切线都不竖直，确实与 $y$ 轴相交；且 $y-xy'=\dfrac{3x}{2y}>0$，交点 $A$ 在 $y$ 轴正半轴上，与几何直观（切线长相等）一致。</p>`,
      pitfalls: R`<p>① 把切点坐标 $(x,y)$ 和切线上的动点 $(X,Y)$ 混用，写不出正确的截距 $y-xy'$。</p><p>② 列 $|OA|$ 时直接写 $y-xy'$ 而不加绝对值或平方，导致符号讨论混乱；两边平方是最稳妥的。</p><p>③ 平方展开后 $x^2y'^2$ 两边抵消，若展开错会得到二阶非线性的乱式子。</p><p>④ 解出 $y^2=Cx-x^2$ 后不取正根、不写 $x$ 的范围；题目要的是第一象限内的曲线。</p><p>⑤ 一阶线性方程通解公式里积分因子的符号写反（$\mathrm{e}^{\int P}$ 与 $\mathrm{e}^{-\int P}$ 搞混），建议像第五步一样"乘积分因子凑导数"，不靠死记。</p>`,
      summary: R`<p><b>方法要点：</b>曲线的切线问题——切线 $Y-y=y'(X-x)$；$y$ 轴截距 $y-xy'$，$x$ 轴截距 $x-\frac{y}{y'}$。"任一点都满足"的几何条件 ⇒ 微分方程。</p><p><b>解方程的识别规则：</b>看到 $yy'$ 与 $y^2$ 同时出现 ⇒ 令 $z=y^2$；看到 $y'=g\!\left(\frac yx\right)$ ⇒ 令 $u=\frac yx$（齐次方程）；看到 $y'+P(x)y=Q(x)y^n$ ⇒ 伯努利方程，令 $z=y^{1-n}$（本题 $n=-1$，正是 $z=y^2$）。</p>`,
      alt: R`<p><b>作为齐次方程求解：</b>$2xyy'=y^2-x^2$ 可写成 $y'=\dfrac{(y/x)^2-1}{2(y/x)}$。令 $u=\dfrac yx$，$y'=u+xu'$，代入得</p>$$u+xu'=\frac{u^2-1}{2u}\ \Longrightarrow\ xu'=-\frac{1+u^2}{2u}\ \Longrightarrow\ \frac{2u}{1+u^2}\mathrm{d}u=-\frac{\mathrm{d}x}{x}.$$<p>积分得 $\ln(1+u^2)=-\ln x+\ln C$，即 $1+\frac{y^2}{x^2}=\frac Cx$，$x^2+y^2=Cx$，与上面结果一致，再由初始点定出 $C=3$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: dsolve(2xyy′−y²+x²=0) 得 y=±√x·√(C₁−x)；代入 y=√(3x−x²) 验证 |MA|²−|OA|²≡0、y(3/2)=3/2，且截距 y−xy′=3√x/(2√(3−x))>0' },
      flags: []
    },

    /* ───────────── 六 ───────────── */
    {
      id: '1995-6', year: 1995, no: '六', type: '解答', score: 8,
      stem: R`设函数 $Q(x,y)$ 在 $xOy$ 平面上具有一阶连续偏导数，曲线积分 $\displaystyle\int_L2xy\,\mathrm{d}x+Q(x,y)\,\mathrm{d}y$ 与路径无关，并且对任意 $t$ 恒有 $$\int_{(0,0)}^{(t,1)}2xy\,\mathrm{d}x+Q(x,y)\,\mathrm{d}y=\int_{(0,0)}^{(1,t)}2xy\,\mathrm{d}x+Q(x,y)\,\mathrm{d}y,$$ 求 $Q(x,y)$.`,
      options: null,
      answer: R`$Q(x,y)=x^2+2y-1$`,
      figure: null,
      kp: ['mint.line2', 'int.ftc'],
      methods: ['平面曲线积分与路径无关的充要条件', '沿平行于坐标轴的折线积分', '含变限积分的恒等式两边求导', '求原函数（势函数）'],
      difficulty: 3,
      analysis: R`<p><b>两个条件，各司其职。</b></p><p><b>条件一"与路径无关"⇒ 偏导数关系。</b>为什么？由格林公式，沿任一闭曲线的积分等于 $\iint(Q_x-P_y)\,\mathrm{d}\sigma$；与路径无关等价于沿任意闭曲线积分为 0，在单连通区域（这里是整个平面）上这又等价于 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$。由它可以求出 $Q$，但会残留一个只含 $y$ 的未知函数 $\varphi(y)$——就像不定积分会残留一个常数。</p><p><b>条件二"两个积分相等"⇒ 定出 $\varphi$。</b>既然与路径无关，就选最好算的路径：先沿 $x$ 轴、再沿竖直线的<b>折线</b>。在水平段上 $\mathrm{d}y=0$，在竖直段上 $\mathrm{d}x=0$，每段只剩一项。算出来是含 $\int_0^t\varphi$ 的恒等式，对 $t$ 求导就能解出 $\varphi$。</p>`,
      solution: R`<p>记 $P=2xy$。</p><p><b>第一步：由路径无关求 $Q$ 的形式。</b>$P,Q$ 在全平面（单连通）上有连续偏导，积分与路径无关 $\iff\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}=2x$。把 $y$ 看作常数对 $x$ 积分：</p>$$Q(x,y)=x^2+\varphi(y),$$<p>这里"积分常数"可以依赖于 $y$，所以是 $y$ 的函数 $\varphi(y)$。由 $\varphi(y)=Q(0,y)$ 知 $\varphi$ 有连续导数。</p><p><b>第二步：计算左边，路径 $(0,0)\to(t,0)\to(t,1)$。</b></p><ul><li>第一段 $y=0$，$\mathrm{d}y=0$：$\int_0^t2x\cdot0\,\mathrm{d}x=0$；</li><li>第二段 $x=t$（常数），$\mathrm{d}x=0$，$y$ 从 0 到 1：$\int_0^1Q(t,y)\,\mathrm{d}y=\int_0^1\bigl[t^2+\varphi(y)\bigr]\mathrm{d}y=t^2+\int_0^1\varphi(y)\,\mathrm{d}y$。</li></ul><p><b>第三步：计算右边，路径 $(0,0)\to(1,0)\to(1,t)$。</b>第一段同样为 0；第二段 $x=1$，$y$ 从 0 到 $t$：</p>$$\int_0^t\bigl[1+\varphi(y)\bigr]\mathrm{d}y=t+\int_0^t\varphi(y)\,\mathrm{d}y.$$<p><b>第四步：列恒等式并求导。</b>对任意 $t$，</p>$$t^2+\int_0^1\varphi(y)\,\mathrm{d}y=t+\int_0^t\varphi(y)\,\mathrm{d}y.$$<p>左边的 $\int_0^1\varphi(y)\,\mathrm{d}y$ 是一个常数，求导为 0；右边变上限积分求导得 $\varphi(t)$。两边对 $t$ 求导：</p>$$2t=1+\varphi(t)\ \Longrightarrow\ \varphi(t)=2t-1.$$<p><b>第五步：写出 $Q$ 并检验。</b>$Q(x,y)=x^2+2y-1$。检验：$\int_0^1(2y-1)\,\mathrm{d}y=0$，左边 $=t^2$，右边 $=t+(t^2-t)=t^2$，恒等式成立（求导只得到必要条件，代回检验保证了充分性）。</p>`,
      pitfalls: R`<p>① 由 $Q_x=2x$ 积分时写成 $Q=x^2+C$（常数），丢失了 $y$ 的函数 $\varphi(y)$——这是本题最致命的错误。</p><p>② 选了斜线路径，计算量大增且易错；路径无关时应选平行于坐标轴的折线。</p><p>③ 在竖直段 $x=t$ 上，忘了把 $Q(x,y)$ 中的 $x$ 换成 $t$。</p><p>④ 对恒等式求导时，把常数 $\int_0^1\varphi(y)\,\mathrm{d}y$ 的导数当成 $\varphi(1)$。</p>`,
      summary: R`<p><b>方法要点：</b>"曲线积分与路径无关" ⇒ 立刻写出 $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$；对偏导数积分得到的"常数"是另一个变量的函数。</p><p><b>计算路径无关的积分：</b>要么选平行于坐标轴的折线；要么求出原函数 $u$，积分 $=u(\text{终点})-u(\text{起点})$。</p><p><b>题型识别：</b>看到含参数 $t$ 的积分恒等式 ⇒ 两边对 $t$ 求导（变限积分求导），最后代回检验。</p>`,
      alt: R`<p><b>原函数（势函数）法：</b>路径无关时存在 $u(x,y)$ 使 $\mathrm{d}u=2xy\,\mathrm{d}x+Q\,\mathrm{d}y$。由 $u_x=2xy$ 得 $u=x^2y+\psi(y)$。于是</p>$$\int_{(0,0)}^{(t,1)}=u(t,1)-u(0,0)=t^2+\psi(1)-\psi(0),\qquad\int_{(0,0)}^{(1,t)}=u(1,t)-u(0,0)=t+\psi(t)-\psi(0).$$<p>二者相等得 $\psi(t)=t^2-t+\psi(1)$，所以 $Q=u_y=x^2+\psi'(y)=x^2+2y-1$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: Q=x²+2y−1 时 ∂Q/∂x−∂P/∂y=0；沿直线段从 (0,0) 到 (t,1) 与到 (1,t) 的积分都等于 t²，差为 0' },
      flags: []
    },

    /* ───────────── 七 ───────────── */
    {
      id: '1995-7', year: 1995, no: '七', type: '解答', score: 8,
      stem: R`设函数 $f(x),g(x)$ 在 $[a,b]$ 上存在二阶导数，并且 $g''(x)\ne0$，$f(a)=f(b)=g(a)=g(b)=0$，试证：<br>(1) 在开区间 $(a,b)$ 内 $g(x)\ne0$；<br>(2) 在开区间 $(a,b)$ 内至少存在一点 $\xi$，使 $\dfrac{f(\xi)}{g(\xi)}=\dfrac{f''(\xi)}{g''(\xi)}$.`,
      options: null,
      answer: R`证明见详细解答。要点：(1) 反证法——若 $g$ 在 $(a,b)$ 内有零点，连同 $a,b$ 共三个零点，两次用罗尔定理得 $g''$ 有零点，矛盾；(2) 令 $\varphi(x)=f(x)g'(x)-f'(x)g(x)$，则 $\varphi(a)=\varphi(b)=0$，由罗尔定理得 $f(\xi)g''(\xi)-f''(\xi)g(\xi)=0$，再由 (1) 及 $g''\ne0$ 两边相除。`,
      figure: null,
      kp: ['diff.mvt'],
      methods: ['反证法', '罗尔定理（连续使用两次）', '由结论倒推构造辅助函数'],
      difficulty: 4,
      analysis: R`<p><b>第 (1) 问：为什么用反证法？</b>"在区间内处处不等于 0"是一个否定式结论，正面证需要逐点说明，很难；反过来假设"有一个零点"，就多出了一个可以利用的条件。</p><p><b>零点与罗尔定理的关系：</b>函数的两个零点之间，导函数至少有一个零点。$g$ 本来就有零点 $a,b$，若再有一个零点 $c$，就是三个零点 $\Rightarrow$ $g'$ 至少两个零点 $\Rightarrow$ $g''$ 至少一个零点，与 $g''\ne0$ 矛盾。一句话："$g''$ 没有零点，$g$ 最多只有两个零点"。</p><p><b>第 (2) 问：辅助函数是"倒推"出来的。</b>要证的式子交叉相乘（第 (1) 问保证了 $g(\xi)\ne0$）得</p>$$f(\xi)g''(\xi)-f''(\xi)g(\xi)=0.$$<p>罗尔定理的结论形式是"某个函数的导数在 $\xi$ 处为 0"，所以问题变成：<b>谁的导数是 $fg''-f''g$？</b>试一试 $fg'-f'g$：</p>$$(fg'-f'g)'=f'g'+fg''-f''g-f'g'=fg''-f''g,$$<p>中间的 $f'g'$ 正好抵消。这个组合也可以这样记：它是"$u v''-u''v$"的原函数 "$uv'-u'v$"，与分部积分 $\int(uv''-u''v)=uv'-u'v$ 是同一个恒等式。</p><p>最后检查罗尔定理的另一个条件——端点值相等：由于 $f,g$ 在 $a,b$ 处都为 0，$\varphi(a)=\varphi(b)=0$，完美。</p><p><b>为什么不能直接对 $\frac fg$ 用定理？</b>$g(a)=g(b)=0$，$\frac fg$ 在端点处没有定义，罗尔、柯西中值定理都用不上；这也是第 (1) 问存在的意义——它保证 $\frac{f(\xi)}{g(\xi)}$ 有意义，并为第 (2) 问最后一步的除法铺路。</p>`,
      solution: R`<p><b>预备：</b>$f,g$ 在 $[a,b]$ 上二阶可导，所以 $f,g,f',g'$ 在 $[a,b]$ 上都可导，从而都连续（端点处为单侧）。</p><p><b>(1) 证明：</b>用反证法。假设存在 $c\in(a,b)$ 使 $g(c)=0$。</p><p><b>第一步：</b>$g$ 在 $[a,c]$ 上连续、在 $(a,c)$ 内可导，且 $g(a)=g(c)=0$，由罗尔定理，存在 $\xi_1\in(a,c)$ 使 $g'(\xi_1)=0$。同理在 $[c,b]$ 上，存在 $\xi_2\in(c,b)$ 使 $g'(\xi_2)=0$。显然 $a< \xi_1< c< \xi_2< b$。</p><p><b>第二步：</b>$g'$ 在 $[\xi_1,\xi_2]$ 上连续、在 $(\xi_1,\xi_2)$ 内可导（因为 $g''$ 存在），且 $g'(\xi_1)=g'(\xi_2)=0$，再用罗尔定理，存在 $\xi_3\in(\xi_1,\xi_2)\subset(a,b)$ 使 $g''(\xi_3)=0$。</p><p><b>第三步：</b>这与已知 $g''(x)\ne0$ 矛盾。所以假设不成立，在 $(a,b)$ 内 $g(x)\ne0$。</p><p><b>(2) 证明：</b></p><p><b>第一步：构造辅助函数。</b>令</p>$$\varphi(x)=f(x)g'(x)-f'(x)g(x),\qquad x\in[a,b].$$<p>由预备知识，$\varphi$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且</p>$$\varphi'(x)=f'(x)g'(x)+f(x)g''(x)-f''(x)g(x)-f'(x)g'(x)=f(x)g''(x)-f''(x)g(x).$$<p><b>第二步：验证端点值。</b>$\varphi(a)=f(a)g'(a)-f'(a)g(a)=0\cdot g'(a)-f'(a)\cdot0=0$，同理 $\varphi(b)=0$。</p><p><b>第三步：用罗尔定理。</b>存在 $\xi\in(a,b)$ 使 $\varphi'(\xi)=0$，即</p>$$f(\xi)g''(\xi)-f''(\xi)g(\xi)=0.$$<p><b>第四步：两边相除。</b>由 (1)，$g(\xi)\ne0$；由已知，$g''(\xi)\ne0$。两边同除以 $g(\xi)g''(\xi)$，得</p>$$\frac{f(\xi)}{g(\xi)}=\frac{f''(\xi)}{g''(\xi)},\qquad\xi\in(a,b).\qquad\blacksquare$$`,
      pitfalls: R`<p>① 第 (1) 问只用一次罗尔定理（得到 $g'$ 有零点）就说矛盾——题目给的是 $g''\ne0$，必须再用一次。</p><p>② 第二次用罗尔定理时不说明 $g'$ 在 $[\xi_1,\xi_2]$ 上连续可导、不说明 $\xi_3\in(a,b)$，证明不严密。</p><p>③ 辅助函数写成 $fg'+f'g$（这是 $(fg)'$），求导后 $f'g'$ 不能抵消，得不到想要的式子。</p><p>④ 最后一步不交代 $g(\xi)\ne0$、$g''(\xi)\ne0$ 就直接相除。</p>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>证"$\ne0$"或"无零点" ⇒ 反证法 + 罗尔定理数零点："$g^{(k)}$ 无零点 ⇒ $g$ 至多 $k$ 个零点"。</li><li>证"存在 $\xi$ 使含 $f,f',f''$ 的等式成立" ⇒ 移项化成"$=0$" ⇒ 找一个函数使其导数恰为该式（还原法）⇒ 验证端点值相等 ⇒ 罗尔定理。</li></ul><p><b>常见"导数还原"对照：</b>$fg''-f''g\leftarrow(fg'-f'g)'$；$f'g-fg'\leftarrow g^2\left(\frac fg\right)'$；$f'+\lambda f\leftarrow\mathrm{e}^{-\lambda x}(\mathrm{e}^{\lambda x}f)'$；$xf'+f\leftarrow(xf)'$。</p>`,
      alt: R`<p><b>第 (1) 问的另一种思路（凹凸性）：</b>导函数具有介值性（达布定理），$g''$ 在 $[a,b]$ 上处处不为 0，所以 $g''$ 不变号。不妨设 $g''>0$，则 $g$ 是严格凹（下凸）函数，其图像严格位于连接 $(a,g(a))$、$(b,g(b))$ 的弦的下方，而这条弦就是 $x$ 轴上的线段，所以在 $(a,b)$ 内 $g(x)< 0$；$g''< 0$ 时同理 $g(x)>0$。这种方法更直观，但用到了达布定理，考试中用罗尔定理反证更稳妥。</p>`,
      verify: { by: 'proof', ok: true, note: '纯证明题，逐步核对了罗尔定理的条件；用 sympy 验证恒等式 (fg′−f′g)′ − (fg″−f″g) ≡ 0' },
      flags: []
    }
  ];
});
