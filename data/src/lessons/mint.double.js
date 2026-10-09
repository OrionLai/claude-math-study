// 讲解：二重积分（第 6 章 多元函数积分学）
registerLesson(function (R) {
  return {
    id: 'mint.double', ch: 'mint', title: '二重积分',
    summary: R`二重积分把定积分"分割、近似、求和、取极限"的思想从区间搬到平面区域：曲顶柱体的体积、薄片的质量都是它。本篇从定义出发严格证明它的性质与中值定理，证明"化为累次积分"和"极坐标变换"两个计算公式，讲透交换积分次序、奇偶对称与轮换对称、无界区域与概率积分——计算题要会"画图、定序、定限"，选择填空要会"看对称、比大小、换次序"。`,
    prereq: ['int.def', 'int.ftc', 'int.improper', 'mdiff.limit', 'lim.closed'],
    sections: [
      /* ───────── 1. 为什么 ───────── */
      {
        kind: 'why', title: '为什么需要二重积分：曲顶柱体与薄片质量',
        html: R`<p>定积分解决的是"一个量沿<b>区间</b>分布不均匀，求总量"的问题：曲边梯形的面积、变速直线运动的路程……做法是"分割、近似、求和、取极限"。可是现实中很多量是分布在<b>平面区域</b>上的。看两个问题。</p>
<p><b>问题 1：曲顶柱体的体积。</b>设 $D$ 是 $xOy$ 面上的有界闭区域，$z=f(x,y)\ge0$ 是 $D$ 上的连续函数。以 $D$ 为底、以曲面 $z=f(x,y)$ 为顶、侧面是母线平行于 $z$ 轴的柱面，这样的立体叫<b>曲顶柱体</b>。如果顶是平的（$f\equiv h$），体积就是"底面积 × 高"；麻烦在于顶是弯的，高度 $f(x,y)$ 随点而变，"底面积 × 高"没法直接用。</p>
<p><b>问题 2：平面薄片的质量。</b>一块薄片占据区域 $D$，面密度为 $\mu(x,y)$。密度均匀时，质量 = 密度 × 面积；密度不均匀时同样不能直接相乘。</p>
<p>两个问题的困难完全一样：<b>某个量在整个区域上不是常数</b>，所以"乘法"不能直接用。出路也和定积分一样——<b>在很小的一块上，它几乎是常数</b>：</p>
<ol>
<li><b>分割</b>：把 $D$ 任意分成 $n$ 个小闭区域 $\Delta\sigma_1,\dots,\Delta\sigma_n$（$\Delta\sigma_i$ 同时表示它的面积），曲顶柱体随之被分成 $n$ 根细柱子。</li>
<li><b>近似</b>：在 $\Delta\sigma_i$ 上任取一点 $(\xi_i,\eta_i)$。小块很小时，$f$ 在上面变化不大，细柱子近似成高为 $f(\xi_i,\eta_i)$ 的平顶柱体：$\Delta V_i\approx f(\xi_i,\eta_i)\,\Delta\sigma_i$。</li>
<li><b>求和</b>：$V\approx\sum\limits_{i=1}^n f(\xi_i,\eta_i)\,\Delta\sigma_i$。</li>
<li><b>取极限</b>：让所有小块都"缩成一点"，误差趋于 $0$：$V=\lim\limits_{\lambda\to0}\sum\limits_{i=1}^n f(\xi_i,\eta_i)\,\Delta\sigma_i$，其中 $\lambda$ 是各小块直径的最大值。</li>
</ol>
<svg viewBox="0 0 420 260" width="100%" style="max-width:420px" fill="none" stroke="currentColor">
<ellipse cx="200" cy="200" rx="130" ry="34" stroke-width="1.5" fill="currentColor" fill-opacity="0.08"/>
<line x1="70" y1="200" x2="70" y2="100" stroke-width="1.5"/>
<line x1="330" y1="200" x2="330" y2="86" stroke-width="1.5"/>
<path d="M70,100 C110,30 280,20 330,86" stroke-width="1.8"/>
<path d="M70,100 C130,150 270,140 330,86" stroke-width="1.8"/>
<path d="M188,96 L212,96 L212,214 L188,214 Z" fill="currentColor" fill-opacity="0.15" stroke="none"/>
<path d="M212,96 L218,88 L218,206 L212,214 Z" fill="currentColor" fill-opacity="0.25" stroke="none"/>
<path d="M188,214 L212,214 L218,206 L194,206 Z" fill="currentColor" fill-opacity="0.35" stroke-width="1"/>
<path d="M188,96 L212,96 L218,88 L194,88 Z" fill="currentColor" fill-opacity="0.35" stroke-width="1"/>
<path d="M188,214 L188,96 M212,214 L212,96 M218,206 L218,88" stroke-width="1"/>
<circle cx="203" cy="210" r="2" fill="currentColor"/>
<g fill="currentColor" stroke="none" font-size="13">
<text x="296" y="40">z = f(x, y)</text>
<text x="92" y="206">D</text>
<text x="226" y="226">Δσ<tspan font-size="9" dy="3">i</tspan></text>
<text x="226" y="160" font-size="12">高 f(ξ<tspan font-size="9" dy="3">i</tspan><tspan dy="-3">, η</tspan><tspan font-size="9" dy="3">i</tspan><tspan dy="-3">)</tspan></text>
<text x="20" y="252" font-size="12">切成细柱子，每根近似为平顶柱体：ΔV ≈ f(ξ,η)Δσ</text>
</g>
</svg>
<p>薄片质量完全同理：$M=\lim\limits_{\lambda\to0}\sum\limits_{i=1}^n\mu(\xi_i,\eta_i)\Delta\sigma_i$。两个完全不同的实际问题，最后都归结为<b>同一种和式的极限</b>——把它抽象出来，就是二重积分。</p>
<p>为什么用"直径"而不用"面积"衡量小块的大小？因为一根又细又长的长条，面积可以很小，却并不"缩成一点"：$f$ 沿着长条方向可能变化很大，"在小块上 $f$ 近似为常数"就不成立了。直径趋于 $0$ 才保证小块真的缩向一点。</p>
<p>定义只告诉我们二重积分"是什么"，直接用定义算极限非常麻烦。本篇的主线是：</p>
<ul>
<li><b>化为两次定积分（累次积分）</b>：用平行于坐标轴的网格切，相当于"切面包"——先算每一片的截面积，再把截面积沿另一个方向积起来。二维问题拆成两个一维问题。</li>
<li><b>极坐标</b>：用射线和同心圆切，专门对付圆、扇形、圆环。</li>
<li><b>对称性</b>：用镜面反射配对，让一部分积分直接抵消或翻倍。</li>
<li><b>无界区域</b>：先在有界部分上积分，再让区域扩张取极限——由此得到著名的 $\int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt\pi$。</li>
</ul>`
      },

      /* ───────── 2. 定义 ───────── */
      {
        kind: 'def', title: '二重积分的定义（含几何意义）',
        html: R`<p><b>准备概念。</b>本篇中的"有界闭区域"指由有限条光滑（或分段光滑）曲线围成的、连成一片的有界平面区域连同它的边界，这样的区域都有面积。一个有界闭集 $\Delta$ 的<b>直径</b>是其中任意两点距离的最大值（上确界）：$$d(\Delta)=\sup\{|PQ|:P,Q\in\Delta\}.$$ 例如半径为 $\rho$ 的圆盘直径为 $2\rho$，边长为 $a,b$ 的矩形直径为 $\sqrt{a^2+b^2}$。</p>
<p><b>定义</b>　设 $D$ 是 $xOy$ 平面上的有界闭区域，$f(x,y)$ 是 $D$ 上的有界函数。</p>
<ol>
<li>把 $D$ <b>任意</b>分成 $n$ 个小闭区域 $\Delta\sigma_1,\Delta\sigma_2,\dots,\Delta\sigma_n$（两两没有公共内点，并集为 $D$），$\Delta\sigma_i$ 也表示第 $i$ 块的面积；记 $\lambda=\max\limits_{1\le i\le n}d(\Delta\sigma_i)$，称为分割的<b>细度</b>。</li>
<li>在每个 $\Delta\sigma_i$ 上<b>任取</b>一点 $(\xi_i,\eta_i)$，作<b>积分和</b>（黎曼和）$\displaystyle\sum_{i=1}^n f(\xi_i,\eta_i)\Delta\sigma_i$。</li>
<li>如果存在常数 $I$，使得：对任意 $\varepsilon>0$，存在 $\delta>0$，只要分割的细度 $\lambda\lt\delta$，<b>不论怎样分割、怎样取点</b>，都有 $$\Big|\sum_{i=1}^n f(\xi_i,\eta_i)\Delta\sigma_i-I\Big|\lt\varepsilon,$$ 就称 $f$ 在 $D$ 上<b>可积</b>，$I$ 称为 $f$ 在 $D$ 上的<b>二重积分</b>，记作 $$\iint\limits_D f(x,y)\,d\sigma=\lim_{\lambda\to0}\sum_{i=1}^n f(\xi_i,\eta_i)\Delta\sigma_i .$$</li>
</ol>
<p>其中 $f(x,y)$ 叫被积函数，$f(x,y)\,d\sigma$ 叫被积表达式，$d\sigma$ 叫<b>面积元素</b>，$x,y$ 叫积分变量，$D$ 叫积分区域。</p>
<p><b>逐字拆解。</b></p>
<ul>
<li><b>"有界闭区域"</b>：有界，面积才有限，才能被有限块分完；闭，边界点也属于 $D$，连续函数在上面才有最大值、最小值（后面中值定理要用）。无界区域上的积分要另行定义（见本篇"无界区域"一节），就像一元的反常积分。</li>
<li><b>"$f$ 有界"</b>：如果 $f$ 无界，总能在某一块里取一个函数值巨大的点，把积分和撑到任意大，极限不可能存在（见下面"可积必有界"定理）。所以有界是讨论可积的前提。</li>
<li><b>"任意分割"</b>：定义不限定分割的形状。正因为如此，<b>一旦知道 $f$ 可积，就可以挑最方便的分割来算</b>：用平行于坐标轴的网格分割，小块是矩形，$\Delta\sigma=\Delta x\Delta y$，所以直角坐标下把 $d\sigma$ 写成 $dx\,dy$；用射线和同心圆分割，就得到极坐标公式。本篇所有计算公式的证明都利用了这一点。</li>
<li><b>"任意取点"</b>：同样的道理，可积时可以挑最方便的点——中点、最值点、对称点。</li>
<li><b>"$\lambda\to0$"而不是"$n\to\infty$"</b>：块数趋于无穷并不保证每块都变小，可以让一块始终保持很大，只把其余部分越分越细，这时积分和不会逼近真正的体积。$\lambda\to0$ 保证<b>每一块</b>都缩向一点（自然也有 $n\to\infty$）。</li>
<li><b>"不论怎样分割、怎样取点"</b>：这是可积的本质要求。如果不同的分法给出不同的极限，"曲顶柱体的体积"就无从谈起。</li>
</ul>
<p><b>正例 1（常数函数）</b>　$f\equiv c$。任何分割、任何取点，积分和都是 $\sum c\,\Delta\sigma_i=c\,\sigma$（$\sigma$ 为 $D$ 的面积），所以 $\iint_D c\,d\sigma=c\,\sigma$；特别地 $\iint_D 1\,d\sigma=\sigma$——<b>二重积分可以用来求面积</b>。</p>
<p><b>正例 2（直接用定义算）</b>　$f(x,y)=xy$，$D=[0,1]\times[0,1]$。$f$ 连续，下面的存在定理保证它可积，所以可以挑一种特殊分割：用直线 $x=\frac in$、$y=\frac jn$ 分成 $n^2$ 个小正方形（$\lambda=\frac{\sqrt2}n$），在每块右上角取点：$$\sum_{i=1}^n\sum_{j=1}^n\frac in\cdot\frac jn\cdot\frac1{n^2}=\Big(\frac1{n^2}\sum_{i=1}^n i\Big)^2=\Big(\frac{n+1}{2n}\Big)^2\to\frac14 .$$ 所以 $\iint_D xy\,d\sigma=\frac14$。能算，但很麻烦——这正是我们需要"化为累次积分"的原因。</p>
<p><b>反例（有界但不可积）</b>　$D=[0,1]\times[0,1]$，当 $x$ 为有理数时 $f(x,y)=1$，当 $x$ 为无理数时 $f(x,y)=0$。任何一个小块都有正面积，里面既有横坐标为有理数的点，也有横坐标为无理数的点。若每块都取横坐标为有理数的点，积分和 $=\sum\Delta\sigma_i=1$；若都取横坐标为无理数的点，积分和 $=0$。积分和随取点而变，不存在共同的极限，所以 $f$ 不可积。可见<b>有界不能保证可积</b>。</p>
<p><b>几何意义</b>　$f\ge0$ 时，$\iint_D f\,d\sigma$ 是以 $D$ 为底、$z=f(x,y)$ 为顶的曲顶柱体的体积；$f\le0$ 时柱体在 $xOy$ 面下方，积分等于体积的相反数；$f$ 变号时，积分是 $xOy$ 面上方的体积减去下方的体积（代数和）。<b>物理意义</b>：$\mu\ge0$ 为面密度时，$\iint_D\mu\,d\sigma$ 是薄片的质量。</p>
<p>例如 $\displaystyle\iint\limits_{x^2+y^2\le R^2}\sqrt{R^2-x^2-y^2}\,d\sigma$ 是半径为 $R$ 的上半球体的体积，不用计算就知道它等于 $\frac23\pi R^3$。</p>`
      },

      /* ───────── 3. 可积必有界 ───────── */
      {
        kind: 'thm', title: '可积的必要条件：可积必有界',
        statement: R`<p>若 $f$ 在有界闭区域 $D$ 上可积，则 $f$ 在 $D$ 上有界。</p>`,
        intuition: R`<p>积分和里的每一项都是"函数值 × 面积"。如果 $f$ 在某处可以任意大，那么即使那一小块面积很小，也能挑一个足够大的函数值让这一项"爆掉"，积分和就不可能稳定在某个数附近。</p>`,
        steps: [
          { s: R`<p>反证：设 $f$ 在 $D$ 上无界。任取 $D$ 的一个分割 $\Delta\sigma_1,\dots,\Delta\sigma_n$，则 $f$ 至少在某一块 $\Delta\sigma_k$ 上无界。</p>`, why: R`<p>若 $f$ 在每一块上都有界，$|f|\le M_i$，则在 $D$ 上 $|f|\le\max_i M_i$，与"在 $D$ 上无界"矛盾。这里用到块数有限：有限个界才能取最大值。</p>` },
          { s: R`<p>其余各块上的点 $(\xi_i,\eta_i)$（$i\ne k$）任意取定，记 $A=\sum_{i\ne k}f(\xi_i,\eta_i)\Delta\sigma_i$，这是一个确定的数。对任意给定的 $M>0$，由于 $f$ 在 $\Delta\sigma_k$ 上无界，可以取 $(\xi_k,\eta_k)\in\Delta\sigma_k$ 使 $|f(\xi_k,\eta_k)|>\dfrac{M+|A|}{\Delta\sigma_k}$，于是 $$\Big|\sum_{i=1}^n f(\xi_i,\eta_i)\Delta\sigma_i\Big|\ge|f(\xi_k,\eta_k)|\,\Delta\sigma_k-|A|>M .$$</p>`, why: R`<p>先把其他项"冻结"成常数 $A$，再只调整第 $k$ 项；用三角不等式 $|a+b|\ge|a|-|b|$。小闭区域都有正面积，$\Delta\sigma_k>0$ 才能除过去。</p>` },
          { s: R`<p>若 $f$ 可积，积分值为 $I$，对 $\varepsilon=1$ 存在 $\delta>0$，凡细度 $\lambda\lt\delta$ 的分割、任意取点，都有 $\big|\sum f(\xi_i,\eta_i)\Delta\sigma_i\big|\lt|I|+1$。现在取一个 $\lambda\lt\delta$ 的分割，按第 2 步（取 $M=|I|+1$）选点，得到的积分和的绝对值 $>|I|+1$，矛盾。故 $f$ 有界。</p>`, why: R`<p>可积要求"所有足够细的分割、所有取点"的积分和都靠近 $I$；只要找到一个细分割和一种取点让它远离 $I$，就推翻了可积。第 2 步对<b>任意</b>分割都成立，所以细度再小也能"撑爆"。</p>` }
        ],
        remark: R`<p>① 有界只是必要条件：上面"按横坐标有理、无理取值"的函数有界却不可积。② 这解释了定义中为什么先假设 $f$ 有界。③ 像 $\dfrac1{\sqrt{x^2+y^2}}$ 这样在原点附近无界的函数，在含原点的区域上不是通常意义下的二重积分，要像一元瑕积分那样"挖去奇点再取极限"，属于反常二重积分。</p>`
      },

      /* ───────── 4. 存在定理 ───────── */
      {
        kind: 'thm', title: '二重积分的存在定理',
        statement: R`<p>(1) 若 $f$ 在有界闭区域 $D$ 上连续，则 $f$ 在 $D$ 上可积。<br>(2) 更一般地，若 $f$ 在 $D$ 上有界，且间断点只分布在有限条光滑曲线（或连续曲线 $y=\varphi(x)$、$x=\psi(y)$ 的图形）上，则 $f$ 在 $D$ 上可积。</p>`,
        intuition: R`<p>对一个分割，记 $M_i,m_i$ 为 $f$ 在 $\Delta\sigma_i$ 上的上确界和下确界，令大和 $S=\sum M_i\Delta\sigma_i$，小和 $s=\sum m_i\Delta\sigma_i$。任何积分和都夹在 $s$ 与 $S$ 之间，所以只要 $$S-s=\sum_{i=1}^n(M_i-m_i)\,\Delta\sigma_i\qquad(\text{振幅}\times\text{面积})$$ 能随 $\lambda\to0$ 变得任意小，积分和就被"夹"出了极限。</p><p>(1) 连续函数在有界闭区域上<b>一致连续</b>：块足够小时，每块上的振幅 $M_i-m_i$ 都小于 $\varepsilon$，于是 $S-s\lt\varepsilon\sigma$。(2) 间断点所在的曲线"没有面积"：可以用总面积任意小的一些小块把它盖住，这些块上振幅虽然不小（但不超过 $2\sup|f|$），乘上很小的面积仍然很小；其余的块上 $f$ 连续，按 (1) 处理。</p>`,
        noProof: '严格证明需要达布上和、下和以及一致连续性（康托尔定理，依赖实数完备性）的完整理论，属于数学分析内容，考研不要求证明；本篇把它作为后面各定理的出发点。',
        remark: R`<p>① 考研题中的被积函数几乎都在积分区域上连续或分片连续，可积性一般不必操心，功夫要花在计算上。② 结论 (2) 在后面的证明中很有用：把 $D$ 上的 $f$ 延拓到一个大矩形上，在 $D$ 外令它为 $0$（"零延拓"），延拓后的函数只在 $D$ 的边界曲线上可能间断，仍然可积。③ 后面还要用到多元连续函数的基本性质（见「多元函数的极限与连续」）：有界闭区域上的连续函数<b>有最大值和最小值</b>、<b>一致连续</b>（康托尔定理）；在连通区域上满足<b>介值定理</b>。前两条都依赖实数完备性。</p>`
      },

      /* ───────── 5. 性质 ───────── */
      {
        kind: 'thm', title: '二重积分的性质',
        statement: R`<p>设下面出现的积分都存在，$D$ 为有界闭区域，面积为 $\sigma$。</p>
<ol>
<li><b>线性</b>：$\iint_D[\alpha f+\beta g]\,d\sigma=\alpha\iint_D f\,d\sigma+\beta\iint_D g\,d\sigma$（$\alpha,\beta$ 为常数）。</li>
<li><b>对区域的可加性</b>：若 $D$ 被分成两个没有公共内点的闭区域 $D_1,D_2$，则 $\iint_D f\,d\sigma=\iint_{D_1}f\,d\sigma+\iint_{D_2}f\,d\sigma$。</li>
<li><b>面积</b>：$\iint_D 1\,d\sigma=\sigma$。</li>
<li><b>保序性</b>：若在 $D$ 上 $f\le g$，则 $\iint_D f\,d\sigma\le\iint_D g\,d\sigma$；特别地，$f\ge0$ 时 $\iint_D f\,d\sigma\ge0$。</li>
<li><b>绝对值不等式</b>：$\big|\iint_D f\,d\sigma\big|\le\iint_D|f|\,d\sigma$。</li>
<li><b>估值不等式</b>：若在 $D$ 上 $m\le f\le M$，则 $m\sigma\le\iint_D f\,d\sigma\le M\sigma$。</li>
</ol>`,
        intuition: R`<p>二重积分是积分和的极限，而积分和满足的等式、不等式在取极限后保留下来。所以这些性质和定积分的性质一一对应，证明也几乎一样。几何上：体积可以分块相加；顶更高的柱体体积更大；体积介于"最矮的平顶柱体"和"最高的平顶柱体"之间。</p>`,
        steps: [
          { s: R`<p><b>线性</b>：对同一个分割、同一组点，$$\sum_i(\alpha f+\beta g)(\xi_i,\eta_i)\Delta\sigma_i=\alpha\sum_i f(\xi_i,\eta_i)\Delta\sigma_i+\beta\sum_i g(\xi_i,\eta_i)\Delta\sigma_i .$$ 令 $\lambda\to0$，右端两个和分别趋于 $\iint_D f\,d\sigma$、$\iint_D g\,d\sigma$，所以左端的极限存在并等于右端。</p>`, why: R`<p>极限的线性运算法则。这一步同时说明了 $\alpha f+\beta g$ 可积，不必另外假设。</p>` },
          { s: R`<p><b>可加性</b>：任取 $D_1$ 的分割 $T_1$、$D_2$ 的分割 $T_2$ 及其上的取点。两者合在一起是 $D$ 的一个分割 $T$，其细度 $\lambda(T)=\max\{\lambda(T_1),\lambda(T_2)\}$，并且 $$\sum_T=\sum_{T_1}+\sum_{T_2}.$$ 令 $\lambda(T_1)\to0$、$\lambda(T_2)\to0$，则 $\lambda(T)\to0$，左端趋于 $\iint_D f\,d\sigma$，右端趋于 $\iint_{D_1}f\,d\sigma+\iint_{D_2}f\,d\sigma$。</p>`, why: R`<p>关键在"可积时极限与分法无关"：$f$ 在 $D$ 上可积，所以可以只用这种"沿分界线切开"的特殊分割去求 $D$ 上的极限。如果分割块横跨分界线，和式就没法拆成两部分——这就是定义里必须要求"与分法无关"的用处。</p>` },
          { s: R`<p><b>面积</b>：对任何分割、任何取点，$\sum 1\cdot\Delta\sigma_i=\sigma$，极限也是 $\sigma$。</p>`, why: R`<p>各小块面积之和等于 $D$ 的面积（面积的可加性），积分和是常数，极限就是它本身。</p>` },
          { s: R`<p><b>保序性</b>：同一分割、同一组点下，由 $f\le g$ 和 $\Delta\sigma_i>0$ 得 $\sum f(\xi_i,\eta_i)\Delta\sigma_i\le\sum g(\xi_i,\eta_i)\Delta\sigma_i$；令 $\lambda\to0$ 取极限，不等号保持。</p>`, why: R`<p>极限的保序性：两个变量始终满足 $a\le b$ 且极限都存在，则 $\lim a\le\lim b$。注意严格不等号取极限后可能变成等号，所以这里只得到"$\le$"。</p>` },
          { s: R`<p><b>绝对值不等式</b>：由 $-|f|\le f\le|f|$ 及第 4、1 条，$-\iint_D|f|\,d\sigma\le\iint_D f\,d\sigma\le\iint_D|f|\,d\sigma$，即所证。</p>`, why: R`<p>这里需要 $|f|$ 可积。$f$ 连续时 $|f|$ 也连续，自然可积（一般地，可积函数的绝对值也可积，证明从略）。</p>` },
          { s: R`<p><b>估值不等式</b>：由 $m\le f\le M$ 及第 4 条，$\iint_D m\,d\sigma\le\iint_D f\,d\sigma\le\iint_D M\,d\sigma$；再由第 1、3 条，两端分别为 $m\sigma$、$M\sigma$。</p>`, why: R`<p>常数的积分就是"常数 × 面积"。几何上：曲顶柱体被夹在两个平顶柱体之间。</p>` }
        ],
        remark: R`<p><b>严格保号性</b>：若 $f$ 在 $D$ 上连续，$f\ge0$ 且不恒为 $0$，则 $\iint_D f\,d\sigma>0$。证：设 $f(P_0)>0$。由连续性，存在以 $P_0$ 为中心的小圆盘，它与 $D$ 的公共部分 $D_0$（面积 $\sigma_0>0$）上 $f>\frac12f(P_0)$。由可加性与保序性，$\iint_D f\,d\sigma\ge\iint_{D_0}f\,d\sigma\ge\frac12f(P_0)\,\sigma_0>0$。由此得到常用结论：<b>$f$ 连续、$f\ge0$ 且 $\iint_D f\,d\sigma=0$ 时，$f\equiv0$</b>。</p><p>保序性是"比较二重积分大小"题的依据：<b>积分区域相同时，只需在区域上比较被积函数</b>。估值不等式用于估计积分的范围。</p>`
      },

      /* ───────── 6. 中值定理 ───────── */
      {
        kind: 'thm', title: '二重积分中值定理',
        statement: R`<p>设 $f$ 在有界闭区域 $D$ 上连续，$\sigma>0$ 为 $D$ 的面积，则在 $D$ 上至少存在一点 $(\xi,\eta)$，使 $$\iint\limits_D f(x,y)\,d\sigma=f(\xi,\eta)\,\sigma .$$ <b>推广</b>：若 $f,g$ 在 $D$ 上连续，且 $g$ 在 $D$ 上不变号，则存在 $(\xi,\eta)\in D$，使 $\iint_D fg\,d\sigma=f(\xi,\eta)\iint_D g\,d\sigma$。</p>`,
        intuition: R`<p>$\dfrac1\sigma\iint_D f\,d\sigma$ 是 $f$ 在 $D$ 上的<b>平均值</b>（平均高度）。定理说：曲顶柱体的体积等于某个平顶柱体的体积，而这个平顶的高度恰好是曲顶上某一点的高度。就像一天的平均气温一定在某个时刻真实出现过——前提是气温连续变化，且时间是连成一片的。</p>`,
        steps: [
          { s: R`<p>由最值定理，存在 $P_1,P_2\in D$ 使 $f(P_1)=m=\min_D f$，$f(P_2)=M=\max_D f$。</p>`, why: R`<p>有界闭区域上的连续函数必取得最大值和最小值（多元最值定理，依赖实数完备性，这里作为已知）。"有界""闭""连续"缺一不可，所以定理的条件里有它们。</p>` },
          { s: R`<p>由估值不等式 $m\sigma\le\iint_D f\,d\sigma\le M\sigma$，两边除以 $\sigma>0$：$$m\le\mu:=\frac1\sigma\iint\limits_D f\,d\sigma\le M .$$</p>`, why: R`<p>把"体积等于某点高度 × 面积"转化为"平均值 $\mu$ 被 $f$ 取到"，这是一个介值问题。</p>` },
          { s: R`<p>区域 $D$ 是连通的：用 $D$ 内一条连续曲线 $\gamma$：$x=x(t)$，$y=y(t)$（$0\le t\le1$）连接 $P_1$（$t=0$）与 $P_2$（$t=1$）。令 $\varphi(t)=f(x(t),y(t))$，它在 $[0,1]$ 上连续，且 $\varphi(0)=m\le\mu\le M=\varphi(1)$。由一元介值定理，存在 $t_0\in[0,1]$ 使 $\varphi(t_0)=\mu$。取 $(\xi,\eta)=(x(t_0),y(t_0))\in D$，即得 $\iint_D f\,d\sigma=f(\xi,\eta)\,\sigma$。</p>`, why: R`<p>二元的介值问题沿一条曲线"降维"成一元的介值问题——这是处理多元连续函数介值性的标准想法。"区域"按定义是连通的；本篇的区域由有限条光滑曲线围成，其中任意两点都能用 $D$ 内的折线或曲线连接。连续函数的复合仍连续，所以 $\varphi$ 连续。</p>` },
          { s: R`<p><b>推广</b>：不妨设 $g\ge0$（$g\le0$ 时对 $-g$ 讨论）。由 $m\le f\le M$ 得 $mg\le fg\le Mg$，积分得 $m\iint_D g\,d\sigma\le\iint_D fg\,d\sigma\le M\iint_D g\,d\sigma$。若 $\iint_D g\,d\sigma=0$，则 $\iint_D fg\,d\sigma=0$，任取 $(\xi,\eta)\in D$ 都成立；若 $\iint_D g\,d\sigma>0$，除过去得 $m\le\dfrac{\iint_D fg\,d\sigma}{\iint_D g\,d\sigma}\le M$，再按第 3 步取点。</p>`, why: R`<p>这是"加权平均值"版本，$g$ 是权重。$g\ge0$ 保证乘以 $g$ 时不等号方向不变——这就是"$g$ 不变号"这个条件的作用；若 $g$ 变号，不等式在 $g\lt0$ 的地方会反向，论证失效。</p>` }
        ],
        remark: R`<p><b>条件不能去掉。</b>① 连续不能去：$D=[-1,1]\times[0,1]$，在 $x\ge0$ 处 $f=1$，在 $x\lt0$ 处 $f=-1$，则 $\iint_D f\,d\sigma=0$，但 $f$ 只取 $\pm1$，取不到平均值 $0$。② 连通不能去：若 $D$ 是两个互不相交的单位圆盘 $D_1\cup D_2$，在 $D_1$ 上 $f=0$，在 $D_2$ 上 $f=1$（$f$ 在 $D$ 上连续），平均值为 $\frac12$，却无处取到。</p><p><b>用途。</b>$(\xi,\eta)$ 一般不知道在哪、也不一定唯一，但它被限制在 $D$ 内，这就足以用来求极限：若 $f$ 在原点附近连续，$D_t$ 为圆盘 $x^2+y^2\le t^2$，则 $$\lim_{t\to0^+}\frac1{\pi t^2}\iint\limits_{D_t}f(x,y)\,d\sigma=\lim_{t\to0^+}f(\xi_t,\eta_t)=f(0,0),$$ 因为 $(\xi_t,\eta_t)\in D_t$，$\sqrt{\xi_t^2+\eta_t^2}\le t\to0$，再用 $f$ 的连续性。</p><p>它与定积分中值定理 $\int_a^b f(x)\,dx=f(\xi)(b-a)$ 完全平行，只是"区间长度"换成了"区域面积"。</p>`
      },

      /* ───────── 7. 例 1 ───────── */
      {
        kind: 'example', title: '例 1：比较大小、估值与中值定理求极限',
        html: R`<p><b>(1)</b> 设 $D:(x-2)^2+(y-1)^2\le2$，比较 $I_1=\iint_D(x+y)^2\,d\sigma$ 与 $I_2=\iint_D(x+y)^3\,d\sigma$ 的大小。</p>
<p><b>想法</b>：积分区域相同，由保序性只需在 $D$ 上比较 $(x+y)^2$ 与 $(x+y)^3$；而 $t\ge0$ 时 $t^3\ge t^2\iff t\ge1$，所以关键是看 $D$ 上 $x+y$ 与 $1$ 的大小——这是"直线与圆的位置关系"问题。</p>
<p><b>解</b>：圆心 $(2,1)$ 到直线 $x+y=1$ 的距离为 $\dfrac{|2+1-1|}{\sqrt2}=\sqrt2$，恰好等于半径，所以直线与圆相切；圆心满足 $x+y=3>1$，故整个 $D$ 落在 $x+y\ge1$ 一侧。于是在 $D$ 上 $(x+y)^3-(x+y)^2=(x+y)^2(x+y-1)\ge0$，且只在切点处等于 $0$。由严格保号性，$I_2>I_1$。</p>
<p><b>(2)</b> 估计 $I=\iint\limits_{x^2+y^2\le4}(x^2+4y^2+9)\,d\sigma$ 的范围。</p>
<p><b>解</b>：在 $D$ 上 $9\le x^2+4y^2+9\le4(x^2+y^2)+9\le25$，面积 $\sigma=4\pi$，由估值不等式 $36\pi\le I\le100\pi$。（后面学了极坐标与轮换对称，可以算出 $I=56\pi$，确实在这个范围内。）</p>
<p><b>(3)</b> 求 $\displaystyle\lim_{t\to0^+}\frac1{\pi t^2}\iint\limits_{x^2+y^2\le t^2}e^{x^2-y^2}\cos(x+y)\,d\sigma$。</p>
<p><b>想法</b>：积分区域缩向一点、分母恰好是区域面积——这是中值定理的典型信号。</p>
<p><b>解</b>：被积函数连续，由中值定理，存在满足 $\xi^2+\eta^2\le t^2$ 的 $(\xi,\eta)$，使积分 $=e^{\xi^2-\eta^2}\cos(\xi+\eta)\cdot\pi t^2$。于是原式 $=\lim\limits_{t\to0^+}e^{\xi^2-\eta^2}\cos(\xi+\eta)$。由于 $|\xi|,|\eta|\le t\to0$，$(\xi,\eta)\to(0,0)$，由连续性，极限为 $e^0\cos0=1$。</p>
<p><b>注意</b>：$(\xi,\eta)$ 随 $t$ 变化，不能当成常数；"$\to(0,0)$"的理由是它被夹在缩小的圆盘里。</p>`
      },

      /* ───────── 8. X 型、Y 型 ───────── */
      {
        kind: 'def', title: 'X 型、Y 型区域与累次积分',
        html: R`<p><b>X 型区域</b>：$D=\{(x,y)\mid a\le x\le b,\ \varphi_1(x)\le y\le\varphi_2(x)\}$，其中 $\varphi_1,\varphi_2$ 在 $[a,b]$ 上连续，$\varphi_1\le\varphi_2$。它的特点：左右两边是竖直线段（或缩成一点），下边界是一条曲线 $y=\varphi_1(x)$，上边界是一条曲线 $y=\varphi_2(x)$；<b>穿过 $D$ 内部且平行于 $y$ 轴的直线，与 $D$ 的边界恰好交于两点</b>。</p>
<p><b>Y 型区域</b>：$D=\{(x,y)\mid c\le y\le d,\ \psi_1(y)\le x\le\psi_2(y)\}$，$\psi_1,\psi_2$ 在 $[c,d]$ 上连续，$\psi_1\le\psi_2$；平行于 $x$ 轴的直线穿过内部时，从左边界 $x=\psi_1(y)$ 进入、从右边界 $x=\psi_2(y)$ 穿出。</p>
<svg viewBox="0 0 420 225" width="100%" style="max-width:420px" fill="none" stroke="currentColor">
<defs><marker id="mdb-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor" stroke="none"/></marker></defs>
<line x1="22" y1="200" x2="205" y2="200" stroke-width="1.2" marker-end="url(#mdb-ar)"/>
<line x1="30" y1="208" x2="30" y2="28" stroke-width="1.2" marker-end="url(#mdb-ar)"/>
<path d="M60,150 C100,175 140,165 170,140 L170,80 C145,50 95,40 60,100 Z" fill="currentColor" fill-opacity="0.12" stroke-width="1.6"/>
<path d="M60,150 L60,200 M170,140 L170,200" stroke-dasharray="4 3" stroke-width="1"/>
<line x1="118.75" y1="212" x2="118.75" y2="32" stroke-width="1.2" marker-end="url(#mdb-ar)"/>
<circle cx="118.75" cy="163.75" r="3" fill="currentColor"/>
<circle cx="118.75" cy="56.25" r="3" fill="currentColor"/>
<line x1="227" y1="200" x2="410" y2="200" stroke-width="1.2" marker-end="url(#mdb-ar)"/>
<line x1="235" y1="208" x2="235" y2="28" stroke-width="1.2" marker-end="url(#mdb-ar)"/>
<path d="M280,170 L350,170 C390,140 400,90 380,60 L270,60 C250,90 255,140 280,170 Z" fill="currentColor" fill-opacity="0.12" stroke-width="1.6"/>
<path d="M235,170 L280,170 M235,60 L270,60" stroke-dasharray="4 3" stroke-width="1"/>
<line x1="226" y1="115" x2="408" y2="115" stroke-width="1.2" marker-end="url(#mdb-ar)"/>
<circle cx="258.1" cy="115" r="3" fill="currentColor"/>
<circle cx="387.5" cy="115" r="3" fill="currentColor"/>
<g fill="currentColor" stroke="none" font-size="12">
<text x="36" y="16">X 型：竖线穿，先对 y 积分</text>
<text x="56" y="216">a</text>
<text x="166" y="216">b</text>
<text x="198" y="216">x</text>
<text x="18" y="34">y</text>
<text x="76" y="186">φ₁(x)</text>
<text x="140" y="46">φ₂(x)</text>
<text x="124" y="150" font-size="11">下限</text>
<text x="124" y="74" font-size="11">上限</text>
<text x="246" y="16">Y 型：横线穿，先对 x 积分</text>
<text x="222" y="174">c</text>
<text x="222" y="64">d</text>
<text x="404" y="216">x</text>
<text x="223" y="34">y</text>
<text x="242" y="142">ψ₁</text>
<text x="378" y="152">ψ₂</text>
<text x="264" y="108" font-size="11">下限</text>
<text x="352" y="108" font-size="11">上限</text>
</g>
</svg>
<p><b>累次积分（二次积分）</b>：记号 $$\int_a^b dx\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy\ :=\ \int_a^b\Big[\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy\Big]dx .$$ 先算内层：把 $x$ 看成常数，对 $y$ 积分，结果是 $x$ 的函数 $F(x)$；再算外层：对 $x$ 从 $a$ 积到 $b$。先 $x$ 后 $y$ 的累次积分 $\int_c^d dy\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)\,dx$ 同理。</p>
<p><b>逐字拆解。</b></p>
<ul>
<li><b>外层积分限必须是常数</b>：外层积完要得到一个数；内层积分限可以是外层变量的函数，它描述"固定 $x$ 时 $y$ 的变化范围"。如果外层限里出现了变量，一定写错了。</li>
<li><b>下限不超过上限</b>：$\varphi_1\le\varphi_2$ 保证内层是"从下边界积到上边界"，被积函数非负时内层结果非负（它是截面积）。</li>
<li><b>边界函数连续</b>：保证上、下边界都是连续曲线，没有"断口"。上边界如果由两段不同曲线组成（如先是 $y=\sqrt x$、后是 $y=2-x$），区域仍可看成 X 型，但 $\varphi_2$ 是分段函数，写累次积分时要在分段点把外层积分拆开。</li>
</ul>
<p><b>正例</b>：圆盘 $x^2+y^2\le1$ 既是 X 型（$-1\le x\le1$，$-\sqrt{1-x^2}\le y\le\sqrt{1-x^2}$），又是 Y 型；三角形、矩形也都两种类型兼备。<b>反例</b>：圆环 $1\le x^2+y^2\le4$ 既不是 X 型也不是 Y 型（直线 $x=0$ 与它的边界交于 4 点），用直角坐标只能分块；但在极坐标下它是最简单的 $1\le r\le2$，$0\le\theta\le2\pi$。</p>
<p><b>穿线定限法</b>（以先 $y$ 后 $x$ 为例）：① 把 $D$ 投影到 $x$ 轴得区间 $[a,b]$，这是外层限；② 在 $[a,b]$ 内任取 $x$，作一条从下往上的竖直线穿过 $D$，<b>先交到的边界</b>是内层下限 $\varphi_1(x)$，<b>后交到的边界</b>是内层上限 $\varphi_2(x)$；③ 若穿过的边界在某处换了一条曲线，就在那里把区域分块。口诀："<b>后积先定限，限内画条线，先交下限写，后交上限见</b>"。</p>`
      },

      /* ───────── 9. 化为累次积分 ───────── */
      {
        kind: 'thm', title: '直角坐标下化二重积分为累次积分',
        statement: R`<p>设 $D=\{(x,y)\mid a\le x\le b,\ \varphi_1(x)\le y\le\varphi_2(x)\}$ 为 X 型区域（$\varphi_1\le\varphi_2$ 在 $[a,b]$ 上连续），$f$ 在 $D$ 上连续，则 $$\iint\limits_D f(x,y)\,d\sigma=\int_a^b dx\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy .$$ 对 Y 型区域 $D=\{c\le y\le d,\ \psi_1(y)\le x\le\psi_2(y)\}$，同样有 $\iint_D f\,d\sigma=\int_c^d dy\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)\,dx$。</p>`,
        intuition: R`<p><b>切面包。</b>$f\ge0$ 时，用垂直于 $x$ 轴的平面 $x=x_0$ 去截曲顶柱体，截面是一个曲边梯形，面积为 $A(x_0)=\int_{\varphi_1(x_0)}^{\varphi_2(x_0)}f(x_0,y)\,dy$；再由"平行截面面积已知的立体体积"公式，$V=\int_a^bA(x)\,dx$。二维问题拆成了两次一维问题：先沿每条竖线累加（内层），再把所有竖线累加（外层）。</p><p>从积分和看：用网格分割时积分和是双重和 $\sum_i\sum_j f(\xi_i,\eta_j)\Delta x_i\Delta y_j$，先对 $j$ 求和（内层和 $\approx\int f(\xi_i,y)\,dy$），再对 $i$ 求和——累次积分就是这个"先列后行"的求和顺序取极限。下面的证明把这个想法变成严格的夹逼。</p>`,
        steps: [
          { s: R`<p><b>出发点</b>。本证明以三件事为已知：(a) 上面的存在定理；(b) <b>康托尔定理</b>：有界闭区域上的连续函数一致连续，即对任意 $\varepsilon>0$ 存在 $\delta>0$，只要两点距离小于 $\delta$，函数值之差就小于 $\varepsilon$；(c) 一元定积分的性质。</p>`, why: R`<p>(a)(b) 都依赖实数完备性（康托尔定理通常由致密性定理或闭区间套定理证明），是数学分析的结论，这里明确作为起点。证明思路是"夹逼"：用网格分割的小和、大和把累次积分夹在中间。</p>` },
          { s: R`<p><b>引理</b>：若 $g(x,t)$ 在矩形 $[a,b]\times[0,1]$ 上连续，则 $G(x)=\int_0^1g(x,t)\,dt$ 在 $[a,b]$ 上连续。证：任给 $\varepsilon>0$，由一致连续性取 $\delta>0$，当 $|x-x'|\lt\delta$ 时对一切 $t\in[0,1]$ 有 $|g(x,t)-g(x',t)|\lt\varepsilon$，于是 $$|G(x)-G(x')|\le\int_0^1|g(x,t)-g(x',t)|\,dt\le\varepsilon .$$</p>`, why: R`<p>必须用<b>一致</b>连续：同一个 $\delta$ 对所有 $t$ 都管用，才能在积分号下统一估计。若只知道 $g$ 在每一点连续，$\delta$ 可能随 $t$ 变化而没有公共的正下界。</p>` },
          { s: R`<p><b>内层积分 $F(x)=\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy$ 在 $[a,b]$ 上连续</b>。对固定的 $x$，作代换 $y=\varphi_1(x)+t\,[\varphi_2(x)-\varphi_1(x)]$（$0\le t\le1$），得 $$F(x)=[\varphi_2(x)-\varphi_1(x)]\int_0^1f\big(x,\ \varphi_1(x)+t[\varphi_2(x)-\varphi_1(x)]\big)\,dt .$$ 积分号下的函数是连续函数的复合，在 $[a,b]\times[0,1]$ 上连续（点 $(x,\varphi_1+t(\varphi_2-\varphi_1))$ 始终在 $D$ 内），由引理，积分是 $x$ 的连续函数；再乘连续函数 $\varphi_2-\varphi_1$，仍连续。所以外层积分 $\int_a^bF(x)\,dx$ 存在。</p>`, why: R`<p>内层的积分限随 $x$ 变动，直接比较 $F(x)$ 与 $F(x')$ 不方便；线性代换把变动的区间 $[\varphi_1(x),\varphi_2(x)]$ "拉成"固定的 $[0,1]$，就回到了引理的情形。若某个 $x$ 处 $\varphi_1(x)=\varphi_2(x)$，代换式两边都是 $0$，仍然成立。</p>` },
          { s: R`<p><b>零延拓到矩形</b>。取 $c\le\min\varphi_1$，$d\ge\max\varphi_2$，矩形 $Q=[a,b]\times[c,d]\supset D$。在 $D$ 上令 $\tilde f=f$，在 $Q$ 中 $D$ 以外令 $\tilde f=0$。则：<br>① $\tilde f$ 有界，间断点只可能在曲线 $y=\varphi_1(x)$、$y=\varphi_2(x)$ 上，由存在定理 (2)，$\tilde f$ 在 $Q$ 上可积；<br>② $\iint_Q\tilde f\,d\sigma=\iint_D f\,d\sigma$；<br>③ 对每个固定的 $x$，$\int_c^d\tilde f(x,y)\,dy=F(x)$。</p>`, why: R`<p>矩形上可以用"横平竖直"的网格分割，横、纵坐标的分点互不干扰，双重和才能拆成"先对 $y$、再对 $x$"。② 的理由：$Q$ 由 $D$、上方的 $D_{\text{上}}=\{\varphi_2(x)\le y\le d\}$、下方的 $D_{\text{下}}=\{c\le y\le\varphi_1(x)\}$ 三块组成（无公共内点）；在 $D_{\text{上}}$ 上 $\tilde f$ 除边界曲线外都是 $0$，它可积，而每个小块都有正面积，总能取到不在曲线上的点使积分和为 $0$，所以积分为 $0$；$D_{\text{下}}$ 同理，再用可加性。③ 的理由：固定 $x$ 后，$\tilde f(x,y)$ 在 $[\varphi_1(x),\varphi_2(x)]$ 外为 $0$，在内等于 $f(x,y)$。</p>` },
          { s: R`<p><b>网格分割下的夹逼不等式</b>。作分点 $a=x_0\lt x_1\lt\dots\lt x_m=b$，$c=y_0\lt y_1\lt\dots\lt y_n=d$，得小矩形 $Q_{ij}=[x_{i-1},x_i]\times[y_{j-1},y_j]$。记 $m_{ij},M_{ij}$ 为 $\tilde f$ 在 $Q_{ij}$ 上的下确界、上确界。对 $x\in[x_{i-1},x_i]$，在每段 $[y_{j-1},y_j]$ 上 $m_{ij}\le\tilde f(x,y)\le M_{ij}$，对 $y$ 积分并对 $j$ 求和：$$\sum_{j=1}^n m_{ij}\Delta y_j\le F(x)\le\sum_{j=1}^n M_{ij}\Delta y_j .$$ 再在 $[x_{i-1},x_i]$ 上对 $x$ 积分、对 $i$ 求和：$$s:=\sum_{i,j}m_{ij}\Delta x_i\Delta y_j\ \le\ \int_a^bF(x)\,dx\ \le\ \sum_{i,j}M_{ij}\Delta x_i\Delta y_j=:S .$$</p>`, why: R`<p>这正是"先沿竖线累加、再把竖线累加"的严格版本。用上、下确界而不用具体函数值，是为了得到对小区间内<b>每一个</b> $x$ 都成立的不等式，从而可以对 $x$ 积分。</p>` },
          { s: R`<p><b>小和、大和都趋于二重积分</b>。记 $I=\iint_Q\tilde f\,d\sigma$。任给 $\varepsilon>0$，由下确界的定义，在每个 $Q_{ij}$ 中取点 $P_{ij}$ 使 $\tilde f(P_{ij})\lt m_{ij}+\varepsilon$，得到一个积分和 $\Sigma'=\sum\tilde f(P_{ij})\Delta x_i\Delta y_j$，满足 $$s\le\Sigma'\lt s+\varepsilon(b-a)(d-c).$$ 网格分割是一种特殊分割，$\tilde f$ 可积，所以细度足够小时 $|\Sigma'-I|\lt\varepsilon$，从而 $|s-I|\lt\varepsilon\,[1+(b-a)(d-c)]$。$\varepsilon$ 任意，故 $s\to I$。同理 $S\to I$。</p>`, why: R`<p>小和、大和本身不一定是积分和（确界不一定取得到，例如在间断曲线附近），但它们能被积分和任意逼近。若被积函数处处连续，确界就是最值，能直接取到，这一步更简单。</p>` },
          { s: R`<p><b>夹逼</b>。$\int_a^bF(x)\,dx$ 是一个与分割无关的数，对每一个网格分割都有 $s\le\int_a^bF(x)\,dx\le S$。令细度 $\to0$，两端都趋于 $I$，所以 $$\int_a^bF(x)\,dx=I=\iint\limits_D f\,d\sigma ,$$ 即 $\iint_D f\,d\sigma=\int_a^b dx\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy$。对 Y 型区域，把 $x,y$ 的角色互换，论证完全相同。</p>`, why: R`<p>一个固定的数被两个趋于同一极限的量夹住，只能等于这个极限（夹逼准则）。</p>` }
        ],
        remark: R`<p>① <b>一般区域</b>：用平行于坐标轴的直线把 $D$ 分成若干块，每块是 X 型或 Y 型，分别化为累次积分再相加（可加性）。</p><p>② <b>矩形与分离变量</b>：$D=[a,b]\times[c,d]$ 时内外限都是常数；若再有 $f(x,y)=g(x)h(y)$，则 $$\iint\limits_D g(x)h(y)\,d\sigma=\int_a^b g(x)\,dx\cdot\int_c^d h(y)\,dy ,$$ 二重积分等于两个定积分之积——后面"概率积分"和"积分不等式"都要用。</p><p>③ 条件"$f$ 连续"可以放宽（证明中实际用到的是 $\tilde f$ 可积、内层积分存在且外层可积），但不能丢掉"可积"：下一定理的反例中被积函数无界，两个次序的累次积分都存在却不相等。</p><p>④ 同样的"切片"思想推广到三维，就是「三重积分」中的"先一后二""先二后一"。</p>`
      },

      /* ───────── 10. 交换次序 ───────── */
      {
        kind: 'thm', title: '累次积分可以交换次序（及失败的反例）',
        statement: R`<p>若有界闭区域 $D$ 既可表示为 X 型 $\{a\le x\le b,\ \varphi_1(x)\le y\le\varphi_2(x)\}$，又可表示为 Y 型 $\{c\le y\le d,\ \psi_1(y)\le x\le\psi_2(y)\}$，$f$ 在 $D$ 上连续，则 $$\int_a^b dx\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy=\int_c^d dy\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)\,dx .$$</p>`,
        intuition: R`<p>同一个曲顶柱体，竖着切片（垂直于 $x$ 轴）和横着切片（垂直于 $y$ 轴）算出来的体积当然一样。两个累次积分"看起来"毫不相干，但它们都是同一个二重积分。</p>`,
        steps: [
          { s: R`<p>由上一定理（X 型情形），左端 $=\iint_D f\,d\sigma$。</p>`, why: R`<p>左端累次积分的四个限正好是 $D$ 的 X 型表示。</p>` },
          { s: R`<p>由上一定理（Y 型情形），右端 $=\iint_D f\,d\sigma$。所以两端相等。</p>`, why: R`<p>二重积分是"桥梁"：两个累次积分不能直接比较，但都等于同一个二重积分。<b>交换积分次序的本质</b>就是：累次积分 → 还原成区域上的二重积分 → 按另一种次序重新写成累次积分。若 $D$ 按某一种次序需要分块，就分块写成几个累次积分之和，道理相同。</p>` }
        ],
        remark: R`<p><b>反例：被积函数无界时可能失败。</b>取 $f(x,y)=\dfrac{x^2-y^2}{(x^2+y^2)^2}$，$D=[0,1]\times[0,1]$（原点处无定义，且在原点附近无界）。注意到 $$\frac{\partial}{\partial y}\Big(\frac{y}{x^2+y^2}\Big)=\frac{x^2+y^2-2y^2}{(x^2+y^2)^2}=\frac{x^2-y^2}{(x^2+y^2)^2},$$ 所以对 $x>0$，$\displaystyle\int_0^1\frac{x^2-y^2}{(x^2+y^2)^2}\,dy=\frac{y}{x^2+y^2}\Big|_0^1=\frac1{1+x^2}$，于是 $$\int_0^1dx\int_0^1f\,dy=\int_0^1\frac{dx}{1+x^2}=\frac\pi4 .$$（$x=0$ 这一条线上内层积分发散，但单独一点不影响外层积分。）而 $f(y,x)=-f(x,y)$，同样的计算给出 $\int_0^1dy\int_0^1f\,dx=-\dfrac\pi4$。<b>两个次序都算得出来，结果却不相等！</b>原因是 $f$ 在原点附近无界，在 $D$ 上不可积，定理的条件不满足。教训：交换次序之前，要确认被积函数在闭区域上连续（或至少有界可积）。</p>`
      },

      /* ───────── 11. 例 2 ───────── */
      {
        kind: 'example', title: '例 2：选对积分次序（少分块）',
        html: R`<p>计算 $I=\iint_D xy\,d\sigma$，$D$ 由抛物线 $y^2=x$ 与直线 $y=x-2$ 围成。</p>
<p><b>第一步，画图求交点。</b>联立 $y^2=x$，$y=x-2$：$y^2=y+2$，$y=-1$ 或 $y=2$，交点为 $(1,-1)$、$(4,2)$。抛物线开口向右，直线从它的右侧穿过。</p>
<p><b>第二步，选次序。</b>若先 $y$ 后 $x$（竖直穿线）：当 $0\le x\le1$ 时，竖线从抛物线下半支 $y=-\sqrt x$ 进、从上半支 $y=\sqrt x$ 出；当 $1\le x\le4$ 时，从直线 $y=x-2$ 进、从 $y=\sqrt x$ 出——下边界换了曲线，要<b>分两块</b>。若先 $x$ 后 $y$（水平穿线）：$y$ 从 $-1$ 到 $2$，水平线总是从抛物线 $x=y^2$ 进、从直线 $x=y+2$ 出——<b>一块就够</b>。选后者。</p>
<p><b>第三步，计算。</b>$$I=\int_{-1}^2dy\int_{y^2}^{y+2}xy\,dx=\int_{-1}^2\frac y2\big[(y+2)^2-y^4\big]dy=\frac12\int_{-1}^2\big(y^3+4y^2+4y-y^5\big)\,dy .$$ 逐项：$\int_{-1}^2y^3dy=\frac{15}4$，$\int_{-1}^24y^2dy=12$，$\int_{-1}^24y\,dy=6$，$\int_{-1}^2y^5dy=\frac{21}2$，所以 $I=\frac12\big(\frac{15}4+12+6-\frac{21}2\big)=\frac12\cdot\frac{45}4=\frac{45}8$。</p>
<p><b>对照</b>：按先 $y$ 后 $x$ 计算，$I=\int_0^1dx\int_{-\sqrt x}^{\sqrt x}xy\,dy+\int_1^4dx\int_{x-2}^{\sqrt x}xy\,dy$。第一块的内层是奇函数在对称区间上积分，为 $0$；第二块 $=\frac12\int_1^4(-x^3+5x^2-4x)\,dx=\frac{45}8$。结果一样，但多了一块、还要处理 $\sqrt x$。</p>
<p><b>总结</b>：选次序的一条基本原则——<b>穿线过程中边界不换曲线的方向优先</b>，分块越少越好。</p>`
      },

      /* ───────── 12. 例 3 ───────── */
      {
        kind: 'example', title: '例 3：积不出，换次序',
        html: R`<p><b>(1)</b> 计算 $I=\iint_D e^{-y^2}\,d\sigma$，$D$ 由 $y=x$、$y=1$、$x=0$ 围成。</p>
<p><b>想法</b>：$D$ 是顶点为 $(0,0),(0,1),(1,1)$ 的三角形 $0\le x\le y\le1$，两种次序都不用分块。但若先对 $y$ 积分，$\int_x^1e^{-y^2}dy$ 的原函数不是初等函数，算不下去；先对 $x$ 积分时，$e^{-y^2}$ 只是常数。</p>
<p><b>解</b>：$I=\int_0^1dy\int_0^ye^{-y^2}dx=\int_0^1ye^{-y^2}dy=\Big[-\frac12e^{-y^2}\Big]_0^1=\frac12\big(1-e^{-1}\big)$。对 $x$ 积分"白送"了一个因子 $y$，恰好凑成 $e^{-y^2}$ 的微分——这不是巧合，这类题就是这样设计的。</p>
<p><b>(2)</b> 计算 $J=\int_0^1dx\int_x^1\dfrac{\sin y}y\,dy$。</p>
<p><b>想法</b>：内层 $\int\frac{\sin y}y\,dy$ 积不出。先由四个限还原区域：$0\le x\le1$，$x\le y\le1$，仍是上面的三角形 $0\le x\le y\le1$；换成先 $x$ 后 $y$：$y\in[0,1]$，$x\in[0,y]$。</p>
<p><b>解</b>：$J=\int_0^1dy\int_0^y\frac{\sin y}y\,dx=\int_0^1\sin y\,dy=1-\cos1$。（$\frac{\sin y}y$ 在 $y=0$ 处补充定义为 $1$ 后连续，满足定理条件。）</p>
<p><b>口诀</b>："<b>积不出，换次序</b>"。常见的积不出的内层：$e^{\pm y^2}$、$\frac{\sin y}y$、$\frac{\cos y}y$、$\sin y^2$、$\frac1{\ln y}$，以及对 $x$ 积分时的 $e^{y/x}$ 等。</p>`
      },

      /* ───────── 13. 交换次序方法 ───────── */
      {
        kind: 'method', title: '交换积分次序三步走',
        html: R`<p>给出一个累次积分，要求交换次序（或者因为积不出而必须换序），按三步走：</p>
<ol>
<li><b>由限画域</b>：把内外四个限写成不等式组，例如 $\int_a^bdx\int_{\varphi_1(x)}^{\varphi_2(x)}$ 对应 $a\le x\le b$，$\varphi_1(x)\le y\le\varphi_2(x)$；画出 $D$，标出边界曲线的交点。若是几个累次积分之和，把各块拼在一起看成一个区域。</li>
<li><b>换向穿线</b>：把 $D$ 投影到另一个坐标轴，得到新的外层常数限；在投影区间内作另一方向的直线穿过 $D$，先交为下限、后交为上限；边界换曲线处分块。</li>
<li><b>写新积分</b>：边界曲线要解出另一个变量（如 $y=x^2$ 改写为 $x=\sqrt y$），注意取正根还是负根，要看区域在哪一侧。</li>
</ol>
<p><b>什么时候需要换序</b>：① 内层积不出（例 3）；② 原次序要分好几块，新次序只要一块（或反过来，把几块合并成一块）；③ 证明题中把"二次积分"化成"一次积分"，如 $\int_0^xdt\int_0^tf(u)\,du=\int_0^x(x-u)f(u)\,du$（见例 4）。</p>
<p><b>自查办法</b>：取 $f\equiv1$，新旧两个累次积分都应等于 $D$ 的面积；再核对几个特殊点（如交点）是否满足新的不等式组。</p>`
      },

      /* ───────── 14. 例 4 ───────── */
      {
        kind: 'example', title: '例 4：交换次序——合并分块与证明等式',
        html: R`<p><b>(1)</b> 交换 $I=\int_0^1dx\int_0^{x^2}f(x,y)\,dy+\int_1^2dx\int_0^{2-x}f(x,y)\,dy$ 的积分次序（$f$ 连续）。</p>
<p><b>① 由限画域</b>：第一块 $D_1$：$0\le x\le1$，$0\le y\le x^2$（抛物线下方）；第二块 $D_2$：$1\le x\le2$，$0\le y\le2-x$（直线下方）。两块在 $x=1$ 处拼接，抛物线 $y=x^2$ 与直线 $y=2-x$ 交于 $(1,1)$。拼成的 $D$：下边界 $y=0$，左上边界 $y=x^2$，右上边界 $y=2-x$。</p>
<svg viewBox="0 0 420 240" width="100%" style="max-width:420px" fill="none" stroke="currentColor">
<defs><marker id="mdc-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor" stroke="none"/></marker></defs>
<line x1="30" y1="200" x2="395" y2="200" stroke-width="1.2" marker-end="url(#mdc-ar)"/>
<line x1="40" y1="210" x2="40" y2="30" stroke-width="1.2" marker-end="url(#mdc-ar)"/>
<path d="M40,200 Q110,200 180,60 L320,200 Z" fill="currentColor" fill-opacity="0.15" stroke-width="1.6"/>
<path d="M180,60 L180,200 M40,60 L180,60" stroke-dasharray="4 3" stroke-width="1"/>
<line x1="22" y1="130" x2="350" y2="130" stroke-width="1.2" marker-end="url(#mdc-ar)"/>
<circle cx="139" cy="130" r="3" fill="currentColor"/>
<circle cx="250" cy="130" r="3" fill="currentColor"/>
<g fill="currentColor" stroke="none" font-size="12">
<text x="26" y="216">O</text>
<text x="176" y="216">1</text>
<text x="316" y="216">2</text>
<text x="26" y="64">1</text>
<text x="388" y="216">x</text>
<text x="46" y="36">y</text>
<text x="46" y="98">y=x²（x=√y）</text>
<text x="258" y="98">y=2−x（x=2−y）</text>
<text x="140" y="188" font-size="11">D₁</text>
<text x="226" y="176" font-size="11">D₂</text>
<text x="20" y="234">水平线从 x=√y 进入（下限），从 x=2−y 穿出（上限）</text>
</g>
</svg>
<p><b>② 换向穿线</b>：$D$ 在 $y$ 轴上的投影是 $[0,1]$。任取 $y\in[0,1]$ 作水平线，从左边的抛物线进入，把 $y=x^2$ 解成 $x=\sqrt y$（区域在 $x\ge0$ 一侧，取正根）；从右边的直线 $x=2-y$ 穿出。</p>
<p><b>③ 写新积分</b>：$$I=\int_0^1dy\int_{\sqrt y}^{2-y}f(x,y)\,dx .$$ 原来两块，现在一块。自查：取 $f\equiv1$，原式 $=\frac13+\frac12=\frac56$，新式 $=\int_0^1(2-y-\sqrt y)\,dy=2-\frac12-\frac23=\frac56$，一致。</p>
<p><b>(2)</b> 设 $f$ 连续，证明 $\displaystyle\int_0^xdt\int_0^tf(u)\,du=\int_0^x(x-u)f(u)\,du$。</p>
<p><b>想法</b>：左边是二次积分，右边是一次积分；要"消掉"一层积分，就交换次序，让对 $t$ 的积分先做——被积函数 $f(u)$ 与 $t$ 无关，一积就出来。</p>
<p><b>证</b>：以 $x>0$ 为例（$x\le0$ 同理）。左边的积分区域（在以 $t$ 为横轴、$u$ 为纵轴的平面上）是 $0\le t\le x$，$0\le u\le t$，即三角形 $0\le u\le t\le x$。换成先 $t$ 后 $u$：$u\in[0,x]$，$t\in[u,x]$。于是 $$\int_0^xdt\int_0^tf(u)\,du=\int_0^xdu\int_u^xf(u)\,dt=\int_0^x(x-u)f(u)\,du .$$ 这个等式在"变限积分""微分方程"中常用：它说明"把 $f$ 积两次"等于"用权重 $x-u$ 积一次"。</p>`
      },

      /* ───────── 15. 例 5 ───────── */
      {
        kind: 'example', title: '例 5：被积函数含绝对值——沿分界线分块',
        html: R`<p>计算 $I=\iint_D|y-x^2|\,d\sigma$，$D=\{(x,y)\mid -1\le x\le1,\ 0\le y\le1\}$。</p>
<p><b>想法</b>：含绝对值、$\max$、$\min$、符号函数的被积函数，在不同部分有不同表达式，必须<b>沿分界线把区域切开</b>。这里分界线是抛物线 $y=x^2$：上方 $|y-x^2|=y-x^2$，下方 $|y-x^2|=x^2-y$。另外 $D$ 关于 $y$ 轴对称，被积函数关于 $x$ 是偶函数，可以只算右半边再乘 $2$（对称性的证明见后文）。</p>
<p><b>解</b>：$$I=2\int_0^1dx\Big[\int_{x^2}^1(y-x^2)\,dy+\int_0^{x^2}(x^2-y)\,dy\Big]=2\int_0^1\Big[\frac{(1-x^2)^2}2+\frac{x^4}2\Big]dx=\int_0^1(1-2x^2+2x^4)\,dx=\frac{11}{15}.$$ 其中内层：$\int_{x^2}^1(y-x^2)\,dy=\frac12(y-x^2)^2\Big|_{x^2}^1=\frac12(1-x^2)^2$，$\int_0^{x^2}(x^2-y)\,dy=-\frac12(x^2-y)^2\Big|_0^{x^2}=\frac12x^4$；最后 $1-\frac23+\frac25=\frac{11}{15}$。</p>
<p><b>注意</b>：这里用先 $y$ 后 $x$，竖线先穿过下方部分、再穿过上方部分，两部分的内层限正好在 $y=x^2$ 处衔接，同一个外层积分就能装下——这也是一个"选次序"的技巧。若用先 $x$ 后 $y$，则要按 $x=\pm\sqrt y$ 把每条水平线切成三段，麻烦得多。</p>`
      },

      /* ───────── 16. 极坐标区域 ───────── */
      {
        kind: 'def', title: '极坐标系下区域的表示',
        html: R`<p>平面上的点也可以用极坐标 $(r,\theta)$ 表示：$x=r\cos\theta$，$y=r\sin\theta$，$r\ge0$，$x^2+y^2=r^2$。一个区域在极坐标下常写成 $$D=\{(r\cos\theta,\ r\sin\theta)\mid \alpha\le\theta\le\beta,\ r_1(\theta)\le r\le r_2(\theta)\},$$ 其中 $r_1,r_2$ 在 $[\alpha,\beta]$ 上连续，$0\le r_1(\theta)\le r_2(\theta)$，$0\lt\beta-\alpha\le2\pi$。含义：从极点出发、倾角为 $\theta$ 的射线穿过 $D$ 时，<b>先交 $r=r_1(\theta)$（下限），后交 $r=r_2(\theta)$（上限）</b>。把 $(r,\theta)$ 看成另一张纸上的直角坐标，这些 $(r,\theta)$ 组成的集合记作 $D'$。</p>
<p><b>三种基本情形</b>：</p>
<ul>
<li><b>极点在 $D$ 外</b>：$\alpha\le\theta\le\beta$，$r_1(\theta)\le r\le r_2(\theta)$，$r_1>0$。例如圆环的一部分：$1\le r\le2$，$0\le\theta\le\frac\pi4$。</li>
<li><b>极点在 $D$ 的边界上</b>：$r_1\equiv0$。例如 $x^2+y^2\le2x$：代入得 $r^2\le2r\cos\theta$，即 $0\le r\le2\cos\theta$，而 $\theta$ 只能取 $[-\frac\pi2,\frac\pi2]$（其余方向上 $2\cos\theta\lt0$，射线根本碰不到区域）。</li>
<li><b>极点在 $D$ 内部</b>：$0\le\theta\le2\pi$，$0\le r\le r(\theta)$。例如圆盘 $x^2+y^2\le R^2$：$0\le r\le R$。</li>
</ul>
<p><b>常见曲线的极坐标方程</b>：</p>
<table>
<thead><tr><th>直角坐标</th><th>极坐标</th><th>说明</th></tr></thead>
<tbody>
<tr><td>$x^2+y^2=R^2$</td><td>$r=R$</td><td>圆心在原点</td></tr>
<tr><td>$x^2+y^2=2ax$（$a>0$）</td><td>$r=2a\cos\theta$，$-\frac\pi2\le\theta\le\frac\pi2$</td><td>圆心 $(a,0)$，过原点</td></tr>
<tr><td>$x^2+y^2=2ay$（$a>0$）</td><td>$r=2a\sin\theta$，$0\le\theta\le\pi$</td><td>圆心 $(0,a)$，过原点</td></tr>
<tr><td>$x=a$（$a>0$）</td><td>$r=\dfrac a{\cos\theta}=a\sec\theta$</td><td>竖直线</td></tr>
<tr><td>$y=b$（$b>0$）</td><td>$r=\dfrac b{\sin\theta}=b\csc\theta$</td><td>水平线</td></tr>
<tr><td>$x+y=1$</td><td>$r=\dfrac1{\cos\theta+\sin\theta}$</td><td>斜直线</td></tr>
<tr><td>$y=kx$（$x>0$）</td><td>$\theta=\arctan k$</td><td>射线</td></tr>
</tbody>
</table>
<p><b>逐字拆解。</b>"$r\ge0$"：极径是距离，不能为负，所以 $r_1(\theta)\ge0$；若算出的上限 $r_2(\theta)$ 在某些 $\theta$ 上为负，说明那些方向根本不经过区域，$\theta$ 的范围要缩小。"$\beta-\alpha\le2\pi$"：保证每个方向只算一次，区域不会被重复覆盖。"$r_1,r_2$ 连续"：与 X 型区域的上下边界一样，保证内外边界是连续曲线。</p>
<p><b>反例</b>：把 $x^2+y^2\le2x$ 写成 $0\le\theta\le2\pi$，$0\le r\le2\cos\theta$ 是错的：$\theta\in(\frac\pi2,\frac{3\pi}2)$ 时上限 $2\cos\theta\lt0$，"$0\le r\le$ 负数"没有意义。</p>`
      },

      /* ───────── 17. 极坐标公式 ───────── */
      {
        kind: 'thm', title: '极坐标变换公式',
        statement: R`<p>设 $D=\{(r\cos\theta,r\sin\theta)\mid\alpha\le\theta\le\beta,\ r_1(\theta)\le r\le r_2(\theta)\}$（$r_1,r_2$ 连续，$0\le r_1\le r_2$，$0\lt\beta-\alpha\le2\pi$），$f$ 在 $D$ 上连续，则 $$\iint\limits_D f(x,y)\,d\sigma=\iint\limits_{D'}f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta=\int_\alpha^\beta d\theta\int_{r_1(\theta)}^{r_2(\theta)}f(r\cos\theta,r\sin\theta)\,r\,dr .$$ 即极坐标下的面积元素为 $d\sigma=r\,dr\,d\theta$。</p>`,
        intuition: R`<p>用一族射线 $\theta=$ 常数和一族同心圆 $r=$ 常数分割 $D$，小块是"扇环"。它的径向宽度是 $\Delta r$，弧向长度约为 $r\Delta\theta$——同样的张角 $\Delta\theta$，离极点越远，弧越长。所以小块近似是边长为 $\Delta r$、$r\Delta\theta$ 的小矩形，面积 $\approx r\,\Delta r\,\Delta\theta$。</p>
<svg viewBox="0 0 420 245" width="100%" style="max-width:420px" fill="none" stroke="currentColor">
<line x1="60" y1="210" x2="400" y2="210" stroke-width="1.2"/>
<line x1="60" y1="210" x2="273" y2="110.7" stroke-width="1.2"/>
<line x1="60" y1="210" x2="226.2" y2="43.8" stroke-width="1.2"/>
<path d="M207.7,184 A150,150 0 0,0 135,80.1" stroke-dasharray="4 3" stroke-width="1"/>
<path d="M266.8,173.5 A210,210 0 0,0 165,28.1" stroke-dasharray="4 3" stroke-width="1"/>
<path d="M195.9,146.6 L250.3,121.3 A210,210 0 0,0 208.5,61.5 L166.1,103.9 A150,150 0 0,1 195.9,146.6 Z" fill="currentColor" fill-opacity="0.22" stroke-width="2"/>
<path d="M105.3,188.9 A50,50 0 0,0 95.4,174.6" stroke-width="1"/>
<path d="M90,210 A30,30 0 0,0 87.2,197.3" stroke-width="1"/>
<circle cx="60" cy="210" r="3" fill="currentColor"/>
<g fill="currentColor" stroke="none" font-size="12">
<text x="44" y="228">O</text>
<text x="95" y="206" font-size="11">θ</text>
<text x="106" y="180" font-size="11">Δθ</text>
<text x="196" y="202">r</text>
<text x="254" y="192">r+Δr</text>
<text x="226" y="150">Δr</text>
<text x="250" y="70">扇环面积 Δσ ≈ r·Δr·Δθ</text>
<text x="250" y="88" font-size="11">（r 取平均半径时精确相等）</text>
<text x="16" y="240">射线 θ=常数 与 同心圆 r=常数 分割；弧长 ≈ rΔθ，径向宽 Δr</text>
</g>
</svg>
<p>换句话说，把 $(r,\theta)$ 看成另一张纸上的直角坐标，那张纸上面积为 $\Delta r\Delta\theta$ 的小矩形，"贴"到 $xOy$ 平面上就被拉伸成面积为 $r\Delta r\Delta\theta$ 的扇环，$r$ 就是面积的<b>伸缩因子</b>。</p>`,
        steps: [
          { s: R`<p><b>延拓到扇形与矩形</b>。取 $R\ge\max r_2$。在 $r\theta$ 平面取矩形 $Q'=[0,R]\times[\alpha,\beta]$，它对应 $xOy$ 平面上的扇形 $S$（$\beta-\alpha=2\pi$ 时为圆盘）。令 $g(r,\theta)=f(r\cos\theta,r\sin\theta)\,r$，把 $f$ 零延拓到 $S$ 得 $\tilde f$，把 $g$ 零延拓到 $Q'$ 得 $\tilde g$。由存在定理 (2)，二者都可积，并且（与上面化累次积分定理第 4 步同理）$\iint_S\tilde f\,d\sigma=\iint_Df\,d\sigma$，$\iint_{Q'}\tilde g\,dr\,d\theta=\iint_{D'}g\,dr\,d\theta$。</p>`, why: R`<p>和直角坐标的证明一样，先换到"规则"的大区域上，便于用网格分割：$r\theta$ 平面上的网格，对应 $xOy$ 平面上由射线与同心圆构成的分割。$\tilde f$、$\tilde g$ 只在边界曲线（$r=r_1(\theta)$、$r=r_2(\theta)$ 及两条射线）上可能间断。</p>` },
          { s: R`<p><b>扇环的面积恰好是 $\bar\rho\,\Delta\rho\,\Delta\theta$</b>。作分点 $0=\rho_0\lt\rho_1\lt\dots\lt\rho_n=R$，$\alpha=\theta_0\lt\theta_1\lt\dots\lt\theta_m=\beta$。$r\theta$ 平面的小矩形 $[\rho_{j-1},\rho_j]\times[\theta_{i-1},\theta_i]$ 面积为 $\Delta\rho_j\Delta\theta_i$，它对应 $xOy$ 平面的扇环 $\Delta_{ij}$。由扇形面积公式 $\frac12\rho^2\Delta\theta$，$$|\Delta_{ij}|=\frac12\big(\rho_j^2-\rho_{j-1}^2\big)\Delta\theta_i=\bar\rho_j\,\Delta\rho_j\,\Delta\theta_i,\qquad \bar\rho_j=\frac{\rho_{j-1}+\rho_j}2 .$$</p>`, why: R`<p>这是整个证明的关键等式，而且是<b>精确相等</b>，不是近似：$\frac12(\rho_j^2-\rho_{j-1}^2)=\frac12(\rho_j+\rho_{j-1})(\rho_j-\rho_{j-1})$，平方差公式。取平均半径 $\bar\rho_j$ 当"伸缩因子"，误差就完全消失了。</p>` },
          { s: R`<p><b>扇环分割是合格的分割</b>。各 $\Delta_{ij}$ 无公共内点，并起来是 $S$。$\Delta_{ij}$ 中任意两点，可以先沿径向走不超过 $\Delta\rho_j$、再沿圆弧走不超过 $R\Delta\theta_i$ 相连，所以直径 $d(\Delta_{ij})\le\Delta\rho_j+R\Delta\theta_i$。当 $\max\Delta\rho_j\to0$、$\max\Delta\theta_i\to0$ 时，$xOy$ 平面上这个分割的细度也趋于 $0$。</p>`, why: R`<p>二重积分要求细度（直径）趋于 $0$。两点距离不超过连接它们的折线（径向线段 + 圆弧）的长度，弧长 $=$ 半径 $\times$ 圆心角 $\le R\Delta\theta_i$。所以 $r\theta$ 平面的网格变细时，扇环也确实缩向一点。</p>` },
          { s: R`<p><b>同一个和式，两种身份</b>。在 $\Delta_{ij}$ 中取点 $P_{ij}=(\bar\rho_j\cos\bar\theta_i,\ \bar\rho_j\sin\bar\theta_i)$，$\bar\theta_i=\frac{\theta_{i-1}+\theta_i}2$。由于 $\bar\rho_j>0$、$\bar\theta_i\in(\alpha,\beta)$，而 $\beta-\alpha\le2\pi$，点 $P_{ij}$ 的极坐标表示（角度取在 $[\alpha,\beta]$ 内）是唯一的，所以 $P_{ij}\in D\iff(\bar\rho_j,\bar\theta_i)\in D'$，从而 $\tilde f(P_{ij})\,\bar\rho_j=\tilde g(\bar\rho_j,\bar\theta_i)$。于是 $$\sum_{i,j}\tilde f(P_{ij})\,|\Delta_{ij}|=\sum_{i,j}\tilde f(P_{ij})\,\bar\rho_j\Delta\rho_j\Delta\theta_i=\sum_{i,j}\tilde g(\bar\rho_j,\bar\theta_i)\,\Delta\rho_j\Delta\theta_i .$$ 左端是 $\tilde f$ 在 $S$ 上的一个积分和，右端是 $\tilde g$ 在 $Q'$ 上的一个积分和。</p>`, why: R`<p>取点的技巧：径向取平均半径，正好配合第 2 步的精确面积公式；角度取中点，保证点落在开区间内，避开 $\beta-\alpha=2\pi$ 时 $\theta=\alpha$ 与 $\theta=\beta$ 两条射线重合带来的麻烦。可积时取点任意，所以这种特殊取点是允许的。</p>` },
          { s: R`<p><b>取极限</b>。令网格细度 $\to0$：左端 $\to\iint_S\tilde f\,d\sigma=\iint_Df\,d\sigma$，右端 $\to\iint_{Q'}\tilde g\,dr\,d\theta=\iint_{D'}f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta$。两端相等，第一个等号得证。</p>`, why: R`<p>两个积分都存在（第 1 步），而同一列和式的极限是唯一的。后面证明对称性时，用的也是这个"一个和式同时是两个积分的积分和"的手法。</p>` },
          { s: R`<p><b>化为累次积分</b>。$D'=\{\alpha\le\theta\le\beta,\ r_1(\theta)\le r\le r_2(\theta)\}$ 在 $r\theta$ 平面上是以 $\theta$ 为外层变量的"X 型"区域，$g(r,\theta)=f(r\cos\theta,r\sin\theta)\,r$ 在 $D'$ 上连续，由化累次积分定理得第二个等号。</p>`, why: R`<p>换元之后，极坐标下的计算又回到了直角坐标的累次积分，只不过"坐标轴"变成了 $\theta$ 和 $r$。</p>` }
        ],
        remark: R`<p>① <b>何时用极坐标</b>：区域是圆、扇形、圆环或其一部分（边界含 $x^2+y^2$）；被积函数形如 $f(x^2+y^2)$、$f(\frac yx)$、$f(\frac xy)$。两条中占一条就该考虑，两条都占几乎必用。</p><p>② <b>广义极坐标</b>：对椭圆 $\frac{x^2}{a^2}+\frac{y^2}{b^2}\le1$，令 $x=ar\cos\theta$，$y=br\sin\theta$，则 $d\sigma=ab\,r\,dr\,d\theta$，区域变为 $0\le r\le1$，$0\le\theta\le2\pi$。理由：先作伸缩 $x=au$、$y=bv$，$uv$ 平面上的网格小矩形 $\Delta u\Delta v$ 变成 $xOy$ 平面上面积为 $ab\,\Delta u\Delta v$ 的小矩形，用与第 4、5 步相同的"一个和式两种身份"论证得 $d\sigma=ab\,du\,dv$；再对 $(u,v)$ 用极坐标。例：$\iint_D\big(\frac{x^2}{a^2}+\frac{y^2}{b^2}\big)d\sigma=ab\int_0^{2\pi}d\theta\int_0^1r^2\cdot r\,dr=\frac{\pi ab}2$。</p><p>③ 一般的变量代换公式 $d\sigma=\Big|\dfrac{\partial(x,y)}{\partial(u,v)}\Big|\,du\,dv$（雅可比行列式）不在数学一大纲要求之内；极坐标是它的特例：$\dfrac{\partial(x,y)}{\partial(r,\theta)}=\begin{vmatrix}\cos\theta&-r\sin\theta\\\sin\theta&r\cos\theta\end{vmatrix}=r$。</p><p>④ 被积函数在极点无界时（如 $\iint_{x^2+y^2\le1}\frac{d\sigma}{\sqrt{x^2+y^2}}$），这是反常积分：先挖去小圆盘 $r\le\varepsilon$，再令 $\varepsilon\to0^+$。极坐标中的因子 $r$ 恰好抵消了奇性：$\int_0^{2\pi}d\theta\int_\varepsilon^1\frac1r\cdot r\,dr=2\pi(1-\varepsilon)\to2\pi$。</p>`
      },

      /* ───────── 18. 例 6 ───────── */
      {
        kind: 'example', title: '例 6：极坐标计算',
        html: R`<p><b>(1)</b> 计算 $I=\iint_D\sqrt{x^2+y^2}\,d\sigma$，$D:x^2+y^2\le2x$。</p>
<p><b>想法</b>：区域是圆 $(x-1)^2+y^2\le1$，被积函数是 $r$——两个信号都指向极坐标。极点（原点）在圆周上。</p>
<p><b>解</b>：边界 $r^2=2r\cos\theta$，即 $r=2\cos\theta$；$\theta\in[-\frac\pi2,\frac\pi2]$，$0\le r\le2\cos\theta$。$$I=\int_{-\pi/2}^{\pi/2}d\theta\int_0^{2\cos\theta}r\cdot r\,dr=\frac83\int_{-\pi/2}^{\pi/2}\cos^3\theta\,d\theta=\frac83\cdot2\cdot\frac23=\frac{32}9 .$$ 这里 $\int_0^{\pi/2}\cos^3\theta\,d\theta=\frac23$（点火公式），再由偶函数得 $\int_{-\pi/2}^{\pi/2}\cos^3\theta\,d\theta=\frac43$。注意被积函数 $r$ 与面积元素中的 $r$ 相乘得 $r^2$，<b>那个 $r$ 不能丢</b>。若用直角坐标，内层 $\int\sqrt{x^2+y^2}\,dy$ 要用到复杂的原函数，繁得多。</p>
<p><b>(2)</b> 计算 $J=\iint_D\arctan\dfrac yx\,d\sigma$，$D$ 是由 $x^2+y^2=1$、$x^2+y^2=4$、$y=0$、$y=x$ 围成的第一象限部分。</p>
<p><b>想法</b>：区域是圆环的一部分，被积函数是 $f(\frac yx)$ 型，用极坐标。</p>
<p><b>解</b>：$y=0$ 对应 $\theta=0$，$y=x$ 对应 $\theta=\frac\pi4$，所以 $0\le\theta\le\frac\pi4$，$1\le r\le2$；在此范围内 $\arctan\frac yx=\arctan(\tan\theta)=\theta$。$$J=\int_0^{\pi/4}d\theta\int_1^2\theta\,r\,dr=\int_0^{\pi/4}\theta\,d\theta\cdot\int_1^2r\,dr=\frac{\pi^2}{32}\cdot\frac32=\frac{3\pi^2}{64}.$$ 区域在 $r\theta$ 平面上是矩形，被积函数又能分离变量，于是变成两个定积分之积。</p>`
      },

      /* ───────── 19. 例 7 ───────── */
      {
        kind: 'example', title: '例 7：坐标互化与积分区域随参数变化',
        html: R`<p><b>(1) 直角化极坐标</b>：把 $I=\int_0^2dx\int_0^{\sqrt{2x-x^2}}f(x,y)\,dy$ 化为极坐标下的累次积分。</p>
<p><b>解</b>：由限 $0\le x\le2$，$0\le y\le\sqrt{2x-x^2}$，即圆 $(x-1)^2+y^2\le1$ 的上半部分。极坐标下 $0\le\theta\le\frac\pi2$，$0\le r\le2\cos\theta$：$$I=\int_0^{\pi/2}d\theta\int_0^{2\cos\theta}f(r\cos\theta,r\sin\theta)\,r\,dr .$$</p>
<p><b>(2) 极坐标化直角</b>：把 $J=\int_0^{\pi/4}d\theta\int_0^{\sec\theta}f(r\cos\theta,r\sin\theta)\,r\,dr$ 化为直角坐标下的累次积分，并求 $f(x,y)=\dfrac1{\sqrt{x^2+y^2}}$ 时的值。</p>
<p><b>解</b>：$0\le\theta\le\frac\pi4$ 是 $x$ 轴与直线 $y=x$ 之间的角；$r\le\sec\theta$ 即 $r\cos\theta\le1$，即 $x\le1$。所以区域是三角形 $0\le y\le x\le1$：$$J=\int_0^1dx\int_0^xf(x,y)\,dy .$$ 当 $f=\frac1{\sqrt{x^2+y^2}}=\frac1r$ 时，用极坐标：$J=\int_0^{\pi/4}d\theta\int_0^{\sec\theta}\frac1r\cdot r\,dr=\int_0^{\pi/4}\sec\theta\,d\theta=\ln|\sec\theta+\tan\theta|\Big|_0^{\pi/4}=\ln(1+\sqrt2)$。用直角坐标验证：内层 $\int_0^x\frac{dy}{\sqrt{x^2+y^2}}=\ln\big(y+\sqrt{x^2+y^2}\big)\Big|_0^x=\ln(1+\sqrt2)$，与 $x$ 无关，外层再积得 $\ln(1+\sqrt2)$，一致。（原点处被积函数无界，严格地说这是反常积分，但两种算法都收敛到同一值。）</p>
<p><b>(3) 积分区域随参数变化</b>：设 $f$ 连续，$F(t)=\iint\limits_{x^2+y^2\le t^2}f(x^2+y^2)\,d\sigma$（$t>0$），求 $F'(t)$ 与 $\lim\limits_{t\to0^+}\dfrac{F(t)}{t^2}$。</p>
<p><b>想法</b>：二重积分本身不好直接求导；先用极坐标把它化成"变上限的定积分"。</p>
<p><b>解</b>：$F(t)=\int_0^{2\pi}d\theta\int_0^tf(r^2)\,r\,dr=2\pi\int_0^trf(r^2)\,dr$，由变上限积分求导，$F'(t)=2\pi tf(t^2)$。由洛必达法则，$\lim\limits_{t\to0^+}\frac{F(t)}{t^2}=\lim\limits_{t\to0^+}\frac{2\pi tf(t^2)}{2t}=\pi f(0)$。也可用中值定理：$F(t)=f(\xi^2+\eta^2)\cdot\pi t^2$，$(\xi,\eta)\to(0,0)$，结果相同。</p>`
      },

      /* ───────── 20. 对称 ───────── */
      {
        kind: 'def', title: '区域的对称与函数的奇偶',
        html: R`<p>设 $D$ 为有界闭区域。</p>
<ul>
<li>$D$ <b>关于 $y$ 轴对称</b>：$(x,y)\in D\iff(-x,y)\in D$；<b>关于 $x$ 轴对称</b>：$(x,y)\in D\iff(x,-y)\in D$；<b>关于原点对称</b>：$(x,y)\in D\iff(-x,-y)\in D$；<b>关于直线 $y=x$ 对称</b>：$(x,y)\in D\iff(y,x)\in D$。</li>
<li>$f$ <b>关于 $x$ 为奇函数</b>：$f(-x,y)=-f(x,y)$；<b>关于 $x$ 为偶函数</b>：$f(-x,y)=f(x,y)$。关于 $y$ 的奇偶同理；关于 $(x,y)$ 的奇偶看 $f(-x,-y)$ 与 $f(x,y)$ 的关系。</li>
</ul>
<svg viewBox="0 0 420 220" width="100%" style="max-width:420px" fill="none" stroke="currentColor">
<ellipse cx="105" cy="120" rx="80" ry="60" fill="currentColor" fill-opacity="0.08" stroke-width="1.5"/>
<line x1="15" y1="120" x2="200" y2="120" stroke-width="0.8"/>
<line x1="105" y1="195" x2="105" y2="40" stroke-width="1.2"/>
<rect x="140" y="85" width="16" height="12" fill="currentColor" fill-opacity="0.4" stroke-width="1"/>
<rect x="54" y="85" width="16" height="12" fill="currentColor" fill-opacity="0.4" stroke-width="1"/>
<line x1="70" y1="91" x2="140" y2="91" stroke-dasharray="3 3" stroke-width="0.8"/>
<line x1="240" y1="190" x2="410" y2="190" stroke-width="0.8"/>
<line x1="240" y1="190" x2="240" y2="25" stroke-width="0.8"/>
<circle cx="320" cy="110" r="55" fill="currentColor" fill-opacity="0.08" stroke-width="1.5"/>
<line x1="240" y1="190" x2="395" y2="35" stroke-dasharray="5 3" stroke-width="1"/>
<line x1="305" y1="75" x2="355" y2="125" stroke-dasharray="3 3" stroke-width="0.8"/>
<circle cx="355" cy="125" r="3.5" fill="currentColor"/>
<circle cx="305" cy="75" r="3.5" fill="currentColor"/>
<g fill="currentColor" stroke="none" font-size="12">
<text x="20" y="16">关于 y 轴对称，f 关于 x 为奇</text>
<text x="160" y="82">P</text>
<text x="38" y="82">P′</text>
<text x="136" y="112" font-size="11">f = +c</text>
<text x="44" y="112" font-size="11">f = −c</text>
<text x="20" y="212">成对抵消 ⇒ 积分为 0</text>
<text x="250" y="16">关于 y=x 对称</text>
<text x="362" y="140">P(a, b)</text>
<text x="250" y="70">P′(b, a)</text>
<text x="388" y="52">y=x</text>
<text x="250" y="212">互换 x、y，积分不变</text>
</g>
</svg>
<p><b>逐字拆解。</b>"对称"是<b>区域</b>的性质，"奇偶"是<b>函数</b>的性质，二者必须针对<b>同一个变换</b>配对：区域关于 $y$ 轴对称（变换 $x\to-x$），就看 $f$ 关于 $x$ 的奇偶；区域关于 $x$ 轴对称（$y\to-y$），就看 $f$ 关于 $y$ 的奇偶。判断区域对称的办法：在区域的不等式里把 $x$ 换成 $-x$，若不等式不变，就关于 $y$ 轴对称。</p>
<p><b>正例</b>：圆盘 $x^2+y^2\le1$ 关于两轴、原点、$y=x$ 都对称；菱形 $|x|+|y|\le1$ 也是。<b>反例</b>：$f=xy^2$，$D=[0,1]\times[-1,1]$。$D$ 关于 $x$ 轴对称，但 $f$ 关于 $y$ 是偶函数，不能得 $0$；$f$ 关于 $x$ 是奇函数，但 $D$ 不关于 $y$ 轴对称，也不能得 $0$。实际上 $\iint_D xy^2\,d\sigma=\int_0^1x\,dx\int_{-1}^1y^2\,dy=\frac12\cdot\frac23=\frac13\ne0$。</p>`
      },

      /* ───────── 21. 奇偶对称性 ───────── */
      {
        kind: 'thm', title: '反射引理与奇偶对称性',
        statement: R`<p><b>(1) 反射引理</b>：设 $T$ 是下列变换之一：$T(x,y)=(-x,y)$、$(x,-y)$、$(-x,-y)$、$(y,x)$（分别是关于 $y$ 轴、$x$ 轴、原点、直线 $y=x$ 的对称），$D$ 为有界闭区域，$f$ 在 $T(D)$ 上连续，则 $$\iint\limits_{T(D)}f(x,y)\,d\sigma=\iint\limits_D f\big(T(x,y)\big)\,d\sigma .$$ <b>(2) 奇偶对称性</b>：设 $D$ 关于 $y$ 轴对称，$f$ 在 $D$ 上连续，$D_1=D\cap\{x\ge0\}$。若 $f(-x,y)=-f(x,y)$，则 $\iint_D f\,d\sigma=0$；若 $f(-x,y)=f(x,y)$，则 $\iint_D f\,d\sigma=2\iint_{D_1}f\,d\sigma$。关于 $x$ 轴对称（看 $f$ 关于 $y$ 的奇偶）、关于原点对称（看 $f(-x,-y)$，"一半"取 $D\cap\{y\ge0\}$）有完全类似的结论。</p>`,
        intuition: R`<p>看积分和：把 $D$ 的分割也做成左右对称的，对称的两小块面积相等；$f$ 为奇函数时两块上的函数值相反，积分和中成对抵消；为偶函数时两块贡献相同，总和是一半的两倍。这与定积分"奇函数在对称区间上积分为 $0$"是同一个道理。</p>`,
        steps: [
          { s: R`<p><b>引理的证明</b>：任取 $D$ 的分割 $\{\Delta\sigma_i\}$ 及点 $P_i\in\Delta\sigma_i$。$T$ 是反射（关于原点的对称是旋转 $\pi$），保持任意两点的距离不变，所以 $\{T(\Delta\sigma_i)\}$ 是 $T(D)$ 的一个分割，每块的面积和直径都与 $\Delta\sigma_i$ 相同，且 $T(P_i)\in T(\Delta\sigma_i)$。</p>`, why: R`<p>保距变换把图形变成全等的图形，面积、直径都不变——这是初等几何事实。所以两个分割的细度相同。</p>` },
          { s: R`<p>于是 $$\sum_i f\big(T(P_i)\big)\,\Delta\sigma_i=\sum_i f\big(T(P_i)\big)\,\big|T(\Delta\sigma_i)\big| .$$ 左端是 $f\circ T$ 在 $D$ 上的积分和，右端是 $f$ 在 $T(D)$ 上的积分和，细度相同。令细度 $\to0$，两端分别趋于 $\iint_D f(T(x,y))\,d\sigma$ 与 $\iint_{T(D)}f\,d\sigma$（两个被积函数都连续，积分存在），故相等。</p>`, why: R`<p>又是"一个和式，两种身份"，和极坐标公式的证明如出一辙。这就是二重积分版的"换元"：反射不改变面积，所以面积元素不变，不需要伸缩因子。</p>` },
          { s: R`<p><b>奇函数情形</b>：$D$ 关于 $y$ 轴对称，即 $T(D)=D$，其中 $T(x,y)=(-x,y)$。记 $I=\iint_D f\,d\sigma$，由引理 $I=\iint_D f(-x,y)\,d\sigma=\iint_D[-f(x,y)]\,d\sigma=-I$，所以 $I=0$。</p>`, why: R`<p>一个数等于它的相反数，只能是 $0$。区域对称保证了"$T(D)=D$"，函数为奇保证了"$f\circ T=-f$"，两个条件各管一半。</p>` },
          { s: R`<p><b>偶函数情形</b>：记 $D_2=D\cap\{x\le0\}$，由 $D$ 的对称性 $D_2=T(D_1)$，且 $D_1,D_2$ 只在 $y$ 轴上的线段处相接，没有公共内点。由可加性与引理：$$\iint\limits_D f\,d\sigma=\iint\limits_{D_1}f\,d\sigma+\iint\limits_{T(D_1)}f\,d\sigma=\iint\limits_{D_1}f\,d\sigma+\iint\limits_{D_1}f(-x,y)\,d\sigma=2\iint\limits_{D_1}f\,d\sigma .$$</p>`, why: R`<p>把左半边的积分通过反射"搬"到右半边，偶函数保证搬过来以后被积函数不变。</p>` }
        ],
        remark: R`<p>① <b>两个条件缺一不可</b>："区域对称"和"函数奇偶"必须同时满足，而且针对同一个变量（见上一节的反例）。② <b>用法</b>：把被积函数拆成几项，奇的部分直接扔掉，偶的部分化成一半区域。例如 $\iint_{x^2+y^2\le1}(x+y)^2\,d\sigma=\iint(x^2+y^2)\,d\sigma+2\iint xy\,d\sigma$，而 $xy$ 关于 $x$ 为奇函数、圆盘关于 $y$ 轴对称，最后一项为 $0$。③ 关于原点对称时要看 $f(-x,-y)$：$xy$ 满足 $f(-x,-y)=f(x,y)$，是"偶"的，<b>只凭关于原点对称不能把 $\iint xy\,d\sigma$ 扔掉</b>；但 $x$、$x^3y^2$ 之类满足 $f(-x,-y)=-f(x,y)$，可以扔掉。④ 对称性在三重积分、第一类曲线积分、第一类曲面积分中都有同样的形式；但在第二类曲线积分、第二类曲面积分中还要考虑方向，规则不同（见相应篇目）。</p>`
      },

      /* ───────── 22. 轮换对称 ───────── */
      {
        kind: 'thm', title: '轮换对称性',
        statement: R`<p>若 $D$ 关于直线 $y=x$ 对称（即 $(x,y)\in D\iff(y,x)\in D$），$f$ 在 $D$ 上连续，则 $$\iint\limits_D f(x,y)\,d\sigma=\iint\limits_D f(y,x)\,d\sigma=\frac12\iint\limits_D\big[f(x,y)+f(y,x)\big]\,d\sigma .$$ 特别地，$\iint_D g(x)\,d\sigma=\iint_D g(y)\,d\sigma$（$g$ 为一元连续函数）。</p>`,
        intuition: R`<p>把两个积分变量的名字 $x$、$y$ 互换，如果区域的"样子"不变，积分值当然不变——积分值与积分变量用什么字母无关。几何上，$(x,y)$ 与 $(y,x)$ 关于 $y=x$ 互为镜像，镜像点处的小块面积相同。</p>`,
        steps: [
          { s: R`<p>令 $T(x,y)=(y,x)$，它是关于直线 $y=x$ 的反射；条件说的正是 $T(D)=D$。</p>`, why: R`<p>把"轮换对称"翻译成反射引理的语言。</p>` },
          { s: R`<p>由反射引理，$\iint_D f(x,y)\,d\sigma=\iint_{T(D)}f\,d\sigma=\iint_D f(T(x,y))\,d\sigma=\iint_D f(y,x)\,d\sigma$。</p>`, why: R`<p>第一个等号用 $T(D)=D$，第二个等号就是引理。</p>` },
          { s: R`<p>记 $I=\iint_D f(x,y)\,d\sigma$，则 $2I=\iint_D f(x,y)\,d\sigma+\iint_D f(y,x)\,d\sigma=\iint_D[f(x,y)+f(y,x)]\,d\sigma$，除以 $2$ 即得。取 $f(x,y)=g(x)$ 得特例。</p>`, why: R`<p>"平均"一下：两个相等的积分加起来，往往能凑出更好算的被积函数——这正是轮换对称的威力所在。</p>` }
        ],
        remark: R`<p>① <b>判别</b>：在区域的方程（不等式）中把 $x,y$ 互换，若不变，则关于 $y=x$ 对称。如 $x^2+y^2\le R^2$、$|x|+|y|\le1$、$[0,1]\times[0,1]$、$\{x\ge0,\ y\ge0,\ x+y\le1\}$。矩形 $[0,2]\times[0,1]$ 就不是。② <b>典型用法</b>：(a) $\iint_D x^2\,d\sigma=\frac12\iint_D(x^2+y^2)\,d\sigma$，再用极坐标；(b) 被积函数是 $\dfrac{af(x)+bf(y)}{f(x)+f(y)}$ 型，互换后相加，分母约掉；(c) 证明积分不等式（见例 9）。③ 区域不对称时也有一般形式：$\iint_D f(x,y)\,d\sigma=\iint_{D^*}f(y,x)\,d\sigma$，$D^*$ 是 $D$ 关于 $y=x$ 的镜像——这就是反射引理本身。</p>`
      },

      /* ───────── 23. 例 8 ───────── */
      {
        kind: 'example', title: '例 8：用奇偶对称与轮换对称化简',
        html: R`<p><b>(1)</b> 计算 $I=\iint\limits_{x^2+y^2\le1}(x^3y+x^2)\,d\sigma$。</p>
<p><b>解</b>：圆盘关于 $y$ 轴对称，$x^3y$ 关于 $x$ 为奇函数，积分为 $0$。圆盘关于 $y=x$ 对称，由轮换对称性 $$\iint x^2\,d\sigma=\frac12\iint(x^2+y^2)\,d\sigma=\frac12\int_0^{2\pi}d\theta\int_0^1r^2\cdot r\,dr=\frac12\cdot2\pi\cdot\frac14=\frac\pi4 .$$ 所以 $I=\frac\pi4$。</p>
<p><b>(2)</b> 计算 $J=\iint\limits_{|x|+|y|\le1}(x+y)^2\,d\sigma$。</p>
<p><b>想法</b>：直接算要把菱形分成四块。先展开，再分别看对称性。</p>
<p><b>解</b>：$(x+y)^2=x^2+y^2+2xy$。菱形关于 $y$ 轴对称，$xy$ 关于 $x$ 为奇函数，$\iint2xy\,d\sigma=0$。菱形关于 $y=x$ 对称，$\iint(x^2+y^2)\,d\sigma=2\iint x^2\,d\sigma$。$x^2$ 关于 $x$、关于 $y$ 都是偶函数，菱形关于两轴都对称，所以 $\iint x^2\,d\sigma=4\iint_{D_1}x^2\,d\sigma$，$D_1$ 为第一象限部分 $x\ge0$，$y\ge0$，$x+y\le1$：$$\iint\limits_{D_1}x^2\,d\sigma=\int_0^1dx\int_0^{1-x}x^2\,dy=\int_0^1x^2(1-x)\,dx=\frac13-\frac14=\frac1{12}.$$ 于是 $\iint x^2\,d\sigma=\frac13$，$J=2\cdot\frac13=\frac23$。</p>
<p><b>(3) 用错的例子</b>：$\iint_D x\,d\sigma$，$D=[0,1]\times[-1,1]$。有人说"$x$ 是奇函数，所以积分为 $0$"——错！$D$ 不关于 $y$ 轴对称。正确值为 $\int_0^1x\,dx\int_{-1}^1dy=1$。</p>`
      },

      /* ───────── 24. 例 9 ───────── */
      {
        kind: 'example', title: '例 9：轮换对称——抽象函数与积分不等式',
        html: R`<p><b>(1)</b> 设 $f$ 是恒正的连续函数，$a,b$ 为常数，计算 $I=\iint\limits_{x^2+y^2\le R^2}\dfrac{af(x)+bf(y)}{f(x)+f(y)}\,d\sigma$。</p>
<p><b>想法</b>：$f$ 是抽象函数，不可能直接积；但区域关于 $y=x$ 对称，互换 $x,y$ 后分子中 $a,b$ 换了位置，分母不变——两式相加，分子分母就约掉了。</p>
<p><b>解</b>：由轮换对称性，$I=\iint\dfrac{af(y)+bf(x)}{f(y)+f(x)}\,d\sigma$。两式相加：$2I=\iint(a+b)\,d\sigma=(a+b)\pi R^2$，所以 $I=\dfrac{(a+b)\pi R^2}2$。（$f>0$ 保证分母不为 $0$。）</p>
<p><b>(2)</b> 设 $f$ 在 $[a,b]$ 上连续且 $f>0$，证明 $\displaystyle\int_a^bf(x)\,dx\int_a^b\frac{dx}{f(x)}\ge(b-a)^2$。</p>
<p><b>想法</b>：两个定积分的乘积 → 正方形上的二重积分（分离变量）→ 正方形关于 $y=x$ 对称 → 轮换后取平均 → 基本不等式 $t+\frac1t\ge2$。这是"用二重积分证明定积分不等式"的标准路线。</p>
<p><b>证</b>：积分值与积分变量的字母无关，把第二个积分的变量写成 $y$，记 $D=[a,b]\times[a,b]$：$$\int_a^bf(x)\,dx\int_a^b\frac{dy}{f(y)}=\iint\limits_D\frac{f(x)}{f(y)}\,d\sigma=\iint\limits_D\frac{f(y)}{f(x)}\,d\sigma=\frac12\iint\limits_D\Big[\frac{f(x)}{f(y)}+\frac{f(y)}{f(x)}\Big]d\sigma\ge\frac12\iint\limits_D2\,d\sigma=(b-a)^2 .$$ 第一个等号是矩形上分离变量的累次积分，第二个是轮换对称，第三个是取平均，最后用 $t+\frac1t\ge2$（$t>0$）和保序性。</p>`
      },

      /* ───────── 25. 无界区域定义 ───────── */
      {
        kind: 'def', title: '无界区域上的二重积分（简单情形）',
        html: R`<p>前面的区域都有界。但有时要在全平面、第一象限、半平面或带形这样的<b>无界区域</b>上积分，例如求全平面上曲面 $z=e^{-(x^2+y^2)}$ 下方的体积。定义的思路和一元反常积分 $\int_a^{+\infty}f\,dx=\lim\limits_{A\to+\infty}\int_a^Af\,dx$ 完全一样：<b>先在有界部分上积分，再让有界部分扩张到整个区域，取极限</b>。</p>
<p><b>定义</b>　设 $D$ 是无界闭区域，$f$ 在 $D$ 上连续，记 $D_R=D\cap\{x^2+y^2\le R^2\}$。若极限 $$\lim_{R\to+\infty}\iint\limits_{D_R}f(x,y)\,d\sigma$$ 存在（有限），则称反常二重积分 $\iint_D f\,d\sigma$ <b>收敛</b>，并以此极限为它的值；否则称它<b>发散</b>。也可以用正方形 $D\cap[-R,R]^2$ 代替圆盘。</p>
<p><b>逐字拆解。</b>"有界部分"：$D_R$ 有界，上面的积分是普通二重积分，前面的全部理论都能用。"$R\to+\infty$"：$D_R$ 逐渐扩张，最终盖住 $D$ 的任何有界部分。"圆盘还是正方形"：严格的一般定义要求<b>任何</b>逐渐扩张的方式都给出同一个极限。考研只涉及<b>被积函数非负</b>（或可化为非负）的简单情形，这时用圆盘、正方形或其他合理的方式扩张，结果都一样（下一定理），所以可以挑最方便的：适合极坐标的用圆盘，适合累次积分的用矩形。</p>
<p><b>正例</b>：$\iint_{\mathbb R^2}\dfrac{d\sigma}{(1+x^2+y^2)^2}$。$\iint_{D_R}=\int_0^{2\pi}d\theta\int_0^R\dfrac{r\,dr}{(1+r^2)^2}=\pi\Big(1-\dfrac1{1+R^2}\Big)\to\pi$，收敛于 $\pi$。</p>
<p><b>反例</b>：$\iint_{x^2+y^2\ge1}\dfrac{d\sigma}{x^2+y^2}$。在 $1\le r\le R$ 上积分为 $\int_0^{2\pi}d\theta\int_1^R\dfrac1{r^2}\,r\,dr=2\pi\ln R\to+\infty$，发散。一般地，$\iint_{x^2+y^2\ge1}\dfrac{d\sigma}{(x^2+y^2)^p}=2\pi\int_1^{+\infty}r^{1-2p}\,dr$ 收敛 $\iff2p-1>1\iff p>1$。对比一元的 $\int_1^{+\infty}\frac{dx}{x^p}$ 也要 $p>1$，但原因不同：二维时 $(x^2+y^2)^{-p}=r^{-2p}$ 衰减得更快，可面积元素多了一个 $r$。</p>`
      },

      /* ───────── 26. 逼近等价 ───────── */
      {
        kind: 'thm', title: '非负函数：圆盘扩张与正方形扩张等价',
        statement: R`<p>设 $D$ 为无界闭区域，$f$ 在 $D$ 上连续且 $f\ge0$。记 $A(R)=\iint_{D\cap\{x^2+y^2\le R^2\}}f\,d\sigma$，$B(R)=\iint_{D\cap[-R,R]^2}f\,d\sigma$。则当 $R\to+\infty$ 时，$A(R)$ 与 $B(R)$ 要么都收敛于同一个有限值，要么都趋于 $+\infty$。</p>`,
        intuition: R`<p>圆盘被正方形套住，正方形又被更大的圆盘套住，像套娃一样；被积函数非负时，区域越大积分越大，于是正方形上的积分被夹在两个圆盘上的积分之间。</p>
<svg viewBox="0 0 420 255" width="100%" style="max-width:420px" fill="none" stroke="currentColor">
<circle cx="150" cy="125" r="84.85" stroke-width="1.4" stroke-dasharray="5 3"/>
<rect x="90" y="65" width="120" height="120" fill="currentColor" fill-opacity="0.08" stroke-width="1.6"/>
<circle cx="150" cy="125" r="60" fill="currentColor" fill-opacity="0.12" stroke-width="1.6"/>
<line x1="50" y1="125" x2="250" y2="125" stroke-width="0.8"/>
<line x1="150" y1="225" x2="150" y2="28" stroke-width="0.8"/>
<line x1="150" y1="125" x2="210" y2="65" stroke-width="1"/>
<g fill="currentColor" stroke="none" font-size="12">
<text x="172" y="140">R</text>
<text x="160" y="88">√2 R</text>
<text x="255" y="58">外圆：半径 √2 R</text>
<text x="255" y="108">正方形：[−R, R]²</text>
<text x="255" y="158">内圆：半径 R</text>
<text x="16" y="248">内圆 ⊂ 正方形 ⊂ 外圆；被积函数为正时积分依次增大</text>
</g>
</svg>`,
        steps: [
          { s: R`<p><b>单调性</b>：记 $D_R=D\cap\{x^2+y^2\le R^2\}$。若 $R\lt R'$，则 $D_R\subset D_{R'}$，由可加性与保号性，$A(R')=A(R)+\iint_{D_{R'}\setminus D_R}f\,d\sigma\ge A(R)$。同理 $B(R)$ 单调不减。</p>`, why: R`<p>非负函数在多出来的那一块上积分 $\ge0$。"非负"这个条件就用在这里：若 $f$ 变号，区域扩大积分可能变小，单调性就没了。</p>` },
          { s: R`<p><b>极限存在</b>：单调不减的函数当 $R\to+\infty$ 时，有上界则收敛于有限值，无上界则趋于 $+\infty$。</p>`, why: R`<p>这是<b>单调有界准则</b>（实数完备性的一种形式）的函数版本，这里作为出发点。</p>` },
          { s: R`<p><b>套娃不等式</b>：圆盘 $x^2+y^2\le R^2$ $\subset$ 正方形 $[-R,R]^2$ $\subset$ 圆盘 $x^2+y^2\le2R^2$（正方形的顶点到原点的距离为 $\sqrt2R$），所以 $$A(R)\le B(R)\le A(\sqrt2R).$$</p>`, why: R`<p>同样由 $f\ge0$ 与可加性：小区域上的积分不超过大区域上的积分。</p>` },
          { s: R`<p><b>夹逼</b>：若 $A(R)\to L$（有限），则 $A(\sqrt2R)\to L$，由夹逼准则 $B(R)\to L$。若 $B(R)\to L'$（有限），则 $A(R)\le B(R)\le L'$，$A$ 有上界，由第 2 步 $A(R)$ 收敛于某个有限值，再由前半句知该值等于 $L'$。所以只要一个收敛，另一个也收敛且极限相同；否则两个都趋于 $+\infty$。</p>`, why: R`<p>夹逼准则加上单调性。$B(R)\le L'$ 用到了 $B$ 单调不减（单调不减函数不超过它的极限）。</p>` }
        ],
        remark: R`<p>① 同样的论证说明：对非负函数，任何"逐渐扩张、最终盖住 $D$ 的任意有界部分"的有界闭区域族都给出同一个极限。所以全平面、扇形问题用极坐标（圆盘），第一象限之类可以写成 $\int_0^{+\infty}dx\int_0^{+\infty}\cdots dy$ 的用累次积分（矩形）。② 被积函数变号时，不同的扩张方式可能给出不同结果，这类情形不在考研范围内。③ 被积函数非负时，只要某一种合理的扩张方式得到有限极限，反常积分就收敛，且值就是这个极限。</p>`
      },

      /* ───────── 27. 概率积分 ───────── */
      {
        kind: 'thm', title: '概率积分（泊松积分）',
        statement: R`<p>$$\int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt\pi,\qquad\int_0^{+\infty}e^{-x^2}dx=\frac{\sqrt\pi}2,\qquad\iint\limits_{\mathbb R^2}e^{-(x^2+y^2)}d\sigma=\pi .$$</p>`,
        intuition: R`<p>$e^{-x^2}$ 没有初等原函数，一元的方法无能为力。妙招是"<b>升维</b>"：把它平方，变成二重积分 $\iint e^{-x^2-y^2}d\sigma$；在极坐标下面积元素多出一个 $r$，正好凑成 $e^{-r^2}$ 的微分 $-\frac12\,d\big(e^{-r^2}\big)$。一维做不了的事，到二维反而简单了。但要注意：极坐标适合圆盘，而"平方"对应的是正方形，所以中间需要上一定理搭桥。</p>`,
        steps: [
          { s: R`<p><b>收敛性</b>：$x\ge1$ 时 $x^2\ge x$，$0\lt e^{-x^2}\le e^{-x}$，而 $\int_1^{+\infty}e^{-x}dx$ 收敛，由比较判别法，$J=\int_0^{+\infty}e^{-x^2}dx$ 收敛。记 $J(R)=\int_0^Re^{-x^2}dx$，则 $J(R)\to J$。</p>`, why: R`<p>先保证所求的东西存在，后面取极限才有意义。比较判别法见「反常积分」。</p>` },
          { s: R`<p><b>正方形上</b>：被积函数可以分离变量，由矩形上的累次积分 $$B(R)=\iint\limits_{[-R,R]^2}e^{-x^2-y^2}d\sigma=\int_{-R}^Re^{-x^2}dx\cdot\int_{-R}^Re^{-y^2}dy=\big(2J(R)\big)^2 .$$</p>`, why: R`<p>正方形把二重积分和要求的一元积分联系了起来：它恰好是一元积分的平方。$e^{-x^2}$ 是偶函数，所以 $\int_{-R}^R=2J(R)$。</p>` },
          { s: R`<p><b>圆盘上</b>：用极坐标 $$A(R)=\iint\limits_{x^2+y^2\le R^2}e^{-x^2-y^2}d\sigma=\int_0^{2\pi}d\theta\int_0^Re^{-r^2}r\,dr=2\pi\cdot\frac12\big(1-e^{-R^2}\big)=\pi\big(1-e^{-R^2}\big).$$</p>`, why: R`<p>圆盘上可以用极坐标算出精确值——这是"升维"的全部意义：因子 $r$ 让 $e^{-r^2}$ 变得可积。</p>` },
          { s: R`<p><b>夹逼</b>：被积函数为正，由上一定理的套娃不等式 $A(R)\le B(R)\le A(\sqrt2R)$：$$\pi\big(1-e^{-R^2}\big)\le4J(R)^2\le\pi\big(1-e^{-2R^2}\big).$$ 令 $R\to+\infty$，两端都趋于 $\pi$，所以 $4J^2=\pi$，$J=\frac{\sqrt\pi}2$（$J>0$）。由偶函数，$\int_{-\infty}^{+\infty}e^{-x^2}dx=2J=\sqrt\pi$，且 $\iint_{\mathbb R^2}e^{-(x^2+y^2)}d\sigma=\lim\limits_{R\to+\infty}A(R)=\pi$。</p>`, why: R`<p>正方形（联系一元积分）和圆盘（能算出值）是两种不同的扩张方式，"非负函数两种方式极限相同"把它们连了起来。只在圆盘上算出 $\pi$ 而不讲正方形，就说不清 $\pi$ 为什么等于 $\big(\int_{-\infty}^{+\infty}e^{-x^2}dx\big)^2$。</p>` }
        ],
        remark: R`<p>① 推论：$\int_0^{+\infty}e^{-ax^2}dx=\frac12\sqrt{\frac\pi a}$（$a>0$，令 $t=\sqrt a\,x$）；$\int_{-\infty}^{+\infty}e^{-x^2/2}dx=\sqrt{2\pi}$——这正是概率论中标准正态分布密度 $\frac1{\sqrt{2\pi}}e^{-x^2/2}$ 的归一化常数。② 由分部积分还可得 $\int_0^{+\infty}x^2e^{-x^2}dx=\frac{\sqrt\pi}4$ 等，常在填空题中出现。③ 这个结果要<b>记住</b>，考试中可以直接使用。</p>`
      },

      /* ───────── 28. 例 10 ───────── */
      {
        kind: 'example', title: '例 10：无界区域上的计算',
        html: R`<p><b>(1)</b> 计算 $I=\iint_D xe^{-y^2}\,d\sigma$，$D=\{(x,y)\mid x\ge0,\ y\ge x^2\}$（抛物线 $y=x^2$ 右半支与 $y$ 轴之间、向上无限延伸的区域）。</p>
<p><b>想法</b>：被积函数非负，可以选最方便的扩张方式。先 $y$ 后 $x$ 要算 $\int_{x^2}^{+\infty}e^{-y^2}dy$，积不出；先 $x$ 后 $y$：$y\ge0$，$0\le x\le\sqrt y$，对 $x$ 积分会给出因子 $y$，正好配上 $e^{-y^2}$。</p>
<p><b>解</b>：用 $D\cap\{y\le R\}$ 截断：$$\iint\limits_{D\cap\{y\le R\}}xe^{-y^2}\,d\sigma=\int_0^Rdy\int_0^{\sqrt y}xe^{-y^2}\,dx=\int_0^R\frac y2e^{-y^2}\,dy=\frac14\big(1-e^{-R^2}\big)\to\frac14 .$$ 所以 $I=\frac14$。这种截断合法吗？当 $R\ge1$ 时，$D$ 中满足 $y\le R$ 的点都有 $0\le x\le\sqrt y\le\sqrt R\le R$，所以 $D\cap\{y\le R\}=D\cap[-R,R]^2$，恰好就是正方形扩张，由上面的定理，结果可靠。</p>
<p><b>(2)</b> 计算 $J=\iint_D xye^{-(x^2+y^2)}\,d\sigma$，$D$ 为第一象限 $\{x\ge0,\ y\ge0\}$。</p>
<p><b>解法一（矩形扩张 + 分离变量）</b>：$J=\int_0^{+\infty}xe^{-x^2}dx\cdot\int_0^{+\infty}ye^{-y^2}dy=\frac12\cdot\frac12=\frac14$。</p>
<p><b>解法二（极坐标，扇形扩张）</b>：$J=\int_0^{\pi/2}\sin\theta\cos\theta\,d\theta\int_0^{+\infty}r^3e^{-r^2}dr=\frac12\cdot\frac12=\frac14$，其中 $\int_0^{+\infty}r^3e^{-r^2}dr$ 令 $u=r^2$ 得 $\frac12\int_0^{+\infty}ue^{-u}du=\frac12$。两种扩张方式结果相同，正是上面的定理所保证的。</p>`
      },

      /* ───────── 29. 误区 ───────── */
      {
        kind: 'pitfall', title: '常见误区',
        html: R`<ul>
<li><b>极坐标忘乘 $r$。</b>$d\sigma=r\,dr\,d\theta$，不是 $dr\,d\theta$。$r$ 是扇环面积的伸缩因子（极坐标公式证明的第 2 步），丢了它，连 $\iint_{x^2+y^2\le1}1\,d\sigma$ 都会算成 $2\pi$ 而不是 $\pi$。</li>
<li><b>交换次序只对调积分号。</b>把 $\int_0^1dx\int_x^1f\,dy$ 写成 $\int_x^1dy\int_0^1f\,dx$ 是荒谬的：外层限里出现了变量。正确做法是由限画域、重新穿线，得 $\int_0^1dy\int_0^yf\,dx$。<b>外层限必须是常数</b>，这是最简单的自查标准。</li>
<li><b>边界曲线解反了方向。</b>$y=x^2$ 改写成 $x$ 的函数时，是 $x=\sqrt y$ 还是 $x=-\sqrt y$，要看区域在 $y$ 轴哪一侧；穿线时内层下限是先交到的边界，不能凭感觉写。</li>
<li><b>只看被积函数是奇函数就说积分为 $0$。</b>必须同时有区域的对称性，并且对称变换与奇偶性针对同一个变量。$\iint_{[0,1]\times[-1,1]}x\,d\sigma=1\ne0$。</li>
<li><b>把关于原点对称当成关于坐标轴对称。</b>区域只关于原点对称时，$xy$ 满足 $f(-x,-y)=f(x,y)$，不能扔掉。</li>
<li><b>轮换对称看错对象。</b>轮换对称要求的是<b>区域</b>关于 $y=x$ 对称，与被积函数本身对不对称无关；区域不对称时不能把 $\iint x\,d\sigma$ 换成 $\iint y\,d\sigma$。</li>
<li><b>极坐标的角度范围写错。</b>$x^2+y^2\le2x$ 的 $\theta$ 范围是 $[-\frac\pi2,\frac\pi2]$ 而不是 $[0,2\pi]$；区域不含极点时 $r$ 的下限不是 $0$；直线 $x=1$ 在极坐标中是 $r=\sec\theta$，不是 $r=1$。</li>
<li><b>二重积分就是体积？</b>只有 $f\ge0$ 时才是。$f$ 变号时积分是上下体积的代数和。求两曲面之间立体的体积时，被积函数应是"上顶 − 下底"，且要保证非负。</li>
<li><b>中值定理里的点当常数。</b>$(\xi,\eta)$ 依赖于区域，区域变化它就变；求极限时要说明它被夹在缩小的区域里，才能得到"$\to$ 某点"。</li>
<li><b>无界区域直接"代入无穷"。</b>应先在有界部分上积分再取极限，并判断是否收敛；"扩张方式可以任选"只对非负被积函数成立。</li>
<li><b>交换次序不检查条件。</b>被积函数在区域内无界（如 $\frac{x^2-y^2}{(x^2+y^2)^2}$）时，两个次序可能得到不同结果。</li>
<li><b>分块时重复或遗漏。</b>含绝对值、$\max$、$\min$ 的被积函数要沿分界线分块，各块的并恰好是 $D$；分段的边界函数要在分段点处拆开外层积分。</li>
</ul>`
      },

      /* ───────── 30. 方法 ───────── */
      {
        kind: 'method', title: '解题总流程与"看到……想到……"',
        html: R`<p><b>计算二重积分的五步</b>：</p>
<ol>
<li><b>画域</b>：画出积分区域，求出边界曲线的交点。几乎所有错误都源于没有画图。</li>
<li><b>看对称</b>：区域关于坐标轴、原点、$y=x$ 是否对称？被积函数能否拆出奇的部分扔掉、偶的部分减半？能否轮换后取平均？</li>
<li><b>选坐标</b>：区域是圆、扇、环（边界含 $x^2+y^2$），或被积函数是 $f(x^2+y^2)$、$f(\frac yx)$ 型 → 极坐标；椭圆 → 广义极坐标；其余 → 直角坐标。</li>
<li><b>定次序</b>（直角坐标）：① 内层要积得出；② 分块要少。两条冲突时以 ① 为先。</li>
<li><b>定限计算</b>：穿线定限，外层是常数，内层"先交下限、后交上限"；最后自查：外层限是常数吗？$f\equiv1$ 时是否等于面积？</li>
</ol>
<p><b>看到……想到……</b></p>
<table>
<thead><tr><th>看到</th><th>想到</th></tr></thead>
<tbody>
<tr><td>内层是 $e^{\pm y^2}$、$\frac{\sin y}y$、$\sin y^2$、$e^{y/x}$ 等积不出的函数</td><td>交换积分次序</td></tr>
<tr><td>给出累次积分求值，内层积不出</td><td>由限还原区域，换次序或换极坐标</td></tr>
<tr><td>区域关于坐标轴对称</td><td>把被积函数按奇偶拆开，奇的部分为 $0$</td></tr>
<tr><td>区域关于 $y=x$ 对称；被积函数含 $f(x)$、$f(y)$ 的分式，或只有 $x^2$</td><td>轮换对称，互换后相加</td></tr>
<tr><td>边界含 $x^2+y^2$；被积函数含 $x^2+y^2$、$\frac yx$</td><td>极坐标</td></tr>
<tr><td>$|\cdot|$、$\max$、$\min$、$\operatorname{sgn}$、取整</td><td>按分界线分块</td></tr>
<tr><td>比较两个二重积分的大小（区域相同）</td><td>保序性：在区域上比较被积函数，关键是求出 $x+y$ 等量在区域上的范围</td></tr>
<tr><td>$\lim\limits_{t\to0^+}\frac1{t^2}\iint_{x^2+y^2\le t^2}f\,d\sigma$</td><td>中值定理；或用极坐标化成变限积分再用洛必达</td></tr>
<tr><td>积分区域依赖参数 $t$，求导或求极限</td><td>化成以 $t$ 为上限的定积分</td></tr>
<tr><td>两个定积分之积的不等式</td><td>写成正方形上的二重积分，轮换对称后用基本不等式</td></tr>
<tr><td>二次积分 $\int_0^xdt\int_0^tf(u)\,du$</td><td>换序化成 $\int_0^x(x-u)f(u)\,du$</td></tr>
<tr><td>$\int_{-\infty}^{+\infty}e^{-x^2}dx$ 及其变形</td><td>概率积分 $\sqrt\pi$（平方后用极坐标）</td></tr>
<tr><td>无界区域，被积函数非负</td><td>选最方便的扩张方式：极坐标（圆盘、扇形）或矩形累次积分</td></tr>
</tbody>
</table>`
      },

      /* ───────── 31. 考研 ───────── */
      {
        kind: 'exam', title: '考研怎么考',
        html: R`<p>二重积分是数学一多元积分学的"地基"，几乎每年都直接或间接考到。常见形式：</p>
<ul>
<li><b>选择、填空</b>：① 交换积分次序，或直角坐标与极坐标互化（给一个累次积分，选等价的另一种写法），关键是由限画出区域；② 比较几个二重积分的大小，用保序性与对称性；③ 利用对称性、几何意义快速求值；④ 含二重积分的极限（中值定理、极坐标 + 洛必达）。</li>
<li><b>解答题（10 分左右）</b>：计算二重积分。区域常由圆、直线、抛物线围成，被积函数常含绝对值、$\max/\min$、$x^2+y^2$ 或分段定义，需要"画图 + 对称性 + 选坐标 + 分块"综合运用；有时积分区域无界，要用到概率积分或反常积分的计算。</li>
<li><b>与其他考点的综合</b>：
<ul>
<li>与<b>变限积分</b>：$F(t)$ 由区域随 $t$ 变化的二重积分定义，讨论其导数、极限、单调性；或通过交换次序证明含变限积分的等式。</li>
<li>与<b>积分不等式证明</b>：定积分之积化成二重积分，用轮换对称。</li>
<li>与<b>格林公式</b>：平面闭曲线上的第二类曲线积分化为二重积分（见「第二类曲线积分与格林公式」），后半程就是本篇的计算。</li>
<li>与<b>曲面积分</b>：第一、二类曲面积分最终都投影到坐标面上化为二重积分（见「第一类曲面积分」「第二类曲面积分与高斯公式」）。</li>
<li>与<b>三重积分</b>："先二后一"中截面上的积分就是二重积分（见「三重积分」）。</li>
<li>与<b>几何、物理应用</b>：面积、体积、质量、质心、转动惯量（见「场论初步与积分的应用」）。</li>
<li>与<b>概率论</b>：二维连续型随机变量落在区域内的概率 $P\{(X,Y)\in G\}=\iint_G f(x,y)\,d\sigma$，正态分布的归一化常数 $\sqrt{2\pi}$。</li>
</ul></li>
</ul>
<p><b>备考建议</b>：计算题的分数大多丢在"区域画错、限写错、忘记 $r$、对称性误用"上，而不是积分技巧本身。养成固定流程：画图 → 对称 → 坐标 → 次序 → 定限 → 自查。</p>`
      },

      /* ───────── 32. 自测 ───────── */
      {
        kind: 'check', title: '自测',
        items: [
          { q: R`<p>判断并说明理由：若 $f$ 在 $D$ 上连续且 $\iint_D f\,d\sigma=0$，则在 $D$ 上 $f\equiv0$。</p>`, a: R`<p>错误。反例：$D$ 为单位圆盘，$f=x$，由对称性积分为 $0$，但 $f\not\equiv0$。若再加上条件"$f\ge0$"，结论就成立：由严格保号性，连续、非负且不恒为 $0$ 的函数积分 $>0$。</p>` },
          { q: R`<p>判断并说明理由：二重积分定义中的"$\lambda\to0$"（$\lambda$ 为各小块直径的最大值）可以换成"$n\to\infty$"，也可以换成"各小块面积的最大值 $\to0$"。</p>`, a: R`<p>都不行。$n\to\infty$ 不能保证每一块都变小（可以有一块始终很大）；面积 $\to0$ 也不能保证小块缩向一点（细长条面积很小，直径却不小），这时"在小块上 $f$ 近似为常数"不成立。只有直径的最大值 $\to0$ 才保证每块都缩向一点。</p>` },
          { q: R`<p>交换积分次序：$\displaystyle\int_0^1dy\int_y^{\sqrt y}f(x,y)\,dx=$（　）</p>`, options: [R`<p>$\int_0^1dx\int_x^{x^2}f(x,y)\,dy$</p>`, R`<p>$\int_0^1dx\int_{x^2}^{x}f(x,y)\,dy$</p>`, R`<p>$\int_0^1dx\int_{\sqrt x}^{x}f(x,y)\,dy$</p>`, R`<p>$\int_0^1dx\int_{x}^{\sqrt x}f(x,y)\,dy$</p>`], correct: 1, explain: R`<p>由限：$0\le y\le1$，$y\le x\le\sqrt y$，即 $x\ge y$ 且 $x^2\le y$，所以区域是 $x^2\le y\le x$，$0\le x\le1$（抛物线 $y=x^2$ 与直线 $y=x$ 之间）。竖直穿线：先交抛物线 $y=x^2$（下限），后交直线 $y=x$（上限）。A 上下限颠倒；C、D 把 $x$ 与 $y$ 的关系弄反了。</p>` },
          { q: R`<p>设 $D:x^2+y^2\le2y$，则 $\iint_D f(x,y)\,d\sigma$ 化为极坐标下的累次积分是（　）</p>`, options: [R`<p>$\int_0^{\pi}d\theta\int_0^{2\sin\theta}f(r\cos\theta,r\sin\theta)\,r\,dr$</p>`, R`<p>$\int_0^{2\pi}d\theta\int_0^{2\sin\theta}f(r\cos\theta,r\sin\theta)\,r\,dr$</p>`, R`<p>$\int_0^{\pi}d\theta\int_0^{2\sin\theta}f(r\cos\theta,r\sin\theta)\,dr$</p>`, R`<p>$\int_{-\pi/2}^{\pi/2}d\theta\int_0^{2\cos\theta}f(r\cos\theta,r\sin\theta)\,r\,dr$</p>`], correct: 0, explain: R`<p>$r^2\le2r\sin\theta$ 即 $r\le2\sin\theta$，需要 $\sin\theta\ge0$，所以 $\theta\in[0,\pi]$（圆心 $(0,1)$，圆在上半平面，与 $x$ 轴相切于原点）。B 的角度范围错（$\theta\in(\pi,2\pi)$ 时上限为负）；C 漏了 $r$；D 是圆 $x^2+y^2\le2x$。</p>` },
          { q: R`<p>计算 $\iint\limits_{|x|+|y|\le1}(x+y^3+|x|)\,d\sigma$。</p>`, a: R`<p>菱形关于 $y$ 轴对称，$x$ 关于 $x$ 为奇函数，积分为 $0$；菱形关于 $x$ 轴对称，$y^3$ 关于 $y$ 为奇函数，积分为 $0$。$|x|$ 关于 $x$、$y$ 都是偶函数，$\iint|x|\,d\sigma=4\int_0^1dx\int_0^{1-x}x\,dy=4\int_0^1x(1-x)\,dx=4\cdot\frac16=\frac23$。答案为 $\frac23$。</p>` },
          { q: R`<p>设 $D$ 由 $x=0$、$y=0$、$x+y=\frac12$、$x+y=1$ 围成，$I_1=\iint_D[\ln(x+y)]^3d\sigma$，$I_2=\iint_D(x+y)^3d\sigma$，$I_3=\iint_D[\sin(x+y)]^3d\sigma$，则（　）</p>`, options: [R`<p>$I_1\lt I_2\lt I_3$</p>`, R`<p>$I_3\lt I_2\lt I_1$</p>`, R`<p>$I_1\lt I_3\lt I_2$</p>`, R`<p>$I_3\lt I_1\lt I_2$</p>`], correct: 2, explain: R`<p>在 $D$ 上 $\frac12\le x+y\le1$，所以 $\ln(x+y)\le0\lt\sin(x+y)\lt x+y$（$0\lt t\le1$ 时 $\sin t\lt t$）。立方保持大小顺序，故 $[\ln(x+y)]^3\le0\lt[\sin(x+y)]^3\lt(x+y)^3$，由保序性及连续函数的严格保号性，$I_1\lt I_3\lt I_2$。比较大小的关键：先求出 $x+y$ 在区域上的范围。</p>` },
          { q: R`<p>求 $\displaystyle\lim_{r\to0^+}\frac1{r^2}\iint\limits_{x^2+y^2\le r^2}e^x\cos y\,d\sigma$。</p>`, a: R`<p>由中值定理，积分 $=e^\xi\cos\eta\cdot\pi r^2$，$(\xi,\eta)$ 在半径为 $r$ 的圆盘内。所以原式 $=\lim\limits_{r\to0^+}\pi e^\xi\cos\eta=\pi e^0\cos0=\pi$。注意分母是 $r^2$ 而不是 $\pi r^2$，所以答案带 $\pi$。</p>` },
          { q: R`<p>反常二重积分 $\iint\limits_{x^2+y^2\ge1}\dfrac{d\sigma}{(x^2+y^2)^2}$ 是否收敛？若收敛求其值。$\iint\limits_{x^2+y^2\ge1}\dfrac{d\sigma}{x^2+y^2}$ 呢？</p>`, a: R`<p>被积函数非负，用圆环 $1\le r\le R$ 扩张：$\int_0^{2\pi}d\theta\int_1^Rr^{-4}\cdot r\,dr=2\pi\cdot\frac12\big(1-R^{-2}\big)\to\pi$，收敛于 $\pi$。第二个积分在 $1\le r\le R$ 上为 $2\pi\ln R\to+\infty$，发散。一般地，$(x^2+y^2)^{-p}$ 在 $x^2+y^2\ge1$ 上的积分收敛当且仅当 $p>1$。</p>` },
          { q: R`<p>设 $D=[0,2]\times[0,1]$，是否有 $\iint_D x\,d\sigma=\iint_D y\,d\sigma$？</p>`, a: R`<p>没有。$\iint_D x\,d\sigma=\int_0^2x\,dx\cdot\int_0^1dy=2$，$\iint_D y\,d\sigma=\int_0^2dx\cdot\int_0^1y\,dy=1$。$D$ 不关于 $y=x$ 对称，不能用轮换对称性。</p>` },
          { q: R`<p>二重积分中值定理为什么要求 $f$ 连续、$D$ 是连通的有界闭区域？各举一例说明去掉后会失败。</p>`, a: R`<p>证明用到两件事：有界闭区域上的连续函数取得最值（需要有界、闭、连续），以及沿连接两点的曲线使用介值定理（需要连通、连续）。去掉连续：$D=[-1,1]\times[0,1]$，$f$ 在 $x\ge0$ 处为 $1$、在 $x\lt0$ 处为 $-1$，平均值 $0$ 取不到。去掉连通：两个分离的圆盘上分别 $f=0$、$f=1$，平均值 $\frac12$ 取不到。</p>` }
        ]
      },

      /* ───────── 33. 小结 ───────── */
      {
        kind: 'text', title: '小结：一条主线与公式表',
        html: R`<p><b>一条主线</b>：二重积分 = 积分和的极限。可积时极限与分法、取点无关，于是：</p>
<ul>
<li>积分和的线性、可加、保序 ⇒ <b>性质</b>（取极限后保留下来）；</li>
<li>最值 + 介值 ⇒ <b>中值定理</b>；</li>
<li>选<b>网格</b>分割，小和 ≤ 累次积分 ≤ 大和 ⇒ <b>化为累次积分</b>，进而 <b>交换次序</b>；</li>
<li>选<b>射线 + 同心圆</b>分割，扇环面积 $=\bar r\,\Delta r\,\Delta\theta$ ⇒ <b>极坐标公式</b>；</li>
<li>选<b>镜像对称</b>的分割 ⇒ <b>奇偶对称性、轮换对称性</b>；</li>
<li>先在有界部分上积分再扩张，非负时圆盘与正方形等价 ⇒ <b>无界区域、概率积分</b>。</li>
</ul>
<table>
<thead><tr><th>工具</th><th>公式</th><th>何时用</th></tr></thead>
<tbody>
<tr><td>X 型</td><td>$\int_a^bdx\int_{\varphi_1(x)}^{\varphi_2(x)}f\,dy$</td><td>竖线穿过时上下边界不换曲线</td></tr>
<tr><td>Y 型</td><td>$\int_c^ddy\int_{\psi_1(y)}^{\psi_2(y)}f\,dx$</td><td>横线穿过时左右边界不换曲线</td></tr>
<tr><td>极坐标</td><td>$\int_\alpha^\beta d\theta\int_{r_1(\theta)}^{r_2(\theta)}f(r\cos\theta,r\sin\theta)\,r\,dr$</td><td>圆、扇、环；$f(x^2+y^2)$、$f(\frac yx)$</td></tr>
<tr><td>奇偶对称</td><td>奇 ⇒ $0$；偶 ⇒ $2\iint_{D_1}$</td><td>区域对称且函数有对应的奇偶性</td></tr>
<tr><td>轮换对称</td><td>$\iint_D f(x,y)\,d\sigma=\iint_D f(y,x)\,d\sigma$</td><td>区域关于 $y=x$ 对称</td></tr>
<tr><td>中值定理</td><td>$\iint_D f\,d\sigma=f(\xi,\eta)\,\sigma$</td><td>区域收缩时的极限、估计</td></tr>
<tr><td>概率积分</td><td>$\int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt\pi$</td><td>$e^{-x^2}$ 型反常积分</td></tr>
</tbody>
</table>`
      }
    ]
  };
});
