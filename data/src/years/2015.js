// 2015 年数学一 · 高等数学部分（共 13 题：第1、2、3、4、9、10、11、12、15、16、17、18、19题）
// 原卷编排：一、选择题(1)–(8)；二、填空题(9)–(14)；三、解答题(15)–(23)。
// 其中 (5)(6)(13)(20)(21) 属于线性代数，(7)(8)(14)(22)(23) 属于概率论与数理统计，未收录。
registerYear(2015, function (R) {
  return [
    /* ───────────────────────── 第1题 ───────────────────────── */
    {
      id: '2015-1', year: 2015, no: '第1题', type: '选择', score: 4,
      stem: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 上连续，其 2 阶导函数 $f''(x)$ 的图形如右图所示，则曲线 $y=f(x)$ 的拐点个数为`,
      options: [R`$0$`, R`$1$`, R`$2$`, R`$3$`],
      answer: 'C',
      figure: {
        file: 'papers/images/2015年考研数学(一)真题/c6f9e3106314deb729f84ebf17c829522532fccf52a6901247924bbc5c8e8f43.jpg',
        desc: R`图中画的是 $f''(x)$ 的图形（纵轴标为 $f''(x)$），分成左右两段，在 $x=0$ 处断开（$f''(0)$ 不存在）。<b>左段</b>（$x<0$ 部分）形状像开口向上的抛物线，在某点 $x=a$（$a<0$）处与 $x$ 轴<b>相切</b>，即 $f''(a)=0$，而在 $a$ 的左右两侧 $f''(x)$ 都大于 $0$；也就是说 $x<0$ 时 $f''(x)\ge0$，等号只在 $x=a$ 处成立。<b>右段</b>（$x>0$ 部分）从 $x$ 轴下方很低处（$x\to0^+$ 时向下无限延伸）单调上升，在某点 $x=b$（$b>0$）处<b>穿过</b> $x$ 轴：$0<x<b$ 时 $f''(x)<0$，$x>b$ 时 $f''(x)>0$。`
      },
      kp: ['diff.convex'],
      methods: ['拐点的判别：二阶导数两侧变号', '读图判号'],
      difficulty: 2,
      analysis: R`<p>这题考<b>拐点</b>的概念与判别。先回到定义：拐点是<b>连续曲线上凹弧与凸弧的分界点</b>。而曲线向哪边弯，由 $f''$ 的符号决定：</p><ul><li>$f''>0$ 的区间上，$f'$ 单调增加，切线斜率越来越大，曲线"向上弯"（凹，下凸）；</li><li>$f''<0$ 的区间上，$f'$ 单调减少，切线斜率越来越小，曲线"向下弯"（凸，上凸）。</li></ul><p>所以"找拐点"的本质就是"找 $f''$ <b>变号</b>的地方"。$f''$ 能变号的地方只有两类候选点：</p><ol><li>$f''(x)=0$ 的点；</li><li>$f''(x)$ 不存在、但 $f(x)$ 连续的点。</li></ol><p>题目恰好把 $f''$ 的图像给出来了，我们不用算任何东西，只要<b>在图上找出全部候选点，再逐个看两侧的符号</b>。特别提醒：题目专门写了"$f(x)$ 在 $(-\infty,+\infty)$ 上连续"，这句话就是为 $x=0$ 这个"$f''$ 不存在的点"准备的。</p>`,
      solution: R`<p><b>第一步：找出全部候选点。</b>从图上看：</p><ul><li>$x=a$（$a<0$）：$f''(a)=0$，图像在这里与 $x$ 轴相切；</li><li>$x=0$：$f''$ 的图像在这里断开，$f''(0)$ 不存在，但 $f$ 在 $x=0$ 连续（题设）；</li><li>$x=b$（$b>0$）：$f''(b)=0$，图像在这里穿过 $x$ 轴。</li></ul><p>除此以外 $f''$ 处处存在且不为零，不可能再有拐点。</p><p><b>第二步：逐个判断两侧符号。</b></p><table><thead><tr><th>候选点</th><th>左侧 $f''$</th><th>右侧 $f''$</th><th>是否变号</th><th>结论</th></tr></thead><tbody><tr><td>$x=a$</td><td>$+$</td><td>$+$</td><td>否（只是碰一下 $x$ 轴）</td><td>不是拐点</td></tr><tr><td>$x=0$</td><td>$+$</td><td>$-$</td><td>是</td><td>$(0,f(0))$ 是拐点</td></tr><tr><td>$x=b$</td><td>$-$</td><td>$+$</td><td>是</td><td>$(b,f(b))$ 是拐点</td></tr></tbody></table><p><b>第三步：解释 $x=0$ 为什么算。</b>在 $x=0$ 左边曲线是凹的，右边是凸的，而 $f$ 在 $x=0$ 连续，曲线在 $(0,f(0))$ 处没有断开，于是这一点正是凹弧与凸弧的分界点，符合拐点的定义。定义里只要求"曲线连续、凹凸性改变"，并不要求 $f''$ 在该点存在。</p><p><b>第四步：结论。</b>拐点共 $2$ 个，选 <b>C</b>。</p><p><b>错误选项分析：</b></p><ul><li>A（0 个）：既不认 $f''$ 不存在的点，又没看到 $x=b$ 处的穿越，显然漏判。</li><li>B（1 个）：通常是只数了 $x=b$，误以为"$f''$ 不存在的点不可能是拐点"。</li><li>D（3 个）：把 $x=a$ 也算进去了，误以为"$f''=0$ 的点就是拐点"。$x=a$ 两侧都是凹的，曲线在那里并没有改变弯曲方向。</li></ul>`,
      pitfalls: R`<p>① <b>$f''(x_0)=0$ 不等于拐点。</b>反例：$f(x)=x^4$，$f''(0)=0$，但 $f''(x)=12x^2\ge0$ 两侧同号，原点不是拐点。本题的 $x=a$ 就是这种"切而不穿"的情况。</p><p>② <b>$f''$ 不存在的点也可能是拐点。</b>反例：$f(x)=\sqrt[3]{x}$，$f''(x)=-\frac29x^{-5/3}$ 在 $x=0$ 不存在，但 $x<0$ 时 $f''>0$、$x>0$ 时 $f''<0$，原点是拐点。很多同学只解 $f''=0$，漏掉这一类。</p><p>③ 读图时别把 $f''$ 的图当成 $f$ 的图去看"弯曲方向"。图上曲线本身的凹凸与 $f$ 的凹凸毫无关系，我们只关心它在 $x$ 轴上方还是下方。</p>`,
      summary: R`<p><b>方法要点：</b>拐点 = 连续曲线上 $f''$ 变号的点；候选点 = $f''=0$ 的点 + $f''$ 不存在的点；逐个看两侧符号。</p><p><b>看到…想到…：</b></p><ul><li>看到"给出 $f''$ 的图像问拐点"，就去找图像<b>穿过</b> $x$ 轴的点和图像<b>断开</b>的点，再看两侧符号；与 $x$ 轴相切而不穿过的点不算。</li><li>看到"给出 $f'$ 的图像问极值点"，做法完全平行：找 $f'$ 变号的点（包括 $f'$ 不存在的点）。</li></ul><p><b>口诀：</b>"极值看一阶变号，拐点看二阶变号；等于零的、不存在的，两类候选都要查。"</p>`,
      verify: { by: 'manual', ok: true, note: '读图核对：x=a 处二阶导与 x 轴相切、两侧同正；x=0 处二阶导不存在且左正右负；x=b 处左负右正；拐点 2 个，与参考解析一致' },
      flags: ['OCR 稿中本题图片被排在第(2)题题干之后，按题意（"如右图所示"）归属第(1)题']
    },

    /* ───────────────────────── 第2题 ───────────────────────── */
    {
      id: '2015-2', year: 2015, no: '第2题', type: '选择', score: 4,
      stem: R`设 $y=\dfrac12e^{2x}+\left(x-\dfrac13\right)e^{x}$ 是二阶常系数非齐次线性微分方程 $y''+ay'+by=ce^{x}$ 的一个特解，则`,
      options: [R`$a=-3,\ b=2,\ c=-1$`, R`$a=3,\ b=2,\ c=-1$`, R`$a=-3,\ b=2,\ c=1$`, R`$a=3,\ b=2,\ c=1$`],
      answer: 'A',
      figure: null,
      kp: ['ode.const', 'ode.linear'],
      methods: ['线性微分方程解的结构', '特征方程与韦达定理', '代入比较系数'],
      difficulty: 2,
      analysis: R`<p>这是"<b>已知解，反求方程</b>"的题。最根本的工具是下面这个事实（第一性原理）：记 $L[y]=y''+ay'+by$，特征多项式 $p(\lambda)=\lambda^2+a\lambda+b$，则</p>$$L[e^{\lambda x}]=(\lambda^2+a\lambda+b)e^{\lambda x}=p(\lambda)e^{\lambda x}.$$<p>也就是说，算子 $L$ 作用在指数函数 $e^{\lambda x}$ 上，效果只是"乘一个数 $p(\lambda)$"。</p><p>现在已知的特解里有 $e^{2x}$ 这一块，而方程右边只有 $ce^{x}$，没有 $e^{2x}$。$e^{2x}$ 代进去产生的 $p(2)e^{2x}$ 没有任何东西能抵消，所以只能 $p(2)=0$——即 $2$ 是特征根，$e^{2x}$ 本来就是齐次方程的解。同样的想法用到 $xe^{x}$ 上就能得到 $1$ 也是特征根。两个特征根一定，$a,b$ 就确定了，最后再代入求 $c$。</p>`,
      solution: R`<p><b>第一步：把特解拆成三块。</b></p>$$y=\frac12e^{2x}-\frac13e^{x}+xe^{x}.$$<p><b>第二步：算出 $L$ 作用在每一块上的结果。</b>记 $p(\lambda)=\lambda^2+a\lambda+b$，$p'(\lambda)=2\lambda+a$。</p><ul><li>$L[e^{2x}]=(4+2a+b)e^{2x}=p(2)e^{2x}$；</li><li>$L[e^{x}]=(1+a+b)e^{x}=p(1)e^{x}$；</li><li>对 $xe^{x}$：$(xe^{x})'=(x+1)e^{x}$，$(xe^{x})''=(x+2)e^{x}$，所以</li></ul>$$L[xe^{x}]=\big[(x+2)+a(x+1)+bx\big]e^{x}=(1+a+b)\,xe^{x}+(2+a)\,e^{x}=p(1)\,xe^{x}+p'(1)\,e^{x}.$$<p><b>第三步：代入方程。</b>由线性性，</p>$$L[y]=\frac12p(2)e^{2x}+p(1)\,xe^{x}+\Big(p'(1)-\frac13p(1)\Big)e^{x}=ce^{x}.$$<p><b>第四步：比较系数。</b>函数 $e^{2x},\ xe^{x},\ e^{x}$ 线性无关（两边同除以 $e^{x}$ 得 $\alpha e^{x}+\beta x+\gamma\equiv0$，由于 $e^x$ 不是一次多项式，只能 $\alpha=\beta=\gamma=0$），所以对应系数必须相等：</p>$$\begin{cases}p(2)=4+2a+b=0,\\ p(1)=1+a+b=0,\\ c=p'(1)-\frac13p(1)=2+a.\end{cases}$$<p>前两式相减得 $3+a=0$，即 $a=-3$；代回得 $b=2$；于是 $c=2+(-3)=-1$。</p><p><b>第五步：检验。</b>$a=-3,b=2$ 时 $p(\lambda)=(\lambda-1)(\lambda-2)$，特征根正是 $1,2$。直接代入：$L[xe^{x}]=p'(1)e^{x}=(2-3)e^{x}=-e^{x}$，而 $e^{2x},e^{x}$ 都是齐次解，$L$ 作用后为零，所以 $L[y]=-e^{x}$，$c=-1$ 无误。选 <b>A</b>。</p><p><b>错误选项分析：</b>B、D 中 $a=3,b=2$，特征方程 $\lambda^2+3\lambda+2=0$ 的根是 $-1,-2$，此时 $L[e^{2x}]=12e^{2x}\ne0$，右边却没有 $e^{2x}$ 项，矛盾；C 的 $a,b$ 对了但 $c$ 的符号错了，往往是代入 $xe^{x}$ 时算错了 $2+a$。</p>`,
      pitfalls: R`<p>① <b>韦达定理符号错。</b>特征根 $1,2$ 对应 $\lambda^2-(1+2)\lambda+1\cdot2=0$，所以 $a=-3$ 而不是 $3$。</p><p>② <b>求 $c$ 时把 $-\frac13e^{x}$ 当成"非齐次部分"去算。</b>$e^{x}$ 是齐次解，$L[e^{x}]=0$，它对 $c$ 没有任何贡献；真正产生右边 $ce^{x}$ 的是 $xe^{x}$。原因是 $1$ 是单特征根，自由项 $e^{x}$ 对应的特解形式是 $Axe^{x}$，必须多乘一个 $x$。</p><p>③ 只把整个 $y$ 代入、只比较 $e^{x}$ 的系数，忘了 $e^{2x}$、$xe^{x}$ 的系数也必须为零，方程个数不够解不出三个未知数。</p>`,
      summary: R`<p><b>方法要点：</b>$L[e^{\lambda x}]=p(\lambda)e^{\lambda x}$，$L[xe^{\lambda x}]=p(\lambda)xe^{\lambda x}+p'(\lambda)e^{\lambda x}$。已知特解反求方程：自由项里没有的指数块，一定来自齐次通解，由此读出特征根。</p><p><b>看到…想到…：</b></p><ul><li>看到"已知非齐次方程的某个特解，求方程系数"，把特解拆成 $e^{\lambda x}$、$xe^{\lambda x}$ 这样的块；</li><li>与自由项"对不上"的块 → 齐次解 → 特征根 → 韦达定理定 $a,b$；</li><li>剩下的块（通常带 $x$ 因子）→ 代入方程定 $c$。</li></ul><p><b>熟记：</b>自由项 $P_m(x)e^{\mu x}$ 的特解设为 $x^kQ_m(x)e^{\mu x}$，$k$ 等于 $\mu$ 作为特征根的重数（0、1、2）。</p>`,
      alt: R`<p><b>考场速解：</b>特解里 $e^{2x}$ 和 $e^{x}$ 是"孤零零"出现的，而且自由项只有 $e^{x}$，按解的结构"非齐次通解 = 齐次通解 + 非齐次特解"，可判断 $\frac12e^{2x}$ 和 $-\frac13e^{x}$ 属于齐次解部分，于是特征根为 $1,2$，特征方程 $\lambda^2-3\lambda+2=0$，得 $a=-3,b=2$。剩下的 $xe^{x}$ 是非齐次方程的特解，代入 $y''-3y'+2y=ce^{x}$：$(x+2)-3(x+1)+2x=-1$，所以 $c=-1$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 把 y 代入 y\'\'+ay\'+by-ce^x 并按 e^{2x}、xe^x、e^x 分离系数，solve 得 a=-3, b=2, c=-1；再代回 y\'\'-3y\'+2y 化简为 -e^x' },
      flags: []
    },

    /* ───────────────────────── 第3题 ───────────────────────── */
    {
      id: '2015-3', year: 2015, no: '第3题', type: '选择', score: 4,
      stem: R`若级数 $\displaystyle\sum_{n=1}^{\infty}a_n$ 条件收敛，则 $x=\sqrt3$ 与 $x=3$ 依次为幂级数 $\displaystyle\sum_{n=1}^{\infty}na_n(x-1)^n$ 的`,
      options: [R`收敛点，收敛点`, R`收敛点，发散点`, R`发散点，收敛点`, R`发散点，发散点`],
      answer: 'B',
      figure: null,
      kp: ['series.power', 'series.alt'],
      methods: ['阿贝尔定理', '条件收敛点是收敛区间端点', '逐项求导不改变收敛半径', '换元 t=x-1'],
      difficulty: 3,
      analysis: R`<p>判断幂级数在某点收敛还是发散，核心工具是<b>阿贝尔定理</b>及其推论：幂级数 $\sum c_nt^n$ 存在收敛半径 $R$，在 $|t|<R$ 内<b>绝对收敛</b>，在 $|t|>R$ 处<b>发散</b>，只有端点 $|t|=R$ 需要单独讨论。所以本题的任务是求出 $\sum na_n(x-1)^n$ 的收敛半径和中心。</p><p>题目给的唯一信息是"$\sum a_n$ 条件收敛"，它看似和幂级数无关，其实是一个很强的信号：把它看成幂级数 $\sum a_nt^n$ 在 $t=1$ 处的情况——<b>在 $t=1$ 处收敛但不绝对收敛</b>。由阿贝尔定理，开区间内部的点必定绝对收敛，所以 $t=1$ 不可能在收敛区间内部，只能恰好是端点，从而 $R=1$。</p><p>再注意两点：系数多乘一个 $n$ 不改变收敛半径（逐项求导不改变收敛半径）；幂级数的中心在 $x=1$ 而不是 $x=0$。</p>`,
      solution: R`<p><b>第一步：换元。</b>令 $t=x-1$，幂级数变为 $\sum na_nt^n$。题目中的两个点对应</p>$$x=\sqrt3\ \Rightarrow\ t=\sqrt3-1\approx0.732,\qquad x=3\ \Rightarrow\ t=2.$$<p><b>第二步：求 $\sum a_nt^n$ 的收敛半径 $R$。</b></p><ul><li>$t=1$ 时 $\sum a_n$ 收敛，由阿贝尔定理，$|t|<1$ 时 $\sum a_nt^n$ 都绝对收敛，所以 $R\ge1$。</li><li>若 $R>1$，则 $t=1$ 在收敛区间内部，$\sum a_n$ 应当绝对收敛，这与"条件收敛"（即 $\sum|a_n|$ 发散）矛盾，所以 $R\le1$。</li></ul><p>因此 $R=1$。</p><p><b>第三步：说明 $\sum na_nt^n$ 的收敛半径也是 $1$。</b>$\sum na_nt^{n-1}$ 是 $\sum a_nt^n$ 的逐项求导，逐项求导不改变收敛半径；再乘以 $t$ 不影响 $t\ne0$ 处的敛散性。所以 $\sum na_nt^n$ 的收敛半径也是 $1$。</p><p>（若想直接证明：当 $|t|<1$ 时取 $\rho$ 满足 $|t|<\rho<1$，由于 $\sum a_n$ 收敛，$a_n\to0$，故 $|a_n|\rho^n\le M$，从而 $|na_nt^n|\le M\,n\left(\frac{|t|}{\rho}\right)^n$，而 $\sum nq^n\ (0\le q<1)$ 收敛，所以绝对收敛；当 $|t|>1$ 时，若 $\sum na_nt^n$ 收敛，取 $1<|s|<|t|$，由阿贝尔定理 $\sum n|a_n||s|^n$ 收敛，又 $|a_ns^n|\le n|a_n||s|^n$，推出 $\sum a_ns^n$ 在 $|s|>1$ 处绝对收敛，与 $R=1$ 矛盾。）</p><p><b>第四步：判断两个点。</b></p><ul><li>$t=\sqrt3-1$：因为 $1<\sqrt3<2$，所以 $0<t<1$，在收敛区间内部，<b>绝对收敛</b>，$x=\sqrt3$ 是收敛点；</li><li>$t=2$：$|t|=2>1$，在收敛区间外部，<b>发散</b>，$x=3$ 是发散点。</li></ul><p>选 <b>B</b>。</p><p><b>用具体例子验证：</b>取 $a_n=\frac{(-1)^n}{n}$（交错调和级数，条件收敛），则 $\sum na_n(x-1)^n=\sum(-1)^n(x-1)^n$ 是公比为 $-(x-1)$ 的等比级数，$|x-1|<1$ 即 $0<x<2$ 时收敛。$x=\sqrt3$ 在其中，$x=3$ 不在，与结论一致。</p><p><b>错误选项分析：</b>C、D 把 $x=\sqrt3$ 判成发散点，多半是忘了中心是 $x=1$，以为收敛区间是 $(-1,1)$，于是 $\sqrt3>1$ 就"出界"了；A 把 $x=3$ 判成收敛点，没有意识到 $|3-1|=2>R$。</p>`,
      pitfalls: R`<p>① <b>忽视中心。</b>$\sum c_n(x-1)^n$ 的收敛区间以 $x=1$ 为中心，是 $(0,2)$，而不是 $(-1,1)$。</p><p>② <b>以为系数乘 $n$ 会改变收敛半径。</b>乘 $n$、除以 $n$（相当于逐项求导、逐项积分）都不改变收敛半径，只可能改变端点处的敛散性。所以本题端点 $x=0,2$ 处的情况可能变化，但 $x=\sqrt3$（内部）与 $x=3$（外部）不受影响。</p><p>③ <b>不会用"条件收敛"这个条件。</b>要记住结论：条件收敛的点一定是收敛区间的端点。若只知道"收敛"，只能得到 $R\ge1$；正是"不绝对收敛"才把 $R$ 卡死为 $1$。</p>`,
      summary: R`<p><b>方法要点：</b>阿贝尔定理 ⇒ 幂级数的收敛域是以中心为对称中心的区间；"内部绝对收敛，外部发散，端点单独看"。</p><p><b>看到…想到…：</b></p><ul><li>看到"$\sum a_nx_0^n$ 条件收敛"，立刻得出：$x_0$ 是 $\sum a_nx^n$ 收敛区间的端点，收敛半径 $R=|x_0|$；</li><li>看到"$\sum a_nx_0^n$ 收敛"，只能得 $R\ge|x_0|$；看到"发散"，只能得 $R\le|x_0|$；</li><li>看到系数乘 $n$、除以 $n$、乘 $n^2$ 等，收敛半径不变；</li><li>看到 $(x-x_0)^n$，先换元 $t=x-x_0$，最后再换回来。</li></ul>`,
      verify: { by: 'mixed', ok: true, note: '推理按阿贝尔定理得 R=1；sympy 对例子 a_n=(-1)^n/n 计算 Σ(-1)^n t^n 在 |t|<1 时收敛为 -t/(1+t)，t=√3-1 收敛、t=2 发散，与选 B 一致' },
      flags: []
    },

    /* ───────────────────────── 第4题 ───────────────────────── */
    {
      id: '2015-4', year: 2015, no: '第4题', type: '选择', score: 4,
      stem: R`设 $D$ 是第一象限中的曲线 $2xy=1,\ 4xy=1$ 与直线 $y=x,\ y=\sqrt3x$ 围成的平面区域，函数 $f(x,y)$ 在 $D$ 上连续，则 $\displaystyle\iint_Df(x,y)\,dx\,dy=$`,
      options: [
        R`$\displaystyle\int_{\frac{\pi}{4}}^{\frac{\pi}{3}}d\theta\int_{\frac{1}{2\sin2\theta}}^{\frac{1}{\sin2\theta}}f(r\cos\theta,r\sin\theta)\,r\,dr$`,
        R`$\displaystyle\int_{\frac{\pi}{4}}^{\frac{\pi}{3}}d\theta\int_{\frac{1}{\sqrt{2\sin2\theta}}}^{\frac{1}{\sqrt{\sin2\theta}}}f(r\cos\theta,r\sin\theta)\,r\,dr$`,
        R`$\displaystyle\int_{\frac{\pi}{4}}^{\frac{\pi}{3}}d\theta\int_{\frac{1}{2\sin2\theta}}^{\frac{1}{\sin2\theta}}f(r\cos\theta,r\sin\theta)\,dr$`,
        R`$\displaystyle\int_{\frac{\pi}{4}}^{\frac{\pi}{3}}d\theta\int_{\frac{1}{\sqrt{2\sin2\theta}}}^{\frac{1}{\sqrt{\sin2\theta}}}f(r\cos\theta,r\sin\theta)\,dr$`
      ],
      answer: 'B',
      figure: null,
      kp: ['mint.double'],
      methods: ['极坐标计算二重积分', '边界曲线化为极坐标方程'],
      difficulty: 2,
      analysis: R`<p>四个选项都已经是极坐标形式，题目考的是"<b>直角坐标区域 → 极坐标积分限</b>"的转换。</p><p>为什么极坐标在这里自然？区域的两条直边 $y=x$、$y=\sqrt3x$ 都是<b>过原点的射线</b>，在极坐标下就是 $\theta=$ 常数，非常简洁；另两条边 $xy=$ 常数，而 $xy=r^2\cos\theta\sin\theta=\frac12r^2\sin2\theta$，可以很方便地解出 $r=r(\theta)$。</p><p>极坐标定限的基本手法：<b>射线定 $\theta$，从原点出发沿射线走，先碰到的曲线是 $r$ 的下限，后碰到的是上限</b>；最后别忘了面积元 $d\sigma=r\,dr\,d\theta$ 中的 $r$。</p>`,
      solution: R`<p><b>第一步：定 $\theta$ 的范围。</b>$y=x$ 即 $\tan\theta=1$，在第一象限 $\theta=\frac\pi4$；$y=\sqrt3x$ 即 $\tan\theta=\sqrt3$，$\theta=\frac\pi3$。区域夹在两条射线之间，所以 $\frac\pi4\le\theta\le\frac\pi3$。</p><p><b>第二步：把两条双曲线化成极坐标。</b>代入 $x=r\cos\theta,\ y=r\sin\theta$：</p>$$2xy=2r^2\sin\theta\cos\theta=r^2\sin2\theta.$$<ul><li>$2xy=1$：$r^2\sin2\theta=1$，$r=\dfrac{1}{\sqrt{\sin2\theta}}$；</li><li>$4xy=1$：$2r^2\sin2\theta=1$，$r=\dfrac{1}{\sqrt{2\sin2\theta}}$。</li></ul><p>在 $\left[\frac\pi4,\frac\pi3\right]$ 上 $2\theta\in\left[\frac\pi2,\frac{2\pi}3\right]$，$\sin2\theta\ge\frac{\sqrt3}2>0$，开方有意义。</p><p><b>第三步：判断内外。</b>对同一个 $\theta$，$\dfrac{1}{\sqrt{2\sin2\theta}}<\dfrac{1}{\sqrt{\sin2\theta}}$，所以从原点沿射线出发，先碰到 $4xy=1$（即 $xy=\frac14$），再碰到 $2xy=1$（即 $xy=\frac12$）。这与直观一致：$xy$ 越小的双曲线离原点越近。于是</p>$$\frac{1}{\sqrt{2\sin2\theta}}\le r\le\frac{1}{\sqrt{\sin2\theta}}.$$<p><b>第四步：写出积分。</b>极坐标面积元 $d\sigma=r\,dr\,d\theta$（极坐标下的小"扇环"径向长 $dr$、弧长 $r\,d\theta$，近似为矩形，面积 $r\,dr\,d\theta$），所以</p>$$\iint_Df(x,y)\,dx\,dy=\int_{\frac\pi4}^{\frac\pi3}d\theta\int_{\frac{1}{\sqrt{2\sin2\theta}}}^{\frac{1}{\sqrt{\sin2\theta}}}f(r\cos\theta,r\sin\theta)\,r\,dr.$$<p>选 <b>B</b>。</p><p><b>错误选项分析：</b>A、C 的 $r$ 上下限少了根号，是把 $r^2\sin2\theta=1$ 误解成 $r\sin2\theta=1$；C、D 漏掉了面积元中的因子 $r$。</p>`,
      pitfalls: R`<p>① <b>漏掉面积元中的 $r$。</b>$dx\,dy=r\,dr\,d\theta$，这个 $r$ 是雅可比行列式 $\left|\frac{\partial(x,y)}{\partial(r,\theta)}\right|=r$，不能丢。</p><p>② <b>解 $r$ 时忘记开方。</b>$xy$ 是二次式，化成极坐标后是 $r^2$，所以 $r$ 的限一定带根号。</p><p>③ <b>内外搞反。</b>可以取一个具体的 $\theta$（如 $\theta=\frac\pi4$，$\sin2\theta=1$）代入：两个限分别是 $\frac1{\sqrt2}$ 和 $1$，小的是下限。</p>`,
      summary: R`<p><b>方法要点：</b>极坐标定限"射线定 $\theta$，曲线定 $r$；从原点出发，先碰为下，后碰为上；面积元别忘 $r$"。</p><p><b>看到…想到…：</b>看到积分区域的边界含有过原点的直线 $y=kx$、圆 $x^2+y^2=a^2$ 或 $x^2+y^2=2ax$，或被积函数含 $x^2+y^2$，或边界是 $xy=c$ 这类"乘起来"的曲线，都优先考虑极坐标。常用换算：$x^2+y^2=r^2$，$xy=\frac12r^2\sin2\theta$，$x^2-y^2=r^2\cos2\theta$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 2r²cosθ sinθ=1 解得 r=1/√(sin2θ)，4r²cosθ sinθ=1 解得 r=1/√(2sin2θ)；用 B 的积分限算区域面积为 ln3/16，与换元 u=xy, v=y/x 算出的面积 (1/4)(1/2)(ln3/2)=ln3/16 一致' },
      flags: ['OCR 稿漏掉了选项 (D) 的标号，按顺序补为第四个选项；选项 (C) 前的多余空格已去掉']
    },

    /* ───────────────────────── 第9题 ───────────────────────── */
    {
      id: '2015-9', year: 2015, no: '第9题', type: '填空', score: 4,
      stem: R`$\displaystyle\lim_{x\to0}\frac{\ln(\cos x)}{x^2}=$______.`,
      options: null,
      answer: R`$-\dfrac12$`,
      figure: null,
      kp: ['lim.compute', 'lim.inf'],
      methods: ['等价无穷小代换', '"减 1"技巧：ln(1+u)~u'],
      difficulty: 1,
      analysis: R`<p>$x\to0$ 时 $\cos x\to1$，$\ln(\cos x)\to\ln1=0$，分母 $x^2\to0$，是 $\frac00$ 型。</p><p>关键观察：$\ln$ 里面的东西趋于 $1$ 而不是趋于 $0$。我们熟悉的等价无穷小是 $\ln(1+u)\sim u\ (u\to0)$，所以要把 $\cos x$ 改写成"$1+$ 一个无穷小"的形式：$\cos x=1+(\cos x-1)$。这就是常说的"<b>减 1 技巧</b>"：$\ln(\text{趋于 1 的量})\sim\text{该量}-1$。</p>`,
      solution: R`<p><b>第一步：改写。</b></p>$$\ln(\cos x)=\ln\big[1+(\cos x-1)\big].$$<p><b>第二步：第一次等价代换。</b>令 $u=\cos x-1$，$x\to0$ 时 $u\to0$，所以 $\ln(1+u)\sim u$，即</p>$$\ln(\cos x)\sim\cos x-1\qquad(x\to0).$$<p><b>第三步：第二次等价代换。</b>$1-\cos x\sim\frac12x^2$，所以 $\cos x-1\sim-\frac12x^2$。</p><p><b>第四步：求极限。</b>分子作为整体（乘除因子）可以用等价无穷小替换：</p>$$\lim_{x\to0}\frac{\ln(\cos x)}{x^2}=\lim_{x\to0}\frac{-\frac12x^2}{x^2}=-\frac12.$$`,
      pitfalls: R`<p>① 写成 $\ln(\cos x)\sim\cos x$ 是错的：$\ln u\sim u$ 根本不成立，正确的是 $\ln u\sim u-1\ (u\to1)$。</p><p>② 符号：$\cos x-1\sim-\frac12x^2$，是负的；漏掉负号会得到 $\frac12$。</p><p>③ 等价代换只能用于整个分子或分母（乘除因子），本题分子整体就是 $\ln(\cos x)$，可以放心替换。</p>`,
      summary: R`<p><b>方法要点：</b>$\ln f(x)$ 且 $f(x)\to1$ 时，$\ln f(x)=\ln[1+(f(x)-1)]\sim f(x)-1$。</p><p><b>看到…想到…：</b>看到"$\ln$(趋于 1 的东西)"或 $1^\infty$ 型，就想到"减 1"：把底数写成 $1+(\text{底数}-1)$。常用：$1-\cos x\sim\frac12x^2$，$\ln(1+x)\sim x$，$e^x-1\sim x$。</p>`,
      alt: R`<p><b>洛必达法则：</b>$\displaystyle\lim_{x\to0}\frac{\ln(\cos x)}{x^2}=\lim_{x\to0}\frac{-\tan x}{2x}=-\frac12$。</p><p><b>泰勒展开：</b>$\cos x=1-\frac{x^2}2+o(x^2)$，$\ln(1+u)=u+o(u)$，所以 $\ln\cos x=-\frac{x^2}2+o(x^2)$，极限为 $-\frac12$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit(log(cos(x))/x**2, x, 0) = -1/2' },
      flags: []
    },

    /* ───────────────────────── 第10题 ───────────────────────── */
    {
      id: '2015-10', year: 2015, no: '第10题', type: '填空', score: 4,
      stem: R`$\displaystyle\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\left(\frac{\sin x}{1+\cos x}+|x|\right)dx=$______.`,
      options: null,
      answer: R`$\dfrac{\pi^2}{4}$`,
      figure: null,
      kp: ['int.defcalc'],
      methods: ['对称区间上奇偶函数的积分性质', '绝对值函数分段积分'],
      difficulty: 1,
      analysis: R`<p>积分区间 $\left[-\frac\pi2,\frac\pi2\right]$ 关于原点对称——看到<b>对称区间</b>，第一反应就是<b>检查被积函数的奇偶性</b>：奇函数部分积分为 $0$，偶函数部分化为两倍的半区间积分。</p><p>$\frac{\sin x}{1+\cos x}$：分子奇、分母偶，整体是奇函数；$|x|$ 是偶函数。于是第一项直接消失，只需算 $|x|$ 的积分。</p>`,
      solution: R`<p><b>第一步：检验可积并判断奇偶性。</b>在 $\left[-\frac\pi2,\frac\pi2\right]$ 上 $\cos x\ge0$，所以 $1+\cos x\ge1>0$，被积函数连续，是普通定积分。记 $g(x)=\frac{\sin x}{1+\cos x}$，则</p>$$g(-x)=\frac{\sin(-x)}{1+\cos(-x)}=\frac{-\sin x}{1+\cos x}=-g(x),$$<p>$g$ 是奇函数；而 $|-x|=|x|$，$|x|$ 是偶函数。</p><p><b>第二步：拆开，用对称性。</b></p>$$\int_{-\frac\pi2}^{\frac\pi2}g(x)\,dx=0,\qquad\int_{-\frac\pi2}^{\frac\pi2}|x|\,dx=2\int_0^{\frac\pi2}x\,dx.$$<p><b>第三步：计算。</b></p>$$2\int_0^{\frac\pi2}x\,dx=2\cdot\frac12\left(\frac\pi2\right)^2=\frac{\pi^2}4.$$<p>所以原积分 $=0+\dfrac{\pi^2}4=\dfrac{\pi^2}4$。</p><p><b>几何验证：</b>$\int_{-\pi/2}^{\pi/2}|x|\,dx$ 是两个直角边都为 $\frac\pi2$ 的等腰直角三角形面积之和：$2\times\frac12\left(\frac\pi2\right)^2=\frac{\pi^2}4$。</p>`,
      pitfalls: R`<p>① <b>绝对值没去掉就直接积</b>：$\int_{-\pi/2}^{\pi/2}x\,dx=0$，于是错得 $0$。$|x|$ 必须分段或用偶函数性质。</p><p>② <b>"奇函数积分为零"要有前提</b>：区间对称，且积分本身存在（收敛）。反例：$\int_{-1}^{1}\frac{dx}{x}$ 的被积函数是奇函数，但这是发散的反常积分，不能说它等于 $0$。本题 $1+\cos x\ge1$，没有这个问题。</p><p>③ 硬算 $\int\frac{\sin x}{1+\cos x}dx=-\ln(1+\cos x)+C$ 也可以，但浪费时间，而且容易在代值时出错。</p>`,
      summary: R`<p><b>方法要点：</b>$\displaystyle\int_{-a}^{a}f(x)\,dx=\int_0^a[f(x)+f(-x)]\,dx$；奇函数积分为 $0$，偶函数积分为 $2\int_0^a$。</p><p><b>看到…想到…：</b>看到对称区间 $[-a,a]$，先把被积函数拆成奇、偶两部分，奇的扔掉，偶的翻倍。常见奇函数"零件"：$\sin x$、$\tan x$、$x^{2k+1}$、$\ln\frac{1-x}{1+x}$、$\ln(x+\sqrt{1+x^2})$，以及"奇函数 × 偶函数"。</p>`,
      alt: R`<p>也可以直接求原函数验证第一项为零：$\frac{\sin x}{1+\cos x}=\frac{2\sin\frac x2\cos\frac x2}{2\cos^2\frac x2}=\tan\frac x2$，原函数为 $-2\ln\left|\cos\frac x2\right|$，在 $\pm\frac\pi2$ 处取值相同，所以积分为 $0$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(sin(x)/(1+cos(x)), (x,-pi/2,pi/2)) = 0，integrate(Abs(x), (x,-pi/2,pi/2)) = pi**2/4' },
      flags: []
    },

    /* ───────────────────────── 第11题 ───────────────────────── */
    {
      id: '2015-11', year: 2015, no: '第11题', type: '填空', score: 4,
      stem: R`若函数 $z=z(x,y)$ 由方程 $e^{z}+xyz+x+\cos x=2$ 确定，则 $dz\big|_{(0,1)}=$______.`,
      options: null,
      answer: R`$-dx$`,
      figure: null,
      kp: ['mdiff.implicit', 'mdiff.diffable'],
      methods: ['隐函数求偏导公式', '全微分形式不变性（两边求全微分）'],
      difficulty: 2,
      analysis: R`<p>$z$ 由方程<b>隐式</b>确定，解不出显式表达式，只能用<b>隐函数求导</b>。题目要的是 $(0,1)$ 这一点的全微分 $dz=z_x\,dx+z_y\,dy$，所以需要该点的两个偏导数。</p><p>最容易遗漏的一步：隐函数的偏导公式里含有 $z$，必须<b>先算出 $(0,1)$ 对应的 $z$ 值</b>，否则没法代值。</p><p>两条路：① 用公式 $z_x=-\frac{F_x}{F_z}$，$z_y=-\frac{F_y}{F_z}$；② 直接对方程两边求全微分（全微分形式不变性），一次性得到 $dz$。填空题推荐②，最快。</p>`,
      solution: R`<p><b>第一步：求 $z(0,1)$。</b>把 $x=0,y=1$ 代入方程：$e^{z}+0+0+\cos0=2$，即 $e^{z}+1=2$，$e^{z}=1$，所以 $z=0$。</p><p><b>第二步：设 $F$，求偏导。</b>令 $F(x,y,z)=e^{z}+xyz+x+\cos x-2$。求 $F$ 的偏导数时，$x,y,z$ 都看作<b>独立变量</b>：</p>$$F_x=yz+1-\sin x,\qquad F_y=xz,\qquad F_z=e^{z}+xy.$$<p>在点 $(0,1,0)$ 处：$F_x=0+1-0=1$，$F_y=0$，$F_z=1+0=1\ne0$。$F_z\ne0$ 正是隐函数存在定理要求的条件，保证 $z=z(x,y)$ 在该点附近存在且可微。</p><p><b>第三步：求偏导数。</b></p>$$\frac{\partial z}{\partial x}\Big|_{(0,1)}=-\frac{F_x}{F_z}=-1,\qquad\frac{\partial z}{\partial y}\Big|_{(0,1)}=-\frac{F_y}{F_z}=0.$$<p><b>第四步：写全微分。</b></p>$$dz\big|_{(0,1)}=(-1)\,dx+0\cdot dy=-dx.$$`,
      pitfalls: R`<p>① <b>忘了先求 $z$ 的值</b>，或者误把 $z$ 当成 $0$ 以外的数，代值全错。</p><p>② <b>两种方法混用</b>：用公式时，$F_x$ 中 $z$ 是独立变量，$(xyz)_x=yz$；直接对方程求偏导时，$z$ 是 $x$ 的函数，$(xyz)_x=yz+xy\,z_x$。把两种做法混在一起会多算或漏算一项。</p><p>③ 答案写成 "$-1$" 不对，题目问的是全微分 $dz$，要写成 $-dx$。</p>`,
      summary: R`<p><b>方法要点：</b>隐函数在某点的全微分：①代点求 $z$；②$z_x=-\frac{F_x}{F_z}$，$z_y=-\frac{F_y}{F_z}$（或两边求全微分）；③$dz=z_xdx+z_ydy$。</p><p><b>看到…想到…：</b>看到"方程 $F(x,y,z)=0$ 确定 $z=z(x,y)$，求某点 $dz$"，先代点求 $z$，再对方程两边直接求全微分，把 $dz$ 解出来，一步到位。</p>`,
      alt: R`<p><b>两边求全微分：</b>由全微分形式不变性，对方程两边求微分（$z$ 是不是自变量都一样写 $dz$）：</p>$$e^{z}dz+yz\,dx+xz\,dy+xy\,dz+dx-\sin x\,dx=0.$$<p>代入 $x=0,y=1,z=0$：$dz+0+0+0+dx-0=0$，所以 $dz=-dx$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 代入 x=0,y=1 解得 z=0；-F_x/F_z 与 -F_y/F_z 在 (0,1,0) 处分别为 -1、0' },
      flags: []
    },

    /* ───────────────────────── 第12题 ───────────────────────── */
    {
      id: '2015-12', year: 2015, no: '第12题', type: '填空', score: 4,
      stem: R`设 $\Omega$ 是由平面 $x+y+z=1$ 与三个坐标平面所围成的空间区域，则 $\displaystyle\iiint_\Omega(x+2y+3z)\,dx\,dy\,dz=$______.`,
      options: null,
      answer: R`$\dfrac14$`,
      figure: null,
      kp: ['mint.triple'],
      methods: ['轮换对称性', '先二后一（截面法）', '形心公式'],
      difficulty: 2,
      analysis: R`<p>$\Omega$ 是以 $(0,0,0),(1,0,0),(0,1,0),(0,0,1)$ 为顶点的四面体。它的方程 $x,y,z\ge0,\ x+y+z\le1$ 对 $x,y,z$ 的任意互换都不变——这叫<b>轮换对称</b>。轮换对称的区域上，被积函数里的 $x,y,z$ 可以随意互换而积分值不变，所以</p>$$\iiint_\Omega x\,dv=\iiint_\Omega y\,dv=\iiint_\Omega z\,dv.$$<p>这样 $x+2y+3z$ 三项可以"统一"成同一个变量，原积分 $=6\iiint_\Omega x\,dv$，只需算一个最简单的积分。</p><p>而被积函数只含一个变量 $x$ 时，最省事的是<b>先二后一（截面法）</b>：固定 $x$，截面是一个三角形，面积一眼可得。</p>`,
      solution: R`<p><b>第一步：用轮换对称性化简。</b>交换 $x$ 与 $y$（或 $x$ 与 $z$），区域 $\Omega$ 不变，所以 $\iiint_\Omega y\,dv=\iiint_\Omega x\,dv$，$\iiint_\Omega z\,dv=\iiint_\Omega x\,dv$。于是</p>$$\iiint_\Omega(x+2y+3z)\,dv=(1+2+3)\iiint_\Omega x\,dv=6\iiint_\Omega x\,dv.$$<p><b>第二步：截面法求 $\iiint_\Omega x\,dv$。</b>$x$ 的范围是 $[0,1]$。固定 $x$，截面 $D_x=\{(y,z)\mid y\ge0,z\ge0,y+z\le1-x\}$ 是直角边长为 $1-x$ 的等腰直角三角形，面积 $\frac12(1-x)^2$。所以</p>$$\iiint_\Omega x\,dv=\int_0^1x\cdot\frac{(1-x)^2}{2}\,dx=\frac12\int_0^1(x-2x^2+x^3)\,dx=\frac12\left(\frac12-\frac23+\frac14\right)=\frac12\cdot\frac1{12}=\frac1{24}.$$<p><b>第三步：得结果。</b></p>$$\iiint_\Omega(x+2y+3z)\,dv=6\cdot\frac1{24}=\frac14.$$`,
      pitfalls: R`<p>① <b>轮换对称不是说被积函数要对称。</b>被积函数 $x+2y+3z$ 本身不对称，但区域对称，我们是把它拆成三项分别用对称性。</p><p>② 截面面积写错：截面是 $y+z\le1-x$ 的三角形，直角边是 $1-x$ 而不是 $1$。</p><p>③ 硬用先一后二时，三层积分限 $0\le x\le1$，$0\le y\le1-x$，$0\le z\le1-x-y$ 很容易写错，且计算量大。</p>`,
      summary: R`<p><b>方法要点：</b>区域轮换对称 ⇒ $\iiint x=\iiint y=\iiint z$；被积函数只含一个变量 ⇒ 先二后一。</p><p><b>看到…想到…：</b>看到区域方程对 $x,y,z$ 地位相同（如 $x+y+z\le1$、$x^2+y^2+z^2\le R^2$ 的第一卦限部分），且被积函数是 $x,y,z$ 的线性组合或"轮换和"，就用轮换对称统一成一个变量。</p><p><b>常用数据：</b>四面体 $x,y,z\ge0,\ x+y+z\le1$ 的体积为 $\frac16$，形心为 $\left(\frac14,\frac14,\frac14\right)$，$\iiint x\,dv=\frac1{24}$。</p>`,
      alt: R`<p><b>形心法（物理直观）：</b>由形心公式 $\iiint_\Omega x\,dv=\bar x\cdot V$。四面体的形心是四个顶点坐标的平均值 $\left(\frac14,\frac14,\frac14\right)$，体积 $V=\frac13\cdot\frac12\cdot1=\frac16$，所以</p>$$\iiint_\Omega(x+2y+3z)\,dv=V(\bar x+2\bar y+3\bar z)=\frac16\cdot\frac64=\frac14.$$`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 三重积分 integrate(x+2y+3z,(z,0,1-x-y),(y,0,1-x),(x,0,1)) = 1/4，且 ∭x dv = 1/24' },
      flags: ['OCR 稿题末缺少填空横线，已补"______"']
    },

    /* ───────────────────────── 第15题 ───────────────────────── */
    {
      id: '2015-15', year: 2015, no: '第15题', type: '解答', score: 10,
      stem: R`设函数 $f(x)=x+a\ln(1+x)+bx\sin x$，$g(x)=kx^3$。若 $f(x)$ 与 $g(x)$ 在 $x\to0$ 时是等价无穷小，求 $a,b,k$ 的值。`,
      options: null,
      answer: R`$a=-1,\ b=-\dfrac12,\ k=-\dfrac13$`,
      figure: null,
      kp: ['lim.inf', 'diff.taylor', 'lim.compute'],
      methods: ['泰勒公式（带佩亚诺余项）', '比较系数', '洛必达法则'],
      difficulty: 2,
      analysis: R`<p><b>考什么：</b>等价无穷小的定义 + 已知极限反求参数。"$f(x)$ 与 $g(x)$ 是等价无穷小"的意思是</p>$$\lim_{x\to0}\frac{f(x)}{g(x)}=\lim_{x\to0}\frac{x+a\ln(1+x)+bx\sin x}{kx^3}=1.$$<p><b>为什么想到泰勒公式：</b>分母是干净的 $x^3$，分子是 $x$、$\ln(1+x)$、$x\sin x$ 的混合。如果把分子也写成"多项式 + 高阶无穷小"，比较两边就像比较多项式的系数一样简单。泰勒公式正是把函数"翻译"成多项式的工具。</p><p><b>展开到几阶：</b>分母是 $x^3$，所以分子展开到 $x^3$ 就够了（"分母几阶，分子就展到几阶"）。</p><p><b>怎样定参数：</b>$f(x)$ 必须恰好是三阶无穷小且最高系数等于 $k$：比 $x^3$ 低阶的项（$x$、$x^2$ 项）系数必须为零，否则比值会趋于无穷。</p>`,
      solution: R`<p><b>第一步：写出要用的麦克劳林展开（带佩亚诺余项）。</b></p>$$\ln(1+x)=x-\frac{x^2}2+\frac{x^3}3+o(x^3),\qquad\sin x=x-\frac{x^3}6+o(x^3).$$<p><b>第二步：逐项展开 $f(x)$ 到 $x^3$。</b></p><ul><li>$a\ln(1+x)=ax-\dfrac a2x^2+\dfrac a3x^3+o(x^3)$；</li><li>$bx\sin x=bx\left(x-\dfrac{x^3}6+o(x^3)\right)=bx^2-\dfrac b6x^4+o(x^4)=bx^2+o(x^3)$。（$x^4$ 项比 $x^3$ 高阶，并入 $o(x^3)$。）</li></ul><p>合并同类项：</p>$$f(x)=(1+a)x+\left(b-\frac a2\right)x^2+\frac a3x^3+o(x^3).$$<p><b>第三步：写出比值并分析。</b></p>$$\frac{f(x)}{kx^3}=\frac{(1+a)x+\left(b-\frac a2\right)x^2+\frac a3x^3+o(x^3)}{kx^3}=\frac{1+a}{kx^2}+\frac{b-\frac a2}{kx}+\frac{a}{3k}+\frac{o(x^3)}{kx^3}.$$<p>这里 $k\ne0$（否则 $g(x)\equiv0$，不能作分母，也谈不上等价）。要让极限存在且等于 $1$：</p><ul><li>$\frac{1+a}{kx^2}$ 在 $x\to0$ 时趋于无穷，除非 $1+a=0$；</li><li>同理 $b-\frac a2=0$；</li><li>剩下 $\frac a{3k}=1$。</li></ul><p><b>第四步：解方程。</b></p>$$1+a=0\Rightarrow a=-1;\qquad b=\frac a2=-\frac12;\qquad k=\frac a3=-\frac13.$$<p><b>第五步：检验。</b>代回得 $f(x)=x-\ln(1+x)-\frac12x\sin x=-\frac13x^3+o(x^3)$，所以 $\lim\limits_{x\to0}\dfrac{f(x)}{-\frac13x^3}=1$，确实等价。</p><p>答：$a=-1$，$b=-\dfrac12$，$k=-\dfrac13$。</p>`,
      pitfalls: R`<p>① <b>展开阶数不够</b>：$\ln(1+x)$ 只展开到 $x^2$，就得不到 $x^3$ 的系数，$k$ 求不出来。</p><p>② <b>$\ln(1+x)$ 的 $x^3$ 项符号错</b>：是 $+\frac{x^3}3$（各项符号正负交替：$+x,-\frac{x^2}2,+\frac{x^3}3,\dots$）。</p><p>③ <b>$x\sin x$ 展开过度或错位</b>：$x\sin x=x^2-\frac{x^4}6+\cdots$，它对 $x^3$ 项<b>没有贡献</b>，有的同学误写成 $x^2-\frac{x^3}6$。</p><p>④ 用洛必达法则时，每次使用前都要确认仍是 $\frac00$ 型；而"分母 $\to0$ 且极限存在 ⇒ 分子必须 $\to0$"正是定出参数的依据，不能跳过这一推理。</p>`,
      summary: R`<p><b>方法要点：</b>已知无穷小的阶或等价关系反求参数 → 泰勒展开到分母的阶数 → 低阶项系数为零、对应阶系数相等。</p><p><b>看到…想到…：</b>看到"$f(x)\sim kx^n$"或"$f(x)$ 是 $x$ 的 $n$ 阶无穷小，求参数"，就把 $f(x)$ 展开到 $x^n$，逐项比较系数。</p><p><b>必背展开（到 $x^3$）：</b>$e^x=1+x+\frac{x^2}2+\frac{x^3}6$，$\sin x=x-\frac{x^3}6$，$\cos x=1-\frac{x^2}2+\frac{x^4}{24}$，$\ln(1+x)=x-\frac{x^2}2+\frac{x^3}3$，$\arctan x=x-\frac{x^3}3$，$\tan x=x+\frac{x^3}3$，$(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+\cdots$。</p>`,
      alt: R`<p><b>洛必达法则逐步定参数：</b></p><p>$\displaystyle1=\lim_{x\to0}\frac{x+a\ln(1+x)+bx\sin x}{kx^3}=\lim_{x\to0}\frac{1+\frac a{1+x}+b\sin x+bx\cos x}{3kx^2}$（$\frac00$ 型，洛必达）。分母 $\to0$ 而极限存在，分子必须 $\to0$：$1+a=0$，$a=-1$。</p><p>此时分子为 $1-\frac1{1+x}+b\sin x+bx\cos x=\frac x{1+x}+b\sin x+bx\cos x$，再用洛必达：$\displaystyle1=\lim_{x\to0}\frac{\frac1{(1+x)^2}+2b\cos x-bx\sin x}{6kx}$。同理分子必须 $\to0$：$1+2b=0$，$b=-\frac12$。</p><p>代入后分子为 $\frac1{(1+x)^2}-\cos x+\frac12x\sin x$，再用一次洛必达：$\displaystyle1=\lim_{x\to0}\frac{-\frac2{(1+x)^3}+\sin x+\frac12\sin x+\frac12x\cos x}{6k}=\frac{-2}{6k}$，所以 $k=-\frac13$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: series(x+a*log(1+x)+b*x*sin(x)) = (a+1)x + (b-a/2)x² + (a/3)x³ + O(x⁴)；代入 a=-1,b=-1/2 后 limit(f/(-x³/3), x→0) = 1' },
      flags: []
    },

    /* ───────────────────────── 第16题 ───────────────────────── */
    {
      id: '2015-16', year: 2015, no: '第16题', type: '解答', score: 10,
      stem: R`设函数 $f(x)$ 在定义域 $I$ 上的导数大于零。若对任意的 $x_0\in I$，曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 处的切线与直线 $x=x_0$ 及 $x$ 轴所围成区域的面积恒为 $4$，且 $f(0)=2$，求 $f(x)$ 的表达式。`,
      options: null,
      answer: R`$f(x)=\dfrac{8}{4-x}$（$x<4$）`,
      figure: null,
      kp: ['ode.app', 'ode.first', 'diff.def'],
      methods: ['切线方程与截距', '几何条件建立微分方程', '分离变量法'],
      difficulty: 3,
      analysis: R`<p><b>考什么：</b>导数的几何意义 + 用几何条件建立微分方程 + 解一阶方程。</p><p><b>为什么是微分方程：</b>题目说"对<b>任意</b> $x_0$，面积恒为 $4$"。面积由切线决定，切线由 $f(x_0)$ 和 $f'(x_0)$ 决定，所以这个条件写出来是"$f(x_0)$ 与 $f'(x_0)$ 之间的一个等式"。又因为它对每一个 $x_0$ 都成立，把 $x_0$ 换成 $x$，就是一个关于未知函数 $y=f(x)$ 的微分方程。</p><p><b>怎么算面积：</b>切线、竖直线 $x=x_0$、$x$ 轴三条直线围成一个<b>直角三角形</b>：直角顶点在 $(x_0,0)$，竖直直角边长 $|f(x_0)|$，水平直角边是 $(x_0,0)$ 到切线与 $x$ 轴交点的距离。所以关键是求切线在 $x$ 轴上的截距。</p>`,
      solution: R`<p><b>第一步：写出切线方程，求它与 $x$ 轴的交点。</b>记 $y_0=f(x_0)$，$k=f'(x_0)>0$。切线为</p>$$Y-y_0=k(X-x_0).$$<p>令 $Y=0$，得交点横坐标 $X=x_0-\dfrac{y_0}{k}$。</p><p><b>第二步：求三角形面积。</b>三个顶点为 $(x_0,0)$、$(x_0,y_0)$、$\left(x_0-\frac{y_0}k,0\right)$。两条直角边长分别为 $|y_0|$ 和 $\left|\frac{y_0}k\right|=\frac{|y_0|}{k}$（因 $k>0$）。所以</p>$$S=\frac12\,|y_0|\cdot\frac{|y_0|}{k}=\frac{y_0^2}{2k}=\frac{f^2(x_0)}{2f'(x_0)}.$$<p><b>第三步：列微分方程。</b>由 $S=4$ 且 $x_0$ 任意，把 $x_0$ 改写为 $x$，记 $y=f(x)$：</p>$$\frac{y^2}{2y'}=4\quad\Longleftrightarrow\quad y'=\frac{y^2}8.$$<p>注意 $y$ 处处不为零：如果某点 $f(x_0)=0$，三角形退化，面积为 $0\ne4$。</p><p><b>第四步：分离变量求解。</b>因为 $y\ne0$，两边除以 $y^2$：</p>$$\frac{dy}{y^2}=\frac{dx}8\ \Longrightarrow\ \int\frac{dy}{y^2}=\int\frac{dx}8\ \Longrightarrow\ -\frac1y=\frac x8+C.$$<p><b>第五步：用初始条件定常数。</b>$x=0$ 时 $y=2$：$-\frac12=0+C$，$C=-\frac12$。所以</p>$$-\frac1y=\frac x8-\frac12=\frac{x-4}8\ \Longrightarrow\ y=\frac{8}{4-x}.$$<p><b>第六步：确定定义域并检验。</b>$I$ 是包含 $0$ 的区间，$f$ 在 $I$ 上可导（从而连续），而 $\frac8{4-x}$ 在 $x=4$ 处无定义，所以 $I\subset(-\infty,4)$，可取 $I=(-\infty,4)$。检验：$f'(x)=\frac8{(4-x)^2}>0$，满足"导数大于零"；且</p>$$\frac{f^2}{2f'}=\frac{64/(4-x)^2}{16/(4-x)^2}=4,$$<p>面积恒为 $4$。</p><p>答：$f(x)=\dfrac8{4-x}$，$x\in(-\infty,4)$。</p>`,
      pitfalls: R`<p>① <b>切线与 $x$ 轴交点算错</b>：常见错误写成 $x_0+\frac{y_0}{k}$。从 $0-y_0=k(X-x_0)$ 解出 $X=x_0-\frac{y_0}k$，符号要细心。</p><p>② <b>面积忘加绝对值</b>：边长必须是正的。本题因为 $k>0$，$\frac{y_0^2}{2k}$ 自然为正，若导数可正可负，就得写 $\frac{y_0^2}{2|k|}$。</p><p>③ <b>积分 $\int y^{-2}dy$ 符号错</b>：是 $-\frac1y$，不是 $\frac1y$。</p><p>④ 忽略定义域：$\frac8{4-x}$ 在 $x=4$ 处断开，$f$ 只能定义在包含 $0$ 的那一段 $(-\infty,4)$ 上。</p>`,
      summary: R`<p><b>方法要点：</b>几何应用题的三步曲："写切线（或法线）方程 → 求截距/交点 → 按条件列等式"，再把 $x_0$ 换成 $x$，得到微分方程。</p><p><b>看到…想到…：</b>看到"曲线上<b>任意一点</b>处的切线（法线）满足某个长度、面积条件"，就想到建立微分方程。</p><p><b>常用结论：</b>点 $(x,y)$ 处切线在 $x$ 轴上的截距为 $x-\frac{y}{y'}$，在 $y$ 轴上的截距为 $y-xy'$；"次切线长"为 $\left|\frac{y}{y'}\right|$。本题面积条件即"$\frac12\cdot|y|\cdot$ 次切线长 $=4$"。</p>`,
      verify: { by: 'sympy', ok: true, note: "sympy: dsolve(f'=f²/8, f(0)=2) 得 f=-8/(x-4)；对 y=8/(4-x) 计算切线 x 截距并求三角形面积 (1/2)·y·(x0-截距) 化简为 4" },
      flags: ['参考解析只给出 y=8/(4-x)，未说明定义域；本解答补充 f 的定义区间为 (-∞,4)（含 x=0 且使 f 可导的最大区间）']
    },

    /* ───────────────────────── 第17题 ───────────────────────── */
    {
      id: '2015-17', year: 2015, no: '第17题', type: '解答', score: 10,
      stem: R`已知函数 $f(x,y)=x+y+xy$，曲线 $C:\ x^2+y^2+xy=3$，求 $f(x,y)$ 在曲线 $C$ 上的最大方向导数。`,
      options: null,
      answer: R`$3$`,
      figure: null,
      kp: ['mdiff.dir', 'mdiff.extreme'],
      methods: ['方向导数最大值等于梯度的模', '拉格朗日乘数法', '对称换元 s=x+y'],
      difficulty: 3,
      analysis: R`<p>这道题有两层意思，必须拆开：</p><ol><li><b>固定一点</b>，在所有方向中，方向导数最大是多少？答案是该点<b>梯度的模</b> $|\nabla f|$。</li><li>再让这个点在曲线 $C$ 上跑，$|\nabla f|$ 的最大值是多少？这是一个<b>条件最值</b>问题。</li></ol><p><b>第 1 层为什么是梯度的模（第一性原理）：</b>沿单位方向 $\mathbf{l}$ 的方向导数是 $\frac{\partial f}{\partial l}=\nabla f\cdot\mathbf{l}=|\nabla f|\cos\varphi$，$\varphi$ 是 $\nabla f$ 与 $\mathbf{l}$ 的夹角。$\cos\varphi\le1$，当方向与梯度同向时取到最大值 $|\nabla f|$。所以"梯度方向是函数增长最快的方向，最快增长率就是梯度的模"。</p><p><b>第 2 层怎么做：</b>目标函数 $\sqrt{(1+y)^2+(1+x)^2}$ 带根号，先平方（单调变换不改变最值点），然后用拉格朗日乘数法；约束和目标都关于 $x,y$ 对称，也可以用 $s=x+y$ 换元直接化成一元函数。</p>`,
      solution: R`<p><b>第一步：求梯度和每点的最大方向导数。</b></p>$$\frac{\partial f}{\partial x}=1+y,\qquad\frac{\partial f}{\partial y}=1+x,\qquad\nabla f=(1+y,\ 1+x).$$<p>在点 $(x,y)$ 处，方向导数的最大值为</p>$$|\nabla f|=\sqrt{(1+y)^2+(1+x)^2}.$$<p><b>第二步：转化为条件最值。</b>问题变成：在 $x^2+y^2+xy=3$ 上求 $|\nabla f|$ 的最大值。由于平方根单调递增，等价于求</p>$$g(x,y)=(x+1)^2+(y+1)^2$$<p>在 $C$ 上的最大值。$C$ 是有界闭曲线（一个椭圆），$g$ 连续，最大值一定存在。</p><p><b>第三步：拉格朗日乘数法。</b>令 $F=(x+1)^2+(y+1)^2+\lambda(x^2+y^2+xy-3)$，</p>$$\begin{cases}F_x=2(x+1)+\lambda(2x+y)=0,&(1)\\ F_y=2(y+1)+\lambda(2y+x)=0,&(2)\\ x^2+y^2+xy=3.&(3)\end{cases}$$<p>（约束函数的梯度 $(2x+y,2y+x)$ 只在原点为零，而原点不在 $C$ 上，所以乘数法适用。）</p><p><b>第四步：解方程组。</b>$(1)-(2)$：$2(x-y)+\lambda(x-y)=0$，即</p>$$(x-y)(2+\lambda)=0.$$<p>注意这里不能直接约去 $x-y$，要分两种情况：</p><ul><li><b>情形一：$x=y$。</b>代入 (3)：$3x^2=3$，$x=\pm1$，得点 $(1,1)$、$(-1,-1)$。</li><li><b>情形二：$\lambda=-2$。</b>代入 (1)：$2x+2-4x-2y=0$，即 $x+y=1$。再由 (3)：$x^2+y^2+xy=(x+y)^2-xy=1-xy=3$，得 $xy=-2$。$x,y$ 是 $t^2-t-2=0$ 的两根，$t=2$ 或 $t=-1$，得点 $(2,-1)$、$(-1,2)$。</li></ul><p><b>第五步：比较函数值。</b></p><table><thead><tr><th>点</th><th>$g=(x+1)^2+(y+1)^2$</th><th>$|\nabla f|$</th></tr></thead><tbody><tr><td>$(1,1)$</td><td>$8$</td><td>$2\sqrt2$</td></tr><tr><td>$(-1,-1)$</td><td>$0$</td><td>$0$</td></tr><tr><td>$(2,-1)$</td><td>$9$</td><td>$3$</td></tr><tr><td>$(-1,2)$</td><td>$9$</td><td>$3$</td></tr></tbody></table><p>最大值为 $3$（在 $(2,-1)$ 与 $(-1,2)$ 处取得）。</p><p>答：$f(x,y)$ 在曲线 $C$ 上的最大方向导数为 $3$。</p>`,
      pitfalls: R`<p>① <b>把"最大方向导数"理解成"$f$ 的最大值"</b>，去求 $x+y+xy$ 在 $C$ 上的最大值——完全答非所问。</p><p>② <b>解方程组时直接两式相除或约掉 $x-y$</b>，丢掉 $\lambda=-2$ 这一支，只得到 $(1,1)$，错得 $2\sqrt2$。乘积为零要分情况讨论！</p><p>③ 以为 $\nabla f$ 是 $(1+x,1+y)$——其实 $f_x=1+y$，$f_y=1+x$，不过两者模相同，不影响结果，但写法要规范。</p><p>④ 拉格朗日乘数法只给出"可能的最值点"，最后一定要比较所有候选点的函数值。</p>`,
      summary: R`<p><b>方法要点：</b>某点处的最大方向导数 $=|\nabla f|$（沿梯度方向取得）；在曲线上求它的最大值 → 条件最值 → 目标平方去根号 → 拉格朗日乘数法 → 比较候选点。</p><p><b>看到…想到…：</b></p><ul><li>看到"方向导数的最大值""沿哪个方向增长最快"，想到梯度；</li><li>看到"在曲线/曲面上求最值"，想到拉格朗日乘数法；</li><li>看到方程组关于 $x,y$ 对称，两式相减并因式分解 $(x-y)(\cdots)=0$，分情况；</li><li>看到约束是 $x^2+y^2+xy$ 这类对称式，也可以用 $s=x+y,\ p=xy$ 换元降成一元问题。</li></ul>`,
      alt: R`<p><b>对称换元，化为一元函数：</b>令 $s=x+y$，$p=xy$。约束 $x^2+y^2+xy=s^2-p=3$，所以 $p=s^2-3$。目标</p>$$g=(x+1)^2+(y+1)^2=(x^2+y^2)+2(x+y)+2=(s^2-2p)+2s+2=8+2s-s^2=9-(s-1)^2.$$<p>$s$ 的取值范围：$x,y$ 是 $t^2-st+p=0$ 的两个实根，要求判别式 $s^2-4p=s^2-4(s^2-3)=12-3s^2\ge0$，即 $|s|\le2$。在 $[-2,2]$ 上 $9-(s-1)^2$ 在 $s=1$ 处取最大值 $9$，所以 $|\nabla f|$ 的最大值为 $\sqrt9=3$。（顺便看出最小值在 $s=-2$ 时为 $0$，对应点 $(-1,-1)$。）</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: solve 拉格朗日方程组得驻点 (1,1),(−1,−1),(2,−1),(−1,2)，|∇f| 分别为 2√2、0、3、3；并验证在 C 上 (x+1)²+(y+1)² = 9-(x+y-1)²，最大值 3' },
      flags: ['参考解析中拉格朗日方程组的解列表 OCR 错乱（显示为 x=1、(-1,1)、(-1,-1)、(-1,-1)），正确驻点为 (1,1)、(-1,-1)、(2,-1)、(-1,2)；最终答案 3 与参考解析一致']
    },

    /* ───────────────────────── 第18题 ───────────────────────── */
    {
      id: '2015-18', year: 2015, no: '第18题', type: '解答', score: 10,
      stem: R`(I) 设函数 $u(x),v(x)$ 可导，利用导数定义证明 $[u(x)v(x)]'=u'(x)v(x)+u(x)v'(x)$；<br>(II) 设函数 $u_1(x),u_2(x),\dots,u_n(x)$ 可导，$f(x)=u_1(x)u_2(x)\cdots u_n(x)$，写出 $f(x)$ 的求导公式。`,
      options: null,
      answer: R`(I) 证明见解答；(II) $f'(x)=u_1'(x)u_2(x)\cdots u_n(x)+u_1(x)u_2'(x)\cdots u_n(x)+\cdots+u_1(x)u_2(x)\cdots u_n'(x)$`,
      figure: null,
      kp: ['diff.def', 'diff.calc'],
      methods: ['导数定义（差商的极限）', '加一项减一项（插项）', '可导必连续', '数学归纳法'],
      difficulty: 2,
      analysis: R`<p>这道题直接考<b>课本上乘积求导法则的证明</b>，考查的是对导数定义的真正理解。当年很多同学会用公式却不会证明，丢分严重——这提醒我们基础定理的证明不能漏。</p><p><b>思路从哪来：</b>导数定义要求我们研究差商</p>$$\frac{u(x+h)v(x+h)-u(x)v(x)}{h}.$$<p>我们已知的只有 $u$ 和 $v$ 各自的差商 $\frac{u(x+h)-u(x)}h\to u'(x)$，$\frac{v(x+h)-v(x)}h\to v'(x)$。所以目标很明确：<b>把乘积的增量拆成"$u$ 的增量"和"$v$ 的增量"两部分</b>。办法是"加一项、减一项"（插项）：在中间插入 $u(x)v(x+h)$，让每次只有一个因子在变。</p><p><b>几何直观：</b>把 $u\cdot v$ 看成边长为 $u$、$v$ 的矩形面积。两边分别增加 $\Delta u,\Delta v$ 后，面积增量 $=v\Delta u+u\Delta v+\Delta u\Delta v$，其中两条"长条"是主要部分，右上角的小方块 $\Delta u\Delta v$ 是高阶无穷小。这就是乘积法则的来源。</p>`,
      solution: R`<p><b>(I) 证明。</b>设 $x$ 是任一点，记 $F(x)=u(x)v(x)$，$h\ne0$ 为增量。</p><p><b>第一步：写出差商并插项。</b></p>$$\begin{aligned}F(x+h)-F(x)&=u(x+h)v(x+h)-u(x)v(x)\\&=u(x+h)v(x+h)-u(x)v(x+h)+u(x)v(x+h)-u(x)v(x)\\&=\big[u(x+h)-u(x)\big]v(x+h)+u(x)\big[v(x+h)-v(x)\big].\end{aligned}$$<p>所以</p>$$\frac{F(x+h)-F(x)}{h}=\frac{u(x+h)-u(x)}{h}\cdot v(x+h)+u(x)\cdot\frac{v(x+h)-v(x)}{h}.$$<p><b>第二步：说明 $v(x+h)\to v(x)$（可导必连续）。</b>由于 $v$ 在 $x$ 处可导，</p>$$\lim_{h\to0}\big[v(x+h)-v(x)\big]=\lim_{h\to0}\frac{v(x+h)-v(x)}{h}\cdot h=v'(x)\cdot0=0,$$<p>即 $\lim\limits_{h\to0}v(x+h)=v(x)$。</p><p><b>第三步：取极限。</b>由导数定义，$\lim\limits_{h\to0}\frac{u(x+h)-u(x)}{h}=u'(x)$，$\lim\limits_{h\to0}\frac{v(x+h)-v(x)}{h}=v'(x)$；$u(x)$ 与 $h$ 无关，是常数。右边每一部分的极限都存在，由极限的四则运算法则，</p>$$F'(x)=\lim_{h\to0}\frac{F(x+h)-F(x)}{h}=u'(x)v(x)+u(x)v'(x).$$<p>证毕。</p><p><b>(II) 公式。</b></p>$$f'(x)=u_1'(x)u_2(x)\cdots u_n(x)+u_1(x)u_2'(x)\cdots u_n(x)+\cdots+u_1(x)u_2(x)\cdots u_n'(x),$$<p>即 $f'(x)=\displaystyle\sum_{i=1}^{n}u_1(x)\cdots u_{i-1}(x)\,u_i'(x)\,u_{i+1}(x)\cdots u_n(x)$：<b>每次只对一个因子求导，其余因子不动，再把 $n$ 项加起来</b>。</p><p><b>理由（数学归纳法）：</b>$n=1$ 显然；$n=2$ 就是 (I)。假设 $n-1$ 个因子时公式成立。令 $G(x)=u_1(x)\cdots u_{n-1}(x)$，则 $f=G\cdot u_n$，由 (I)，</p>$$f'=G'u_n+Gu_n'.$$<p>由归纳假设 $G'=\sum_{i=1}^{n-1}u_1\cdots u_i'\cdots u_{n-1}$，乘以 $u_n$ 后给出公式的前 $n-1$ 项；$Gu_n'=u_1\cdots u_{n-1}u_n'$ 正是第 $n$ 项。所以 $n$ 个因子时公式也成立。</p>`,
      pitfalls: R`<p>① <b>循环论证</b>：证明过程中用了乘积求导法则本身（或用了 $(\ln uv)'$ 之类依赖乘积法则的公式），等于没证。</p><p>② <b>漏掉"可导必连续"这一步</b>：$v(x+h)\to v(x)$ 不是天然成立的，需要由 $v$ 可导推出。这是本题的得分点。</p><p>③ (II) 写成 $f'=u_1'u_2'\cdots u_n'$（导数的乘积）是严重错误。</p><p>④ 用对数求导法 $\frac{f'}{f}=\sum\frac{u_i'}{u_i}$ 推公式，需要所有 $u_i(x)\ne0$，不能作为一般情形的证明。</p>`,
      summary: R`<p><b>方法要点：</b>用定义证明求导法则 = 写出差商 → 插项把"几个量同时变"拆成"每次一个量变" → 用已知的差商极限与"可导必连续"取极限。</p><p><b>看到…想到…：</b>看到"利用定义证明……的导数公式"，就写增量、插项；看到 $n$ 个因子的乘积，就想到"轮流求导再相加"，严格证明用归纳法。</p><p><b>举一反三：</b>同样的插项思路可以证明商的求导法则 $\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}$，也是拉格朗日中值定理、柯西中值定理等证明中常用的技巧。</p>`,
      alt: R`<p><b>(I) 的另一种写法（对称增量）：</b>记 $\Delta u=u(x+h)-u(x)$，$\Delta v=v(x+h)-v(x)$，则</p>$$(u+\Delta u)(v+\Delta v)-uv=v\,\Delta u+u\,\Delta v+\Delta u\,\Delta v.$$<p>除以 $h$：$\dfrac{\Delta(uv)}h=v\dfrac{\Delta u}h+u\dfrac{\Delta v}h+\dfrac{\Delta u}h\cdot\Delta v$。$h\to0$ 时前两项趋于 $vu'+uv'$，最后一项 $\to u'(x)\cdot0=0$（因为 $v$ 连续，$\Delta v\to0$）。这正是"矩形面积增量"的直观：角上的小方块是高阶无穷小。</p>`,
      verify: { by: 'proof', ok: true, note: '按导数定义与极限四则运算逐步验证 (I) 的证明；(II) 用归纳法验证，并对照参考解析公式一致' },
      flags: []
    },

    /* ───────────────────────── 第19题 ───────────────────────── */
    {
      id: '2015-19', year: 2015, no: '第19题', type: '解答', score: 10,
      stem: R`已知曲线 $L$ 的方程为 $\begin{cases}z=\sqrt{2-x^2-y^2},\\ z=x,\end{cases}$ 起点为 $A(0,\sqrt2,0)$，终点为 $B(0,-\sqrt2,0)$，计算曲线积分 $\displaystyle I=\int_L(y+z)\,dx+(z^2-x^2+y)\,dy+x^2y^2\,dz$。`,
      options: null,
      answer: R`$\dfrac{\sqrt2}{2}\pi$`,
      figure: null,
      kp: ['mint.line2', 'vec.surface', 'mint.stokes'],
      methods: ['空间曲线的参数化', '第二类曲线积分化为定积分', '对称区间奇偶性', '代入化简 + 格林公式（另解）'],
      difficulty: 3,
      analysis: R`<p><b>考什么：</b>空间曲线上的第二类（对坐标的）曲线积分。最直接、最可靠的方法是<b>参数化</b>：把 $x,y,z$ 都写成参数 $t$ 的函数，积分就变成关于 $t$ 的定积分。</p><p><b>怎样找参数方程：</b>$L$ 是上半球面 $x^2+y^2+z^2=2\ (z\ge0)$ 与平面 $z=x$ 的交线。把 $z=x$ 代入球面消去 $z$，得到 $L$ 在 $xOy$ 面上的投影柱面</p>$$2x^2+y^2=2,\quad\text{即}\quad x^2+\frac{y^2}{2}=1,$$<p>这是椭圆，自然参数化为 $x=\cos t,\ y=\sqrt2\sin t$，再由 $z=x$ 得 $z=\cos t$。</p><p><b>两个细节决定成败：</b>① 只取上半球面，$z=x\ge0$，所以 $L$ 只是半个椭圆；② 第二类曲线积分有方向，<b>起点对应的参数做下限，终点对应的参数做上限</b>，哪怕下限比上限大。</p>`,
      solution: R`<p><b>第一步：参数化。</b>令</p>$$x=\cos t,\quad y=\sqrt2\sin t,\quad z=\cos t.$$<p>验证：$x^2+y^2+z^2=\cos^2t+2\sin^2t+\cos^2t=2$，且 $z=x$。由 $z=\cos t\ge0$ 得 $t\in\left[-\frac\pi2,\frac\pi2\right]$。</p><p><b>第二步：确定参数的起止。</b>起点 $A(0,\sqrt2,0)$：$\cos t=0,\ \sin t=1$，$t=\frac\pi2$；终点 $B(0,-\sqrt2,0)$：$t=-\frac\pi2$。所以 $t$ 从 $\frac\pi2$ 变到 $-\frac\pi2$。</p><p><b>第三步：代入被积表达式。</b>$dx=-\sin t\,dt$，$dy=\sqrt2\cos t\,dt$，$dz=-\sin t\,dt$。在 $L$ 上 $z=x$，所以 $z^2-x^2=0$。逐项计算：</p><ul><li>$(y+z)\,dx=(\sqrt2\sin t+\cos t)(-\sin t)\,dt=(-\sqrt2\sin^2t-\sin t\cos t)\,dt$；</li><li>$(z^2-x^2+y)\,dy=\sqrt2\sin t\cdot\sqrt2\cos t\,dt=2\sin t\cos t\,dt$；</li><li>$x^2y^2\,dz=\cos^2t\cdot2\sin^2t\cdot(-\sin t)\,dt=-2\sin^3t\cos^2t\,dt$。</li></ul><p>相加：</p>$$I=\int_{\frac\pi2}^{-\frac\pi2}\big(-\sqrt2\sin^2t+\sin t\cos t-2\sin^3t\cos^2t\big)\,dt.$$<p><b>第四步：交换上下限，利用奇偶性。</b>交换上下限要变号：</p>$$I=\int_{-\frac\pi2}^{\frac\pi2}\big(\sqrt2\sin^2t-\sin t\cos t+2\sin^3t\cos^2t\big)\,dt.$$<p>在对称区间 $\left[-\frac\pi2,\frac\pi2\right]$ 上，$\sin t\cos t$ 与 $\sin^3t\cos^2t$ 都是奇函数，积分为 $0$；$\sin^2t$ 是偶函数。于是</p>$$I=\sqrt2\int_{-\frac\pi2}^{\frac\pi2}\sin^2t\,dt=2\sqrt2\int_0^{\frac\pi2}\sin^2t\,dt=2\sqrt2\cdot\frac\pi4=\frac{\sqrt2}2\pi.$$<p>（$\int_0^{\pi/2}\sin^2t\,dt=\frac12\cdot\frac\pi2=\frac\pi4$，华里士公式。）</p><p>答：$I=\dfrac{\sqrt2}2\pi$。</p>`,
      pitfalls: R`<p>① <b>参数上下限方向搞反</b>：写成 $\int_{-\pi/2}^{\pi/2}$ 而不变号，结果差一个负号。第二类曲线积分"下限对起点，上限对终点"。</p><p>② <b>取了整个椭圆</b>：忘了 $z=\sqrt{\cdots}\ge0$，$L$ 只是 $x\ge0$ 的半个椭圆。</p><p>③ <b>漏算 $dz$ 项</b>或把 $dz$ 写成 $\cos t\,dt$；$z=\cos t$，$dz=-\sin t\,dt$。</p><p>④ 不会利用"在 $L$ 上 $z=x$"化简：$z^2-x^2$ 在曲线上恒为 $0$，可以先代入再积分，省去大量计算。</p>`,
      summary: R`<p><b>方法要点：</b>空间曲线第二类曲线积分 → 参数化（由投影柱面得参数，再由曲线方程得第三个坐标）→ 起点参数为下限、终点参数为上限 → 化为定积分，善用奇偶性与华里士公式。</p><p><b>看到…想到…：</b></p><ul><li>看到空间曲线是"曲面 ∩ 平面"，先消元得投影曲线，投影是圆或椭圆就用三角参数；</li><li>看到被积式里有能在曲线上化简的组合（如这里的 $z^2-x^2$），先代入曲线方程化简；</li><li>看到曲线在一个平面上且不封闭，也可以补一段简单线段，用斯托克斯公式（或投影后用格林公式）。</li></ul>`,
      alt: R`<p><b>代入降维 + 格林公式：</b>在 $L$ 上 $z=x$，$dz=dx$，代入得</p>$$I=\int_{L_{xy}}(x+y+x^2y^2)\,dx+y\,dy,$$<p>其中 $L_{xy}$ 是 $L$ 在 $xOy$ 面的投影：右半椭圆 $2x^2+y^2=2\ (x\ge0)$，从 $(0,\sqrt2)$ 经 $(1,0)$ 到 $(0,-\sqrt2)$，是<b>顺时针</b>方向。补上 $y$ 轴上的线段 $\overline{BA}$：从 $(0,-\sqrt2)$ 到 $(0,\sqrt2)$，其上 $x=0,dx=0$，积分为 $\int_{-\sqrt2}^{\sqrt2}y\,dy=0$。</p><p>$L_{xy}+\overline{BA}$ 围成半椭圆区域 $D$，方向为顺时针（负向）。令 $P=x+y+x^2y^2$，$Q=y$，$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=-(1+2x^2y)$，由格林公式（负向要添负号）：</p>$$\oint=-\iint_D\big[-(1+2x^2y)\big]\,d\sigma=\iint_D(1+2x^2y)\,d\sigma=\iint_Dd\sigma+0=\frac12\cdot\pi\cdot1\cdot\sqrt2=\frac{\sqrt2}2\pi,$$<p>其中 $2x^2y$ 关于 $y$ 是奇函数，$D$ 关于 $x$ 轴对称，积分为 $0$；半椭圆面积为 $\frac12\pi ab$（$a=1,b=\sqrt2$）。所以 $I=\frac{\sqrt2}2\pi-0=\frac{\sqrt2}2\pi$，与参数法一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 参数 x=cos t, y=√2 sin t, z=cos t（验证在球面上），integrate(被积式, (t, pi/2, -pi/2)) = √2π/2；格林公式另解 ∬_D (1+2x²y) dσ 亦为 √2π/2' },
      flags: []
    }
  ];
});
