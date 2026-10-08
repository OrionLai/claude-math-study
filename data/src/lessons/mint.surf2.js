// 讲解：第二类曲面积分与高斯公式（第 6 章 多元函数积分学）
registerLesson(function (R) {
  return {
    id: 'mint.surf2', ch: 'mint', title: '第二类曲面积分与高斯公式',
    summary: R`第二类曲面积分计算的是"流过一张有方向的曲面的流量"：先给曲面定侧，再用带号投影 $dx\,dy$ 累加。本篇从流量问题出发，严格定义有向曲面与对坐标的曲面积分，证明投影计算公式、两类曲面积分的关系、合一投影法、对称性规律、高斯公式、通量为零的条件与点源通量（挖洞法），并系统整理补面法、先代入后高斯等解题套路。`,
    prereq: ['mint.surf1', 'mint.triple', 'mint.double', 'mint.line2', 'mdiff.geo', 'vec.vector'],
    sections: [
      /* ───────── 1. 为什么 ───────── */
      {
        kind: 'why', title: '为什么需要第二类曲面积分：从"流量"说起',
        html: R`<p>先不看公式，想一个物理问题：河水按速度场 $\mathbf v(x,y,z)=(P,Q,R)$ 流动，把一张渔网 $\Sigma$ 放进水里，<b>单位时间内有多少水穿过这张网？</b>这个量叫<b>流量</b>，也叫<b>通量</b>。</p>
<p><b>第一步：最简单的情形。</b>网是一块面积为 $A$ 的平面，流速处处相同。单位时间内穿过它的水恰好填满一个斜柱体：底是这块平面，母线是 $\mathbf v$。斜柱体体积等于底面积乘高，而高就是 $\mathbf v$ 在平面法线方向上的分量 $\mathbf v\cdot\mathbf n$（$\mathbf n$ 为单位法向量），所以 $$\Phi=(\mathbf v\cdot\mathbf n)\,A .$$</p>
<p>这里立刻出现一个第一类曲面积分里从未遇到的问题：<b>法向量 $\mathbf n$ 朝哪边？</b>平面有两个单位法向量 $\pm\mathbf n$，取不同的那个，$\Phi$ 差一个负号。物理上也说得通：水从"正面"流向"反面"记为正，反过来就记为负。所以要谈流量，必须先<b>规定曲面的正面</b>——这就是"有向曲面"（曲面的侧）的由来。</p>
<svg viewBox="0 0 420 240" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="s2arA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
<polygon points="30,215 290,215 390,160 130,160" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.5"/>
<polygon points="160,203 250,203 280,185 190,185" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-dasharray="4 3"/>
<polygon points="160,128 250,110 280,92 190,110" fill="currentColor" fill-opacity="0.25" stroke="currentColor"/>
<line x1="160" y1="128" x2="160" y2="203" stroke="currentColor" stroke-dasharray="2 3" stroke-opacity="0.6"/>
<line x1="250" y1="110" x2="250" y2="203" stroke="currentColor" stroke-dasharray="2 3" stroke-opacity="0.6"/>
<line x1="280" y1="92" x2="280" y2="185" stroke="currentColor" stroke-dasharray="2 3" stroke-opacity="0.6"/>
<line x1="190" y1="110" x2="190" y2="185" stroke="currentColor" stroke-dasharray="2 3" stroke-opacity="0.6"/>
<line x1="220" y1="110" x2="220" y2="40" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.6"/>
<line x1="220" y1="110" x2="198" y2="48" stroke="currentColor" stroke-width="2" marker-end="url(#s2arA)"/>
<line x1="220" y1="110" x2="300" y2="58" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arA)"/>
<text x="186" y="44" font-size="14" fill="currentColor">n</text>
<text x="212" y="66" font-size="12" fill="currentColor">γ</text>
<text x="305" y="56" font-size="14" fill="currentColor">v</text>
<text x="288" y="100" font-size="13" fill="currentColor">ΔS</text>
<text x="292" y="200" font-size="13" fill="currentColor">(ΔS)<tspan font-size="10" dy="3">xy</tspan></text>
<text x="44" y="208" font-size="12" fill="currentColor">xOy 面</text>
</svg>
<p><b>第二步：一般情形。</b>网是弯的、流速随处变化，就用积分的老办法——分割、近似、求和、取极限。把 $\Sigma$ 切成小块 $\Delta S_i$，每块近似看成平面（法向量 $\mathbf n_i=(\cos\alpha_i,\cos\beta_i,\cos\gamma_i)$），流速近似看成常向量 $\mathbf v(M_i)$，于是 $$\Phi\approx\sum_i \mathbf v(M_i)\cdot\mathbf n_i\,\Delta S_i=\sum_i\big(P\cos\alpha_i+Q\cos\beta_i+R\cos\gamma_i\big)\Delta S_i .$$</p>
<p><b>第三步：关键的观察。</b>$\cos\gamma_i\,\Delta S_i$ 是什么？一块面积为 $A$ 的平面，若它的法向量与 $z$ 轴夹角为 $\gamma$，它在 $xOy$ 面上的投影面积是 $A|\cos\gamma|$。理由：在这块平面里取两个互相垂直的方向，一个沿它与水平面的交线方向（投影后长度不变），另一个沿"最陡"方向（它与水平面所成的角等于两平面的夹角，也就是 $\gamma$ 或 $\pi-\gamma$，投影后长度乘以 $|\cos\gamma|$），面积因此乘以 $|\cos\gamma|$。再把符号算进去：法向量朝上时 $\cos\gamma>0$，朝下时 $\cos\gamma\lt0$。所以 $\cos\gamma_i\Delta S_i$ 正是<b>带符号的投影面积</b>，记作 $(\Delta S_i)_{xy}$（上图中虚线小块）。同理 $\cos\alpha_i\Delta S_i\approx(\Delta S_i)_{yz}$，$\cos\beta_i\Delta S_i\approx(\Delta S_i)_{zx}$，于是 $$\Phi\approx\sum_i\Big[P(M_i)(\Delta S_i)_{yz}+Q(M_i)(\Delta S_i)_{zx}+R(M_i)(\Delta S_i)_{xy}\Big].$$</p>
<p>右边这个和式取极限，就是本篇的主角——<b>对坐标的曲面积分</b>（第二类曲面积分）。上面两种写法（用方向余弦乘 $\Delta S$，或者用带号投影）在极限下给出同一个数，这就是"两类曲面积分的关系"。</p>
<p><b>第四步：闭曲面。</b>若 $\Sigma$ 是封闭的（像一个气球），取外侧，流量就是<b>净流出量</b>。净流出的水从哪里来？只能来自内部的"源"。若能算出每一点单位体积的源强度（就是散度 $\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}$），把它在内部积分，就应当等于外表面的净流出量——这就是<b>高斯公式</b>。它和牛顿—莱布尼茨公式、格林公式是同一个思想：<b>内部导数的积分 = 边界上的量</b>。</p>
<p><b>路线图</b>：有向曲面与带号投影 → 对坐标的曲面积分的定义与性质 → 投影法计算 → 两类曲面积分的关系与合一投影法 → 对称性 → 高斯公式 → 补面法、通量为零的条件、点源通量与挖洞法 → 误区、方法、考法、自测。第一类曲面积分的计算公式见「第一类曲面积分」一篇；散度与旋度的系统讲法见「场论初步」；曲面边界上的曲线积分见「斯托克斯公式」。</p>`
      },

      /* ───────── 2. 有向曲面 ───────── */
      {
        kind: 'def', title: '有向曲面：曲面的"侧"',
        html: R`<p><b>回顾（光滑曲面）</b>　若曲面 $\Sigma$ 上每一点都有切平面，且切平面的法向量随点的移动而连续变化，称 $\Sigma$ 为光滑曲面；由有限片光滑曲面拼接成的曲面称为分片光滑曲面（如长方体的表面、圆锥面连同底面）。</p>
<p>光滑曲面上每一点 $M$ 处的单位法向量有两个：$\mathbf n(M)$ 与 $-\mathbf n(M)$。"给曲面定侧"，就是在每一点从这两个中<b>挑一个</b>，并且要挑得<b>连续</b>。</p>
<p><b>定义（双侧曲面与单侧曲面）</b>　设 $\Sigma$ 是光滑曲面。在 $\Sigma$ 上任取一点 $M_0$，在该点取定一个法向量；让点 $M$ 从 $M_0$ 出发，沿 $\Sigma$ 上<b>任意一条不越过 $\Sigma$ 的边界</b>的闭曲线连续移动，法向量也随之连续变动。若 $M$ 回到 $M_0$ 时法向量<b>总是</b>与出发时方向相同，称 $\Sigma$ 为<b>双侧曲面</b>；若存在某条这样的闭曲线，使得回到 $M_0$ 时法向量变成相反方向，称 $\Sigma$ 为<b>单侧曲面</b>。</p>
<p><b>定义（有向曲面）</b>　在双侧曲面 $\Sigma$ 上取定一个<b>处处连续</b>的单位法向量场 $\mathbf n(M)=(\cos\alpha,\cos\beta,\cos\gamma)$，就说选定了曲面的一<b>侧</b>；选定了侧的曲面叫<b>有向曲面</b>。同一曲面取相反的一侧，记作 $-\Sigma$，其法向量处处为 $-\mathbf n$。</p>
<p><b>逐字拆解</b></p>
<ul>
<li><b>"法向量随之连续变动"</b>：法向量不能在某一点突然"翻面"。如果允许跳跃，任何曲面都可以东一块朝上、西一块朝下，"侧"就失去了意义，流量的正负也会随意改变。</li>
<li><b>"不越过边界"</b>：边界是曲面的边缘。从边缘翻过去等于离开了曲面，就像从纸的正面绕过纸边走到反面——这不算"在曲面上连续移动"。</li>
<li><b>"总是方向相同"</b>：只要有一条回路能让法向量反向，就说明曲面的"正面"和"反面"是连成一片的，这样的曲面根本分不出两侧，流量无法定义。</li>
<li><b>"处处连续的单位法向量场"</b>：这是"选定一侧"在数学上的精确含义。对连通的双侧曲面，只要在一点选定了方向，连续性就把其余各点的方向全部确定了，所以恰好有两种选法：$\mathbf n$ 与 $-\mathbf n$。</li>
</ul>
<p><b>反例：莫比乌斯带</b>　把一条长纸带扭转半圈再把两端粘起来，就得到莫比乌斯带。沿着纸带中线走一圈回到出发点，法向量恰好反向——你走到了"背面"，途中却没有翻过任何边。它是单侧曲面，不能定侧，也就不能在上面定义流量。<b>本篇以及考研中出现的曲面都是双侧曲面。</b></p>
<p><b>正例：显式曲面一定是双侧的</b>　设 $\Sigma:\ z=z(x,y),\ (x,y)\in D_{xy}$，$z(x,y)$ 有连续偏导数。则 $$\mathbf n(x,y)=\frac{(-z_x,\,-z_y,\,1)}{\sqrt{1+z_x^2+z_y^2}}$$ 在 $\Sigma$ 上处处有定义、连续，并且是<b>点的单值函数</b>。沿任何闭曲线走回出发点，法向量都回到同一个值，所以 $\Sigma$ 是双侧曲面。又如球面 $x^2+y^2+z^2=a^2$ 上 $\mathbf n=\dfrac1a(x,y,z)$ 处处连续，球面也是双侧的。</p>
<p><b>常用的侧的名称</b></p>
<table>
<thead><tr><th>曲面形式</th><th>两侧的名称</th><th>判别（方向余弦的符号）</th></tr></thead>
<tbody>
<tr><td>$z=z(x,y)$</td><td>上侧 / 下侧</td><td>$\cos\gamma>0$ / $\cos\gamma\lt0$；上侧 $\mathbf n\parallel(-z_x,-z_y,1)$</td></tr>
<tr><td>$x=x(y,z)$</td><td>前侧 / 后侧</td><td>$\cos\alpha>0$ / $\cos\alpha\lt0$；前侧 $\mathbf n\parallel(1,-x_y,-x_z)$</td></tr>
<tr><td>$y=y(z,x)$</td><td>右侧 / 左侧</td><td>$\cos\beta>0$ / $\cos\beta\lt0$；右侧 $\mathbf n\parallel(-y_x,1,-y_z)$</td></tr>
<tr><td>闭曲面</td><td>外侧 / 内侧</td><td>外侧的法向量指向曲面所围区域的外部</td></tr>
</tbody>
</table>
<p>同一张曲面可以同时用几种名称描述。例如上半球面 $z=\sqrt{a^2-x^2-y^2}$ 的"上侧"就是球面的"外侧"；在 $x>0$ 的那部分，它同时也是"前侧"。而下半球面的外侧是"下侧"——<b>"外侧"不等于"上侧"</b>，要逐片判断。</p>`
      },

      /* ───────── 3. 带号投影 ───────── */
      {
        kind: 'def', title: '有向曲面块的投影（带号投影）',
        html: R`<p>为了把流量写成和式，需要把 $\cos\gamma\,\Delta S$ 用"投影"表达出来，这就是带号投影。</p>
<p><b>定义</b>　设 $\Delta S$ 是有向曲面 $\Sigma$ 上的一小块，它在 $xOy$ 面上的投影区域的面积为 $(\Delta\sigma)_{xy}\ (\ge0)$。<b>假定 $\Delta S$ 上各点处的 $\cos\gamma$ 同号</b>（都为正、都为负或都为零），规定 $$(\Delta S)_{xy}=\begin{cases}(\Delta\sigma)_{xy}, & \cos\gamma>0,\\ -(\Delta\sigma)_{xy}, & \cos\gamma\lt0,\\ 0, & \cos\gamma\equiv0 ,\end{cases}$$ 称为 $\Delta S$ 在 $xOy$ 面上的<b>投影</b>。类似地，用 $\cos\alpha$ 的符号和在 $yOz$ 面上的投影面积定义 $(\Delta S)_{yz}$，用 $\cos\beta$ 的符号和在 $zOx$ 面上的投影面积定义 $(\Delta S)_{zx}$。</p>
<p><b>逐字拆解</b></p>
<ul>
<li><b>"投影区域的面积"</b>：一个非负数，就是普通二重积分里的面积元。</li>
<li><b>"带上 $\cos\gamma$ 的符号"</b>：把方向信息塞进投影里。法向量朝上（上侧）记正，朝下（下侧）记负，对应于"水从下往上穿过时流量为正"。</li>
<li><b>"$\cos\gamma$ 同号"这个假定</b>：若一小块上 $\cos\gamma$ 有正有负（曲面在这里"折回来"），它的投影有一部分被"正着盖"、一部分被"反着盖"，只用"投影面积乘一个符号"就说不清楚了。分割足够细时，除了 $\cos\gamma=0$ 的那些曲线附近，每一小块都满足这个假定；必要时先沿 $\cos\gamma=0$ 的曲线把曲面切开。</li>
<li><b>"$\cos\gamma\equiv0$ 时为 $0$"</b>：法向量水平，曲面块是竖直的，它在 $xOy$ 面上的投影只是一段曲线，面积为 $0$。直观地说，竖直的网挡不住竖直方向的水流。</li>
</ul>
<p><b>例子</b></p>
<ul>
<li>平面 $z=1$ 上的正方形 $[0,h]\times[0,h]$：取上侧，$(\Delta S)_{xy}=h^2$；取下侧，$(\Delta S)_{xy}=-h^2$；它在 $yOz$、$zOx$ 面上的投影都是 $0$。</li>
<li>圆柱面 $x^2+y^2=1$ 上的任何一小块，取外侧，法向量 $(x,y,0)$ 水平，$(\Delta S)_{xy}=0$；但它在 $yOz$ 面上的投影一般不为 $0$。</li>
<li>平面 $x+y+z=1$ 上的一小块，取上侧，$\mathbf n=\frac{1}{\sqrt3}(1,1,1)$，三个投影都等于 $\frac{1}{\sqrt3}\Delta S$，而且都是正的。</li>
</ul>
<p>由上一节的推导，对很小的、近似为平面的曲面块，$(\Delta S)_{xy}\approx\cos\gamma\,\Delta S$：带号投影就是"面积乘以单位法向量的第三个分量"。这个近似关系将在"两类曲面积分的关系"中被严格化。</p>`
      },

      /* ───────── 4. 定义 ───────── */
      {
        kind: 'def', title: '对坐标的曲面积分（第二类曲面积分）的定义',
        html: R`<p><b>定义</b>　设 $\Sigma$ 为光滑的有向曲面，函数 $R(x,y,z)$ 在 $\Sigma$ 上有界。把 $\Sigma$ <b>任意</b>分成 $n$ 小块 $\Delta S_1,\dots,\Delta S_n$（$\Delta S_i$ 同时表示第 $i$ 块的面积），$(\Delta S_i)_{xy}$ 为第 $i$ 块在 $xOy$ 面上的投影，在 $\Delta S_i$ 上<b>任取</b>一点 $(\xi_i,\eta_i,\zeta_i)$，记 $\lambda$ 为各小块直径的最大值。如果极限 $$\lim_{\lambda\to0}\sum_{i=1}^n R(\xi_i,\eta_i,\zeta_i)\,(\Delta S_i)_{xy}$$ 存在，并且与 $\Sigma$ 的分法及点的取法都无关，则称此极限为函数 $R$ 在有向曲面 $\Sigma$ 上<b>对坐标 $x,y$ 的曲面积分</b>，记作 $\displaystyle\iint_\Sigma R(x,y,z)\,dx\,dy$。类似地定义 $$\iint_\Sigma P\,dy\,dz=\lim_{\lambda\to0}\sum_{i=1}^n P(\xi_i,\eta_i,\zeta_i)(\Delta S_i)_{yz},\qquad \iint_\Sigma Q\,dz\,dx=\lim_{\lambda\to0}\sum_{i=1}^n Q(\xi_i,\eta_i,\zeta_i)(\Delta S_i)_{zx}.$$ 三者之和简记为 $$\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy ,$$ 统称<b>对坐标的曲面积分</b>，也叫<b>第二类曲面积分</b>。$\Sigma$ 为闭曲面时，教材上常在积分号上加一个圈；本站统一写 $\displaystyle\iint_\Sigma$，并注明"闭曲面"及所取的侧。</p>
<p><b>物理意义</b>　流速场 $\mathbf v=(P,Q,R)$ 在单位时间内流向 $\Sigma$ 指定一侧的流量为 $$\Phi=\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy .$$</p>
<p><b>逐字拆解</b></p>
<ul>
<li><b>"有向曲面"</b>：不指定侧，$(\Delta S_i)_{xy}$ 的符号就不确定，积分无从谈起。<b>同一个被积表达式在同一张曲面的两侧上积分，结果互为相反数。</b></li>
<li><b>"任意分法、任意取点，极限与之无关"</b>：保证积分值是曲面和函数本身的属性，而不是某种特殊切法的产物——这与定积分、二重积分的定义完全一致。</li>
<li><b>"$\lambda\to0$"</b>：要求<b>每一块</b>的直径都趋于零，而不只是块数 $n\to\infty$；否则可能有一大块始终没被切细，"近似为平面、流速近似为常数"就不成立。</li>
<li><b>"$dx\,dy$" 的含义</b>：它是带号投影 $(\Delta S)_{xy}$ 的极限形式，<b>可以是负的</b>。它既不是曲面面积元 $dS$，也不同于二重积分 $\displaystyle\iint_D f\,dx\,dy$ 中恒正的面积元。写法相同、含义不同，这是初学者混淆的根源。</li>
<li><b>"$R$ 定义在 $\Sigma$ 上"</b>：和式中的点 $(\xi_i,\eta_i,\zeta_i)$ 都在 $\Sigma$ 上，所以 $R$ 只在曲面上取值。因此计算时<b>可以用曲面方程化简被积函数</b>——这是后面很多技巧（先代入后高斯、挖洞法）的依据。</li>
</ul>
<p><b>存在性</b>　当 $\Sigma$ 是分片光滑的有向曲面、$P,Q,R$ 在 $\Sigma$ 上连续时，上述积分都存在。对于显式曲面，下面"投影法"的证明会顺带证明这一点。以后总假定这个条件成立。</p>
<p><b>正例</b>　$\Sigma$ 为 $z=z(x,y),\ (x,y)\in D$ 的上侧，$R\equiv1$：每个和式都等于 $\sum_i(\Delta\sigma_i)_{xy}$，即 $D$ 的面积 $|D|$，所以 $\displaystyle\iint_\Sigma dx\,dy=|D|$；取下侧则为 $-|D|$。</p>
<p><b>反例</b>　（1）在莫比乌斯带上无法定义——它没有侧。（2）$\Sigma$ 为平面 $z=0$ 上的单位正方形（上侧），令 $R=1$（$x$ 为有理数）、$R=0$（$x$ 为无理数）。$R$ 有界，但每一小块里既有 $x$ 为有理数的点，也有 $x$ 为无理数的点；取点不同，和式可以恒为 $1$，也可以恒为 $0$，极限不存在。可见"有界"不足以保证积分存在，连续才够。</p>`
      },

      /* ───────── 5. 性质 ───────── */
      {
        kind: 'thm', title: '第二类曲面积分的基本性质',
        statement: R`<p>设下列积分均存在。</p>
<ol>
<li><b>线性</b>：$\displaystyle\iint_\Sigma (k_1R_1+k_2R_2)\,dx\,dy=k_1\iint_\Sigma R_1\,dx\,dy+k_2\iint_\Sigma R_2\,dx\,dy$。</li>
<li><b>对曲面的可加性</b>：若 $\Sigma$ 分成没有公共内点的两片 $\Sigma_1,\Sigma_2$（侧与 $\Sigma$ 一致），则 $\displaystyle\iint_\Sigma=\iint_{\Sigma_1}+\iint_{\Sigma_2}$。</li>
<li><b>反侧变号</b>：$\displaystyle\iint_{-\Sigma}R\,dx\,dy=-\iint_\Sigma R\,dx\,dy$；对 $dy\,dz$、$dz\,dx$ 同样成立。</li>
<li><b>竖直柱面为零</b>：若 $\Sigma$ 是母线平行于 $z$ 轴的柱面上的一片（处处 $\cos\gamma=0$），则 $\displaystyle\iint_\Sigma R\,dx\,dy=0$。同理，母线平行于 $x$ 轴时 $\displaystyle\iint_\Sigma P\,dy\,dz=0$，母线平行于 $y$ 轴时 $\displaystyle\iint_\Sigma Q\,dz\,dx=0$。</li>
</ol>`,
        intuition: R`<p>（3）流量有方向：把"正面"换成"反面"，流进变成流出，符号相反。（4）竖直的网挡不住竖直方向的水流——网在 $xOy$ 面上的"影子"面积为零。</p>`,
        steps: [
          { s: R`<p>证（1）：对同一种分法和取点，$\sum_i(k_1R_1+k_2R_2)(\Delta S_i)_{xy}=k_1\sum_iR_1(\Delta S_i)_{xy}+k_2\sum_iR_2(\Delta S_i)_{xy}$，令 $\lambda\to0$，右边两个和式分别趋于两个积分，由极限的线性运算法则得结论。</p>`, why: R`<p>积分是和式的极限；和式是线性的，极限运算也是线性的，所以积分是线性的。所有类型的积分都这样证线性。</p>` },
          { s: R`<p>证（2）：既然 $\Sigma$ 上的积分存在且与分法无关，就只考虑"沿 $\Sigma_1$ 与 $\Sigma_2$ 的分界线切开"的分法。这时每一小块要么属于 $\Sigma_1$，要么属于 $\Sigma_2$，和式拆成两部分，分别是 $\Sigma_1$、$\Sigma_2$ 上的和式，且它们的最大直径都不超过 $\lambda$。令 $\lambda\to0$，两部分分别趋于 $\displaystyle\iint_{\Sigma_1}$ 与 $\displaystyle\iint_{\Sigma_2}$。</p>`, why: R`<p>"极限与分法无关"给了我们挑选方便分法的自由——这是证明可加性的标准手法，二重积分、三重积分的可加性也是这样证明的。</p>` },
          { s: R`<p>证（3）：$-\Sigma$ 与 $\Sigma$ 是同一个点集，可以用同一种分法、同一组点。在 $-\Sigma$ 上法向量处处为 $-\mathbf n$，$\cos\gamma$ 变号而投影面积不变，按带号投影的定义，每个 $(\Delta S_i)_{xy}$ 都变号。于是两个和式互为相反数，取极限即得。</p>`, why: R`<p>方向信息全部存放在 $(\Delta S_i)_{xy}$ 的符号里，而函数值 $R(\xi_i,\eta_i,\zeta_i)$ 与侧无关，所以换侧只改变符号。</p>` },
          { s: R`<p>证（4）：若 $\Sigma$ 上处处 $\cos\gamma=0$，则任一小块都满足"$\cos\gamma\equiv0$"，按定义 $(\Delta S_i)_{xy}=0$，每个和式都等于 $0$，极限也是 $0$。</p>`, why: R`<p>竖直的曲面块在 $xOy$ 面上的投影是一段曲线，面积为零——定义里第三种情形正是为此设置的。</p>` }
        ],
        remark: R`<p>（3）是第二类与第一类曲面积分最本质的区别：第一类积分 $\displaystyle\iint_\Sigma f\,dS$ 与侧无关（$dS>0$），第二类积分与侧有关。</p>
<p>（4）只说与 $dx\,dy$ 对应的那一项为零。例如圆柱面 $x^2+y^2=1\ (0\le z\le1)$ 取外侧，$\displaystyle\iint_\Sigma z\,dx\,dy=0$，但 $\displaystyle\iint_\Sigma x\,dy\,dz=\pi\ne0$（见自测）。</p>
<p>计算中常用（4）"一眼砍项"：竖直平面、竖直柱面上的 $dx\,dy$ 项直接为 $0$；平面 $z=c$ 上法向量为 $(0,0,\pm1)$，$dy\,dz$、$dz\,dx$ 两项直接为 $0$。</p>`
      },

      /* ───────── 6. 投影法 ───────── */
      {
        kind: 'thm', title: '计算公式：投影法（一投、二代、三定号）',
        statement: R`<p>设有向曲面 $\Sigma:\ z=z(x,y),\ (x,y)\in D_{xy}$，其中 $D_{xy}$ 为有界闭区域，$z(x,y)$ 在 $D_{xy}$ 上有连续偏导数，$R(x,y,z)$ 在 $\Sigma$ 上连续，则 $$\iint_\Sigma R(x,y,z)\,dx\,dy=\pm\iint_{D_{xy}}R\big(x,y,z(x,y)\big)\,dx\,dy ,$$ $\Sigma$ 取上侧时取"$+$"，取下侧时取"$-$"。</p>
<p>类似地，$\Sigma:\ x=x(y,z)$ 时 $\displaystyle\iint_\Sigma P\,dy\,dz=\pm\iint_{D_{yz}}P\big(x(y,z),y,z\big)\,dy\,dz$（前侧取正）；$\Sigma:\ y=y(z,x)$ 时 $\displaystyle\iint_\Sigma Q\,dz\,dx=\pm\iint_{D_{zx}}Q\big(x,y(z,x),z\big)\,dz\,dx$（右侧取正）。</p>
<p><b>口诀</b>：<b>一投</b>——把 $\Sigma$ 投影到与 $dx\,dy$ 对应的 $xOy$ 面上得 $D_{xy}$；<b>二代</b>——把曲面方程 $z=z(x,y)$ 代入被积函数；<b>三定号</b>——上侧正、下侧负。</p>`,
        intuition: R`<p>曲面上的小块与它在 $D_{xy}$ 上的影子一一对应；取上侧时带号投影就是影子的面积，于是曲面上的和式恰好是 $D_{xy}$ 上二重积分的黎曼和。下侧只是整体多一个负号。</p>`,
        steps: [
          { s: R`<p>先设 $\Sigma$ 取上侧。在 $\Sigma$ 上 $\cos\gamma=\dfrac{1}{\sqrt{1+z_x^2+z_y^2}}>0$ 处处成立，所以任一小块 $\Delta S_i$ 都满足"$\cos\gamma$ 同号"的假定，并且 $(\Delta S_i)_{xy}=(\Delta\sigma_i)_{xy}$，即投影面积本身。</p>`, why: R`<p>显式曲面的法向量第三分量永不为零，这正是"能向 $xOy$ 面投影"的含义；定义中那个"同号"假定在这里自动成立。</p>` },
          { s: R`<p>投影映射 $\pi(x,y,z)=(x,y)$ 把 $\Sigma$ 一一地映成 $D_{xy}$：每个 $(x,y)\in D_{xy}$ 恰好对应 $\Sigma$ 上一点 $(x,y,z(x,y))$。因此 $\Sigma$ 的分法 $\{\Delta S_i\}$ 与 $D_{xy}$ 的分法 $\{\Delta\sigma_i\}=\{\pi(\Delta S_i)\}$ 一一对应。又因为 $|\pi(M)\pi(N)|\le|MN|$，有 $\operatorname{diam}\Delta\sigma_i\le\operatorname{diam}\Delta S_i$，从而 $\lambda'=\max_i\operatorname{diam}\Delta\sigma_i\le\lambda$。</p>`, why: R`<p>单值性保证投影后的小块"不重叠、不遗漏"，恰好拼成 $D_{xy}$；"投影不增加距离"保证曲面上分得细，投影也分得细——这是把曲面上的极限转化为平面上极限的关键。</p>` },
          { s: R`<p>点 $(\xi_i,\eta_i,\zeta_i)\in\Delta S_i$ 满足 $(\xi_i,\eta_i)\in\Delta\sigma_i$ 且 $\zeta_i=z(\xi_i,\eta_i)$。记 $F(x,y)=R\big(x,y,z(x,y)\big)$，则 $$\sum_{i=1}^n R(\xi_i,\eta_i,\zeta_i)(\Delta S_i)_{xy}=\sum_{i=1}^n F(\xi_i,\eta_i)\,\Delta\sigma_i ,$$ 右边恰好是 $F$ 在 $D_{xy}$ 上关于分法 $\{\Delta\sigma_i\}$ 与取点 $\{(\xi_i,\eta_i)\}$ 的黎曼和。</p>`, why: R`<p>曲面上的点被曲面方程"锁住"，第三个坐标不自由——这就是"二代"的来源。</p>` },
          { s: R`<p>$F$ 是连续函数的复合，在有界闭区域 $D_{xy}$ 上连续，所以二重积分 $I=\displaystyle\iint_{D_{xy}}F\,dx\,dy$ 存在：对任意 $\varepsilon>0$，存在 $\delta>0$，只要 $D_{xy}$ 的分法的最大直径小于 $\delta$，无论怎样取点，黎曼和与 $I$ 之差的绝对值都小于 $\varepsilon$。现在只要 $\lambda\lt\delta$，就有 $\lambda'\le\lambda\lt\delta$，于是上面的和式与 $I$ 之差小于 $\varepsilon$。这说明 $\lambda\to0$ 时和式的极限存在、与分法和取点无关，且等于 $I$。</p>`, why: R`<p>这一步同时证明了"积分存在"和"积分等于什么"。它只用到"有界闭区域上的连续函数二重可积"，不需要预先假定曲面积分存在。</p>` },
          { s: R`<p>若 $\Sigma$ 取下侧，则处处 $\cos\gamma\lt0$，$(\Delta S_i)_{xy}=-\Delta\sigma_i$，和式等于 $-\sum_iF(\xi_i,\eta_i)\Delta\sigma_i\to-I$。对 $dy\,dz$、$dz\,dx$ 的公式，把投影方向换成 $x$ 轴、$y$ 轴，论证完全相同。</p>`, why: R`<p>下侧也可以直接由性质（3）反侧变号得到。</p>` }
        ],
        remark: R`<ul>
<li><b>"单值"条件</b>：若 $\Sigma$ 在 $xOy$ 面上的投影有重叠（如整个球面），先分成若干片，使每片都是单值显式曲面，分别投影、各自定号，再相加。若 $\Sigma$ 含有竖直部分，那部分的 $dx\,dy$ 积分为 $0$（性质（4））。</li>
<li><b>三个投影各管各的</b>：$dx\,dy$ 投到 $xOy$ 面、$dy\,dz$ 投到 $yOz$ 面、$dz\,dx$ 投到 $zOx$ 面。一个含三项的积分若用这种"分项投影"，往往要投三个不同的面并各自定号——这正是后面"合一投影法"要简化的地方。</li>
<li><b>左右两边的 $dx\,dy$ 含义不同</b>：左边是带号投影，右边是普通二重积分的面积元（恒正）。闭曲面上 $\displaystyle\iint_\Sigma dx\,dy=0$（上下两片投影相同、符号相反），就是"左边的 $dx\,dy$ 不是面积"的明证。</li>
</ul>`
      },

      /* ───────── 7. 例 1 ───────── */
      {
        kind: 'example', title: '例 1：直接投影——对称的两片为什么不抵消',
        html: R`<p><b>例 1</b>　计算 $\displaystyle I=\iint_\Sigma xyz\,dx\,dy$，其中 $\Sigma$ 是球面 $x^2+y^2+z^2=1$ 的外侧在 $x\ge0,\ y\ge0$ 的部分。</p>
<p><b>怎么想</b>　只有 $dx\,dy$ 一项，直接"一投二代三定号"。但球面向 $xOy$ 面投影时上半与下半重叠，必须先分片。</p>
<p><b>解</b>　把 $\Sigma$ 分成两片：</p>
<ul>
<li>$\Sigma_1:\ z=\sqrt{1-x^2-y^2}$，球面外侧在上半部分朝上，取<b>上侧</b>；</li>
<li>$\Sigma_2:\ z=-\sqrt{1-x^2-y^2}$，球面外侧在下半部分朝下，取<b>下侧</b>。</li>
</ul>
<p>两片都投影到 $D:\ x^2+y^2\le1,\ x\ge0,\ y\ge0$。由投影法： $$\iint_{\Sigma_1}xyz\,dx\,dy=\iint_D xy\sqrt{1-x^2-y^2}\,dx\,dy ,$$ $$\iint_{\Sigma_2}xyz\,dx\,dy=-\iint_D xy\big(-\sqrt{1-x^2-y^2}\big)\,dx\,dy=\iint_D xy\sqrt{1-x^2-y^2}\,dx\,dy .$$ 两部分<b>相等而不是抵消</b>：代入的 $z$ 是负的，下侧又带来一个负号，负负得正。于是用极坐标 $$I=2\iint_D xy\sqrt{1-x^2-y^2}\,dx\,dy=2\int_0^{\pi/2}\sin\theta\cos\theta\,d\theta\int_0^1 r^3\sqrt{1-r^2}\,dr .$$ 其中 $\displaystyle\int_0^{\pi/2}\sin\theta\cos\theta\,d\theta=\frac12$；令 $u=1-r^2$， $$\int_0^1 r^3\sqrt{1-r^2}\,dr=\frac12\int_0^1(1-u)\sqrt u\,du=\frac12\Big(\frac23-\frac25\Big)=\frac{2}{15}.$$ 所以 $I=2\cdot\dfrac12\cdot\dfrac{2}{15}=\dfrac{2}{15}$。</p>
<p><b>反思</b>　被积函数 $xyz$ 关于 $z$ 是奇函数，$\Sigma$ 又关于 $xOy$ 面对称。如果套用第一类曲面积分"奇函数积分为零"的结论，会错误地得到 $0$。第二类曲面积分中，对称的两片的<b>侧也互为镜像</b>（一上一下），带号投影又翻了一次号，所以奇函数反而"加倍"。这条规律将在后面"对称性"一节严格证明。另外注意：$\Sigma$ 只是球面上的那一块，不包括平面 $x=0$、$y=0$ 上的部分，它不是闭曲面，不能直接用高斯公式。</p>`
      },

      /* ───────── 8. 两类关系 ───────── */
      {
        kind: 'thm', title: '两类曲面积分之间的关系',
        statement: R`<p>设 $\Sigma$ 为分片光滑的有向曲面，$\mathbf n=(\cos\alpha,\cos\beta,\cos\gamma)$ 为 $\Sigma$ 在点 $(x,y,z)$ 处<b>所取一侧</b>的单位法向量，$P,Q,R$ 在 $\Sigma$ 上连续，则 $$\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy=\iint_\Sigma\big(P\cos\alpha+Q\cos\beta+R\cos\gamma\big)\,dS .$$</p>
<p><b>向量形式</b>：记 $\mathbf A=(P,Q,R)$，有向面积元 $d\mathbf S=\mathbf n\,dS=(dy\,dz,\ dz\,dx,\ dx\,dy)$，则 $\displaystyle\iint_\Sigma\mathbf A\cdot d\mathbf S=\iint_\Sigma\mathbf A\cdot\mathbf n\,dS$。</p>
<p><b>微元关系</b>：$dy\,dz=\cos\alpha\,dS$，$dz\,dx=\cos\beta\,dS$，$dx\,dy=\cos\gamma\,dS$，因而 $dy\,dz:dz\,dx:dx\,dy=\cos\alpha:\cos\beta:\cos\gamma$。</p>`,
        intuition: R`<p>第二类曲面积分就是"流速在法方向上的分量 $\mathbf A\cdot\mathbf n$"的第一类曲面积分——正是开头流量推导中的第一种写法。方向信息从"带号投影"转移到了"方向余弦"上：$dS$ 永远为正，侧的信息存放在 $\cos\alpha,\cos\beta,\cos\gamma$ 的符号里。</p>`,
        steps: [
          { s: R`<p>只需证明 $\displaystyle\iint_\Sigma R\,dx\,dy=\iint_\Sigma R\cos\gamma\,dS$，另外两项同理，三式相加即得。</p>`, why: R`<p>两边都对被积函数线性、对曲面可加，所以可以逐项、逐片地证明。</p>` },
          { s: R`<p><b>情形一</b>：$\Sigma$ 为显式曲面 $z=z(x,y),\ (x,y)\in D_{xy}$ 的上侧，$z$ 有连续偏导数。此时 $\cos\gamma=\dfrac{1}{\sqrt{1+z_x^2+z_y^2}}$。由第一类曲面积分的计算公式 $\displaystyle\iint_\Sigma f\,dS=\iint_{D_{xy}}f\big(x,y,z(x,y)\big)\sqrt{1+z_x^2+z_y^2}\,dx\,dy$（取 $f=R\cos\gamma$，它在 $\Sigma$ 上连续），得 $$\iint_\Sigma R\cos\gamma\,dS=\iint_{D_{xy}}R\big(x,y,z(x,y)\big)\frac{1}{\sqrt{1+z_x^2+z_y^2}}\sqrt{1+z_x^2+z_y^2}\,dx\,dy=\iint_{D_{xy}}R\big(x,y,z(x,y)\big)\,dx\,dy .$$ 由投影法，右端正是 $\displaystyle\iint_\Sigma R\,dx\,dy$。</p>`, why: R`<p>面积元 $dS=\sqrt{1+z_x^2+z_y^2}\,dx\,dy$ 恰好与 $\cos\gamma$ 的分母相消——几何上就是"面积 × $\cos\gamma$ = 投影面积"。两类积分都被化成了同一个二重积分。</p>` },
          { s: R`<p><b>情形二</b>：$\Sigma$ 取下侧。此时 $\cos\gamma=-\dfrac{1}{\sqrt{1+z_x^2+z_y^2}}$，同样的计算得 $\displaystyle\iint_\Sigma R\cos\gamma\,dS=-\iint_{D_{xy}}R\big(x,y,z(x,y)\big)\,dx\,dy$；而投影法在下侧时右边也带负号。两边相等。</p>`, why: R`<p>侧改变时，左边的符号由带号投影改变，右边的符号由方向余弦改变，二者步调一致。</p>` },
          { s: R`<p><b>情形三</b>：$\Sigma$ 是母线平行于 $z$ 轴的柱面片。此时 $\cos\gamma\equiv0$，右边被积函数为 $0$，积分为 $0$；左边由性质（4）也为 $0$。</p>`, why: R`<p>竖直的面在两种写法下都"不贡献 $z$ 方向的流量"。</p>` },
          { s: R`<p><b>一般情形</b>：沿 $\cos\gamma=0$ 的曲线以及各光滑片的交线，把 $\Sigma$ 分成有限片，使每片都属于以上三种情形之一（考研中遇到的曲面都能这样分），两边分别用可加性相加即可。</p>`, why: R`<p>证明的核心在情形一；分片只是把一般曲面化归为核心情形的标准手续。</p>` }
        ],
        remark: R`<ul>
<li>第一类积分 $\displaystyle\iint_\Sigma f\,dS$ 本身与侧无关；在关系式中，侧的信息完全由法向量 $\mathbf n$ 携带。换侧时 $\mathbf n$ 变号，两边同时变号，等式依然成立。</li>
<li><b>用途</b>：（a）被积表达式含抽象函数 $f(x,y,z)$ 时，化为 $dS$ 形式后各项按 $\cos\alpha:\cos\beta:\cos\gamma$ 组合，常能把 $f$ 消掉（例 3）；（b）$\Sigma$ 是平面时法向量为常向量，统一化为一种积分最方便；（c）题目以 $\displaystyle\iint_\Sigma(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,dS$ 的形式给出时，反过来看成第二类，便于用高斯公式（例 5）。</li>
<li><b>与曲线积分对照</b>：两类曲线积分的关系 $\displaystyle\int_L P\,dx+Q\,dy+R\,dz=\int_L(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,ds$ 中出现的是<b>切向量</b>的方向余弦；这里是<b>法向量</b>的方向余弦。曲线积分算"沿着走的功"，曲面积分算"穿过去的流量"。</li>
</ul>`
      },

      /* ───────── 9. 合一投影 ───────── */
      {
        kind: 'thm', title: '合一投影法（转换投影法）',
        statement: R`<p>设 $\Sigma:\ z=z(x,y),\ (x,y)\in D_{xy}$，$z(x,y)$ 有连续偏导数，$P,Q,R$ 在 $\Sigma$ 上连续，则 $$\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy=\pm\iint_{D_{xy}}\Big[P\cdot(-z_x)+Q\cdot(-z_y)+R\Big]_{z=z(x,y)}dx\,dy ,$$ 上侧取"$+$"，下侧取"$-$"。</p>
<p><b>记忆方式</b>：在 $\Sigma$ 上 $dy\,dz=-z_x\,dx\,dy$，$dz\,dx=-z_y\,dx\,dy$，被积表达式就是 $(P,Q,R)\cdot(-z_x,-z_y,1)\,dx\,dy$。</p>`,
        intuition: R`<p>三项本来要投影到三个不同的坐标面上。但三个带号投影的比例等于 $\cos\alpha:\cos\beta:\cos\gamma=(-z_x):(-z_y):1$，所以可以把它们全部"换算"成 $xOy$ 面上的投影，一次投影解决三项。</p>`,
        steps: [
          { s: R`<p>上侧的单位法向量为 $\mathbf n=\dfrac{(-z_x,-z_y,1)}{\sqrt{1+z_x^2+z_y^2}}$，即 $\cos\alpha=\dfrac{-z_x}{\sqrt{1+z_x^2+z_y^2}}$，$\cos\beta=\dfrac{-z_y}{\sqrt{1+z_x^2+z_y^2}}$，$\cos\gamma=\dfrac{1}{\sqrt{1+z_x^2+z_y^2}}$。</p>`, why: R`<p>曲面 $F(x,y,z)=z(x,y)-z=0$ 的法向量为 $(z_x,z_y,-1)$（见「多元微分的几何应用」），取第三分量为正的方向就是上侧。</p>` },
          { s: R`<p>由两类曲面积分的关系，左边 $=\displaystyle\iint_\Sigma\big(P\cos\alpha+Q\cos\beta+R\cos\gamma\big)\,dS$。</p>`, why: R`<p>先把"三个不同投影"的方向信息统一转换成方向余弦，三项就都在同一个 $dS$ 之下了。</p>` },
          { s: R`<p>用第一类曲面积分计算公式 $dS=\sqrt{1+z_x^2+z_y^2}\,dx\,dy$ 投影到 $D_{xy}$： $$\iint_{D_{xy}}\frac{-Pz_x-Qz_y+R}{\sqrt{1+z_x^2+z_y^2}}\sqrt{1+z_x^2+z_y^2}\,dx\,dy=\iint_{D_{xy}}\big[P(-z_x)+Q(-z_y)+R\big]dx\,dy ,$$ 其中 $P,Q,R$ 中的 $z$ 换成 $z(x,y)$。</p>`, why: R`<p>根号再一次与方向余弦的分母相消，留下的正是法向量 $(-z_x,-z_y,1)$。</p>` },
          { s: R`<p>下侧时 $\mathbf n$ 取相反方向，三个方向余弦同时变号，结果整体加一个负号。</p>`, why: R`<p>这与投影法"下侧取负"是一致的。</p>` }
        ],
        remark: R`<ul>
<li><b>适用条件</b>：$\Sigma$ 能写成单值显式 $z=z(x,y)$，且 $z$ 可偏导。若 $\Sigma$ 写成 $x=x(y,z)$ 更方便，同理有 $\displaystyle\pm\iint_{D_{yz}}\big[P+Q(-x_y)+R(-x_z)\big]dy\,dz$（前侧取正）。</li>
<li><b>易错</b>：不要漏代 $z=z(x,y)$，不要丢掉 $-z_x$ 的负号。记向量形式 $(P,Q,R)\cdot(-z_x,-z_y,1)$ 最不容易出错。</li>
<li>这个公式的本质是"两类关系 + 第一类计算公式"，不是新的原理。它也解释了为什么 $dy\,dz$ 项可以投到 $xOy$ 面：看似"投错了面"，其实已经用因子 $-z_x$ 修正过了。</li>
</ul>`
      },

      /* ───────── 10. 例 2、例 3 ───────── */
      {
        kind: 'example', title: '例 2、例 3：合一投影与两类转换',
        html: R`<p><b>例 2</b>　计算 $\displaystyle I=\iint_\Sigma(z^2+x)\,dy\,dz-z\,dx\,dy$，其中 $\Sigma$ 是旋转抛物面 $z=\dfrac12(x^2+y^2)$ 介于平面 $z=0$ 与 $z=2$ 之间部分的下侧。</p>
<p><b>怎么想</b>　有 $dy\,dz$ 和 $dx\,dy$ 两项。若分项投影，$dy\,dz$ 项要投到 $yOz$ 面，而抛物面在 $yOz$ 面上的投影前后重叠，需要分成 $x\ge0$ 与 $x\le0$ 两片并各自定号。$\Sigma$ 本身是 $z=z(x,y)$ 的显式形式，用合一投影一次解决。</p>
<p><b>解法一（合一投影）</b>　$z_x=x$，$z_y=y$，$D_{xy}:\ x^2+y^2\le4$，下侧取负号： $$I=-\iint_{D_{xy}}\Big[(z^2+x)(-x)+(-z)\Big]dx\,dy=\iint_{D_{xy}}\Big[(z^2+x)x+z\Big]dx\,dy ,\quad z=\tfrac12(x^2+y^2).$$ 其中 $\displaystyle\iint_{D_{xy}}xz^2\,dx\,dy=\iint_{D_{xy}}\frac{x(x^2+y^2)^2}{4}\,dx\,dy=0$：这已经是普通二重积分，被积函数关于 $x$ 为奇函数，$D_{xy}$ 关于 $y$ 轴对称，可以放心使用奇偶性。于是 $$I=\iint_{D_{xy}}\Big[x^2+\tfrac12(x^2+y^2)\Big]dx\,dy=\int_0^{2\pi}\!\!\int_0^2\Big(r^2\cos^2\theta+\tfrac12r^2\Big)r\,dr\,d\theta=4\pi+4\pi=8\pi .$$</p>
<p><b>解法二（分项投影，作对照）</b>　$-z\,dx\,dy$ 项：下侧取负，$\displaystyle\iint_\Sigma(-z)\,dx\,dy=-\iint_{D_{xy}}\Big(-\tfrac12(x^2+y^2)\Big)dx\,dy=4\pi$。</p>
<p>$(z^2+x)\,dy\,dz$ 项：把 $\Sigma$ 分成前片 $x=\sqrt{2z-y^2}$ 与后片 $x=-\sqrt{2z-y^2}$。下侧法向量平行于 $(x,y,-1)$，在前片（$x>0$）指向前方，是<b>前侧</b>取正；在后片指向后方，是<b>后侧</b>取负。两片都投影到 $D_{yz}=\{(y,z)\mid \tfrac12y^2\le z\le2\}$： $$\iint_{D_{yz}}\big(z^2+\sqrt{2z-y^2}\big)dy\,dz-\iint_{D_{yz}}\big(z^2-\sqrt{2z-y^2}\big)dy\,dz=2\int_0^2dz\int_{-\sqrt{2z}}^{\sqrt{2z}}\sqrt{2z-y^2}\,dy=2\int_0^2\pi z\,dz=4\pi ,$$ 其中内层积分是半径 $\sqrt{2z}$ 的半圆面积 $\pi z$。合计 $I=8\pi$，与解法一一致。对比可见：合一投影省掉了分片与两次定号。</p>
<p><b>例 3</b>　设 $f(x,y,z)$ 为连续函数，$\Sigma$ 是平面 $x-y+z=1$ 在第四卦限部分的上侧，求 $$I=\iint_\Sigma\big[f+x\big]dy\,dz+\big[2f+y\big]dz\,dx+\big[f+z\big]dx\,dy .$$</p>
<p><b>怎么想</b>　$f$ 是抽象函数，无法代入计算。但 $\Sigma$ 是平面，法向量是常向量；化为 $dS$ 形式后各项按固定比例组合，有希望把 $f$ 消掉。</p>
<p><b>解</b>　平面的法向量为 $(1,-1,1)$，上侧要求 $\cos\gamma>0$，故 $\mathbf n=\dfrac{1}{\sqrt3}(1,-1,1)$。由两类曲面积分的关系 $$I=\iint_\Sigma\frac{1}{\sqrt3}\Big[(f+x)-(2f+y)+(f+z)\Big]dS=\frac{1}{\sqrt3}\iint_\Sigma(x-y+z)\,dS=\frac{1}{\sqrt3}\iint_\Sigma dS ,$$ 最后一步用了"在 $\Sigma$ 上 $x-y+z=1$"。$\Sigma$ 是以 $(1,0,0)$、$(0,-1,0)$、$(0,0,1)$ 为顶点的三角形，它在 $xOy$ 面上的投影是两直角边都为 $1$ 的直角三角形，面积 $\tfrac12$；而 $z=1-x+y$，$dS=\sqrt{1+1+1}\,dx\,dy=\sqrt3\,dx\,dy$，所以 $\Sigma$ 的面积为 $\dfrac{\sqrt3}{2}$，$I=\dfrac{1}{\sqrt3}\cdot\dfrac{\sqrt3}{2}=\dfrac12$。</p>
<p><b>反思</b>　两个关键步骤都源于"被积函数只在曲面上取值"：化为 $dS$ 后用法向量把 $f$ 组合掉，再用平面方程 $x-y+z=1$ 化简。如果分项投影，$f$ 始终留在积分里，根本算不下去。</p>`
      },

      /* ───────── 11. 对称性 ───────── */
      {
        kind: 'thm', title: '第二类曲面积分的对称性',
        statement: R`<p>设有向曲面 $\Sigma$ 关于 $xOy$ 面对称：$\Sigma=\Sigma_1\cup\Sigma_2$，$\Sigma_1$ 位于 $z\ge0$ 的部分，$\Sigma_2$ 是 $\Sigma_1$ 关于 $xOy$ 面的镜像；并且<b>两片的侧也互为镜像</b>（$\Sigma_1$ 取上侧时 $\Sigma_2$ 取下侧，或反之——闭曲面取外侧或取内侧时正是这种情况）。$R$ 在 $\Sigma$ 上连续，则</p>
<ol>
<li>若 $R$ 关于 $z$ 为偶函数，即 $R(x,y,-z)=R(x,y,z)$，则 $\displaystyle\iint_\Sigma R\,dx\,dy=0$；</li>
<li>若 $R$ 关于 $z$ 为奇函数，即 $R(x,y,-z)=-R(x,y,z)$，则 $\displaystyle\iint_\Sigma R\,dx\,dy=2\iint_{\Sigma_1}R\,dx\,dy$。</li>
</ol>
<p><b>口诀</b>：对与 $dx\,dy$ 相对应的变量 $z$，<b>偶零奇倍</b>——恰好与第一类曲面积分的"奇零偶倍"相反。</p>`,
        intuition: R`<p>第一类：对称两片的 $dS$ 相同，$f$ 为奇函数时两片抵消。第二类：对称两片的带号投影一正一负，被积函数的奇偶性再带一个符号，"负负得正"——$R$ 为奇函数时两片同号而加倍，$R$ 为偶函数时两片异号而抵消。</p>`,
        steps: [
          { s: R`<p>设 $\Sigma_1:\ z=z(x,y)\ (\ge0),\ (x,y)\in D$，取上侧（取下侧时两片同时换侧，积分整体变号，结论不变）。则 $\Sigma_2:\ z=-z(x,y),\ (x,y)\in D$，取下侧。</p>`, why: R`<p>镜像就是 $(x,y,z)\mapsto(x,y,-z)$，它把法向量的 $z$ 分量变号，所以上侧的镜像是下侧。这里先设每片都是显式曲面，一般情形分片后逐片处理即可。</p>` },
          { s: R`<p>由投影法：$\displaystyle\iint_{\Sigma_1}R\,dx\,dy=\iint_DR\big(x,y,z(x,y)\big)dx\,dy$，$\displaystyle\iint_{\Sigma_2}R\,dx\,dy=-\iint_DR\big(x,y,-z(x,y)\big)dx\,dy$。</p>`, why: R`<p>一投二代三定号：$\Sigma_2$ 取下侧所以有负号，代入的是 $\Sigma_2$ 自己的方程 $z=-z(x,y)$。</p>` },
          { s: R`<p>相加得 $$\iint_\Sigma R\,dx\,dy=\iint_D\Big[R\big(x,y,z(x,y)\big)-R\big(x,y,-z(x,y)\big)\Big]dx\,dy .$$ $R$ 为偶函数时被积函数恒为 $0$，积分为 $0$；$R$ 为奇函数时被积函数等于 $2R\big(x,y,z(x,y)\big)$，积分为 $\displaystyle2\iint_DR\big(x,y,z(x,y)\big)dx\,dy=2\iint_{\Sigma_1}R\,dx\,dy$。</p>`, why: R`<p>两片化到同一个 $D$ 上之后，就是普通二重积分的线性运算。</p>` }
        ],
        remark: R`<ul>
<li><b>"侧互为镜像"不能少</b>。若题目分别给出两片且都取上侧（不是一张闭曲面的两部分），两片的投影同号，结论变为"奇零偶倍"。所以用对称性之前先问：对称的两小块，$dx\,dy$ 是同号还是异号？</li>
<li><b>关于其他坐标面的对称</b>：若 $\Sigma$ 关于 $yOz$ 面对称（$x\mapsto-x$）且侧互为镜像（如闭曲面外侧），镜像点处法向量为 $(-\cos\alpha,\cos\beta,\cos\gamma)$，$\cos\gamma$ 不变，$dx\,dy$ 同号。所以对 $\displaystyle\iint R\,dx\,dy$ 而言，$R$ 关于 $x$ 为奇函数时积分为 $0$，为偶函数时加倍——与第一类相同。总结：<b>与 $dx\,dy$ 对应的变量 $z$——偶零奇倍；其余变量 $x,y$——奇零偶倍</b>。$dy\,dz$ 项对 $x$、$dz\,dx$ 项对 $y$ 同理。</li>
<li><b>轮换对称</b>：若 $\Sigma$ 在轮换 $(x,y,z)\mapsto(y,z,x)$ 下不变，且侧也随之对应（如球面外侧、平面 $x+y+z=1$ 在第一卦限部分的上侧），则 $\displaystyle\iint_\Sigma f(x,y,z)\,dy\,dz=\iint_\Sigma f(y,z,x)\,dz\,dx=\iint_\Sigma f(z,x,y)\,dx\,dy$，例如球面外侧上 $\displaystyle\iint x^3dy\,dz=\iint y^3dz\,dx=\iint z^3dx\,dy$。理由：化为 $\displaystyle\iint f\cos\alpha\,dS$ 后，轮换是保距变换，把 $\Sigma$ 映成自身，把法向量的分量也相应轮换。</li>
<li>例 1 正是"奇倍"的情形：$xyz$ 关于 $z$ 为奇函数，结果是上半片的两倍而不是 $0$。</li>
</ul>`
      },

      /* ───────── 12. 高斯公式 ───────── */
      {
        kind: 'thm', title: '高斯公式',
        statement: R`<p>设空间有界闭区域 $\Omega$ 由分片光滑的闭曲面 $\Sigma$ 围成（$\Sigma$ 可以由几张闭曲面组成，例如两个同心球面之间的区域），函数 $P,Q,R$ 在 $\Omega$ 上具有一阶连续偏导数，则 $$\iiint_\Omega\Big(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\Big)dV=\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy ,$$ 其中 $\Sigma$ 取 $\Omega$ 的整个边界曲面的<b>外侧</b>（法向量指向 $\Omega$ 的外部）。用两类关系也可写成 $$\iiint_\Omega\Big(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\Big)dV=\iint_\Sigma\big(P\cos\alpha+Q\cos\beta+R\cos\gamma\big)dS ,$$ $(\cos\alpha,\cos\beta,\cos\gamma)$ 为 $\Sigma$ 的外法向量。</p>`,
        intuition: R`<p><b>小盒子推导</b>：在点 $(x,y,z)$ 处取棱长为 $\Delta x,\Delta y,\Delta z$ 的小长方体。从垂直于 $x$ 轴的两个面净流出的量约为 $\big[P(x+\Delta x,y,z)-P(x,y,z)\big]\Delta y\Delta z\approx\dfrac{\partial P}{\partial x}\Delta x\Delta y\Delta z$；三个方向加起来，净流出约为 $\Big(\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}\Big)\Delta V$。所以 $\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}$ 是"单位体积的净流出量"，即源的强度（散度）。</p>
<p>把 $\Omega$ 切成许多小盒子，相邻两盒的公共面上，一个盒子流出的正是另一个盒子流入的，互相抵消；全部加起来只剩下 $\Omega$ 的外表面——<b>内部抵消，边界留存</b>。这与牛顿—莱布尼茨公式 $\displaystyle\int_a^bf'(x)\,dx=f(b)-f(a)$、格林公式是同一个结构。</p>
<svg viewBox="0 0 420 280" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="s2arB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
<path d="M80 110 Q200 40 320 110 L320 170 Q200 210 80 170 Z" fill="currentColor" fill-opacity="0.08" stroke="none"/>
<path d="M80 110 Q200 40 320 110" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M80 170 Q200 210 320 170" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="80" y1="110" x2="80" y2="170" stroke="currentColor" stroke-width="2"/>
<line x1="320" y1="110" x2="320" y2="170" stroke="currentColor" stroke-width="2"/>
<line x1="200" y1="75" x2="200" y2="30" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arB)"/>
<line x1="200" y1="190" x2="200" y2="235" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arB)"/>
<line x1="80" y1="140" x2="42" y2="140" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arB)"/>
<line x1="320" y1="140" x2="358" y2="140" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arB)"/>
<line x1="150" y1="186" x2="150" y2="82" stroke="currentColor" stroke-dasharray="3 3" stroke-opacity="0.7"/>
<circle cx="150" cy="186" r="2.5" fill="currentColor"/>
<circle cx="150" cy="82" r="2.5" fill="currentColor"/>
<text x="120" y="78" font-size="12" fill="currentColor">z₂</text>
<text x="120" y="200" font-size="12" fill="currentColor">z₁</text>
<text x="212" y="40" font-size="13" fill="currentColor">Σ₂：z=z₂(x,y)，上侧</text>
<text x="212" y="232" font-size="13" fill="currentColor">Σ₁：z=z₁(x,y)，下侧</text>
<text x="330" y="128" font-size="13" fill="currentColor">Σ₃ 侧面</text>
<text x="206" y="145" font-size="15" fill="currentColor">Ω</text>
<line x1="80" y1="262" x2="320" y2="262" stroke="currentColor" stroke-width="3" stroke-opacity="0.6"/>
<line x1="80" y1="170" x2="80" y2="262" stroke="currentColor" stroke-dasharray="2 3" stroke-opacity="0.5"/>
<line x1="320" y1="170" x2="320" y2="262" stroke="currentColor" stroke-dasharray="2 3" stroke-opacity="0.5"/>
<text x="330" y="266" font-size="13" fill="currentColor">D<tspan font-size="10" dy="3">xy</tspan></text>
</svg>`,
        steps: [
          { s: R`<p>只需分别证明 $$\iiint_\Omega\frac{\partial R}{\partial z}dV=\iint_\Sigma R\,dx\,dy,\quad \iiint_\Omega\frac{\partial P}{\partial x}dV=\iint_\Sigma P\,dy\,dz,\quad \iiint_\Omega\frac{\partial Q}{\partial y}dV=\iint_\Sigma Q\,dz\,dx ,$$ 三式相加即可。下面证第一式。</p>`, why: R`<p>公式两边都是三项之和，而每一项只涉及一个坐标方向，可以各证各的。</p>` },
          { s: R`<p>先设 $\Omega$ 是"$xy$ 型"区域：$\Omega=\{(x,y,z)\mid z_1(x,y)\le z\le z_2(x,y),\ (x,y)\in D_{xy}\}$，即穿过 $\Omega$ 内部且平行于 $z$ 轴的直线与边界恰好交于两点。这时边界 $\Sigma$ 分成三部分（见图）：$\Sigma_1:\ z=z_1(x,y)$，取下侧；$\Sigma_2:\ z=z_2(x,y)$，取上侧；$\Sigma_3$：以 $D_{xy}$ 的边界为准线、母线平行于 $z$ 轴的柱面片，取外侧（它可能退化为没有）。</p>`, why: R`<p>这样设是为了让三重积分能用"先一后二"化成 $D_{xy}$ 上的二重积分，同时曲面积分能用投影法化成同一个 $D_{xy}$ 上的二重积分——两边落在同一个区域上才能比较。$\Sigma_1$ 的外侧朝下、$\Sigma_2$ 的外侧朝上，这就是"外侧"在各片上的具体含义。</p>` },
          { s: R`<p>左边：$\dfrac{\partial R}{\partial z}$ 连续，用先一后二法 $$\iiint_\Omega\frac{\partial R}{\partial z}dV=\iint_{D_{xy}}\Big[\int_{z_1(x,y)}^{z_2(x,y)}\frac{\partial R}{\partial z}dz\Big]dx\,dy=\iint_{D_{xy}}\Big[R\big(x,y,z_2(x,y)\big)-R\big(x,y,z_1(x,y)\big)\Big]dx\,dy .$$</p>`, why: R`<p>对固定的 $(x,y)$，$R(x,y,z)$ 是 $\dfrac{\partial R}{\partial z}$ 关于 $z$ 的一个原函数，内层积分直接用牛顿—莱布尼茨公式。这是整个高斯公式的"引擎"：导数的积分等于端点值之差。</p>` },
          { s: R`<p>右边：由投影法，$\displaystyle\iint_{\Sigma_2}R\,dx\,dy=\iint_{D_{xy}}R\big(x,y,z_2(x,y)\big)dx\,dy$（上侧取正），$\displaystyle\iint_{\Sigma_1}R\,dx\,dy=-\iint_{D_{xy}}R\big(x,y,z_1(x,y)\big)dx\,dy$（下侧取负）；$\Sigma_3$ 上 $\cos\gamma\equiv0$，由性质（4）$\displaystyle\iint_{\Sigma_3}R\,dx\,dy=0$。三者相加，恰好等于上一步的结果。</p>`, why: R`<p>下侧带来的负号，正好对应牛顿—莱布尼茨公式中"减去下端点的值"；侧面不参与，因为竖直的面对 $z$ 方向的流量没有贡献。</p>` },
          { s: R`<p>一般的 $\Omega$：用有限个辅助曲面把 $\Omega$ 切成若干个 $xy$ 型小区域 $\Omega_1,\dots,\Omega_m$，对每一块应用上面的结论并相加。左边由三重积分对区域的可加性得 $\displaystyle\iiint_\Omega\frac{\partial R}{\partial z}dV$。右边：每张辅助曲面恰好是相邻两块的公共边界，作为两块各自的"外侧"，方向恰好相反，由性质（3）两次积分互相抵消；剩下的正是 $\Omega$ 原来的边界曲面，取外侧。</p>`, why: R`<p>这是"内部抵消、边界留存"在证明中的体现，也说明了公式为什么必须统一取外侧——只有统一取外侧，公共面才会成对抵消。</p>` },
          { s: R`<p>同理，把 $\Omega$ 看成"$yz$ 型"区域 $x_1(y,z)\le x\le x_2(y,z)$（前侧取正、后侧取负），可证 $\displaystyle\iiint_\Omega\frac{\partial P}{\partial x}dV=\iint_\Sigma P\,dy\,dz$；看成"$zx$ 型"区域可证 $\displaystyle\iiint_\Omega\frac{\partial Q}{\partial y}dV=\iint_\Sigma Q\,dz\,dx$。三式相加即得高斯公式。</p>`, why: R`<p>三个坐标方向的地位完全对称，证明一字不改，只是换了投影的坐标面。</p>` }
        ],
        remark: R`<ul>
<li><b>三个条件缺一不可</b>：（a）$\Sigma$ 封闭——不封闭就没有"所围区域"，要先补面；（b）取外侧——取内侧时 $\displaystyle\iint_{\Sigma\text{内}}=-\iiint_\Omega(\cdots)\,dV$；（c）$P,Q,R$ 在<b>整个</b> $\Omega$（包括内部每一点）有一阶连续偏导数——内部有奇点时不能直接用（反例见"点源通量"一节），要挖去奇点。</li>
<li><b>求体积</b>：取 $(P,Q,R)=(x,0,0)$ 等，得 $\displaystyle V=\iint_\Sigma x\,dy\,dz=\iint_\Sigma y\,dz\,dx=\iint_\Sigma z\,dx\,dy=\frac13\iint_\Sigma x\,dy\,dz+y\,dz\,dx+z\,dx\,dy$（$\Sigma$ 取外侧）。</li>
<li><b>与格林公式</b>：平面上 $\displaystyle\oint_LP\,dy-Q\,dx=\iint_D\Big(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}\Big)dx\,dy$（$L$ 取正向）是格林公式的"通量形式"，也就是二维的高斯公式。</li>
<li><b>向量形式</b>：$\displaystyle\iiint_\Omega\operatorname{div}\mathbf A\,dV=\iint_\Sigma\mathbf A\cdot\mathbf n\,dS$；散度的定义与物理意义见「场论初步」。</li>
</ul>`
      },

      /* ───────── 13. 例 4 ───────── */
      {
        kind: 'example', title: '例 4：直接用高斯公式',
        html: R`<p><b>例 4</b>　计算 $\displaystyle I=\iint_\Sigma(x-y)\,dx\,dy+(y-z)x\,dy\,dz$，其中 $\Sigma$ 为柱面 $x^2+y^2=1$ 及平面 $z=0$、$z=3$ 所围空间闭区域 $\Omega$ 的整个边界曲面的外侧。</p>
<p><b>怎么想</b>　先查三个条件：闭曲面 ✓，外侧 ✓，$P=(y-z)x$、$Q=0$、$R=x-y$ 都是多项式，处处光滑 ✓。直接计算要分顶、底、侧三片，每片还要处理两项；用高斯公式只需一个三重积分。</p>
<p><b>解</b>　$\dfrac{\partial P}{\partial x}=y-z$，$\dfrac{\partial Q}{\partial y}=0$，$\dfrac{\partial R}{\partial z}=0$。由高斯公式 $$I=\iiint_\Omega(y-z)\,dV .$$ $\Omega$ 关于 $xOz$ 面对称，$y$ 是关于 $y$ 的奇函数，$\displaystyle\iiint_\Omega y\,dV=0$（这是三重积分，奇偶性照常使用）。又 $$\iiint_\Omega z\,dV=\iint_{x^2+y^2\le1}dx\,dy\int_0^3z\,dz=\pi\cdot\frac92=\frac{9\pi}{2},$$ 所以 $I=-\dfrac{9\pi}{2}$。</p>
<p><b>反思</b>　高斯公式把曲面积分变成三重积分时，被积函数要求一次偏导，往往从"二次"降为"一次"甚至常数——"求导降次"是高斯公式好用的根本原因。用完高斯公式之后，剩下的就是三重积分的计算功夫（对称性、柱坐标、球坐标、截面法）。</p>`
      },

      /* ───────── 14. 补面法 ───────── */
      {
        kind: 'method', title: '补面法：把不封闭的曲面补成封闭的',
        html: R`<p>考题中的曲面往往<b>不封闭</b>（半球面、锥面、抛物面的一部分），而被积表达式的散度却很简单。这时用补面法，四步走：</p>
<ol>
<li><b>补</b>：添加一块（或几块）简单曲面 $\Sigma_1$（通常是平面片），使 $\Sigma+\Sigma_1$ 封闭，围成区域 $\Omega$。</li>
<li><b>配侧</b>：$\Sigma_1$ 的侧要和 $\Sigma$ 的侧<b>配套</b>——两者合起来要么是 $\Omega$ 的外侧，要么是内侧。判断方法：看 $\Sigma$ 的侧指向 $\Omega$ 的外面还是里面，$\Sigma_1$ 就取同样指向（外或内）的那一侧。</li>
<li><b>高斯</b>：$\displaystyle\iint_\Sigma+\iint_{\Sigma_1}=\pm\iiint_\Omega\Big(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\Big)dV$（外侧取正，内侧取负）。</li>
<li><b>减</b>：$\displaystyle\iint_\Sigma=\pm\iiint_\Omega(\cdots)\,dV-\iint_{\Sigma_1}$。补面上的积分用投影法单独计算；补面平行于坐标面时，大多数项直接为 $0$（例如在平面 $z=c$ 上 $dy\,dz=dz\,dx=0$，只剩 $\displaystyle\iint R(x,y,c)\,dx\,dy$）。</li>
</ol>
<svg viewBox="0 0 420 240" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="s2arC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
<path d="M100 170 A110 110 0 0 1 320 170 Z" fill="currentColor" fill-opacity="0.07" stroke="none"/>
<path d="M100 170 A110 110 0 0 1 320 170" fill="none" stroke="currentColor" stroke-width="2"/>
<ellipse cx="210" cy="170" rx="110" ry="20" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-dasharray="5 3"/>
<line x1="210" y1="60" x2="210" y2="22" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arC)"/>
<line x1="288" y1="92" x2="316" y2="64" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arC)"/>
<line x1="132" y1="92" x2="104" y2="64" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arC)"/>
<line x1="210" y1="170" x2="210" y2="225" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arC)"/>
<text x="300" y="40" font-size="13" fill="currentColor">Σ：上半球面，上侧</text>
<text x="222" y="222" font-size="13" fill="currentColor">Σ₁：z=0，取下侧</text>
<text x="200" y="130" font-size="15" fill="currentColor">Ω</text>
<text x="10" y="232" font-size="12" fill="currentColor">Σ+Σ₁ 合起来是 Ω 的外侧</text>
</svg>
<p><b>为什么合法</b>　这只是"对曲面的可加性"加上"高斯公式"：$\Sigma+\Sigma_1$ 封闭，高斯公式成立；$\Sigma_1$ 上的积分可以单独算出；于是 $\Sigma$ 上的积分就是两者之差，没有任何近似。</p>
<p><b>补面怎么选</b></p>
<ul>
<li>让 $\Sigma_1$ 上的积分<b>好算</b>：优先选平行于坐标面的平面，使被积表达式在其上大量为零；</li>
<li>补完后 $P,Q,R$ 要在整个 $\Omega$ 上有一阶连续偏导数——<b>补面不能经过奇点，$\Omega$ 内也不能含奇点</b>；若做不到，先用曲面方程把奇点"代掉"（例 6），或挖洞；</li>
<li>补完后的三重积分要好算：$\Omega$ 最好是球、半球、柱、锥、旋转体等标准形状，便于用球坐标、柱坐标或截面法。</li>
</ul>
<p><b>看到什么想到补面法</b>：曲面不封闭 + 散度明显比原被积函数简单（常数、一次式、$x^2+y^2+z^2$ 之类）+ 曲面的"缺口"是一块平面区域。</p>`
      },

      /* ───────── 15. 例 5、例 6 ───────── */
      {
        kind: 'example', title: '例 5、例 6：补面法与"先代入、再高斯"',
        html: R`<p><b>例 5</b>　计算 $\displaystyle I=\iint_\Sigma\big(x^2\cos\alpha+y^2\cos\beta+z^2\cos\gamma\big)dS$，其中 $\Sigma$ 为锥面 $x^2+y^2=z^2$ 介于平面 $z=0$ 与 $z=h\ (h>0)$ 之间的部分，$(\cos\alpha,\cos\beta,\cos\gamma)$ 是 $\Sigma$ 在点 $(x,y,z)$ 处<b>下侧</b>的单位法向量。</p>
<p><b>怎么想</b>　题目给的是第一类形式，但带着方向余弦——用两类关系把它看成 $\displaystyle\iint_\Sigma x^2dy\,dz+y^2dz\,dx+z^2dx\,dy$（下侧）。散度 $2x+2y+2z$ 很简单，锥面不封闭，"缺口"是顶上的圆盘，补上它。</p>
<p><b>解</b>　补 $\Sigma_1:\ z=h,\ x^2+y^2\le h^2$，取上侧。锥体 $\Omega:\ \sqrt{x^2+y^2}\le z\le h$。锥面的下侧指向锥体外部（朝外下方），顶面的上侧也指向外部，所以 $\Sigma+\Sigma_1$ 是 $\Omega$ 的外侧。由高斯公式 $$\iint_{\Sigma+\Sigma_1}=\iiint_\Omega2(x+y+z)\,dV=2\iiint_\Omega z\,dV=2\int_0^hz\cdot\pi z^2\,dz=\frac{\pi h^4}{2},$$ 其中 $\Omega$ 关于 $yOz$、$xOz$ 面对称，$x,y$ 的积分为 $0$；$z$ 的积分用截面法：高度 $z$ 处的截面是半径为 $z$ 的圆，面积 $\pi z^2$。</p>
<p>$\Sigma_1$ 上 $\cos\alpha=\cos\beta=0$，$\cos\gamma=1$，$\displaystyle\iint_{\Sigma_1}=\iint_{x^2+y^2\le h^2}h^2\,dx\,dy=\pi h^4$。所以 $$I=\frac{\pi h^4}{2}-\pi h^4=-\frac{\pi h^4}{2}.$$</p>
<p><b>反思</b>　若直接计算，锥面上三项都要处理，而锥面向三个坐标面的投影都需要分片；补面后只剩一个截面法三重积分和一个常数积分。</p>
<p><b>例 6</b>　计算 $\displaystyle I=\iint_\Sigma\frac{x\,dy\,dz+y\,dz\,dx+z\,dx\,dy}{(x^2+y^2+z^2)^{3/2}}$，其中 $\Sigma$ 为上半球面 $z=\sqrt{R^2-x^2-y^2}$ 的上侧。</p>
<p><b>怎么想</b>　想补底面 $z=0$ 再用高斯公式，但被积函数在原点无定义，而原点恰在补面上——高斯公式的条件被破坏。突破口：被积函数只在 $\Sigma$ 上取值，而在 $\Sigma$ 上 $x^2+y^2+z^2=R^2$，<b>先代入</b>！</p>
<p><b>解</b>　在 $\Sigma$ 上分母等于 $R^3$，所以 $$I=\frac{1}{R^3}\iint_\Sigma x\,dy\,dz+y\,dz\,dx+z\,dx\,dy ,$$ 现在被积表达式处处光滑。补 $\Sigma_1:\ z=0\ (x^2+y^2\le R^2)$，取下侧，与 $\Sigma$ 合成上半球体 $\Omega$ 的外侧： $$\iint_{\Sigma+\Sigma_1}x\,dy\,dz+y\,dz\,dx+z\,dx\,dy=\iiint_\Omega3\,dV=3\cdot\frac23\pi R^3=2\pi R^3 .$$ $\Sigma_1$ 在平面 $z=0$ 上：$dy\,dz=dz\,dx=0$，而 $z\,dx\,dy$ 中 $z=0$，所以 $\displaystyle\iint_{\Sigma_1}=0$。于是 $I=\dfrac{1}{R^3}\cdot2\pi R^3=2\pi$。</p>
<p><b>检验</b>　在 $\Sigma$ 上外法向量 $\mathbf n=\dfrac1R(x,y,z)$，$\mathbf A\cdot\mathbf n=\dfrac{x^2+y^2+z^2}{R\cdot R^3}=\dfrac{1}{R^2}$，所以 $I=\dfrac{1}{R^2}\cdot2\pi R^2=2\pi$，一致。</p>
<p><b>反思</b>　"先代入、再高斯"的顺序不能颠倒。代入只能在曲面积分里做；一旦化成三重积分，$\Omega$ 内部的点不满足 $x^2+y^2+z^2=R^2$，就不能再代入了。</p>`
      },

      /* ───────── 16. 通量为零 ───────── */
      {
        kind: 'thm', title: '闭曲面积分为零的条件',
        statement: R`<p>设 $G$ 是空间区域（开区域），$P,Q,R$ 在 $G$ 内具有一阶连续偏导数。</p>
<ol>
<li>若对 $G$ 内<b>任意</b>一张分片光滑闭曲面 $\Sigma$ 都有 $\displaystyle\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy=0$，则在 $G$ 内 $\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}\equiv0$。</li>
<li>反之，若 $G$ 是<b>空间二维单连通区域</b>（$G$ 内任一闭曲面所围的区域都完全属于 $G$），且在 $G$ 内 $\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}\equiv0$，则对 $G$ 内任意分片光滑闭曲面 $\Sigma$，上述积分为 $0$。</li>
</ol>`,
        intuition: R`<p>"每一个闭曲面的净流出都为零"⇔"处处无源"。但"处处"只能看 $G$ 里的点——如果 $G$ 中间有个洞（例如去掉一个点），洞里可能藏着源，包住这个洞的闭曲面就会测到它。</p>`,
        steps: [
          { s: R`<p>证（1），用反证法。设存在 $M_0\in G$ 使 $\operatorname{div}(M_0)=c\ne0$（记 $\operatorname{div}=\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}$），不妨设 $c>0$（$c\lt0$ 时对 $-P,-Q,-R$ 讨论）。</p>`, why: R`<p>要证一个连续函数恒为零，标准做法是假设某点不为零，再利用连续性把"不为零"扩散到一个邻域上。</p>` },
          { s: R`<p>由于各偏导数连续，$\operatorname{div}$ 在 $G$ 内连续；又 $G$ 是开集，所以存在 $\delta>0$，使闭球 $B:\ |MM_0|\le\delta$ 含于 $G$，且在 $B$ 上 $\operatorname{div}>\dfrac c2$。</p>`, why: R`<p>连续函数的局部保号性。开集保证 $M_0$ 周围有一个完整的小球在 $G$ 里。</p>` },
          { s: R`<p>取 $\Sigma$ 为球面 $|MM_0|=\delta$ 的外侧。$P,Q,R$ 在 $B$ 上有一阶连续偏导数，高斯公式适用： $$\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy=\iiint_B\operatorname{div}\,dV\ge\frac c2\cdot\frac43\pi\delta^3>0 ,$$ 与假设"积分为 $0$"矛盾。所以 $\operatorname{div}\equiv0$。</p>`, why: R`<p>三重积分的比较性质：被积函数大于 $\dfrac c2$，积分就不小于 $\dfrac c2$ 乘体积。</p>` },
          { s: R`<p>证（2）：任取 $G$ 内的闭曲面 $\Sigma$，设它围成 $\Omega$。由二维单连通，$\Omega\subset G$，于是 $P,Q,R$ 在 $\Omega$ 上有一阶连续偏导数，高斯公式适用：取外侧时积分 $=\displaystyle\iiint_\Omega0\,dV=0$；取内侧时积分为 $-0=0$。</p>`, why: R`<p>"二维单连通"的作用正是保证 $\Omega$ 内没有坏点，使高斯公式可用。</p>` }
        ],
        remark: R`<ul>
<li>（2）中"二维单连通"不能去掉：$G=\mathbb R^3\setminus\{O\}$ 内场 $\dfrac{(x,y,z)}{r^3}$ 的散度为零，但包住原点的球面上积分为 $4\pi$（下一节）。$G$ 不是二维单连通的：球面在 $G$ 内，它所围的球体却含有不属于 $G$ 的原点。</li>
<li>类比：平面上由格林公式得"单连通区域内沿任意闭曲线积分为零 ⇔ $\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$"；空间曲线积分对应"旋度为零"（见「斯托克斯公式」）。本定理是曲面积分版本。</li>
<li><b>考法</b>：已知在某区域（如半空间 $x>0$）内对任意闭曲面积分为零，被积表达式含未知函数 $f(x)$，由（1）得散度为零，化为关于 $f$ 的微分方程，再由初始条件或极限条件定常数。</li>
</ul>`
      },

      /* ───────── 17. 点源通量 ───────── */
      {
        kind: 'thm', title: '点源通量与挖洞法',
        statement: R`<p>记 $r=\sqrt{x^2+y^2+z^2}$，$\Sigma$ 为<b>不经过原点</b>的分片光滑闭曲面，取外侧，$$I=\iint_\Sigma\frac{x\,dy\,dz+y\,dz\,dx+z\,dx\,dy}{r^3}.$$ 则：原点在 $\Sigma$ 所围区域的外部时，$I=0$；原点在 $\Sigma$ 所围区域的内部时，$I=4\pi$。</p>`,
        intuition: R`<p>场 $\dfrac{(x,y,z)}{r^3}$ 是位于原点的点电荷（点源）产生的场：只有原点一个源，其余各处无源。闭曲面没包住源时，流进多少就流出多少，净流量为 $0$；包住了源，不管曲面形状如何，测到的都是源的全部强度 $4\pi$——这就是物理中的高斯定律。</p>
<svg viewBox="0 0 420 260" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="s2arD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
<path d="M50 130 A160 100 0 1 0 370 130 A160 100 0 1 0 50 130 Z M174 130 A36 36 0 1 0 246 130 A36 36 0 1 0 174 130 Z" fill="currentColor" fill-opacity="0.1" fill-rule="evenodd" stroke="currentColor" stroke-width="1.5"/>
<circle cx="210" cy="130" r="2.5" fill="currentColor"/>
<text x="198" y="146" font-size="12" fill="currentColor">O</text>
<line x1="370" y1="130" x2="405" y2="130" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arD)"/>
<line x1="210" y1="30" x2="210" y2="6" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arD)"/>
<line x1="50" y1="130" x2="15" y2="130" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arD)"/>
<line x1="246" y1="130" x2="226" y2="130" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arD)"/>
<line x1="210" y1="94" x2="210" y2="114" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arD)"/>
<line x1="174" y1="130" x2="194" y2="130" stroke="currentColor" stroke-width="1.5" marker-end="url(#s2arD)"/>
<text x="292" y="58" font-size="13" fill="currentColor">Σ（外侧）</text>
<text x="160" y="196" font-size="13" fill="currentColor">Σε：r=ε，取内侧</text>
<text x="96" y="136" font-size="14" fill="currentColor">Ωε</text>
</svg>`,
        steps: [
          { s: R`<p>先算散度。$P=\dfrac{x}{r^3}$，由 $\dfrac{\partial r}{\partial x}=\dfrac xr$ 得 $$\frac{\partial P}{\partial x}=\frac{r^3-x\cdot3r^2\cdot\frac xr}{r^6}=\frac{r^2-3x^2}{r^5},$$ 同理 $\dfrac{\partial Q}{\partial y}=\dfrac{r^2-3y^2}{r^5}$，$\dfrac{\partial R}{\partial z}=\dfrac{r^2-3z^2}{r^5}$。相加得 $\dfrac{3r^2-3(x^2+y^2+z^2)}{r^5}=0\ (r\ne0)$。</p>`, why: R`<p>"闭曲面 + 奇点"的题，第一步永远是看散度。散度为零意味着奇点之外处处无源，曲面可以随意变形而积分不变。</p>` },
          { s: R`<p>原点在 $\Sigma$ 所围区域 $\Omega$ 的外部：$\Omega$ 是有界闭集且不含原点，$P,Q,R$ 在 $\Omega$ 上有一阶连续偏导数，由高斯公式 $I=\displaystyle\iiint_\Omega0\,dV=0$。</p>`, why: R`<p>三个条件全部满足，直接用。</p>` },
          { s: R`<p>原点在 $\Omega$ 内部：不能直接用高斯公式（$P,Q,R$ 在原点无定义）。取 $\varepsilon>0$ 充分小，使球 $r\le\varepsilon$ 含于 $\Omega$ 的内部。记 $\Sigma_\varepsilon$ 为球面 $r=\varepsilon$，$\Omega_\varepsilon$ 为 $\Omega$ 挖去开球 $r\lt\varepsilon$ 后的区域。$\Omega_\varepsilon$ 的边界由 $\Sigma$（外侧）与 $\Sigma_\varepsilon$（取指向原点的一侧，即小球的内侧）组成，这正是 $\Omega_\varepsilon$ 的外侧。</p>`, why: R`<p>把唯一的坏点挖掉，剩下的区域上高斯公式的条件全部满足。注意"外侧"是相对于 $\Omega_\varepsilon$ 而言的：对内边界 $\Sigma_\varepsilon$ 来说，指向 $\Omega_\varepsilon$ 外部就是指向洞里。原点是 $\Omega$ 的内点，所以这样的 $\varepsilon$ 一定存在。</p>` },
          { s: R`<p>对 $\Omega_\varepsilon$ 用高斯公式：$\displaystyle\iint_\Sigma+\iint_{\Sigma_\varepsilon\text{内侧}}=\iiint_{\Omega_\varepsilon}0\,dV=0$，所以 $$I=-\iint_{\Sigma_\varepsilon\text{内侧}}=\iint_{\Sigma_\varepsilon\text{外侧}}\frac{x\,dy\,dz+y\,dz\,dx+z\,dx\,dy}{r^3}.$$</p>`, why: R`<p>反侧变号。结论是：只要包住原点，$I$ 与 $\Sigma$ 的形状无关，就等于小球面上的积分——"大曲面化为小球面"。</p>` },
          { s: R`<p>在 $\Sigma_\varepsilon$ 上 $r=\varepsilon$，先代入：$$\iint_{\Sigma_\varepsilon\text{外侧}}\frac{x\,dy\,dz+y\,dz\,dx+z\,dx\,dy}{r^3}=\frac{1}{\varepsilon^3}\iint_{\Sigma_\varepsilon\text{外侧}}x\,dy\,dz+y\,dz\,dx+z\,dx\,dy=\frac{1}{\varepsilon^3}\iiint_{r\le\varepsilon}3\,dV=\frac{1}{\varepsilon^3}\cdot3\cdot\frac43\pi\varepsilon^3=4\pi .$$</p>`, why: R`<p>曲面积分的被积函数只在曲面上取值，可以用 $r=\varepsilon$ 化简；化简后的场 $(x,y,z)$ 在整个小球上光滑，于是可以再用一次高斯公式。</p>` }
        ],
        remark: R`<ul>
<li><b>挖的形状要让分母变成常数</b>。若分母是 $(ax^2+by^2+cz^2)^{3/2}\ (a,b,c>0)$，可以验证场 $\dfrac{(x,y,z)}{(ax^2+by^2+cz^2)^{3/2}}$ 的散度也为零（与第一步同样计算）。此时挖去小椭球面 $ax^2+by^2+cz^2=\varepsilon^2$，分母在其上为常数 $\varepsilon^3$；该椭球的半轴为 $\dfrac{\varepsilon}{\sqrt a},\dfrac{\varepsilon}{\sqrt b},\dfrac{\varepsilon}{\sqrt c}$，体积为 $\dfrac43\pi\dfrac{\varepsilon^3}{\sqrt{abc}}$，结果为 $\dfrac{1}{\varepsilon^3}\cdot3\cdot\dfrac43\pi\dfrac{\varepsilon^3}{\sqrt{abc}}=\dfrac{4\pi}{\sqrt{abc}}$。</li>
<li>原点在 $\Sigma$ 上时，积分是反常积分，超出考研范围。</li>
<li>本定理说明"散度为零"推不出"闭曲面积分为零"，关键在区域是否二维单连通（见上一节）。它和平面上 $\displaystyle\oint_L\frac{x\,dy-y\,dx}{x^2+y^2}=2\pi$（$L$ 为包围原点的正向闭曲线）是同一类现象。</li>
</ul>`
      },

      /* ───────── 18. 例 7 ───────── */
      {
        kind: 'example', title: '例 7：条件不满足时会怎样——奇点与挖洞',
        html: R`<p><b>例 7</b>　计算 $\displaystyle I=\iint_\Sigma\frac{x\,dy\,dz+y\,dz\,dx+z\,dx\,dy}{(x^2+y^2+z^2)^{3/2}}$，其中 $\Sigma$ 为椭球面 $\dfrac{x^2}{4}+\dfrac{y^2}{9}+z^2=1$ 的外侧。</p>
<p><b>错误做法</b>　"散度为零，由高斯公式 $I=0$。"错！原点在椭球内部，被积函数在原点无定义，高斯公式的条件"$P,Q,R$ 在 $\Omega$ 上有一阶连续偏导数"不满足。</p>
<p><b>这个错误真的会导致错误答案吗？</b>　把曲面换成单位球面 $S$（外侧）直接算：外法向量 $\mathbf n=(x,y,z)$，在 $S$ 上 $\mathbf A\cdot\mathbf n=\dfrac{x^2+y^2+z^2}{1}=1$，所以 $\displaystyle\iint_S=\iint_S1\,dS=4\pi\ne0$。可见条件一旦不满足，结论确实会错。</p>
<p><b>正确做法</b>　椭球面上 $x^2+y^2+z^2$ 不是常数，不能直接代入，所以挖洞。椭球最短的半轴为 $1$，取 $0\lt\varepsilon\lt1$，小球面 $\Sigma_\varepsilon:\ x^2+y^2+z^2=\varepsilon^2$ 位于椭球内部，取内侧。在 $\Sigma$ 与 $\Sigma_\varepsilon$ 之间的区域上散度为零且被积函数光滑，由上一节的推导 $$I=\iint_{\Sigma_\varepsilon\text{外侧}}=\frac{1}{\varepsilon^3}\iint_{\Sigma_\varepsilon\text{外侧}}x\,dy\,dz+y\,dz\,dx+z\,dx\,dy=\frac{1}{\varepsilon^3}\cdot3\cdot\frac43\pi\varepsilon^3=4\pi .$$</p>
<p><b>为什么挖球面</b>　分母是 $x^2+y^2+z^2$，挖球面才能让它在小曲面上成为常数。若题目分母换成 $(x^2+2y^2+3z^2)^{3/2}$，就挖小椭球面 $x^2+2y^2+3z^2=\varepsilon^2$，答案为 $\dfrac{4\pi}{\sqrt6}$。</p>
<p><b>对照</b>　若 $\Sigma$ 换成不包含原点的闭曲面，例如球面 $(x-3)^2+y^2+z^2=1$ 的外侧，原点在其外部，三个条件都满足，直接由高斯公式得 $I=0$。<b>同一个被积表达式，答案取决于曲面是否包住奇点。</b></p>`
      },

      /* ───────── 19. 误区 ───────── */
      {
        kind: 'pitfall', title: '常见误区',
        html: R`<ul>
<li><b>误区 1：把 $dx\,dy$ 当成面积。</b>$\displaystyle\iint_\Sigma dx\,dy$ 既不是 $\Sigma$ 的面积，也不一定是投影面积——它带符号。例如任意闭曲面上 $\displaystyle\iint_\Sigma dx\,dy=0$（由高斯公式，$R\equiv1$ 的散度为 $0$）。避免方法：时刻记住"第二类 = 带号投影"，计算前先问"这一片取的是哪一侧"。</li>
<li><b>误区 2：照搬第一类的对称性。</b>例 1 中 $xyz$ 关于 $z$ 是奇函数，但 $\displaystyle\iint_\Sigma xyz\,dx\,dy\ne0$。正确规则（侧互为镜像时）：与 $dx\,dy$ 对应的变量 $z$——偶零奇倍；其余变量——奇零偶倍。最稳妥的做法：对称两片各自"一投二代三定号"写出来再比较。</li>
<li><b>误区 3：投影投错了面。</b>分项投影时，$dy\,dz$ 项必须投到 $yOz$ 面、代入 $x=x(y,z)$；不能拿 $xOy$ 面上的区域去算 $dy\,dz$ 项——除非使用合一投影公式，乘上因子 $-z_x$。</li>
<li><b>误区 4：用高斯公式不检查条件。</b>不封闭——补面；取内侧——加负号；内部有奇点（分母为零等）——挖洞或先代入。特别注意补面法中补上的平面不能经过奇点（例 6 中原点在补面上，必须先代入曲面方程）。</li>
<li><b>误区 5：补面的侧取错，或忘记减去补面上的积分。</b>$\Sigma$ 与 $\Sigma_1$ 合起来必须是 $\Omega$ 的统一外侧（或统一内侧）。上半球面取上侧时，底面要取<b>下侧</b>，而不是"和 $\Sigma$ 一样取上侧"。</li>
<li><b>误区 6：在三重积分里代入曲面方程。</b>"用曲面方程化简"只能在曲面积分阶段进行。例如球面 $r=a$ 外侧上的 $\displaystyle\iint\frac{x\,dy\,dz+y\,dz\,dx+z\,dx\,dy}{r^3}$，先代入 $r=a$ 再用高斯公式得 $\dfrac{1}{a^3}\cdot3\cdot\dfrac43\pi a^3=4\pi$，正确；若先用高斯公式化成三重积分再把 $r$ 换成 $a$，就错了——那时积分区域是整个球体，内部各点 $r\ne a$，而且原点是奇点，高斯公式本身也不能用。</li>
<li><b>误区 7：竖直柱面上所有项都为零。</b>母线平行于 $z$ 轴的柱面上只有 $dx\,dy$ 项为零，$dy\,dz$、$dz\,dx$ 项一般不为零（见自测第 4 题）。</li>
<li><b>误区 8：法向量取错方向。</b>用两类关系或合一投影时，$(-z_x,-z_y,1)$ 是上侧方向，下侧要整体变号；闭曲面要按外侧或内侧确定，例如球面外侧 $\mathbf n=\dfrac1a(x,y,z)$，在下半球面上它是朝下的，不能一律取"$z$ 分量为正"。</li>
<li><b>误区 9：以为"散度为零 ⇒ 任何闭曲面积分为零"。</b>需要区域二维单连通（或者闭曲面所围区域内没有奇点）。$\dfrac{(x,y,z)}{r^3}$ 就是反例。</li>
</ul>`
      },

      /* ───────── 20. 方法 ───────── */
      {
        kind: 'method', title: '题型识别：看到什么，想到什么',
        html: R`<table>
<thead><tr><th>看到</th><th>想到</th><th>注意</th></tr></thead>
<tbody>
<tr><td>闭曲面，$P,Q,R$ 在内部处处光滑</td><td>直接用高斯公式</td><td>内侧加负号</td></tr>
<tr><td>闭曲面，被积函数的分母在内部某点为零</td><td>先算散度；曲面本身使分母为常数（如球面）→ 先代入再高斯；否则散度为零时挖小球面或小椭球面</td><td>挖去的面相对于剩余区域取"外侧"，即指向洞里</td></tr>
<tr><td>不封闭曲面，散度简单</td><td>补面 + 高斯，减去补面上的积分</td><td>补面的侧要配套；补面不经过奇点</td></tr>
<tr><td>不封闭，$z=z(x,y)$ 显式，投影区域简单</td><td>合一投影 $\displaystyle\pm\iint_{D}(P,Q,R)\cdot(-z_x,-z_y,1)\,dx\,dy$</td><td>下侧取负；代入 $z=z(x,y)$</td></tr>
<tr><td>只有一项（如只有 $dx\,dy$）</td><td>一投二代三定号</td><td>投影重叠时先分片</td></tr>
<tr><td>被积函数含抽象函数 $f$，或曲面是平面</td><td>两类关系化为 $\displaystyle\iint\mathbf A\cdot\mathbf n\,dS$，让 $f$ 抵消，再用曲面方程化简</td><td>$\mathbf n$ 的方向要与侧一致</td></tr>
<tr><td>题目给 $\displaystyle\iint(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,dS$</td><td>反过来看成第二类，再补面 / 高斯</td><td>弄清 $\cos$ 是哪一侧的法向量</td></tr>
<tr><td>被积函数在曲面上可化简（如 $x^2+y^2+z^2=a^2$）</td><td>先代入曲面方程</td><td>只在曲面积分里代入</td></tr>
<tr><td>曲面关于坐标面对称</td><td>先用对称性砍项</td><td>对 $z$："偶零奇倍"；对 $x,y$："奇零偶倍"（以 $dx\,dy$ 项为例）</td></tr>
<tr><td>"对区域内任意闭曲面积分为零"</td><td>散度 $\equiv0$ → 列出关于未知函数的方程</td><td>由散度为零反推积分为零，需要二维单连通</td></tr>
</tbody>
</table>
<p><b>一般的决策顺序</b></p>
<ol>
<li><b>化简</b>：能用曲面方程代入的先代入；能用对称性砍掉的先砍掉；竖直面上的 $dx\,dy$、水平面上的 $dy\,dz,dz\,dx$ 直接为零。</li>
<li><b>判封闭</b>：封闭 → 查奇点 → 高斯或挖洞；不封闭 → 看散度是否简单、缺口是否是平面 → 补面法。</li>
<li><b>否则直接算</b>：显式曲面用合一投影；单项用分项投影；平面或含抽象函数用两类转换。</li>
</ol>
<p><b>口诀</b>：闭面高斯查奇点，开面补面再减掉；一投二代三定号，合一投影省分片；抽象函数平面上，两类转换靠法向；曲面方程先代入，三重积分不能代。</p>`
      },

      /* ───────── 21. 对照表 ───────── */
      {
        kind: 'text', title: '两类曲面积分对照',
        html: R`<table>
<thead><tr><th>项目</th><th>第一类 $\displaystyle\iint_\Sigma f\,dS$</th><th>第二类 $\displaystyle\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy$</th></tr></thead>
<tbody>
<tr><td>物理背景</td><td>曲面的质量</td><td>流过曲面的流量（通量）</td></tr>
<tr><td>和式中的"面积"</td><td>$\Delta S_i>0$</td><td>带号投影 $(\Delta S_i)_{xy}$，可正可负</td></tr>
<tr><td>与侧的关系</td><td>与侧无关</td><td>换侧变号</td></tr>
<tr><td>计算</td><td>$dS=\sqrt{1+z_x^2+z_y^2}\,dx\,dy$</td><td>一投二代三定号；合一投影</td></tr>
<tr><td>对称性（关于 $xOy$ 面）</td><td>$f$ 关于 $z$：奇零偶倍</td><td>$R$ 关于 $z$：偶零奇倍（侧互为镜像）</td></tr>
<tr><td>互相转化</td><td colspan="2">$\displaystyle\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy=\iint_\Sigma(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,dS$</td></tr>
<tr><td>与重积分的联系</td><td>—</td><td>高斯公式（闭曲面 ↔ 三重积分）</td></tr>
</tbody>
</table>`
      },

      /* ───────── 22. 考法 ───────── */
      {
        kind: 'exam', title: '数学一怎么考',
        html: R`<p>多元函数积分学是数学一独有的重点，第二类曲面积分与高斯公式是其中出现频率最高的考点之一，常以 10 分左右的解答题出现，也会在选择题、填空题中考查对称性、两类关系和高斯公式的直接应用。</p>
<p><b>常见题型</b></p>
<ol>
<li><b>补面 + 高斯（最高频）</b>：曲面是半球面、锥面、抛物面或旋转曲面的一部分。有时要先由"曲线绕坐标轴旋转"求出旋转曲面方程；补面上的积分用投影法；高斯之后的三重积分用球坐标、柱坐标或截面法（先二后一）。</li>
<li><b>闭曲面 + 奇点</b>：分母形如 $(x^2+y^2+z^2)^{3/2}$ 或 $(ax^2+by^2+cz^2)^{3/2}$。先判断原点在不在曲面内，再决定是直接用高斯、先代入还是挖洞。</li>
<li><b>先代入曲面方程再高斯</b>：被积函数在曲面上可化简，化简后再补面或直接用高斯。</li>
<li><b>直接投影 / 合一投影</b>：曲面是显式的、只有一两项，或者散度并不简单时。常与对称性结合。</li>
<li><b>两类曲面积分的转换</b>：曲面是平面、被积函数含抽象函数，或题目以方向余弦的形式给出。选择题也常问"下列关系式哪个正确"。</li>
<li><b>与微分方程综合</b>：已知在某区域内对任意闭曲面积分为零，推出散度为零，解出未知函数。</li>
<li><b>与其他考点综合</b>：与斯托克斯公式（曲线积分化为曲面积分后再计算）、物理应用（求流体流过曲面的流量）、三重积分的计算技巧综合。</li>
</ol>
<p><b>设问方式</b>："计算曲面积分 $I=\cdots$，其中 $\Sigma$ 为……的上侧（外侧）"；"求向量场 $\mathbf A$ 穿过曲面 $\Sigma$ 流向指定侧的通量"；选择题中比较几个曲面积分、判断哪个为零。</p>
<p><b>得分要点</b>：侧的判断（尤其是补面的侧）、高斯公式条件的检查（封闭、外侧、无奇点）、补面上积分的计算、三重积分的计算。很多同学会用高斯公式，却在补面定侧或三重积分上丢分，所以三重积分的球坐标、柱坐标与截面法必须练熟。</p>`
      },

      /* ───────── 23. 自测 ───────── */
      {
        kind: 'check', title: '自测',
        items: [
          { q: R`<p>判断对错并说明理由：$\displaystyle\iint_\Sigma dx\,dy$ 等于 $\Sigma$ 在 $xOy$ 面上投影区域的面积。</p>`, a: R`<p><b>错。</b>$dx\,dy$ 是带号投影。例如单位球面外侧：上半球面贡献 $+\pi$，下半球面贡献 $-\pi$，总和为 $0$；平面 $z=0$ 上单位圆盘取下侧，结果是 $-\pi$。只有当 $\Sigma$ 是单值显式曲面 $z=z(x,y)$ 且取上侧时，它才等于投影面积。</p>` },
          { q: R`<p>设 $\Sigma$ 为球面 $x^2+y^2+z^2=a^2$ 的外侧，则 $\displaystyle\iint_\Sigma z\,dx\,dy=$</p>`, options: [R`<p>$0$</p>`, R`<p>$\dfrac43\pi a^3$</p>`, R`<p>$4\pi a^2$</p>`, R`<p>$\dfrac23\pi a^3$</p>`], correct: 1, explain: R`<p>高斯公式：$R=z$，$\dfrac{\partial R}{\partial z}=1$，积分等于球的体积 $\dfrac43\pi a^3$。也可用对称性：$z$ 关于 $z$ 为奇函数，两片侧互为镜像，"奇倍"：$2\displaystyle\iint_{x^2+y^2\le a^2}\sqrt{a^2-x^2-y^2}\,dx\,dy=2\cdot\frac23\pi a^3$。选 $0$ 是照搬了第一类的对称性。</p>` },
          { q: R`<p>设 $\Sigma$ 为平面 $z=3$ 上 $x^2+y^2\le1$ 部分的下侧，求 $\displaystyle\iint_\Sigma(x^2+z)\,dx\,dy$。</p>`, a: R`<p>一投：$D:\ x^2+y^2\le1$；二代：$z=3$；三定号：下侧取负。结果为 $-\displaystyle\iint_D(x^2+3)\,dx\,dy=-\Big(\frac{\pi}{4}+3\pi\Big)=-\frac{13\pi}{4}$，其中 $\displaystyle\iint_Dx^2\,dx\,dy=\frac12\iint_D(x^2+y^2)\,dx\,dy=\frac12\cdot\frac{\pi}{2}=\frac{\pi}{4}$。</p>` },
          { q: R`<p>$\Sigma$ 为圆柱面 $x^2+y^2=1$ 介于 $z=0$ 与 $z=1$ 之间的部分，取外侧。$\displaystyle\iint_\Sigma z\,dx\,dy$ 与 $\displaystyle\iint_\Sigma x\,dy\,dz$ 各等于多少？</p>`, a: R`<p>柱面母线平行于 $z$ 轴，$\cos\gamma\equiv0$，所以 $\displaystyle\iint_\Sigma z\,dx\,dy=0$。但 $\cos\alpha=x\ne0$，由两类关系 $\displaystyle\iint_\Sigma x\,dy\,dz=\iint_\Sigma x\cdot x\,dS=\iint_\Sigma x^2\,dS=\frac12\iint_\Sigma(x^2+y^2)\,dS=\frac12\cdot2\pi=\pi$（由对称性 $\displaystyle\iint x^2dS=\iint y^2dS$，在 $\Sigma$ 上 $x^2+y^2=1$，侧面积为 $2\pi$）。竖直柱面上只有 $dx\,dy$ 项为零。</p>` },
          { q: R`<p>判断对错：$\Sigma$ 为单位球面外侧，因为 $\dfrac{(x,y,z)}{r^3}$（$r=\sqrt{x^2+y^2+z^2}$）的散度为零，由高斯公式 $\displaystyle\iint_\Sigma\frac{x\,dy\,dz+y\,dz\,dx+z\,dx\,dy}{r^3}=0$。</p>`, a: R`<p><b>错。</b>被积函数在原点无定义，而原点在球内，高斯公式的条件不满足。正确做法是先代入 $r=1$：积分 $=\displaystyle\iint_\Sigma x\,dy\,dz+y\,dz\,dx+z\,dx\,dy=\iiint_{r\le1}3\,dV=4\pi$。</p>` },
          { q: R`<p>设闭曲面 $\Sigma$ 取外侧，所围区域 $\Omega$ 的体积为 $V$，下列等于 $V$ 的是</p>`, options: [R`<p>$\displaystyle\iint_\Sigma x\,dy\,dz$</p>`, R`<p>$\displaystyle\iint_\Sigma z\,dx\,dy$</p>`, R`<p>$\displaystyle\frac13\iint_\Sigma x\,dy\,dz+y\,dz\,dx+z\,dx\,dy$</p>`, R`<p>以上都对</p>`], correct: 3, explain: R`<p>由高斯公式，三个积分分别等于 $\displaystyle\iiint_\Omega1\,dV$、$\displaystyle\iiint_\Omega1\,dV$、$\displaystyle\frac13\iiint_\Omega3\,dV$，都是 $V$。</p>` },
          { q: R`<p>$\Sigma$ 为上半球面 $z=\sqrt{1-x^2-y^2}$ 的上侧，用两种方法求 $\displaystyle I=\iint_\Sigma x\,dy\,dz+y\,dz\,dx+z\,dx\,dy$。</p>`, a: R`<p><b>方法一（补面）</b>：补 $z=0$ 的单位圆盘取下侧，合成上半球体的外侧，$\displaystyle\iiint3\,dV=3\cdot\frac23\pi=2\pi$；圆盘上 $dy\,dz=dz\,dx=0$ 且 $z=0$，积分为 $0$，故 $I=2\pi$。<b>方法二（两类关系）</b>：外法向量 $\mathbf n=(x,y,z)$，$\mathbf A\cdot\mathbf n=x^2+y^2+z^2=1$，$I=\displaystyle\iint_\Sigma dS=2\pi$。</p>` },
          { q: R`<p>判断对错：$\Sigma$ 是关于 $xOy$ 面对称的闭曲面，取外侧，则 $\displaystyle\iint_\Sigma z^2\,dx\,dy=0$。</p>`, a: R`<p><b>对。</b>闭曲面外侧时，关于 $xOy$ 面对称的两片侧互为镜像；$z^2$ 关于 $z$ 为偶函数，"偶零"。也可用高斯公式验证：积分等于 $\displaystyle\iiint_\Omega2z\,dV$，$\Omega$ 关于 $xOy$ 面对称，$z$ 为奇函数，结果为 $0$。</p>` },
          { q: R`<p>$\Sigma$ 为平面 $x+y+z=1$ 在第一卦限部分的<b>下侧</b>，$D$ 为它在 $xOy$ 面上的投影，则 $\displaystyle\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy=$</p>`, options: [R`<p>$\displaystyle\frac{1}{\sqrt3}\iint_\Sigma(P+Q+R)\,dS$</p>`, R`<p>$\displaystyle-\frac{1}{\sqrt3}\iint_\Sigma(P+Q+R)\,dS$</p>`, R`<p>$\displaystyle-\iint_\Sigma(P+Q+R)\,dS$</p>`, R`<p>$\displaystyle\iint_D(P+Q+R)\big|_{z=1-x-y}\,dx\,dy$</p>`], correct: 1, explain: R`<p>下侧单位法向量为 $-\dfrac{1}{\sqrt3}(1,1,1)$，由两类关系得 B。也可用合一投影：$z_x=z_y=-1$，下侧取负，结果为 $-\displaystyle\iint_D(P+Q+R)\big|_{z=1-x-y}dx\,dy$，D 选项漏掉了负号；C 选项漏掉了因子 $\dfrac{1}{\sqrt3}$。</p>` },
          { q: R`<p>判断对错：若在 $G=\mathbb R^3\setminus\{O\}$ 内处处有 $\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}=0$，则对 $G$ 内任意闭曲面 $\Sigma$，$\displaystyle\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy=0$。</p>`, a: R`<p><b>错。</b>$G$ 不是二维单连通的：包住原点的球面在 $G$ 内，它所围的球体却含有不属于 $G$ 的原点。反例是 $(P,Q,R)=\dfrac{(x,y,z)}{r^3}$，包住原点的闭曲面上积分为 $4\pi$。对于<b>不</b>包住原点的闭曲面，结论才成立。</p>` }
        ]
      }
    ]
  };
});
