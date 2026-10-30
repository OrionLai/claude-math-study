registerLesson(function (R) {
  return {
    id: 'diff.calc', ch: 'diff', title: '求导法则与高阶导数',
    summary: R`导数定义只是"出发点"，真正让微分学能用起来的是一套机械化的求导法则：四则、复合、反函数、隐函数、参数方程、对数求导法，再加上高阶导数与莱布尼茨公式。本篇把每条法则的来龙去脉、证明、题型与近十年真题讲透。`,
    prereq: ['diff.def', 'lim.rules', 'lim.cont'],
    sections: [
      {
        kind: 'why', title: '为什么需要求导法则：把"算极限"变成"按规则操作"',
        html: R`<p>在 <b>diff.def</b> 里我们已经知道，$f'(x_0)=\lim\limits_{\Delta x\to0}\dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$。这个定义很清楚，但用它来算导数非常痛苦：哪怕只是 $y=\dfrac{\sin x}{1+x^2}$，直接写差商、通分、找等价无穷小，一页纸也未必够。而考研里要求导的函数远比这复杂：$\ln\big(x+\sqrt{x^2+1}\big)$、$x^{\sin x}$、由方程 $x^3+y^3-3x+3y-2=0$ 确定的 $y(x)$、由参数方程 $x=2\mathrm{e}^t+t+1,\ y=4(t-1)\mathrm{e}^t+t^2$ 确定的 $y(x)$……</p>
<p>所以必须换一种思路：<b>任何初等函数都是由少数几个基本初等函数经过有限次加、减、乘、除、复合得到的</b>。如果我们（1）把基本初等函数的导数算一次、记住，（2）证明"加减乘除之后导数怎么变""复合之后导数怎么变"，那么求导就变成了<b>按规则拆解</b>的机械工作，完全不需要再回到极限定义。这就是本篇前半部分的目标：</p>
<ul>
<li><b>四则运算法则</b>：解决"$u\pm v,\ uv,\ u/v$ 的导数"；</li>
<li><b>链式法则</b>：解决"$f(g(x))$ 的导数"，这是所有法则里最重要的一条；</li>
<li><b>反函数求导法则</b>：解决"已知 $y=f(x)$ 的导数，求 $x=f^{-1}(y)$ 的导数"，它也是 $\arcsin x,\ \ln x$ 等导数公式的来源；</li>
<li><b>隐函数求导、参数方程求导</b>：函数不是显式写成 $y=f(x)$ 时怎么办——本质上都是链式法则和反函数法则的组合；</li>
<li><b>对数求导法</b>：对付连乘连除、幂指函数 $u(x)^{v(x)}$ 的技巧，本质仍是链式法则。</li>
</ul>
<p>后半部分讨论<b>高阶导数</b>：导数本身是函数，还可以继续求导。物理上位置的导数是速度、速度的导数是加速度；几何上二阶导数决定曲线的弯曲方向（见 <b>diff.convex</b>）；泰勒公式（<b>diff.taylor</b>）则需要任意阶导数。求 $n$ 阶导数不能一次次硬算，需要"找规律 + 归纳"和<b>莱布尼茨公式</b>（乘积的 $n$ 阶导数，形式上和二项式定理一模一样）。</p>
<p>最后是<b>分段函数求导</b>：法则只能用在"每一段内部"，在<b>分段点</b>上必须回到定义（或用导数极限定理）。考研最喜欢在这里设陷阱——2023 年第 3 题就是典型。</p>
<p>一句话概括本篇：<b>法则负责"段内"，定义负责"点上"；一阶靠法则，高阶靠规律。</b></p>`
      },
      {
        kind: 'def', title: '基本概念：导函数、高阶导数、隐函数与参数方程确定的函数',
        html: R`<p><b>定义 1（导函数）.</b> 若 $f$ 在区间 $I$ 内每一点都可导，则 $x\mapsto f'(x)$ 是 $I$ 上的函数，称为 $f$ 的<b>导函数</b>，仍记作 $f'(x)$、$y'$、$\dfrac{\mathrm{d}y}{\mathrm{d}x}$ 或 $\dfrac{\mathrm{d}f}{\mathrm{d}x}$。（区间端点处指单侧导数。）</p>
<p><b>定义 2（高阶导数）.</b> 若 $f$ 的导函数 $f'$ 在 $x_0$ 处可导，则称 $f$ 在 $x_0$ 处<b>二阶可导</b>，并称
$$f''(x_0)=\lim_{x\to x_0}\frac{f'(x)-f'(x_0)}{x-x_0}$$
为 $f$ 在 $x_0$ 处的<b>二阶导数</b>。一般地，归纳定义 $f^{(n)}(x_0)=\big(f^{(n-1)}\big)'(x_0)$，称为 $n$ 阶导数；约定 $f^{(0)}=f$。记号还有 $y^{(n)},\ \dfrac{\mathrm{d}^ny}{\mathrm{d}x^n}$。二阶及二阶以上统称<b>高阶导数</b>。</p>
<p><b>逐字拆解这个定义，有三件事必须想清楚：</b></p>
<ul>
<li><b>"$f'$ 在 $x_0$ 处可导"隐含了"$f'$ 在 $x_0$ 的某个邻域内存在"。</b>因为定义中的差商 $\dfrac{f'(x)-f'(x_0)}{x-x_0}$ 要对 $x_0$ 附近所有 $x$ 有意义。所以"$f''(x_0)$ 存在"是一个比"$f'(x_0)$ 存在"强得多的条件：它要求 $f$ 在 $x_0$ <b>附近处处可导</b>，并且导函数 $f'$ 在 $x_0$ 处又可导（从而 $f'$ 在 $x_0$ 处连续）。</li>
<li><b>"$n$ 阶可导"是一层一层往上爬的阶梯：</b>连续 $\Leftarrow$ 可导 $\Leftarrow$ 导函数连续 $\Leftarrow$ 二阶可导 $\Leftarrow$ 二阶导函数连续 $\Leftarrow\cdots$ 每一级都真的比前一级强（反例见后文 $x|x|$、$x^2\sin\frac1x$）。2023 年第 3 题的四个选项恰好就是这个阶梯的四级。</li>
<li><b>在一点处的 $n$ 阶导数与 $n$ 阶导函数不同。</b>$f^{(n)}(x_0)$ 是一个数；$f^{(n)}(x)$ 是函数。求 $f^{(n)}(x_0)$ 未必要先求 $f^{(n)}(x)$——泰勒展开、奇偶性等方法可以绕过去（2017 年第 9 题、2016 年第 12 题）。</li>
</ul>
<p><b>正例：</b>$f(x)=x^3$，$f'=3x^2$，$f''=6x$，$f'''=6$，$f^{(4)}=0$，以后恒为 $0$，处处任意阶可导。<b>反例：</b>$f(x)=x|x|$，在 $x\ne0$ 处 $f'(x)=2|x|$，在 $0$ 处用定义 $f'(0)=\lim\limits_{x\to0}\dfrac{x|x|}{x}=0$，所以 $f'(x)=2|x|$ 处处存在且连续；但 $f'$ 在 $0$ 处有尖角，$f''(0)$ 不存在。</p>
<p><b>定义 3（隐函数）.</b> 设方程 $F(x,y)=0$。若存在区间 $I$ 和定义在 $I$ 上的函数 $y=y(x)$，使得对一切 $x\in I$ 都有 $F(x,y(x))=0$，则称 $y(x)$ 是由方程 $F(x,y)=0$ 在 $I$ 上<b>确定的隐函数</b>。</p>
<p>拆解：（i）"隐"只是说<b>没有写成 $y=$ 显式表达式</b>，不是说写不出来：$x+y-1=0$ 确定的隐函数就是 $y=1-x$。（ii）"确定"要求<b>对每个 $x$ 恰有一个 $y$ 与之对应</b>；同一个方程可以在不同范围确定不同的隐函数，如 $x^2+y^2=1$ 在 $|x|\le 1$ 上既确定 $y=\sqrt{1-x^2}$，也确定 $y=-\sqrt{1-x^2}$。（iii）隐函数<b>存在且可导</b>的充分条件（隐函数存在定理：$F$ 有连续偏导数且 $F_y\neq0$）属于 <b>mdiff.implicit</b>；本篇只讨论"已知它存在且可导，怎么求导"。</p>
<p><b>定义 4（参数方程确定的函数）.</b> 设 $x=\varphi(t),\ y=\psi(t)$，$t\in[\alpha,\beta]$。若 $\varphi$ 在 $[\alpha,\beta]$ 上严格单调且连续，则 $\varphi$ 有反函数 $t=\varphi^{-1}(x)$，于是 $y=\psi\big(\varphi^{-1}(x)\big)$ 是 $x$ 的函数，称为由参数方程确定的函数。</p>
<p>拆解："严格单调"保证 $t$ 由 $x$ 唯一确定——否则同一个 $x$ 会对应多个 $t$、多个 $y$，不成函数（圆 $x=\cos t,\ y=\sin t$ 在整个 $[0,2\pi]$ 上就不是 $x$ 的函数，要分上下半圆）。2023 年第 3 题中 $x=2t+|t|$ 严格递增，所以 $y$ 确实是 $x$ 的函数。</p>
<p><b>定义 5（分段点处的导数）.</b> 分段函数在分段点 $x_0$ 处的导数仍按原定义：$f'(x_0)$ 存在 $\Leftrightarrow$ 左导数 $f'_-(x_0)=\lim\limits_{x\to x_0^-}\dfrac{f(x)-f(x_0)}{x-x_0}$ 与右导数 $f'_+(x_0)=\lim\limits_{x\to x_0^+}\dfrac{f(x)-f(x_0)}{x-x_0}$ 都存在且相等。注意分子永远是 $f(x)-f(x_0)$，$f(x_0)$ 取<b>分段点所属的那一段</b>的值。</p>`
      },
      {
        kind: 'thm', title: '定理 1：四则运算求导法则',
        statement: R`<p>设 $u=u(x),\ v=v(x)$ 都在点 $x$ 处可导，则 $u\pm v,\ uv$ 在 $x$ 处可导；若还有 $v(x)\neq0$，则 $\dfrac uv$ 在 $x$ 处可导，并且
$$(u\pm v)'=u'\pm v',\qquad (uv)'=u'v+uv',\qquad \Big(\frac uv\Big)'=\frac{u'v-uv'}{v^2}.$$
特别地 $(Cu)'=Cu'$（$C$ 为常数），$\Big(\dfrac1v\Big)'=-\dfrac{v'}{v^2}$。</p>`,
        intuition: R`<p>把导数看成"微小变化的放大率"。$u$ 变了 $\Delta u\approx u'\Delta x$，$v$ 变了 $\Delta v\approx v'\Delta x$。乘积 $uv$ 可以想成一个长 $u$、宽 $v$ 的矩形面积，长宽各增加一点，面积增量 $=\Delta u\cdot v+u\cdot\Delta v+\Delta u\Delta v$：两条"边条"加一个小角块。小角块是二阶小量 $\Delta u\Delta v\approx u'v'(\Delta x)^2$，除以 $\Delta x$ 后趋于 $0$，所以只剩 $u'v+uv'$。这就是乘积法则"<b>各求一次导、其余不动、再相加</b>"的来源，也是莱布尼茨公式的雏形。</p>`,
        steps: [
          { s: R`<p><b>和差.</b> $\dfrac{[u(x+h)\pm v(x+h)]-[u(x)\pm v(x)]}{h}=\dfrac{u(x+h)-u(x)}{h}\pm\dfrac{v(x+h)-v(x)}{h}\to u'(x)\pm v'(x)$。</p>`, why: R`<p>只是把差商拆开，再用极限的加减法则（两个极限都存在，所以可以拆）。</p>` },
          { s: R`<p><b>乘积.</b> 在分子里"加一项减一项"：
$$\frac{u(x+h)v(x+h)-u(x)v(x)}{h}=\frac{u(x+h)-u(x)}{h}\,v(x+h)+u(x)\,\frac{v(x+h)-v(x)}{h}.$$</p>`, why: R`<p>分子加减 $u(x)v(x+h)$ 这一项，目的是把"两个变量同时变"拆成"先让 $u$ 变、再让 $v$ 变"。这是乘积法则证明的核心技巧，和直觉里"两条边条"完全对应。</p>` },
          { s: R`<p>令 $h\to0$：第一项中 $\dfrac{u(x+h)-u(x)}{h}\to u'(x)$，而 $v(x+h)\to v(x)$（$v$ 可导故连续）；第二项 $\to u(x)v'(x)$。故 $(uv)'=u'v+uv'$。</p>`, why: R`<p>这里用到了"可导必连续"（diff.def），缺了它 $v(x+h)\to v(x)$ 就没有保证。这正是定理要求 $v$ 可导而不只是存在的原因之一。</p>` },
          { s: R`<p><b>倒数.</b> 设 $v(x)\neq0$。由连续性，存在 $\delta>0$ 使 $|h|\lt\delta$ 时 $v(x+h)\neq0$，于是
$$\frac{\frac1{v(x+h)}-\frac1{v(x)}}{h}=-\frac{v(x+h)-v(x)}{h}\cdot\frac{1}{v(x+h)v(x)}\to-\frac{v'(x)}{v(x)^2}.$$</p>`, why: R`<p>先证倒数再证商，可以少写一半。$v(x+h)\neq0$ 由连续函数的局部保号性保证（lim.cont），没有它差商根本写不出来。</p>` },
          { s: R`<p><b>商.</b> $\dfrac uv=u\cdot\dfrac1v$，由乘积法则与倒数法则：
$$\Big(\frac uv\Big)'=u'\cdot\frac1v+u\cdot\Big(-\frac{v'}{v^2}\Big)=\frac{u'v-uv'}{v^2}.$$</p>`, why: R`<p>把商归结为乘积，这是"已有结论复用"的典型做法，也说明商法则并非独立的新公理。</p>` }
        ],
        remark: R`<p>（1）乘积法则推广到多个因子：$(u_1u_2\cdots u_n)'=\sum\limits_{k=1}^n u_1\cdots u_k'\cdots u_n$（对 $n$ 归纳即可）。2015 年第 18 题就直接考过"用定义证明乘积法则并写出 $n$ 个因子的公式"，所以<b>这个证明本身是考点</b>，必须会写。（2）一个高频应用：求 $f'(x_0)$ 时如果 $f$ 是多个因子之积且其中某个因子在 $x_0$ 处为 $0$，那么 $f'(x_0)$ 只剩"对这个因子求导、其余代值"一项（2012 年第 2 题）。（3）条件"$u,v$ 可导"不能减弱为"$uv$ 可导"反推：$u=|x|,\ v=|x|$ 都在 $0$ 处不可导，但 $uv=x^2$ 可导。法则是"充分"方向的。</p>`
      },
      {
        kind: 'thm', title: '定理 2：复合函数求导法则（链式法则）',
        statement: R`<p>设 $u=g(x)$ 在点 $x_0$ 处可导，$y=f(u)$ 在对应点 $u_0=g(x_0)$ 处可导，则复合函数 $y=f(g(x))$ 在 $x_0$ 处可导，且
$$\big[f(g(x))\big]'\Big|_{x=x_0}=f'(u_0)\,g'(x_0),\qquad\text{即}\qquad \frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y}{\mathrm{d}u}\cdot\frac{\mathrm{d}u}{\mathrm{d}x}.$$</p>`,
        intuition: R`<p>导数是"放大率"：$x$ 动一点，$u$ 以 $g'(x_0)$ 倍放大；$u$ 动一点，$y$ 又以 $f'(u_0)$ 倍放大。两级放大串联，总放大率当然是两者相乘。莱布尼茨记号 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{\mathrm{d}y}{\mathrm{d}u}\cdot\dfrac{\mathrm{d}u}{\mathrm{d}x}$ 看起来像"约分"，这正是它好记的原因——但证明不能真的约分，因为 $\Delta u$ 可能为 $0$。</p>`,
        steps: [
          { s: R`<p><b>消除"$\Delta u=0$"的障碍.</b> 定义辅助函数
$$\Phi(u)=\begin{cases}\dfrac{f(u)-f(u_0)}{u-u_0}, & u\neq u_0,\\[6pt] f'(u_0), & u=u_0.\end{cases}$$
由 $f$ 在 $u_0$ 可导，$\lim\limits_{u\to u_0}\Phi(u)=f'(u_0)=\Phi(u_0)$，即 $\Phi$ 在 $u_0$ 处连续。并且对<b>一切</b> $u$ 都有恒等式 $f(u)-f(u_0)=\Phi(u)\,(u-u_0)$。</p>`, why: R`<p>初学者常写 $\dfrac{\Delta y}{\Delta x}=\dfrac{\Delta y}{\Delta u}\cdot\dfrac{\Delta u}{\Delta x}$ 然后取极限，这在 $\Delta u=0$ 时（例如 $g$ 为常函数，或 $g(x)=x^2\sin\frac1x$ 在 $0$ 附近无穷多次取到 $0$）是除以零，不合法。把差商"补上定义"做成连续函数 $\Phi$，恒等式 $f(u)-f(u_0)=\Phi(u)(u-u_0)$ 在 $u=u_0$ 时两边都是 $0$，仍然成立——这样就不需要分母了。</p>` },
          { s: R`<p>在恒等式中令 $u=g(x)$：
$$\frac{f(g(x))-f(g(x_0))}{x-x_0}=\Phi(g(x))\cdot\frac{g(x)-g(x_0)}{x-x_0}\qquad(x\neq x_0).$$</p>`, why: R`<p>这是把复合函数的差商写成"两个因子"的形式，右边第二个因子正是 $g$ 的差商，第一个因子是 $\Phi$ 在 $g(x)$ 处的值。</p>` },
          { s: R`<p>令 $x\to x_0$。$g$ 在 $x_0$ 可导故连续，$g(x)\to g(x_0)=u_0$；$\Phi$ 在 $u_0$ 处连续，于是由复合函数的极限（连续函数的复合仍连续）$\Phi(g(x))\to\Phi(u_0)=f'(u_0)$。第二个因子 $\to g'(x_0)$。两者相乘得结论。</p>`, why: R`<p>最后一步用的是"连续函数的复合在该点连续"（lim.cont），而不是一般的复合函数极限法则——后者要求内层函数在去心邻域内不取 $u_0$，恰恰是我们绕开的那个条件。$\Phi$ 在 $u_0$ 连续使得这个条件不再需要。</p>` }
        ],
        remark: R`<p>（1）链式法则可以多层串联：$y=f(u),\ u=g(v),\ v=h(x)$，则 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=f'(u)g'(v)h'(x)$，"由外向里，逐层求导，连乘"。（2）条件是两层<b>各自</b>在对应点可导，缺一不可；但反过来复合可导推不出每层可导（$f(u)=u^2,\ g(x)=|x|$，复合为 $x^2$）。（3）隐函数求导、参数方程求导、对数求导法、反函数求导的公式推导，全部以链式法则为基础。（4）$f$ 可导时 $f(ax+b)$ 的导数是 $af'(ax+b)$，不要漏掉 $a$；$[f(x^2)]'=2xf'(x^2)$，不要写成 $f'(x^2)$——$f'(x^2)$ 是"先求导再代入"，$[f(x^2)]'$ 是"先代入再求导"。</p>`
      },
      {
        kind: 'thm', title: '定理 3：反函数求导法则',
        statement: R`<p>设 $y=f(x)$ 在区间 $I$ 上连续、严格单调，在 $x_0\in I$ 处可导且 $f'(x_0)\neq0$，则其反函数 $x=f^{-1}(y)$ 在 $y_0=f(x_0)$ 处可导，且
$$\big(f^{-1}\big)'(y_0)=\frac{1}{f'(x_0)},\qquad\text{即}\qquad \frac{\mathrm{d}x}{\mathrm{d}y}=\frac{1}{\dfrac{\mathrm{d}y}{\mathrm{d}x}}.$$</p>`,
        intuition: R`<p>$y=f(x)$ 和 $x=f^{-1}(y)$ 是同一条曲线，只是把横纵坐标互换。切线斜率 $\dfrac{\Delta y}{\Delta x}$ 互换后变成 $\dfrac{\Delta x}{\Delta y}$，自然互为倒数。$f'(x_0)\neq0$ 的意义：原曲线切线水平时，换个方向看切线就竖直，反函数在那里不可导（如 $y=x^3$ 在 $0$ 处，反函数 $x=\sqrt[3]{y}$ 在 $0$ 处导数为 $+\infty$）。</p>`,
        steps: [
          { s: R`<p>由"连续严格单调函数的反函数也连续严格单调"（lim.cont / lim.closed 中的结论），$x=f^{-1}(y)$ 在 $y_0$ 处连续且严格单调。</p>`, why: R`<p>这是定理要求 $f$ 在整个区间上连续、严格单调的原因：只有这样反函数才存在，而且反函数的连续性是下面"$\Delta y\to0\Rightarrow\Delta x\to0$"的依据。</p>` },
          { s: R`<p>给 $y_0$ 增量 $\Delta y\neq0$，令 $\Delta x=f^{-1}(y_0+\Delta y)-f^{-1}(y_0)$。由严格单调，$\Delta x\neq0$；由反函数连续，$\Delta y\to0$ 时 $\Delta x\to0$。又 $\Delta y=f(x_0+\Delta x)-f(x_0)$。</p>`, why: R`<p>$\Delta x\neq0$ 很关键——它保证下面可以把 $\dfrac{\Delta y}{\Delta x}$ 放在分母上。这是"严格单调"条件的作用。</p>` },
          { s: R`<p>于是
$$\frac{\Delta x}{\Delta y}=\frac{1}{\dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}}.$$
令 $\Delta y\to0$，则 $\Delta x\to0$ 且 $\Delta x\neq0$，由海涅定理（归结原则），分母 $\to f'(x_0)\neq0$，故 $\dfrac{\Delta x}{\Delta y}\to\dfrac1{f'(x_0)}$。</p>`, why: R`<p>这里是复合函数的极限：外层是 $x$ 的差商（极限为 $f'(x_0)$），内层是 $\Delta x=\Delta x(\Delta y)$，它趋于 $0$ 且不取 $0$，所以复合极限法则适用。$f'(x_0)\neq0$ 保证可以取倒数。</p>` }
        ],
        remark: R`<p>（1）用它可推所有反三角函数与对数的导数：$y=\arcsin x$ 是 $x=\sin y\ (|y|\lt\frac\pi2)$ 的反函数，$\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{1}{\cos y}=\dfrac{1}{\sqrt{1-x^2}}$（取正号是因为 $\cos y>0$）。（2）<b>二阶导数不能简单取倒数</b>：$\dfrac{\mathrm{d}^2x}{\mathrm{d}y^2}=\dfrac{\mathrm{d}}{\mathrm{d}y}\Big(\dfrac{1}{y'}\Big)=\dfrac{\mathrm{d}}{\mathrm{d}x}\Big(\dfrac1{y'}\Big)\cdot\dfrac{\mathrm{d}x}{\mathrm{d}y}=-\dfrac{y''}{(y')^2}\cdot\dfrac1{y'}=-\dfrac{y''}{(y')^3}$。记住推导过程比记公式可靠。（3）这一定理和链式法则合起来，就是参数方程求导公式的全部来源。</p>`
      },
      {
        kind: 'thm', title: '定理 4：隐函数求导法',
        statement: R`<p>设方程 $F(x,y)=0$ 在区间 $I$ 上确定了可导的隐函数 $y=y(x)$，且 $F$ 由可导函数经四则与复合构成。则把 $y$ 看成 $x$ 的函数、<b>对恒等式 $F(x,y(x))\equiv0$ 两边关于 $x$ 求导</b>（凡遇到 $y$ 的函数，按链式法则乘上 $y'$），得到一个关于 $y'$ 的一次方程，解出
$$y'=y'(x,y).$$
若要二阶导数，对所得等式再对 $x$ 求导（此时 $y$ 与 $y'$ 都是 $x$ 的函数），再把 $y'$ 的表达式代入。</p>`,
        intuition: R`<p>隐函数求导没有新定理，它只是"<b>恒等式两边求导仍相等</b>"加上链式法则。关键认识：$F(x,y(x))=0$ 不是一个"方程"，而是在 $I$ 上<b>处处成立的恒等式</b>，恒等的两个函数导函数当然也恒等。</p>`,
        steps: [
          { s: R`<p>令 $G(x)=F(x,y(x))$。由假设 $G(x)=0$ 对一切 $x\in I$ 成立，故 $G'(x)=0$ 对一切 $x\in I$ 成立。</p>`, why: R`<p>常函数的导数为零。这一步看似平凡，却是整个方法的逻辑依据：我们求导的对象是恒等式，不是某一点的等式。</p>` },
          { s: R`<p>$G(x)$ 是由 $x$ 和 $y(x)$ 经四则、复合得到的一元函数，用定理 1、2 逐项求导：凡是 $y$ 的项，如 $y^3$，求导得 $3y^2\cdot y'$；如 $\sin(xy)$，求导得 $\cos(xy)\cdot(y+xy')$。</p>`, why: R`<p>这里"$y$ 是 $x$ 的函数"这一视角是初学者最容易丢的：$(y^3)'$ 不是 $3y^2$，而是 $3y^2y'$——因为 $y^3=(y(x))^3$ 是复合函数。</p>` },
          { s: R`<p>$G'(x)=0$ 是关于 $y'$ 的<b>一次</b>方程（因为每一项至多含一个因子 $y'$），其系数恰为 $F_y(x,y)$。当该系数非零时唯一解出 $y'$。</p>`, why: R`<p>"一次"是由链式法则结构保证的：每次求导只产生一个 $y'$ 因子。系数非零正是隐函数存在定理的条件 $F_y\neq0$，两边互相印证。</p>` }
        ],
        remark: R`<p>（1）解出的 $y'$ 一般同时含 $x$ 和 $y$，求某点的 $y'$ 必须把该点的 $x$、$y$ <b>都</b>代入，而 $y$ 的值要从原方程解出（2017 年第 17 题：$x=1$ 时从 $y^3+3y-4=0$ 解出 $y=1$）。（2）求二阶导：对 $y'=\dfrac{1-x^2}{1+y^2}$ 这样的式子再求导时，右边的 $y$ 仍要乘 $y'$；在驻点处 $y'=0$，含 $y'$ 的项全部消失，计算量骤减——这是隐函数求极值时用二阶导判别的常用技巧。（3）求曲线上某点切线（如 2008 年第 10 题）：隐函数求导后代入点坐标得斜率即可，不必解出 $y'$ 的一般表达式。</p>`
      },
      {
        kind: 'thm', title: '定理 5：参数方程确定的函数的求导公式',
        statement: R`<p>设 $x=\varphi(t),\ y=\psi(t)$，其中 $\varphi,\psi$ 可导，$\varphi$ 严格单调连续且 $\varphi'(t)\neq0$。则由参数方程确定的函数 $y=y(x)$ 可导，且
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\psi'(t)}{\varphi'(t)}.$$
若 $\varphi,\psi$ 二阶可导，则
$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}}{\mathrm{d}t}\Big(\frac{\psi'(t)}{\varphi'(t)}\Big)\cdot\frac{1}{\varphi'(t)}=\frac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{\varphi'(t)^3}.$$</p>`,
        intuition: R`<p>$x,y$ 都随"时间"$t$ 变化，$\varphi'(t),\psi'(t)$ 是水平、竖直方向的速度，切线斜率就是竖直速度比水平速度。二阶导数的要点只有一句话：<b>一阶导数算出来还是 $t$ 的函数，要再"对 $x$"求导，就必须再做一次"对 $t$ 求导、除以 $\varphi'(t)$"</b>。</p>`,
        steps: [
          { s: R`<p>由定义 4，$y=\psi(\varphi^{-1}(x))$。由定理 3，$t=\varphi^{-1}(x)$ 可导且 $\dfrac{\mathrm{d}t}{\mathrm{d}x}=\dfrac{1}{\varphi'(t)}$。</p>`, why: R`<p>这是反函数求导法则的直接应用，条件"严格单调连续、$\varphi'\neq0$"正是定理 3 的条件。</p>` },
          { s: R`<p>由链式法则（定理 2），$\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{\mathrm{d}y}{\mathrm{d}t}\cdot\dfrac{\mathrm{d}t}{\mathrm{d}x}=\psi'(t)\cdot\dfrac1{\varphi'(t)}$。</p>`, why: R`<p>$y$ 通过 $t$ 依赖于 $x$，是两层复合。</p>` },
          { s: R`<p>令 $u(t)=\dfrac{\psi'(t)}{\varphi'(t)}$，它是 $\dfrac{\mathrm{d}y}{\mathrm{d}x}$ 关于 $t$ 的表达式。对 $x$ 再求导，和第 2 步完全一样：
$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}u}{\mathrm{d}x}=\frac{\mathrm{d}u}{\mathrm{d}t}\cdot\frac{\mathrm{d}t}{\mathrm{d}x}=\frac{u'(t)}{\varphi'(t)}.$$
用商法则展开 $u'(t)=\dfrac{\psi''\varphi'-\psi'\varphi''}{(\varphi')^2}$，再除以 $\varphi'$ 即得分母为 $(\varphi')^3$ 的公式。</p>`, why: R`<p>最常见的错误是把二阶导数写成 $\dfrac{\psi''(t)}{\varphi''(t)}$ 或 $\dfrac{u'(t)}{1}$。正确做法是把"对 $x$ 求导"始终翻译为"对 $t$ 求导后除以 $\varphi'(t)$"。做题时一般<b>不背</b>分母 $(\varphi')^3$ 的公式，而是先算出并化简 $u(t)$，再按 $\dfrac{u'(t)}{\varphi'(t)}$ 算（2021 年第 12 题中 $u(t)=2t$，化简后二阶导数一步到位）。</p>` }
        ],
        remark: R`<p>（1）若 $\varphi'(t_0)=0$ 而 $\psi'(t_0)\neq0$，曲线在该点有竖直切线，$\dfrac{\mathrm{d}y}{\mathrm{d}x}$ 不存在但 $\dfrac{\mathrm{d}x}{\mathrm{d}y}=0$；若 $\varphi'(t_0)=\psi'(t_0)=0$（奇点），公式失效，需用其它方法（如消参、用定义）。（2）若 $\varphi$ 或 $\psi$ 本身在某 $t_0$ 处不可导（如含 $|t|$），<b>公式在该点不能用</b>，应消去参数化为分段函数，再在分段点用定义——这是 2023 年第 3 题的核心。（3）公式中的 $t$ 不能换成 $x$：求 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=1}$ 是代 $t=1$，不是代 $x=1$。</p>`
      },
      {
        kind: 'thm', title: '定理 6：对数求导法与幂指函数的导数',
        statement: R`<p>（1）设 $y=y(x)$ 可导且 $y(x)\neq0$，则 $\big(\ln|y|\big)'=\dfrac{y'}{y}$，从而
$$y'=y\cdot\big(\ln|y|\big)'.$$
（2）（幂指函数）设 $u(x)>0$，$u,v$ 可导，则
$$\big(u^v\big)'=u^v\Big(v'\ln u+\frac{vu'}{u}\Big).$$</p>`,
        intuition: R`<p>对数把<b>乘除变加减、乘方变乘法</b>。一个由许多因子连乘连除、开方组成的函数，直接用乘积、商法则会得到一大团；先取对数，它变成一串简单项的和，求导后再乘回 $y$ 即可。幂指函数 $u^v$ 既不是幂函数（指数不是常数）也不是指数函数（底不是常数），两条公式都不能直接用，而取对数后 $v\ln u$ 是普通乘积。</p>`,
        steps: [
          { s: R`<p>若 $y>0$，$\ln|y|=\ln y$，由链式法则 $(\ln y)'=\dfrac1y\cdot y'$。若 $y\lt0$，$\ln|y|=\ln(-y)$，$(\ln(-y))'=\dfrac{1}{-y}\cdot(-y')=\dfrac{y'}{y}$。两种情形统一为 $\big(\ln|y|\big)'=\dfrac{y'}{y}$。</p>`, why: R`<p>加绝对值是为了让 $y\lt0$ 的因子也能取对数，结果和正的情形形式相同，所以实际做题时写 $\ln y$ 即可，不必担心符号（但 $y=0$ 的点要单独讨论）。</p>` },
          { s: R`<p>幂指函数：$u^v=\mathrm{e}^{v\ln u}$，由链式法则与乘积法则
$$\big(\mathrm{e}^{v\ln u}\big)'=\mathrm{e}^{v\ln u}\cdot(v\ln u)'=u^v\Big(v'\ln u+v\cdot\frac{u'}{u}\Big).$$</p>`, why: R`<p>指数化 $u^v=\mathrm{e}^{v\ln u}$ 和"两边取对数"是等价的两种写法。结果有两项：第一项 $u^v\ln u\cdot v'$ 是"把 $u$ 当常数、按指数函数求导"，第二项 $vu^{v-1}u'$ 是"把 $v$ 当常数、按幂函数求导"。<b>幂指函数的导数 = 当指数函数求导 + 当幂函数求导</b>，这个口诀既好记也能自检。</p>` }
        ],
        remark: R`<p>（1）适用信号：多个因子的积商、根式、幂指函数 $x^{\sin x},\ (1+x)^{1/x},\ x^{x}$ 等。（2）对数求导法只是"换一种写法用链式法则"，并没有扩大可导范围：$y$ 取 $0$ 的点需回到原式或用定义讨论。（3）在 $1^\infty$ 型极限（lim.compute）与 $(1+x)^{1/x}$ 的导数计算中会反复用到幂指函数的指数化。</p>`
      },
      {
        kind: 'thm', title: '定理 7：常用函数的 n 阶导数公式',
        statement: R`<p>对一切正整数 $n$：
$$\begin{aligned}
&(x^\mu)^{(n)}=\mu(\mu-1)\cdots(\mu-n+1)\,x^{\mu-n};\qquad (x^m)^{(n)}=0\ (m\in\mathbb N,\ n>m);\\
&(a^x)^{(n)}=a^x(\ln a)^n,\qquad (\mathrm{e}^{ax+b})^{(n)}=a^n\mathrm{e}^{ax+b};\\
&(\sin x)^{(n)}=\sin\Big(x+\frac{n\pi}2\Big),\qquad (\cos x)^{(n)}=\cos\Big(x+\frac{n\pi}2\Big);\\
&[\sin(ax+b)]^{(n)}=a^n\sin\Big(ax+b+\frac{n\pi}2\Big);\\
&\Big(\frac{1}{ax+b}\Big)^{(n)}=\frac{(-1)^n n!\,a^n}{(ax+b)^{n+1}},\qquad [\ln(ax+b)]^{(n)}=\frac{(-1)^{n-1}(n-1)!\,a^n}{(ax+b)^n}.
\end{aligned}$$</p>`,
        intuition: R`<p>这些公式的共同精神是：<b>求一两次导、看出规律、用归纳法确认</b>。$\sin x$ 每求一次导相当于把图像左移 $\frac\pi2$；$\dfrac1{ax+b}$ 每求一次导，指数加一、多一个负号、多一个因子（分母指数）和 $a$。</p>`,
        steps: [
          { s: R`<p><b>$\sin x$.</b> $n=1$：$(\sin x)'=\cos x=\sin\big(x+\frac\pi2\big)$，成立。设 $(\sin x)^{(n)}=\sin\big(x+\frac{n\pi}2\big)$，则
$$(\sin x)^{(n+1)}=\Big[\sin\Big(x+\frac{n\pi}2\Big)\Big]'=\cos\Big(x+\frac{n\pi}2\Big)=\sin\Big(x+\frac{(n+1)\pi}2\Big).$$
由归纳法对一切 $n$ 成立。$\cos x$ 同理。$\sin(ax+b)$ 每求一次导由链式法则多出因子 $a$。</p>`, why: R`<p>把 $\cos$ 写成"$\sin$ 平移 $\frac\pi2$"是为了让每一步形式统一，归纳才能进行。</p>` },
          { s: R`<p><b>$\dfrac{1}{ax+b}$.</b> $n=1$：$\big((ax+b)^{-1}\big)'=-a(ax+b)^{-2}$，成立。设 $n$ 时成立，则
$$\Big[\frac{(-1)^nn!\,a^n}{(ax+b)^{n+1}}\Big]'=(-1)^nn!\,a^n\cdot(-(n+1))a(ax+b)^{-n-2}=\frac{(-1)^{n+1}(n+1)!\,a^{n+1}}{(ax+b)^{n+2}}.$$</p>`, why: R`<p>每次求导：幂指数 $-(n+1)$ 拿下来贡献一个负号和因子 $(n+1)$，链式法则贡献 $a$，恰好让 $(-1)^n n! a^n$ 升级为 $(-1)^{n+1}(n+1)!a^{n+1}$。</p>` },
          { s: R`<p><b>$\ln(ax+b)$.</b> 一阶导数是 $\dfrac{a}{ax+b}$，再求 $n-1$ 阶导用上一条：$a\cdot\dfrac{(-1)^{n-1}(n-1)!\,a^{n-1}}{(ax+b)^{n}}$。幂函数与指数函数的公式由归纳法同理可得。</p>`, why: R`<p>"先求一阶，再套已知公式"是减少归纳工作量的常用手法；注意 $\ln$ 的公式是 $(n-1)!$、$(-1)^{n-1}$，比 $\frac1{ax+b}$ 的公式"低一阶"。</p>` }
        ],
        remark: R`<p>这些公式是"分解法"求 $n$ 阶导数的原材料：有理函数拆部分分式后每项套 $\dfrac1{ax+b}$ 的公式；$\sin^2x,\ \sin x\cos 3x$ 等用倍角、积化和差化为一次式后套 $\sin(ax+b)$ 的公式。此外 $\mathrm{e}^{x}\sin x$ 型可用"$(\mathrm{e}^x\sin x)'=\sqrt2\,\mathrm{e}^x\sin(x+\frac\pi4)$"归纳得 $(\mathrm{e}^x\sin x)^{(n)}=2^{n/2}\mathrm{e}^x\sin(x+\frac{n\pi}4)$。</p>`
      },
      {
        kind: 'thm', title: '定理 8：莱布尼茨公式（乘积的 n 阶导数）',
        statement: R`<p>设 $u,v$ 都 $n$ 阶可导，则 $uv$ 也 $n$ 阶可导，且
$$(uv)^{(n)}=\sum_{k=0}^{n}\mathrm C_n^k\,u^{(n-k)}v^{(k)}=u^{(n)}v+nu^{(n-1)}v'+\frac{n(n-1)}{2!}u^{(n-2)}v''+\cdots+uv^{(n)},$$
其中 $\mathrm C_n^k=\dfrac{n!}{k!(n-k)!}$。</p>`,
        intuition: R`<p>和二项式定理 $(a+b)^n=\sum\mathrm C_n^ka^{n-k}b^k$ 形式完全一样，把"乘方"换成"求导阶数"。原因：每求一次导，由乘积法则"要么给 $u$ 加一撇，要么给 $v$ 加一撇"，$n$ 次求导就是 $n$ 次二选一，其中恰好 $k$ 次选 $v$ 的路径有 $\mathrm C_n^k$ 条，每条都得到 $u^{(n-k)}v^{(k)}$。</p>`,
        steps: [
          { s: R`<p>$n=1$ 时公式即乘积法则 $(uv)'=u'v+uv'$，成立。</p>`, why: R`<p>归纳奠基。</p>` },
          { s: R`<p>设对 $n$ 成立。两边再求一次导（每一项用乘积法则）：
$$(uv)^{(n+1)}=\sum_{k=0}^{n}\mathrm C_n^k\Big[u^{(n+1-k)}v^{(k)}+u^{(n-k)}v^{(k+1)}\Big].$$</p>`, why: R`<p>$u^{(n-k)}v^{(k)}$ 求导就是"给 $u$ 加一阶"或"给 $v$ 加一阶"两项之和。</p>` },
          { s: R`<p>第二个和式换指标 $k+1=j$，变为 $\sum\limits_{j=1}^{n+1}\mathrm C_n^{j-1}u^{(n+1-j)}v^{(j)}$。与第一个和式按 $u^{(n+1-k)}v^{(k)}$ 合并同类项：
$$(uv)^{(n+1)}=u^{(n+1)}v+\sum_{k=1}^{n}\big(\mathrm C_n^k+\mathrm C_n^{k-1}\big)u^{(n+1-k)}v^{(k)}+uv^{(n+1)}.$$</p>`, why: R`<p>把两个和式对齐，使同一个 $u^{(n+1-k)}v^{(k)}$ 的系数放到一起，这和证明二项式定理时的做法一模一样。</p>` },
          { s: R`<p>由组合恒等式 $\mathrm C_n^k+\mathrm C_n^{k-1}=\mathrm C_{n+1}^k$（杨辉三角），以及 $\mathrm C_{n+1}^0=\mathrm C_{n+1}^{n+1}=1$，上式恰为 $\sum\limits_{k=0}^{n+1}\mathrm C_{n+1}^ku^{(n+1-k)}v^{(k)}$。归纳完成。</p>`, why: R`<p>组合恒等式可直接验证：$\dfrac{n!}{k!(n-k)!}+\dfrac{n!}{(k-1)!(n-k+1)!}=\dfrac{n!\,[(n-k+1)+k]}{k!(n-k+1)!}=\dfrac{(n+1)!}{k!(n+1-k)!}$。</p>` }
        ],
        remark: R`<p>（1）<b>使用要领：让一个因子是低次多项式</b>（如 $x^2$），它求三阶以上导数为 $0$，求和只剩两三项。例如 $(x^2\mathrm{e}^{2x})^{(20)}$ 只有 $k=0,1,2$ 三项。（2）若两个因子都没有"求几次导就归零"的性质（如 $\mathrm{e}^x\sin x$），莱布尼茨公式得到的是一个难以化简的和，此时应换方法（归纳或复数/三角化简）。（3）求 $f^{(n)}(0)$ 的另一条路是泰勒展开比较系数（见 diff.taylor），当 $f$ 的展开式容易写出时往往比莱布尼茨更快。</p>`
      },
      {
        kind: 'thm', title: '定理 9：导数极限定理（分段点处求导的捷径）',
        statement: R`<p>设 $f$ 在 $x_0$ 处连续，在 $x_0$ 的某去心邻域内可导，且 $\lim\limits_{x\to x_0}f'(x)=A$（有限数）存在，则 $f'(x_0)$ 存在且 $f'(x_0)=A$。单侧版本：若 $f$ 在 $x_0$ 处右连续、在 $(x_0,x_0+\delta)$ 内可导且 $\lim\limits_{x\to x_0^+}f'(x)=A$，则 $f'_+(x_0)=A$；左侧同理。</p>`,
        intuition: R`<p>分段函数在分段点两侧各有一个解析式，段内导数可以用法则算出来；这个定理说：<b>只要函数在分段点连续，两侧导函数的极限就是两侧的单侧导数</b>，不必再写差商。几何上，切线斜率的极限就是该点的切线斜率——前提是曲线在那里不断开。</p>`,
        steps: [
          { s: R`<p>任取 $x$ 在去心邻域内（不妨 $x>x_0$）。$f$ 在 $[x_0,x]$ 上连续（$x_0$ 处连续由假设，$(x_0,x]$ 上可导故连续），在 $(x_0,x)$ 内可导，由拉格朗日中值定理（diff.mvt）存在 $\xi_x\in(x_0,x)$ 使
$$\frac{f(x)-f(x_0)}{x-x_0}=f'(\xi_x).$$</p>`, why: R`<p>差商被"替换"为某一点的导数值，这正是中值定理的用途。注意 $f$ 在 $x_0$ 处的连续性是闭区间上满足定理条件所必需的。</p>` },
          { s: R`<p>当 $x\to x_0^+$ 时，$x_0\lt\xi_x\lt x$ 故 $\xi_x\to x_0^+$ 且 $\xi_x\neq x_0$。由 $\lim\limits_{x\to x_0}f'(x)=A$ 及归结原则，$f'(\xi_x)\to A$。故 $f'_+(x_0)=A$。同理 $f'_-(x_0)=A$，所以 $f'(x_0)=A$。</p>`, why: R`<p>$\xi_x$ 随 $x$ 变化、被夹在 $x_0$ 与 $x$ 之间、永不等于 $x_0$，这三点保证可以用复合函数极限（海涅定理）得到 $f'(\xi_x)\to A$。</p>` }
        ],
        remark: R`<p>（1）<b>逆命题不成立</b>：$f'(x_0)$ 存在不代表 $\lim\limits_{x\to x_0}f'(x)$ 存在。标准反例 $f(x)=x^2\sin\frac1x\ (x\neq0),\ f(0)=0$：$f'(0)=\lim\limits_{x\to0}x\sin\frac1x=0$，但 $f'(x)=2x\sin\frac1x-\cos\frac1x$ 在 $x\to0$ 时振荡无极限。所以当"导函数极限不存在"时<b>不能</b>断言不可导，必须回到定义。（2）若 $\lim\limits_{x\to x_0}f'(x)=\infty$，结论变为 $f'(x_0)=\infty$（不可导，切线竖直），证明相同。（3）推论：<b>导函数不可能有第一类间断点</b>——若 $f'$ 在 $x_0$ 两侧极限存在但不等，由单侧版本得 $f'_-(x_0)\neq f'_+(x_0)$，与 $f'(x_0)$ 存在矛盾；若两侧极限相等但不等于 $f'(x_0)$，与本定理矛盾。这就是 2023 年第 3 题选项 B、D 的逻辑背景：$f'(0)$ 存在而 $f'$ 在 $0$ 处"跳跃"是不可能的，但 $f'$ 在 $0$ 处振荡型间断是可能的。</p>`
      },
      {
        kind: 'text', title: '补充：奇偶函数与周期函数的导数',
        html: R`<p><b>命题.</b> 可导的偶函数的导函数是奇函数；可导的奇函数的导函数是偶函数；可导的周期函数的导函数是同周期的周期函数。</p>
<p><b>证明.</b> 设 $f$ 偶，$f(-x)=f(x)$ 对一切 $x$ 成立，是恒等式，两边对 $x$ 求导（左边用链式法则）：$-f'(-x)=f'(x)$，即 $f'(-x)=-f'(x)$，$f'$ 为奇函数。奇函数、周期函数同理（$f(x+T)=f(x)$ 求导得 $f'(x+T)=f'(x)$）。$\square$</p>
<p><b>推论.</b> 若 $f$ 是偶函数且 $n$ 为奇数，$f^{(n)}$ 是奇函数，于是 $f^{(n)}(0)=0$（奇函数在 $0$ 有定义则必为 $0$：$g(0)=-g(0)$）。2017 年第 9 题 $f(x)=\dfrac1{1+x^2}$ 求 $f'''(0)$，一眼看出答案是 $0$，根本不必计算。</p>
<p>这类"恒等式两边求导"的思想和隐函数求导是一回事，考研常用它处理抽象函数：由 $f(x+y)=f(x)f(y)$ 或 $f(2x)=2f(x)$ 之类的函数方程推出导数满足的关系。</p>`
      },
      {
        kind: 'example', title: '例题组 A：链式法则、反函数、隐函数',
        html: R`<p><b>例 A1.</b> 求 $y=\ln\big(x+\sqrt{x^2+1}\big)$ 的导数。</p>
<p><b>怎么想：</b>最外层是 $\ln$，里面是"$x$ 加一个根式"，根式里面又是 $x^2+1$，三层复合，由外向里逐层剥。</p>
$$y'=\frac{1}{x+\sqrt{x^2+1}}\cdot\Big(1+\frac{2x}{2\sqrt{x^2+1}}\Big)=\frac{1}{x+\sqrt{x^2+1}}\cdot\frac{\sqrt{x^2+1}+x}{\sqrt{x^2+1}}=\frac{1}{\sqrt{x^2+1}}.$$
<p><b>告诉我们什么：</b>这个函数就是 $\operatorname{arsinh}x$，它的导数 $\dfrac1{\sqrt{x^2+1}}$ 值得记住（积分表里 $\int\frac{\mathrm{d}x}{\sqrt{x^2+1}}$ 也是它）。2020 年第 10 题的 $y=\ln\big(t+\sqrt{t^2+1}\big)$ 正是这个函数，记住结论可省一半时间。</p>
<p><b>例 A2（对数求导法）.</b> 求 $y=x^{\sin x}\ (x>0)$ 与 $y=\sqrt{\dfrac{(x-1)(x-2)}{(x-3)(x-4)}}$ 的导数。</p>
<p>第一个是幂指函数。取对数 $\ln y=\sin x\ln x$，两边求导：$\dfrac{y'}{y}=\cos x\ln x+\dfrac{\sin x}{x}$，故 $y'=x^{\sin x}\Big(\cos x\ln x+\dfrac{\sin x}{x}\Big)$。用口诀检验：当指数函数求导得 $x^{\sin x}\ln x\cdot\cos x$，当幂函数求导得 $\sin x\cdot x^{\sin x-1}$，相加一致。</p>
<p>第二个是四个因子的积商加开方。取对数：$\ln y=\frac12\big[\ln(x-1)+\ln(x-2)-\ln(x-3)-\ln(x-4)\big]$，求导：
$$y'=\frac12\sqrt{\frac{(x-1)(x-2)}{(x-3)(x-4)}}\Big(\frac1{x-1}+\frac1{x-2}-\frac1{x-3}-\frac1{x-4}\Big).$$</p>
<p>（对 $x\lt1$ 等 $y>0$ 但某些因子为负的区间，由定理 6 的 $\ln|y|$ 版本，结果形式不变。）</p>
<p><b>例 A3（反函数的二阶导数）.</b> 设 $y=x+\mathrm{e}^x$，求其反函数 $x=x(y)$ 的二阶导数 $\dfrac{\mathrm{d}^2x}{\mathrm{d}y^2}$ 在 $x=0$ 对应点处的值。</p>
<p><b>怎么想：</b>$y'=1+\mathrm{e}^x>0$，严格递增，反函数存在。一阶 $\dfrac{\mathrm{d}x}{\mathrm{d}y}=\dfrac1{1+\mathrm{e}^x}$，它是 $x$ 的函数，要对 $y$ 求导就得再乘一次 $\dfrac{\mathrm{d}x}{\mathrm{d}y}$：
$$\frac{\mathrm{d}^2x}{\mathrm{d}y^2}=\frac{\mathrm{d}}{\mathrm{d}x}\Big(\frac1{1+\mathrm{e}^x}\Big)\cdot\frac{\mathrm{d}x}{\mathrm{d}y}=-\frac{\mathrm{e}^x}{(1+\mathrm{e}^x)^2}\cdot\frac{1}{1+\mathrm{e}^x}=-\frac{\mathrm{e}^x}{(1+\mathrm{e}^x)^3}.$$</p>
<p>$x=0$ 时值为 $-\dfrac18$。用公式 $-\dfrac{y''}{(y')^3}=-\dfrac{\mathrm{e}^x}{(1+\mathrm{e}^x)^3}$ 核对一致。</p>
<p><b>例 A4（隐函数的二阶导数）.</b> 设 $y=y(x)$ 由 $\mathrm{e}^y+xy=\mathrm{e}$ 确定，求 $y''(0)$。</p>
<p><b>第一步：找点.</b> $x=0$ 代入得 $\mathrm{e}^y=\mathrm{e}$，$y(0)=1$。（求一点处的导数值，先把这一点的 $y$ 解出来，这一步最容易忘。）</p>
<p><b>第二步：求一阶.</b> 两边对 $x$ 求导：$\mathrm{e}^yy'+y+xy'=0$。代 $x=0,y=1$：$\mathrm{e}y'(0)+1=0$，$y'(0)=-\dfrac1{\mathrm{e}}$。</p>
<p><b>第三步：求二阶.</b> 对 $\mathrm{e}^yy'+y+xy'=0$ 再求导（注意 $\mathrm{e}^yy'$ 是乘积，$\mathrm{e}^y$ 又是复合）：$\mathrm{e}^y(y')^2+\mathrm{e}^yy''+y'+y'+xy''=0$。代 $x=0,\ y=1,\ y'=-\frac1{\mathrm{e}}$：
$$\mathrm{e}\cdot\frac1{\mathrm{e}^2}+\mathrm{e}\,y''(0)-\frac2{\mathrm{e}}=0\ \Longrightarrow\ y''(0)=\frac1{\mathrm{e}^2}.$$</p>
<p><b>告诉我们什么：</b>求某点二阶导数时，不必解出 $y'$ 的一般表达式，直接"求导—代值—求导—代值"更省力；但顺序必须是先求导、后代值，绝不能先把 $x=0$ 代进去再求导。</p>`
      },
      {
        kind: 'example', title: '例题组 B：参数方程、高阶导数、分段函数',
        html: R`<p><b>例 B1（摆线）.</b> $x=a(t-\sin t),\ y=a(1-\cos t)$，求 $\dfrac{\mathrm{d}y}{\mathrm{d}x}$ 与 $\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}$。</p>
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{a\sin t}{a(1-\cos t)}=\frac{2\sin\frac t2\cos\frac t2}{2\sin^2\frac t2}=\cot\frac t2,$$
$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}}{\mathrm{d}t}\Big(\cot\frac t2\Big)\cdot\frac{1}{a(1-\cos t)}=-\frac{1}{2\sin^2\frac t2}\cdot\frac{1}{2a\sin^2\frac t2}=-\frac{1}{a(1-\cos t)^2}.$$
<p><b>告诉我们什么：</b>先把一阶导数化到最简（这里用半角公式化成 $\cot\frac t2$），二阶导数才好算；二阶导数恒负，说明摆线的每一拱都是凸的（上凸），与图形一致（diff.convex）。</p>
<p><b>例 B2（部分分式求 n 阶导数）.</b> 求 $y=\dfrac1{x^2-3x+2}$ 的 $y^{(n)}$。</p>
<p><b>怎么想：</b>分母可分解，先拆成两个 $\dfrac1{ax+b}$ 之差再套定理 7。$y=\dfrac1{(x-1)(x-2)}=\dfrac1{x-2}-\dfrac1{x-1}$，于是
$$y^{(n)}=(-1)^nn!\Big[\frac1{(x-2)^{n+1}}-\frac1{(x-1)^{n+1}}\Big].$$</p>
<p><b>例 B3（降幂求 n 阶导数）.</b> 求 $y=\sin^2x$ 的 $y^{(n)}\ (n\ge1)$。</p>
<p>$\sin^2x=\dfrac{1-\cos2x}{2}$，常数项求导为零，故 $y^{(n)}=-\dfrac12(\cos2x)^{(n)}=-\dfrac12\cdot2^n\cos\Big(2x+\dfrac{n\pi}2\Big)=-2^{n-1}\cos\Big(2x+\dfrac{n\pi}2\Big)$。</p>
<p><b>例 B4（莱布尼茨公式）.</b> 设 $y=x^2\mathrm{e}^{2x}$，求 $y^{(20)}(0)$。</p>
<p><b>怎么想：</b>$u=\mathrm{e}^{2x}$ 任意阶导数好求（$u^{(k)}=2^k\mathrm{e}^{2x}$），$v=x^2$ 三阶以上导数为 $0$，所以莱布尼茨公式只剩三项：
$$y^{(20)}=\mathrm C_{20}^0u^{(20)}x^2+\mathrm C_{20}^1u^{(19)}\cdot2x+\mathrm C_{20}^2u^{(18)}\cdot2 .$$</p>
<p>代 $x=0$，前两项含 $x$ 因子为零，只剩 $\mathrm C_{20}^2\cdot2^{18}\cdot2=190\cdot2^{19}=95\cdot2^{20}$。</p>
<p><b>告诉我们什么：</b>求 $f^{(n)}(0)$ 时，含 $x$ 的项代入后为零，只需找"$x$ 的次数恰好被导干净"的那一项——这和泰勒展开比较系数的想法殊途同归：$x^2\mathrm{e}^{2x}=\sum\dfrac{2^k}{k!}x^{k+2}$，$x^{20}$ 的系数是 $\dfrac{2^{18}}{18!}$，乘 $20!$ 得 $20\cdot19\cdot2^{18}$，与上面一致。</p>
<p><b>例 B5（分段点定参数）.</b> 设 $f(x)=\begin{cases}x^2,&x\le1,\\ ax+b,&x>1\end{cases}$ 在 $x=1$ 处可导，求 $a,b$。</p>
<p><b>怎么想：</b>可导必连续，先用连续定方程；再用左右导数相等定第二个方程。连续：$a+b=1$。左导数 $f'_-(1)=2$（段内求导 $2x$ 再取极限，依据定理 9 单侧版本），右导数 $f'_+(1)=a$。故 $a=2,\ b=-1$。</p>
<p><b>例 B6（公式失效时回到定义）.</b> $f(x)=\begin{cases}x^2\sin\frac1x,&x\neq0,\\ 0,&x=0.\end{cases}$ 讨论 $f'(0)$ 与 $f'$ 在 $0$ 处的连续性。</p>
<p>$x\neq0$ 时按法则 $f'(x)=2x\sin\frac1x-\cos\frac1x$。$x=0$ 时按定义 $f'(0)=\lim\limits_{x\to0}\dfrac{x^2\sin\frac1x}{x}=\lim\limits_{x\to0}x\sin\frac1x=0$（有界乘无穷小）。但 $\lim\limits_{x\to0}f'(x)$ 不存在（$\cos\frac1x$ 振荡），所以 $f'$ 在 $0$ 处不连续。这是"可导但导函数不连续"的标准反例，也说明定理 9 只是充分条件。</p>
<p><b>例 B7（$x|x|$ 的光滑阶梯）.</b> $f(x)=x|x|$：$f'(x)=2|x|$（$0$ 处用定义），连续；$f''(0)$：右导数 $\lim\limits_{x\to0^+}\dfrac{2x-0}{x}=2$，左导数 $\lim\limits_{x\to0^-}\dfrac{-2x-0}{x}=-2$，不等，故 $f''(0)$ 不存在。结论：$f'$ 连续、$f''(0)$ 不存在——与 2023 年第 3 题的答案结构完全一样。</p>
<svg viewBox="0 0 420 170" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <g stroke="currentColor" fill="none" stroke-width="1">
    <line x1="20" y1="85" x2="200" y2="85"/>
    <line x1="110" y1="160" x2="110" y2="10"/>
    <line x1="230" y1="140" x2="410" y2="140"/>
    <line x1="320" y1="160" x2="320" y2="10"/>
  </g>
  <g stroke="currentColor" fill="none" stroke-width="1.8">
    <path d="M 40 150 Q 110 85 180 20"/>
    <path d="M 40 150 C 75 115 100 90 110 85 C 120 80 145 55 180 20"/>
    <polyline points="250,60 320,140 390,60"/>
  </g>
  <g fill="currentColor" font-size="12" stroke="none">
    <text x="20" y="22">y = x|x|</text>
    <text x="232" y="22">y' = 2|x|</text>
    <text x="190" y="98">x</text>
    <text x="400" y="153">x</text>
    <text x="300" y="155">0</text>
    <text x="125" y="80">0</text>
    <text x="330" y="100" font-size="11">尖角：y'' (0) 不存在</text>
  </g>
</svg>
<p style="text-align:center"><small>左：$y=x|x|$ 在原点光滑过渡（切线水平）；右：其导函数 $2|x|$ 在原点有尖角，所以二阶导数在 $0$ 处不存在。</small></p>`
      },
      {
        kind: 'pitfall', title: '常见误区',
        html: R`<ul>
<li><b>$f'(x^2)$ 与 $[f(x^2)]'$ 混淆。</b>前者是导函数在 $x^2$ 处的值，后者是复合函数的导数 $2xf'(x^2)$。同样，$f'(2x)\neq[f(2x)]'=2f'(2x)$。看到"$f'(\cdots)$"先问：撇在括号外还是括号里？</li>
<li><b>隐函数求导漏乘 $y'$。</b>$(y^3)'=3y^2y'$，$(\sin y)'=\cos y\cdot y'$，$(xy)'=y+xy'$。根源是忘了 $y$ 是 $x$ 的函数。</li>
<li><b>先代值后求导。</b>求 $y''(0)$ 时把 $x=0$ 代入方程再求导，得到的是常数的导数 $0$，毫无意义。必须"对恒等式求导—再代值"。</li>
<li><b>参数方程二阶导数写成 $\dfrac{\psi''(t)}{\varphi''(t)}$ 或"对 $t$ 求导就完事"。</b>正确做法：$\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}=\dfrac{\mathrm{d}}{\mathrm{d}t}\Big(\dfrac{\mathrm{d}y}{\mathrm{d}x}\Big)\Big/\varphi'(t)$，分母是 $\varphi'(t)$ 而不是 $\varphi''(t)$，也不能省。</li>
<li><b>反函数二阶导数取倒数。</b>$\dfrac{\mathrm{d}^2x}{\mathrm{d}y^2}\neq\dfrac1{y''}$，正确的是 $-\dfrac{y''}{(y')^3}$。只有一阶导数互为倒数。</li>
<li><b>分段点处直接用公式。</b>分段点处的 $f'(x_0)$ 要么用定义算左右导数，要么用定理 9（必须先验证 $f$ 在 $x_0$ 连续）。"把两段的导函数公式各代 $x_0$ 比较"只有在 $f$ 连续且两侧导函数极限都存在时才合法。</li>
<li><b>"导函数极限不存在"就断言"不可导"。</b>$x^2\sin\frac1x$ 是反例。定理 9 不是充要的。</li>
<li><b>认为 $f'(x_0)$ 存在就能谈 $f''(x_0)$。</b>二阶导数要求 $f'$ 在 $x_0$ 附近处处存在。例如只知道 $f$ 在一点可导、其他地方不可导，$f''(x_0)$ 无从谈起。</li>
<li><b>幂指函数当成幂函数或指数函数。</b>$(x^x)'\neq x\cdot x^{x-1}$，也 $\neq x^x\ln x$，而是两者之和 $x^x(\ln x+1)$。</li>
<li><b>$n$ 阶导数公式漏掉链式因子 $a^n$ 或 $\ln$ 公式的 $(n-1)!$。</b>$[\ln(1+2x)]^{(n)}=\dfrac{(-1)^{n-1}(n-1)!\,2^n}{(1+2x)^n}$，三个要素一个都不能少。</li>
<li><b>$\dfrac{\mathrm{d}y}{\mathrm{d}x}$ 当作分数随意约分。</b>链式法则的"约分"只是记忆法；在证明里 $\Delta u$ 可能为 $0$，必须用辅助函数 $\Phi$ 处理。</li>
</ul>`
      },
      {
        kind: 'method', title: '解题方法与题型识别',
        html: R`<p><b>一、看到……想到……</b></p>
<ul>
<li>看到<b>多层嵌套</b>（$\ln\sqrt{\cdots}$、$\mathrm{e}^{\sin^2 x}$、$f(\varphi(x))$）→ 链式法则，由外到里逐层求导、连乘；写清每一层是什么。</li>
<li>看到<b>连乘连除、根式、幂指函数</b> $u^v$ → 对数求导法；幂指函数也可直接指数化 $\mathrm{e}^{v\ln u}$。</li>
<li>看到"<b>由方程 $F(x,y)=0$ 确定</b>" → 隐函数求导：求导—代点—解 $y'$；求某点值先从方程解出该点的 $y$。</li>
<li>看到"<b>由参数方程确定</b>" → $\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{y'(t)}{x'(t)}$，先化简，再 $\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}=\dfrac{(\mathrm{d}y/\mathrm{d}x)'_t}{x'(t)}$；若 $x(t)$ 或 $y(t)$ 含绝对值、在某点不可导 → 消参化分段函数，分段点用定义。</li>
<li>看到"<b>反函数的导数</b>" → 一阶取倒数；二阶 $-\dfrac{y''}{(y')^3}$（或现场推导）。</li>
<li>看到"<b>求 $y^{(n)}$</b>" → ① 有理函数：拆部分分式套 $\dfrac1{ax+b}$ 公式；② 三角函数乘积或幂：降幂、积化和差化为一次式；③ 多项式 × 指数/三角：莱布尼茨公式（让多项式当 $v$）；④ 结构不明显：求 $y',y'',y'''$ 找规律再归纳。</li>
<li>看到"<b>求 $f^{(n)}(0)$</b>"（一点处高阶导数）→ 优先考虑泰勒展开比较系数 $f^{(n)}(0)=n!\,a_n$（diff.taylor），或奇偶性（偶函数的奇数阶导数在 $0$ 处为 $0$），或莱布尼茨只取不含 $x$ 的项。</li>
<li>看到"<b>分段函数在分段点可导 / 导函数连续 / 二阶可导</b>" → 逐级检验：连续（左右极限 $=$ 函数值）→ 左右导数（定义或定理 9）→ 导函数在该点连续（两侧 $f'$ 极限 $=f'(x_0)$）→ 二阶：对 $f'$ 再做一遍左右导数。</li>
<li>看到"<b>已知 $f'(x_0)$ 求含 $n$ 个因子乘积的导数</b>"，且某因子在 $x_0$ 为零 → 乘积法则展开后只剩一项。</li>
<li>看到<b>抽象函数方程</b> $f(x+y)=\cdots$、$f$ 为偶函数等 → 对恒等式两边求导。</li>
</ul>
<p><b>二、求导的"施工顺序"</b>：（1）先判断函数类型（显式、隐式、参数、分段、幂指）；（2）显式函数从最外层开始剥，每剥一层写一个因子；（3）求出后<b>先化简再求二阶</b>；（4）求某点的值时最后代入，代入前检查该点是否是分段点或公式失效点。</p>
<p><b>三、核对手段</b>：乘积法则结果应关于 $u,v$ 对称；链式法则漏项常表现为"少了一个常数因子"；参数方程题命题人通常设计成一阶导可约分，如果算得极乱，多半是前面错了。</p>`
      },
      {
        kind: 'example', title: '近十年真题精讲（一）：参数方程与分段函数',
        html: R`<p><span class="qref" data-q="2021-12">2021 年第 12 题</span>　设函数 $y=y(x)$ 由参数方程 $\begin{cases}x=2\mathrm{e}^t+t+1,\\ y=4(t-1)\mathrm{e}^t+t^2\end{cases}$ 所确定，则 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=0}=$ ______．</p>
<p><b>这题考什么：</b>定理 5，参数方程确定的函数的二阶导数，填空 5 分，是本考点最稳定的出题形式。</p>
<p><b>从题面看到什么：</b>"由参数方程确定"四个字直接指向 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{y'(t)}{x'(t)}$；问的是 $t=0$ 处的二阶导数，所以要先得到二阶导数关于 $t$ 的表达式再代 $t=0$，不能代 $x=0$。</p>
<p><b>第一步：求 $x'(t),y'(t)$。</b>$x'(t)=2\mathrm{e}^t+1$（恒正，$x(t)$ 严格递增，定义 4 的条件满足）。$y'(t)$ 用乘积法则：$y'(t)=4\mathrm{e}^t+4(t-1)\mathrm{e}^t+2t=4t\mathrm{e}^t+2t=2t\big(2\mathrm{e}^t+1\big)$。</p>
<p><b>第二步：一阶导数并化简。</b>$\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{2t(2\mathrm{e}^t+1)}{2\mathrm{e}^t+1}=2t$。命题人有意让分子含有 $x'(t)$ 这个因子——这是"先化简再求二阶"的信号。</p>
<p><b>第三步：二阶导数。</b>$2t$ 仍是 $t$ 的函数，对 $x$ 求导 $=$ 对 $t$ 求导再除以 $x'(t)$（定理 5 第 3 步）：
$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{(2t)'_t}{x'(t)}=\frac{2}{2\mathrm{e}^t+1}.$$</p>
<p><b>第四步：代值。</b>$t=0$：$\dfrac{2}{2+1}=\dfrac23$。</p>
<p><b>这道题告诉我们什么：</b>二阶导数就是"再做一次同样的事"；一阶导数化到最简是关键一步；如果有人写成 $\dfrac{y''(t)}{x''(t)}=\dfrac{(4t\mathrm{e}^t+4\mathrm{e}^t+2)}{2\mathrm{e}^t}$ 就全错了。</p>
<hr/>
<p><span class="qref" data-q="2020-10">2020 年第 10 题</span>　设 $\begin{cases}x=\sqrt{t^2+1},\\ y=\ln\left(t+\sqrt{t^2+1}\right),\end{cases}$ 则 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=1}=$ ______.</p>
<p><b>这题考什么：</b>同样是定理 5，但叠加了复合函数求导（例 A1 的函数），难在一阶导数的计算与化简。</p>
<p><b>第一步：</b>$x'(t)=\dfrac{t}{\sqrt{t^2+1}}$（链式法则：$\dfrac{1}{2\sqrt{t^2+1}}\cdot2t$）。$y'(t)=\dfrac1{\sqrt{t^2+1}}$（例 A1 的结论）。注意 $t=1$ 附近 $x'(t)>0$，公式可用。</p>
<p><b>第二步：</b>$\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{1/\sqrt{t^2+1}}{t/\sqrt{t^2+1}}=\dfrac1t$。再次出现"可约分"，一阶导数极简。</p>
<p><b>第三步：</b>$\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}=\dfrac{(1/t)'_t}{x'(t)}=\dfrac{-1/t^2}{t/\sqrt{t^2+1}}=-\dfrac{\sqrt{t^2+1}}{t^3}$。</p>
<p><b>第四步：</b>$t=1$：$-\dfrac{\sqrt2}{1}=-\sqrt2$。</p>
<p><b>告诉我们什么：</b>$\ln\big(t+\sqrt{t^2+1}\big)$ 的导数是基本功，记住它能把本题变成 2021 年那题的难度；两年连续考同一公式，说明参数方程二阶导数是"必会"级别。</p>
<hr/>
<p><span class="qref" data-q="2023-3">2023 年第 3 题</span>　设函数 $y=f(x)$ 由 $\begin{cases}x=2t+|t|,\\ y=|t|\sin t\end{cases}$ 确定，则（　　）</p>
<p>(A) $f(x)$ 连续，$f'(0)$ 不存在　(B) $f'(0)$ 存在，$f'(x)$ 在 $x=0$ 处不连续　(C) $f'(x)$ 连续，$f''(0)$ 不存在　(D) $f''(0)$ 存在，$f''(x)$ 在 $x=0$ 处不连续</p>
<p><b>这题考什么：</b>表面是参数方程，实际考的是定义 2 的"光滑阶梯"——连续、可导、导函数连续、二阶可导——在分段点 $x=0$ 处逐级检验（定义 5、定理 9）。</p>
<p><b>从题面看到什么：</b>$x=2t+|t|$ 在 $t=0$ 处不可导，定理 5 的条件"$\varphi$ 可导"在最关键的点不成立，公式 $\dfrac{y'(t)}{x'(t)}$ 在 $t=0$ 失效（定理 5 注记（2））。所以应当<b>消去参数</b>：按 $t$ 的符号去绝对值，把 $y$ 写成 $x$ 的分段函数。</p>
<p><b>第一步：消参。</b>$t\ge0$ 时 $x=3t\ge0$，$y=t\sin t=\dfrac x3\sin\dfrac x3$；$t\lt0$ 时 $x=t\lt0$，$y=-t\sin t=-x\sin x$。又 $x(t)$ 严格递增，$t$ 与 $x$ 一一对应，所以
$$f(x)=\begin{cases}\dfrac x3\sin\dfrac x3,&x\ge0,\\[4pt]-x\sin x,&x\lt0.\end{cases}$$</p>
<p><b>第二步：$f'(0)$。</b>$f(0)=0$，两侧 $f(x)\to0$，连续。用定义：$f'_+(0)=\lim\limits_{x\to0^+}\dfrac{\frac x3\sin\frac x3}{x}=\lim\limits_{x\to0^+}\dfrac13\sin\dfrac x3=0$；$f'_-(0)=\lim\limits_{x\to0^-}\dfrac{-x\sin x}{x}=0$。故 $f'(0)=0$，(A) 错。</p>
<p><b>第三步：$f'$ 在 $0$ 处是否连续。</b>段内用法则：$x>0$ 时 $f'(x)=\dfrac13\sin\dfrac x3+\dfrac x9\cos\dfrac x3$，$x\to0^+$ 时 $\to0$；$x\lt0$ 时 $f'(x)=-\sin x-x\cos x$，$x\to0^-$ 时 $\to0$。两侧极限都等于 $f'(0)=0$，$f'$ 连续，(B) 错。（这一步也可直接由定理 9 得到 $f'(0)=0$，与第二步互相印证。）</p>
<p><b>第四步：$f''(0)$。</b>对 $f'$ 在 $0$ 处求左右导数（定义，或用定理 9 单侧版本对 $f'$ 用）：$x>0$ 时 $f''(x)=\dfrac29\cos\dfrac x3-\dfrac{x}{27}\sin\dfrac x3\to\dfrac29$；$x\lt0$ 时 $f''(x)=-2\cos x+x\sin x\to-2$。由定理 9 单侧版本，$f''_+(0)=\dfrac29$，$f''_-(0)=-2$，不相等，$f''(0)$ 不存在。(C) 正确，(D) 错。</p>
<p><b>答案：C。</b></p>
<p><b>这道题告诉我们什么：</b>（1）公式有适用条件，$x(t)$ 含 $|t|$ 时参数方程公式在 $t=0$ 失效，必须消参；（2）"光滑程度"要一级一级检验，每一级都是"段内用法则、分段点用定义或定理 9"；（3）本题的结构和例 B7 的 $x|x|$ 一模一样：$f'$ 连续但 $f''(0)$ 不存在——一侧曲率 $\frac29$、另一侧 $-2$，导函数在原点出现尖角。</p>`
      },
      {
        kind: 'example', title: '近十年真题精讲（二）：高阶导数与隐函数',
        html: R`<p><span class="qref" data-q="2017-9">2017 年第 9 题</span>　已知函数 $f(x)=\dfrac{1}{1+x^2}$，则 $f^{(3)}(0)=$ ______.</p>
<p><b>这题考什么：</b>一点处的高阶导数。硬算三阶导数（商法则套三次）可以做但很繁，考的是"绕开硬算"的两种思路。</p>
<p><b>思路一（奇偶性，本篇补充命题）：</b>$f$ 是偶函数，求导一次变奇、两次变偶、三次变奇，$f'''$ 是奇函数，而奇函数在 $0$ 处的值必为 $0$。答案 $0$，一行解决。</p>
<p><b>思路二（泰勒展开比较系数，diff.taylor）：</b>$\dfrac1{1+x^2}=1-x^2+x^4-\cdots$ 只含偶次幂，$x^3$ 的系数为 $0$，故 $f'''(0)=3!\cdot0=0$。</p>
<p><b>思路三（硬算，用于核对）：</b>$f'=\dfrac{-2x}{(1+x^2)^2}$，$f''=\dfrac{6x^2-2}{(1+x^2)^3}$，$f'''=\dfrac{24x(1-x^2)}{(1+x^2)^4}$，代 $0$ 得 $0$。</p>
<p><b>答案：$0$。</b></p>
<p><b>告诉我们什么：</b>"在 $0$ 处"是信号：$0$ 是对称中心、也是麦克劳林展开点。先观察奇偶性，再想展开，最后才硬算。</p>
<hr/>
<p><span class="qref" data-q="2016-12">2016 年第 12 题</span>　设函数 $f(x)=\arctan x-\dfrac{x}{1+ax^{2}}$，且 $f'''(0)=1$，则 $a=$______.</p>
<p><b>这题考什么：</b>已知一点处的三阶导数值反求参数，主考点是泰勒展开比较系数，但它本质上是"高阶导数怎么求"的问题，和上一题是同一思路的升级版。</p>
<p><b>解答：</b>$\arctan x=x-\dfrac{x^3}3+o(x^3)$；$\dfrac{x}{1+ax^2}=x\big(1-ax^2+o(x^2)\big)=x-ax^3+o(x^3)$。相减得 $f(x)=\Big(a-\dfrac13\Big)x^3+o(x^3)$。由展开唯一性 $\dfrac{f'''(0)}{3!}=a-\dfrac13$，即 $6a-2=1$，$a=\dfrac12$。</p>
<p><b>答案：$\dfrac12$。</b></p>
<p><b>告诉我们什么：</b>$f^{(n)}(0)=n!\times(x^n\text{ 的系数})$——系数要乘 $n!$，这是最常见的失分点。若用本篇方法硬算，$\dfrac{x}{1+ax^2}$ 的三阶导需用商法则三次，可行但不推荐；本题也可用奇偶性简化：$f$ 是奇函数，$f'''$ 也是奇函数的二阶导……不如展开直接。</p>
<hr/>
<p><span class="qref" data-q="2017-17">2017 年第 17 题</span>　已知函数 $y(x)$ 由方程 $x^3+y^3-3x+3y-2=0$ 确定，求 $y(x)$ 的极值.</p>
<p><b>这题考什么：</b>隐函数求导（定理 4）与极值判别（diff.mono）的综合，解答题 10 分。隐函数求导是整个解答的"发动机"。</p>
<p><b>从题面看到什么：</b>"由方程确定"→隐函数求导；"求极值"→驻点 + 二阶导判别。隐函数的驻点要同时满足 $y'=0$ 与原方程。</p>
<p><b>第一步：一阶导。</b>两边对 $x$ 求导（$y^3$ 要乘 $y'$）：$3x^2+3y^2y'-3+3y'=0$，解得
$$y'=\frac{1-x^2}{1+y^2}.$$</p>
<p>（分母 $1+y^2\neq0$，$y(x)$ 处处可导，极值只能在驻点取得。）</p>
<p><b>第二步：驻点。</b>$y'=0\Leftrightarrow x=\pm1$。代回原方程求对应的 $y$：$x=1$ 时 $y^3+3y-4=0$，$y=1$（$y^3+3y$ 严格递增，根唯一）；$x=-1$ 时 $y^3+3y=0$，$y=0$。</p>
<p><b>第三步：二阶导判别。</b>对 $y'(1+y^2)=1-x^2$ 再求导：$y''(1+y^2)+y'\cdot2yy'=-2x$。在驻点 $y'=0$，于是 $y''=\dfrac{-2x}{1+y^2}$（定理 4 注记（2）：驻点处含 $y'$ 的项全部消失）。$x=1,y=1$：$y''=-1\lt0$，极大值 $y(1)=1$；$x=-1,y=0$：$y''=2>0$，极小值 $y(-1)=0$。</p>
<p><b>答案：极大值 $y(1)=1$，极小值 $y(-1)=0$。</b></p>
<p><b>这道题告诉我们什么：</b>隐函数求导要"求导—代点"，二阶导判别在驻点处极其简洁；别忘了驻点的 $y$ 坐标要从原方程解出，答案要写成"$y(1)=1$"这种函数值形式。</p>`
      },
      {
        kind: 'exam', title: '考研怎么考',
        html: R`<p>近十年（2016–2025）数学一直接标为本考点的真题共 6 道，考法集中、规律清楚：</p>
<ul>
<li><b>参数方程二阶导数是最稳定的填空题（4–5 分）。</b>题面给 $x=\varphi(t),y=\psi(t)$，求 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=t_0}$，一阶导数往往可约分，二阶时考"对 $t$ 求导再除以 $\varphi'(t)$"是否掌握。见 <span class="qref" data-q="2020-10">2020 年第 10 题</span>、<span class="qref" data-q="2021-12">2021 年第 12 题</span>；更早的 <span class="qref" data-q="2013-11">2013 年第 11 题</span>、<span class="qref" data-q="2010-9">2010 年第 9 题</span>（$y$ 是变上限积分，需配合微积分基本定理）同类型。</li>
<li><b>一点处的高阶导数 / 由高阶导数反求参数（填空 4 分）。</b>命题意图是考"不要硬算"：奇偶性、泰勒展开比较系数、莱布尼茨公式只取不含 $x$ 的项。见 <span class="qref" data-q="2017-9">2017 年第 9 题</span>、<span class="qref" data-q="2016-12">2016 年第 12 题</span>。这类题常同时标 diff.taylor，复习时两篇要连起来看。</li>
<li><b>分段函数 / 含绝对值的参数方程在分段点的光滑程度（选择 5 分）。</b>四个选项分别对应"连续、可导、导函数连续、二阶可导"的阶梯，要求消参 + 逐级用定义检验。见 <span class="qref" data-q="2023-3">2023 年第 3 题</span>（同时标 diff.def 与 lim.cont）。这是近年新出现的综合形式，难度明显高于前两类。</li>
<li><b>隐函数求导作为解答题的"工具"出现（10 分）。</b>隐函数本身很少单独出题，而是嵌在求极值、求切线、求极限中：<span class="qref" data-q="2017-17">2017 年第 17 题</span>（隐函数求极值）；更早的 <span class="qref" data-q="2013-9">2013 年第 9 题</span>（隐函数在一点的导数转化为极限）、<span class="qref" data-q="2008-10">2008 年第 10 题</span>（隐函数曲线的切线）。</li>
<li><b>求导法则本身的证明也考过。</b><span class="qref" data-q="2015-18">2015 年第 18 题</span> 要求用定义证明乘积法则并写出 $n$ 个因子的公式——定理 1 的证明必须会写。<span class="qref" data-q="2012-2">2012 年第 2 题</span> 则考多因子乘积在一点的导数（某因子为零时只剩一项）。</li>
</ul>
<p><b>综合与变化：</b>本考点很少单独出大题，但它是整章的"计算底座"：中值定理、泰勒公式、极值、凹凸性、曲率、微分方程通通要先会求导。近几年的趋势是把求导法则和<b>概念辨析</b>绑在一起（2023 年第 3 题），考公式的适用条件而不只是公式本身；填空题的参数方程题则维持每两三年一次的频率。复习建议：（1）参数方程二阶导、隐函数二阶导的流程练到不假思索；（2）$n$ 阶导数的三种套路（分解、莱布尼茨、展开比较系数）各做几题；（3）分段点处"段内用法则、点上用定义"反复体会，并掌握定理 9 及其反例。</p>`
      },
      {
        kind: 'check', title: '自测',
        items: [
          { q: R`<p>判断对错并说明理由：若 $f'(x_0)$ 存在，则 $\lim\limits_{x\to x_0}f'(x)=f'(x_0)$。</p>`, a: R`<p><b>错。</b>$f'(x_0)$ 存在只要求差商有极限，不要求导函数在 $x_0$ 处连续。反例 $f(x)=x^2\sin\frac1x\ (x\neq0),\ f(0)=0$：$f'(0)=0$，但 $f'(x)=2x\sin\frac1x-\cos\frac1x$ 在 $0$ 处无极限。定理 9 的方向是"导函数极限存在 $\Rightarrow$ 导数等于它"，反过来不成立。不过导函数的间断点只能是第二类的。</p>` },
          { q: R`<p>设 $f$ 可导，$y=f(\sin^2x)$，则 $y'=$（　　）</p>`, options: [R`<p>$f'(\sin^2x)$</p>`, R`<p>$2\sin x\,f'(\sin^2x)$</p>`, R`<p>$\sin2x\,f'(\sin^2x)$</p>`, R`<p>$\sin2x\,f'(x)$</p>`], correct: 2, explain: R`<p>三层复合：$y=f(u),\ u=v^2,\ v=\sin x$。$y'=f'(u)\cdot2v\cdot\cos x=f'(\sin^2x)\cdot2\sin x\cos x=\sin2x\,f'(\sin^2x)$。选 (A) 是漏掉内层导数，(D) 混淆了 $f'(\sin^2x)$ 与 $f'(x)$。</p>` },
          { q: R`<p>设 $y=y(x)$ 由 $x=\sin t,\ y=t\sin t+\cos t$ 确定，求 $\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}$ 在 $t=\dfrac\pi4$ 处的值。</p>`, a: R`<p>$x'(t)=\cos t$，$y'(t)=\sin t+t\cos t-\sin t=t\cos t$，故 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=t$。再对 $x$ 求导：$\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}=\dfrac{(t)'_t}{\cos t}=\dfrac1{\cos t}$，$t=\frac\pi4$ 时为 $\sqrt2$。（这是 2013 年第 11 题。）要点：一阶导数化简为 $t$ 后，二阶导数不是 $1$，还要除以 $x'(t)$。</p>` },
          { q: R`<p>设 $y=x^2\ln x$，求 $y^{(n)}\ (n\ge3)$。</p>`, a: R`<p>用莱布尼茨公式，令 $u=\ln x,\ v=x^2$：$y^{(n)}=\mathrm C_n^0(\ln x)^{(n)}x^2+\mathrm C_n^1(\ln x)^{(n-1)}\cdot2x+\mathrm C_n^2(\ln x)^{(n-2)}\cdot2$。代入 $(\ln x)^{(k)}=\dfrac{(-1)^{k-1}(k-1)!}{x^k}$：
$$y^{(n)}=\frac{(-1)^{n-1}(n-1)!}{x^{n-2}}+\frac{2n(-1)^{n-2}(n-2)!}{x^{n-2}}+\frac{n(n-1)(-1)^{n-3}(n-3)!}{x^{n-2}}.$$
提出 $\dfrac{(-1)^{n-3}(n-3)!}{x^{n-2}}$：括号内为 $(n-1)(n-2)-2n(n-2)+n(n-1)=n^2-3n+2-2n^2+4n+n^2-n=2$。故 $y^{(n)}=\dfrac{2(-1)^{n-3}(n-3)!}{x^{n-2}}$。另一种更快的思路：$y'''=\dfrac2x$（算三次导），再套 $\big(\frac1x\big)^{(n-3)}$ 公式，结果相同。</p>` },
          { q: R`<p>设 $y=y(x)$ 由 $y-x\mathrm{e}^y=1$ 确定，求 $y'(0)$ 与 $y''(0)$。</p>`, a: R`<p>$x=0$ 时 $y=1$。求导：$y'-\mathrm{e}^y-x\mathrm{e}^yy'=0$，代 $(0,1)$：$y'(0)=\mathrm{e}$。再求导：$y''-\mathrm{e}^yy'-\mathrm{e}^yy'-x(\mathrm{e}^yy'\cdot y'+\mathrm{e}^yy'')=0$，代 $x=0,y=1,y'=\mathrm{e}$：$y''(0)=2\mathrm{e}^2$。要点：先解出该点的 $y$；$x\mathrm{e}^y$ 是乘积且 $\mathrm{e}^y$ 是复合；先求导后代值。</p>` },
          { q: R`<p>设 $f(x)=\begin{cases}\dfrac{1-\cos x}{x},&x\neq0,\\ 0,&x=0,\end{cases}$ 则 $f'(0)=$（　　）</p>`, options: [R`<p>不存在</p>`, R`<p>$0$</p>`, R`<p>$\dfrac12$</p>`, R`<p>$1$</p>`], correct: 2, explain: R`<p>分段点用定义：$f'(0)=\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x}=\lim\limits_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12$（等价无穷小 $1-\cos x\sim\frac{x^2}2$）。不能把 $x\neq0$ 的公式求导再"代 $0$"——那样会遇到 $\frac00$；也不能因为"分段"就说不存在。</p>` },
          { q: R`<p>判断对错并说明理由：设 $y=f(x)$ 可导且 $f'(x)\neq0$，其反函数为 $x=g(y)$，则 $g''(y)=\dfrac{1}{f''(x)}$。</p>`, a: R`<p><b>错。</b>只有一阶导数互为倒数：$g'(y)=\dfrac1{f'(x)}$。二阶导数要对 $y$ 再求导，$\dfrac1{f'(x)}$ 是 $x$ 的函数，须乘 $\dfrac{\mathrm{d}x}{\mathrm{d}y}$：$g''(y)=-\dfrac{f''(x)}{[f'(x)]^2}\cdot\dfrac1{f'(x)}=-\dfrac{f''(x)}{[f'(x)]^3}$。例如 $f(x)=x+\mathrm{e}^x$ 在 $x=0$ 处，$g''=-\frac18$，而 $\frac1{f''(0)}=1$。</p>` },
          { q: R`<p>设 $f(x)=(\mathrm{e}^x-1)(\mathrm{e}^{2x}-2)(\mathrm{e}^{3x}-3)$，求 $f'(0)$。</p>`, a: R`<p>由乘积法则 $f'=u'vw+uv'w+uvw'$，在 $x=0$ 处 $u(0)=\mathrm{e}^0-1=0$，含 $u(0)$ 的两项为零，只剩 $u'(0)v(0)w(0)=1\cdot(1-2)(1-3)=2$。这是 2012 年第 2 题（$n$ 个因子版本）的思路：某因子在该点为零时，只需对它求导、其余代值。</p>` },
          { q: R`<p>设 $f$ 在 $(-\infty,+\infty)$ 上可导且为偶函数，$f'(1)=3$，则 $f'(-1)=$（　　）</p>`, options: [R`<p>$3$</p>`, R`<p>$-3$</p>`, R`<p>$0$</p>`, R`<p>无法确定</p>`], correct: 1, explain: R`<p>对恒等式 $f(-x)=f(x)$ 两边求导：$-f'(-x)=f'(x)$，令 $x=1$ 得 $f'(-1)=-f'(1)=-3$。偶函数的导函数是奇函数。</p>` }
        ]
      }
    ]
  };
});
