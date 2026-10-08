// 2003 年数学一 · 高等数学部分（一(1)–(3)、二(1)–(3)、三至八，共 12 道）
registerYear(2003, function (R) {
  return [
    /* ───────────── 一(1) ───────────── */
    {
      id: '2003-1-1', year: 2003, no: '一(1)', type: '填空', score: 4,
      stem: R`$\displaystyle\lim_{x\to0}(\cos x)^{\frac{1}{\ln(1+x^2)}}=\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$\mathrm{e}^{-\frac12}$（即 $\dfrac{1}{\sqrt{\mathrm{e}}}$）`,
      figure: null,
      kp: ['lim.compute', 'lim.inf'],
      methods: ['1^∞ 型化为指数', '等价无穷小代换'],
      difficulty: 2,
      analysis: R`<p>这是"幂指函数"的极限：底数 $\cos x\to1$，指数 $\dfrac{1}{\ln(1+x^2)}\to+\infty$，属于 $1^\infty$ 型未定式。</p><p>为什么 $1^\infty$ 不能直接说等于 $1$？因为底数并不真的等于 $1$，而是"比 $1$ 小一点点"（$\cos x=1-\frac{x^2}{2}+\cdots$），再被一个越来越大的指数去乘方——"离 $1$ 有多近"和"指数有多大"在相互竞争，结果取决于两者速度的比。处理这类问题的第一原理是：<b>把幂变成乘积</b>。利用恒等式 $u^v=\mathrm{e}^{v\ln u}$，指数位置上的 $v\ln u$ 是 $\infty\cdot0$ 型，再用等价无穷小 $\ln u\sim u-1\ (u\to1)$ 就能算出来。</p><p>由此得到 $1^\infty$ 型的通用公式：若 $u\to1,\ v\to\infty$，则 $\lim u^v=\mathrm{e}^{\lim v(u-1)}$。本题只要算出 $\displaystyle\lim_{x\to0}\frac{\cos x-1}{\ln(1+x^2)}$ 即可。</p>`,
      solution: R`<p><b>第一步：判断类型。</b>$x\to0$ 时 $\cos x\to1$，$\ln(1+x^2)\to0^+$，所以指数 $\frac{1}{\ln(1+x^2)}\to+\infty$，是 $1^\infty$ 型。</p><p><b>第二步：化为指数形式。</b>$|x|$ 较小时 $\cos x > 0$，可以写</p>$$(\cos x)^{\frac{1}{\ln(1+x^2)}}=\mathrm{e}^{\frac{\ln\cos x}{\ln(1+x^2)}}.$$<p>因为 $\mathrm{e}^t$ 是连续函数，极限可以"穿进"指数里：只需求 $\displaystyle\lim_{x\to0}\frac{\ln\cos x}{\ln(1+x^2)}$。</p><p><b>第三步：用等价无穷小计算指数的极限。</b>把 $\ln\cos x$ 写成 $\ln[1+(\cos x-1)]$。由于 $\cos x-1\to0$，由 $\ln(1+u)\sim u\ (u\to0)$ 得</p>$$\ln\cos x=\ln[1+(\cos x-1)]\sim\cos x-1\sim-\frac{x^2}{2};$$<p>同理 $\ln(1+x^2)\sim x^2$。分子、分母都是乘除关系中的因子，可以放心替换：</p>$$\lim_{x\to0}\frac{\ln\cos x}{\ln(1+x^2)}=\lim_{x\to0}\frac{-\frac{x^2}{2}}{x^2}=-\frac12.$$<p><b>第四步：写出结果。</b>原式 $=\mathrm{e}^{-\frac12}=\dfrac{1}{\sqrt{\mathrm{e}}}\approx0.6065$。</p><p><b>数值感受：</b>取 $x=0.1$，$\cos0.1\approx0.99500$，指数 $\frac{1}{\ln1.01}\approx100.5$，$(0.99500)^{100.5}\approx0.6045$，已经很接近 $0.6065$；底数小于 $1$、结果小于 $1$，符号也合理。</p>`,
      pitfalls: R`<p>1. 误以为"$1$ 的任何次方都是 $1$"而填 $1$。$1^\infty$ 中的"$1$"只是底数的<b>极限</b>，底数本身并不等于 $1$。</p><p>2. 把 $\ln\cos x$ 等价成 $\cos x$ 或 $x$。正确的是 $\ln\cos x\sim\cos x-1$，前提是把它看成 $\ln(1+\square)$，其中 $\square=\cos x-1\to0$。</p><p>3. 符号错：$\cos x-1\sim-\frac{x^2}{2}$ 是负的，结果是 $\mathrm{e}^{-1/2}$ 而不是 $\mathrm{e}^{1/2}$。可以用常识检查：底数小于 $1$，取很大的次幂，结果应小于 $1$。</p>`,
      summary: R`<p><b>方法要点：</b>$1^\infty$ 型三步走——认类型、化指数 $u^v=\mathrm{e}^{v\ln u}$、用 $\ln u\sim u-1$ 化成 $\lim v(u-1)$。口诀：<b>"$1^\infty$ 型，底数减 1 乘指数，结果放到 e 的头上"</b>。</p><p><b>看到…想到…：</b>看到"底数趋于 1、指数趋于无穷"，想到 $\lim u^v=\mathrm{e}^{\lim (u-1)v}$；看到 $\ln(\text{趋于 1 的式子})$，想到 $\ln u\sim u-1$；看到 $1-\cos x$，想到 $\frac{x^2}{2}$。</p>`,
      alt: R`<p><b>另解一（洛必达法则）：</b>指数部分 $\displaystyle\lim_{x\to0}\frac{\ln\cos x}{\ln(1+x^2)}$ 是 $\frac00$ 型，分子分母分别求导：</p>$$\lim_{x\to0}\frac{-\tan x}{\frac{2x}{1+x^2}}=\lim_{x\to0}\left(-\frac{\tan x}{x}\cdot\frac{1+x^2}{2}\right)=-\frac12.$$<p><b>另解二（第二个重要极限）：</b></p>$$(\cos x)^{\frac{1}{\ln(1+x^2)}}=\left\{[1+(\cos x-1)]^{\frac{1}{\cos x-1}}\right\}^{\frac{\cos x-1}{\ln(1+x^2)}},$$<p>花括号内趋于 $\mathrm{e}$，外层指数趋于 $-\frac12$。这正是公式 $\mathrm{e}^{\lim v(u-1)}$ 的来历。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit(cos(x)**(1/log(1+x**2)), x, 0) = exp(-1/2)；数值 x=0.1 时约 0.6045，趋近 e^(-1/2)≈0.6065' },
      flags: []
    },

    /* ───────────── 一(2) ───────────── */
    {
      id: '2003-1-2', year: 2003, no: '一(2)', type: '填空', score: 4,
      stem: R`曲面 $z=x^2+y^2$ 与平面 $2x+4y-z=0$ 平行的切平面的方程是 $\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$2x+4y-z-5=0$（即 $2x+4y-z=5$）`,
      figure: null,
      kp: ['mdiff.geo', 'vec.planeline'],
      methods: ['曲面法向量（梯度）', '两平面平行的条件', '平面的点法式方程'],
      difficulty: 2,
      analysis: R`<p>写一个平面方程，本质上只需要两样东西：<b>平面上一点</b>和<b>法向量</b>（点法式）。题目没告诉切点，但告诉了切平面的方向——与 $2x+4y-z=0$ 平行，也就是切平面的法向量与 $(2,4,-1)$ 平行。于是思路是：设切点 $(x_0,y_0,z_0)$，写出该点处曲面的法向量，令它与 $(2,4,-1)$ 成比例，解出切点，再用点法式。</p><p>为什么曲面 $F(x,y,z)=0$ 在某点的法向量是梯度 $(F_x,F_y,F_z)$？因为曲面上任意一条过该点的曲线 $\mathbf{r}(t)$ 都满足 $F(\mathbf{r}(t))\equiv0$，对 $t$ 求导得 $\nabla F\cdot\mathbf{r}'(t)=0$：梯度与曲面上每一条切线都垂直，所以它就是切平面的法向量。</p>`,
      solution: R`<p><b>第一步：写成隐式并求法向量。</b>令 $F(x,y,z)=x^2+y^2-z$，曲面即 $F=0$。</p>$$\nabla F=(F_x,F_y,F_z)=(2x,\,2y,\,-1).$$<p>在切点 $(x_0,y_0,z_0)$ 处，法向量为 $\mathbf{n}=(2x_0,\,2y_0,\,-1)$。</p><p><b>第二步：用平行条件确定切点。</b>两平面平行 $\iff$ 法向量平行，所以存在 $\lambda$ 使</p>$$(2x_0,\,2y_0,\,-1)=\lambda(2,\,4,\,-1).$$<p>比较第三个分量得 $\lambda=1$，于是 $2x_0=2$、$2y_0=4$，即 $x_0=1,\ y_0=2$。切点在曲面上，$z_0=1^2+2^2=5$。切点为 $(1,2,5)$。</p><p><b>第三步：点法式写切平面。</b></p>$$2(x-1)+4(y-2)-(z-5)=0\iff 2x+4y-z-5=0.$$<p><b>第四步：检验。</b>把 $(1,2,5)$ 代入：$2+8-5-5=0$ ✓；常数项 $-5\ne0$，所以它与已知平面平行而不重合。又因为第三个分量 $-1$ 把比例系数锁定为 $\lambda=1$，切点唯一，这样的切平面只有一个。</p>`,
      pitfalls: R`<p>1. 直接把已知平面 $2x+4y-z=0$ 当答案——它虽然过曲面上的点 $(0,0,0)$，但曲面在原点的切平面是 $z=0$，两者不同。"平行"只确定了方向，位置由切点决定。</p><p>2. 法向量漏掉 $z$ 分量，或写成 $(2x,2y,1)$ 符号错。显式曲面 $z=f(x,y)$ 的法向量是 $(f_x,f_y,-1)$。</p><p>3. 解出 $x_0,y_0$ 后忘记由曲面方程求 $z_0$，用错了切点。</p>`,
      summary: R`<p><b>方法要点：</b>曲面 $F(x,y,z)=0$ 在 $P_0$ 处的法向量 $\mathbf{n}=(F_x,F_y,F_z)\big|_{P_0}$；显式 $z=f(x,y)$ 时 $\mathbf{n}=(f_x,f_y,-1)$。切平面用点法式，法线用对称式 $\frac{x-x_0}{F_x}=\frac{y-y_0}{F_y}=\frac{z-z_0}{F_z}$。</p><p><b>看到…想到…：</b>看到"与某平面平行（或与某直线垂直）的切平面"，想到"设切点 → 写法向量 → 令其与已知方向成比例 → 解出切点"；看到"与某直线<b>平行</b>的切平面"，则是法向量与直线方向向量<b>垂直</b>（点积为 0）。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 解 (2x0,2y0,-1)=λ(2,4,-1) 得 λ=1, x0=1, y0=2，z0=5；点法式展开为 2x+4y-z-5' },
      flags: ['OCR 原文缺少填空横线，已补上']
    },

    /* ───────────── 一(3) ───────────── */
    {
      id: '2003-1-3', year: 2003, no: '一(3)', type: '填空', score: 4,
      stem: R`设 $x^2=\sum\limits_{n=0}^{\infty}a_n\cos nx\ (-\pi\leqslant x\leqslant\pi)$，则 $a_2=\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$1$`,
      figure: null,
      kp: ['series.fourier', 'int.defcalc'],
      methods: ['傅里叶系数公式', '三角函数系的正交性', '分部积分'],
      difficulty: 2,
      analysis: R`<p>等式右边是余弦级数，$x^2$ 在 $[-\pi,\pi]$ 上是偶函数，所以这正是 $x^2$ 的傅里叶（余弦）级数，$a_2$ 就是 $\cos2x$ 前面的傅里叶系数。</p><p>为什么系数公式是 $a_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,dx$？第一原理是<b>三角函数系的正交性</b>：$\int_{-\pi}^{\pi}\cos mx\cos nx\,dx$ 当 $m\ne n$ 时为 $0$，当 $m=n\ge1$ 时为 $\pi$。把等式两边同乘 $\cos2x$ 再在 $[-\pi,\pi]$ 上积分，右边除了 $n=2$ 那一项全变成 $0$，就把 $a_2$ "筛"出来了——好比用一个只对 $\cos2x$ 敏感的"探针"去测量。</p><p>注意本题写法 $\sum_{n=0}^\infty a_n\cos nx$ 把常数项记作 $a_0$（课本标准写法是 $\frac{a_0}{2}$），这只影响常数项，不影响 $a_2$。</p>`,
      solution: R`<p><b>第一步：用正交性导出 $a_2$ 的公式。</b>两边乘 $\cos2x$ 并在 $[-\pi,\pi]$ 上积分（$x^2$ 的 $2\pi$ 周期延拓连续且分段光滑，它的傅里叶级数一致收敛，可以逐项积分）：</p>$$\int_{-\pi}^{\pi}x^2\cos2x\,dx=\sum_{n=0}^{\infty}a_n\int_{-\pi}^{\pi}\cos nx\cos2x\,dx=a_2\cdot\pi,$$<p>所以 $a_2=\dfrac1\pi\displaystyle\int_{-\pi}^{\pi}x^2\cos2x\,dx$。</p><p><b>第二步：利用偶函数化简。</b>$x^2\cos2x$ 是偶函数，所以 $a_2=\dfrac2\pi\displaystyle\int_0^{\pi}x^2\cos2x\,dx$。</p><p><b>第三步：两次分部积分。</b>多项式乘三角函数，把三角函数凑进微分号、让多项式逐次"降次"：</p>$$\int_0^\pi x^2\cos2x\,dx=\left[\frac{x^2\sin2x}{2}\right]_0^\pi-\int_0^\pi x\sin2x\,dx=0-\int_0^\pi x\sin2x\,dx,$$$$\int_0^\pi x\sin2x\,dx=\left[-\frac{x\cos2x}{2}\right]_0^\pi+\frac12\int_0^\pi\cos2x\,dx=-\frac{\pi}{2}+0=-\frac\pi2.$$<p>所以 $\displaystyle\int_0^\pi x^2\cos2x\,dx=\frac\pi2$。</p><p><b>第四步：得结果。</b>$a_2=\dfrac2\pi\cdot\dfrac\pi2=1$。</p><p><b>拓展：</b>对一般的 $n\ge1$ 同样计算得 $a_n=\dfrac{4(-1)^n}{n^2}$，常数项为 $\dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi}x^2dx=\dfrac{\pi^2}{3}$，即</p>$$x^2=\frac{\pi^2}{3}+\sum_{n=1}^\infty\frac{4(-1)^n}{n^2}\cos nx,\quad -\pi\le x\le\pi.$$<p>取 $n=2$ 得 $a_2=\frac44=1$，一致。再令 $x=\pi$ 还能得到著名的 $\sum\limits_{n=1}^\infty\dfrac1{n^2}=\dfrac{\pi^2}{6}$。</p>`,
      pitfalls: R`<p>1. 系数公式前面写成 $\frac{1}{2\pi}$——那是常数项（本题记作 $a_0$）的公式，$n\ge1$ 时前面是 $\frac1\pi$。</p><p>2. 用偶函数化成 $[0,\pi]$ 上的积分后忘记乘 $2$，得到 $\frac12$。</p><p>3. 分部积分符号出错。可以用"表格法"：$x^2$ 依次求导得 $x^2,\,2x,\,2,\,0$；$\cos2x$ 依次积分得 $\frac{\sin2x}{2},\,-\frac{\cos2x}{4},\,-\frac{\sin2x}{8}$；斜向相乘、符号正负交替相加。</p>`,
      summary: R`<p><b>方法要点：</b>傅里叶系数 $a_n=\frac1\pi\int_{-\pi}^\pi f(x)\cos nx\,dx$，$b_n=\frac1\pi\int_{-\pi}^\pi f(x)\sin nx\,dx$；偶函数只有余弦项，$a_n=\frac2\pi\int_0^\pi f(x)\cos nx\,dx$；奇函数只有正弦项。</p><p><b>看到…想到…：</b>看到"$f(x)=\sum a_n\cos nx$，求某个系数"，想到正交性与系数公式，<b>不必</b>求出整个级数；看到"多项式 × 三角函数"的积分，想到分部积分（表格法）；看到用傅里叶级数求 $\sum\frac{1}{n^2}$ 之类的和，想到代入特殊点 $x=0$ 或 $x=\pi$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(x**2*cos(2x),(x,-pi,pi))/pi = 1；一般项 a_n = 4(-1)^n/n^2，常数项 pi^2/3；中间结果 ∫_0^π x²cos2x dx = π/2, ∫_0^π x sin2x dx = -π/2' },
      flags: []
    },

    /* ───────────── 二(1) ───────────── */
    {
      id: '2003-2-1', year: 2003, no: '二(1)', type: '选择', score: 4,
      stem: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 内连续，其导函数的图形如图所示，则 $f(x)$ 有`,
      options: [
        R`一个极小值点和两个极大值点.`,
        R`两个极小值点和一个极大值点.`,
        R`两个极小值点和两个极大值点.`,
        R`三个极小值点和一个极大值点.`
      ],
      answer: 'C',
      figure: {
        file: 'papers/images/2003年考研数学(一)真题/341a324b59e43d9ab00862c2b1bb32802af9d1393c521c0602bb888bbeac2b38.jpg',
        desc: R`图中画的是导函数 $y=f'(x)$（不是 $f(x)$）的图形，由两段曲线组成。$y$ 轴左侧：一段开口向上、形如抛物线的曲线，与 $x$ 轴交于两点 $x=a$、$x=b$（$a < b < 0$）；当 $x < a$ 时 $f'(x) > 0$，当 $a < x < b$ 时 $f'(x) < 0$，当 $b < x < 0$ 时 $f'(x) > 0$。$y$ 轴右侧：一段单调上升的曲线，当 $x\to0^+$ 时它贴着 $y$ 轴向下趋于 $-\infty$（所以 $f'(0)$ 不存在），并与 $x$ 轴交于一点 $x=c$（$c > 0$）；当 $0 < x < c$ 时 $f'(x) < 0$，当 $x > c$ 时 $f'(x) > 0$。`
      },
      kp: ['diff.mono'],
      methods: ['极值的第一充分条件', '读导函数图形列符号表'],
      difficulty: 2,
      analysis: R`<p>先看清楚：图上画的是 $f'(x)$，不是 $f(x)$。所以要读的是 $f'$ 的<b>正负</b>（曲线在 $x$ 轴上方还是下方），而不是曲线的高低起伏。</p><p>极值点从哪里来？由费马引理，可导的极值点处导数必为 $0$；所以极值点只可能出现在两类点：<b>驻点</b>（$f'=0$）和<b>导数不存在的点</b>。找到候选点后用第一充分条件判断：经过该点时 $f'$ 由正变负是极大值点，由负变正是极小值点，不变号就不是极值点。</p><p>本题的陷阱在 $x=0$：那里 $f'$ 不存在（图形在 $y$ 轴处断开、右侧趋于 $-\infty$），但题目特意说了 $f$ 在整个数轴上<b>连续</b>——这句话就是在提醒你：$x=0$ 也是候选点。</p>`,
      solution: R`<p><b>第一步：列出全部候选点。</b>记 $f'$ 的图形与 $x$ 轴的交点从左到右为 $a < b < 0 < c$。驻点：$x=a,b,c$；导数不存在但函数连续的点：$x=0$。共 4 个候选点。</p><p><b>第二步：读出 $f'$ 的符号，列表。</b></p><table><thead><tr><th>区间</th><th>$(-\infty,a)$</th><th>$(a,b)$</th><th>$(b,0)$</th><th>$(0,c)$</th><th>$(c,+\infty)$</th></tr></thead><tbody><tr><td>$f'(x)$</td><td>$+$</td><td>$-$</td><td>$+$</td><td>$-$</td><td>$+$</td></tr><tr><td>$f(x)$</td><td>增</td><td>减</td><td>增</td><td>减</td><td>增</td></tr></tbody></table><p><b>第三步：逐点判断。</b></p><ul><li>$x=a$：$f'$ 由 $+$ 变 $-$，先增后减，<b>极大值点</b>；</li><li>$x=b$：由 $-$ 变 $+$，先减后增，<b>极小值点</b>；</li><li>$x=0$：左侧增、右侧减，且 $f$ 在 $0$ 处连续，<b>极大值点</b>；</li><li>$x=c$：由 $-$ 变 $+$，<b>极小值点</b>。</li></ul><p>为什么 $x=0$ 处可以由"左增右减"下结论？取 $b < x < 0$，$f$ 在 $[x,0]$ 上连续、在 $(x,0)$ 内可导且 $f' > 0$，由拉格朗日中值定理 $f(0)-f(x)=f'(\xi)(0-x) > 0$；同理 $0 < x < c$ 时 $f(x) < f(0)$。这里用到了 $f$ 在 $0$ 处的连续性——若 $f$ 在 $0$ 处有跳跃，结论就不一定成立。</p><p><b>第四步：计数。</b>极大值点 $a$、$0$ 两个，极小值点 $b$、$c$ 两个，选 <b>C</b>。</p><p><b>错误选项分析：</b>B（两个极小、一个极大）正是只看驻点、漏掉不可导点 $x=0$ 所得的结果，是本题设计的陷阱；A、D 的个数与上表都对不上，通常是把图形误当成 $f$ 本身去数"峰谷"，或把符号读反造成的。</p>`,
      pitfalls: R`<p>1. 把导函数图当成函数图，去找"波峰波谷"。实际上 $f'$ 的波谷（左侧那段曲线的最低点）对应的是 $f$ 的<b>拐点</b>，不是极值点。</p><p>2. 只找 $f'=0$ 的点，漏掉 $f'$ 不存在的点 $x=0$，错选 B。</p><p>3. 忽视"不可导点要成为极值点，函数在该点必须连续"这一前提（本题已给出连续性）。</p>`,
      summary: R`<p><b>方法要点：</b>极值的候选点 = 驻点 ∪ 不可导点；判别用第一充分条件（看 $f'$ 是否变号）。读导函数图：<b>$f'$ 从上往下穿过 $x$ 轴 → 极大；从下往上穿过 → 极小；$f'$ 的升降转折处 → $f$ 的拐点</b>。</p><p><b>看到…想到…：</b>看到"导函数的图形如图所示"，想到只读符号、列符号表；看到题目强调"$f$ 连续"，想到还有不可导点要检查。举一反三：同一张图若问拐点，就看 $f'$ 的单调性在哪里改变——左侧曲线最低点处 $f'$ 由减变增，是 $f$ 的一个拐点；而按图中走势，$x=0$ 两侧 $f'$ 都在增加，凹凸性没有改变，不是拐点。</p>`,
      verify: { by: 'manual', ok: true, note: '按图读出 f′ 的符号：(-∞,a)正、(a,b)负、(b,0)正、(0,c)负、(c,+∞)正，结合 f 在 0 处连续，得极大值点 a、0，极小值点 b、c，共两极大两极小，与参考答案 C 一致' },
      flags: []
    },

    /* ───────────── 二(2) ───────────── */
    {
      id: '2003-2-2', year: 2003, no: '二(2)', type: '选择', score: 4,
      stem: R`设 $\{a_n\},\{b_n\},\{c_n\}$ 均为非负数列，且 $\lim\limits_{n\to\infty}a_n=0$，$\lim\limits_{n\to\infty}b_n=1$，$\lim\limits_{n\to\infty}c_n=\infty$，则必有`,
      options: [
        R`$a_n < b_n$ 对任意 $n$ 成立.`,
        R`$b_n < c_n$ 对任意 $n$ 成立.`,
        R`极限 $\lim\limits_{n\to\infty}a_nc_n$ 不存在.`,
        R`极限 $\lim\limits_{n\to\infty}b_nc_n$ 不存在.`
      ],
      answer: 'D',
      figure: null,
      kp: ['lim.seqdef', 'lim.rules', 'lim.inf'],
      methods: ['极限的保号性', '构造反例'],
      difficulty: 2,
      analysis: R`<p>这道题考的是对"极限"这个概念本身的理解。数列极限只刻画 $n$ 充分大以后的"最终状态"，对前面任意有限项不作任何约束——把数列的前 100 项随便改掉，极限不变。所以凡是"对任意 $n$ 成立"的说法（A、B），都不可能仅由极限推出来。</p><p>再看 C、D：$a_nc_n$ 是 $0\cdot\infty$ 型，这是未定式，结果可以是任何数，也可以不存在，所以不能断言"必不存在"；$b_nc_n$ 中 $b_n\to1$，最终会稳定在一个远离 $0$ 的范围内，不会"抵消"$c_n$ 的无穷大，乘积仍趋于无穷大——而按定义，"趋于无穷大"属于极限不存在。</p><p>"必有"类选择题的标准打法：正确选项给出证明，错误选项各举一个最简单的反例（常用 $\frac1n$、$n$、常数列）。</p>`,
      solution: R`<p><b>第一步：证明 D 正确。</b>由 $\lim b_n=1$，取 $\varepsilon=\frac12$，存在 $N$，当 $n > N$ 时 $|b_n-1| < \frac12$，从而 $b_n > \frac12$（这就是极限的<b>保号性</b>）。于是当 $n > N$ 时</p>$$b_nc_n\ge\frac12c_n.$$<p>$c_n$ 非负且 $c_n\to\infty$，即 $c_n\to+\infty$，所以 $b_nc_n\to+\infty$。一个趋于 $+\infty$ 的数列没有有限的极限，即"极限 $\lim b_nc_n$ 不存在"，D 正确。</p><p><b>第二步：举反例排除 A。</b>取 $a_n=\frac2n$，$b_n=1$，$c_n=n$（都非负，满足题设）。$n=1$ 时 $a_1=2 > 1=b_1$，A 错。极限的大小关系 $0 < 1$ 只能保证 $n$ 充分大以后 $a_n < b_n$，管不到前面的项。</p><p><b>第三步：举反例排除 B。</b>取 $b_n=1$，$c_n=\frac n2$，则 $c_1=\frac12 < 1=b_1$，B 错。</p><p><b>第四步：举反例排除 C。</b>取 $a_n=\frac1n$，$c_n=n$，则 $a_nc_n=1$，极限存在且等于 $1$，C 错。（若换成 $a_n=\frac1{n^2}$，极限为 $0$；换成 $a_n=\frac{1}{\sqrt n}$，乘积趋于 $+\infty$——$0\cdot\infty$ 什么结果都可能。）</p><p>故选 <b>D</b>。</p>`,
      pitfalls: R`<p>1. 把"极限的大小关系"误当成"每一项的大小关系"。保号性只说"存在 $N$，当 $n > N$ 时……"，选 A、B 的同学都犯了这个错误。</p><p>2. 认为 $0\cdot\infty=0$，或认为它"一定不存在"。$0\cdot\infty$ 是未定式，要看两者趋向的快慢。</p><p>3. 对"极限不存在"理解不清：数列趋于 $\infty$ 时，严格说极限是不存在的，写 $\lim=\infty$ 只是描述它的变化趋势。</p>`,
      summary: R`<p><b>方法要点：</b>(1) 极限只管"最终"，不管有限项；(2) 保号性：$\lim b_n=b > 0\Rightarrow$ 存在 $N$，$n > N$ 时 $b_n > \frac b2$；(3) "远离 0 的量 × 无穷大 = 无穷大"，"无穷小 × 无穷大 = 未定式"。</p><p><b>看到…想到…：</b>看到"必有/一定成立"的抽象选择题，想到对错误选项用最简单的具体数列（常数列、$\frac1n$、$n$）构造反例；看到"对任意 $n$ 成立"，立刻警惕——极限推不出有限项的性质。</p>`,
      verify: { by: 'mixed', ok: true, note: '手工证明 D（保号性 + 放缩）；sympy 验证反例：a_n=1/n, c_n=n 时 a_n·c_n 极限为 1（排除 C），b_n=1, c_n=n 时 b_n·c_n 趋于 oo' },
      flags: []
    },

    /* ───────────── 二(3) ───────────── */
    {
      id: '2003-2-3', year: 2003, no: '二(3)', type: '选择', score: 4,
      stem: R`已知函数 $f(x,y)$ 在点 $(0,0)$ 的某个邻域内连续，且 $\displaystyle\lim_{\substack{x\to0\\y\to0}}\frac{f(x,y)-xy}{(x^2+y^2)^2}=1$，则`,
      options: [
        R`点 $(0,0)$ 不是 $f(x,y)$ 的极值点.`,
        R`点 $(0,0)$ 是 $f(x,y)$ 的极大值点.`,
        R`点 $(0,0)$ 是 $f(x,y)$ 的极小值点.`,
        R`根据所给条件无法判别点 $(0,0)$ 是否为 $f(x,y)$ 的极值点.`
      ],
      answer: 'A',
      figure: null,
      kp: ['mdiff.extreme', 'mdiff.limit', 'lim.inf'],
      methods: ['脱去极限号', '无穷小阶的比较', '沿特殊路径判别极值'],
      difficulty: 3,
      analysis: R`<p>题目没有给出 $f$ 的表达式，也没说 $f$ 可微，只给了一个极限。处理这类题的通用思路是<b>"脱去极限号"</b>：由极限等于 $1$，把 $f$ 在原点附近的样子写出来——</p>$$f(x,y)=xy+(x^2+y^2)^2+o\big((x^2+y^2)^2\big).$$<p>接下来比较各项的"阶"：记 $\rho=\sqrt{x^2+y^2}$，$xy$ 是二阶小量（量级 $\rho^2$），$(x^2+y^2)^2$ 是四阶小量（量级 $\rho^4$）。在原点附近<b>低阶项说了算</b>：$f$ 的符号基本由 $xy$ 决定。而 $xy$ 在第一、三象限为正，在第二、四象限为负——它的图形是马鞍面，原点是鞍点。所以猜答案是 A，再沿 $y=x$ 和 $y=-x$ 两条路径严格验证。</p><p>回到定义：$(0,0)$ 是极值点，意思是在原点的某个邻域内 $f(x,y)-f(0,0)$ 保持同一符号。只要在任意小的邻域里都能找到使它为正和为负的点，原点就不是极值点。</p>`,
      solution: R`<p><b>第一步：求 $f(0,0)$。</b>记 $\alpha(x,y)=\dfrac{f(x,y)-xy}{(x^2+y^2)^2}-1$，则 $(x,y)\to(0,0)$ 时 $\alpha\to0$，且</p>$$f(x,y)=xy+\big(1+\alpha(x,y)\big)(x^2+y^2)^2,\quad (x,y)\ne(0,0).$$<p>令 $(x,y)\to(0,0)$，右边趋于 $0$；而 $f$ 在原点连续，所以 $f(0,0)=\lim f(x,y)=0$。</p><p><b>第二步：沿 $y=x$ 看。</b></p>$$f(x,x)=x^2+4x^4\big(1+\alpha(x,x)\big)=x^2\Big[1+4x^2\big(1+\alpha(x,x)\big)\Big].$$<p>当 $x\to0$ 时方括号 $\to1$，所以存在 $\delta > 0$，当 $0 < |x| < \delta$ 时方括号 $> 0$，从而 $f(x,x) > 0=f(0,0)$。</p><p><b>第三步：沿 $y=-x$ 看。</b></p>$$f(x,-x)=-x^2+4x^4\big(1+\alpha(x,-x)\big)=-x^2\Big[1-4x^2\big(1+\alpha(x,-x)\big)\Big],$$<p>方括号同样 $\to1$，所以 $|x|$ 充分小（$x\ne0$）时 $f(x,-x) < 0=f(0,0)$。</p><p><b>第四步：下结论。</b>在原点的任何邻域内，既有使 $f > f(0,0)$ 的点（在直线 $y=x$ 上），又有使 $f < f(0,0)$ 的点（在直线 $y=-x$ 上），所以 $(0,0)$ 不是极值点，选 <b>A</b>。</p><p><b>顺带一提：</b>$f(x,0)=(1+\alpha(x,0))x^4$，于是 $f_x(0,0)=\lim\limits_{x\to0}\frac{f(x,0)-0}{x}=0$，同理 $f_y(0,0)=0$——原点是驻点，却不是极值点，正是一个"鞍点"。</p><p><b>错误选项分析：</b>B、C 被上面的论证直接否定。D 错在：上面的推理对<b>所有</b>满足题设的 $f$ 都成立，条件已经足够下结论。很多同学选 D，是因为觉得"没给二阶可微，不能用 $AC-B^2$ 判别法"——这个顾虑本身没错，但我们根本不需要二阶导数，直接用极值的定义就够了。</p>`,
      pitfalls: R`<p>1. 只看到 $(x^2+y^2)^2\ge0$ 就以为 $f$ 在原点取极小值，忽略了在原点附近起决定作用的是低阶项 $xy$，四阶项只是"小修正"。</p><p>2. 认为不知道可微性就"无法判别"而选 D。极值是用函数值的大小来定义的，判断它不一定要用导数。</p><p>3. 用一个具体函数（如 $f=xy+(x^2+y^2)^2$）算出 $AC-B^2=-1 < 0$ 就直接选 A：作为猜答案的手段可以，但它只能排除 B、C，排除不了 D；完整的论证要对一般的 $f$ 进行（如上面的沿路径分析）。</p>`,
      summary: R`<p><b>方法要点：</b>由 $\lim\frac{f-g}{h}=A$ 立即写出 $f=g+Ah+o(h)$（"脱去极限号"），再比较各项的阶，低阶项决定局部符号。判断非极值点：找两条过该点的路径，使 $f-f(P_0)$ 分别取正、负。</p><p><b>看到…想到…：</b>看到"已知某个极限，判断极值/连续/可微"，想到把极限改写成带无穷小的等式；看到二阶主部是 $xy$（或 $x^2-y^2$），想到马鞍面、原点不是极值点；看到主部是 $x^2+y^2$，想到极小值。一元类比：若 $\lim\limits_{x\to0}\frac{f(x)}{x^2}=1$，则 $f(0)=0$ 是极小值。</p>`,
      verify: { by: 'mixed', ok: true, note: '手工证明：沿 y=x 时 f 大于 0，沿 y=-x 时 f 小于 0；sympy 以 f=xy+(x²+y²)² 为例：满足所给极限，f(x,x)=x²+4x⁴，f(x,-x)=-x²+4x⁴，原点 Hessian 行列式为 -1（鞍点）' },
      flags: []
    },

    /* ───────────── 三 ───────────── */
    {
      id: '2003-3', year: 2003, no: '三', type: '解答', score: 10,
      stem: R`过坐标原点作曲线 $y=\ln x$ 的切线，该切线与曲线 $y=\ln x$ 及 $x$ 轴围成平面图形 $D$.<br>(1) 求 $D$ 的面积 $A$；<br>(2) 求 $D$ 绕直线 $x=\mathrm{e}$ 旋转一周所得旋转体的体积 $V$.`,
      options: null,
      answer: R`(1) $A=\dfrac{\mathrm{e}}{2}-1$；(2) $V=\dfrac{\pi}{6}\left(5\mathrm{e}^2-12\mathrm{e}+3\right)$.`,
      figure: null,
      kp: ['int.app', 'diff.def'],
      methods: ['设切点求切线', '平面图形的面积', '旋转体体积（垫圈法 / 柱壳法）'],
      difficulty: 3,
      analysis: R`<p>这是一道"切线 + 面积 + 旋转体体积"的综合题，分三件事：先求切线，再画图确定区域，最后选择合适的积分变量。</p><p><b>求切线：</b>已知的是切线经过的点（原点），而不是切点。切点不知道就<b>设出来</b>：设切点为 $(x_0,\ln x_0)$，写出切线方程，再让它过原点，解出 $x_0$。</p><p><b>画图：</b>切线是 $y=\frac{x}{\mathrm{e}}$，切点 $(\mathrm{e},1)$。区域 $D$ 是一个"曲边三角形"，三个顶点为 $O(0,0)$、$(1,0)$、$(\mathrm{e},1)$：左上边是切线段，右下边是曲线 $y=\ln x$ 从 $(1,0)$ 到 $(\mathrm{e},1)$ 的一段，底边是 $x$ 轴上的 $[0,1]$（阴影部分，虚线是旋转轴 $x=\mathrm{e}$）。</p><svg viewBox="0 0 400 245" width="100%" style="max-width:420px;display:block;margin:8px auto" xmlns="http://www.w3.org/2000/svg" role="img"><title>区域 D：由切线 y=x/e、曲线 y=ln x 与 x 轴围成；虚线为旋转轴 x=e</title><polygon points="40,170 135,170 154,152.7 173,138 192,125.3 211,114.2 230,104.2 249,95.1 268,86.8 287,79.2 298.2,75" fill="currentColor" fill-opacity="0.18" stroke="none"/><line x1="10" y1="170" x2="385" y2="170" stroke="currentColor" stroke-width="1"/><line x1="40" y1="238" x2="40" y2="22" stroke="currentColor" stroke-width="1"/><polyline points="92.2,226.8 97,218.5 106.5,203.9 116,191.2 125.5,180 135,170 154,152.7 173,138 192,125.3 211,114.2 230,104.2 249,95.1 268,86.8 287,79.2 298.2,75 325,65.6 344,59.5" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="170" x2="348.8" y2="56.4" stroke="currentColor" stroke-width="1.5"/><line x1="298.2" y1="232" x2="298.2" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><circle cx="298.2" cy="75" r="3" fill="currentColor"/><text x="26" y="186" font-size="13" fill="currentColor">O</text><text x="131" y="186" font-size="13" fill="currentColor">1</text><text x="303" y="186" font-size="13" fill="currentColor">e</text><text x="378" y="186" font-size="13" fill="currentColor">x</text><text x="46" y="28" font-size="13" fill="currentColor">y</text><text x="100" y="166" font-size="14" fill="currentColor">D</text><text x="236" y="64" font-size="13" fill="currentColor">(e,1)</text><text x="318" y="92" font-size="13" fill="currentColor">y=ln x</text><text x="110" y="118" font-size="13" fill="currentColor">y=x/e</text><text x="304" y="40" font-size="13" fill="currentColor">x=e</text></svg><p><b>选积分变量：</b>如果对 $x$ 积分，竖条的下边界在 $x=1$ 处由 $x$ 轴换成曲线，需要分段；而用水平条（对 $y$ 积分），每一条都从切线 $x=\mathrm{e}y$ 到曲线 $x=\mathrm{e}^y$，<b>一个式子就够</b>。更妙的是旋转轴 $x=\mathrm{e}$ 是竖直线，水平条绕它转一圈恰好是一个圆环（垫圈），体积元素非常自然。这就是"选择积分变量，使每一条微元的两端各只由一条边界决定"的原则。</p>`,
      solution: R`<p><b>第一步：求切线。</b>设切点为 $(x_0,\ln x_0)$（$x_0 > 0$），由 $(\ln x)'=\frac1x$，切线为</p>$$y-\ln x_0=\frac{1}{x_0}(x-x_0).$$<p>切线过原点，把 $(0,0)$ 代入：$-\ln x_0=-1$，得 $x_0=\mathrm{e}$。所以切点为 $(\mathrm{e},1)$，切线为 $y=\dfrac{x}{\mathrm{e}}$，也就是 $x=\mathrm{e}y$。</p><p><b>第二步：用 $y$ 描述区域。</b>曲线 $y=\ln x$ 写成 $x=\mathrm{e}^y$。对每个 $y\in[0,1]$，水平线与 $D$ 的交线从 $x=\mathrm{e}y$（切线）到 $x=\mathrm{e}^y$（曲线）：</p>$$D=\{(x,y)\mid 0\le y\le1,\ \mathrm{e}y\le x\le\mathrm{e}^y\}.$$<p>这里确实有 $\mathrm{e}^y\ge\mathrm{e}y$：直线 $x=\mathrm{e}y$ 恰是凸函数 $x=\mathrm{e}^y$ 在 $y=1$ 处的切线，凸函数的图形总在切线上方。</p><p><b>第三步：(1) 求面积。</b>水平条长 $\mathrm{e}^y-\mathrm{e}y$，宽 $dy$：</p>$$A=\int_0^1(\mathrm{e}^y-\mathrm{e}y)\,dy=\left[\mathrm{e}^y-\frac{\mathrm{e}}{2}y^2\right]_0^1=\left(\mathrm{e}-\frac{\mathrm{e}}{2}\right)-1=\frac{\mathrm{e}}{2}-1.$$<p>用"大减小"验算：三角形 $O,(\mathrm{e},0),(\mathrm{e},1)$ 的面积为 $\frac{\mathrm{e}}{2}$，减去曲线下方的面积 $\int_1^{\mathrm{e}}\ln x\,dx=[x\ln x-x]_1^{\mathrm{e}}=1$，同样得 $\frac{\mathrm{e}}2-1$ ✓。</p><p><b>第四步：(2) 写出体积元素。</b>高度为 $y$、厚度为 $dy$ 的水平条，绕竖直线 $x=\mathrm{e}$ 旋转一周，得到一个薄圆环（垫圈）。旋转半径就是点到轴的<b>距离</b>：</p><ul><li>外半径（左端点 $x=\mathrm{e}y$ 到轴）：$R(y)=\mathrm{e}-\mathrm{e}y$；</li><li>内半径（右端点 $x=\mathrm{e}^y$ 到轴）：$r(y)=\mathrm{e}-\mathrm{e}^y$（因 $y\le1$，$\mathrm{e}^y\le\mathrm{e}$，非负）。</li></ul>$$dV=\pi\big[R^2(y)-r^2(y)\big]dy=\pi\big[(\mathrm{e}-\mathrm{e}y)^2-(\mathrm{e}-\mathrm{e}^y)^2\big]dy.$$<p><b>第五步：积分。</b>分两部分计算：</p>$$\int_0^1(\mathrm{e}-\mathrm{e}y)^2dy=\mathrm{e}^2\int_0^1(1-y)^2dy=\frac{\mathrm{e}^2}{3},$$$$\int_0^1(\mathrm{e}-\mathrm{e}^y)^2dy=\int_0^1\left(\mathrm{e}^2-2\mathrm{e}\cdot\mathrm{e}^y+\mathrm{e}^{2y}\right)dy=\mathrm{e}^2-2\mathrm{e}(\mathrm{e}-1)+\frac{\mathrm{e}^2-1}{2}=-\frac{\mathrm{e}^2}{2}+2\mathrm{e}-\frac12.$$<p>所以</p>$$V=\pi\left[\frac{\mathrm{e}^2}{3}+\frac{\mathrm{e}^2}{2}-2\mathrm{e}+\frac12\right]=\pi\left(\frac{5\mathrm{e}^2}{6}-2\mathrm{e}+\frac12\right)=\frac{\pi}{6}\left(5\mathrm{e}^2-12\mathrm{e}+3\right).$$<p><b>几何解释：</b>第一部分 $\frac{\pi\mathrm{e}^2}{3}$ 正是直角三角形 $O,(\mathrm{e},0),(\mathrm{e},1)$ 绕 $x=\mathrm{e}$ 转成的圆锥体积（底半径 $\mathrm{e}$、高 $1$）；第二部分是曲线下方那块小区域转出的体积。$V$ = 圆锥 − 小旋转体，数值约 $3.836 > 0$，合理。</p>`,
      pitfalls: R`<p>1. 旋转半径写成 $x$ 或 $\mathrm{e}^y$——那是到 $y$ 轴的距离。绕 $x=\mathrm{e}$ 旋转，半径必须是"到轴的距离" $\mathrm{e}-x$。</p><p>2. 垫圈公式写成 $\pi(R-r)^2dy$。正确的是 $\pi(R^2-r^2)dy$（大圆面积减小圆面积）。</p><p>3. 区域找错：漏掉 $0\le x\le1$ 那一段（切线下方、$x$ 轴上方、曲线还没出现的部分），面积只算了 $1\le x\le\mathrm{e}$ 之间的部分。</p><p>4. 对 $x$ 积分时不分段，直接写 $\int_0^{\mathrm{e}}\left(\frac{x}{\mathrm{e}}-\ln x\right)dx$——$\ln x$ 在 $(0,1)$ 内为负，这样会把 $x$ 轴下方的部分也算进去。</p>`,
      summary: R`<p><b>方法要点：</b>(1) 过曲线外一点作切线：设切点 → 写切线 → 代入已知点。(2) 求面积、体积前先画图；选积分变量的原则是"每条微元两端只由一条边界决定"。(3) 绕竖直线 $x=c$ 旋转：对 $y$ 积分用垫圈法 $V=\pi\int(R^2-r^2)dy$；对 $x$ 积分用柱壳法 $V=2\pi\int|x-c|\,h(x)\,dx$。</p><p><b>看到…想到…：</b>看到"过某点作曲线的切线"而该点不在曲线上，想到设切点；看到"绕直线 $x=c$（或 $y=c$）旋转"，想到半径 = 到轴的距离；看到区域边界在某处"换人"，想到换一个积分变量或分段。</p>`,
      alt: R`<p><b>另解（柱壳法求体积）：</b>用竖条 $[x,x+dx]$，高为 $h(x)$，绕 $x=\mathrm{e}$ 旋转得到半径 $\mathrm{e}-x$、高 $h(x)$、厚 $dx$ 的薄圆柱壳，$dV=2\pi(\mathrm{e}-x)h(x)dx$。这里 $0\le x\le1$ 时 $h(x)=\frac{x}{\mathrm{e}}$，$1\le x\le\mathrm{e}$ 时 $h(x)=\frac{x}{\mathrm{e}}-\ln x$，合起来</p>$$V=2\pi\left[\int_0^{\mathrm{e}}(\mathrm{e}-x)\frac{x}{\mathrm{e}}dx-\int_1^{\mathrm{e}}(\mathrm{e}-x)\ln x\,dx\right].$$<p>其中 $\int_0^{\mathrm{e}}(\mathrm{e}-x)\frac x{\mathrm{e}}dx=\frac{\mathrm{e}^2}{6}$；$\int_1^{\mathrm{e}}(\mathrm{e}-x)\ln x\,dx=\mathrm{e}\int_1^{\mathrm{e}}\ln x\,dx-\int_1^{\mathrm{e}}x\ln x\,dx=\mathrm{e}-\frac{\mathrm{e}^2+1}{4}$。代入得</p>$$V=2\pi\left[\frac{\mathrm{e}^2}{6}-\mathrm{e}+\frac{\mathrm{e}^2+1}{4}\right]=\frac\pi6\left(5\mathrm{e}^2-12\mathrm{e}+3\right),$$<p>与垫圈法一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 切点方程 -ln x0=-1 得 x0=e；面积 ∫_0^1(e^y-ey)dy = e/2-1，与 e/2-∫_1^e ln x dx 一致；体积用垫圈法与柱壳法分别积分均化简为 π(5e²-12e+3)/6≈3.836' },
      flags: []
    },

    /* ───────────── 四 ───────────── */
    {
      id: '2003-4', year: 2003, no: '四', type: '解答', score: 12,
      stem: R`将函数 $f(x)=\arctan\dfrac{1-2x}{1+2x}$ 展开成 $x$ 的幂级数，并求级数 $\sum\limits_{n=0}^{\infty}\dfrac{(-1)^n}{2n+1}$ 的和.`,
      options: null,
      answer: R`$f(x)=\dfrac{\pi}{4}-2\sum\limits_{n=0}^{\infty}\dfrac{(-1)^n4^n}{2n+1}x^{2n+1},\ x\in\left(-\dfrac12,\dfrac12\right]$；$\sum\limits_{n=0}^{\infty}\dfrac{(-1)^n}{2n+1}=\dfrac{\pi}{4}$.`,
      figure: null,
      kp: ['series.expand', 'series.sum', 'series.power'],
      methods: ['先求导、展开、再逐项积分', '几何级数', '阿贝尔定理（端点处的连续性）', '借助幂级数求数项级数的和'],
      difficulty: 3,
      analysis: R`<p>直接对 $\arctan\frac{1-2x}{1+2x}$ 反复求导写泰勒系数，会越算越乱。但 $\arctan$ 有个好性质：它的导数是有理函数 $\frac{1}{1+u^2}$。本题求一次导数后，复杂的分式会化简成 $-\frac{2}{1+4x^2}$，而它就是一个几何级数的和。于是策略是<b>"先求导、展开、再积分回来"</b>：</p>$$f(x)=f(0)+\int_0^xf'(t)\,dt.$$<p>为什么会化简得这么干净？因为 $\tan\left(\frac\pi4-\theta\right)=\frac{1-\tan\theta}{1+\tan\theta}$，令 $\tan\theta=2x$ 就看出：当 $x > -\frac12$ 时，$f(x)=\frac\pi4-\arctan2x$。所以 $f$ 本质上就是 $\arctan2x$ 翻转平移后的样子，导数自然简单。</p><p>第二问的数项级数 $1-\frac13+\frac15-\cdots$ 与展开式的系数结构相同：把 $x=\frac12$ 代进去恰好得到它。但 $x=\frac12$ 是收敛区间的<b>端点</b>，必须单独论证展开式在端点也成立——这是本题容易丢分的地方。</p>`,
      solution: R`<p><b>第一步：求导。</b>令 $u=\frac{1-2x}{1+2x}$（$x\ne-\frac12$），则</p>$$u'=\frac{-2(1+2x)-2(1-2x)}{(1+2x)^2}=\frac{-4}{(1+2x)^2},\qquad 1+u^2=\frac{(1+2x)^2+(1-2x)^2}{(1+2x)^2}=\frac{2+8x^2}{(1+2x)^2}.$$$$f'(x)=\frac{u'}{1+u^2}=\frac{-4}{2+8x^2}=-\frac{2}{1+4x^2}.$$<p><b>第二步：把 $f'$ 展开。</b>利用 $\frac1{1+t}=\sum\limits_{n=0}^\infty(-1)^nt^n\ (|t| < 1)$，取 $t=4x^2$：</p>$$f'(x)=-2\sum_{n=0}^{\infty}(-1)^n4^nx^{2n},\qquad |x| < \frac12.$$<p><b>第三步：逐项积分。</b>$f(0)=\arctan1=\frac\pi4$。幂级数在收敛区间内可以逐项积分，且收敛半径不变：</p>$$f(x)=\frac\pi4+\int_0^xf'(t)\,dt=\frac\pi4-2\sum_{n=0}^{\infty}\frac{(-1)^n4^n}{2n+1}x^{2n+1},\qquad |x| < \frac12.$$<p><b>第四步：讨论端点。</b></p><ul><li>$x=\frac12$：右边级数为 $\frac\pi4-2\sum\limits_{n=0}^\infty\frac{(-1)^n4^n}{2n+1}\cdot\frac{1}{2^{2n+1}}=\frac\pi4-\sum\limits_{n=0}^\infty\frac{(-1)^n}{2n+1}$。这是交错级数，$\frac1{2n+1}$ 单调减少趋于 $0$，由莱布尼茨判别法收敛。又 $f$ 在 $x=\frac12$ 处有定义且连续。由<b>阿贝尔定理</b>的推论——幂级数的和函数在收敛域的端点处单侧连续——令 $x\to\frac12^-$，等式两边的极限相等，所以展开式在 $x=\frac12$ 处也成立。</li><li>$x=-\frac12$：$1+2x=0$，$f$ 在该点无定义，不能包含。</li></ul><p>因此</p>$$f(x)=\frac\pi4-2\sum_{n=0}^{\infty}\frac{(-1)^n4^n}{2n+1}x^{2n+1}=\frac\pi4+\sum_{n=0}^{\infty}\frac{(-1)^{n+1}2^{2n+1}}{2n+1}x^{2n+1},\qquad x\in\left(-\frac12,\frac12\right].$$<p><b>第五步：求数项级数的和。</b>在上式中令 $x=\frac12$：左边 $f\left(\frac12\right)=\arctan0=0$，右边为 $\frac\pi4-\sum\limits_{n=0}^\infty\frac{(-1)^n}{2n+1}$。所以</p>$$\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}=1-\frac13+\frac15-\frac17+\cdots=\frac\pi4.$$`,
      pitfalls: R`<p>1. 积分回来时漏掉常数 $f(0)=\frac\pi4$——"先导后积"必须写成 $f(x)=f(0)+\int_0^xf'(t)dt$。</p><p>2. 只写收敛区间 $\left(-\frac12,\frac12\right)$，却又把 $x=\frac12$ 代进去求和，逻辑不自洽。端点要单独说明：<b>级数在端点收敛 + 函数在端点连续</b>，等式才在端点成立。</p><p>3. 把 $x=-\frac12$ 也写进去：虽然级数在 $x=-\frac12$ 处也收敛，但 $f(-\frac12)$ 无定义，展开式不可能在那里成立。</p><p>4. 求导时分式运算出错。像上面那样分别算 $u'$ 和 $1+u^2$ 再相除，最不容易错。</p>`,
      summary: R`<p><b>方法要点：</b>$\arctan$、$\ln$ 一类函数的展开：先求导化成有理函数（几何级数），展开后逐项积分，别忘了加 $f(0)$；最后讨论端点：<b>级数在端点收敛且 $f$ 在端点连续 ⇒ 展开式在端点成立</b>。</p><p><b>看到…想到…：</b>看到要展开的函数"求一次导就变简单"，想到先导后积；看到数项级数 $\sum\limits_{n=0}^\infty\frac{(-1)^n}{2n+1}$、$\sum\limits_{n=1}^\infty\frac{(-1)^{n-1}}{n}$ 之类，想到它们是已知幂级数在端点的值（分别等于 $\arctan1=\frac\pi4$、$\ln2$），并记得用阿贝尔定理说明端点。常用展开：$\arctan x=\sum\limits_{n=0}^\infty\frac{(-1)^n}{2n+1}x^{2n+1}$，$x\in[-1,1]$。</p>`,
      alt: R`<p><b>另解（三角恒等式）：</b>当 $x > -\frac12$ 时，令 $\theta=\arctan2x\in\left(-\frac\pi4,\frac\pi2\right)$，则 $\frac\pi4-\theta\in\left(-\frac\pi4,\frac\pi2\right)$，且</p>$$\tan\left(\frac\pi4-\theta\right)=\frac{1-\tan\theta}{1+\tan\theta}=\frac{1-2x}{1+2x}.$$<p>由于 $\frac\pi4-\theta$ 落在 $\arctan$ 的值域 $\left(-\frac\pi2,\frac\pi2\right)$ 内，得 $f(x)=\frac\pi4-\arctan2x$。再代入 $\arctan t=\sum\limits_{n=0}^\infty\frac{(-1)^n}{2n+1}t^{2n+1}$（$-1\le t\le1$），$t=2x$，立即得到同样的展开式，而且端点 $x=\frac12$（即 $t=1$）直接包含在 $\arctan$ 展开式的成立范围内。</p><p>（补充：当 $x < -\frac12$ 时 $f(x)=-\frac{3\pi}{4}-\arctan2x$，两段相差 $\pi$，说明 $f$ 在 $x=-\frac12$ 两侧"断开"，展开式只能在 $x > -\frac12$ 一侧成立。）</p>`,
      verify: { by: 'sympy', ok: true, note: "sympy: f'(x) 化简为 -2/(4x²+1)；series(f,x,0,10) 与 π/4-2Σ(-1)^n 4^n x^(2n+1)/(2n+1) 前 5 项完全一致；summation((-1)^n/(2n+1),(n,0,oo)) = π/4；f(1/2)=0；数值检验 x>-1/2 时 f=π/4-arctan2x，x<-1/2 时相差 -π" },
      flags: ['参考解析把展开式的成立范围写成开区间 (-1/2, 1/2)，随后却直接代入端点 x=1/2 求和，缺少端点论证；正确的成立范围是 (-1/2, 1/2]（级数在 x=1/2 收敛且 f 在该点连续，由阿贝尔定理），本讲解已补上该论证']
    },

    /* ───────────── 五 ───────────── */
    {
      id: '2003-5', year: 2003, no: '五', type: '解答', score: 10,
      stem: R`已知平面区域 $D=\{(x,y)\mid0\leqslant x\leqslant\pi,\ 0\leqslant y\leqslant\pi\}$，$L$ 为 $D$ 的正向边界. 试证：<br>(1) $\displaystyle\oint_Lx\mathrm{e}^{\sin y}\mathrm{d}y-y\mathrm{e}^{-\sin x}\mathrm{d}x=\oint_Lx\mathrm{e}^{-\sin y}\mathrm{d}y-y\mathrm{e}^{\sin x}\mathrm{d}x$；<br>(2) $\displaystyle\oint_Lx\mathrm{e}^{\sin y}\mathrm{d}y-y\mathrm{e}^{-\sin x}\mathrm{d}x\geqslant2\pi^2$.`,
      options: null,
      answer: R`证明见解答。（事实上该积分等于 $\pi\displaystyle\int_0^\pi\left(\mathrm{e}^{\sin x}+\mathrm{e}^{-\sin x}\right)dx\approx24.99$，大于 $2\pi^2\approx19.74$.）`,
      figure: null,
      kp: ['mint.line2', 'mint.double'],
      methods: ['格林公式', '轮换对称性', '均值不等式放缩'],
      difficulty: 3,
      analysis: R`<p>闭曲线上的第二类曲线积分，而且曲线恰好是一个区域的完整正向边界——第一反应是<b>格林公式</b>，把曲线积分化成二重积分，被积函数会简单很多。</p><p>(1) 用格林公式后，两边分别是 $\iint_D(\mathrm{e}^{\sin y}+\mathrm{e}^{-\sin x})d\sigma$ 和 $\iint_D(\mathrm{e}^{-\sin y}+\mathrm{e}^{\sin x})d\sigma$，它们恰好是把 $x,y$ 互换得到的。区域 $D$ 是正方形，关于直线 $y=x$ 对称，交换 $x,y$ 不改变积分值——这就是<b>轮换对称性</b>。</p><p>(2) 要证一个下界，自然想对被积函数放缩。但直接放缩 $\mathrm{e}^{\sin y}+\mathrm{e}^{-\sin x}$ 行不通：例如在 $(x,y)=(\frac\pi2,0)$ 处它等于 $1+\mathrm{e}^{-1}\approx1.37 < 2$。我们真正需要的是"$\mathrm{e}^{t}+\mathrm{e}^{-t}\ge2$"这种<b>同一个 $t$</b> 的配对，而第 (1) 问恰好提供了把 $\mathrm{e}^{\sin x}$ 和 $\mathrm{e}^{-\sin x}$ 配到一起的机会：<b>把两个相等的表达式加起来取平均</b>。这就是第 (1) 问为第 (2) 问铺路的设计意图。</p>`,
      solution: R`<p><b>(1) 第一步：验证格林公式的条件并计算。</b>左边中 $P=-y\mathrm{e}^{-\sin x}$（$\mathrm{d}x$ 前的函数），$Q=x\mathrm{e}^{\sin y}$（$\mathrm{d}y$ 前的函数），它们在全平面有连续的一阶偏导数；$L$ 是 $D$ 的正向（逆时针）边界。由格林公式 $\oint_LP\,dx+Q\,dy=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)d\sigma$，</p>$$\frac{\partial Q}{\partial x}=\mathrm{e}^{\sin y},\quad\frac{\partial P}{\partial y}=-\mathrm{e}^{-\sin x}\ \Longrightarrow\ \text{左边}=\iint_D\left(\mathrm{e}^{\sin y}+\mathrm{e}^{-\sin x}\right)d\sigma.$$<p>同理，右边中 $P=-y\mathrm{e}^{\sin x}$，$Q=x\mathrm{e}^{-\sin y}$：</p>$$\text{右边}=\iint_D\left(\mathrm{e}^{-\sin y}+\mathrm{e}^{\sin x}\right)d\sigma.$$<p><b>第二步：利用轮换对称性。</b>$D=[0,\pi]\times[0,\pi]$ 交换 $x$ 与 $y$ 后不变，所以对任何连续函数 $g$ 有 $\iint_Dg(x,y)\,d\sigma=\iint_Dg(y,x)\,d\sigma$。本题被积函数每一项只含一个变量，也可以直接化成累次积分看出来：</p>$$\iint_D\mathrm{e}^{\sin y}d\sigma=\int_0^\pi dx\int_0^\pi\mathrm{e}^{\sin y}dy=\pi\int_0^\pi\mathrm{e}^{\sin t}dt=\iint_D\mathrm{e}^{\sin x}d\sigma,$$<p>同理 $\iint_D\mathrm{e}^{-\sin x}d\sigma=\iint_D\mathrm{e}^{-\sin y}d\sigma$。所以两个二重积分相等，(1) 得证。</p><p><b>(2) 第三步：取平均。</b>记 $I=\oint_Lx\mathrm{e}^{\sin y}dy-y\mathrm{e}^{-\sin x}dx$。由 (1)，$I$ 既等于左边的二重积分，也等于右边的二重积分，于是</p>$$2I=\iint_D\left(\mathrm{e}^{\sin y}+\mathrm{e}^{-\sin x}\right)d\sigma+\iint_D\left(\mathrm{e}^{-\sin y}+\mathrm{e}^{\sin x}\right)d\sigma=\iint_D\Big[\left(\mathrm{e}^{\sin x}+\mathrm{e}^{-\sin x}\right)+\left(\mathrm{e}^{\sin y}+\mathrm{e}^{-\sin y}\right)\Big]d\sigma.$$<p><b>第四步：均值不等式放缩。</b>对任意实数 $t$，$\mathrm{e}^t+\mathrm{e}^{-t}\ge2\sqrt{\mathrm{e}^t\cdot\mathrm{e}^{-t}}=2$。所以被积函数 $\ge2+2=4$，而 $D$ 的面积为 $\pi^2$：</p>$$2I\ge4\pi^2\quad\Longrightarrow\quad I\ge2\pi^2.$$<p>证毕。</p>`,
      pitfalls: R`<p>1. 格林公式的符号：被积函数是 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}$，这里 $P$ 本身带负号，$-\frac{\partial P}{\partial y}=+\mathrm{e}^{-\sin x}$，很多人算成减号。</p><p>2. 把 $P$、$Q$ 认反：$P$ 是 $\mathrm{d}x$ 前面的函数，$Q$ 是 $\mathrm{d}y$ 前面的函数，与书写顺序无关（本题先写的是 $\mathrm{d}y$ 项）。</p><p>3. 第 (2) 问直接对左边的被积函数 $\mathrm{e}^{\sin y}+\mathrm{e}^{-\sin x}$ 用"$\ge2$"——这是错的，它在 $(\frac\pi2,0)$ 处只有约 $1.37$。只有同一个变量的 $\mathrm{e}^t$ 与 $\mathrm{e}^{-t}$ 配对，才能用均值不等式。</p><p>4. 忽视 (1)(2) 之间的联系，(2) 另起炉灶，结果无从下手。</p>`,
      summary: R`<p><b>方法要点：</b>(1) 闭曲线 + 第二类曲线积分 → 格林公式；(2) 积分区域关于 $y=x$ 对称 → 轮换对称 $\iint_Dg(x,y)d\sigma=\iint_Dg(y,x)d\sigma$；(3) 证积分不等式：先把被积函数"配对"成 $t+\frac1t$ 或 $\mathrm{e}^t+\mathrm{e}^{-t}$ 的形式，再用均值不等式。</p><p><b>看到…想到…：</b>看到"证明两个积分相等"且两边被积式只是 $x,y$ 互换，想到轮换对称；看到"证明某积分 $\ge$ 常数"且同时出现 $\mathrm{e}^{t}$ 与 $\mathrm{e}^{-t}$，想到配对用 $\ge2$；看到多问的证明题，想到前一问往往是后一问的工具。</p>`,
      alt: R`<p><b>另解（直接参数化计算）：</b>把 $L$ 分成四条边（逆时针）：下边 $y=0$，$x:0\to\pi$；右边 $x=\pi$，$y:0\to\pi$；上边 $y=\pi$，$x:\pi\to0$；左边 $x=0$，$y:\pi\to0$。对左边的积分 $I$：下边 $y=0$、$\mathrm{d}y=0$，贡献 $0$；左边 $x=0$、$\mathrm{d}x=0$，贡献 $0$；右边贡献 $\int_0^\pi\pi\mathrm{e}^{\sin y}dy$；上边贡献 $\int_\pi^0\left(-\pi\mathrm{e}^{-\sin x}\right)dx=\pi\int_0^\pi\mathrm{e}^{-\sin x}dx$。所以</p>$$I=\pi\int_0^\pi\left(\mathrm{e}^{\sin x}+\mathrm{e}^{-\sin x}\right)dx.$$<p>对右边同样计算也得到这个值，(1) 成立；再由 $\mathrm{e}^{t}+\mathrm{e}^{-t}\ge2$ 得 $I\ge\pi\cdot2\pi=2\pi^2$。</p><p><b>加强：</b>由泰勒展开 $\mathrm{e}^t+\mathrm{e}^{-t}=2\left(1+\frac{t^2}{2!}+\frac{t^4}{4!}+\cdots\right)\ge2+t^2$，可得 $I\ge\pi\int_0^\pi(2+\sin^2x)dx=\pi\left(2\pi+\frac\pi2\right)=\frac{5}{2}\pi^2$，比 $2\pi^2$ 更精确（数值上 $I\approx24.99$，$\frac52\pi^2\approx24.67$）。</p>`,
      verify: { by: 'mixed', ok: true, note: 'sympy 求得两边格林公式被积函数分别为 e^(sin y)+e^(-sin x) 与 e^(sin x)+e^(-sin y)；mpmath 沿正方形四条边直接数值计算两个曲线积分，均为 24.99114 = 2π²·I0(1)，与二重积分数值一致，大于 2π²≈19.739，也大于 5π²/2≈24.674；不等式部分为手工证明' },
      flags: []
    },

    /* ───────────── 六 ───────────── */
    {
      id: '2003-6', year: 2003, no: '六', type: '解答', score: 10,
      stem: R`某建筑工程打地基时，需用汽锤将桩打进土层. 汽锤每次击打，都将克服土层对桩的阻力而作功. 设土层对桩的阻力的大小与桩被打进地下的深度成正比（比例系数为 $k,\ k > 0$），汽锤第一次击打将桩打进地下 $a\ (\mathrm{m})$. 根据设计方案，要求汽锤每次击打桩时所作的功与前一次击打时所作的功之比为常数 $r\ (0 < r < 1)$. 问<br>(1) 汽锤击打桩 3 次后，可将桩打进地下多深？<br>(2) 若击打次数不限，汽锤至多能将桩打进地下多深？<br>（注：$\mathrm{m}$ 表示长度单位米.）`,
      options: null,
      answer: R`(1) $\sqrt{1+r+r^2}\,a\ (\mathrm{m})$；(2) $\dfrac{a}{\sqrt{1-r}}\ (\mathrm{m})$.`,
      figure: null,
      kp: ['int.app', 'lim.seqcalc', 'series.concept'],
      methods: ['变力做功（微元法）', '裂项相消', '等比数列求和', '数列极限'],
      difficulty: 3,
      analysis: R`<p>这是定积分的物理应用——<b>变力做功</b>。阻力随深度变化（$F=kx$），不能简单地用"力 × 距离"，要用微元法：桩从深度 $x$ 再打进 $dx$，这一小段里阻力近似不变，为 $kx$，做功 $dW=kx\,dx$，累加起来就是积分。</p><p>关键的建模点：第 $n$ 次击打把桩从深度 $x_{n-1}$ 打到 $x_n$，这一次的功是 $\int_{x_{n-1}}^{x_n}kx\,dx$，而不是从 $0$ 开始积。</p><p>更聪明的视角（第一原理）：<b>把桩从地面打到深度 $X$，总共需要的功是 $\int_0^Xkx\,dx=\frac k2X^2$，与分几次打无关</b>。所以前 $n$ 次功的总和直接决定了 $x_n$：$\frac k2x_n^2=W_1+W_2+\cdots+W_n$。而每次的功构成公比为 $r$ 的等比数列，求和就得到 $x_n$；击打次数不限时，总功是一个收敛的几何级数，有上限，所以深度也有上限。</p>`,
      solution: R`<p><b>第一步：建立模型。</b>以地面为原点、竖直向下为 $x$ 轴正向。桩打入深度为 $x$ 时，阻力大小为 $kx$。设第 $n$ 次击打后桩的深度为 $x_n$（$x_0=0$，$x_1=a$），第 $n$ 次击打所作的功为 $W_n$。用微元法，桩从 $x$ 进到 $x+dx$ 克服阻力作功 $dW=kx\,dx$，所以</p>$$W_n=\int_{x_{n-1}}^{x_n}kx\,dx=\frac k2\left(x_n^2-x_{n-1}^2\right),\qquad W_1=\int_0^akx\,dx=\frac k2a^2.$$<p><b>第二步：用"功之比为 $r$"。</b>$W_n=rW_{n-1}$，所以 $W_n=r^{n-1}W_1=\frac k2a^2r^{n-1}$。</p><p><b>第三步：求和（裂项相消）。</b>前 $n$ 次的功相加，中间项逐一抵消：</p>$$W_1+W_2+\cdots+W_n=\frac k2\left[(x_1^2-x_0^2)+(x_2^2-x_1^2)+\cdots+(x_n^2-x_{n-1}^2)\right]=\frac k2x_n^2.$$<p>另一方面它是等比数列的和 $\frac k2a^2(1+r+\cdots+r^{n-1})$。比较得</p>$$x_n^2=a^2(1+r+\cdots+r^{n-1})=a^2\cdot\frac{1-r^n}{1-r},\qquad x_n=a\sqrt{\frac{1-r^n}{1-r}}.$$<p><b>第四步：(1) 取 $n=3$。</b></p>$$x_3=\sqrt{1+r+r^2}\,a\ (\mathrm{m}).$$<p>（也可以一次一次算：由 $W_2=rW_1$ 得 $x_2^2-a^2=ra^2$，$x_2^2=(1+r)a^2$；由 $W_3=rW_2=r^2W_1$ 得 $x_3^2-x_2^2=r^2a^2$，$x_3^2=(1+r+r^2)a^2$。）</p><p><b>第五步：(2) 令 $n\to\infty$。</b>因 $0 < r < 1$，$r^n\to0$，</p>$$\lim_{n\to\infty}x_n=\lim_{n\to\infty}a\sqrt{\frac{1-r^n}{1-r}}=\frac{a}{\sqrt{1-r}}\ (\mathrm{m}).$$<p>由于 $x_n$ 单调增加，且对每个 $n$ 都有 $x_n < \frac{a}{\sqrt{1-r}}$，桩的深度可以无限接近但不会超过 $\frac{a}{\sqrt{1-r}}$，所以汽锤至多能将桩打进地下 $\frac{a}{\sqrt{1-r}}$ 米。物理上：总功 $\sum W_n=\frac{W_1}{1-r}$ 是有限的，而打到深度 $X$ 需要 $\frac k2X^2$ 的功，令二者相等同样得到 $X=\frac{a}{\sqrt{1-r}}$。</p>`,
      pitfalls: R`<p>1. 把阻力当常力，写成 $W=kx\cdot x$；变力做功必须积分。</p><p>2. 第 $n$ 次的功写成 $\int_0^{x_n}kx\,dx$（从地面算起），把之前已经做过的功重复计算了。</p><p>3. 指数错位：$W_n=r^{n-1}W_1$ 而不是 $r^nW_1$；三次击打对应 $1+r+r^2$，不是 $1+r+r^2+r^3$。</p><p>4. 忘记开方：求出的是 $x_n^2$，深度是 $x_n=a\sqrt{\cdots}$。</p>`,
      summary: R`<p><b>方法要点：</b>变力沿直线做功 $W=\int_a^bF(x)\,dx$（微元法：在小区间上"以常代变"）；分段做功的累计用裂项相消；无限次过程用级数求和或数列极限。</p><p><b>看到…想到…：</b>看到"力与位移（深度）成正比"，想到 $W=\int kx\,dx$；看到"每次与前一次之比为常数"，想到等比数列；看到"至多""最终"，想到 $n\to\infty$ 的极限（或级数和）。同类题：抽水做功（$dW=\rho g\cdot$ 薄层体积 $\cdot$ 提升高度）、弹簧拉伸做功、克服引力做功。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 由 W2=rW1 解得 x2=a√(1+r)，由 W3=r²W1 解得 x3=a√(r²+r+1)；取 r=1/3 时 x_n=a√((1-r^n)/(1-r)) 的极限为 √6a/2 = a/√(1-r)' },
      flags: []
    },

    /* ───────────── 七 ───────────── */
    {
      id: '2003-7', year: 2003, no: '七', type: '解答', score: 12,
      stem: R`设函数 $y=y(x)$ 在 $(-\infty,+\infty)$ 内具有二阶导数，且 $y'\ne0$，$x=x(y)$ 是 $y=y(x)$ 的反函数.<br>(1) 试将 $x=x(y)$ 所满足的微分方程 $\dfrac{\mathrm{d}^2x}{\mathrm{d}y^2}+(y+\sin x)\left(\dfrac{\mathrm{d}x}{\mathrm{d}y}\right)^3=0$ 变换为 $y=y(x)$ 满足的微分方程；<br>(2) 求变换后的微分方程满足初始条件 $y(0)=0,\ y'(0)=\dfrac32$ 的解.`,
      options: null,
      answer: R`(1) $y''-y=\sin x$；(2) $y=\mathrm{e}^x-\mathrm{e}^{-x}-\dfrac12\sin x$.`,
      figure: null,
      kp: ['ode.const', 'diff.calc'],
      methods: ['反函数求导（含二阶）', '二阶常系数非齐次线性方程', '待定系数法求特解'],
      difficulty: 3,
      analysis: R`<p>(1) 本质是<b>反函数的求导</b>：方程里出现的是 $\frac{dx}{dy}$、$\frac{d^2x}{dy^2}$，要把它们都改写成 $y'=\frac{dy}{dx}$、$y''=\frac{d^2y}{dx^2}$ 的表达式。一阶大家都熟：$\frac{dx}{dy}=\frac1{y'}$。二阶是难点：$\frac1{y'}$ 是 $x$ 的函数，而我们要对 $y$ 求导，所以必须用链式法则"先对 $x$ 求导，再乘 $\frac{dx}{dy}$"。</p><p>算出 $\frac{d^2x}{dy^2}=-\frac{y''}{(y')^3}$ 之后你会发现，方程里 $\left(\frac{dx}{dy}\right)^3=\frac1{(y')^3}$ 的三次方正好与它"配套"——两项分母相同，一乘就消掉了。命题人设计的方程总能化简干净，这也是检验计算是否正确的信号。</p><p>(2) 变换后得到二阶<b>常系数线性非齐次</b>方程，按"齐次通解 + 非齐次特解"的结构求解，再用初始条件定常数。</p>`,
      solution: R`<p><b>(1) 第一步：一阶导数。</b>因为 $y$ 二阶可导，$y'$ 连续，又 $y'\ne0$，所以 $y'$ 不变号，$y$ 严格单调，反函数存在且可导。由反函数求导法则</p>$$\frac{dx}{dy}=\frac{1}{y'}.$$<p><b>第二步：二阶导数。</b>$\frac{dx}{dy}=\frac1{y'(x)}$ 是 $x$ 的函数，对 $y$ 求导要用链式法则：</p>$$\frac{d^2x}{dy^2}=\frac{d}{dy}\left(\frac1{y'}\right)=\frac{d}{dx}\left(\frac1{y'}\right)\cdot\frac{dx}{dy}=\left(-\frac{y''}{(y')^2}\right)\cdot\frac1{y'}=-\frac{y''}{(y')^3}.$$<p><b>第三步：代入原方程。</b></p>$$-\frac{y''}{(y')^3}+(y+\sin x)\cdot\frac{1}{(y')^3}=0.$$<p>两边乘以 $-(y')^3$（不为零）：$y''-y-\sin x=0$，即</p>$$y''-y=\sin x.$$<p><b>(2) 第四步：齐次方程的通解。</b>特征方程 $\lambda^2-1=0$，$\lambda=\pm1$，齐次通解 $Y=C_1\mathrm{e}^x+C_2\mathrm{e}^{-x}$。</p><p><b>第五步：非齐次特解。</b>自由项 $\sin x=\mathrm{e}^{0\cdot x}(0\cdot\cos x+1\cdot\sin x)$，对应 $\alpha\pm\beta i=\pm i$，不是特征根，所以设 $y^*=A\cos x+B\sin x$（即使自由项只有 $\sin x$，也要同时设 $\cos x$ 与 $\sin x$ 两项）。$y^{*\prime\prime}=-A\cos x-B\sin x$，代入：</p>$$y^{*\prime\prime}-y^*=-2A\cos x-2B\sin x=\sin x\ \Longrightarrow\ A=0,\ B=-\frac12.$$<p>所以 $y^*=-\frac12\sin x$，通解为 $y=C_1\mathrm{e}^x+C_2\mathrm{e}^{-x}-\frac12\sin x$。</p><p><b>第六步：定常数。</b>$y(0)=C_1+C_2=0$；$y'=C_1\mathrm{e}^x-C_2\mathrm{e}^{-x}-\frac12\cos x$，$y'(0)=C_1-C_2-\frac12=\frac32$，即 $C_1-C_2=2$。解得 $C_1=1,\ C_2=-1$：</p>$$y=\mathrm{e}^x-\mathrm{e}^{-x}-\frac12\sin x.$$<p><b>第七步：检验与题设相容。</b>$y'=\mathrm{e}^x+\mathrm{e}^{-x}-\frac12\cos x\ge2-\frac12=\frac32 > 0$，确实满足 $y'\ne0$，反函数存在，与题设一致。</p>`,
      pitfalls: R`<p>1. 最常见的错误：以为 $\frac{d^2x}{dy^2}=\frac{1}{y''}$。二阶导数没有"倒数关系"，必须按链式法则推导。</p><p>2. 对 $\frac1{y'}$ 关于 $x$ 求导后，忘记再乘 $\frac{dx}{dy}=\frac1{y'}$，得到 $-\frac{y''}{(y')^2}$。</p><p>3. 特解只设 $B\sin x$ 而漏了 $A\cos x$。本题恰好 $A=0$，但方法上不对，遇到含一阶导数项的方程就会出错。</p><p>4. 变换后方程里 $\sin x$ 中的 $x$ 已经是自变量，不要再把它当成未知函数处理。</p>`,
      summary: R`<p><b>方法要点：</b>反函数导数公式 $\frac{dx}{dy}=\frac1{y'}$，$\frac{d^2x}{dy^2}=-\frac{y''}{(y')^3}$（要会推导：对 $y$ 求导 = 对 $x$ 求导再乘 $\frac{dx}{dy}$）。二阶常系数非齐次方程：自由项为 $\mathrm{e}^{\alpha x}[P_l(x)\cos\beta x+Q_m(x)\sin\beta x]$ 时，看 $\alpha\pm\beta i$ 是否为特征根，决定特解是否要乘 $x^k$。</p><p><b>看到…想到…：</b>看到"将以 $y$ 为自变量的方程变换为以 $x$ 为自变量的方程"，想到反函数求导；看到方程中有 $\left(\frac{dx}{dy}\right)^3$，想到它将与 $\frac{d^2x}{dy^2}$ 的分母 $(y')^3$ 配套消去。同类题：用 $x=\mathrm{e}^t$、$x=\cos t$ 等变量代换化简微分方程，核心都是链式法则。</p>`,
      verify: { by: 'sympy', ok: true, note: "sympy: 以 y=x³+x 检验 d²x/dy² = -y''/y'³ 恒成立；代入后化简为 y''-y-sin x=0；dsolve(y''-y=sin x, y(0)=0, y'(0)=3/2) 得 y=e^x-e^(-x)-sin(x)/2，回代残差为 0，且 y'=e^x+e^(-x)-cos(x)/2 恒正" },
      flags: []
    },

    /* ───────────── 八 ───────────── */
    {
      id: '2003-8', year: 2003, no: '八', type: '解答', score: 12,
      stem: R`设函数 $f(x)$ 连续且恒大于零，$$F(t)=\frac{\displaystyle\iiint_{\Omega(t)}f(x^2+y^2+z^2)\,\mathrm{d}v}{\displaystyle\iint_{D(t)}f(x^2+y^2)\,\mathrm{d}\sigma},\qquad G(t)=\frac{\displaystyle\iint_{D(t)}f(x^2+y^2)\,\mathrm{d}\sigma}{\displaystyle\int_{-t}^{t}f(x^2)\,\mathrm{d}x},$$其中 $\Omega(t)=\{(x,y,z)\mid x^2+y^2+z^2\leqslant t^2\}$，$D(t)=\{(x,y)\mid x^2+y^2\leqslant t^2\}$.<br>(1) 讨论 $F(t)$ 在区间 $(0,+\infty)$ 内的单调性；<br>(2) 证明：当 $t > 0$ 时，$F(t) > \dfrac{2}{\pi}G(t)$.`,
      options: null,
      answer: R`(1) $F(t)$ 在 $(0,+\infty)$ 内单调增加；(2) 证明见解答.`,
      figure: null,
      kp: ['mint.triple', 'int.ftc', 'int.proof'],
      methods: ['球坐标', '极坐标', '变限积分求导', '构造辅助函数证不等式', '柯西—施瓦茨不等式'],
      difficulty: 4,
      analysis: R`<p>三个积分的被积函数都只依赖于"到原点的距离"（$x^2+y^2+z^2$、$x^2+y^2$、$x^2$），积分区域又是球、圆盘、对称区间——这是在暗示：用<b>球坐标、极坐标</b>能把它们全部化成关于半径 $r$ 的一元变限积分。化简后：</p>$$F(t)=\frac{2\int_0^tr^2f(r^2)dr}{\int_0^trf(r^2)dr},\qquad \frac2\pi G(t)=\frac{2\int_0^trf(r^2)dr}{\int_0^tf(r^2)dr}.$$<p>(1) 讨论单调性就是看 $F'(t)$ 的符号——对变限积分之比求导，再把分子合并成<b>一个</b>积分来判断正负。</p><p>(2) 证明不等式：移项通分后等价于 $\int_0^tf(r^2)dr\cdot\int_0^tr^2f(r^2)dr > \left(\int_0^trf(r^2)dr\right)^2$。这是典型的"积分形式柯西—施瓦茨不等式"结构；也可以把 $t$ 当变量，构造辅助函数 $h(t)$，用 $h(0)=0$、$h'(t) > 0$ 来证。</p><p><b>直观理解（第一原理）：</b>以 $w(r)=f(r^2) > 0$ 为"权重"，把 $[0,t]$ 看成一根质量分布不均的杆，则 $\frac{\int rw}{\int w}$ 是 $r$ 的加权平均 $\bar r$，$\frac{\int r^2w}{\int w}$ 是 $r^2$ 的加权平均 $\overline{r^2}$。不等式 (2) 正是 $\overline{r^2} > (\bar r)^2$，即"方差 $> 0$"——只要 $r$ 不是常数，方差就是正的。而 $F(t)=2\cdot\frac{\int r\cdot(rw)\,dr}{\int rw\,dr}$ 是 $r$ 在权重 $rw$ 下的平均值的 2 倍：$t$ 增大时，新加入的点 $r=t$ 比已有的所有点都大，"加入一个比平均数大的新成员，平均数就上升"，这就是 $F$ 单调增加的原因。</p>`,
      solution: R`<p><b>第一步：化成一元积分。</b>球坐标 $x=r\sin\varphi\cos\theta,\ y=r\sin\varphi\sin\theta,\ z=r\cos\varphi$，$dv=r^2\sin\varphi\,dr\,d\varphi\,d\theta$，$x^2+y^2+z^2=r^2$：</p>$$\iiint_{\Omega(t)}f(x^2+y^2+z^2)dv=\int_0^{2\pi}d\theta\int_0^{\pi}\sin\varphi\,d\varphi\int_0^tf(r^2)r^2dr=4\pi\int_0^tr^2f(r^2)dr.$$<p>极坐标 $d\sigma=r\,dr\,d\theta$：</p>$$\iint_{D(t)}f(x^2+y^2)d\sigma=\int_0^{2\pi}d\theta\int_0^tf(r^2)r\,dr=2\pi\int_0^trf(r^2)dr.$$<p>$f(x^2)$ 是偶函数：$\int_{-t}^tf(x^2)dx=2\int_0^tf(r^2)dr$。记</p>$$N(t)=\int_0^tr^2f(r^2)dr,\quad M(t)=\int_0^trf(r^2)dr,\quad E(t)=\int_0^tf(r^2)dr,$$<p>则 $F(t)=\dfrac{2N(t)}{M(t)}$，$G(t)=\dfrac{\pi M(t)}{E(t)}$。由于 $f > 0$，当 $t > 0$ 时 $N,M,E$ 都大于 $0$。</p><p><b>第二步：(1) 求 $F'(t)$。</b>被积函数连续，由变限积分求导公式 $N'(t)=t^2f(t^2)$，$M'(t)=tf(t^2)$。于是</p>$$F'(t)=2\cdot\frac{N'M-NM'}{M^2}=2\cdot\frac{t^2f(t^2)M-N\cdot tf(t^2)}{M^2}=\frac{2tf(t^2)}{M^2(t)}\big[tM(t)-N(t)\big].$$<p><b>第三步：判断方括号的符号。</b>把 $t$ 放进积分号（对 $r$ 积分时 $t$ 是常数）：</p>$$tM(t)-N(t)=\int_0^ttrf(r^2)dr-\int_0^tr^2f(r^2)dr=\int_0^tr(t-r)f(r^2)\,dr.$$<p>当 $0 < r < t$ 时被积函数 $r(t-r)f(r^2) > 0$ 且连续，所以积分 $> 0$。又 $2tf(t^2) > 0$，$M^2 > 0$，故 $F'(t) > 0$，$F(t)$ 在 $(0,+\infty)$ 内<b>单调增加</b>。</p><p><b>第四步：(2) 把要证的不等式等价变形。</b></p>$$F(t)-\frac2\pi G(t)=\frac{2N}{M}-\frac{2M}{E}=\frac{2\left(NE-M^2\right)}{ME}.$$<p>因 $M,E > 0$，只需证明：当 $t > 0$ 时 $h(t)=N(t)E(t)-M^2(t) > 0$。</p><p><b>第五步：构造辅助函数并求导。</b>$h$ 在 $[0,+\infty)$ 上可导，$h(0)=0$，</p>$$h'(t)=N'E+NE'-2MM'=t^2f(t^2)E+Nf(t^2)-2M\cdot tf(t^2)=f(t^2)\big[t^2E-2tM+N\big].$$<p>把方括号写回一个积分（$t$ 是常数，可以放进积分号）：</p>$$t^2E-2tM+N=\int_0^t\left(t^2-2tr+r^2\right)f(r^2)dr=\int_0^t(t-r)^2f(r^2)dr > 0\quad(t > 0).$$<p>所以当 $t > 0$ 时 $h'(t) > 0$。</p><p><b>第六步：由导数的符号得到函数的符号。</b>对 $t > 0$，在 $[0,t]$ 上用拉格朗日中值定理：$h(t)=h(0)+h'(\xi)t=h'(\xi)t > 0$（$0 < \xi < t$）。因此 $NE > M^2$，即 $F(t) > \frac2\pi G(t)$。证毕。</p>`,
      pitfalls: R`<p>1. 球坐标的体积元素漏掉 $r^2\sin\varphi$，或把 $\varphi$ 的范围写成 $[0,2\pi]$；极坐标漏掉面积元素中的 $r$。</p><p>2. 忘记 $\int_{-t}^tf(x^2)dx=2\int_0^tf(x^2)dx$ 中的因子 $2$，最后差一个常数倍，(2) 中的 $\frac2\pi$ 就对不上了。</p><p>3. 被积函数里含有 $t$ 时（如 $\int_0^tr(t-r)f(r^2)dr$），不能直接套变限积分求导公式。稳妥的做法是先对被积函数不含 $t$ 的 $N,M,E$ 求导，最后再把结果合并成一个积分。</p><p>4. 由 $h'(t) > 0$ 就说 $h(t) > 0$，忘了先说明 $h(0)=0$。单调性只能给出 $h(t) > h(0)$。</p><p>5. 只证明了"$\ge$"：要得到严格不等号，需要指出被积函数在 $(0,t)$ 内严格大于 $0$。</p>`,
      summary: R`<p><b>方法要点：</b>(1) 被积函数只依赖 $x^2+y^2+z^2$（或 $x^2+y^2$）、区域是球（圆盘）→ 球坐标（极坐标）化成一元变限积分；(2) 变限积分之比的单调性 → 求导后把分子合并成一个积分 $\int(\cdots)dr$ 判号；(3) 含参变量 $t$ 的积分不等式 → 移项构造 $h(t)$，用 $h(0)=0$ 加 $h'(t) > 0$，或用柯西—施瓦茨不等式。</p><p><b>看到…想到…：</b>看到 $\iiint_{\Omega(t)}f(x^2+y^2+z^2)dv$，想到 $4\pi\int_0^tr^2f(r^2)dr$；看到 $\left(\int uv\right)^2$ 与 $\int u^2\int v^2$ 比大小，想到柯西—施瓦茨；看到"证明 $t > 0$ 时某式 $> 0$"，想到把 $t$ 当变量，看它在 $t=0$ 处的值和导数的符号。</p>`,
      alt: R`<p><b>另解一（柯西—施瓦茨不等式）：</b>对 $[0,t]$ 上的连续函数 $u,v$，$\left(\int_0^tuv\,dr\right)^2\le\int_0^tu^2dr\int_0^tv^2dr$，等号成立当且仅当 $u,v$ 成比例。取 $u=r\sqrt{f(r^2)}$，$v=\sqrt{f(r^2)}$：</p>$$M^2=\left(\int_0^tr f(r^2)dr\right)^2\le\int_0^tr^2f(r^2)dr\cdot\int_0^tf(r^2)dr=NE.$$<p>若等号成立，则存在常数 $c$ 使 $r\sqrt{f(r^2)}=c\sqrt{f(r^2)}$，即在 $[0,t]$ 上 $r\equiv c$，不可能。故 $NE > M^2$。</p><p><b>另解二（二重积分对称化——柯西—施瓦茨的"第一原理"证明）：</b>把乘积写成二重积分：$NE=\int_0^t\!\int_0^ts^2f(s^2)f(r^2)\,dr\,ds$，$M^2=\int_0^t\!\int_0^trs\,f(r^2)f(s^2)\,dr\,ds$，所以</p>$$NE-M^2=\int_0^t\!\!\int_0^t\left(s^2-rs\right)f(r^2)f(s^2)\,dr\,ds=\frac12\int_0^t\!\!\int_0^t(r-s)^2f(r^2)f(s^2)\,dr\,ds > 0.$$<p>第二个等号是把 $r,s$ 互换（积分值不变）后与原式相加取平均：$s^2-rs$ 与 $r^2-rs$ 的平均正是 $\frac12(r-s)^2$。</p>`,
      verify: { by: 'mixed', ok: true, note: "sympy 对一般的 f（Function 符号）验证：F'(t) = 2t f(t²)·∫_0^t r(t-r)f(r²)dr / M² 恒等成立，h'(t) = f(t²)·∫_0^t (t-r)²f(r²)dr 恒等成立；以 f(u)=u、1+u² 验证球坐标化简式；以 f=e^(-u)、t=1.3 用原始重积分数值计算 F、G 与化简式一致；对 f=e^(-u)、1/(1+u)、1+u³、1 在 t=0.1~5 数值检验 F 递增且 F-2G/π 大于 0" },
      flags: ['OCR 把 F(t) 分子的三重积分（积分区域 Ω(t)、体积元素 dv）误识别为二重积分记号且积分区域写成 D(t)，已按题意更正为 Ω(t) 上的三重积分']
    }
  ];
});
