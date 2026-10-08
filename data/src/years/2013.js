// 2013 年全国硕士研究生招生考试 数学（一）· 高等数学部分
// 共 13 题：选择 1、2、3、4；填空 9、10、11、12；解答 15、16、17、18、19
// （5–8、13–14、20–23 为线性代数与概率统计，不收录）
registerYear(2013, function (R) {
  return [
    /* ───────────────────────── 第 1 题 ───────────────────────── */
    {
      id: '2013-1', year: 2013, no: '第1题', type: '选择', score: 4,
      stem: R`已知极限 $\displaystyle\lim_{x\to 0}\frac{x-\arctan x}{x^k}=c$，其中 $k,c$ 为常数，且 $c\neq 0$，则（　　）`,
      options: [R`$k=2,\ c=-\dfrac12$`, R`$k=2,\ c=\dfrac12$`, R`$k=3,\ c=-\dfrac13$`, R`$k=3,\ c=\dfrac13$`],
      answer: 'D',
      figure: null,
      kp: ['lim.inf', 'lim.compute', 'diff.taylor'],
      methods: ['泰勒公式确定无穷小的阶', '已知极限反求参数', '洛必达法则'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>"无穷小的阶"。题目说 $\dfrac{x-\arctan x}{x^k}\to c\neq0$，翻译过来就是：$x-\arctan x$ 与 $x^k$ 是<b>同阶</b>无穷小。所以本质问题只有一个——<b>$x-\arctan x$ 是几阶无穷小？首项系数是多少？</b></p>
<p><b>为什么"$c\ne0$"是关键信号：</b>设 $x-\arctan x=a x^m+o(x^m)$（$a\ne0$），那么</p>
$$\frac{x-\arctan x}{x^k}=a\,x^{m-k}+o\!\left(x^{m-k}\right).$$
<p>$k&lt;m$ 时极限为 $0$，$k>m$ 时极限为 $\infty$，只有 $k=m$ 时极限才是非零常数 $a$。所以 $c\ne0$ 逼着 $k$ 恰好等于分子的阶，$c$ 恰好等于首项系数。</p>
<p><b>怎么求阶：</b>"差"的结构 $x-\arctan x$ 不能用等价代换（$\arctan x\sim x$ 代进去得 $0$，信息全丢了），要把 $\arctan x$ 展开到比 $x$ 更高的一项——这正是泰勒公式的用武之地。</p>`,
      solution: R`<p><b>第一步：把 $\arctan x$ 展开到三阶。</b>从导数出发最容易记：</p>
$$(\arctan x)'=\frac1{1+x^2}=1-x^2+x^4-\cdots\quad(|x|&lt;1),$$
<p>两边从 $0$ 到 $x$ 积分（注意 $\arctan0=0$），得</p>
$$\arctan x=x-\frac{x^3}{3}+\frac{x^5}{5}-\cdots=x-\frac{x^3}{3}+o(x^3).$$
<p><b>第二步：求分子的阶与首项系数。</b></p>
$$x-\arctan x=x-\left(x-\frac{x^3}{3}+o(x^3)\right)=\frac{x^3}{3}+o(x^3).$$
<p>所以 $x-\arctan x$ 是 $3$ 阶无穷小，首项系数为 $\frac13$，即 $x-\arctan x\sim\frac13x^3$。</p>
<p><b>第三步：确定 $k$ 与 $c$。</b>由分析中的讨论，必须 $k=3$，此时</p>
$$c=\lim_{x\to0}\frac{x-\arctan x}{x^3}=\lim_{x\to0}\frac{\frac13x^3+o(x^3)}{x^3}=\frac13.$$
<p>选 <b>D</b>。</p>
<p><b>第四步：逐一看错误选项。</b></p>
<ul><li><b>A、B（$k=2$）：</b>此时 $\dfrac{x-\arctan x}{x^2}=\dfrac x3+o(x)\to0$，与 $c\ne0$ 矛盾，不管 $c$ 写成正还是负都不对。</li>
<li><b>C（$c=-\frac13$）：</b>符号错。$x>0$ 时 $\arctan x&lt;x$（单位圆里弧长大于正切线长度的反面：令 $g(x)=x-\arctan x$，$g'(x)=\frac{x^2}{1+x^2}>0$，$g(0)=0$，故 $x>0$ 时 $g(x)>0$），而 $x^3>0$，比值为正，极限不可能是负数。这个选项是专门给"把 $\arctan x$ 和 $\tan x$ 的展开式记混"的同学准备的：$\tan x=x+\frac{x^3}{3}+o(x^3)$，$x-\tan x\sim-\frac13x^3$。</li></ul>`,
      pitfalls: R`<ul><li><b>展开式记混：</b>$\tan x=x+\frac{x^3}{3}+\cdots$ 与 $\arctan x=x-\frac{x^3}{3}+\cdots$ 只差一个符号，记反了就会错选 C。用"导数 $\frac1{1+x^2}=1-x^2+\cdots$ 积分"来现推，符号绝不会错。</li><li><b>在减法里做等价代换：</b>把 $\arctan x$ 换成 $x$ 得分子为 $0$，这是错误的。等价代换只能用于乘除因子。</li><li><b>和 $\sin x$ 混淆：</b>$x-\sin x\sim\frac16x^3$，系数是 $\frac16$ 不是 $\frac13$。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"已知 $\lim\frac{\text{差}}{x^k}=c\ne0$，求 $k,c$" ⇔ "求差的阶和首项系数"，用泰勒展开一步到位。</p>
<p><b>必背的"三阶差"（$x\to0$）：</b></p>
<ul><li>$x-\sin x\sim\frac16x^3$，$\arcsin x-x\sim\frac16x^3$；</li><li>$\tan x-x\sim\frac13x^3$，$x-\arctan x\sim\frac13x^3$；</li><li>$\tan x-\sin x\sim\frac12x^3$。</li></ul>
<p><b>题型识别：</b>看到"极限等于非零常数，反求幂次 $k$" → 想到"分子分母必须同阶"，去求分子的阶。看到 $u-\arctan u$、$u-\sin u$ 这类差 → 想到泰勒展开到三阶。</p>`,
      alt: R`<p><b>洛必达法则：</b></p>$$\lim_{x\to0}\frac{x-\arctan x}{x^k}=\lim_{x\to0}\frac{1-\frac1{1+x^2}}{kx^{k-1}}=\lim_{x\to0}\frac{x^2}{k(1+x^2)x^{k-1}}=\frac1k\lim_{x\to0}x^{3-k}.$$<p>要使极限为非零常数，必须 $3-k=0$，即 $k=3$，此时 $c=\frac13$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: limit((x-atan(x))/x**3, x, 0) = 1/3；series(atan(x)) = x - x^3/3 + x^5/5 + …' },
      flags: ['OCR 修正：题干末尾"则（"缺右括号，已补为"（　　）"']
    },

    /* ───────────────────────── 第 2 题 ───────────────────────── */
    {
      id: '2013-2', year: 2013, no: '第2题', type: '选择', score: 4,
      stem: R`曲面 $x^2+\cos(xy)+yz+x=0$ 在点 $(0,1,-1)$ 处的切平面方程为（　　）`,
      options: [R`$x-y+z=-2$`, R`$x+y+z=0$`, R`$x-2y+z=-3$`, R`$x-y-z=0$`],
      answer: 'A',
      figure: null,
      kp: ['mdiff.geo', 'vec.planeline'],
      methods: ['梯度作法向量', '平面的点法式方程'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>隐式曲面 $F(x,y,z)=0$ 在一点处的切平面。求平面只需要两样东西：<b>一个点</b>和<b>一个法向量</b>。点已经给了，关键是法向量。</p>
<p><b>为什么法向量是梯度 $(F_x,F_y,F_z)$（第一性原理）：</b>在曲面上任取一条过该点的曲线 $\big(x(t),y(t),z(t)\big)$，因为它整条躺在曲面上，所以 $F\big(x(t),y(t),z(t)\big)\equiv0$。对 $t$ 求导，由链式法则</p>
$$F_x\,x'(t)+F_y\,y'(t)+F_z\,z'(t)=0,$$
<p>也就是梯度 $\nabla F$ 与这条曲线的切向量垂直。曲面上过该点的所有曲线的切向量都与 $\nabla F$ 垂直，它们铺成的平面就是切平面，$\nabla F$ 自然就是切平面的法向量。</p>
<p><b>一个小观察：</b>把点 $(0,1,-1)$ 代入四个选项，会发现<b>四个平面都过这个点</b>！所以"代点排除"在本题完全失效，只能老老实实算法向量——这正是出题人的用意。</p>`,
      solution: R`<p><b>第一步：确认点在曲面上。</b>$0^2+\cos0+1\cdot(-1)+0=1-1=0$，✓。</p>
<p><b>第二步：设 $F(x,y,z)=x^2+\cos(xy)+yz+x$，求三个偏导。</b></p>
$$F_x=2x-y\sin(xy)+1,\qquad F_y=-x\sin(xy)+z,\qquad F_z=y.$$
<p>其中 $\cos(xy)$ 对 $x$ 求导要乘内层 $xy$ 对 $x$ 的导数 $y$，对 $y$ 求导要乘 $x$；$yz$ 对 $y$ 的偏导是 $z$，对 $z$ 的偏导是 $y$。</p>
<p><b>第三步：代入点 $(0,1,-1)$。</b></p>
$$F_x=0-1\cdot\sin0+1=1,\quad F_y=-0+(-1)=-1,\quad F_z=1,$$
<p>法向量 $\mathbf n=(1,-1,1)$。</p>
<p><b>第四步：写点法式方程。</b></p>
$$1\cdot(x-0)-1\cdot(y-1)+1\cdot(z+1)=0\ \Longrightarrow\ x-y+z+2=0,$$
<p>即 $x-y+z=-2$，选 <b>A</b>。</p>
<p><b>第五步：其余选项为什么错。</b>B、C、D 三个平面也都过 $(0,1,-1)$（可直接代入验证：$0+1-1=0$；$0-2-1=-3$；$0-1+1=0$），但它们的法向量分别是 $(1,1,1)$、$(1,-2,1)$、$(1,-1,-1)$，都不与 $(1,-1,1)$ 平行，所以只是"过该点的某个平面"，不是切平面。</p>`,
      pitfalls: R`<ul><li><b>链式法则漏乘：</b>$\frac{\partial}{\partial y}\cos(xy)=-x\sin(xy)$，漏掉 $x$ 本题碰巧不影响（因为 $x=0$），但在一般点会出错。</li><li><b>点法式符号写错：</b>$z_0=-1$，所以是 $(z+1)$ 而不是 $(z-1)$。</li><li><b>只代点不看法向量：</b>四个选项都过该点，靠代点永远选不出来。</li></ul>`,
      summary: R`<p><b>公式：</b>曲面 $F(x,y,z)=0$ 在 $P_0(x_0,y_0,z_0)$ 处</p><ul><li>切平面：$F_x(P_0)(x-x_0)+F_y(P_0)(y-y_0)+F_z(P_0)(z-z_0)=0$；</li><li>法线：$\dfrac{x-x_0}{F_x(P_0)}=\dfrac{y-y_0}{F_y(P_0)}=\dfrac{z-z_0}{F_z(P_0)}$。</li></ul><p>显式曲面 $z=f(x,y)$ 可看成 $F=f(x,y)-z$，法向量 $(f_x,f_y,-1)$。</p>
<p><b>题型识别：</b>看到"曲面在某点的切平面/法线" → 想到"法向量 = 梯度"。看到"曲线的切线/法平面" → 想到"切向量 = 参数式对 $t$ 的导数"或"两个曲面梯度的叉积"。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: F(0,1,-1)=0；梯度 (F_x,F_y,F_z)(0,1,-1) = (1,-1,1)；并验证 B、C、D 的法向量均不与之平行' },
      flags: ['OCR 修正：去除选项中多余的空格与句点']
    },

    /* ───────────────────────── 第 3 题 ───────────────────────── */
    {
      id: '2013-3', year: 2013, no: '第3题', type: '选择', score: 4,
      stem: R`设 $f(x)=\left|x-\dfrac12\right|$，$b_n=2\displaystyle\int_0^1 f(x)\sin n\pi x\,\mathrm{d}x\ (n=1,2,\cdots)$．令 $S(x)=\displaystyle\sum_{n=1}^{\infty}b_n\sin n\pi x$，则 $S\left(-\dfrac94\right)=$（　　）`,
      options: [R`$\dfrac34$`, R`$\dfrac14$`, R`$-\dfrac14$`, R`$-\dfrac34$`],
      answer: 'C',
      figure: null,
      kp: ['series.fourier'],
      methods: ['识别正弦级数（奇延拓）', '狄利克雷收敛定理', '周期性与奇偶性平移'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>傅里叶级数的<b>和函数</b>在某一点的值。</p>
<p><b>先认出这是什么级数：</b>$b_n=\dfrac2l\displaystyle\int_0^l f(x)\sin\dfrac{n\pi x}{l}\mathrm{d}x$ 是"把 $[0,l]$ 上的函数展开成<b>正弦级数</b>"的系数公式，这里 $l=1$。所以 $S(x)$ 就是 $f$ 在 $[0,1]$ 上的正弦级数。</p>
<p><b>为什么不去算 $b_n$：</b>$b_n$ 能算出来，但算出来以后要对无穷级数求和，几乎不可能。正确的思路是：<b>和函数的值由收敛定理直接给出</b>，根本不需要系数。</p>
<p><b>从第一性原理看 $S(x)$ 的形状：</b>每一项 $\sin n\pi x$ 都是<b>奇函数</b>，并且都以 $2$ 为周期（$\sin n\pi(x+2)=\sin(n\pi x+2n\pi)=\sin n\pi x$）。无穷多个"奇、周期 2"的函数加起来，和函数 $S(x)$ 也必然是"奇、周期 2"的。在 $[0,1]$ 上它"复制"$f$，那么在 $[-1,0]$ 上只能是 $f$ 的奇对称翻折，再以 $2$ 为周期铺满整条数轴。这就是"奇延拓 + 周期延拓"的由来。</p>`,
      solution: R`<p><b>第一步：用周期 $2$ 把点挪进基本区间 $[-1,1]$。</b></p>
$$S\left(-\frac94\right)=S\left(-\frac94+2\right)=S\left(-\frac14\right).$$
<p><b>第二步：用奇性翻到 $[0,1]$。</b></p>
$$S\left(-\frac14\right)=-S\left(\frac14\right).$$
<p><b>第三步：用狄利克雷收敛定理取值。</b>$f(x)=\left|x-\frac12\right|$ 在 $[0,1]$ 上连续、分段单调（只有一个转折点 $x=\frac12$），满足狄利克雷条件。$x=\frac14$ 是 $f$ 的连续点（也是奇延拓后函数的连续点），所以级数在这里收敛到函数值：</p>
$$S\left(\frac14\right)=f\left(\frac14\right)=\left|\frac14-\frac12\right|=\frac14.$$
<p><b>第四步：合起来。</b></p>
$$S\left(-\frac94\right)=-\frac14,$$
<p>选 <b>C</b>。</p>
<p><b>看图理解（$S(x)$ 的图像）：</b></p>
<div><svg viewBox="0 0 370 185" width="370" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正弦级数和函数图像"><title>S(x)：f 在 [0,1] 上的奇延拓再以 2 为周期延拓</title>
<line x1="5" y1="90" x2="365" y2="90" stroke="currentColor" stroke-width="1"/>
<line x1="240" y1="15" x2="240" y2="170" stroke="currentColor" stroke-width="1"/>
<polyline points="15,90 60,150" fill="none" stroke="#2f7dd1" stroke-width="2.5"/>
<polyline points="60,30 105,90 150,30" fill="none" stroke="#2f7dd1" stroke-width="2.5"/>
<polyline points="150,150 195,90 240,150" fill="none" stroke="#2f7dd1" stroke-width="2.5"/>
<polyline points="240,30 285,90 330,30" fill="none" stroke="#2f7dd1" stroke-width="2.5"/>
<polyline points="330,150 352.5,120" fill="none" stroke="#2f7dd1" stroke-width="2.5"/>
<circle cx="60" cy="90" r="3" fill="currentColor"/>
<circle cx="150" cy="90" r="3" fill="currentColor"/>
<circle cx="240" cy="90" r="3" fill="currentColor"/>
<circle cx="330" cy="90" r="3" fill="currentColor"/>
<line x1="37.5" y1="90" x2="37.5" y2="120" stroke="#d9480f" stroke-width="1" stroke-dasharray="3,3"/>
<circle cx="37.5" cy="120" r="4" fill="#d9480f"/>
<line x1="217.5" y1="90" x2="217.5" y2="120" stroke="#d9480f" stroke-width="1" stroke-dasharray="3,3"/>
<circle cx="217.5" cy="120" r="4" fill="#d9480f"/>
<line x1="262.5" y1="90" x2="262.5" y2="60" stroke="#e8590c" stroke-width="1" stroke-dasharray="3,3"/>
<circle cx="262.5" cy="60" r="4" fill="#e8590c"/>
<text x="20" y="140" font-size="11" fill="#d9480f">-9/4</text>
<text x="196" y="140" font-size="11" fill="#d9480f">-1/4</text>
<text x="256" y="52" font-size="11" fill="#e8590c">1/4</text>
<text x="56" y="104" font-size="10" fill="currentColor">-2</text>
<text x="146" y="104" font-size="10" fill="currentColor">-1</text>
<text x="243" y="104" font-size="10" fill="currentColor">0</text>
<text x="333" y="104" font-size="10" fill="currentColor">1</text>
<text x="244" y="26" font-size="10" fill="currentColor">1/2</text>
<text x="244" y="162" font-size="10" fill="currentColor">-1/2</text>
</svg></div>
<p>蓝线是和函数 $S(x)$：在 $[0,1]$ 上是 $V$ 字形的 $\left|x-\frac12\right|$，在 $[-1,0]$ 上是它关于原点的中心对称，再左右平移 $2$ 的整数倍。红点 $x=-\frac94$ 与 $x=-\frac14$ 的高度相同（周期），都等于橙点 $x=\frac14$ 高度的相反数（奇性）。整数点处函数跳跃，级数收敛到左右极限的平均值 $0$（黑点）。</p>
<p><b>错误选项的来源：</b></p>
<ul><li><b>A（$\frac34$）：</b>把 $-\frac14$ 直接代进 $\left|x-\frac12\right|$，得 $\frac34$。错在 $f$ 的表达式只在 $[0,1]$ 上被级数"复制"，$[0,1]$ 以外 $S(x)$ 和这个公式毫无关系。</li><li><b>B（$\frac14$）：</b>当成了偶延拓（余弦级数）：$S(-\frac14)=S(\frac14)$。但 $\sin n\pi x$ 是奇函数，和函数只能是奇的。</li><li><b>D（$-\frac34$）：</b>奇性用对了，却又把 $-\frac14$ 代进了原表达式：$-\left|-\frac14-\frac12\right|=-\frac34$，两种错误混在一起。</li></ul>`,
      pitfalls: R`<ul><li><b>周期搞错：</b>$\sin n\pi x$ 的周期是 $2$，不是 $2\pi$。把 $-\frac94$ 加 $2\pi$ 是毫无意义的。</li><li><b>正弦、余弦级数搞混：</b>系数里是 $\sin$ → 奇延拓；系数里是 $\cos$ → 偶延拓。</li><li><b>间断点直接取函数值：</b>本题若问 $S(0)$ 或 $S(1)$，答案是 $0$（左右极限 $\pm\frac12$ 的平均），不是 $f(0)=\frac12$。</li></ul>`,
      summary: R`<p><b>"求傅里叶级数和函数在某点的值"三步走：</b>① 周期平移，把点移进基本区间；② 奇偶翻折，把点移到 $f$ 有定义的那一半；③ 狄利克雷定理：连续点取函数值，间断点取左右极限的平均。</p>
<p><b>题型识别：</b></p><ul><li>看到 $b_n=\frac2l\int_0^l f(x)\sin\frac{n\pi x}{l}\mathrm{d}x$ → 正弦级数，奇延拓，周期 $2l$。</li><li>看到 $a_n=\frac2l\int_0^l f(x)\cos\frac{n\pi x}{l}\mathrm{d}x$ → 余弦级数，偶延拓，周期 $2l$。</li><li>问"和函数在某点的值" → 不算系数，直接用收敛定理。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 求得 b_n = [nπ(1+(-1)^(n+1)) − 4 sin(nπ/2)]/(n²π²)，前 2999 项部分和在 x=−9/4 处约为 −0.24985，与 −1/4 一致' },
      flags: []
    },

    /* ───────────────────────── 第 4 题 ───────────────────────── */
    {
      id: '2013-4', year: 2013, no: '第4题', type: '选择', score: 4,
      stem: R`设 $L_1:x^2+y^2=1$，$L_2:x^2+y^2=2$，$L_3:x^2+2y^2=2$，$L_4:2x^2+y^2=2$ 为四条逆时针方向的平面曲线．记 $I_i=\displaystyle\oint_{L_i}\left(y+\frac{y^3}{6}\right)\mathrm{d}x+\left(2x-\frac{x^3}{3}\right)\mathrm{d}y\ (i=1,2,3,4)$，则 $\max\{I_1,I_2,I_3,I_4\}=$（　　）`,
      options: [R`$I_1$`, R`$I_2$`, R`$I_3$`, R`$I_4$`],
      answer: 'D',
      figure: null,
      kp: ['mint.line2', 'mint.double'],
      methods: ['格林公式', '按被积函数正负比较积分大小', '广义极坐标'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>格林公式 + 比较积分大小。</p>
<p><b>为什么想到格林公式：</b>四条都是<b>闭曲线</b>、<b>逆时针</b>（正向），$P,Q$ 是多项式（处处光滑）——格林公式的三个条件全部满足。用了格林公式，四个曲线积分就变成<b>同一个被积函数</b>在<b>四个不同区域</b>上的二重积分。</p>
<p><b>比较大小的关键（第一性原理）：</b>二重积分就是把区域切成小块，把每一小块的贡献 $g(x,y)\,\mathrm{d}\sigma$ 加起来。要让总和最大，就应该<b>把贡献为正的小块全部收进来，把贡献为负的小块全部扔掉</b>。所以只需看被积函数 $g$ 在哪里为正——谁的区域恰好是"$g\ge0$ 的部分"，谁就最大。这样连积分都不用算。</p>
<p><b>直觉陷阱：</b>"区域越大积分越大"只对非负被积函数成立。本题 $L_2$ 围成的区域最大，但它包含了 $g&lt;0$ 的部分，反而不是最大。</p>`,
      solution: R`<p><b>第一步：用格林公式化为二重积分。</b>$P=y+\dfrac{y^3}{6}$，$Q=2x-\dfrac{x^3}{3}$，</p>
$$\frac{\partial Q}{\partial x}=2-x^2,\qquad\frac{\partial P}{\partial y}=1+\frac{y^2}{2},$$
$$g(x,y)=\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=1-x^2-\frac{y^2}{2}.$$
<p>记 $D_i$ 为 $L_i$ 所围的闭区域。$L_i$ 是逆时针（正向）简单闭曲线，$P,Q$ 在全平面有连续偏导，由格林公式</p>
$$I_i=\iint_{D_i}\left(1-x^2-\frac{y^2}{2}\right)\mathrm{d}x\,\mathrm{d}y\quad(i=1,2,3,4).$$
<p><b>第二步：分析被积函数的符号。</b></p>
$$g(x,y)>0\iff x^2+\frac{y^2}{2}&lt;1\iff 2x^2+y^2&lt;2.$$
<p>这恰好是 $L_4$ 所围区域 $D_4$ 的内部！在 $L_4$ 上 $g=0$，在 $D_4$ 外部 $g&lt;0$。</p>
<p><b>第三步：证明 $I_4$ 最大。</b>对任一区域 $D_i$，把它拆成"在 $D_4$ 内"和"在 $D_4$ 外"两部分：</p>
$$I_i=\iint_{D_i\cap D_4}g\,\mathrm{d}\sigma+\iint_{D_i\setminus D_4}g\,\mathrm{d}\sigma\le\iint_{D_i\cap D_4}g\,\mathrm{d}\sigma\le\iint_{D_i\cap D_4}g\,\mathrm{d}\sigma+\iint_{D_4\setminus D_i}g\,\mathrm{d}\sigma=I_4.$$
<p>第一个不等号：$D_i\setminus D_4$ 上 $g\le0$；第二个不等号：$D_4\setminus D_i$ 上 $g\ge0$。当 $D_i\ne D_4$（$i=1,2,3$）时，这两块中至少有一块包含一个小圆盘，在那里 $g$ 严格异号，不等号是严格的。所以 $I_4$ 最大，选 <b>D</b>。</p>
<div><svg viewBox="0 0 300 220" width="300" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="四条曲线位置示意图"><title>四条曲线：阴影为 L4 所围区域，即被积函数为正的区域</title>
<ellipse cx="150" cy="110" rx="60" ry="84.85" fill="#2f7dd1" fill-opacity="0.18" stroke="#2f7dd1" stroke-width="2.5"/>
<line x1="20" y1="110" x2="280" y2="110" stroke="currentColor" stroke-width="0.8"/>
<line x1="150" y1="10" x2="150" y2="212" stroke="currentColor" stroke-width="0.8"/>
<circle cx="150" cy="110" r="60" fill="none" stroke="currentColor" stroke-width="1.3"/>
<circle cx="150" cy="110" r="84.85" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5,3"/>
<ellipse cx="150" cy="110" rx="84.85" ry="60" fill="none" stroke="#e8590c" stroke-width="1.5"/>
<text x="166" y="20" font-size="11" fill="#2f7dd1">L4（g≥0 的边界）</text>
<text x="236" y="70" font-size="11" fill="currentColor">L2</text>
<text x="238" y="132" font-size="11" fill="#e8590c">L3</text>
<text x="196" y="102" font-size="11" fill="currentColor">L1</text>
</svg></div>
<p>图中阴影为 $D_4$：只有它把 $g>0$ 的部分全部收进、又不含任何 $g&lt;0$ 的部分。</p>
<p><b>第四步（验算，可选）：直接算出四个值。</b>利用对称性 $\iint_{D}x^2\,\mathrm{d}\sigma$ 等，或用广义极坐标 $x=ar\cos\theta,\ y=br\sin\theta$（雅可比行列式为 $abr$，椭圆 $\frac{x^2}{a^2}+\frac{y^2}{b^2}\le1$ 变成 $0\le r\le1$）：</p>
<ul><li>$D_1$（$a=b=1$）：$\iint x^2=\iint y^2=\frac12\int_0^{2\pi}\!\!\int_0^1r^3\,\mathrm{d}r\,\mathrm{d}\theta=\frac\pi4$，$I_1=\pi-\frac\pi4-\frac\pi8=\frac{5\pi}{8}\approx1.963$；</li>
<li>$D_2$（$a=b=\sqrt2$）：面积 $2\pi$，$\iint x^2=\iint y^2=\pi$，$I_2=2\pi-\pi-\frac\pi2=\frac\pi2\approx1.571$；</li>
<li>$D_3$（$a=\sqrt2,b=1$）：$I_3=\sqrt2\int_0^{2\pi}\!\!\int_0^1\left(1-2r^2\cos^2\theta-\frac12r^2\sin^2\theta\right)r\,\mathrm{d}r\,\mathrm{d}\theta=\sqrt2\left(\pi-\frac\pi2-\frac\pi8\right)=\frac{3\sqrt2\pi}{8}\approx1.666$；</li>
<li>$D_4$（$a=1,b=\sqrt2$）：被积函数变为 $1-r^2$，$I_4=\sqrt2\int_0^{2\pi}\!\!\int_0^1(1-r^2)r\,\mathrm{d}r\,\mathrm{d}\theta=\sqrt2\cdot2\pi\cdot\frac14=\frac{\sqrt2\pi}{2}\approx2.221$。</li></ul>
<p>确实 $I_4$ 最大，且 $I_4>I_1>I_3>I_2$。</p>`,
      pitfalls: R`<ul><li><b>格林公式减反：</b>是 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}$（"$Q$ 对 $x$ 减 $P$ 对 $y$"），减反了会变成求最小值的问题，答案完全相反。</li><li><b>"区域越大积分越大"：</b>错选 B。被积函数有正有负时，大区域可能把负的部分也包进来。</li><li><b>硬算四个积分：</b>能算出来，但椭圆区域上的计算量不小，选择题里既慢又容易算错。先看被积函数的符号，往往一步出答案。</li></ul>`,
      summary: R`<p><b>方法要点：</b>比较"同一被积函数在不同区域上的积分"，先找被积函数的<b>正区域</b>与<b>负区域</b>：恰好等于正区域的那个积分最大，恰好等于负区域的那个积分最小。</p>
<p><b>题型识别：</b></p><ul><li>看到"闭曲线 + 正向 + $P,Q$ 光滑" → 想到格林公式化为二重积分。</li><li>看到"比较几个积分的大小，区域不同" → 想到看被积函数的符号；"区域相同，被积函数不同" → 想到比较被积函数的大小。</li><li>椭圆区域 $\frac{x^2}{a^2}+\frac{y^2}{b^2}\le1$ → 广义极坐标，雅可比为 $abr$。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: Q_x−P_y = 1−x²−y²/2；用广义极坐标积分得 I1=5π/8, I2=π/2, I3=3√2π/8, I4=√2π/2，I4 最大' },
      flags: ['OCR 修正：(C)(D) 选项格式整理为 $I_3$、$I_4$']
    },

    /* ───────────────────────── 第 9 题 ───────────────────────── */
    {
      id: '2013-9', year: 2013, no: '第9题', type: '填空', score: 4,
      stem: R`设函数 $y=f(x)$ 由方程 $y-x=\mathrm{e}^{x(1-y)}$ 确定，则 $\displaystyle\lim_{n\to\infty}n\left[f\left(\frac1n\right)-1\right]=$ ______．`,
      options: null,
      answer: R`$1$`,
      figure: null,
      kp: ['diff.def', 'diff.calc'],
      methods: ['导数定义（数列形式）', '隐函数求导'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>导数定义 + 隐函数求导。</p>
<p><b>为什么想到导数定义：</b>把式子改写一下：</p>
$$n\left[f\left(\frac1n\right)-1\right]=\frac{f\left(\frac1n\right)-1}{\frac1n}.$$
<p>分母 $\frac1n\to0$ 是"自变量的增量"，分子是"函数值之差"——这正是导数定义 $\lim\limits_{h\to0}\frac{f(0+h)-f(0)}{h}$ 的模样，只要那个"$1$"恰好是 $f(0)$。所以解题路线是：<b>先算 $f(0)$，确认它等于 $1$；再算 $f'(0)$。</b></p>
<p><b>为什么不解出 $y$：</b>方程 $y-x=\mathrm{e}^{x(1-y)}$ 根本解不出 $y$ 的显式表达式。但我们只需要某一点的导数值，隐函数求导后代入该点即可，不需要 $y'$ 的一般表达式。</p>`,
      solution: R`<p><b>第一步：求 $f(0)$。</b>在方程中令 $x=0$：$y-0=\mathrm{e}^{0}=1$，所以 $f(0)=1$。</p>
<p><b>第二步：确认隐函数可导。</b>记 $F(x,y)=y-x-\mathrm{e}^{x(1-y)}$，则 $F_y=1+x\mathrm{e}^{x(1-y)}$，在 $(0,1)$ 处 $F_y=1\ne0$。由隐函数存在定理，在 $x=0$ 附近方程唯一确定一个可导函数 $y=f(x)$，且 $f(0)=1$。</p>
<p><b>第三步：把极限化为导数。</b>由于 $f$ 在 $0$ 处可导，$h\to0$ 时 $\frac{f(h)-f(0)}{h}\to f'(0)$；取 $h=\frac1n$（$n\to\infty$ 时 $h\to0$ 且 $h\ne0$），由海涅定理（函数极限与数列极限的关系）</p>
$$\lim_{n\to\infty}n\left[f\left(\frac1n\right)-1\right]=\lim_{n\to\infty}\frac{f\left(\frac1n\right)-f(0)}{\frac1n}=f'(0).$$
<p><b>第四步：隐函数求导。</b>方程两边对 $x$ 求导（$y$ 是 $x$ 的函数）：</p>
$$y'-1=\mathrm{e}^{x(1-y)}\cdot\big[x(1-y)\big]'=\mathrm{e}^{x(1-y)}\cdot\big[(1-y)+x\cdot(-y')\big].$$
<p>这里 $\big[x(1-y)\big]'$ 用乘积法则：$x'$ 乘 $(1-y)$，加上 $x$ 乘 $(1-y)'=-y'$。</p>
<p><b>第五步：代入 $x=0,\ y=1$。</b></p>
$$y'(0)-1=\mathrm{e}^0\cdot\big[(1-1)+0\big]=0\ \Longrightarrow\ f'(0)=1.$$
<p>所以所求极限为 $1$。</p>`,
      pitfalls: R`<ul><li><b>没意识到 $1=f(0)$：</b>如果不先算 $f(0)$，就看不出这是导数定义。要是常数与 $f(0)$ 不等，这个极限会是 $\infty$。</li><li><b>复合函数求导漏项：</b>$\mathrm{e}^{x(1-y)}$ 的指数里 $x$ 和 $y$ 都在变，指数求导是 $(1-y)-xy'$，漏掉 $-xy'$ 是常见错误（本题在 $x=0$ 处这一项恰好为 $0$，但一般点会错）。</li><li><b>试图解出 $y$：</b>白费功夫。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"$n[f(a+\frac1n)-f(a)]$"、"$\frac{f(a+h)-f(a)}{h}$"、"$\frac{f(a+2h)-f(a-h)}{h}$" 这类结构都是导数定义的变形，答案用 $f'(a)$ 表示。</p>
<p><b>题型识别：</b></p><ul><li>看到"函数值之差 ÷ 自变量之差"且自变量趋于定点 → 想到导数定义。</li><li>看到"隐函数在某一点的导数" → 先由方程求出该点的函数值，再两边求导、直接代入数值，不必先解出 $y'$。</li></ul>`,
      alt: R`<p><b>用微分（一阶近似）理解：</b>$f$ 在 $0$ 处可导，则 $f\left(\frac1n\right)=f(0)+f'(0)\cdot\frac1n+o\!\left(\frac1n\right)=1+\frac1n+o\!\left(\frac1n\right)$，于是 $n\left[f\left(\frac1n\right)-1\right]=1+n\cdot o\!\left(\frac1n\right)\to1$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy 隐函数求导在 (0,1) 处 y′=1；mpmath 数值解 f(1/n)：n=10³ 时 n[f(1/n)−1]≈0.99900，n=10⁵ 时≈0.99999' },
      flags: []
    },

    /* ───────────────────────── 第 10 题 ───────────────────────── */
    {
      id: '2013-10', year: 2013, no: '第10题', type: '填空', score: 4,
      stem: R`已知 $y_1=\mathrm{e}^{3x}-x\mathrm{e}^{2x}$，$y_2=\mathrm{e}^{x}-x\mathrm{e}^{2x}$，$y_3=-x\mathrm{e}^{2x}$ 是某二阶常系数非齐次线性微分方程的 $3$ 个解，则该方程的通解为 $y=$ ______．`,
      options: null,
      answer: R`$y=C_1\mathrm{e}^{x}+C_2\mathrm{e}^{3x}-x\mathrm{e}^{2x}$（$C_1,C_2$ 为任意常数）`,
      figure: null,
      kp: ['ode.linear', 'ode.const'],
      methods: ['线性方程解的结构', '非齐次解作差得齐次解'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>线性微分方程<b>解的结构</b>：非齐次通解 = 齐次通解 + 非齐次的一个特解。</p>
<p><b>为什么想到作差（第一性原理）：</b>记 $L[y]=y''+py'+qy$，它是<b>线性</b>的：$L[\alpha u+\beta v]=\alpha L[u]+\beta L[v]$。若 $y_1,y_3$ 都满足 $L[y]=f(x)$，则</p>
$$L[y_1-y_3]=L[y_1]-L[y_3]=f-f=0,$$
<p>所以<b>两个非齐次解之差是齐次方程的解</b>。题目给了三个非齐次解，作两次差就能得到两个齐次解；二阶齐次方程的解空间是二维的，只要这两个解线性无关，就得到了齐次通解。</p>`,
      solution: R`<p><b>第一步：作差得到齐次方程的解。</b></p>
$$y_1-y_3=\mathrm{e}^{3x},\qquad y_2-y_3=\mathrm{e}^{x}.$$
<p>由上面的分析，它们都是对应齐次方程 $y''+py'+qy=0$ 的解。</p>
<p><b>第二步：判断线性无关。</b>$\dfrac{\mathrm{e}^{3x}}{\mathrm{e}^{x}}=\mathrm{e}^{2x}$ 不是常数，所以 $\mathrm{e}^x,\mathrm{e}^{3x}$ 线性无关，齐次通解为</p>
$$Y=C_1\mathrm{e}^{x}+C_2\mathrm{e}^{3x}.$$
<p><b>第三步：取一个非齐次特解。</b>$y_3=-x\mathrm{e}^{2x}$ 本身就是非齐次方程的解，取 $y^*=y_3$。</p>
<p><b>第四步：写出通解。</b></p>
$$y=C_1\mathrm{e}^{x}+C_2\mathrm{e}^{3x}-x\mathrm{e}^{2x}\quad(C_1,C_2\ \text{为任意常数}).$$
<p><b>第五步（加深理解，可选）：把方程反推出来。</b>齐次解 $\mathrm{e}^x,\mathrm{e}^{3x}$ 说明特征根为 $1,3$，特征方程 $(r-1)(r-3)=r^2-4r+3=0$，方程左边是 $y''-4y'+3y$。把 $y_3=-x\mathrm{e}^{2x}$ 代入：$y_3'=-(1+2x)\mathrm{e}^{2x}$，$y_3''=-(4+4x)\mathrm{e}^{2x}$，</p>
$$y_3''-4y_3'+3y_3=\big[-4-4x+4+8x-3x\big]\mathrm{e}^{2x}=x\mathrm{e}^{2x}.$$
<p>所以方程是 $y''-4y'+3y=x\mathrm{e}^{2x}$。$2$ 不是特征根，按规则特解应设为 $(ax+b)\mathrm{e}^{2x}$，$-x\mathrm{e}^{2x}$ 正是这种形式，前后自洽。</p>`,
      pitfalls: R`<ul><li><b>直接写 $C_1y_1+C_2y_2+y_3$：</b>错！$y_1,y_2$ 是非齐次解，不是齐次解，不能当齐次通解的"基"。</li><li><b>只作一次差：</b>$y_1-y_2=\mathrm{e}^{3x}-\mathrm{e}^x$ 只是一个齐次解，二阶方程需要两个线性无关的齐次解。</li><li><b>以为答案唯一：</b>写成 $C_1\mathrm{e}^x+C_2\mathrm{e}^{3x}+\mathrm{e}^{3x}-x\mathrm{e}^{2x}$（用 $y_1$ 作特解）也对，多出的 $\mathrm{e}^{3x}$ 被 $C_2$ 吸收。</li></ul>`,
      summary: R`<p><b>线性方程解的结构（$L[y]=f$）：</b></p><ul><li>齐次解的线性组合仍是齐次解；</li><li>两个非齐次解之差是齐次解；</li><li>非齐次解 + 齐次解 = 非齐次解；</li><li>非齐次解的组合 $\sum c_iy_i$：当 $\sum c_i=1$ 时是非齐次解，当 $\sum c_i=0$ 时是齐次解。</li></ul>
<p><b>题型识别：</b>看到"已知非齐次方程的几个解，求通解/求方程" → 想到作差得齐次解；看到齐次解 $\mathrm{e}^{r_1x},\mathrm{e}^{r_2x}$ → 想到特征根 $r_1,r_2$，可反推方程。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 三个解代入 y″−4y′+3y 均得 x·e^{2x}；dsolve(y″−4y′+3y=x e^{2x}) 得 C1 e^x + C2 e^{3x} − x e^{2x}' },
      flags: []
    },

    /* ───────────────────────── 第 11 题 ───────────────────────── */
    {
      id: '2013-11', year: 2013, no: '第11题', type: '填空', score: 4,
      stem: R`设 $\begin{cases}x=\sin t,\\ y=t\sin t+\cos t\end{cases}$（$t$ 为参数），则 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=\frac{\pi}{4}}=$ ______．`,
      options: null,
      answer: R`$\sqrt2$`,
      figure: null,
      kp: ['diff.calc'],
      methods: ['参数方程求二阶导数'],
      difficulty: 1,
      analysis: R`<p><b>这题考什么：</b>参数方程的二阶导数。</p>
<p><b>核心原理：</b>$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ 的意思是"把一阶导数 $\frac{\mathrm{d}y}{\mathrm{d}x}$ 再<b>对 $x$</b> 求导"。但一阶导数算出来是 $t$ 的函数，而 $t$ 又是 $x$ 的函数，所以要用链式法则：</p>
$$\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)=\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)\cdot\frac{\mathrm{d}t}{\mathrm{d}x}=\frac{\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)}{\frac{\mathrm{d}x}{\mathrm{d}t}}.$$
<p>一句话：<b>每对 $x$ 求一次导，都要"先对 $t$ 求导，再除以 $x'(t)$"</b>。二阶导数绝不是 $\frac{y''(t)}{x''(t)}$。</p>`,
      solution: R`<p><b>第一步：求 $x'(t)$ 与 $y'(t)$。</b></p>
$$\frac{\mathrm{d}x}{\mathrm{d}t}=\cos t,\qquad\frac{\mathrm{d}y}{\mathrm{d}t}=(\sin t+t\cos t)-\sin t=t\cos t.$$
<p>其中 $t\sin t$ 用乘积法则得 $\sin t+t\cos t$，$\cos t$ 的导数是 $-\sin t$，两个 $\sin t$ 正好抵消。</p>
<p><b>第二步：一阶导数。</b>在 $t=\frac\pi4$ 附近 $\cos t\ne0$，</p>
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{t\cos t}{\cos t}=t.$$
<p><b>第三步：二阶导数。</b>把 $\frac{\mathrm{d}y}{\mathrm{d}x}=t$ 对 $t$ 求导得 $1$，再除以 $\frac{\mathrm{d}x}{\mathrm{d}t}=\cos t$：</p>
$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{1}{\cos t}.$$
<p><b>第四步：代值。</b></p>
$$\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=\frac\pi4}=\frac{1}{\cos\frac\pi4}=\frac{1}{\frac{\sqrt2}{2}}=\sqrt2.$$
<p><b>直观理解：</b>一阶导数 $\frac{\mathrm{d}y}{\mathrm{d}x}=t$，即"斜率就等于参数本身"。那么斜率对 $x$ 的变化率就是 $\frac{\mathrm{d}t}{\mathrm{d}x}=\frac{1}{\mathrm{d}x/\mathrm{d}t}=\frac1{\cos t}$——和第三步一致。</p>`,
      pitfalls: R`<ul><li><b>用 $\frac{y''(t)}{x''(t)}$：</b>$y''(t)=\cos t-t\sin t$，$x''(t)=-\sin t$，在 $\frac\pi4$ 处比值为 $\frac\pi4-1$，完全错误。</li><li><b>忘了再除一次 $x'(t)$：</b>把 $\frac{\mathrm{d}}{\mathrm{d}t}(t)=1$ 当成答案，得到 $1$。</li><li><b>把 $t=\frac\pi4$ 当成 $x=\frac\pi4$：</b>题目是在参数 $t=\frac\pi4$ 处取值，对应 $x=\sin\frac\pi4=\frac{\sqrt2}{2}$。</li></ul>`,
      summary: R`<p><b>公式：</b></p>$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y'(t)}{x'(t)},\qquad\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{y'(t)}{x'(t)}\right)}{x'(t)}=\frac{y''(t)x'(t)-y'(t)x''(t)}{[x'(t)]^3}.$$
<p><b>题型识别：</b>看到参数方程求高阶导 → 口诀"<b>对 $t$ 求导，再除以 $x'(t)$</b>"，每升一阶重复一次。一阶导数先化简（本题化成 $t$）再求二阶，能省很多计算。</p>`,
      alt: R`<p><b>直接套公式：</b>$x'=\cos t$，$x''=-\sin t$，$y'=t\cos t$，$y''=\cos t-t\sin t$，</p>$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{(\cos t-t\sin t)\cos t-t\cos t\cdot(-\sin t)}{\cos^3t}=\frac{\cos^2t}{\cos^3t}=\frac1{\cos t},$$<p>在 $t=\frac\pi4$ 处为 $\sqrt2$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: dy/dx 化简为 t，d²y/dx² 化简为 1/cos t，t=π/4 时为 √2' },
      flags: ['参考解析末行把取值点写成 x=π/4，应为 t=π/4（答案 √2 不受影响）']
    },

    /* ───────────────────────── 第 12 题 ───────────────────────── */
    {
      id: '2013-12', year: 2013, no: '第12题', type: '填空', score: 4,
      stem: R`$\displaystyle\int_1^{+\infty}\frac{\ln x}{(1+x)^2}\,\mathrm{d}x=$ ______．`,
      options: null,
      answer: R`$\ln2$`,
      figure: null,
      kp: ['int.improper', 'int.defcalc'],
      methods: ['分部积分', '裂项（部分分式）', '反常积分的极限定义'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>无穷限反常积分的计算。</p>
<p><b>为什么用分部积分：</b>被积函数是"对数 × 有理函数"。$\ln x$ 求导后变成 $\frac1x$（有理函数，对数消失了），而 $\frac1{(1+x)^2}$ 的原函数 $-\frac1{1+x}$ 也很简单。所以让 $\ln x$ 去求导、$\frac1{(1+x)^2}$ 去积分——这是"对数优先求导"的经典套路。</p>
<p><b>反常积分特有的讲究：</b>分部积分时，$\frac1{(1+x)^2}$ 的原函数可以是 $-\frac1{1+x}+C$ 中的任何一个。选 $C=0$ 的好处是 $-\frac1{1+x}\to0$（$x\to+\infty$），能压住 $\ln x$ 的增长，边界项才收敛。选错了常数（比如 $C=1$，原函数变成 $\frac{x}{1+x}$），边界项 $\frac{x\ln x}{1+x}\to+\infty$，就会出现两个发散量相减的混乱局面。</p>`,
      solution: R`<p><b>第一步：先判断收敛。</b>$x\to+\infty$ 时 $\ln x$ 比任何正幂增长都慢，例如 $\ln x\le\sqrt x$（$x\ge1$），所以</p>
$$0\le\frac{\ln x}{(1+x)^2}\le\frac{\sqrt x}{x^2}=\frac1{x^{3/2}},$$
<p>而 $\int_1^{+\infty}\frac{\mathrm{d}x}{x^{3/2}}$ 收敛（$p=\frac32>1$），由比较判别法原积分收敛。</p>
<p><b>第二步：在有限区间 $[1,b]$ 上分部积分。</b>因为 $\mathrm{d}\left(-\frac1{1+x}\right)=\frac{\mathrm{d}x}{(1+x)^2}$，</p>
$$\int_1^b\frac{\ln x}{(1+x)^2}\mathrm{d}x=\int_1^b\ln x\,\mathrm{d}\left(-\frac1{1+x}\right)=\left[-\frac{\ln x}{1+x}\right]_1^b+\int_1^b\frac{1}{1+x}\cdot\frac1x\,\mathrm{d}x.$$
<p><b>第三步：处理边界项。</b>$x=1$ 处 $\ln1=0$；$b\to+\infty$ 时由洛必达法则 $\lim\limits_{b\to+\infty}\frac{\ln b}{1+b}=\lim\limits_{b\to+\infty}\frac{1/b}{1}=0$。所以边界项趋于 $0$。</p>
<p><b>第四步：裂项积分。</b>$\frac1{x(1+x)}=\frac1x-\frac1{1+x}$（通分验证：$\frac{(1+x)-x}{x(1+x)}$），所以</p>
$$\int_1^b\frac{\mathrm{d}x}{x(1+x)}=\Big[\ln x-\ln(1+x)\Big]_1^b=\ln\frac{b}{1+b}-\ln\frac12.$$
<p><b>第五步：取极限。</b>$b\to+\infty$ 时 $\frac{b}{1+b}\to1$，$\ln\frac{b}{1+b}\to0$，于是</p>
$$\int_1^{+\infty}\frac{\ln x}{(1+x)^2}\mathrm{d}x=0+0-\ln\frac12=\ln2.$$`,
      pitfalls: R`<ul><li><b>拆成两个发散积分：</b>写 $\int_1^{+\infty}\frac{\mathrm{d}x}{x}-\int_1^{+\infty}\frac{\mathrm{d}x}{1+x}$，两项都是 $+\infty$，"$\infty-\infty$"没有意义。正确做法是先合并成 $\ln\frac{x}{1+x}$ 再取极限。</li><li><b>原函数常数选得不好：</b>用 $\frac{x}{1+x}$ 作原函数，边界项发散，后面也发散，看似"相消"实则步步不合法。</li><li><b>符号：</b>$\mathrm{d}\left(-\frac1{1+x}\right)$ 前的负号在分部后变成"$-\left(-\frac1{1+x}\right)\cdot\frac1x$"，即 $+\frac1{x(1+x)}$，容易丢符号。</li></ul>`,
      summary: R`<p><b>方法要点：</b>反常积分 = 先在 $[a,b]$ 上当定积分算，再令 $b\to+\infty$。分部积分时原函数中的常数自由选取，<b>选让边界项收敛的那一个</b>。</p>
<p><b>题型识别：</b></p><ul><li>看到 $\ln x\cdot R(x)$（$R$ 为有理函数）→ 分部积分，$u=\ln x$。</li><li>看到 $\frac1{x(x+1)}$ → 裂项 $\frac1x-\frac1{x+1}$。</li><li>看到 $\ln x-\ln(1+x)$ 在无穷远处 → 先合并成 $\ln\frac{x}{1+x}$ 再求极限，避免 $\infty-\infty$。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: integrate(log(x)/(1+x)**2, (x, 1, oo)) = log(2)' },
      flags: []
    },

    /* ───────────────────────── 第 15 题 ───────────────────────── */
    {
      id: '2013-15', year: 2013, no: '第15题', type: '解答', score: 10,
      stem: R`计算 $\displaystyle\int_0^1\frac{f(x)}{\sqrt x}\,\mathrm{d}x$，其中 $f(x)=\displaystyle\int_1^x\frac{\ln(t+1)}{t}\,\mathrm{d}t$．`,
      options: null,
      answer: R`$8-2\pi-4\ln2$`,
      figure: null,
      kp: ['int.ftc', 'int.defcalc', 'int.improper'],
      methods: ['分部积分（让变限积分求导）', '换元 $\sqrt x=t$ 去根号', '交换积分次序'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>"积分里套着变限积分"的计算，以及分部积分、换元的综合运用。</p>
<p><b>为什么不能先求出 $f(x)$：</b>$\frac{\ln(1+t)}{t}$ 的原函数不是初等函数，$f(x)$ 根本写不出显式表达式。但它的<b>导数</b>非常简单：由微积分基本定理 $f'(x)=\frac{\ln(1+x)}{x}$。</p>
<p><b>所以想到分部积分：</b>分部积分的本质是"把求导从一个因子转移到另一个因子上"。让 $f(x)$ 当 $u$ 去求导（从"写不出来"变成"很好写"），让 $\frac1{\sqrt x}\mathrm{d}x=\mathrm{d}(2\sqrt x)$ 去积分。而且出题人把下限设成 $1$，使 $f(1)=0$，边界项在 $x=1$ 处自动消失——这是暗示分部积分的"设计痕迹"。</p>
<p><b>另一个视角：</b>$f(x)$ 本身是个积分，原式就是一个"累次积分"，可以交换积分次序（见另解），两条路殊途同归。</p>
<p><b>注意细节：</b>$\frac1{\sqrt x}$ 在 $x=0$ 处无界，严格说这是一个反常积分；边界项在 $0$ 处要按极限理解。</p>`,
      solution: R`<p><b>第一步：弄清 $f$ 的性质。</b>被积函数 $\frac{\ln(1+t)}{t}$ 在 $t\to0^+$ 时趋于 $1$（因 $\ln(1+t)\sim t$），补充定义后在 $[0,1]$ 上连续，所以</p>
<ul><li>$f(x)$ 在 $[0,1]$ 上连续、有界：$|f(x)|\le M$；</li><li>$f(1)=\int_1^1(\cdots)=0$；</li><li>$f'(x)=\frac{\ln(1+x)}{x}$（$0&lt;x\le1$）；</li><li>$0\le x&lt;1$ 时 $f(x)=-\int_x^1\frac{\ln(1+t)}{t}\mathrm{d}t&lt;0$，所以<b>答案应为负数</b>（留作最后检验）。</li></ul>
<p>又 $\left|\frac{f(x)}{\sqrt x}\right|\le\frac{M}{\sqrt x}$，而 $\int_0^1\frac{\mathrm{d}x}{\sqrt x}$ 收敛（$p=\frac12&lt;1$），所以原反常积分收敛。</p>
<p><b>第二步：分部积分。</b>$\frac{\mathrm{d}x}{\sqrt x}=\mathrm{d}(2\sqrt x)$，于是</p>
$$\int_0^1\frac{f(x)}{\sqrt x}\mathrm{d}x=\int_0^1f(x)\,\mathrm{d}(2\sqrt x)=\Big[2\sqrt x\,f(x)\Big]_{0^+}^{1}-\int_0^12\sqrt x\,f'(x)\,\mathrm{d}x.$$
<p>边界项：$x=1$ 处 $2\cdot1\cdot f(1)=0$；$x\to0^+$ 时 $|2\sqrt xf(x)|\le2M\sqrt x\to0$。所以边界项为 $0$，代入 $f'(x)$：</p>
$$\int_0^1\frac{f(x)}{\sqrt x}\mathrm{d}x=-2\int_0^1\sqrt x\cdot\frac{\ln(1+x)}{x}\mathrm{d}x=-2\int_0^1\frac{\ln(1+x)}{\sqrt x}\mathrm{d}x.$$
<p><b>第三步：换元去根号。</b>记 $J=\int_0^1\frac{\ln(1+x)}{\sqrt x}\mathrm{d}x$。令 $\sqrt x=t$，即 $x=t^2$，$\mathrm{d}x=2t\,\mathrm{d}t$，$x:0\to1$ 对应 $t:0\to1$：</p>
$$J=\int_0^1\frac{\ln(1+t^2)}{t}\cdot2t\,\mathrm{d}t=2\int_0^1\ln(1+t^2)\,\mathrm{d}t.$$
<p><b>第四步：再分部积分。</b>让 $\ln(1+t^2)$ 求导：</p>
$$\int_0^1\ln(1+t^2)\mathrm{d}t=\Big[t\ln(1+t^2)\Big]_0^1-\int_0^1t\cdot\frac{2t}{1+t^2}\mathrm{d}t=\ln2-2\int_0^1\frac{t^2}{1+t^2}\mathrm{d}t.$$
<p>把假分式拆开：$\frac{t^2}{1+t^2}=1-\frac1{1+t^2}$，</p>
$$\int_0^1\frac{t^2}{1+t^2}\mathrm{d}t=\Big[t-\arctan t\Big]_0^1=1-\frac\pi4.$$
<p>所以 $\int_0^1\ln(1+t^2)\mathrm{d}t=\ln2-2+\frac\pi2$，$J=2\ln2-4+\pi$。</p>
<p><b>第五步：得出结果。</b></p>
$$\int_0^1\frac{f(x)}{\sqrt x}\mathrm{d}x=-2J=-2(2\ln2-4+\pi)=8-2\pi-4\ln2.$$
<p><b>检验：</b>$8-2\pi-4\ln2\approx8-6.2832-2.7726=-1.0558&lt;0$，与第一步预判的"答案为负"一致。</p>`,
      pitfalls: R`<ul><li><b>想先求 $f(x)$：</b>$\int\frac{\ln(1+t)}{t}\mathrm{d}t$ 不是初等函数，此路不通。</li><li><b>分部方向选反：</b>让 $\frac1{\sqrt x}$ 求导会出现 $x^{-3/2}$，同时还要对 $f$ 积分，越做越复杂。</li><li><b>漏掉系数 2：</b>$\mathrm{d}(2\sqrt x)=\frac{\mathrm{d}x}{\sqrt x}$，写成 $\mathrm{d}(\sqrt x)$ 会使答案差一倍。</li><li><b>忽视 $x=0$ 处的反常性：</b>边界项在 $0$ 处要取极限，需要用到 $f$ 有界。</li><li><b>算完不检验符号：</b>本题被积函数在 $(0,1)$ 上为负，答案必为负，可以发现很多符号错误。</li></ul>`,
      summary: R`<p><b>方法要点：</b>"积分里套变限积分"有两把钥匙：① 分部积分，让变限积分去求导（它的导数就是被积函数，一下子就"脱掉"了一层积分）；② 写成二重积分，交换积分次序。</p>
<p><b>题型识别：</b></p><ul><li>看到 $\int_a^bg(x)\left[\int_c^xh(t)\mathrm{d}t\right]\mathrm{d}x$ → 想到分部积分（$u$ 取变限积分）或交换积分次序。</li><li>变限积分的下限/上限恰好与外层积分限重合 → 边界项多半为 $0$，这是出题人的暗示。</li><li>看到 $\sqrt x$ → 换元 $\sqrt x=t$ 去根号；看到 $\ln(1+t^2)$ → 分部积分。</li></ul>`,
      alt: R`<p><b>交换积分次序：</b>$f(x)=-\int_x^1\frac{\ln(1+t)}{t}\mathrm{d}t$，所以</p>$$\int_0^1\frac{f(x)}{\sqrt x}\mathrm{d}x=-\int_0^1\mathrm{d}x\int_x^1\frac1{\sqrt x}\cdot\frac{\ln(1+t)}{t}\mathrm{d}t.$$<p>积分区域是三角形 $\{0\le x\le t\le1\}$，被积函数（去掉负号后）非负，可以交换次序：先对 $x$ 从 $0$ 积到 $t$，再对 $t$ 从 $0$ 积到 $1$：</p>$$=-\int_0^1\frac{\ln(1+t)}{t}\left(\int_0^t\frac{\mathrm{d}x}{\sqrt x}\right)\mathrm{d}t=-\int_0^1\frac{\ln(1+t)}{t}\cdot2\sqrt t\,\mathrm{d}t=-2\int_0^1\frac{\ln(1+t)}{\sqrt t}\mathrm{d}t,$$<p>与分部积分得到的是同一个积分 $-2J$，后面相同。交换次序法的好处是不用操心边界项。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: ∫₀¹ ln(x+1)/√x dx = π−4+2ln2，∫₀¹ √x/(x+1) dx = 2−π/2；mpmath 二重数值积分得 −1.05577402898，与 8−2π−4ln2 ≈ −1.05577402942 一致' },
      flags: []
    },

    /* ───────────────────────── 第 16 题 ───────────────────────── */
    {
      id: '2013-16', year: 2013, no: '第16题', type: '解答', score: 10,
      stem: R`设数列 $\{a_n\}$ 满足条件：$a_0=3$，$a_1=1$，$a_{n-2}-n(n-1)a_n=0\ (n\geqslant 2)$，$S(x)$ 是幂级数 $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ 的和函数．<br>（Ⅰ）证明 $S''(x)-S(x)=0$；<br>（Ⅱ）求 $S(x)$ 的表达式．`,
      options: null,
      answer: R`（Ⅰ）见证明；（Ⅱ）$S(x)=2\mathrm{e}^{x}+\mathrm{e}^{-x}$，$x\in(-\infty,+\infty)$．`,
      figure: null,
      kp: ['series.sum', 'ode.const', 'series.power'],
      methods: ['幂级数逐项求导', '由系数递推建立微分方程', '二阶常系数齐次方程'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>幂级数的和函数 + 微分方程。不是直接"求和"，而是"让和函数满足一个微分方程，再解方程"。</p>
<p><b>为什么递推式会变成 $S''=S$（第一性原理）：</b>把 $x^n$ 求两次导：$(x^n)''=n(n-1)x^{n-2}$。递推式里恰好出现 $n(n-1)a_n$——这就是 $S''$ 中 $x^{n-2}$ 的系数！而递推式说它等于 $a_{n-2}$，也就是 $S$ 中 $x^{n-2}$ 的系数。两个级数的每一项系数都相同，自然 $S''=S$。</p>
<p><b>(Ⅱ)的思路：</b>$S''-S=0$ 是二阶常系数齐次方程，通解含两个常数，需要两个初始条件。幂级数在 $x=0$ 处的值和导数正好由前两个系数给出：$S(0)=a_0$，$S'(0)=a_1$。</p>
<p><b>严谨性提醒：</b>逐项求导只在收敛区间内部成立，所以要先说明幂级数的收敛半径（本题为 $+\infty$）。</p>`,
      solution: R`<p><b>（Ⅰ）第一步：求出 $a_n$，说明收敛半径为 $+\infty$。</b>递推式即 $a_n=\dfrac{a_{n-2}}{n(n-1)}$（$n\ge2$）。用归纳法可得</p>
$$a_{2k}=\frac{3}{(2k)!},\qquad a_{2k+1}=\frac{1}{(2k+1)!}\quad(k=0,1,2,\cdots).$$
<p>（$k=0$ 时成立；若 $a_{2k-2}=\frac3{(2k-2)!}$，则 $a_{2k}=\frac{3}{(2k-2)!}\cdot\frac1{2k(2k-1)}=\frac3{(2k)!}$；奇数项同理。）于是 $0&lt;a_n\le\dfrac3{n!}$。对任意 $x$，正项级数 $\sum\frac{3|x|^n}{n!}$ 由比值判别法收敛（相邻两项之比 $\frac{|x|}{n+1}\to0$），所以 $\sum a_nx^n$ 对一切 $x$ 绝对收敛，收敛半径 $R=+\infty$，$S(x)$ 在 $(-\infty,+\infty)$ 上有定义。</p>
<p><b>第二步：逐项求导。</b>幂级数在收敛区间内可以逐项求导任意次，且收敛半径不变：</p>
$$S'(x)=\sum_{n=1}^{\infty}na_nx^{n-1},\qquad S''(x)=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}.$$
<p>（$n=0$ 的项是常数，求一次导就没了；$n=1$ 的项是一次式，求两次导也没了，所以下标分别从 $1$、$2$ 开始。）</p>
<p><b>第三步：代入递推式并平移下标。</b>由 $n(n-1)a_n=a_{n-2}$（$n\ge2$），</p>
$$S''(x)=\sum_{n=2}^{\infty}a_{n-2}x^{n-2}\ \overset{m=n-2}{=}\ \sum_{m=0}^{\infty}a_mx^m=S(x).$$
<p>所以 $S''(x)-S(x)=0$，$x\in(-\infty,+\infty)$。证毕。</p>
<p><b>（Ⅱ）第四步：解微分方程。</b>特征方程 $r^2-1=0$，特征根 $r=\pm1$，通解</p>
$$S(x)=C_1\mathrm{e}^{x}+C_2\mathrm{e}^{-x}.$$
<p><b>第五步：用初始条件定常数。</b>在幂级数和导数级数中令 $x=0$，除首项外全为 $0$：$S(0)=a_0=3$，$S'(0)=a_1=1$。而 $S(0)=C_1+C_2$，$S'(0)=C_1-C_2$，于是</p>
$$\begin{cases}C_1+C_2=3,\\ C_1-C_2=1\end{cases}\ \Longrightarrow\ C_1=2,\ C_2=1.$$
<p><b>第六步：结论与检验。</b></p>
$$S(x)=2\mathrm{e}^{x}+\mathrm{e}^{-x},\quad x\in(-\infty,+\infty).$$
<p>检验：$2\mathrm{e}^x+\mathrm{e}^{-x}=\sum\limits_{n=0}^\infty\frac{2+(-1)^n}{n!}x^n$，$n$ 为偶数时系数为 $\frac3{n!}$，奇数时为 $\frac1{n!}$，与第一步求出的 $a_n$ 完全一致。✓</p>`,
      pitfalls: R`<ul><li><b>下标平移出错：</b>$S''$ 的求和从 $n=2$ 开始，令 $m=n-2$ 后从 $m=0$ 开始；起点写错会多出或少掉一项。</li><li><b>不说明收敛半径就逐项求导：</b>逻辑上不完整，阅卷会扣分。至少要指出收敛半径为 $+\infty$（或在收敛区间内）。</li><li><b>初始条件弄错：</b>$S'(0)=a_1$，不是 $S'(0)=0$ 或 $a_0$；记住"$a_n=\frac{S^{(n)}(0)}{n!}$"。</li><li><b>和函数不写定义域：</b>求和函数的题必须写出 $x$ 的范围。</li></ul>`,
      summary: R`<p><b>方法要点：</b>系数满足递推关系的幂级数，往往通过"逐项求导 + 代入递推"让和函数满足一个微分方程；初始条件由 $S(0)=a_0$、$S'(0)=a_1$ 给出。</p>
<p><b>题型识别：</b></p><ul><li>递推里出现 $n(n-1)a_n$ ↔ 二阶导数；出现 $na_n$ ↔ 一阶导数；出现 $a_{n-1}$、$a_{n-2}$ ↔ 乘以 $x$、$x^2$ 或下标平移。</li><li>看到"证明和函数满足某微分方程，再求和函数" → 两问一脉相承：第一问建方程，第二问解方程。</li><li>求出的和函数一定要回头和系数核对（展开验证），并注明定义域。</li></ul>`,
      alt: R`<p><b>直接求和：</b>由第一步的通项，</p>$$S(x)=3\sum_{k=0}^{\infty}\frac{x^{2k}}{(2k)!}+\sum_{k=0}^{\infty}\frac{x^{2k+1}}{(2k+1)!}=3\cdot\frac{\mathrm{e}^x+\mathrm{e}^{-x}}{2}+\frac{\mathrm{e}^x-\mathrm{e}^{-x}}{2}=2\mathrm{e}^x+\mathrm{e}^{-x}.$$<p>这里用到 $\mathrm{e}^x$ 展开式中偶数项之和为 $\frac{\mathrm{e}^x+\mathrm{e}^{-x}}2$、奇数项之和为 $\frac{\mathrm{e}^x-\mathrm{e}^{-x}}2$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: 由递推算出 a_0…a_29，与 2e^x+e^{-x} 的麦克劳林系数逐项相等；2e^x+e^{-x} 满足 S″−S=0、S(0)=3、S′(0)=1' },
      flags: []
    },

    /* ───────────────────────── 第 17 题 ───────────────────────── */
    {
      id: '2013-17', year: 2013, no: '第17题', type: '解答', score: 10,
      stem: R`求函数 $f(x,y)=\left(y+\dfrac{x^3}{3}\right)\mathrm{e}^{x+y}$ 的极值．`,
      options: null,
      answer: R`$f$ 在点 $\left(1,-\dfrac43\right)$ 处取得极小值 $f\left(1,-\dfrac43\right)=-\mathrm{e}^{-\frac13}$；点 $\left(-1,-\dfrac23\right)$ 不是极值点；$f$ 没有极大值．`,
      figure: null,
      kp: ['mdiff.extreme'],
      methods: ['求驻点', '二阶充分条件（$AC-B^2$ 判别法）'],
      difficulty: 2,
      analysis: R`<p><b>这题考什么：</b>二元函数的无条件极值，标准三步：求驻点 → 求二阶偏导 → 用 $AC-B^2$ 判别。</p>
<p><b>为什么只看驻点：</b>$f$ 在全平面可微。可微函数的极值点必须是驻点（极值的必要条件：在极值点沿 $x$、$y$ 方向都是一元函数的极值点，由费马引理两个偏导都为 $0$）。</p>
<p><b>为什么 $AC-B^2$ 能判别（第一性原理）：</b>在驻点 $P_0$ 处一阶项为零，由二元泰勒公式</p>
$$f(P_0+(h,k))-f(P_0)\approx\frac12\left(Ah^2+2Bhk+Ck^2\right).$$
<p>右边是关于 $(h,k)$ 的二次型：$AC-B^2>0$ 时它恒同号（$A>0$ 恒正 → 极小；$A&lt;0$ 恒负 → 极大）；$AC-B^2&lt;0$ 时它有正有负 → 鞍点，不是极值。</p>
<p><b>计算技巧：</b>$\mathrm{e}^{x+y}>0$ 是公共因子，令驻点方程时可以直接约掉；另外把 $u=y+\frac{x^3}{3}$ 看成整体，求导结构更清楚。</p>`,
      solution: R`<p><b>第一步：求一阶偏导。</b>用乘积法则（$\mathrm{e}^{x+y}$ 对 $x$、对 $y$ 的偏导都是它自己）：</p>
$$f_x=x^2\mathrm{e}^{x+y}+\left(y+\frac{x^3}{3}\right)\mathrm{e}^{x+y}=\left(x^2+y+\frac{x^3}{3}\right)\mathrm{e}^{x+y},$$
$$f_y=\mathrm{e}^{x+y}+\left(y+\frac{x^3}{3}\right)\mathrm{e}^{x+y}=\left(1+y+\frac{x^3}{3}\right)\mathrm{e}^{x+y}.$$
<p><b>第二步：求驻点。</b>因为 $\mathrm{e}^{x+y}>0$，令 $f_x=f_y=0$ 等价于</p>
$$\begin{cases}x^2+y+\dfrac{x^3}{3}=0,\\[2mm] 1+y+\dfrac{x^3}{3}=0.\end{cases}$$
<p>两式相减得 $x^2-1=0$，$x=\pm1$。代回第二式：$x=1$ 时 $y=-1-\frac13=-\frac43$；$x=-1$ 时 $y=-1+\frac13=-\frac23$。驻点为 $P_1\left(1,-\frac43\right)$，$P_2\left(-1,-\frac23\right)$。</p>
<p><b>第三步：求二阶偏导。</b></p>
$$f_{xx}=(2x+x^2)\mathrm{e}^{x+y}+\left(x^2+y+\frac{x^3}{3}\right)\mathrm{e}^{x+y}=\left(\frac{x^3}{3}+2x^2+2x+y\right)\mathrm{e}^{x+y},$$
$$f_{xy}=\frac{\partial f_x}{\partial y}=\left(\frac{x^3}{3}+x^2+y+1\right)\mathrm{e}^{x+y},\qquad f_{yy}=\left(\frac{x^3}{3}+y+2\right)\mathrm{e}^{x+y}.$$
<p>在两个驻点处都有 $y+\frac{x^3}{3}=-1$（第二个驻点方程），代入化简得</p>
$$A=(2x^2+2x-1)\mathrm{e}^{x+y},\quad B=x^2\mathrm{e}^{x+y},\quad C=\mathrm{e}^{x+y}.$$
<p><b>第四步：判别 $P_1\left(1,-\frac43\right)$。</b>此处 $\mathrm{e}^{x+y}=\mathrm{e}^{-\frac13}$，</p>
$$A=3\mathrm{e}^{-\frac13},\quad B=\mathrm{e}^{-\frac13},\quad C=\mathrm{e}^{-\frac13},\quad AC-B^2=3\mathrm{e}^{-\frac23}-\mathrm{e}^{-\frac23}=2\mathrm{e}^{-\frac23}>0,$$
<p>且 $A>0$，所以 $P_1$ 是<b>极小值点</b>，极小值</p>
$$f\left(1,-\frac43\right)=\left(-\frac43+\frac13\right)\mathrm{e}^{1-\frac43}=-\mathrm{e}^{-\frac13}.$$
<p><b>第五步：判别 $P_2\left(-1,-\frac23\right)$。</b>此处 $\mathrm{e}^{x+y}=\mathrm{e}^{-\frac53}$，</p>
$$A=(2-2-1)\mathrm{e}^{-\frac53}=-\mathrm{e}^{-\frac53},\quad B=\mathrm{e}^{-\frac53},\quad C=\mathrm{e}^{-\frac53},\quad AC-B^2=-2\mathrm{e}^{-\frac{10}3}&lt;0,$$
<p>所以 $P_2$ <b>不是极值点</b>（鞍点）。直观地看：二次型 $\propto -h^2+2hk+k^2$，沿 $(1,0)$ 方向为负、沿 $(0,1)$ 方向为正，函数在一个方向上升、在另一个方向下降。</p>
<p><b>结论：</b>$f$ 只有一个极值——极小值 $f\left(1,-\frac43\right)=-\mathrm{e}^{-\frac13}$，没有极大值。</p>`,
      pitfalls: R`<ul><li><b>漏驻点：</b>$x^2=1$ 有两个根，只写 $x=1$ 会漏掉 $P_2$；虽然 $P_2$ 不是极值点，但必须判别并写出结论。</li><li><b>乘积求导漏项：</b>$f_{xx}$ 要对 $\left(x^2+y+\frac{x^3}{3}\right)\mathrm{e}^{x+y}$ 再用一次乘积法则，括号求导得 $2x+x^2$，别漏。</li><li><b>判别式记反：</b>$AC-B^2>0$ 才是极值；$A>0$ 极小、$A&lt;0$ 极大（类比一元函数 $f''>0$ 为极小）。</li><li><b>极小值 ≠ 最小值：</b>$-\mathrm{e}^{-\frac13}$ 只是局部最小。事实上沿曲线 $y=-\frac{x^3}{3}-1$ 有 $f=-\mathrm{e}^{x-\frac{x^3}{3}-1}$，$x\to-\infty$ 时 $f\to-\infty$（例如 $f(-3,8)=-\mathrm{e}^5$），$f$ 根本没有最小值。</li></ul>`,
      summary: R`<p><b>无条件极值三步：</b>① 解 $f_x=f_y=0$ 得全部驻点（以及偏导不存在的点）；② 在每个驻点算 $A=f_{xx},B=f_{xy},C=f_{yy}$；③ $AC-B^2>0$：$A>0$ 极小、$A&lt;0$ 极大；$AC-B^2&lt;0$：非极值；$AC-B^2=0$：需另行讨论（定义法）。</p>
<p><b>题型识别：</b></p><ul><li>看到"求 $f(x,y)$ 的极值"、无约束 → 驻点 + $AC-B^2$。</li><li>看到 $\mathrm{e}^{\cdots}$ 作为因子 → 它恒正，列驻点方程时直接约掉。</li><li>在驻点处利用驻点方程化简二阶偏导（本题的 $y+\frac{x^3}{3}=-1$），能显著减少计算。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: solve(f_x=f_y=0) 得 (1,−4/3)、(−1,−2/3)；在 (1,−4/3) 处 A=3e^{−1/3}, B=C=e^{−1/3}, AC−B²=2e^{−2/3}，f=−e^{−1/3}；在 (−1,−2/3) 处 AC−B²=−2e^{−10/3}；并验证 f(−3,8)=−e⁵ 说明无最小值' },
      flags: ['参考解析在解驻点方程组处只写出 (−1,−2/3)，但随后对 (1,−4/3) 也作了判别，属排版遗漏，结论一致']
    },

    /* ───────────────────────── 第 18 题 ───────────────────────── */
    {
      id: '2013-18', year: 2013, no: '第18题', type: '解答', score: 10,
      stem: R`设奇函数 $f(x)$ 在 $[-1,1]$ 上具有二阶导数，且 $f(1)=1$．证明：<br>（Ⅰ）存在 $\xi\in(0,1)$，使得 $f'(\xi)=1$；<br>（Ⅱ）存在 $\eta\in(-1,1)$，使得 $f''(\eta)+f'(\eta)=1$．`,
      options: null,
      answer: R`证明题，见详细解答．（Ⅰ）对 $f$ 在 $[0,1]$ 上用拉格朗日中值定理；（Ⅱ）对 $F(x)=\mathrm{e}^{x}[f'(x)-1]$ 在 $[-\xi,\xi]$ 上用罗尔定理．`,
      figure: null,
      kp: ['diff.mvt', 'lim.func'],
      methods: ['拉格朗日中值定理', '罗尔定理', '构造辅助函数（乘 $\\mathrm{e}^x$）', '奇偶函数导数的奇偶性'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>微分中值定理与辅助函数的构造。</p>
<p><b>（Ⅰ）怎么想：</b>$f'(\xi)=1$，而 $1=\frac{f(1)-f(0)}{1-0}$ 当且仅当 $f(0)=0$。奇函数恰好给出 $f(0)=0$。所以这是拉格朗日中值定理的直接应用：<b>导数 = 平均变化率</b>。</p>
<p><b>（Ⅱ）怎么想：</b>目标 $f''(\eta)+f'(\eta)-1=0$。令 $g(x)=f'(x)-1$，则 $g'=f''$，目标变成 $g'(\eta)+g(\eta)=0$。</p>
<p><b>为什么乘 $\mathrm{e}^x$（第一性原理）：</b>我们想要一个函数 $F$，使得 $F'$ 恰好含有因子 $g'+g$，再用罗尔定理得到 $F'(\eta)=0$。乘积法则告诉我们</p>
$$\big(\mathrm{e}^xg(x)\big)'=\mathrm{e}^xg'(x)+\mathrm{e}^xg(x)=\mathrm{e}^x\big(g'(x)+g(x)\big),$$
<p>而 $\mathrm{e}^x$ 永不为零，所以 $F'(\eta)=0\iff g'(\eta)+g(\eta)=0$。这就是"$g'+g$ 型 → 乘 $\mathrm{e}^x$"的来历（更一般地 $g'+kg$ 型乘 $\mathrm{e}^{kx}$，本质是一阶线性方程的积分因子）。</p>
<p><b>罗尔定理需要两个零点：</b>$F(x)=\mathrm{e}^x[f'(x)-1]$ 的零点就是 $f'(x)=1$ 的点。第（Ⅰ）问给了一个 $\xi$；奇函数的导数是偶函数，所以 $-\xi$ 也是。两问就这样衔接起来了。</p>`,
      solution: R`<p><b>（Ⅰ）第一步：由奇性得 $f(0)=0$。</b>$f$ 是奇函数，对 $[-1,1]$ 上一切 $x$ 有 $f(-x)=-f(x)$。令 $x=0$ 得 $f(0)=-f(0)$，所以 $f(0)=0$。</p>
<p><b>第二步：验证拉格朗日中值定理的条件。</b>$f$ 在 $[-1,1]$ 上二阶可导，当然一阶可导，从而连续。所以 $f$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导。</p>
<p><b>第三步：应用定理。</b>存在 $\xi\in(0,1)$，使</p>
$$f'(\xi)=\frac{f(1)-f(0)}{1-0}=\frac{1-0}{1}=1.$$
<p><b>（Ⅱ）第四步：证明 $f'$ 是偶函数。</b>对恒等式 $f(-x)=-f(x)$ 两边求导，左边用链式法则：$f'(-x)\cdot(-1)=-f'(x)$，即</p>
$$f'(-x)=f'(x),\quad x\in[-1,1].$$
<p>于是 $f'(-\xi)=f'(\xi)=1$。</p>
<p><b>第五步：构造辅助函数。</b>令</p>
$$F(x)=\mathrm{e}^{x}\big[f'(x)-1\big],\quad x\in[-1,1].$$
<p>因为 $f$ 在 $[-1,1]$ 上二阶可导，$f'$ 在 $[-1,1]$ 上可导（从而连续），所以 $F$ 在 $[-\xi,\xi]$ 上连续、在 $(-\xi,\xi)$ 内可导，并且</p>
$$F(-\xi)=\mathrm{e}^{-\xi}\big[f'(-\xi)-1\big]=0,\qquad F(\xi)=\mathrm{e}^{\xi}\big[f'(\xi)-1\big]=0.$$
<p><b>第六步：应用罗尔定理。</b>存在 $\eta\in(-\xi,\xi)\subset(-1,1)$，使 $F'(\eta)=0$。而</p>
$$F'(x)=\mathrm{e}^x\big[f'(x)-1\big]+\mathrm{e}^xf''(x)=\mathrm{e}^x\big[f''(x)+f'(x)-1\big],$$
<p>由 $\mathrm{e}^\eta\ne0$ 得 $f''(\eta)+f'(\eta)-1=0$，即</p>
$$f''(\eta)+f'(\eta)=1.$$
<p>证毕。</p>`,
      pitfalls: R`<ul><li><b>不写理由就用 $f(0)=0$、$f'(-\xi)=1$：</b>这两条都要由奇性推出，阅卷时是得分点。</li><li><b>在 $[0,\xi]$ 上用罗尔定理：</b>我们并不知道 $f'(0)=1$，端点值不相等，罗尔定理用不了。必须借助对称点 $-\xi$。</li><li><b>辅助函数乘错因子：</b>写成 $\mathrm{e}^{-x}[f'(x)-1]$，求导得 $\mathrm{e}^{-x}[f''-f'+1]$，与目标不符。记住"$g'+g$ 乘 $\mathrm{e}^{x}$，$g'-g$ 乘 $\mathrm{e}^{-x}$"。</li><li><b>把 $\xi$ 与 $\eta$ 当成同一点：</b>它们是两次中值定理给出的不同点。</li></ul>`,
      summary: R`<p><b>辅助函数构造的"还原法"：</b>把结论中的 $\xi$ 换成 $x$，整理成"某个函数的导数 = 0"的形式：</p>
<ul><li>$g'(x)+kg(x)=0$ → $F=\mathrm{e}^{kx}g(x)$；</li><li>$xg'(x)+kg(x)=0$ → $F=x^kg(x)$；</li><li>$g'(x)+h'(x)g(x)=0$ → $F=\mathrm{e}^{h(x)}g(x)$。</li></ul>
<p><b>题型识别：</b></p><ul><li>看到"奇函数" → 立刻写出 $f(0)=0$，以及 $f'$ 为偶函数；看到"偶函数" → $f'$ 为奇函数、$f'(0)=0$。</li><li>看到 $f''+f'=$ 常数 → 令 $g=f'-$ 常数，化为 $g'+g=0$，乘 $\mathrm{e}^x$。</li><li>多问的中值题，前一问通常为后一问提供"两个函数值相等的点"。</li></ul>`,
      alt: R`<p><b>另一种辅助函数（不需要第（Ⅰ）问）：</b>注意到 $f''(x)+f'(x)-1$ 正是 $F(x)=f'(x)+f(x)-x$ 的导数。利用奇偶性计算端点值：</p>$$F(1)=f'(1)+f(1)-1=f'(1),\qquad F(-1)=f'(-1)+f(-1)+1=f'(1)-1+1=f'(1).$$<p>所以 $F(-1)=F(1)$。$F$ 在 $[-1,1]$ 上连续、在 $(-1,1)$ 内可导，由罗尔定理，存在 $\eta\in(-1,1)$ 使 $F'(\eta)=f''(\eta)+f'(\eta)-1=0$。这个方法的思路是"直接找原函数"：目标式本身就是某个函数的导数，只需检查它在两个点上取值相等。</p>`,
      verify: { by: 'proof', ok: true, note: '纯证明题：逐步核对奇函数⇒f(0)=0、f′为偶函数、罗尔定理条件与区间包含关系；并用 sympy 以 f(x)=x³ 验算：ξ=1/√3∈(0,1)，f″+f′=1 的根 η=−1+2√3/3≈0.155∈(−1,1)' },
      flags: []
    },

    /* ───────────────────────── 第 19 题 ───────────────────────── */
    {
      id: '2013-19', year: 2013, no: '第19题', type: '解答', score: 10,
      stem: R`设直线 $L$ 过 $A(1,0,0)$，$B(0,1,1)$ 两点，将 $L$ 绕 $z$ 轴旋转一周得到曲面 $\Sigma$，$\Sigma$ 与平面 $z=0$，$z=2$ 所围成的立体为 $\Omega$．<br>（Ⅰ）求曲面 $\Sigma$ 的方程；<br>（Ⅱ）求 $\Omega$ 的形心坐标．`,
      options: null,
      answer: R`（Ⅰ）$\Sigma:\ x^2+y^2=2z^2-2z+1$；（Ⅱ）形心坐标为 $\left(0,0,\dfrac75\right)$．`,
      figure: null,
      kp: ['vec.surface', 'mint.triple', 'mint.field'],
      methods: ['旋转曲面方程（高度与到轴距离不变）', '先二后一（截面法）', '对称性', '形心公式'],
      difficulty: 3,
      analysis: R`<p><b>这题考什么：</b>（Ⅰ）空间直线绕坐标轴旋转所成的曲面；（Ⅱ）三重积分求形心。</p>
<p><b>（Ⅰ）旋转曲面的本质（第一性原理）：</b>直线 $L$ 上每一点 $M_0$ 绕 $z$ 轴转一圈，画出一个水平的圆：<b>高度 $z$ 不变</b>，<b>圆心在 $z$ 轴上</b>，<b>半径等于 $M_0$ 到 $z$ 轴的距离</b> $\sqrt{x_0^2+y_0^2}$。所以点 $M(x,y,z)$ 在 $\Sigma$ 上，当且仅当 $L$ 上有一个同高度的点 $M_0(x_0,y_0,z)$，使 $x^2+y^2=x_0^2+y_0^2$。</p>
<p><b>为什么不能用"换元口诀"：</b>平面曲线（例如 $yOz$ 面上的 $f(y,z)=0$）绕 $z$ 轴旋转，可以把 $y$ 换成 $\pm\sqrt{x^2+y^2}$。但本题的直线不在任何坐标面内（$x_0,y_0$ 都随 $z$ 变化），口诀不适用，必须回到"到轴距离不变"这一本质。</p>
<p><b>（Ⅱ）为什么用"先二后一"：</b>$\Omega$ 的水平截面都是圆盘，面积 $\pi(x^2+y^2\text{ 的上界})$ 可以直接写出，于是三重积分降为对 $z$ 的定积分，最省事。</p>`,
      solution: R`<p><b>（Ⅰ）第一步：写出直线的参数方程。</b>方向向量 $\overrightarrow{AB}=(0-1,1-0,1-0)=(-1,1,1)$，过点 $A(1,0,0)$：</p>
$$L:\ x=1-t,\quad y=t,\quad z=t\quad(t\in\mathbb R).$$
<p>由于 $z=t$，$L$ 上高度为 $z$ 的点是 $M_0(1-z,\ z,\ z)$。</p>
<p><b>第二步：利用"到 $z$ 轴距离不变"。</b>点 $M(x,y,z)\in\Sigma$ 当且仅当它与 $M_0$ 同高、到 $z$ 轴距离相等：</p>
$$x^2+y^2=(1-z)^2+z^2.$$
<p><b>第三步：整理。</b></p>
$$\Sigma:\ x^2+y^2=2z^2-2z+1.$$
<p>配方得 $x^2+y^2-2\left(z-\frac12\right)^2=\frac12$，这是<b>单叶双曲面</b>，"腰"在 $z=\frac12$ 处，半径 $\frac{\sqrt2}{2}$。原因是 $L$ 与 $z$ 轴<b>异面</b>（$L$ 上没有点满足 $1-t=0$ 且 $t=0$，且方向不平行）。若直线与轴相交则得圆锥面，平行则得圆柱面。</p>
<p><b>（Ⅱ）第四步：描述立体。</b></p>
$$\Omega=\left\{(x,y,z)\ \middle|\ 0\le z\le2,\ x^2+y^2\le2z^2-2z+1\right\}.$$
<p>注意 $2z^2-2z+1$ 的判别式 $4-8&lt;0$，它恒为正，所以每个高度的截面都是真正的圆盘 $D_z$，面积 $\pi(2z^2-2z+1)$。</p>
<div><svg viewBox="0 0 260 175" width="260" style="max-width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="立体侧视示意图"><title>Ω 的侧视轮廓：单叶双曲面被 z=0 与 z=2 截下的部分</title>
<line x1="130" y1="168" x2="130" y2="8" stroke="currentColor" stroke-width="1"/>
<text x="134" y="14" font-size="11" fill="currentColor">z</text>
<polyline points="175,150 165.6,135 161.8,120 165.6,105 175,90 187.4,75 201.2,60 215.7,45 230.6,30" fill="none" stroke="#2f7dd1" stroke-width="2.2"/>
<polyline points="85,150 94.4,135 98.2,120 94.4,105 85,90 72.6,75 58.8,60 44.3,45 29.4,30" fill="none" stroke="#2f7dd1" stroke-width="2.2"/>
<ellipse cx="130" cy="30" rx="100.6" ry="9" fill="none" stroke="#2f7dd1" stroke-width="1.5"/>
<ellipse cx="130" cy="150" rx="45" ry="5" fill="none" stroke="#2f7dd1" stroke-width="1.5"/>
<ellipse cx="130" cy="90" rx="45" ry="4" fill="none" stroke="#e8590c" stroke-width="1.2" stroke-dasharray="4,3"/>
<circle cx="130" cy="66" r="4" fill="#d9480f"/>
<text x="138" y="70" font-size="11" fill="#d9480f">形心 z=7/5</text>
<text x="180" y="96" font-size="10" fill="#e8590c">截面圆盘</text>
<text x="140" y="164" font-size="10" fill="currentColor">z=0</text>
<text x="140" y="24" font-size="10" fill="currentColor">z=2</text>
</svg></div>
<p><b>第五步：用对称性确定 $\bar x,\bar y$。</b>$\Omega$ 关于 $yOz$ 面对称（$x\to-x$ 不改变 $\Omega$），而 $x$ 是 $x$ 的奇函数，所以 $\iiint_\Omega x\,\mathrm{d}V=0$；同理 $\iiint_\Omega y\,\mathrm{d}V=0$。故 $\bar x=\bar y=0$。</p>
<p><b>第六步：求体积（先二后一）。</b></p>
$$V=\iiint_\Omega\mathrm{d}V=\int_0^2\left(\iint_{D_z}\mathrm{d}x\,\mathrm{d}y\right)\mathrm{d}z=\pi\int_0^2(2z^2-2z+1)\,\mathrm{d}z=\pi\left[\frac{2z^3}{3}-z^2+z\right]_0^2=\pi\left(\frac{16}3-4+2\right)=\frac{10\pi}{3}.$$
<p><b>第七步：求 $\iiint_\Omega z\,\mathrm{d}V$。</b>在同一截面上 $z$ 是常数，可以提出来：</p>
$$\iiint_\Omega z\,\mathrm{d}V=\int_0^2z\cdot\pi(2z^2-2z+1)\,\mathrm{d}z=\pi\left[\frac{z^4}{2}-\frac{2z^3}{3}+\frac{z^2}{2}\right]_0^2=\pi\left(8-\frac{16}3+2\right)=\frac{14\pi}{3}.$$
<p><b>第八步：形心。</b></p>
$$\bar z=\frac{\iiint_\Omega z\,\mathrm{d}V}{\iiint_\Omega\mathrm{d}V}=\frac{14\pi/3}{10\pi/3}=\frac75.$$
<p>所以 $\Omega$ 的形心坐标为 $\left(0,0,\frac75\right)$。</p>
<p><b>合理性检验：</b>截面半径的平方在 $z=0$ 处为 $1$、在 $z=2$ 处为 $5$，立体"上宽下窄"，质量偏上，形心高度应大于中点 $1$；$\frac75=1.4$ 符合预期。</p>`,
      pitfalls: R`<ul><li><b>套用平面曲线的口诀：</b>例如只用 $x=1-z$ 得 $x^2+y^2=(1-z)^2$（圆锥面），漏掉了 $y_0=z$ 的贡献。直线不在坐标面内时，必须用 $x^2+y^2=x_0^2+y_0^2$。</li><li><b>把截面面积写成 $\pi r$ 或忘乘 $\pi$：</b>截面是圆盘，面积 $\pi r^2$，而 $r^2$ 已经是 $2z^2-2z+1$，不要再开方或平方。</li><li><b>形心公式分母写错：</b>形心 $\bar z=\frac{\iiint z\,\mathrm{d}V}{V}$，分母是体积；不要除以截面面积或别的量。</li><li><b>积分算错：</b>$\int_0^2z^3\mathrm{d}z=4$，乘系数 $2$ 得 $8$；$\int_0^2z^2\mathrm{d}z=\frac83$，乘 $2$ 得 $\frac{16}3$，逐项小心。</li></ul>`,
      summary: R`<p><b>旋转曲面万能法（绕 $z$ 轴）：</b>母线上取点 $M_0(x_0,y_0,z)$，用母线方程把 $x_0,y_0$ 表示成 $z$ 的函数，曲面方程即 $x^2+y^2=x_0^2(z)+y_0^2(z)$。绕其他轴同理：保持该轴坐标不变，另两个坐标的平方和不变。</p>
<p><b>形心/质心：</b>先用对称性让某些坐标为 $0$，再算剩下的；截面简单时用"先二后一"。</p>
<p><b>题型识别：</b></p><ul><li>看到"空间直线（或曲线）绕坐标轴旋转" → 高度不变 + 到轴距离不变。</li><li>看到"立体的截面面积容易写出" → 先二后一，三重积分化为定积分。</li><li>看到"求形心" → 对称性 + $\bar z=\frac{\iiint z\,\mathrm{d}V}{V}$。</li></ul>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: V=π∫₀²(2z²−2z+1)dz=10π/3，∭z dV=π∫₀² z(2z²−2z+1)dz=14π/3，z̄=7/5；2z²−2z+1 无实根（截面恒为圆盘）' },
      flags: []
    }
  ];
});
