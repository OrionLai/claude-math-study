registerLesson(function (R) {
  return {
    id: 'lim.inf', ch: 'lim', title: '无穷小与无穷大',
    summary: R`无穷小就是"极限为 0 的量"，无穷大就是"绝对值无限增大的量"，两者互为倒数。真正有用的是无穷小的比较：高阶、同阶、等价、k 阶，它们刻画"趋于 0 的快慢"。等价无穷小代换定理是整个极限计算的核心工具，但只能在乘除因子上用，加减里要小心。`,
    prereq: ['lim.funcdef', 'lim.rules'],
    sections: [
      {
        kind: 'why', title: '为什么要研究无穷小：极限计算的本质是"比快慢"',
        html: R`<p>学完函数极限的定义之后，我们已经知道 $\lim\limits_{x\to0}x=0$、$\lim\limits_{x\to0}\sin x=0$、$\lim\limits_{x\to0}(1-\cos x)=0$。它们都趋于 $0$，但<b>趋于 $0$ 的速度一样吗</b>？看一组数据（$x=0.1$）：</p>
<table><thead><tr><th>$x$</th><th>$\sin x$</th><th>$1-\cos x$</th><th>$x^3$</th></tr></thead>
<tbody><tr><td>$0.1$</td><td>$0.0998\cdots$</td><td>$0.00499\cdots$</td><td>$0.001$</td></tr>
<tr><td>$0.01$</td><td>$0.0099998\cdots$</td><td>$0.0000499\cdots$</td><td>$0.000001$</td></tr></tbody></table>
<p>可以看出：$\sin x$ 和 $x$ 几乎一样；$1-\cos x$ 差不多是 $x^2$ 的一半；$x^3$ 比它们都小得多。也就是说，趋于 $0$ 的量有"快慢之分"。下图画出了 $y=\sqrt{x}$、$y=x$、$y=x^2$、$y=x^3$ 在 $x\to0^+$ 时的样子：越贴近 $x$ 轴的，趋于 $0$ 越快。</p>
<svg viewBox="0 0 420 260" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<line x1="40" y1="230" x2="400" y2="230" stroke="currentColor" stroke-width="1"/>
<line x1="40" y1="230" x2="40" y2="10" stroke="currentColor" stroke-width="1"/>
<text x="392" y="248" fill="currentColor" font-size="12">x</text>
<text x="28" y="22" fill="currentColor" font-size="12">y</text>
<text x="30" y="244" fill="currentColor" font-size="12">O</text>
<polyline fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4,3" points="40,230 57,183 74,164 91,149 108,136 125,125 142,115 159,106 176,97 193,89 210,82 227,74 244,67 261,61 278,54 295,48 312,42 329,36 346,31 363,25 380,20"/>
<polyline fill="none" stroke="currentColor" stroke-width="1.5" points="40,230 57,220 74,209 91,198 108,188 125,178 142,167 159,156 176,146 193,136 210,125 227,114 244,104 261,94 278,83 295,72 312,62 329,52 346,41 363,30 380,20"/>
<polyline fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7,3" points="40,230 57,229 74,228 91,225 108,222 125,217 142,211 159,204 176,196 193,187 210,178 227,166 244,154 261,141 278,127 295,112 312,96 329,78 346,60 363,40 380,20"/>
<polyline fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2" points="40,230 57,230 74,230 91,229 108,228 125,227 142,224 159,221 176,217 193,211 210,204 227,195 244,185 261,172 278,158 295,141 312,122 329,101 346,77 363,50 380,20"/>
<text x="380" y="16" fill="currentColor" font-size="11">(1,1)</text>
<line x1="50" y1="30" x2="80" y2="30" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4,3"/>
<text x="86" y="34" fill="currentColor" font-size="12">y=√x（最慢）</text>
<line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="1.5"/>
<text x="86" y="54" fill="currentColor" font-size="12">y=x</text>
<line x1="50" y1="70" x2="80" y2="70" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7,3"/>
<text x="86" y="74" fill="currentColor" font-size="12">y=x²</text>
<line x1="50" y1="90" x2="80" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2"/>
<text x="86" y="94" fill="currentColor" font-size="12">y=x³（最快）</text>
</svg>
<p>为什么要在乎快慢？因为极限计算里最常见的 $\dfrac{0}{0}$ 型未定式，本质上就是<b>分子分母两个趋于 $0$ 的量在比快慢</b>：</p>
<ul>
<li>分子比分母快（分子更小）→ 比值趋于 $0$；</li>
<li>分子比分母慢 → 比值趋于 $\infty$；</li>
<li>一样快 → 比值趋于一个非零常数。</li>
</ul>
<p>所以"无穷小的比较"就是给"快慢"下一个精确定义，而"等价无穷小代换"则是把复杂的无穷小换成一样快的简单无穷小（比如把 $\sin x$ 换成 $x$），从而让计算变得容易。这一篇所有的概念都围绕这一个目的展开。</p>
<p>另一方面，"无穷大"则是镜像的概念：$x\to0$ 时 $\dfrac1x$ 的绝对值无限变大。它和无穷小互为倒数，所以研究清楚一个，另一个也就清楚了。</p>`
      },
      {
        kind: 'def', title: '无穷小的定义',
        html: R`<p><b>定义（无穷小）.</b> 设函数 $f(x)$ 在 $x_0$ 的某去心邻域内有定义。若</p>
$$\lim_{x\to x_0}f(x)=0,$$
<p>则称 $f(x)$ 是当 $x\to x_0$ 时的<b>无穷小</b>（或无穷小量）。把 $x\to x_0$ 换成 $x\to x_0^+$、$x\to x_0^-$、$x\to\infty$、$x\to+\infty$、$x\to-\infty$ 或数列的 $n\to\infty$，可以类似地定义相应过程下的无穷小。</p>
<p>按函数极限的 $\varepsilon$-$\delta$ 语言展开，就是：对任意 $\varepsilon>0$，存在 $\delta>0$，当 $0<|x-x_0|<\delta$ 时，$|f(x)|<\varepsilon$。</p>
<p><b>逐字拆解：</b></p>
<ul>
<li><b>"当 $x\to x_0$ 时"</b>——无穷小一定要指明自变量的变化过程。同一个函数在一个过程下是无穷小，在另一个过程下可能不是：$\dfrac1x$ 当 $x\to\infty$ 时是无穷小，当 $x\to1$ 时极限为 $1$，不是无穷小。去掉"过程"这几个字，"无穷小"就没有意义。</li>
<li><b>"极限为 $0$"</b>——无穷小描述的是一个<b>变化趋势</b>，不是一个"很小的数"。$10^{-100}$ 再小也是个固定的数，极限是它自己而不是 $0$，所以它不是无穷小。</li>
<li><b>唯一的常数无穷小是 $0$</b>——常函数 $f(x)\equiv0$ 在任何过程下极限都是 $0$，所以 $0$ 可以看成无穷小；其他常数都不行。</li>
<li>定义里的 $|f(x)|<\varepsilon$ 不要求 $f(x)\ne0$，也不要求 $f$ 保持某个符号：无穷小可以是正的、负的，也可以在 $0$ 附近来回振荡（如 $x\sin\frac1x$）。</li>
</ul>
<p><b>正例：</b>$x\to0$ 时，$x$、$\sin x$、$1-\cos x$、$\mathrm{e}^x-1$、$x^2\sin\frac1x$ 都是无穷小；$x\to\infty$ 时 $\dfrac1x$、$\dfrac{\sin x}{x}$ 是无穷小；$n\to\infty$ 时 $\dfrac1n$、$q^n\ (|q|<1)$ 是无穷小。</p>
<p><b>反例：</b>$x\to0$ 时 $\cos x$ 不是无穷小（极限是 $1$）；$x\to0$ 时 $\sin\dfrac1x$ 不是无穷小（极限不存在，尽管它有界）；$x\to0^+$ 时 $x^x$ 不是无穷小（极限是 $1$）。</p>`
      },
      {
        kind: 'def', title: '无穷大的定义',
        html: R`<p><b>定义（无穷大）.</b> 设 $f(x)$ 在 $x_0$ 的某去心邻域内有定义。若对任意给定的正数 $M$（无论多大），总存在 $\delta>0$，使得当 $0<|x-x_0|<\delta$ 时恒有</p>
$$|f(x)|>M,$$
<p>则称 $f(x)$ 是当 $x\to x_0$ 时的<b>无穷大</b>，记作 $\lim\limits_{x\to x_0}f(x)=\infty$。若把 $|f(x)|>M$ 换成 $f(x)>M$（或 $f(x)<-M$），则称为<b>正无穷大</b>（或<b>负无穷大</b>），记作 $\lim f(x)=+\infty$（或 $-\infty$）。其他变化过程类似，例如 $x\to+\infty$ 时的无穷大：对任意 $M>0$，存在 $X>0$，当 $x>X$ 时恒有 $|f(x)|>M$（下面的反例就是在这个过程下讨论的）。</p>
<p><b>逐字拆解：</b></p>
<ul>
<li><b>"对任意 $M$"</b>——无论你给多大的门槛，$f$ 最终都能超过它。这是"无限变大"的精确说法。只对某个固定 $M$ 成立（例如 $|f(x)|>100$）说明不了什么。</li>
<li><b>"存在 $\delta$，当 $0<|x-x_0|<\delta$ 时恒有"</b>——是在 $x_0$ 附近<b>所有</b>的点上都超过 $M$，而不是"有些点超过 $M$"。这一条正是区分"无穷大"和"无界"的关键（见下面的反例）。</li>
<li><b>记号 $\lim f(x)=\infty$ 只是一种写法</b>——按极限的定义，这时极限是<b>不存在</b>的（极限必须是一个确定的实数）。写 $=\infty$ 是为了描述"不存在的方式"。考研里说"极限存在"一律指极限是有限数。</li>
<li>$|f(x)|>M$ 不限定符号，所以 $x\to0$ 时 $\dfrac1x$ 是无穷大（$\to\infty$），虽然它左边趋于 $-\infty$、右边趋于 $+\infty$。</li>
</ul>
<p><b>正例：</b>$x\to0$ 时 $\dfrac1x$、$\dfrac1{\sin x}$ 是无穷大；$x\to0^+$ 时 $\ln x\to-\infty$；$x\to+\infty$ 时 $\mathrm{e}^x\to+\infty$；$x\to\frac\pi2^-$ 时 $\tan x\to+\infty$。</p>
<p><b>反例（无界但不是无穷大）：</b>$f(x)=x\sin x$ 在 $x\to+\infty$ 时无界（取 $x_n=2n\pi+\frac\pi2$ 得 $f(x_n)=x_n\to+\infty$），但不是无穷大：取 $x_n'=n\pi$ 得 $f(x_n')=0$，所以不可能对"所有充分大的 $x$"都有 $|f(x)|>M$。类似地，$x\to0$ 时 $\dfrac1x\sin\dfrac1x$ 无界但不是无穷大。</p>
<svg viewBox="0 0 420 260" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<line x1="40" y1="130" x2="410" y2="130" stroke="currentColor" stroke-width="1"/>
<line x1="40" y1="250" x2="40" y2="10" stroke="currentColor" stroke-width="1"/>
<text x="412" y="135" fill="currentColor" font-size="12">x</text>
<text x="28" y="20" fill="currentColor" font-size="12">y</text>
<polyline fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3,3" points="40,130 76,119 112,109 148,98 184,87 220,77 256,66 292,56 328,45 364,34 400,24"/>
<polyline fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3,3" points="40,130 76,141 112,151 148,162 184,173 220,183 256,194 292,204 328,215 364,226 400,236"/>
<polyline fill="none" stroke="currentColor" stroke-width="1.6" points="40,130 41,130 42,130 43,130 44,130 44,130 45,130 46,130 47,129 48,129 49,129 50,129 51,129 52,129 53,128 54,128 54,128 55,128 56,127 57,127 58,127 59,127 60,126 61,126 62,126 62,125 63,125 64,125 65,124 66,124 67,124 68,123 69,123 70,122 71,122 72,122 72,121 73,121 74,121 75,120 76,120 77,120 78,119 79,119 80,119 80,118 81,118 82,118 83,117 84,117 85,117 86,116 87,116 88,116 89,116 90,116 90,115 91,115 92,115 93,115 94,115 95,115 96,115 97,115 98,115 98,115 99,115 100,115 101,115 102,115 103,115 104,115 105,115 106,115 107,116 108,116 108,116 109,116 110,117 111,117 112,118 113,118 114,118 115,119 116,119 116,120 117,120 118,121 119,121 120,122 121,123 122,123 123,124 124,125 125,125 126,126 126,127 127,128 128,128 129,129 130,130 131,131 132,132 133,133 134,133 134,134 135,135 136,136 137,137 138,138 139,139 140,140 141,141 142,142 143,143 144,144 144,145 145,146 146,147 147,148 148,149 149,150 150,151 151,152 152,153 152,153 153,154 154,155 155,156 156,157 157,158 158,159 159,160 160,160 161,161 162,162 162,163 163,163 164,164 165,165 166,165 167,166 168,167 169,167 170,168 170,168 171,169 172,169 173,169 174,170 175,170 176,170 177,170 178,170 179,171 180,171 180,171 181,171 182,171 183,171 184,170 185,170 186,170 187,170 188,169 188,169 189,169 190,168 191,168 192,167 193,167 194,166 195,165 196,164 197,164 197,163 198,162 199,161 200,160 201,159 202,158 203,157 204,156 205,155 206,154 206,152 207,151 208,150 209,148 210,147 211,146 212,144 213,143 214,141 215,140 216,138 216,137 217,135 218,133 219,132 220,130 221,128 222,127 223,125 224,123 224,121 225,120 226,118 227,116 228,114 229,113 230,111 231,109 232,108 233,106 234,104 234,102 235,101 236,99 237,97 238,96 239,94 240,92 241,91 242,89 242,88 243,86 244,85 245,83 246,82 247,81 248,79 249,78 250,77 251,75 252,74 252,73 253,72 254,71 255,70 256,69 257,68 258,68 259,67 260,66 260,66 261,65 262,65 263,64 264,64 265,64 266,63 267,63 268,63 269,63 270,63 270,63 271,63 272,64 273,64 274,64 275,65 276,65 277,66 278,67 278,67 279,68 280,69 281,70 282,71 283,72 284,73 285,74 286,76 287,77 288,78 288,80 289,81 290,83 291,85 292,86 293,88 294,90 295,92 296,94 296,96 297,98 298,100 299,102 300,104 301,106 302,108 303,111 304,113 305,115 306,118 306,120 307,123 308,125 309,128 310,130 311,133 312,135 313,138 314,140 314,143 315,145 316,148 317,150 318,153 319,155 320,158 321,161 322,163 323,166 324,168 324,170 325,173 326,175 327,178 328,180 329,182 330,185 331,187 332,189 332,191 333,193 334,195 335,197 336,199 337,201 338,203 339,205 340,206 341,208 341,209 342,211 343,212 344,214 345,215 346,216 347,217 348,218 349,219 350,220 350,221 351,221 352,222 353,222 354,223 355,223 356,223 357,223 358,223 359,223 360,223 360,223 361,223 362,222 363,222 364,221 365,220 366,219 367,219 368,218 369,216 369,215 370,214 371,213 372,211 373,210 374,208 375,206 376,204 377,202 377,200 378,198 379,196 380,194 381,192 382,189 383,187 384,184 385,182 386,179 386,176 387,174 388,171 389,168 390,165 391,162 392,159 393,156 394,153 395,150 396,146 396,143 397,140 398,137 399,133 400,130"/>
<line x1="40" y1="79" x2="410" y2="79" stroke="currentColor" stroke-width="1" stroke-dasharray="6,3"/>
<line x1="40" y1="181" x2="410" y2="181" stroke="currentColor" stroke-width="1" stroke-dasharray="6,3"/>
<text x="44" y="75" fill="currentColor" font-size="11">y=M</text>
<text x="44" y="193" fill="currentColor" font-size="11">y=−M</text>
<circle cx="130" cy="130" r="3" fill="currentColor"/><circle cx="220" cy="130" r="3" fill="currentColor"/><circle cx="310" cy="130" r="3" fill="currentColor"/><circle cx="400" cy="130" r="3" fill="currentColor"/>
<text x="134" y="124" fill="currentColor" font-size="11">π</text>
<text x="200" y="124" fill="currentColor" font-size="11">2π</text>
<text x="314" y="124" fill="currentColor" font-size="11">3π</text>
<text x="392" y="124" fill="currentColor" font-size="11">4π</text>
<text x="132" y="227" fill="currentColor" font-size="12">y=x sin x</text>
<text x="344" y="25" fill="currentColor" font-size="11">y=x</text>
</svg>
<p><small>图：$y=x\sin x$ 夹在 $y=\pm x$ 之间振荡。无论把门槛 $M$ 画多高，曲线总会越过它（所以无界），但每过一个 $k\pi$ 又回到 $0$（所以"附近所有点都超过 $M$"永远做不到，不是无穷大）。</small></p>
<p>这里"$f$ 在 $x\to+\infty$ 时无界"的意思是：对任意 $M>0$，在任何 $(X,+\infty)$ 内都<b>存在</b>点 $x$ 使 $|f(x)|>M$（"有点超过"）；而无穷大要求的是"<b>所有</b>充分大的 $x$ 都超过"。一字之差，前者弱得多。所以：<b>无穷大 ⟹ 无界，但无界推不出无穷大</b>。前一半的理由：若 $f$ 是 $x\to x_0$ 时的无穷大，则对任何 $M$，$x_0$ 的任一去心邻域内都有点使 $|f|>M$，所以 $f$ 在 $x_0$ 的任何去心邻域内都无界。后一半靠上面的反例。考研选择题常常拿这一点做文章。</p>`
      },
      {
        kind: 'thm', title: '极限与无穷小的关系',
        statement: R`<p>在自变量的同一变化过程中，$\lim f(x)=A$（$A$ 为有限数）的充分必要条件是</p>
$$f(x)=A+\alpha(x),$$
<p>其中 $\alpha(x)$ 是该过程下的无穷小。</p>`,
        intuition: R`<p>"$f$ 趋于 $A$"就是"$f$ 与 $A$ 的差趋于 $0$"。这条定理把"极限"翻译成"常数 + 无穷小"，是后面所有运算法则证明的桥梁：研究极限，只要研究无穷小就够了。</p>`,
        steps: [
          { s: R`<p>必要性：设 $\lim\limits_{x\to x_0}f(x)=A$，令 $\alpha(x)=f(x)-A$。对任意 $\varepsilon>0$，存在 $\delta>0$，当 $0<|x-x_0|<\delta$ 时 $|f(x)-A|<\varepsilon$，即 $|\alpha(x)|<\varepsilon$。所以 $\alpha$ 是无穷小，且 $f=A+\alpha$。</p>`, why: R`<p>极限定义里的 $|f(x)-A|<\varepsilon$ 本来就是 $|\alpha(x)-0|<\varepsilon$，两句话只是换了个记号。</p>` },
          { s: R`<p>充分性：设 $f(x)=A+\alpha(x)$，$\alpha$ 为无穷小。对任意 $\varepsilon>0$，存在 $\delta>0$，当 $0<|x-x_0|<\delta$ 时 $|\alpha(x)|<\varepsilon$，即 $|f(x)-A|<\varepsilon$，故 $\lim f(x)=A$。</p>`, why: R`<p>反过来读同一个不等式。这两步说明定理其实是极限定义的"改写"，没有新的数学内容，但提供了新的视角。</p>` }
        ],
        remark: R`<p>以后写 $\sin x=x+o(x)$、$\mathrm{e}^x=1+x+\frac{x^2}{2}+o(x^2)$ 这类带"余项"的式子，背后都是这个定理：把一个量写成"主要部分 + 无穷小"。</p>`
      },
      {
        kind: 'thm', title: '无穷小的运算性质',
        statement: R`<p>在同一变化过程中：</p>
<ol>
<li>有限个无穷小的和是无穷小；</li>
<li>有限个无穷小的积是无穷小；</li>
<li>有界函数与无穷小的积是无穷小。特别地，常数与无穷小的积是无穷小。</li>
</ol>`,
        intuition: R`<p>两个"要变成 $0$"的量加起来还是"要变成 $0$"；一个有界的量（比如 $\sin\frac1x$，绝对值不超过 $1$）乘上一个趋于 $0$ 的量，被"压"到 $0$。第 3 条特别有用，因为它允许乘积中有一个因子<b>没有极限</b>（只要有界）。</p>`,
        steps: [
          { s: R`<p>证 1（两个的情形）：设 $\alpha,\beta$ 是 $x\to x_0$ 时的无穷小。对任意 $\varepsilon>0$，存在 $\delta_1>0$，当 $0<|x-x_0|<\delta_1$ 时 $|\alpha(x)|<\frac\varepsilon2$；存在 $\delta_2>0$，当 $0<|x-x_0|<\delta_2$ 时 $|\beta(x)|<\frac\varepsilon2$。取 $\delta=\min\{\delta_1,\delta_2\}$，则当 $0<|x-x_0|<\delta$ 时 $|\alpha+\beta|\le|\alpha|+|\beta|<\varepsilon$。有限个的情形对个数作归纳即可。</p>`, why: R`<p>目标是 $|\alpha+\beta|<\varepsilon$，三角不等式把它拆成两个各自小于 $\frac\varepsilon2$ 的量；两个 $\delta$ 取最小值是为了让两个条件同时满足。"有限个"是归纳法能做到的；无限个做不到，因为取 $\delta=\min$ 时无穷多个 $\delta_i$ 的下确界可能是 $0$。</p>` },
          { s: R`<p>证 3：设 $|g(x)|\le K$（不妨设 $K>0$）在 $x_0$ 的某去心邻域 $0<|x-x_0|<\delta_1$ 内成立，$\alpha$ 是无穷小。对任意 $\varepsilon>0$，存在 $\delta_2>0$，当 $0<|x-x_0|<\delta_2$ 时 $|\alpha(x)|<\frac{\varepsilon}{K}$。取 $\delta=\min\{\delta_1,\delta_2\}$，当 $0<|x-x_0|<\delta$ 时 $|g\alpha|=|g|\cdot|\alpha|<K\cdot\frac\varepsilon K=\varepsilon$。</p>`, why: R`<p>有界给了一个固定的上限 $K$，无穷小可以任意小，于是乘积可以任意小。这里 $\varepsilon/K$ 的"配凑"是 $\varepsilon$-$\delta$ 证明的常规手法：先看结论要什么，倒推要把 $|\alpha|$ 控制到多小。</p>` },
          { s: R`<p>证 2：无穷小 $\beta$ 的极限为 $0$，由极限的局部有界性（极限存在的函数在该点某去心邻域内有界：取 $\varepsilon=1$，邻域内 $|\beta|<0+1$），$\beta$ 在 $x_0$ 的某去心邻域内有界。于是 $\alpha\beta$ 是"有界函数乘无穷小"，由 3 知为无穷小。有限个再归纳。</p>`, why: R`<p>把 2 归结为 3，省一次 $\varepsilon$-$\delta$。这是数学里常见的"用已证的结论推新结论"。</p>` }
        ],
        remark: R`<p><b>"有限个"不能改成"无限个"</b>：$n\to\infty$ 时每个 $\dfrac1n$ 都是无穷小，但 $n$ 个 $\dfrac1n$ 相加等于 $1$，不是无穷小。<b>两个无穷小的商</b>没有一般结论——这正是"无穷小比较"要研究的问题。<b>两个无穷大的和</b>也没有一般结论（$\frac1x$ 与 $-\frac1x$ 的和是 $0$），但<b>两个无穷大的积仍是无穷大</b>（$|f|>\sqrt M$ 且 $|g|>\sqrt M$ 时 $|fg|>M$），<b>无穷大与有界量的和仍是无穷大</b>（$|f+g|\ge|f|-|g|>M$ 只要 $|f|>M+K$），无穷大与"极限非零的量"的积也是无穷大。<b>无穷大与无穷小的积</b>则没有一般结论：$x\to0$ 时 $\frac1x\cdot x^2\to0$，$\frac1x\cdot x\to1$，$\frac1{x^2}\cdot x\to\infty$。</p>
<p>典型应用：$\lim\limits_{x\to0}x\sin\dfrac1x=0$（有界 $\times$ 无穷小），$\lim\limits_{x\to\infty}\dfrac{\arctan x}{x}=0$。注意不能写成"$\lim x\cdot\lim\sin\frac1x$"，因为后一个极限不存在。</p>`
      },
      {
        kind: 'thm', title: '无穷小与无穷大的关系',
        statement: R`<p>在同一变化过程中：</p>
<ol>
<li>若 $f(x)$ 是无穷大，则 $\dfrac1{f(x)}$ 是无穷小；</li>
<li>若 $f(x)$ 是无穷小，且 $f(x)\ne0$，则 $\dfrac1{f(x)}$ 是无穷大。</li>
</ol>`,
        intuition: R`<p>"很大"的倒数"很小"，反之亦然。这让我们可以把 $\infty$ 的问题都转化为 $0$ 的问题处理，例如 $\dfrac{\infty}{\infty}$ 型可以上下同除化成 $\dfrac00$ 型。</p>`,
        steps: [
          { s: R`<p>证 1：设 $x\to x_0$ 时 $f\to\infty$。任取 $\varepsilon>0$，令 $M=\dfrac1\varepsilon$，由无穷大定义存在 $\delta>0$，当 $0<|x-x_0|<\delta$ 时 $|f(x)|>M=\dfrac1\varepsilon$，从而 $\left|\dfrac1{f(x)}\right|<\varepsilon$。故 $\dfrac1f$ 是无穷小。</p>`, why: R`<p>两个定义是"镜像"的：$|f|>M$ 和 $|1/f|<1/M$ 是同一个不等式。注意 $|f|>M>0$ 保证了 $f\ne0$，$1/f$ 有定义。</p>` },
          { s: R`<p>证 2：设 $f\to0$ 且 $f\ne0$。任取 $M>0$，令 $\varepsilon=\dfrac1M$，存在 $\delta>0$，当 $0<|x-x_0|<\delta$ 时 $|f(x)|<\varepsilon=\dfrac1M$；又 $f(x)\ne0$，所以 $\left|\dfrac1{f(x)}\right|>M$。故 $\dfrac1f$ 是无穷大。</p>`, why: R`<p>条件 $f(x)\ne0$ 不能去掉：若 $f\equiv0$，$1/f$ 根本没有定义；若 $f$ 在 $x_0$ 附近有无穷多个零点（如 $x\sin\frac1x$），$1/f$ 在这些点没定义，也谈不上无穷大。</p>` }
        ],
        remark: R`<p>由此可知"$\lim\limits_{x\to a}\dfrac{f(x)}{g(x)}=\infty$"就等价于"$\lim\limits_{x\to a}\dfrac{g(x)}{f(x)}=0$"（在 $f,g$ 均不为零时），这是已知极限反求参数时常用的转换。</p>`
      },
      {
        kind: 'def', title: '无穷小的比较：高阶、低阶、同阶、等价、k 阶',
        html: R`<p>设 $\alpha(x)$、$\beta(x)$ 都是同一变化过程（例如 $x\to x_0$）下的无穷小，且在 $x_0$ 的某去心邻域内 $\beta(x)\ne0$。</p>
<ul>
<li>若 $\lim\dfrac{\alpha}{\beta}=0$，称 $\alpha$ 是比 $\beta$ <b>高阶</b>的无穷小，记作 $\alpha=o(\beta)$；此时也称 $\beta$ 是比 $\alpha$ <b>低阶</b>的无穷小。</li>
<li>若 $\lim\dfrac{\alpha}{\beta}=\infty$，称 $\alpha$ 是比 $\beta$ 低阶的无穷小。</li>
<li>若 $\lim\dfrac{\alpha}{\beta}=C\ne0$（$C$ 为有限常数），称 $\alpha$ 与 $\beta$ 是<b>同阶</b>无穷小。</li>
<li>若 $\lim\dfrac{\alpha}{\beta}=1$，称 $\alpha$ 与 $\beta$ 是<b>等价</b>无穷小，记作 $\alpha\sim\beta$。</li>
<li>若 $\lim\dfrac{\alpha}{\beta^k}=C\ne0$（$k>0$），称 $\alpha$ 是关于 $\beta$ 的 <b>$k$ 阶</b>无穷小。最常用的是取 $\beta=x-x_0$（或 $x\to0$ 时的 $x$）：若 $\lim\limits_{x\to0}\dfrac{\alpha(x)}{x^k}=C\ne0$，就说 $\alpha$ 是 $k$ 阶无穷小，也说 $\alpha\sim Cx^k$。</li>
</ul>
<p><b>逐字拆解：</b></p>
<ul>
<li><b>"比值的极限"是衡量快慢的尺子</b>。$\alpha/\beta\to0$ 意思是 $\alpha$ 比 $\beta$ 小得多，即 $\alpha$ 趋于 $0$ 更快——"高阶"就是"更快、更小"。初学者容易把"高阶"误会成"更大"，记住：$x^3$ 比 $x$ 高阶，而 $x\to0$ 时 $x^3$ 远小于 $x$。</li>
<li><b>$C\ne0$ 是同阶定义的灵魂</b>。$C=0$ 就退化为高阶；$C$ 不存在（也不是 $\infty$）就是"不可比较"。$\alpha\sim\beta$ 是同阶的特例（$C=1$）。</li>
<li><b>等价是一种等价关系</b>：自反（$\alpha\sim\alpha$）、对称（$\alpha\sim\beta\Rightarrow\beta\sim\alpha$，因为 $\beta/\alpha=1/(\alpha/\beta)\to1$；这里 $\alpha/\beta\to1\ne0$ 保证了 $\alpha$ 在某去心邻域内不为零，倒数有意义）、传递（$\alpha\sim\beta,\beta\sim\gamma\Rightarrow\alpha\sim\gamma$，因为 $\frac\alpha\gamma=\frac\alpha\beta\cdot\frac\beta\gamma\to1$）。所以可以"链式"换：$\tan x\sim\sin x\sim x$。</li>
<li><b>$k$ 阶中的 $k$ 不必是整数</b>：$x\to0^+$ 时 $\sqrt{x}$ 是 $\frac12$ 阶无穷小；$x^{5/2}$ 是 $\frac52$ 阶。$k$ 不是整数时 $x^k$ 在 $x<0$ 可能没有意义，所以这类题一般写成单侧过程 $x\to0^+$（2020 年第 1 题就是这样出的），或者用 $|x|^k$ 作标尺。</li>
<li><b>"$\beta\ne0$"是为了比值有意义</b>。像 $x\sin\frac1x$ 这种在 $0$ 附近有无穷多零点的无穷小，不能放在分母上比较。</li>
<li><b>不是任意两个无穷小都能比较</b>：$\alpha=x\sin\frac1x$，$\beta=x$，比值 $\sin\frac1x$ 在 $x\to0$ 时极限不存在，所以 $\alpha$ 既不比 $\beta$ 高阶，也不同阶，也不低阶。无穷小的"阶"并不总是有定义的。</li>
</ul>
<svg viewBox="0 0 420 260" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="130" x2="405" y2="130" stroke="currentColor" stroke-width="1"/>
<line x1="210" y1="250" x2="210" y2="10" stroke="currentColor" stroke-width="1"/>
<text x="396" y="146" fill="currentColor" font-size="12">x</text>
<text x="216" y="20" fill="currentColor" font-size="12">y</text>
<text x="198" y="156" fill="currentColor" font-size="12">O</text>
<line x1="30" y1="240" x2="390" y2="20" stroke="currentColor" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="30" y1="20" x2="390" y2="240" stroke="currentColor" stroke-width="1" stroke-dasharray="5,3"/>
<polyline fill="none" stroke="currentColor" stroke-width="1.4" points="30,64 47,93 61,119 73,142 83,161 92,175 99,184 106,189 112,189 117,186 122,179 126,170 130,159 134,147 137,135 140,124 143,114 145,106 148,99 150,96 152,95 154,96 156,99 157,105 159,111 160,119 162,127 163,134 164,141 165,147 167,151 168,154 169,155 170,154 171,152 171,149 172,144 173,138 174,133 175,127 175,122 176,117 177,114 177,111 178,111 178,111 179,113 180,115 180,119 181,123 181,128 182,132 182,137 183,140 183,143 183,145 184,146 184,146 185,144 185,142 185,139 186,136 186,132 186,128 187,124 187,121 187,119 188,117 188,117 188,117 188,118 189,120 189,122 189,125 189,129 190,132 190,135 190,138 190,140 191,141 191,142 191,141 191,141 191,139 192,137 192,134 192,131 192,128 192,126 193,123 193,122 193,120 193,120 193,120 193,121 194,122 194,124 194,126 194,129 194,131 194,134 194,136 195,138 195,139 195,139 195,139 195,138 195,137 195,135 196,133 196,131 196,129 196,127 196,125 196,123 196,122 196,122 196,122 197,122 197,124 197,125 197,127 197,129 197,131 197,133 197,135 197,136 197,137 198,138 198,138 198,137 198,136 198,134 198,133 198,131 198,129 198,127 198,126 198,124 198,123 199,123 199,123 199,124 199,125 199,126 199,127 199,129 199,131 199,133 199,134 199,135 199,136 199,136 199,136 199,136 200,135 200,134 200,132 200,131 200,129 200,128 200,126 200,125 200,124 200,124 200,124 200,125 200,125 200,126 200,128 200,129 200,131 201,132 201,134 201,135 201,135 201,136 201,136 201,135 201,134 201,133 201,132 201,131 201,129 201,128 201,127 201,126 201,125 201,125 201,125 201,125 201,126 201,127 202,128 202,129 202,131 202,132 202,133 202,134 202,135 202,135 202,135 202,135 202,134 202,133 202,132 202,131 202,129 202,128 202,127 202,126 202,126 202,125 202,125 202,126 202,126 202,127 202,128 202,129 202,131 203,132 203,133 203,134 203,134 203,134 203,134 203,134 203,133 203,133 203,132 203,131 203,129 203,128 203,127 203,127 203,126 203,126 203,126 203,126 203,127 203,127 203,128 203,130 203,131 203,132 203,133 203,133 203,134 203,134 203,134 203,134 203,133 203,132 203,131 203,130 204,129 204,128 204,128 204,127 204,126 204,126 204,126 204,126 204,127 204,128 204,129 204,130 204,131 204,131 204,132 204,133 204,133 204,134 204,134 204,133 204,133 204,132 204,131 204,130 204,129 204,129 204,128 204,127 204,127 204,126 204,126 204,127 204,127 204,128 204,129 204,130 204,131 204,131 204,132 204,133 204,133 204,133"/>
<polyline fill="none" stroke="currentColor" stroke-width="1.4" points="216,133 216,133 216,133 216,132 216,131 216,131 216,130 216,129 216,128 216,127 216,127 216,126 216,126 216,127 216,127 216,128 216,129 216,129 216,130 216,131 216,132 216,133 216,133 216,134 216,134 216,133 216,133 216,132 216,131 216,131 216,130 216,129 216,128 216,127 216,126 216,126 216,126 216,126 216,127 216,128 216,128 216,129 217,130 217,131 217,132 217,133 217,134 217,134 217,134 217,134 217,133 217,133 217,132 217,131 217,130 217,128 217,127 217,127 217,126 217,126 217,126 217,126 217,127 217,127 217,128 217,129 217,131 217,132 217,133 217,133 217,134 217,134 217,134 217,134 217,134 217,133 217,132 218,131 218,129 218,128 218,127 218,126 218,126 218,125 218,125 218,126 218,126 218,127 218,128 218,129 218,131 218,132 218,133 218,134 218,135 218,135 218,135 218,135 218,134 218,133 218,132 218,131 218,129 218,128 219,127 219,126 219,125 219,125 219,125 219,125 219,126 219,127 219,128 219,129 219,131 219,132 219,133 219,134 219,135 219,136 219,136 219,135 219,135 219,134 219,132 220,131 220,129 220,128 220,126 220,125 220,125 220,124 220,124 220,124 220,125 220,126 220,128 220,129 220,131 220,132 220,134 220,135 221,136 221,136 221,136 221,136 221,135 221,134 221,133 221,131 221,129 221,127 221,126 221,125 221,124 221,123 221,123 222,123 222,124 222,126 222,127 222,129 222,131 222,133 222,134 222,136 222,137 222,138 222,138 223,137 223,136 223,135 223,133 223,131 223,129 223,127 223,125 223,124 223,122 224,122 224,122 224,122 224,123 224,125 224,127 224,129 224,131 224,133 225,135 225,137 225,138 225,139 225,139 225,139 225,138 226,136 226,134 226,131 226,129 226,126 226,124 226,122 227,121 227,120 227,120 227,120 227,122 227,123 228,126 228,128 228,131 228,134 228,137 229,139 229,141 229,141 229,142 229,141 230,140 230,138 230,135 230,132 231,129 231,125 231,122 231,120 232,118 232,117 232,117 232,117 233,119 233,121 233,124 234,128 234,132 234,136 235,139 235,142 235,144 236,146 236,146 237,145 237,143 237,140 238,137 238,132 239,128 239,123 240,119 240,115 241,113 242,111 242,111 243,111 243,114 244,117 245,122 245,127 246,133 247,138 248,144 249,149 249,152 250,154 251,155 252,154 253,151 255,147 256,141 257,134 258,127 260,119 261,111 263,105 264,99 266,96 268,95 270,96 272,99 275,106 277,114 280,124 283,135 286,147 290,159 294,170 298,179 303,186 308,189 314,189 321,184 328,175 337,161 347,142 359,119 373,93 390,64"/>
<text x="345" y="75" fill="currentColor" font-size="12">y=x</text>
<text x="345" y="188" fill="currentColor" font-size="12">y=−x</text>
<text x="232" y="232" fill="currentColor" font-size="12">y=x sin(1/x)</text>
</svg>
<p><small>图：$y=x\sin\frac1x$ 在两条直线 $y=\pm x$ 之间来回触碰，越靠近原点振荡越密。它与 $x$ 的比值就是 $\sin\frac1x$，在 $-1$ 和 $1$ 之间反复取值、不趋于任何数——所以它与 $x$"不可比较"。</small></p>
<p><b>记号 $o(\cdot)$ 的含义：</b>$o(x^k)$ 表示"某个比 $x^k$ 高阶的无穷小"，它是一类函数的统称，不是一个固定的函数。所以 $o(x^2)+o(x^2)=o(x^2)$、$x\cdot o(x^2)=o(x^3)$、$o(x^3)=o(x^2)$（高阶的更高阶）这些"运算"是允许的，但 $o(x^2)-o(x^2)=0$ 是<b>错</b>的（两个 $o(x^2)$ 可以是不同的函数）。</p>
<p><b>正例：</b>$x\to0$ 时：$1-\cos x$ 是 $x$ 的二阶无穷小（$\frac{1-\cos x}{x^2}\to\frac12$），$x-\sin x$ 是三阶（$\to\frac16$），$\sqrt{1+x}-1$ 是一阶（$\to\frac12$）；$x^2=o(x)$；$\tan x\sim x$。</p>
<p><b>常用等价无穷小（$x\to0$，必须背熟）：</b></p>
<table>
<thead><tr><th>一阶</th><th>二阶</th><th>三阶</th></tr></thead>
<tbody>
<tr><td>$\sin x\sim x$</td><td>$1-\cos x\sim\dfrac{x^2}{2}$</td><td>$x-\sin x\sim\dfrac{x^3}{6}$</td></tr>
<tr><td>$\tan x\sim x$</td><td>$x-\ln(1+x)\sim\dfrac{x^2}{2}$</td><td>$\tan x-x\sim\dfrac{x^3}{3}$</td></tr>
<tr><td>$\arcsin x\sim x$</td><td>$\mathrm{e}^x-1-x\sim\dfrac{x^2}{2}$</td><td>$x-\arctan x\sim\dfrac{x^3}{3}$</td></tr>
<tr><td>$\arctan x\sim x$</td><td>$\sqrt{1+x}-1-\dfrac x2\sim-\dfrac{x^2}{8}$</td><td>$\arcsin x-x\sim\dfrac{x^3}{6}$</td></tr>
<tr><td>$\mathrm{e}^x-1\sim x$</td><td>$1-\cos^a x\sim\dfrac{a}{2}x^2\ (a\ne0)$</td><td>$\tan x-\sin x\sim\dfrac{x^3}{2}$</td></tr>
<tr><td>$\ln(1+x)\sim x$</td><td></td><td></td></tr>
<tr><td>$(1+x)^a-1\sim ax\ (a\ne0)$</td><td></td><td></td></tr>
<tr><td>$a^x-1\sim x\ln a\ (a>0,a\ne1)$</td><td></td><td></td></tr>
<tr><td>$\log_a(1+x)\sim\dfrac{x}{\ln a}\ (a>0,a\ne1)$</td><td></td><td></td></tr>
</tbody></table>
<p>这些结论的来源有两个：一阶的（以及 $1-\cos x$）来自两个重要极限，下一节逐个推导；二、三阶的来自泰勒公式（见 diff.taylor），也可以用洛必达法则逐个验证。真正理解后，它们就是"$f(x)$ 在 $0$ 处的泰勒展开的第一个非零项"。注意表中"二阶""三阶"一列的式子，左边都是"两个一阶等价无穷小相减"——一阶项抵消后剩下的才是真正的主部，这正是加减里不能随便代换的原因。</p>
<p><b>更一般的形式：</b>表中的 $x$ 可以换成任何趋于 $0$ 的量 $u(x)$（$u\ne0$）。例如 $x\to0$ 时 $\sin x^2\sim x^2$，$\mathrm{e}^{\sin x}-1\sim\sin x\sim x$，$1-\cos\sqrt{x}\sim\frac x2$（$x\to0^+$）。这是因为复合函数极限定理：$u\to0$ 且 $u\ne0$ 时 $\dfrac{\sin u}{u}\to1$。</p>`
      },
      {
        kind: 'thm', title: '常用等价无穷小的推导',
        statement: R`<p>当 $x\to0$ 时：</p>
<ol>
<li>$\sin x\sim x$，$\tan x\sim x$，$1-\cos x\sim\dfrac{x^2}2$；</li>
<li>$\arcsin x\sim x$，$\arctan x\sim x$；</li>
<li>$\ln(1+x)\sim x$，$\mathrm{e}^x-1\sim x$；</li>
<li>$a^x-1\sim x\ln a$（$a>0,a\ne1$），$(1+x)^a-1\sim ax$（$a\ne0$）。</li>
</ol>`,
        intuition: R`<p>所有一阶等价式的根子只有两个：第一重要极限 $\lim\limits_{x\to0}\dfrac{\sin x}x=1$ 和第二重要极限 $\lim\limits_{x\to0}(1+x)^{1/x}=\mathrm{e}$（都在 lim.rules 中证明）。其余的都是用"乘除因子可以换""反函数换元""写成 $\mathrm{e}^{\square}$"这三招从它们推出来的。从导数的角度看，$f(0)=0$ 且 $f'(0)=1$ 的函数都满足 $f(x)\sim x$，因为 $\dfrac{f(x)}{x}=\dfrac{f(x)-f(0)}{x-0}\to f'(0)$。</p>
<svg viewBox="0 0 420 260" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg">
<line x1="20" y1="130" x2="405" y2="130" stroke="currentColor" stroke-width="1"/>
<line x1="210" y1="250" x2="210" y2="10" stroke="currentColor" stroke-width="1"/>
<text x="396" y="146" fill="currentColor" font-size="12">x</text>
<text x="216" y="20" fill="currentColor" font-size="12">y</text>
<text x="214" y="146" fill="currentColor" font-size="12">O</text>
<line x1="380" y1="127" x2="380" y2="133" stroke="currentColor" stroke-width="1"/>
<text x="376" y="146" fill="currentColor" font-size="11">1</text>
<line x1="40" y1="127" x2="40" y2="133" stroke="currentColor" stroke-width="1"/>
<text x="32" y="146" fill="currentColor" font-size="11">−1</text>
<polyline fill="none" stroke="currentColor" stroke-width="1.6" points="40,231 44,225 48,220 53,216 57,212 61,207 66,204 70,200 74,197 78,193 82,190 87,187 91,185 95,182 100,179 104,177 108,174 112,172 116,170 121,167 125,165 129,163 134,161 138,159 142,157 146,155 150,154 155,152 159,150 163,148 168,147 172,145 176,143 180,141 184,140 189,138 193,136 197,135 202,133 206,132 210,130 214,128 218,127 223,125 227,124 231,122 236,120 240,119 244,117 248,115 252,113 257,112 261,110 265,108 270,106 274,105 278,103 282,101 286,99 291,97 295,95 299,93 304,90 308,88 312,86 316,83 320,81 325,78 329,75 333,73 338,70 342,67 346,63 350,60 354,56 359,53 363,48 367,44 372,40 376,35 380,29"/>
<polyline fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5,3" points="40,195 380,65"/>
<polyline fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2,2" points="40,184 44,184 48,183 53,182 57,181 61,180 66,179 70,178 74,176 78,175 82,174 87,173 91,172 95,170 100,169 104,168 108,167 112,165 116,164 121,162 125,161 129,160 134,158 138,157 142,155 146,154 150,152 155,151 159,149 163,148 168,146 172,144 176,143 180,141 184,140 189,138 193,136 197,135 202,133 206,132 210,130 214,128 218,127 223,125 227,124 231,122 236,120 240,119 244,117 248,116 252,114 257,112 261,111 265,109 270,108 274,106 278,105 282,103 286,102 291,100 295,99 299,98 304,96 308,95 312,93 316,92 320,91 325,90 329,88 333,87 338,86 342,85 346,84 350,82 354,81 359,80 363,79 367,78 372,77 376,76 380,76"/>
<circle cx="244" cy="130" r="0" fill="none"/>
<text x="315" y="25" fill="currentColor" font-size="12">y=tan x</text>
<text x="385" y="69" fill="currentColor" font-size="12">y=x</text>
<text x="332" y="116" fill="currentColor" font-size="12">y=sin x</text>
<text x="43" y="94" fill="currentColor" font-size="11">三条曲线在 O 处</text>
<text x="43" y="105" fill="currentColor" font-size="11">切线相同（斜率 1）</text>
</svg>
<p><small>图：$y=\sin x$、$y=x$、$y=\tan x$ 在原点共用一条切线 $y=x$，这就是"一阶等价"的几何意义。三条曲线在原点附近几乎重合，它们的差（如 $\tan x-\sin x\sim\frac{x^3}2$）是三阶小量，要离开原点一段距离才看得出来。</small></p>`,
        steps: [
          { s: R`<p>$\sin x\sim x$ 就是第一重要极限。$\dfrac{\tan x}{x}=\dfrac{\sin x}{x}\cdot\dfrac1{\cos x}\to1\cdot1=1$。$1-\cos x=2\sin^2\dfrac x2$，于是 $\dfrac{1-\cos x}{x^2/2}=\left(\dfrac{\sin\frac x2}{\frac x2}\right)^2\to1$。</p>`, why: R`<p>$\tan x$ 比 $\sin x$ 多了一个极限为 $1$ 的因子 $\frac1{\cos x}$，乘法法则直接给出结论。$1-\cos x$ 用半角公式变成"平方"，内层 $u=\frac x2\to0$，由复合函数极限定理可以套第一重要极限。</p>` },
          { s: R`<p>令 $t=\arcsin x$，则 $x=\sin t$，且 $x\to0$ 时 $t\to0$、$t\ne0$（$x\ne0$ 时）。于是 $\dfrac{\arcsin x}{x}=\dfrac{t}{\sin t}\to1$。同理令 $t=\arctan x$ 得 $\dfrac{\arctan x}{x}=\dfrac{t}{\tan t}\to1$。</p>`, why: R`<p>反三角函数不好直接处理，就换元回到三角函数。合法性依赖于：$\arcsin$ 在 $0$ 处连续（所以 $t\to0$）且 $x\ne0\Rightarrow t\ne0$（满足复合函数极限定理的条件）。</p>` },
          { s: R`<p>$\dfrac{\ln(1+x)}{x}=\ln\left[(1+x)^{1/x}\right]\to\ln\mathrm{e}=1$。令 $t=\mathrm{e}^x-1$，则 $x=\ln(1+t)$，$x\to0$ 时 $t\to0$、$t\ne0$，于是 $\dfrac{\mathrm{e}^x-1}{x}=\dfrac{t}{\ln(1+t)}\to1$。</p>`, why: R`<p>第一个等号把 $\frac1x$ 搬进对数里成为指数，这是第二重要极限的标准用法；取极限时用到 $\ln$ 在 $\mathrm{e}$ 处连续。$\mathrm{e}^x-1$ 与 $\ln(1+x)$ 互为反函数，所以再用一次"反函数换元"。</p>` },
          { s: R`<p>$a^x-1=\mathrm{e}^{x\ln a}-1\sim x\ln a$，因为 $u=x\ln a\to0$ 且 $u\ne0$。$(1+x)^a-1=\mathrm{e}^{a\ln(1+x)}-1\sim a\ln(1+x)\sim ax$，因为 $u=a\ln(1+x)\to0$ 且 $u\ne0$（$a\ne0$）。$\log_a(1+x)=\dfrac{\ln(1+x)}{\ln a}\sim\dfrac x{\ln a}$。</p>`, why: R`<p>幂指结构统一写成 $\mathrm{e}^{\square}$，就能套 $\mathrm{e}^u-1\sim u$。这里两次使用了"表中的 $x$ 可以换成任何趋于 $0$ 且不为 $0$ 的量"，以及等价关系的传递性。$a=0$ 时 $(1+x)^a-1\equiv0$，不是"非零"的无穷小，谈不上与 $ax$ 等价，所以要排除。</p>` }
        ],
        remark: R`<p>二、三阶等价式（如 $x-\sin x\sim\frac{x^3}6$、$\tan x-x\sim\frac{x^3}3$）的最干净来源是泰勒公式（diff.taylor）：$\sin x=x-\frac{x^3}6+o(x^3)$ 移项即得。不用泰勒也可以用洛必达法则验证，例如 $\lim\limits_{x\to0}\dfrac{x-\sin x}{x^3}=\lim\limits_{x\to0}\dfrac{1-\cos x}{3x^2}=\lim\limits_{x\to0}\dfrac{x^2/2}{3x^2}=\dfrac16$（最后一步换的是整个分子，合法）。</p>`
      },
      {
        kind: 'thm', title: '等价无穷小的充要条件',
        statement: R`<p>设 $\alpha,\beta$ 是同一过程下的无穷小，$\alpha\ne0$。则</p>
$$\alpha\sim\beta\iff\beta=\alpha+o(\alpha),$$
<p>即 $\beta$ 与 $\alpha$ 等价当且仅当它们的差是比 $\alpha$ 高阶的无穷小。</p>`,
        intuition: R`<p>"等价"就是"主要部分相同，差别只在更高阶的小量上"。$\sin x=x+o(x)$ 就是说：在一阶精度下 $\sin x$ 和 $x$ 没有区别。这也解释了为什么等价代换在加减时会出问题——加减可能把主要部分 $\alpha$ 消掉，剩下的恰恰是被忽略的 $o(\alpha)$。</p>`,
        steps: [
          { s: R`<p>必要性：设 $\alpha\sim\beta$，即 $\lim\dfrac\beta\alpha=1$。则 $\lim\dfrac{\beta-\alpha}{\alpha}=\lim\left(\dfrac\beta\alpha-1\right)=1-1=0$，所以 $\beta-\alpha=o(\alpha)$，即 $\beta=\alpha+o(\alpha)$。</p>`, why: R`<p>直接用极限的减法法则。"$\beta-\alpha$ 比 $\alpha$ 高阶"按定义就是比值趋于 $0$。</p>` },
          { s: R`<p>充分性：设 $\beta=\alpha+\gamma$，$\gamma=o(\alpha)$。则 $\dfrac\beta\alpha=1+\dfrac\gamma\alpha\to1+0=1$，故 $\alpha\sim\beta$。</p>`, why: R`<p>反过来用加法法则。两步合起来说明"等价"和"差为高阶无穷小"是一回事。</p>` }
        ],
        remark: R`<p>由此可以给出很多等价式的来源：例如由 $\cos x=1-\frac{x^2}{2}+o(x^2)$ 得 $1-\cos x=\frac{x^2}2+o(x^2)$，所以 $1-\cos x\sim\frac{x^2}2$。反过来，只要记住 $\alpha\sim Cx^k$ 就等于 $\alpha=Cx^k+o(x^k)$，等价无穷小表和泰勒展开表就能互相翻译。</p>`
      },
      {
        kind: 'thm', title: '等价无穷小代换定理',
        statement: R`<p>设在同一变化过程中 $\alpha\sim\alpha'$，$\beta\sim\beta'$，且 $\lim\dfrac{\alpha'}{\beta'}$ 存在（或为 $\infty$），则</p>
$$\lim\frac{\alpha}{\beta}=\lim\frac{\alpha'}{\beta'}.$$
<p>更一般地，若 $\alpha\sim\alpha'$，且 $\lim\alpha'\cdot g$ 存在（或为 $\infty$），则 $\lim\alpha g=\lim\alpha' g$：<b>乘积（或商）中的无穷小因子可以换成它的等价无穷小</b>。</p>`,
        intuition: R`<p>$\alpha$ 和 $\alpha'$ 在极限意义下"比值是 $1$"，而乘 $1$ 不改变任何东西。所以只要 $\alpha$ 是以<b>乘除因子</b>的身份出现，就可以换掉。这是把复杂极限化简的第一利器：分子分母里的 $\sin$、$\tan$、$\ln(1+\cdot)$、$\mathrm{e}^{\cdot}-1$ 等全部换成幂函数。</p>`,
        steps: [
          { s: R`<p>写出恒等式（在 $\beta,\alpha',\beta'$ 都不为零的去心邻域内）：</p>
$$\frac{\alpha}{\beta}=\frac{\alpha}{\alpha'}\cdot\frac{\alpha'}{\beta'}\cdot\frac{\beta'}{\beta}.$$`, why: R`<p>想法：要把 $\alpha$ 换成 $\alpha'$，就乘上 $\dfrac{\alpha'}{\alpha'}$（等于 $1$），再把分子分母重新搭配。$\alpha\sim\alpha'$ 意味着 $\alpha'\ne0$ 在某去心邻域内成立（否则比值无定义），所以这样拆是合法的。</p>` },
          { s: R`<p>三个因子的极限分别为：$\lim\dfrac\alpha{\alpha'}=1$（由 $\alpha\sim\alpha'$），$\lim\dfrac{\beta'}\beta=1$（由 $\beta\sim\beta'$ 及等价的对称性），$\lim\dfrac{\alpha'}{\beta'}$ 存在（设为 $A$）。由极限的乘法法则，</p>
$$\lim\frac\alpha\beta=1\cdot A\cdot1=A=\lim\frac{\alpha'}{\beta'}.$$`, why: R`<p>乘法法则要求每个因子的极限都存在，这正是定理里"$\lim\frac{\alpha'}{\beta'}$ 存在"这个条件的用处。</p>` },
          { s: R`<p>若 $\lim\dfrac{\alpha'}{\beta'}=\infty$，则 $\lim\dfrac{\beta'}{\alpha'}=0$（此时 $\alpha'\ne0$，而 $\dfrac{\alpha}{\alpha'}\to1$ 保证 $\alpha$ 在某去心邻域内也不为零，所以 $\dfrac\beta\alpha$ 有意义），由已证结论（把 $\alpha,\beta$ 的角色对调）得 $\lim\dfrac\beta\alpha=0$，再由无穷小与无穷大的关系得 $\lim\dfrac\alpha\beta=\infty$。</p>`, why: R`<p>$\infty$ 的情形不能直接用乘法法则（$\infty$ 不是数），所以取倒数化为 $0$ 的情形。这正是上一节"无穷小与无穷大的关系"的用武之地。</p>` },
          { s: R`<p>一般形式 $\lim\alpha g=\lim\alpha'g$ 的证明完全一样：$\alpha g=\dfrac{\alpha}{\alpha'}\cdot(\alpha'g)$，第一个因子趋于 $1$。</p>`, why: R`<p>定理的本质只有一句话：乘一个趋于 $1$ 的因子不改变极限。</p>` }
        ],
        remark: R`<p><b>1. 只能换"整体的乘除因子"。</b>$\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{x^3}$ 中，$\tan x$ 和 $\sin x$ 是分子里"相减"的两项，不是整个分子的因子，不能分别换成 $x$（那样会得到 $0$，而正确答案是 $\frac12$）。正确做法：$\tan x-\sin x=\tan x(1-\cos x)$，这时 $\tan x$ 和 $1-\cos x$ 都是分子的乘法因子，换成 $x\cdot\frac{x^2}2$，极限为 $\frac12$。</p>
<p><b>2. 加减中什么时候能换？</b>有如下结论（可作为补充定理）：若 $\alpha\sim\alpha'$，$\beta\sim\beta'$，且 $\lim\dfrac{\alpha'}{\beta'}=A\ne1$（$A$ 是有限数；$A=\infty$ 时把 $\alpha,\beta$ 的角色对调，化为 $\lim\frac{\beta'}{\alpha'}=0\ne1$ 的情形），则 $\alpha-\beta\sim\alpha'-\beta'$。证明的想法：分子分母同除以 $\beta'$，把每一项都变成"与 $\beta'$ 的比值"，而这些比值的极限我们都知道。于是 $\dfrac{\alpha-\beta}{\alpha'-\beta'}=\dfrac{\frac{\alpha}{\beta'}-\frac{\beta}{\beta'}}{\frac{\alpha'}{\beta'}-1}$，分子中 $\dfrac\alpha{\beta'}=\dfrac\alpha{\alpha'}\cdot\dfrac{\alpha'}{\beta'}\to A$，$\dfrac\beta{\beta'}\to1$，故整个比值 $\to\dfrac{A-1}{A-1}=1$（这里用到 $A\ne1$ 保证分母不为零）。同样，若 $\lim\dfrac{\alpha'}{\beta'}=A\ne-1$，则 $\alpha+\beta\sim\alpha'+\beta'$。口诀："<b>加减可换的条件是换完之后不抵消</b>"。$\tan x-\sin x$ 中 $x/x=1$，恰好抵消，所以不能换。</p>
<p><b>3. "换完以后极限存在"这个条件其实不损失什么。</b>定理的条件和结论是对称的：把 $\alpha,\beta$ 与 $\alpha',\beta'$ 互换，定理照样成立。所以 $\lim\frac\alpha\beta$ 与 $\lim\frac{\alpha'}{\beta'}$ 要么同时存在且相等，要么同时为 $\infty$，要么同时不存在——换完后发现极限不存在（也不是 $\infty$），就可以断定原极限也不存在。写这个条件只是为了让"$\lim\frac\alpha\beta=\lim\frac{\alpha'}{\beta'}$"这个等式两边都有意义。</p>
<p><b>4. 与洛必达、泰勒的关系。</b>等价代换是泰勒展开的"一阶截断"，当加减把一阶项消掉时，要么因式分解创造乘积结构，要么改用泰勒展开到足够高的阶（见 lim.compute）。</p>`
      },
      {
        kind: 'example', title: '例题：比较阶与等价代换',
        html: R`<p><b>例 1.</b> $x\to0$ 时，比较 $\alpha=\sqrt{1+x\sin x}-1$ 与 $\beta=x\tan x$ 的阶。</p>
<p><b>怎么想：</b>$\alpha$ 的形式是 $(1+u)^{1/2}-1$，$u=x\sin x\to0$，所以 $\alpha\sim\frac12u=\frac12x\sin x\sim\frac12x^2$；$\beta=x\tan x\sim x^2$。两者都是二阶，比值 $\to\frac12$，<b>同阶但不等价</b>。</p>
<p><b>严格写法：</b>$\lim\limits_{x\to0}\dfrac{\alpha}{\beta}=\lim\dfrac{\frac12x\sin x}{x\tan x}=\dfrac12\lim\dfrac{\sin x}{\tan x}=\dfrac12$。每一步换的都是整体的乘除因子，符合代换定理。</p>
<p><b>例 2.</b> 求 $\lim\limits_{x\to0}\dfrac{\ln(1+x)\,(\mathrm{e}^{2x}-1)}{1-\cos x}$。</p>
<p><b>怎么想：</b>$\frac00$ 型，分子是两个无穷小的乘积，分母是一个无穷小，每一个都是"整体的乘除因子"，全部可以换：$\ln(1+x)\sim x$，$\mathrm{e}^{2x}-1\sim2x$，$1-\cos x\sim\frac{x^2}2$。</p>
$$\lim_{x\to0}\frac{x\cdot2x}{\frac{x^2}{2}}=4.$$
<p><b>例 3（加减中的陷阱）.</b> 求 $\lim\limits_{x\to0}\dfrac{\tan x-x}{x-\sin x}$。</p>
<p><b>错误做法：</b>$\tan x\sim x$，于是分子"$\sim x-x=0$"——错！分子分母都是加减结构，一阶项抵消后真正起作用的是三阶项。</p>
<p><b>正确做法：</b>用三阶等价式 $\tan x-x\sim\frac{x^3}3$、$x-\sin x\sim\frac{x^3}6$（它们各自是分子、分母的整体，可以换）：极限 $=\dfrac{1/3}{1/6}=2$。也可以用洛必达法则验证：$\dfrac{\sec^2x-1}{1-\cos x}=\dfrac{\tan^2x}{1-\cos x}\to\dfrac{x^2}{x^2/2}=2$。</p>
<p><b>例 4（用定义求阶）.</b> $x\to0$ 时，$\mathrm{e}^{\sin x}-1-x$ 是 $x$ 的几阶无穷小？</p>
<p><b>怎么想：</b>直接看不出来，就按定义求 $\lim\dfrac{\mathrm{e}^{\sin x}-1-x}{x^k}$，试 $k$ 使极限为非零常数。先用泰勒：把 $\mathrm{e}^u=1+u+\frac{u^2}2+o(u^2)$ 中的 $u$ 换成 $\sin x$（$u\to0$，合法），得 $\mathrm{e}^{\sin x}=1+\sin x+\frac{\sin^2x}2+o(\sin^2x)$；因为 $\sin^2x\sim x^2$，"比 $\sin^2x$ 高阶"就是"比 $x^2$ 高阶"，所以 $o(\sin^2x)=o(x^2)$；再代入 $\sin x=x-\frac{x^3}6+o(x^3)$（其中 $-\frac{x^3}6+o(x^3)$ 整体是 $o(x^2)$，可并入余项），得 $1+x+\frac{x^2}2+o(x^2)$。所以 $\mathrm{e}^{\sin x}-1-x=\frac{x^2}2+o(x^2)$，是二阶无穷小，且 $\sim\frac{x^2}2$。用洛必达验证：$\lim\dfrac{\mathrm{e}^{\sin x}-1-x}{x^2}=\lim\dfrac{\mathrm{e}^{\sin x}\cos x-1}{2x}$，再求导一次得 $\lim\dfrac{\mathrm{e}^{\sin x}(\cos^2x-\sin x)}{2}=\dfrac12$。</p>
<p><b>例 5（无穷大与无界的区别）.</b> 判断：$x\to+\infty$ 时 $f(x)=x\cos x$ 是无穷大吗？</p>
<p>不是。取 $x_n=2n\pi$ 得 $f(x_n)=2n\pi\to+\infty$，说明 $f$ 无界；但取 $x_n'=2n\pi+\frac\pi2$ 得 $f(x_n')=0$，对于任何 $M>0$，在任何 $(X,+\infty)$ 内都有点使 $|f|=0<M$，不满足无穷大的定义。<b>这道题告诉我们：</b>验证"不是无穷大"只需找一列趋于 $+\infty$ 的点使 $f$ 不趋于 $\infty$。</p>
<p><b>例 6（有界乘无穷小）.</b> 求 $\lim\limits_{x\to0}\dfrac{x^2\sin\frac1x}{\sin x}$。</p>
<p>分母 $\sin x\sim x$ 是整体因子可以换，得 $\lim x\sin\frac1x$。注意这里<b>不能</b>再把 $\sin\frac1x$ 换成 $\frac1x$（$\frac1x$ 不趋于 $0$，不是无穷小，等价无穷小表用不上），而应该用"有界 $\times$ 无穷小 $=$ 无穷小"：$|\sin\frac1x|\le1$，$x\to0$，所以极限为 $0$。</p>`
      },
      {
        kind: 'example', title: '近十年真题精讲（一）：阶的比较与反求参数',
        html: R`<p><b>真题 1.</b> <span class="qref" data-q="2019-1">2019 年第 1 题</span>　当 $x\to0$ 时，若 $x-\tan x$ 与 $x^k$ 是同阶无穷小，则 $k=$（　　）.</p>
<p>(A) $1$　(B) $2$　(C) $3$　(D) $4$</p>
<p><b>这题考什么：</b>"同阶"的定义。按本篇定义，"$x-\tan x$ 与 $x^k$ 同阶"就是 $\lim\limits_{x\to0}\dfrac{x-\tan x}{x^k}=C\ne0$，所以问题是：$x-\tan x$ 是几阶无穷小？</p>
<p><b>从题面哪个特征想到方法：</b>$x$ 与 $\tan x$ 是一对等价无穷小，相减之后一阶项抵消（这正是代换定理 remark 2 里"$A=1$ 不能换"的情形），剩下的是更高阶的部分，必须把 $\tan x$ 展开到更高一项才看得见。</p>
<p><b>分步解答：</b></p>
<ol>
<li>泰勒展开 $\tan x=x+\dfrac{x^3}{3}+o(x^3)$，于是 $x-\tan x=-\dfrac{x^3}3+o(x^3)$。（理由：由"等价无穷小的充要条件"，这等价于 $x-\tan x\sim-\frac{x^3}3$。）</li>
<li>按定义验证：$\lim\limits_{x\to0}\dfrac{x-\tan x}{x^3}=-\dfrac13\ne0$，所以 $k=3$。若不记得展开式，可用洛必达：$\lim\dfrac{1-\sec^2x}{3x^2}=\lim\dfrac{-\tan^2x}{3x^2}=-\dfrac13$（这里 $\tan^2x$ 是整体乘法因子，可换成 $x^2$）。</li>
</ol>
<p><b>答案：C.</b></p>
<p><b>这道题告诉我们：</b>遇到"等价无穷小相减"，一阶项一定抵消，阶数至少是 2，要么用三阶等价式（$\tan x-x\sim\frac{x^3}3$ 值得背下来），要么泰勒展开，要么洛必达。</p>
<p><b>真题 2.</b> <span class="qref" data-q="2023-11">2023 年第 11 题</span>　当 $x\to0$ 时，函数 $f(x)=ax+bx^2+\ln(1+x)$ 与 $g(x)=\mathrm{e}^{x^2}-\cos x$ 是等价无穷小，则 $ab=$ ______.</p>
<p><b>这题考什么：</b>"等价"的定义 $\lim\dfrac fg=1$，加上已知极限反求参数。</p>
<p><b>从题面哪个特征想到方法：</b>$f$ 中带两个待定参数 $a,b$，而且是多项式加一个初等函数。要让 $f$ 与 $g$ 等价，由"等价无穷小的充要条件"，$f$ 与 $g$ 的<b>首个非零项必须完全相同</b>（系数和阶数都一样）。所以自然的做法是把 $f,g$ 都泰勒展开，逐阶比较系数。</p>
<p><b>分步解答：</b></p>
<ol>
<li>先定 $g$ 的阶：$\mathrm{e}^{x^2}=1+x^2+o(x^2)$，$\cos x=1-\dfrac{x^2}2+o(x^2)$，相减得 $g(x)=\dfrac32x^2+o(x^2)$，即 $g\sim\dfrac32x^2$，是二阶无穷小。（这里是两个展开式相减，一阶项都是 $0$，二阶项 $1$ 与 $-\frac12$ 不抵消，所以可以放心相减——对应 remark 2 中 $A\ne-1$ 的情形。）</li>
<li>展开 $f$ 到二阶：$\ln(1+x)=x-\dfrac{x^2}2+o(x^2)$，所以 $f(x)=(a+1)x+\left(b-\dfrac12\right)x^2+o(x^2)$。</li>
<li>要 $f\sim g$，须 $f$ 的一阶项系数为 $0$（否则 $f$ 是一阶，比 $g$ 低阶，$\frac fg\to\infty$），且二阶项系数等于 $\dfrac32$：$a+1=0$，$b-\dfrac12=\dfrac32$，得 $a=-1$，$b=2$。</li>
<li>验证：$\lim\dfrac{f}{g}=\lim\dfrac{\frac32x^2+o(x^2)}{\frac32x^2+o(x^2)}=1$。故 $ab=-2$。</li>
</ol>
<p><b>答案：$-2$.</b></p>
<p><b>这道题告诉我们：</b>"等价"是一个很强的条件——不仅阶数相同，首项系数也要相同；"同阶"只要求阶数相同。做反求参数题时，先确定不含参数那一边的阶和首项系数，再对含参数的一边逐阶"对齐"：低阶项系数归零，同阶项系数相等。展开到几阶由不含参数的那一边决定（"上下同阶"原则）。</p>`
      },
      {
        kind: 'example', title: '近十年真题精讲（二）：变限积分比阶与等价代换求极限',
        html: R`<p><b>真题 3.</b> <span class="qref" data-q="2020-1">2020 年第 1 题</span>　当 $x\to0^{+}$ 时，下列无穷小量中最高阶的是（　　）.</p>
<p>(A) $\displaystyle\int_0^x\left(\mathrm{e}^{t^2}-1\right)\mathrm{d}t$　(B) $\displaystyle\int_0^x\ln\left(1+\sqrt{t^3}\right)\mathrm{d}t$　(C) $\displaystyle\int_0^{\sin x}\sin t^2\,\mathrm{d}t$　(D) $\displaystyle\int_0^{1-\cos x}\sqrt{\sin^3t}\,\mathrm{d}t$</p>
<p><b>这题考什么：</b>$k$ 阶无穷小的定义，对象是四个变限积分。"最高阶"就是趋于 $0$ 最快的那个，即 $\sim Cx^k$ 中 $k$ 最大的。</p>
<p><b>从题面哪个特征想到方法：</b>变限积分不好直接看阶，但求导之后就是普通函数（变限积分求导公式，见 int.ftc）。由洛必达法则，$\lim\dfrac{F(x)}{x^k}=\lim\dfrac{F'(x)}{kx^{k-1}}$（四个 $F$ 都满足 $F(0)=0$，且被积函数连续，$F'$ 存在，$\frac00$ 型条件成立），所以<b>$F$ 的阶 $=F'$ 的阶 $+1$</b>（"求导降一阶"）。直观地说：若 $F'\sim Cx^m$，那么积分 $\int_0^x Ct^m\,\mathrm{d}t=\frac{C}{m+1}x^{m+1}$，阶数自然加一。而 $F'$ 的阶用等价无穷小一眼就能看出。</p>
<p><b>分步解答：</b></p>
<ol>
<li>(A)：导数 $\mathrm{e}^{x^2}-1\sim x^2$，二阶，所以积分是 $3$ 阶。</li>
<li>(B)：导数 $\ln(1+\sqrt{x^3})\sim\sqrt{x^3}=x^{3/2}$，$\frac32$ 阶，所以积分是 $\frac52$ 阶。</li>
<li>(C)：导数为 $\sin(\sin^2x)\cdot\cos x\sim\sin^2x\sim x^2$（$\cos x\to1$ 不影响阶），二阶，所以积分是 $3$ 阶。</li>
<li>(D)：导数为 $\sqrt{\sin^3(1-\cos x)}\cdot\sin x$。其中 $1-\cos x\sim\frac{x^2}2$，$\sin(1-\cos x)\sim\frac{x^2}2$，所以 $\sqrt{\sin^3(1-\cos x)}\sim\left(\frac{x^2}2\right)^{3/2}=\frac{x^3}{2\sqrt2}$，再乘 $\sin x\sim x$，导数是 $4$ 阶，积分是 $5$ 阶。</li>
<li>比较：$3,\ \frac52,\ 3,\ 5$，最高阶是 (D)。</li>
</ol>
<p><b>答案：D.</b></p>
<p><b>这道题告诉我们：</b>每一步的等价代换都是对"整体乘法因子"做的（如 $\sqrt{\sin^3u}$ 中 $\sin u\sim u$，再整体取 $\frac32$ 次幂），完全符合代换定理；复合函数里只要内层 $u\to0$ 就可以套等价式；$k$ 可以是分数。另外要记住"高阶 = 更快 = 更小"，别选成 (B)。</p>
<p><b>真题 4.</b> <span class="qref" data-q="2025-11">2025 年第 11 题</span>　$\displaystyle\lim_{x\to0^+}\frac{x^x-1}{\ln x\cdot\ln(1-x)}=$ ______．</p>
<p><b>这题考什么：</b>等价无穷小代换定理的直接应用，考察能否识别"$\mathrm{e}^{u}-1\sim u$"和"$\ln(1+u)\sim u$"的结构。</p>
<p><b>从题面哪个特征想到方法：</b>$x^x$ 是幂指函数，标准处理是写成 $\mathrm{e}^{x\ln x}$；$x\to0^+$ 时 $x\ln x\to0$（这是一个基本极限，可用洛必达 $\lim\frac{\ln x}{1/x}=\lim\frac{1/x}{-1/x^2}=0$ 得到），所以 $x^x-1=\mathrm{e}^{x\ln x}-1$ 正是"$\mathrm{e}^{u}-1$，$u\to0$"的形式。分母里 $\ln(1-x)$ 是"$\ln(1+u)$，$u=-x\to0$"的形式。它们都是整体乘除因子，可以换。</p>
<p><b>分步解答：</b></p>
<ol>
<li>$x^x-1=\mathrm{e}^{x\ln x}-1\sim x\ln x$（$x\to0^+$），因为 $u=x\ln x\to0$ 且 $u\ne0$，复合情形下 $\mathrm{e}^u-1\sim u$ 成立。</li>
<li>$\ln(1-x)\sim-x$（$x\to0^+$）。</li>
<li>代入：$\displaystyle\lim_{x\to0^+}\frac{x\ln x}{\ln x\cdot(-x)}=\lim_{x\to0^+}(-1)=-1$。注意 $\ln x$ 本身是无穷大，它在分子分母中直接约掉，不需要（也不能）对它做任何"等价代换"。</li>
</ol>
<p><b>答案：$-1$.</b></p>
<p><b>这道题告诉我们：</b>等价代换的本质是"换掉趋于 $0$ 的乘除因子"，关键是认出"$u$"是什么（这里 $u=x\ln x$ 和 $u=-x$）；而本身不趋于 $0$ 的因子（$\ln x$）老老实实留着。</p>`
      },
      {
        kind: 'pitfall', title: '常见误区',
        html: R`<ul>
<li><b>"无穷小是很小的数"。</b>错。无穷小是极限为 $0$ 的变量，和"过程"绑定。$0.000001$ 不是无穷小；$0$ 是唯一的常数无穷小。</li>
<li><b>"高阶无穷小更大"。</b>错。"高阶"=趋于 $0$ 更快=更小。$x^3=o(x)$，$x\to0$ 时 $x^3$ 远小于 $x$。</li>
<li><b>加减里随意等价代换。</b>$\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{x^3}$ 换成 $\dfrac{x-x}{x^3}=0$ 是错的，正确答案是 $\frac12$。规则："只换整体的乘除因子"；加减两项换完后若恰好抵消，必须回头用更高阶的展开或者因式分解。</li>
<li><b>把等价无穷小当成恒等式。</b>$\sin x\sim x$ 不是 $\sin x=x$，它是 $\sin x=x+o(x)$。所以在需要更高精度（如分子分母都是三阶）时，一阶等价式不够用。</li>
<li><b>$u$ 不趋于 $0$ 也套公式。</b>$x\to\infty$ 时不能写 $\sin x\sim x$；$x\to0$ 时不能写 $\sin\frac1x\sim\frac1x$。等价无穷小表的前提是"括号里的量趋于 $0$"。$x\to\infty$ 时倒是可以写 $\sin\frac1x\sim\frac1x$。</li>
<li><b>无界 $=$ 无穷大。</b>错。$x\sin x$ 在 $x\to+\infty$ 时无界但不是无穷大。无穷大要求"最终所有点"都大，无界只要求"有些点"大。</li>
<li><b>"$\lim f=\infty$"当成极限存在。</b>按定义这时极限不存在。做"极限存在则……"类选择题时要注意。</li>
<li><b>两个无穷小的和、商想当然。</b>无穷小 $+$ 无穷小 $=$ 无穷小（有限个），但无穷小 $\div$ 无穷小什么都可能，无穷多个无穷小之和也什么都可能（$n$ 个 $\frac1n$ 之和为 $1$）。</li>
<li><b>$o(x^2)$ 当成一个确定的函数。</b>$o(x^2)-o(x^2)$ 不是 $0$，只能说仍是 $o(x^2)$。</li>
<li><b>"同阶"与"等价"混淆。</b>同阶只要比值极限是非零常数；等价要求这个常数是 $1$。反求参数时，"同阶"条件少一个方程，"等价"条件多一个方程。</li>
</ul>`
      },
      {
        kind: 'method', title: '方法与题型识别',
        html: R`<p><b>题型一：判断阶数 / 比较几个无穷小谁高阶。</b></p>
<ul>
<li>看到"$\alpha$ 是 $x$ 的几阶无穷小"→ 求 $\lim\dfrac{\alpha}{x^k}$ 使之为非零常数；工具按难度依次是：等价无穷小表 → 泰勒展开（找第一个非零项）→ 洛必达。</li>
<li>看到"等价无穷小相减"（$x-\sin x$、$\tan x-x$、$\mathrm{e}^x-1-x$ 等）→ 一阶一定抵消，直接用三阶 / 二阶等价式或泰勒。</li>
<li>看到"变限积分"→ 求导降一阶：$F(x)=\int_0^{\varphi(x)}g(t)\,\mathrm{d}t$ 的阶 $=$ $g(\varphi(x))\varphi'(x)$ 的阶 $+1$。</li>
<li>看到"复合"（$\sin(\text{小量})$、$\ln(1+\text{小量})$、$(1+\text{小量})^a-1$）→ 内层趋于 $0$ 就套表，阶数相乘：$\sin(x^2)$ 是二阶；开方会让阶数减半，如 $x\to0^+$ 时 $\sqrt{1-\cos x}\sim\dfrac{x}{\sqrt2}$ 是一阶，$\sqrt{\sin^3u}\sim u^{3/2}$（2020 年第 1 题选项 D）。</li>
</ul>
<p><b>题型二：用等价代换求极限。</b></p>
<ul>
<li>看到 $\frac00$ 型且分子分母是乘积/商 → 每个因子换成 $Cx^k$，立刻得答案。</li>
<li>看到加减结构 → 先问"换完会不会抵消"：不抵消（如 $\mathrm{e}^{x^2}-\cos x$，$x^2+\frac{x^2}2$）可以换；会抵消就改用因式分解（$\tan x-\sin x=\tan x(1-\cos x)$）或泰勒。</li>
<li>看到有界振荡因子（$\sin\frac1x$、$\cos x$ 当 $x\to\infty$）→ 用"有界 $\times$ 无穷小 $=$ 无穷小"，不要试图求它的极限。</li>
<li>看到幂指函数 $u^v$ → 写成 $\mathrm{e}^{v\ln u}$，于是 $u^v-1\sim v\ln u$（当 $v\ln u\to0$）；$1^\infty$ 型则 $u^v=\mathrm{e}^{v\ln u}$，$\ln u=\ln(1+(u-1))\sim u-1$。</li>
</ul>
<p><b>题型三：已知阶 / 等价关系反求参数。</b></p>
<ul>
<li>把不含参数的那一边展开，确定阶 $k$ 和首项系数 $C$；把含参数的一边展开到 $x^k$；"低于 $k$ 阶的系数 $=0$，$k$ 阶系数 $=C$（等价）或 $\ne0$（同阶）"列方程。</li>
<li>也可以用"极限存在的必要条件"：若 $\lim\dfrac{A(x)}{B(x)}$ 存在且 $B\to0$，则必有 $A\to0$，可逐层剥出参数。</li>
</ul>
<p><b>题型四：概念辨析选择题。</b></p>
<ul>
<li>无穷大 vs 无界：举 $x\sin x$、$\frac1x\sin\frac1x$。</li>
<li>无穷小的运算：有限和、有界乘积为无穷小；商不定。</li>
<li>"$\lim\frac{f}{g}$ 存在且 $g\to0$ 推出 $f\to0$"是常用必要条件。</li>
</ul>
<p><b>一句口诀：</b>乘除放心换，加减看抵消，复合看内层，积分降一阶。</p>`
      },
      {
        kind: 'exam', title: '考研怎么考',
        html: R`<p>从 2016–2025 年数学一真题看，本考点几乎年年出现，而且基本都在<b>选择题或填空题</b>中（4–5 分），它要么单独成题，要么作为求极限、求导、求渐近线的基本工具。概括如下：</p>
<ul>
<li><b>直接考"阶的比较"（主考点）。</b>设问方式有两种：给一个无穷小问它是 $x$ 的几阶（<span class="qref" data-q="2019-1">2019 年第 1 题</span>，$x-\tan x$ 与 $x^k$ 同阶求 $k$）；给几个无穷小问哪一个阶最高（<span class="qref" data-q="2020-1">2020 年第 1 题</span>，四个变限积分比阶）。后者把本考点与变限积分求导、洛必达结合，是近年的典型综合方式。</li>
<li><b>用"等价"条件反求参数（主考点）。</b><span class="qref" data-q="2023-11">2023 年第 11 题</span>给出含两个参数的 $f$ 与不含参数的 $g$ 等价，求 $ab$；核心是泰勒展开 + 逐阶对齐系数。这类题近几年分值升到 5 分。</li>
<li><b>作为求极限的工具（主考点为 lim.compute）。</b>$\frac00$ 型用等价代换直接化简：<span class="qref" data-q="2025-11">2025 年第 11 题</span>（$x^x-1\sim x\ln x$，$\ln(1-x)\sim-x$）、<span class="qref" data-q="2024-11">2024 年第 11 题</span>（$(1+ax^2)^{\sin x}-1\sim ax^2\sin x$，已知极限求 $a$）、<span class="qref" data-q="2016-9">2016 年第 9 题</span>（分母 $1-\cos x^2\sim\frac{x^4}2$，分子是变限积分）、<span class="qref" data-q="2018-9">2018 年第 9 题</span>（$1^\infty$ 型，$\sin kx\sim kx$）、<span class="qref" data-q="2020-9">2020 年第 9 题</span>（$\infty-\infty$ 型通分后分母 $(\mathrm{e}^x-1)\ln(1+x)\sim x^2$）。</li>
<li><b>与连续、可导结合（主考点为 lim.cont / diff.def）。</b><span class="qref" data-q="2017-1">2017 年第 1 题</span>分段函数在 $0$ 处连续，右极限用 $1-\cos\sqrt x\sim\frac x2$；<span class="qref" data-q="2018-1">2018 年第 1 题</span>判断含 $|x|$ 的函数在 $0$ 处是否可导，用"$f(x)-f(0)$ 的阶"来数：$|x|\sin|x|\sim x^2$、$|x|\sin\sqrt{|x|}\sim|x|^{3/2}$ 都比 $x$ 高阶，差商趋于 $0$，可导；而 $\cos\sqrt{|x|}-1\sim-\dfrac{|x|}2$ 与 $x$ 同阶，差商 $\dfrac{-|x|/2}{x}$ 在 $x\to0^+$ 时 $\to-\frac12$、$x\to0^-$ 时 $\to\frac12$，左右导数不等，不可导；<span class="qref" data-q="2020-2">2020 年第 2 题</span>考"$f$ 可导推出 $f(x)/\sqrt{|x|}\to0$"，本质是可导意味着 $f(x)-f(0)$ 至少是一阶无穷小。</li>
<li><b>与其他章节结合。</b><span class="qref" data-q="2023-1">2023 年第 1 题</span>求斜渐近线，截距计算中用 $\ln\left(\mathrm{e}+\frac1{x-1}\right)-1=\ln\left(1+\frac{1}{\mathrm{e}(x-1)}\right)\sim\frac1{\mathrm{e}(x-1)}$；<span class="qref" data-q="2024-13">2024 年第 13 题</span>傅里叶系数 $a_{2n-1}\to0$，于是 $\sin a_{2n-1}\sim a_{2n-1}$，把级数题转化为无穷小的阶。</li>
</ul>
<p><b>主考点真题一览：</b>2016–2025 年以本考点为主考点的题只有三道——2019 年第 1 题、2020 年第 1 题、2023 年第 11 题，全部是选择或填空，而且全部是"阶"的概念题（同阶求 $k$、比最高阶、等价反求参数），没有一道是单纯的"等价代换求极限"（后者都归入 lim.compute）。这三道题在上面"近十年真题精讲"中已逐题讲透（真题 1–3），其共同套路是：<b>把每个无穷小写成 $Cx^k+o(x^k)$，比较 $k$ 和 $C$</b>；写出 $Cx^k$ 的工具按优先级是等价无穷小表 → 泰勒 → 洛必达（变限积分先求导降一阶）。</p>
<p><b>近几年的变化：</b>2016–2018 年多为"等价代换求极限"的直接应用；2019 年以后更倾向于考"阶"本身的概念（求 $k$、比最高阶、等价反求参数），而且把对象换成变限积分、幂指函数、含参函数，要求同时熟练泰勒展开和洛必达。概念辨析（无穷大 vs 无界、无穷小的运算）近十年没有单独出题，但在选择题的选项设计里经常作为干扰项出现，仍需掌握。</p>`
      },
      {
        kind: 'check', title: '自测',
        items: [
          { q: R`<p>判断对错并说理由：$x\to+\infty$ 时，$f(x)=x\sin x$ 是无穷大。</p>`, a: R`<p>错。取 $x_n=n\pi\to+\infty$，$f(x_n)=0$，所以对任何 $M>0$ 都不可能在 $(X,+\infty)$ 内恒有 $|f|>M$。$f$ 只是无界（取 $x_n=2n\pi+\frac\pi2$ 得 $f(x_n)\to+\infty$）。无穷大 ⟹ 无界，反之不成立。</p>` },
          { q: R`<p>$x\to0$ 时，$\sqrt{1+x}-1-\dfrac x2$ 是 $x$ 的几阶无穷小？</p>`, a: R`<p>二阶。$(1+x)^{1/2}=1+\frac12x+\frac{\frac12\cdot(-\frac12)}{2}x^2+o(x^2)=1+\frac x2-\frac{x^2}8+o(x^2)$，所以 $\sqrt{1+x}-1-\frac x2=-\frac{x^2}8+o(x^2)\sim-\frac{x^2}8$。也可以用洛必达：$\lim\dfrac{\frac1{2\sqrt{1+x}}-\frac12}{2x}=\lim\dfrac{1-\sqrt{1+x}}{4x\sqrt{1+x}}=-\dfrac18$。</p>` },
          { q: R`<p>下列做法是否正确：$\lim\limits_{x\to0}\dfrac{\sin x-x\cos x}{x^3}=\lim\limits_{x\to0}\dfrac{x-x\cdot1}{x^3}=0$。</p>`, a: R`<p>不正确。分子是两项相减，$\sin x\sim x$、$x\cos x\sim x$，换完恰好抵消，不满足"加减可换"的条件。正确做法：泰勒 $\sin x=x-\frac{x^3}6+o(x^3)$，$x\cos x=x-\frac{x^3}2+o(x^3)$，相减得 $\frac{x^3}3+o(x^3)$，极限为 $\dfrac13$。</p>` },
          { q: R`<p>设 $x\to0$ 时 $\alpha\sim\beta$，$\beta\ne0$。下列哪一个一定成立？</p>`, options: [R`<p>$\alpha-\beta=o(\alpha)$ 且 $\alpha-\beta=o(\beta)$</p>`, R`<p>$\alpha=\beta$</p>`, R`<p>$\alpha^2$ 与 $\beta$ 同阶</p>`, R`<p>$\lim\dfrac{\alpha-\beta}{x}=0$</p>`], correct: 0, explain: R`<p>由等价的充要条件，$\alpha-\beta=o(\beta)$；又 $\alpha\sim\beta$ 所以 $o(\beta)=o(\alpha)$，(A) 成立。(B) 错：$\sin x\sim x$ 但不相等。(C) 错：$\alpha^2$ 比 $\beta$ 高阶。(D) 错：$\alpha-\beta$ 是比 $\beta$ 高阶，但 $\beta$ 可能比 $x$ 低阶，比如 $\alpha=\sqrt{|x|}+x$，$\beta=\sqrt{|x|}$，$\frac{\alpha-\beta}{x}=1\not\to0$。</p>` },
          { q: R`<p>求 $\lim\limits_{x\to0}\dfrac{\mathrm{e}^{x^2}-1}{x\ln(1+x)}$。</p>`, a: R`<p>分子 $\mathrm{e}^{x^2}-1\sim x^2$（内层 $u=x^2\to0$），分母 $x\ln(1+x)\sim x\cdot x=x^2$，两者都是整体乘除因子，可换，极限为 $1$。</p>` },
          { q: R`<p>判断对错并说理由：若 $\lim\limits_{x\to0}\dfrac{f(x)}{x^2}$ 存在，则 $\lim\limits_{x\to0}f(x)=0$ 且 $\lim\limits_{x\to0}\dfrac{f(x)}{x}=0$。</p>`, a: R`<p>对。$f(x)=\dfrac{f(x)}{x^2}\cdot x^2$，前者极限存在（设为 $A$），后者趋于 $0$，由乘法法则 $f\to A\cdot0=0$；同理 $\dfrac{f(x)}{x}=\dfrac{f(x)}{x^2}\cdot x\to A\cdot0=0$。这说明 $f=o(x)$——"$\lim\frac{A}{B}$ 存在且 $B\to0$ 则 $A\to0$"是反求参数题的基本工具。</p>` },
          { q: R`<p>$x\to0^+$ 时，下列无穷小中阶最高的是</p>`, options: [R`<p>$\sqrt{x}$</p>`, R`<p>$1-\cos x$</p>`, R`<p>$x-\sin x$</p>`, R`<p>$\ln(1+x^2)$</p>`], correct: 2, explain: R`<p>阶分别是 $\frac12$、$2$、$3$、$2$，阶最高（趋于 $0$ 最快）的是 $x-\sin x\sim\frac{x^3}6$。</p>` },
          { q: R`<p>$x\to0$ 时，$x\sin\dfrac1x$ 与 $x$ 是什么关系：高阶、低阶、同阶还是无法比较？$x\sin\frac1x$ 与 $\sqrt{|x|}$ 呢？</p>`, a: R`<p>与 $x$ 无法比较：比值 $\sin\frac1x$ 极限不存在。与 $\sqrt{|x|}$ 相比：$\dfrac{x\sin\frac1x}{\sqrt{|x|}}=\pm\sqrt{|x|}\sin\frac1x\to0$（有界乘无穷小），所以 $x\sin\frac1x$ 是比 $\sqrt{|x|}$ 高阶的无穷小。这说明"阶"不一定存在，但"高阶"关系可以单独成立。</p>` }
        ]
      }
    ]
  };
});
