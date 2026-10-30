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
<p>最后是<b>分段函数求导</b>：法则只能用在"每一段内部"，在<b>分段点</b>上必须回到定义（或用导数极限定理）。考研最喜欢在这里设陷阱——<span class="qref" data-q="2023-3">2023 年第 3 题</span>就是典型。</p>
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
<li><b>"$n$ 阶可导"是一层一层往上爬的阶梯：</b>连续 $\Leftarrow$ 可导 $\Leftarrow$ 导函数连续 $\Leftarrow$ 二阶可导 $\Leftarrow$ 二阶导函数连续 $\Leftarrow\cdots$ 每一级都真的比前一级强（反例见后文 $x|x|$、$x^2\sin\frac1x$）。<span class="qref" data-q="2023-3">2023 年第 3 题</span>的四个选项恰好就是这个阶梯的四级。</li>
<li><b>在一点处的 $n$ 阶导数与 $n$ 阶导函数不同。</b>$f^{(n)}(x_0)$ 是一个数；$f^{(n)}(x)$ 是函数。求 $f^{(n)}(x_0)$ 未必要先求 $f^{(n)}(x)$——泰勒展开、奇偶性等方法可以绕过去（<span class="qref" data-q="2017-9">2017 年第 9 题</span>、<span class="qref" data-q="2016-12">2016 年第 12 题</span>）。</li>
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
        remark: R`<p>（1）乘积法则推广到多个因子：$(u_1u_2\cdots u_n)'=\sum\limits_{k=1}^n u_1\cdots u_k'\cdots u_n$（对 $n$ 归纳即可）。<span class="qref" data-q="2015-18">2015 年第 18 题</span>就直接考过"用定义证明乘积法则并写出 $n$ 个因子的公式"，所以<b>这个证明本身是考点</b>，必须会写。（2）一个高频应用：求 $f'(x_0)$ 时如果 $f$ 是多个因子之积且其中某个因子在 $x_0$ 处为 $0$，那么 $f'(x_0)$ 只剩"对这个因子求导、其余代值"一项（<span class="qref" data-q="2012-2">2012 年第 2 题</span>）。（3）条件"$u,v$ 可导"不能减弱为"$uv$ 可导"反推：$u=|x|,\ v=|x|$ 都在 $0$ 处不可导，但 $uv=x^2$ 可导。法则是"充分"方向的。</p>`
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
        statement: R`<p>设 $y=f(x)$ 在区间 $I$ 上连续、严格单调，在内点 $x_0\in I$ 处可导且 $f'(x_0)\neq0$，则其反函数 $x=f^{-1}(y)$ 在 $y_0=f(x_0)$ 处可导，且
$$\big(f^{-1}\big)'(y_0)=\frac{1}{f'(x_0)},\qquad\text{即}\qquad \frac{\mathrm{d}x}{\mathrm{d}y}=\frac{1}{\dfrac{\mathrm{d}y}{\mathrm{d}x}}.$$</p>`,
        intuition: R`<p>$y=f(x)$ 和 $x=f^{-1}(y)$ 是同一条曲线，只是把横纵坐标互换。切线斜率 $\dfrac{\Delta y}{\Delta x}$ 互换后变成 $\dfrac{\Delta x}{\Delta y}$，自然互为倒数。$f'(x_0)\neq0$ 的意义：原曲线切线水平时，换个方向看切线就竖直，反函数在那里不可导（如 $y=x^3$ 在 $0$ 处，反函数 $x=\sqrt[3]{y}$ 在 $0$ 处导数为 $+\infty$）。</p>
<svg viewBox="0 0 330 280" width="100%" style="max-width:330px" xmlns="http://www.w3.org/2000/svg">
  <g stroke="currentColor" fill="none" stroke-width="1">
    <line x1="40.0" y1="200.0" x2="300.0" y2="200.0"/>
    <line x1="90.0" y1="250.0" x2="90.0" y2="5.0"/>
    <line x1="40.0" y1="250.0" x2="290.0" y2="0.0" stroke-dasharray="4 3"/>
  </g>
  <g stroke="currentColor" fill="none" stroke-width="1.8">
    <polyline points="40.0,181.6 41.5,181.0 43.0,180.5 44.5,179.9 46.0,179.3 47.5,178.6 48.9,178.0 50.4,177.3 51.9,176.6 53.4,175.9 54.9,175.2 56.4,174.5 57.9,173.7 59.4,172.9 60.9,172.1 62.4,171.2 63.9,170.4 65.4,169.5 66.8,168.5 68.3,167.6 69.8,166.6 71.3,165.6 72.8,164.5 74.3,163.5 75.8,162.4 77.3,161.2 78.8,160.1 80.3,158.8 81.8,157.6 83.3,156.3 84.7,155.0 86.2,153.6 87.7,152.2 89.2,150.8 90.7,149.3 92.2,147.8 93.7,146.2 95.2,144.5 96.7,142.9 98.2,141.1 99.7,139.3 101.1,137.5 102.6,135.6 104.1,133.7 105.6,131.7 107.1,129.6 108.6,127.5 110.1,125.3 111.6,123.0 113.1,120.7 114.6,118.3 116.1,115.8 117.6,113.2 119.0,110.6 120.5,107.9 122.0,105.1 123.5,102.2 125.0,99.3 126.5,96.2 128.0,93.1 129.5,89.9 131.0,86.5 132.5,83.1 134.0,79.6 135.5,75.9 136.9,72.1 138.4,68.3 139.9,64.3 141.4,60.2 142.9,55.9 144.4,51.6 145.9,47.1 147.4,42.5 148.9,37.7 150.4,32.8 151.9,27.7 153.3,22.5 154.8,17.1 156.3,11.6 157.8,5.9 159.3,-0.0"/>
    <polyline points="108.4,250.0 110.7,244.2 112.9,239.0 115.2,234.3 117.5,229.9 119.7,226.0 122.0,222.3 124.3,218.9 126.6,215.7 128.8,212.6 131.1,209.8 133.4,207.1 135.6,204.6 137.9,202.1 140.2,199.8 142.4,197.6 144.7,195.5 147.0,193.5 149.3,191.5 151.5,189.6 153.8,187.8 156.1,186.1 158.3,184.4 160.6,182.7 162.9,181.2 165.1,179.6 167.4,178.1 169.7,176.7 172.0,175.3 174.2,173.9 176.5,172.6 178.8,171.3 181.0,170.0 183.3,168.8 185.6,167.6 187.8,166.4 190.1,165.3 192.4,164.2 194.7,163.1 196.9,162.0 199.2,160.9 201.5,159.9 203.7,158.9 206.0,157.9 208.3,156.9 210.5,156.0 212.8,155.1 215.1,154.2 217.4,153.3 219.6,152.4 221.9,151.5 224.2,150.6 226.4,149.8 228.7,149.0 231.0,148.2 233.2,147.4 235.5,146.6 237.8,145.8 240.1,145.0 242.3,144.3 244.6,143.6 246.9,142.8 249.1,142.1 251.4,141.4 253.7,140.7 255.9,140.0 258.2,139.3 260.5,138.7 262.8,138.0 265.0,137.4 267.3,136.7 269.6,136.1 271.8,135.4 274.1,134.8 276.4,134.2 278.6,133.6 280.9,133.0 283.2,132.4 285.5,131.8 287.7,131.3 290.0,130.7"/>
  </g>
  <g stroke="currentColor" fill="none" stroke-width="1.2" stroke-dasharray="5 2">
    <polyline points="99.7,150.0 149.7,50.0"/>
    <polyline points="130.0,195.3 250.0,135.3"/>
  </g>
  <g fill="currentColor" stroke="none">
    <circle cx="124.7" cy="100.0" r="3"/>
    <circle cx="190.0" cy="165.3" r="3"/>
  </g>
  <g fill="currentColor" font-size="12" stroke="none">
    <text x="58.7" y="104.0">P(x₀, y₀)</text>
    <text x="198.0" y="181.3">P′(y₀, x₀)</text>
    <text x="45.0" y="20.0">y = f(x) = eˣ</text>
    <text x="45.0" y="37.5">P 处斜率 f′(x₀) = 2</text>
    <text x="195.0" y="222.5">反函数 f⁻¹（横轴为 y）</text>
    <text x="195.0" y="240.0">P′ 处斜率 1/f′(x₀) = 1/2</text>
    <text x="255.0" y="52.5">y = x</text>
    <text x="295.0" y="196.0">x</text>
    <text x="95.0" y="7.5">y</text>
  </g>
</svg>
<p style="text-align:center"><small>看什么：$y=f(x)=\mathrm{e}^x$ 与反函数 $f^{-1}$（把 $y$ 画在横轴上）关于 $y=x$ 对称；$P(x_0,y_0)$ 翻到 $P^{\prime}(y_0,x_0)$，切线也一起翻转，"纵／横"变成"横／纵"，斜率 $2$ 变成 $\dfrac12$。</small></p>`,
        steps: [
          { s: R`<p>由"连续严格单调函数的反函数也连续严格单调"（lim.cont / lim.closed 中的结论），$x=f^{-1}(y)$ 在 $y_0$ 处连续且严格单调。</p>`, why: R`<p>这是定理要求 $f$ 在整个区间上连续、严格单调的原因：只有这样反函数才存在，而且反函数的连续性是下面"$\Delta y\to0\Rightarrow\Delta x\to0$"的依据。</p>` },
          { s: R`<p>给 $y_0$ 增量 $\Delta y\neq0$，令 $\Delta x=f^{-1}(y_0+\Delta y)-f^{-1}(y_0)$。由严格单调，$\Delta x\neq0$；由反函数连续，$\Delta y\to0$ 时 $\Delta x\to0$。又 $\Delta y=f(x_0+\Delta x)-f(x_0)$。</p>`, why: R`<p>$\Delta x\neq0$ 很关键——它保证下面可以把 $\dfrac{\Delta y}{\Delta x}$ 放在分母上。这是"严格单调"条件的作用。</p>` },
          { s: R`<p>于是
$$\frac{\Delta x}{\Delta y}=\frac{1}{\dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}}.$$
令 $\Delta y\to0$，则 $\Delta x\to0$ 且 $\Delta x\neq0$，由海涅定理（归结原则），分母 $\to f'(x_0)\neq0$，故 $\dfrac{\Delta x}{\Delta y}\to\dfrac1{f'(x_0)}$。</p>`, why: R`<p>这里是复合函数的极限：外层是 $x$ 的差商（极限为 $f'(x_0)$），内层是 $\Delta x=\Delta x(\Delta y)$，它趋于 $0$ 且不取 $0$，所以复合极限法则适用。所谓"海涅定理（归结原则）"（lim.funcdef）说的就是：若 $\lim\limits_{u\to0}F(u)=L$，则沿任何一条趋于 $0$ 而不取 $0$ 的路径 $u=u(s)\to0$ 都有 $F(u(s))\to L$——这里的路径就是 $\Delta x(\Delta y)$。"不取 $0$"这个要求正是上一步证 $\Delta x\neq0$ 的原因。$f'(x_0)\neq0$ 保证可以取倒数。</p>` }
        ],
        remark: R`<p>（1）用它可推所有反三角函数与对数的导数：$y=\arcsin x$ 是 $x=\sin y\ (|y|\lt\frac\pi2)$ 的反函数，$\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{1}{\cos y}=\dfrac{1}{\sqrt{1-x^2}}$（取正号是因为 $\cos y>0$）。（2）<b>二阶导数不能简单取倒数</b>：$\dfrac{\mathrm{d}^2x}{\mathrm{d}y^2}=\dfrac{\mathrm{d}}{\mathrm{d}y}\Big(\dfrac{1}{y'}\Big)=\dfrac{\mathrm{d}}{\mathrm{d}x}\Big(\dfrac1{y'}\Big)\cdot\dfrac{\mathrm{d}x}{\mathrm{d}y}=-\dfrac{y''}{(y')^2}\cdot\dfrac1{y'}=-\dfrac{y''}{(y')^3}$。记住推导过程比记公式可靠。（3）这一定理和链式法则合起来，就是参数方程求导公式的全部来源。</p>`
      },
      {
        kind: 'thm', title: '定理 3′：基本初等函数导数公式表（完整版）及其推导',
        statement: R`<p>以下 16 个公式是一切求导的"原材料"，必须一个不漏地记牢（$C$ 为常数，$a>0,\ a\neq1$）：</p>
<table>
<thead><tr><th>函数</th><th>导数</th><th>函数</th><th>导数</th></tr></thead>
<tbody>
<tr><td>$C$</td><td>$0$</td><td>$x^\mu$（$x>0$；$\mu$ 为正整数时 $x\in\mathbb R$）</td><td>$\mu x^{\mu-1}$</td></tr>
<tr><td>$\sin x$</td><td>$\cos x$</td><td>$\cos x$</td><td>$-\sin x$</td></tr>
<tr><td>$\tan x$</td><td>$\sec^2x$</td><td>$\cot x$</td><td>$-\csc^2x$</td></tr>
<tr><td>$\sec x$</td><td>$\sec x\tan x$</td><td>$\csc x$</td><td>$-\csc x\cot x$</td></tr>
<tr><td>$a^x$</td><td>$a^x\ln a$</td><td>$\mathrm{e}^x$</td><td>$\mathrm{e}^x$</td></tr>
<tr><td>$\log_a x$</td><td>$\dfrac{1}{x\ln a}$</td><td>$\ln|x|$（$x\neq0$）</td><td>$\dfrac1x$</td></tr>
<tr><td>$\arcsin x$（$|x|\lt1$）</td><td>$\dfrac{1}{\sqrt{1-x^2}}$</td><td>$\arccos x$（$|x|\lt1$）</td><td>$-\dfrac{1}{\sqrt{1-x^2}}$</td></tr>
<tr><td>$\arctan x$</td><td>$\dfrac{1}{1+x^2}$</td><td>$\operatorname{arccot}x$</td><td>$-\dfrac{1}{1+x^2}$</td></tr>
</tbody>
</table>
<p>常用补充（都是上表与链式法则的直接推论）：$\big(\ln(x+\sqrt{x^2+a^2})\big)'=\dfrac{1}{\sqrt{x^2+a^2}}$，$\big(\sqrt{x}\big)'=\dfrac{1}{2\sqrt x}$，$\Big(\dfrac1x\Big)'=-\dfrac1{x^2}$。</p>`,
        intuition: R`<p>这张表不是 16 条独立公理。<b>diff.def</b> 定理 3 已经由定义推出了常数、幂（正整数次）、$\sin,\cos$、$a^x$、$\log_ax$ 五类；剩下的全部由定理 1（商法则）、定理 2（链式法则）、定理 3（反函数法则）推出。所以记忆的重点是<b>"哪一条来自哪条法则"</b>——忘了就能现场重推，这比死记更可靠。表中成对的公式（$\sin/\cos$、$\tan/\cot$、$\sec/\csc$、$\arcsin/\arccos$、$\arctan/\operatorname{arccot}$）右边一列恰好多一个负号，这是因为 $\cos x=\sin(\frac\pi2-x)$ 等"余"函数都是把自变量换成 $\frac\pi2-x$，链式法则带出一个 $-1$。</p>`,
        steps: [
          { s: R`<p><b>$\tan x,\ \cot x$（商法则）.</b>
$$(\tan x)'=\Big(\frac{\sin x}{\cos x}\Big)'=\frac{\cos x\cos x-\sin x(-\sin x)}{\cos^2x}=\frac{1}{\cos^2x}=\sec^2x,\qquad (\cot x)'=\Big(\frac{\cos x}{\sin x}\Big)'=\frac{-\sin^2x-\cos^2x}{\sin^2x}=-\csc^2x.$$</p>`, why: R`<p>分子用 $\sin^2x+\cos^2x=1$ 合并。$\tan x$ 的定义域内 $\cos x\neq0$，商法则条件满足。</p>` },
          { s: R`<p><b>$\sec x,\ \csc x$（倒数法则）.</b>
$$(\sec x)'=\Big(\frac1{\cos x}\Big)'=-\frac{-\sin x}{\cos^2x}=\frac{\sin x}{\cos x}\cdot\frac1{\cos x}=\sec x\tan x,\qquad(\csc x)'=-\frac{\cos x}{\sin^2x}=-\csc x\cot x.$$</p>`, why: R`<p>用定理 1 中的 $\big(\frac1v\big)'=-\frac{v'}{v^2}$，再把结果拆成两个基本函数之积便于记忆。</p>` },
          { s: R`<p><b>$\arcsin x,\ \arccos x$（反函数法则）.</b> $y=\arcsin x$ 是 $x=\sin y,\ y\in\big[-\frac\pi2,\frac\pi2\big]$ 的反函数，$\sin y$ 在这个区间上连续、严格递增，在 $|y|\lt\frac\pi2$ 时 $(\sin y)'=\cos y>0$。由定理 3，
$$(\arcsin x)'=\frac{1}{\cos y}=\frac{1}{\sqrt{1-\sin^2y}}=\frac{1}{\sqrt{1-x^2}}\qquad(|x|\lt1).$$
同理 $y=\arccos x$ 是 $x=\cos y,\ y\in[0,\pi]$ 的反函数，$0\lt y\lt\pi$ 时 $(\cos y)'=-\sin y\lt0$，故 $(\arccos x)'=\dfrac1{-\sin y}=-\dfrac{1}{\sqrt{1-x^2}}$。</p>`, why: R`<p>关键在开方取号：$\cos y=\pm\sqrt{1-\sin^2y}$，取正号是因为 $y\in(-\frac\pi2,\frac\pi2)$ 上 $\cos y>0$；$\arccos$ 中 $\sin y>0$ 同理。端点 $x=\pm1$ 对应 $\cos y=0$，定理 3 的条件 $f'\neq0$ 不满足，那里 $\arcsin x$ 确实不可导（切线竖直）。</p>` },
          { s: R`<p><b>$\arctan x,\ \operatorname{arccot}x$（反函数法则）.</b> $y=\arctan x$ 是 $x=\tan y,\ y\in\big(-\frac\pi2,\frac\pi2\big)$ 的反函数，$(\tan y)'=\sec^2y=1+\tan^2y=1+x^2>0$，故
$$(\arctan x)'=\frac{1}{1+x^2}.$$
$y=\operatorname{arccot}x$ 是 $x=\cot y,\ y\in(0,\pi)$ 的反函数，$(\cot y)'=-\csc^2y=-(1+\cot^2y)=-(1+x^2)$，故 $(\operatorname{arccot}x)'=-\dfrac{1}{1+x^2}$。</p>`, why: R`<p>这里不需要开方，所以没有取号问题；把 $\sec^2y$ 写成 $1+\tan^2y$ 是为了用 $x$ 表示结果。</p>` },
          { s: R`<p><b>$x^\mu$（$\mu$ 任意实数，$x>0$）与 $\ln|x|$（链式法则）.</b> $x^\mu=\mathrm{e}^{\mu\ln x}$，故 $(x^\mu)'=\mathrm{e}^{\mu\ln x}\cdot\dfrac{\mu}{x}=\mu x^{\mu-1}$。$x\lt0$ 时 $\ln|x|=\ln(-x)$，$(\ln(-x))'=\dfrac{1}{-x}\cdot(-1)=\dfrac1x$，与 $x>0$ 时相同。$\log_ax=\dfrac{\ln x}{\ln a}$，故 $(\log_ax)'=\dfrac{1}{x\ln a}$。</p>`, why: R`<p>幂函数用"指数化 + 链式法则"一步到位，比 diff.def 中用 $(1+u)^\mu-1\sim\mu u$ 更一般；$\ln|x|$ 的结论在积分（$\int\frac{\mathrm{d}x}{x}=\ln|x|+C$）里天天用，绝对值不能丢。</p>` }
        ],
        remark: R`<p>（1）记忆检查法：把表里每一条都问一句"它从哪来"——商法则、倒数法则、反函数法则、链式法则，能答上来才算真记住。（2）考研中反三角函数的导数出错率最高，尤其是 $\arccos$、$\operatorname{arccot}$ 的负号和 $\arcsin$ 的开方；带着推导记（"$\cos y>0$ 所以取正根"）不会错。（3）$\ln\big(x+\sqrt{x^2+1}\big)$ 的导数 $\dfrac{1}{\sqrt{x^2+1}}$ 在 <span class="qref" data-q="2020-10">2020 年第 10 题</span> 中直接用到（推导见例 A1）。</p>`
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
          { s: R`<p>$G'(x)=0$ 是关于 $y'$ 的<b>一次</b>方程（因为每一项至多含一个因子 $y'$），其系数恰为 $F_y(x,y)$。当该系数非零时唯一解出 $y'$。</p>`, why: R`<p>"一次"是由链式法则结构保证的：每次求导只产生一个 $y'$ 因子。这里的记号 $F_y$ 表示"把 $x$ 看成常数、只对 $y$ 求导"得到的函数（多元微分学里叫偏导数，mdiff.diffable）；例如 $F=x^3+y^3-3x+3y-2$ 时 $F_y=3y^2+3$，而对 $x$ 求导后 $y'$ 的系数正是 $3y^2+3$——因为凡是含 $y$ 的项，链式法则都是"先对 $y$ 求导、再乘 $y'$"。系数非零正是隐函数存在定理的条件 $F_y\neq0$，两边互相印证。</p>` }
        ],
        remark: R`<p>（1）解出的 $y'$ 一般同时含 $x$ 和 $y$，求某点的 $y'$ 必须把该点的 $x$、$y$ <b>都</b>代入，而 $y$ 的值要从原方程解出（<span class="qref" data-q="2017-17">2017 年第 17 题</span>：$x=1$ 时从 $y^3+3y-4=0$ 解出 $y=1$）。（2）求二阶导：对 $y'=\dfrac{1-x^2}{1+y^2}$ 这样的式子再求导时，右边的 $y$ 仍要乘 $y'$；在驻点处 $y'=0$，含 $y'$ 的项全部消失，计算量骤减——这是隐函数求极值时用二阶导判别的常用技巧。（3）求曲线上某点切线（如 <span class="qref" data-q="2008-10">2008 年第 10 题</span>）：隐函数求导后代入点坐标得斜率即可，不必解出 $y'$ 的一般表达式。</p>`
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
用商法则展开 $u'(t)=\dfrac{\psi''\varphi'-\psi'\varphi''}{(\varphi')^2}$，再除以 $\varphi'$ 即得分母为 $(\varphi')^3$ 的公式。</p>`, why: R`<p>最常见的错误是把二阶导数写成 $\dfrac{\psi''(t)}{\varphi''(t)}$ 或 $\dfrac{u'(t)}{1}$。正确做法是把"对 $x$ 求导"始终翻译为"对 $t$ 求导后除以 $\varphi'(t)$"。做题时一般<b>不背</b>分母 $(\varphi')^3$ 的公式，而是先算出并化简 $u(t)$，再按 $\dfrac{u'(t)}{\varphi'(t)}$ 算（<span class="qref" data-q="2021-12">2021 年第 12 题</span>中 $u(t)=2t$，化简后二阶导数一步到位）。</p>` }
        ],
        remark: R`<p>（1）若 $\varphi'(t_0)=0$ 而 $\psi'(t_0)\neq0$，曲线在该点有竖直切线，$\dfrac{\mathrm{d}y}{\mathrm{d}x}$ 不存在但 $\dfrac{\mathrm{d}x}{\mathrm{d}y}=0$；若 $\varphi'(t_0)=\psi'(t_0)=0$（奇点），公式失效，需用其它方法（如消参、用定义）。（2）若 $\varphi$ 或 $\psi$ 本身在某 $t_0$ 处不可导（如含 $|t|$），<b>公式在该点不能用</b>，应消去参数化为分段函数，再在分段点用定义——这是 <span class="qref" data-q="2023-3">2023 年第 3 题</span>的核心。（3）公式中的 $t$ 不能换成 $x$：求 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=1}$ 是代 $t=1$，不是代 $x=1$。</p>`
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
&(x^\mu)^{(n)}=\mu(\mu-1)\cdots(\mu-n+1)\,x^{\mu-n}\ (x>0);\qquad (x^m)^{(n)}=0\ (m\in\mathbb N,\ n>m);\\
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
$$\frac{f(x)-f(x_0)}{x-x_0}=f'(\xi_x).$$</p>`, why: R`<p>差商被"替换"为某一点的导数值，这正是中值定理的用途。拉格朗日中值定理说：$f$ 在 $[a,b]$ 上连续、$(a,b)$ 内可导，则弦的斜率 $\dfrac{f(b)-f(a)}{b-a}$ 等于某个内点 $\xi$ 处的切线斜率 $f'(\xi)$。它在下一篇 diff.mvt 中证明，证明只用到费马引理与闭区间连续函数的最值性，不依赖本定理，所以这里先借用不构成循环。注意 $f$ 在 $x_0$ 处的连续性是闭区间上满足定理条件所必需的——少了它，结论可以不成立：$f(x)=\operatorname{sgn}x$ 在 $x\neq0$ 处 $f'\equiv0$，$\lim\limits_{x\to0}f'(x)=0$，但 $f$ 在 $0$ 处根本不连续，更谈不上可导。</p>` },
          { s: R`<p>当 $x\to x_0^+$ 时，$x_0\lt\xi_x\lt x$ 故 $\xi_x\to x_0^+$ 且 $\xi_x\neq x_0$。由 $\lim\limits_{x\to x_0}f'(x)=A$ 及归结原则，$f'(\xi_x)\to A$。故 $f'_+(x_0)=A$。同理 $f'_-(x_0)=A$，所以 $f'(x_0)=A$。</p>`, why: R`<p>$\xi_x$ 随 $x$ 变化、被夹在 $x_0$ 与 $x$ 之间、永不等于 $x_0$，这三点保证可以用复合函数极限（海涅定理）得到 $f'(\xi_x)\to A$。</p>` }
        ],
        remark: R`<p>（1）<b>逆命题不成立</b>：$f'(x_0)$ 存在不代表 $\lim\limits_{x\to x_0}f'(x)$ 存在。标准反例 $f(x)=x^2\sin\frac1x\ (x\neq0),\ f(0)=0$：$f'(0)=\lim\limits_{x\to0}x\sin\frac1x=0$，但 $f'(x)=2x\sin\frac1x-\cos\frac1x$ 在 $x\to0$ 时振荡无极限。所以当"导函数极限不存在"时<b>不能</b>断言不可导，必须回到定义。（2）若 $\lim\limits_{x\to x_0}f'(x)=\infty$，结论变为 $f'(x_0)=\infty$（不可导，切线竖直），证明相同。（3）推论：<b>导函数不可能有第一类间断点</b>——若 $f'$ 在 $x_0$ 两侧极限存在但不等，由单侧版本得 $f'_-(x_0)\neq f'_+(x_0)$，与 $f'(x_0)$ 存在矛盾；若两侧极限相等但不等于 $f'(x_0)$，与本定理矛盾。这就是 2023 年第 3 题选项 B、D 的逻辑背景：$f'(0)$ 存在而 $f'$ 在 $0$ 处"跳跃"是不可能的，但 $f'$ 在 $0$ 处振荡型间断是可能的。</p>`
      },
      {
        kind: 'text', title: '补充：奇偶函数与周期函数的导数',
        html: R`<p><b>命题.</b> 可导的偶函数的导函数是奇函数；可导的奇函数的导函数是偶函数；可导的周期函数的导函数是同周期的周期函数。</p>
<p><b>证明.</b> 设 $f$ 偶，$f(-x)=f(x)$ 对一切 $x$ 成立，是恒等式，两边对 $x$ 求导（左边用链式法则）：$-f'(-x)=f'(x)$，即 $f'(-x)=-f'(x)$，$f'$ 为奇函数。奇函数、周期函数同理（$f(x+T)=f(x)$ 求导得 $f'(x+T)=f'(x)$）。$\square$</p>
<p><b>推论.</b> 若 $f$ 是偶函数且 $n$ 为奇数，$f^{(n)}$ 是奇函数，于是 $f^{(n)}(0)=0$（奇函数在 $0$ 有定义则必为 $0$：$g(0)=-g(0)$）。<span class="qref" data-q="2017-9">2017 年第 9 题</span> $f(x)=\dfrac1{1+x^2}$ 求 $f'''(0)$，一眼看出答案是 $0$，根本不必计算。</p>
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
<svg viewBox="0 0 420 150" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <g stroke="currentColor" fill="none" stroke-width="1">
    <line x1="10" y1="100.0" x2="410" y2="100.0"/>
    <line x1="208.5" y1="112.0" x2="208.5" y2="64.0" stroke-dasharray="3 3"/>
  </g>
  <polyline points="20.0,100.0 20.0,99.9 20.0,99.8 20.0,99.5 20.1,99.1 20.2,98.5 20.3,97.9 20.4,97.1 20.6,96.3 20.9,95.3 21.2,94.3 21.6,93.1 22.1,91.9 22.6,90.5 23.3,89.1 24.0,87.6 24.8,86.1 25.8,84.5 26.8,82.8 27.9,81.0 29.2,79.3 30.5,77.5 32.0,75.6 33.6,73.8 35.3,71.9 37.1,70.0 39.1,68.1 41.1,66.2 43.3,64.4 45.6,62.5 48.0,60.7 50.5,59.0 53.2,57.2 55.9,55.5 58.8,53.9 61.7,52.4 64.7,50.9 67.9,49.5 71.1,48.1 74.4,46.9 77.8,45.7 81.2,44.7 84.7,43.7 88.3,42.9 91.9,42.1 95.6,41.5 99.2,40.9 103.0,40.5 106.7,40.2 110.5,40.1 114.2,40.0 118.0,40.1 121.8,40.2 125.5,40.5 129.2,40.9 132.9,41.5 136.6,42.1 140.2,42.9 143.8,43.7 147.3,44.7 150.7,45.7 154.1,46.9 157.4,48.1 160.6,49.5 163.8,50.9 166.8,52.4 169.7,53.9 172.6,55.5 175.3,57.2 178.0,59.0 180.5,60.7 182.9,62.5 185.2,64.4 187.4,66.2 189.4,68.1 191.4,70.0 193.2,71.9 194.9,73.8 196.5,75.6 198.0,77.5 199.3,79.3 200.6,81.0 201.7,82.8 202.7,84.5 203.7,86.1 204.5,87.6 205.2,89.1 205.9,90.5 206.4,91.9 206.9,93.1 207.3,94.3 207.6,95.3 207.9,96.3 208.1,97.1 208.2,97.9 208.3,98.5 208.4,99.1 208.5,99.5 208.5,99.8 208.5,99.9 208.5,100.0 208.5,99.9 208.5,99.8 208.5,99.5 208.6,99.1 208.6,98.5 208.8,97.9 208.9,97.1 209.1,96.3 209.4,95.3 209.7,94.3 210.1,93.1 210.6,91.9 211.1,90.5 211.8,89.1 212.5,87.6 213.3,86.1 214.3,84.5 215.3,82.8 216.4,81.0 217.7,79.3 219.0,77.5 220.5,75.6 222.1,73.8 223.8,71.9 225.6,70.0 227.6,68.1 229.6,66.2 231.8,64.4 234.1,62.5 236.5,60.7 239.0,59.0 241.7,57.2 244.4,55.5 247.3,53.9 250.2,52.4 253.2,50.9 256.4,49.5 259.6,48.1 262.9,46.9 266.3,45.7 269.7,44.7 273.2,43.7 276.8,42.9 280.4,42.1 284.0,41.5 287.7,40.9 291.5,40.5 295.2,40.2 299.0,40.1 302.7,40.0 306.5,40.1 310.3,40.2 314.0,40.5 317.7,40.9 321.4,41.5 325.1,42.1 328.7,42.9 332.3,43.7 335.8,44.7 339.2,45.7 342.6,46.9 345.9,48.1 349.1,49.5 352.2,50.9 355.3,52.4 358.2,53.9 361.1,55.5 363.8,57.2 366.5,59.0 369.0,60.7 371.4,62.5 373.7,64.4 375.9,66.2 377.9,68.1 379.9,70.0 381.7,71.9 383.4,73.8 385.0,75.6 386.5,77.5 387.8,79.3 389.1,81.0 390.2,82.8 391.2,84.5 392.2,86.1 393.0,87.6 393.7,89.1 394.4,90.5 394.9,91.9 395.4,93.1 395.8,94.3 396.1,95.3 396.4,96.3 396.6,97.1 396.7,97.9 396.8,98.5 396.9,99.1 397.0,99.5 397.0,99.8 397.0,99.9 397.0,100.0" stroke="currentColor" fill="none" stroke-width="1.8"/>
  <g stroke="currentColor" fill="none" stroke-width="1.2" stroke-dasharray="5 2">
    <polyline points="13.1,94.0 61.1,46.0"/>
    <polyline points="361.9,52.0 397.9,88.0"/>
  </g>
  <g fill="currentColor" stroke="none">
    <circle cx="37.1" cy="70.0" r="2.5"/>
    <circle cx="379.9" cy="70.0" r="2.5"/>
    <circle cx="208.5" cy="100.0" r="2.5"/>
  </g>
  <g fill="currentColor" font-size="11" stroke="none">
    <text x="43.1" y="84.0">t=π/2，斜率 cot(t/2)=1</text>
    <text x="229.9" y="92.0">t=7π/2，斜率 cot(t/2)=−1</text>
    <text x="148.5" y="126.0">t=2π：φ′=ψ′=0，尖点，公式失效（竖直切线）</text>
    <text x="76.2" y="34.0">y″&lt;0：每拱上凸</text>
    <text x="400" y="114.0">x</text>
    <text x="8" y="114.0">0</text>
  </g>
</svg>
<p style="text-align:center"><small>看什么：摆线（$a=1$）上任一点的切线斜率 $\cot\frac t2$ 由 $t$ 决定；在 $t=2\pi$ 处 $\varphi^{\prime}=\psi^{\prime}=0$，曲线出现尖点、切线竖直，公式 $\frac{\psi^{\prime}}{\varphi^{\prime}}$ 失效（定理 5 注记（1））；二阶导数恒负对应每一拱都上凸。</small></p>
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
<svg viewBox="0 0 420 200" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <g stroke="currentColor" fill="none" stroke-width="1">
    <line x1="5" y1="100" x2="415" y2="100"/>
    <line x1="210" y1="176" x2="210" y2="5"/>
  </g>
  <g stroke="currentColor" fill="none" stroke-width="1" stroke-dasharray="4 3">
    <polyline points="10.0,4.0 16.7,10.3 23.3,16.4 30.0,22.2 36.7,27.9 43.3,33.3 50.0,38.6 56.7,43.6 63.3,48.4 70.0,53.0 76.7,57.3 83.3,61.5 90.0,65.4 96.7,69.2 103.3,72.7 110.0,76.0 116.7,79.1 123.3,82.0 130.0,84.6 136.7,87.1 143.3,89.3 150.0,91.4 156.7,93.2 163.3,94.8 170.0,96.2 176.7,97.3 183.3,98.3 190.0,99.0 196.7,99.6 203.3,99.9 210.0,100.0 216.7,99.9 223.3,99.6 230.0,99.0 236.7,98.3 243.3,97.3 250.0,96.2 256.7,94.8 263.3,93.2 270.0,91.4 276.7,89.3 283.3,87.1 290.0,84.6 296.7,82.0 303.3,79.1 310.0,76.0 316.7,72.7 323.3,69.2 330.0,65.4 336.7,61.5 343.3,57.3 350.0,53.0 356.7,48.4 363.3,43.6 370.0,38.6 376.7,33.3 383.3,27.9 390.0,22.2 396.7,16.4 403.3,10.3 410.0,4.0"/>
    <polyline points="10.0,196.0 16.7,189.7 23.3,183.6 30.0,177.8 36.7,172.1 43.3,166.7 50.0,161.4 56.7,156.4 63.3,151.6 70.0,147.0 76.7,142.7 83.3,138.5 90.0,134.6 96.7,130.8 103.3,127.3 110.0,124.0 116.7,120.9 123.3,118.0 130.0,115.4 136.7,112.9 143.3,110.7 150.0,108.6 156.7,106.8 163.3,105.2 170.0,103.8 176.7,102.7 183.3,101.7 190.0,101.0 196.7,100.4 203.3,100.1 210.0,100.0 216.7,100.1 223.3,100.4 230.0,101.0 236.7,101.7 243.3,102.7 250.0,103.8 256.7,105.2 263.3,106.8 270.0,108.6 276.7,110.7 283.3,112.9 290.0,115.4 296.7,118.0 303.3,120.9 310.0,124.0 316.7,127.3 323.3,130.8 330.0,134.6 336.7,138.5 343.3,142.7 350.0,147.0 356.7,151.6 363.3,156.4 370.0,161.4 376.7,166.7 383.3,172.1 390.0,177.8 396.7,183.6 403.3,189.7 410.0,196.0"/>
  </g>
  <polyline points="10.0,157.5 19.2,143.6 27.5,131.2 35.2,120.4 42.2,110.9 48.7,102.6 54.7,95.5 60.3,89.4 65.5,84.3 70.3,80.1 74.9,76.8 79.1,74.2 83.1,72.3 86.8,71.1 90.4,70.4 93.7,70.3 96.9,70.6 99.9,71.3 102.7,72.4 105.4,73.8 108.0,75.4 110.4,77.3 112.7,79.3 114.9,81.5 117.1,83.7 119.1,86.0 121.0,88.3 122.9,90.6 124.7,92.8 126.4,95.0 128.0,97.1 129.6,99.0 131.1,100.8 132.6,102.5 134.0,104.1 135.4,105.4 136.7,106.6 138.0,107.6 139.2,108.4 140.4,109.1 141.5,109.6 142.6,109.9 143.7,110.0 144.7,110.0 145.7,109.9 146.7,109.6 147.7,109.2 148.6,108.7 149.5,108.1 150.3,107.4 151.2,106.6 152.0,105.8 152.8,105.0 153.6,104.1 154.3,103.2 155.1,102.3 155.8,101.4 156.5,100.6 157.1,99.8 157.8,99.0 158.5,98.3 159.1,97.6 159.7,97.0 160.3,96.5 160.9,96.0 161.5,95.7 162.0,95.4 162.6,95.1 163.1,95.0 163.6,95.0 164.1,95.0 164.6,95.1 165.1,95.2 165.6,95.4 166.1,95.7 166.5,96.0 167.0,96.4 167.4,96.8 167.8,97.2 168.3,97.7 168.7,98.2 169.1,98.6 169.5,99.1 169.9,99.6 170.3,100.1 170.6,100.5 171.0,100.9 171.4,101.3 171.7,101.7 172.1,102.0 172.4,102.3 172.7,102.5 173.1,102.7 173.4,102.9 173.7,103.0 174.0,103.0 174.3,103.0 174.6,103.0 174.9,102.9 175.2,102.8 175.5,102.7 175.8,102.5 176.1,102.3 176.4,102.0 176.6,101.8 176.9,101.5 177.1,101.2 177.4,100.9 177.7,100.6 177.9,100.3 178.2,100.0 178.4,99.7 178.6,99.5 178.9,99.2 179.1,99.0 179.3,98.7 179.5,98.5 179.8,98.4 180.0,98.2 180.2,98.1 180.4,98.0 180.6,98.0 180.8,98.0 181.0,98.0 181.2,98.0 181.4,98.1 181.6,98.2 181.8,98.3 182.0,98.4 182.2,98.6 182.4,98.8 182.6,98.9 182.7,99.1 182.9,99.3 183.1,99.5 183.3,99.7 183.4,99.9 183.6,100.2 183.8,100.3 183.9,100.5 184.1,100.7 184.3,100.9 184.4,101.0 184.6,101.1 184.7,101.2 184.9,101.3 185.0,101.4 185.2,101.4 185.3,101.4 185.5,101.4 185.6,101.4 185.8,101.4 185.9,101.3 186.0,101.2 186.2,101.2 186.3,101.0 186.4,100.9 186.6,100.8 186.7,100.7 186.8,100.5 187.0,100.4 187.1,100.2 187.2,100.1 187.3,99.9 187.5,99.8 187.6,99.6 187.7,99.5 187.8,99.4 187.9,99.3 188.1,99.2 188.2,99.1 188.3,99.0 188.4,99.0 188.5,98.9 188.6,98.9 188.7,98.9 188.8,98.9 188.9,99.0 189.0,99.0 189.1,99.0 189.3,99.1 189.4,99.2 189.5,99.3 189.6,99.4 189.7,99.5 189.8,99.6 189.9,99.7 190.0,99.8 190.0,99.9 190.1,100.0 190.2,100.2 190.3,100.3 190.4,100.4 190.5,100.5 190.6,100.5 190.7,100.6 190.8,100.7 190.9,100.7 191.0,100.8 191.0,100.8 191.1,100.8 191.2,100.8 191.3,100.8 191.4,100.8 191.5,100.8 191.5,100.8 191.6,100.7 191.7,100.6 191.8,100.6 191.9,100.5 191.9,100.4 192.0,100.3 192.1,100.3 192.2,100.2 192.3,100.1 192.3,100.0 192.4,99.9 192.5,99.8 192.6,99.7 192.6,99.6 192.7,99.6 192.8,99.5 192.8,99.5 192.9,99.4 193.0,99.4 193.1,99.4 193.1,99.3 193.2,99.3 193.3,99.3 193.3,99.3 193.4,99.4 193.5,99.4 193.5,99.4 193.6,99.5 193.6,99.5 193.7,99.6 193.8,99.6 193.8,99.7 193.9,99.8 194.0,99.9 194.0,99.9 194.1,100.0 194.1,100.1 194.2,100.1 194.3,100.2 194.3,100.3 194.4,100.3 194.4,100.4 194.5,100.4 194.6,100.5 194.6,100.5 194.7,100.5 194.7,100.5 194.8,100.6 194.8,100.6 194.9,100.5 194.9,100.5 195.0,100.5 195.1,100.5 195.1,100.4 195.2,100.4 195.2,100.4 195.3,100.3 195.3,100.2 195.4,100.2 195.4,100.1 195.5,100.1 195.5,100.0 195.6,99.9 195.6,99.9 195.7,99.8 195.7,99.8 195.8,99.7 195.8,99.7 195.9,99.6 195.9,99.6 196.0,99.6 196.0,99.6 196.1,99.6 196.1,99.5 196.1,99.5 196.2,99.5 196.2,99.6 196.3,99.6 196.3,99.6 196.4,99.6 196.4,99.7 196.5,99.7 196.5,99.7 196.6,99.8 196.6,99.8 196.6,99.9 196.7,99.9 196.7,100.0 196.8,100.0 196.8,100.1 196.8,100.1 196.9,100.2 196.9,100.2 197.0,100.3 197.0,100.3 197.1,100.3 197.1,100.3 197.1,100.4 197.2,100.4 197.2,100.4 197.3,100.4 197.3,100.4 197.3,100.4 197.4,100.4 197.4,100.3 197.4,100.3 197.5,100.3 197.5,100.3 197.6,100.2 197.6,100.2 197.6,100.1 197.7,100.1 197.7,100.1 197.7,100.0 197.8,100.0 197.8,99.9 197.8,99.9 197.9,99.9 197.9,99.8 198.0,99.8 198.0,99.8 198.0,99.7 198.1,99.7 198.1,99.7 198.1,99.7 198.2,99.7 198.2,99.7 198.2,99.7 198.3,99.7 198.3,99.7 198.3,99.7 198.4,99.7 198.4,99.7 198.4,99.8 198.5,99.8 198.5,99.8 198.5,99.9 198.5,99.9 198.6,99.9 198.6,100.0 198.6,100.0 198.7,100.0 198.7,100.1 198.7,100.1 198.8,100.1 198.8,100.2 198.8,100.2 198.9,100.2 198.9,100.2 198.9,100.3 198.9,100.3 199.0,100.3 199.0,100.3 199.0,100.3 199.1,100.3 199.1,100.3 199.1,100.3 199.1,100.2 199.2,100.2 199.2,100.2 199.2,100.2 199.3,100.2 199.3,100.1 199.3,100.1 199.3,100.1 199.4,100.0 199.4,100.0 199.4,100.0 199.4,99.9 199.5,99.9 199.5,99.9 199.5,99.8 199.6,99.8 199.6,99.8 199.6,99.8 199.6,99.8 199.7,99.8 199.7,99.8 199.7,99.7 199.7,99.7 199.8,99.8 199.8,99.8 199.8,99.8 199.8,99.8 199.9,99.8 199.9,99.8 199.9,99.8 199.9,99.9 200.0,99.9 200.0,99.9 200.0,99.9 200.0,100.0 200.1,100.0 200.1,100.0 200.1,100.1 200.1,100.1 200.1,100.1 200.2,100.1 200.2,100.2 200.2,100.2 200.2,100.2 200.3,100.2 200.3,100.2 200.3,100.2 200.3,100.2 200.4,100.2 200.4,100.2 200.4,100.2 200.4,100.2 200.4,100.2 200.5,100.2 200.5,100.2 200.5,100.1 200.5,100.1 200.5,100.1 200.6,100.1 200.6,100.1 200.6,100.0 200.6,100.0 200.7,100.0 200.7,100.0 200.7,99.9 200.7,99.9 200.7,99.9 200.8,99.9 200.8,99.9 200.8,99.8 200.8,99.8 200.8,99.8 200.9,99.8 200.9,99.8 200.9,99.8 200.9,99.8 200.9,99.8 201.0,99.8 201.0,99.8 201.0,99.8 201.0,99.8 201.0,99.9 201.1,99.9 201.1,99.9 201.1,99.9 201.1,99.9 201.1,100.0 201.2,100.0 201.2,100.0 201.2,100.0 201.2,100.1 201.2,100.1 201.2,100.1 201.3,100.1 201.3,100.1 201.3,100.1 201.3,100.2 201.3,100.2 201.4,100.2 201.4,100.2 201.4,100.2 201.4,100.2 201.4,100.2 201.4,100.2 201.5,100.2 201.5,100.1 201.5,100.1 201.5,100.1 201.5,100.1 201.5,100.1 201.6,100.1 201.6,100.1 201.6,100.0 201.6,100.0 201.6,100.0 201.6,100.0 201.7,100.0 201.7,99.9 201.7,99.9 201.7,99.9 201.7,99.9 201.7,99.9 201.8,99.9 201.8,99.9 201.8,99.8 201.8,99.8 201.8,99.8 201.8,99.8 201.9,99.8 201.9,99.8 201.9,99.9 201.9,99.9 201.9,99.9 201.9,99.9 202.0,99.9 202.0,99.9 202.0,99.9 202.0,99.9 202.0,100.0 202.0,100.0 202.0,100.0 202.1,100.0 202.1,100.0 202.1,100.1 202.1,100.1 202.1,100.1 202.1,100.1 202.2,100.1 202.2,100.1 202.2,100.1 202.2,100.1 202.2,100.1 202.2,100.1 202.2,100.1 202.3,100.1 202.3,100.1 202.3,100.1 202.3,100.1 202.3,100.1 202.3,100.1 202.3,100.1 202.4,100.1 202.4,100.1 202.4,100.0 202.4,100.0 202.4,100.0 202.4,100.0 202.4,100.0 202.4,100.0 202.5,100.0 202.5,99.9 202.5,99.9 202.5,99.9 202.5,99.9 202.5,99.9 202.5,99.9 202.6,99.9 202.6,99.9 202.6,99.9 202.6,99.9 202.6,99.9 202.6,99.9 202.6,99.9 202.6,99.9 202.7,99.9 202.7,99.9 202.7,99.9 202.7,99.9 202.7,99.9 202.7,100.0 202.7,100.0 202.8,100.0 202.8,100.0 202.8,100.0 202.8,100.0 202.8,100.0 202.8,100.1 202.8,100.1 202.8,100.1 202.9,100.1 210.0,100.0 217.1,99.9 217.2,99.9 217.2,99.9 217.2,99.9 217.2,100.0 217.2,100.0 217.2,100.0 217.2,100.0 217.2,100.0 217.3,100.0 217.3,100.0 217.3,100.1 217.3,100.1 217.3,100.1 217.3,100.1 217.3,100.1 217.4,100.1 217.4,100.1 217.4,100.1 217.4,100.1 217.4,100.1 217.4,100.1 217.4,100.1 217.4,100.1 217.5,100.1 217.5,100.1 217.5,100.1 217.5,100.1 217.5,100.1 217.5,100.1 217.5,100.0 217.6,100.0 217.6,100.0 217.6,100.0 217.6,100.0 217.6,100.0 217.6,100.0 217.6,99.9 217.6,99.9 217.7,99.9 217.7,99.9 217.7,99.9 217.7,99.9 217.7,99.9 217.7,99.9 217.7,99.9 217.8,99.9 217.8,99.9 217.8,99.9 217.8,99.9 217.8,99.9 217.8,99.9 217.8,99.9 217.9,99.9 217.9,99.9 217.9,99.9 217.9,99.9 217.9,100.0 217.9,100.0 218.0,100.0 218.0,100.0 218.0,100.0 218.0,100.1 218.0,100.1 218.0,100.1 218.0,100.1 218.1,100.1 218.1,100.1 218.1,100.1 218.1,100.1 218.1,100.2 218.1,100.2 218.2,100.2 218.2,100.2 218.2,100.2 218.2,100.2 218.2,100.1 218.2,100.1 218.3,100.1 218.3,100.1 218.3,100.1 218.3,100.1 218.3,100.1 218.3,100.0 218.4,100.0 218.4,100.0 218.4,100.0 218.4,100.0 218.4,99.9 218.4,99.9 218.5,99.9 218.5,99.9 218.5,99.9 218.5,99.9 218.5,99.9 218.5,99.8 218.6,99.8 218.6,99.8 218.6,99.8 218.6,99.8 218.6,99.8 218.6,99.8 218.7,99.8 218.7,99.8 218.7,99.9 218.7,99.9 218.7,99.9 218.8,99.9 218.8,99.9 218.8,99.9 218.8,100.0 218.8,100.0 218.8,100.0 218.9,100.0 218.9,100.1 218.9,100.1 218.9,100.1 218.9,100.1 219.0,100.1 219.0,100.2 219.0,100.2 219.0,100.2 219.0,100.2 219.1,100.2 219.1,100.2 219.1,100.2 219.1,100.2 219.1,100.2 219.2,100.2 219.2,100.2 219.2,100.2 219.2,100.1 219.2,100.1 219.3,100.1 219.3,100.1 219.3,100.1 219.3,100.0 219.3,100.0 219.4,100.0 219.4,100.0 219.4,99.9 219.4,99.9 219.5,99.9 219.5,99.9 219.5,99.9 219.5,99.8 219.5,99.8 219.6,99.8 219.6,99.8 219.6,99.8 219.6,99.8 219.6,99.8 219.7,99.8 219.7,99.8 219.7,99.8 219.7,99.8 219.8,99.8 219.8,99.8 219.8,99.8 219.8,99.9 219.9,99.9 219.9,99.9 219.9,99.9 219.9,100.0 219.9,100.0 220.0,100.0 220.0,100.1 220.0,100.1 220.0,100.1 220.1,100.1 220.1,100.2 220.1,100.2 220.1,100.2 220.2,100.2 220.2,100.2 220.2,100.2 220.2,100.2 220.3,100.3 220.3,100.3 220.3,100.2 220.3,100.2 220.4,100.2 220.4,100.2 220.4,100.2 220.4,100.2 220.5,100.2 220.5,100.1 220.5,100.1 220.6,100.1 220.6,100.0 220.6,100.0 220.6,100.0 220.7,99.9 220.7,99.9 220.7,99.9 220.7,99.8 220.8,99.8 220.8,99.8 220.8,99.8 220.9,99.8 220.9,99.7 220.9,99.7 220.9,99.7 221.0,99.7 221.0,99.7 221.0,99.7 221.1,99.7 221.1,99.7 221.1,99.8 221.1,99.8 221.2,99.8 221.2,99.8 221.2,99.9 221.3,99.9 221.3,99.9 221.3,100.0 221.4,100.0 221.4,100.0 221.4,100.1 221.5,100.1 221.5,100.1 221.5,100.2 221.5,100.2 221.6,100.2 221.6,100.3 221.6,100.3 221.7,100.3 221.7,100.3 221.7,100.3 221.8,100.3 221.8,100.3 221.8,100.3 221.9,100.3 221.9,100.3 221.9,100.3 222.0,100.3 222.0,100.2 222.0,100.2 222.1,100.2 222.1,100.1 222.2,100.1 222.2,100.1 222.2,100.0 222.3,100.0 222.3,99.9 222.3,99.9 222.4,99.9 222.4,99.8 222.4,99.8 222.5,99.7 222.5,99.7 222.6,99.7 222.6,99.7 222.6,99.6 222.7,99.6 222.7,99.6 222.7,99.6 222.8,99.6 222.8,99.6 222.9,99.6 222.9,99.7 222.9,99.7 223.0,99.7 223.0,99.7 223.1,99.8 223.1,99.8 223.2,99.9 223.2,99.9 223.2,100.0 223.3,100.0 223.3,100.1 223.4,100.1 223.4,100.2 223.4,100.2 223.5,100.3 223.5,100.3 223.6,100.3 223.6,100.4 223.7,100.4 223.7,100.4 223.8,100.4 223.8,100.5 223.9,100.5 223.9,100.5 223.9,100.4 224.0,100.4 224.0,100.4 224.1,100.4 224.1,100.4 224.2,100.3 224.2,100.3 224.3,100.2 224.3,100.2 224.4,100.1 224.4,100.1 224.5,100.0 224.5,99.9 224.6,99.9 224.6,99.8 224.7,99.8 224.7,99.7 224.8,99.6 224.8,99.6 224.9,99.6 224.9,99.5 225.0,99.5 225.1,99.5 225.1,99.5 225.2,99.4 225.2,99.4 225.3,99.5 225.3,99.5 225.4,99.5 225.4,99.5 225.5,99.6 225.6,99.6 225.6,99.7 225.7,99.7 225.7,99.8 225.8,99.9 225.9,99.9 225.9,100.0 226.0,100.1 226.0,100.1 226.1,100.2 226.2,100.3 226.2,100.4 226.3,100.4 226.4,100.5 226.4,100.5 226.5,100.6 226.5,100.6 226.6,100.6 226.7,100.7 226.7,100.7 226.8,100.7 226.9,100.7 226.9,100.6 227.0,100.6 227.1,100.6 227.2,100.5 227.2,100.5 227.3,100.4 227.4,100.4 227.4,100.3 227.5,100.2 227.6,100.1 227.7,100.0 227.7,99.9 227.8,99.8 227.9,99.7 228.0,99.7 228.1,99.6 228.1,99.5 228.2,99.4 228.3,99.4 228.4,99.3 228.5,99.2 228.5,99.2 228.6,99.2 228.7,99.2 228.8,99.2 228.9,99.2 229.0,99.2 229.0,99.2 229.1,99.3 229.2,99.3 229.3,99.4 229.4,99.5 229.5,99.5 229.6,99.6 229.7,99.7 229.8,99.8 229.9,100.0 230.0,100.1 230.0,100.2 230.1,100.3 230.2,100.4 230.3,100.5 230.4,100.6 230.5,100.7 230.6,100.8 230.7,100.9 230.9,101.0 231.0,101.0 231.1,101.0 231.2,101.1 231.3,101.1 231.4,101.1 231.5,101.1 231.6,101.0 231.7,101.0 231.8,100.9 231.9,100.8 232.1,100.7 232.2,100.6 232.3,100.5 232.4,100.4 232.5,100.2 232.7,100.1 232.8,99.9 232.9,99.8 233.0,99.6 233.2,99.5 233.3,99.3 233.4,99.2 233.6,99.1 233.7,99.0 233.8,98.8 234.0,98.8 234.1,98.7 234.2,98.6 234.4,98.6 234.5,98.6 234.7,98.6 234.8,98.6 235.0,98.6 235.1,98.7 235.3,98.8 235.4,98.9 235.6,99.0 235.7,99.1 235.9,99.3 236.1,99.5 236.2,99.7 236.4,99.8 236.6,100.1 236.7,100.3 236.9,100.5 237.1,100.7 237.3,100.9 237.4,101.1 237.6,101.2 237.8,101.4 238.0,101.6 238.2,101.7 238.4,101.8 238.6,101.9 238.8,102.0 239.0,102.0 239.2,102.0 239.4,102.0 239.6,102.0 239.8,101.9 240.0,101.8 240.2,101.6 240.5,101.5 240.7,101.3 240.9,101.0 241.1,100.8 241.4,100.5 241.6,100.3 241.8,100.0 242.1,99.7 242.3,99.4 242.6,99.1 242.9,98.8 243.1,98.5 243.4,98.2 243.6,98.0 243.9,97.7 244.2,97.5 244.5,97.3 244.8,97.2 245.1,97.1 245.4,97.0 245.7,97.0 246.0,97.0 246.3,97.0 246.6,97.1 246.9,97.3 247.3,97.5 247.6,97.7 247.9,98.0 248.3,98.3 248.6,98.7 249.0,99.1 249.4,99.5 249.7,99.9 250.1,100.4 250.5,100.9 250.9,101.4 251.3,101.8 251.7,102.3 252.2,102.8 252.6,103.2 253.0,103.6 253.5,104.0 253.9,104.3 254.4,104.6 254.9,104.8 255.4,104.9 255.9,105.0 256.4,105.0 256.9,105.0 257.4,104.9 258.0,104.6 258.5,104.3 259.1,104.0 259.7,103.5 260.3,103.0 260.9,102.4 261.5,101.7 262.2,101.0 262.9,100.2 263.5,99.4 264.2,98.6 264.9,97.7 265.7,96.8 266.4,95.9 267.2,95.0 268.0,94.2 268.8,93.4 269.7,92.6 270.5,91.9 271.4,91.3 272.3,90.8 273.3,90.4 274.3,90.1 275.3,90.0 276.3,90.0 277.4,90.1 278.5,90.4 279.6,90.9 280.8,91.6 282.0,92.4 283.3,93.4 284.6,94.6 286.0,95.9 287.4,97.5 288.9,99.2 290.4,101.0 292.0,102.9 293.6,105.0 295.3,107.2 297.1,109.4 299.0,111.7 300.9,114.0 302.9,116.3 305.1,118.5 307.3,120.7 309.6,122.7 312.0,124.6 314.6,126.2 317.3,127.6 320.1,128.7 323.1,129.4 326.3,129.7 329.6,129.6 333.2,128.9 336.9,127.7 340.9,125.8 345.1,123.2 349.7,119.9 354.5,115.7 359.7,110.6 365.3,104.5 371.3,97.4 377.8,89.1 384.8,79.6 392.5,68.8 400.8,56.4 410.0,42.5" stroke="currentColor" fill="none" stroke-width="1.3"/>
  <g fill="currentColor" font-size="11" stroke="none">
    <text x="295" y="53">y = x²</text>
    <text x="325" y="190">y = −x²</text>
    <text x="222" y="18">f(x) = x² sin(1/x)</text>
    <text x="222" y="32">被夹在 ±x² 之间 ⇒ f′(0)=0</text>
    <text x="60" y="190">靠近 0 时切线方向来回翻转 ⇒ f′(x) 在 0 处无极限</text>
    <text x="404" y="112">x</text>
    <text x="214" y="14">y</text>
  </g>
</svg>
<p style="text-align:center"><small>看什么：曲线被两条虚线抛物线 $\pm x^2$ 夹住，所以在原点"被压平"，切线就是 $x$ 轴（$f^{\prime}(0)=0$）；但越靠近原点振荡越密，切线方向在正负之间来回翻转，导函数 $f^{\prime}(x)$ 在 $x\to0$ 时没有极限。</small></p>
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
<p><b>解答：</b>$\arctan x=x-\dfrac{x^3}3+o(x^3)$；$\dfrac{x}{1+ax^2}=x\big(1-ax^2+o(x^2)\big)=x-ax^3+o(x^3)$。相减得 $f(x)=\Big(a-\dfrac13\Big)x^3+o(x^3)$。另一方面，带皮亚诺余项的麦克劳林公式给出 $f(x)=f(0)+f'(0)x+\dfrac{f''(0)}{2!}x^2+\dfrac{f'''(0)}{3!}x^3+o(x^3)$，而这种"多项式 $+\,o(x^3)$"的写法是唯一的（两个展开相减，若某个系数不同，低次项会与 $o(x^3)$ 矛盾），所以 $x^3$ 的系数必须相等：$\dfrac{f'''(0)}{3!}=a-\dfrac13$，即 $6a-2=1$，$a=\dfrac12$。（这里用到的 $\arctan x$ 与 $\dfrac1{1+u}$ 的展开式见 diff.taylor。）</p>
<p><b>答案：$\dfrac12$。</b></p>
<p><b>告诉我们什么：</b>$f^{(n)}(0)=n!\times(x^n\text{ 的系数})$——系数要乘 $n!$，这是最常见的失分点。若用本篇方法硬算，$\dfrac{x}{1+ax^2}$ 的三阶导需用商法则三次，可行但不推荐。另外要注意<b>奇偶性在这里帮不上忙</b>：$f$ 是奇函数，由补充命题 $f'$ 偶、$f''$ 奇、$f'''$ 偶，而偶函数在 $0$ 处的值没有任何限制，所以不能像上一题那样"一眼看出"，必须真的算出 $x^3$ 的系数。奇偶性唯一的用处是：奇函数的展开式只含奇次项，$x^2$ 项不必去算。</p>
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
<p><b>综合与变化：</b>本考点很少单独出大题，但它是整章的"计算底座"：中值定理、泰勒公式、极值、凹凸性、曲率、微分方程通通要先会求导。近几年的趋势是把求导法则和<b>概念辨析</b>绑在一起（2023 年第 3 题），考公式的适用条件而不只是公式本身；填空题的参数方程二阶导数题则是反复出现的保留题型（2010、2013、2020、2021 四次，2023 年又以变式出现）。复习建议：（1）参数方程二阶导、隐函数二阶导的流程练到不假思索；（2）$n$ 阶导数的三种套路（分解、莱布尼茨、展开比较系数）各做几题；（3）分段点处"段内用法则、点上用定义"反复体会，并掌握定理 9 及其反例。</p>`
      },
      {
        kind: 'check', title: '自测',
        items: [
          { q: R`<p>判断对错并说明理由：若 $f'(x_0)$ 存在，则 $\lim\limits_{x\to x_0}f'(x)=f'(x_0)$。</p>`, a: R`<p><b>错。</b>$f'(x_0)$ 存在只要求差商有极限，不要求导函数在 $x_0$ 处连续。反例 $f(x)=x^2\sin\frac1x\ (x\neq0),\ f(0)=0$：$f'(0)=0$，但 $f'(x)=2x\sin\frac1x-\cos\frac1x$ 在 $0$ 处无极限。定理 9 的方向是"导函数极限存在 $\Rightarrow$ 导数等于它"，反过来不成立。不过导函数的间断点只能是第二类的。</p>` },
          { q: R`<p>设 $f$ 可导，$y=f(\sin^2x)$，则 $y'=$（　　）</p>`, options: [R`<p>$f'(\sin^2x)$</p>`, R`<p>$2\sin x\,f'(\sin^2x)$</p>`, R`<p>$\sin2x\,f'(\sin^2x)$</p>`, R`<p>$\sin2x\,f'(x)$</p>`], correct: 2, explain: R`<p>三层复合：$y=f(u),\ u=v^2,\ v=\sin x$。$y'=f'(u)\cdot2v\cdot\cos x=f'(\sin^2x)\cdot2\sin x\cos x=\sin2x\,f'(\sin^2x)$。选 (A) 是漏掉内层导数，(D) 混淆了 $f'(\sin^2x)$ 与 $f'(x)$。</p>` },
          { q: R`<p>设 $y=y(x)$ 由 $x=\sin t,\ y=t\sin t+\cos t$ 确定，求 $\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}$ 在 $t=\dfrac\pi4$ 处的值。</p>`, a: R`<p>$x'(t)=\cos t$，$y'(t)=\sin t+t\cos t-\sin t=t\cos t$，故 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=t$。再对 $x$ 求导：$\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}=\dfrac{(t)'_t}{\cos t}=\dfrac1{\cos t}$，$t=\frac\pi4$ 时为 $\sqrt2$。（这是 <span class="qref" data-q="2013-11">2013 年第 11 题</span>。）要点：一阶导数化简为 $t$ 后，二阶导数不是 $1$，还要除以 $x'(t)$。</p>` },
          { q: R`<p>设 $y=x^2\ln x$，求 $y^{(n)}\ (n\ge3)$。</p>`, a: R`<p>用莱布尼茨公式，令 $u=\ln x,\ v=x^2$：$y^{(n)}=\mathrm C_n^0(\ln x)^{(n)}x^2+\mathrm C_n^1(\ln x)^{(n-1)}\cdot2x+\mathrm C_n^2(\ln x)^{(n-2)}\cdot2$。代入 $(\ln x)^{(k)}=\dfrac{(-1)^{k-1}(k-1)!}{x^k}$：
$$y^{(n)}=\frac{(-1)^{n-1}(n-1)!}{x^{n-2}}+\frac{2n(-1)^{n-2}(n-2)!}{x^{n-2}}+\frac{n(n-1)(-1)^{n-3}(n-3)!}{x^{n-2}}.$$
提出 $\dfrac{(-1)^{n-3}(n-3)!}{x^{n-2}}$：括号内为 $(n-1)(n-2)-2n(n-2)+n(n-1)=n^2-3n+2-2n^2+4n+n^2-n=2$。故 $y^{(n)}=\dfrac{2(-1)^{n-3}(n-3)!}{x^{n-2}}$。另一种更快的思路：$y'''=\dfrac2x$（算三次导），再套 $\big(\frac1x\big)^{(n-3)}$ 公式，结果相同。</p>` },
          { q: R`<p>设 $y=y(x)$ 由 $y-x\mathrm{e}^y=1$ 确定，求 $y'(0)$ 与 $y''(0)$。</p>`, a: R`<p>$x=0$ 时 $y=1$。求导：$y'-\mathrm{e}^y-x\mathrm{e}^yy'=0$，代 $(0,1)$：$y'(0)=\mathrm{e}$。再求导：$y''-\mathrm{e}^yy'-\mathrm{e}^yy'-x(\mathrm{e}^yy'\cdot y'+\mathrm{e}^yy'')=0$，代 $x=0,y=1,y'=\mathrm{e}$：$y''(0)=2\mathrm{e}^2$。要点：先解出该点的 $y$；$x\mathrm{e}^y$ 是乘积且 $\mathrm{e}^y$ 是复合；先求导后代值。</p>` },
          { q: R`<p>设 $f(x)=\begin{cases}\dfrac{1-\cos x}{x},&x\neq0,\\ 0,&x=0,\end{cases}$ 则 $f'(0)=$（　　）</p>`, options: [R`<p>不存在</p>`, R`<p>$0$</p>`, R`<p>$\dfrac12$</p>`, R`<p>$1$</p>`], correct: 2, explain: R`<p>分段点用定义：$f'(0)=\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x}=\lim\limits_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12$（等价无穷小 $1-\cos x\sim\frac{x^2}2$）。不能把 $x\neq0$ 的公式求导再"代 $0$"——那样会遇到 $\frac00$；也不能因为"分段"就说不存在。</p>` },
          { q: R`<p>判断对错并说明理由：设 $y=f(x)$ 可导且 $f'(x)\neq0$，其反函数为 $x=g(y)$，则 $g''(y)=\dfrac{1}{f''(x)}$。</p>`, a: R`<p><b>错。</b>只有一阶导数互为倒数：$g'(y)=\dfrac1{f'(x)}$。二阶导数要对 $y$ 再求导，$\dfrac1{f'(x)}$ 是 $x$ 的函数，须乘 $\dfrac{\mathrm{d}x}{\mathrm{d}y}$：$g''(y)=-\dfrac{f''(x)}{[f'(x)]^2}\cdot\dfrac1{f'(x)}=-\dfrac{f''(x)}{[f'(x)]^3}$。例如 $f(x)=x+\mathrm{e}^x$ 在 $x=0$ 处，$g''=-\frac18$，而 $\frac1{f''(0)}=1$。</p>` },
          { q: R`<p>设 $f(x)=(\mathrm{e}^x-1)(\mathrm{e}^{2x}-2)(\mathrm{e}^{3x}-3)$，求 $f'(0)$。</p>`, a: R`<p>由乘积法则 $f'=u'vw+uv'w+uvw'$，在 $x=0$ 处 $u(0)=\mathrm{e}^0-1=0$，含 $u(0)$ 的两项为零，只剩 $u'(0)v(0)w(0)=1\cdot(1-2)(1-3)=2$。这是 <span class="qref" data-q="2012-2">2012 年第 2 题</span>（$n$ 个因子版本）的思路：某因子在该点为零时，只需对它求导、其余代值。</p>` },
          { q: R`<p>设 $f$ 在 $(-\infty,+\infty)$ 上可导且为偶函数，$f'(1)=3$，则 $f'(-1)=$（　　）</p>`, options: [R`<p>$3$</p>`, R`<p>$-3$</p>`, R`<p>$0$</p>`, R`<p>无法确定</p>`], correct: 1, explain: R`<p>对恒等式 $f(-x)=f(x)$ 两边求导：$-f'(-x)=f'(x)$，令 $x=1$ 得 $f'(-1)=-f'(1)=-3$。偶函数的导函数是奇函数。</p>` }
        ]
      }
    ]
  };
});
