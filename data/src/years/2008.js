// 2008 年数学一 · 高等数学部分（共 13 题：第1、2、3、4、9、10、11、12、15、16、17、18、19 题）
// 原卷编排：一、选择题(1)–(8)；二、填空题(9)–(14)；三、解答题(15)–(23)。
// 第5、6、13、20、21 题属于线性代数（第6题虽然画的是二次曲面，但考的是实对称矩阵的正特征值个数），
// 第7、8、14、22、23 题属于概率论与数理统计，均未收录。
registerYear(2008, function (R) {
  return [
    /* ───────────────────────── 第1题 ───────────────────────── */
    {
      id: '2008-1', year: 2008, no: '第1题', type: '选择', score: 4,
      stem: R`设函数 $f(x)=\displaystyle\int_0^{x^2}\ln(2+t)\,\mathrm{d}t$，则 $f'(x)$ 的零点个数为`,
      options: [R`$0$`, R`$1$`, R`$2$`, R`$3$`],
      answer: 'B',
      figure: null,
      kp: ['int.ftc'],
      methods: ['变限积分求导（微积分基本定理 + 链式法则）', '因式分解后逐个因子判断零点'],
      difficulty: 1,
      analysis: R`<p>题目问的是 $f'(x)$ 的零点，所以第一件事一定是<b>把 $f'(x)$ 求出来</b>。$f$ 是一个积分上限函数，但上限是 $x^2$ 而不是 $x$——它其实是两个函数的复合：</p>$$\Phi(u)=\int_0^{u}\ln(2+t)\,\mathrm{d}t,\qquad u=x^2,\qquad f(x)=\Phi(x^2).$$<p>为什么 $\Phi'(u)=\ln(2+u)$？直观地看，$\Phi(u)$ 是曲线 $y=\ln(2+t)$ 下从 $0$ 到 $u$ 的"面积"，上限往右挪一点点 $\Delta u$，面积大约增加"高 × 宽" $=\ln(2+u)\cdot\Delta u$，所以面积的增长速度就是当前的高度——这就是微积分基本定理。再用链式法则乘上内层函数的导数 $(x^2)'=2x$ 即可。</p><p>求出 $f'(x)$ 之后，它是一个乘积，"乘积为零 ⟺ 某个因子为零"，于是逐个因子讨论零点。</p>`,
      solution: R`<p><b>第一步：确认可以用微积分基本定理。</b>被积函数 $\ln(2+t)$ 在 $t>-2$ 时连续，而积分区间 $[0,x^2]$（$x^2\ge0$）始终落在这个范围内，所以 $\Phi(u)=\int_0^u\ln(2+t)\,\mathrm{d}t$ 在 $u\ge0$ 上可导，且 $\Phi'(u)=\ln(2+u)$。</p><p><b>第二步：链式法则求 $f'(x)$。</b></p>$$f'(x)=\Phi'(x^2)\cdot(x^2)'=\ln(2+x^2)\cdot2x=2x\ln(2+x^2).$$<p><b>第三步：找零点。</b>$f'(x)=0\iff 2x=0$ 或 $\ln(2+x^2)=0$。</p><ul><li>$2x=0$ 给出 $x=0$；</li><li>$\ln(2+x^2)=0$ 要求 $2+x^2=1$，即 $x^2=-1$，没有实数解。事实上 $2+x^2\ge2$，所以 $\ln(2+x^2)\ge\ln2>0$ 恒成立。</li></ul><p>因此 $f'(x)$ 只有一个零点 $x=0$，<b>选 B</b>。</p><p><b>第四步：看看错误选项是怎么来的。</b></p><ul><li>A（$0$ 个）：忘记乘内层导数 $2x$，得到 $f'(x)=\ln(2+x^2)>0$，误以为没有零点。</li><li>C（$2$ 个）：既漏乘了 $2x$，又把 $2+x^2=1$ 错解成 $x^2=1$，得到 $x=\pm1$ 两个"零点"。</li><li>D（$3$ 个）：乘了 $2x$，但同样把 $\ln(2+x^2)=0$ 错解出 $x=\pm1$，于是得到 $x=0,\pm1$。</li></ul>`,
      pitfalls: R`<p>① <b>漏乘上限的导数</b>：上限是 $x^2$ 时必须乘 $(x^2)'=2x$，这是本题唯一的"坑"，漏掉就错选 A。</p><p>② <b>把积分变量和自变量混为一谈</b>：被积函数 $\ln(2+t)$ 中的 $t$ 要替换成<b>上限</b> $x^2$，得到 $\ln(2+x^2)$，而不是 $\ln(2+x)$。</p><p>③ 判断 $\ln(\cdots)$ 的符号时，要先看真数和 $1$ 的大小关系：真数 $>1$ 则对数 $>0$。$2+x^2\ge2>1$，所以对数恒正。</p>`,
      summary: R`<p><b>方法要点：</b></p>$$\frac{\mathrm{d}}{\mathrm{d}x}\int_{\psi(x)}^{\varphi(x)}f(t)\,\mathrm{d}t=f(\varphi(x))\,\varphi'(x)-f(\psi(x))\,\psi'(x).$$<p>口诀："<b>上限代入乘上导，下限代入减下导</b>"。</p><p><b>看到…想到…：</b>看到"变限积分 + 求导 / 零点 / 单调性 / 极值"，第一步就套变限积分求导公式；看到导数是乘积形式，就逐个因子分析符号与零点。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: diff(integrate(log(2+t),(t,0,x**2)),x) 化简为 2x·log(x²+2)，solve 只得到 x=0 一个实根' },
      flags: []
    },

    /* ───────────────────────── 第2题 ───────────────────────── */
    {
      id: '2008-2', year: 2008, no: '第2题', type: '选择', score: 4,
      stem: R`函数 $f(x,y)=\arctan\dfrac{x}{y}$ 在点 $(0,1)$ 处的梯度等于`,
      options: [R`$\mathbf{i}$`, R`$-\mathbf{i}$`, R`$\mathbf{j}$`, R`$-\mathbf{j}$`],
      answer: 'A',
      figure: null,
      kp: ['mdiff.dir', 'mdiff.diffable'],
      methods: ['梯度的定义 grad f = f_x i + f_y j', '偏导数计算（一元复合函数求导）', '先代值后求导'],
      difficulty: 1,
      analysis: R`<p>梯度是一个向量，定义为</p>$$\operatorname{grad}f(x_0,y_0)=f_x(x_0,y_0)\,\mathbf{i}+f_y(x_0,y_0)\,\mathbf{j},$$<p>所以只要求出两个偏导数在 $(0,1)$ 处的值。</p><p>这里有个很省力的技巧——<b>先代值后求导</b>。它的依据就是偏导数的定义：$f_x(x_0,y_0)$ 本质上就是"把 $y$ 固定为 $y_0$ 后得到的一元函数 $f(x,y_0)$ 在 $x_0$ 处的导数"。因此求 $f_x(0,1)$ 时可以先令 $y=1$，求 $f_y(0,1)$ 时可以先令 $x=0$，问题立刻变成一元函数求导。</p><p><b>几何直观：</b>当 $y>0$ 时，$\arctan\dfrac{x}{y}$ 就是从 $y$ 轴正向转到点 $(x,y)$ 的角（向 $x$ 正向转为正）。在 $(0,1)$ 处沿径向（$\mathbf{j}$ 方向）移动，角度不变；沿 $\mathbf{i}$ 方向移动，角度增加得最快。所以梯度应当指向 $+\mathbf{i}$。</p>`,
      solution: R`<p><b>第一步：求 $f_x(0,1)$。</b>固定 $y=1$，得一元函数 $f(x,1)=\arctan x$，于是</p>$$f_x(0,1)=\left.\frac{1}{1+x^2}\right|_{x=0}=1.$$<p>也可以先求一般表达式再代入：$f_x=\dfrac{1}{1+\frac{x^2}{y^2}}\cdot\dfrac{1}{y}=\dfrac{y}{x^2+y^2}$，代入 $(0,1)$ 得 $1$。</p><p><b>第二步：求 $f_y(0,1)$。</b>固定 $x=0$，在 $y=1$ 附近 $f(0,y)=\arctan0=0$ 是常数，所以 $f_y(0,1)=0$。一般表达式为 $f_y=\dfrac{1}{1+\frac{x^2}{y^2}}\cdot\left(-\dfrac{x}{y^2}\right)=-\dfrac{x}{x^2+y^2}$，代入得 $0$，两种算法一致。</p><p><b>第三步：写出梯度。</b></p>$$\operatorname{grad}f(0,1)=1\cdot\mathbf{i}+0\cdot\mathbf{j}=\mathbf{i},$$<p><b>选 A</b>。</p><p><b>错误选项分析：</b></p><ul><li>B（$-\mathbf{i}$）：把 $\arctan\dfrac{x}{y}$ 的导数记成了 $\arctan\dfrac{y}{x}$ 的导数。后者 $\dfrac{\partial}{\partial x}\arctan\dfrac{y}{x}=-\dfrac{y}{x^2+y^2}$，符号正好相反。</li><li>C、D（$\pm\mathbf{j}$）：把两个偏导数的位置弄反了。梯度的 $\mathbf{j}$ 分量是 $f_y$，而 $f_y(0,1)=0$，所以梯度不可能有 $\mathbf{j}$ 分量。</li></ul>`,
      pitfalls: R`<p>① 链式法则漏乘内层导数：对 $x$ 求偏导要乘 $\left(\dfrac{x}{y}\right)'_x=\dfrac1y$，对 $y$ 求偏导要乘 $\left(\dfrac{x}{y}\right)'_y=-\dfrac{x}{y^2}$。</p><p>② 混淆 $\arctan\dfrac{x}{y}$ 与 $\arctan\dfrac{y}{x}$，两者的偏导数差一个负号。</p><p>③ 混淆梯度与方向导数：梯度是<b>向量</b>，方向导数是<b>数</b>。题目问梯度，答案应该是向量。</p>`,
      summary: R`<p><b>方法要点：</b>梯度 = 偏导数组成的向量；方向导数 $\dfrac{\partial f}{\partial l}=\operatorname{grad}f\cdot\mathbf{e}_l$；梯度方向是方向导数最大的方向，最大值为 $|\operatorname{grad}f|$。</p><p><b>看到…想到…：</b>看到"求某点处的梯度 / 方向导数 / 方向导数的最大值"，就先求该点的各个偏导数；只要一个点的偏导数时，用"<b>先代后求</b>"往往最快。</p><p><b>常用结果：</b>$\dfrac{\partial}{\partial x}\arctan\dfrac{x}{y}=\dfrac{y}{x^2+y^2}$，$\dfrac{\partial}{\partial y}\arctan\dfrac{x}{y}=-\dfrac{x}{x^2+y^2}$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: atan(x/y) 对 x、y 的偏导在 (0,1) 处分别为 1、0，梯度为 i' },
      flags: ['OCR 原文四个选项的粗体标记不统一（i、-pmb{i}、j、-j），已统一规范为单位向量 \\mathbf{i}、-\\mathbf{i}、\\mathbf{j}、-\\mathbf{j}。']
    },

    /* ───────────────────────── 第3题 ───────────────────────── */
    {
      id: '2008-3', year: 2008, no: '第3题', type: '选择', score: 4,
      stem: R`在下列微分方程中，以 $y=C_1\mathrm{e}^x+C_2\cos2x+C_3\sin2x$（$C_1,C_2,C_3$ 为任意常数）为通解的是`,
      options: [R`$y'''+y''-4y'-4y=0$`, R`$y'''+y''+4y'+4y=0$`, R`$y'''-y''-4y'+4y=0$`, R`$y'''-y''+4y'-4y=0$`],
      answer: 'D',
      figure: null,
      kp: ['ode.const', 'ode.linear'],
      methods: ['由通解反推特征根', '特征方程与微分方程互相翻译', '代入验证'],
      difficulty: 2,
      analysis: R`<p>通解里有三个独立的任意常数，所以对应的是<b>三阶</b>方程；四个选项恰好都是三阶常系数齐次线性方程。</p><p>常系数齐次线性方程有一张"<b>特征根 ↔ 解</b>"的对照表，它的来源很朴素：把 $y=\mathrm{e}^{rx}$ 代入 $y'''+ay''+by'+cy=0$，每求一次导就多一个因子 $r$，得到</p>$$\mathrm{e}^{rx}(r^3+ar^2+br+c)=0,$$<p>而 $\mathrm{e}^{rx}\ne0$，所以"$\mathrm{e}^{rx}$ 是解 ⟺ $r$ 是特征方程 $r^3+ar^2+br+c=0$ 的根"。若 $r=\alpha\pm\beta\mathrm{i}$ 是复根，由欧拉公式 $\mathrm{e}^{(\alpha+\beta\mathrm{i})x}=\mathrm{e}^{\alpha x}(\cos\beta x+\mathrm{i}\sin\beta x)$，其实部和虚部 $\mathrm{e}^{\alpha x}\cos\beta x$、$\mathrm{e}^{\alpha x}\sin\beta x$ 各自都是实值解。</p><p>本题是"反向题"：已知解，倒推特征根，再写出特征方程，最后把 $r^k$ 翻译回 $y^{(k)}$。</p>`,
      solution: R`<p><b>第一步：从通解读出特征根。</b></p><ul><li>$\mathrm{e}^{x}=\mathrm{e}^{1\cdot x}$ 对应实根 $r_1=1$；</li><li>$\cos2x,\ \sin2x$ 即 $\mathrm{e}^{0\cdot x}\cos2x,\ \mathrm{e}^{0\cdot x}\sin2x$，对应 $\alpha=0,\beta=2$ 的共轭复根 $r_{2,3}=\pm2\mathrm{i}$。</li></ul><p><b>第二步：写特征方程。</b>以这三个数为根的三次多项式（首项系数取 1）是</p>$$(r-1)(r-2\mathrm{i})(r+2\mathrm{i})=(r-1)(r^2+4)=r^3-r^2+4r-4.$$<p><b>第三步：翻译回微分方程。</b>$r^3\to y'''$，$r^2\to y''$，$r\to y'$，常数项 $\to y$：</p>$$y'''-y''+4y'-4y=0,$$<p>这正是 D。由于 $\mathrm{e}^x,\cos2x,\sin2x$ 线性无关，按线性方程解的结构定理，三阶齐次方程的通解恰为它们的任意线性组合，与题给形式一致。<b>选 D</b>。</p><p><b>第四步：代入验证（可作检查）。</b>$y=\mathrm{e}^x$：$1-1+4-4=0$ ✓；$y=\cos2x$：$y'=-2\sin2x$，$y''=-4\cos2x$，$y'''=8\sin2x$，代入得 $8\sin2x+4\cos2x-8\sin2x-4\cos2x=0$ ✓。</p><p><b>错误选项分析</b>（把各自的特征多项式分组分解）：</p><ul><li>A：$r^3+r^2-4r-4=r^2(r+1)-4(r+1)=(r+1)(r-2)(r+2)$，通解为 $C_1\mathrm{e}^{-x}+C_2\mathrm{e}^{2x}+C_3\mathrm{e}^{-2x}$。</li><li>B：$r^3+r^2+4r+4=r^2(r+1)+4(r+1)=(r+1)(r^2+4)$，通解为 $C_1\mathrm{e}^{-x}+C_2\cos2x+C_3\sin2x$——只错在 $\mathrm{e}^{-x}$，是最强的干扰项。</li><li>C：$r^3-r^2-4r+4=r^2(r-1)-4(r-1)=(r-1)(r-2)(r+2)$，通解为 $C_1\mathrm{e}^{x}+C_2\mathrm{e}^{2x}+C_3\mathrm{e}^{-2x}$——把 $\pm2\mathrm{i}$ 错当成 $\pm2$。</li></ul>`,
      pitfalls: R`<p>① <b>复根对应的二次因子写错</b>：根 $\pm2\mathrm{i}$ 对应 $r^2+4$；而 $r^2-4$ 对应的是实根 $\pm2$，解是 $\mathrm{e}^{\pm2x}$。</p><p>② <b>根的符号弄反</b>：$\mathrm{e}^{x}$ 对应根 $+1$，因子是 $(r-1)$ 而不是 $(r+1)$，弄反就错选 B。</p><p>③ 展开 $(r-1)(r^2+4)$ 时符号出错。做完后用"代入 $\mathrm{e}^x$"快速检验：系数之和 $1-1+4-4$ 应为 $0$。</p>`,
      summary: R`<p><b>特征根 ↔ 解 对照表：</b></p><table><thead><tr><th>特征根</th><th>通解中对应的项</th></tr></thead><tbody><tr><td>单实根 $r$</td><td>$C\mathrm{e}^{rx}$</td></tr><tr><td>$k$ 重实根 $r$</td><td>$\mathrm{e}^{rx}(C_1+C_2x+\cdots+C_kx^{k-1})$</td></tr><tr><td>共轭复根 $\alpha\pm\beta\mathrm{i}$</td><td>$\mathrm{e}^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$</td></tr></tbody></table><p><b>看到…想到…：</b>看到"已知通解（或几个特解）反求常系数方程"，就走"读根 → 特征多项式 = 各因子之积 → $r^k$ 换成 $y^{(k)}$"三步；选择题还可以把某个特解代入选项快速排除。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 把 C1·e^x+C2·cos2x+C3·sin2x 代入四个选项，只有 D 恒为 0；四个特征多项式分别分解为 (r+1)(r-2)(r+2)、(r+1)(r²+4)、(r-1)(r-2)(r+2)、(r-1)(r²+4)' },
      flags: ['OCR 原文选项 (B) 写作 "y\'\' + y\'\' + 4y\' + 4y = 0"，第一项丢了一撇；四个选项都是三阶方程且与原卷一致，已更正为 y\'\'\' + y\'\' + 4y\' + 4y = 0。', '参考解析在写答案方程时也有同样的笔误（"y\'\' − y\'\' + 4y\' − 4y = 0"），不影响答案 D。']
    },

    /* ───────────────────────── 第4题 ───────────────────────── */
    {
      id: '2008-4', year: 2008, no: '第4题', type: '选择', score: 4,
      stem: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 内单调有界，$\{x_n\}$ 为数列，下列命题正确的是`,
      options: [R`若 $\{x_n\}$ 收敛，则 $\{f(x_n)\}$ 收敛`, R`若 $\{x_n\}$ 单调，则 $\{f(x_n)\}$ 收敛`, R`若 $\{f(x_n)\}$ 收敛，则 $\{x_n\}$ 收敛`, R`若 $\{f(x_n)\}$ 单调，则 $\{x_n\}$ 收敛`],
      answer: 'B',
      figure: null,
      kp: ['lim.rules', 'lim.seqdef', 'lim.cont'],
      methods: ['单调有界准则', '复合单调性（同增异减）', '构造反例排除'],
      difficulty: 3,
      analysis: R`<p>四个选项都是"若……则……"型的抽象命题。处理这类题的基本策略：<b>认为对的，用定理证明；认为错的，举一个满足题设的反例</b>。</p><p>题设"$f$ 单调有界"把"<b>单调有界准则</b>"（单调有界数列必收敛）摆在了明面上。要对数列 $\{f(x_n)\}$ 用这条准则，需要它既有界又单调：</p><ul><li>有界：$f$ 本身有界，所以 $f(x_n)$ 自动有界；</li><li>单调：单调函数作用在单调数列上，结果仍单调——这正是选项 B 给的条件。</li></ul><p>其余选项的漏洞也各有来源：A 的问题在于题目没说 $f$ <b>连续</b>；C、D 的问题在于有界函数会把无穷远处"压扁"成有限值，从 $f(x_n)$ 的信息推不回 $x_n$。</p>`,
      solution: R`<p><b>第一步：证明 B 正确。</b>不妨设 $f$ 单调增加（不减），$\{x_n\}$ 单调增加：由 $x_n\le x_{n+1}$ 得 $f(x_n)\le f(x_{n+1})$，所以 $\{f(x_n)\}$ 单调增加。其余三种组合同理："同向得增，反向得减"，总之 $\{f(x_n)\}$ 单调。又因为 $f$ 有界，存在 $M>0$ 使 $|f(x)|\le M$ 对一切 $x$ 成立，从而 $|f(x_n)|\le M$。单调有界数列必收敛，故 $\{f(x_n)\}$ 收敛。</p><p><b>第二步：A 错，反例。</b>反例的思路是让 $f$ 在 $x_n$ 的极限点处<b>跳跃</b>（单调函数唯一可能的间断就是跳跃间断）。取符号函数</p>$$f(x)=\begin{cases}-1,&x<0,\\0,&x=0,\\1,&x>0,\end{cases}\qquad x_n=\frac{(-1)^n}{n}.$$<p>$f$ 单调不减且有界，$x_n\to0$ 收敛，但 $f(x_n)=(-1)^n$，即 $-1,1,-1,1,\cdots$，发散。若坚持要"严格单调"，可改用 $f(x)=\dfrac{x}{1+|x|}+\mathrm{sgn}\,x$（严格增加、有界），$f(x_n)$ 在 $-1$ 附近和 $1$ 附近来回跳，同样发散。</p><p>补充：如果 $f$ 在极限点处连续，A 就成立了（这正是"连续函数保持数列极限"的海涅定理）。所以 A 错在缺少连续性。</p><p><b>第三步：C 错，反例。</b>取 $f(x)=\arctan x$（单调增加，$|f|<\frac{\pi}{2}$），$x_n=n$。则 $f(x_n)=\arctan n\to\dfrac{\pi}{2}$ 收敛，但 $x_n=n\to+\infty$ 发散。</p><p><b>第四步：D 错，反例。</b>同一个例子：$\arctan n$ 关于 $n$ 单调增加，但 $x_n=n$ 发散。</p><p>综上，<b>选 B</b>。</p>`,
      pitfalls: R`<p>① 默认"$x_n\to x_0\Rightarrow f(x_n)\to f(x_0)$"对任何函数都成立。这要求 $f$ 在 $x_0$ 处连续，单调函数完全可能有跳跃。</p><p>② 证 B 时只说"$f$ 有界，所以 $f(x_n)$ 收敛"。有界推不出收敛，例如 $(-1)^n$；必须同时有单调性。</p><p>③ 举反例时不检查是否满足题设。例如用 $f(x)=x$ 做反例是无效的，因为它在 $(-\infty,+\infty)$ 上无界。</p>`,
      summary: R`<p><b>方法要点：</b>单调有界准则——单调 + 有界 ⇒ 收敛，两个条件缺一不可；复合单调性"同增异减"。</p><p><b>看到…想到…：</b>看到抽象函数与数列的命题判断题，就"对的用定理证，错的找反例"。</p><p><b>常备反例库：</b></p><ul><li>符号函数 $\mathrm{sgn}\,x$：单调、有界，但在 $0$ 处跳跃间断；</li><li>$\arctan x$：单调、有界，$x\to+\infty$ 时有极限（把无穷远"压扁"）；</li><li>$(-1)^n$：有界但不收敛；</li><li>$x_n=n$：单调但发散。</li></ul>`,
      verify: { by: 'manual', ok: true, note: '人工论证：B 由"复合单调 + f 有界 + 单调有界准则"得出；A、C、D 分别用 sgn x 配 x_n=(-1)^n/n、arctan x 配 x_n=n 给出满足题设的反例，并逐一核对反例满足"在 (-∞,+∞) 内单调有界"' },
      flags: []
    },

    /* ───────────────────────── 第9题 ───────────────────────── */
    {
      id: '2008-9', year: 2008, no: '第9题', type: '填空', score: 4,
      stem: R`微分方程 $xy'+y=0$ 满足条件 $y(1)=1$ 的解是 $y=$______.`,
      options: null,
      answer: R`$\dfrac{1}{x}$`,
      figure: null,
      kp: ['ode.first'],
      methods: ['观察凑导数：xy\' + y = (xy)\'', '分离变量法', '一阶线性齐次方程通解公式'],
      difficulty: 1,
      analysis: R`<p>解一阶方程，第一步永远是<b>认类型</b>。$xy'+y=0$ 同时属于好几类：可分离变量（$\dfrac{\mathrm{d}y}{y}=-\dfrac{\mathrm{d}x}{x}$）、一阶线性齐次（$y'+\dfrac1xy=0$）。</p><p>但最漂亮的看法是：左边恰好是乘积 $xy$ 的导数——乘积法则 $(xy)'=x'y+xy'=y+xy'$ 倒过来用。能"看出一个式子是某个东西的全导数"，在解微分方程和计算积分时都是非常有用的眼力。</p>`,
      solution: R`<p><b>第一步：凑成全导数。</b>由乘积法则 $(xy)'=y+xy'$，原方程就是</p>$$(xy)'=0.$$<p><b>第二步：积分。</b>导数恒为零的函数在一个区间上是常数（拉格朗日中值定理的推论），所以 $xy=C$，即 $y=\dfrac{C}{x}$。</p><p><b>第三步：定常数。</b>代入 $y(1)=1$：$1\cdot1=C$，$C=1$。所以</p>$$y=\frac1x.$$<p>初始点 $x=1$ 在区间 $x>0$ 内，所以这个解的定义区间是 $(0,+\infty)$。</p><p><b>第四步：验算。</b>$y=\dfrac1x$，$y'=-\dfrac{1}{x^2}$，$xy'+y=-\dfrac1x+\dfrac1x=0$ ✓；$y(1)=1$ ✓。</p>`,
      pitfalls: R`<p>① 分离变量后积分得 $\ln|y|=-\ln|x|+C_1$，去对数时要写成 $|y|=\dfrac{\mathrm{e}^{C_1}}{|x|}$，再合并成 $y=\dfrac{C}{x}$；直接写成 $y=-x+C$ 之类是把对数运算搞错了。</p><p>② 不要把 $xy'+y$ 和 $xy'-y$ 混淆：$xy'-y=x^2\left(\dfrac{y}{x}\right)'$，对应的是商的导数。</p><p>③ $y=\dfrac1x$ 在 $x=0$ 处无定义，解只在包含初始点 $x=1$ 的区间 $(0,+\infty)$ 上成立。</p>`,
      summary: R`<p><b>方法要点：</b>一阶方程先认类型：可分离、齐次、一阶线性、伯努利、全微分。</p><p><b>常见"凑导数"模板：</b></p><ul><li>$xy'+y=(xy)'$；</li><li>$xy'-y=x^2\left(\dfrac{y}{x}\right)'$；</li><li>$y'+P(x)y=\mathrm{e}^{-\int P\,\mathrm{d}x}\left(y\,\mathrm{e}^{\int P\,\mathrm{d}x}\right)'$（这就是一阶线性方程"积分因子法"的来源）。</li></ul><p><b>看到…想到…：</b>看到"$x\cdot y'+y$"想到 $(xy)'$；看到"$y'+P(x)y$"想到乘积分因子 $\mathrm{e}^{\int P\,\mathrm{d}x}$。</p>`,
      alt: R`<p><b>方法二（分离变量）：</b>$y\ne0$ 时，$\dfrac{\mathrm{d}y}{y}=-\dfrac{\mathrm{d}x}{x}$，两边积分 $\ln|y|=-\ln|x|+C_1$，得 $y=\dfrac{C}{x}$，再由 $y(1)=1$ 得 $C=1$。</p><p><b>方法三（一阶线性公式）：</b>化为 $y'+\dfrac1xy=0$，$P(x)=\dfrac1x$，通解 $y=C\mathrm{e}^{-\int\frac1x\mathrm{d}x}=C\mathrm{e}^{-\ln x}=\dfrac{C}{x}$（$x>0$），同样得 $y=\dfrac1x$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy dsolve(x*y\'+y, ics={y(1):1}) 得 y=1/x' },
      flags: []
    },

    /* ───────────────────────── 第10题 ───────────────────────── */
    {
      id: '2008-10', year: 2008, no: '第10题', type: '填空', score: 4,
      stem: R`曲线 $\sin(xy)+\ln(y-x)=x$ 在点 $(0,1)$ 处的切线方程是______.`,
      options: null,
      answer: R`$y=x+1$`,
      figure: null,
      kp: ['diff.calc', 'diff.def'],
      methods: ['隐函数求导（方程两边对 x 求导）', '先代值再解 y\'', '点斜式写切线方程'],
      difficulty: 2,
      analysis: R`<p>写切线方程只需要两样东西：<b>切点</b>和<b>斜率</b>。切点 $(0,1)$ 已经给出（但要先验证它在曲线上），斜率就是 $y'(0)$。</p><p>曲线由方程隐式给出，$y$ 解不出来，所以用<b>隐函数求导法</b>：把 $y$ 看成 $x$ 的函数 $y(x)$ 代回方程，方程就变成关于 $x$ 的恒等式，恒等式两边的导数相等。求导后直接代入 $x=0,y=1$，解一个一次方程就得到 $y'(0)$，不需要先解出 $y'$ 的一般表达式。</p>`,
      solution: R`<p><b>第一步：验证切点在曲线上。</b>$x=0,y=1$ 时，左边 $\sin0+\ln(1-0)=0$，右边 $x=0$，相等 ✓。</p><p><b>第二步：两边对 $x$ 求导</b>（$y$ 是 $x$ 的函数）。逐项计算：</p><ul><li>$[\sin(xy)]'=\cos(xy)\cdot(xy)'=\cos(xy)\,(y+xy')$（链式法则 + 乘积法则）；</li><li>$[\ln(y-x)]'=\dfrac{(y-x)'}{y-x}=\dfrac{y'-1}{y-x}$；</li><li>右边 $(x)'=1$。</li></ul><p>于是</p>$$\cos(xy)\,(y+xy')+\frac{y'-1}{y-x}=1.$$<p><b>第三步：代值求斜率。</b>代入 $x=0$，$y=1$：</p>$$\cos0\cdot(1+0)+\frac{y'(0)-1}{1}=1\ \Longrightarrow\ 1+y'(0)-1=1\ \Longrightarrow\ y'(0)=1.$$<p>（严格地说，记 $F(x,y)=\sin(xy)+\ln(y-x)-x$，则 $F_y(0,1)=x\cos(xy)+\dfrac{1}{y-x}\Big|_{(0,1)}=1\ne0$，由隐函数存在定理，在 $(0,1)$ 附近确实存在可导的隐函数 $y=y(x)$，上面的求导是合法的。）</p><p><b>第四步：写切线。</b>点斜式 $y-1=1\cdot(x-0)$，即</p>$$y=x+1.$$`,
      pitfalls: R`<p>① 对 $\sin(xy)$ 求导时只写 $\cos(xy)$，或把 $(xy)'$ 写成 $y'$，漏掉乘积法则中的另一项。</p><p>② 对 $\ln(y-x)$ 求导时漏掉 $(y-x)'$ 中的 $-1$。</p><p>③ 用公式 $y'=-\dfrac{F_x}{F_y}$ 时，忘了把右边的 $x$ 移到左边：若取 $F=\sin(xy)+\ln(y-x)$，会得到 $F_x(0,1)=0$，斜率 $0$，切线 $y=1$，错误。</p><p>④ 把切线和法线搞混：法线斜率是 $-\dfrac{1}{y'(0)}$。</p>`,
      summary: R`<p><b>方法要点：</b>隐函数求导三步——两边对 $x$ 求导（$y$ 视为 $x$ 的函数）→ 代入点的坐标 → 解出 $y'$。切线 $y-y_0=y'(x_0)(x-x_0)$，法线 $y-y_0=-\dfrac{1}{y'(x_0)}(x-x_0)$。</p><p><b>看到…想到…：</b>看到"由方程确定的曲线在某点的切线 / 法线"，就用隐函数求导，并且"<b>先代值再解</b>"——只求一点的导数时，没必要解出一般表达式。</p>`,
      alt: R`<p><b>公式法：</b>令 $F(x,y)=\sin(xy)+\ln(y-x)-x$（注意右边的 $x$ 要移过来）。</p>$$F_x=y\cos(xy)-\frac{1}{y-x}-1,\qquad F_y=x\cos(xy)+\frac{1}{y-x}.$$<p>在 $(0,1)$ 处 $F_x=1-1-1=-1$，$F_y=0+1=1$，所以 $y'(0)=-\dfrac{F_x}{F_y}=1$，切线 $y=x+1$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: F=sin(xy)+log(y-x)-x，F(0,1)=0，-F_x/F_y 在 (0,1) 处为 1，切线 y=x+1' },
      flags: ['OCR 原文第(10)题末尾漏掉了填空横线，已补上"______"。']
    },

    /* ───────────────────────── 第11题 ───────────────────────── */
    {
      id: '2008-11', year: 2008, no: '第11题', type: '填空', score: 4,
      stem: R`已知幂级数 $\displaystyle\sum_{n=0}^{\infty}a_n(x+2)^n$ 在 $x=0$ 处收敛，在 $x=-4$ 处发散，则幂级数 $\displaystyle\sum_{n=0}^{\infty}a_n(x-3)^n$ 的收敛域为______.`,
      options: null,
      answer: R`$(1,5]$`,
      figure: null,
      kp: ['series.power'],
      methods: ['阿贝尔定理', '换元化为标准幂级数', '收敛域平移', '端点单独讨论'],
      difficulty: 3,
      analysis: R`<p>两个幂级数的<b>系数 $a_n$ 完全相同</b>，只是展开中心不同（一个是 $-2$，一个是 $3$）。把中心平移到原点，它们都是同一个标准幂级数 $\sum a_nt^n$。所以思路是：</p><ol><li>用 $t=x+2$ 把已知条件翻译成关于 $\sum a_nt^n$ 的信息；</li><li>确定 $\sum a_nt^n$ 的收敛半径和两个端点的敛散性；</li><li>用 $t=x-3$ 翻译回去。</li></ol><p>确定半径的核心工具是<b>阿贝尔定理</b>：若 $\sum a_nt^n$ 在 $t_0$ 处收敛，则在 $|t|<|t_0|$ 内绝对收敛；若在 $t_1$ 处发散，则在 $|t|>|t_1|$ 处都发散。由此可知：<b>收敛点到中心的距离 ≤ R，发散点到中心的距离 ≥ R</b>。</p>`,
      solution: R`<p><b>第一步：换元。</b>令 $t=x+2$，记 $S(t)=\sum\limits_{n=0}^{\infty}a_nt^n$。则 $x=0\leftrightarrow t=2$，$x=-4\leftrightarrow t=-2$。已知条件变为：$S$ 在 $t=2$ 处收敛，在 $t=-2$ 处发散。</p><p><b>第二步：确定收敛半径 $R$。</b></p><ul><li>若 $R<2$，则 $|2|>R$，$t=2$ 在收敛区间之外，级数应发散，与"$t=2$ 处收敛"矛盾，所以 $R\ge2$。</li><li>若 $R>2$，则 $|-2|<R$，$t=-2$ 在收敛区间内部，级数应（绝对）收敛，与"$t=-2$ 处发散"矛盾，所以 $R\le2$。</li></ul><p>故 $R=2$，收敛区间为 $(-2,2)$。</p><p><b>第三步：端点。</b>在收敛区间的端点 $|t|=R$ 处，阿贝尔定理什么也不保证，只能看具体信息。这里恰好已知 $t=2$ 收敛、$t=-2$ 发散，所以 $\sum a_nt^n$ 的收敛域是 $(-2,2]$。</p><p><b>第四步：翻译回目标级数。</b>令 $t=x-3$，$\sum a_n(x-3)^n$ 收敛 ⟺ $-2<x-3\le2$ ⟺ $1<x\le5$。</p><p>所以收敛域为 $(1,5]$。</p><p><b>直观理解：</b>第一个级数的收敛域是 $(-4,0]$（中心 $-2$，半径 $2$，右端点收敛）；第二个级数只是把中心从 $-2$ 挪到 $3$，即整体右移 $5$，收敛域随之平移成 $(1,5]$，端点的开闭也跟着平移。</p><p><b>具体例子检验：</b>取 $a_0=0$，$a_n=\dfrac{(-1)^n}{n\cdot2^n}\ (n\ge1)$，在 $t=2$ 处得交错调和级数 $\sum\dfrac{(-1)^n}{n}$，收敛；在 $t=-2$ 处得调和级数 $\sum\dfrac1n$，发散——满足题设，其收敛域确实是 $(-2,2]$。</p>`,
      pitfalls: R`<p>① 只求出 $R=2$ 就写开区间 $(1,5)$ 或闭区间 $[1,5]$，没有处理端点。</p><p>② <b>端点方向弄反</b>：$x=0$ 对应 $t=+2$（右端点收敛），平移后是 $x=5$ 收敛、$x=1$ 发散；写成 $[1,5)$ 是典型错误。</p><p>③ 距离要从<b>展开中心</b>量起：$x=0$ 到中心 $-2$ 的距离是 $2$，不是 $0$。</p>`,
      summary: R`<p><b>方法要点：</b>阿贝尔定理 ⇒ 幂级数的收敛域是以展开中心为中点的区间（端点另议）；"某点收敛 ⇒ $R\ge$ 该点到中心的距离；某点发散 ⇒ $R\le$ 该点到中心的距离"。若一收一散且两点到中心的距离相等，则 $R$ 恰为此距离，两点就是两个端点。</p><p><b>看到…想到…：</b>看到"系数相同、中心不同"的幂级数，想到收敛域整体平移（端点敛散性随之平移）；看到逐项求导或逐项积分后的级数，想到收敛半径不变，但端点敛散性可能改变，需要重新判断。</p>`,
      verify: { by: 'mixed', ok: true, note: '理论推导（阿贝尔定理）得 R=2、收敛域 (-2,2]，平移得 (1,5]；sympy 用例子 a_n=(-1)^n/(n·2^n) 检验：t=2 处级数和为 -log 2（收敛），t=-2 处为调和级数（发散）' },
      flags: ['OCR 原文第(11)题末尾漏掉了填空横线，已补上"______"。']
    },

    /* ───────────────────────── 第12题 ───────────────────────── */
    {
      id: '2008-12', year: 2008, no: '第12题', type: '填空', score: 4,
      stem: R`设曲面 $\Sigma$ 是 $z=\sqrt{4-x^2-y^2}$ 的上侧，则 $\displaystyle\iint_{\Sigma}xy\,\mathrm{d}y\,\mathrm{d}z+x\,\mathrm{d}z\,\mathrm{d}x+x^2\,\mathrm{d}x\,\mathrm{d}y=$______.`,
      options: null,
      answer: R`$4\pi$`,
      figure: null,
      kp: ['mint.surf2', 'mint.double', 'mint.triple'],
      methods: ['高斯公式 + 补面法', '对称性（奇函数在对称区域上积分为零）', '轮换对称与极坐标'],
      difficulty: 3,
      analysis: R`<p>$\Sigma$ 是半径为 $2$ 的<b>上半球面</b>（没有底，不封闭），取上侧，也就是朝外的一侧。</p><p>直接投影计算的话，$\mathrm{d}y\,\mathrm{d}z$ 和 $\mathrm{d}z\,\mathrm{d}x$ 两项都要把球面切成前后、左右两片，各自定号，比较繁琐。先看看<b>散度</b>：$P=xy$，$Q=x$，$R=x^2$，</p>$$\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=y+0+0=y,$$<p>非常简单，而且上半球体关于 $xOz$ 平面对称、$y$ 是奇函数，三重积分直接为 $0$。这强烈暗示：<b>补一个底面，用高斯公式</b>。补的底面是平面 $z=0$ 上的圆盘，它垂直于 $z$ 轴，在 $yOz$、$zOx$ 面上的投影面积为零，所以只剩 $x^2\,\mathrm{d}x\,\mathrm{d}y$ 一项，很好算。</p>`,
      solution: R`<p><b>第一步：补面使之封闭。</b>取 $\Sigma_0$：$z=0$，$x^2+y^2\le4$，取<b>下侧</b>。$\Sigma$（上侧）与 $\Sigma_0$（下侧）合起来正好是上半球体 $\Omega:\ x^2+y^2+z^2\le4,\ z\ge0$ 的整个边界，并且都取外侧。</p><p><b>第二步：用高斯公式。</b>$P,Q,R$ 在 $\Omega$ 上有连续偏导数，于是</p>$$\iint_{\Sigma+\Sigma_0}xy\,\mathrm{d}y\,\mathrm{d}z+x\,\mathrm{d}z\,\mathrm{d}x+x^2\,\mathrm{d}x\,\mathrm{d}y=\iiint_{\Omega}y\,\mathrm{d}v=0.$$<p>最后一个等号的理由：$\Omega$ 关于 $xOz$ 平面（$y=0$）对称，被积函数 $y$ 关于 $y$ 是奇函数，正负两半相互抵消。</p><p><b>第三步：计算底面上的积分。</b>$\Sigma_0$ 在平面 $z=0$ 内，它在 $yOz$ 面、$zOx$ 面上的投影都是线段，面积为 $0$，所以</p>$$\iint_{\Sigma_0}xy\,\mathrm{d}y\,\mathrm{d}z=\iint_{\Sigma_0}x\,\mathrm{d}z\,\mathrm{d}x=0.$$<p>剩下的 $\iint_{\Sigma_0}x^2\,\mathrm{d}x\,\mathrm{d}y$：$\Sigma_0$ 投影到 $xOy$ 面为圆盘 $D:\ x^2+y^2\le4$，取下侧，所以前面加负号：</p>$$\iint_{\Sigma_0}x^2\,\mathrm{d}x\,\mathrm{d}y=-\iint_Dx^2\,\mathrm{d}x\,\mathrm{d}y.$$<p>由轮换对称性，$\iint_Dx^2=\iint_Dy^2$，所以</p>$$\iint_Dx^2\,\mathrm{d}x\,\mathrm{d}y=\frac12\iint_D(x^2+y^2)\,\mathrm{d}x\,\mathrm{d}y=\frac12\int_0^{2\pi}\mathrm{d}\theta\int_0^2r^2\cdot r\,\mathrm{d}r=\frac12\cdot2\pi\cdot4=4\pi.$$<p>故 $\iint_{\Sigma_0}(\cdots)=-4\pi$。</p><p><b>第四步：相减。</b></p>$$\iint_{\Sigma}(\cdots)=\iint_{\Sigma+\Sigma_0}(\cdots)-\iint_{\Sigma_0}(\cdots)=0-(-4\pi)=4\pi.$$`,
      pitfalls: R`<p>① <b>补面的侧取错</b>：$\Sigma_0$ 必须取下侧，才能和 $\Sigma$ 的上侧一起构成 $\Omega$ 的外侧。取成上侧，符号就全乱了。</p><p>② 用高斯公式得到 $0$ 后忘记减去补面上的积分，直接填 $0$。</p><p>③ 把第一类曲面积分的对称性规则直接套用到第二类曲面积分上。第二类积分还和"侧"有关，例如 $\iint_\Sigma x\,\mathrm{d}z\,\mathrm{d}x$，左右两片曲面的侧在 $y$ 方向上相反，需要重新分析，不能想当然。</p><p>④ 极坐标下面积元是 $r\,\mathrm{d}r\,\mathrm{d}\theta$，漏掉 $r$ 会得到 $\frac{8\pi}{3}$ 一类的错误结果。</p>`,
      summary: R`<p><b>第二类曲面积分三种方法：</b>① 直接投影（分片、看侧定号）；② 高斯公式（封闭曲面，或不封闭时补面）；③ 化为第一类曲面积分，或统一投影到一个坐标面。</p><p><b>看到…想到…：</b>看到"不封闭曲面 + 散度很简单"，想到补平面用高斯公式；补面尽量选垂直于坐标轴的平面，这样另外两项自动为零。看到"区域关于某坐标面对称 + 被积函数关于对应变量为奇函数"，三重积分直接为零。看到圆域上的 $\iint x^2$，用轮换对称化为 $\frac12\iint(x^2+y^2)$。</p>`,
      alt: R`<p><b>化为第一类曲面积分：</b>球面 $x^2+y^2+z^2=4$ 上侧（外侧）的单位法向量为 $\mathbf{n}=\left(\dfrac x2,\dfrac y2,\dfrac z2\right)$，所以</p>$$\iint_\Sigma P\,\mathrm{d}y\,\mathrm{d}z+Q\,\mathrm{d}z\,\mathrm{d}x+R\,\mathrm{d}x\,\mathrm{d}y=\iint_\Sigma\left(\frac{x^2y}{2}+\frac{xy}{2}+\frac{x^2z}{2}\right)\mathrm{d}S.$$<p>这是第一类曲面积分，可以放心用对称性：$\Sigma$ 关于 $xOz$ 面对称，$\dfrac{x^2y}{2}$ 与 $\dfrac{xy}{2}$ 关于 $y$ 是奇函数，积分为 $0$。剩下一项中，上半球面上 $\mathrm{d}S=\dfrac{2}{z}\,\mathrm{d}x\,\mathrm{d}y$，所以</p>$$\iint_\Sigma\frac{x^2z}{2}\,\mathrm{d}S=\iint_D\frac{x^2z}{2}\cdot\frac2z\,\mathrm{d}x\,\mathrm{d}y=\iint_Dx^2\,\mathrm{d}x\,\mathrm{d}y=4\pi.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 用球坐标参数化 r(φ,θ)=(2sinφcosθ,2sinφsinθ,2cosφ)，确认 r_φ×r_θ 的 z 分量 2sin2φ≥0（上侧），F·(r_φ×r_θ) 在 φ∈[0,π/2]、θ∈[0,2π] 上积分得 4π；另验证 ∬_D x² = 4π' },
      flags: []
    },

    /* ───────────────────────── 第15题 ───────────────────────── */
    {
      id: '2008-15', year: 2008, no: '第15题', type: '解答', score: 9,
      stem: R`求极限 $\displaystyle\lim_{x\to0}\frac{[\sin x-\sin(\sin x)]\sin x}{x^4}$.`,
      options: null,
      answer: R`$\dfrac16$`,
      figure: null,
      kp: ['lim.compute', 'lim.inf', 'diff.taylor'],
      methods: ['乘积因子等价无穷小代换', '整体换元 t = sin x', '洛必达法则', '拉格朗日中值定理', '泰勒公式'],
      difficulty: 2,
      analysis: R`<p>这是 $\dfrac00$ 型。拿到这种题不要急着洛必达——分母是 $x^4$，直接求四次导会非常痛苦。先<b>观察结构</b>：分子是"[差] × $\sin x$"。</p><ul><li><b>乘积因子 $\sin x$</b>：在乘除运算中可以放心换成等价无穷小 $x$，于是分母降为 $x^3$。</li><li><b>差 $\sin x-\sin(\sin x)$</b>：形状是"$\square-\sin\square$"，其中 $\square=\sin x$。我们熟知 $t-\sin t\sim\dfrac{t^3}{6}$ 是三阶无穷小，所以自然想到<b>整体换元</b> $t=\sin x$。</li></ul><p>为什么不能把 $\sin(\sin x)$ 直接换成 $\sin x$？因为两项的一阶主部完全相同，一减就抵消了，真正决定极限的是被抵消后剩下的三阶小量。等价代换只保留"主部"，会把这个三阶小量一起扔掉——这就是"<b>加减慎换</b>"的原因。</p>`,
      solution: R`<p><b>第一步：分离乘积因子。</b>$x\to0$ 时分子分母都趋于 $0$。把原式拆成两个因子的乘积：</p>$$\frac{[\sin x-\sin(\sin x)]\sin x}{x^4}=\frac{\sin x-\sin(\sin x)}{x^3}\cdot\frac{\sin x}{x}.$$<p>由于 $\lim\limits_{x\to0}\dfrac{\sin x}{x}=1$，只要第一个因子的极限存在，原式就等于它乘以 $1$（极限的乘法法则）。</p><p><b>第二步：为换元做准备。</b>把分母 $x^3$ 改写成 $\sin^3x$：</p>$$\frac{\sin x-\sin(\sin x)}{x^3}=\frac{\sin x-\sin(\sin x)}{\sin^3x}\cdot\left(\frac{\sin x}{x}\right)^3,$$<p>后一个因子趋于 $1$。</p><p><b>第三步：换元。</b>令 $t=\sin x$。当 $x\to0$ 时 $t\to0$，并且 $0<|x|<\pi$ 时 $t\ne0$，所以</p>$$\lim_{x\to0}\frac{\sin x-\sin(\sin x)}{\sin^3x}=\lim_{t\to0}\frac{t-\sin t}{t^3}.$$<p><b>第四步：算基本极限。</b>这是 $\dfrac00$ 型，分子分母都可导，用洛必达法则：</p>$$\lim_{t\to0}\frac{t-\sin t}{t^3}=\lim_{t\to0}\frac{1-\cos t}{3t^2}=\lim_{t\to0}\frac{\frac12t^2}{3t^2}=\frac16,$$<p>其中用到了 $1-\cos t\sim\dfrac12t^2$（乘除中代换，合法）。</p><p><b>第五步：合并。</b></p>$$\text{原式}=\frac16\cdot1\cdot1=\frac16.$$`,
      pitfalls: R`<p>① <b>加减中乱用等价代换</b>：用 $\sin(\sin x)\sim\sin x$ 或 $\sin x\sim x,\ \sin(\sin x)\sim x$，分子变成 $0$，得出极限为 $0$，完全错误。</p><p>② 一上来就对原式用洛必达，要求四次导数，计算量巨大且极易出错。正确顺序是"先化简、再换元、最后才洛必达"。</p><p>③ 换元时把分母 $x^3$ 直接写成 $t^3$ 却不交代理由。结果虽然对，但要说清是因为 $\dfrac{\sin x}{x}\to1$（即 $t\sim x$）。</p>`,
      summary: R`<p><b>方法要点：</b>求 $\dfrac00$ 型极限的推荐顺序："<b>先化简</b>（分离极限非零的因子、乘积因子等价代换）→ <b>再换元 / 泰勒 / 洛必达</b>"。口诀："<b>乘除可换，加减慎换</b>"。</p><p><b>看到…想到…：</b></p><ul><li>看到 $\square-\sin\square$，想到 $\sim\dfrac{\square^3}{6}$，可以整体换元；</li><li>看到同一个函数在两点的差 $f(a)-f(b)$，想到拉格朗日中值定理（见另解）。</li></ul><p><b>常用三阶差（$x\to0$）：</b>$x-\sin x\sim\dfrac{x^3}{6}$，$\tan x-x\sim\dfrac{x^3}{3}$，$\arcsin x-x\sim\dfrac{x^3}{6}$，$x-\arctan x\sim\dfrac{x^3}{3}$，$\tan x-\sin x\sim\dfrac{x^3}{2}$。</p>`,
      alt: R`<p><b>另解一（拉格朗日中值定理）：</b>分子中的差是同一个函数 $\sin u$ 在 $u=x$ 与 $u=\sin x$ 两点的函数值之差。由拉格朗日中值定理，</p>$$\sin x-\sin(\sin x)=\cos\xi\cdot(x-\sin x),\quad \xi\ \text{介于}\ \sin x\ \text{与}\ x\ \text{之间}.$$<p>$x\to0$ 时 $\xi\to0$（夹逼），$\cos\xi\to1$，所以</p>$$\text{原式}=\lim_{x\to0}\cos\xi\cdot\frac{x-\sin x}{x^3}\cdot\frac{\sin x}{x}=1\cdot\frac16\cdot1=\frac16.$$<p><b>另解二（泰勒公式）：</b>由 $\sin u=u-\dfrac{u^3}{6}+o(u^3)$，取 $u=\sin x$，得 $\sin(\sin x)=\sin x-\dfrac{\sin^3x}{6}+o(\sin^3x)$。因为 $\sin^3x\sim x^3$，所以 $\sin x-\sin(\sin x)=\dfrac{\sin^3x}{6}+o(x^3)$，分子 $=\dfrac{x^4}{6}+o(x^4)$，极限为 $\dfrac16$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy limit 结果 1/6；另验证 (1-cos t)/(3t²)→1/6，以及五个常用三阶差 x-sin x、tan x-x、x-arcsin x、x-arctan x、tan x-sin x 与 x³ 之比的极限分别为 1/6、1/3、-1/6、1/3、1/2' },
      flags: []
    },

    /* ───────────────────────── 第16题 ───────────────────────── */
    {
      id: '2008-16', year: 2008, no: '第16题', type: '解答', score: 9,
      stem: R`计算曲线积分 $\displaystyle\int_L\sin2x\,\mathrm{d}x+2(x^2-1)y\,\mathrm{d}y$，其中 $L$ 是曲线 $y=\sin x$ 上从点 $(0,0)$ 到点 $(\pi,0)$ 的一段.`,
      options: null,
      answer: R`$-\dfrac{\pi^2}{2}$`,
      figure: null,
      kp: ['mint.line2', 'int.defcalc'],
      methods: ['以 x 为参数化为定积分', '分部积分（表格法）', '格林公式 + 补线', '区间再现公式'],
      difficulty: 3,
      analysis: R`<p>第二类曲线积分有两条基本路线：<b>直接参数化化为定积分</b>，或者<b>格林公式</b>（不封闭时补线）。</p><p>先判断能不能"换路径"：$P=\sin2x$，$Q=2(x^2-1)y$，</p>$$\frac{\partial Q}{\partial x}=4xy,\qquad \frac{\partial P}{\partial y}=0,$$<p>两者不相等，积分<b>与路径有关</b>，不能偷懒改走 $x$ 轴。</p><p>再看曲线：$L$ 是显函数 $y=\sin x$ 的图像，以 $x$ 为参数最自然，$\mathrm{d}y=\cos x\,\mathrm{d}x$。代入后会出现 $2\sin x\cos x=\sin2x$，与第一项合并成 $x^2\sin2x$——这是出题人设计好的"巧合"，计算会非常顺。另一条路是补上 $x$ 轴上的线段围成闭区域，用格林公式，$\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}=4xy$ 也很简单。</p><div style="text-align:center"><svg viewBox="0 0 320 150" width="320" height="150" style="max-width:100%;height:auto"><title>曲线 L：y=sin x（0 到 π）与补线 AO 围成的区域 D</title><path d="M30.0,120.0 L36.3,113.7 L42.6,107.5 L48.8,101.3 L55.1,95.3 L61.4,89.4 L67.7,83.7 L74.0,78.2 L80.3,73.0 L86.5,68.0 L92.8,63.4 L99.1,59.2 L105.4,55.3 L111.7,51.8 L118.0,48.7 L124.2,46.1 L130.5,43.9 L136.8,42.2 L143.1,41.0 L149.4,40.2 L155.7,40.0 L161.9,40.2 L168.2,41.0 L174.5,42.2 L180.8,43.9 L187.1,46.1 L193.4,48.7 L199.6,51.8 L205.9,55.3 L212.2,59.2 L218.5,63.4 L224.8,68.0 L231.1,73.0 L237.3,78.2 L243.6,83.7 L249.9,89.4 L256.2,95.3 L262.5,101.3 L268.8,107.5 L275.0,113.7 L281.3,120.0 Z" fill="currentColor" fill-opacity="0.12" stroke="none"/><line x1="10" y1="120" x2="310" y2="120" stroke="currentColor" stroke-width="1"/><line x1="30" y1="142" x2="30" y2="15" stroke="currentColor" stroke-width="1"/><path d="M30.0,120.0 L36.3,113.7 L42.6,107.5 L48.8,101.3 L55.1,95.3 L61.4,89.4 L67.7,83.7 L74.0,78.2 L80.3,73.0 L86.5,68.0 L92.8,63.4 L99.1,59.2 L105.4,55.3 L111.7,51.8 L118.0,48.7 L124.2,46.1 L130.5,43.9 L136.8,42.2 L143.1,41.0 L149.4,40.2 L155.7,40.0 L161.9,40.2 L168.2,41.0 L174.5,42.2 L180.8,43.9 L187.1,46.1 L193.4,48.7 L199.6,51.8 L205.9,55.3 L212.2,59.2 L218.5,63.4 L224.8,68.0 L231.1,73.0 L237.3,78.2 L243.6,83.7 L249.9,89.4 L256.2,95.3 L262.5,101.3 L268.8,107.5 L275.0,113.7 L281.3,120.0" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="150,35 161,40 150,45" fill="currentColor"/><line x1="30" y1="120" x2="281.3" y2="120" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/><polygon points="161,114 150,120 161,126" fill="currentColor"/><text x="16" y="136" font-size="12" fill="currentColor">O</text><text x="262" y="137" font-size="12" fill="currentColor">A(π,0)</text><text x="196" y="34" font-size="12" fill="currentColor">L：y=sin x</text><text x="146" y="96" font-size="14" fill="currentColor">D</text><text x="120" y="140" font-size="11" fill="currentColor">补线 AO</text><text x="304" y="114" font-size="12" fill="currentColor">x</text><text x="36" y="22" font-size="12" fill="currentColor">y</text></svg></div>`,
      solution: R`<p><b>第一步：参数化。</b>$L$：$y=\sin x$，$x$ 从 $0$（起点）变到 $\pi$（终点）。第二类曲线积分化定积分时，<b>下限对应起点、上限对应终点</b>，这里恰好是从 $0$ 积到 $\pi$。此时 $\mathrm{d}y=\cos x\,\mathrm{d}x$。</p><p><b>第二步：代入并化简被积函数。</b></p>$$I=\int_0^{\pi}\left[\sin2x+2(x^2-1)\sin x\cdot\cos x\right]\mathrm{d}x.$$<p>利用 $2\sin x\cos x=\sin2x$，第二项 $=(x^2-1)\sin2x$，与第一项合并：</p>$$\sin2x+(x^2-1)\sin2x=x^2\sin2x,\qquad I=\int_0^{\pi}x^2\sin2x\,\mathrm{d}x.$$<p><b>第三步：分部积分（两次）。</b>多项式 × 三角函数，让多项式求导降次：</p>$$\int x^2\sin2x\,\mathrm{d}x=-\frac{x^2}{2}\cos2x+\int x\cos2x\,\mathrm{d}x,$$$$\int x\cos2x\,\mathrm{d}x=\frac{x}{2}\sin2x-\int\frac12\sin2x\,\mathrm{d}x=\frac x2\sin2x+\frac14\cos2x.$$<p>所以一个原函数是</p>$$\Phi(x)=-\frac{x^2}{2}\cos2x+\frac{x}{2}\sin2x+\frac14\cos2x.$$<p>（求导检验：$\Phi'(x)=-x\cos2x+x^2\sin2x+\frac12\sin2x+x\cos2x-\frac12\sin2x=x^2\sin2x$ ✓。）</p><p><b>第四步：代上下限。</b>$\cos2\pi=1$，$\sin2\pi=0$：</p>$$I=\Phi(\pi)-\Phi(0)=\left(-\frac{\pi^2}{2}+0+\frac14\right)-\left(0+0+\frac14\right)=-\frac{\pi^2}{2}.$$<p>（用"表格法"可以一步写出原函数：对 $x^2$ 逐次求导得 $x^2,\ 2x,\ 2,\ 0$；对 $\sin2x$ 逐次积分得 $-\frac12\cos2x,\ -\frac14\sin2x,\ \frac18\cos2x$；交错相乘、符号依次为 $+,-,+$，正好得到 $\Phi(x)$。）</p>`,
      pitfalls: R`<p>① <b>格林公式的方向</b>：$L$ 是从左到右走在区域上方，补线 $AO$ 从右到左走在下方，闭路是<b>顺时针</b>（负向），格林公式前要加负号；忘了就得到 $+\dfrac{\pi^2}{2}$。</p><p>② 补线后忘记减去补线上的积分（本题补线上积分恰好为 $0$，但必须算出来交代）。</p><p>③ 直接法中把 $\mathrm{d}y$ 当成 $\mathrm{d}x$，漏乘 $\cos x$。</p><p>④ 误以为积分与路径无关，改走 $x$ 轴得到 $0$。判断路径无关前一定要先比较 $\dfrac{\partial Q}{\partial x}$ 和 $\dfrac{\partial P}{\partial y}$。</p>`,
      summary: R`<p><b>第二类曲线积分的决策流程：</b></p><ol><li>先算 $\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}$：若为 $0$（且区域单连通），积分与路径无关，可换简单路径或求原函数；</li><li>不为 $0$ 但形式简单：补线围成闭曲线，用格林公式，注意<b>方向</b>和<b>补线上的积分</b>；</li><li>曲线有简单参数方程：直接化为定积分，下限对应起点。</li></ol><p><b>看到…想到…：</b>看到"沿 $y=f(x)$ 从 $x=a$ 到 $x=b$"，想到以 $x$ 为参数，$\mathrm{d}y=f'(x)\,\mathrm{d}x$；看到 $\int_0^{\pi}xf(\sin x)\,\mathrm{d}x$，想到区间再现：$=\dfrac{\pi}{2}\int_0^{\pi}f(\sin x)\,\mathrm{d}x$；看到"多项式 × 三角/指数"的积分，想到分部积分（表格法）。</p>`,
      alt: R`<p><b>另解（格林公式 + 补线）：</b>补线段 $\overline{AO}$：从 $A(\pi,0)$ 沿 $x$ 轴到 $O(0,0)$。$L+\overline{AO}$ 围成区域 $D=\{(x,y)\mid0\le x\le\pi,\ 0\le y\le\sin x\}$，方向为顺时针（负向），所以</p>$$\oint_{L+\overline{AO}}P\,\mathrm{d}x+Q\,\mathrm{d}y=-\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}\sigma=-\iint_D4xy\,\mathrm{d}\sigma.$$<p>计算二重积分（先对 $y$ 后对 $x$）：</p>$$\iint_D4xy\,\mathrm{d}\sigma=\int_0^{\pi}4x\,\mathrm{d}x\int_0^{\sin x}y\,\mathrm{d}y=\int_0^{\pi}2x\sin^2x\,\mathrm{d}x.$$<p>用区间再现（令 $x=\pi-u$ 可证 $\int_0^{\pi}xf(\sin x)\,\mathrm{d}x=\frac{\pi}{2}\int_0^{\pi}f(\sin x)\,\mathrm{d}x$）：</p>$$\int_0^{\pi}2x\sin^2x\,\mathrm{d}x=2\cdot\frac{\pi}{2}\int_0^{\pi}\sin^2x\,\mathrm{d}x=\pi\cdot\frac{\pi}{2}=\frac{\pi^2}{2}.$$<p>所以闭路积分 $=-\dfrac{\pi^2}{2}$。在 $\overline{AO}$ 上 $y=0$，$\mathrm{d}y=0$，$\int_{\overline{AO}}=\int_{\pi}^{0}\sin2x\,\mathrm{d}x=\left[-\frac12\cos2x\right]_{\pi}^{0}=0$。故</p>$$\int_L=\oint_{L+\overline{AO}}-\int_{\overline{AO}}=-\frac{\pi^2}{2}-0=-\frac{\pi^2}{2}.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy: ∫_0^π [sin2x+2(x²-1)sin x cos x]dx = -π²/2；原函数 Φ 求导检验为 x²sin2x；格林法 -∬_D 4xy dσ = -π²/2，补线积分 ∫ sin2x dx = 0，两法一致' },
      flags: []
    },

    /* ───────────────────────── 第17题 ───────────────────────── */
    {
      id: '2008-17', year: 2008, no: '第17题', type: '解答', score: 11,
      stem: R`已知曲线 $C:\ \begin{cases}x^2+y^2-2z^2=0,\\x+y+3z=5,\end{cases}$ 求曲线 $C$ 上距离 $xOy$ 面最远的点和最近的点.`,
      options: null,
      answer: R`最远点 $(-5,-5,5)$（距离 $5$），最近点 $(1,1,1)$（距离 $1$）`,
      figure: null,
      kp: ['mdiff.extreme', 'vec.surface'],
      methods: ['拉格朗日乘数法（两个约束条件）', '目标函数平方化（用 z² 代替 |z|）', '利用对称性解方程组', '不等式放缩降为一元问题'],
      difficulty: 3,
      analysis: R`<p><b>先建模：</b>点 $(x,y,z)$ 到 $xOy$ 面（即平面 $z=0$）的距离是 $|z|$。所以题目是一个<b>条件最值</b>问题：在两个约束（圆锥面 $x^2+y^2=2z^2$ 与平面 $x+y+3z=5$）下，求 $|z|$ 的最大值和最小值。</p><p><b>两个小处理：</b></p><ul><li>$|z|$ 在 $z=0$ 处不可导，不方便求偏导。由于 $|z|\ge0$ 时，$|z|$ 越大 $z^2$ 越大，两者最值点相同，所以改用 $z^2$ 作目标函数。</li><li>两个约束，就设两个拉格朗日乘子 $\lambda,\mu$。</li></ul><p><b>几何图像：</b>圆锥面 $x^2+y^2=2z^2$ 以原点为顶点、$z$ 轴为轴；平面 $x+y+3z=5$ 斜着切过上半个锥面，截出一条椭圆。椭圆是有界闭曲线，连续函数在上面一定能取到最大值和最小值，而最值点必在拉格朗日方程组的解中——这保证了"求出驻点、比较函数值"的做法是对的。另外，两个约束关于 $x,y$ 对称（交换 $x,y$ 不变），可以预期最值点落在 $x=y$ 上。</p>`,
      solution: R`<p><b>第一步：建立目标函数与约束。</b>设 $P(x,y,z)\in C$，到 $xOy$ 面的距离 $d=|z|$。求 $d$ 的最值等价于求 $z^2$ 的最值。约束为 $x^2+y^2-2z^2=0$，$x+y+3z-5=0$。</p><p><b>第二步：构造拉格朗日函数并求偏导。</b></p>$$L(x,y,z,\lambda,\mu)=z^2+\lambda(x^2+y^2-2z^2)+\mu(x+y+3z-5).$$$$\begin{cases}L_x=2\lambda x+\mu=0,&(1)\\L_y=2\lambda y+\mu=0,&(2)\\L_z=2z-4\lambda z+3\mu=0,&(3)\\x^2+y^2-2z^2=0,&(4)\\x+y+3z=5.&(5)\end{cases}$$<p><b>第三步：解方程组。</b>$(1)-(2)$ 得 $2\lambda(x-y)=0$，所以 $\lambda=0$ 或 $x=y$。</p><ul><li>若 $\lambda=0$：由 (1) 得 $\mu=0$，再由 (3) 得 $2z=0$，$z=0$；代入 (4) 得 $x^2+y^2=0$，$x=y=0$；但这不满足 (5)（$0\ne5$），矛盾。所以 $\lambda\ne0$。</li><li>因此 $x=y$。代入 (4)：$2x^2=2z^2$，$x=z$ 或 $x=-z$。<ul><li>$x=y=z$：代入 (5) 得 $5z=5$，$z=1$，得点 $(1,1,1)$；</li><li>$x=y=-z$：代入 (5) 得 $-2z+3z=5$，$z=5$，得点 $(-5,-5,5)$。</li></ul></li></ul><p>（对应的乘子分别为 $\lambda=\frac15,\mu=-\frac25$ 和 $\lambda=-1,\mu=-10$，可代回 (1)(3) 检验。）</p><p><b>第四步：说明最值存在。</b>由 (5) 得 $x+y=5-3z$；又 $(x-y)^2\ge0$ 推出 $x^2+y^2\ge\dfrac{(x+y)^2}{2}$，结合 (4)：</p>$$2z^2\ge\frac{(5-3z)^2}{2}\iff(2z)^2-(5-3z)^2\ge0\iff(5z-5)(5-z)\ge0\iff1\le z\le5.$$<p>所以 $C$ 上 $1\le z\le5$，再由 $x^2+y^2=2z^2\le50$ 知 $C$ 是有界闭集（两个连续方程的公共零点集）。连续函数 $z^2$ 在有界闭集上必取得最大值和最小值，且最值点只能在上面两个候选点中。（严格起见还可验证：两约束的梯度 $(2x,2y,-4z)$ 与 $(1,1,3)$ 只在原点平行，而原点不在 $C$ 上，故拉格朗日乘数法在 $C$ 上处处适用。）</p><p><b>第五步：比较。</b>在 $(1,1,1)$ 处 $d=1$，在 $(-5,-5,5)$ 处 $d=5$。所以</p><p>最远点为 $(-5,-5,5)$，距离 $5$；最近点为 $(1,1,1)$，距离 $1$。</p>`,
      pitfalls: R`<p>① 直接对 $|z|$ 或 $\sqrt{z^2}$ 求偏导，既麻烦又有不可导点；应改用 $z^2$。</p><p>② 不讨论 $\lambda=0$ 就把 (1)(2) 相除得 $x=y$。本题结果不受影响，但推理不完整，阅卷会扣分。</p><p>③ 由 $x^2=z^2$ 只取 $x=z$，漏掉 $x=-z$，结果只找到一个点，"最远点"就丢了。</p><p>④ 求出两个驻点后不比较、不说明最值存在，就直接断言"一个是最大一个是最小"。</p><p>⑤ 把"到 $xOy$ 面的距离"误写成到原点的距离 $\sqrt{x^2+y^2+z^2}$。</p>`,
      summary: R`<p><b>条件最值的标准流程：</b>确定目标函数（距离用平方）→ 写拉格朗日函数（几个约束就几个乘子）→ 解方程组（常用技巧：两式相减或相除、利用对称性，注意乘子为 $0$ 的情形）→ 比较候选点的函数值，并说明最值存在（有界闭集上的连续函数）。</p><p><b>看到…想到…：</b></p><ul><li>看到"曲线 / 曲面上到某平面、直线或点最远最近"，想到"距离平方 + 拉格朗日乘数法"；</li><li>看到约束关于 $x,y$ 对称，想到驻点常在 $x=y$ 上；</li><li>约束能方便地消元时，也可以直接化为一元问题，或像另解那样用不等式求出变量的取值范围。</li></ul>`,
      alt: R`<p><b>另解（不等式直接求 $z$ 的范围）：</b>由平面方程 $x+y=5-3z$，由锥面方程 $x^2+y^2=2z^2$。因为 $(x-y)^2\ge0$，所以 $2(x^2+y^2)\ge(x+y)^2$，即</p>$$4z^2\ge(5-3z)^2\iff(2z-5+3z)(2z+5-3z)\ge0\iff(5z-5)(5-z)\ge0\iff1\le z\le5,$$<p>等号成立当且仅当 $x=y$。反过来，对 $[1,5]$ 中的每个 $z$，关于 $x$ 的二次方程 $x^2+(5-3z-x)^2=2z^2$ 的判别式非负，都能找到对应的实点，所以 $C$ 上 $z$ 恰好取遍 $[1,5]$。</p><ul><li>$z=1$ 时 $x=y$，$2x=5-3=2$，得 $(1,1,1)$，距离 $1$，最近；</li><li>$z=5$ 时 $x=y$，$2x=5-15=-10$，得 $(-5,-5,5)$，距离 $5$，最远。</li></ul><p>这个方法把三元条件最值问题降成了"求一个变量的取值范围"，思路最直接，也顺带说明了最值的存在性。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy solve 拉格朗日方程组，只得到 (1,1,1)（λ=1/5, μ=-2/5）与 (-5,-5,5)（λ=-1, μ=-10）两组解；另把 y=5-3z-x 代入锥面方程，关于 x 的判别式为 -20(z-1)(z-5)，非负当且仅当 1≤z≤5，与不等式解法一致' },
      flags: []
    },

    /* ───────────────────────── 第18题 ───────────────────────── */
    {
      id: '2008-18', year: 2008, no: '第18题', type: '解答', score: 10,
      stem: R`设 $f(x)$ 是连续函数，<br>（Ⅰ）利用定义证明函数 $F(x)=\displaystyle\int_0^xf(t)\,\mathrm{d}t$ 可导，且 $F'(x)=f(x)$；<br>（Ⅱ）当 $f(x)$ 是以 $2$ 为周期的周期函数时，证明 $G(x)=2\displaystyle\int_0^xf(t)\,\mathrm{d}t-x\int_0^2f(t)\,\mathrm{d}t$ 也是以 $2$ 为周期的周期函数.`,
      options: null,
      answer: R`<p>（Ⅰ）$F'(x)=\lim\limits_{\Delta x\to0}\dfrac{1}{\Delta x}\displaystyle\int_x^{x+\Delta x}f(t)\,\mathrm{d}t=\lim\limits_{\Delta x\to0}f(\xi)=f(x)$（积分中值定理 + $f$ 的连续性）。</p><p>（Ⅱ）$G(x+2)-G(x)=2\displaystyle\int_x^{x+2}f(t)\,\mathrm{d}t-2\int_0^2f(t)\,\mathrm{d}t=0$（周期函数在任一长为一个周期的区间上积分相等）。</p>`,
      figure: null,
      kp: ['int.ftc', 'int.def', 'int.defcalc'],
      methods: ['导数定义', '积分区间可加性', '积分中值定理', '周期函数积分的平移不变性', '构造差函数求导证明为常数'],
      difficulty: 3,
      analysis: R`<p><b>（Ⅰ）</b>"利用定义"指的是<b>导数的定义</b>：</p>$$F'(x)=\lim_{\Delta x\to0}\frac{F(x+\Delta x)-F(x)}{\Delta x}.$$<p>这一问就是让你重现教材上"积分上限函数求导定理"的证明——考的是"定理是怎么来的"，所以绝对不能引用 $F'(x)=f(x)$ 这个待证结论。</p><p>思路：增量 $F(x+\Delta x)-F(x)$ 用区间可加性化成 $\int_x^{x+\Delta x}f(t)\,\mathrm{d}t$，几何上是一个宽为 $\Delta x$ 的窄条面积，约等于"高 $f(x)$ × 宽 $\Delta x$"。要把"约等于"变成严格的等式，用<b>积分中值定理</b>：窄条面积恰好等于 $f(\xi)\Delta x$，$\xi$ 夹在 $x$ 和 $x+\Delta x$ 之间；$\Delta x\to0$ 时 $\xi\to x$，再由连续性得 $f(\xi)\to f(x)$。</p><p><b>（Ⅱ）</b>证明 $G$ 以 $2$ 为周期，就是证明对一切 $x$ 都有 $G(x+2)=G(x)$。把 $G(x+2)$ 写出来，用区间可加性把 $\int_0^{x+2}$ 拆成 $\int_0^x+\int_x^{x+2}$，问题就归结为一个引理：<b>周期函数在任何一个长度为一个周期的区间上的积分都相等</b>，即 $\int_x^{x+2}f=\int_0^2f$。这个引理正好可以用（Ⅰ）的结论（求导为零）来证——（Ⅰ）是为（Ⅱ）铺路的。</p><p><b>直观理解：</b>记 $A=\frac12\int_0^2f(t)\,\mathrm{d}t$ 为 $f$ 在一个周期上的平均值，则</p>$$G(x)=2\left[\int_0^xf(t)\,\mathrm{d}t-Ax\right]=2\int_0^x\big[f(t)-A\big]\,\mathrm{d}t.$$<p>$f-A$ 在每个周期上的"净面积"为零，所以从 $0$ 积到 $x$ 的累积量不会一个周期一个周期地往上涨，而是周而复始——$G$ 就是从 $\int_0^xf$ 中扣掉"线性增长趋势"后剩下的周期部分。</p>`,
      solution: R`<p><b>（Ⅰ）</b></p><p><b>第一步：写出增量。</b>任取 $x$ 和 $\Delta x\ne0$，由积分对区间的可加性，</p>$$F(x+\Delta x)-F(x)=\int_0^{x+\Delta x}f(t)\,\mathrm{d}t-\int_0^xf(t)\,\mathrm{d}t=\int_x^{x+\Delta x}f(t)\,\mathrm{d}t.$$<p>（有了 $\int_a^b=-\int_b^a$ 的约定，可加性对 $\Delta x>0$ 和 $\Delta x<0$ 都成立。）</p><p><b>第二步：积分中值定理。</b>$f$ 在以 $x$、$x+\Delta x$ 为端点的闭区间上连续，由积分中值定理，存在介于 $x$ 与 $x+\Delta x$ 之间的 $\xi$，使</p>$$\int_x^{x+\Delta x}f(t)\,\mathrm{d}t=f(\xi)\,\Delta x.$$<p>（$\Delta x<0$ 时：左边 $=-\int_{x+\Delta x}^{x}f(t)\,\mathrm{d}t=-f(\xi)\cdot(-\Delta x)=f(\xi)\Delta x$，等式同样成立。）</p><p><b>第三步：取极限。</b>于是 $\dfrac{F(x+\Delta x)-F(x)}{\Delta x}=f(\xi)$。由于 $|\xi-x|\le|\Delta x|$，当 $\Delta x\to0$ 时 $\xi\to x$（夹逼）；又 $f$ 在 $x$ 处连续，所以 $f(\xi)\to f(x)$。因此</p>$$F'(x)=\lim_{\Delta x\to0}\frac{F(x+\Delta x)-F(x)}{\Delta x}=\lim_{\Delta x\to0}f(\xi)=f(x).$$<p>由 $x$ 的任意性，$F$ 处处可导且 $F'(x)=f(x)$。</p><p><b>（Ⅱ）</b></p><p><b>第一步：引理——对任意 $x$，$\displaystyle\int_x^{x+2}f(t)\,\mathrm{d}t=\int_0^2f(t)\,\mathrm{d}t$。</b></p><p>令 $\Phi(x)=\int_x^{x+2}f(t)\,\mathrm{d}t=F(x+2)-F(x)$。由（Ⅰ）及链式法则，</p>$$\Phi'(x)=F'(x+2)\cdot1-F'(x)=f(x+2)-f(x)=0,$$<p>最后一步用到了 $f$ 以 $2$ 为周期。导数恒为零，所以 $\Phi$ 是常数，$\Phi(x)=\Phi(0)=\int_0^2f(t)\,\mathrm{d}t$。</p><p><b>第二步：计算 $G(x+2)$。</b></p>$$\begin{aligned}G(x+2)&=2\int_0^{x+2}f(t)\,\mathrm{d}t-(x+2)\int_0^2f(t)\,\mathrm{d}t\\&=2\int_0^{x}f(t)\,\mathrm{d}t+2\int_x^{x+2}f(t)\,\mathrm{d}t-x\int_0^2f(t)\,\mathrm{d}t-2\int_0^2f(t)\,\mathrm{d}t\\&=G(x)+2\left[\int_x^{x+2}f(t)\,\mathrm{d}t-\int_0^2f(t)\,\mathrm{d}t\right].\end{aligned}$$<p><b>第三步：用引理。</b>方括号内为 $0$，所以对一切 $x$ 有 $G(x+2)=G(x)$，即 $G(x)$ 是以 $2$ 为周期的周期函数。</p>`,
      pitfalls: R`<p>① （Ⅰ）题目明确要求"利用定义"，直接写"由变上限积分求导公式 $F'(x)=f(x)$"是循环论证，得不到分。</p><p>② 用积分中值定理后写"$\xi\to x$，所以 $f(\xi)\to f(x)$"，却不交代依据（$f$ 连续）；或者把 $\xi$ 当成 $\Delta x$ 的连续函数——$\xi$ 不一定唯一，真正起作用的是 $|\xi-x|\le|\Delta x|$ 这个夹逼关系。</p><p>③ 只讨论 $\Delta x>0$（只证了右导数），没有说明 $\Delta x<0$ 的情形。</p><p>④ （Ⅱ）中把 $\int_x^{x+2}f$ 直接写成 $\int_0^2f$ 而不加证明。这一步恰是本题的核心之一，必须给出理由。</p><p>⑤ 误以为 $F(x)=\int_0^xf(t)\,\mathrm{d}t$ 本身就是周期函数。一般不是：例如 $f\equiv1$ 时 $F(x)=x$。只有当 $\int_0^2f=0$ 时 $F$ 才以 $2$ 为周期。</p>`,
      summary: R`<p><b>方法要点：</b>积分上限函数求导定理的证明 = <b>区间可加性 + 积分中值定理 + 连续性</b>，三步必须会默写。</p><p><b>周期函数的积分性质</b>（$f$ 连续、以 $T$ 为周期）：</p><ul><li>$\int_a^{a+T}f(x)\,\mathrm{d}x=\int_0^Tf(x)\,\mathrm{d}x$ 对任意 $a$ 成立；</li><li>$\int_0^xf(t)\,\mathrm{d}t$ 以 $T$ 为周期 ⟺ $\int_0^Tf(t)\,\mathrm{d}t=0$；</li><li>一般地，$\int_0^xf(t)\,\mathrm{d}t-\dfrac{x}{T}\int_0^Tf(t)\,\mathrm{d}t$ 以 $T$ 为周期（本题的 $G$ 就是它的 $2$ 倍）。</li></ul><p><b>看到…想到…：</b>看到"证明 $G$ 以 $T$ 为周期"，想到证 $G(x+T)-G(x)\equiv0$——要么直接化简，要么求导为零再代一个特殊点；看到"利用定义证明可导"，就老老实实写出差商求极限，不能引用待证结论。</p>`,
      alt: R`<p><b>（Ⅰ）的另一种写法（不用积分中值定理，直接 ε-δ）：</b>因为 $\dfrac{1}{\Delta x}\int_x^{x+\Delta x}f(x)\,\mathrm{d}t=f(x)$，所以</p>$$\left|\frac{F(x+\Delta x)-F(x)}{\Delta x}-f(x)\right|=\left|\frac{1}{\Delta x}\int_x^{x+\Delta x}\big[f(t)-f(x)\big]\,\mathrm{d}t\right|\le\max_{|t-x|\le|\Delta x|}|f(t)-f(x)|.$$<p>由 $f$ 在 $x$ 处连续，对任给 $\varepsilon>0$，存在 $\delta>0$，当 $|t-x|<\delta$ 时 $|f(t)-f(x)|<\varepsilon$；于是 $0<|\Delta x|<\delta$ 时上式 $\le\varepsilon$，即差商的极限为 $f(x)$。</p><p><b>（Ⅱ）的另一种写法（求导法）：</b>令 $H(x)=G(x+2)-G(x)$。由（Ⅰ），$G'(x)=2f(x)-\int_0^2f(t)\,\mathrm{d}t$，所以</p>$$H'(x)=G'(x+2)-G'(x)=2f(x+2)-2f(x)=0,$$<p>$H$ 为常数。又 $H(0)=G(2)-G(0)=\left[2\int_0^2f-2\int_0^2f\right]-0=0$，故 $H(x)\equiv0$，即 $G(x+2)=G(x)$。</p>`,
      verify: { by: 'mixed', ok: true, note: '证明题，人工逐步核对（积分中值定理对 Δx<0 同样成立、引理由 Φ\'=0 得出）；另用 sympy 取以 2 为周期的连续函数 f(t)=1+sin(πt)+cos²(πt)，验证 G(x+2)-G(x) 化简为 0' },
      flags: []
    },

    /* ───────────────────────── 第19题 ───────────────────────── */
    {
      id: '2008-19', year: 2008, no: '第19题', type: '解答', score: 11,
      stem: R`将函数 $f(x)=1-x^2\ (0\leqslant x\leqslant\pi)$ 展开成余弦级数，并求 $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n^2}$ 的和.`,
      options: null,
      answer: R`$1-x^2=1-\dfrac{\pi^2}{3}+\displaystyle\sum_{n=1}^{\infty}\frac{4(-1)^{n+1}}{n^2}\cos nx\ \ (0\leqslant x\leqslant\pi)$；$\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n^2}=\frac{\pi^2}{12}$`,
      figure: null,
      kp: ['series.fourier', 'series.sum'],
      methods: ['偶延拓求余弦级数', '分部积分求傅里叶系数', '狄利克雷收敛定理', '代特殊点求数项级数的和'],
      difficulty: 3,
      analysis: R`<p><b>"展开成余弦级数"是什么意思？</b>$f$ 只定义在 $[0,\pi]$ 上。先把它<b>偶延拓</b>到 $[-\pi,\pi]$（令 $f(-x)=f(x)$），再以 $2\pi$ 为周期延拓到整条数轴。延拓后的函数是偶函数，所以正弦系数 $b_n$ 全为零，只剩余弦项——这就是"余弦级数"。</p><p><b>系数公式从哪来？</b>三角函数系 $1,\cos x,\sin x,\cos2x,\sin2x,\cdots$ 在 $[-\pi,\pi]$ 上两两正交（任意两个不同函数的乘积积分为零）。在展开式两边同乘 $\cos nx$ 再积分，其余各项全部消失，只剩 $a_n$ 那一项，于是 $a_n=\dfrac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,\mathrm{d}x$；对偶函数，这等于 $\dfrac2\pi\int_0^{\pi}f(x)\cos nx\,\mathrm{d}x$。</p><p><b>第二问怎么联系上？</b>求出的系数是 $\dfrac{4(-1)^{n+1}}{n^2}$，和要求的 $\dfrac{(-1)^{n-1}}{n^2}$ 只差常数倍 $4$；而 $\cos nx$ 在 $x=0$ 处全等于 $1$。所以只要在展开式中代入 $x=0$。代点之前必须用<b>狄利克雷收敛定理</b>确认级数在该点确实收敛到 $f(0)$。</p>`,
      solution: R`<p><b>第一步：偶延拓。</b>把 $f$ 偶延拓到 $[-\pi,\pi]$——恰好就是 $1-x^2$ 本身（它本来就是偶函数），再以 $2\pi$ 为周期延拓。于是 $b_n=0\ (n=1,2,\cdots)$。</p><p><b>第二步：求 $a_0$。</b></p>$$a_0=\frac2\pi\int_0^{\pi}(1-x^2)\,\mathrm{d}x=\frac2\pi\left(\pi-\frac{\pi^3}{3}\right)=2-\frac{2\pi^2}{3},$$<p>常数项为 $\dfrac{a_0}{2}=1-\dfrac{\pi^2}{3}$。</p><p><b>第三步：求 $a_n\ (n\ge1)$。</b></p>$$a_n=\frac2\pi\int_0^{\pi}(1-x^2)\cos nx\,\mathrm{d}x=\frac2\pi\int_0^{\pi}\cos nx\,\mathrm{d}x-\frac2\pi\int_0^{\pi}x^2\cos nx\,\mathrm{d}x.$$<p>第一项 $=\dfrac2\pi\left[\dfrac{\sin nx}{n}\right]_0^{\pi}=0$。第二项中的积分记为 $J_n$，分部积分两次（用到 $\sin n\pi=0$，$\cos n\pi=(-1)^n$）：</p>$$J_n=\int_0^{\pi}x^2\cos nx\,\mathrm{d}x=\left[\frac{x^2\sin nx}{n}\right]_0^{\pi}-\frac2n\int_0^{\pi}x\sin nx\,\mathrm{d}x=-\frac2n\int_0^{\pi}x\sin nx\,\mathrm{d}x,$$$$\int_0^{\pi}x\sin nx\,\mathrm{d}x=\left[-\frac{x\cos nx}{n}\right]_0^{\pi}+\frac1n\int_0^{\pi}\cos nx\,\mathrm{d}x=-\frac{\pi(-1)^n}{n}+0.$$<p>所以 $J_n=-\dfrac2n\cdot\left(-\dfrac{\pi(-1)^n}{n}\right)=\dfrac{2\pi(-1)^n}{n^2}$，从而</p>$$a_n=-\frac2\pi\cdot\frac{2\pi(-1)^n}{n^2}=-\frac{4(-1)^n}{n^2}=\frac{4(-1)^{n+1}}{n^2}.$$<p><b>第四步：判断收敛到什么。</b>延拓后的函数在 $(-\pi,\pi)$ 内连续；在 $x=\pm\pi$ 处，$f(\pi-0)=1-\pi^2=f(-\pi+0)$，左右两边接得上，所以周期延拓后的函数在整条数轴上连续，并且分段单调。由狄利克雷收敛定理，余弦级数处处收敛到延拓后的函数。于是</p>$$1-x^2=1-\frac{\pi^2}{3}+\sum_{n=1}^{\infty}\frac{4(-1)^{n+1}}{n^2}\cos nx,\qquad0\le x\le\pi.$$<p><b>第五步：代 $x=0$ 求和。</b>$\cos0=1$，得</p>$$1=1-\frac{\pi^2}{3}+4\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2}\ \Longrightarrow\ \sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2}=\frac{\pi^2}{12}.$$<p>因为 $(-1)^{n-1}=(-1)^{n+1}$，所以 $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n^2}=\frac{\pi^2}{12}$。</p><p><b>顺带的收获：</b>代 $x=\pi$，$\cos n\pi=(-1)^n$，得 $1-\pi^2=1-\dfrac{\pi^2}{3}-4\sum\dfrac{1}{n^2}$，即 $\sum\limits_{n=1}^{\infty}\dfrac1{n^2}=\dfrac{\pi^2}{6}$；两式相加除以 $2$，又得 $\sum\limits_{n=1}^{\infty}\dfrac{1}{(2n-1)^2}=\dfrac{\pi^2}{8}$。</p>`,
      pitfalls: R`<p>① 系数公式混用：$\dfrac1\pi\int_{-\pi}^{\pi}$ 和 $\dfrac2\pi\int_0^{\pi}$ 是一回事（偶函数），但不能写成 $\dfrac1\pi\int_0^{\pi}$，否则系数差一半。</p><p>② 常数项是 $\dfrac{a_0}{2}$ 而不是 $a_0$，写成 $2-\dfrac{2\pi^2}{3}$ 会导致求和结果出错。</p><p>③ 分部积分时 $\sin n\pi=0$、$\cos n\pi=(-1)^n$ 记错，或符号丢失。</p><p>④ 不用狄利克雷定理说明收敛情况就直接写等号。若延拓后在某点间断，级数在该点收敛到左右极限的平均值而不是 $f(x)$，代这个点求和就会出错。</p><p>⑤ 混淆余弦级数（偶延拓，$b_n=0$）和正弦级数（奇延拓，$a_n=0$）。</p>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>余弦级数 = 偶延拓：$b_n=0$，$a_n=\dfrac2\pi\int_0^{\pi}f(x)\cos nx\,\mathrm{d}x$；</li><li>正弦级数 = 奇延拓：$a_n=0$，$b_n=\dfrac2\pi\int_0^{\pi}f(x)\sin nx\,\mathrm{d}x$；</li><li>狄利克雷定理：连续点收敛到 $f(x)$，间断点收敛到 $\dfrac{f(x-0)+f(x+0)}{2}$，端点 $\pm\pi$ 处收敛到 $\dfrac{f(-\pi+0)+f(\pi-0)}{2}$。</li></ul><p><b>看到…想到…：</b>看到"展开成傅里叶级数 + 求某数项级数的和"，想到求出展开式后代特殊点（常用 $0$、$\pi$、$\dfrac{\pi}{2}$），让 $\cos nx$ 变成 $1$、$(-1)^n$ 或 $0$。$x^2$ 型函数的展开可以同时得到 $\sum\dfrac1{n^2}=\dfrac{\pi^2}{6}$、$\sum\dfrac{(-1)^{n-1}}{n^2}=\dfrac{\pi^2}{12}$、$\sum\dfrac{1}{(2n-1)^2}=\dfrac{\pi^2}{8}$ 这一组经典结果。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: a0=2-2π²/3，∫_0^π x²cos nx dx = 2π(-1)^n/n²，a_n=-4(-1)^n/n²；summation((-1)^(n-1)/n²)=π²/12，Σ1/n²=π²/6，Σ1/(2n-1)²=π²/8；数值检验 x=0.7 处取 20000 项部分和 ≈0.509999999，与 1-0.49=0.51 吻合' },
      flags: []
    }
  ];
});
