registerLesson(function (R) {
  return {
    id: 'mdiff.dir', ch: 'mdiff', title: '方向导数与梯度',
    summary: R`偏导数只回答"沿坐标轴走变化多快"，方向导数把问题推广到任意方向；可微时方向导数等于梯度与单位方向向量的内积，于是梯度方向就是函数增长最快的方向，梯度的模就是最大方向导数。考研几乎每隔两三年就直接出一道小题，公式本身不难，难在"单位化"与"可微才能用公式"两个细节。`,
    prereq: ['mdiff.diffable', 'mdiff.chain', 'mdiff.implicit'],
    sections: [
      {
        kind: 'why', title: '为什么需要方向导数：偏导数只看了两个方向',
        html: R`<p>设 $z=f(x,y)$ 表示一座山的海拔（$x,y$ 是地图坐标）。站在点 $P_0(x_0,y_0)$，偏导数 $f_x(x_0,y_0)$ 告诉我们：<b>沿 $x$ 轴正方向</b>走一小段，海拔变化率是多少；$f_y(x_0,y_0)$ 则是沿 $y$ 轴正方向的变化率。但登山的人可以朝<b>任意方向</b>走，东北方向、西偏南 $20^\circ$ 方向……沿这些方向海拔变化多快？偏导数本身不直接回答。</p>
<p>更进一步，站在山坡上我们自然会问两个问题：</p>
<ul>
<li>沿<b>哪个方向</b>走海拔上升最快？上升最快的速率是多少？</li>
<li>沿哪个方向走海拔<b>不变</b>（即沿等高线走）？</li>
</ul>
<p>第一个问题引出<b>梯度</b>，第二个问题引出<b>梯度与等值线垂直</b>这个几何事实。这两个问题在物理里到处都是：温度场 $T(x,y,z)$ 中热量沿温度下降最快的方向流动，电势场中电场强度 $\mathbf{E}=-\nabla\varphi$，等等。</p>
<p>怎么把"沿某个方向的变化率"写成数学？一元函数的导数是 $\lim\limits_{t\to0}\dfrac{f(x_0+t)-f(x_0)}{t}$，本质是"沿数轴走 $t$，函数增量除以走的距离"。推广到平面上：从 $P_0$ 出发沿单位向量 $\mathbf{e}_l=(\cos\alpha,\cos\beta)$ 走距离 $t$ 到达点 $P=(x_0+t\cos\alpha,\ y_0+t\cos\beta)$，于是"沿 $\mathbf{l}$ 的变化率"就应当是</p>
$$\lim_{t\to0^+}\frac{f(x_0+t\cos\alpha,\ y_0+t\cos\beta)-f(x_0,y_0)}{t}.$$
<p>这里用<b>单位</b>向量是为了让 $t$ 恰好是走过的距离（否则"变化率"的分母就不是距离了）；用 $t\to0^+$ 是因为"方向"是有指向的，只往前走不往后退。下图画出了这个参数化：</p>
<svg viewBox="0 0 420 300" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="arr-dir1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" fill="none" stroke-width="1.2">
<line x1="30" y1="260" x2="400" y2="260" marker-end="url(#arr-dir1)"/>
<line x1="30" y1="260" x2="30" y2="20" marker-end="url(#arr-dir1)"/>
<line x1="150" y1="180" x2="254" y2="120" stroke-width="2" marker-end="url(#arr-dir1)"/>
<line x1="150" y1="180" x2="254" y2="180" stroke-dasharray="4,3"/>
<line x1="254" y1="180" x2="254" y2="120" stroke-dasharray="4,3"/>
<line x1="150" y1="180" x2="150" y2="260" stroke-dasharray="2,3"/>
<line x1="150" y1="180" x2="30" y2="180" stroke-dasharray="2,3"/>
<path d="M180,180 A30,30 0 0 0 176,165"/>
</g>
<g fill="currentColor"><circle cx="150" cy="180" r="3"/><circle cx="254" cy="120" r="3"/></g>
<g fill="currentColor" font-size="13" font-family="serif">
<text x="400" y="280">x</text><text x="12" y="25">y</text>
<text x="84" y="196">P₀(x₀,y₀)</text><text x="258" y="114">P</text>
<text x="185" y="196">t cosα</text><text x="260" y="155">t cosβ</text>
<text x="183" y="176">α</text><text x="205" y="138">l</text>
<text x="128" y="276">x₀</text><text x="8" y="184">y₀</text>
</g>
</svg>
<p>本篇的任务就是：(1) 把上面的极限严格定义成<b>方向导数</b>；(2) 证明当 $f$ 可微时它可以用偏导数算出来——这是考试中真正用的公式；(3) 引入<b>梯度</b>向量，说明"方向导数 $=$ 梯度在该方向的投影"，从而回答"哪个方向最快、最快多少"。</p>`
      },
      {
        kind: 'def', title: '方向导数的定义',
        html: R`<p><b>定义（二元函数的方向导数）</b>　设函数 $z=f(x,y)$ 在点 $P_0(x_0,y_0)$ 的某邻域内有定义，$\mathbf{l}$ 是一个非零向量，其单位向量为 $\mathbf{e}_l=(\cos\alpha,\cos\beta)$（$\alpha,\beta$ 是 $\mathbf{l}$ 与 $x$ 轴、$y$ 轴正向的夹角，称为方向角，满足 $\cos^2\alpha+\cos^2\beta=1$）。若极限</p>
$$\lim_{t\to0^+}\frac{f(x_0+t\cos\alpha,\ y_0+t\cos\beta)-f(x_0,y_0)}{t}$$
<p>存在，则称此极限为 $f$ 在 $P_0$ 处<b>沿方向 $\mathbf{l}$ 的方向导数</b>，记作 $\left.\dfrac{\partial f}{\partial \mathbf{l}}\right|_{(x_0,y_0)}$。</p>
<p><b>定义（三元函数的方向导数）</b>　对 $u=f(x,y,z)$ 与单位向量 $\mathbf{e}_l=(\cos\alpha,\cos\beta,\cos\gamma)$（$\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$），</p>
$$\left.\frac{\partial f}{\partial \mathbf{l}}\right|_{P_0}=\lim_{t\to0^+}\frac{f(x_0+t\cos\alpha,\ y_0+t\cos\beta,\ z_0+t\cos\gamma)-f(x_0,y_0,z_0)}{t}.$$
<p><b>逐字拆解：</b></p>
<ul>
<li><b>"某邻域内有定义"</b>：要让点 $P_0$ 沿任何方向走一小段都不出定义域，否则极限中的函数值无从谈起。</li>
<li><b>"单位向量 $\mathbf{e}_l$"</b>：方向导数只与<b>方向</b>有关，与 $\mathbf{l}$ 的长度无关。题目给的往往是非单位向量（如 $\mathbf{n}=(1,2,2)$），<b>必须先除以模长</b>，否则求出的是"沿 $\mathbf{l}$ 走参数 $t$ 的变化率"而非"沿单位距离的变化率"，数值会差 $|\mathbf{l}|$ 倍。这是本考点失分第一大原因。</li>
<li><b>"$t\to0^+$"</b>：单侧极限。当 $t>0$ 时点 $(x_0+t\cos\alpha,y_0+t\cos\beta)$ 确实在从 $P_0$ 出发沿 $\mathbf{l}$ 的<b>射线</b>上；若允许 $t<0$，点就跑到相反方向去了。所以沿 $\mathbf{l}$ 与沿 $-\mathbf{l}$ 的方向导数是<b>两个不同的极限</b>，一般没有必然关系（可微时才有 $\partial f/\partial(-\mathbf{l})=-\partial f/\partial\mathbf{l}$，见下一节定理）。</li>
<li><b>为什么单位向量的分量是"夹角的余弦"</b>：单位向量 $\mathbf{e}_l$ 与 $x$ 轴单位向量 $\mathbf{i}$ 的内积 $\mathbf{e}_l\cdot\mathbf{i}=|\mathbf{e}_l||\mathbf{i}|\cos\alpha=\cos\alpha$，而 $\mathbf{e}_l\cdot\mathbf{i}$ 又恰是 $\mathbf{e}_l$ 的第一个分量；同理第二个分量是 $\cos\beta$。所以 $\mathbf{e}_l=(\cos\alpha,\cos\beta)$ 不是额外假设，而是"单位向量的分量"本来的含义，$\cos^2\alpha+\cos^2\beta=1$ 就是 $|\mathbf{e}_l|=1$。$\cos\alpha,\cos\beta$ 称为 $\mathbf{l}$ 的<b>方向余弦</b>，对任意非零向量 $\mathbf{l}=(l_1,l_2)$ 有 $\cos\alpha=\dfrac{l_1}{|\mathbf{l}|},\ \cos\beta=\dfrac{l_2}{|\mathbf{l}|}$——这就是"单位化"。</li>
<li><b>平面上用一个角就够了</b>：若 $\mathbf{l}$ 从 $x$ 轴正向<b>逆时针</b>转过角 $\varphi$（$0\le\varphi<2\pi$），则 $\mathbf{e}_l=(\cos\varphi,\sin\varphi)$。这与方向角写法一致：$\cos\alpha=\cos\varphi$，$\cos\beta=\sin\varphi$（$\varphi$ 在 $(\pi,2\pi)$ 内时 $\sin\varphi<0$，对应 $\beta$ 为钝角）。但若题目只说"与 $x$ 轴正向的夹角为 $\alpha$"（$0\le\alpha\le\pi$），这只确定了 $\cos\alpha$，方向可能在 $x$ 轴上方（$\mathbf{e}_l=(\cos\alpha,\sin\alpha)$）也可能在下方（$\mathbf{e}_l=(\cos\alpha,-\sin\alpha)$），要看清指向哪一侧。</li>
<li><b>分母是 $t$ 而不是 $t\cos\alpha$</b>：$t$ 正是点 $P$ 到 $P_0$ 的距离 $|P_0P|=\sqrt{(t\cos\alpha)^2+(t\cos\beta)^2}=t$（这正是要求单位向量的原因），所以方向导数的含义是"每走单位距离函数变化多少"。</li>
</ul>
<p><b>方向导数与偏导数的关系。</b>取 $\mathbf{l}=\mathbf{i}=(1,0)$，则 $\dfrac{\partial f}{\partial \mathbf{i}}=\lim\limits_{t\to0^+}\dfrac{f(x_0+t,y_0)-f(x_0,y_0)}{t}$，这是关于 $x$ 的<b>右</b>导数；取 $\mathbf{l}=-\mathbf{i}$ 得 $\lim\limits_{t\to0^+}\dfrac{f(x_0-t,y_0)-f(x_0,y_0)}{t}$，它等于关于 $x$ 的左导数的<b>相反数</b>。因此：</p>
$$f_x(x_0,y_0)\ \text{存在}\iff \frac{\partial f}{\partial \mathbf{i}}\ \text{与}\ \frac{\partial f}{\partial(-\mathbf{i})}\ \text{都存在且互为相反数},\quad\text{此时 } f_x=\frac{\partial f}{\partial \mathbf{i}}.$$
<p>所以<b>偏导数存在 ⇒ 沿坐标轴正负方向的方向导数存在</b>，反之不成立。</p>
<p><b>正例。</b>$f(x,y)=\sqrt{x^2+y^2}$（圆锥面）在原点沿任意方向 $\mathbf{e}_l=(\cos\alpha,\cos\beta)$：</p>
$$\frac{\partial f}{\partial\mathbf{l}}\bigg|_{(0,0)}=\lim_{t\to0^+}\frac{\sqrt{t^2\cos^2\alpha+t^2\cos^2\beta}-0}{t}=\lim_{t\to0^+}\frac{t}{t}=1.$$
<p>沿每个方向的方向导数都存在且等于 $1$（圆锥面上每条母线的坡度都是 $1$），但 $f_x(0,0)=\lim\limits_{t\to0}\dfrac{|t|}{t}$ 不存在。这说明：<b>方向导数处处存在，偏导数却可以不存在</b>，更谈不上可微。下图把这件事画在一条直线上：</p>
<svg viewBox="0 0 420 240" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="arr-dir3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" fill="none" stroke-width="1.2">
<line x1="30" y1="190" x2="395" y2="190" marker-end="url(#arr-dir3)"/>
<line x1="210" y1="190" x2="210" y2="20" marker-end="url(#arr-dir3)"/>
<polyline points="60,40 210,190 360,40" stroke-width="1.8"/>
<line x1="210" y1="190" x2="296" y2="104" stroke-width="2.4" marker-end="url(#arr-dir3)"/>
<line x1="210" y1="190" x2="124" y2="104" stroke-width="2.4" marker-end="url(#arr-dir3)"/>
</g>
<g fill="currentColor"><circle cx="210" cy="190" r="3"/></g>
<g fill="currentColor" font-size="13" font-family="serif">
<text x="398" y="205">t</text><text x="218" y="32">φ(t) = f(P₀ + t eₗ) = |t|</text>
<text x="200" y="207">O</text>
<text x="298" y="124">斜率 +1</text><text x="64" y="124">斜率 −1</text>
<text x="236" y="222">t&gt;0：沿 l 走，上坡</text><text x="24" y="222">t&lt;0：沿 −l 走，也上坡</text>
</g>
</svg>
<p>图中画的是把 $f$ 限制在过原点、方向为 $\mathbf{e}_l$ 的直线上得到的一元函数 $\varphi(t)=f(t\cos\alpha,t\cos\beta)=|t|$。沿 $\mathbf{l}$ 的方向导数就是 $\varphi$ 在 $0$ 处的<b>右</b>导数 $+1$；沿 $-\mathbf{l}$ 的方向导数是"向左走每单位距离的增量"，即左导数的相反数，也是 $+1$。而取 $\mathbf{l}=\mathbf{i}$ 时 $\varphi(t)=f(t,0)$，偏导数 $f_x(0,0)=\varphi'(0)$ 要求左右导数<b>相等</b>，这里左 $-1$、右 $+1$，所以不存在。一句话：方向导数只看一侧的坡度，偏导数要看两侧是否接成一条直线。</p>
<p><b>反例（方向导数不存在）。</b>$f(x,y)=\begin{cases}\dfrac{xy}{x^2+y^2},&(x,y)\ne(0,0)\\ 0,&(x,y)=(0,0)\end{cases}$ 在原点沿 $\mathbf{e}_l=\left(\tfrac{1}{\sqrt2},\tfrac{1}{\sqrt2}\right)$：$f\!\left(\tfrac{t}{\sqrt2},\tfrac{t}{\sqrt2}\right)=\tfrac12$（$t\ne0$），于是差商为 $\dfrac{1/2-0}{t}\to+\infty$，方向导数不存在。但 $f_x(0,0)=f_y(0,0)=0$ 都存在。所以<b>偏导数存在也推不出任意方向的方向导数存在</b>——偏导存在只管两条坐标轴。</p>
<blockquote><p>一句话：方向导数是"沿一条射线的单侧导数"，它和偏导数、可微性之间的蕴含关系只有一条可靠的箭头——<b>可微 ⇒ 沿任何方向的方向导数都存在</b>（下一节定理），其余方向都有反例。</p></blockquote>`
      },
      {
        kind: 'thm', title: '方向导数的计算公式（可微时）',
        statement: R`<p>设 $z=f(x,y)$ 在点 $P_0(x_0,y_0)$ <b>可微</b>，则 $f$ 在 $P_0$ 沿任意方向 $\mathbf{l}$（单位向量 $\mathbf{e}_l=(\cos\alpha,\cos\beta)$）的方向导数都存在，且</p>
$$\left.\frac{\partial f}{\partial\mathbf{l}}\right|_{(x_0,y_0)}=f_x(x_0,y_0)\cos\alpha+f_y(x_0,y_0)\cos\beta.$$
<p>对三元函数 $u=f(x,y,z)$ 在 $P_0$ 可微，单位向量 $\mathbf{e}_l=(\cos\alpha,\cos\beta,\cos\gamma)$，则</p>
$$\left.\frac{\partial f}{\partial\mathbf{l}}\right|_{P_0}=f_x(P_0)\cos\alpha+f_y(P_0)\cos\beta+f_z(P_0)\cos\gamma.$$`,
        intuition: R`<p>可微的意思是：在 $P_0$ 附近 $f$ 近似于一个线性函数（切平面）$f(P_0)+f_x\,\Delta x+f_y\,\Delta y$。线性函数沿任何方向的变化率当然就是"每个坐标方向的变化率 $\times$ 该方向在这个坐标上的分量"再相加。换句话说，<b>切平面的坡度</b>沿方向 $\mathbf{e}_l$ 的分量就是 $f_x\cos\alpha+f_y\cos\beta$。用向量语言：这是向量 $(f_x,f_y)$ 与 $\mathbf{e}_l$ 的内积，这正是下文"梯度"的由来。</p>`,
        steps: [
          { s: R`<p>由 $f$ 在 $P_0$ 可微，对任意增量 $(\Delta x,\Delta y)$ 有
$$f(x_0+\Delta x,\ y_0+\Delta y)-f(x_0,y_0)=f_x(x_0,y_0)\Delta x+f_y(x_0,y_0)\Delta y+o(\rho),\quad \rho=\sqrt{\Delta x^2+\Delta y^2}\to0.$$</p>`, why: R`<p>这就是可微的定义（见 mdiff.diffable）：全增量 $=$ 线性主部 $+$ 比 $\rho$ 高阶的无穷小。记号 $o(\rho)$ 表示某个量 $\varepsilon$，它满足 $\dfrac{\varepsilon}{\rho}\to0$（$\rho\to0$），而且这个趋于零<b>不依赖</b>于 $(\Delta x,\Delta y)$ 以什么方式趋于 $(0,0)$。为什么想到从这里下手：方向导数的分子 $f(x_0+t\cos\alpha,y_0+t\cos\beta)-f(x_0,y_0)$ 本身就是一个全增量，只不过增量 $(\Delta x,\Delta y)$ 被限制在一条射线上；可微定义恰好告诉我们任何全增量长什么样，所以直接代入即可。</p>` },
          { s: R`<p>取 $\Delta x=t\cos\alpha$，$\Delta y=t\cos\beta$，$t>0$。此时 $\rho=\sqrt{t^2\cos^2\alpha+t^2\cos^2\beta}=t\sqrt{\cos^2\alpha+\cos^2\beta}=t$。</p>`, why: R`<p>方向导数定义中的点正是 $(x_0+t\cos\alpha,y_0+t\cos\beta)$。这里用到了 $\mathbf{e}_l$ 是单位向量：$\cos^2\alpha+\cos^2\beta=1$，于是 $\rho=t$，分母刚好对上。若 $\mathbf{l}$ 不是单位向量，$\rho=t|\mathbf{l}|$，公式就会多出一个因子——这就是必须单位化的根本原因。</p>` },
          { s: R`<p>代入得
$$\frac{f(x_0+t\cos\alpha,\ y_0+t\cos\beta)-f(x_0,y_0)}{t}=f_x(x_0,y_0)\cos\alpha+f_y(x_0,y_0)\cos\beta+\frac{o(t)}{t}.$$
令 $t\to0^+$，$\dfrac{o(t)}{t}\to0$，故极限存在且等于 $f_x(x_0,y_0)\cos\alpha+f_y(x_0,y_0)\cos\beta$。</p>`, why: R`<p>$o(\rho)=o(t)$ 的定义就是 $\dfrac{o(t)}{t}\to0$（$t\to0^+$ 时 $\rho=t\to0$，而可微定义中的 $o(\rho)$ 对 $\rho\to0$ 的任何方式都成立，当然包括这种沿射线的方式）。右端前两项是常数，极限存在性和值同时得到。</p>` },
          { s: R`<p>三元情形完全一样：可微给出 $\Delta u=f_x\Delta x+f_y\Delta y+f_z\Delta z+o(\rho)$，取 $(\Delta x,\Delta y,\Delta z)=t(\cos\alpha,\cos\beta,\cos\gamma)$，由 $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$ 得 $\rho=t$，除以 $t$ 取极限即得。</p>`, why: R`<p>证明只用到可微定义和"单位向量 ⇒ $\rho=t$"两件事，与维数无关。</p>` }
        ],
        remark: R`<ul>
<li><b>可微是充分条件，不是必要条件，也不能换成"偏导数存在"。</b>反例：$f(x,y)=\begin{cases}\dfrac{x^2y}{x^2+y^2},&(x,y)\ne(0,0)\\0,&(x,y)=(0,0)\end{cases}$。在原点 $f_x(0,0)=f_y(0,0)=0$，沿 $\mathbf{e}_l=(\cos\theta,\sin\theta)$ 有 $f(t\cos\theta,t\sin\theta)=t\cos^2\theta\sin\theta$，故 $\dfrac{\partial f}{\partial\mathbf{l}}=\cos^2\theta\sin\theta$，沿每个方向的方向导数都存在；但若套公式得 $0\cdot\cos\theta+0\cdot\sin\theta=0$，与真实值 $\cos^2\theta\sin\theta$ 不符（如 $\theta=\pi/4$ 时真实值 $\tfrac{\sqrt2}{4}$）。原因是 $f$ 在原点不可微（$\dfrac{\Delta f-0}{\rho}=\cos^2\theta\sin\theta$ 不趋于 $0$）。所以<b>没有可微性，公式可能给出错误答案</b>。</li>
<li>反过来，上一节的 $\sqrt{x^2+y^2}$ 说明方向导数全存在也推不出可微；甚至"沿各方向方向导数都存在且满足线性关系 $\partial f/\partial\mathbf{l}=a\cos\alpha+b\cos\beta$"也推不出可微。例：$f=\dfrac{x^3y}{x^6+y^2}$（原点补 $0$），沿 $(\cos\theta,\sin\theta)$ 有 $\dfrac{f(t\cos\theta,t\sin\theta)}{t}=\dfrac{t\cos^3\theta\sin\theta}{t^4\cos^6\theta+\sin^2\theta}\to0$（$\sin\theta\ne0$ 时分母趋于 $\sin^2\theta>0$；$\sin\theta=0$ 时 $f\equiv0$），所以沿每个方向的方向导数都是 $0=0\cdot\cos\theta+0\cdot\sin\theta$，完全"线性"；但沿曲线 $y=x^3$ 有 $f=\dfrac12$，$f$ 在原点连续都谈不上，更不可微。原因是可微要求 $o(\rho)$ 对所有趋近方式<b>一致</b>成立，而方向导数只检查了直线方式。</li>
<li>公式表明可微时 $\dfrac{\partial f}{\partial(-\mathbf{l})}=-\dfrac{\partial f}{\partial\mathbf{l}}$：把 $(\cos\alpha,\cos\beta)$ 换成 $(-\cos\alpha,-\cos\beta)$ 即可。所以可微函数的方向导数"正反方向相反"，这时按 $t\to0^+$ 还是 $t\to0$ 定义都无所谓。</li>
<li>考研题目中给的函数几乎都是初等函数，在所给点偏导数连续，从而可微（可微的充分条件，见 mdiff.diffable），可以放心用公式；但<b>求解题中应说明一句"$f$ 的偏导数连续，故可微"</b>。</li>
</ul>
<svg viewBox="0 0 420 240" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="arr-dir4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" fill="none" stroke-width="1">
<line x1="30" y1="120" x2="400" y2="120" marker-end="url(#arr-dir4)"/>
<line x1="40" y1="225" x2="40" y2="15" marker-end="url(#arr-dir4)"/>
<line x1="40.0" y1="117" x2="40.0" y2="123"/><line x1="125.0" y1="117" x2="125.0" y2="123"/><line x1="210.0" y1="117" x2="210.0" y2="123"/><line x1="295.0" y1="117" x2="295.0" y2="123"/><line x1="380.0" y1="117" x2="380.0" y2="123"/>
<polyline points="40.0,59.9 41.7,58.0 43.4,56.2 45.1,54.5 46.8,52.8 48.5,51.2 50.2,49.7 51.9,48.2 53.6,46.8 55.3,45.5 57.0,44.3 58.7,43.1 60.4,42.0 62.1,41.0 63.8,40.0 65.5,39.2 67.2,38.4 68.9,37.7 70.6,37.0 72.3,36.5 74.0,36.0 75.7,35.7 77.4,35.4 79.1,35.2 80.8,35.0 82.5,35.0 84.2,35.0 85.9,35.2 87.6,35.4 89.3,35.7 91.0,36.0 92.7,36.5 94.4,37.0 96.1,37.7 97.8,38.4 99.5,39.2 101.2,40.0 102.9,41.0 104.6,42.0 106.3,43.1 108.0,44.3 109.7,45.5 111.4,46.8 113.1,48.2 114.8,49.7 116.5,51.2 118.2,52.8 119.9,54.5 121.6,56.2 123.3,58.0 125.0,59.9 126.7,61.8 128.4,63.8 130.1,65.8 131.8,67.9 133.5,70.0 135.2,72.2 136.9,74.5 138.6,76.7 140.3,79.1 142.0,81.4 143.7,83.8 145.4,86.2 147.1,88.7 148.8,91.2 150.5,93.7 152.2,96.3 153.9,98.9 155.6,101.5 157.3,104.1 159.0,106.7 160.7,109.3 162.4,112.0 164.1,114.7 165.8,117.3 167.5,120.0 169.2,122.7 170.9,125.3 172.6,128.0 174.3,130.7 176.0,133.3 177.7,135.9 179.4,138.5 181.1,141.1 182.8,143.7 184.5,146.3 186.2,148.8 187.9,151.3 189.6,153.8 191.3,156.2 193.0,158.6 194.7,160.9 196.4,163.3 198.1,165.5 199.8,167.8 201.5,170.0 203.2,172.1 204.9,174.2 206.6,176.2 208.3,178.2 210.0,180.1 211.7,182.0 213.4,183.8 215.1,185.5 216.8,187.2 218.5,188.8 220.2,190.3 221.9,191.8 223.6,193.2 225.3,194.5 227.0,195.7 228.7,196.9 230.4,198.0 232.1,199.0 233.8,200.0 235.5,200.8 237.2,201.6 238.9,202.3 240.6,203.0 242.3,203.5 244.0,204.0 245.7,204.3 247.4,204.6 249.1,204.8 250.8,205.0 252.5,205.0 254.2,205.0 255.9,204.8 257.6,204.6 259.3,204.3 261.0,204.0 262.7,203.5 264.4,203.0 266.1,202.3 267.8,201.6 269.5,200.8 271.2,200.0 272.9,199.0 274.6,198.0 276.3,196.9 278.0,195.7 279.7,194.5 281.4,193.2 283.1,191.8 284.8,190.3 286.5,188.8 288.2,187.2 289.9,185.5 291.6,183.8 293.3,182.0 295.0,180.1 296.7,178.2 298.4,176.2 300.1,174.2 301.8,172.1 303.5,170.0 305.2,167.8 306.9,165.5 308.6,163.3 310.3,160.9 312.0,158.6 313.7,156.2 315.4,153.8 317.1,151.3 318.8,148.8 320.5,146.3 322.2,143.7 323.9,141.1 325.6,138.5 327.3,135.9 329.0,133.3 330.7,130.7 332.4,128.0 334.1,125.3 335.8,122.7 337.5,120.0 339.2,117.3 340.9,114.7 342.6,112.0 344.3,109.3 346.0,106.7 347.7,104.1 349.4,101.5 351.1,98.9 352.8,96.3 354.5,93.7 356.2,91.2 357.9,88.7 359.6,86.2 361.3,83.8 363.0,81.4 364.7,79.1 366.4,76.7 368.1,74.5 369.8,72.2 371.5,70.0 373.2,67.9 374.9,65.8 376.6,63.8 378.3,61.8 380.0,59.9" stroke-width="1.8"/>
<polyline points="40.0,120.0 41.7,117.3 43.4,114.7 45.1,112.1 46.8,109.5 48.5,107.0 50.2,104.6 51.9,102.3 53.6,100.2 55.3,98.1 57.0,96.2 58.7,94.5 60.4,92.9 62.1,91.6 63.8,90.4 65.5,89.4 67.2,88.6 68.9,87.9 70.6,87.5 72.3,87.3 74.0,87.3 75.7,87.5 77.4,87.8 79.1,88.4 80.8,89.1 82.5,89.9 84.2,91.0 85.9,92.1 87.6,93.4 89.3,94.8 91.0,96.2 92.7,97.8 94.4,99.4 96.1,101.0 97.8,102.7 99.5,104.4 101.2,106.1 102.9,107.7 104.6,109.3 106.3,110.8 108.0,112.3 109.7,113.6 111.4,114.9 113.1,116.1 114.8,117.1 116.5,117.9 118.2,118.7 119.9,119.3 121.6,119.7 123.3,119.9 125.0,120.0 126.7,119.9 128.4,119.7 130.1,119.3 131.8,118.7 133.5,117.9 135.2,117.1 136.9,116.1 138.6,114.9 140.3,113.6 142.0,112.3 143.7,110.8 145.4,109.3 147.1,107.7 148.8,106.1 150.5,104.4 152.2,102.7 153.9,101.0 155.6,99.4 157.3,97.8 159.0,96.2 160.7,94.8 162.4,93.4 164.1,92.1 165.8,91.0 167.5,89.9 169.2,89.1 170.9,88.4 172.6,87.8 174.3,87.5 176.0,87.3 177.7,87.3 179.4,87.5 181.1,87.9 182.8,88.6 184.5,89.4 186.2,90.4 187.9,91.6 189.6,92.9 191.3,94.5 193.0,96.2 194.7,98.1 196.4,100.2 198.1,102.3 199.8,104.6 201.5,107.0 203.2,109.5 204.9,112.1 206.6,114.7 208.3,117.3 210.0,120.0 211.7,122.7 213.4,125.3 215.1,127.9 216.8,130.5 218.5,133.0 220.2,135.4 221.9,137.7 223.6,139.8 225.3,141.9 227.0,143.8 228.7,145.5 230.4,147.1 232.1,148.4 233.8,149.6 235.5,150.6 237.2,151.4 238.9,152.1 240.6,152.5 242.3,152.7 244.0,152.7 245.7,152.5 247.4,152.2 249.1,151.6 250.8,150.9 252.5,150.1 254.2,149.0 255.9,147.9 257.6,146.6 259.3,145.2 261.0,143.8 262.7,142.2 264.4,140.6 266.1,139.0 267.8,137.3 269.5,135.6 271.2,133.9 272.9,132.3 274.6,130.7 276.3,129.2 278.0,127.7 279.7,126.4 281.4,125.1 283.1,123.9 284.8,122.9 286.5,122.1 288.2,121.3 289.9,120.7 291.6,120.3 293.3,120.1 295.0,120.0 296.7,120.1 298.4,120.3 300.1,120.7 301.8,121.3 303.5,122.1 305.2,122.9 306.9,123.9 308.6,125.1 310.3,126.4 312.0,127.7 313.7,129.2 315.4,130.7 317.1,132.3 318.8,133.9 320.5,135.6 322.2,137.3 323.9,139.0 325.6,140.6 327.3,142.2 329.0,143.8 330.7,145.2 332.4,146.6 334.1,147.9 335.8,149.0 337.5,150.1 339.2,150.9 340.9,151.6 342.6,152.2 344.3,152.5 346.0,152.7 347.7,152.7 349.4,152.5 351.1,152.1 352.8,151.4 354.5,150.6 356.2,149.6 357.9,148.4 359.6,147.1 361.3,145.5 363.0,143.8 364.7,141.9 366.4,139.8 368.1,137.7 369.8,135.4 371.5,133.0 373.2,130.5 374.9,127.9 376.6,125.3 378.3,122.7 380.0,120.0" stroke-width="1.8" stroke-dasharray="6,3"/>
</g>
<g fill="currentColor" font-size="12" font-family="serif">
<text x="32.0" y="138">0</text><text x="117.0" y="138">π/2</text><text x="202.0" y="138">π</text><text x="287.0" y="113">3π/2</text><text x="372.0" y="113">2π</text>
<text x="404" y="124">θ</text><text x="46" y="22">∂f/∂l</text>
<text x="47" y="39">1</text><text x="42" y="209">−1</text>
<text x="150" y="30">实线：可微，∂f/∂l = |∇f| cos(θ−θ₀)</text>
<text x="150" y="48">虚线：反例，∂f/∂l = cos²θ sinθ</text>
</g>
</svg>
<p>上图把方向导数画成方向角 $\theta$ 的函数（$\mathbf{e}_l=(\cos\theta,\sin\theta)$）。可微时 $\dfrac{\partial f}{\partial\mathbf{l}}=f_x\cos\theta+f_y\sin\theta=|\nabla f|\cos(\theta-\theta_0)$（$\theta_0$ 是梯度的方向角），必定是一条<b>余弦曲线</b>：一个周期内只有一个最高点、一个最低点，二者相差 $\pi$。虚线是反例 $\dfrac{x^2y}{x^2+y^2}$ 在原点的方向导数 $\cos^2\theta\sin\theta$，它在 $(0,\pi)$ 内有两个峰，不可能写成任何 $a\cos\theta+b\sin\theta$ 的形式——所以无论把 $(a,b)$ 取成什么，"梯度点乘方向"的公式都对不上它。</p>`
      },
      {
        kind: 'def', title: '梯度的定义',
        html: R`<p>观察计算公式 $\dfrac{\partial f}{\partial\mathbf{l}}=f_x\cos\alpha+f_y\cos\beta$：右端恰是两个向量 $(f_x,f_y)$ 与 $(\cos\alpha,\cos\beta)$ 的内积（数量积：$(a_1,a_2)\cdot(b_1,b_2)=a_1b_1+a_2b_2$，几何上等于 $|\mathbf{a}||\mathbf{b}|\cos\theta$，$\theta$ 为两向量夹角）。前一个向量只与函数和点有关，与方向无关，值得单独命名。</p>
<p><b>定义（梯度）</b>　设 $z=f(x,y)$ 在点 $P_0(x_0,y_0)$ 的偏导数 $f_x,f_y$ 都存在，则称向量</p>
$$\mathbf{grad}\,f(x_0,y_0)=\nabla f(x_0,y_0)=f_x(x_0,y_0)\,\mathbf{i}+f_y(x_0,y_0)\,\mathbf{j}=\big(f_x(x_0,y_0),\ f_y(x_0,y_0)\big)$$
<p>为 $f$ 在 $P_0$ 处的<b>梯度</b>。对三元函数 $u=f(x,y,z)$，</p>
$$\mathbf{grad}\,f=\nabla f=f_x\,\mathbf{i}+f_y\,\mathbf{j}+f_z\,\mathbf{k}=(f_x,f_y,f_z).$$
<p>其中 $\nabla=\dfrac{\partial}{\partial x}\mathbf{i}+\dfrac{\partial}{\partial y}\mathbf{j}+\dfrac{\partial}{\partial z}\mathbf{k}$ 叫<b>向量微分算子</b>（读作 nabla 或 del），$\nabla f$ 就是把算子"作用"在 $f$ 上。</p>
<p><b>逐字拆解：</b></p>
<ul>
<li><b>梯度是向量，不是数。</b>填空题问"梯度等于"，答案必须是向量 $(a,b,c)$ 或 $a\mathbf{i}+b\mathbf{j}+c\mathbf{k}$；问"梯度的模"或"最大方向导数"，答案才是数 $\sqrt{a^2+b^2+c^2}$。</li>
<li><b>梯度依赖于点。</b>$\nabla f$ 在每个点是一个向量，整体上是一个<b>向量场</b>（场论里 $\nabla f$ 称为数量场 $f$ 产生的梯度场，见 mint.field）。</li>
<li><b>定义只要求偏导数存在。</b>梯度本身只是把偏导数排成向量，所以只要偏导存在就能写出来。但梯度的<b>几何意义</b>（下一节："沿梯度方向导数最大"）要求 $f$ 可微——这一点和上一定理的条件是一致的。</li>
<li><b>梯度的分量依赖于坐标系，但它作为向量的方向和模长不依赖。</b>换一组直角坐标（如把坐标轴旋转），分量 $f_x,f_y$ 会变，但算出来的向量是同一个——因为（可微时）它由"方向导数 $=\nabla f\cdot\mathbf{e}_l$ 对一切方向成立"唯一确定，而方向导数的定义根本不涉及坐标系。这也是下一节能把梯度解释成"增长最快方向"的根据。</li>
</ul>
<p><b>梯度的运算法则</b>（设 $u,v$ 可微，$c$ 为常数，$\varphi$ 可导）：</p>
$$\nabla(cu)=c\nabla u,\quad\nabla(u\pm v)=\nabla u\pm\nabla v,\quad\nabla(uv)=v\nabla u+u\nabla v,\quad\nabla\varphi(u)=\varphi'(u)\nabla u.$$
<p>它们都是把一元求导法则逐分量写出来。最后一条用链式法则：$\dfrac{\partial}{\partial x}\varphi(u)=\varphi'(u)u_x$，三个分量合起来就是 $\varphi'(u)\nabla u$。</p>
<p><b>例。</b>$f(x,y)=\arctan\dfrac{x}{y}$ 在 $(0,1)$：$f_x=\dfrac{1/y}{1+x^2/y^2}=\dfrac{y}{x^2+y^2}$，$f_y=\dfrac{-x/y^2}{1+x^2/y^2}=\dfrac{-x}{x^2+y^2}$，代入得 $\nabla f(0,1)=(1,0)=\mathbf{i}$。再如 $u=xy+\dfrac{z}{y}$ 在 $(2,1,1)$：$\nabla u=\left(y,\ x-\dfrac{z}{y^2},\ \dfrac1y\right)\Big|_{(2,1,1)}=(1,1,1)$。这两个正是早年真题 <span class="qref" data-q="2008-2">2008 年第 2 题</span>与<span class="qref" data-q="2012-11">2012 年第 11 题</span>的原题。</p>`
      },
      {
        kind: 'thm', title: '梯度与方向导数的关系：最大方向导数定理',
        statement: R`<p>设 $f$ 在点 $P_0$ 可微，$\mathbf{e}_l$ 是任一单位向量，$\theta$ 为 $\nabla f(P_0)$ 与 $\mathbf{e}_l$ 的夹角，则</p>
$$\frac{\partial f}{\partial\mathbf{l}}\bigg|_{P_0}=\nabla f(P_0)\cdot\mathbf{e}_l=|\nabla f(P_0)|\cos\theta.$$
<p>于是当 $\nabla f(P_0)\ne\mathbf{0}$ 时：</p>
<ol>
<li>沿<b>梯度方向</b>（$\theta=0$）方向导数取得<b>最大值</b> $|\nabla f(P_0)|$，即函数在该点增长最快的方向是梯度方向，最大增长率是梯度的模；</li>
<li>沿<b>负梯度方向</b>（$\theta=\pi$）方向导数取得<b>最小值</b> $-|\nabla f(P_0)|$，即函数减少最快；</li>
<li>沿与梯度<b>垂直</b>的方向（$\theta=\pi/2$）方向导数为 $0$。</li>
</ol>
<p>若 $\nabla f(P_0)=\mathbf{0}$，则沿任何方向的方向导数都为 $0$。</p>`,
        intuition: R`<p>方向导数 $=$ 梯度向量在 $\mathbf{e}_l$ 上的<b>投影</b>。一个固定长度的向量往各个方向投影，投影最长的方向当然是它自己的方向，最短（最负）是反方向，垂直方向投影为零。所以"梯度"这个名字（gradient，坡度）的含义就是：<b>方向指向最陡上坡，模长等于最陡坡度</b>。</p>
<svg viewBox="0 0 420 320" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="arr-dir2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" fill="none" stroke-width="1">
<circle cx="190" cy="170" r="40" stroke-dasharray="5,3"/>
<circle cx="190" cy="170" r="80" stroke-dasharray="5,3"/>
<circle cx="190" cy="170" r="120" stroke-dasharray="5,3"/>
<line x1="211" y1="78" x2="282" y2="149" stroke-dasharray="2,3"/>
<line x1="246.6" y1="113.4" x2="289" y2="71" stroke-width="2" marker-end="url(#arr-dir2)"/>
<line x1="246.6" y1="113.4" x2="306.6" y2="113.4" stroke-width="1.6" marker-end="url(#arr-dir2)"/>
<path d="M268,113.4 A22,22 0 0 0 262,98"/>
</g>
<g fill="currentColor"><circle cx="246.6" cy="113.4" r="3"/></g>
<g fill="currentColor" font-size="13" font-family="serif">
<text x="222" y="130">P₀</text>
<text x="293" y="66">∇f</text>
<text x="312" y="118">l</text>
<text x="274" y="100">θ</text>
<text x="316" y="168">等值线切线</text>
<text x="172" y="226">f = c₁</text><text x="172" y="266">f = c₂</text><text x="172" y="306">f = c₃</text>
<text x="20" y="24">∂f/∂l = |∇f| cosθ，等值线上 f 不变</text>
</g>
</svg>
<p>图中虚线圆是 $f$ 的等值线（$c_1<c_2<c_3$），$P_0$ 在中间那条上。梯度 $\nabla f$ 垂直于等值线指向外（$f$ 增大的一侧），任一方向 $\mathbf{l}$ 的方向导数就是 $|\nabla f|\cos\theta$。</p>`,
        steps: [
          { s: R`<p>由上一定理（可微 ⇒ 公式），$\dfrac{\partial f}{\partial\mathbf{l}}=f_x\cos\alpha+f_y\cos\beta=(f_x,f_y)\cdot(\cos\alpha,\cos\beta)=\nabla f(P_0)\cdot\mathbf{e}_l$。</p>`, why: R`<p>这一步只是把计算公式用内积重新写一遍，可微性是前提。</p>` },
          { s: R`<p>由内积的几何定义 $\mathbf{a}\cdot\mathbf{b}=|\mathbf{a}||\mathbf{b}|\cos\theta$ 及 $|\mathbf{e}_l|=1$，得 $\nabla f(P_0)\cdot\mathbf{e}_l=|\nabla f(P_0)|\cos\theta$。</p>`, why: R`<p>内积等于模长之积乘夹角余弦，这是向量代数的基本事实（可由余弦定理推出）。$\mathbf{e}_l$ 单位化使得表达式中只剩 $|\nabla f|$ 与 $\cos\theta$。</p>` },
          { s: R`<p>当 $\nabla f(P_0)\ne\mathbf{0}$ 时，$|\nabla f(P_0)|$ 是固定正数，$\cos\theta\in[-1,1]$。$\cos\theta=1\iff\theta=0\iff\mathbf{e}_l=\dfrac{\nabla f(P_0)}{|\nabla f(P_0)|}$，此时方向导数取最大值 $|\nabla f(P_0)|$；$\cos\theta=-1\iff\theta=\pi\iff\mathbf{e}_l=-\dfrac{\nabla f(P_0)}{|\nabla f(P_0)|}$，取最小值 $-|\nabla f(P_0)|$；$\cos\theta=0\iff\mathbf{e}_l\perp\nabla f(P_0)$，方向导数为 $0$。</p>`, why: R`<p>这是余弦函数在 $[0,\pi]$ 上的取值范围与单调性。注意"最大值能够取到"：因为梯度非零，单位化后确实是一个合法的方向；若梯度为零则"梯度方向"没有意义，只能说所有方向导数都是 $0$。</p>` },
          { s: R`<p>三元情形：$\nabla f=(f_x,f_y,f_z)$，$\mathbf{e}_l=(\cos\alpha,\cos\beta,\cos\gamma)$，同样有 $\dfrac{\partial f}{\partial\mathbf{l}}=\nabla f\cdot\mathbf{e}_l=|\nabla f|\cos\theta$，结论逐字照搬。</p>`, why: R`<p>内积的几何定义在三维空间同样成立，证明与维数无关。</p>` }
        ],
        remark: R`<ul>
<li>这个定理是本考点<b>最常考的结论</b>：题目问"最大方向导数"就是求 $|\nabla f|$；问"沿哪个方向方向导数最大"就是求 $\nabla f$ 的方向（单位向量）；问"方向导数最大值为 $M$ 且方向为 $\mathbf{l}$"就是条件 $\nabla f=M\cdot\dfrac{\mathbf{l}}{|\mathbf{l}|}$（既给出方向又给出模长，见真题 <span class="qref" data-q="2019-16">2019 年第 16 题</span>）。</li>
<li>条件"可微"同样不可少。没有可微性，方向导数不一定是梯度的投影，"沿梯度方向最大"就可能失效：上一节的反例 $f=\dfrac{x^2y}{x^2+y^2}$ 在原点梯度为 $\mathbf{0}$，但 $\dfrac{\partial f}{\partial\mathbf{l}}=\cos^2\theta\sin\theta$ 并不恒为 $0$，最大值 $\dfrac{2}{3\sqrt3}$ 在 $\sin\theta=\dfrac{1}{\sqrt3}$ 处取得（即两个方向 $\left(\pm\sqrt{\tfrac23},\ \tfrac{1}{\sqrt3}\right)$，可对 $\cos^2\theta\sin\theta$ 求导验证），与梯度无关。</li>
<li>"最大方向导数"与"函数的最大值"是两回事：前者是某一点处各方向变化率的最大值（等于 $|\nabla f|$），后者是函数值。初学者看到"最大"容易去求极值，这是误解。</li>
<li>这个定理与 mdiff.extreme 的联系：在极值点（可微）处 $\nabla f=\mathbf{0}$，正对应"沿任何方向变化率为零"。与 mdiff.geo 的联系见下一节。</li>
</ul>`
      },
      {
        kind: 'thm', title: '梯度与等值线、等值面垂直',
        statement: R`<p>（1）设 $f(x,y)$ 在点 $P_0(x_0,y_0)$ 的某邻域内有连续偏导数且 $\nabla f(P_0)\ne\mathbf{0}$，则等值线 $L:\ f(x,y)=c$（$c=f(P_0)$）在 $P_0$ 附近是一条光滑曲线，在 $P_0$ 处有切线，$\nabla f(P_0)$ 是 $L$ 在 $P_0$ 处的<b>法向量</b>，且指向 $f$ 值增大的一侧。</p>
<p>（2）设 $u=f(x,y,z)$ 在 $P_0$ 的某邻域内有连续偏导数且 $\nabla f(P_0)\ne\mathbf{0}$，则 $\nabla f(P_0)$ 是等值面 $\Sigma:\ f(x,y,z)=c$（$c=f(P_0)$）在 $P_0$ 处的<b>法向量</b>，指向 $f$ 增大的一侧。</p>`,
        intuition: R`<p>沿等值线走，$f$ 不变，所以沿等值线切向的方向导数是 $0$；而方向导数 $=|\nabla f|\cos\theta$，为零只能是 $\theta=\pi/2$，即梯度垂直于切向。再结合上一定理，梯度指向上升最快的方向，而等值线一侧高一侧低，所以它指向高的一侧。地图上的等高线越密，坡越陡，梯度模越大——这和"$|\nabla f|$ 是最大坡度"是一致的。</p>`,
        steps: [
          { s: R`<p>先证（1）。由 $\nabla f(P_0)\ne\mathbf{0}$，不妨设 $f_y(x_0,y_0)\ne0$。由隐函数存在定理（mdiff.implicit），方程 $f(x,y)=c$ 在 $P_0$ 附近确定了一个连续可导的函数 $y=y(x)$，$y(x_0)=y_0$，且 $y'(x_0)=-\dfrac{f_x(x_0,y_0)}{f_y(x_0,y_0)}$。</p>`, why: R`<p>要谈"等值线的切线"，首先要知道等值线在 $P_0$ 附近确实是一条光滑曲线——这正是隐函数定理提供的。若 $f_y=0$ 而 $f_x\ne0$，则把 $x,y$ 的角色互换，解出 $x=x(y)$，证明相同。</p>` },
          { s: R`<p>于是等值线在 $P_0$ 处的切向量可取为 $\mathbf{T}=(1,\ y'(x_0))=\left(1,\ -\dfrac{f_x}{f_y}\right)$。计算内积：
$$\nabla f(P_0)\cdot\mathbf{T}=f_x\cdot1+f_y\cdot\left(-\frac{f_x}{f_y}\right)=0.$$
所以 $\nabla f(P_0)\perp\mathbf{T}$，即 $\nabla f(P_0)$ 是等值线的法向量。</p>`, why: R`<p>曲线 $y=y(x)$ 的切向量是 $(1,y')$。另一种看法：沿曲线 $f(x,y(x))\equiv c$，两边对 $x$ 求导（链式法则）得 $f_x+f_yy'=0$，这就是内积为零——"沿等值线 $f$ 不变 ⇒ 沿切向方向导数为零 ⇒ 梯度与切向垂直"。</p>` },
          { s: R`<p>指向性：取 $\mathbf{e}=\dfrac{\nabla f(P_0)}{|\nabla f(P_0)|}$，由偏导连续知 $f$ 在 $P_0$ 可微，由最大方向导数定理 $\dfrac{\partial f}{\partial\mathbf{e}}=|\nabla f(P_0)|>0$。按定义，当 $t>0$ 充分小时 $\dfrac{f(P_0+t\mathbf{e})-f(P_0)}{t}>0$，即 $f(P_0+t\mathbf{e})>c$。所以从 $P_0$ 沿梯度方向走一小步，函数值大于 $c$：梯度指向 $f$ 增大的一侧。</p>`, why: R`<p>极限为正数 ⇒ 在充分小的 $t>0$ 上差商为正（极限的保号性）。这一步把"指向增大一侧"这句直观话变成了严格陈述。</p>` },
          { s: R`<p>再证（2）。与（1）同理，由 $\nabla f(P_0)\ne\mathbf{0}$ 不妨设 $f_z(P_0)\ne0$，隐函数定理保证 $f(x,y,z)=c$ 在 $P_0$ 附近确定了连续可微的 $z=z(x,y)$，即 $\Sigma$ 在 $P_0$ 附近是一张光滑曲面，在 $P_0$ 处有切平面。设 $\Gamma:\ x=x(t),y=y(t),z=z(t)$ 是 $\Sigma$ 上过 $P_0$（对应 $t=t_0$）的任意一条光滑曲线。因为它在曲面上，$f(x(t),y(t),z(t))\equiv c$。两边对 $t$ 求导，由链式法则：
$$f_x\,x'(t_0)+f_y\,y'(t_0)+f_z\,z'(t_0)=0,\quad\text{即}\quad\nabla f(P_0)\cdot\big(x'(t_0),y'(t_0),z'(t_0)\big)=0.$$</p>`, why: R`<p>曲面上过 $P_0$ 的所有曲线的切向量都与同一个非零向量 $\nabla f(P_0)$ 垂直，因此它们都落在过 $P_0$ 且以 $\nabla f(P_0)$ 为法向量的那张平面上——这正是切平面，$\nabla f(P_0)$ 就是法向量。这正是 mdiff.geo 中"曲面 $F(x,y,z)=0$ 的法向量为 $(F_x,F_y,F_z)$"的来源。指向性的证明与（1）第 3 步完全相同。</p>` }
        ],
        remark: R`<ul>
<li>定理把 mdiff.geo 中的"隐式曲面法向量 $(F_x,F_y,F_z)$"与本篇的梯度统一起来：<b>隐式曲面的法向量就是左端函数的梯度</b>。显式曲面 $z=f(x,y)$ 可以写成 $F=f(x,y)-z=0$，法向量 $(f_x,f_y,-1)$ 也是 $\nabla F$。</li>
<li>注意区别：二元函数 $z=f(x,y)$ 的梯度 $(f_x,f_y)$ 是<b>平面</b>向量，垂直于 $xOy$ 平面内的等值线 $f=c$；它<b>不是</b>曲面 $z=f(x,y)$ 的法向量（那是三维向量 $(f_x,f_y,-1)$）。初学者常把两者混淆。</li>
<li>$\nabla f(P_0)=\mathbf{0}$ 时等值线在 $P_0$ 可能不是光滑曲线（如 $f=x^2-y^2$ 的零等值线是两条相交直线，原点处梯度为零），定理不适用。</li>
</ul>`
      },
      {
        kind: 'example', title: '例题：方向导数与梯度的基本计算',
        html: R`<p><b>例 1（非单位向量，二元）</b>　求 $f(x,y)=x^2-xy+y^2$ 在点 $P(1,1)$ 处沿从 $P$ 指向 $Q(2,3)$ 方向的方向导数。</p>
<p><i>怎么想：</i>题目给的是"从 $P$ 指向 $Q$"，方向向量是 $\overrightarrow{PQ}$，不是 $Q$ 的坐标本身；它不是单位向量，先单位化。$f$ 是多项式，偏导连续，可微，可用公式。</p>
<p><i>解：</i>$\overrightarrow{PQ}=(1,2)$，$|\overrightarrow{PQ}|=\sqrt5$，$\mathbf{e}_l=\left(\dfrac{1}{\sqrt5},\dfrac{2}{\sqrt5}\right)$。$f_x=2x-y$，$f_y=-x+2y$，在 $(1,1)$ 处 $\nabla f=(1,1)$。于是</p>
$$\frac{\partial f}{\partial\mathbf{l}}\bigg|_{(1,1)}=1\cdot\frac{1}{\sqrt5}+1\cdot\frac{2}{\sqrt5}=\frac{3}{\sqrt5}=\frac{3\sqrt5}{5}.$$
<p><i>反思：</i>若忘记单位化，会得到 $3$，错。另外沿 $\overrightarrow{QP}$ 方向的方向导数是 $-\dfrac{3\sqrt5}{5}$（可微时反向取相反数）。</p>

<p><b>例 2（用方向角给方向，三元）</b>　求 $u=xyz$ 在点 $(1,2,-1)$ 处沿方向角为 $\alpha=\dfrac{\pi}{3},\beta=\dfrac{\pi}{4},\gamma=\dfrac{\pi}{3}$ 的方向 $\mathbf{l}$ 的方向导数。</p>
<p><i>怎么想：</i>给方向角时 $\mathbf{e}_l=(\cos\alpha,\cos\beta,\cos\gamma)$ 自动是单位向量（先验证 $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=\tfrac14+\tfrac12+\tfrac14=1$，若不等于 $1$ 说明题目方向角有误）。</p>
<p><i>解：</i>$\nabla u=(yz,\ xz,\ xy)\big|_{(1,2,-1)}=(-2,-1,2)$，$\mathbf{e}_l=\left(\tfrac12,\tfrac{\sqrt2}{2},\tfrac12\right)$，</p>
$$\frac{\partial u}{\partial\mathbf{l}}=-2\cdot\frac12-1\cdot\frac{\sqrt2}{2}+2\cdot\frac12=-\frac{\sqrt2}{2}.$$
<p>方向导数为负说明沿这个方向 $u$ 在减少。</p>

<p><b>例 3（最大方向导数与方向）</b>　设 $u=x^2+2y^2+3z^2+xy-3x-2y-6z$，问在原点处 $u$ 沿哪个方向增长最快？最大增长率是多少？沿哪个方向减少最快？在哪些点处 $u$ 沿任何方向的变化率都为 $0$？</p>
<p><i>怎么想：</i>四问全是最大方向导数定理的直接翻译：增长最快方向 $=$ 梯度方向，最大增长率 $=|\nabla u|$，减少最快 $=$ 负梯度方向，各方向变化率为零 ⇔ $\nabla u=\mathbf{0}$。</p>
<p><i>解：</i>$\nabla u=(2x+y-3,\ 4y+x-2,\ 6z-6)$。在原点 $\nabla u(0,0,0)=(-3,-2,-6)$，$|\nabla u|=\sqrt{9+4+36}=7$。所以增长最快的方向是 $\dfrac{1}{7}(-3,-2,-6)$，最大增长率为 $7$；减少最快的方向是 $\dfrac{1}{7}(3,2,6)$，此方向的方向导数为 $-7$。令 $\nabla u=\mathbf{0}$：$2x+y=3,\ x+4y=2,\ z=1$，解得 $\left(\dfrac{10}{7},\dfrac17,1\right)$，该点处所有方向导数为 $0$（它也是 $u$ 的驻点，事实上是极小值点）。</p>
<p><i>反思：</i>答"增长最快的方向"要写<b>单位向量</b>或至少写明方向向量 $(-3,-2,-6)$；答"最大增长率"是数 $7$，不要写成向量。</p>

<p><b>例 4（沿等值线方向导数为零）</b>　$f(x,y)=\ln(x^2+y^2)$，在点 $(1,2)$ 处求沿圆 $x^2+y^2=5$ 的切线方向的方向导数，以及最大方向导数。</p>
<p><i>解：</i>$\nabla f=\left(\dfrac{2x}{x^2+y^2},\dfrac{2y}{x^2+y^2}\right)\Big|_{(1,2)}=\left(\dfrac25,\dfrac45\right)$。圆在 $(1,2)$ 的切向量与半径 $(1,2)$ 垂直，可取 $(-2,1)$，单位化 $\dfrac{1}{\sqrt5}(-2,1)$。方向导数 $=\dfrac{1}{\sqrt5}\left(-\dfrac45+\dfrac45\right)=0$——因为该圆恰是 $f$ 的等值线 $f=\ln5$，与定理一致。最大方向导数 $=|\nabla f|=\sqrt{\dfrac{4}{25}+\dfrac{16}{25}}=\dfrac{2\sqrt5}{5}$，方向为 $\dfrac{1}{\sqrt5}(1,2)$，即沿半径向外。</p>

<p><b>例 5（条件不满足：不能套公式）</b>　求 $f(x,y)=\sqrt{x^2+y^2}$ 在原点沿 $\mathbf{l}=(3,4)$ 方向的方向导数。</p>
<p><i>怎么想：</i>原点处 $f_x,f_y$ 都不存在（$\dfrac{|t|}{t}$ 无极限），更不可微，公式不能用，<b>必须回到定义</b>。</p>
<p><i>解：</i>$\mathbf{e}_l=\left(\dfrac35,\dfrac45\right)$，$f\!\left(\dfrac{3t}{5},\dfrac{4t}{5}\right)=\sqrt{\dfrac{9t^2}{25}+\dfrac{16t^2}{25}}=|t|=t\ (t>0)$，故 $\dfrac{\partial f}{\partial\mathbf{l}}=\lim\limits_{t\to0^+}\dfrac{t-0}{t}=1$。</p>
<p><i>反思：</i>凡是在"分段点、含绝对值或根号的点"求方向导数，先检查可微性；不可微就用定义——定义其实就是"把射线参数代入后求一元单侧导数"，并不难算。</p>`
      },
      {
        kind: 'example', title: '近十年真题精讲',
        html: R`<p><b>真题 1</b>　<span class="qref" data-q="2025-13">2025 年第 13 题</span>（填空，5 分）</p>
<blockquote><p>已知函数 $u(x,y,z)=xy^2z^3$，向量 $\mathbf n=(2,2,-1)$，则 $\left.\dfrac{\partial u}{\partial\mathbf n}\right|_{(1,1,1)}=$ ______．</p></blockquote>
<p><b>这题考什么：</b>三元函数沿给定（非单位）向量的方向导数，纯计算。</p>
<p><b>从题面看到什么：</b>$\dfrac{\partial u}{\partial\mathbf{n}}$ 的记号 ⇒ 方向导数；$\mathbf{n}=(2,2,-1)$ 的模是 $3$ 不是 $1$ ⇒ 必须单位化；$u$ 是多项式 ⇒ 偏导连续、可微 ⇒ 用计算公式（本篇"方向导数的计算公式"定理）。</p>
<p><b>分步解答：</b></p>
<ol>
<li>求梯度：$u_x=y^2z^3,\ u_y=2xyz^3,\ u_z=3xy^2z^2$，在 $(1,1,1)$ 处 $\nabla u=(1,2,3)$。</li>
<li>单位化：$|\mathbf{n}|=\sqrt{4+4+1}=3$，$\mathbf{e}_n=\left(\dfrac23,\dfrac23,-\dfrac13\right)$。</li>
<li>内积：$\dfrac{\partial u}{\partial\mathbf{n}}=\nabla u\cdot\mathbf{e}_n=\dfrac{1\cdot2+2\cdot2+3\cdot(-1)}{3}=\dfrac{3}{3}=1$。</li>
</ol>
<p><b>答案：</b>$1$。</p>
<p><b>这道题告诉我们：</b>最新一年的考法仍然是"梯度 $\cdot$ 单位向量"的三步模板。出题人故意选了 $|\mathbf{n}|=3$ 的整数模，不单位化会得到 $3$，是一个精心布置的陷阱。</p>

<p><b>真题 2</b>　<span class="qref" data-q="2017-3">2017 年第 3 题</span>（选择，4 分）</p>
<blockquote><p>函数 $f(x,y,z)=x^2y+z^2$ 在点 $(1,2,0)$ 处沿向量 $\mathbf{n}=(1,2,2)$ 的方向导数为</p>
<p>(A) $12$.　(B) $6$.　(C) $4$.　(D) $2$.</p></blockquote>
<p><b>这题考什么：</b>与真题 1 完全同型——三元函数沿非单位向量的方向导数。</p>
<p><b>从题面看到什么：</b>"沿向量 $\mathbf{n}$ 的方向导数" ⇒ 三步法（梯度 → 单位化 → 内积）；$\mathbf{n}=(1,2,2)$ 的模是 $3$ ⇒ 必须单位化；$f$ 是多项式，偏导连续故可微 ⇒ 可用本篇"方向导数的计算公式"定理。</p>
<p><b>分步解答：</b></p>
<ol>
<li>$\nabla f=(2xy,\ x^2,\ 2z)\big|_{(1,2,0)}=(4,1,0)$。</li>
<li>$|\mathbf{n}|=\sqrt{1+4+4}=3$，$\mathbf{e}_n=\left(\dfrac13,\dfrac23,\dfrac23\right)$。</li>
<li>$\dfrac{\partial f}{\partial\mathbf{n}}=\dfrac{4\cdot1+1\cdot2+0\cdot2}{3}=\dfrac63=2$。</li>
</ol>
<p><b>答案：</b>(D)。</p>
<p><b>这道题告诉我们：</b>看选项——$6$ 正是忘记单位化的结果（$\nabla f\cdot\mathbf{n}=6$），$12$ 和 $4$ 则是其他错算。选择题的干扰项就是按"典型错误"设计的，所以算完要回头核对一下"我除以模长了吗"。</p>

<p><b>真题 3</b>　<span class="qref" data-q="2022-11">2022 年第 11 题</span>（填空，5 分）</p>
<blockquote><p>函数 $f(x,y)=x^2+2y^2$ 在点 $(0,1)$ 处的最大方向导数为______.</p></blockquote>
<p><b>这题考什么：</b>最大方向导数定理——最大方向导数等于梯度的模。</p>
<p><b>从题面看到什么：</b>"最大方向导数"四个字 ⇒ 求 $|\nabla f|$，不需要任何方向向量。$f$ 是多项式，可微，定理适用。</p>
<p><b>分步解答：</b></p>
<ol>
<li>$\nabla f=(2x,\ 4y)\big|_{(0,1)}=(0,4)$。</li>
<li>由定理，最大方向导数 $=|\nabla f(0,1)|=\sqrt{0^2+4^2}=4$，在方向 $(0,1)$（即 $y$ 轴正向）取得。</li>
</ol>
<svg viewBox="0 0 420 300" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="arr-dir5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" fill="none" stroke-width="1">
<line x1="30" y1="180" x2="400" y2="180" marker-end="url(#arr-dir5)"/>
<line x1="210" y1="290" x2="210" y2="15" marker-end="url(#arr-dir5)"/>
<ellipse cx="210" cy="180" rx="49.5" ry="35.0" stroke-dasharray="5,3"/><ellipse cx="210" cy="180" rx="70.0" ry="49.5" stroke-dasharray="5,3"/><ellipse cx="210" cy="180" rx="99.0" ry="70.0" stroke-dasharray="5,3"/><ellipse cx="210" cy="180" rx="140.0" ry="99.0" stroke-dasharray="5,3"/>
<line x1="110" y1="110" x2="310" y2="110" stroke-dasharray="2,3"/>
<line x1="210" y1="110" x2="210" y2="42" stroke-width="2.4" marker-end="url(#arr-dir5)"/>
<line x1="210" y1="110" x2="258" y2="62" stroke-width="1.6" marker-end="url(#arr-dir5)"/>
<path d="M210,80 A30,30 0 0 1 231.2,88.8"/>
</g>
<g fill="currentColor"><circle cx="210" cy="110" r="3"/></g>
<g fill="currentColor" font-size="12" font-family="serif">
<text x="402" y="195">x</text><text x="218" y="22">y</text>
<text x="160" y="106">P(0,1)</text>
<text x="134" y="56">∇f = (0,4)</text>
<text x="262" y="60">l = (1,1)/√2</text>
<text x="234" y="104">θ = 45°</text>
<text x="320" y="114">方向导数为 0</text>
<text x="354" y="196">c = 4</text><text x="312" y="196">c = 2</text>
<text x="30" y="30">等值线 x² + 2y² = c</text>
</g>
</svg>
<p>图中虚线是 $f=x^2+2y^2$ 的等值线（椭圆，$c=\tfrac12,1,2,4$ 由内到外），$P(0,1)$ 在 $c=2$ 那条上。梯度 $(0,4)$ 竖直向上、垂直于等值线并指向 $f$ 变大的外侧，所以最大方向导数 $4$ 沿 $y$ 轴正向取得；沿水平的切线方向方向导数为 $0$；沿 $\mathbf{l}=(1,1)/\sqrt2$（$\theta=45^\circ$）则是 $4\cos45^\circ=2\sqrt2$。</p>
<p><b>答案：</b>$4$。</p>
<p><b>这道题告诉我们：</b>这是本考点最"裸"的考法，两行就能做完，5 分。易错点是把梯度 $(0,4)$ 当成答案（答案应是数），或者误以为要求 $f$ 的最大值。</p>

<p><b>真题 4</b>　<span class="qref" data-q="2019-16">2019 年第 16 题</span>（解答，10 分）</p>
<blockquote><p>设 $a,b$ 为实数，函数 $z=2+ax^2+by^2$ 在点 $(3,4)$ 处的方向导数中，沿方向 $\mathbf{l}=-3\mathbf{i}-4\mathbf{j}$ 的方向导数最大，最大值为 $10$.<br>（Ⅰ）求 $a,b$；<br>（Ⅱ）求曲面 $z=2+ax^2+by^2\ (z\geqslant0)$ 的面积.</p></blockquote>
<p><b>这题考什么：</b>（Ⅰ）最大方向导数定理的<b>反向使用</b>——由"最大方向导数的方向和值"反推梯度，从而确定参数；（Ⅱ）曲面面积（mint.surf1），这里只讲（Ⅰ）并简述（Ⅱ）。</p>
<p><b>从题面看到什么：</b>"沿 $\mathbf{l}$ 的方向导数最大，最大值为 $10$"是两个信息：梯度方向与 $\mathbf{l}$ 同向（$\theta=0$），梯度模为 $10$。合起来就是一个向量等式 $\nabla z(3,4)=10\cdot\dfrac{\mathbf{l}}{|\mathbf{l}|}$，两个分量给两个方程，恰好解出 $a,b$ 两个未知数。</p>
<p><b>分步解答：</b></p>
<ol>
<li>求梯度：$z_x=2ax,\ z_y=2by$，在 $(3,4)$ 处 $\nabla z=(6a,\ 8b)$。$z$ 是多项式，可微，最大方向导数定理适用。</li>
<li>翻译条件：$\mathbf{l}=(-3,-4)$，$|\mathbf{l}|=5$，$\mathbf{e}_l=\left(-\dfrac35,-\dfrac45\right)$。由定理，方向导数最大的方向是梯度方向且最大值是 $|\nabla z|$，故
$$\nabla z(3,4)=|\nabla z|\,\mathbf{e}_l=10\left(-\frac35,-\frac45\right)=(-6,-8).$$</li>
<li>解方程：$6a=-6,\ 8b=-8$，得 $a=-1,\ b=-1$。</li>
<li>检验：此时 $\nabla z(3,4)=(-6,-8)$，确与 $\mathbf{l}=(-3,-4)$ 同向（而非反向），模为 $10$，符合题意。</li>
<li>（Ⅱ）简述：曲面 $z=2-x^2-y^2\ (z\ge0)$ 在 $xOy$ 面的投影为 $D:\ x^2+y^2\le2$，面积
$$S=\iint_D\sqrt{1+z_x^2+z_y^2}\,\mathrm{d}\sigma=\iint_D\sqrt{1+4x^2+4y^2}\,\mathrm{d}\sigma=\int_0^{2\pi}\mathrm{d}\theta\int_0^{\sqrt2}\sqrt{1+4r^2}\,r\,\mathrm{d}r=2\pi\cdot\frac{(1+4r^2)^{3/2}}{12}\bigg|_0^{\sqrt2}=\frac{13\pi}{3}.$$</li>
</ol>
<p><b>答案：</b>（Ⅰ）$a=-1,\ b=-1$；（Ⅱ）$S=\dfrac{13\pi}{3}$。</p>
<p><b>这道题告诉我们：</b>解答题里，方向导数通常只是第一问的"敲门砖"，考的是把"最大方向导数的方向与大小"精确翻译成梯度的向量等式；写解答时要说明"因 $z$ 可微，由梯度与方向导数的关系……"。一个常见错误是只用了"模为 $10$"得 $36a^2+64b^2=100$ 一个方程，忘了方向条件，导致解不出来；另一个是把方向写反（同向是 $\theta=0$，不是 $\theta=\pi$）。</p>`
      },
      {
        kind: 'pitfall', title: '常见误区',
        html: R`<ul>
<li><b>不单位化。</b>方向导数定义中的 $\mathbf{e}_l$ 必须是单位向量。题目给 $\mathbf{n}=(2,2,-1)$、$\mathbf{l}=(1,2,2)$、"从 $P$ 指向 $Q$ 的方向"时都要先除以模长。近十年四道真题中三道的方向向量都不是单位向量，错一次扣 4–5 分。</li>
<li><b>把梯度当成数、把最大方向导数当成向量。</b>梯度 $\nabla f$ 是向量；最大方向导数 $=|\nabla f|$ 是数；"方向导数最大的方向"是单位向量 $\nabla f/|\nabla f|$。审题看清问的是哪一个。</li>
<li><b>"最大方向导数"$\ne$"函数最大值"。</b>前者是一点处的局部量 $|\nabla f(P_0)|$，后者是整个定义域上的函数值。看到"最大"就去求驻点是误解。</li>
<li><b>偏导数存在就套公式。</b>公式 $\partial f/\partial\mathbf{l}=f_x\cos\alpha+f_y\cos\beta$ 的前提是<b>可微</b>。对 $\dfrac{x^2y}{x^2+y^2}$ 这类函数在原点，偏导为零但方向导数非零，套公式会错；对 $\sqrt{x^2+y^2}$ 在原点，偏导不存在但方向导数存在，必须回到定义。</li>
<li><b>方向导数存在 ⇒ 偏导数存在？错。</b>$\sqrt{x^2+y^2}$ 在原点沿每个方向的方向导数都是 $1$，但偏导数不存在。原因是方向导数是单侧极限（$t\to0^+$），沿 $\mathbf{i}$ 与 $-\mathbf{i}$ 的两个方向导数都是 $1$，而偏导数要求它们互为相反数。</li>
<li><b>把方向导数写成 $\dfrac{\partial f}{\partial\mathbf{l}}=\sqrt{f_x^2+f_y^2}$。</b>这只在 $\mathbf{l}$ 恰是梯度方向时才对；一般方向要乘 $\cos\theta$。</li>
<li><b>混淆"二元函数梯度"与"曲面法向量"。</b>$z=f(x,y)$ 的梯度 $(f_x,f_y)$ 是 $xOy$ 平面内的向量，垂直于等值线 $f(x,y)=c$；曲面 $z=f(x,y)$ 的法向量是三维向量 $(f_x,f_y,-1)$，两者维数都不同。</li>
<li><b>梯度为零时谈"梯度方向"。</b>$\nabla f(P_0)=\mathbf{0}$ 时沿任何方向的方向导数都为零，没有"增长最快的方向"可言，此时也不能说梯度垂直于等值线（等值线可能不光滑）。</li>
<li><b>方向角与方向余弦。</b>给方向角 $\alpha,\beta,\gamma$ 时，$\mathbf{e}_l=(\cos\alpha,\cos\beta,\cos\gamma)$ 本身已是单位向量；给"从 $x$ 轴正向逆时针转角 $\varphi$"的平面方向时，$\mathbf{e}_l=(\cos\varphi,\sin\varphi)$，注意第二个分量是 $\sin\varphi$ 而不是 $\cos\varphi$；若只说"与 $x$ 轴正向夹角为 $\alpha$"而方向指向 $x$ 轴下方，则第二个分量是 $-\sin\alpha$（此时与 $y$ 轴正向的夹角 $\beta$ 是钝角，$\cos\beta=-\sin\alpha$；例如 $\alpha=\dfrac{\pi}{6}$ 时 $\beta=\dfrac{2\pi}{3}$）。</li>
</ul>`
      },
      {
        kind: 'method', title: '题型识别与解题方法',
        html: R`<p><b>模板（可微函数的方向导数三步法）：</b>求梯度 $\nabla f(P_0)$ → 方向向量单位化 $\mathbf{e}_l=\mathbf{l}/|\mathbf{l}|$ → 作内积 $\nabla f(P_0)\cdot\mathbf{e}_l$。适用条件：$f$ 在 $P_0$ 可微（初等函数在偏导连续点即可）。</p>
<p><b>看到……想到……</b></p>
<ul>
<li>看到"$\dfrac{\partial f}{\partial\mathbf{l}}$"、"沿向量 $\mathbf{n}$ 的方向导数" → 三步法；检查 $|\mathbf{l}|$ 是否为 $1$。</li>
<li>看到"沿从 $P$ 指向 $Q$ 的方向" → 方向向量是 $\overrightarrow{PQ}=Q-P$，再单位化。</li>
<li>看到"方向角 $\alpha,\beta,\gamma$" → $\mathbf{e}_l=(\cos\alpha,\cos\beta,\cos\gamma)$，已单位化。</li>
<li>看到"沿曲线 $\Gamma$ 在该点的切线方向"或"沿曲面的外法线方向" → 先用 mdiff.geo 求切向量/法向量，单位化后再作内积（注意"外"法线的指向要判断正负）。</li>
<li>看到"最大方向导数"、"增长最快的速率" → 答 $|\nabla f(P_0)|$；"沿哪个方向增长最快" → 答 $\nabla f/|\nabla f|$；"减少最快" → 负梯度方向，值为 $-|\nabla f|$；"方向导数为零的方向" → 与梯度垂直的方向。</li>
<li>看到"沿 $\mathbf{l}$ 方向导数最大且最大值为 $M$"（含参数） → 列向量方程 $\nabla f(P_0)=M\,\mathbf{l}/|\mathbf{l}|$，按分量解参数（<span class="qref" data-q="2019-16">2019 年第 16 题</span>）。</li>
<li>看到"在曲线（曲面、区域）上求最大方向导数的最大值" → 先写出 $|\nabla f|^2=f_x^2+f_y^2$ 作为目标函数，再用条件极值/拉格朗日乘数法（mdiff.extreme）在约束下求最大，如 <span class="qref" data-q="2015-17">2015 年第 17 题</span>：$f=x+y+xy$ 在 $x^2+y^2+xy=3$ 上最大方向导数为 $3$。思路：点 $(x,y)$ 处的最大方向导数是 $|\nabla f|=\sqrt{(1+y)^2+(1+x)^2}$，于是问题变成在曲线上求 $g=(1+x)^2+(1+y)^2$ 的最大值。可用拉格朗日乘数法，也可用对称性：令 $s=x+y$，由约束 $xy=s^2-3$，得 $g=2+2s+x^2+y^2=2+2s+s^2-2xy=8+2s-s^2$；而 $x,y$ 为实数要求 $s^2\ge4xy=4s^2-12$，即 $|s|\le2$，故 $g$ 在 $s=1$ 处取最大值 $9$（对应点 $(2,-1),(-1,2)$），最大方向导数 $=\sqrt9=3$。注意求的是 $|\nabla f|$ 的最大值，最后记得开方。</li>
<li>看到"$\mathbf{grad}\,f$ 等于" → 写向量 $(f_x,f_y,f_z)$，用 $\mathbf{i},\mathbf{j},\mathbf{k}$ 或坐标形式均可。</li>
<li>看到"分段定义、含 $|x|$ 或根号的点处的方向导数" → 先判断可微性；不可微则<b>回到定义</b>：把 $(x_0+t\cos\alpha,y_0+t\cos\beta)$ 代入，求 $t\to0^+$ 的一元极限。</li>
<li>看到"判断方向导数存在、偏导存在、可微三者关系"的选择题 → 记住唯一可靠的蕴含链：可微 ⇒ 所有方向导数存在；可微 ⇒ 偏导存在；其余方向均有反例（$\sqrt{x^2+y^2}$、$\dfrac{xy}{x^2+y^2}$、$\dfrac{x^2y}{x^2+y^2}$ 三个标准反例要会）。</li>
</ul>
<p><b>口诀：</b>"方向导数三步走，梯度点乘单位向；最大值是梯度模，方向就是梯度向；可微才能用公式，不可微时回定义。"</p>`
      },
      {
        kind: 'exam', title: '考研怎么考',
        html: R`<p>方向导数与梯度在数学一中是一个<b>稳定的小题考点</b>，难度不高、分值固定、套路明确，是必拿分。根据近十年（2016–2025）真题概括如下：</p>
<ul>
<li><b>题型与分值。</b>近十年共出现 4 次：3 道小题（选择 4 分或填空 5 分）、1 道解答题的第一问。选择题 <span class="qref" data-q="2017-3">2017 年第 3 题</span>（三元函数沿非单位向量的方向导数）；填空题 <span class="qref" data-q="2022-11">2022 年第 11 题</span>（二元函数最大方向导数）、<span class="qref" data-q="2025-13">2025 年第 13 题</span>（三元函数沿非单位向量的方向导数）；解答题 <span class="qref" data-q="2019-16">2019 年第 16 题</span>（由最大方向导数的方向与值反求参数，再接曲面面积）。这 4 道题在上面"近十年真题精讲"中已逐题讲完；2016–2025 年没有把本考点作为次要考点的题目，所以读完精讲就把近十年本考点的真题全部过了一遍。</li>
<li><b>设问方式。</b>主要有三种：(1) 直接给点与方向向量求方向导数，方向向量故意不取单位向量（<span class="qref" data-q="2017-3">2017 年第 3 题</span>、<span class="qref" data-q="2025-13">2025 年第 13 题</span>）；(2) 问"最大方向导数"，考 $|\nabla f|$（<span class="qref" data-q="2022-11">2022 年第 11 题</span>）；(3) 把"沿 $\mathbf{l}$ 方向导数最大、最大值为 $M$"作为条件，反推梯度从而确定参数（<span class="qref" data-q="2019-16">2019 年第 16 题</span>）。更早年份还直接问过梯度向量本身（<span class="qref" data-q="2008-2">2008 年第 2 题</span>、<span class="qref" data-q="2012-11">2012 年第 11 题</span>）以及给单位向量求方向导数（<span class="qref" data-q="2005-3">2005 年第 3 题</span>）。</li>
<li><b>常见综合。</b>与曲面面积、二重积分综合（<span class="qref" data-q="2019-16">2019 年第 16 题</span>）；与条件极值综合——在曲线上求最大方向导数的最大值（<span class="qref" data-q="2015-17">2015 年第 17 题</span>）；与可微性概念辨析综合（<span class="qref" data-q="2008-2">2008 年第 2 题</span>标注了 mdiff.diffable）。此外在多元积分的场论部分，梯度作为 $\nabla$ 算子的基础还会以"梯度、散度、旋度"的形式出现（<span class="qref" data-q="2001-1-2">2001 年一(2)</span>）。</li>
<li><b>近几年的变化。</b>2017、2022、2025 三题几乎是同一模板的重复，说明命题组把它当作"保底送分题"，但给方向向量的两题都在模长上设陷阱（<span class="qref" data-q="2017-3">2017 年第 3 题</span>与<span class="qref" data-q="2025-13">2025 年第 13 题</span>的 $|\mathbf{n}|$ 都恰为 $3$）。二元与三元各占一半（<span class="qref" data-q="2019-16">2019 年第 16 题</span>、<span class="qref" data-q="2022-11">2022 年第 11 题</span>为二元，<span class="qref" data-q="2017-3">2017 年第 3 题</span>、<span class="qref" data-q="2025-13">2025 年第 13 题</span>为三元），两种都要熟。近十年唯一的解答题 <span class="qref" data-q="2019-16">2019 年第 16 题</span>中，方向导数只作为第一问的条件出现，没有考过方向导数或梯度的证明题；概念辨析（方向导数、偏导、可微的关系）近十年也没有直接考过，但它是 mdiff.diffable 选择题的常见选项素材，三个标准反例仍要会。</li>
<li><b>备考建议。</b>熟练三步法和三个概念辨析反例即可；重点练习"反推参数"型（<span class="qref" data-q="2019-16">2019 年第 16 题</span>）和"约束下的最大方向导数"型（<span class="qref" data-q="2015-17">2015 年第 17 题</span>），这两类是综合题里方向导数的常见面目。</li>
</ul>`
      },
      {
        kind: 'check', title: '自测',
        items: [
          { q: R`<p>判断对错并说明理由：若 $f(x,y)$ 在 $P_0$ 处沿任何方向的方向导数都存在，则 $f$ 在 $P_0$ 处的偏导数 $f_x,f_y$ 一定存在。</p>`, a: R`<p>错。反例 $f=\sqrt{x^2+y^2}$ 在原点沿任何方向的方向导数都等于 $1$，但 $f_x(0,0)=\lim\limits_{t\to0}\dfrac{|t|}{t}$ 不存在。原因是方向导数是 $t\to0^+$ 的单侧极限，沿 $\mathbf{i}$ 与 $-\mathbf{i}$ 的方向导数都为 $1$，而偏导数存在要求它们互为相反数。</p>` },
          { q: R`<p>判断对错并说明理由：若 $f_x(P_0),f_y(P_0)$ 都存在，则对任意单位向量 $(\cos\alpha,\cos\beta)$ 有 $\dfrac{\partial f}{\partial\mathbf{l}}=f_x\cos\alpha+f_y\cos\beta$。</p>`, a: R`<p>错。公式需要可微。反例 $f=\dfrac{x^2y}{x^2+y^2}$（原点补 $0$），原点处 $f_x=f_y=0$，但沿 $(\cos\theta,\sin\theta)$ 的方向导数为 $\cos^2\theta\sin\theta$，一般不为 $0$。另一个反例 $f=\dfrac{xy}{x^2+y^2}$ 原点偏导为 $0$ 而沿 $(1,1)/\sqrt2$ 的方向导数不存在。</p>` },
          { q: R`<p>函数 $u=xy^2z^3$ 在点 $(1,1,1)$ 处沿向量 $(2,2,-1)$ 的方向导数等于：</p>`, options: [R`<p>$3$</p>`, R`<p>$1$</p>`, R`<p>$\sqrt{14}$</p>`, R`<p>$6$</p>`], correct: 1, explain: R`<p>$\nabla u(1,1,1)=(1,2,3)$，单位向量 $\dfrac13(2,2,-1)$，内积 $\dfrac{2+4-3}{3}=1$。选项 A 是忘记单位化的结果，C 是 $|\nabla u|$（最大方向导数），都是典型错误。</p>` },
          { q: R`<p>$f(x,y)=x^2+2y^2$ 在点 $(0,1)$ 处：(1) 最大方向导数是多少？在哪个方向取得？(2) 沿哪些方向方向导数为 $0$？(3) 沿方向 $(1,1)$ 的方向导数是多少？</p>`, a: R`<p>$\nabla f(0,1)=(0,4)$。(1) 最大方向导数 $|\nabla f|=4$，方向 $(0,1)$。(2) 与梯度垂直的方向 $(\pm1,0)$，即 $x$ 轴方向——这正是等值线 $x^2+2y^2=2$ 在 $(0,1)$ 处的切线方向。(3) 单位化 $\dfrac{1}{\sqrt2}(1,1)$，方向导数 $=\dfrac{0+4}{\sqrt2}=2\sqrt2$，它等于 $4\cos45^\circ$，验证了 $\partial f/\partial\mathbf{l}=|\nabla f|\cos\theta$。</p>` },
          { q: R`<p>设 $f$ 在 $P_0$ 可微且 $\nabla f(P_0)\ne\mathbf{0}$。下列说法正确的是：</p>`, options: [R`<p>$\nabla f(P_0)$ 是曲面 $z=f(x,y)$ 在对应点的法向量</p>`, R`<p>$f$ 在 $P_0$ 处沿负梯度方向的方向导数为 $-|\nabla f(P_0)|$</p>`, R`<p>$f$ 在 $P_0$ 处取得最大值</p>`, R`<p>$f$ 沿任何方向的方向导数都等于 $|\nabla f(P_0)|$</p>`], correct: 1, explain: R`<p>B 正确：$\theta=\pi$ 时 $\cos\theta=-1$。A 错：$(f_x,f_y)$ 是平面向量，垂直于平面内的等值线；曲面 $z=f(x,y)$ 的法向量是 $(f_x,f_y,-1)$。C 错：梯度非零说明 $P_0$ 不是驻点，更不是极值点。D 错：只有沿梯度方向才等于 $|\nabla f|$，一般方向要乘 $\cos\theta$。</p>` },
          { q: R`<p>设 $z=ax^2+by^2$ 在点 $(1,1)$ 处沿方向 $(1,-1)$ 的方向导数最大，最大值为 $2\sqrt2$，求 $a,b$。</p>`, a: R`<p>$\nabla z(1,1)=(2a,2b)$。由最大方向导数定理，梯度与 $(1,-1)$ 同向且模为 $2\sqrt2$，故 $(2a,2b)=2\sqrt2\cdot\dfrac{1}{\sqrt2}(1,-1)=(2,-2)$，得 $a=1,\ b=-1$。思路与 2019 年第 16 题相同：方向给一个比例关系，模长定一个尺度，两者合起来是一个向量等式。</p>` },
          { q: R`<p>求 $f(x,y)=|x|+y^2$ 在原点沿 $\mathbf{l}=(1,2)$ 方向的方向导数。</p>`, a: R`<p>原点处 $f_x$ 不存在（$|x|$ 在 $0$ 不可导），不可微，不能用公式，回到定义。$\mathbf{e}_l=\dfrac{1}{\sqrt5}(1,2)$，$f\!\left(\dfrac{t}{\sqrt5},\dfrac{2t}{\sqrt5}\right)=\dfrac{t}{\sqrt5}+\dfrac{4t^2}{5}$（$t>0$），差商 $=\dfrac{1}{\sqrt5}+\dfrac{4t}{5}\to\dfrac{1}{\sqrt5}=\dfrac{\sqrt5}{5}$。注意沿 $-\mathbf{l}$ 的方向导数也是 $\dfrac{\sqrt5}{5}$（不是相反数），因为不可微。</p>` },
          { q: R`<p>判断对错并说明理由：梯度 $\nabla f(P_0)$ 总是垂直于 $f$ 过 $P_0$ 的等值线。</p>`, a: R`<p>在 $f$ 有连续偏导且 $\nabla f(P_0)\ne\mathbf{0}$ 的条件下正确（证明用隐函数定理保证等值线光滑，再用链式法则得 $f_x+f_yy'=0$）。若 $\nabla f(P_0)=\mathbf{0}$，等值线可能不是光滑曲线（如 $x^2-y^2=0$ 在原点是两条相交直线），"垂直"无从谈起，所以不加条件的说法不严格。</p>` }
        ]
      }
    ]
  };
});
