// 1992 年数学一 · 高等数学部分（一(1)–(4)、二(1)–(4)、三(1)–(3)、四、五、六、七，共 15 题）
registerYear(1992, function (R) {
  return [
    /* ───────────── 一、填空题 ───────────── */
    {
      id: '1992-1-1', year: 1992, no: '一(1)', type: '填空', score: 3,
      stem: R`设函数 $y=y(x)$ 由方程 $\mathrm{e}^{x+y}+\cos(xy)=0$ 确定，则 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$\dfrac{\mathrm{e}^{x+y}-y\sin(xy)}{x\sin(xy)-\mathrm{e}^{x+y}}$（或等价地写成 $\dfrac{y\sin(xy)-\mathrm{e}^{x+y}}{\mathrm{e}^{x+y}-x\sin(xy)}$）`,
      figure: null,
      kp: ['diff.calc', 'mdiff.implicit'],
      methods: ['隐函数求导（方程两边对 x 求导）', '隐函数求导公式 dy/dx = −F_x/F_y', '全微分法'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>隐函数求导。$y$ 是由方程"隐藏地"确定的 $x$ 的函数，我们既解不出 $y=\cdots$ 的显式表达式，也根本不需要解出来。</p>
<p><b>为什么能求导：</b>把 $y=y(x)$ 代回方程后，$\mathrm{e}^{x+y(x)}+\cos\big(x\,y(x)\big)=0$ 对定义区间内的每一个 $x$ 都成立，它是一个关于 $x$ 的<b>恒等式</b>。两个恒等的函数，导数也相等——所以可以"方程两边同时对 $x$ 求导"。这是隐函数求导的第一性原理。</p>
<p><b>操作要点：</b>求导时始终记住 $y$ 是 $x$ 的函数。凡是含 $y$ 的地方都是复合函数，按链式法则要多乘一个 $y'$。求导之后得到一个关于 $y'$ 的<b>一次方程</b>，把 $y'$ 解出来即可。</p>`,
      solution: R`<p><b>第一步：写成恒等式。</b>由于 $y=y(x)$ 满足方程，所以</p>
$$\mathrm{e}^{x+y(x)}+\cos\big(xy(x)\big)\equiv0 .$$
<p><b>第二步：两边对 $x$ 求导，逐项处理。</b></p>
<ul>
<li>第一项 $\mathrm{e}^{x+y}$：外层是 $\mathrm{e}^{u}$，内层 $u=x+y(x)$，$u'=1+y'$。所以 $\big(\mathrm{e}^{x+y}\big)'=\mathrm{e}^{x+y}(1+y')$。</li>
<li>第二项 $\cos(xy)$：外层是 $\cos v$，导数为 $-\sin v$；内层 $v=x\cdot y(x)$ 是乘积，用乘积法则 $v'=1\cdot y+x\cdot y'=y+xy'$。所以 $\big(\cos(xy)\big)'=-\sin(xy)\,(y+xy')$。</li>
<li>右边常数 $0$ 的导数为 $0$。</li>
</ul>
<p>于是得到</p>
$$\mathrm{e}^{x+y}(1+y')-\sin(xy)\,(y+xy')=0 .$$
<p><b>第三步：把它看成关于 $y'$ 的一次方程来解。</b>先展开：</p>
$$\mathrm{e}^{x+y}+\mathrm{e}^{x+y}y'-y\sin(xy)-x\sin(xy)\,y'=0 .$$
<p>含 $y'$ 的项留在左边，其余移到右边：</p>
$$\big[\mathrm{e}^{x+y}-x\sin(xy)\big]\,y'=y\sin(xy)-\mathrm{e}^{x+y} .$$
<p>在 $\mathrm{e}^{x+y}-x\sin(xy)\neq0$ 时（这恰好就是隐函数存在定理要求的 $F_y\neq0$），两边相除：</p>
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y\sin(xy)-\mathrm{e}^{x+y}}{\mathrm{e}^{x+y}-x\sin(xy)}=\frac{\mathrm{e}^{x+y}-y\sin(xy)}{x\sin(xy)-\mathrm{e}^{x+y}} .$$
<p>（最后一步是分子分母同乘 $-1$，两种写法都对。）</p>`,
      alt: R`<p><b>另解一（公式法）：</b>令 $F(x,y)=\mathrm{e}^{x+y}+\cos(xy)$。求偏导时 $x,y$ 地位平等、互相看作常数：</p>
$$F_x=\mathrm{e}^{x+y}-y\sin(xy),\qquad F_y=\mathrm{e}^{x+y}-x\sin(xy),$$
$$\frac{\mathrm{d}y}{\mathrm{d}x}=-\frac{F_x}{F_y}=-\frac{\mathrm{e}^{x+y}-y\sin(xy)}{\mathrm{e}^{x+y}-x\sin(xy)} .$$
<p>这个公式从哪来？对恒等式 $F\big(x,y(x)\big)\equiv0$ 用多元链式法则：$F_x\cdot1+F_y\cdot y'=0$，解出 $y'=-F_x/F_y$。可见它和"两边求导"是同一件事。</p>
<p><b>另解二（全微分法）：</b>对方程两边取微分（一阶微分形式不变，不必区分谁是自变量）：</p>
$$\mathrm{e}^{x+y}(\mathrm{d}x+\mathrm{d}y)-\sin(xy)\,(y\,\mathrm{d}x+x\,\mathrm{d}y)=0,$$
<p>整理成 $\big[\mathrm{e}^{x+y}-x\sin(xy)\big]\mathrm{d}y=\big[y\sin(xy)-\mathrm{e}^{x+y}\big]\mathrm{d}x$，同样得到答案。</p>`,
      pitfalls: R`<ul>
<li>对 $\mathrm{e}^{x+y}$ 求导时只写 $\mathrm{e}^{x+y}$，忘了乘内层导数 $(1+y')$；或者只乘 $y'$ 漏掉了 $x$ 自己的导数 $1$。</li>
<li>$\cos(xy)$ 求导漏掉负号，或把 $(xy)'$ 写成 $y'$——$xy$ 是两个函数的乘积，必须用乘积法则。</li>
<li>两种方法混用：用公式法求 $F_x$ 时 $y$ 应当看作常数，不能再乘 $y'$；用"两边求导"时 $y$ 是函数，必须乘 $y'$。混在一起就会多乘或漏乘。</li>
<li>公式 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=-\dfrac{F_x}{F_y}$ 的负号经常丢。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>隐函数求导的本质是"对恒等式求导"。三种等价的操作：① 两边对 $x$ 求导，含 $y$ 的项链式乘 $y'$；② 公式 $y'=-F_x/F_y$（求偏导时 $x,y$ 互为常数）；③ 两边取全微分。结果中允许保留 $y$。</p>
<p><b>看到…想到…：</b>看到"$y=y(x)$ 由方程 $F(x,y)=0$ 确定，求 $y'$"→ 想到上面三种方法任选其一；看到"求 $y''$"→ 优先用"两边求导"再求一次导，并把 $y'$ 代回。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 计算 −F_x/F_y，与答案相减化简为 0' },
      flags: ['原卷 OCR 写作 \\mathrm{dy}/\\mathrm{dx}，已规范为 \\mathrm{d}y/\\mathrm{d}x；填空横线用 \\underline 表示']
    },
    {
      id: '1992-1-2', year: 1992, no: '一(2)', type: '填空', score: 3,
      stem: R`函数 $u=\ln(x^2+y^2+z^2)$ 在点 $M(1,2,-2)$ 处的梯度 $\mathbf{grad}\,u\big|_M=\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$\left(\dfrac29,\ \dfrac49,\ -\dfrac49\right)$，即 $\dfrac29\mathbf{i}+\dfrac49\mathbf{j}-\dfrac49\mathbf{k}$`,
      figure: null,
      kp: ['mdiff.dir'],
      methods: ['梯度的定义（三个偏导数组成的向量）', '复合函数求偏导'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>梯度的定义。三元函数 $u(x,y,z)$ 的梯度是由三个偏导数组成的<b>向量</b>：</p>
$$\mathbf{grad}\,u=\left(\frac{\partial u}{\partial x},\ \frac{\partial u}{\partial y},\ \frac{\partial u}{\partial z}\right).$$
<p><b>梯度的意义：</b>它指向函数增长最快的方向，它的模等于该点处方向导数的最大值；任一方向 $\mathbf{l}$ 的方向导数等于梯度与单位向量 $\mathbf{e}_l$ 的点积。所以本题就是"求三个偏导数并代入点 $M$"。</p>
<p><b>省力的观察：</b>$u$ 关于 $x,y,z$ 的形式完全对称，算出 $\dfrac{\partial u}{\partial x}$ 之后，另两个只要把字母换一下。</p>`,
      solution: R`<p><b>第一步：求偏导。</b>令 $w=x^2+y^2+z^2$，则 $u=\ln w$。对 $x$ 求偏导时 $y,z$ 看作常数，由链式法则</p>
$$\frac{\partial u}{\partial x}=\frac{1}{w}\cdot\frac{\partial w}{\partial x}=\frac{2x}{x^2+y^2+z^2}.$$
<p>同理（换字母即可）</p>
$$\frac{\partial u}{\partial y}=\frac{2y}{x^2+y^2+z^2},\qquad \frac{\partial u}{\partial z}=\frac{2z}{x^2+y^2+z^2}.$$
<p><b>第二步：代入点 $M(1,2,-2)$。</b>先算公共分母：$1^2+2^2+(-2)^2=1+4+4=9$。于是</p>
$$\left.\frac{\partial u}{\partial x}\right|_M=\frac{2}{9},\qquad \left.\frac{\partial u}{\partial y}\right|_M=\frac{4}{9},\qquad \left.\frac{\partial u}{\partial z}\right|_M=\frac{-4}{9}.$$
<p><b>第三步：写成向量。</b></p>
$$\mathbf{grad}\,u\big|_M=\left(\frac29,\ \frac49,\ -\frac49\right).$$
<p>顺带可知：$|\mathbf{grad}\,u|_M=\dfrac29\sqrt{1+4+4}=\dfrac23$，这就是 $u$ 在 $M$ 点沿各方向的方向导数中的最大值。</p>`,
      alt: R`<p><b>另解（几何看法）：</b>记 $r=\sqrt{x^2+y^2+z^2}$，则 $u=\ln r^2=2\ln r$ 只依赖于点到原点的距离。它的等值面是一族同心球面，而梯度垂直于等值面，所以梯度一定沿径向。具体地，$\mathbf{grad}\,r=\dfrac{(x,y,z)}{r}$，故</p>
$$\mathbf{grad}\,u=\frac{2}{r}\,\mathbf{grad}\,r=\frac{2(x,y,z)}{r^2}.$$
<p>在 $M$ 处 $(x,y,z)=(1,2,-2)$，$r^2=9$，立刻得 $\dfrac29(1,2,-2)$。</p>`,
      pitfalls: R`<ul>
<li>把梯度写成一个数。梯度是<b>向量</b>，方向导数才是数。</li>
<li>代入时把 $(-2)^2$ 算错，或者漏掉 $z$ 分量的负号。</li>
<li>把 $(\ln w)'$ 写成 $\dfrac1w$ 而忘了乘 $\dfrac{\partial w}{\partial x}=2x$。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>梯度 = 偏导数组成的向量；方向导数 $\dfrac{\partial u}{\partial l}=\mathbf{grad}\,u\cdot\mathbf{e}_l$；方向导数的最大值 $=|\mathbf{grad}\,u|$，在梯度方向取得。</p>
<p><b>看到…想到…：</b>看到"求梯度"→ 求三个偏导组成向量；看到"沿哪个方向变化最快、方向导数最大值"→ 梯度的方向与模；看到函数只依赖 $r=\sqrt{x^2+y^2+z^2}$ → 梯度沿径向，$\mathbf{grad}\,f(r)=f'(r)\dfrac{(x,y,z)}{r}$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 对 ln(x²+y²+z²) 求三个偏导并代入 (1,2,−2)，得 [2/9, 4/9, −4/9]' },
      flags: ['原卷 OCR 为 "grad u|_{M}"（grad 在公式外），已统一写入公式 \\mathbf{grad}\\,u']
    },
    {
      id: '1992-1-3', year: 1992, no: '一(3)', type: '填空', score: 3,
      stem: R`设 $f(x)=\begin{cases}-1, & -\pi<x\leqslant0,\\ 1+x^2, & 0<x\leqslant\pi,\end{cases}$ 则其以 $2\pi$ 为周期的傅里叶级数在点 $x=\pi$ 处收敛于 $\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$\dfrac{\pi^2}{2}$`,
      figure: null,
      kp: ['series.fourier'],
      methods: ['狄利克雷收敛定理', '周期延拓求端点处的左右极限'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>傅里叶级数的<b>和函数</b>，也就是狄利克雷收敛定理。题目问的是"级数收敛于什么"，而不是"$f(\pi)$ 等于什么"，也<b>不需要</b>算傅里叶系数。</p>
<p><b>狄利克雷定理的内容：</b>若周期为 $2\pi$ 的函数在一个周期内连续或只有有限个第一类间断点，并且只有有限个极值点，则它的傅里叶级数处处收敛，和函数</p>
$$S(x)=\begin{cases}f(x), & x\ \text{为连续点},\\[2pt] \dfrac{f(x-0)+f(x+0)}{2}, & x\ \text{为间断点}.\end{cases}$$
<p><b>直观理解：</b>傅里叶级数是一堆连续光滑的正弦、余弦波叠加而成的，它在一个"跳台阶"的位置无法偏向哪一边，只能取台阶的正中间。</p>
<p><b>本题关键：</b>$x=\pi$ 是区间的端点。它的左边属于 $(0,\pi]$，右边要靠<b>周期延拓</b>才知道：$\pi$ 右侧的函数值就是 $-\pi$ 右侧的函数值搬过来。</p>`,
      solution: R`<p><b>第一步：确认可以用狄利克雷定理。</b>$f$ 在 $(-\pi,\pi]$ 上是两段多项式，只有有限个第一类间断点和有限个极值点，条件满足。</p>
<p><b>第二步：求 $x=\pi$ 处的左极限。</b>$x\to\pi^-$ 时 $x$ 落在 $(0,\pi]$ 内，$f(x)=1+x^2$，所以</p>
$$f(\pi-0)=1+\pi^2 .$$
<p><b>第三步：用周期性求右极限。</b>设 $h>0$ 很小，$x=\pi+h$。由周期 $2\pi$，$f(\pi+h)=f(\pi+h-2\pi)=f(-\pi+h)$，而 $-\pi+h\in(-\pi,0]$，在那里 $f=-1$。所以</p>
$$f(\pi+0)=f(-\pi+0)=-1 .$$
<p><b>第四步：判断并取平均。</b>$1+\pi^2\neq-1$，所以 $x=\pi$ 是（延拓后函数的）跳跃间断点，级数收敛于左右极限的平均值：</p>
$$S(\pi)=\frac{f(\pi-0)+f(\pi+0)}{2}=\frac{(1+\pi^2)+(-1)}{2}=\frac{\pi^2}{2}.$$
<p>注意：虽然按定义 $f(\pi)=1+\pi^2$，但级数并不收敛到它。</p>`,
      alt: R`<p><b>用系数直接验证（加深理解）：</b>算出傅里叶系数 $a_0=\dfrac{\pi^2}{3}$，$a_n=\dfrac{2(-1)^n}{n^2}$（$n\geqslant1$）。在 $x=\pi$ 处 $\sin n\pi=0$，正弦项全部消失，$\cos n\pi=(-1)^n$，所以</p>
$$S(\pi)=\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n(-1)^n=\frac{\pi^2}{6}+2\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}+2\cdot\frac{\pi^2}{6}=\frac{\pi^2}{2},$$
<p>与狄利克雷定理的结论完全一致（用到了 $\sum\limits_{n=1}^{\infty}\dfrac1{n^2}=\dfrac{\pi^2}{6}$）。这也说明了狄利克雷定理的威力：不算系数就能知道和。</p>`,
      pitfalls: R`<ul>
<li>直接填 $f(\pi)=1+\pi^2$，忽略了 $x=\pi$ 处延拓后是间断点。</li>
<li>求右极限时把第二段公式 $1+x^2$ 继续往右用，误以为 $\pi$ 是连续点。超出 $(-\pi,\pi]$ 的部分必须按周期平移回来。</li>
<li>误以为求"收敛于"要先把傅里叶级数算出来，浪费大量时间。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>"连续点取本值，间断点取中点；端点 $\pm\pi$ 处取 $\dfrac{f(-\pi+0)+f(\pi-0)}{2}$（首尾平均）"。</p>
<p><b>看到…想到…：</b>看到"傅里叶级数在某点收敛于/和函数 $S(x_0)$"→ 不算系数，直接用狄利克雷定理；看到所求点在区间端点或区间外 → 先用周期性平移到基本区间，再看左右极限。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 求得 a0=π²/3、a_n=2(−1)^n/n²，级数在 x=π 处之和化简为 π²/2，与狄利克雷定理结果一致' },
      flags: []
    },
    {
      id: '1992-1-4', year: 1992, no: '一(4)', type: '填空', score: 3,
      stem: R`微分方程 $y'+y\tan x=\cos x$ 的通解为 $\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$y=(x+C)\cos x$（$C$ 为任意常数）`,
      figure: null,
      kp: ['ode.first'],
      methods: ['一阶线性方程通解公式', '积分因子法', '常数变易法'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>一阶线性微分方程。方程形如 $y'+P(x)y=Q(x)$（$y$ 和 $y'$ 都是一次的），这里 $P(x)=\tan x$，$Q(x)=\cos x$。</p>
<p><b>为什么能解（第一性原理）：</b>左边 $y'+Py$ 本身不是谁的导数，但如果乘上一个合适的函数 $\mu(x)$，就能把它凑成乘积的导数 $(\mu y)'=\mu y'+\mu' y$。要求 $\mu'=\mu P$，即 $\mu=\mathrm{e}^{\int P\,\mathrm{d}x}$，这就是<b>积分因子</b>。凑成 $(\mu y)'=\mu Q$ 之后，两边积分就解出来了。通解公式</p>
$$y=\mathrm{e}^{-\int P\,\mathrm{d}x}\left(\int Q\,\mathrm{e}^{\int P\,\mathrm{d}x}\,\mathrm{d}x+C\right)$$
<p>就是这个过程的结果。</p>`,
      solution: R`<p><b>第一步：识别类型。</b>$P(x)=\tan x$，$Q(x)=\cos x$，是一阶线性方程。</p>
<p><b>第二步：求积分因子。</b></p>
$$\int\tan x\,\mathrm{d}x=-\ln|\cos x|,\qquad \mu=\mathrm{e}^{-\ln|\cos x|}=\frac{1}{|\cos x|}.$$
<p>在 $\cos x\neq0$ 的每个区间上 $|\cos x|=\pm\cos x$，常数因子 $\pm1$ 不影响"凑导数"，所以直接取 $\mu=\dfrac1{\cos x}$。</p>
<p><b>第三步：验证确实凑成了导数。</b></p>
$$\left(\frac{y}{\cos x}\right)'=\frac{y'\cos x+y\sin x}{\cos^2x}=\frac{1}{\cos x}\left(y'+y\tan x\right).$$
<p>所以原方程两边同乘 $\dfrac1{\cos x}$ 后变为</p>
$$\left(\frac{y}{\cos x}\right)'=\frac{\cos x}{\cos x}=1 .$$
<p><b>第四步：积分。</b>$\dfrac{y}{\cos x}=x+C$，即</p>
$$y=(x+C)\cos x\quad(C\ \text{为任意常数}).$$
<p><b>第五步：检验。</b>$y'=\cos x-(x+C)\sin x$，$y\tan x=(x+C)\sin x$，相加正好是 $\cos x$。✓</p>
<p>（直接套通解公式：$\mathrm{e}^{-\int\tan x\,\mathrm{d}x}=\cos x$，$\int\cos x\cdot\dfrac1{\cos x}\,\mathrm{d}x=x$，同样得 $y=\cos x\,(x+C)$。）</p>`,
      alt: R`<p><b>另解（常数变易法）：</b>先解齐次方程 $y'+y\tan x=0$：分离变量 $\dfrac{\mathrm{d}y}{y}=-\tan x\,\mathrm{d}x$，积分得 $\ln|y|=\ln|\cos x|+C_1$，即 $y=C\cos x$。</p>
<p>再把常数 $C$ 换成函数 $C(x)$，设 $y=C(x)\cos x$ 代入原方程：</p>
$$C'\cos x-C\sin x+C\cos x\tan x=C'\cos x=\cos x\ \Rightarrow\ C'=1\ \Rightarrow\ C(x)=x+C .$$
<p>得 $y=(x+C)\cos x$。可以看到含 $C(x)$ 本身的项一定会抵消，这是常数变易法的规律。</p>`,
      pitfalls: R`<ul>
<li>通解公式里 $\mathrm{e}^{\int P}$ 与 $\mathrm{e}^{-\int P}$ 的位置记反。记法：<b>括号外</b>乘 $\mathrm{e}^{-\int P}$，<b>括号内</b>被积函数乘 $\mathrm{e}^{\int P}$。</li>
<li>$\int\tan x\,\mathrm{d}x=-\ln|\cos x|$ 的负号写丢，导致积分因子变成 $\cos x$。</li>
<li>公式中的各个不定积分只取一个原函数，不要每个都加常数，只在最后加一个 $C$。</li>
<li>最后忘了写"$C$ 为任意常数"。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>一阶线性方程 $\Rightarrow$ 乘积分因子 $\mathrm{e}^{\int P\mathrm{d}x}$ 把左边凑成 $\left(\mathrm{e}^{\int P\mathrm{d}x}y\right)'$，再积分。</p>
<p><b>看到…想到…：</b>看到 $y'+P(x)y=Q(x)$ → 通解公式或积分因子；看到 $\tan x$ 系数 → 积分因子是 $\sec x$，牢记 $\left(\dfrac{y}{\cos x}\right)'$ 和 $(y\cos x)'$ 的展开式，常常能一眼看出凑导数。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy dsolve 得 y=(C1+x)cos x；并把 (x+C)cos x 代回方程化简为 0' },
      flags: []
    },

    /* ───────────── 二、选择题 ───────────── */
    {
      id: '1992-2-1', year: 1992, no: '二(1)', type: '选择', score: 3,
      stem: R`当 $x\to1$ 时，函数 $\dfrac{x^2-1}{x-1}\mathrm{e}^{\frac{1}{x-1}}$ 的极限（　　）.`,
      options: [R`等于 $2$`, R`等于 $0$`, R`为 $\infty$`, R`不存在但不是 $\infty$`],
      answer: 'D',
      figure: null,
      kp: ['lim.funcdef', 'lim.compute'],
      methods: ['分左右极限讨论', '约分化简'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>左右极限与"极限为 $\infty$"的准确含义。</p>
<p><b>从哪个特征想到分左右：</b>因子 $\mathrm{e}^{\frac1{x-1}}$ 的指数是 $\dfrac1{x-1}$。$x$ 从左边靠近 $1$ 时 $x-1$ 是很小的负数，$\dfrac1{x-1}\to-\infty$；从右边靠近时 $\dfrac1{x-1}\to+\infty$。而 $\mathrm{e}^{-\infty}=0$、$\mathrm{e}^{+\infty}=+\infty$，两侧行为天差地别。凡是遇到这种"指数上是 $\dfrac1{x-a}$"的结构，都必须分左右极限。</p>
<p>另一个因子 $\dfrac{x^2-1}{x-1}$ 约分后就是 $x+1\to2$，是"老实"的部分。</p>`,
      solution: R`<p><b>第一步：化简老实的因子。</b>$x\neq1$ 时 $\dfrac{x^2-1}{x-1}=\dfrac{(x-1)(x+1)}{x-1}=x+1$，$x\to1$ 时趋于 $2$。</p>
<p><b>第二步：分别求左右极限。</b></p>
<ul>
<li>$x\to1^-$：$x-1\to0^-$，$\dfrac1{x-1}\to-\infty$，$\mathrm{e}^{\frac1{x-1}}\to0$。所以左极限 $=2\cdot0=0$。</li>
<li>$x\to1^+$：$x-1\to0^+$，$\dfrac1{x-1}\to+\infty$，$\mathrm{e}^{\frac1{x-1}}\to+\infty$。乘以趋于 $2>0$ 的因子，右极限 $=+\infty$。</li>
</ul>
<p><b>第三步：下结论。</b>函数极限存在（为有限数）当且仅当左右极限都存在且相等。这里右极限是 $+\infty$，左极限是 $0$，所以极限不存在。</p>
<p>那它是不是"$\infty$"呢？$\lim\limits_{x\to1}g(x)=\infty$ 的含义是：$x$ 从<b>两侧</b>靠近 $1$ 时 $|g(x)|$ 都无限增大。但从左侧靠近时函数趋于 $0$，$|g(x)|$ 并不变大，所以也不是 $\infty$。故选 <b>D</b>。</p>
<p><b>逐一看错误选项：</b></p>
<ul>
<li>A（等于 2）：只看了约分部分，相当于把 $\mathrm{e}^{\frac1{x-1}}$ 当成了 $1$。</li>
<li>B（等于 0）：只算了左极限。</li>
<li>C（为 $\infty$）：只算了右极限，误以为一侧趋于无穷就叫"极限为 $\infty$"。</li>
</ul>`,
      pitfalls: R`<ul>
<li>不分左右，直接写"$\mathrm{e}^{\frac10}=\mathrm{e}^{\infty}=\infty$"而选 C。分母趋于 $0$ 时，符号决定一切。</li>
<li>对"极限为 $\infty$"理解不准：它要求两侧都趋于无穷（$|g|\to+\infty$），而不是"有一侧趋于无穷"。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>极限存在 $\iff$ 左右极限存在且相等；"极限为 $\infty$"也要求两侧 $|g|$ 都趋于 $+\infty$。</p>
<p><b>看到…想到…：</b>看到 $\mathrm{e}^{\frac1{x-a}}$、$\arctan\dfrac1{x-a}$、$\dfrac{|x-a|}{x-a}$、取整函数 $[x]$ 在整数点、分段函数的分段点 → 必须分左右极限。常用结论：$x\to0^-$ 时 $\mathrm{e}^{\frac1x}\to0$，$x\to0^+$ 时 $\mathrm{e}^{\frac1x}\to+\infty$；$\arctan\dfrac1x$ 的左右极限分别为 $-\dfrac\pi2$、$\dfrac\pi2$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy limit：x→1⁻ 为 0，x→1⁺ 为 +∞，故选 D' },
      flags: []
    },
    {
      id: '1992-2-2', year: 1992, no: '二(2)', type: '选择', score: 3,
      stem: R`级数 $\displaystyle\sum_{n=1}^{\infty}(-1)^n\left(1-\cos\frac{\alpha}{n}\right)$（常数 $\alpha>0$）（　　）.`,
      options: [R`发散`, R`条件收敛`, R`绝对收敛`, R`收敛性与 $\alpha$ 有关`],
      answer: 'C',
      figure: null,
      kp: ['series.alt', 'series.positive', 'lim.inf'],
      methods: ['先判绝对收敛', '比较判别法（极限形式）', '等价无穷小 1−cos t ~ t²/2'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>任意项（交错）级数的敛散性，特别是区分"绝对收敛"与"条件收敛"。</p>
<p><b>标准思路：</b>遇到带 $(-1)^n$ 的级数，<b>先看绝对值级数</b>。原因是：绝对值级数是正项级数，判别工具（比较、比值、根值、$p$ 级数）很多；而且一旦绝对值级数收敛，原级数就是绝对收敛，题目直接结束。只有绝对值级数发散时，才需要用莱布尼茨判别法去看是否条件收敛。</p>
<p><b>本题特征：</b>$|a_n|=1-\cos\dfrac{\alpha}{n}$，当 $n\to\infty$ 时 $\dfrac\alpha n\to0$，正好可以用等价无穷小 $1-\cos t\sim\dfrac{t^2}{2}$ 把它换成 $\dfrac{\alpha^2}{2n^2}$，与 $p=2$ 的 $p$ 级数比较。</p>`,
      solution: R`<p><b>第一步：取绝对值。</b>因为对一切实数 $t$ 都有 $1-\cos t\geqslant0$，所以</p>
$$\left|(-1)^n\left(1-\cos\frac{\alpha}{n}\right)\right|=1-\cos\frac{\alpha}{n}.$$
<p><b>第二步：与 $p$ 级数比较（极限形式）。</b>$n\to\infty$ 时 $\dfrac{\alpha}{n}\to0$，由 $1-\cos t\sim\dfrac{t^2}{2}$，</p>
$$\lim_{n\to\infty}\frac{1-\cos\frac{\alpha}{n}}{\frac{1}{n^2}}=\lim_{n\to\infty}\frac{\frac{\alpha^2}{2n^2}}{\frac{1}{n^2}}=\frac{\alpha^2}{2}.$$
<p>这是一个正的有限数，所以 $\sum\left(1-\cos\dfrac\alpha n\right)$ 与 $\sum\dfrac1{n^2}$ 同敛散。而 $\sum\dfrac1{n^2}$ 是 $p=2>1$ 的 $p$ 级数，收敛。</p>
<p><b>第三步：下结论。</b>绝对值级数收敛，所以原级数<b>绝对收敛</b>，选 <b>C</b>。</p>
<p><b>逐一看错误选项：</b></p>
<ul>
<li>A（发散）：绝对收敛的级数必定收敛，不可能发散。</li>
<li>B（条件收敛）：条件收敛的定义是"原级数收敛但绝对值级数发散"，而这里绝对值级数收敛，所以不是条件收敛。</li>
<li>D（与 $\alpha$ 有关）：无论 $\alpha$ 取什么正数，比较的极限都是正有限数 $\dfrac{\alpha^2}{2}$。$\alpha$ 只影响系数，不影响"阶" $\dfrac1{n^2}$，所以敛散性与 $\alpha$ 无关。</li>
</ul>`,
      alt: R`<p><b>另解（不等式比较，不用极限）：</b>由半角公式和 $|\sin u|\leqslant|u|$，</p>
$$0\leqslant1-\cos t=2\sin^2\frac t2\leqslant2\left(\frac t2\right)^2=\frac{t^2}{2},$$
<p>所以 $0\leqslant1-\cos\dfrac\alpha n\leqslant\dfrac{\alpha^2}{2}\cdot\dfrac1{n^2}$。由比较判别法，绝对值级数收敛。这个不等式对所有 $n$ 都成立，比"$n$ 充分大时等价"更干净。</p>`,
      pitfalls: R`<ul>
<li>一看到 $(-1)^n$ 就去验证莱布尼茨条件，得到"收敛"就选 B。莱布尼茨判别法只能说明原级数收敛，<b>不能</b>说明是条件收敛；判断条件收敛必须证明绝对值级数发散。</li>
<li>把 $1-\cos\dfrac\alpha n$ 的阶数弄错，当成 $\dfrac\alpha n$（一阶），误判为与调和级数同阶而发散。</li>
<li>被参数 $\alpha$ 吓到而选 D。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>任意项级数三步走：① 一般项是否趋于 $0$（不趋于 $0$ 直接发散）；② $\sum|a_n|$ 是否收敛（等价无穷小 + $p$ 级数）；③ 若②发散，再用莱布尼茨判别法看原级数，收敛则为条件收敛。</p>
<p><b>看到…想到…：</b>看到 $1-\cos\dfrac1n$、$\ln\left(1+\dfrac1{n^2}\right)$、$\sin\dfrac1{n^2}$、$\mathrm{e}^{\frac1n}-1$ 之类 → 用等价无穷小换成 $\dfrac1{n^p}$ 再与 $p$ 级数比较；参数如果只出现在系数位置，一般不影响敛散性，出现在指数位置（如 $\dfrac1{n^\alpha}$）才要分情况。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy limit((1−cos(α/n))/(1/n²), n→∞) = α²/2，与 p=2 级数同敛散，绝对收敛' },
      flags: ['原卷 OCR 此题题干末尾缺少选择题括号"（　）"，已补上']
    },
    {
      id: '1992-2-3', year: 1992, no: '二(3)', type: '选择', score: 3,
      stem: R`在曲线 $x=t,\ y=-t^2,\ z=t^3$ 的所有切线中，与平面 $x+2y+z=4$ 平行的切线（　　）.`,
      options: [R`只有 $1$ 条`, R`只有 $2$ 条`, R`至少 $3$ 条`, R`不存在`],
      answer: 'B',
      figure: null,
      kp: ['mdiff.geo', 'vec.planeline'],
      methods: ['参数曲线的切向量', '直线与平面平行：方向向量 ⊥ 法向量'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>空间曲线的切线 + 线面位置关系。需要把几何语言翻译成代数方程。</p>
<p><b>两个翻译：</b></p>
<ul>
<li>参数曲线 $\mathbf{r}(t)=\big(x(t),y(t),z(t)\big)$ 在参数 $t$ 处的切向量是 $\mathbf{r}'(t)=\big(x'(t),y'(t),z'(t)\big)$。直观上，把 $t$ 想成时间，$\mathbf{r}'(t)$ 就是质点的速度，速度方向当然沿着切线。</li>
<li>直线与平面平行 $\iff$ 直线的方向向量与平面的法向量<b>垂直</b>（点积为 $0$），并且直线不在平面上。</li>
</ul>
<p>于是"有几条切线与平面平行"就变成"关于 $t$ 的方程 $\mathbf{r}'(t)\cdot\mathbf{n}=0$ 有几个实根"。</p>`,
      solution: R`<p><b>第一步：求切向量。</b>$\mathbf{T}(t)=(x',y',z')=(1,\,-2t,\,3t^2)$。</p>
<p><b>第二步：写出平面法向量。</b>平面 $x+2y+z=4$ 的法向量就是系数 $\mathbf{n}=(1,2,1)$。</p>
<p><b>第三步：列平行条件并求解。</b></p>
$$\mathbf{T}\cdot\mathbf{n}=1\cdot1+(-2t)\cdot2+3t^2\cdot1=3t^2-4t+1=(3t-1)(t-1)=0,$$
<p>得 $t=\dfrac13$ 或 $t=1$。</p>
<p><b>第四步：检查切线不在平面上。</b>只要切点不在平面上，切线就不可能躺在平面里。</p>
<ul>
<li>$t=1$：切点 $(1,-1,1)$，$x+2y+z=1-2+1=0\neq4$；</li>
<li>$t=\dfrac13$：切点 $\left(\dfrac13,-\dfrac19,\dfrac1{27}\right)$，$x+2y+z=\dfrac{9-6+1}{27}=\dfrac4{27}\neq4$。</li>
</ul>
<p>两条切线都与平面真正平行。</p>
<p><b>第五步：确认是两条不同的直线。</b>两个切点不同，方向 $(1,-\frac23,\frac13)$ 与 $(1,-2,3)$ 也不平行，所以恰有 2 条，选 <b>B</b>。</p>
<p><b>逐一看错误选项：</b>A 是只解出一个根（或因式分解出错）的结果；C 是误以为"三次曲线"就有 3 条，但条件方程是关于 $t$ 的二次方程，最多两个根；D 往往来自把平行条件错写成 $\mathbf{T}\parallel\mathbf{n}$（见易错点）。</p>`,
      pitfalls: R`<ul>
<li><b>把"线面平行"错写成"方向向量平行于法向量"</b>：$\mathbf{T}\parallel\mathbf{n}$ 是"切线<b>垂直</b>于平面"的条件。若按 $\dfrac11=\dfrac{-2t}{2}=\dfrac{3t^2}{1}$ 去解，得 $t=-1$ 且 $3t^2=1$，矛盾，于是错选 D。</li>
<li>求导时丢掉 $y=-t^2$ 的负号。</li>
<li>只解方程不检验切线是否落在平面内（本题虽不影响答案，但严格的解答需要这一步）。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>参数曲线切向量 $=(x',y',z')$；曲面 $F=0$ 的法向量 $=(F_x,F_y,F_z)$；平面 $Ax+By+Cz=D$ 的法向量 $=(A,B,C)$。</p>
<p><b>线面关系口诀：</b>线面平行看<b>点积为零</b>，线面垂直看<b>分量成比例</b>；面面平行看法向量成比例，面面垂直看法向量点积为零。</p>
<p><b>看到…想到…：</b>看到"有几条切线/切平面满足某条件"→ 把条件写成关于参数的方程，数实根个数。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 解 T·n=0 得 t=1/3, 1；代入 x+2y+z 得 4/27 与 0，均不等于 4，切线不在平面内' },
      flags: []
    },
    {
      id: '1992-2-4', year: 1992, no: '二(4)', type: '选择', score: 3,
      stem: R`设 $f(x)=3x^3+x^2|x|$，则使 $f^{(n)}(0)$ 存在的最高阶数 $n$ 为（　　）.`,
      options: [R`$0$`, R`$1$`, R`$2$`, R`$3$`],
      answer: 'C',
      figure: null,
      kp: ['diff.def', 'diff.calc'],
      methods: ['去绝对值化为分段函数', '分段点处用导数定义求左右导数'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>分段函数在分段点处的（高阶）可导性。</p>
<p><b>从哪里入手：</b>$|x|$ 在 $x=0$ 处有"尖角"，所以 $x=0$ 是分段点。第一步永远是<b>去掉绝对值，写成分段函数</b>；在分段点处，各段的求导公式只在开区间内成立，必须用<b>导数定义</b>分别求左、右导数。</p>
<p><b>直观理解：</b>$3x^3$ 是多项式，任意阶可导，问题全在 $x^2|x|=|x|^3$ 上。$|x|$ 有尖角，在 $0$ 处一阶都不可导；每多乘一个 $x$，曲线在原点就被"磨平"一阶：$x|x|$ 一阶可导、二阶不可导；$x^2|x|$ 二阶可导、三阶不可导。所以答案应当是 $2$，下面严格验证。</p>`,
      solution: R`<p><b>第一步：去绝对值。</b>$x\geqslant0$ 时 $|x|=x$，$f(x)=3x^3+x^3=4x^3$；$x<0$ 时 $|x|=-x$，$f(x)=3x^3-x^3=2x^3$。即</p>
$$f(x)=\begin{cases}4x^3, & x\geqslant0,\\ 2x^3, & x<0.\end{cases}$$
<p><b>第二步：一阶导数。</b>$x\neq0$ 时分段求导：$x>0$ 时 $f'(x)=12x^2$，$x<0$ 时 $f'(x)=6x^2$。在 $x=0$ 处用定义（$f(0)=0$）：</p>
$$f'_+(0)=\lim_{x\to0^+}\frac{4x^3-0}{x}=0,\qquad f'_-(0)=\lim_{x\to0^-}\frac{2x^3-0}{x}=0,$$
<p>左右相等，$f'(0)=0$。于是 $f'(x)=\begin{cases}12x^2,&x\geqslant0\\6x^2,&x<0\end{cases}$ 在整条数轴上都存在。</p>
<p><b>第三步：二阶导数。</b>$x\neq0$ 时：$x>0$ 时 $f''(x)=24x$，$x<0$ 时 $f''(x)=12x$。在 $x=0$ 处对 $f'$ 用定义：</p>
$$f''_+(0)=\lim_{x\to0^+}\frac{12x^2-0}{x}=0,\qquad f''_-(0)=\lim_{x\to0^-}\frac{6x^2-0}{x}=0,$$
<p>所以 $f''(0)=0$，$f''(x)=\begin{cases}24x,&x\geqslant0\\12x,&x<0\end{cases}$。</p>
<p><b>第四步：三阶导数。</b>在 $x=0$ 处对 $f''$ 用定义：</p>
$$f'''_+(0)=\lim_{x\to0^+}\frac{24x-0}{x}=24,\qquad f'''_-(0)=\lim_{x\to0^-}\frac{12x-0}{x}=12 .$$
<p>左右三阶导数不相等，$f'''(0)$ 不存在。</p>
<p><b>结论：</b>使 $f^{(n)}(0)$ 存在的最高阶数是 $n=2$，选 <b>C</b>。</p>
<p><b>逐一看错误选项：</b>A（0 阶）是把它当成 $|x|$ 那样一阶都不可导；B（1 阶）是在二阶时算错或没有用定义；D（3 阶）是只看到 $f''(0)=0$ 两边都为 $0$ 就以为三阶也存在，或误以为 $x^2|x|$ 和 $x^3$ 一样光滑。</p>`,
      pitfalls: R`<ul>
<li>直接套 $(|x|)'=\dfrac{x}{|x|}$，在 $x=0$ 处这个式子无意义，容易得出"一阶都不可导"的错误结论。</li>
<li>在分段点处直接把某一段的求导公式代入 $x=0$。正确做法是用定义（或在函数连续的前提下用"导函数的左右极限"），并且左右分别算。</li>
<li>以为 "$f''_+(0)=f''_-(0)=0$" 就说明三阶导也存在。高一阶的导数要对低一阶的导函数再用一次定义。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>含绝对值的函数 → 去绝对值写成分段函数 → 分段点用定义求左右导数，逐阶往上判断。</p>
<p><b>常用结论：</b>$x^k|x|$ 在 $x=0$ 处 $k$ 阶可导而 $k+1$ 阶不可导；$\varphi(x)|x-a|$（$\varphi$ 在 $a$ 处可导）在 $x=a$ 处可导 $\iff\varphi(a)=0$。</p>
<p><b>看到…想到…：</b>看到"$f^{(n)}(0)$ 存在的最高阶数""在某点是否可导"且函数含 $|\cdot|$ 或是分段函数 → 去绝对值 + 导数定义 + 左右导数。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 对两段 2x³、4x³ 分别求 0–3 阶导在 0 处的值：0–2 阶都为 0，3 阶分别为 12 与 24，故最高 2 阶' },
      flags: ['参考解析 OCR 中把三阶单侧导数误写为 f″_±(0)=lim f″(x)/x（应为 f‴_±(0)），结论 C 不受影响']
    },

    /* ───────────── 三、计算题 ───────────── */
    {
      id: '1992-3-1', year: 1992, no: '三(1)', type: '解答', score: 5,
      stem: R`求 $\displaystyle\lim_{x\to0}\frac{\mathrm{e}^x-\sin x-1}{1-\sqrt{1-x^2}}$.`,
      options: null,
      answer: R`$1$`,
      figure: null,
      kp: ['lim.compute', 'lim.inf', 'diff.taylor'],
      methods: ['等价无穷小代换', '泰勒公式', '洛必达法则'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>$\dfrac00$ 型未定式的计算，综合使用等价代换、泰勒公式（或洛必达）。</p>
<p><b>先看分母：</b>$1-\sqrt{1-x^2}$ 是"$1$ 减根号"的形式。如果直接洛必达，要对根号反复求导，很繁琐。更聪明的做法是先用等价无穷小把它换成最简单的幂函数：由 $(1+u)^\alpha-1\sim\alpha u$，分母 $\sim\dfrac{x^2}{2}$。分母是整个"乘除因子"，可以放心整体替换。</p>
<p><b>再看分子：</b>$\mathrm{e}^x-\sin x-1$ 是三项相加减。如果逐项用一阶等价 $\mathrm{e}^x\approx1+x$、$\sin x\approx x$，得到 $1+x-x-1=0$——一阶项全部抵消了，说明真正起作用的是二阶项。所以要把分子展开到 $x^2$，和分母"对齐阶数"。</p>`,
      solution: R`<p><b>第一步：判断类型。</b>$x\to0$ 时分子 $\to\mathrm{e}^0-0-1=0$，分母 $\to1-1=0$，是 $\dfrac00$ 型。</p>
<p><b>第二步：分母等价代换。</b>由 $(1+u)^{\alpha}-1\sim\alpha u\ (u\to0)$，取 $u=-x^2$、$\alpha=\dfrac12$：</p>
$$\sqrt{1-x^2}-1\sim\frac12\cdot(-x^2)=-\frac{x^2}{2},\qquad\text{所以}\quad 1-\sqrt{1-x^2}\sim\frac{x^2}{2}.$$
<p>（也可以分子有理化来"亲手"得到它：$1-\sqrt{1-x^2}=\dfrac{1-(1-x^2)}{1+\sqrt{1-x^2}}=\dfrac{x^2}{1+\sqrt{1-x^2}}$，而分母 $\to2$。）</p>
<p>于是</p>
$$\text{原式}=\lim_{x\to0}\frac{\mathrm{e}^x-\sin x-1}{\frac{x^2}{2}}=2\lim_{x\to0}\frac{\mathrm{e}^x-\sin x-1}{x^2}.$$
<p><b>第三步：分子泰勒展开到 $x^2$。</b>分母是 $x^2$，所以分子展开到 $x^2$ 项即可（"上下同阶"原则）：</p>
$$\mathrm{e}^x=1+x+\frac{x^2}{2}+o(x^2),\qquad \sin x=x+o(x^2)$$
<p>（$\sin x=x-\dfrac{x^3}{6}+\cdots$，它的 $x^2$ 项系数为 $0$）。相减得</p>
$$\mathrm{e}^x-\sin x-1=\frac{x^2}{2}+o(x^2).$$
<p><b>第四步：求极限。</b></p>
$$\text{原式}=2\lim_{x\to0}\frac{\frac{x^2}{2}+o(x^2)}{x^2}=2\cdot\frac12=1.$$`,
      alt: R`<p><b>另解（化简分母后用洛必达）：</b>在第二步之后，</p>
$$2\lim_{x\to0}\frac{\mathrm{e}^x-\sin x-1}{x^2}\overset{\frac00}{=}2\lim_{x\to0}\frac{\mathrm{e}^x-\cos x}{2x}=\lim_{x\to0}\frac{\mathrm{e}^x-\cos x}{x}.$$
<p>这仍是 $\dfrac00$ 型。可以再用一次洛必达得 $\lim\limits_{x\to0}(\mathrm{e}^x+\sin x)=1$；也可以拆项：$\dfrac{\mathrm{e}^x-1}{x}+\dfrac{1-\cos x}{x}\to1+0=1$。</p>
<p>每次用洛必达之前都要确认仍是 $\dfrac00$ 或 $\dfrac\infty\infty$ 型。</p>`,
      pitfalls: R`<ul>
<li><b>加减中逐项等价替换</b>：把 $\mathrm{e}^x$ 换成 $1+x$、$\sin x$ 换成 $x$，得分子为 $0$，进而得出"极限为 0"的荒谬结论。加减运算中只有在替换后不完全抵消时才能用等价，否则必须用泰勒展开保留更高阶。</li>
<li>分母等价写错系数或符号，如写成 $x^2$ 或 $-\dfrac{x^2}{2}$。</li>
<li>不先化简就对原式洛必达，分母求导出现 $\dfrac{x}{\sqrt{1-x^2}}$ 等复杂式子，计算量大且易错。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>"先化简，后计算"：乘除因子先等价代换；加减结构用泰勒展开，展开到与分母同阶。</p>
<p><b>看到…想到…：</b>看到 $1-\sqrt{1-x^2}$、$\sqrt{1+x}-\sqrt{1-x}$ 这类根式差 → 有理化或用 $(1+u)^\alpha-1\sim\alpha u$；看到分子几项一阶抵消 → 泰勒展开到二阶或三阶。</p>
<p><b>必背展开：</b>$\mathrm{e}^x=1+x+\dfrac{x^2}{2}+\dfrac{x^3}{6}+o(x^3)$，$\sin x=x-\dfrac{x^3}{6}+o(x^3)$，$\cos x=1-\dfrac{x^2}{2}+o(x^2)$，$(1+x)^\alpha=1+\alpha x+\dfrac{\alpha(\alpha-1)}{2}x^2+o(x^2)$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy limit 结果为 1' },
      flags: []
    },
    {
      id: '1992-3-2', year: 1992, no: '三(2)', type: '解答', score: 5,
      stem: R`设 $z=f(\mathrm{e}^x\sin y,\ x^2+y^2)$，其中 $f$ 具有二阶连续偏导数，求 $\dfrac{\partial^2z}{\partial x\partial y}$.`,
      options: null,
      answer: R`$\dfrac{\partial^2z}{\partial x\partial y}=\mathrm{e}^x\cos y\,f_1'+\mathrm{e}^{2x}\sin y\cos y\,f_{11}''+2\mathrm{e}^x(y\sin y+x\cos y)\,f_{12}''+4xy\,f_{22}''$`,
      figure: null,
      kp: ['mdiff.chain', 'mdiff.diffable'],
      methods: ['多元复合函数链式法则', '树形图（变量关系图）', '二阶偏导连续时混合偏导相等'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>抽象复合函数的二阶混合偏导数——考研的高频必考题型。</p>
<p><b>先理清结构：</b>设中间变量 $u=\mathrm{e}^x\sin y$，$v=x^2+y^2$，则 $z=f(u,v)$。变量关系是"$z\to(u,v)\to(x,y)$"：$z$ 通过 $u$ 和 $v$ 两条路依赖 $x$ 和 $y$。画出树形图后，一阶偏导的规则是"<b>分道相加，连线相乘</b>"。</p>
<p><b>二阶的关键认识（最容易错的地方）：</b>一阶偏导中出现的 $f_1'$、$f_2'$ 表示 $f_1'(u,v)$、$f_2'(u,v)$，它们<b>仍然是 $u,v$ 的函数</b>，因而仍是 $x,y$ 的复合函数，结构和 $f$ 一模一样。对它们再求偏导时，必须再走一遍同样的树形图。</p>`,
      solution: R`<p><b>第一步：设中间变量并求它们的偏导。</b>$u=\mathrm{e}^x\sin y$，$v=x^2+y^2$，</p>
$$u_x=\mathrm{e}^x\sin y,\quad u_y=\mathrm{e}^x\cos y,\quad v_x=2x,\quad v_y=2y .$$
<p><b>第二步：一阶偏导 $z_x$。</b>"分道相加，连线相乘"：</p>
$$\frac{\partial z}{\partial x}=f_1'\cdot u_x+f_2'\cdot v_x=\mathrm{e}^x\sin y\,f_1'+2x\,f_2' .$$
<p>这里 $f_1',f_2'$ 都在 $(u,v)=(\mathrm{e}^x\sin y,\,x^2+y^2)$ 处取值。</p>
<p><b>第三步：对 $y$ 求偏导，先用乘积法则。</b>两项都是"系数 × $f_i'$"的乘积：</p>
$$\frac{\partial^2z}{\partial x\partial y}=\underbrace{\mathrm{e}^x\cos y\,f_1'+\mathrm{e}^x\sin y\cdot\frac{\partial f_1'}{\partial y}}_{\text{第一项}}+\underbrace{2x\cdot\frac{\partial f_2'}{\partial y}}_{\text{第二项}} .$$
<p>（第二项中 $2x$ 对 $y$ 是常数，导数为 $0$。）</p>
<p><b>第四步：用链式法则求 $\dfrac{\partial f_1'}{\partial y}$ 和 $\dfrac{\partial f_2'}{\partial y}$。</b>$f_1'(u,v)$ 通过 $u,v$ 依赖 $y$：</p>
$$\frac{\partial f_1'}{\partial y}=f_{11}''\,u_y+f_{12}''\,v_y=\mathrm{e}^x\cos y\,f_{11}''+2y\,f_{12}'',$$
$$\frac{\partial f_2'}{\partial y}=f_{21}''\,u_y+f_{22}''\,v_y=\mathrm{e}^x\cos y\,f_{21}''+2y\,f_{22}'' .$$
<p><b>第五步：代回并展开。</b></p>
$$\frac{\partial^2z}{\partial x\partial y}=\mathrm{e}^x\cos y\,f_1'+\mathrm{e}^x\sin y\left(\mathrm{e}^x\cos y\,f_{11}''+2y\,f_{12}''\right)+2x\left(\mathrm{e}^x\cos y\,f_{21}''+2y\,f_{22}''\right)$$
$$=\mathrm{e}^x\cos y\,f_1'+\mathrm{e}^{2x}\sin y\cos y\,f_{11}''+2y\mathrm{e}^x\sin y\,f_{12}''+2x\mathrm{e}^x\cos y\,f_{21}''+4xy\,f_{22}'' .$$
<p><b>第六步：合并混合偏导。</b>因为 $f$ 具有二阶<b>连续</b>偏导数，所以 $f_{12}''=f_{21}''$（混合偏导连续则与求导次序无关）。合并得</p>
$$\frac{\partial^2z}{\partial x\partial y}=\mathrm{e}^x\cos y\,f_1'+\mathrm{e}^{2x}\sin y\cos y\,f_{11}''+2\mathrm{e}^x\left(y\sin y+x\cos y\right)f_{12}''+4xy\,f_{22}'' .$$
<p>其中 $\mathrm{e}^{2x}\sin y\cos y$ 也可写成 $\dfrac12\mathrm{e}^{2x}\sin2y$。</p>`,
      alt: R`<p><b>换个次序作检验：</b>先求 $z_y=\mathrm{e}^x\cos y\,f_1'+2y\,f_2'$，再对 $x$ 求偏导：</p>
$$z_{yx}=\mathrm{e}^x\cos y\,f_1'+\mathrm{e}^x\cos y\left(\mathrm{e}^x\sin y\,f_{11}''+2x\,f_{12}''\right)+2y\left(\mathrm{e}^x\sin y\,f_{21}''+2x\,f_{22}''\right),$$
<p>整理后与上面的结果完全相同。这既是一个很好的自查手段，也印证了"二阶偏导连续时 $z_{xy}=z_{yx}$"。</p>`,
      pitfalls: R`<ul>
<li><b>忘记 $f_1'$、$f_2'$ 仍是复合函数</b>：把 $\dfrac{\partial f_1'}{\partial y}$ 当成 $0$，或者只写成 $f_{12}''$ 而不乘中间变量的偏导 $u_y$、$v_y$。</li>
<li>乘积法则漏项：对 $\mathrm{e}^x\sin y\,f_1'$ 求 $y$ 偏导时，忘了系数 $\mathrm{e}^x\sin y$ 自身的导数带来的 $\mathrm{e}^x\cos y\,f_1'$。</li>
<li>不写理由就合并 $f_{12}''$ 与 $f_{21}''$。必须指出"二阶偏导连续"这个条件。</li>
<li>把 $2x$ 对 $y$ 求导得到非零项。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>抽象复合函数求二阶偏导三件事：① 画树形图，一阶"分道相加、连线相乘"；② 对 $f_i'$ 再求导时，它仍是 $(u,v)$ 的函数，再走一遍树；③ 二阶偏导连续时合并 $f_{12}''=f_{21}''$。</p>
<p><b>看到…想到…：</b>看到 $z=f(\varphi(x,y),\psi(x,y))$ 且"$f$ 具有二阶连续偏导数"→ 这是在提示你最后要合并混合偏导。答案通常有 4～5 项（$f_1',f_2',f_{11}'',f_{12}'',f_{22}''$ 中的若干项），项数不对就要回头检查。</p>`,
      verify: { by: 'sympy', ok: true, note: '取具体 f(u,v)=u³v²+sin(uv)+eᵘv+u²v³，sympy 直接对复合函数求 ∂²z/∂x∂y，与答案公式相减化简为 0' },
      flags: ['参考解析把 e^{2x}sin y cos y f₁₁″ 写为 ½e^{2x}sin2y f₁₁″，二者等价']
    },
    {
      id: '1992-3-3', year: 1992, no: '三(3)', type: '解答', score: 5,
      stem: R`设 $f(x)=\begin{cases}1+x^2, & x\leqslant0,\\ \mathrm{e}^{-x}, & x>0,\end{cases}$ 求 $\displaystyle\int_1^3f(x-2)\,\mathrm{d}x$.`,
      options: null,
      answer: R`$\dfrac73-\dfrac1{\mathrm{e}}$`,
      figure: null,
      kp: ['int.defcalc'],
      methods: ['定积分换元法', '分段函数按分段点拆分积分区间'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>分段函数的定积分 + 换元法。</p>
<p><b>难点在哪：</b>被积函数是 $f(x-2)$ 而不是 $f(x)$。$f$ 的分段条件"$x\leqslant0$""$x>0$"是对 $f$ <b>自己的自变量</b>说的，对 $f(x-2)$ 来说，分段条件变成 $x-2\leqslant0$ 即 $x\leqslant2$。直接处理容易搞混。</p>
<p><b>为什么想到换元：</b>令 $t=x-2$，就把"外壳" $f(\cdot)$ 里面的东西变成了单个变量 $t$，$f(t)$ 的分段点就是 $t=0$，一目了然。这是处理 $\int f(\varphi(x))\,\mathrm{d}x$（$f$ 为分段或抽象函数）的通用办法：<b>先换元，把复合剥掉</b>。</p>`,
      solution: R`<p><b>第一步：换元。</b>令 $t=x-2$，则 $x=t+2$，$\mathrm{d}x=\mathrm{d}t$。上下限同步变化：$x=1$ 时 $t=-1$；$x=3$ 时 $t=1$。于是</p>
$$\int_1^3f(x-2)\,\mathrm{d}x=\int_{-1}^{1}f(t)\,\mathrm{d}t .$$
<p><b>第二步：按分段点 $t=0$ 拆区间。</b>$[-1,0]$ 上 $f(t)=1+t^2$，$(0,1]$ 上 $f(t)=\mathrm{e}^{-t}$（单独一个点的函数值不影响定积分）：</p>
$$\int_{-1}^{1}f(t)\,\mathrm{d}t=\int_{-1}^{0}(1+t^2)\,\mathrm{d}t+\int_{0}^{1}\mathrm{e}^{-t}\,\mathrm{d}t .$$
<p><b>第三步：分别计算。</b></p>
$$\int_{-1}^{0}(1+t^2)\,\mathrm{d}t=\left[t+\frac{t^3}{3}\right]_{-1}^{0}=0-\left(-1-\frac13\right)=\frac43,$$
$$\int_{0}^{1}\mathrm{e}^{-t}\,\mathrm{d}t=\left[-\mathrm{e}^{-t}\right]_{0}^{1}=-\mathrm{e}^{-1}+1=1-\frac1{\mathrm{e}} .$$
<p><b>第四步：相加。</b></p>
$$\int_1^3f(x-2)\,\mathrm{d}x=\frac43+1-\frac1{\mathrm{e}}=\frac73-\frac1{\mathrm{e}} .$$`,
      alt: R`<p><b>另解（不换元，直接写出 $f(x-2)$）：</b>把 $f$ 的表达式中的 $x$ 全部换成 $x-2$：</p>
$$f(x-2)=\begin{cases}1+(x-2)^2, & x\leqslant2,\\ \mathrm{e}^{-(x-2)}=\mathrm{e}^{2-x}, & x>2.\end{cases}$$
<p>于是 $\displaystyle\int_1^3f(x-2)\,\mathrm{d}x=\int_1^2\left[1+(x-2)^2\right]\mathrm{d}x+\int_2^3\mathrm{e}^{2-x}\,\mathrm{d}x=\frac43+\left(1-\frac1{\mathrm{e}}\right)$，结果相同。</p>`,
      pitfalls: R`<ul>
<li>把 $f(x-2)$ 当成 $f(x)$，在 $[1,3]$ 上直接用 $\mathrm{e}^{-x}$ 积分。</li>
<li>换元后忘记同时换上下限（定积分换元"换元必换限"）。</li>
<li>分段点判断错：$f(x-2)$ 的分段点是 $x=2$，不是 $x=0$。</li>
<li>$\int\mathrm{e}^{-t}\,\mathrm{d}t=-\mathrm{e}^{-t}$ 的负号丢失，得到 $\mathrm{e}^{-1}-1$。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>分段函数的积分，"分段点在哪里，就在哪里拆"；被积函数是 $f(x-a)$、$f(2x)$、$f(\varphi(x))$ 时，先令 $t=$ 括号里的式子，同时换限。</p>
<p><b>看到…想到…：</b>看到 $\int f(x-a)\,\mathrm{d}x$ 且 $f$ 分段给出 → 换元 $t=x-a$ 后按 $f$ 的分段点拆；看到 $\int_{-a}^{a}$ 的对称区间 → 再顺便想想奇偶性能否简化。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 分段积分 ∫₁²[1+(x−2)²]dx+∫₂³e^{−(x−2)}dx = 7/3 − e^{−1}' },
      flags: []
    },

    /* ───────────── 四 ───────────── */
    {
      id: '1992-4', year: 1992, no: '四', type: '解答', score: 6,
      stem: R`求微分方程 $y''+2y'-3y=\mathrm{e}^{-3x}$ 的通解.`,
      options: null,
      answer: R`$y=C_1\mathrm{e}^{-3x}+C_2\mathrm{e}^{x}-\dfrac14x\mathrm{e}^{-3x}$（$C_1,C_2$ 为任意常数）`,
      figure: null,
      kp: ['ode.const', 'ode.linear'],
      methods: ['特征方程求齐次通解', '待定系数法求特解（λ 为单根乘 x）', '非齐次线性方程解的结构'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二阶常系数非齐次线性微分方程。</p>
<p><b>解的结构（为什么分两步）：</b>线性方程的通解 = 对应齐次方程的通解 + 非齐次方程的一个特解。原因是：两个非齐次解相减是齐次解，所以只要找到一个特解，再加上全部齐次解，就得到全部非齐次解。</p>
<p><b>齐次部分：</b>常系数方程的解试设为 $y=\mathrm{e}^{rx}$（指数函数求导后形状不变），代入得特征方程。</p>
<p><b>特解部分的关键：</b>自由项是 $\mathrm{e}^{\lambda x}P_m(x)$ 型，$\lambda=-3$，$P_m(x)=1$（零次多项式）。特解设为 $x^kQ_m(x)\mathrm{e}^{\lambda x}$，其中 $k$ 由"$\lambda$ 是不是特征根、是几重根"决定。本题 $\lambda=-3$ 恰好是特征方程的单根，所以 $k=1$。<b>为什么要乘 $x$：</b>如果设 $A\mathrm{e}^{-3x}$，它本身就是齐次解，代入左边恒为 $0$，不可能等于 $\mathrm{e}^{-3x}$——这就像"共振"，必须乘上 $x$ 才能产生非零结果。</p>`,
      solution: R`<p><b>第一步：求齐次方程通解。</b>齐次方程 $y''+2y'-3y=0$ 的特征方程为</p>
$$r^2+2r-3=0\iff(r+3)(r-1)=0,$$
<p>特征根 $r_1=-3$，$r_2=1$（两个不同的实根）。齐次通解为</p>
$$Y=C_1\mathrm{e}^{-3x}+C_2\mathrm{e}^{x}.$$
<p><b>第二步：设特解。</b>自由项 $\mathrm{e}^{-3x}=\mathrm{e}^{\lambda x}\cdot1$，$\lambda=-3$ 是特征方程的<b>单根</b>，取 $k=1$，设</p>
$$y^*=Ax\,\mathrm{e}^{-3x}.$$
<p><b>第三步：求导并代入。</b>用乘积法则：</p>
$$y^{*\prime}=A\mathrm{e}^{-3x}-3Ax\,\mathrm{e}^{-3x}=A(1-3x)\mathrm{e}^{-3x},$$
$$y^{*\prime\prime}=A(-3)\mathrm{e}^{-3x}+A(1-3x)(-3)\mathrm{e}^{-3x}=A(9x-6)\mathrm{e}^{-3x}.$$
<p>代入左边并提出公因子 $A\mathrm{e}^{-3x}$：</p>
$$y^{*\prime\prime}+2y^{*\prime}-3y^*=A\mathrm{e}^{-3x}\big[(9x-6)+2(1-3x)-3x\big]=A\mathrm{e}^{-3x}\cdot(-4).$$
<p>注意含 $x$ 的项 $9x-6x-3x=0$ 恰好抵消，这正是"$\lambda$ 为特征根"的体现。令 $-4A\mathrm{e}^{-3x}=\mathrm{e}^{-3x}$，得 $A=-\dfrac14$，所以 $y^*=-\dfrac14x\mathrm{e}^{-3x}$。</p>
<p><b>第四步：写出通解。</b></p>
$$y=C_1\mathrm{e}^{-3x}+C_2\mathrm{e}^{x}-\frac14x\mathrm{e}^{-3x}\quad(C_1,C_2\ \text{为任意常数}).$$`,
      alt: R`<p><b>速算公式：</b>设 $y^*=Q(x)\mathrm{e}^{\lambda x}$ 代入 $y''+py'+qy=P_m(x)\mathrm{e}^{\lambda x}$，约去 $\mathrm{e}^{\lambda x}$ 后得到</p>
$$Q''+(2\lambda+p)Q'+(\lambda^2+p\lambda+q)Q=P_m(x).$$
<p>本题 $p=2,q=-3,\lambda=-3$：$\lambda^2+p\lambda+q=9-6-3=0$（说明 $\lambda$ 是特征根），$2\lambda+p=-4\neq0$（说明是单根）。取 $Q=Ax$，$Q'=A$，$Q''=0$，得 $-4A=1$，$A=-\dfrac14$。这样不用算 $y^{*\prime\prime}$，又快又不易错。</p>`,
      pitfalls: R`<ul>
<li>没检查 $\lambda$ 是否为特征根就设 $y^*=A\mathrm{e}^{-3x}$，代入得 $0=\mathrm{e}^{-3x}$，无解。</li>
<li>对 $Ax\mathrm{e}^{-3x}$ 求二阶导时乘积法则出错（常见的是漏掉一项或 $-3$ 的符号）。</li>
<li>只写出特解或只写出齐次通解。题目要的是通解，两部分缺一不可。</li>
<li>因式分解特征方程时符号弄反，得到 $r=3,-1$。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>通解 = 齐次通解 + 非齐次特解。自由项 $P_m(x)\mathrm{e}^{\lambda x}$ → 特解 $x^kQ_m(x)\mathrm{e}^{\lambda x}$，$k=0,1,2$ 分别对应 $\lambda$ 不是特征根、是单根、是二重根。口诀："不是根乘 $1$，单根乘 $x$，重根乘 $x^2$"。</p>
<p><b>看到…想到…：</b>看到 $y''+py'+qy=\mathrm{e}^{\lambda x}P_m(x)$ → 先解特征方程，再拿 $\lambda$ 去和特征根比对，决定 $k$；看到自由项是 $\mathrm{e}^{\alpha x}(\cdots\cos\beta x+\cdots\sin\beta x)$ → 拿 $\alpha\pm\mathrm{i}\beta$ 去比对。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy dsolve 得 y=C2·eˣ+(C1−x/4)e^{−3x}，与答案一致' },
      flags: []
    },

    /* ───────────── 五 ───────────── */
    {
      id: '1992-5', year: 1992, no: '五', type: '解答', score: 8,
      stem: R`计算曲面积分 $\displaystyle I=\iint_{\Sigma}(x^3+az^2)\,\mathrm{d}y\,\mathrm{d}z+(y^3+ax^2)\,\mathrm{d}z\,\mathrm{d}x+(z^3+ay^2)\,\mathrm{d}x\,\mathrm{d}y$，其中 $\Sigma$ 为上半球面 $z=\sqrt{a^2-x^2-y^2}$ 的上侧.`,
      options: null,
      answer: R`$I=\dfrac{29}{20}\pi a^5$`,
      figure: null,
      kp: ['mint.surf2', 'mint.triple', 'mint.double'],
      methods: ['补面法 + 高斯公式', '球面坐标计算三重积分', '极坐标与轮换对称性计算二重积分'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>第二类（对坐标的）曲面积分，核心方法是"补面 + 高斯公式"。</p>
<p><b>为什么不直接算：</b>三个分量 $\mathrm{d}y\,\mathrm{d}z$、$\mathrm{d}z\,\mathrm{d}x$、$\mathrm{d}x\,\mathrm{d}y$ 都有，直接计算要把半球面分别投影到三个坐标面，而且投影到 $yOz$、$zOx$ 面时球面还要拆成前后、左右两片，非常繁琐。</p>
<p><b>为什么想到高斯公式：</b>算一下散度：</p>
$$\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=3x^2+3y^2+3z^2 .$$
<p>出题人把 $az^2$ 放在 $P$ 里、$ax^2$ 放在 $Q$ 里、$ay^2$ 放在 $R$ 里，它们分别对 $x,y,z$ 求偏导时都消失了，散度只剩 $3(x^2+y^2+z^2)$，在球面坐标下就是 $3\rho^2$，极其简单——这是明显的"请用高斯公式"的信号。</p>
<p><b>但曲面不封闭：</b>上半球面没有"底"，所以补一个圆盘 $z=0$ 把它封起来，用高斯公式算闭曲面上的积分，再减去补上去的那块。补的面选平行于坐标面的平面，好处是它在另两个坐标面上的投影面积为 $0$，只剩一项要算。</p>`,
      solution: R`<p><b>第一步：补面，确定方向。</b>取 $\Sigma_1$：$z=0$（$x^2+y^2\leqslant a^2$），取<b>下侧</b>。这样 $\Sigma$（上侧）与 $\Sigma_1$（下侧）合起来是一张封闭曲面，它围成上半球体 $\Omega$：$x^2+y^2+z^2\leqslant a^2,\ z\geqslant0$，并且两片的方向都指向 $\Omega$ 的外部，整体为外侧。于是</p>
$$I=\iint_{\Sigma+\Sigma_1}-\iint_{\Sigma_1}.$$
<p><b>第二步：闭曲面上用高斯公式。</b>记 $P=x^3+az^2$，$Q=y^3+ax^2$，$R=z^3+ay^2$，则</p>
$$\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=3(x^2+y^2+z^2),$$
$$\iint_{\Sigma+\Sigma_1}=\iiint_{\Omega}3(x^2+y^2+z^2)\,\mathrm{d}V .$$
<p>用球面坐标 $x=\rho\sin\varphi\cos\theta,\ y=\rho\sin\varphi\sin\theta,\ z=\rho\cos\varphi$，$\mathrm{d}V=\rho^2\sin\varphi\,\mathrm{d}\rho\,\mathrm{d}\varphi\,\mathrm{d}\theta$，上半球体对应 $0\leqslant\rho\leqslant a$，$0\leqslant\varphi\leqslant\dfrac\pi2$，$0\leqslant\theta\leqslant2\pi$：</p>
$$\iiint_{\Omega}3\rho^2\,\mathrm{d}V=3\int_0^{2\pi}\mathrm{d}\theta\int_0^{\frac\pi2}\sin\varphi\,\mathrm{d}\varphi\int_0^a\rho^4\,\mathrm{d}\rho=3\cdot2\pi\cdot1\cdot\frac{a^5}{5}=\frac{6\pi a^5}{5}.$$
<p><b>第三步：计算补面 $\Sigma_1$ 上的积分。</b>$\Sigma_1$ 位于平面 $z=0$ 内，它在 $yOz$ 面和 $zOx$ 面上的投影都是线段，面积为 $0$，所以 $\mathrm{d}y\,\mathrm{d}z$ 项和 $\mathrm{d}z\,\mathrm{d}x$ 项都是 $0$。只剩 $\mathrm{d}x\,\mathrm{d}y$ 项，且在 $\Sigma_1$ 上 $z=0$，$R=0^3+ay^2=ay^2$。因为取下侧，化成二重积分时要加负号：</p>
$$\iint_{\Sigma_1}=\iint_{\Sigma_1}ay^2\,\mathrm{d}x\,\mathrm{d}y=-a\iint_{D}y^2\,\mathrm{d}x\,\mathrm{d}y,\qquad D:\ x^2+y^2\leqslant a^2 .$$
<p>圆域 $D$ 关于直线 $y=x$ 对称，所以 $\iint_Dy^2=\iint_Dx^2=\dfrac12\iint_D(x^2+y^2)$（轮换对称性）。用极坐标：</p>
$$\iint_Dy^2\,\mathrm{d}x\,\mathrm{d}y=\frac12\int_0^{2\pi}\mathrm{d}\theta\int_0^ar^2\cdot r\,\mathrm{d}r=\frac12\cdot2\pi\cdot\frac{a^4}{4}=\frac{\pi a^4}{4}.$$
<p>所以 $\displaystyle\iint_{\Sigma_1}=-a\cdot\frac{\pi a^4}{4}=-\frac{\pi a^5}{4}$。</p>
<p><b>第四步：相减得结果。</b></p>
$$I=\frac{6\pi a^5}{5}-\left(-\frac{\pi a^5}{4}\right)=\frac{24\pi a^5+5\pi a^5}{20}=\frac{29}{20}\pi a^5 .$$`,
      pitfalls: R`<ul>
<li><b>在三重积分里把 $x^2+y^2+z^2$ 换成 $a^2$</b>。三重积分是在整个球体内部积分，$\rho$ 从 $0$ 变到 $a$，不能代入球面方程；只有在<b>曲面积分</b>里（点在曲面上）才能代入曲面方程。</li>
<li>补面方向取错（取了上侧），使闭曲面方向不一致，高斯公式的符号出错；或者算完闭曲面后忘了减去补面的积分。</li>
<li>以为补面 $\Sigma_1$ 上 $\mathrm{d}y\,\mathrm{d}z$、$\mathrm{d}z\,\mathrm{d}x$ 项也有贡献。</li>
<li>下侧化二重积分漏掉负号，得到 $\dfrac{6}{5}\pi a^5-\dfrac{\pi a^5}{4}=\dfrac{19}{20}\pi a^5$ 这样的错误答案。</li>
<li>球面坐标的体积元漏掉 $\rho^2\sin\varphi$。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>非封闭曲面的第二类曲面积分，若散度简单 → 补面 + 高斯公式 − 补面积分。补面优先选平行于坐标面的平面（只有一项非零），方向要使整体成为外侧（或整体内侧）。</p>
<p><b>看到…想到…：</b>看到 $\iint P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y$ 三项俱全且 $P_x+Q_y+R_z$ 很简单 → 高斯公式；看到被积式在球体内且含 $x^2+y^2+z^2$ → 球面坐标；看到圆域上的 $\iint x^2$ 或 $\iint y^2$ → 轮换对称，化为 $\dfrac12\iint(x^2+y^2)$。</p>
<p><b>口诀：</b>"曲面积分可代入，体积分里不能代"。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 两种方式验证：①用球面参数化直接计算原曲面积分（法向量朝外）得 29πa⁵/20；②高斯部分 6πa⁵/5、底面 −πa⁵/4，相减同为 29πa⁵/20' },
      flags: ['原卷未写明 a>0，按上半球面的含义默认 a>0']
    },

    /* ───────────── 六 ───────────── */
    {
      id: '1992-6', year: 1992, no: '六', type: '解答', score: 7,
      stem: R`设 $f''(x)<0$，$f(0)=0$，证明：对任意的 $x_1>0,\ x_2>0$，有 $f(x_1+x_2)<f(x_1)+f(x_2)$.`,
      options: null,
      answer: R`证明见详细解答。要点：不妨设 $x_1\leqslant x_2$，在 $[0,x_1]$ 与 $[x_2,x_1+x_2]$ 这两个<b>等长</b>区间上分别用拉格朗日中值定理，再利用 $f'$ 严格单调递减比较两个增量。`,
      figure: null,
      kp: ['diff.ineq', 'diff.mvt', 'diff.convex'],
      methods: ['拉格朗日中值定理', '利用 f(0)=0 把 f(x₁) 写成增量', '构造辅助函数 + 单调性', '凹函数（上凸）的性质'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>用导数（中值定理或单调性）证明函数不等式。</p>
<p><b>条件的含义：</b>$f''<0$ 说明 $f'$ 严格单调递减，即曲线越往右越"平缓"，图形是上凸的（凹函数）。通俗地说：<b>越往后，同样长的一段路，涨得越少</b>。</p>
<p><b>关键改写：</b>利用 $f(0)=0$，把要证的式子改写成</p>
$$f(x_1+x_2)-f(x_2)\ <\ f(x_1)-f(0).$$
<p>右边是 $f$ 在区间 $[0,x_1]$ 上的增量，左边是 $f$ 在区间 $[x_2,x_2+x_1]$ 上的增量，<b>两个区间的长度都是 $x_1$</b>。由拉格朗日中值定理，增量 = 区间长度 × 某点的导数。区间长度一样，就只需比较导数；而 $f'$ 递减，靠后的区间导数更小、增量更小。这就是证明的全部动机。</p>
<div style="text-align:center"><svg viewBox="0 0 320 200" width="300" role="img" aria-label="凹函数曲线上两段等长区间的增量比较"><title>上凸曲线：等长区间上，靠后的增量更小</title><line x1="20" y1="180" x2="305" y2="180" stroke="currentColor" stroke-width="1"/><line x1="30" y1="190" x2="30" y2="10" stroke="currentColor" stroke-width="1"/><polyline fill="none" stroke="currentColor" stroke-width="2" points="30.0,180.0 46.2,159.7 62.5,140.8 78.8,123.3 95.0,107.2 111.2,92.5 127.5,79.2 143.8,67.3 160.0,56.8 176.2,47.7 192.5,40.0 208.8,33.7 225.0,28.8 241.2,25.3 257.5,23.2 273.8,22.5 290.0,23.2"/><line x1="95" y1="180" x2="95" y2="107.2" stroke="#e8590c" stroke-width="3"/><line x1="257.5" y1="40" x2="257.5" y2="23.2" stroke="#e8590c" stroke-width="3"/><line x1="192.5" y1="40" x2="257.5" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="192.5" y1="180" x2="192.5" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="257.5" y1="180" x2="257.5" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><text x="26" y="196" font-size="11" fill="currentColor">O</text><text x="90" y="196" font-size="11" fill="currentColor">x₁</text><text x="186" y="196" font-size="11" fill="currentColor">x₂</text><text x="240" y="196" font-size="11" fill="currentColor">x₁+x₂</text><text x="100" y="150" font-size="11" fill="#e8590c">f(x₁)−f(0)</text><text x="200" y="20" font-size="11" fill="#e8590c">f(x₁+x₂)−f(x₂)</text></svg></div>
<p style="text-align:center"><small>两段橙色竖线分别是等长区间 $[0,x_1]$ 与 $[x_2,x_1+x_2]$ 上的增量，曲线上凸，后者更短。</small></p>`,
      solution: R`<p><b>预备：</b>$f''(x)$ 存在，说明 $f'(x)$ 处处存在，于是 $f$ 处处可导、处处连续，在任何闭区间上都满足拉格朗日中值定理的条件。又 $f''(x)<0$，所以 $f'(x)$ 严格单调递减。</p>
<p><b>第一步：改写目标。</b>因为 $f(0)=0$，要证的不等式等价于</p>
$$f(x_1+x_2)-f(x_2)\ <\ f(x_1)-f(0).\qquad(*)$$
<p><b>第二步：不妨设 $x_1\leqslant x_2$。</b>要证的不等式 $f(x_1+x_2)<f(x_1)+f(x_2)$ 关于 $x_1,x_2$ 对称，交换两者结论不变，所以可以这样假设（目的是让后面两个区间不重叠、能比较先后）。</p>
<p><b>第三步：在两个等长区间上用拉格朗日中值定理。</b></p>
<ul>
<li>在 $[0,x_1]$ 上：存在 $\xi_1\in(0,x_1)$，使 $f(x_1)-f(0)=f'(\xi_1)\,x_1$；</li>
<li>在 $[x_2,x_1+x_2]$ 上：存在 $\xi_2\in(x_2,x_1+x_2)$，使 $f(x_1+x_2)-f(x_2)=f'(\xi_2)\,x_1$。</li>
</ul>
<p><b>第四步：比较 $\xi_1$ 与 $\xi_2$。</b>由 $\xi_1<x_1\leqslant x_2<\xi_2$ 得 $\xi_1<\xi_2$。又 $f'$ 严格单调递减，所以 $f'(\xi_1)>f'(\xi_2)$。</p>
<p><b>第五步：得出结论。</b>两边同乘正数 $x_1$：$f'(\xi_1)x_1>f'(\xi_2)x_1$，即</p>
$$f(x_1)-f(0)\ >\ f(x_1+x_2)-f(x_2),$$
<p>这正是 $(*)$。代入 $f(0)=0$ 并移项，得 $f(x_1+x_2)<f(x_1)+f(x_2)$。证毕。</p>`,
      alt: R`<p><b>另证一（构造辅助函数，不需要"不妨设"）：</b>固定 $x_1>0$，令</p>
$$\varphi(t)=f(x_1+t)-f(t)-f(x_1),\qquad t\geqslant0 .$$
<p>则 $\varphi(0)=f(x_1)-f(0)-f(x_1)=0$，且</p>
$$\varphi'(t)=f'(x_1+t)-f'(t)<0,$$
<p>因为 $x_1+t>t$ 而 $f'$ 严格递减。所以 $\varphi$ 在 $[0,+\infty)$ 上严格递减，$\varphi(x_2)<\varphi(0)=0$，即 $f(x_1+x_2)<f(x_1)+f(x_2)$。</p>
<p>这是证明"含两个变量的不等式"的通用技巧：<b>固定一个，把另一个换成变量 $t$</b>。</p>
<p><b>另证二（凹函数的定义）：</b>$f''<0$ 时 $f$ 严格上凸：对 $a\neq b$、$\lambda\in(0,1)$，有 $f(\lambda a+(1-\lambda)b)>\lambda f(a)+(1-\lambda)f(b)$。取 $a=x_1+x_2$，$b=0$，$\lambda=\dfrac{x_1}{x_1+x_2}$，得 $f(x_1)>\dfrac{x_1}{x_1+x_2}f(x_1+x_2)$；同理 $f(x_2)>\dfrac{x_2}{x_1+x_2}f(x_1+x_2)$。两式相加即得结论。几何上，这相当于"割线斜率 $\dfrac{f(x)}{x}$ 随 $x$ 增大而减小"。</p>`,
      pitfalls: R`<ul>
<li>在 $[0,x_1]$ 和 $[x_1,x_1+x_2]$ 上用中值定理：两个区间长度不同（$x_1$ 与 $x_2$），乘上不同的长度后无法比较大小。</li>
<li>没有"不妨设 $x_1\leqslant x_2$"就断言 $\xi_1<\xi_2$。若 $x_1>x_2$，区间 $(0,x_1)$ 与 $(x_2,x_1+x_2)$ 有重叠，$\xi_1,\xi_2$ 的大小无法确定。</li>
<li>由 $f''<0$ 推出"$f'<0$"或"$f$ 递减"——这是错的，$f''<0$ 只说明 $f'$ 递减。</li>
<li>没有交代 $f(0)=0$ 用在哪里。它的作用正是把 $f(x_1)$ 变成增量 $f(x_1)-f(0)$。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>比较 $f(a+b)$ 与 $f(a)+f(b)$ → 利用 $f(0)=0$ 把它变成"两个等长区间上的增量比较"，用拉格朗日中值定理 + $f'$ 的单调性；或构造 $\varphi(t)=f(a+t)-f(t)-f(a)$ 用单调性。</p>
<p><b>看到…想到…：</b>看到 $f''<0$（上凸）且 $f(0)=0$ → 次可加 $f(x_1+x_2)<f(x_1)+f(x_2)$；看到 $f''>0$ 且 $f(0)=0$ → 超可加，不等号反向。看到含两个字母的不等式 → 固定一个，另一个设为变量构造函数。</p>`,
      verify: { by: 'proof', ok: true, note: '证明逐步检查：中值定理条件由 f″ 存在保证；ξ₁<x₁≤x₂<ξ₂ 由"不妨设"保证；另用构造函数法给出不需对称性假设的独立证明' },
      flags: []
    },

    /* ───────────── 七 ───────────── */
    {
      id: '1992-7', year: 1992, no: '七', type: '解答', score: 8,
      stem: R`在变力 $\mathbf{F}=yz\,\mathbf{i}+zx\,\mathbf{j}+xy\,\mathbf{k}$ 的作用下，质点由原点沿直线运动到椭球面 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}=1$ 上第一卦限的点 $M(\xi,\eta,\zeta)$，问：当 $\xi,\eta,\zeta$ 取何值时，力 $\mathbf{F}$ 所做的功 $W$ 最大？并求出 $W$ 的最大值.`,
      options: null,
      answer: R`$W=\xi\eta\zeta$；当 $\xi=\dfrac{a}{\sqrt3},\ \eta=\dfrac{b}{\sqrt3},\ \zeta=\dfrac{c}{\sqrt3}$ 时功最大，$W_{\max}=\dfrac{\sqrt3}{9}abc$.`,
      figure: null,
      kp: ['mdiff.extreme', 'mint.line2', 'mint.field'],
      methods: ['第二类曲线积分求功（直线段参数化）', '拉格朗日乘数法求条件极值', '势函数（梯度场做功与路径无关）', '均值不等式'],
      difficulty: 4,
      analysis: R`<p><b>这题考什么：</b>两个知识点的串联——先用<b>第二类曲线积分</b>把功算出来，再用<b>拉格朗日乘数法</b>求条件最值。</p>
<p><b>第一层：功怎么算。</b>力 $\mathbf{F}$ 沿路径 $L$ 做的功是 $W=\displaystyle\int_L\mathbf{F}\cdot\mathrm{d}\mathbf{r}=\int_L P\,\mathrm{d}x+Q\,\mathrm{d}y+R\,\mathrm{d}z$（"力在位移方向上的分量 × 位移"再累加）。路径是从原点到 $M$ 的直线段，最自然的参数化是 $\mathbf{r}(t)=t\,(\xi,\eta,\zeta)$，$t$ 从 $0$ 到 $1$。算出来 $W$ 是终点坐标 $\xi,\eta,\zeta$ 的函数。</p>
<p><b>第二层：何时最大。</b>$M$ 必须在椭球面上，所以是"在约束 $\dfrac{\xi^2}{a^2}+\dfrac{\eta^2}{b^2}+\dfrac{\zeta^2}{c^2}=1$ 下求 $W$ 的最大值"——典型的条件极值，用拉格朗日乘数法。</p>
<p><b>更深一层的观察：</b>$\mathbf{F}=(yz,zx,xy)$ 恰好是 $u=xyz$ 的梯度，是保守力场。保守力做功只与起点、终点有关，等于势函数之差，所以 $W=u(M)-u(O)=\xi\eta\zeta$——与"沿直线"无关。这正是"功 = 势能差"的第一性原理。</p>`,
      solution: R`<p><b>第一步：写出功的表达式。</b></p>
$$W=\int_{OM}yz\,\mathrm{d}x+zx\,\mathrm{d}y+xy\,\mathrm{d}z .$$
<p><b>第二步：参数化直线段 $OM$ 并计算。</b>$x=\xi t,\ y=\eta t,\ z=\zeta t$，$t$ 从 $0$ 变到 $1$，$\mathrm{d}x=\xi\,\mathrm{d}t,\ \mathrm{d}y=\eta\,\mathrm{d}t,\ \mathrm{d}z=\zeta\,\mathrm{d}t$。逐项代入：</p>
$$yz\,\mathrm{d}x=(\eta t)(\zeta t)\,\xi\,\mathrm{d}t=\xi\eta\zeta\,t^2\,\mathrm{d}t,$$
<p>另两项同理也都等于 $\xi\eta\zeta\,t^2\,\mathrm{d}t$。所以</p>
$$W=\int_0^1 3\xi\eta\zeta\,t^2\,\mathrm{d}t=\xi\eta\zeta .$$
<p><b>第三步：建立条件极值问题。</b>求 $W=\xi\eta\zeta$ 在约束 $\dfrac{\xi^2}{a^2}+\dfrac{\eta^2}{b^2}+\dfrac{\zeta^2}{c^2}=1$（$\xi,\eta,\zeta>0$）下的最大值。构造拉格朗日函数</p>
$$L(\xi,\eta,\zeta,\lambda)=\xi\eta\zeta+\lambda\left(1-\frac{\xi^2}{a^2}-\frac{\eta^2}{b^2}-\frac{\zeta^2}{c^2}\right).$$
<p><b>第四步：列方程组。</b></p>
$$\begin{cases}L_\xi=\eta\zeta-\dfrac{2\lambda\xi}{a^2}=0, & (1)\\[4pt] L_\eta=\xi\zeta-\dfrac{2\lambda\eta}{b^2}=0, & (2)\\[4pt] L_\zeta=\xi\eta-\dfrac{2\lambda\zeta}{c^2}=0, & (3)\\[4pt] \dfrac{\xi^2}{a^2}+\dfrac{\eta^2}{b^2}+\dfrac{\zeta^2}{c^2}=1. & (4)\end{cases}$$
<p><b>第五步：解方程组（技巧：分别乘以 $\xi,\eta,\zeta$ 造出公共项 $\xi\eta\zeta$）。</b>$(1)\times\xi$、$(2)\times\eta$、$(3)\times\zeta$ 得</p>
$$\xi\eta\zeta=\frac{2\lambda\xi^2}{a^2}=\frac{2\lambda\eta^2}{b^2}=\frac{2\lambda\zeta^2}{c^2}.$$
<p>因为 $M$ 在第一卦限，$\xi\eta\zeta>0$，所以 $\lambda\neq0$，可以约去 $2\lambda$：</p>
$$\frac{\xi^2}{a^2}=\frac{\eta^2}{b^2}=\frac{\zeta^2}{c^2}.$$
<p>代入 (4)，三者之和为 $1$，故每个都等于 $\dfrac13$。取正值得唯一驻点</p>
$$\xi=\frac{a}{\sqrt3},\qquad \eta=\frac{b}{\sqrt3},\qquad \zeta=\frac{c}{\sqrt3}.$$
<p><b>第六步：说明这就是最大值点。</b>把范围放宽到椭球面在第一卦限的部分<b>连同边界</b>（$\xi,\eta,\zeta\geqslant0$），这是一个有界闭集，连续函数 $W=\xi\eta\zeta$ 在其上一定取得最大值。在边界上（某个坐标为 $0$）$W=0$，而内部 $W>0$，所以最大值只能在内部取得；内部的最值点必满足拉格朗日方程组，而方程组在内部只有唯一解，所以它就是最大值点。</p>
<p><b>第七步：求最大值。</b></p>
$$W_{\max}=\frac{a}{\sqrt3}\cdot\frac{b}{\sqrt3}\cdot\frac{c}{\sqrt3}=\frac{abc}{3\sqrt3}=\frac{\sqrt3}{9}abc .$$`,
      alt: R`<p><b>另解一（势函数求功）：</b>注意到 $\dfrac{\partial(xyz)}{\partial x}=yz,\ \dfrac{\partial(xyz)}{\partial y}=zx,\ \dfrac{\partial(xyz)}{\partial z}=xy$，即 $\mathbf{F}=\mathbf{grad}(xyz)$。于是 $yz\,\mathrm{d}x+zx\,\mathrm{d}y+xy\,\mathrm{d}z=\mathrm{d}(xyz)$ 是全微分，积分与路径无关：</p>
$$W=\big[xyz\big]_{O}^{M}=\xi\eta\zeta-0=\xi\eta\zeta .$$
<p><b>另解二（均值不等式求最大值）：</b>令 $p=\dfrac{\xi^2}{a^2},\ q=\dfrac{\eta^2}{b^2},\ r=\dfrac{\zeta^2}{c^2}$，则 $p+q+r=1$，且</p>
$$W^2=a^2b^2c^2\,pqr\leqslant a^2b^2c^2\left(\frac{p+q+r}{3}\right)^3=\frac{a^2b^2c^2}{27},$$
<p>等号当且仅当 $p=q=r=\dfrac13$。所以 $W\leqslant\dfrac{abc}{3\sqrt3}=\dfrac{\sqrt3}{9}abc$，并且最大值可以取到。这个方法一步同时完成"求最值点"和"证明是最大值"。</p>`,
      pitfalls: R`<ul>
<li>把功写成 $|\mathbf{F}|\cdot|OM|$ 或第一类曲线积分 $\int|\mathbf{F}|\,\mathrm{d}s$。变力做功必须是 $\int\mathbf{F}\cdot\mathrm{d}\mathbf{r}$。</li>
<li>参数化直线段时 $t$ 的范围写错，或忘了 $\mathrm{d}x=\xi\,\mathrm{d}t$ 中的系数 $\xi$。</li>
<li>解方程组时直接两式相除，却不说明 $\xi,\eta,\zeta,\lambda$ 不为零。</li>
<li>求出驻点就直接下结论"最大"，不说明理由。应用题可以说"由实际意义知最大值存在"，但用有界闭集上的最值定理说明更严密。</li>
</ul>`,
      summary: R`<p><b>方法要点：</b>变力做功 = 第二类曲线积分；先检查力场是否为梯度场（旋度为零），是则直接用势函数之差。条件最值用拉格朗日乘数法，方程组的常用技巧是"各式分别乘以对应变量，造出公共项再比较"。</p>
<p><b>看到…想到…：</b>看到"变力沿路径做功"→ $\int P\,\mathrm{d}x+Q\,\mathrm{d}y+R\,\mathrm{d}z$，先试找势函数；看到"在曲面/曲线上找点使某量最大最小"→ 拉格朗日乘数法；看到"乘积在平方和约束下的最大值"→ 也可以用均值不等式一步到位。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 计算直线段上的线积分得 W=ξηζ；sympy solve 拉格朗日方程组（正值）得唯一解 ξ=a/√3, η=b/√3, ζ=c/√3，W=√3abc/9' },
      flags: ['原卷 OCR 中力 F 未加粗，已改为向量记号 \\mathbf{F}']
    }
  ];
});
