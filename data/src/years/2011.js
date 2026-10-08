// 2011 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 13 题：第 1–4 题（选择）、第 9–12 题（填空）、第 15–19 题（解答）。
// 第 5、6、13、20、21 题为线性代数（第 13 题虽然以"二次曲面"出现，实质是用正交变换化二次型，属线性代数），
// 第 7、8、14、22、23 题为概率论与数理统计，不收录。
registerYear(2011, function (R) {
  return [
    /* ───────────── 第 1 题 ───────────── */
    {
      id: '2011-1', year: 2011, no: '第1题', type: '选择', score: 4,
      stem: R`曲线 $y=(x-1)(x-2)^2(x-3)^3(x-4)^4$ 的拐点是`,
      options: [R`$(1,0)$`, R`$(2,0)$`, R`$(3,0)$`, R`$(4,0)$`],
      answer: 'C',
      figure: null,
      kp: ['diff.convex', 'diff.calc'],
      methods: ['零点重数分析（局部近似）', '二阶导数变号判别拐点', '对数求导法'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>拐点的判定。拐点是曲线<b>凹凸性发生改变</b>的点，判定的核心是"$y''$ 在该点两侧是否变号"。</p>
<p><b>从题目特征想到方法：</b>函数是因式连乘 $(x-1)(x-2)^2(x-3)^3(x-4)^4$，四个选项恰好是它的四个零点，而四个因式的幂次分别是 $1,2,3,4$——这是出题人故意摆出来的"重数阶梯"。如果把它展开成 10 次多项式再求二阶导，计算量巨大，显然不是本意。看到"重数各不相同的零点"，就应该想到：<b>函数在某个零点附近长什么样，主要由这个零点的重数决定</b>。</p>
<p><b>第一性原理的看法：</b>在 $x=a$ 附近把函数写成 $y=(x-a)^k h(x)$，其中 $h(a)\ne0$。当 $x$ 非常靠近 $a$ 时 $h(x)\approx h(a)$ 是一个非零常数，所以</p>
$$y\approx h(a)\,(x-a)^k,$$
<p>局部看就是一条幂函数曲线。回忆三张最熟悉的图：$y=x^2$ 在原点是"碗底"（极值点，不是拐点）；$y=x^3$ 在原点"扭"了过去（典型的拐点）；$y=x^4$ 在原点又是一个更平的碗底。于是可以猜出规律：<b>奇数重（且不小于 3）的零点是拐点，偶数重的零点是极值点</b>。本题 $x=3$ 是 3 重零点，答案应为 C。下面把这个直观变成严格的推理。</p>`,
      solution: R`<p><b>第一步：明确拐点的判定准则。</b>设 $y$ 在 $x=a$ 的某邻域内二阶导数连续。若 $y''$ 在 $a$ 的左右两侧<b>异号</b>，则 $(a,y(a))$ 是拐点；若 $y''(a)\ne0$，由连续性 $y''$ 在 $a$ 附近保持同号，凹凸性不变，就<b>不是</b>拐点。注意 $y''(a)=0$ 只是必要条件，不是充分条件。</p>
<p><b>第二步：建立一个通用引理。</b>设 $y=(x-a)^k h(x)$，$k\geqslant2$，$h$ 二阶可导且 $h(a)\ne0$。逐次求导：</p>
$$y'=k(x-a)^{k-1}h+(x-a)^k h',$$
$$y''=k(k-1)(x-a)^{k-2}h+2k(x-a)^{k-1}h'+(x-a)^k h''=(x-a)^{k-2}\Big[k(k-1)h+2k(x-a)h'+(x-a)^2h''\Big].$$
<p>方括号在 $x=a$ 处等于 $k(k-1)h(a)\ne0$，由连续性，它在 $a$ 的一个小邻域内与 $h(a)$ <b>同号</b>。所以 $y''$ 在 $a$ 附近的符号完全由因子 $(x-a)^{k-2}$ 决定：</p>
<ul><li>$k=2$：$(x-a)^0=1$，$y''(a)=2h(a)\ne0$，不是拐点；</li><li>$k=3$：$(x-a)^1$ 在 $a$ 两侧异号，$y''$ 变号，<b>是拐点</b>；</li><li>$k=4$：$(x-a)^2\geqslant0$ 不变号，$y''$ 不变号，不是拐点。</li></ul>
<p><b>第三步：逐个检查四个零点。</b></p>
<table><thead><tr><th>零点</th><th>重数 $k$</th><th>$h(a)$</th><th>局部近似</th><th>结论</th></tr></thead><tbody>
<tr><td>$x=1$</td><td>$1$</td><td>$(-1)^2(-2)^3(-3)^4=-648$</td><td>$y\approx-648(x-1)$</td><td>引理不适用，需单独计算</td></tr>
<tr><td>$x=2$</td><td>$2$</td><td>$1\cdot(-1)^3\cdot(-2)^4=-16$</td><td>$y\approx-16(x-2)^2$</td><td>$y''(2)=-32\ne0$，不是拐点（是极大值点）</td></tr>
<tr><td>$x=3$</td><td>$3$</td><td>$2\cdot1^2\cdot(-1)^4=2$</td><td>$y\approx2(x-3)^3$</td><td>$y''$ 由负变正，<b>是拐点</b></td></tr>
<tr><td>$x=4$</td><td>$4$</td><td>$3\cdot2^2\cdot1^3=12$</td><td>$y\approx12(x-4)^4$</td><td>$y''\geqslant0$ 不变号，不是拐点（是极小值点）</td></tr>
</tbody></table>
<p><b>第四步：单独处理 $x=1$（一重零点）。</b>记 $h_1(x)=(x-2)^2(x-3)^3(x-4)^4$，则 $y=(x-1)h_1(x)$，</p>
$$y'=h_1+(x-1)h_1',\qquad y''=2h_1'+(x-1)h_1'',\qquad y''(1)=2h_1'(1).$$
<p>用对数求导法求 $h_1'(1)$：$\ln|h_1|=2\ln|x-2|+3\ln|x-3|+4\ln|x-4|$，两边求导得</p>
$$\frac{h_1'(1)}{h_1(1)}=\frac{2}{1-2}+\frac{3}{1-3}+\frac{4}{1-4}=-2-\frac32-\frac43=-\frac{29}{6},$$
<p>所以 $h_1'(1)=(-648)\cdot\left(-\dfrac{29}{6}\right)=3132$，$y''(1)=6264\ne0$。$y''$ 在 $x=1$ 附近保持正号，不是拐点。</p>
<p><b>第五步：下结论。</b>只有 $(3,0)$ 是拐点，选 <b>C</b>。</p>
<p><b>错误选项小结：</b>A 是一重零点，曲线只是"斜着穿过" $x$ 轴，穿过 $x$ 轴说明 $y$ 变号，与凹凸性无关；B、D 是偶数重零点，对应极值点而非拐点，其中 D 处还满足 $y''(4)=0$，是专门为"$y''=0$ 就是拐点"这一误解设的陷阱。</p>`,
      pitfalls: R`<ul><li><b>把 $y''(a)=0$ 当成拐点的充分条件：</b>$x=4$ 处 $y''(4)=0$，但 $y\approx12(x-4)^4$ 形如 $x^4$，凹凸不变，不是拐点。$y''(a)=0$ 只是"候选"，还必须验证两侧变号。</li><li><b>把"$y$ 变号"和"$y''$ 变号"混为一谈：</b>一重零点处曲线穿过 $x$ 轴，$y$ 变号，于是有人误选 A。拐点看的是 $y''$ 的符号，不是 $y$ 的符号。</li><li><b>硬展开求导：</b>10 次多项式求二阶导极易算错且浪费时间。抓住"局部只看重数"这一结构，几乎不用计算。</li></ul>`,
      summary: R`<p><b>重根规律（务必记住）：</b>设 $y=(x-a)^k h(x)$，$h(a)\ne0$，则</p>
<ul><li>$k$ 为偶数：$(a,0)$ 是<b>极值点</b>，不是拐点；</li><li>$k$ 为奇数且 $k\geqslant3$：$(a,0)$ 是<b>拐点</b>，不是极值点；</li><li>$k=1$：一般既不是极值点也不是拐点，需要另算 $y''(a)$。</li></ul>
<p><b>拐点判别的两个充分条件：</b>① $y''$ 在 $a$ 两侧变号；② $y''(a)=0$ 且 $y'''(a)\ne0$。</p>
<p><b>题型识别：</b>看到"因式连乘、零点重数各不相同，问极值点或拐点"→ 想到局部近似 $y\approx h(a)(x-a)^k$，按重数奇偶直接判断。</p>`,
      alt: R`<p><b>用三阶导数判别：</b>对 $y=(x-a)^3h(x)$，由莱布尼茨公式，$y''(a)=0$，而 $y'''(a)=3!\,h(a)$（其余各项都带有 $x-a$ 的因子）。本题 $y'''(3)=6\times2=12\ne0$，满足"$y''(a)=0$ 且 $y'''(a)\ne0$"，所以 $(3,0)$ 是拐点。对 $x=4$：$y''(4)=y'''(4)=0$，第一个不为零的导数是 $y^{(4)}(4)=4!\cdot12>0$，阶数为偶数，所以 $x=4$ 是极小值点而不是拐点。一般规律：若 $f^{(m)}(a)$ 是第一个不为零的高阶导数（$m\geqslant2$），$m$ 为偶数时是极值点，$m$ 为奇数时是拐点。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: diff(y,x,2) 在 x=1,2,3,4 处分别为 6264,-32,0,0；factor 得 y\'\'=2(x-4)²(x-3)·(五次因子)，五次因子在 x=3 处为 6≠0；数值检查 y\'\' 在 3±0.001 处分别为 -0.012、+0.012（变号），在 4±0.001 处同为正（不变号）' },
      flags: []
    },

    /* ───────────── 第 2 题 ───────────── */
    {
      id: '2011-2', year: 2011, no: '第2题', type: '选择', score: 4,
      stem: R`设数列 $\{a_n\}$ 单调减少，$\lim\limits_{n\to\infty}a_n=0$，$S_n=\sum\limits_{k=1}^{n}a_k\ (n=1,2,\cdots)$ 无界，则幂级数 $\sum\limits_{n=1}^{\infty}a_n(x-1)^n$ 的收敛域为`,
      options: [R`$(-1,1]$`, R`$[-1,1)$`, R`$[0,2)$`, R`$(0,2]$`],
      answer: 'C',
      figure: null,
      kp: ['series.power', 'series.alt', 'series.positive'],
      methods: ['阿贝尔定理', '莱布尼茨判别法', '正项级数收敛的充要条件（部分和有界）', '换元平移收敛域'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>幂级数收敛域的求法，核心工具是<b>阿贝尔定理</b>以及<b>端点处数项级数的敛散性判断</b>。</p>
<p><b>从题目特征想到方法：</b>系数 $a_n$ 没有具体表达式，只给了三条性质：单调减少、趋于 $0$、部分和无界。这样就没法用 $\lim\left|\frac{a_{n+1}}{a_n}\right|$ 去算收敛半径。出题人在暗示：<b>别算半径公式，直接去看端点</b>。再看这三条性质分别"对口"什么：</p>
<ul><li>"单调减少且趋于 $0$"——正是<b>莱布尼茨判别法</b>的条件，对应交错级数 $\sum(-1)^na_n$；</li><li>"部分和无界"——正是<b>正项级数发散</b>的充要条件，对应 $\sum a_n$。</li></ul>
<p><b>先换元化简：</b>令 $t=x-1$，级数变为 $\sum a_nt^n$，中心在 $t=0$。在 $t=1$ 处它就是 $\sum a_n$（发散），在 $t=-1$ 处就是 $\sum(-1)^na_n$（收敛）。一个收敛点、一个发散点，用阿贝尔定理一夹，半径只能是 $1$。</p>`,
      solution: R`<p><b>第一步：换元。</b>令 $t=x-1$，原级数化为 $\displaystyle\sum_{n=1}^{\infty}a_nt^n$。先求它关于 $t$ 的收敛域，最后再平移回 $x$。</p>
<p><b>第二步：说明 $a_n>0$。</b>$\{a_n\}$ 单调减少且以 $0$ 为极限，所以对每个 $n$ 都有 $a_n\geqslant0$（否则若某个 $a_N<0$，则 $n\geqslant N$ 时 $a_n\leqslant a_N<0$，极限不可能是 $0$）。又若某个 $a_N=0$，则其后各项都夹在 $0$ 与 $a_N=0$ 之间，全为 $0$，部分和就有界了，与题设矛盾。所以 $a_n>0$，$\sum a_n$ 是正项级数。</p>
<p><b>第三步：$t=1$ 处发散。</b>此时级数为 $\sum a_n$。正项级数的部分和单调增加，<b>正项级数收敛 $\iff$ 部分和数列有界</b>。题设 $S_n$ 无界，所以 $\sum a_n$ 发散。</p>
<p><b>第四步：$t=-1$ 处收敛。</b>此时级数为 $\sum(-1)^na_n$，是交错级数。由于 $a_n$ 单调减少且 $\lim a_n=0$，满足莱布尼茨判别法的两个条件，所以收敛。</p>
<p><b>第五步：用阿贝尔定理确定半径。</b>阿贝尔定理说：若幂级数在 $t_0$ 处收敛，则在 $|t|<|t_0|$ 内绝对收敛；若在 $t_1$ 处发散，则在 $|t|>|t_1|$ 处都发散。</p>
<ul><li>在 $t=-1$ 处收敛 $\Rightarrow$ $|t|<1$ 时都收敛 $\Rightarrow$ $R\geqslant1$；</li><li>在 $t=1$ 处发散 $\Rightarrow$ $|t|>1$ 时都发散 $\Rightarrow$ $R\leqslant1$。</li></ul>
<p>所以 $R=1$。再结合两个端点的情况，关于 $t$ 的收敛域为 $[-1,1)$。</p>
<p><b>第六步：平移回 $x$。</b>由 $-1\leqslant x-1<1$ 得 $0\leqslant x<2$，收敛域为 $[0,2)$，选 <b>C</b>。</p>
<p><b>具体例子检验：</b>$a_n=\dfrac1n$ 满足全部条件（单调减、趋于 $0$、调和级数部分和无界）。$\sum\dfrac{(x-1)^n}{n}$ 在 $x=0$ 处是 $\sum\dfrac{(-1)^n}{n}=-\ln2$，收敛；在 $x=2$ 处是调和级数，发散。收敛域正是 $[0,2)$。</p>
<p><b>错误选项分析：</b></p>
<ul><li>A $(-1,1]$：中心放在了 $0$，而且把两个端点的开闭弄反了。</li><li>B $[-1,1)$：这是 $\sum a_nt^n$ 关于 $t$ 的收敛域，忘了平移回 $x$。</li><li>D $(0,2]$：中心正确，但端点弄反了——$x=2$ 对应 $t=1$，即发散的 $\sum a_n$；$x=0$ 对应 $t=-1$，即收敛的交错级数。</li></ul>`,
      pitfalls: R`<ul><li><b>忘记平移：</b>求完 $\sum a_nt^n$ 的收敛域就急着选 B。凡是 $(x-x_0)^n$ 型幂级数，最后一步一定要换回 $x$。</li><li><b>端点对应关系搞反：</b>$x=0$ 时 $x-1=-1$，得到的是交错级数；$x=2$ 时 $x-1=1$，得到的是正项级数。写出 $t$ 的取值再代入，不要凭感觉。</li><li><b>误以为"$a_n\to0$ 则 $\sum a_n$ 收敛"：</b>$a_n\to0$ 只是收敛的必要条件，调和级数就是反例。</li><li><b>只知道一个端点就断定半径：</b>只知道 $t=-1$ 收敛只能推出 $R\geqslant1$；必须再有 $t=1$ 发散才能得到 $R\leqslant1$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>系数抽象、无法用比值法时，用"一个收敛点 + 一个发散点"借阿贝尔定理把收敛半径夹出来。</p>
<p><b>一个好用的结论：</b>若幂级数 $\sum a_n(x-x_0)^n$ 在某点 $x_1$ 处<b>条件收敛</b>，则 $x_1$ 一定是收敛区间的端点，即 $R=|x_1-x_0|$。（本题中 $t=-1$ 处 $\sum(-1)^na_n$ 收敛而 $\sum a_n$ 发散，正是条件收敛。）</p>
<p><b>题型识别：</b></p><ul><li>看到"$a_n$ 单调减趋于 $0$"→ 想到莱布尼茨判别法，对应 $(-1)^n$ 的那个端点；</li><li>看到"部分和有界/无界"→ 想到正项级数收敛的充要条件；</li><li>看到 $(x-x_0)^n$ → 先令 $t=x-x_0$，最后平移回来。</li></ul>`,
      verify: { by: 'mixed', ok: true, note: '推理验证：阿贝尔定理 + 莱布尼茨 + 部分和无界；sympy 例子 a_n=1/n：summation((-1)**n/n,(n,1,oo)) = -log(2) 收敛，x=2 处为调和级数发散，收敛域 [0,2)' },
      flags: ['OCR 中选项 C 写作纯文本 "[0,2)"，已统一为公式格式']
    },

    /* ───────────── 第 3 题 ───────────── */
    {
      id: '2011-3', year: 2011, no: '第3题', type: '选择', score: 4,
      stem: R`设函数 $f(x)$ 具有二阶连续导数，且 $f(x)>0$，$f'(0)=0$，则函数 $z=f(x)\ln f(y)$ 在点 $(0,0)$ 处取得极小值的一个充分条件是`,
      options: [R`$f(0)>1,\ f''(0)>0$`, R`$f(0)>1,\ f''(0)<0$`, R`$f(0)<1,\ f''(0)>0$`, R`$f(0)<1,\ f''(0)<0$`],
      answer: 'A',
      figure: null,
      kp: ['mdiff.extreme', 'mdiff.diffable'],
      methods: ['二元函数极值的充分条件（AC−B² 判别法）', '偏导数计算'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>二元函数无条件极值的<b>充分条件</b>：在驻点处记 $A=z_{xx}$，$B=z_{xy}$，$C=z_{yy}$，若 $AC-B^2>0$ 且 $A>0$，则为极小值点。</p>
<p><b>从题目特征想到方法：</b>题目问"取得极小值的充分条件"，选项又全是关于 $f(0)$ 和 $f''(0)$ 的符号——这正是 $A$、$C$ 以及 $AC-B^2$ 里会出现的量。所以路线很清楚：验证驻点 → 算 $A,B,C$ → 读出符号条件。</p>
<p><b>结构上的直觉：</b>$z=f(x)\ln f(y)$ 是"$x$ 的函数"乘"$y$ 的函数"，偏导数各管各的，好算；而条件 $f'(0)=0$ 一方面保证 $(0,0)$ 是驻点，另一方面会让混合偏导 $B$ 消失。$B=0$ 意味着没有交叉项，极值完全由两个坐标方向决定：沿 $x$ 轴 $z(x,0)=f(x)\ln f(0)$，沿 $y$ 轴 $z(0,y)=f(0)\ln f(y)$。两个方向都要"向上弯"，才是极小值。</p>`,
      solution: R`<p><b>第一步：求一阶偏导，确认驻点。</b>（因为 $f>0$，$\ln f(y)$ 有意义。）</p>
$$z_x=f'(x)\ln f(y),\qquad z_y=f(x)\cdot\frac{f'(y)}{f(y)}.$$
<p>在 $(0,0)$ 处：$z_x=f'(0)\ln f(0)=0$，$z_y=f(0)\cdot\dfrac{f'(0)}{f(0)}=0$，所以 $(0,0)$ 是驻点。</p>
<p><b>第二步：求二阶偏导。</b></p>
$$z_{xx}=f''(x)\ln f(y),\qquad z_{xy}=f'(x)\cdot\frac{f'(y)}{f(y)},\qquad z_{yy}=f(x)\cdot\frac{f''(y)f(y)-[f'(y)]^2}{f(y)^2}.$$
<p>其中 $z_{yy}$ 是对 $\dfrac{f'(y)}{f(y)}$ 用商的求导法则得到的。</p>
<p><b>第三步：代入 $(0,0)$。</b>利用 $f'(0)=0$：</p>
$$A=f''(0)\ln f(0),\qquad B=0,\qquad C=f(0)\cdot\frac{f''(0)f(0)-0}{f(0)^2}=f''(0).$$
<p><b>第四步：写出判别式。</b></p>
$$AC-B^2=f''(0)\ln f(0)\cdot f''(0)-0=[f''(0)]^2\ln f(0).$$
<p><b>第五步：读出极小值的充分条件。</b>需要 $AC-B^2>0$ 且 $A>0$：</p>
<ul><li>$AC-B^2>0\iff f''(0)\ne0$ 且 $\ln f(0)>0\iff f''(0)\ne0$ 且 $f(0)>1$；</li><li>在此前提下 $A=f''(0)\ln f(0)>0\iff f''(0)>0$。</li></ul>
<p>所以 $f(0)>1$，$f''(0)>0$ 是取得极小值的充分条件，选 <b>A</b>。</p>
<p><b>第六步：逐个排除其他选项。</b></p>
<ul><li>B：$f(0)>1$，$f''(0)<0$。此时 $AC-B^2>0$ 但 $A<0$，是<b>极大值</b>。例：$f(x)=1+\mathrm{e}^{-x^2}$，$f(0)=2$，$f''(0)=-2$，$z$ 在 $(0,0)$ 取极大值。</li><li>C：$f(0)<1$，$f''(0)>0$。此时 $\ln f(0)<0$，$AC-B^2=[f''(0)]^2\ln f(0)<0$，<b>不是极值</b>（鞍点）。例：$f(x)=\frac12\mathrm{e}^{x^2}$，沿 $x$ 轴 $z=\frac12\mathrm{e}^{x^2}\ln\frac12$ 在 $0$ 处取极大，沿 $y$ 轴 $z=\frac12\ln\left(\frac12\mathrm{e}^{y^2}\right)=\frac12\ln\frac12+\frac{y^2}{2}$ 在 $0$ 处取极小，所以是鞍点。</li><li>D：$f(0)<1$，$f''(0)<0$。同样 $AC-B^2<0$，<b>不是极值</b>。例：$f(x)=\frac12\mathrm{e}^{-x^2}$。</li></ul>`,
      pitfalls: R`<ul><li><b>$z_{yy}$ 求错：</b>$\ln f(y)$ 对 $y$ 的二阶导是 $\dfrac{f''f-f'^2}{f^2}$，不是 $\dfrac{f''}{f}$。本题因为 $f'(0)=0$ 恰好不影响结果，但平时这一步很容易丢项。</li><li><b>记反判别条件：</b>$AC-B^2>0$ 时才有极值，$A>0$ 是极小、$A<0$ 是极大；$AC-B^2<0$ 不是极值。把 $A>0$ 记成极大是常见错误。</li><li><b>忽视 $\ln f(0)$ 的符号：</b>$f(0)>1$ 时 $\ln f(0)>0$，$f(0)<1$ 时 $\ln f(0)<0$。符号一旦弄错，C、D 就会被误判为极值。</li></ul>`,
      summary: R`<p><b>二元函数极值三步走：</b>① 解 $z_x=z_y=0$ 找驻点；② 算 $A=z_{xx}$，$B=z_{xy}$，$C=z_{yy}$；③ $AC-B^2>0$ 时有极值（$A>0$ 极小，$A<0$ 极大），$AC-B^2<0$ 时无极值，$AC-B^2=0$ 时需另行判断。</p>
<p><b>记忆方法：</b>"$AC-B^2$ 定有无，$A$ 的符号定大小"；$A>0$ 像一元的 $f''>0$，开口向上，是极小。</p>
<p><b>题型识别：</b>看到 $z=\varphi(x)\psi(y)$ 这种"变量分离"的乘积，且某个一阶导在该点为零 → 混合偏导 $B$ 往往为 $0$，极值问题退化为"沿两个坐标轴各自是否向上弯"。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy hessian(f(x)*log(f(y))) 在 f\'(0)=0 下得 A=f\'\'(0)ln f(0)、B=0、C=f\'\'(0)；四个具体函数检验：f=2+x²（A>0,det>0 极小），1+e^{-x²}（极大），½e^{x²} 与 ½e^{-x²}（det<0 鞍点）' },
      flags: []
    },

    /* ───────────── 第 4 题 ───────────── */
    {
      id: '2011-4', year: 2011, no: '第4题', type: '选择', score: 4,
      stem: R`设 $I=\displaystyle\int_0^{\frac{\pi}{4}}\ln(\sin x)\,\mathrm{d}x$，$J=\displaystyle\int_0^{\frac{\pi}{4}}\ln(\cot x)\,\mathrm{d}x$，$K=\displaystyle\int_0^{\frac{\pi}{4}}\ln(\cos x)\,\mathrm{d}x$，则 $I,J,K$ 的大小关系为`,
      options: [R`$I<J<K$`, R`$I<K<J$`, R`$J<I<K$`, R`$K<J<I$`],
      answer: 'B',
      figure: null,
      kp: ['int.def', 'int.improper'],
      methods: ['定积分的比较性质', '三角函数在 (0, π/4) 上的大小关系', '对数函数单调性'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>定积分的<b>比较性质</b>：积分区间相同时，被积函数大的，积分也大。</p>
<p><b>从题目特征想到方法：</b>三个积分的区间都是 $\left[0,\frac{\pi}{4}\right]$，被积函数都是 $\ln(\cdot)$ 的形式，三个积分都不可能直接算出初等表达式（$\int\ln\sin x\,\mathrm{d}x$ 没有初等原函数）。"算不出来却要比大小"——这是比较性质的典型信号：<b>只比较被积函数</b>。又因为 $\ln$ 是增函数，只需比较 $\sin x$、$\cos x$、$\cot x$ 的大小。</p>
<p><b>一个细节：</b>$x\to0^+$ 时 $\ln\sin x\to-\infty$，$\ln\cot x\to+\infty$，所以 $I$、$J$ 实际上是以 $x=0$ 为瑕点的反常积分。比较之前要确认它们收敛，否则谈不上"大小"。</p>`,
      solution: R`<p><b>第一步：比较三个三角函数。</b>当 $0<x<\dfrac{\pi}{4}$ 时：</p>
<ul><li>$\tan x<1$，即 $\dfrac{\sin x}{\cos x}<1$，又 $\cos x>0$，所以 $\sin x<\cos x$；</li><li>$0<\sin x<1$，所以 $\cot x=\dfrac{\cos x}{\sin x}>\cos x$。</li></ul>
<p>于是 $0<\sin x<\cos x<\cot x$。（几何直观：在 $\left(0,\frac{\pi}{4}\right)$ 内，角度没过 $45^\circ$，"对边"比"邻边"短，所以 $\sin x<\cos x$；而 $\cot x>1>\cos x$。）</p>
<p><b>第二步：取对数保持不等号。</b>$\ln t$ 在 $(0,+\infty)$ 上严格单调增加，所以</p>
$$\ln\sin x<\ln\cos x<\ln\cot x,\qquad 0<x<\frac{\pi}{4}.$$
<p><b>第三步：确认三个积分都收敛。</b>$K$ 的被积函数在 $\left[0,\frac{\pi}{4}\right]$ 上连续，是正常积分。对 $I$：由于 $\lim\limits_{x\to0^+}\sqrt{x}\,\ln\sin x=\lim\limits_{x\to0^+}\sqrt{\dfrac{x}{\sin x}}\cdot\sqrt{\sin x}\ln\sin x=1\cdot0=0$，所以在 $0$ 附近 $|\ln\sin x|\leqslant\dfrac{1}{\sqrt x}$，而 $\displaystyle\int_0^{1}\frac{\mathrm{d}x}{\sqrt x}$ 收敛，由比较判别法 $I$ 绝对收敛。又 $\ln\cot x=\ln\cos x-\ln\sin x$，所以 $J=K-I$ 也收敛。</p>
<p><b>第四步：由比较性质得结论。</b>被积函数在 $\left(0,\frac{\pi}{4}\right)$ 内连续且严格满足上述不等式，因此积分也严格保持不等号：</p>
$$I<K<J,$$
<p>选 <b>B</b>。</p>
<p><b>数值印证：</b>$I\approx-1.002$，$K\approx-0.086$，$J\approx0.916$。</p>
<p><b>错误选项分析：</b>A 认为 $J<K$，C 认为 $J$ 最小，D 认为 $I$ 最大、$K$ 最小，都与"$\cot x$ 最大、$\sin x$ 最小"矛盾。最常见的错误是忽略了 $\cot x>1$ 这一点，误以为 $\cot x$ 和 $\cos x$ 差不多大。</p>`,
      pitfalls: R`<ul><li><b>忘记反常积分的收敛性：</b>$I$、$J$ 在 $x=0$ 处被积函数无界。如果其中某个发散，比较大小就没有意义。考试中选择题可以不写，但要知道背后需要这一步。</li><li><b>三角函数大小记混：</b>在 $\left(0,\frac{\pi}{4}\right)$ 内 $\sin x<\cos x$，在 $\left(\frac{\pi}{4},\frac{\pi}{2}\right)$ 内 $\sin x>\cos x$，分界点是 $\frac{\pi}{4}$。</li><li><b>以为要把积分算出来：</b>这三个积分都没有初等原函数，硬算只会浪费时间。</li></ul>`,
      summary: R`<p><b>比较性质：</b>若在 $[a,b]$ 上 $f(x)\leqslant g(x)$，则 $\int_a^bf\leqslant\int_a^bg$；若 $f,g$ 连续且 $f\not\equiv g$，则严格不等。</p>
<p><b>题型识别：</b></p><ul><li>看到"同一区间上几个积分比大小"→ 只比较被积函数；</li><li>看到"不同区间上的积分比大小"→ 先用换元把区间统一，或者拆区间；</li><li>看到"积分与 0 比较"→ 看被积函数的符号，必要时利用对称性把负的部分和正的部分配对。</li></ul>
<p><b>常用大小关系：</b>$0<x<\frac{\pi}{4}$ 时 $\sin x<\cos x<1<\cot x$；$0<x<\frac{\pi}{2}$ 时 $\sin x<x<\tan x$。</p>`,
      alt: R`<p><b>利用 $J=K-I$：</b>由 $\ln\cot x=\ln\cos x-\ln\sin x$ 得 $J=K-I$。在 $\left(0,\frac{\pi}{4}\right)$ 内 $0<\sin x<\cos x<1$，所以 $\ln\sin x<\ln\cos x<0$，从而 $I<K<0$。于是 $J-K=-I>0$，即 $J>K$。合起来 $I<K<J$。这个做法把"三个比较"化成了"两个比较 + 一个代数关系"，也顺便说明了 $J$ 的收敛性。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 数值积分：I=Integral(log(sin x),(x,0,pi/4))≈-1.00238，K≈-0.08641，J≈0.91597，满足 I<K<J 且 J=K-I' },
      flags: []
    },

    /* ───────────── 第 9 题 ───────────── */
    {
      id: '2011-9', year: 2011, no: '第9题', type: '填空', score: 4,
      stem: R`曲线 $y=\displaystyle\int_0^x\tan t\,\mathrm{d}t\ \left(0\leqslant x\leqslant\dfrac{\pi}{4}\right)$ 的弧长 $s=$ ______．`,
      options: null,
      answer: R`$\ln\left(1+\sqrt2\right)$`,
      figure: null,
      kp: ['int.app', 'int.ftc', 'diff.curv'],
      methods: ['弧长公式', '变限积分求导', '正割函数的积分'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>直角坐标下曲线的<b>弧长公式</b> $s=\displaystyle\int_a^b\sqrt{1+y'^2}\,\mathrm{d}x$，以及<b>变限积分求导</b>。</p>
<p><b>弧长公式从哪里来（第一性原理）：</b>把曲线切成很多小段，每一小段近似为直线段，水平方向走了 $\mathrm{d}x$，竖直方向走了 $\mathrm{d}y$，由勾股定理，小段长 $\mathrm{d}s=\sqrt{(\mathrm{d}x)^2+(\mathrm{d}y)^2}=\sqrt{1+y'^2}\,\mathrm{d}x$，再把所有小段加起来就是积分。</p>
<p><b>为什么这题算得出来：</b>弧长积分里有根号，一般很难算。但本题 $y$ 是变限积分，求导立刻得到 $y'=\tan x$，而 $1+\tan^2x=\sec^2x$ 正好是完全平方，根号直接开出来。这是出题人精心设计的"可积"结构——看到 $\tan$ 就该想到 $\sec^2$。</p>`,
      solution: R`<p><b>第一步：求 $y'$。</b>由变限积分求导公式（被积函数 $\tan t$ 在 $\left[0,\frac{\pi}{4}\right]$ 上连续）：</p>
$$y'=\frac{\mathrm{d}}{\mathrm{d}x}\int_0^x\tan t\,\mathrm{d}t=\tan x.$$
<p><b>第二步：化简弧微分。</b></p>
$$\mathrm{d}s=\sqrt{1+y'^2}\,\mathrm{d}x=\sqrt{1+\tan^2x}\,\mathrm{d}x=\sqrt{\sec^2x}\,\mathrm{d}x=|\sec x|\,\mathrm{d}x=\sec x\,\mathrm{d}x.$$
<p>最后一步去绝对值，是因为 $0\leqslant x\leqslant\frac{\pi}{4}$ 时 $\cos x>0$，$\sec x>0$。</p>
<p><b>第三步：积分。</b>需要用到 $\displaystyle\int\sec x\,\mathrm{d}x=\ln|\sec x+\tan x|+C$。（验证：$\big(\ln(\sec x+\tan x)\big)'=\dfrac{\sec x\tan x+\sec^2x}{\sec x+\tan x}=\dfrac{\sec x(\tan x+\sec x)}{\sec x+\tan x}=\sec x$。）于是</p>
$$s=\int_0^{\frac{\pi}{4}}\sec x\,\mathrm{d}x=\ln(\sec x+\tan x)\Big|_0^{\frac{\pi}{4}}=\ln\left(\sqrt2+1\right)-\ln(1+0)=\ln\left(1+\sqrt2\right).$$`,
      pitfalls: R`<ul><li><b>开根号忘了绝对值：</b>$\sqrt{\sec^2x}=|\sec x|$。本题区间内 $\sec x>0$ 所以没出问题，但如果区间跨过 $\frac{\pi}{2}$ 就必须分段处理。</li><li><b>记错 $\int\sec x\,\mathrm{d}x$：</b>常见错误写成 $\tan x$ 或 $\sec x\tan x$（那是 $\sec^2x$ 和 $\sec x$ 的导数，方向搞反了）。</li><li><b>多此一举先求 $y$：</b>$y=-\ln\cos x$ 当然也能求，但弧长只需要 $y'$，变限积分直接求导最快。</li></ul>`,
      summary: R`<p><b>三种弧长公式：</b></p><ul><li>直角坐标 $y=f(x)$：$s=\int_a^b\sqrt{1+f'^2(x)}\,\mathrm{d}x$；</li><li>参数方程 $x=\varphi(t),y=\psi(t)$：$s=\int_\alpha^\beta\sqrt{\varphi'^2+\psi'^2}\,\mathrm{d}t$；</li><li>极坐标 $r=r(\theta)$：$s=\int_\alpha^\beta\sqrt{r^2+r'^2}\,\mathrm{d}\theta$。</li></ul>
<p><b>题型识别：</b>弧长题几乎都设计成"根号下是完全平方"。看到 $y'=\tan x$ → $1+\tan^2x=\sec^2x$；看到 $y'=\frac{\mathrm{e}^x-\mathrm{e}^{-x}}{2}$ → $1+y'^2=\left(\frac{\mathrm{e}^x+\mathrm{e}^{-x}}{2}\right)^2$；看到 $y'=\frac12\left(x-\frac1x\right)$ 类 → $1+y'^2=\frac14\left(x+\frac1x\right)^2$。</p>
<p><b>必背：</b>$\int\sec x\,\mathrm{d}x=\ln|\sec x+\tan x|+C$，$\int\csc x\,\mathrm{d}x=\ln|\csc x-\cot x|+C$。</p>`,
      alt: R`<p><b>不记 $\sec$ 积分公式的做法：</b>分子分母同乘 $\cos x$，</p>$$\int_0^{\frac{\pi}{4}}\frac{\mathrm{d}x}{\cos x}=\int_0^{\frac{\pi}{4}}\frac{\cos x\,\mathrm{d}x}{1-\sin^2x}=\int_0^{\frac{\sqrt2}{2}}\frac{\mathrm{d}u}{1-u^2}=\frac12\ln\frac{1+u}{1-u}\Big|_0^{\frac{\sqrt2}{2}}=\frac12\ln\frac{2+\sqrt2}{2-\sqrt2}.$$<p>化简：$\dfrac{2+\sqrt2}{2-\sqrt2}=\dfrac{(2+\sqrt2)^2}{4-2}=\dfrac{(2+\sqrt2)^2}{2}=\left(\dfrac{2+\sqrt2}{\sqrt2}\right)^2=(\sqrt2+1)^2$，所以结果为 $\ln(1+\sqrt2)$，与上面一致。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(sec(x),(x,0,pi/4)) 数值 0.881373587…，与 log(1+sqrt(2)) 数值完全相同' },
      flags: []
    },

    /* ───────────── 第 10 题 ───────────── */
    {
      id: '2011-10', year: 2011, no: '第10题', type: '填空', score: 4,
      stem: R`微分方程 $y'+y=\mathrm{e}^{-x}\cos x$ 满足条件 $y(0)=0$ 的解为 $y=$ ______．`,
      options: null,
      answer: R`$\mathrm{e}^{-x}\sin x$`,
      figure: null,
      kp: ['ode.first'],
      methods: ['一阶线性方程通解公式', '积分因子法', '初值定常数'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>一阶线性微分方程 $y'+P(x)y=Q(x)$ 的求解。这里 $P(x)=1$，$Q(x)=\mathrm{e}^{-x}\cos x$。</p>
<p><b>为什么用积分因子（讲清动机）：</b>方程左边 $y'+y$ 看上去像某个乘积的导数"缺了点什么"。如果两边同乘 $\mathrm{e}^x$，左边变成 $\mathrm{e}^xy'+\mathrm{e}^xy$，这恰好是 $(\mathrm{e}^xy)'$——乘积求导法则倒过来用。于是方程变成"某个函数的导数等于已知函数"，直接积分即可。一阶线性方程通解公式本质上就是这个想法的一般化。</p>
<p><b>本题的巧合：</b>右边含 $\mathrm{e}^{-x}$，乘上积分因子 $\mathrm{e}^x$ 后正好抵消，只剩 $\cos x$，积分非常干净。</p>`,
      solution: R`<p><b>第一步：识别类型。</b>方程形如 $y'+P(x)y=Q(x)$，$P(x)=1$，$Q(x)=\mathrm{e}^{-x}\cos x$，是一阶线性非齐次方程。</p>
<p><b>第二步：乘积分因子。</b>积分因子 $\mu(x)=\mathrm{e}^{\int P(x)\,\mathrm{d}x}=\mathrm{e}^x$。方程两边同乘 $\mathrm{e}^x$：</p>
$$\mathrm{e}^xy'+\mathrm{e}^xy=\cos x,\qquad\text{即}\qquad(\mathrm{e}^xy)'=\cos x.$$
<p><b>第三步：两边积分。</b></p>
$$\mathrm{e}^xy=\int\cos x\,\mathrm{d}x=\sin x+C,\qquad y=\mathrm{e}^{-x}(\sin x+C).$$
<p>这就是通解。</p>
<p><b>第四步：用初始条件定常数。</b>$y(0)=\mathrm{e}^0(\sin0+C)=C=0$，所以 $y=\mathrm{e}^{-x}\sin x$。</p>
<p><b>第五步：代回检验。</b>$y'=-\mathrm{e}^{-x}\sin x+\mathrm{e}^{-x}\cos x$，所以 $y'+y=\mathrm{e}^{-x}\cos x$ ✓；$y(0)=0$ ✓。</p>`,
      pitfalls: R`<ul><li><b>积分因子的符号弄反：</b>积分因子是 $\mathrm{e}^{+\int P\,\mathrm{d}x}$，通解公式中齐次部分是 $\mathrm{e}^{-\int P\,\mathrm{d}x}$。可以用"乘完之后左边是否变成 $(\mu y)'$"来自检。</li><li><b>积分后忘了加常数 $C$：</b>如果在 $\mathrm{e}^xy=\sin x$ 这一步漏掉 $C$，虽然本题碰巧 $C=0$，但方法是错的，换个初值就会出错。</li><li><b>方程不是标准形式时直接套公式：</b>必须先化成 $y'$ 的系数为 $1$ 的形式，再读出 $P(x)$。</li></ul>`,
      summary: R`<p><b>一阶线性方程通解公式：</b></p>$$y'+P(x)y=Q(x)\ \Longrightarrow\ y=\mathrm{e}^{-\int P\,\mathrm{d}x}\left(\int Q\,\mathrm{e}^{\int P\,\mathrm{d}x}\,\mathrm{d}x+C\right).$$
<p><b>记忆方法：</b>"先乘 $\mathrm{e}^{\int P}$ 凑成 $(\mathrm{e}^{\int P}y)'$，积分后再除回去"。</p>
<p><b>题型识别：</b>看到 $y$ 和 $y'$ 都是一次、且没有 $yy'$ 之类的乘积项 → 一阶线性方程；看到右边是 $\mathrm{e}^{-ax}\times(\cdots)$ 而 $P=a$ → 乘积分因子后指数正好抵消，计算会很简单。</p>`,
      alt: R`<p><b>常数变易法：</b>先解齐次方程 $y'+y=0$，得 $y=C\mathrm{e}^{-x}$。把常数换成函数，设 $y=C(x)\mathrm{e}^{-x}$，代入原方程：$C'(x)\mathrm{e}^{-x}-C(x)\mathrm{e}^{-x}+C(x)\mathrm{e}^{-x}=\mathrm{e}^{-x}\cos x$，得 $C'(x)=\cos x$，$C(x)=\sin x+C$。所以 $y=(\sin x+C)\mathrm{e}^{-x}$，再由 $y(0)=0$ 得 $C=0$。常数变易法和积分因子法本质相同，只是思考角度不同。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy dsolve(Eq(y\'+y, exp(-x)*cos(x)), ics={y(0):0}) 得 y=exp(-x)*sin(x)；并手工代回验证' },
      flags: []
    },

    /* ───────────── 第 11 题 ───────────── */
    {
      id: '2011-11', year: 2011, no: '第11题', type: '填空', score: 4,
      stem: R`设函数 $F(x,y)=\displaystyle\int_0^{xy}\frac{\sin t}{1+t^2}\,\mathrm{d}t$，则 $\left.\dfrac{\partial^2F}{\partial x^2}\right|_{\substack{x=0\\y=2}}=$ ______．`,
      options: null,
      answer: R`$4$`,
      figure: null,
      kp: ['mdiff.diffable', 'int.ftc', 'mdiff.chain'],
      methods: ['变限积分求导', '复合函数求偏导', '先代后求'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>以变限积分形式给出的二元函数求二阶偏导。本质是<b>变限积分求导公式</b>与<b>偏导数定义</b>的结合。</p>
<p><b>怎么想：</b>求 $\dfrac{\partial F}{\partial x}$ 时把 $y$ 看成常数，于是 $F$ 就是"上限为 $xy$ 的变限积分"，用公式"被积函数在上限处的值 × 上限对 $x$ 的导数"。求出一阶偏导后，再对 $x$ 求一次导数，最后代值。</p>
<p><b>省力的技巧——先代后求：</b>对 $x$ 求偏导时 $y$ 始终是常数，所以可以在求完一阶偏导后先把 $y=2$ 代进去，变成一元函数，再对 $x$ 求导。这样避免了繁琐的二元商的求导。注意只能代"不参与求导的变量"。</p>`,
      solution: R`<p><b>第一步：求一阶偏导。</b>把 $y$ 看作常数，上限 $u=xy$ 对 $x$ 的导数是 $y$。由变限积分求导公式：</p>
$$\frac{\partial F}{\partial x}=\frac{\sin(xy)}{1+(xy)^2}\cdot\frac{\partial(xy)}{\partial x}=\frac{y\sin(xy)}{1+x^2y^2}.$$
<p><b>第二步：求二阶偏导。</b>仍把 $y$ 看作常数，对 $x$ 用商的求导法则：</p>
$$\frac{\partial^2F}{\partial x^2}=y\cdot\frac{y\cos(xy)\cdot(1+x^2y^2)-\sin(xy)\cdot2xy^2}{(1+x^2y^2)^2}.$$
<p><b>第三步：代入 $x=0,y=2$。</b>此时 $xy=0$，$\cos0=1$，$\sin0=0$，$1+x^2y^2=1$：</p>
$$\left.\frac{\partial^2F}{\partial x^2}\right|_{(0,2)}=2\cdot\frac{2\cdot1\cdot1-0}{1}=4.$$`,
      pitfalls: R`<ul><li><b>忘乘上限的导数：</b>写成 $\dfrac{\partial F}{\partial x}=\dfrac{\sin(xy)}{1+(xy)^2}$，漏掉因子 $y$，最终得到 $2$。</li><li><b>先代后求代错了变量：</b>可以先代 $y=2$（因为是对 $x$ 求导），但绝不能先代 $x=0$——那样函数变成常数 $0$，导数全没了。</li><li><b>把 $\frac{\partial^2F}{\partial x^2}$ 看成混合偏导：</b>题目要的是对 $x$ 求两次，不是 $\frac{\partial^2F}{\partial x\partial y}$。</li></ul>`,
      summary: R`<p><b>变限积分求导公式：</b>$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_{\psi(x)}^{\varphi(x)}f(t)\,\mathrm{d}t=f(\varphi(x))\varphi'(x)-f(\psi(x))\psi'(x)$。多元情形中对哪个变量求偏导，就把其余变量当常数套这个公式。</p>
<p><b>先代后求原则：</b>求 $\dfrac{\partial^2F}{\partial x^2}\Big|_{(x_0,y_0)}$ 时，可先令 $y=y_0$ 得到一元函数 $\varphi(x)=F(x,y_0)$，再求 $\varphi''(x_0)$。只代"不求导的变量"。</p>
<p><b>题型识别：</b>看到"求某一点处的高阶偏导数值"→ 先想能否先代入不求导的变量化为一元问题；看到"上限含 $xy$ 等表达式的积分"→ 变限积分求导乘上限的偏导。</p>`,
      alt: R`<p><b>先代后求：</b>由第一步，$\dfrac{\partial F}{\partial x}(x,2)=\dfrac{2\sin2x}{1+4x^2}$。令 $\varphi(x)=\dfrac{2\sin2x}{1+4x^2}$，所求即 $\varphi'(0)$。由泰勒展开 $\sin2x=2x+O(x^3)$，$\dfrac{1}{1+4x^2}=1+O(x^2)$，得 $\varphi(x)=4x+O(x^3)$，所以 $\varphi'(0)=4$。也可直接用商的法则：$\varphi'(0)=\dfrac{4\cos0\cdot1-0}{1}=4$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: diff(Integral(sin(t)/(1+t**2),(t,0,x*y)),x,2).doit() 在 (0,2) 处为 4' },
      flags: []
    },

    /* ───────────── 第 12 题 ───────────── */
    {
      id: '2011-12', year: 2011, no: '第12题', type: '填空', score: 4,
      stem: R`设 $L$ 是柱面 $x^2+y^2=1$ 与平面 $z=x+y$ 的交线，从 $z$ 轴正向往 $z$ 轴负向看去为逆时针方向，则曲线积分 $\displaystyle\oint_Lxz\,\mathrm{d}x+x\,\mathrm{d}y+\frac{y^2}{2}\,\mathrm{d}z=$ ______．`,
      options: null,
      answer: R`$\pi$`,
      figure: null,
      kp: ['mint.stokes', 'mint.line2', 'mint.double'],
      methods: ['斯托克斯公式', '曲面投影（合一投影）', '参数化计算空间曲线积分', '投影降维 + 格林公式'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>空间闭曲线上的第二类曲线积分。常见三条路：<b>参数化直接算</b>、<b>斯托克斯公式</b>、<b>把 $z$ 消掉投影到平面再用格林公式</b>。</p>
<p><b>从题目特征想到方法：</b></p>
<ul><li>曲线是"柱面 ∩ 平面"，柱面 $x^2+y^2=1$ 提示参数化 $x=\cos\theta$，$y=\sin\theta$，再由平面方程得 $z=\cos\theta+\sin\theta$——参数化非常自然。</li><li>曲线是<b>闭</b>的，且它围住了平面 $z=x+y$ 上的一块椭圆形区域，这是斯托克斯公式的标准使用场景：把线积分换成平面片上的面积分，而平面上的面积分往往很好算。</li><li>先算旋度：$\mathbf{F}=(xz,\ x,\ \frac{y^2}{2})$ 的旋度是 $(y,\ x,\ 1)$，非常简单，进一步说明斯托克斯公式是"省力路线"。</li></ul>
<p><b>方向是关键：</b>"从 $z$ 轴正向往负向看为逆时针"，即从上往下看逆时针。按右手法则（四指沿曲线方向，拇指指向法向量），所取曲面的法向量应<b>朝上</b>（$z$ 分量为正）。</p>`,
      solution: R`<p><b>第一步：算旋度。</b>记 $P=xz$，$Q=x$，$R=\dfrac{y^2}{2}$，则</p>
$$\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}=y-0=y,\quad\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}=x-0=x,\quad\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=1-0=1.$$
<p><b>第二步：选曲面、定侧。</b>取 $\Sigma$ 为平面 $z=x+y$ 上被 $L$ 围成的部分，它在 $xOy$ 面上的投影是单位圆盘 $D:x^2+y^2\leqslant1$。由第一段分析，$\Sigma$ 取<b>上侧</b>。</p>
<p><b>第三步：用斯托克斯公式。</b></p>
$$\oint_LP\,\mathrm{d}x+Q\,\mathrm{d}y+R\,\mathrm{d}z=\iint_\Sigma y\,\mathrm{d}y\,\mathrm{d}z+x\,\mathrm{d}z\,\mathrm{d}x+1\,\mathrm{d}x\,\mathrm{d}y.$$
<p><b>第四步：把面积分投影到 $xOy$ 面（合一投影）。</b>对上侧曲面 $z=z(x,y)$，有</p>
$$\iint_\Sigma U\,\mathrm{d}y\,\mathrm{d}z+V\,\mathrm{d}z\,\mathrm{d}x+W\,\mathrm{d}x\,\mathrm{d}y=\iint_D\big[U\cdot(-z_x)+V\cdot(-z_y)+W\big]\,\mathrm{d}x\,\mathrm{d}y.$$
<p>这是因为上侧法向量可取 $(-z_x,-z_y,1)$，而 $\mathrm{d}y\,\mathrm{d}z:\mathrm{d}z\,\mathrm{d}x:\mathrm{d}x\,\mathrm{d}y=(-z_x):(-z_y):1$。本题 $z_x=z_y=1$，所以</p>
$$\text{原式}=\iint_D\big[y\cdot(-1)+x\cdot(-1)+1\big]\,\mathrm{d}x\,\mathrm{d}y=\iint_D(1-x-y)\,\mathrm{d}x\,\mathrm{d}y.$$
<p><b>第五步：用对称性算二重积分。</b>$D$ 关于 $y$ 轴对称，$x$ 是 $x$ 的奇函数，故 $\iint_Dx\,\mathrm{d}x\,\mathrm{d}y=0$；同理 $\iint_Dy\,\mathrm{d}x\,\mathrm{d}y=0$。所以</p>
$$\text{原式}=\iint_D1\,\mathrm{d}x\,\mathrm{d}y=\pi\cdot1^2=\pi.$$`,
      pitfalls: R`<ul><li><b>方向判断错误：</b>"从 $z$ 轴正向往负向看"是从上往下看。逆时针 → 法向量朝上；若取下侧，答案会变成 $-\pi$。</li><li><b>旋度分量算错或顺序记错：</b>建议用行列式记忆，第一行 $\mathrm{d}y\,\mathrm{d}z,\ \mathrm{d}z\,\mathrm{d}x,\ \mathrm{d}x\,\mathrm{d}y$，第二行 $\frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}$，第三行 $P,Q,R$。</li><li><b>误把曲面面积当成投影面积：</b>平面 $z=x+y$ 上那块椭圆的面积是 $\sqrt3\pi$，而不是 $\pi$。用合一投影法时，$\sqrt3$ 已经被法向量的比例吸收，最后积的是 $\mathrm{d}x\,\mathrm{d}y$。</li><li><b>参数化时方向取反：</b>从上往下看逆时针，对应 $\theta$ 从 $0$ 增加到 $2\pi$。</li></ul>`,
      summary: R`<p><b>斯托克斯公式：</b></p>$$\oint_LP\,\mathrm{d}x+Q\,\mathrm{d}y+R\,\mathrm{d}z=\iint_\Sigma\begin{vmatrix}\mathrm{d}y\,\mathrm{d}z&\mathrm{d}z\,\mathrm{d}x&\mathrm{d}x\,\mathrm{d}y\\\frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\P&Q&R\end{vmatrix},$$<p>$L$ 的方向与 $\Sigma$ 的侧符合右手法则。</p>
<p><b>空间闭曲线积分的三条路：</b>① 曲线好参数化（柱面、球面与平面的交线）→ 参数化；② 旋度简单、曲线围成平面片 → 斯托克斯；③ 曲线在平面 $z=ax+by+c$ 上 → 把 $z$ 和 $\mathrm{d}z$ 代掉，降为平面曲线积分，再用格林公式。</p>
<p><b>题型识别：</b>看到"柱面与平面的交线 + 从某轴正向看逆时针"→ 先定右手法则的侧，再优先考虑斯托克斯或降维；看到圆盘上 $\iint x$、$\iint y$ → 对称性直接为零。</p>`,
      alt: R`<p><b>另解一：参数化。</b>令 $x=\cos\theta$，$y=\sin\theta$，$z=\cos\theta+\sin\theta$，$\theta$ 从 $0$ 到 $2\pi$（从上往下看逆时针）。则 $\mathrm{d}x=-\sin\theta\,\mathrm{d}\theta$，$\mathrm{d}y=\cos\theta\,\mathrm{d}\theta$，$\mathrm{d}z=(\cos\theta-\sin\theta)\,\mathrm{d}\theta$。</p>
$$xz\,\mathrm{d}x=-\cos\theta(\cos\theta+\sin\theta)\sin\theta\,\mathrm{d}\theta,\quad x\,\mathrm{d}y=\cos^2\theta\,\mathrm{d}\theta,\quad\frac{y^2}{2}\mathrm{d}z=\frac{\sin^2\theta}{2}(\cos\theta-\sin\theta)\,\mathrm{d}\theta.$$
<p>相加整理得被积式 $-\sin\theta\cos^2\theta-\frac12\sin^2\theta\cos\theta-\frac12\sin^3\theta+\cos^2\theta$。在一个周期 $[0,2\pi]$ 上，$\sin\theta\cos^2\theta$、$\sin^2\theta\cos\theta$、$\sin^3\theta$ 的积分都是 $0$（前两个的原函数 $-\frac{\cos^3\theta}{3}$、$\frac{\sin^3\theta}{3}$ 是周期函数；$\sin^3\theta$ 关于 $\theta=\pi$ 中心对称），只剩 $\displaystyle\int_0^{2\pi}\cos^2\theta\,\mathrm{d}\theta=\pi$。</p>
<p><b>另解二：投影降维。</b>在 $L$ 上 $z=x+y$，$\mathrm{d}z=\mathrm{d}x+\mathrm{d}y$，代入后变为 $xOy$ 面上单位圆 $C$（逆时针）上的积分：</p>
$$\oint_C\Big(x^2+xy+\frac{y^2}{2}\Big)\mathrm{d}x+\Big(x+\frac{y^2}{2}\Big)\mathrm{d}y.$$
<p>由格林公式，$\dfrac{\partial}{\partial x}\Big(x+\frac{y^2}{2}\Big)-\dfrac{\partial}{\partial y}\Big(x^2+xy+\frac{y^2}{2}\Big)=1-x-y$，所以结果为 $\iint_D(1-x-y)\,\mathrm{d}x\,\mathrm{d}y=\pi$，与斯托克斯公式得到的二重积分完全一样——这不是巧合，斯托克斯公式在平面情形就退化为格林公式。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 参数化 x=cosθ,y=sinθ,z=cosθ+sinθ，integrate(…,(θ,0,2π)) = pi；旋度 (y,x,1) 与 ∬_D(1-x-y)=π 一致' },
      flags: []
    },

    /* ───────────── 第 15 题 ───────────── */
    {
      id: '2011-15', year: 2011, no: '第15题', type: '解答', score: 10,
      stem: R`求极限 $\displaystyle\lim_{x\to0}\left[\frac{\ln(1+x)}{x}\right]^{\frac{1}{\mathrm{e}^x-1}}$．`,
      options: null,
      answer: R`$\mathrm{e}^{-\frac12}=\dfrac{1}{\sqrt{\mathrm{e}}}$`,
      figure: null,
      kp: ['lim.compute', 'lim.inf', 'diff.taylor'],
      methods: ['1^∞ 型化为指数', '等价无穷小代换 ln(1+u)~u', '泰勒公式', '洛必达法则'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>$1^\infty$ 型未定式。底数 $\dfrac{\ln(1+x)}{x}\to1$，指数 $\dfrac{1}{\mathrm{e}^x-1}\to\infty$。</p>
<p><b>为什么 $1^\infty$ 不等于 $1$（第一性原理）：</b>"底数趋于 1"和"指数趋于无穷"在拉锯：底数离 1 越近，乘方就越"无害"；指数越大，偏差就被放大得越厉害。最终结果取决于"偏差 × 指数"的极限。这正是重要极限 $\left(1+\frac1n\right)^n\to\mathrm{e}$ 揭示的道理。</p>
<p><b>标准处理：</b>凡幂指函数 $u^v$，一律写成 $\mathrm{e}^{v\ln u}$，把问题转化为求指数 $v\ln u$ 的极限。而当 $u\to1$ 时 $\ln u=\ln[1+(u-1)]\sim u-1$，所以</p>
$$\lim u^v=\mathrm{e}^{\lim v(u-1)}.$$
<p>本题 $u-1=\dfrac{\ln(1+x)-x}{x}$，分子 $\ln(1+x)-x$ 是一个"差"，不能用等价代换直接替换，要用泰勒公式展开到 $x^2$ 项——这是本题唯一需要小心的地方。</p>`,
      solution: R`<p><b>第一步：判断类型。</b>$x\to0$ 时，$\dfrac{\ln(1+x)}{x}\to1$（因为 $\ln(1+x)\sim x$），而 $\mathrm{e}^x-1\to0$，指数 $\dfrac{1}{\mathrm{e}^x-1}\to\infty$。所以是 $1^\infty$ 型。另外，$x>-1$ 且 $x\ne0$ 时 $\ln(1+x)$ 与 $x$ 同号，底数为正，取对数有意义。</p>
<p><b>第二步：化成指数形式。</b></p>
$$\left[\frac{\ln(1+x)}{x}\right]^{\frac{1}{\mathrm{e}^x-1}}=\exp\left\{\frac{1}{\mathrm{e}^x-1}\ln\frac{\ln(1+x)}{x}\right\}.$$
<p>由指数函数的连续性，只需求指数部分的极限 $\displaystyle W=\lim_{x\to0}\frac{1}{\mathrm{e}^x-1}\ln\frac{\ln(1+x)}{x}$。</p>
<p><b>第三步：对两个因子分别做等价代换。</b></p>
<ul><li>令 $u=\dfrac{\ln(1+x)}{x}-1=\dfrac{\ln(1+x)-x}{x}$，则 $u\to0$，所以 $\ln\dfrac{\ln(1+x)}{x}=\ln(1+u)\sim u$；</li><li>$\mathrm{e}^x-1\sim x$。</li></ul>
<p>两个因子都处在乘除位置，可以整体替换：</p>
$$W=\lim_{x\to0}\frac{1}{x}\cdot\frac{\ln(1+x)-x}{x}=\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}.$$
<p><b>第四步：用泰勒公式处理"差"。</b>$\ln(1+x)=x-\dfrac{x^2}{2}+o(x^2)$，所以 $\ln(1+x)-x=-\dfrac{x^2}{2}+o(x^2)$，</p>
$$W=\lim_{x\to0}\frac{-\frac{x^2}{2}+o(x^2)}{x^2}=-\frac12.$$
<p>（也可以用洛必达法则：$\displaystyle\lim_{x\to0}\frac{\frac{1}{1+x}-1}{2x}=\lim_{x\to0}\frac{-x}{2x(1+x)}=-\frac12$。）</p>
<p><b>第五步：写出结果。</b></p>
$$\lim_{x\to0}\left[\frac{\ln(1+x)}{x}\right]^{\frac{1}{\mathrm{e}^x-1}}=\mathrm{e}^{-\frac12}=\frac{1}{\sqrt{\mathrm{e}}}.$$`,
      pitfalls: R`<ul><li><b>"底数趋于 1，所以极限是 1"：</b>这是最典型的错误。$1^\infty$ 是未定式，必须转成 $\mathrm{e}^{v\ln u}$ 计算。</li><li><b>在差里做等价代换：</b>把 $\ln(1+x)-x$ 中的 $\ln(1+x)$ 换成 $x$，得到 $0$，于是误得结果 $\mathrm{e}^0=1$。加减运算中的等价代换只有在不发生抵消时才安全；这里首项恰好抵消，必须展开到二阶。</li><li><b>记错 $\ln(1+x)$ 的二阶项符号：</b>$\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots$，二阶项是负的，最终指数是 $-\frac12$。</li></ul>`,
      summary: R`<p><b>$1^\infty$ 型万能公式：</b>若 $u\to1$，$v\to\infty$，则 $\lim u^v=\mathrm{e}^{\lim v(u-1)}$。</p>
<p><b>解题流程：</b>判型 → 写成 $\mathrm{e}^{v\ln u}$ → 用 $\ln u\sim u-1$ → 化为 $\frac00$ 型 → 等价代换 + 泰勒（或洛必达）。</p>
<p><b>常用"差"的等价（$x\to0$）：</b>$\ln(1+x)-x\sim-\frac{x^2}{2}$，$\mathrm{e}^x-1-x\sim\frac{x^2}{2}$，$x-\sin x\sim\frac{x^3}{6}$，$\tan x-x\sim\frac{x^3}{3}$，$x-\arctan x\sim\frac{x^3}{3}$。</p>
<p><b>题型识别：</b>看到"变量在底数和指数上同时出现"→ 幂指函数，先取对数或写成 $\mathrm{e}^{v\ln u}$；底数 $\to1$、指数 $\to\infty$ → 直接套 $\mathrm{e}^{\lim v(u-1)}$。</p>`,
      alt: R`<p><b>直接展开底数：</b>由 $\ln(1+x)=x-\frac{x^2}{2}+o(x^2)$，得 $\dfrac{\ln(1+x)}{x}=1-\dfrac{x}{2}+o(x)$，于是</p>$$\ln\frac{\ln(1+x)}{x}=\ln\left(1-\frac x2+o(x)\right)=-\frac x2+o(x),$$<p>指数 $=\dfrac{-\frac x2+o(x)}{\mathrm{e}^x-1}=\dfrac{-\frac x2+o(x)}{x+o(x)}\to-\dfrac12$，结果同样是 $\mathrm{e}^{-\frac12}$。这种写法把"展开到几阶"的问题想得很清楚：分母是一阶无穷小，分子展开到一阶就够了。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit((log(1+x)/x)**(1/(exp(x)-1)),x,0) = exp(-1/2)，左右极限都等于 exp(-1/2)；limit((log(1+x)-x)/x**2,x,0) = -1/2' },
      flags: []
    },

    /* ───────────── 第 16 题 ───────────── */
    {
      id: '2011-16', year: 2011, no: '第16题', type: '解答', score: 9,
      stem: R`设函数 $z=f(xy,\,yg(x))$，其中函数 $f$ 具有二阶连续偏导数，函数 $g(x)$ 可导，且在 $x=1$ 处取得极值 $g(1)=1$．求 $\left.\dfrac{\partial^2z}{\partial x\partial y}\right|_{\substack{x=1\\y=1}}$．`,
      options: null,
      answer: R`$f_1'(1,1)+f_{11}''(1,1)+f_{12}''(1,1)$`,
      figure: null,
      kp: ['mdiff.chain', 'diff.mono'],
      methods: ['多元复合函数链式法则', '费马引理（可导极值点导数为零）', '先代后求'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>抽象多元复合函数的二阶混合偏导数，外加一个"隐藏条件"：<b>可导函数在极值点处导数为零</b>（费马引理）。</p>
<p><b>先画"变量关系图"：</b>$z$ 依赖两个中间变量 $u=xy$ 与 $v=yg(x)$，而 $u$、$v$ 又都依赖 $x$ 和 $y$。求 $\dfrac{\partial z}{\partial x}$ 时，从 $z$ 到 $x$ 有两条路径（经过 $u$ 和经过 $v$），每条路径贡献"外层偏导 × 内层偏导"。这就是链式法则的本质：<b>沿每条路径相乘，再把所有路径相加</b>。</p>
<p><b>二阶的关键难点：</b>$f_1'$、$f_2'$ 并不是常数，它们仍然是 $(u,v)$ 的函数，从而也是 $(x,y)$ 的函数。再对 $y$ 求导时，必须对它们<b>再用一次链式法则</b>，这是最容易漏的地方。</p>
<p><b>隐藏条件的作用：</b>"$g(x)$ 可导且在 $x=1$ 处取得极值"立即给出 $g'(1)=0$。题目只给了 $g(1)=1$ 而没给 $g'(1)$ 的值，就是在提醒你自己推出 $g'(1)=0$，从而让所有含 $g'(x)$ 的项在 $(1,1)$ 处消失。</p>`,
      solution: R`<p><b>第一步：设中间变量，写出各偏导。</b>令 $u=xy$，$v=yg(x)$，$z=f(u,v)$。记 $f_1'=\dfrac{\partial f}{\partial u}$，$f_2'=\dfrac{\partial f}{\partial v}$，$f_{11}''=\dfrac{\partial^2f}{\partial u^2}$，$f_{12}''=\dfrac{\partial^2f}{\partial u\partial v}$，依此类推。则</p>
$$\frac{\partial u}{\partial x}=y,\quad\frac{\partial v}{\partial x}=yg'(x),\quad\frac{\partial u}{\partial y}=x,\quad\frac{\partial v}{\partial y}=g(x).$$
<p><b>第二步：求 $\dfrac{\partial z}{\partial x}$。</b>由链式法则：</p>
$$\frac{\partial z}{\partial x}=f_1'\cdot y+f_2'\cdot yg'(x)=yf_1'+yg'(x)f_2'.$$
<p><b>第三步：对 $y$ 求偏导（$x$ 固定）。</b>两项都是乘积，用乘积法则；其中 $f_1'$、$f_2'$ 对 $y$ 求导要再用链式法则：</p>
$$\frac{\partial f_1'}{\partial y}=f_{11}''\cdot x+f_{12}''\cdot g(x),\qquad\frac{\partial f_2'}{\partial y}=f_{21}''\cdot x+f_{22}''\cdot g(x).$$
<p>于是</p>
$$\frac{\partial^2z}{\partial x\partial y}=f_1'+y\big[xf_{11}''+g(x)f_{12}''\big]+g'(x)\Big\{f_2'+y\big[xf_{21}''+g(x)f_{22}''\big]\Big\}.$$
<p><b>第四步：挖出隐藏条件。</b>$g(x)$ 在 $x=1$ 处可导且取得极值，由费马引理 $g'(1)=0$。又 $g(1)=1$。</p>
<p><b>第五步：确定 $f$ 的各偏导在哪一点取值。</b>当 $x=1$，$y=1$ 时，$u=xy=1$，$v=yg(x)=1\cdot g(1)=1$。所以所有 $f$ 的偏导都在点 $(u,v)=(1,1)$ 处取值。</p>
<p><b>第六步：代入。</b>含 $g'(1)=0$ 的整个花括号项消失：</p>
$$\left.\frac{\partial^2z}{\partial x\partial y}\right|_{(1,1)}=f_1'(1,1)+1\cdot\big[1\cdot f_{11}''(1,1)+1\cdot f_{12}''(1,1)\big]+0=f_1'(1,1)+f_{11}''(1,1)+f_{12}''(1,1).$$`,
      pitfalls: R`<ul><li><b>把 $f_1'$ 当常数：</b>对 $y$ 求导时写成 $\dfrac{\partial}{\partial y}(yf_1')=f_1'$，漏掉 $y\dfrac{\partial f_1'}{\partial y}$ 这一大块。记住：$f_1'$ 和 $f$ 有相同的复合结构。</li><li><b>没想到 $g'(1)=0$：</b>题目没有直接给 $g'(1)$，如果不会用"可导 + 极值 ⇒ 导数为零"，答案里会残留 $g'(1)$ 相关的项。</li><li><b>取值点写错：</b>$f$ 的偏导应在 $(u,v)=(xy,yg(x))=(1,1)$ 处取值，不是笼统地写"在 $(x,y)$ 处"。本题两者数值恰好相同，但概念不能混。</li><li><b>先代后求代错变量：</b>求 $\frac{\partial^2z}{\partial x\partial y}$ 时，求完 $\frac{\partial z}{\partial x}$ 之后可以先代 $x=1$（因为接下来对 $y$ 求导），但不能先代 $y=1$。</li></ul>`,
      summary: R`<p><b>抽象复合函数求二阶偏导的流程：</b>① 设中间变量，画出"$z\to u,v\to x,y$"的关系图；② 一阶偏导：沿每条路径"外层偏导 × 内层偏导"再相加；③ 二阶偏导：对一阶结果用乘积法则，其中 $f_i'$ 要<b>再走一遍链式法则</b>；④ $f$ 有二阶连续偏导时 $f_{12}''=f_{21}''$，可以合并。</p>
<p><b>隐藏条件清单：</b>"可导函数在某点取得极值" ⇒ 该点导数为零；"曲线在某点有水平切线" ⇒ 导数为零；"$f$ 有二阶连续偏导" ⇒ 混合偏导与次序无关。</p>
<p><b>题型识别：</b>看到"求某点处的二阶混合偏导"→ 优先考虑先代后求，先把不再求导的变量代成数，减少计算量。</p>`,
      alt: R`<p><b>先代后求：</b>由第二步 $\dfrac{\partial z}{\partial x}=yf_1'(xy,yg(x))+yg'(x)f_2'(xy,yg(x))$。接下来只对 $y$ 求导，$x$ 保持不变，所以可以先令 $x=1$：</p>$$\left.\frac{\partial z}{\partial x}\right|_{x=1}=yf_1'(y,y)+y\cdot0\cdot f_2'(y,y)=yf_1'(y,y).$$<p>这是关于 $y$ 的一元函数，对 $y$ 求导（注意 $f_1'(y,y)$ 的两个位置都含 $y$）：</p>$$\frac{\mathrm{d}}{\mathrm{d}y}\big[yf_1'(y,y)\big]=f_1'(y,y)+y\big[f_{11}''(y,y)+f_{12}''(y,y)\big],$$<p>令 $y=1$，得 $f_1'(1,1)+f_{11}''(1,1)+f_{12}''(1,1)$。这种写法比完整求出二阶偏导再代入简洁得多。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 取具体函数 f(u,v)=u³v+sin(uv²)+eᵘv²+u²v³，g(x)=1+(x-1)² 及 g(x)=1+3sin²(x-1)+(x-1)³（均满足 g(1)=1、g\'(1)=0），diff(z,x,y) 在 (1,1) 处与 f₁\'+f₁₁\'\'+f₁₂\'\' 在 (1,1) 处之差化简为 0' },
      flags: []
    },

    /* ───────────── 第 17 题 ───────────── */
    {
      id: '2011-17', year: 2011, no: '第17题', type: '解答', score: 10,
      stem: R`求方程 $k\arctan x-x=0$ 不同实根的个数，其中 $k$ 为参数．`,
      options: null,
      answer: R`当 $k\leqslant1$ 时，方程只有一个实根 $x=0$；当 $k>1$ 时，方程有三个不同实根（$x=0$ 以及一正一负两个根，它们互为相反数）。`,
      figure: null,
      kp: ['diff.ineq', 'diff.mono', 'lim.closed'],
      methods: ['构造函数研究单调性', '零点定理', '奇函数对称性', '分离参数'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>含参数方程的<b>实根个数</b>。标准思路是"构造函数 → 求导找单调区间 → 在每个单调区间上用零点定理判断有没有根"，因为<b>严格单调的连续函数在一个区间上至多有一个零点</b>。</p>
<p><b>从题目特征想到方法：</b></p>
<ul><li>令 $f(x)=k\arctan x-x$，它是<b>奇函数</b>（$\arctan$ 和 $x$ 都是奇函数）。所以根关于原点对称出现，且 $x=0$ 永远是根。只需研究 $(0,+\infty)$ 上有几个根，再"乘 2 加 1"。</li><li>$f'(x)=\dfrac{k}{1+x^2}-1=\dfrac{k-1-x^2}{1+x^2}$，分子的符号取决于 $k-1$ 与 $x^2$ 的大小，于是自然以 $k=1$ 为分界讨论。</li></ul>
<p><b>直觉图像：</b>方程 $k\arctan x=x$ 就是看曲线 $y=k\arctan x$ 与直线 $y=x$ 有几个交点。$k\arctan x$ 在原点的切线斜率是 $k$，且远处有界（绝对值不超过 $\frac{|k|\pi}{2}$）。若 $k\leqslant1$，曲线在原点处就比直线"平"，之后更平，只在原点相交；若 $k>1$，曲线在原点处比直线"陡"，先冲到直线上方，但它有上界而直线无界，最终必被直线追上，于是在正半轴再交一次，负半轴对称再交一次。</p>`,
      solution: R`<p><b>第一步：构造函数并利用奇偶性。</b>令 $f(x)=k\arctan x-x$，$x\in(-\infty,+\infty)$。由于 $f(-x)=-k\arctan x+x=-f(x)$，$f$ 是奇函数，且 $f(0)=0$，所以 $x=0$ 总是一个根，并且根关于原点对称。</p>
<p><b>第二步：求导。</b></p>
$$f'(x)=\frac{k}{1+x^2}-1=\frac{k-1-x^2}{1+x^2}.$$
<p><b>第三步：情形一，$k\leqslant1$。</b>当 $x\ne0$ 时，$k-1-x^2\leqslant-x^2<0$，所以 $f'(x)<0$（仅可能在 $x=0$ 一点等于零）。因此 $f$ 在 $(-\infty,+\infty)$ 上严格单调减少，至多有一个零点；而 $f(0)=0$，所以方程<b>只有一个实根 $x=0$</b>。</p>
<p><b>第四步：情形二，$k>1$。</b>记 $x_0=\sqrt{k-1}>0$，$f'(x)=0$ 的解为 $x=\pm x_0$。列表（只看 $x\geqslant0$ 部分）：</p>
<table><thead><tr><th>$x$</th><th>$0$</th><th>$(0,x_0)$</th><th>$x_0$</th><th>$(x_0,+\infty)$</th></tr></thead><tbody><tr><td>$f'(x)$</td><td>$k-1>0$</td><td>$+$</td><td>$0$</td><td>$-$</td></tr><tr><td>$f(x)$</td><td>$0$</td><td>严格增</td><td>极大值</td><td>严格减</td></tr></tbody></table>
<ul><li>在 $(0,x_0]$ 上 $f$ 严格增，所以 $f(x)>f(0)=0$，这一段<b>没有根</b>，并且 $f(x_0)>0$。</li><li>在 $[x_0,+\infty)$ 上 $f$ 严格减。由于 $|k\arctan x|<\dfrac{k\pi}{2}$ 有界，而 $-x\to-\infty$，所以 $\lim\limits_{x\to+\infty}f(x)=-\infty$，于是存在 $M>x_0$ 使 $f(M)<0$。$f$ 在 $[x_0,M]$ 上连续且 $f(x_0)>0$，$f(M)<0$，由零点定理在 $(x_0,M)$ 内至少有一个根；又 $f$ 在 $[x_0,+\infty)$ 上严格单调，所以<b>恰有一个根</b>。</li></ul>
<p>因此 $f$ 在 $(0,+\infty)$ 内恰有一个零点 $x_1>x_0$。由奇函数的对称性，$f$ 在 $(-\infty,0)$ 内也恰有一个零点 $-x_1$。连同 $x=0$，<b>共三个不同实根</b>。</p>
<p><b>第五步：结论。</b>当 $k\leqslant1$ 时，方程只有一个实根；当 $k>1$ 时，方程有三个不同实根。</p>`,
      pitfalls: R`<ul><li><b>漏掉 $k\leqslant0$ 的情形：</b>$k$ 是任意实数参数，不能默认 $k>0$。好在 $k\leqslant1$ 的论证对负数 $k$ 同样成立，要在叙述中覆盖到。</li><li><b>分界点 $k=1$ 归错类：</b>$k=1$ 时 $f'(x)=-\dfrac{x^2}{1+x^2}\leqslant0$，只在 $x=0$ 处为零，$f$ 仍严格单调减，只有一个根。</li><li><b>只说"有极大值且 $\to-\infty$"就断定恰有一根：</b>"至少一个"靠零点定理，"至多一个"靠严格单调性，两者缺一不可。</li><li><b>忘记 $x=0$ 这个根：</b>$k>1$ 时容易只数出一正一负两个根，结论写成"两个"。</li></ul>`,
      summary: R`<p><b>方程根的个数问题的通用流程：</b>① 构造 $f(x)$（必要时先把参数分离）；② 求 $f'$，划分单调区间；③ 在每个单调区间上看端点值（或端点极限）的符号：异号恰一个根，同号无根；④ 汇总。</p>
<p><b>两个原则：</b>"存在性靠零点定理（或介值定理），唯一性靠严格单调"。</p>
<p><b>题型识别：</b></p><ul><li>看到 $f$ 是奇函数或偶函数 → 只研究半轴，再利用对称性；</li><li>看到参数以乘积形式出现 $k\,g(x)=h(x)$ → 可以考虑分离参数 $k=\frac{h(x)}{g(x)}$，转化为水平线 $y=k$ 与固定曲线的交点个数；</li><li>看到 $\arctan x$、$\ln x$ 这类"增长很慢"的函数与 $x$ 比较 → 想到 $x\to\infty$ 时线性项占优，端点极限为 $\pm\infty$。</li></ul>`,
      alt: R`<p><b>分离参数法：</b>$x=0$ 总是根。$x\ne0$ 时 $\arctan x\ne0$，方程等价于 $k=\varphi(x):=\dfrac{x}{\arctan x}$。$\varphi$ 是偶函数，所以只看 $x>0$：</p>
<ul><li>$\varphi'(x)=\dfrac{\arctan x-\frac{x}{1+x^2}}{\arctan^2x}$。令 $\psi(x)=\arctan x-\dfrac{x}{1+x^2}$，$\psi(0)=0$，$\psi'(x)=\dfrac{1}{1+x^2}-\dfrac{1-x^2}{(1+x^2)^2}=\dfrac{2x^2}{(1+x^2)^2}>0$，故 $x>0$ 时 $\psi(x)>0$，$\varphi$ 在 $(0,+\infty)$ 上严格增。</li><li>$\lim\limits_{x\to0^+}\varphi(x)=1$，$\lim\limits_{x\to+\infty}\varphi(x)=+\infty$，所以 $\varphi$ 把 $(0,+\infty)$ 一一地映成 $(1,+\infty)$。</li></ul>
<p>于是：$k>1$ 时水平线 $y=k$ 与 $y=\varphi(x)$ 在 $x>0$ 处恰交一次，由偶函数性在 $x<0$ 处也恰交一次，加上 $x=0$ 共三个根；$k\leqslant1$ 时没有交点，只有 $x=0$ 一个根。</p>
<div style="text-align:center"><svg viewBox="0 0 360 190" width="360" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg"><title>φ(x)=x/arctan x 的图形与水平线 y=k 的交点</title><line x1="20" y1="170" x2="345" y2="170" stroke="currentColor" stroke-width="1"/><line x1="180" y1="185" x2="180" y2="8" stroke="currentColor" stroke-width="1"/><polyline points="30.0,41.9 37.5,47.6 45.0,53.3 52.5,58.9 60.0,64.5 67.5,70.2 75.0,75.8 82.5,81.3 90.0,86.9 97.5,92.4 105.0,97.9 112.5,103.4 120.0,108.8 127.5,114.1 135.0,119.2 142.5,124.2 150.0,128.9 157.5,133.2 165.0,136.7 172.5,139.1 180.0,140.0 187.5,139.1 195.0,136.7 202.5,133.2 210.0,128.9 217.5,124.2 225.0,119.2 232.5,114.1 240.0,108.8 247.5,103.4 255.0,97.9 262.5,92.4 270.0,86.9 277.5,81.3 285.0,75.8 292.5,70.2 300.0,64.5 307.5,58.9 315.0,53.3 322.5,47.6 330.0,41.9" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="180" cy="140" r="3" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="20" y1="110" x2="345" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 3"/><line x1="20" y1="152" x2="345" y2="152" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 3"/><circle cx="121.7" cy="110" r="3" fill="currentColor"/><circle cx="238.3" cy="110" r="3" fill="currentColor"/><text x="337" y="184" font-size="12" fill="currentColor">x</text><text x="186" y="16" font-size="12" fill="currentColor">y</text><text x="168" y="137" font-size="11" fill="currentColor" text-anchor="end">1</text><text x="250" y="40" font-size="12" fill="currentColor">y = x / arctan x</text><text x="262" y="105" font-size="11" fill="currentColor">k = 2：两个交点</text><text x="262" y="164" font-size="11" fill="currentColor">k ≤ 1：无交点</text></svg></div>
<p>图中空心圆表示 $\varphi$ 在 $x=0$ 处无定义（极限为 $1$），所以 $k=1$ 的水平线与曲线没有交点。</p>`,
      verify: { by: 'mixed', ok: true, note: '推理证明；sympy nsolve 数值检验：k=-2,0,1/2 各只有根 0；k=3/2 根为 0,±1.4511；k=2 根为 0,±2.3311；k=5 根为 0,±7.1602；k=1 时 f\'=-x²/(1+x²)≤0 严格减，只有根 0' },
      flags: ['OCR 漏掉了参数 k，原文识别为 "arctan x − x = 0 … 其中 k 为参数"，据"其中 k 为参数"及参考解析补为 k arctan x − x = 0']
    },

    /* ───────────── 第 18 题 ───────────── */
    {
      id: '2011-18', year: 2011, no: '第18题', type: '解答', score: 10,
      stem: R`（Ⅰ）证明：对任意的正整数 $n$，都有 $\dfrac{1}{n+1}<\ln\left(1+\dfrac1n\right)<\dfrac1n$ 成立；<br>（Ⅱ）设 $a_n=1+\dfrac12+\cdots+\dfrac1n-\ln n\ (n=1,2,\cdots)$，证明数列 $\{a_n\}$ 收敛．`,
      options: null,
      answer: R`（Ⅰ）对 $\ln x$ 在 $[n,n+1]$ 上用拉格朗日中值定理即得；（Ⅱ）由（Ⅰ）左半得 $a_{n+1}-a_n<0$，由（Ⅰ）右半求和得 $a_n>\ln(n+1)-\ln n>0$，单调减少有下界，故收敛（极限为欧拉常数 $\gamma\approx0.5772$）。`,
      figure: null,
      kp: ['lim.seqcalc', 'diff.mvt', 'diff.ineq'],
      methods: ['拉格朗日中值定理', '单调有界准则', '裂项相消（望远镜求和）'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>（Ⅰ）用中值定理证明不等式；（Ⅱ）用<b>单调有界准则</b>证明数列收敛。第（Ⅰ）问是第（Ⅱ）问的工具——这种"前问铺路"的结构在考研题中非常常见。</p>
<p><b>（Ⅰ）怎么想到拉格朗日：</b>$\ln\left(1+\frac1n\right)=\ln(n+1)-\ln n$，这是函数 $\ln x$ 在区间 $[n,n+1]$ 上的<b>增量</b>，而区间长度恰好是 $1$。"函数增量 ÷ 区间长度"正是拉格朗日中值定理里的平均变化率，它等于某点的导数 $\frac1\xi$，而 $\xi$ 被夹在 $n$ 与 $n+1$ 之间，$\frac1\xi$ 自然被夹在 $\frac1{n+1}$ 与 $\frac1n$ 之间。</p>
<p><b>几何直观：</b>$\ln(n+1)-\ln n=\displaystyle\int_n^{n+1}\frac{\mathrm{d}x}{x}$ 是曲线 $y=\frac1x$ 在 $[n,n+1]$ 下方的面积。由于 $\frac1x$ 单调减少，这块面积大于高为 $\frac1{n+1}$ 的矩形、小于高为 $\frac1n$ 的矩形。</p>
<p><b>（Ⅱ）怎么想到单调有界：</b>题目只要求证"收敛"，没有要求求出极限（事实上极限是欧拉常数 $\gamma$，不是初等数）。"证明存在但不求值"几乎就是单调有界准则的代名词。单调性看 $a_{n+1}-a_n$，有界性看能否把 $\sum\frac1k$ 放缩成可以相消的对数之和——这两件事正好分别用到（Ⅰ）的左半和右半。</p>`,
      solution: R`<p><b>（Ⅰ）第一步：改写。</b>$\ln\left(1+\dfrac1n\right)=\ln\dfrac{n+1}{n}=\ln(n+1)-\ln n$。</p>
<p><b>第二步：验证中值定理条件。</b>函数 $\varphi(x)=\ln x$ 在闭区间 $[n,n+1]$ 上连续，在开区间 $(n,n+1)$ 内可导，$\varphi'(x)=\dfrac1x$。</p>
<p><b>第三步：应用拉格朗日中值定理。</b>存在 $\xi\in(n,n+1)$，使</p>
$$\ln(n+1)-\ln n=\varphi'(\xi)\cdot\big[(n+1)-n\big]=\frac1\xi.$$
<p><b>第四步：估计 $\frac1\xi$。</b>由 $n<\xi<n+1$（严格不等）得 $\dfrac{1}{n+1}<\dfrac1\xi<\dfrac1n$，所以</p>
$$\frac{1}{n+1}<\ln\left(1+\frac1n\right)<\frac1n.$$
<p><b>（Ⅱ）第一步：证明单调减少。</b></p>
$$a_{n+1}-a_n=\left(\sum_{k=1}^{n+1}\frac1k-\ln(n+1)\right)-\left(\sum_{k=1}^{n}\frac1k-\ln n\right)=\frac{1}{n+1}-\big[\ln(n+1)-\ln n\big]=\frac1{n+1}-\ln\left(1+\frac1n\right).$$
<p>由（Ⅰ）的<b>左半</b>不等式，$a_{n+1}-a_n<0$，所以 $\{a_n\}$ 严格单调减少。</p>
<p><b>第二步：证明有下界。</b>由（Ⅰ）的<b>右半</b>不等式，对每个 $k=1,2,\cdots,n$ 有</p>
$$\frac1k>\ln\left(1+\frac1k\right)=\ln(k+1)-\ln k.$$
<p>把这 $n$ 个不等式相加，右边相邻项两两抵消（裂项相消）：</p>
$$1+\frac12+\cdots+\frac1n>\big[\ln2-\ln1\big]+\big[\ln3-\ln2\big]+\cdots+\big[\ln(n+1)-\ln n\big]=\ln(n+1).$$
<p>所以</p>
$$a_n=1+\frac12+\cdots+\frac1n-\ln n>\ln(n+1)-\ln n>0,$$
<p>即 $\{a_n\}$ 有下界 $0$。</p>
<p><b>第三步：用单调有界准则下结论。</b>$\{a_n\}$ 单调减少且有下界，由单调有界准则，$\lim\limits_{n\to\infty}a_n$ 存在，即数列 $\{a_n\}$ 收敛。</p>
<p><b>补充说明：</b>这个极限叫做欧拉常数 $\gamma\approx0.5772$。它告诉我们 $1+\frac12+\cdots+\frac1n=\ln n+\gamma+o(1)$：调和级数虽然发散，但发散得和 $\ln n$ 一样慢。</p>`,
      pitfalls: R`<ul><li><b>单调与有界的方向不配套：</b>单调<b>减少</b>的数列需要的是<b>下界</b>；如果证了上界（例如 $a_n\leqslant a_1=1$），对收敛没有任何帮助。</li><li><b>用错（Ⅰ）的哪一半：</b>单调性用左半 $\frac1{n+1}<\ln\left(1+\frac1n\right)$，有界性用右半 $\ln\left(1+\frac1k\right)<\frac1k$。用反了推不出结论。</li><li><b>拉格朗日中值定理不写条件：</b>证明题中要写明"$\ln x$ 在 $[n,n+1]$ 上连续、在 $(n,n+1)$ 内可导"，这是得分点；并且要强调 $\xi$ 在开区间内，才能得到严格不等号。</li><li><b>把"收敛"误证成"趋于 0"：</b>只需要证明极限存在，极限值 $\gamma$ 并不是 $0$。</li></ul>`,
      summary: R`<p><b>方法要点：</b></p><ul><li>$\ln(1+\frac1n)$、$\ln(n+1)-\ln n$ 类表达式 → 看成 $\ln x$ 在 $[n,n+1]$ 上的增量，用拉格朗日中值定理或积分 $\int_n^{n+1}\frac{\mathrm{d}x}{x}$ 夹逼；</li><li>证明数列收敛但求不出极限 → 单调有界准则：单调性看差 $a_{n+1}-a_n$ 或比 $\frac{a_{n+1}}{a_n}$，有界性靠放缩；</li><li>$\sum\ln\left(1+\frac1k\right)$ → 写成 $\sum[\ln(k+1)-\ln k]$，裂项相消。</li></ul>
<p><b>重要结论：</b>$\ln(1+n)<1+\frac12+\cdots+\frac1n<1+\ln n$，即调和级数部分和与 $\ln n$ 同阶。</p>
<p><b>常用不等式：</b>$x>0$ 时 $\dfrac{x}{1+x}<\ln(1+x)<x$（取 $x=\frac1n$ 就是本题（Ⅰ））。</p>`,
      alt: R`<p><b>（Ⅰ）的另一证法——函数单调性：</b>先证 $x>0$ 时 $\dfrac{x}{1+x}<\ln(1+x)<x$。</p><ul><li>令 $g(x)=x-\ln(1+x)$，$g(0)=0$，$g'(x)=1-\dfrac1{1+x}=\dfrac{x}{1+x}>0$（$x>0$），故 $g(x)>0$，即 $\ln(1+x)<x$。</li><li>令 $h(x)=\ln(1+x)-\dfrac{x}{1+x}$，$h(0)=0$，$h'(x)=\dfrac1{1+x}-\dfrac{1}{(1+x)^2}=\dfrac{x}{(1+x)^2}>0$（$x>0$），故 $h(x)>0$，即 $\ln(1+x)>\dfrac{x}{1+x}$。</li></ul><p>取 $x=\dfrac1n$，$\dfrac{x}{1+x}=\dfrac{1/n}{1+1/n}=\dfrac{1}{n+1}$，即得结论。</p><p><b>（Ⅰ）的第三种证法——积分比较：</b>$x\in[n,n+1]$ 时 $\dfrac1{n+1}\leqslant\dfrac1x\leqslant\dfrac1n$，且等号只在端点成立，积分得 $\dfrac1{n+1}<\displaystyle\int_n^{n+1}\frac{\mathrm{d}x}{x}=\ln\left(1+\frac1n\right)<\dfrac1n$。</p>`,
      verify: { by: 'proof', ok: true, note: '严格证明；数值检查：n=1..999 时不等式均成立，a_1..a_11 严格递减（1, 0.8069, 0.7347, …, 0.6220），趋于欧拉常数 0.5772' },
      flags: []
    },

    /* ───────────── 第 19 题 ───────────── */
    {
      id: '2011-19', year: 2011, no: '第19题', type: '解答', score: 11,
      stem: R`已知函数 $f(x,y)$ 具有二阶连续偏导数，且 $f(1,y)=0$，$f(x,1)=0$，$\displaystyle\iint_Df(x,y)\,\mathrm{d}x\,\mathrm{d}y=a$，其中 $D=\{(x,y)\mid0\leqslant x\leqslant1,\ 0\leqslant y\leqslant1\}$，计算二重积分 $I=\displaystyle\iint_Dxyf''_{xy}(x,y)\,\mathrm{d}x\,\mathrm{d}y$．`,
      options: null,
      answer: R`$I=a$`,
      figure: null,
      kp: ['mint.double', 'int.defcalc'],
      methods: ['二重积分化为累次积分', '分部积分法', '交换积分次序', '利用边界条件消去边界项'],
      difficulty: 4,
      analysis: R`<p><b>这题考什么：</b>被积函数含<b>抽象函数的二阶混合偏导</b>的二重积分。$f$ 没有具体表达式，不可能"算出来"，只能利用已知条件把 $I$ 转化成已知的 $\iint_Df=a$。</p>
<p><b>从题目特征想到方法：</b>已知的是 $f$ 的积分，要求的是 $f''_{xy}$ 的积分——两者相差"两次求导"。在一元里，把导数从一个因子挪到另一个因子上的工具就是<b>分部积分</b>：$\int_0^1xg'(x)\,\mathrm{d}x=xg(x)\Big|_0^1-\int_0^1g(x)\,\mathrm{d}x$。所以思路是：化为累次积分，<b>对 $y$ 分部积分一次、对 $x$ 分部积分一次</b>，把两次求导"卸"掉。</p>
<p><b>第一性原理的看法：</b>两次分部积分实质上是把导数从 $f$ 转移到权函数 $xy$ 上，而 $\dfrac{\partial^2(xy)}{\partial x\partial y}=1$，所以"主项"恰好是 $\iint_Df\cdot1=a$。剩下的只是边界项，而题目的条件就是专门为消掉边界项设计的：</p>
<ul><li>权函数 $xy$ 在 $x=0$ 或 $y=0$ 的边上为 $0$ → 下限的边界项自动消失；</li><li>$f(1,y)=0$，$f(x,1)=0$ → 上限的边界项也消失。</li></ul>
<p>看清了这个结构，就知道答案一定是 $a$，剩下的就是严谨地写出来。</p>`,
      solution: R`<p><b>第一步：化为累次积分（先对 $y$ 积分）。</b>$D$ 是正方形，被积函数连续，所以</p>
$$I=\int_0^1x\left[\int_0^1yf''_{xy}(x,y)\,\mathrm{d}y\right]\mathrm{d}x.$$
<p>先对 $y$ 积，是因为 $f''_{xy}=\dfrac{\partial}{\partial y}\big(f'_x\big)$，对 $y$ 积分正好"抵消"最后一次对 $y$ 的求导。</p>
<p><b>第二步：内层对 $y$ 分部积分（$x$ 固定）。</b></p>
$$\int_0^1yf''_{xy}(x,y)\,\mathrm{d}y=\int_0^1y\,\mathrm{d}\big[f'_x(x,y)\big]=\Big[yf'_x(x,y)\Big]_{y=0}^{y=1}-\int_0^1f'_x(x,y)\,\mathrm{d}y=f'_x(x,1)-\int_0^1f'_x(x,y)\,\mathrm{d}y.$$
<p>下限处 $y=0$ 使边界项为 $0$。</p>
<p><b>第三步：利用 $f(x,1)=0$ 消去 $f'_x(x,1)$。</b>$f(x,1)=0$ 对一切 $x\in[0,1]$ 成立，即一元函数 $x\mapsto f(x,1)$ 恒为零，所以它对 $x$ 的导数也恒为零：$f'_x(x,1)=0$。于是</p>
$$I=-\int_0^1x\left[\int_0^1f'_x(x,y)\,\mathrm{d}y\right]\mathrm{d}x=-\iint_Dxf'_x(x,y)\,\mathrm{d}x\,\mathrm{d}y.$$
<p><b>第四步：交换积分次序（改为先对 $x$ 积分）。</b>被积函数在正方形上连续，可以交换次序：</p>
$$I=-\int_0^1\left[\int_0^1xf'_x(x,y)\,\mathrm{d}x\right]\mathrm{d}y.$$
<p><b>第五步：内层对 $x$ 分部积分（$y$ 固定）。</b></p>
$$\int_0^1xf'_x(x,y)\,\mathrm{d}x=\int_0^1x\,\mathrm{d}\big[f(x,y)\big]=\Big[xf(x,y)\Big]_{x=0}^{x=1}-\int_0^1f(x,y)\,\mathrm{d}x=f(1,y)-\int_0^1f(x,y)\,\mathrm{d}x.$$
<p>由 $f(1,y)=0$，上式等于 $-\displaystyle\int_0^1f(x,y)\,\mathrm{d}x$。</p>
<p><b>第六步：汇总。</b></p>
$$I=-\int_0^1\left[-\int_0^1f(x,y)\,\mathrm{d}x\right]\mathrm{d}y=\int_0^1\mathrm{d}y\int_0^1f(x,y)\,\mathrm{d}x=\iint_Df(x,y)\,\mathrm{d}x\,\mathrm{d}y=a.$$
<p><b>第七步：用具体例子检验。</b>取 $f(x,y)=(1-x)(1-y)$，满足 $f(1,y)=f(x,1)=0$，$f''_{xy}=1$。则 $a=\displaystyle\int_0^1(1-x)\,\mathrm{d}x\int_0^1(1-y)\,\mathrm{d}y=\frac14$，而 $I=\displaystyle\iint_Dxy\,\mathrm{d}x\,\mathrm{d}y=\frac12\cdot\frac12=\frac14$，确实相等。</p>`,
      pitfalls: R`<ul><li><b>误以为 $f(1,y)=0$ 能推出 $f'_x(1,y)=0$：</b>$f(1,y)=0$ 只说明 $f$ 沿直线 $x=1$ 恒为零，因此沿这条线的方向导数 $f'_y(1,y)=0$；但垂直于这条线的偏导 $f'_x(1,y)$ 可以不为零。同理 $f(x,1)=0$ 推出的是 $f'_x(x,1)=0$，而不是 $f'_y(x,1)=0$。本题第三步用的正是"沿边方向求导"。</li><li><b>分部积分时把积分变量搞混：</b>对 $y$ 分部积分时 $x$ 是常数，$\mathrm{d}\big[f'_x(x,y)\big]$ 指的是对 $y$ 的微分 $f''_{xy}\,\mathrm{d}y$。</li><li><b>边界项的上下限代错：</b>$\big[yf'_x(x,y)\big]_{y=0}^{y=1}$ 是代 $y$ 的值，不是代 $x$。</li><li><b>想给 $f$ 设一个具体形式来"算"：</b>具体例子只能用来检验，不能作为解答。</li></ul>`,
      summary: R`<p><b>方法要点：</b>积分号下出现抽象函数的导数，而已知条件是函数值或函数的积分 → 用分部积分把导数"挪走"；边界条件的作用就是让边界项为零。</p>
<p><b>二维分部积分的套路：</b>对 $\iint_Dw(x,y)f''_{xy}\,\mathrm{d}x\,\mathrm{d}y$（$D$ 为矩形），先对 $y$ 分部、再交换次序对 $x$ 分部，主项为 $\iint_Dw''_{xy}f\,\mathrm{d}x\,\mathrm{d}y$，再加上若干边界项。</p>
<p><b>题型识别：</b></p><ul><li>看到"$f$ 抽象、只给边界值和积分值，求含导数的积分"→ 分部积分；</li><li>看到权函数在边界上为零（如 $x$、$y$、$x(1-x)$）→ 那一侧的边界项会自动消失，正是出题人的设计；</li><li>看到 $f(x_0,y)\equiv0$ → 能得到 $f'_y(x_0,y)\equiv0$（沿边求导），但得不到 $f'_x(x_0,y)=0$。</li></ul>`,
      alt: R`<p><b>先对 $x$ 积分的顺序：</b>因为 $f$ 有二阶连续偏导，$f''_{xy}=f''_{yx}=\dfrac{\partial}{\partial x}\big(f'_y\big)$。先对 $x$ 分部积分：</p>$$\int_0^1xf''_{xy}\,\mathrm{d}x=\Big[xf'_y(x,y)\Big]_{x=0}^{x=1}-\int_0^1f'_y(x,y)\,\mathrm{d}x=f'_y(1,y)-\int_0^1f'_y(x,y)\,\mathrm{d}x.$$<p>由 $f(1,y)\equiv0$ 得 $f'_y(1,y)=0$。于是 $I=-\displaystyle\int_0^1\mathrm{d}x\int_0^1yf'_y(x,y)\,\mathrm{d}y$，再对 $y$ 分部积分并用 $f(x,1)=0$，得 $\displaystyle\int_0^1yf'_y\,\mathrm{d}y=-\int_0^1f(x,y)\,\mathrm{d}y$，所以 $I=\iint_Df=a$。两种顺序完全对称，体会一下"沿边求导为零"在两种顺序中分别用到了哪条边。</p>`,
      verify: { by: 'mixed', ok: true, note: '推理推导；sympy 取 f=(1-x)(1-y)e^{xy}+(1-x)²(1-y)xy³（满足两条边界条件），I 与 a 的数值均为 0.285884838…，差化简为 0；另手算 f=(1-x)(1-y) 时 I=a=1/4' },
      flags: []
    }
  ];
});
