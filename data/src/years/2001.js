// 2001 年数学一 · 高等数学部分（共 12 题：一(1)(2)(3)、二(1)(2)(3)、三、四、五、六、七、八）
// 一(4)(5)、二(4)(5)、九、十、十一、十二 属于线性代数与概率统计，不收录。
registerYear(2001, function (R) {
  // 二(1) 选项示意图的公共部分：坐标轴与标注
  var AX = '<line x1="5" y1="65" x2="131" y2="65" stroke="currentColor" stroke-width="1"/>' +
    '<polygon points="136,65 128,61.5 128,68.5" fill="currentColor"/>' +
    '<line x1="55" y1="106" x2="55" y2="11" stroke="currentColor" stroke-width="1"/>' +
    '<polygon points="55,4 51.5,12 58.5,12" fill="currentColor"/>' +
    '<text x="130" y="80" font-size="11" fill="currentColor" font-style="italic">x</text>' +
    '<text x="61" y="13" font-size="11" fill="currentColor" font-style="italic">y</text>' +
    '<text x="43" y="78" font-size="11" fill="currentColor" font-style="italic">O</text>';
  var SVG0 = '<br><svg width="140" height="110" viewBox="0 0 140 110" role="img">';
  var CURVE = ' fill="none" stroke="currentColor" stroke-width="1.8"/>';
  // 左段：L1 有负值并穿过 x 轴；L2 始终为正
  var L1 = '<path d="M5 92 C 28 86, 42 60, 50 8"' + CURVE;
  var L2 = '<path d="M5 56 C 30 52, 44 40, 50 8"' + CURVE;
  // 右段：R1 从负无穷上升、形成正峰、与 x 轴相切后上升；R2 从正无穷下降、先正后负再正
  var R1 = '<path d="M59 104 C 61 60, 66 35, 74 35 C 82 35, 86 65, 96 65 C 106 65, 118 50, 130 22"' + CURVE;
  var R2 = '<path d="M59 8 C 63 50, 74 80, 92 82 C 108 84, 120 62, 130 24"' + CURVE;

  return [
    /* ───────────────────────── 一(1) ───────────────────────── */
    {
      id: '2001-1-1', year: 2001, no: '一(1)', type: '填空', score: 3,
      stem: R`设 $y=\mathrm{e}^{x}(C_1\sin x+C_2\cos x)$（$C_1,C_2$ 为任意常数）为某二阶常系数齐次线性微分方程的通解，则该方程为 $\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$y''-2y'+2y=0$`,
      figure: null,
      kp: ['ode.const', 'ode.linear'],
      methods: ['由通解反推特征根', '韦达定理写特征方程'],
      difficulty: 1,
      analysis: R`<p>这是一道"由通解反求方程"的逆向题。二阶常系数齐次线性方程 $y''+py'+qy=0$ 的通解长什么样，<b>完全由特征方程 $r^2+pr+q=0$ 的两个根决定</b>：</p><ul><li>两个不等实根 $r_1\ne r_2$：$y=C_1\mathrm{e}^{r_1x}+C_2\mathrm{e}^{r_2x}$；</li><li>二重根 $r$：$y=(C_1+C_2x)\mathrm{e}^{rx}$；</li><li>共轭复根 $\alpha\pm\beta\mathrm{i}$：$y=\mathrm{e}^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$。</li></ul><p>为什么特征根能决定一切？把试探解 $y=\mathrm{e}^{rx}$ 代入方程，得 $\mathrm{e}^{rx}(r^2+pr+q)=0$，而 $\mathrm{e}^{rx}\ne0$，所以"$\mathrm{e}^{rx}$ 是解"$\iff$"$r$ 是特征根"。复根时用欧拉公式 $\mathrm{e}^{(\alpha+\beta\mathrm{i})x}=\mathrm{e}^{\alpha x}(\cos\beta x+\mathrm{i}\sin\beta x)$，它的实部和虚部各自也是解，这就是第三种形式的来历。</p><p>题目给的通解恰好是第三种形状，所以思路是：<b>从通解里"读出" $\alpha,\beta$ → 写出特征根 → 写出特征方程 → 还原微分方程</b>。</p>`,
      solution: R`<p><b>第一步：读出特征根。</b>把 $y=\mathrm{e}^{x}(C_1\sin x+C_2\cos x)$ 与标准形式 $\mathrm{e}^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$ 对照：指数因子 $\mathrm{e}^{x}$ 说明 $\alpha=1$；三角函数是 $\sin x,\cos x$，说明 $\beta=1$（$C_1,C_2$ 谁乘 $\sin$ 谁乘 $\cos$ 无关紧要，因为它们都是任意常数）。所以特征根为</p>$$r_{1,2}=1\pm\mathrm{i}.$$<p><b>第二步：写出特征方程。</b>以 $r_1,r_2$ 为根的首一二次方程是 $(r-r_1)(r-r_2)=0$，即</p>$$(r-1-\mathrm{i})(r-1+\mathrm{i})=(r-1)^2-\mathrm{i}^2=(r-1)^2+1=r^2-2r+2=0.$$<p>也可以用韦达定理：$r_1+r_2=2$，$r_1r_2=(1+\mathrm{i})(1-\mathrm{i})=1-\mathrm{i}^2=2$，所以特征方程为 $r^2-(r_1+r_2)r+r_1r_2=r^2-2r+2=0$。</p><p><b>第三步：还原微分方程。</b>特征方程中 $r^2,r^1,r^0$ 分别对应 $y'',y',y$，所以所求方程为</p>$$y''-2y'+2y=0.$$<p><b>第四步：代回检验（养成习惯）。</b>记 $u=C_1\sin x+C_2\cos x$，注意 $u''=-u$。由 $y=\mathrm{e}^xu$ 得 $y'=\mathrm{e}^x(u+u')$，$y''=\mathrm{e}^x(u+2u'+u'')=\mathrm{e}^x\cdot2u'$。于是</p>$$y''-2y'+2y=\mathrm{e}^x\big[2u'-2(u+u')+2u\big]=0,$$<p>检验通过。</p>`,
      pitfalls: R`<ul><li><b>韦达定理符号写反</b>：特征方程是 $r^2-(r_1+r_2)r+r_1r_2=0$，一次项系数是"负的两根之和"，写成 $r^2+2r+2=0$ 就错了（那对应的根是 $-1\pm\mathrm{i}$，通解里应是 $\mathrm{e}^{-x}$）。</li><li><b>忽略指数因子</b>：只看到 $\sin x,\cos x$ 就以为根是 $\pm\mathrm{i}$，写出 $y''+y=0$，漏掉了 $\mathrm{e}^{x}$ 带来的实部 $\alpha=1$。</li><li>题目说的是<b>齐次</b>方程，答案右端是 $0$，不要画蛇添足加自由项，也不要漏写"$=0$"。</li></ul>`,
      summary: R`<p><b>方法要点</b>：常系数齐次线性方程"通解 ⟷ 特征根 ⟷ 特征方程 ⟷ 方程"四者一一对应。逆向题就是倒着走：读根 → 韦达定理写特征方程 $r^2-(r_1+r_2)r+r_1r_2=0$ → 把 $r^k$ 换成 $y^{(k)}$。</p><p><b>题型识别</b>：看到通解中出现 $\mathrm{e}^{\alpha x}\cos\beta x$、$\mathrm{e}^{\alpha x}\sin\beta x$，想到共轭复根 $\alpha\pm\beta\mathrm{i}$；看到 $x\mathrm{e}^{rx}$，想到二重根 $r$；看到几个不同的 $\mathrm{e}^{r_kx}$，想到不同实根。若给的是非齐次方程的通解，先把它拆成"齐次通解 + 一个特解"再分别处理。</p>`,
      alt: R`<p><b>消去任意常数法（不依赖公式记忆）。</b>通解含两个任意常数，求导两次后联立消去 $C_1,C_2$ 即得方程。记 $u=C_1\sin x+C_2\cos x$，则 $u''=-u$。由 $y=\mathrm{e}^xu$：$y'=\mathrm{e}^x(u+u')$，$y''=\mathrm{e}^x(u+2u'+u'')=2\mathrm{e}^xu'$。由前两式得 $\mathrm{e}^xu'=y'-y$，代入第三式得 $y''=2(y'-y)$，即 $y''-2y'+2y=0$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：把 y=e^x(C1 sin x+C2 cos x) 代入 y\'\'-2y\'+2y 化简为 0；dsolve(y\'\'-2y\'+2y=0) 得通解 (C1 sin x+C2 cos x)e^x，与题设一致' },
      flags: ['OCR 中"(C_1, C_2 为任意常数）"的括号与公式定界符混排，已整理为（$C_1,C_2$ 为任意常数）；原卷此处为填空横线']
    },

    /* ───────────────────────── 一(2) ───────────────────────── */
    {
      id: '2001-1-2', year: 2001, no: '一(2)', type: '填空', score: 3,
      stem: R`设 $r=\sqrt{x^2+y^2+z^2}$，则 $\operatorname{div}(\mathbf{grad}\,r)\big|_{(1,-2,2)}=\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$\dfrac23$`,
      figure: null,
      kp: ['mint.field', 'mdiff.dir'],
      methods: ['梯度的定义', '散度的定义', '轮换对称性'],
      difficulty: 2,
      analysis: R`<p>这题考两个场论概念的定义及其复合：</p><ul><li><b>梯度</b>作用在数量函数 $u$ 上，得到向量场：$\mathbf{grad}\,u=\left(\dfrac{\partial u}{\partial x},\dfrac{\partial u}{\partial y},\dfrac{\partial u}{\partial z}\right)$；</li><li><b>散度</b>作用在向量场 $(P,Q,R)$ 上，得到数量：$\operatorname{div}(P,Q,R)=\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}$。</li></ul><p>所以 $\operatorname{div}(\mathbf{grad}\,u)=u_{xx}+u_{yy}+u_{zz}$，也就是三个纯二阶偏导之和（物理上叫拉普拉斯算子 $\Delta u$）。</p><p>计算上的关键观察：$r$ 对 $x,y,z$ 是<b>轮换对称</b>的（把 $x,y,z$ 互换，$r$ 不变），因此只要认真算出 $\dfrac{\partial^2 r}{\partial x^2}$，另外两个把 $x$ 换成 $y,z$ 即可，不必重复计算。</p>`,
      solution: R`<p><b>第一步：求梯度。</b>由复合函数求导，</p>$$\frac{\partial r}{\partial x}=\frac{1}{2\sqrt{x^2+y^2+z^2}}\cdot2x=\frac{x}{r},$$<p>同理 $\dfrac{\partial r}{\partial y}=\dfrac{y}{r}$，$\dfrac{\partial r}{\partial z}=\dfrac{z}{r}$。所以</p>$$\mathbf{grad}\,r=\left(\frac{x}{r},\frac{y}{r},\frac{z}{r}\right).$$<p>它的模长是 $\dfrac{\sqrt{x^2+y^2+z^2}}{r}=1$，方向是从原点指向该点——这是"沿半径向外的单位向量"，和直觉一致：离原点的距离 $r$ 沿径向增长最快，增长率为 $1$。</p><p><b>第二步：求散度。</b>对第一个分量关于 $x$ 求偏导，注意 $r$ 也依赖 $x$，要用商的求导法则：</p>$$\frac{\partial}{\partial x}\left(\frac{x}{r}\right)=\frac{1\cdot r-x\cdot\dfrac{\partial r}{\partial x}}{r^2}=\frac{r-\dfrac{x^2}{r}}{r^2}=\frac{r^2-x^2}{r^3}.$$<p>由轮换对称，$\dfrac{\partial}{\partial y}\left(\dfrac{y}{r}\right)=\dfrac{r^2-y^2}{r^3}$，$\dfrac{\partial}{\partial z}\left(\dfrac{z}{r}\right)=\dfrac{r^2-z^2}{r^3}$。三者相加：</p>$$\operatorname{div}(\mathbf{grad}\,r)=\frac{3r^2-(x^2+y^2+z^2)}{r^3}=\frac{3r^2-r^2}{r^3}=\frac{2}{r}.$$<p><b>第三步：代入点。</b>在 $(1,-2,2)$ 处 $r=\sqrt{1+4+4}=3$，所以</p>$$\operatorname{div}(\mathbf{grad}\,r)\big|_{(1,-2,2)}=\frac23.$$`,
      pitfalls: R`<ul><li>求 $\dfrac{\partial}{\partial x}\left(\dfrac{x}{r}\right)$ 时把 $r$ 当成常数，得到 $\dfrac1r$，最后算出 $\dfrac3r=1$。$r$ 是 $x,y,z$ 的函数，必须用商法则。</li><li>代点时 $(-2)^2$ 写成 $-4$，算出 $r=\sqrt{-2}$ 之类的错误。</li><li>把散度的结果写成向量。散度是<b>数量</b>，梯度才是向量。</li></ul>`,
      summary: R`<p><b>方法要点</b>：$\operatorname{div}(\mathbf{grad}\,u)=u_{xx}+u_{yy}+u_{zz}$。处理 $r=\sqrt{x^2+y^2+z^2}$ 的两个常用结论要熟记：$\dfrac{\partial r}{\partial x}=\dfrac{x}{r}$；三维中 $\Delta r=\dfrac2r$，$\Delta\dfrac1r=0$（$r\ne0$）。</p><p><b>题型识别</b>：看到含 $r=\sqrt{x^2+y^2+z^2}$ 的偏导数计算，想到 $\dfrac{\partial r}{\partial x}=\dfrac xr$ 和轮换对称——算一个、抄两个。看到 $\mathbf{grad}$、$\operatorname{div}$、$\mathbf{rot}$ 的复合，先把每个算子的定义一字不差写出来再算。</p>`,
      alt: R`<p><b>第一性原理：散度 = 单位体积的净流出量。</b>$\mathbf{grad}\,r$ 是沿半径向外的单位向量场，在半径为 $\rho$ 的球面上，它处处与外法向一致、模为 $1$，所以穿过这个球面的通量就是球面面积 $4\pi\rho^2$。取半径在 $\rho$ 与 $\rho+\mathrm{d}\rho$ 之间的薄球壳：净流出 $\approx4\pi(\rho+\mathrm{d}\rho)^2-4\pi\rho^2\approx8\pi\rho\,\mathrm{d}\rho$，体积 $\approx4\pi\rho^2\,\mathrm{d}\rho$，两者之比为 $\dfrac{2}{\rho}$。由对称性散度只依赖 $r$，于是 $\operatorname{div}(\mathbf{grad}\,r)=\dfrac2r$，与计算结果一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：r 的三个纯二阶偏导之和化简为 2/sqrt(x²+y²+z²)，代入 (1,-2,2) 得 2/3' },
      flags: []
    },

    /* ───────────────────────── 一(3) ───────────────────────── */
    {
      id: '2001-1-3', year: 2001, no: '一(3)', type: '填空', score: 3,
      stem: R`交换二次积分的积分次序：$\displaystyle\int_{-1}^{0}\mathrm{d}y\int_{2}^{1-y}f(x,y)\,\mathrm{d}x=\underline{\qquad\qquad}$.`,
      options: null,
      answer: R`$\displaystyle-\int_{1}^{2}\mathrm{d}x\int_{1-x}^{0}f(x,y)\,\mathrm{d}y$（也可写成 $\displaystyle\int_{1}^{2}\mathrm{d}x\int_{0}^{1-x}f(x,y)\,\mathrm{d}y$）`,
      figure: null,
      kp: ['mint.double'],
      methods: ['画积分区域', '交换积分次序', '处理上限小于下限'],
      difficulty: 2,
      analysis: R`<p>交换积分次序的标准流程是：<b>由累次积分的上下限写出区域 $D$ 的不等式 → 画出 $D$ → 用另一个方向的"穿线法"重新描述 $D$</b>。</p><p>但本题藏着一个陷阱：内层积分是"从 $2$ 积到 $1-y$"，而当 $y\in[-1,0]$ 时 $1-y\in[1,2]$，也就是<b>上限不超过下限</b>。累次积分之所以能对应一个区域上的二重积分，是因为内层积分"从小积到大"时，每一小块面积元 $\mathrm{d}x\,\mathrm{d}y$ 都是正的。上下限颠倒时，积分值要差一个负号，所以必须先把上下限调过来、提出负号，再去画区域。</p>`,
      solution: R`<p><b>第一步：先把内层上下限调整为"下小上大"。</b>当 $-1\le y\le0$ 时 $1\le1-y\le2$，所以</p>$$\int_{-1}^{0}\mathrm{d}y\int_{2}^{1-y}f(x,y)\,\mathrm{d}x=-\int_{-1}^{0}\mathrm{d}y\int_{1-y}^{2}f(x,y)\,\mathrm{d}x.$$<p><b>第二步：写出并画出区域。</b>右端对应的区域是</p>$$D=\{(x,y)\mid -1\le y\le0,\ 1-y\le x\le2\}.$$<p>它的左边界是直线 $x=1-y$（即 $x+y=1$），右边界是直线 $x=2$，上边界是 $y=0$；$y=-1$ 时 $1-y=2$，左右边界交于一点。所以 $D$ 是以 $(1,0),(2,0),(2,-1)$ 为顶点的三角形：</p><div><svg width="190" height="125" viewBox="0 0 190 125" role="img"><line x1="8" y1="45" x2="176" y2="45" stroke="currentColor" stroke-width="1"/><polygon points="182,45 174,41.5 174,48.5" fill="currentColor"/><line x1="35" y1="120" x2="35" y2="10" stroke="currentColor" stroke-width="1"/><polygon points="35,4 31.5,12 38.5,12" fill="currentColor"/><polygon points="85,45 135,45 135,95" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5"/><line x1="65" y1="25" x2="150" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="35" y1="95" x2="135" y2="95" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3"/><line x1="112" y1="112" x2="112" y2="34" stroke="currentColor" stroke-width="1"/><polygon points="112,28 108.5,36 115.5,36" fill="currentColor"/><text x="178" y="58" font-size="11" fill="currentColor" font-style="italic">x</text><text x="40" y="12" font-size="11" fill="currentColor" font-style="italic">y</text><text x="24" y="57" font-size="11" fill="currentColor" font-style="italic">O</text><text x="80" y="38" font-size="10" fill="currentColor">1</text><text x="131" y="38" font-size="10" fill="currentColor">2</text><text x="14" y="99" font-size="10" fill="currentColor">−1</text><text x="110" y="80" font-size="10" fill="currentColor" text-anchor="end">x+y=1</text><text x="140" y="74" font-size="10" fill="currentColor">x=2</text></svg></div><p><b>第三步：换成"先 $y$ 后 $x$"。</b>$D$ 中 $x$ 的取值范围是 $[1,2]$。固定 $x\in[1,2]$，作一条自下而上的竖直线穿过 $D$（图中带箭头的线）：它从斜边 $x+y=1$ 即 $y=1-x$ 进入 $D$，从上边 $y=0$ 穿出。所以</p>$$D=\{(x,y)\mid 1\le x\le2,\ 1-x\le y\le0\}.$$<p><b>第四步：写出结果。</b></p>$$\int_{-1}^{0}\mathrm{d}y\int_{2}^{1-y}f(x,y)\,\mathrm{d}x=-\int_{1}^{2}\mathrm{d}x\int_{1-x}^{0}f(x,y)\,\mathrm{d}y=\int_{1}^{2}\mathrm{d}x\int_{0}^{1-x}f(x,y)\,\mathrm{d}y.$$<p>最后一个等号是把内层上下限对调、负号吸收掉，两种写法都对。</p>`,
      pitfalls: R`<ul><li><b>最常见的错误：没注意上限小于下限</b>，直接按"$2\le x\le1-y$"去理解（这根本不是一个区域），或者照着画图后写出 $\int_1^2\mathrm{d}x\int_{1-x}^{0}f\,\mathrm{d}y$，<b>少了一个负号</b>。</li><li>把 $y$ 的下限写成 $-1$：$y=-1$ 只是三角形的一个顶点处的值，对一般的 $x$，竖线是从斜边 $y=1-x$ 进入的。</li><li>不画图凭感觉换限。交换次序题一定要画图，图画对了，限就不会错。</li></ul>`,
      summary: R`<p><b>方法要点</b>：交换次序三步走——写区域不等式、画图、穿线法定新限。动手之前先检查每一层积分是否"下限 $\le$ 上限"，不是的话先提负号。</p><p><b>题型识别</b>：看到"交换积分次序"或者内层积分"积不出来"（如 $\int\mathrm{e}^{-y^2}\mathrm{d}y$、$\int\frac{\sin x}{x}\mathrm{d}x$），就想到画区域换次序；看到内层上下限的大小关系不明显时，随手代一个值（如本题 $y=-\tfrac12$ 时下限 $2$、上限 $1.5$）就能发现陷阱。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：取检验函数 f=x·y²+e^x·y+x³，原累次积分与答案的两种写法数值完全相同（差化简为 0，值约 −1.6238）' },
      flags: []
    },

    /* ───────────────────────── 二(1) ───────────────────────── */
    {
      id: '2001-2-1', year: 2001, no: '二(1)', type: '选择', score: 3,
      stem: R`设函数 $f(x)$ 在定义域内可导，$y=f(x)$ 的图形如右图所示，则导函数 $y=f'(x)$ 的图形为（ ）`,
      options: [
        R`$x<0$ 段：曲线自下而上穿过 $x$ 轴（先负后正），$x\to0^-$ 时趋于 $+\infty$；$x>0$ 段：从 $-\infty$ 上升，穿过 $x$ 轴后形成一个正的峰，再下降与 $x$ 轴相切于一点，然后上升。` + SVG0 + AX + L1 + R1 + '</svg>',
        R`$x<0$ 段：曲线始终在 $x$ 轴上方，单调上升，$x\to0^-$ 时趋于 $+\infty$；$x>0$ 段：与 (A) 的 $x>0$ 段相同（从 $-\infty$ 上升穿过 $x$ 轴，形成正峰，再与 $x$ 轴相切后上升）。` + SVG0 + AX + L2 + R1 + '</svg>',
        R`$x<0$ 段：与 (A) 的 $x<0$ 段相同（先负后正，穿过 $x$ 轴）；$x>0$ 段：从 $+\infty$ 下降，穿过 $x$ 轴变为负值，到达最低点后回升，再次穿过 $x$ 轴变为正值。` + SVG0 + AX + L1 + R2 + '</svg>',
        R`$x<0$ 段：与 (B) 的 $x<0$ 段相同（始终为正，单调上升趋于 $+\infty$）；$x>0$ 段：与 (C) 的 $x>0$ 段相同（从 $+\infty$ 下降，先正、后负、再正，两次穿过 $x$ 轴）。` + SVG0 + AX + L2 + R2 + '</svg>'
      ],
      answer: 'D',
      figure: {
        file: 'papers/images/2001年考研数学(一)真题/d204f4c9b94d3f324ee2c005bdd513e59c0816c5c59d5b7dd1b731021727da3f.jpg',
        desc: R`$y=f(x)$ 的图形（$f$ 在 $x=0$ 处无定义，$y$ 轴是铅直渐近线）。$x<0$ 部分：曲线单调上升，从左下方（函数值为负）上升并穿过 $x$ 轴，$x\to0^-$ 时 $f(x)\to+\infty$。$x>0$ 部分：$x\to0^+$ 时 $f(x)\to-\infty$；曲线先单调上升并穿过 $x$ 轴，到达一个极大值点（极大值为正），然后单调下降到一个极小值点（极小值略低于 $x$ 轴），之后单调上升趋于 $+\infty$。四个选项是导函数的四幅候选图，见各选项的文字描述与示意图。`
      },
      kp: ['diff.mono', 'diff.def'],
      methods: ['由单调性判断导数符号', '排除法'],
      difficulty: 2,
      analysis: R`<p>由 $f$ 的图选 $f'$ 的图，核心只有一条联系：<b>$f'$ 的正负 ⟷ $f$ 的升降</b>；$f'$ 的零点 ⟷ $f$ 的水平切线点（本题就是极值点）。</p><p>所以不要试图"把 $f'$ 的图精确画出来"，而是从 $f$ 的图上读出单调区间，翻译成 $f'$ 的<b>符号表</b>，再拿符号表去和选项一一对照、排除。这样做又快又不会被图形"长得像"所迷惑。</p>`,
      solution: R`<p><b>第一步：读出 $f$ 的单调性。</b></p><ul><li>$x<0$：曲线一路上升，所以 $f$ 在 $(-\infty,0)$ 上单调增加，$f'(x)\ge0$；而且越靠近 $y$ 轴越陡，$x\to0^-$ 时 $f'(x)\to+\infty$。</li><li>$x>0$：设极大值点为 $a$、极小值点为 $b$（$0<a<b$）。$f$ 在 $(0,a)$ 上升、在 $(a,b)$ 下降、在 $(b,+\infty)$ 上升。</li></ul><p><b>第二步：翻译成 $f'$ 的符号表。</b></p><table><thead><tr><th>区间</th><th>$(-\infty,0)$</th><th>$(0,a)$</th><th>$a$</th><th>$(a,b)$</th><th>$b$</th><th>$(b,+\infty)$</th></tr></thead><tbody><tr><td>$f$</td><td>↗</td><td>↗</td><td>极大</td><td>↘</td><td>极小</td><td>↗</td></tr><tr><td>$f'$</td><td>$+$</td><td>$+$</td><td>$0$</td><td>$-$</td><td>$0$</td><td>$+$</td></tr></tbody></table><p>也就是说：$f'$ 在 $x<0$ 时恒正；在 $x>0$ 时"正、负、正"，并且<b>穿过</b> $x$ 轴两次（变号）。</p><p><b>第三步：逐个检查选项。</b></p><ul><li>(A)：$x<0$ 段有负值，意味着 $f$ 在左半边某处下降，与图矛盾；$x>0$ 段在 $0^+$ 附近为负，也矛盾。✗</li><li>(B)：$x<0$ 段正确；但 $x>0$ 段在 $0^+$ 附近为负，意味着 $f$ 在 $0$ 的右侧先下降，而图中 $f$ 在那里是上升的；并且它的第二个零点处只是"碰一下" $x$ 轴而不变号，对应的不是极值点。✗</li><li>(C)：$x>0$ 段正确，但 $x<0$ 段有负值，与 $f$ 在左半边单调增加矛盾。✗</li><li>(D)：$x<0$ 段恒正；$x>0$ 段先正、后负、再正，两次变号，完全吻合。✓</li></ul><p>故选 <b>D</b>。</p><p>附带说明：(A)(B) 的 $x>0$ 段形状和 $f$ 本身的形状几乎一样，这是故意设置的迷惑项——它在考你是否把"$f$ 的图"和"$f'$ 的图"混为一谈。</p>`,
      pitfalls: R`<ul><li>把 $f$ 的零点（与 $x$ 轴的交点）当成 $f'$ 的零点。$f$ 在哪里穿过 $x$ 轴，与 $f'$ 的正负毫无关系；决定 $f'$ 正负的是 $f$ 的<b>升降</b>。</li><li>被"形状相似"迷惑，选了和 $f$ 长得像的 (A) 或 (B)。</li><li>只看 $x>0$ 或只看 $x<0$ 一边就下结论。正确选项必须两段都对，排除时两段都要查。</li></ul>`,
      summary: R`<p><b>口诀</b>：看 $f$ 升降定 $f'$ 正负，看 $f$ 峰谷定 $f'$ 零点（且变号）。</p><p><b>题型识别</b>：看到"由 $f$ 的图选 $f'$ 的图"，先列符号表再排除。反过来"由 $f'$ 的图读 $f$ 的性质"时：$f'$ 的零点且两侧变号处是 $f$ 的极值点；$f'$ 的极值点（$f'$ 由增变减或由减变增处）是 $f$ 的拐点；$f'$ 在 $x$ 轴上方的区间是 $f$ 的上升区间。</p>`,
      verify: { by: 'manual', ok: true, note: '人工查看原卷主图与四个选项图，逐段比对 f 的单调区间与各选项 f\' 的符号：仅 (D) 两段均吻合' },
      flags: ['本题四个选项均为图形，选项文字描述与示意图（内联 SVG）是根据原卷图片整理的，原卷题面中只有"(A)(B)(C)(D)"四幅图']
    },

    /* ───────────────────────── 二(2) ───────────────────────── */
    {
      id: '2001-2-2', year: 2001, no: '二(2)', type: '选择', score: 3,
      stem: R`设函数 $f(x,y)$ 在点 $(0,0)$ 附近有定义，且 $f_x'(0,0)=3$，$f_y'(0,0)=1$，则（ ）`,
      options: [
        R`$\mathrm{d}z\big|_{(0,0)}=3\,\mathrm{d}x+\mathrm{d}y$.`,
        R`曲面 $z=f(x,y)$ 在点 $(0,0,f(0,0))$ 的法向量为 $(3,1,1)$.`,
        R`曲线 $\begin{cases}z=f(x,y),\\ y=0\end{cases}$ 在点 $(0,0,f(0,0))$ 的切向量为 $(1,0,3)$.`,
        R`曲线 $\begin{cases}z=f(x,y),\\ y=0\end{cases}$ 在点 $(0,0,f(0,0))$ 的切向量为 $(3,0,1)$.`
      ],
      answer: 'C',
      figure: null,
      kp: ['mdiff.diffable', 'mdiff.geo'],
      methods: ['偏导数的几何意义', '可微与可偏导的关系', '空间曲线的切向量', '构造反例'],
      difficulty: 3,
      analysis: R`<p>这题考的是：<b>只知道两个偏导数存在，到底能推出什么？</b></p><p>先想清楚偏导数的本质。$f_x'(0,0)=\lim\limits_{\Delta x\to0}\dfrac{f(\Delta x,0)-f(0,0)}{\Delta x}$ 只用到了 $f$ 在<b>直线 $y=0$</b> 上的值，$f_y'(0,0)$ 只用到了 $f$ 在直线 $x=0$ 上的值。两条直线之外，$f$ 可以任意"乱来"。所以偏导数存在只是"一维的信息"，推不出可微（可微要求 $f$ 在点附近的<b>所有方向</b>上都能被一个线性函数逼近），也就推不出全微分、切平面的存在。</p><p>但另一方面，$f_x'(0,0)$ 恰好就是一元函数 $x\mapsto f(x,0)$ 在 $x=0$ 处的导数——这正是偏导数的几何意义：曲面被平面 $y=0$ 截出的曲线，在该点切线的斜率。所以<b>截线的切向量</b>是能确定的。抓住这一点，答案就出来了。</p>`,
      solution: R`<p><b>第一步：判断 (A)。</b>公式 $\mathrm{d}z=f_x'\,\mathrm{d}x+f_y'\,\mathrm{d}y$ 成立的前提是 $f$ 在该点<b>可微</b>，而题目只给了偏导数存在。反例：令</p>$$f(x,y)=3x+y+g(x,y),\qquad g(x,y)=\begin{cases}\dfrac{xy}{x^2+y^2},&(x,y)\ne(0,0),\\ 0,&(x,y)=(0,0).\end{cases}$$<p>由于 $g(x,0)\equiv0$、$g(0,y)\equiv0$，所以 $g_x'(0,0)=g_y'(0,0)=0$，从而 $f_x'(0,0)=3$，$f_y'(0,0)=1$，满足题设。但沿直线 $y=x$（$x\ne0$）有 $g(x,x)=\dfrac{x^2}{2x^2}=\dfrac12$，不趋于 $g(0,0)=0$，所以 $g$ 在原点不连续，$f$ 也不连续，当然不可微，$\mathrm{d}z\big|_{(0,0)}$ 根本不存在。(A) ✗。</p><p><b>第二步：判断 (B)。</b>即使 $f$ 可微，把曲面写成 $F(x,y,z)=f(x,y)-z=0$，法向量为 $(F_x,F_y,F_z)=(f_x',f_y',-1)=(3,1,-1)$。$(3,1,1)$ 与 $(3,1,-1)$ 不平行（前两个分量相同而第三个分量反号），所以 (B) 无论如何都不对；更何况 $f$ 不可微时切平面可能根本不存在。(B) ✗。</p><p><b>第三步：判断 (C)。</b>曲线是曲面 $z=f(x,y)$ 与平面 $y=0$ 的交线，以 $x$ 为参数可写成</p>$$x=x,\quad y=0,\quad z=f(x,0).$$<p>参数式曲线的切向量是各坐标对参数的导数：$\left(1,\ 0,\ \dfrac{\mathrm{d}}{\mathrm{d}x}f(x,0)\Big|_{x=0}\right)$。而由偏导数的定义，$\dfrac{\mathrm{d}}{\mathrm{d}x}f(x,0)\Big|_{x=0}=f_x'(0,0)=3$，所以切向量为 $(1,0,3)$。这一步只用到偏导数存在，不需要可微。(C) ✓。</p><p><b>第四步：判断 (D)。</b>$(3,0,1)$ 与 $(1,0,3)$ 不平行（若平行则应有 $\dfrac31=\dfrac13$，矛盾）。(D) ✗。</p><p>故选 <b>C</b>。</p>`,
      pitfalls: R`<ul><li>默认"偏导存在就可微"而选 (A)。多元函数里这个结论是<b>错的</b>，这与一元函数"可导 ⟺ 可微"完全不同。</li><li>法向量记错：$z=f(x,y)$ 的法向量是 $(f_x',f_y',-1)$（或其反向 $(-f_x',-f_y',1)$），第三个分量与前两个的符号关系要记牢。记成 $(f_x',f_y',1)$ 就会误选 (B)。</li><li>切向量的分量顺序写反，误选 (D)：切向量是 $(\mathrm{d}x,\mathrm{d}y,\mathrm{d}z)$ 的比，$x$ 走 $1$ 时 $z$ 走 $3$，所以是 $(1,0,3)$。</li></ul>`,
      summary: R`<p><b>方法要点</b>：二元函数几个性质的关系——偏导数连续 ⟹ 可微 ⟹ 连续，且可微 ⟹ 偏导数存在；这些箭头<b>反过来都不成立</b>，偏导数存在与连续之间也互不蕴含。偏导数的几何意义：$f_x'(x_0,y_0)$ 是截线 $\{z=f(x,y),\,y=y_0\}$ 在该点切线对 $x$ 轴的斜率，切向量为 $(1,0,f_x')$。</p><p><b>题型识别</b>：看到选择题"只给了偏导数"，立刻怀疑所有需要可微才成立的结论（全微分公式、切平面与法向量、方向导数公式 $f_x\cos\alpha+f_y\cos\beta$），反例首选 $\dfrac{xy}{x^2+y^2}$ 型函数。</p>`,
      verify: { by: 'mixed', ok: true, note: 'sympy：反例 g=xy/(x²+y²) 沿 y=x 化简为常数 1/2（原点不连续），而 g(x,0)≡g(0,y)≡0 使偏导为 0；切向量 (1,0,f_x) 由偏导数定义直接推出' },
      flags: ['参考解析用两曲面法向量的叉乘求切向量，该做法默认 f 可微；本讲解改用参数化 (x,0,f(x,0))，只依赖 f_x(0,0) 存在，结论相同（C）。OCR 中 (D) 项多余的逗号已删去']
    },

    /* ───────────────────────── 二(3) ───────────────────────── */
    {
      id: '2001-2-3', year: 2001, no: '二(3)', type: '选择', score: 3,
      stem: R`设 $f(0)=0$，则 $f(x)$ 在点 $x=0$ 可导的充要条件为（ ）`,
      options: [
        R`$\lim\limits_{h\to0}\dfrac{1}{h^2}f(1-\cos h)$ 存在.`,
        R`$\lim\limits_{h\to0}\dfrac{1}{h}f(1-\mathrm{e}^h)$ 存在.`,
        R`$\lim\limits_{h\to0}\dfrac{1}{h^2}f(h-\sin h)$ 存在.`,
        R`$\lim\limits_{h\to0}\dfrac{1}{h}[f(2h)-f(h)]$ 存在.`
      ],
      answer: 'B',
      figure: null,
      kp: ['diff.def', 'lim.inf'],
      methods: ['导数定义', '变量代换', '等价无穷小', '构造反例'],
      difficulty: 3,
      analysis: R`<p>抽象函数在一点可导的判断，唯一可靠的依据是<b>导数定义</b>。因为 $f(0)=0$，</p>$$f'(0)=\lim_{t\to0}\frac{f(t)-f(0)}{t}=\lim_{t\to0}\frac{f(t)}{t}.$$<p>这个定义有三个要素，缺一不可：</p><ol><li><b>双侧</b>：增量 $t$ 要能从正、负两侧趋于 $0$（且 $t\ne0$）；</li><li><b>基点</b>：分子必须是"$f(\text{动点})-f(0)$"，要用到 $f$ 在 $0$ 点的值；</li><li><b>同阶</b>：分子里的增量 $t$ 与分母要匹配（分母就是 $t$，或与 $t$ 等价）。</li></ol><p>每个选项都把 $f$ 括号里的东西看成新的增量 $t$，然后逐条对照这三个要素，就能看出谁对谁错。错误选项再用反例坐实。</p>`,
      solution: R`<p><b>第一步：分析 (B)，它满足全部三要素。</b>令 $t=1-\mathrm{e}^h$。当 $h\to0$ 时 $t\to0$；$h>0$ 时 $t<0$，$h<0$ 时 $t>0$，所以 $t$ 从两侧趋于 $0$；$h\ne0$ 时 $t\ne0$；而且 $\dfrac{t}{h}=\dfrac{1-\mathrm{e}^h}{h}\to-1$，同阶。</p><p><i>必要性</i>：若 $f'(0)$ 存在，则</p>$$\lim_{h\to0}\frac{f(1-\mathrm{e}^h)}{h}=\lim_{h\to0}\frac{f(t)}{t}\cdot\frac{1-\mathrm{e}^h}{h}=f'(0)\cdot(-1)=-f'(0),$$<p>极限存在。</p><p><i>充分性</i>：设 $\lim\limits_{h\to0}\dfrac{f(1-\mathrm{e}^h)}{h}=L$。对任意 $t\to0$（$t\ne0$，$t<1$），令 $h=\ln(1-t)$，则 $h\to0$、$h\ne0$，且 $1-\mathrm{e}^h=t$，于是</p>$$\frac{f(t)}{t}=\frac{f(1-\mathrm{e}^h)}{h}\cdot\frac{h}{1-\mathrm{e}^h}\to L\cdot(-1)=-L,$$<p>即 $f'(0)$ 存在且等于 $-L$。所以 (B) 是充要条件。</p><p><b>第二步：(A) 错在"只有单侧"。</b>$t=1-\cos h\ge0$，无论 $h$ 正负，$t$ 都只从右侧趋于 $0$，且 $\dfrac{t}{h^2}\to\dfrac12$。所以 (A) 的极限存在只等价于右导数 $f_+'(0)$ 存在（此时极限为 $\tfrac12f_+'(0)$），推不出 $f'(0)$ 存在。反例：$f(x)=|x|$，则 $\dfrac{|1-\cos h|}{h^2}\to\dfrac12$ 存在，但 $|x|$ 在 $0$ 点不可导。</p><p><b>第三步：(C) 错在"阶不匹配"。</b>$t=h-\sin h\sim\dfrac{h^3}{6}$，是三阶无穷小，而分母 $h^2$ 只有二阶：</p>$$\frac{f(h-\sin h)}{h^2}=\frac{f(t)}{t}\cdot\frac{h-\sin h}{h^2},\qquad\frac{h-\sin h}{h^2}\to0.$$<p>只要 $\dfrac{f(t)}{t}$ 有界，整个极限就是 $0$，"存在"这件事几乎不提供信息。反例：$f(x)=|x|$，$\dfrac{|h-\sin h|}{h^2}\to0$ 存在，但 $|x|$ 不可导。（注意 $h-\sin h$ 其实是能取正负两侧的，(C) 的毛病不在单侧，而在阶数。）</p><p><b>第四步：(D) 错在"没有基点 $f(0)$"。</b>$f(2h)-f(h)$ 根本没有用到 $f$ 在 $0$ 点的值，$f(0)$ 随便改都不影响这个极限。反例：$f(x)=\begin{cases}1,&x\ne0,\\0,&x=0,\end{cases}$ 则 $h\ne0$ 时 $f(2h)-f(h)=0$，极限为 $0$ 存在，但 $f$ 在 $0$ 点不连续，当然不可导。</p><p>故选 <b>B</b>。</p><p>补充：若 $f'(0)$ 存在，(A)(C)(D) 的极限也都存在（分别为 $\tfrac12f'(0)$、$0$、$f'(0)$），所以它们都是<b>必要而不充分</b>的条件；只有 (B) 是充要的。</p>`,
      pitfalls: R`<ul><li>看到 (A) 里 $h$ 可正可负就以为是双侧——要看的是<b>真正的增量</b> $1-\cos h$ 的符号，而不是 $h$ 的符号。</li><li>(D) 形式上很像导数定义的"两点式"，容易被骗。导数定义的分子必须以 $f(x_0)$ 为基点；$\dfrac{f(x_0+ah)-f(x_0+bh)}{h}$ 型极限存在推不出可导。</li><li>(C) 中想当然地写 $\dfrac{f(h-\sin h)}{h^2}=\dfrac{f(h-\sin h)}{h-\sin h}\cdot\dfrac{h-\sin h}{h^2}$ 然后说"前一个因子的极限就是 $f'(0)$"——这是在<b>假设</b>了要证明的结论；后一个因子趋于 $0$，前一个因子是否有极限完全无法判断。</li></ul>`,
      summary: R`<p><b>方法要点</b>：判断"$\lim f(\square)/\bigcirc$ 存在能否推出可导"，把 $\square$ 看作新增量 $t$，检查导数定义三要素：①$t$ 双侧趋于 $0$ 且 $t\ne0$；②分子以 $f(x_0)$ 为基点；③$t$ 与分母同阶。三者全满足才是充要。</p><p><b>题型识别</b>：看到抽象函数可导性的选择题，想到"三要素 + 反例"。反例库：单侧/阶数问题用 $|x|$，缺基点问题用"在 $0$ 点挖掉重填"的函数（如 $x\ne0$ 时为 $1$、$x=0$ 时为 $0$）。</p>`,
      verify: { by: 'mixed', ok: true, note: 'sympy：f=|x| 时 (A) 左右极限均为 1/2、(C) 左右极限均为 0（存在），(B) 左右极限为 −1 与 1（不存在，与 |x| 不可导一致）；lim (1−e^h)/h=−1。充要性证明为人工推导' },
      flags: []
    },

    /* ───────────────────────── 三 ───────────────────────── */
    {
      id: '2001-3', year: 2001, no: '三', type: '解答', score: 6,
      stem: R`求 $\displaystyle\int\frac{\arctan\mathrm{e}^x}{\mathrm{e}^{2x}}\,\mathrm{d}x$.`,
      options: null,
      answer: R`$-\dfrac{\arctan\mathrm{e}^x}{2\mathrm{e}^{2x}}-\dfrac{1}{2\mathrm{e}^x}-\dfrac12\arctan\mathrm{e}^x+C$`,
      figure: null,
      kp: ['int.indef'],
      methods: ['换元法', '分部积分法', '有理函数拆项'],
      difficulty: 2,
      analysis: R`<p>观察被积函数：它<b>只通过 $\mathrm{e}^x$ 依赖于 $x$</b>（$\arctan\mathrm{e}^x$ 和 $\mathrm{e}^{2x}=(\mathrm{e}^x)^2$）。这种情况的通用手法是令 $t=\mathrm{e}^x$，把指数函数"翻译"成代数式，问题就变成积 $\dfrac{\arctan t}{t^3}$。</p><p>接下来，被积函数是"反三角函数 × 幂函数"。反三角函数直接积不出来，但它的导数 $\dfrac{1}{1+t^2}$ 是有理函数——非常友好。所以用<b>分部积分</b>，让 $\arctan t$ 去求导（把它"消灭"掉），让幂函数 $t^{-3}$ 去积分。这就是"反对幂指三"口诀的道理：排在前面的函数（反三角、对数）求导后会变简单，应该放在 $u$ 的位置。</p><p>分部之后剩下一个有理函数 $\dfrac{1}{t^2(1+t^2)}$，用拆项（部分分式）就能积出来。</p>`,
      solution: R`<p><b>第一步：换元。</b>令 $t=\mathrm{e}^x$（$t>0$），则 $x=\ln t$，$\mathrm{d}x=\dfrac{\mathrm{d}t}{t}$，$\mathrm{e}^{2x}=t^2$。于是</p>$$\int\frac{\arctan\mathrm{e}^x}{\mathrm{e}^{2x}}\,\mathrm{d}x=\int\frac{\arctan t}{t^2}\cdot\frac{\mathrm{d}t}{t}=\int\frac{\arctan t}{t^3}\,\mathrm{d}t.$$<p><b>第二步：分部积分。</b>取 $u=\arctan t$，$\mathrm{d}v=t^{-3}\,\mathrm{d}t$，则 $\mathrm{d}u=\dfrac{\mathrm{d}t}{1+t^2}$，$v=\displaystyle\int t^{-3}\,\mathrm{d}t=-\frac{1}{2t^2}$。由 $\int u\,\mathrm{d}v=uv-\int v\,\mathrm{d}u$：</p>$$\int\frac{\arctan t}{t^3}\,\mathrm{d}t=-\frac{\arctan t}{2t^2}-\int\left(-\frac{1}{2t^2}\right)\frac{1}{1+t^2}\,\mathrm{d}t=-\frac{\arctan t}{2t^2}+\frac12\int\frac{\mathrm{d}t}{t^2(1+t^2)}.$$<p><b>第三步：拆项。</b>用"分子加一项减一项"的技巧：</p>$$\frac{1}{t^2(1+t^2)}=\frac{(1+t^2)-t^2}{t^2(1+t^2)}=\frac{1}{t^2}-\frac{1}{1+t^2}.$$<p>所以</p>$$\int\frac{\mathrm{d}t}{t^2(1+t^2)}=\int\frac{\mathrm{d}t}{t^2}-\int\frac{\mathrm{d}t}{1+t^2}=-\frac1t-\arctan t+C_1.$$<p><b>第四步：合并并回代。</b></p>$$\int\frac{\arctan t}{t^3}\,\mathrm{d}t=-\frac{\arctan t}{2t^2}-\frac{1}{2t}-\frac12\arctan t+C.$$<p>把 $t=\mathrm{e}^x$ 代回：</p>$$\int\frac{\arctan\mathrm{e}^x}{\mathrm{e}^{2x}}\,\mathrm{d}x=-\frac{\arctan\mathrm{e}^x}{2\mathrm{e}^{2x}}-\frac{1}{2\mathrm{e}^x}-\frac12\arctan\mathrm{e}^x+C.$$<p><b>第五步：求导检验。</b>记结果为 $F(x)$。逐项求导：</p><ul><li>$\left(-\dfrac12\mathrm{e}^{-2x}\arctan\mathrm{e}^x\right)'=\mathrm{e}^{-2x}\arctan\mathrm{e}^x-\dfrac12\mathrm{e}^{-2x}\cdot\dfrac{\mathrm{e}^x}{1+\mathrm{e}^{2x}}$；</li><li>$\left(-\dfrac12\mathrm{e}^{-x}\right)'=\dfrac12\mathrm{e}^{-x}$；</li><li>$\left(-\dfrac12\arctan\mathrm{e}^x\right)'=-\dfrac12\cdot\dfrac{\mathrm{e}^x}{1+\mathrm{e}^{2x}}$。</li></ul><p>后三项合并：$-\dfrac12\cdot\dfrac{\mathrm{e}^{-x}+\mathrm{e}^{x}}{1+\mathrm{e}^{2x}}+\dfrac12\mathrm{e}^{-x}=-\dfrac12\cdot\dfrac{\mathrm{e}^{-x}(1+\mathrm{e}^{2x})}{1+\mathrm{e}^{2x}}+\dfrac12\mathrm{e}^{-x}=0$，所以 $F'(x)=\mathrm{e}^{-2x}\arctan\mathrm{e}^x$，正确。</p>`,
      pitfalls: R`<ul><li>换元时忘记 $\mathrm{d}x=\dfrac{\mathrm{d}t}{t}$，把积分写成 $\displaystyle\int\frac{\arctan t}{t^2}\,\mathrm{d}t$，后面全错。</li><li>分部积分时 $v=-\dfrac{1}{2t^2}$ 的负号丢失，或者在 $uv-\int v\,\mathrm{d}u$ 中两个负号处理错。</li><li>拆项写成 $\dfrac{1}{t^2}+\dfrac{1}{1+t^2}$（符号错）。拆完后通分验算一下即可避免。</li><li>把 $u$ 和 $\mathrm{d}v$ 的角色选反：若让 $\arctan t$ 去积分，会越积越复杂。</li><li>忘记写任意常数 $C$。</li></ul>`,
      summary: R`<p><b>方法要点</b>：①被积函数只含 $\mathrm{e}^x$ 时令 $t=\mathrm{e}^x$ 化为代数函数；②"反三角/对数 × 幂函数"用分部积分，反三角、对数作 $u$（求导后变成有理函数）；③$\dfrac{1}{t^2(1+t^2)}$ 这类有理函数用"加一项减一项"拆开。</p><p><b>题型识别</b>：看到 $\arctan(\cdots)$、$\ln(\cdots)$ 与幂函数或指数函数相乘，想到分部积分并让它们作 $u$；看到 $\mathrm{e}^{kx}$ 与 $\mathrm{e}^x$ 的函数组合，想到 $t=\mathrm{e}^x$；不定积分做完一定要求导验算。</p>`,
      alt: R`<p><b>不换元，直接分部。</b>把 $\dfrac{1}{\mathrm{e}^{2x}}\,\mathrm{d}x$ 凑成 $\mathrm{d}\left(-\dfrac12\mathrm{e}^{-2x}\right)$：</p>$$\int\arctan\mathrm{e}^x\,\mathrm{d}\left(-\tfrac12\mathrm{e}^{-2x}\right)=-\frac{\arctan\mathrm{e}^x}{2\mathrm{e}^{2x}}+\frac12\int\mathrm{e}^{-2x}\cdot\frac{\mathrm{e}^x}{1+\mathrm{e}^{2x}}\,\mathrm{d}x.$$<p>剩下的积分 $\displaystyle\int\frac{\mathrm{e}^{-x}}{1+\mathrm{e}^{2x}}\,\mathrm{d}x=\int\frac{\mathrm{d}(\mathrm{e}^x)}{\mathrm{e}^{2x}(1+\mathrm{e}^{2x})}=\int\left(\frac{1}{\mathrm{e}^{2x}}-\frac{1}{1+\mathrm{e}^{2x}}\right)\mathrm{d}(\mathrm{e}^x)=-\mathrm{e}^{-x}-\arctan\mathrm{e}^x+C$，结果相同。两种做法本质一样，换元法只是让式子更清爽。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：对所得原函数求导，与被积函数 atan(e^x)/e^(2x) 之差化简为 0' },
      flags: []
    },

    /* ───────────────────────── 四 ───────────────────────── */
    {
      id: '2001-4', year: 2001, no: '四', type: '解答', score: 6,
      stem: R`设函数 $z=f(x,y)$ 在点 $(1,1)$ 处可微，且 $f(1,1)=1$，$\left.\dfrac{\partial f}{\partial x}\right|_{(1,1)}=2$，$\left.\dfrac{\partial f}{\partial y}\right|_{(1,1)}=3$，$\varphi(x)=f(x,f(x,x))$，求 $\left.\dfrac{\mathrm{d}}{\mathrm{d}x}\varphi^3(x)\right|_{x=1}$.`,
      options: null,
      answer: R`$51$`,
      figure: null,
      kp: ['mdiff.chain'],
      methods: ['多元复合函数链式法则', '一元复合函数求导', '由内而外逐层求值'],
      difficulty: 3,
      analysis: R`<p>这是一道"套娃"式的抽象复合函数求导题。结构有三层：最外层是一元函数 $\varphi^3$；中间层 $\varphi(x)=f(x,v)$，其中 $v=f(x,x)$；最内层 $v$ 本身又是 $f$ 的复合。</p><p>处理这种题的关键有两点：</p><ol><li><b>记号要准</b>：用 $f_1'$、$f_2'$ 表示 $f$ 对<b>第一个位置</b>、<b>第二个位置</b>的变量求偏导。题目中的 $\dfrac{\partial f}{\partial x}\Big|_{(1,1)}$ 其实就是 $f_1'(1,1)$，$\dfrac{\partial f}{\partial y}\Big|_{(1,1)}$ 就是 $f_2'(1,1)$。如果在复合函数里还用 "$\dfrac{\partial f}{\partial x}$"，很容易和"对 $x$ 的全导数"混淆。</li><li><b>由内而外</b>：先求内层在 $x=1$ 处的函数值和导数，确认外层偏导数应该在哪个点取值，再往外套。题目只告诉了 $f$ 在点 $(1,1)$ 的信息，所以每一层都要检查"求值点是不是 $(1,1)$"。</li></ol><p>另外，题目只说 $f$ 在点 $(1,1)$ 处可微，这已经足够：链式法则只要求外层函数在相应点可微、内层函数在相应点可导。</p>`,
      solution: R`<p><b>第一步：最外层。</b>由一元复合函数求导，</p>$$\frac{\mathrm{d}}{\mathrm{d}x}\varphi^3(x)=3\varphi^2(x)\,\varphi'(x).$$<p>所以只需求 $\varphi(1)$ 和 $\varphi'(1)$。</p><p><b>第二步：最内层，求 $g(x)=f(x,x)$ 在 $x=1$ 处的值和导数。</b>$g(1)=f(1,1)=1$。$g$ 是 $f$ 与 $(x,x)$ 的复合，两个位置都依赖 $x$，由链式法则</p>$$g'(x)=f_1'(x,x)\cdot1+f_2'(x,x)\cdot1,\qquad g'(1)=f_1'(1,1)+f_2'(1,1)=2+3=5.$$<p>（$f$ 在 $(1,1)$ 可微，$(x,x)$ 在 $x=1$ 可导，且 $x=1$ 时 $(x,x)=(1,1)$，链式法则适用。）</p><p><b>第三步：中间层，求 $\varphi(1)$。</b>$\varphi(1)=f(1,g(1))=f(1,1)=1$。注意：$\varphi$ 在 $x=1$ 时外层 $f$ 的取值点是 $(1,g(1))=(1,1)$——正因为 $f(1,1)=1$，这个点恰好又是 $(1,1)$，我们才能用题目给的偏导数值。这是出题人精心设计的，但你必须<b>验证</b>它，而不是想当然。</p><p><b>第四步：中间层，求 $\varphi'(1)$。</b>$\varphi(x)=f(x,g(x))$，第一个位置是 $x$（对 $x$ 的导数为 $1$），第二个位置是 $g(x)$（导数为 $g'(x)$）：</p>$$\varphi'(x)=f_1'(x,g(x))\cdot1+f_2'(x,g(x))\cdot g'(x).$$<p>代入 $x=1$，取值点为 $(1,g(1))=(1,1)$：</p>$$\varphi'(1)=f_1'(1,1)+f_2'(1,1)\cdot g'(1)=2+3\times5=17.$$<p><b>第五步：组装。</b></p>$$\left.\frac{\mathrm{d}}{\mathrm{d}x}\varphi^3(x)\right|_{x=1}=3\varphi^2(1)\,\varphi'(1)=3\times1^2\times17=51.$$`,
      pitfalls: R`<ul><li><b>求值点不检查</b>：直接把 $f_1'(x,f(x,x))$ 在 $x=1$ 处写成 $f_1'(1,1)$ 而不说明 $f(1,1)=1$。如果题目改成 $f(1,1)=2$，这一步就需要 $f$ 在 $(1,2)$ 的偏导数，题目给的信息就不够了——所以这一步的验证是解题的一部分。</li><li><b>混淆记号</b>：把 $\varphi'(x)$ 写成 "$\dfrac{\partial f}{\partial x}+\dfrac{\partial f}{\partial y}\cdot\dfrac{\mathrm{d}f}{\mathrm{d}x}$"，其中两个 $f$ 的含义不同，极易算乱。用 $f_1',f_2'$ 记号可以避免。</li><li>求 $g'(1)$ 时只写一项（漏掉 $f_2'$ 或 $f_1'$），得到 $g'(1)=2$ 或 $3$。$f(x,x)$ 的<b>两个</b>位置都依赖 $x$。</li><li>最外层漏掉 $3\varphi^2$，把 $\varphi'(1)=17$ 当成答案。</li></ul>`,
      summary: R`<p><b>方法要点</b>：抽象复合函数求导先画"变量关系树"（$\varphi\to f(u,v)$，$u=x$，$v=g(x)$，$g\to f(x,x)$），链式法则 = 每条从顶到底的路径上导数相乘，再把所有路径相加；用 $f_1',f_2'$ 表示对位置求偏导；由内而外逐层算出函数值（确定求值点）与导数。</p><p><b>题型识别</b>：看到 $f(x,f(x,x))$、$f(x,f(x,y))$ 这类嵌套结构，想到"由内而外、先值后导、核对求值点"；题目中出现 $f(x_0,y_0)=y_0$ 这样的条件，通常就是为了让求值点"回到"已知点。</p>`,
      alt: R`<p><b>用全微分形式不变性。</b>在 $x=1$ 处：内层 $\mathrm{d}g=f_1'(1,1)\,\mathrm{d}x+f_2'(1,1)\,\mathrm{d}x=5\,\mathrm{d}x$；中间层 $\mathrm{d}\varphi=f_1'(1,1)\,\mathrm{d}x+f_2'(1,1)\,\mathrm{d}g=2\,\mathrm{d}x+3\times5\,\mathrm{d}x=17\,\mathrm{d}x$；外层 $\mathrm{d}(\varphi^3)=3\varphi^2\,\mathrm{d}\varphi=51\,\mathrm{d}x$。不管哪一层，"微分 = 对各位置的偏导 × 该位置的微分"这个形式都不变，一层层代进去即可。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：取 f(u,v)=1+2(u−1)+3(v−1)+a(u−1)²+b(u−1)(v−1)+c(v−1)²+(u−1)³v（满足 f(1,1)=1, f_x=2, f_y=3，a,b,c 任意），算得 d/dx φ³ 在 x=1 处恒为 51' },
      flags: []
    },

    /* ───────────────────────── 五 ───────────────────────── */
    {
      id: '2001-5', year: 2001, no: '五', type: '解答', score: 8,
      stem: R`设 $f(x)=\begin{cases}\dfrac{1+x^2}{x}\arctan x,&x\ne0,\\[2mm] 1,&x=0,\end{cases}$ 试将 $f(x)$ 展开成 $x$ 的幂级数，并求级数 $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{1-4n^2}$ 的和.`,
      options: null,
      answer: R`$f(x)=1+\displaystyle\sum_{n=1}^{\infty}\frac{2(-1)^n}{1-4n^2}x^{2n}$，$x\in[-1,1]$；$\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{1-4n^2}=\frac{\pi}{4}-\frac12$`,
      figure: null,
      kp: ['series.expand', 'series.sum'],
      methods: ['间接展开法', '逐项积分', '幂级数合并与指标平移', '代入特殊点求数项级数和', '阿贝尔定理（端点连续性）'],
      difficulty: 3,
      analysis: R`<p><b>展开部分</b>：$f$ 由 $\arctan x$ 和简单的代数因子组成，直接求高阶导数（直接展开法）非常麻烦，应该用<b>间接展开法</b>——从已知的展开式出发，通过四则运算、逐项求导或逐项积分得到目标展开式。$\arctan x$ 本身又是从几何级数来的：$(\arctan x)'=\dfrac{1}{1+x^2}$，而 $\dfrac{1}{1+x^2}$ 就是公比为 $-x^2$ 的几何级数之和。所以路线是：</p><p style="text-align:center">几何级数 → 逐项积分得 $\arctan x$ → 乘以 $\dfrac1x+x$ → 合并同类项。</p><p><b>求和部分</b>：数项级数 $\sum\dfrac{(-1)^n}{1-4n^2}$ 的通项正好和展开式的系数结构一样（只差因子 $2$），这提示我们：它就是展开式在某个特殊点（$x=1$）的值。把"求数项级数的和"转化为"求和函数在一点的值"，是这类题的标准套路。由于 $x=1$ 是收敛区间的端点，必须说明展开式在端点也成立。</p>`,
      solution: R`<p><b>第一步：从几何级数出发。</b>当 $|t|<1$ 时，</p>$$\frac{1}{1+t^2}=\frac{1}{1-(-t^2)}=\sum_{n=0}^{\infty}(-t^2)^n=\sum_{n=0}^{\infty}(-1)^nt^{2n}.$$<p><b>第二步：逐项积分得 $\arctan x$ 的展开式。</b>幂级数在收敛区间内可以逐项积分，所以当 $|x|<1$ 时</p>$$\arctan x=\int_0^x\frac{\mathrm{d}t}{1+t^2}=\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}x^{2n+1}=x-\frac{x^3}{3}+\frac{x^5}{5}-\cdots.$$<p>端点 $x=\pm1$ 处，右端变成 $\pm\left(1-\dfrac13+\dfrac15-\cdots\right)$，由莱布尼茨判别法收敛；而 $\arctan x$ 在 $x=\pm1$ 处连续。由于幂级数的和函数在其收敛域上连续（阿贝尔定理），两边在 $x\to\pm1$ 时取极限即知等式在端点也成立。所以上式对 $x\in[-1,1]$ 成立。</p><p><b>第三步：拆开 $f$。</b>当 $x\ne0$ 时，$\dfrac{1+x^2}{x}=\dfrac1x+x$，所以</p>$$f(x)=\frac{\arctan x}{x}+x\arctan x.$$<p>分别展开（$x\in[-1,1]$，$x\ne0$）：</p>$$\frac{\arctan x}{x}=\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}x^{2n}=1+\sum_{n=1}^{\infty}\frac{(-1)^n}{2n+1}x^{2n},$$$$x\arctan x=\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}x^{2n+2}\ \overset{k=n+1}{=}\ \sum_{k=1}^{\infty}\frac{(-1)^{k-1}}{2k-1}x^{2k}=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n-1}x^{2n}.$$<p>第二个式子做了指标平移：令 $k=n+1$，则 $x^{2n+2}=x^{2k}$，$(-1)^n=(-1)^{k-1}$，$2n+1=2k-1$，$k$ 从 $1$ 开始；最后再把字母 $k$ 换回 $n$。这样两个级数的通项都是 $x^{2n}$，可以合并。</p><p><b>第四步：合并同类项。</b>$x^{2n}$（$n\ge1$）的系数为</p>$$(-1)^n\left[\frac{1}{2n+1}-\frac{1}{2n-1}\right]=(-1)^n\cdot\frac{(2n-1)-(2n+1)}{(2n+1)(2n-1)}=(-1)^n\cdot\frac{-2}{4n^2-1}=\frac{2(-1)^n}{1-4n^2}.$$<p>（这里用了 $(-1)^{n-1}=-(-1)^n$。）所以当 $x\in[-1,1]$、$x\ne0$ 时</p>$$f(x)=1+\sum_{n=1}^{\infty}\frac{2(-1)^n}{1-4n^2}x^{2n}=1+\frac23x^2-\frac{2}{15}x^4+\frac{2}{35}x^6-\cdots.$$<p>当 $x=0$ 时右端等于 $1=f(0)$，所以上式对整个 $[-1,1]$ 成立。题目把 $f(0)$ 定义为 $1$，正是为了让 $f$ 在 $0$ 点连续，展开式在 $0$ 点也成立。</p><p><b>第五步：确定收敛域。</b>系数绝对值 $\dfrac{2}{4n^2-1}$ 相邻比值趋于 $1$，收敛半径为 $1$；在 $x=\pm1$ 处级数各项绝对值为 $\dfrac{2}{4n^2-1}\le\dfrac{2}{3n^2}$，绝对收敛。所以收敛域为 $[-1,1]$，展开式成立的范围也是 $[-1,1]$。</p><p><b>第六步：求数项级数的和。</b>在展开式中令 $x=1$（$x=1$ 在成立范围内）：</p>$$f(1)=1+2\sum_{n=1}^{\infty}\frac{(-1)^n}{1-4n^2}.$$<p>而 $f(1)=\dfrac{1+1}{1}\arctan1=2\cdot\dfrac{\pi}{4}=\dfrac{\pi}{2}$，所以</p>$$\sum_{n=1}^{\infty}\frac{(-1)^n}{1-4n^2}=\frac12\left(\frac{\pi}{2}-1\right)=\frac{\pi}{4}-\frac12.$$<p>数值检查：前三项 $\dfrac13-\dfrac1{15}+\dfrac1{35}\approx0.295$，而 $\dfrac{\pi}{4}-\dfrac12\approx0.285$，吻合（交错级数部分和在真值两侧摆动）。</p>`,
      pitfalls: R`<ul><li><b>只写 $|x|<1$</b>：这样第六步就不能代入 $x=1$。必须说明端点处级数收敛、函数连续，展开式在端点也成立。</li><li><b>漏掉 $x=0$</b>：$\dfrac{1+x^2}{x}$ 在 $x=0$ 无意义，展开时默认 $x\ne0$，最后要单独验证 $x=0$ 处等式成立。</li><li><b>指标平移出错</b>：$x\arctan x$ 的通项是 $x^{2n+2}$，不能直接和 $x^{2n}$ 的项合并；平移后系数的符号 $(-1)^{n-1}$ 和分母 $2n-1$ 都要跟着变。</li><li>合并后常数项 $1$ 被并进求和号里，或者写成 $\sum_{n=0}^\infty$ 导致 $n=0$ 项出现 $\dfrac{2}{1-0}=2$ 而不是 $1$。</li></ul>`,
      summary: R`<p><b>方法要点</b>：①间接展开——找"母级数"（$\dfrac{1}{1\pm x}$、$\mathrm{e}^x$、$\sin x$、$\cos x$、$\ln(1+x)$、$\arctan x$），通过乘幂函数（只移动指标）、逐项求导/积分得到目标；②合并两个级数时先把通项的幂次对齐；③端点单独检验，写清成立范围；④求数项级数和 = 构造幂级数并在适当点取值。</p><p><b>题型识别</b>：看到 $\arctan x$、$\ln(1+x)$ 与 $\dfrac1x$、$x$ 等因子相乘，想到"已知展开 × 幂函数 + 指标平移"；看到 $\sum\dfrac{(-1)^n}{4n^2-1}$、$\sum\dfrac{1}{(2n-1)(2n+1)}$ 型通项，想到拆成 $\dfrac{1}{2n-1}-\dfrac{1}{2n+1}$，再联系 $\arctan x$ 的系数 $\dfrac{1}{2n+1}$。</p>`,
      alt: R`<p><b>求和部分的另一种做法：部分分式 + 莱布尼茨级数。</b>由 $\dfrac{1}{1-4n^2}=-\dfrac12\left(\dfrac{1}{2n-1}-\dfrac{1}{2n+1}\right)$，</p>$$\sum_{n=1}^{\infty}\frac{(-1)^n}{1-4n^2}=\frac12\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{2n-1}+\frac12\sum_{n=1}^{\infty}\frac{(-1)^{n}}{2n+1}.$$<p>（两个级数都收敛，所以可以拆开。）第一个是 $1-\dfrac13+\dfrac15-\cdots=\dfrac{\pi}{4}$；第二个是 $-\dfrac13+\dfrac15-\cdots=\dfrac{\pi}{4}-1$。所以和为 $\dfrac12\left(\dfrac{\pi}{4}+\dfrac{\pi}{4}-1\right)=\dfrac{\pi}{4}-\dfrac12$。这其实就是把 $\arctan1=\dfrac{\pi}{4}$ 用了两次，与主解法本质相同。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：series((1+x²)/x·atan(x)) 前几项 1+2x²/3−2x⁴/15+2x⁶/35−2x⁸/63，与通项 2(−1)^n/(1−4n²) 一致；Sum((−1)^n/(1−4n²),n=1..∞) 求得 π/4−1/2（≈0.2854）；f(1)=π/2' },
      flags: []
    },

    /* ───────────────────────── 六 ───────────────────────── */
    {
      id: '2001-6', year: 2001, no: '六', type: '解答', score: 7,
      stem: R`计算 $I=\displaystyle\oint_L(y^2-z^2)\,\mathrm{d}x+(2z^2-x^2)\,\mathrm{d}y+(3x^2-y^2)\,\mathrm{d}z$，其中 $L$ 是平面 $x+y+z=2$ 与柱面 $|x|+|y|=1$ 的交线，从 $z$ 轴正向看去，$L$ 为逆时针方向.`,
      options: null,
      answer: R`$I=-24$`,
      figure: null,
      kp: ['mint.stokes', 'mint.surf1'],
      methods: ['斯托克斯公式', '第一类曲面积分', '利用曲面方程化简被积函数', '对称性'],
      difficulty: 4,
      analysis: R`<p>这是空间闭曲线上的第二类曲线积分。直接参数化当然可以，但 $L$ 是由四条线段组成的空间四边形（它在 $xOy$ 面上的投影是正方形 $|x|+|y|=1$），要分四段计算，又繁又容易错。</p><p>空间闭曲线积分的首选工具是<b>斯托克斯公式</b>：$\oint_L$ 等于以 $L$ 为边界的任一曲面 $\Sigma$ 上旋度的通量。本题 $L$ 整条落在平面 $x+y+z=2$ 上，所以最自然的选择是取 $\Sigma$ 为这块<b>平面片</b>——平面的法向量是常向量，曲面积分会非常简单。</p><p>方向的确定用右手法则：四指沿 $L$ 的方向（从 $z$ 轴正向看是逆时针），大拇指指向 $\Sigma$ 的正侧，所以 $\Sigma$ 取<b>上侧</b>（法向量的 $z$ 分量为正）。</p>`,
      solution: R`<p><b>第一步：确定曲面 $\Sigma$ 和它的侧。</b>取 $\Sigma$ 为平面 $x+y+z=2$ 被柱面 $|x|+|y|=1$ 所围的部分，即</p>$$\Sigma:\ z=2-x-y,\quad (x,y)\in D=\{(x,y)\mid |x|+|y|\le1\}.$$<p>由右手法则取上侧，单位法向量为 $\mathbf{n}=\dfrac{1}{\sqrt3}(1,1,1)$，即 $\cos\alpha=\cos\beta=\cos\gamma=\dfrac{1}{\sqrt3}$。</p><p><b>第二步：计算旋度。</b>记 $P=y^2-z^2$，$Q=2z^2-x^2$，$R=3x^2-y^2$。</p>$$\mathbf{rot}\,(P,Q,R)=\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)=(-2y-4z,\ -2z-6x,\ -2x-2y).$$<p><b>第三步：用斯托克斯公式化为第一类曲面积分。</b></p>$$I=\iint_\Sigma\mathbf{rot}\,(P,Q,R)\cdot\mathbf{n}\,\mathrm{d}S=\frac{1}{\sqrt3}\iint_\Sigma\big[(-2y-4z)+(-2z-6x)+(-2x-2y)\big]\mathrm{d}S=-\frac{2}{\sqrt3}\iint_\Sigma(4x+2y+3z)\,\mathrm{d}S.$$<p><b>第四步：用曲面方程化简被积函数。</b>在 $\Sigma$ 上 $z=2-x-y$，所以</p>$$4x+2y+3z=4x+2y+3(2-x-y)=x-y+6.$$<p>（曲面积分中的点都在曲面上，所以可以把曲面方程代入被积函数，这是曲面积分的特权，三重积分就不行。）</p><p><b>第五步：化为二重积分。</b>$\Sigma$ 上 $z_x=z_y=-1$，$\mathrm{d}S=\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\,\mathrm{d}y=\sqrt3\,\mathrm{d}x\,\mathrm{d}y$。于是</p>$$\iint_\Sigma(x-y+6)\,\mathrm{d}S=\sqrt3\iint_D(x-y+6)\,\mathrm{d}x\,\mathrm{d}y.$$<p>$D$ 关于 $y$ 轴对称而 $x$ 是 $x$ 的奇函数，所以 $\iint_Dx\,\mathrm{d}x\,\mathrm{d}y=0$；同理 $D$ 关于 $x$ 轴对称，$\iint_Dy\,\mathrm{d}x\,\mathrm{d}y=0$。$D$ 是对角线长都为 $2$ 的正方形，面积为 $\dfrac{2\times2}{2}=2$。所以</p>$$\iint_\Sigma(x-y+6)\,\mathrm{d}S=\sqrt3\times6\times2=12\sqrt3.$$<p><b>第六步：得出结果。</b></p>$$I=-\frac{2}{\sqrt3}\times12\sqrt3=-24.$$`,
      pitfalls: R`<ul><li><b>侧取反</b>：从 $z$ 轴正向看逆时针，按右手法则对应上侧；取成下侧会得到 $+24$。</li><li><b>旋度算错</b>：三个分量的次序和正负号容易记混，建议写成三阶行列式 $\begin{vmatrix}\cos\alpha&\cos\beta&\cos\gamma\\ \partial_x&\partial_y&\partial_z\\ P&Q&R\end{vmatrix}$ 按第一行展开。</li><li><b>$\mathrm{d}S$ 与 $\mathrm{d}x\,\mathrm{d}y$ 的换算漏掉 $\sqrt3$</b>，或者把 $\iint_\Sigma\mathrm{d}S$ 直接当成 $D$ 的面积 $2$。曲面面积是投影面积的 $\sqrt3$ 倍（平面与 $xOy$ 面的夹角余弦为 $\tfrac1{\sqrt3}$）。</li><li><b>$D$ 的面积算错</b>：$|x|+|y|\le1$ 是以 $(\pm1,0),(0,\pm1)$ 为顶点的正方形，边长 $\sqrt2$，面积 $2$，不是 $4$。</li></ul>`,
      summary: R`<p><b>方法要点</b>：空间闭曲线积分 → 斯托克斯公式；曲线位于平面上 → 取该平面片为 $\Sigma$，法向量为常向量，用"行列式 + 第一类曲面积分"的形式最省事；曲面积分的被积函数先用曲面方程化简，再用对称性和面积公式。</p><p><b>题型识别</b>：看到"平面与柱面的交线"上的 $\oint P\,\mathrm{d}x+Q\,\mathrm{d}y+R\,\mathrm{d}z$，想到斯托克斯公式取平面片；方向由"右手法则：四指绕向 = 曲线方向，拇指 = 曲面正侧"确定；也可以想到"代入 $z$ 后投影到 $xOy$ 面用格林公式"。</p>`,
      alt: R`<p><b>投影降维 + 格林公式。</b>在 $L$ 上 $z=2-x-y$，$\mathrm{d}z=-\mathrm{d}x-\mathrm{d}y$。代入后 $L$ 变成 $xOy$ 面上的正方形边界 $C:|x|+|y|=1$，从 $z$ 轴正向看逆时针，即 $C$ 取逆时针（正向）：</p>$$I=\oint_C\underbrace{\big[(y^2-z^2)-(3x^2-y^2)\big]}_{\tilde P}\mathrm{d}x+\underbrace{\big[(2z^2-x^2)-(3x^2-y^2)\big]}_{\tilde Q}\mathrm{d}y,\quad z=2-x-y.$$<p>计算偏导（注意 $z$ 依赖 $x,y$）：$\dfrac{\partial\tilde Q}{\partial x}=4z\cdot(-1)-2x-6x=-8+4x+4y-8x$，$\dfrac{\partial\tilde P}{\partial y}=2y-2z\cdot(-1)+2y=4-2x+2y$，所以 $\dfrac{\partial\tilde Q}{\partial x}-\dfrac{\partial\tilde P}{\partial y}=-12-2x+2y$。由格林公式和对称性，</p>$$I=\iint_D(-12-2x+2y)\,\mathrm{d}x\,\mathrm{d}y=-12\times2=-24.$$<p>直接分四段参数化也能算：$(1,0)\to(0,1)$、$(0,1)\to(-1,0)$、$(-1,0)\to(0,-1)$、$(0,-1)\to(1,0)$ 四段的积分分别为 $\tfrac73,\,-3,\,-\tfrac{79}{3},\,3$，总和 $-24$，但计算量明显更大。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：把 L 分成四条线段直接参数化计算，四段分别为 7/3、−3、−79/3、3，总和 −24；旋度 (−2y−4z, −6x−2z, −2x−2y) 与投影后格林公式被积函数 −2x+2y−12 也已核对' },
      flags: []
    },

    /* ───────────────────────── 七 ───────────────────────── */
    {
      id: '2001-7', year: 2001, no: '七', type: '解答', score: 7,
      stem: R`设 $y=f(x)$ 在 $(-1,1)$ 内具有二阶连续导数且 $f''(x)\ne0$，试证：<br>(1) 对于 $(-1,1)$ 内的任一 $x\ne0$，存在唯一的 $\theta(x)\in(0,1)$，使 $f(x)=f(0)+xf'(\theta(x)x)$ 成立；<br>(2) $\lim\limits_{x\to0}\theta(x)=\dfrac12$.`,
      options: null,
      answer: R`证明见详细解答：(1) 存在性由拉格朗日中值定理得到，唯一性由 $f''\ne0$ 推出 $f'$ 严格单调（或用罗尔定理反证）；(2) 比较中值定理与泰勒公式两种表示，得 $\theta(x)=\dfrac{f''(\xi)}{2f''(\eta)}\to\dfrac12$.`,
      figure: null,
      kp: ['diff.mvt', 'diff.taylor', 'lim.compute'],
      methods: ['拉格朗日中值定理', '罗尔定理反证唯一性', '泰勒公式（拉格朗日余项）', '夹逼取极限'],
      difficulty: 4,
      analysis: R`<p><b>第 (1) 问</b>：等式 $f(x)=f(0)+xf'(\theta x)$ 改写成 $\dfrac{f(x)-f(0)}{x-0}=f'(\theta x)$，这就是<b>拉格朗日中值定理</b>在区间 $[0,x]$（或 $[x,0]$）上的结论，中值点 $\xi=\theta x$ 介于 $0$ 与 $x$ 之间，相当于 $\theta\in(0,1)$。所以存在性是现成的。难点在<b>唯一性</b>：会不会有两个不同的中值点？如果有，$f'$ 就在两个不同点取相同的值，再对 $f'$ 用罗尔定理就会得到 $f''$ 的零点，与 $f''\ne0$ 矛盾。</p><p><b>第 (2) 问</b>：$\theta(x)$ 只知道存在，没有表达式，也不知道是否可导，所以不能对它直接用洛必达。思路是：<b>对同一个增量 $f(x)-f(0)$ 写出两种表示</b>——一种含 $\theta$（中值定理），一种不含 $\theta$ 但精确到二阶（泰勒公式）——比较两者，把 $\theta$ "解"出来，再取极限。</p><p><b>直觉（第一性原理）</b>：为什么极限是 $\frac12$？对抛物线 $f(x)=ax^2+bx+c$，$\dfrac{f(x)-f(0)}{x}=ax+b=f'\!\left(\dfrac x2\right)$，中值点恰好是区间中点，$\theta\equiv\frac12$。而任何二阶连续可导、$f''(0)\ne0$ 的函数，在 $0$ 附近都"长得像"一条抛物线（泰勒公式），所以区间越短，中值点越接近中点。</p>`,
      solution: R`<p><b>(1) 存在性。</b>任取 $x\in(-1,1)$，$x\ne0$。$f$ 在 $(-1,1)$ 内二阶可导，所以 $f$ 在以 $0,x$ 为端点的闭区间上连续、在开区间内可导。由拉格朗日中值定理，存在介于 $0$ 与 $x$ 之间的 $\xi$（$\xi\ne0$，$\xi\ne x$），使</p>$$f(x)-f(0)=f'(\xi)(x-0).$$<p>令 $\theta=\dfrac{\xi}{x}$：由于 $\xi$ 严格介于 $0$ 与 $x$ 之间，无论 $x>0$ 还是 $x<0$，都有 $0<\theta<1$，且 $\xi=\theta x$。于是 $f(x)=f(0)+xf'(\theta x)$。</p><p><b>(1) 唯一性。</b>反证。假设有 $\theta_1\ne\theta_2$，$\theta_1,\theta_2\in(0,1)$，都满足等式，则</p>$$xf'(\theta_1x)=f(x)-f(0)=xf'(\theta_2x).$$<p>因为 $x\ne0$，两边约去 $x$ 得 $f'(\theta_1x)=f'(\theta_2x)$。又 $x\ne0$、$\theta_1\ne\theta_2$，所以 $\theta_1x\ne\theta_2x$，它们是 $(-1,1)$ 内两个不同的点。$f'$ 在以它们为端点的闭区间上可导（因为 $f''$ 存在），且两端函数值相等，由罗尔定理，存在 $\eta$ 介于两点之间，使 $f''(\eta)=0$，与 $f''(x)\ne0$ 矛盾。所以 $\theta=\theta(x)$ 唯一。</p><p>（另一种说法：$f''$ 在 $(-1,1)$ 上连续且处处不为零，由零点定理它不能变号，故 $f''>0$ 恒成立或 $f''<0$ 恒成立，于是 $f'$ 严格单调，不可能在两个不同点取相同的值。）</p><p><b>(2) 第一步：用泰勒公式写出 $f(x)-f(0)$ 的第二种表示。</b>由带拉格朗日余项的泰勒公式，存在介于 $0$ 与 $x$ 之间的 $\xi_1$（依赖于 $x$），使</p>$$f(x)=f(0)+f'(0)x+\frac{f''(\xi_1)}{2}x^2.$$<p><b>第二步：与 (1) 的等式比较。</b>由 (1)，$f(x)-f(0)=xf'(\theta x)$，所以</p>$$xf'(\theta x)=f'(0)x+\frac{f''(\xi_1)}{2}x^2\ \Longrightarrow\ f'(\theta x)-f'(0)=\frac{f''(\xi_1)}{2}x\quad(x\ne0).$$<p><b>第三步：对 $f'$ 再用一次拉格朗日中值定理。</b>在以 $0$ 和 $\theta x$ 为端点的区间上（$\theta x\ne0$），存在介于 $0$ 与 $\theta x$ 之间的 $\eta$（依赖于 $x$），使</p>$$f'(\theta x)-f'(0)=f''(\eta)\cdot\theta x.$$<p>代入上式并约去 $x\ne0$：</p>$$f''(\eta)\,\theta=\frac{f''(\xi_1)}{2}.$$<p>因为 $f''(\eta)\ne0$，所以</p>$$\theta(x)=\frac{f''(\xi_1)}{2f''(\eta)}.$$<p><b>第四步：取极限。</b>$\xi_1$ 介于 $0$ 与 $x$ 之间，所以 $|\xi_1|<|x|$；$\eta$ 介于 $0$ 与 $\theta x$ 之间，所以 $|\eta|<|\theta x|<|x|$。由夹逼准则，$x\to0$ 时 $\xi_1\to0$，$\eta\to0$。再由 $f''$ 在 $0$ 点连续，$f''(\xi_1)\to f''(0)$，$f''(\eta)\to f''(0)$，且 $f''(0)\ne0$，所以</p>$$\lim_{x\to0}\theta(x)=\frac{f''(0)}{2f''(0)}=\frac12.$$<p>证毕。</p>`,
      pitfalls: R`<ul><li><b>唯一性只说一句"$f'$ 单调"</b>而不说明理由。必须交代清楚：$f''$ 连续且不为零 ⟹ 不变号 ⟹ $f'$ 严格单调；或者直接用罗尔定理反证。</li><li><b>对 $\theta(x)$ 直接求导或用洛必达</b>：$\theta(x)$ 只是"存在"，题目没有给出它的可导性甚至连续性，不能对它求导。</li><li><b>把中值点 $\xi_1,\eta$ 当成常数</b>：它们都随 $x$ 变化，取极限时要用 $|\xi_1|<|x|$、$|\eta|<|x|$ 夹逼说明它们趋于 $0$，再用 $f''$ 的连续性。这正是题目要求"二阶<b>连续</b>导数"的原因。</li><li>最后一步除以 $f''(0)$，要指出 $f''(0)\ne0$。</li></ul>`,
      summary: R`<p><b>方法要点</b>：①"$f(x)=f(0)+xf'(\theta x)$"就是拉格朗日中值定理；中值点唯一 ⟸ $f'$ 是单射 ⟸ $f''$ 不变号（或罗尔反证）。②求中值 $\theta(x)$ 的极限：对同一增量写出"含 $\theta$"与"高一阶精度"的两种展开，比较后解出 $\theta$，中值点用夹逼趋于定点，再用连续性取极限。</p><p><b>题型识别</b>：看到"中值点 $\theta$ 的唯一性"，想到单调性或罗尔反证；看到"$\lim\theta(x)$"，想到把中值定理再往前展开一阶（泰勒公式 / 对导函数再用一次中值定理）。一般地，若 $f^{(n+1)}(0)\ne0$，$f(x)=\sum_{k=0}^{n-1}\frac{f^{(k)}(0)}{k!}x^k+\frac{f^{(n)}(\theta x)}{n!}x^n$ 中的 $\theta\to\frac{1}{n+1}$。</p>`,
      alt: R`<p><b>(2) 的另解：佩亚诺余项泰勒公式。</b>由 $f''(0)$ 存在，$f'(u)=f'(0)+f''(0)u+o(u)$（$u\to0$）。取 $u=\theta x$，因 $|\theta x|<|x|$，$o(\theta x)=o(x)$，所以</p>$$xf'(\theta x)=f'(0)x+f''(0)\theta x^2+o(x^2).$$<p>又 $f(x)-f(0)=f'(0)x+\dfrac{f''(0)}{2}x^2+o(x^2)$。两式相等，相减后除以 $x^2$：$f''(0)\theta-\dfrac{f''(0)}{2}=o(1)$，即 $\theta(x)=\dfrac12+o(1)$，所以 $\lim\limits_{x\to0}\theta(x)=\dfrac12$。这个做法甚至不需要 $f''$ 在 $0$ 以外的点连续。</p>`,
      verify: { by: 'mixed', ok: true, note: '证明为人工严格推导；另用 sympy 对具体函数 f=e^x（f\'\'>0）显式解出 θ(x)=ln((e^x−1)/x)/x，并验证 x→0 时极限为 1/2' },
      flags: []
    },

    /* ───────────────────────── 八 ───────────────────────── */
    {
      id: '2001-8', year: 2001, no: '八', type: '解答', score: 8,
      stem: R`设有一高度为 $h(t)$（$t$ 为时间）的雪堆在融化过程中，其侧面满足方程 $z=h(t)-\dfrac{2(x^2+y^2)}{h(t)}$（设长度单位为厘米，时间单位为小时），已知体积减少的速率与侧面积成正比（比例系数 $0.9$），问高度为 $130$（厘米）的雪堆全部融化需多少小时？`,
      options: null,
      answer: R`$100$ 小时`,
      figure: null,
      kp: ['mint.field', 'mint.surf1', 'ode.app'],
      methods: ['截面法求体积', '曲面面积公式', '极坐标', '建立并求解微分方程'],
      difficulty: 4,
      analysis: R`<p>这是一道"积分 + 微分方程"的应用题，分三块：</p><ol><li><b>把体积 $V$ 和侧面积 $S$ 表示成高度 $h$ 的函数</b>——在每个固定时刻 $t$，$h$ 是一个常数，雪堆是一个确定的几何体，用重积分和曲面积分的公式算即可；</li><li><b>把文字条件翻译成方程</b>："体积减少的速率与侧面积成正比，比例系数 $0.9$"就是 $\dfrac{\mathrm{d}V}{\mathrm{d}t}=-0.9S$（体积在减少，导数为负）；</li><li><b>解微分方程</b>，求 $h(t)=0$ 的时刻。</li></ol><p>先弄清几何形状：侧面 $z=h-\dfrac{2(x^2+y^2)}{h}$ 是一个开口向下的旋转抛物面，顶点在 $(0,0,h)$，与地面 $z=0$ 交于圆 $x^2+y^2=\dfrac{h^2}{2}$（半径 $\dfrac{h}{\sqrt2}$）。雪堆就是这个抛物面和地面之间的部分；"侧面"指抛物面那一块，不包括底面。</p><p><b>第一性原理的洞察</b>：把方程改写成 $\dfrac zh=1-2\left(\dfrac xh\right)^2-2\left(\dfrac yh\right)^2$，可见不同时刻的雪堆形状<b>彼此相似</b>，只是按比例 $h$ 缩放。所以必然有 $V=c_1h^3$、$S=c_2h^2$。于是 $\dfrac{\mathrm{d}V}{\mathrm{d}t}=3c_1h^2h'=-0.9c_2h^2$，$h^2$ 约掉，$h'$ 是常数——<b>高度匀速下降</b>。剩下的工作只是把 $c_1,c_2$ 算出来。</p>`,
      solution: R`<p><b>第一步：求体积 $V$（截面法）。</b>固定时刻 $t$，记 $h=h(t)$。用高度为 $z$（$0\le z\le h$）的水平面去截雪堆，截面是圆盘：</p>$$h-\frac{2(x^2+y^2)}{h}\ge z\iff x^2+y^2\le\frac{h(h-z)}{2},$$<p>其面积为 $A(z)=\dfrac{\pi h(h-z)}{2}$。所以</p>$$V=\int_0^hA(z)\,\mathrm{d}z=\frac{\pi h}{2}\int_0^h(h-z)\,\mathrm{d}z=\frac{\pi h}{2}\cdot\frac{h^2}{2}=\frac{\pi h^3}{4}.$$<p><b>第二步：求侧面积 $S$。</b>侧面是曲面 $z=h-\dfrac{2(x^2+y^2)}{h}$ 在 $D:x^2+y^2\le\dfrac{h^2}{2}$ 上方的部分。由 $z_x=-\dfrac{4x}{h}$，$z_y=-\dfrac{4y}{h}$，曲面面积公式给出</p>$$S=\iint_D\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}x\,\mathrm{d}y=\iint_D\sqrt{1+\frac{16(x^2+y^2)}{h^2}}\,\mathrm{d}x\,\mathrm{d}y.$$<p>$D$ 是圆盘、被积函数只依赖 $x^2+y^2$，用极坐标：</p>$$S=\int_0^{2\pi}\mathrm{d}\theta\int_0^{h/\sqrt2}\sqrt{1+\frac{16r^2}{h^2}}\,r\,\mathrm{d}r.$$<p>令 $u=1+\dfrac{16r^2}{h^2}$，则 $\mathrm{d}u=\dfrac{32r}{h^2}\mathrm{d}r$，即 $r\,\mathrm{d}r=\dfrac{h^2}{32}\mathrm{d}u$；$r=0$ 时 $u=1$，$r=\dfrac{h}{\sqrt2}$ 时 $u=1+\dfrac{16}{h^2}\cdot\dfrac{h^2}{2}=9$。所以</p>$$\int_0^{h/\sqrt2}\sqrt{1+\frac{16r^2}{h^2}}\,r\,\mathrm{d}r=\frac{h^2}{32}\int_1^9u^{1/2}\,\mathrm{d}u=\frac{h^2}{32}\cdot\frac23\left(9^{3/2}-1\right)=\frac{h^2}{32}\cdot\frac{52}{3}=\frac{13h^2}{24},$$$$S=2\pi\cdot\frac{13h^2}{24}=\frac{13\pi h^2}{12}.$$<p><b>第三步：建立微分方程。</b>$V$ 通过 $h$ 依赖于 $t$，由链式法则 $\dfrac{\mathrm{d}V}{\mathrm{d}t}=\dfrac{\mathrm{d}V}{\mathrm{d}h}\cdot\dfrac{\mathrm{d}h}{\mathrm{d}t}=\dfrac{3\pi h^2}{4}h'(t)$。"体积减少的速率与侧面积成正比，比例系数 $0.9$"即</p>$$\frac{\mathrm{d}V}{\mathrm{d}t}=-0.9S\ \Longrightarrow\ \frac{3\pi h^2}{4}h'(t)=-0.9\cdot\frac{13\pi h^2}{12}.$$<p><b>第四步：解方程。</b>雪未化完时 $h>0$，两边约去 $\pi h^2$：</p>$$h'(t)=-0.9\cdot\frac{13}{12}\cdot\frac43=-0.9\cdot\frac{13}{9}=-\frac{13}{10}.$$<p>积分得 $h(t)=-\dfrac{13}{10}t+C$。由初始条件 $h(0)=130$ 得 $C=130$，所以</p>$$h(t)=130-\frac{13}{10}t.$$<p><b>第五步：求融化时间。</b>令 $h(T)=0$，得 $T=\dfrac{130}{13/10}=100$。即高度为 $130$ 厘米的雪堆经过 <b>100 小时</b>全部融化。</p>`,
      pitfalls: R`<ul><li><b>漏掉负号</b>：体积在减少，$\dfrac{\mathrm{d}V}{\mathrm{d}t}<0$，应写 $\dfrac{\mathrm{d}V}{\mathrm{d}t}=-0.9S$；漏掉负号会得到 $h$ 随时间增长的荒谬结果。</li><li><b>积分区域半径算错</b>：底面圆的半径是 $\dfrac{h}{\sqrt2}$（由 $z=0$ 得 $x^2+y^2=\dfrac{h^2}{2}$），不是 $h$。</li><li><b>侧面积里加了底面</b>：题目说的是侧面积，只算抛物面那一块。</li><li><b>把 $h$ 当常数对 $t$ 求导</b>：$V=\dfrac{\pi h^3}{4}$ 中 $h$ 是 $t$ 的函数，$\dfrac{\mathrm{d}V}{\mathrm{d}t}=\dfrac{3\pi h^2}{4}h'$，链式法则不能漏。</li><li>曲面面积公式记错，写成 $\sqrt{z_x^2+z_y^2}$ 或忘了极坐标的 $r$。</li></ul>`,
      summary: R`<p><b>方法要点</b>：几何/物理应用题分三步——①在固定时刻用积分把几何量（体积、面积）表示成参数 $h$ 的函数；②把"速率"翻译成对时间的导数，注意增减的符号；③链式法则把 $\dfrac{\mathrm{d}V}{\mathrm{d}t}$ 化为 $\dfrac{\mathrm{d}V}{\mathrm{d}h}\cdot\dfrac{\mathrm{d}h}{\mathrm{d}t}$，解微分方程。旋转体体积用截面法最快：$V=\int A(z)\,\mathrm{d}z$；曲面面积 $S=\iint_D\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}\sigma$。</p><p><b>题型识别</b>：看到"……的速率与……成正比"，想到列 $\dfrac{\mathrm{d}(\cdot)}{\mathrm{d}t}=\pm k(\cdot)$；看到形状方程里所有长度都按同一个参数缩放（相似形），想到 $V\propto h^3$、$S\propto h^2$，往往能预判结果（本题高度匀速下降）。</p>`,
      alt: R`<p><b>用二重积分直接求体积。</b>$V=\displaystyle\iint_D\left(h-\frac{2(x^2+y^2)}{h}\right)\mathrm{d}x\,\mathrm{d}y=\int_0^{2\pi}\mathrm{d}\theta\int_0^{h/\sqrt2}\left(h-\frac{2r^2}{h}\right)r\,\mathrm{d}r=2\pi\left[\frac{hr^2}{2}-\frac{r^4}{2h}\right]_0^{h/\sqrt2}=2\pi\left(\frac{h^3}{4}-\frac{h^3}{8}\right)=\frac{\pi h^3}{4}$，与截面法结果相同。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy：极坐标积分得 V=πh³/4、S=13πh²/12；由 V\'(h)·h\'=−0.9S 解得 h\'=−13/10，130/(13/10)=100' },
      flags: ['OCR 把"问高度为 130（厘米）"断成两行，已合并']
    }
  ];
});
