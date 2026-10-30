registerLesson(function (R) {
  return {
    id: 'lim.compute', ch: 'lim', title: '未定式极限的计算',
    summary: R`七种未定式的共同点是"四则运算法则失效"，必须用等价代换、洛必达、泰勒展开三件工具把"快慢之争"算清楚；幂型未定式一律先写成 $\mathrm e^{v\ln u}$，$\infty-\infty$ 先通分或有理化，已知极限反求参数的本质是"配平阶数"。`,
    prereq: ['lim.inf', 'lim.rules', 'diff.mvt', 'diff.taylor'],
    sections: [
      {
        kind: 'why', title: '为什么会有"未定式"：四则运算法则失效的地方',
        html: R`<p>学完极限的四则运算法则（见 lim.rules）之后，很多同学会产生一种错觉：求极限就是"把 $x$ 代进去"。确实，对于连续函数，$\lim_{x\to x_0}f(x)=f(x_0)$，代入就完了。可是考研几乎从不考这种题，它考的全是"<b>代进去算不出来</b>"的情形。</p>
<p>看最简单的三个例子，它们在 $x\to0$ 时分子、分母都趋于 $0$：</p>
$$\lim_{x\to0}\frac{x}{x}=1,\qquad \lim_{x\to0}\frac{x^2}{x}=0,\qquad \lim_{x\to0}\frac{x}{x^2}=\infty .$$
<p>三个式子"长得一样"——都是"$0$ 比 $0$"——结果却分别是 $1$、$0$、$\infty$。再加一个 $\lim_{x\to0}\dfrac{3x}{x}=3$，可以看出"$0$ 比 $0$"能等于任何数。这说明：<b>光知道分子、分母都趋于 $0$，不足以决定商的极限</b>。商的极限取决于分子、分母"趋于 $0$ 的快慢之比"，而"快慢"这个信息，在"$\to0$"这三个字里是没有的。</p>
<svg viewBox="0 0 420 250" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="220" x2="410" y2="220" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="230" x2="40" y2="15" stroke="currentColor" stroke-width="1"/>
  <polyline points="40,220 58,220 76,218 94,216 112,212 130,208 148,202 166,196 184,188 202,180 220,170 238,160 256,148 274,136 292,122 310,108 328,92 346,76 364,58 382,40 400,20" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <line x1="40" y1="220" x2="400" y2="20" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6,4"/>
  <polyline points="40,220 58,175 76,157 94,143 112,131 130,120 148,110 166,102 184,94 202,86 220,79 238,72 256,65 274,59 292,53 310,47 328,41 346,36 364,30 382,25 400,20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2,3"/>
  <text x="300" y="150" font-size="13" fill="currentColor">y = x²（最快）</text>
  <text x="250" y="65" font-size="13" fill="currentColor">y = x（虚线）</text>
  <text x="90" y="100" font-size="13" fill="currentColor">y = √x（最慢）</text>
  <text x="400" y="238" font-size="12" fill="currentColor">x</text>
  <text x="25" y="225" font-size="12" fill="currentColor">O</text>
</svg>
<p>图中三条曲线在 $x\to0^+$ 时都趋于 $0$，但 $x^2$ 跑得最快、$\sqrt x$ 最慢。$\dfrac{x^2}{x}$ 是"快的比慢的"，所以趋于 $0$；$\dfrac{x}{x^2}$ 是"慢的比快的"，所以趋于 $\infty$。<b>未定式极限的计算，本质上就是把这种"快慢之比"精确地算出来</b>。</p>
<p>同样的现象还出现在 $\dfrac{\infty}{\infty}$（两个无穷大谁跑得快）、$0\cdot\infty$（一个变小一个变大，谁占上风）、$\infty-\infty$（两个无穷大相减剩多少）以及 $1^\infty$、$0^0$、$\infty^0$（底数和指数拉锯）之中。这七种形式统称为<b>未定式</b>。它们的共同点是：<b>极限运算法则在这里不适用</b>——法则要求各部分极限存在且分母极限不为零，而未定式恰好违反了这些条件。</p>
<p>本篇要做的事情就是建立一套系统的工具来处理这些"算不出来"的极限。核心工具有三件：</p>
<ul>
<li><b>等价无穷小代换</b>：把复杂的无穷小换成同样快慢的简单无穷小（通常是 $x$ 的幂）；</li>
<li><b>洛必达法则</b>：用导数之比代替函数之比，把"快慢"的比较转化成"斜率"的比较；</li>
<li><b>泰勒展开</b>：把函数在一点附近写成多项式加高阶小量，直接读出"是几阶无穷小、系数是多少"。</li>
</ul>
<p>三件工具各有所长，考研题往往需要综合使用。本篇先把七种未定式的定义讲清楚，再逐一证明这三件工具，最后用大量例题和近十年真题说明"看到什么、想到什么"。</p>`
      },
      {
        kind: 'def', title: '七种未定式的严格定义',
        html: R`<p>以下所有极限过程 $x\to x_0$ 可以换成 $x\to x_0^\pm$、$x\to\infty$、$x\to\pm\infty$ 或 $n\to\infty$，定义完全一样。</p>
<p><b>定义（$\dfrac00$ 型）.</b> 设 $\lim f(x)=0$，$\lim g(x)=0$，且在极限过程的某个去心邻域内 $g(x)\ne0$，则称 $\lim\dfrac{f(x)}{g(x)}$ 为 $\dfrac00$ 型未定式。</p>
<p><b>定义（$\dfrac\infty\infty$ 型）.</b> 设 $\lim f(x)=\infty$，$\lim g(x)=\infty$，则称 $\lim\dfrac{f(x)}{g(x)}$ 为 $\dfrac\infty\infty$ 型未定式。这里的 $\infty$ 可以是 $+\infty$ 或 $-\infty$，分子分母符号可以不同。</p>
<p><b>定义（$0\cdot\infty$ 型）.</b> 设 $\lim f(x)=0$，$\lim g(x)=\infty$，则称 $\lim f(x)g(x)$ 为 $0\cdot\infty$ 型未定式。</p>
<p><b>定义（$\infty-\infty$ 型）.</b> 设 $\lim f(x)=+\infty$，$\lim g(x)=+\infty$（或都为 $-\infty$），则称 $\lim\,[f(x)-g(x)]$ 为 $\infty-\infty$ 型未定式。注意 $(+\infty)-(-\infty)$ 不是未定式，它就是 $+\infty$。</p>
<p><b>定义（$1^\infty$ 型）.</b> 设 $\lim u(x)=1$，$\lim v(x)=\infty$，且 $u(x)>0$，则称 $\lim u(x)^{v(x)}$ 为 $1^\infty$ 型未定式。</p>
<p><b>定义（$0^0$ 型）.</b> 设 $\lim u(x)=0$，$\lim v(x)=0$，且 $u(x)>0$，则称 $\lim u(x)^{v(x)}$ 为 $0^0$ 型未定式。</p>
<p><b>定义（$\infty^0$ 型）.</b> 设 $\lim u(x)=+\infty$，$\lim v(x)=0$，则称 $\lim u(x)^{v(x)}$ 为 $\infty^0$ 型未定式。</p>
<p><b>逐字拆解这些定义。</b></p>
<ul>
<li>"<b>未定</b>"二字的准确含义是：<b>仅由各部分的极限，无法确定整体的极限</b>——整体极限可能是任何实数、可能是 $\infty$、也可能不存在。它<b>不是</b>说"这个极限没有值"。绝大多数考题中未定式的极限都是存在的，只是要算。</li>
<li>每个定义里都要求"<b>各部分各自有极限（或趋于无穷）</b>"。这是判定类型的依据：动手之前，先看每一块趋于什么，这一步叫"<b>判型</b>"。判型错了，后面全错。比如 $\lim_{x\to0}\dfrac{\sin x}{x+1}$ 分子趋于 $0$、分母趋于 $1$，<b>不是</b>未定式，直接代入得 $0$。</li>
<li>$\dfrac00$ 型要求"去心邻域内 $g(x)\ne0$"，否则商根本没定义，谈不上极限。</li>
<li>三种幂型都要求底数 $u(x)>0$（$\infty^0$ 型里自动满足），因为 $u^v=\mathrm e^{v\ln u}$ 需要 $\ln u$ 有意义。实数范围内 $(-1)^{x}$ 这种东西没有定义。</li>
<li>为什么是"七种"而不是更多？因为 $0^\infty$、$\infty^\infty$、$0^{-\infty}$、$\dfrac0\infty$、$\dfrac\infty0$、$0+0$、$\infty+\infty$ 等都是<b>定式</b>：如 $u\to0^+$、$v\to+\infty$ 时 $v\ln u\to-\infty$，$u^v\to0$ 是确定的；$\dfrac{0}{\infty}$ 必为 $0$；$\dfrac{\infty}{0}$ 必为 $\infty$。只有这七种，结果真的"看情况"。</li>
</ul>
<p><b>正例（每种各举一组，说明结果确实可以不同）.</b></p>
<table><thead><tr><th>类型</th><th>例子 1</th><th>例子 2</th></tr></thead><tbody>
<tr><td>$\dfrac00$</td><td>$\lim_{x\to0}\dfrac{\sin x}{x}=1$</td><td>$\lim_{x\to0}\dfrac{1-\cos x}{x}=0$</td></tr>
<tr><td>$\dfrac\infty\infty$</td><td>$\lim_{x\to+\infty}\dfrac{x^2}{\mathrm e^x}=0$</td><td>$\lim_{x\to+\infty}\dfrac{2x+1}{x}=2$</td></tr>
<tr><td>$0\cdot\infty$</td><td>$\lim_{x\to0^+}x\ln x=0$</td><td>$\lim_{x\to0}x\cdot\dfrac{1}{\sin x}=1$</td></tr>
<tr><td>$\infty-\infty$</td><td>$\lim_{x\to+\infty}(\sqrt{x^2+x}-x)=\dfrac12$</td><td>$\lim_{x\to+\infty}(x^2-x)=+\infty$</td></tr>
<tr><td>$1^\infty$</td><td>$\lim_{x\to\infty}\left(1+\dfrac1x\right)^x=\mathrm e$</td><td>$\lim_{x\to\infty}\left(1+\dfrac1x\right)^{x^2}=+\infty$</td></tr>
<tr><td>$0^0$</td><td>$\lim_{x\to0^+}x^x=1$</td><td>$\lim_{x\to0^+}\left(\mathrm e^{-1/x}\right)^{x}=\mathrm e^{-1}$</td></tr>
<tr><td>$\infty^0$</td><td>$\lim_{x\to+\infty}x^{1/x}=1$</td><td>$\lim_{x\to+\infty}\left(\mathrm e^{x}\right)^{2/x}=\mathrm e^2$</td></tr>
</tbody></table>
<p><b>反例（看上去像未定式、其实不是）.</b> $\lim_{x\to0^+}x^{1/x}$：底数 $\to0$、指数 $\to+\infty$，是 $0^{+\infty}$ 型，这是定式，$x^{1/x}=\mathrm e^{\frac{\ln x}{x}}$，指数 $\to-\infty$，极限为 $0$。又如 $\lim_{x\to+\infty}\dfrac{\sin x}{x}$：分子有界但不趋于 $\infty$，这不是 $\dfrac\infty\infty$ 型，应当用"有界乘无穷小"直接得 $0$，而不能用洛必达（见后面的反例）。</p>`
      },
      {
        kind: 'def', title: '幂指函数与三种幂型未定式的归结',
        html: R`<p><b>定义（幂指函数）.</b> 设 $u(x)>0$，称形如 $u(x)^{v(x)}$ 的函数为幂指函数，并规定</p>
$$u(x)^{v(x)}=\mathrm e^{v(x)\ln u(x)}.$$
<p>这不是一个"技巧"，而是幂指函数的<b>定义</b>：对于无理指数，$a^b$ 本来就是通过 $\mathrm e^{b\ln a}$ 来定义的。因此对幂指函数，<b>唯一</b>合法的操作就是"取指数对数"。它既不是幂函数（底数在变），也不是指数函数（指数在变），所以不能直接套用 $(x^n)'=nx^{n-1}$ 或 $(a^x)'=a^x\ln a$。</p>
<p><b>三种幂型未定式归结为 $0\cdot\infty$ 型。</b> 因为 $\mathrm e^t$ 连续，由复合函数极限法则，只要 $\lim v\ln u=A$（$A$ 可为有限数或 $\pm\infty$），就有</p>
$$\lim u^v=\mathrm e^{\lim v\ln u}=\mathrm e^{A}\quad(\text{约定 }\mathrm e^{-\infty}=0,\ \mathrm e^{+\infty}=+\infty).$$
<p>于是：</p>
<ul>
<li>$1^\infty$ 型：$v\to\infty$，$\ln u\to\ln1=0$，指数 $v\ln u$ 是 $\infty\cdot0$ 型；</li>
<li>$0^0$ 型：$v\to0$，$\ln u\to-\infty$，指数 $v\ln u$ 是 $0\cdot\infty$ 型；</li>
<li>$\infty^0$ 型：$v\to0$，$\ln u\to+\infty$，指数 $v\ln u$ 也是 $0\cdot\infty$ 型。</li>
</ul>
<p>而 $0\cdot\infty$ 型总可以写成 $\dfrac{0}{1/\infty}=\dfrac00$ 或 $\dfrac{\infty}{1/0}=\dfrac\infty\infty$ 型。<b>所以七种未定式归根到底只有两种：$\dfrac00$ 与 $\dfrac\infty\infty$</b>，而等价代换、洛必达、泰勒这三件工具正是为这两种基本型准备的。记住下面这张"归结图"：</p>
$$1^\infty,\ 0^0,\ \infty^0\ \overset{\mathrm e^{v\ln u}}{\longrightarrow}\ 0\cdot\infty\ \overset{\text{倒下去}}{\longrightarrow}\ \frac00\ \text{或}\ \frac\infty\infty;\qquad \infty-\infty\ \overset{\text{通分/有理化/提公因子}}{\longrightarrow}\ \frac00\ \text{或}\ \frac\infty\infty .$$
<p>另一个常用的写法是"<b>加一减一</b>"：当 $u^v-1$ 作为分子出现时，</p>
$$u^v-1=\mathrm e^{v\ln u}-1\sim v\ln u\quad(\text{当 }v\ln u\to0),$$
<p>这是 2024、2025 两年填空题的核心步骤，后面真题精讲会反复用到。</p>`
      },
      {
        kind: 'thm', title: '等价无穷小代换定理（乘除因子可换）',
        statement: R`<p>设在同一极限过程中 $\alpha\sim\alpha'$，$\beta\sim\beta'$（即 $\lim\dfrac{\alpha}{\alpha'}=1$，$\lim\dfrac{\beta}{\beta'}=1$），且 $\lim\dfrac{\alpha'}{\beta'}$ 存在（或为 $\infty$），则</p>
$$\lim\frac{\alpha}{\beta}=\lim\frac{\alpha'}{\beta'}.$$
<p>更一般地，若 $\lim\dfrac{\alpha' h}{\beta'}$ 存在，则 $\lim\dfrac{\alpha h}{\beta}=\lim\dfrac{\alpha' h}{\beta'}$，即<b>作为整体的乘除因子</b>的无穷小可以换成它的等价无穷小。</p>`,
        intuition: R`<p>$\alpha\sim\alpha'$ 的意思是"两者的比值趋于 $1$"，也就是在这个极限过程中它们"快慢完全一样"。既然求极限只关心快慢之比，把一个乘积因子换成快慢相同的另一个因子，比值当然不变。但"快慢一样"不等于"相等"：$\alpha-\alpha'$ 虽然是比 $\alpha$ 更高阶的无穷小，却不是零，当它与同阶的东西相减时，这个差就可能冒出来成为主角。这就是加减项不能随便换的根源。</p>`,
        steps: [
          { s: R`<p>写 $\dfrac{\alpha h}{\beta}=\dfrac{\alpha}{\alpha'}\cdot\dfrac{\beta'}{\beta}\cdot\dfrac{\alpha' h}{\beta'}$。</p>`, why: R`<p>这是恒等变形：把想换的因子"乘回去再除掉"。等价的定义只给了比值信息，所以要把比值 $\dfrac\alpha{\alpha'}$、$\dfrac{\beta'}{\beta}$ 人为地制造出来。</p>` },
          { s: R`<p>三个因子的极限分别为 $1$、$1$、$\lim\dfrac{\alpha' h}{\beta'}$。若最后一个极限为有限数 $A$，由极限的乘法法则，$\lim\dfrac{\alpha h}{\beta}=1\cdot1\cdot A=A$。</p>`, why: R`<p>乘法法则要求每个因子极限都存在，这里恰好满足——这也解释了为什么定理要假设"换完之后的极限存在"。</p>` },
          { s: R`<p>若 $\lim\dfrac{\alpha' h}{\beta'}=\infty$，则 $\dfrac{\beta'}{\alpha' h}\to0$，对倒数用上一步得 $\dfrac{\beta}{\alpha h}\to0$，故 $\dfrac{\alpha h}{\beta}\to\infty$。</p>`, why: R`<p>无穷大与无穷小互为倒数（见 lim.inf），把 $\infty$ 的情形转化为有限情形处理。</p>` }
        ],
        remark: R`<p><b>条件"乘除因子"不能去掉。</b> $\lim_{x\to0}\dfrac{\tan x-\sin x}{x^3}$ 中若把 $\tan x$、$\sin x$ 各换成 $x$，得 $\dfrac{x-x}{x^3}=0$，而正确答案是 $\dfrac12$（见后面例题）。错在 $\tan x-\sin x$ 是加减结构，不是乘积因子。正确做法是先把它<b>变成乘积</b>：$\tan x-\sin x=\tan x(1-\cos x)$，再换。</p>
<p><b>常用等价无穷小表（$x\to0$）</b>，每一条都可以由后面的泰勒公式（取首项）得到：</p>
$$\sin x\sim\tan x\sim\arcsin x\sim\arctan x\sim\ln(1+x)\sim\mathrm e^x-1\sim x,\qquad 1-\cos x\sim\frac{x^2}{2},$$
$$(1+x)^a-1\sim ax,\qquad a^x-1\sim x\ln a,\qquad x-\sin x\sim\frac{x^3}{6},\qquad \tan x-x\sim\frac{x^3}{3},\qquad x-\ln(1+x)\sim\frac{x^2}{2},$$
$$x-\arctan x\sim\frac{x^3}{3},\qquad \arcsin x-x\sim\frac{x^3}{6},\qquad \tan x-\sin x\sim\frac{x^3}{2}.$$
<p>表中的 $x$ 可以换成任何趋于 $0$ 的表达式 $\varphi(x)$（复合函数极限法则），例如 $\ln(1+x\sin x)\sim x\sin x\sim x^2$。</p>`
      },
      {
        kind: 'thm', title: '加减项中等价代换的合法条件',
        statement: R`<p>设 $\alpha\sim\alpha'$，$\beta\sim\beta'$，且 $\lim\dfrac{\alpha'}{\beta'}=A\ne1$（$A$ 为有限数或 $\infty$），则 $\alpha-\beta\sim\alpha'-\beta'$。特别地，若 $\alpha'$、$\beta'$ 是不同阶的无穷小（此时 $A=0$ 或 $\infty$），差的等价代换总是合法的。</p>
<p>同样，若 $\lim\dfrac{\alpha'}{\beta'}=A\ne-1$，则 $\alpha+\beta\sim\alpha'+\beta'$。</p>`,
        intuition: R`<p>$\alpha-\beta$ 出问题的唯一情形是"两个几乎相等的东西相减"：主部抵消了，剩下的由高阶小量决定，而等价关系恰恰不管高阶小量。只要 $\alpha'$ 与 $\beta'$ 不会"刚好抵消"（比值不趋于 $1$），主部就还在，换掉高阶小量无妨。</p>`,
        steps: [
          { s: R`<p>先设 $A$ 有限。写 $\dfrac{\alpha-\beta}{\alpha'-\beta'}=\dfrac{\dfrac{\alpha}{\beta'}-\dfrac{\beta}{\beta'}}{\dfrac{\alpha'}{\beta'}-1}$。</p>`, why: R`<p>分子分母同除以 $\beta'$，目的是让 $\dfrac{\alpha'}{\beta'}\to A$ 这个已知信息出现。</p>` },
          { s: R`<p>$\dfrac{\alpha}{\beta'}=\dfrac{\alpha}{\alpha'}\cdot\dfrac{\alpha'}{\beta'}\to1\cdot A=A$，$\dfrac{\beta}{\beta'}\to1$，故分子 $\to A-1$，分母 $\to A-1\ne0$，比值 $\to1$，即 $\alpha-\beta\sim\alpha'-\beta'$。</p>`, why: R`<p>这里用到商的极限法则，要求分母极限非零，这正是 $A\ne1$ 的作用。</p>` },
          { s: R`<p>若 $A=\infty$，则 $\dfrac{\beta'}{\alpha'}\to0\ne1$，交换 $\alpha,\beta$ 的角色用前两步得 $\beta-\alpha\sim\beta'-\alpha'$，两边乘 $-1$ 即可。和的情形把 $\beta$ 换成 $-\beta$。</p>`, why: R`<p>对称性处理，避免重复论证。</p>` }
        ],
        remark: R`<p>这个定理给出了"加减能不能换"的判据：<b>换完之后不抵消就能换</b>。例如 $\lim_{x\to0}\dfrac{\sin x+x^2}{\tan 2x}$ 中分子 $\sin x+x^2$ 可换成 $x+x^2\sim x$，因为 $\dfrac{x}{x^2}\to\infty\ne-1$。但 $\sin x-x$ 不能换成 $x-x$，因为 $\dfrac xx\to1$。实际做题时更保险的办法是：加减结构直接用泰勒展开，不去赌。</p>`
      },
      {
        kind: 'thm', title: '洛必达法则（0/0 型）',
        statement: R`<p>设函数 $f$、$g$ 满足：</p>
<ol>
<li>$\lim_{x\to a}f(x)=0$，$\lim_{x\to a}g(x)=0$；</li>
<li>在 $a$ 的某去心邻域内 $f$、$g$ 可导，且 $g'(x)\ne0$；</li>
<li>$\lim_{x\to a}\dfrac{f'(x)}{g'(x)}=A$（$A$ 为有限数或 $\infty$）。</li>
</ol>
<p>则 $\lim_{x\to a}\dfrac{f(x)}{g(x)}=A$。把 $x\to a$ 换成 $x\to a^\pm$、$x\to\infty$、$x\to\pm\infty$，结论同样成立。</p>`,
        intuition: R`<p>把 $f$、$g$ 在 $a$ 附近都看成几乎是直线：$f(x)\approx f'(a)(x-a)$，$g(x)\approx g'(a)(x-a)$，那么 $\dfrac{f(x)}{g(x)}\approx\dfrac{f'(a)}{g'(a)}$。也就是说，两条过同一点 $(a,0)$ 的曲线之比，由它们在该点的<b>斜率之比</b>决定。严格证明时 $f'(a)$、$g'(a)$ 未必存在，于是用柯西中值定理把"某一点的斜率"换成"附近某点 $\xi$ 的斜率"，再让 $\xi$ 被夹着趋于 $a$。</p>
<svg viewBox="0 0 420 260" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="130" x2="400" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="210" y1="240" x2="210" y2="20" stroke="currentColor" stroke-width="1"/>
  <polyline points="60,183 75,182 90,180 105,176 120,172 135,166 150,160 165,153 180,146 195,138 210,130 225,122 240,114 255,107 270,100 285,94 300,88 315,84 330,80 345,78 360,77" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="60,210 75,202 90,194 105,186 120,178 135,170 150,162 165,154 180,146 195,138 210,130 225,122 240,114 255,106 270,98 285,90 300,82 315,74 330,66 345,58 360,50" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5,4"/>
  <circle cx="210" cy="130" r="3" fill="currentColor"/>
  <text x="215" y="150" font-size="12" fill="currentColor">a</text>
  <text x="300" y="70" font-size="13" fill="currentColor">y = g(x)</text>
  <text x="305" y="105" font-size="13" fill="currentColor">y = f(x)</text>
  <text x="50" y="40" font-size="12" fill="currentColor">两条曲线都过 (a,0)，</text>
  <text x="50" y="56" font-size="12" fill="currentColor">靠近 a 时 f/g ≈ 斜率之比</text>
</svg>`,
        steps: [
          { s: R`<p><b>第一步：补充定义，使 $f$、$g$ 在 $a$ 处连续。</b> 令 $f(a)=g(a)=0$（若 $f$、$g$ 在 $a$ 处原本有定义但值不为 $0$，就改成 $0$）。由条件 1，这样修改后 $f$、$g$ 在 $a$ 处连续；由条件 2，在 $(a,a+\delta)$（以及 $(a-\delta,a)$）内可导。</p>`, why: R`<p>极限 $\lim_{x\to a}$ 与 $f(a)$ 的值无关，所以可以随意改动 $f(a)$ 而不影响结论。改成 $0$ 是为了能在闭区间 $[a,x]$ 上使用柯西中值定理，它要求端点连续。</p>` },
          { s: R`<p><b>第二步：对 $[a,x]$ 用柯西中值定理。</b> 任取 $x\in(a,a+\delta)$，$f$、$g$ 在 $[a,x]$ 上连续、在 $(a,x)$ 内可导、$g'\ne0$，故存在 $\xi\in(a,x)$ 使</p>
$$\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f'(\xi)}{g'(\xi)},\quad\text{即}\quad\frac{f(x)}{g(x)}=\frac{f'(\xi)}{g'(\xi)}.$$`, why: R`<p>柯西中值定理（见 diff.mvt）正是"两个函数增量之比等于某点导数之比"。这里 $g(x)\ne g(a)=0$ 是因为若 $g(x)=0$，由罗尔定理 $(a,x)$ 内有 $g'$ 的零点，与 $g'\ne0$ 矛盾——所以商 $\dfrac{f(x)}{g(x)}$ 在去心邻域内有意义。</p>` },
          { s: R`<p><b>第三步：让 $x\to a^+$。</b> 因为 $a\lt\xi\lt x$，当 $x\to a^+$ 时 $\xi\to a^+$（夹逼）。由条件 3，$\dfrac{f'(\xi)}{g'(\xi)}\to A$，所以 $\dfrac{f(x)}{g(x)}\to A$。严格地说：对任意 $\varepsilon>0$，存在 $\eta>0$ 使 $0\lt t-a\lt\eta$ 时 $\left|\dfrac{f'(t)}{g'(t)}-A\right|\lt\varepsilon$；取 $0\lt x-a\lt\eta$，则对应的 $\xi$ 也满足 $0\lt\xi-a\lt\eta$，故 $\left|\dfrac{f(x)}{g(x)}-A\right|\lt\varepsilon$。$A=\infty$ 时把 $\varepsilon$ 换成 $M$ 同理。</p>`, why: R`<p>$\xi$ 依赖于 $x$，不能简单地说"$\xi$ 是常数"，所以用 $\varepsilon$–$\delta$ 语言确认：只要 $x$ 离 $a$ 足够近，$\xi$ 就更近，从而导数之比也足够接近 $A$。</p>` },
          { s: R`<p><b>第四步：左极限同理，合起来得双侧极限；$x\to\infty$ 的情形作代换 $x=\dfrac1t$。</b> 令 $F(t)=f(1/t)$，$G(t)=g(1/t)$，则 $t\to0^+$ 对应 $x\to+\infty$，且 $\dfrac{F'(t)}{G'(t)}=\dfrac{f'(1/t)\cdot(-1/t^2)}{g'(1/t)\cdot(-1/t^2)}=\dfrac{f'(1/t)}{g'(1/t)}\to A$，对 $F,G$ 用已证的 $t\to0^+$ 情形即得 $\lim_{x\to+\infty}\dfrac{f(x)}{g(x)}=A$。</p>`, why: R`<p>换元是把"无穷远处"拉回到"有限点"的标准办法，链式法则保证导数之比不变（多出来的因子 $-1/t^2$ 上下抵消）。</p>` }
        ],
        remark: R`<p><b>关于条件 3 的两点说明。</b> （i）它是"<b>若导数之比的极限存在，则函数之比的极限存在且相等</b>"，<b>逆命题不成立</b>：$\lim\dfrac{f'}{g'}$ 不存在（且不为 $\infty$）时，$\lim\dfrac fg$ 仍可能存在，此时洛必达"失效"而不是"原极限不存在"。例如 $\lim_{x\to0}\dfrac{x^2\sin(1/x)}{\sin x}=0$（有界乘无穷小），但求导后 $\dfrac{2x\sin(1/x)-\cos(1/x)}{\cos x}$ 极限不存在。（ii）洛必达可以<b>连续使用</b>：若 $\dfrac{f'}{g'}$ 仍是 $\dfrac00$ 型且满足条件，再用一次。每次使用前都要重新判型——对非未定式用洛必达是常见的严重错误。</p>
<p><b>关于条件 2.</b> 只要求在<b>去心</b>邻域内可导，$a$ 点本身可以不可导甚至无定义。$g'\ne0$ 不能去掉，否则导数之比在很多点无意义。</p>
<p><b>洛必达与等价代换的关系.</b> 等价代换表里的每一条都可以用洛必达证明（如 $\lim\dfrac{\ln(1+x)}{x}=\lim\dfrac{1/(1+x)}{1}=1$），但洛必达的求导往往越算越繁，所以实战口诀是"<b>先化简、再洛必达；能等价、不洛必达</b>"。</p>`
      },
      {
        kind: 'thm', title: '洛必达法则（∞/∞ 型）',
        statement: R`<p>设函数 $f$、$g$ 满足：</p>
<ol>
<li>$\lim_{x\to a^+}g(x)=\infty$；</li>
<li>在 $(a,a+\delta_0)$ 内 $f$、$g$ 可导，且 $g'(x)\ne0$；</li>
<li>$\lim_{x\to a^+}\dfrac{f'(x)}{g'(x)}=A$（$A$ 为有限数或 $\infty$）。</li>
</ol>
<p>则 $\lim_{x\to a^+}\dfrac{f(x)}{g(x)}=A$。其他极限过程同样成立。</p>`,
        intuition: R`<p>$\dfrac\infty\infty$ 型不能像 $\dfrac00$ 型那样在 $a$ 点"补零"，因为函数在 $a$ 附近是无穷大。思路改为：固定一个离 $a$ 很近的点 $c$，在 $[x,c]$ 上用柯西中值定理，$\dfrac{f(x)-f(c)}{g(x)-g(c)}$ 接近 $A$；而 $f(c)$、$g(c)$ 是<b>常数</b>，与趋于无穷的 $g(x)$ 相比可以忽略，所以 $\dfrac{f(x)}{g(x)}$ 和 $\dfrac{f(x)-f(c)}{g(x)-g(c)}$ 几乎一样。</p>`,
        steps: [
          { s: R`<p><b>第一步：由条件 3 选一个靠近 $a$ 的点 $c$。</b> 设 $A$ 有限。对任意 $\varepsilon>0$，存在 $\delta\in(0,\delta_0)$，使当 $a\lt t\lt a+\delta$ 时 $\left|\dfrac{f'(t)}{g'(t)}-A\right|\lt\varepsilon$。固定 $c=a+\delta/2$。</p>`, why: R`<p>我们需要一个"锚点" $c$，它要足够靠近 $a$，使得 $(a,c)$ 内导数之比都接近 $A$。</p>` },
          { s: R`<p><b>第二步：对 $x\in(a,c)$ 在 $[x,c]$ 上用柯西中值定理。</b> 存在 $\xi\in(x,c)$ 使</p>
$$\frac{f(x)-f(c)}{g(x)-g(c)}=\frac{f'(\xi)}{g'(\xi)},\qquad\text{从而}\qquad\left|\frac{f(x)-f(c)}{g(x)-g(c)}-A\right|\lt\varepsilon .$$
<p>这里 $g(x)\ne g(c)$，否则由罗尔定理 $g'$ 在 $(x,c)$ 内有零点。</p>`, why: R`<p>$\xi\in(x,c)\subset(a,a+\delta)$，所以第一步的估计对 $\xi$ 成立。注意这一步对<b>所有</b> $x\in(a,c)$ 都成立，$c$ 不动，动的只是 $x$。</p>` },
          { s: R`<p><b>第三步：把 $\dfrac{f(x)}{g(x)}$ 用上面的比值表示。</b> 记 $h(x)=\dfrac{f(x)-f(c)}{g(x)-g(c)}$，则 $f(x)=f(c)+h(x)\,[g(x)-g(c)]$，两边除以 $g(x)$（当 $x$ 靠近 $a$ 时 $g(x)\ne0$）：</p>
$$\frac{f(x)}{g(x)}=h(x)\left(1-\frac{g(c)}{g(x)}\right)+\frac{f(c)}{g(x)}.$$`, why: R`<p>这是一个恒等式，目的是把"含 $c$ 的常数"都放到 $\dfrac{1}{g(x)}$ 后面——因为 $g(x)\to\infty$，这些项都会消失。</p>` },
          { s: R`<p><b>第四步：估计误差。</b> 由上式，</p>
$$\left|\frac{f(x)}{g(x)}-A\right|\le|h(x)-A|\cdot\left|1-\frac{g(c)}{g(x)}\right|+|A|\cdot\left|\frac{g(c)}{g(x)}\right|+\left|\frac{f(c)}{g(x)}\right|.$$
<p>因为 $g(x)\to\infty$（$x\to a^+$），存在 $\delta'\in(0,\delta/2)$，使 $a\lt x\lt a+\delta'$ 时 $\left|\dfrac{g(c)}{g(x)}\right|\lt\varepsilon$、$\left|\dfrac{f(c)}{g(x)}\right|\lt\varepsilon$。于是此时</p>
$$\left|\frac{f(x)}{g(x)}-A\right|\le\varepsilon(1+\varepsilon)+|A|\varepsilon+\varepsilon=(2+|A|+\varepsilon)\varepsilon .$$
<p>右端可以任意小，故 $\lim_{x\to a^+}\dfrac{f(x)}{g(x)}=A$。</p>`, why: R`<p>先用三角不等式把误差拆成三块：第一块由柯西中值定理控制，后两块由"常数除以无穷大趋于 $0$"控制。$\varepsilon$ 前面的系数是常数，不影响"任意小"。</p>` },
          { s: R`<p><b>第五步：$A=\infty$ 的情形。</b> 此时 $\dfrac{g'}{f'}\to0$，且由 $\dfrac{f'}{g'}\to\infty$ 知在 $a$ 的某右邻域内 $f'\ne0$。要证 $\dfrac fg\to\infty$，先证 $f\to\infty$：由 $\dfrac{f'}{g'}\to\infty$，在 $(a,a+\delta_1)$ 内 $\left|\dfrac{f'}{g'}\right|>1$，用柯西中值定理，对 $x\in(a,c)$ 有 $\left|\dfrac{f(x)-f(c)}{g(x)-g(c)}\right|>1$，即 $|f(x)-f(c)|>|g(x)-g(c)|\to\infty$，故 $f(x)\to\infty$。于是 $\dfrac gf$ 是 $\dfrac\infty\infty$ 型且 $\dfrac{g'}{f'}\to0$，由已证的有限情形 $\dfrac gf\to0$，即 $\dfrac fg\to\infty$。</p>`, why: R`<p>把 $\infty$ 的情形翻转成 $0$ 的情形，需要先确认翻转后的分母 $f$ 也趋于无穷，否则不满足已证定理的条件 1。</p>` }
        ],
        remark: R`<p><b>条件 1 只要求分母趋于无穷</b>，分子 $f$ 可以是任何东西（证明中根本没用到 $f\to\infty$）。这一点在 $\dfrac{\text{有界}}{\infty}$ 的情形不必用洛必达——直接为 $0$；但它说明定理的适用范围比"$\dfrac\infty\infty$"字面上更宽。</p>
<p><b>典型应用：无穷大的"速度排序"。</b> $x\to+\infty$ 时，$\ln x\ll x^a\ (a>0)\ll b^x\ (b>1)\ll x^x$。例如 $\lim_{x\to+\infty}\dfrac{x^n}{\mathrm e^x}$ 连用 $n$ 次洛必达得 $\lim\dfrac{n!}{\mathrm e^x}=0$；$\lim_{x\to+\infty}\dfrac{\ln x}{x^a}=\lim\dfrac{1/x}{ax^{a-1}}=\lim\dfrac{1}{ax^a}=0$。这个排序在判断 $\dfrac\infty\infty$ 型时经常直接用。</p>
<p><b>失效的例子。</b> $\lim_{x\to+\infty}\dfrac{x+\sin x}{x}$ 是 $\dfrac\infty\infty$ 型，求导得 $\dfrac{1+\cos x}{1}$，极限不存在；但原极限显然是 $1$（分子分母同除 $x$）。再次强调：洛必达失效 $\ne$ 极限不存在。</p>`
      },
      {
        kind: 'thm', title: '带佩亚诺余项的泰勒公式与"阶的配平"原则',
        statement: R`<p>设 $f$ 在 $x_0$ 处有 $n$ 阶导数（即 $f^{(n)}(x_0)$ 存在，这要求 $f^{(n-1)}$ 在 $x_0$ 的某邻域内存在），则当 $x\to x_0$ 时</p>
$$f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o\big((x-x_0)^n\big).$$
<p>取 $x_0=0$ 得麦克劳林公式。常用展开（$x\to0$）：</p>
$$\mathrm e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+o(x^3),\qquad \sin x=x-\frac{x^3}{3!}+o(x^4),\qquad \cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}+o(x^5),$$
$$\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3),\qquad (1+x)^a=1+ax+\frac{a(a-1)}{2}x^2+o(x^2),$$
$$\tan x=x+\frac{x^3}{3}+o(x^4),\qquad \arctan x=x-\frac{x^3}{3}+o(x^4),\qquad \arcsin x=x+\frac{x^3}{6}+o(x^4).$$`,
        intuition: R`<p>泰勒公式是"等价无穷小"的升级版：等价代换只保留首项（$\sin x\approx x$），泰勒公式则保留任意多项（$\sin x\approx x-\dfrac{x^3}{6}$）。当加减抵消了首项时，就得靠第二项、第三项来决定快慢，这就是为什么加减结构要用泰勒。余项 $o((x-x_0)^n)$ 的意思是"比 $(x-x_0)^n$ 更高阶的无穷小"，它是一个精确的数学对象，而不是"大约"。</p>`,
        steps: [
          { s: R`<p>记 $P_n(x)=\sum_{k=0}^{n}\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k$，$R_n(x)=f(x)-P_n(x)$。要证 $\lim_{x\to x_0}\dfrac{R_n(x)}{(x-x_0)^n}=0$。直接验证可知 $R_n(x_0)=R_n'(x_0)=\cdots=R_n^{(n-1)}(x_0)=0$，且 $R_n^{(n)}(x_0)=0$。</p>`, why: R`<p>$P_n$ 的构造恰好让它与 $f$ 在 $x_0$ 处前 $n$ 阶导数全部相同：$P_n^{(k)}(x_0)=f^{(k)}(x_0)$。这是多项式逼近的出发点。</p>` },
          { s: R`<p>$\dfrac{R_n(x)}{(x-x_0)^n}$ 是 $\dfrac00$ 型。在 $x_0$ 的去心邻域内 $R_n$ 有 $n-1$ 阶导数，$(x-x_0)^n$ 的各阶导数非零，对它<b>连续用 $n-1$ 次洛必达法则</b>（每次都是 $\dfrac00$ 型），化为</p>
$$\lim_{x\to x_0}\frac{R_n^{(n-1)}(x)}{n!\,(x-x_0)}.$$`, why: R`<p>每用一次洛必达，分子导数在 $x_0$ 处仍为 $0$（由第一步），分母变成 $n(n-1)\cdots(x-x_0)^{n-k}$ 仍趋于 $0$，所以仍是 $\dfrac00$ 型。洛必达法则的逻辑是"后一个极限存在 ⇒ 前一个极限存在且相等"，所以只要最后这个极限算出来，整条链就都成立。</p>` },
          { s: R`<p>由 $R_n^{(n-1)}(x)=f^{(n-1)}(x)-f^{(n-1)}(x_0)-f^{(n)}(x_0)(x-x_0)$（$P_n$ 的 $n-1$ 阶导数只剩这两项），</p>
$$\lim_{x\to x_0}\frac{R_n^{(n-1)}(x)}{n!\,(x-x_0)}=\frac{1}{n!}\left[\lim_{x\to x_0}\frac{f^{(n-1)}(x)-f^{(n-1)}(x_0)}{x-x_0}-f^{(n)}(x_0)\right]=\frac{1}{n!}\big[f^{(n)}(x_0)-f^{(n)}(x_0)\big]=0 .$$`, why: R`<p>最后一步不能再用洛必达（$f^{(n)}$ 在邻域内未必存在），而是直接用<b>导数的定义</b>：$f^{(n)}(x_0)$ 就是 $f^{(n-1)}$ 的差商极限。这就是为什么定理只需要 $f^{(n)}(x_0)$ 在一点存在。</p>` }
        ],
        remark: R`<p><b>"阶的配平"原则——展开到几阶？</b> 这是用泰勒做极限时唯一需要动脑筋的地方，口诀是"<b>上下同阶、加减不抵消</b>"：</p>
<ul>
<li><b>分式型</b>：分母是 $x^k$（或等价于 $cx^k$），分子就展开到 $x^k$ 项为止（余项 $o(x^k)$），多了没用，少了算不出。</li>
<li><b>加减抵消型</b>：分子是若干项相减时，一直展开到<b>首次出现不抵消的非零项</b>为止；例如 $\cos x-\mathrm e^{-x^2/2}$ 的 $1$ 和 $x^2$ 项都抵消，必须展到 $x^4$。</li>
<li><b>乘积型</b>：$o(x^m)\cdot x^k=o(x^{m+k})$，所以乘积中各因子展开的阶数之和要达到目标阶。</li>
</ul>
<p><b>$o$ 的运算规则</b>（$x\to0$）：$o(x^m)\pm o(x^n)=o(x^{\min(m,n)})$；$x^k\cdot o(x^m)=o(x^{k+m})$；$c\cdot o(x^m)=o(x^m)$；$o(x^m)$ 可以写成 $o(x^k)$（$k\le m$）但不能反过来。</p>
<p><b>与等价代换的关系.</b> 等价代换就是"只取泰勒展开的首项"，所以凡是等价代换能做的，泰勒都能做；泰勒是最保险、最通用的工具，代价是展开要算。<b>三件套的选择策略</b>：乘除因子用等价代换；分子加减或含变限积分、分段复杂结构用泰勒；形式简单、导数好求、$\dfrac\infty\infty$ 型用洛必达。</p>`
      },
      {
        kind: 'thm', title: '1^∞ 型的标准公式',
        statement: R`<p>设在某极限过程中 $u(x)>0$，$\lim u(x)=1$，$\lim v(x)=\infty$。若 $\lim v(x)\,[u(x)-1]=A$（$A$ 为有限数或 $\pm\infty$），则</p>
$$\lim u(x)^{v(x)}=\mathrm e^{A}=\mathrm e^{\lim v(x)[u(x)-1]}.$$`,
        intuition: R`<p>$(1+\alpha)^{v}$ 中 $\alpha=u-1\to0$、$v\to\infty$。写成 $\left[(1+\alpha)^{1/\alpha}\right]^{\alpha v}$，中括号里趋于 $\mathrm e$（第二个重要极限），指数 $\alpha v$ 趋于 $A$，所以整体趋于 $\mathrm e^A$。公式把"底数离 $1$ 有多远"和"指数有多大"这两个因素乘起来，正是 $1^\infty$ 型"拉锯"的量化。</p>`,
        steps: [
          { s: R`<p>由幂指函数的定义，$u^v=\mathrm e^{v\ln u}=\mathrm e^{v\ln(1+(u-1))}$。</p>`, why: R`<p>幂指函数唯一的处理方式就是化成指数。</p>` },
          { s: R`<p>由 $u-1\to0$ 及 $\ln(1+t)\sim t\ (t\to0)$，有 $\dfrac{\ln(1+(u-1))}{u-1}\to1$（若 $u-1$ 在某些点为 $0$，该点处 $v\ln u=0=v(u-1)$，不影响下面的论证）。于是</p>
$$v\ln u=v(u-1)\cdot\frac{\ln(1+(u-1))}{u-1}\to A\cdot1=A .$$`, why: R`<p>这正是乘积因子的等价代换：$\ln u\sim u-1$。$\ln(1+t)\sim t$ 的证明：$\lim_{t\to0}\dfrac{\ln(1+t)}{t}=\lim\ln(1+t)^{1/t}=\ln\mathrm e=1$，用的是第二个重要极限与 $\ln$ 的连续性（见 lim.rules）。</p>` },
          { s: R`<p>$\mathrm e^t$ 在 $(-\infty,+\infty)$ 上连续，且 $t\to+\infty$ 时 $\mathrm e^t\to+\infty$、$t\to-\infty$ 时 $\mathrm e^t\to0$，由复合函数极限法则 $\lim u^v=\mathrm e^{A}$。</p>`, why: R`<p>"极限号穿过连续函数"是复合函数极限法则，这里外层函数是 $\mathrm e^t$。</p>` }
        ],
        remark: R`<p><b>使用步骤</b>：① 确认是 $1^\infty$ 型（底数 $\to1$、指数 $\to\infty$）；② 算 $\lim v(u-1)$，这通常是一个 $0\cdot\infty$ 型，倒下去用等价代换或洛必达；③ 答案是 $\mathrm e^{\text{该极限}}$。<b>不要</b>对不是 $1^\infty$ 型的极限用此公式，例如 $\lim_{x\to\infty}\left(1+\dfrac1x\right)^{\sqrt x}$ 底数 $\to1$、指数 $\to\infty$，可用；但 $\lim_{x\to0}(1+x)^{1/x^2}$ 中 $v(u-1)=\dfrac1x\to\infty$，极限是 $+\infty$（$x\to0^+$）或 $0$（$x\to0^-$），双侧极限不存在，这也是公式允许的 $A=\pm\infty$ 情形。</p>
<p>$0^0$ 与 $\infty^0$ 型<b>没有</b>类似的简便公式，必须老老实实写 $\mathrm e^{v\ln u}$ 然后算 $\lim v\ln u$。</p>`
      },
      {
        kind: 'example', title: '例题：0/0 与 ∞/∞ 型——三件套各显神通',
        html: R`<p><b>例 1（等价代换要先变成乘积）.</b> 求 $\lim_{x\to0}\dfrac{\tan x-\sin x}{x^3}$。</p>
<p><b>怎么想：</b>分子是两个等价无穷小相减，直接换成 $x-x=0$ 是错的（见代换定理的注）。办法是<b>提公因子变成乘积</b>：$\tan x-\sin x=\tan x\,(1-\cos x)$。</p>
$$\lim_{x\to0}\frac{\tan x(1-\cos x)}{x^3}=\lim_{x\to0}\frac{x\cdot\frac{x^2}{2}}{x^3}=\frac12 .$$
<p>第二个等号用了 $\tan x\sim x$、$1-\cos x\sim\dfrac{x^2}2$，两者都是乘积因子，合法。</p>
<p><b>例 2（洛必达 + 等价，交替使用）.</b> 求 $\lim_{x\to0}\dfrac{x-\sin x}{x^3}$。</p>
<p><b>怎么想：</b>分子是加减结构，不能直接等价代换。洛必达一次：$\dfrac{1-\cos x}{3x^2}$，仍是 $\dfrac00$ 型，但此时分子是单独一个无穷小，可以等价代换 $1-\cos x\sim\dfrac{x^2}{2}$，得 $\dfrac{x^2/2}{3x^2}=\dfrac16$。导数之比的极限存在，洛必达合法。这个结果就是等价表中 $x-\sin x\sim\dfrac{x^3}{6}$ 的来历。</p>
<p><b>例 3（泰勒展开，加减抵消两层）.</b> 求 $\lim_{x\to0}\dfrac{\cos x-\mathrm e^{-x^2/2}}{x^4}$。</p>
<p><b>怎么想：</b>分母是 $x^4$，按"上下同阶"，分子展开到 $x^4$：</p>
$$\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4),\qquad \mathrm e^{-x^2/2}=1-\frac{x^2}{2}+\frac{1}{2}\left(\frac{x^2}{2}\right)^2+o(x^4)=1-\frac{x^2}{2}+\frac{x^4}{8}+o(x^4).$$
<p>相减：常数项、$x^2$ 项全部抵消，剩 $\left(\dfrac1{24}-\dfrac18\right)x^4+o(x^4)=-\dfrac{x^4}{12}+o(x^4)$，所以极限为 $-\dfrac1{12}$。这里如果只展到 $x^2$，分子就是 $o(x^2)$，什么也得不到——这是"加减不抵消"原则的典型体现。用洛必达要求四次导，远比泰勒麻烦。</p>
<p><b>例 4（$\dfrac\infty\infty$ 型：无穷大的速度）.</b> 求 $\lim_{x\to+\infty}\dfrac{x^3}{\mathrm e^x}$ 与 $\lim_{x\to+\infty}\dfrac{\ln x}{\sqrt x}$。</p>
<p>前者连用三次洛必达：$\dfrac{3x^2}{\mathrm e^x}\to\dfrac{6x}{\mathrm e^x}\to\dfrac{6}{\mathrm e^x}\to0$。后者一次：$\dfrac{1/x}{\frac{1}{2\sqrt x}}=\dfrac{2}{\sqrt x}\to0$。结论：幂函数跑不过指数函数，对数函数跑不过任何正幂函数。</p>
<p><b>例 5（左右极限不同的 $\dfrac\infty\infty$ 型）.</b> 求 $\lim_{x\to0}\dfrac{2+\mathrm e^{1/x}}{1+\mathrm e^{2/x}}$。</p>
<p><b>怎么想：</b>看到 $\mathrm e^{1/x}$ 要立刻警觉：$x\to0^+$ 时它 $\to+\infty$，$x\to0^-$ 时它 $\to0$，<b>必须分左右</b>。$x\to0^-$：直接代入得 $\dfrac{2+0}{1+0}=2$。$x\to0^+$：是 $\dfrac\infty\infty$ 型，分子分母同除以最大的 $\mathrm e^{2/x}$，得 $\dfrac{2\mathrm e^{-2/x}+\mathrm e^{-1/x}}{\mathrm e^{-2/x}+1}\to\dfrac{0+0}{0+1}=0$。左右极限不等，<b>极限不存在</b>。这题洛必达反而越做越复杂，"同除以最高阶无穷大"才是正路。</p>`
      },
      {
        kind: 'example', title: '例题：0·∞ 与 ∞−∞ 型——先变形再动手',
        html: R`<p><b>例 6（$0\cdot\infty$：谁倒下去？）.</b> 求 $\lim_{x\to0^+}x\ln x$。</p>
<p><b>怎么想：</b>$x\to0$、$\ln x\to-\infty$。写成分式有两种选择：$\dfrac{\ln x}{1/x}$（$\dfrac\infty\infty$ 型）或 $\dfrac{x}{1/\ln x}$（$\dfrac00$ 型）。选前者，因为 $\ln x$ 求导变简单，$1/x$ 求导也简单；后者求导出来 $\dfrac{1}{\ln x}$ 的导数是 $-\dfrac{1}{x\ln^2x}$，更乱。口诀：<b>把"求导后变简单"的那个留在分子，把"求导后不变繁"的那个倒下去</b>——对数、反三角往往留在分子。</p>
$$\lim_{x\to0^+}\frac{\ln x}{1/x}=\lim_{x\to0^+}\frac{1/x}{-1/x^2}=\lim_{x\to0^+}(-x)=0 .$$
<p>这个结果说明：$x\to0^+$ 时 $x$ 趋于 $0$ 的"力量"胜过 $\ln x$ 趋于 $-\infty$ 的"力量"。它是 2025 年真题的关键一步。</p>
<p><b>例 7（$0\cdot\infty$ 用等价）.</b> 求 $\lim_{x\to+\infty}x\left(\dfrac\pi2-\arctan x\right)$。</p>
<p><b>怎么想：</b>$\dfrac\pi2-\arctan x=\arctan\dfrac1x$（$x>0$），令 $t=\dfrac1x\to0^+$，原式 $=\lim_{t\to0^+}\dfrac{\arctan t}{t}=1$。看到 $x\to\infty$ 时，"令 $t=1/x$"常常能把问题变成熟悉的 $t\to0$ 型。</p>
<p><b>例 8（$\infty-\infty$：通分）.</b> 求 $\lim_{x\to0}\left(\dfrac{1}{\sin^2x}-\dfrac1{x^2}\right)$。</p>
<p><b>怎么想：</b>两个分式相减，通分是唯一自然的选择：</p>
$$\frac{x^2-\sin^2x}{x^2\sin^2x}=\frac{(x-\sin x)(x+\sin x)}{x^2\sin^2x}.$$
<p>分母 $x^2\sin^2x\sim x^4$（乘积因子）。分子 $x+\sin x\sim2x$（两项相加，比值 $\to1\ne-1$，可换），$x-\sin x\sim\dfrac{x^3}6$（等价表）。所以极限 $=\dfrac{\frac{x^3}{6}\cdot2x}{x^4}=\dfrac13$。这题若硬用洛必达，分母要求导四次，不可取；<b>先把"差"因式分解成"积"</b>，等价代换就都合法了。</p>
<p><b>例 9（$\infty-\infty$：有理化）.</b> 求 $\lim_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)$。</p>
<p>根式之差，分子有理化：$\dfrac{x^2+x-x^2}{\sqrt{x^2+x}+x}=\dfrac{x}{\sqrt{x^2+x}+x}=\dfrac{1}{\sqrt{1+1/x}+1}\to\dfrac12$。注意 $x\to+\infty$ 时 $\sqrt{x^2}=x$；若改为 $x\to-\infty$，$\sqrt{x^2}=-x$，答案会不同（此时原式为 $(+\infty)+(+\infty)$，不是未定式，极限为 $+\infty$）。</p>
<p><b>例 10（$\infty-\infty$：含对数，通分后泰勒）.</b> 求 $\lim_{x\to0}\left(\dfrac1x-\dfrac{1}{\ln(1+x)}\right)$。</p>
<p>通分得 $\dfrac{\ln(1+x)-x}{x\ln(1+x)}$，分母 $\sim x^2$，分子展开到 $x^2$：$\ln(1+x)-x=-\dfrac{x^2}{2}+o(x^2)$，极限为 $-\dfrac12$。这是 2020 年真题的"简化版"，真题把 $\dfrac1x$ 换成了 $\dfrac{1}{\mathrm e^x-1}$，思路一模一样。</p>`
      },
      {
        kind: 'example', title: '例题：1^∞、0^0、∞^0——幂指函数三兄弟',
        html: R`<p><b>例 11（$1^\infty$ 用标准公式）.</b> 求 $\lim_{x\to0}(\cos x)^{1/x^2}$。</p>
<p>底数 $\to1$，指数 $\to\infty$，是 $1^\infty$ 型。$\lim v(u-1)=\lim_{x\to0}\dfrac{\cos x-1}{x^2}=-\dfrac12$，故原式 $=\mathrm e^{-1/2}$。</p>
<p><b>例 12（$1^\infty$，底数是平均值）.</b> 求 $\lim_{x\to0}\left(\dfrac{a^x+b^x}{2}\right)^{1/x}$（$a,b>0$）。</p>
<p>$u-1=\dfrac{(a^x-1)+(b^x-1)}{2}$，$v(u-1)=\dfrac{(a^x-1)+(b^x-1)}{2x}\to\dfrac{\ln a+\ln b}{2}$（分子两项相加，各自 $\sim x\ln a$、$x\ln b$，和的比值 $\to\dfrac{\ln a}{\ln b}\ne-1$ 时可换；若 $\ln a=-\ln b$ 则直接用泰勒也得同样结果）。所以原式 $=\mathrm e^{\frac{\ln a+\ln b}2}=\sqrt{ab}$——两个数的"指数平均"的极限是几何平均。</p>
<p><b>例 13（$1^\infty$，需要泰勒到三阶）.</b> 求 $\lim_{x\to0}\left(\dfrac{\sin x}{x}\right)^{1/x^2}$。</p>
<p>$v(u-1)=\dfrac{\sin x-x}{x^3}=-\dfrac16$（等价表），原式 $=\mathrm e^{-1/6}$。注意这里 $u-1=\dfrac{\sin x-x}{x}$ 本身就是加减结构，要靠 $x-\sin x\sim\dfrac{x^3}{6}$ 这条"二级等价"，不能写成 $\dfrac{x-x}{x}$。</p>
<p><b>例 14（$0^0$ 型）.</b> 求 $\lim_{x\to0^+}x^{\sin x}$。</p>
<p>写成 $\mathrm e^{\sin x\ln x}$。指数 $\sin x\ln x=\dfrac{\sin x}{x}\cdot x\ln x\to1\cdot0=0$（例 6），故原式 $=\mathrm e^0=1$。</p>
<p><b>例 15（$\infty^0$ 型）.</b> 求 $\lim_{x\to+\infty}x^{1/x}$ 与 $\lim_{x\to0^+}\left(\dfrac1x\right)^{\tan x}$。</p>
<p>前者 $=\mathrm e^{\frac{\ln x}{x}}$，指数由例 4 为 $0$，极限为 $1$。后者 $=\mathrm e^{-\tan x\ln x}$，指数 $=-\dfrac{\tan x}{x}\cdot x\ln x\to0$，极限为 $1$。</p>
<p><b>例 16（$1^\infty$ 的进阶：$(1+x)^{1/x}$ 与 $\mathrm e$ 的差）.</b> 求 $\lim_{x\to0}\dfrac{(1+x)^{1/x}-\mathrm e}{x}$。</p>
<p><b>怎么想：</b>这不是 $1^\infty$ 型，而是分子中含一个 $1^\infty$ 型的函数再减去它的极限，是 $\dfrac00$ 型。办法还是化指数：$(1+x)^{1/x}=\mathrm e^{\frac{\ln(1+x)}{x}}$，而 $\dfrac{\ln(1+x)}{x}=1-\dfrac x2+o(x)$，所以</p>
$$(1+x)^{1/x}-\mathrm e=\mathrm e\left(\mathrm e^{-\frac x2+o(x)}-1\right)\sim\mathrm e\cdot\left(-\frac x2\right),$$
<p>极限为 $-\dfrac{\mathrm e}{2}$。关键一步是<b>提出 $\mathrm e$ 之后把 $\mathrm e^{t}-1\sim t$ 用上</b>，这种"提出极限值再用 $\mathrm e^t-1\sim t$"的手法在幂指函数题里极其常见。</p>`
      },
      {
        kind: 'example', title: '例题：已知极限反求参数',
        html: R`<p>"已知极限反求参数"是本考点最常见的填空题形式。它的原理只有一条：<b>极限存在且等于给定值，等价于分子、分母的阶数与首项系数满足特定关系</b>。具体地：</p>
<ul>
<li>若 $\dfrac{f(x)}{g(x)}\to A\ne0$，则 $f$ 与 $g$ 同阶，且 $f$ 的首项系数是 $g$ 的 $A$ 倍；</li>
<li>若分母 $g\to0$ 而极限存在（有限），则分子必须 $f\to0$——这叫"<b>分母为零推分子为零</b>"，常用来定出第一个参数；</li>
<li>若 $x\to\infty$ 时 $f(x)-(ax+b)\to0$，则 $a=\lim\dfrac{f(x)}{x}$，$b=\lim\,[f(x)-ax]$（这正是斜渐近线的求法，见 diff.asym）。</li>
</ul>
<p><b>例 17.</b> 已知 $\lim_{x\to0}\dfrac{\ln(1+x)-(ax+bx^2)}{x^2}=2$，求 $a,b$。</p>
<p><b>怎么想：</b>分母 $x^2$ 是 2 阶，把分子用泰勒展到 $x^2$：$\ln(1+x)-ax-bx^2=(1-a)x+\left(-\dfrac12-b\right)x^2+o(x^2)$。极限存在要求 $x$ 项系数 $1-a=0$（否则分子是 1 阶，比分母低阶，极限为 $\infty$）；极限值为 $2$ 要求 $-\dfrac12-b=2$。得 $a=1$，$b=-\dfrac52$。</p>
<p><b>例 18.</b> 已知 $\lim_{x\to\infty}\left(\dfrac{x^2}{x+1}-ax-b\right)=0$，求 $a,b$。</p>
<p>通分：$\dfrac{x^2-(ax+b)(x+1)}{x+1}=\dfrac{(1-a)x^2-(a+b)x-b}{x+1}$。分母 1 阶，要极限为 $0$，分子的阶必须低于 1，即 $x^2$、$x$ 项系数全为 $0$：$a=1$，$b=-1$。验算：$\dfrac{x^2}{x+1}-x+1=\dfrac{1}{x+1}\to0$。</p>
<p><b>例 19（参数在指数位置）.</b> 已知 $\lim_{x\to0}\dfrac{x-\sin x}{ax^3}=\dfrac13$，求 $a$。</p>
<p>由 $x-\sin x\sim\dfrac{x^3}{6}$，极限 $=\dfrac{1}{6a}=\dfrac13$，$a=\dfrac12$。</p>
<p><b>反求参数的常见陷阱.</b> 不能假定"只要极限存在就能用洛必达"去反推：洛必达的逻辑方向是"导数之比极限存在 ⇒ 原极限存在"，反过来不成立。因此反求参数时，最稳妥的工具是<b>泰勒展开比较系数</b>，所有信息（阶数、系数）一目了然。</p>`
      },
      {
        kind: 'example', title: '反例：条件不满足时会怎样',
        html: R`<p><b>反例 1（对非未定式用洛必达）.</b> $\lim_{x\to0}\dfrac{\mathrm e^x-1}{\cos x}$。有人求导得 $\dfrac{\mathrm e^x}{-\sin x}\to\infty$。错！分母 $\cos x\to1\ne0$，这根本不是未定式，直接代入得 $0$。<b>每次用洛必达之前都要判型</b>，连续使用时每一步都要重新判。</p>
<p><b>反例 2（导数之比极限不存在，但原极限存在）.</b> $\lim_{x\to0}\dfrac{x^2\sin(1/x)}{\sin x}$。是 $\dfrac00$ 型。洛必达：$\dfrac{2x\sin(1/x)-\cos(1/x)}{\cos x}$，其中 $\cos(1/x)$ 在 $x\to0$ 时振荡无极限，所以洛必达<b>失效</b>。正确做法：$\dfrac{x^2\sin(1/x)}{\sin x}=\dfrac{x}{\sin x}\cdot x\sin\dfrac1x\to1\cdot0=0$（有界乘无穷小）。洛必达失效不等于极限不存在。</p>
<p><b>反例 3（加减项等价代换）.</b> $\lim_{x\to0}\dfrac{\mathrm e^x-1-x}{x^2}$。错误做法：$\mathrm e^x-1\sim x$，分子 $\sim x-x=0$，极限为 $0$。正确：$\mathrm e^x-1-x=\dfrac{x^2}{2}+o(x^2)$，极限为 $\dfrac12$。错因是 $\mathrm e^x-1$ 与 $x$ 的比值趋于 $1$，相减后主部抵消。</p>
<p><b>反例 4（复合函数中内层不趋于 $0$ 却用等价）.</b> $\lim_{x\to\infty}x\sin\dfrac{1}{x}$ 中 $\sin\dfrac1x\sim\dfrac1x$ 是对的，因为 $\dfrac1x\to0$；但 $\lim_{x\to\infty}\dfrac{\sin x}{x}$ 不能写 $\sin x\sim x$，因为 $x\not\to0$。等价表只在"自变量趋于 $0$"时成立。</p>
<p><b>反例 5（$1^\infty$ 公式用在非 $1^\infty$ 型上）.</b> $\lim_{x\to0^+}(1+x)^{1/x^2}$：$v(u-1)=\dfrac{x}{x^2}=\dfrac1x\to+\infty$，极限是 $+\infty$ 而不是某个有限的 $\mathrm e^A$——公式本身允许 $A=+\infty$，但如果你机械地认为"$1^\infty$ 型答案一定是 $\mathrm e$ 的有限次幂"就错了。</p>
<p><b>反例 6（$x\to\infty$ 时忘记分正负）.</b> $\lim_{x\to\infty}\dfrac{\sqrt{x^2+1}}{x}$：$x\to+\infty$ 时为 $1$，$x\to-\infty$ 时 $\sqrt{x^2+1}=|x|\sqrt{1+1/x^2}=-x\sqrt{1+1/x^2}$，极限为 $-1$；双侧极限不存在。凡含 $\sqrt{x^2}$、$\mathrm e^{x}$、$\arctan x$、$\dfrac{|x|}{x}$ 且 $x\to\infty$ 的题，都要分 $\pm\infty$。</p>`
      },
      {
        kind: 'pitfall', title: '初学者最常见的误区',
        html: R`<ul>
<li><b>误区 1："未定式"就是"极限不存在"。</b> 不对。未定式只是说"不能靠四则法则直接判断"，绝大多数未定式的极限都存在。</li>
<li><b>误区 2：不判型就动手。</b> 对非未定式用洛必达（反例 1），对 $\dfrac\infty\infty$ 型用 $1^\infty$ 公式……类型判断永远是第一步。连续用洛必达时，每一次都要重新确认仍是 $\dfrac00$ 或 $\dfrac\infty\infty$。</li>
<li><b>误区 3：加减项随意等价代换。</b> 判据是"换完之后不抵消"（比值不趋于 $1$）。不确定就用泰勒。</li>
<li><b>误区 4：泰勒展开的阶数不够或 $o$ 的阶写错。</b> 展开到几阶由分母（或抵消情况）决定；$x\cdot o(x^2)$ 是 $o(x^3)$，不是 $o(x^2)$。</li>
<li><b>误区 5：$1^\infty$ 公式里把 $u-1$ 写成 $u$。</b> 公式是 $\mathrm e^{\lim v(u-1)}$，不是 $\mathrm e^{\lim vu}$；本质是 $\ln u\sim u-1$。</li>
<li><b>误区 6：洛必达法则"反着用"。</b> 洛必达只能从"导数之比极限存在"推出"原极限存在"；不能因为原极限存在就断言导数之比极限存在，反求参数时尤其要注意。</li>
<li><b>误区 7：把 $\lim$ 写丢或提前代入一部分。</b> 等价代换、泰勒展开都是"整体极限过程"中的操作，中途把某个因子的极限值代进去、其余部分继续算，只有在该因子是<b>乘除因子且极限为非零有限数</b>时才合法（这叫"非零因子先代入"，它是乘法法则的直接推论，是允许的）；对加减部分这样做是错的。</li>
<li><b>误区 8：$x\to\infty$ 时不分正负、$x\to0$ 时忽视 $\mathrm e^{1/x}$ 之类的左右差异。</b> 见反例 6 与例 5。</li>
<li><b>误区 9：$0^0$ 与 $\infty^0$ 型套 $1^\infty$ 公式。</b> 这两种型没有捷径，必须写 $\mathrm e^{v\ln u}$ 再算 $v\ln u$。</li>
</ul>`
      },
      {
        kind: 'method', title: '题型识别与解题流程："看到……想到……"',
        html: R`<p><b>总流程（四步）：</b>① <b>判型</b>——每一块趋于什么；② <b>化为基本型</b>——幂型取指数，$0\cdot\infty$ 倒下去，$\infty-\infty$ 通分/有理化/提公因子；③ <b>先化简</b>——非零因子代入、乘除因子等价代换、$x\to\infty$ 时令 $t=1/x$；④ <b>选工具</b>——加减结构用泰勒，形式简单用洛必达，最后再等价一次收尾。</p>
<table><thead><tr><th>看到</th><th>想到</th><th>适用条件</th></tr></thead><tbody>
<tr><td>分子分母都 $\to0$，是乘积结构</td><td>逐个因子等价代换</td><td>只能换乘除因子</td></tr>
<tr><td>分子是两项相减（$x-\sin x$、$\mathrm e^x-1-x$……）</td><td>泰勒展开到不抵消为止，或提公因子化为乘积</td><td>展开阶数 $\ge$ 分母阶数</td></tr>
<tr><td>分子含变限积分 $\int_0^x\varphi(t)\,\mathrm dt$</td><td>洛必达（求导消去积分号），或先展开被积函数再逐项积分</td><td>被积函数连续</td></tr>
<tr><td>$\dfrac\infty\infty$ 型，含 $\ln x$、$x^n$、$\mathrm e^x$</td><td>洛必达，或按"对数 ≪ 幂 ≪ 指数"直接定结果；分子分母同除最高阶</td><td>$g\to\infty$，$g'\ne0$</td></tr>
<tr><td>$u^v$ 且 $u\to1$，$v\to\infty$</td><td>$\mathrm e^{\lim v(u-1)}$</td><td>必须是 $1^\infty$ 型</td></tr>
<tr><td>$u^v$ 且 $0^0$ 或 $\infty^0$</td><td>$\mathrm e^{v\ln u}$，算 $v\ln u$（$0\cdot\infty$ 型）</td><td>$u>0$</td></tr>
<tr><td>$u^v-1$ 在分子</td><td>$u^v-1=\mathrm e^{v\ln u}-1\sim v\ln u$</td><td>$v\ln u\to0$</td></tr>
<tr><td>两根式相减 $\to\infty-\infty$</td><td>分子有理化</td><td>—</td></tr>
<tr><td>两分式相减 $\to\infty-\infty$</td><td>通分化为 $\dfrac00$</td><td>—</td></tr>
<tr><td>$x\to\infty$</td><td>令 $t=1/x$；分 $\pm\infty$；同除最高阶无穷大</td><td>含 $\sqrt{x^2}$、$\mathrm e^x$、$\arctan x$ 必分正负</td></tr>
<tr><td>含 $\sin\dfrac1x$、$\cos\dfrac1x$ 等振荡项</td><td>有界乘无穷小；<b>不要</b>洛必达</td><td>—</td></tr>
<tr><td>已知极限求参数</td><td>泰勒展开比较系数；"分母为零推分子为零"</td><td>—</td></tr>
<tr><td>极限式中出现 $\lim$ 的结果本身（如 $(1+x)^{1/x}-\mathrm e$）</td><td>提出极限值，用 $\mathrm e^t-1\sim t$</td><td>—</td></tr>
</tbody></table>
<p><b>三件套的优先级口诀：</b>"<b>能等价、先等价；加减项、泰勒展；形式简、洛必达；变限积、求导算</b>"。</p>
<p><b>关于"精度"的一句话：</b>等价代换是一阶精度，泰勒是任意阶精度，洛必达每用一次相当于降一阶。做题前先估计"需要几阶精度"（看分母的阶），再决定工具，可以避免大量无效计算。</p>`
      },
      {
        kind: 'example', title: '近十年真题精讲（一）：幂指函数型',
        html: R`<p><b>真题 1.</b> <span class="qref" data-q="2025-11">2025 年第 11 题</span>（填空，5 分）　$\displaystyle\lim_{x\to0^+}\frac{x^x-1}{\ln x\cdot\ln(1-x)}=$ ______．</p>
<p><b>这题考什么：</b>含幂指函数 $x^x$ 的 $\dfrac00$ 型极限，核心是幂指函数的定义 $u^v=\mathrm e^{v\ln u}$ 与等价代换。</p>
<p><b>从题面看到什么：</b>① $x^x$ 是幂指函数，唯一出路是写成 $\mathrm e^{x\ln x}$；② 分母是两个因子的<b>乘积</b>，每个因子都可以单独等价代换；③ $x\to0^+$ 而不是 $x\to0$，提示 $\ln x$ 只在右侧有定义。</p>
<p><b>第一步：判型。</b> $x\ln x\to0$（本篇例 6，$0\cdot\infty$ 型用洛必达），所以 $x^x=\mathrm e^{x\ln x}\to1$，分子 $\to0$。分母：$\ln(1-x)\to0$，$\ln x\to-\infty$，乘积 $\ln x\ln(1-x)\sim\ln x\cdot(-x)=-x\ln x\to0$。所以是 $\dfrac00$ 型。</p>
<p><b>第二步：分子等价代换。</b> 由 $\mathrm e^t-1\sim t\ (t\to0)$ 及 $t=x\ln x\to0$，</p>
$$x^x-1=\mathrm e^{x\ln x}-1\sim x\ln x .$$
<p><b>第三步：分母等价代换。</b> 由 $\ln(1+t)\sim t$ 取 $t=-x$：$\ln(1-x)\sim-x$。分母是乘积，由等价代换定理可换：$\ln x\cdot\ln(1-x)\sim-x\ln x$。</p>
<p><b>第四步：相除。</b></p>
$$\lim_{x\to0^+}\frac{x^x-1}{\ln x\cdot\ln(1-x)}=\lim_{x\to0^+}\frac{x\ln x}{-x\ln x}=-1 .$$
<p><b>符号检验：</b>$x\in(0,1)$ 时 $x^x\lt1$，分子为负；$\ln x\lt0$、$\ln(1-x)\lt0$，分母为正；商为负，与 $-1$ 相符。</p>
<p><b>这道题告诉我们：</b>幂指函数的处理没有任何花样，就是"取指数"；而 $\mathrm e^{t}-1\sim t$ 是把"指数形式"重新变回"多项式形式"的桥梁。整道题三次等价代换全部发生在<b>乘除因子</b>上，这是它们合法的原因。</p>
<br/>
<p><b>真题 2.</b> <span class="qref" data-q="2024-11">2024 年第 11 题</span>（填空，5 分）　若 $\displaystyle\lim_{x\to0}\frac{\left(1+ax^2\right)^{\sin x}-1}{x^3}=6$，则 $a=$ ______．</p>
<p><b>这题考什么：</b>幂指函数 $u^v-1$ 型的等价代换 + 已知极限反求参数。</p>
<p><b>从题面看到什么：</b>分子 $(1+ax^2)^{\sin x}-1$ 是"幂指函数减 $1$"，立刻想到 $u^v-1=\mathrm e^{v\ln u}-1\sim v\ln u$；分母 $x^3$ 告诉我们分子必须恰好是 3 阶无穷小，首项系数为 $6$。</p>
<p><b>第一步：化指数。</b> $(1+ax^2)^{\sin x}=\mathrm e^{\sin x\ln(1+ax^2)}$。当 $x\to0$ 时 $\sin x\to0$、$\ln(1+ax^2)\to0$，指数 $t=\sin x\ln(1+ax^2)\to0$。</p>
<p><b>第二步：三次等价代换，全是乘积因子。</b></p>
$$\mathrm e^{t}-1\sim t=\sin x\cdot\ln(1+ax^2)\sim x\cdot ax^2=ax^3 .$$
<p>其中 $\ln(1+ax^2)\sim ax^2$ 需要 $ax^2\to0$，这对任意常数 $a$ 都成立（若 $a=0$，分子恒为 $0$，极限为 $0\ne6$，故 $a\ne0$，不影响）。</p>
<p><b>第三步：求参数。</b> $\lim_{x\to0}\dfrac{ax^3}{x^3}=a=6$。</p>
<p><b>这道题告诉我们：</b>反求参数的题，本质是"配平阶数与系数"。分母是 3 阶，分子的首项必须是 $6x^3$。如果分子里 $ax^2$ 换成 $ax$，首项就成了 $ax^2$，极限为 $\infty$，不可能等于 $6$——这种"阶数不配"的判断，可以在动笔前一眼看出。</p>
<br/>
<p><b>真题 3.</b> <span class="qref" data-q="2018-9">2018 年第 9 题</span>（填空，4 分）　若 $\displaystyle\lim_{x\to0}\left(\frac{1-\tan x}{1+\tan x}\right)^{\frac{1}{\sin kx}}=\mathrm{e}$，则 $k=$ ______．</p>
<p><b>这题考什么：</b>$1^\infty$ 型标准公式 + 反求参数。</p>
<p><b>从题面看到什么：</b>底数 $\dfrac{1-\tan x}{1+\tan x}\to1$，指数 $\dfrac{1}{\sin kx}\to\infty$（$k\ne0$），典型 $1^\infty$ 型，直接用公式 $\mathrm e^{\lim v(u-1)}$。</p>
<p><b>第一步：算 $u-1$。</b> $u-1=\dfrac{1-\tan x}{1+\tan x}-1=\dfrac{-2\tan x}{1+\tan x}$。这一步是减法，但它是精确的代数运算，不涉及代换。</p>
<p><b>第二步：算 $\lim v(u-1)$。</b></p>
$$\lim_{x\to0}\frac{-2\tan x}{(1+\tan x)\sin kx}=\lim_{x\to0}\frac{-2x}{1\cdot kx}=-\frac2k .$$
<p>这里 $\tan x\sim x$、$\sin kx\sim kx$ 都是乘除因子；$1+\tan x\to1$ 是非零因子，直接代入。</p>
<p><b>第三步：由 $1^\infty$ 公式，</b>原极限 $=\mathrm e^{-2/k}=\mathrm e$，所以 $-\dfrac2k=1$，$k=-2$。</p>
<p><b>这道题告诉我们：</b>$1^\infty$ 公式把一个看起来吓人的幂指极限变成了一个 $0\cdot\infty$ 型的小计算；反求参数时参数 $k$ 就藏在这个小计算的结果里。注意公式中的 $u-1$ 必须精确计算，不要用 $u\sim1$ 之类的糊涂写法。</p>`
      },
      {
        kind: 'example', title: '近十年真题精讲（二）：∞−∞ 型与变限积分',
        html: R`<p><b>真题 4.</b> <span class="qref" data-q="2020-9">2020 年第 9 题</span>（填空，4 分）　$\displaystyle\lim_{x\to0}\left[\frac{1}{\mathrm{e}^x-1}-\frac{1}{\ln(1+x)}\right]=$ ______.</p>
<p><b>这题考什么：</b>$\infty-\infty$ 型未定式，通分后用泰勒展开配平阶数。</p>
<p><b>从题面看到什么：</b>两个分式相减，各自 $\to\infty$，标准动作是<b>通分</b>。通分后分母是乘积 $(\mathrm e^x-1)\ln(1+x)\sim x\cdot x=x^2$，于是分子必须展开到 $x^2$。</p>
<p><b>第一步：通分。</b></p>
$$\frac{1}{\mathrm e^x-1}-\frac{1}{\ln(1+x)}=\frac{\ln(1+x)-(\mathrm e^x-1)}{(\mathrm e^x-1)\ln(1+x)} .$$
<p><b>第二步：分母等价代换。</b> 分母是两个无穷小之积，各换各的：$(\mathrm e^x-1)\ln(1+x)\sim x^2$。</p>
<p><b>第三步：分子泰勒展开到 $x^2$。</b> 分子是两项相减，首项 $x$ 会抵消，不能等价代换，用泰勒：</p>
$$\ln(1+x)=x-\frac{x^2}{2}+o(x^2),\qquad \mathrm e^x-1=x+\frac{x^2}{2}+o(x^2),$$
$$\ln(1+x)-(\mathrm e^x-1)=-\frac{x^2}{2}-\frac{x^2}{2}+o(x^2)=-x^2+o(x^2) .$$
<p><b>第四步：相除。</b> $\lim_{x\to0}\dfrac{-x^2+o(x^2)}{x^2}=-1$。</p>
<p><b>这道题告诉我们：</b>$\infty-\infty$ → 通分 → 分母乘积等价代换定阶 → 分子泰勒配平，是一条固定流水线。本篇例 10 是它的"去参数版"，只把 $\mathrm e^x-1$ 换成 $x$，答案从 $-1$ 变成 $-\dfrac12$——差的正是 $\mathrm e^x-1$ 的二阶项 $\dfrac{x^2}{2}$，这再次说明加减项里二阶项不能丢。</p>
<br/>
<p><b>真题 5.</b> <span class="qref" data-q="2021-17">2021 年第 17 题</span>（解答，10 分）　求极限 $\displaystyle\lim_{x\to0}\left(\frac{1+\int_0^x\mathrm{e}^{t^2}\,\mathrm{d}t}{\mathrm{e}^x-1}-\frac{1}{\sin x}\right)$．</p>
<p><b>这题考什么：</b>$\infty-\infty$ 型 + 变限积分的泰勒展开，是本考点与 int.ftc、diff.taylor 的综合，也是近十年本考点唯一的解答题。</p>
<p><b>从题面看到什么：</b>① 第一项分子 $\to1$、分母 $\to0$，第一项 $\to\infty$；第二项 $\to\infty$，是 $\infty-\infty$ 型，通分。② 通分后分母 $(\mathrm e^x-1)\sin x\sim x^2$，分子需要展到 $x^2$。③ 变限积分 $\int_0^x\mathrm e^{t^2}\mathrm dt$ 没有初等原函数，但我们只需要它的前几项：把 $\mathrm e^{t^2}=1+t^2+o(t^2)$ 逐项积分即可，或者用洛必达让它被求导消掉。</p>
<p><b>第一步：通分。</b></p>
$$\text{原式}=\lim_{x\to0}\frac{\left(1+\int_0^x\mathrm e^{t^2}\mathrm dt\right)\sin x-(\mathrm e^x-1)}{(\mathrm e^x-1)\sin x}=\lim_{x\to0}\frac{\left(1+\int_0^x\mathrm e^{t^2}\mathrm dt\right)\sin x-(\mathrm e^x-1)}{x^2}.$$
<p>分母是乘积，等价代换 $\mathrm e^x-1\sim x$、$\sin x\sim x$ 合法。</p>
<p><b>第二步：变限积分的展开。</b> 由 $\mathrm e^{u}=1+u+o(u)$ 取 $u=t^2$ 得 $\mathrm e^{t^2}=1+t^2+o(t^2)$，逐项积分：</p>
$$\int_0^x\mathrm e^{t^2}\mathrm dt=x+\frac{x^3}{3}+o(x^3)=x+o(x^2).$$
<p>（为什么可以逐项积分 $o$：若 $|r(t)|\le\varepsilon t^2$ 当 $|t|$ 小，则 $\left|\int_0^xr(t)\mathrm dt\right|\le\varepsilon\dfrac{|x|^3}{3}$，故积分后是 $o(x^3)$。）既然目标只到 $x^2$，写 $x+o(x^2)$ 就够了。</p>
<p><b>第三步：分子展开到 $x^2$。</b></p>
$$\left(1+x+o(x^2)\right)\left(x+o(x^2)\right)=x+x^2+o(x^2),\qquad \mathrm e^x-1=x+\frac{x^2}{2}+o(x^2),$$
$$\text{分子}=x+x^2-x-\frac{x^2}{2}+o(x^2)=\frac{x^2}{2}+o(x^2).$$
<p>注意 $\sin x=x-\dfrac{x^3}{6}+o(x^3)=x+o(x^2)$，三阶项对本题无用，不必写。</p>
<p><b>第四步：相除。</b> 原式 $=\lim_{x\to0}\dfrac{\frac{x^2}{2}+o(x^2)}{x^2}=\dfrac12$。</p>
<p><b>另一条路（洛必达）：</b>对第一步得到的 $\dfrac00$ 型分式求导，分子导数为 $\mathrm e^{x^2}\sin x+\left(1+\int_0^x\mathrm e^{t^2}\mathrm dt\right)\cos x-\mathrm e^x$（变限积分求导公式，见 int.ftc），分母导数 $2x$。这仍是 $\dfrac00$ 型，再求一次导会出现 $2x\mathrm e^{x^2}\sin x+2\mathrm e^{x^2}\cos x-\left(1+\int_0^x\mathrm e^{t^2}\mathrm dt\right)\sin x-\mathrm e^x$，代入 $x=0$ 得 $0+2-0-1=1$，除以 $2$ 得 $\dfrac12$。可行，但比泰勒繁琐且容易算错，这正是"加减结构优先泰勒"的理由。</p>
<p><b>这道题告诉我们：</b>解答题的得分点在于"每一步合法"：通分后的分母等价代换要说明是乘积因子；变限积分要么展开、要么求导；分子展开的阶数要和分母匹配。写清楚 $o(x^2)$ 的运算，比最后那个 $\dfrac12$ 更重要。</p>`
      },
      {
        kind: 'exam', title: '考研怎么考',
        html: R`<p>近十年（2016–2025）数学一中，以本考点为主考点或重要考点的题共 8 道，题型与分值分布如下。</p>
<ul>
<li><b>题型与分值：以填空题为主（4–5 分），偶有解答题（10 分）和选择题。</b> 填空题：<span class="qref" data-q="2016-9">2016 年第 9 题</span>、<span class="qref" data-q="2018-9">2018 年第 9 题</span>、<span class="qref" data-q="2020-9">2020 年第 9 题</span>、<span class="qref" data-q="2023-11">2023 年第 11 题</span>、<span class="qref" data-q="2024-11">2024 年第 11 题</span>、<span class="qref" data-q="2025-11">2025 年第 11 题</span>；解答题：<span class="qref" data-q="2021-17">2021 年第 17 题</span>；选择题（以斜渐近线为主考点、极限计算为工具）：<span class="qref" data-q="2023-1">2023 年第 1 题</span>。几乎每年都有一道，是数学一"必拿分"的基础题。</li>
<li><b>设问方式一：直接求极限值。</b> 命题人偏爱 $\infty-\infty$ 型（<span class="qref" data-q="2020-9">2020 年第 9 题</span>、<span class="qref" data-q="2021-17">2021 年第 17 题</span>）和含幂指函数的 $\dfrac00$ 型（<span class="qref" data-q="2025-11">2025 年第 11 题</span>），都要求"通分或取指数 → 分母乘积等价 → 分子泰勒配平"的完整流程。</li>
<li><b>设问方式二：已知极限反求参数。</b> 给出极限值求 $a$ 或 $k$：<span class="qref" data-q="2018-9">2018 年第 9 题</span>（$1^\infty$ 型求 $k$）、<span class="qref" data-q="2024-11">2024 年第 11 题</span>（幂指函数 $u^v-1$ 求 $a$）；以及"等价无穷小"语言包装的反求参数：<span class="qref" data-q="2023-11">2023 年第 11 题</span>（给出 $f\sim g$，用泰勒比较系数求 $ab$）。这一类的本质都是"配平阶数与首项系数"。</li>
<li><b>常见综合点：</b>与<b>变限积分</b>综合（<span class="qref" data-q="2016-9">2016 年第 9 题</span>：分子是变限积分，洛必达求导消去积分号；<span class="qref" data-q="2021-17">2021 年第 17 题</span>：变限积分的泰勒展开）；与<b>泰勒公式</b>综合（<span class="qref" data-q="2020-9">2020 年第 9 题</span>、<span class="qref" data-q="2023-11">2023 年第 11 题</span>）；与<b>斜渐近线</b>综合（<span class="qref" data-q="2023-1">2023 年第 1 题</span>：求 $\lim\dfrac yx$ 与 $\lim(y-kx)$，后者是 $\infty\cdot0$ 型，用 $\ln(1+u)\sim u$）。此外，极限计算还是间断点分类、无穷小阶数比较、导数定义等题目的"基本功"，虽不单独计分，但处处用到。</li>
<li><b>近几年的变化：</b>2024、2025 两年连续考查<b>幂指函数</b>（$(1+ax^2)^{\sin x}$、$x^x$），强调 $u^v=\mathrm e^{v\ln u}$ 与 $\mathrm e^t-1\sim t$ 的配合；题目的计算量不大，但每一步都在考"等价代换是否合法"。早些年（2016、2018）更偏向洛必达与 $1^\infty$ 公式的直接使用。整体趋势是：<b>工具不新，但更看重对"何时能换、换到几阶"的理解</b>。</li>
<li><b>复习建议：</b>把本篇"方法"一节的表格练到条件反射；每道填空题控制在 3 分钟内；解答题要把"是乘积因子所以可以等价代换"、"展开到 $x^2$ 因为分母是 $x^2$"这类理由写出来，这是步骤分。</li>
</ul>`
      },
      {
        kind: 'check', title: '自测',
        items: [
          { q: R`<p>判断对错并说明理由："未定式"的意思是这个极限不存在。</p>`, a: R`<p>错。未定式指"仅凭各部分的极限无法确定整体极限"，整体极限可以是任何实数、$\infty$ 或不存在，要通过计算才知道。例如 $\lim_{x\to0}\dfrac{\sin x}{x}$ 是 $\dfrac00$ 型，极限为 $1$。</p>` },
          { q: R`<p>下列哪一个<b>不是</b>未定式？</p>`, options: [R`<p>$\lim_{x\to0^+}x^{1/x}$</p>`, R`<p>$\lim_{x\to0^+}x^{x}$</p>`, R`<p>$\lim_{x\to+\infty}x^{1/x}$</p>`, R`<p>$\lim_{x\to+\infty}\left(1+\dfrac1x\right)^{x}$</p>`], correct: 0, explain: R`<p>A 是 $0^{+\infty}$ 型，是定式：$x^{1/x}=\mathrm e^{\frac{\ln x}{x}}$，指数 $\to-\infty$，极限为 $0$。B 是 $0^0$，C 是 $\infty^0$，D 是 $1^\infty$，均为未定式。</p>` },
          { q: R`<p>计算 $\lim_{x\to0}\dfrac{\ln(1+x)-x}{\cos x-1}$。</p>`, a: R`<p>分子 $\ln(1+x)-x=-\dfrac{x^2}{2}+o(x^2)$（加减结构，用泰勒），分母 $\cos x-1\sim-\dfrac{x^2}{2}$（单独一个无穷小，可等价）。极限 $=\dfrac{-x^2/2}{-x^2/2}=1$。若把分子等价成 $x-x=0$ 会得到错误答案 $0$。</p>` },
          { q: R`<p>判断对错："$\lim_{x\to+\infty}\dfrac{x+\sin x}{x}$ 是 $\dfrac\infty\infty$ 型，用洛必达得 $\lim(1+\cos x)$ 不存在，所以原极限不存在。"</p>`, a: R`<p>错。洛必达法则只保证"导数之比极限存在 ⇒ 原极限存在且相等"，导数之比极限不存在时法则失效，不能得出任何结论。原极限 $=\lim\left(1+\dfrac{\sin x}{x}\right)=1$（有界除以无穷大）。</p>` },
          { q: R`<p>$\lim_{x\to0}(1+2x)^{3/x}$ 等于：</p>`, options: [R`<p>$\mathrm e^{2}$</p>`, R`<p>$\mathrm e^{3}$</p>`, R`<p>$\mathrm e^{6}$</p>`, R`<p>$\mathrm e^{3/2}$</p>`], correct: 2, explain: R`<p>$1^\infty$ 型，$\lim v(u-1)=\lim\dfrac3x\cdot2x=6$，答案 $\mathrm e^6$。</p>` },
          { q: R`<p>已知 $\lim_{x\to0}\dfrac{\sin x-ax}{x^3}$ 存在，求 $a$ 及该极限值。</p>`, a: R`<p>$\sin x-ax=(1-a)x-\dfrac{x^3}{6}+o(x^3)$。分母 3 阶，极限存在要求 $x$ 项系数为 $0$：$a=1$；此时极限 $=-\dfrac16$。这是"分母为零推分子低阶项为零"的典型用法。</p>` },
          { q: R`<p>求 $\lim_{x\to0^+}(\sin x)^{x}$，并说明它是哪种型。</p>`, a: R`<p>$0^0$ 型。$(\sin x)^x=\mathrm e^{x\ln\sin x}$，$x\ln\sin x=x\ln\dfrac{\sin x}{x}+x\ln x$，第一项 $\to0\cdot\ln1=0$，第二项 $\to0$（$0\cdot\infty$ 型，用洛必达：$\dfrac{\ln x}{1/x}\to0$）。故极限 $=\mathrm e^0=1$。</p>` },
          { q: R`<p>用泰勒公式求 $\lim_{x\to0}\dfrac{\tan x-x}{x^3}$ 时，$\tan x$ 至少要展开到几阶？为什么？</p>`, a: R`<p>至少到 $x^3$ 项：$\tan x=x+\dfrac{x^3}{3}+o(x^3)$。因为分母是 3 阶，且分子中 $x$ 项抵消，必须展开到首次不抵消的 $x^3$ 项，才能得到极限 $\dfrac13$。只展到 $x$ 项得到的分子是 $o(x)$，无法与 $x^3$ 比较。</p>` },
          { q: R`<p>判断对错：在 $\lim_{x\to0}\dfrac{(1+x)\sin x-x}{x^2}$ 中，可以先把非零因子 $1+x$ 的极限 $1$ 代入，得 $\lim\dfrac{\sin x-x}{x^2}=0$。</p>`, a: R`<p>错。"非零因子先代入"只适用于<b>整个分式的乘除因子</b>。这里 $1+x$ 只是分子中一项的因子，分子是加减结构 $(1+x)\sin x-x=\sin x+x\sin x-x$。正确做法：$\sin x-x=o(x^2)$（实为 $-\dfrac{x^3}{6}$），$x\sin x\sim x^2$，分子 $=x^2+o(x^2)$，极限为 $1$。</p>` }
        ]
      }
    ]
  };
});
