// 数学一 · 高等数学真题
// 字段：id, ch(章节), topic(考点), year, type(选择/填空/解答), stem, options?, answer, solution, tip?, note?, also?(交叉归属章节)
// 每题答案都经过计算机代数系统（SymPy）复核。
(function () {
  var R = String.raw;

  window.PROBLEMS = [
    /* ───────── 第 1 章 函数、极限、连续 ───────── */
    {
      id: '1997-lim', ch: 'lim', topic: '未定式极限', year: 1997, type: '填空',
      stem: R`$\displaystyle\lim_{x\to0}\frac{3\sin x+x^2\cos\frac1x}{(1+\cos x)\ln(1+x)}=$ ______.`,
      answer: R`$\dfrac32$`,
      solution: R`<p>分子、分母同除以 $x$：</p>$$\text{原式}=\lim_{x\to0}\frac{3\cdot\frac{\sin x}{x}+x\cos\frac1x}{(1+\cos x)\cdot\frac{\ln(1+x)}{x}}=\frac{3+0}{2\cdot1}=\frac32.$$<p>其中 $x\cos\frac1x\to0$（无穷小乘有界量）。</p>`,
      tip: R`不要直接用洛必达：分子求导后出现 $\sin\frac1x$，极限不存在，但这不能说明原极限不存在。`
    },
    {
      id: '2008-lim', ch: 'lim', topic: '未定式极限', year: 2008, type: '解答',
      stem: R`求极限 $\displaystyle\lim_{x\to0}\frac{[\sin x-\sin(\sin x)]\sin x}{x^4}$.`,
      answer: R`$\dfrac16$`,
      solution: R`<p>乘积因子 $\sin x\sim x$，先换掉：</p>$$\text{原式}=\lim_{x\to0}\frac{\sin x-\sin(\sin x)}{x^3}.$$<p>令 $t=\sin x$，则 $x\to0$ 时 $t\to0$ 且 $t\sim x$，所以</p>$$\text{原式}=\lim_{t\to0}\frac{t-\sin t}{t^3}=\frac16.$$<p>（用 $t-\sin t\sim\frac{t^3}{6}$，或洛必达法则。）</p>`,
      tip: R`乘积因子可以先用等价无穷小替换，加减项不能随便替换：$\sin x-\sin(\sin x)$ 不能换成 $x-\sin x$。`
    },
    {
      id: '2011-lim', ch: 'lim', topic: '$1^\\infty$ 型极限', year: 2011, type: '解答',
      stem: R`求极限 $\displaystyle\lim_{x\to0}\left[\frac{\ln(1+x)}{x}\right]^{\frac{1}{e^x-1}}$.`,
      answer: R`$e^{-\frac12}$`,
      solution: R`<p>这是 $1^\infty$ 型。记 $u=\dfrac{\ln(1+x)}{x}\to1$，则</p>$$\text{原式}=\exp\left(\lim_{x\to0}\frac{u-1}{e^x-1}\right),\qquad u-1=\frac{\ln(1+x)-x}{x}.$$<p>由 $\ln(1+x)-x\sim-\dfrac{x^2}{2}$，$e^x-1\sim x$，得</p>$$\lim_{x\to0}\frac{\ln(1+x)-x}{x\cdot x}=-\frac12,$$<p>所以原式 $=e^{-\frac12}$.</p>`,
      tip: R`$1^\infty$ 型的通用公式：$\lim u^v=e^{\lim v(u-1)}$（前提是 $u\to1$，$v\to\infty$）。`
    },
    {
      id: '2010-lim', ch: 'lim', topic: '$1^\\infty$ 型极限', year: 2010, type: '选择',
      stem: R`极限 $\displaystyle\lim_{x\to\infty}\left[\frac{x^2}{(x-a)(x+b)}\right]^x=$`,
      options: [R`$1$`, R`$e$`, R`$e^{a-b}$`, R`$e^{b-a}$`],
      answer: 'C',
      solution: R`<p>$1^\infty$ 型。$x^2-(x-a)(x+b)=(a-b)x+ab$，所以</p>$$\lim_{x\to\infty}x\left[\frac{x^2}{(x-a)(x+b)}-1\right]=\lim_{x\to\infty}\frac{x\,[(a-b)x+ab]}{(x-a)(x+b)}=a-b,$$<p>极限为 $e^{a-b}$，选 C。</p>`
    },
    {
      id: '2018-lim', ch: 'lim', topic: '$1^\\infty$ 型极限', year: 2018, type: '填空',
      stem: R`若 $\displaystyle\lim_{x\to0}\left(\frac{1-\tan x}{1+\tan x}\right)^{\frac{1}{\sin kx}}=e$，则 $k=$ ______.`,
      answer: R`$-2$`,
      solution: R`<p>$1^\infty$ 型：</p>$$\lim_{x\to0}\frac{1}{\sin kx}\left(\frac{1-\tan x}{1+\tan x}-1\right)=\lim_{x\to0}\frac{-2\tan x}{(1+\tan x)\sin kx}=\lim_{x\to0}\frac{-2x}{kx}=-\frac2k.$$<p>由 $e^{-\frac2k}=e$ 得 $k=-2$.</p>`
    },
    {
      id: '2020-lim', ch: 'lim', topic: '未定式极限', year: 2020, type: '填空',
      stem: R`$\displaystyle\lim_{x\to0}\left[\frac{1}{e^x-1}-\frac{1}{\ln(1+x)}\right]=$ ______.`,
      answer: R`$-1$`,
      solution: R`<p>$\infty-\infty$ 型先通分，分母用等价无穷小：</p>$$\text{原式}=\lim_{x\to0}\frac{\ln(1+x)-(e^x-1)}{(e^x-1)\ln(1+x)}=\lim_{x\to0}\frac{\ln(1+x)-e^x+1}{x^2}.$$<p>由 $\ln(1+x)=x-\frac{x^2}2+o(x^2)$，$e^x=1+x+\frac{x^2}2+o(x^2)$，分子 $=-x^2+o(x^2)$，所以原式 $=-1$.</p>`,
      tip: R`分母先化成 $x^2$，分子就展开到 $x^2$ 项为止。`
    },
    {
      id: '2021-lim', ch: 'lim', topic: '未定式极限', year: 2021, type: '解答',
      stem: R`求极限 $\displaystyle\lim_{x\to0}\left(\frac{1+\int_0^x e^{t^2}\,dt}{e^x-1}-\frac{1}{\sin x}\right)$.`,
      answer: R`$\dfrac12$`,
      solution: R`<p>通分，分母 $(e^x-1)\sin x\sim x^2$：</p>$$\text{原式}=\lim_{x\to0}\frac{\left(1+\int_0^x e^{t^2}dt\right)\sin x-(e^x-1)}{x^2}.$$<p>由 $e^{t^2}=1+t^2+o(t^2)$ 得 $\int_0^x e^{t^2}dt=x+\frac{x^3}{3}+o(x^3)$，于是</p>$$\left(1+x+o(x^2)\right)\left(x-\frac{x^3}6+o(x^3)\right)=x+x^2+o(x^2),\qquad e^x-1=x+\frac{x^2}2+o(x^2).$$<p>分子 $=\dfrac{x^2}{2}+o(x^2)$，所以原式 $=\dfrac12$.</p>`,
      tip: R`变限积分也能做泰勒展开：先展开被积函数，再逐项积分。`
    },
    {
      id: '2013-lim', ch: 'lim', topic: '无穷小的比较', year: 2013, type: '选择',
      stem: R`已知极限 $\displaystyle\lim_{x\to0}\frac{x-\arctan x}{x^k}=c$，其中 $k,c$ 为常数，且 $c\ne0$，则`,
      options: [R`$k=2,\ c=-\frac12$`, R`$k=2,\ c=\frac12$`, R`$k=3,\ c=-\frac13$`, R`$k=3,\ c=\frac13$`],
      answer: 'D',
      solution: R`<p>$\arctan x=x-\dfrac{x^3}{3}+o(x^3)$，故 $x-\arctan x\sim\dfrac{x^3}{3}$，所以 $k=3$，$c=\dfrac13$，选 D。</p>`,
      tip: R`常用三阶差：$x-\sin x\sim\frac{x^3}6$，$\tan x-x\sim\frac{x^3}3$，$x-\arctan x\sim\frac{x^3}3$。`
    },
    {
      id: '2019-lim', ch: 'lim', topic: '无穷小的比较', year: 2019, type: '选择',
      stem: R`当 $x\to0$ 时，若 $x-\tan x$ 与 $x^k$ 是同阶无穷小，则 $k=$`,
      options: ['$1$', '$2$', '$3$', '$4$'],
      answer: 'C',
      solution: R`<p>$\tan x=x+\dfrac{x^3}{3}+o(x^3)$，所以 $x-\tan x\sim-\dfrac{x^3}{3}$，与 $x^3$ 同阶，$k=3$，选 C。</p>`
    },
    {
      id: '2017-lim', ch: 'lim', topic: '连续与间断', year: 2017, type: '选择',
      stem: R`若函数 $f(x)=\begin{cases}\dfrac{1-\cos\sqrt x}{ax}, & x>0,\\[2mm] b, & x\le0\end{cases}$ 在 $x=0$ 处连续，则`,
      options: [R`$ab=\frac12$`, R`$ab=-\frac12$`, R`$ab=0$`, R`$ab=2$`],
      answer: 'A',
      solution: R`<p>$x\to0^+$ 时 $1-\cos\sqrt x\sim\dfrac{(\sqrt x)^2}{2}=\dfrac x2$，所以</p>$$\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\frac{x/2}{ax}=\frac1{2a}.$$<p>连续要求 $\dfrac1{2a}=f(0)=b$，即 $ab=\dfrac12$，选 A。</p>`
    },
    {
      id: '2018-seq', ch: 'lim', topic: '数列极限', year: 2018, type: '解答',
      stem: R`设数列 $\{x_n\}$ 满足：$x_1>0$，$x_ne^{x_{n+1}}=e^{x_n}-1\ (n=1,2,\cdots)$。证明 $\{x_n\}$ 收敛，并求 $\displaystyle\lim_{n\to\infty}x_n$.`,
      answer: R`$\lim\limits_{n\to\infty}x_n=0$`,
      solution: R`<p><b>有下界、单调：</b>递推式即 $e^{x_{n+1}}=\dfrac{e^{x_n}-1}{x_n}$。若 $x_n>0$，由拉格朗日中值定理，存在 $\xi\in(0,x_n)$ 使 $\dfrac{e^{x_n}-1}{x_n}=e^{\xi}$，于是 $x_{n+1}=\xi\in(0,x_n)$。由归纳法，对一切 $n$ 有 $x_n>0$，且 $x_{n+1}<x_n$。</p><p>单调递减且有下界 $0$，所以 $\{x_n\}$ 收敛。设极限为 $A\ge0$，在递推式两边取极限：$Ae^A=e^A-1$。</p><p>令 $g(x)=xe^x-e^x+1$，则 $g(0)=0$，$g'(x)=xe^x>0\ (x>0)$，所以 $x>0$ 时 $g(x)>0$，方程只有 $A=0$ 一个非负根。故 $\lim\limits_{n\to\infty}x_n=0$.</p>`,
      tip: R`递推式里出现 $\frac{e^{x}-1}{x}$ 这种"差商"，就想到拉格朗日中值定理。`
    },
    {
      id: '2011-seq', ch: 'lim', topic: '数列极限', year: 2011, type: '解答',
      stem: R`(1) 证明：对任意正整数 $n$，都有 $\dfrac1{n+1}<\ln\left(1+\dfrac1n\right)<\dfrac1n$ 成立；<br>(2) 设 $a_n=1+\dfrac12+\cdots+\dfrac1n-\ln n\ (n=1,2,\cdots)$，证明数列 $\{a_n\}$ 收敛。`,
      answer: '证明题，见解析。',
      solution: R`<p>(1) $\ln\left(1+\frac1n\right)=\ln(n+1)-\ln n$。对 $\ln x$ 在 $[n,n+1]$ 上用拉格朗日中值定理，存在 $\xi\in(n,n+1)$，使 $\ln(n+1)-\ln n=\dfrac1\xi$，而 $\dfrac1{n+1}<\dfrac1\xi<\dfrac1n$，得证。</p><p>(2) <b>单调：</b>$a_{n+1}-a_n=\dfrac1{n+1}-\ln\left(1+\dfrac1n\right)<0$（由 (1)），数列单调递减。</p><p><b>有下界：</b>由 (1)，$\dfrac1k>\ln\left(1+\dfrac1k\right)=\ln(k+1)-\ln k$，所以</p>$$a_n>\sum_{k=1}^{n}[\ln(k+1)-\ln k]-\ln n=\ln(n+1)-\ln n>0.$$<p>单调递减且有下界，$\{a_n\}$ 收敛。</p>`,
      tip: R`第 (1) 问的不等式就是第 (2) 问的工具，解答题前后问要连起来看。这个极限就是欧拉常数 $\gamma\approx0.577$。`
    },

    /* ───────── 第 2 章 一元函数微分学 ───────── */
    {
      id: '2013-dd', ch: 'diff', topic: '导数定义与计算', year: 2013, type: '填空',
      stem: R`设函数 $y=f(x)$ 由方程 $y-x=e^{x(1-y)}$ 确定，则 $\displaystyle\lim_{n\to\infty}n\left[f\left(\frac1n\right)-1\right]=$ ______.`,
      answer: '$1$',
      solution: R`<p>令 $x=0$ 得 $y=e^0=1$，即 $f(0)=1$，所以</p>$$\lim_{n\to\infty}n\left[f\left(\tfrac1n\right)-1\right]=\lim_{n\to\infty}\frac{f(\frac1n)-f(0)}{\frac1n}=f'(0).$$<p>方程两边对 $x$ 求导：$y'-1=e^{x(1-y)}\left[(1-y)-xy'\right]$。代入 $x=0,\ y=1$：$y'(0)-1=1\cdot(0-0)=0$，所以 $f'(0)=1$.</p>`,
      tip: R`看到 $n\left[f(\frac1n)-f(0)\right]$ 就要认出这是导数定义。`
    },
    {
      id: '2013-param', ch: 'diff', topic: '导数定义与计算', year: 2013, type: '填空',
      stem: R`设 $\begin{cases}x=\sin t,\\ y=t\sin t+\cos t\end{cases}$（$t$ 为参数），则 $\left.\dfrac{d^2y}{dx^2}\right|_{t=\frac\pi4}=$ ______.`,
      answer: R`$\sqrt2$`,
      solution: R`<p>$\dfrac{dy}{dt}=\sin t+t\cos t-\sin t=t\cos t$，$\dfrac{dx}{dt}=\cos t$，所以 $\dfrac{dy}{dx}=t$。</p>$$\frac{d^2y}{dx^2}=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}=\frac{1}{\cos t},\qquad\left.\frac{d^2y}{dx^2}\right|_{t=\frac\pi4}=\sqrt2.$$`,
      tip: R`最常见的错：把 $\frac{d^2y}{dx^2}$ 写成 $\frac{d}{dt}\left(\frac{dy}{dx}\right)$，忘了再除以 $\frac{dx}{dt}$。`
    },
    {
      id: '2012-asym', ch: 'diff', topic: '渐近线', year: 2012, type: '选择',
      stem: R`曲线 $y=\dfrac{x^2+x}{x^2-1}$ 渐近线的条数为`,
      options: ['$0$', '$1$', '$2$', '$3$'],
      answer: 'C',
      solution: R`<p>$y=\dfrac{x(x+1)}{(x-1)(x+1)}$。</p><p><b>铅直：</b>$\lim\limits_{x\to1}y=\infty$，$x=1$ 是铅直渐近线；$\lim\limits_{x\to-1}y=\lim\limits_{x\to-1}\dfrac{x}{x-1}=\dfrac12$，$x=-1$ 不是。</p><p><b>水平：</b>$\lim\limits_{x\to\infty}y=1$，$y=1$ 是水平渐近线，因此没有斜渐近线。</p><p>共 2 条，选 C。</p>`,
      tip: R`分母为零的点不一定是铅直渐近线，必须验证极限是 $\infty$。`
    },
    {
      id: '2014-asym', ch: 'diff', topic: '渐近线', year: 2014, type: '选择',
      stem: R`下列曲线中有渐近线的是`,
      options: [R`$y=x+\sin x$`, R`$y=x^2+\sin x$`, R`$y=x+\sin\frac1x$`, R`$y=x^2+\sin\frac1x$`],
      answer: 'C',
      solution: R`<p>对 C：$k=\lim\limits_{x\to\infty}\dfrac yx=1$，$b=\lim\limits_{x\to\infty}(y-x)=\lim\limits_{x\to\infty}\sin\dfrac1x=0$，所以 $y=x$ 是斜渐近线。</p><p>A 中 $y-x=\sin x$ 没有极限；B、D 中 $\dfrac yx\to\infty$；四条曲线都没有水平渐近线，D 在 $x\to0$ 时 $\sin\frac1x$ 有界，也没有铅直渐近线。选 C。</p>`
    },
    {
      id: '2005-asym', ch: 'diff', topic: '渐近线', year: 2005, type: '填空',
      stem: R`曲线 $y=\dfrac{x^2}{2x+1}$ 的斜渐近线方程为 ______.`,
      answer: R`$y=\dfrac12x-\dfrac14$`,
      solution: R`$$k=\lim_{x\to\infty}\frac{y}{x}=\lim_{x\to\infty}\frac{x}{2x+1}=\frac12,\qquad b=\lim_{x\to\infty}\left(\frac{x^2}{2x+1}-\frac x2\right)=\lim_{x\to\infty}\frac{-x}{2(2x+1)}=-\frac14.$$<p>斜渐近线为 $y=\dfrac12x-\dfrac14$.</p>`
    },
    {
      id: '2023-asym', ch: 'diff', topic: '渐近线', year: 2023, type: '选择',
      note: '原题为选择题，这里去掉选项直接求解。',
      stem: R`求曲线 $y=x\ln\left(e+\dfrac{1}{x-1}\right)$ 的斜渐近线方程。`,
      answer: R`$y=x+\dfrac1e$`,
      solution: R`<p>$\ln\left(e+\dfrac1{x-1}\right)=1+\ln\left(1+\dfrac{1}{e(x-1)}\right)$，所以</p>$$k=\lim_{x\to\infty}\frac yx=1,\qquad b=\lim_{x\to\infty}(y-x)=\lim_{x\to\infty}x\ln\left(1+\frac1{e(x-1)}\right)=\lim_{x\to\infty}\frac{x}{e(x-1)}=\frac1e.$$<p>斜渐近线为 $y=x+\dfrac1e$.</p>`
    },
    {
      id: '2017-mono', ch: 'diff', topic: '单调性与不等式', year: 2017, type: '选择',
      stem: R`设函数 $f(x)$ 可导，且 $f(x)f'(x)>0$，则`,
      options: [R`$f(1)>f(-1)$`, R`$f(1)<f(-1)$`, R`$|f(1)|>|f(-1)|$`, R`$|f(1)|<|f(-1)|$`],
      answer: 'C',
      solution: R`<p>$\left[f^2(x)\right]'=2f(x)f'(x)>0$，所以 $f^2(x)$ 单调递增，$f^2(1)>f^2(-1)$，即 $|f(1)|>|f(-1)|$，选 C。</p><p>A、B 不一定成立：$f(x)=-e^{x}$ 满足条件但 $f(1)<f(-1)$；$f(x)=e^x$ 满足条件且 $f(1)>f(-1)$。</p>`,
      tip: R`看到 $ff'$ 就想到 $(f^2)'$。`
    },
    {
      id: '2012-ineq', ch: 'diff', topic: '单调性与不等式', year: 2012, type: '解答',
      stem: R`证明：$x\ln\dfrac{1+x}{1-x}+\cos x\ge1+\dfrac{x^2}{2}\quad(-1<x<1)$.`,
      answer: '证明题，见解析。',
      solution: R`<p>令 $f(x)=x\ln\dfrac{1+x}{1-x}+\cos x-1-\dfrac{x^2}2$，它是 $(-1,1)$ 上的偶函数，只需证 $0\le x<1$ 时 $f(x)\ge0$。</p>$$f'(x)=\ln\frac{1+x}{1-x}+\frac{2x}{1-x^2}-\sin x-x.$$<p>当 $0\le x<1$ 时，$\ln\dfrac{1+x}{1-x}\ge0$，$\dfrac{2x}{1-x^2}\ge2x$，所以</p>$$f'(x)\ge2x-\sin x-x=x-\sin x\ge0.$$<p>$f(x)$ 在 $[0,1)$ 上单调不减，$f(x)\ge f(0)=0$。由偶函数性质，$-1<x<1$ 时 $f(x)\ge0$，得证。</p>`,
      tip: R`先观察奇偶性能把区间减半；放缩时每一步的方向要一致。`
    },
    {
      id: '2009-mvt', ch: 'diff', topic: '中值定理与证明', year: 2009, type: '解答',
      stem: R`(1) 证明拉格朗日中值定理：若函数 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，则存在 $\xi\in(a,b)$，使得 $f(b)-f(a)=f'(\xi)(b-a)$；<br>(2) 证明：若函数 $f(x)$ 在 $x=0$ 处连续，在 $(0,\delta)\ (\delta>0)$ 内可导，且 $\lim\limits_{x\to0^+}f'(x)=A$，则 $f'_+(0)$ 存在，且 $f'_+(0)=A$.`,
      answer: '证明题，见解析。',
      solution: R`<p>(1) 构造辅助函数</p>$$\varphi(x)=f(x)-f(a)-\frac{f(b)-f(a)}{b-a}(x-a).$$<p>$\varphi$ 在 $[a,b]$ 上连续、在 $(a,b)$ 内可导，且 $\varphi(a)=\varphi(b)=0$。由罗尔定理，存在 $\xi\in(a,b)$ 使 $\varphi'(\xi)=f'(\xi)-\dfrac{f(b)-f(a)}{b-a}=0$，得证。</p><p>(2) 任取 $x\in(0,\delta)$，$f$ 在 $[0,x]$ 上连续，在 $(0,x)$ 内可导。由 (1)，存在 $\xi_x\in(0,x)$，使</p>$$\frac{f(x)-f(0)}{x}=f'(\xi_x).$$<p>当 $x\to0^+$ 时 $\xi_x\to0^+$，所以 $f'_+(0)=\lim\limits_{x\to0^+}f'(\xi_x)=A$.</p>`,
      tip: R`课本定理的证明也会考：罗尔、拉格朗日、积分中值定理的证明都要会写。`
    },
    {
      id: '2013-mvt', ch: 'diff', topic: '中值定理与证明', year: 2013, type: '解答',
      stem: R`设奇函数 $f(x)$ 在 $[-1,1]$ 上具有二阶导数，且 $f(1)=1$。证明：<br>(1) 存在 $\xi\in(0,1)$，使得 $f'(\xi)=1$；<br>(2) 存在 $\eta\in(-1,1)$，使得 $f''(\eta)+f'(\eta)=1$.`,
      answer: '证明题，见解析。',
      solution: R`<p>(1) $f$ 是奇函数，所以 $f(0)=0$。令 $g(x)=f(x)-x$，则 $g(0)=0$，$g(1)=f(1)-1=0$。由罗尔定理，存在 $\xi\in(0,1)$ 使 $g'(\xi)=0$，即 $f'(\xi)=1$.</p><p>(2) 奇函数的导数是偶函数，所以 $f'(-\xi)=f'(\xi)=1$。令</p>$$h(x)=e^x\left[f'(x)-1\right],$$<p>则 $h(-\xi)=h(\xi)=0$。由罗尔定理，存在 $\eta\in(-\xi,\xi)\subset(-1,1)$，使</p>$$h'(\eta)=e^{\eta}\left[f''(\eta)+f'(\eta)-1\right]=0,$$<p>即 $f''(\eta)+f'(\eta)=1$.</p>`,
      tip: R`结论形如 $F'+F=0$（这里 $F=f'-1$）时，辅助函数取 $e^xF(x)$。`
    },
    {
      id: '2017-root', ch: 'diff', topic: '中值定理与证明', year: 2017, type: '解答',
      stem: R`设函数 $f(x)$ 在区间 $[0,1]$ 上具有二阶导数，且 $f(1)>0$，$\lim\limits_{x\to0^+}\dfrac{f(x)}{x}<0$。证明：<br>(1) 方程 $f(x)=0$ 在区间 $(0,1)$ 内至少存在一个实根；<br>(2) 方程 $f(x)f''(x)+[f'(x)]^2=0$ 在区间 $(0,1)$ 内至少存在两个不同实根。`,
      answer: '证明题，见解析。',
      solution: R`<p>(1) 由 $\lim\limits_{x\to0^+}\dfrac{f(x)}{x}<0$ 及极限保号性，存在 $\delta\in(0,1)$ 使 $f(\delta)<0$。又 $f(1)>0$，由零点定理，存在 $\xi\in(\delta,1)$ 使 $f(\xi)=0$.</p><p>(2) 因为 $\lim\limits_{x\to0^+}\dfrac{f(x)}{x}$ 存在且 $f$ 连续，所以 $f(0)=\lim\limits_{x\to0^+}f(x)=0$。在 $[0,\xi]$ 上对 $f$ 用罗尔定理，存在 $\eta\in(0,\xi)$ 使 $f'(\eta)=0$.</p><p>令 $F(x)=f(x)f'(x)$，则 $F(0)=F(\eta)=F(\xi)=0$。在 $[0,\eta]$ 和 $[\eta,\xi]$ 上分别用罗尔定理，得 $\eta_1\in(0,\eta)$，$\eta_2\in(\eta,\xi)$，使 $F'(\eta_1)=F'(\eta_2)=0$。而</p>$$F'(x)=f(x)f''(x)+[f'(x)]^2,$$<p>所以该方程在 $(0,1)$ 内至少有两个不同实根。</p>`,
      tip: R`$ff''+(f')^2$ 正是 $(ff')'$；要两个根，就需要 $ff'$ 的三个零点。`
    },

    /* ───────── 第 3 章 一元函数积分学 ───────── */
    {
      id: '2015-def', ch: 'int', topic: '定积分计算', year: 2015, type: '填空',
      stem: R`$\displaystyle\int_{-\frac\pi2}^{\frac\pi2}\left(\frac{\sin x}{1+\cos x}+|x|\right)dx=$ ______.`,
      answer: R`$\dfrac{\pi^2}{4}$`,
      solution: R`<p>$\dfrac{\sin x}{1+\cos x}$ 是奇函数，在对称区间上积分为 $0$；$|x|$ 是偶函数：</p>$$\text{原式}=2\int_0^{\frac\pi2}x\,dx=\left(\frac\pi2\right)^2=\frac{\pi^2}4.$$`,
      tip: R`对称区间先拆奇偶，能省掉大量计算。`
    },
    {
      id: '2012-def', ch: 'int', topic: '定积分计算', year: 2012, type: '填空',
      stem: R`$\displaystyle\int_0^2x\sqrt{2x-x^2}\,dx=$ ______.`,
      answer: R`$\dfrac\pi2$`,
      solution: R`<p>$2x-x^2=1-(x-1)^2$，令 $t=x-1$：</p>$$\text{原式}=\int_{-1}^{1}(t+1)\sqrt{1-t^2}\,dt=\int_{-1}^1t\sqrt{1-t^2}\,dt+\int_{-1}^1\sqrt{1-t^2}\,dt=0+\frac\pi2.$$<p>第一项被积函数是奇函数；第二项是半径为 $1$ 的半圆面积。</p>`,
      tip: R`$\sqrt{a^2-t^2}$ 的积分优先想几何意义（圆面积）。`
    },
    {
      id: '2013-imp', ch: 'int', topic: '反常积分', year: 2013, type: '填空',
      stem: R`$\displaystyle\int_1^{+\infty}\frac{\ln x}{(1+x)^2}dx=$ ______.`,
      answer: R`$\ln2$`,
      solution: R`<p>分部积分：</p>$$\int_1^{+\infty}\ln x\,d\left(-\frac1{1+x}\right)=\left[-\frac{\ln x}{1+x}\right]_1^{+\infty}+\int_1^{+\infty}\frac{dx}{x(1+x)}=0+\left[\ln\frac{x}{1+x}\right]_1^{+\infty}=0-\ln\frac12=\ln2.$$`
    },
    {
      id: '2016-imp', ch: 'int', topic: '反常积分', year: 2016, type: '选择',
      stem: R`若反常积分 $\displaystyle\int_0^{+\infty}\frac{1}{x^a(1+x)^b}dx$ 收敛，则`,
      options: [R`$a<1$ 且 $b>1$`, R`$a>1$ 且 $b>1$`, R`$a<1$ 且 $a+b>1$`, R`$a>1$ 且 $a+b>1$`],
      answer: 'C',
      solution: R`<p>拆成 $\int_0^1+\int_1^{+\infty}$，两部分都要收敛。</p><p>$x\to0^+$：被积函数 $\sim\dfrac1{x^a}$，$\int_0^1$ 收敛 $\Leftrightarrow a<1$.</p><p>$x\to+\infty$：被积函数 $\sim\dfrac{1}{x^{a+b}}$，$\int_1^{+\infty}$ 收敛 $\Leftrightarrow a+b>1$.</p><p>选 C。</p>`,
      tip: R`同时有瑕点和无穷限时必须拆开，分别用 $p$ 判别法。`
    },
    {
      id: '2016-vlim', ch: 'int', topic: '变限积分', year: 2016, type: '填空',
      stem: R`$\displaystyle\lim_{x\to0}\frac{\int_0^xt\ln(1+t\sin t)\,dt}{1-\cos x^2}=$ ______.`,
      answer: R`$\dfrac12$`,
      solution: R`<p>分母 $1-\cos x^2\sim\dfrac{x^4}2$，再用洛必达法则：</p>$$\text{原式}=\lim_{x\to0}\frac{\int_0^xt\ln(1+t\sin t)dt}{x^4/2}=\lim_{x\to0}\frac{x\ln(1+x\sin x)}{2x^3}=\lim_{x\to0}\frac{x\cdot x^2}{2x^3}=\frac12.$$`
    },
    {
      id: '2014-vlim', ch: 'int', topic: '变限积分', year: 2014, type: '解答',
      stem: R`求极限 $\displaystyle\lim_{x\to+\infty}\frac{\int_1^x\left[t^2\left(e^{\frac1t}-1\right)-t\right]dt}{x^2\ln\left(1+\frac1x\right)}$.`,
      answer: R`$\dfrac12$`,
      solution: R`<p>分母 $x^2\ln\left(1+\frac1x\right)\sim x^2\cdot\frac1x=x\to+\infty$。用洛必达法则：</p>$$\text{原式}=\lim_{x\to+\infty}\frac{\int_1^x\left[t^2(e^{\frac1t}-1)-t\right]dt}{x}=\lim_{x\to+\infty}\left[x^2\left(e^{\frac1x}-1\right)-x\right].$$<p>令 $u=\frac1x\to0^+$：</p>$$\lim_{u\to0^+}\frac{e^u-1-u}{u^2}=\frac12.$$`,
      tip: R`$x\to\infty$ 时作倒代换 $u=\frac1x$，转成 $u\to0$ 后就能用泰勒展开。`
    },
    {
      id: '2017-riem', ch: 'int', topic: '定积分定义', year: 2017, type: '解答',
      stem: R`求 $\displaystyle\lim_{n\to\infty}\sum_{k=1}^{n}\frac{k}{n^2}\ln\left(1+\frac kn\right)$.`,
      answer: R`$\dfrac14$`,
      solution: R`<p>$\dfrac{k}{n^2}=\dfrac1n\cdot\dfrac kn$，由定积分定义：</p>$$\text{原式}=\lim_{n\to\infty}\frac1n\sum_{k=1}^n\frac kn\ln\left(1+\frac kn\right)=\int_0^1x\ln(1+x)\,dx.$$<p>分部积分：</p>$$\int_0^1x\ln(1+x)dx=\left[\frac{x^2}2\ln(1+x)\right]_0^1-\frac12\int_0^1\frac{x^2}{1+x}dx=\frac{\ln2}2-\frac12\left(\frac12-1+\ln2\right)=\frac14.$$`,
      tip: R`和式里能凑出 $\frac1n$ 和 $\frac kn$，就是定积分定义。`
    },
    {
      id: '2018-indef', ch: 'int', topic: '不定积分', year: 2018, type: '解答',
      stem: R`求不定积分 $\displaystyle\int e^{2x}\arctan\sqrt{e^x-1}\,dx$.`,
      answer: R`$\dfrac12e^{2x}\arctan\sqrt{e^x-1}-\dfrac16(e^x-1)^{\frac32}-\dfrac12\sqrt{e^x-1}+C$`,
      solution: R`<p>先分部积分：</p>$$\int e^{2x}\arctan\sqrt{e^x-1}\,dx=\frac12e^{2x}\arctan\sqrt{e^x-1}-\frac12\int e^{2x}\,d\left(\arctan\sqrt{e^x-1}\right).$$<p>而 $d\left(\arctan\sqrt{e^x-1}\right)=\dfrac{1}{e^x}\cdot\dfrac{e^x}{2\sqrt{e^x-1}}dx=\dfrac{dx}{2\sqrt{e^x-1}}$。令 $t=\sqrt{e^x-1}$，$e^x=t^2+1$，$dx=\dfrac{2t}{t^2+1}dt$：</p>$$\frac12\int\frac{e^{2x}}{2\sqrt{e^x-1}}dx=\frac12\int\frac{(t^2+1)^2}{2t}\cdot\frac{2t}{t^2+1}dt=\frac12\int(t^2+1)dt=\frac{t^3}6+\frac t2+C.$$<p>代回得</p>$$\text{原式}=\frac12e^{2x}\arctan\sqrt{e^x-1}-\frac16(e^x-1)^{\frac32}-\frac12\sqrt{e^x-1}+C.$$`,
      tip: R`被积函数是"指数 × 反三角"，反三角函数留着求导，指数函数拿去凑微分。`
    },

    /* ───────── 第 4 章 向量代数与空间解析几何 ───────── */
    {
      id: '2009-rot', ch: 'vec', topic: '旋转曲面与体积', year: 2009, type: '解答',
      stem: R`椭球面 $S_1$ 是椭圆 $\dfrac{x^2}4+\dfrac{y^2}3=1$ 绕 $x$ 轴旋转而成，圆锥面 $S_2$ 是由过点 $(4,0)$ 且与椭圆 $\dfrac{x^2}4+\dfrac{y^2}3=1$ 相切的直线绕 $x$ 轴旋转而成。<br>(1) 求 $S_1$ 及 $S_2$ 的方程；<br>(2) 求 $S_1$ 与 $S_2$ 之间的立体体积。`,
      answer: R`(1) $S_1:\ \dfrac{x^2}4+\dfrac{y^2+z^2}3=1$，$S_2:\ (x-4)^2=4(y^2+z^2)$；(2) $\pi$`,
      solution: R`<p>(1) 绕 $x$ 轴旋转，$x$ 不变，把 $y^2$ 换成 $y^2+z^2$：$S_1:\ \dfrac{x^2}4+\dfrac{y^2+z^2}3=1$.</p><p>设切点 $(x_0,y_0)$，切线 $\dfrac{x_0x}4+\dfrac{y_0y}3=1$ 过 $(4,0)$，得 $x_0=1$，$y_0=\pm\dfrac32$。切线为 $y=\pm\dfrac12(4-x)$，旋转得 $S_2:\ (x-4)^2=4(y^2+z^2)$.</p><p>(2) 切点处 $x=1$。所求体积 = 圆锥（$1\le x\le4$）体积 − 椭球在 $1\le x\le2$ 部分的体积：</p>$$V=\pi\int_1^4\frac{(4-x)^2}{4}dx-\pi\int_1^2 3\left(1-\frac{x^2}4\right)dx=\frac{9\pi}4-\frac{5\pi}4=\pi.$$`,
      tip: R`旋转曲面口诀：绕谁转谁不变，另外两个变量合成平方和。`
    },

    /* ───────── 第 5 章 多元函数微分学 ───────── */
    {
      id: '2009-comp', ch: 'mdiff', topic: '复合函数求导', year: 2009, type: '填空',
      stem: R`设函数 $f(u,v)$ 具有二阶连续偏导数，$z=f(x,xy)$，则 $\dfrac{\partial^2z}{\partial x\partial y}=$ ______.`,
      answer: R`$xf''_{12}+f'_2+xyf''_{22}$`,
      solution: R`<p>$\dfrac{\partial z}{\partial x}=f'_1+yf'_2$。再对 $y$ 求偏导：$f'_1$、$f'_2$ 仍是 $(x,xy)$ 的函数，只有第二个中间变量含 $y$，且 $\frac{\partial(xy)}{\partial y}=x$：</p>$$\frac{\partial^2z}{\partial x\partial y}=xf''_{12}+f'_2+y\cdot xf''_{22}=xf''_{12}+f'_2+xyf''_{22}.$$`,
      tip: R`$f'_1$、$f'_2$ 依然是复合函数，求导时要接着用链式法则，这是最常丢项的地方。`
    },
    {
      id: '2011-comp', ch: 'mdiff', topic: '复合函数求导', year: 2011, type: '解答',
      stem: R`设函数 $z=f\big(xy,\ yg(x)\big)$，其中函数 $f$ 具有二阶连续偏导数，函数 $g(x)$ 可导且在 $x=1$ 处取得极值 $g(1)=1$。求 $\left.\dfrac{\partial^2z}{\partial x\partial y}\right|_{x=1,\,y=1}$.`,
      answer: R`$f'_1(1,1)+f''_{11}(1,1)+f''_{12}(1,1)$`,
      solution: R`<p>$g$ 在 $x=1$ 处可导且取极值，所以 $g'(1)=0$。</p>$$\frac{\partial z}{\partial x}=yf'_1+yg'(x)f'_2,$$$$\frac{\partial^2z}{\partial x\partial y}=f'_1+y\left[xf''_{11}+g(x)f''_{12}\right]+g'(x)f'_2+yg'(x)\left[xf''_{21}+g(x)f''_{22}\right].$$<p>代入 $x=y=1$，$g(1)=1$，$g'(1)=0$，此时中间变量 $(xy,\,yg(x))=(1,1)$：</p>$$\left.\frac{\partial^2z}{\partial x\partial y}\right|_{(1,1)}=f'_1(1,1)+f''_{11}(1,1)+f''_{12}(1,1).$$`,
      tip: R`"在 $x=1$ 处取极值"翻译成 $g'(1)=0$，能让一大半项消掉。`
    },
    {
      id: '2017-comp', ch: 'mdiff', topic: '复合函数求导', year: 2017, type: '解答',
      stem: R`设函数 $f(u,v)$ 具有二阶连续偏导数，$y=f(e^x,\cos x)$，求 $\left.\dfrac{dy}{dx}\right|_{x=0}$，$\left.\dfrac{d^2y}{dx^2}\right|_{x=0}$.`,
      answer: R`$\left.\dfrac{dy}{dx}\right|_{x=0}=f'_1(1,1)$，$\left.\dfrac{d^2y}{dx^2}\right|_{x=0}=f''_{11}(1,1)+f'_1(1,1)-f'_2(1,1)$`,
      solution: R`$$\frac{dy}{dx}=e^xf'_1-\sin x\,f'_2.$$<p>$x=0$ 时 $(e^x,\cos x)=(1,1)$，所以 $\left.\dfrac{dy}{dx}\right|_{x=0}=f'_1(1,1)$.</p>$$\frac{d^2y}{dx^2}=e^xf'_1+e^x\left(e^xf''_{11}-\sin x\,f''_{12}\right)-\cos x\,f'_2-\sin x\left(e^xf''_{21}-\sin x\,f''_{22}\right).$$<p>代入 $x=0$：$\left.\dfrac{d^2y}{dx^2}\right|_{x=0}=f'_1(1,1)+f''_{11}(1,1)-f'_2(1,1)$.</p>`
    },
    {
      id: '2012-diffable', ch: 'mdiff', topic: '可微性', year: 2012, type: '选择',
      stem: R`如果函数 $f(x,y)$ 在 $(0,0)$ 处连续，那么下列命题正确的是`,
      options: [
        R`若极限 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)}{|x|+|y|}$ 存在，则 $f(x,y)$ 在 $(0,0)$ 处可微`,
        R`若极限 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)}{x^2+y^2}$ 存在，则 $f(x,y)$ 在 $(0,0)$ 处可微`,
        R`若 $f(x,y)$ 在 $(0,0)$ 处可微，则极限 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)}{|x|+|y|}$ 存在`,
        R`若 $f(x,y)$ 在 $(0,0)$ 处可微，则极限 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)}{x^2+y^2}$ 存在`
      ],
      answer: 'B',
      solution: R`<p>B：极限存在而分母 $\to0$，所以 $f(0,0)=\lim f=0$。令 $\rho=\sqrt{x^2+y^2}$，</p>$$\frac{f(x,y)-f(0,0)}{\rho}=\frac{f(x,y)}{x^2+y^2}\cdot\rho\to0,$$<p>即 $f(x,y)-f(0,0)=0\cdot x+0\cdot y+o(\rho)$，$f$ 在 $(0,0)$ 处可微。</p><p>A 的反例：$f=|x|+|y|$，极限为 $1$，但在原点不可微。C、D 的反例：$f=x$ 可微，但两个极限都不存在。选 B。</p>`,
      tip: R`判断可微只看一件事：$\Delta z-(A\Delta x+B\Delta y)$ 是不是 $o(\rho)$。`
    },
    {
      id: '2009-ext', ch: 'mdiff', topic: '极值与最值', year: 2009, type: '解答',
      stem: R`求二元函数 $f(x,y)=x^2(2+y^2)+y\ln y$ 的极值。`,
      answer: R`极小值 $f\left(0,\dfrac1e\right)=-\dfrac1e$，无极大值`,
      solution: R`<p>定义域 $y>0$。解驻点方程组：</p>$$f'_x=2x(2+y^2)=0,\qquad f'_y=2x^2y+\ln y+1=0,$$<p>得唯一驻点 $\left(0,\dfrac1e\right)$。</p><p>$f''_{xx}=2(2+y^2)$，$f''_{xy}=4xy$，$f''_{yy}=2x^2+\dfrac1y$。在驻点处 $A=2\left(2+\dfrac1{e^2}\right)$，$B=0$，$C=e$，$AC-B^2>0$ 且 $A>0$，所以取极小值</p>$$f\left(0,\frac1e\right)=-\frac1e.$$`
    },
    {
      id: '2012-ext', ch: 'mdiff', topic: '极值与最值', year: 2012, type: '解答',
      stem: R`求函数 $f(x,y)=xe^{-\frac{x^2+y^2}{2}}$ 的极值。`,
      answer: R`极大值 $f(1,0)=e^{-\frac12}$，极小值 $f(-1,0)=-e^{-\frac12}$`,
      solution: R`$$f'_x=(1-x^2)e^{-\frac{x^2+y^2}2}=0,\qquad f'_y=-xye^{-\frac{x^2+y^2}2}=0,$$<p>得驻点 $(1,0)$、$(-1,0)$。二阶偏导：</p>$$f''_{xx}=(x^3-3x)e^{-\frac{x^2+y^2}2},\quad f''_{xy}=(x^2-1)ye^{-\frac{x^2+y^2}2},\quad f''_{yy}=(xy^2-x)e^{-\frac{x^2+y^2}2}.$$<p>在 $(1,0)$：$A=-2e^{-\frac12}$，$B=0$，$C=-e^{-\frac12}$，$AC-B^2>0$，$A<0$，极大值 $f(1,0)=e^{-\frac12}$.</p><p>在 $(-1,0)$：$A=2e^{-\frac12}$，$B=0$，$C=e^{-\frac12}$，$AC-B^2>0$，$A>0$，极小值 $f(-1,0)=-e^{-\frac12}$.</p>`
    },
    {
      id: '2013-ext', ch: 'mdiff', topic: '极值与最值', year: 2013, type: '解答',
      stem: R`求函数 $f(x,y)=\left(y+\dfrac{x^3}3\right)e^{x+y}$ 的极值。`,
      answer: R`极小值 $f\left(1,-\dfrac43\right)=-e^{-\frac13}$；$\left(-1,-\dfrac23\right)$ 不是极值点`,
      solution: R`$$f'_x=\left(x^2+y+\frac{x^3}3\right)e^{x+y}=0,\qquad f'_y=\left(1+y+\frac{x^3}3\right)e^{x+y}=0.$$<p>两式相减得 $x^2=1$，驻点为 $\left(1,-\dfrac43\right)$、$\left(-1,-\dfrac23\right)$。二阶偏导：</p>$$f''_{xx}=\left(2x+2x^2+y+\frac{x^3}3\right)e^{x+y},\quad f''_{xy}=\left(1+x^2+y+\frac{x^3}3\right)e^{x+y},\quad f''_{yy}=\left(2+y+\frac{x^3}3\right)e^{x+y}.$$<p>在 $\left(1,-\frac43\right)$：$A=3e^{-\frac13}$，$B=e^{-\frac13}$，$C=e^{-\frac13}$，$AC-B^2=2e^{-\frac23}>0$，$A>0$，极小值 $f\left(1,-\frac43\right)=-e^{-\frac13}$.</p><p>在 $\left(-1,-\frac23\right)$：$A=-e^{-\frac53}$，$B=C=e^{-\frac53}$，$AC-B^2<0$，不是极值点。</p>`
    },
    {
      id: '2007-max', ch: 'mdiff', topic: '极值与最值', year: 2007, type: '解答',
      stem: R`求函数 $f(x,y)=x^2+2y^2-x^2y^2$ 在区域 $D=\{(x,y)\mid x^2+y^2\le4,\ y\ge0\}$ 上的最大值和最小值。`,
      answer: '最大值 $8$，最小值 $0$',
      solution: R`<p><b>内部驻点：</b>$f'_x=2x(1-y^2)=0$，$f'_y=2y(2-x^2)=0$。在 $D$ 内部（$y>0$）得 $(\pm\sqrt2,1)$，$f(\pm\sqrt2,1)=2$.</p><p><b>边界 $y=0,\ -2\le x\le2$：</b>$f=x^2$，取值范围 $[0,4]$.</p><p><b>边界 $x^2+y^2=4,\ y\ge0$：</b>代入 $x^2=4-y^2$，</p>$$f=y^4-3y^2+4,\quad0\le y\le2.$$<p>记 $u=y^2\in[0,4]$，$h(u)=u^2-3u+4$，最小值 $h\left(\frac32\right)=\frac74$，最大值 $h(4)=8$.</p><p>比较候选值 $2,\ 0,\ 4,\ \frac74,\ 8$：最大值 $8$（在 $(0,2)$ 取到），最小值 $0$（在 $(0,0)$ 取到）。</p>`,
      tip: R`闭区域最值 = 内部驻点值 + 每段边界上的最值，全部列出来比较。`
    },
    {
      id: '2008-lag', ch: 'mdiff', topic: '极值与最值', year: 2008, type: '解答',
      stem: R`已知曲线 $C:\ \begin{cases}x^2+y^2-2z^2=0,\\ x+y+3z=5,\end{cases}$ 求 $C$ 上距离 $xOy$ 面最远的点和最近的点。`,
      answer: R`最远点 $(-5,-5,5)$，最近点 $(1,1,1)$`,
      solution: R`<p>点到 $xOy$ 面的距离为 $|z|$，转化为求 $z^2$ 在约束下的最值。作拉格朗日函数</p>$$L=z^2+\lambda(x^2+y^2-2z^2)+\mu(x+y+3z-5),$$$$L'_x=2\lambda x+\mu=0,\quad L'_y=2\lambda y+\mu=0,\quad L'_z=2z-4\lambda z+3\mu=0.$$<p>前两式相减得 $\lambda(x-y)=0$。若 $\lambda=0$，则 $\mu=0$，$z=0$，进而 $x=y=0$，与 $x+y+3z=5$ 矛盾，所以 $x=y$。代入约束：$2x^2=2z^2$，$2x+3z=5$，解得 $(1,1,1)$ 与 $(-5,-5,5)$.</p><p>两点处 $|z|$ 分别为 $1$ 和 $5$，所以最远点为 $(-5,-5,5)$，最近点为 $(1,1,1)$。</p>`,
      tip: R`距离问题用距离的平方作目标函数，避开根号和绝对值。`
    },
    {
      id: '2013-tp', ch: 'mdiff', also: ['vec'], topic: '几何应用与方向导数', year: 2013, type: '选择',
      note: '原题为选择题，这里去掉选项直接求解。',
      stem: R`求曲面 $x^2+\cos(xy)+yz+x=0$ 在点 $(0,1,-1)$ 处的切平面方程。`,
      answer: R`$x-y+z=-2$`,
      solution: R`<p>令 $F=x^2+\cos(xy)+yz+x$，</p>$$F'_x=2x-y\sin(xy)+1,\quad F'_y=-x\sin(xy)+z,\quad F'_z=y.$$<p>在 $(0,1,-1)$ 处法向量 $\mathbf n=(1,-1,1)$，切平面：$(x-0)-(y-1)+(z+1)=0$，即 $x-y+z=-2$.</p>`
    },
    {
      id: '2014-tp', ch: 'mdiff', also: ['vec'], topic: '几何应用与方向导数', year: 2014, type: '填空',
      stem: R`曲面 $z=x^2(1-\sin y)+y^2(1-\sin x)$ 在点 $(1,0,1)$ 处的切平面方程为 ______.`,
      answer: R`$2x-y-z-1=0$`,
      solution: R`$$z'_x=2x(1-\sin y)-y^2\cos x,\qquad z'_y=-x^2\cos y+2y(1-\sin x).$$<p>在 $(1,0)$ 处 $z'_x=2$，$z'_y=-1$。切平面 $z-1=2(x-1)-(y-0)$，即 $2x-y-z-1=0$.</p>`
    },
    {
      id: '2017-dir', ch: 'mdiff', topic: '几何应用与方向导数', year: 2017, type: '选择',
      stem: R`函数 $f(x,y,z)=x^2y+z^2$ 在点 $(1,2,0)$ 处沿向量 $\mathbf n=(1,2,2)$ 的方向导数为`,
      options: ['$12$', '$6$', '$4$', '$2$'],
      answer: 'D',
      solution: R`<p>$\nabla f=(2xy,\ x^2,\ 2z)$，在 $(1,2,0)$ 处为 $(4,1,0)$。单位向量 $\mathbf e=\dfrac13(1,2,2)$，</p>$$\frac{\partial f}{\partial\mathbf n}=\nabla f\cdot\mathbf e=\frac{4+2+0}3=2,$$<p>选 D。</p>`,
      tip: R`方向向量一定要先单位化，不单位化会算出 $6$，错选 B。`
    },
    {
      id: '2012-grad', ch: 'mdiff', topic: '几何应用与方向导数', year: 2012, type: '填空',
      stem: R`$\left.\mathbf{grad}\left(xy+\dfrac zy\right)\right|_{(2,1,1)}=$ ______.`,
      answer: R`$\mathbf i+\mathbf j+\mathbf k$`,
      solution: R`$$\mathbf{grad}\,u=\left(y,\ x-\frac{z}{y^2},\ \frac1y\right),$$<p>在 $(2,1,1)$ 处为 $(1,1,1)$，即 $\mathbf i+\mathbf j+\mathbf k$.</p>`
    },

    /* ───────── 第 6 章 多元函数积分学 ───────── */
    {
      id: '2015-polar', ch: 'mint', topic: '二重积分', year: 2015, type: '选择',
      note: '原题为选择题，这里改为直接写出结果。',
      stem: R`设 $D=\{(x,y)\mid x^2+y^2\le2x,\ x^2+y^2\le2y\}$，函数 $f(x,y)$ 在 $D$ 上连续，将 $\displaystyle\iint_Df(x,y)\,dxdy$ 化为极坐标下的累次积分。`,
      answer: R`$\displaystyle\int_0^{\frac\pi4}d\theta\int_0^{2\sin\theta}f(r\cos\theta,r\sin\theta)r\,dr+\int_{\frac\pi4}^{\frac\pi2}d\theta\int_0^{2\cos\theta}f(r\cos\theta,r\sin\theta)r\,dr$`,
      solution: R`<p>两个圆的极坐标方程：$x^2+y^2=2x\Leftrightarrow r=2\cos\theta$，$x^2+y^2=2y\Leftrightarrow r=2\sin\theta$，交于点 $(1,1)$，即 $\theta=\frac\pi4$.</p><p>$D$ 是两圆的公共部分，$\theta\in\left[0,\frac\pi2\right]$，$r\le\min\{2\cos\theta,2\sin\theta\}$：</p><ul><li>$0\le\theta\le\frac\pi4$ 时 $\sin\theta\le\cos\theta$，$0\le r\le2\sin\theta$；</li><li>$\frac\pi4\le\theta\le\frac\pi2$ 时 $0\le r\le2\cos\theta$.</li></ul>`,
      tip: R`两个区域取交集：哪条边界离原点更近，$r$ 的上限就取哪条。`
    },
    {
      id: '2011-dbl', ch: 'mint', topic: '二重积分', year: 2011, type: '解答',
      stem: R`已知函数 $f(x,y)$ 具有二阶连续偏导数，且 $f(1,y)=0$，$f(x,1)=0$，$\displaystyle\iint_Df(x,y)\,dxdy=a$，其中 $D=\{(x,y)\mid0\le x\le1,\ 0\le y\le1\}$。计算二重积分 $\displaystyle I=\iint_Dxyf''_{xy}(x,y)\,dxdy$.`,
      answer: '$I=a$',
      solution: R`<p>先对 $x$ 积分。二阶偏导连续，$f''_{xy}=\dfrac{\partial}{\partial x}\left(f'_y\right)$，对 $x$ 分部积分：</p>$$\int_0^1xf''_{xy}(x,y)\,dx=\Big[xf'_y(x,y)\Big]_{x=0}^{x=1}-\int_0^1f'_y(x,y)\,dx.$$<p>由 $f(1,y)=0$ 对 $y$ 求导得 $f'_y(1,y)=0$，第一项为 $0$。于是</p>$$I=-\int_0^1y\,dy\int_0^1f'_y(x,y)\,dx=-\int_0^1dx\int_0^1yf'_y(x,y)\,dy.$$<p>再对 $y$ 分部积分，并用 $f(x,1)=0$：</p>$$\int_0^1yf'_y\,dy=\Big[yf(x,y)\Big]_{y=0}^{y=1}-\int_0^1f(x,y)\,dy=-\int_0^1f(x,y)\,dy.$$<p>所以 $I=\displaystyle\int_0^1dx\int_0^1f(x,y)\,dy=a$.</p>`,
      tip: R`被积函数含抽象函数的偏导时，想到"分部积分 + 用边界条件消项"。`
    },
    {
      id: '2009-tri', ch: 'mint', topic: '三重积分', year: 2009, type: '填空',
      stem: R`设 $\Omega=\{(x,y,z)\mid x^2+y^2+z^2\le1\}$，则 $\displaystyle\iiint_\Omega z^2\,dxdydz=$ ______.`,
      answer: R`$\dfrac{4\pi}{15}$`,
      solution: R`<p>由轮换对称性，$\displaystyle\iiint_\Omega z^2dV=\frac13\iiint_\Omega(x^2+y^2+z^2)dV$，用球坐标：</p>$$\frac13\int_0^{2\pi}d\theta\int_0^\pi\sin\varphi\,d\varphi\int_0^1r^4dr=\frac13\cdot2\pi\cdot2\cdot\frac15=\frac{4\pi}{15}.$$`,
      tip: R`球形区域上 $x^2$、$y^2$、$z^2$ 的积分都相等，轮换对称后用球坐标最快。`
    },
    {
      id: '2015-tri', ch: 'mint', topic: '三重积分', year: 2015, type: '填空',
      stem: R`设 $\Omega$ 是由平面 $x+y+z=1$ 与三个坐标平面所围成的空间区域，则 $\displaystyle\iiint_\Omega(x+2y+3z)\,dxdydz=$ ______.`,
      answer: R`$\dfrac14$`,
      solution: R`<p>由轮换对称性，$\iiint_\Omega x\,dV=\iiint_\Omega y\,dV=\iiint_\Omega z\,dV$，所以原式 $=6\iiint_\Omega z\,dV$.</p><p>截面法：高度 $z$ 处的截面是直角边为 $1-z$ 的等腰直角三角形，面积 $\frac{(1-z)^2}2$：</p>$$6\int_0^1z\cdot\frac{(1-z)^2}{2}dz=3\int_0^1z(1-z)^2dz=3\cdot\frac1{12}=\frac14.$$`
    },
    {
      id: '2010-line', ch: 'mint', topic: '曲线积分', year: 2010, type: '填空',
      stem: R`已知曲线 $L$ 的方程为 $y=1-|x|\ (x\in[-1,1])$，起点是 $(-1,0)$，终点是 $(1,0)$，则曲线积分 $\displaystyle\int_Lxy\,dx+x^2\,dy=$ ______.`,
      answer: '$0$',
      solution: R`<p>分两段，以 $x$ 为参数。</p><p>$L_1$：$y=1+x$，$x$ 从 $-1$ 到 $0$，$dy=dx$：$\displaystyle\int_{-1}^0\left[x(1+x)+x^2\right]dx=\int_{-1}^0(x+2x^2)dx=\frac16$.</p><p>$L_2$：$y=1-x$，$x$ 从 $0$ 到 $1$，$dy=-dx$：$\displaystyle\int_0^1\left[x(1-x)-x^2\right]dx=\int_0^1(x-2x^2)dx=-\frac16$.</p><p>合计为 $0$.</p>`,
      tip: R`第二类曲线积分：下限对应起点，上限对应终点，下限可以大于上限。`
    },
    {
      id: '2013-green', ch: 'mint', topic: '曲线积分', year: 2013, type: '选择',
      stem: R`设 $L_1:x^2+y^2=1$，$L_2:x^2+y^2=2$，$L_3:x^2+2y^2=2$，$L_4:2x^2+y^2=2$ 为四条逆时针方向的平面曲线。记 $I_i=\displaystyle\oint_{L_i}\left(y+\frac{y^3}6\right)dx+\left(2x-\frac{x^3}3\right)dy\ (i=1,2,3,4)$，则 $\max\{I_1,I_2,I_3,I_4\}=$`,
      options: ['$I_1$', '$I_2$', '$I_3$', '$I_4$'],
      answer: 'D',
      solution: R`<p>由格林公式，</p>$$I_i=\iint_{D_i}\left[(2-x^2)-\left(1+\frac{y^2}2\right)\right]dxdy=\iint_{D_i}\left(1-x^2-\frac{y^2}2\right)dxdy.$$<p>被积函数在椭圆 $x^2+\dfrac{y^2}2\le1$（即 $2x^2+y^2\le2$，正是 $L_4$ 围成的区域 $D_4$）内为正、外为负。区域恰好取遍所有被积函数为正的点时积分最大，所以 $I_4$ 最大，选 D。</p>`,
      tip: R`比较积分大小：看被积函数的正负区域，不必硬算四个积分。`
    },
    {
      id: '2011-stokes', ch: 'mint', also: ['vec'], topic: '曲线积分', year: 2011, type: '填空',
      stem: R`设 $L$ 是柱面 $x^2+y^2=1$ 与平面 $z=x+y$ 的交线，从 $z$ 轴正向往 $z$ 轴负向看去为逆时针方向，则曲线积分 $\displaystyle\oint_Lxz\,dx+x\,dy+\frac{y^2}2dz=$ ______.`,
      answer: '$\\pi$',
      solution: R`<p>用斯托克斯公式，取 $\Sigma$ 为平面 $z=x+y$ 被柱面截下的部分，取上侧。</p>$$\mathbf{rot}\,\mathbf F=\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z},\ \frac{\partial P}{\partial z}-\frac{\partial R}{\partial x},\ \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)=(y,\ x,\ 1).$$<p>$\Sigma$ 上侧的法向量取 $(-z'_x,-z'_y,1)=(-1,-1,1)$，投影到 $D:x^2+y^2\le1$：</p>$$\oint_L=\iint_D(-y-x+1)\,dxdy=\iint_D1\,dxdy=\pi.$$<p>（$x$、$y$ 在圆域上的积分为 $0$。）</p>`
    },
    {
      id: '2012-dS', ch: 'mint', topic: '曲面积分', year: 2012, type: '填空',
      stem: R`设 $\Sigma=\{(x,y,z)\mid x+y+z=1,\ x\ge0,\ y\ge0,\ z\ge0\}$，则 $\displaystyle\iint_\Sigma y^2\,dS=$ ______.`,
      answer: R`$\dfrac{\sqrt3}{12}$`,
      solution: R`<p>$z=1-x-y$，$dS=\sqrt{1+z_x'^2+z_y'^2}\,dxdy=\sqrt3\,dxdy$，投影区域 $D:x\ge0,\ y\ge0,\ x+y\le1$：</p>$$\iint_\Sigma y^2dS=\sqrt3\int_0^1y^2dy\int_0^{1-y}dx=\sqrt3\int_0^1y^2(1-y)dy=\frac{\sqrt3}{12}.$$`
    },
    {
      id: '2004-gauss', ch: 'mint', topic: '曲面积分', year: 2004, type: '解答',
      stem: R`计算曲面积分 $I=\displaystyle\iint_\Sigma2x^3dydz+2y^3dzdx+3(z^2-1)dxdy$，其中 $\Sigma$ 是曲面 $z=1-x^2-y^2\ (z\ge0)$ 的上侧。`,
      answer: R`$-\pi$`,
      solution: R`<p><b>补面：</b>取 $\Sigma_1:z=0\ (x^2+y^2\le1)$ 的下侧，$\Sigma+\Sigma_1$ 是所围区域 $\Omega$ 的外侧。由高斯公式：</p>$$\iint_{\Sigma+\Sigma_1}=\iiint_\Omega(6x^2+6y^2+6z)\,dV=\int_0^{2\pi}d\theta\int_0^1r\,dr\int_0^{1-r^2}(6r^2+6z)\,dz=2\pi.$$<p>（内层积分 $=6r^2(1-r^2)+3(1-r^2)^2$，再乘 $r$ 对 $r$ 积分得 $1$。）</p><p><b>补面上的积分：</b>$\Sigma_1$ 在 $xOy$ 面上，$dydz$、$dzdx$ 项为 $0$；$z=0$ 且取下侧，</p>$$\iint_{\Sigma_1}3(z^2-1)dxdy=-\iint_{x^2+y^2\le1}(-3)\,dxdy=3\pi.$$<p>所以 $I=2\pi-3\pi=-\pi$.</p>`,
      tip: R`补面法三件事：补的面取什么侧、补面上哪些项为零、最后减去补面积分。`
    },
    {
      id: '2014-gauss', ch: 'mint', topic: '曲面积分', year: 2014, type: '解答',
      stem: R`设 $\Sigma$ 为曲面 $z=x^2+y^2\ (z\le1)$ 的上侧，计算曲面积分 $I=\displaystyle\iint_\Sigma(x-1)^3dydz+(y-1)^3dzdx+(z-1)dxdy$.`,
      answer: R`$-4\pi$`,
      solution: R`<p><b>补面：</b>取 $\Sigma_1:z=1\ (x^2+y^2\le1)$ 的下侧。$\Sigma$ 的上侧指向"碗"内，$\Sigma_1$ 的下侧也指向碗内，所以 $\Sigma+\Sigma_1$ 是所围区域 $\Omega$ 的<b>内侧</b>，高斯公式要加负号：</p>$$\iint_{\Sigma+\Sigma_1}=-\iiint_\Omega\left[3(x-1)^2+3(y-1)^2+1\right]dV.$$<p>展开后 $x$、$y$ 的一次项积分为 $0$，被积函数化为 $3(x^2+y^2)+7$。用柱坐标：</p>$$\iiint_\Omega\left[3(x^2+y^2)+7\right]dV=\int_0^{2\pi}d\theta\int_0^1(3r^2+7)(1-r^2)\,r\,dr=2\pi\cdot2=4\pi.$$<p>$\Sigma_1$ 上 $z=1$，$(z-1)dxdy$ 为 $0$，另外两项在水平面上也为 $0$，所以 $I=-4\pi$.</p>`,
      tip: R`先判断补面后是外侧还是内侧，内侧时高斯公式要变号。`
    },
    {
      id: '2016-gauss', ch: 'mint', topic: '曲面积分', year: 2016, type: '解答',
      stem: R`设有界区域 $\Omega$ 由平面 $2x+y+2z=2$ 与三个坐标平面围成，$\Sigma$ 为 $\Omega$ 整个表面的外侧，计算曲面积分 $I=\displaystyle\iint_\Sigma(x^2+1)dydz-2y\,dzdx+3z\,dxdy$.`,
      answer: R`$\dfrac12$`,
      solution: R`<p>$\Sigma$ 是闭曲面外侧，直接用高斯公式：</p>$$I=\iiint_\Omega(2x-2+3)\,dV=\iiint_\Omega(2x+1)\,dV.$$<p>$\Omega$ 是截距为 $1,2,1$ 的四面体，体积 $V=\dfrac16\cdot1\cdot2\cdot1=\dfrac13$；四面体形心是四个顶点的平均，$\bar x=\dfrac{0+1+0+0}4=\dfrac14$。</p>$$I=2\bar xV+V=2\cdot\frac14\cdot\frac13+\frac13=\frac12.$$`,
      tip: R`$\iiint_\Omega x\,dV=\bar x\cdot V$，用形心公式可以免去三重积分。`
    },
    {
      id: '2018-gauss', ch: 'mint', topic: '曲面积分', year: 2018, type: '解答',
      stem: R`设 $\Sigma$ 是曲面 $x=\sqrt{1-3y^2-3z^2}$ 的前侧，计算曲面积分 $I=\displaystyle\iint_\Sigma x\,dydz+(y^3+2)dzdx+z^3dxdy$.`,
      answer: R`$\dfrac{14\pi}{45}$`,
      solution: R`<p><b>补面：</b>取 $\Sigma_1:x=0\ \left(y^2+z^2\le\frac13\right)$ 的后侧，$\Sigma+\Sigma_1$ 是半椭球体 $\Omega$ 的外侧。$\Sigma_1$ 在 $yOz$ 面上：$x=0$ 使第一项为 $0$，$dzdx$、$dxdy$ 在该平面上也为 $0$，所以 $\displaystyle\iint_{\Sigma_1}=0$.</p><p>由高斯公式：</p>$$I=\iiint_\Omega\left(1+3y^2+3z^2\right)dV=\iint_{y^2+z^2\le\frac13}\left(1+3y^2+3z^2\right)\sqrt{1-3y^2-3z^2}\,dydz.$$<p>极坐标 $y=\rho\cos\theta,\ z=\rho\sin\theta$，再令 $u=3\rho^2$：</p>$$I=2\pi\int_0^{\frac1{\sqrt3}}(1+3\rho^2)\sqrt{1-3\rho^2}\,\rho\,d\rho=\frac\pi3\int_0^1(1+u)\sqrt{1-u}\,du=\frac\pi3\cdot\frac{14}{15}=\frac{14\pi}{45}.$$`
    },

    /* ───────── 第 7 章 无穷级数 ───────── */
    {
      id: '2017-ser', ch: 'series', topic: '数项级数', year: 2017, type: '选择',
      note: '原题为选择题，这里去掉选项直接求解。',
      stem: R`若级数 $\displaystyle\sum_{n=2}^\infty\left[\sin\frac1n-k\ln\left(1-\frac1n\right)\right]$ 收敛，求 $k$.`,
      answer: '$k=-1$',
      solution: R`<p>$n\to\infty$ 时，</p>$$\sin\frac1n=\frac1n+O\left(\frac1{n^3}\right),\qquad\ln\left(1-\frac1n\right)=-\frac1n-\frac1{2n^2}+O\left(\frac1{n^3}\right),$$<p>所以一般项 $=\dfrac{1+k}{n}+\dfrac{k}{2n^2}+O\left(\dfrac1{n^3}\right)$。若 $1+k\ne0$，级数与调和级数同敛散，发散；若 $k=-1$，一般项为 $O\left(\frac1{n^2}\right)$，级数绝对收敛。故 $k=-1$.</p>`,
      tip: R`判断"一般项是几阶无穷小"，就是在用第 1 章的泰勒展开。`
    },
    {
      id: '2018-ser', ch: 'series', topic: '数项级数', year: 2018, type: '选择',
      stem: R`$\displaystyle\sum_{n=0}^\infty(-1)^n\frac{2n+3}{(2n+1)!}=$`,
      options: [R`$\sin1+\cos1$`, R`$2\sin1+\cos1$`, R`$2\sin1+2\cos1$`, R`$2\sin1+3\cos1$`],
      answer: 'B',
      solution: R`<p>拆项：$\dfrac{2n+3}{(2n+1)!}=\dfrac{2n+1}{(2n+1)!}+\dfrac{2}{(2n+1)!}=\dfrac1{(2n)!}+\dfrac2{(2n+1)!}$，所以</p>$$\sum_{n=0}^\infty\frac{(-1)^n}{(2n)!}+2\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)!}=\cos1+2\sin1,$$<p>选 B。</p>`,
      tip: R`看到阶乘就往 $e^x$、$\sin x$、$\cos x$ 的展开式上凑。`
    },
    {
      id: '2016-ser', ch: 'series', topic: '数项级数', year: 2016, type: '解答',
      stem: R`已知函数 $f(x)$ 可导，且 $f(0)=1$，$0<f'(x)<\dfrac12$。设数列 $\{x_n\}$ 满足 $x_{n+1}=f(x_n)\ (n=1,2,\cdots)$。证明：<br>(1) 级数 $\displaystyle\sum_{n=1}^\infty(x_{n+1}-x_n)$ 绝对收敛；<br>(2) $\lim\limits_{n\to\infty}x_n$ 存在，且 $0<\lim\limits_{n\to\infty}x_n<2$.`,
      answer: '证明题，见解析。',
      solution: R`<p>(1) 由拉格朗日中值定理，</p>$$|x_{n+1}-x_n|=|f(x_n)-f(x_{n-1})|=f'(\xi_n)|x_n-x_{n-1}|<\frac12|x_n-x_{n-1}|,$$<p>递推得 $|x_{n+1}-x_n|<\left(\dfrac12\right)^{n-1}|x_2-x_1|$。由比较判别法，$\sum|x_{n+1}-x_n|$ 收敛，原级数绝对收敛。</p><p>(2) 部分和 $S_n=\displaystyle\sum_{k=1}^n(x_{k+1}-x_k)=x_{n+1}-x_1$。由 (1)，$\lim S_n$ 存在，所以 $\lim x_n$ 存在，记为 $A$。由 $f$ 连续，$A=f(A)$.</p><p>令 $g(x)=x-f(x)$，$g(0)=-1<0$；$g(2)=2-f(2)=2-[f(0)+2f'(\eta)]=1-2f'(\eta)>0$。由零点定理，$g$ 在 $(0,2)$ 内有零点；又 $g'(x)=1-f'(x)>0$，零点唯一。所以 $A$ 就是这个零点，$0<A<2$.</p>`,
      tip: R`数列极限可以借级数部分和来证：$\sum(x_{n+1}-x_n)$ 收敛 $\Leftrightarrow\{x_n\}$ 收敛。`
    },
    {
      id: '2015-ser', ch: 'series', topic: '幂级数', year: 2015, type: '选择',
      stem: R`若级数 $\displaystyle\sum_{n=1}^\infty a_n$ 条件收敛，则 $x=\sqrt3$ 与 $x=3$ 依次为幂级数 $\displaystyle\sum_{n=1}^\infty na_n(x-1)^n$ 的`,
      options: ['收敛点，收敛点', '收敛点，发散点', '发散点，收敛点', '发散点，发散点'],
      answer: 'B',
      solution: R`<p>$\sum a_n$ 条件收敛，说明 $\sum a_nx^n$ 在 $x=1$ 处条件收敛。由阿贝尔定理，其收敛半径恰为 $R=1$（若 $R>1$，则在 $x=1$ 处绝对收敛，矛盾）。</p><p>逐项求导、乘常数不改变收敛半径，所以 $\sum na_n(x-1)^n$ 的收敛半径也是 $1$，收敛区间为 $(0,2)$。$\sqrt3\in(0,2)$ 是收敛点；$3$ 在 $[0,2]$ 之外，是发散点。选 B。</p>`,
      tip: R`条件收敛的点一定在收敛区间的端点上，这是推出半径的关键。`
    },
    {
      id: '2010-ps', ch: 'series', topic: '幂级数', year: 2010, type: '解答',
      stem: R`求幂级数 $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n-1}}{2n-1}x^{2n}$ 的收敛域及和函数。`,
      answer: R`收敛域 $[-1,1]$，$S(x)=x\arctan x$`,
      solution: R`<p><b>收敛域：</b>$\displaystyle\lim_{n\to\infty}\left|\frac{u_{n+1}}{u_n}\right|=\lim_{n\to\infty}\frac{2n-1}{2n+1}x^2=x^2<1$，收敛区间 $(-1,1)$。$x=\pm1$ 时级数为 $\sum\frac{(-1)^{n-1}}{2n-1}$，由莱布尼茨判别法收敛。收敛域为 $[-1,1]$.</p><p><b>和函数：</b>$S(x)=x\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n-1}}{2n-1}x^{2n-1}=x\,S_1(x)$，</p>$$S_1'(x)=\sum_{n=1}^\infty(-1)^{n-1}x^{2n-2}=\frac1{1+x^2},\quad S_1(0)=0\ \Rightarrow\ S_1(x)=\arctan x.$$<p>所以 $S(x)=x\arctan x,\ x\in[-1,1]$.</p>`
    },
    {
      id: '2012-ps', ch: 'series', topic: '幂级数', year: 2012, type: '解答',
      stem: R`求幂级数 $\displaystyle\sum_{n=0}^\infty\frac{4n^2+4n+3}{2n+1}x^{2n}$ 的收敛域及和函数。`,
      answer: R`收敛域 $(-1,1)$；$S(x)=\dfrac{1+x^2}{(1-x^2)^2}+\dfrac1x\ln\dfrac{1+x}{1-x}\ (x\ne0)$，$S(0)=3$`,
      solution: R`<p><b>收敛域：</b>系数比 $\to1$，收敛半径 $R=1$。$x=\pm1$ 时一般项 $\dfrac{4n^2+4n+3}{2n+1}\to\infty$，发散。收敛域为 $(-1,1)$.</p><p><b>拆项：</b>$\dfrac{4n^2+4n+3}{2n+1}=(2n+1)+\dfrac{2}{2n+1}$.</p>$$S_1(x)=\sum_{n=0}^\infty(2n+1)x^{2n}=\left(\sum_{n=0}^\infty x^{2n+1}\right)'=\left(\frac{x}{1-x^2}\right)'=\frac{1+x^2}{(1-x^2)^2}.$$<p>$x\ne0$ 时，</p>$$S_2(x)=\sum_{n=0}^\infty\frac{2x^{2n}}{2n+1}=\frac2x\sum_{n=0}^\infty\frac{x^{2n+1}}{2n+1}=\frac2x\int_0^x\frac{dt}{1-t^2}=\frac1x\ln\frac{1+x}{1-x}.$$<p>所以 $S(x)=\dfrac{1+x^2}{(1-x^2)^2}+\dfrac1x\ln\dfrac{1+x}{1-x}\ (0<|x|<1)$，$S(0)=3$.</p>`,
      tip: R`分子次数高于分母时先做多项式除法拆项；和函数里有 $\frac1x$ 时，要单独写出 $x=0$ 处的值。`
    },
    {
      id: '2008-fourier', ch: 'series', topic: '傅里叶级数', year: 2008, type: '解答',
      stem: R`将函数 $f(x)=1-x^2\ (0\le x\le\pi)$ 展开成余弦级数，并求级数 $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^2}$ 的和。`,
      answer: R`$f(x)=1-\dfrac{\pi^2}3+4\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^2}\cos nx\ (0\le x\le\pi)$；级数和为 $\dfrac{\pi^2}{12}$`,
      solution: R`<p>作偶延拓，$b_n=0$：</p>$$a_0=\frac2\pi\int_0^\pi(1-x^2)dx=2-\frac{2\pi^2}3,\qquad a_n=\frac2\pi\int_0^\pi(1-x^2)\cos nx\,dx=-\frac2\pi\int_0^\pi x^2\cos nx\,dx=\frac{4(-1)^{n-1}}{n^2}.$$<p>偶延拓后的函数连续，所以</p>$$f(x)=1-\frac{\pi^2}3+4\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^2}\cos nx,\quad0\le x\le\pi.$$<p>令 $x=0$：$1=1-\dfrac{\pi^2}3+4\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^2}$，所以 $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^2}=\frac{\pi^2}{12}$.</p>`,
      tip: R`求数项级数的和：在展开式里代入一个让 $\cos nx$ 变成 $1$ 或 $(-1)^n$ 的点。`
    },

    /* ───────── 第 8 章 常微分方程 ───────── */
    {
      id: '2008-ode', ch: 'ode', topic: '一阶微分方程', year: 2008, type: '填空',
      stem: R`微分方程 $xy'+y=0$ 满足条件 $y(1)=1$ 的解是 $y=$ ______.`,
      answer: R`$\dfrac1x$`,
      solution: R`<p>$xy'+y=(xy)'=0$，所以 $xy=C$。由 $y(1)=1$ 得 $C=1$，$y=\dfrac1x$.</p>`,
      tip: R`先看左边是不是某个乘积的导数，能省掉分离变量。`
    },
    {
      id: '2019-ode', ch: 'ode', topic: '一阶微分方程', year: 2019, type: '解答',
      stem: R`设函数 $y(x)$ 是微分方程 $y'+xy=e^{-\frac{x^2}2}$ 满足条件 $y(0)=0$ 的特解。<br>(1) 求 $y(x)$；<br>(2) 求曲线 $y=y(x)$ 的凹凸区间及拐点。`,
      answer: R`(1) $y=xe^{-\frac{x^2}2}$；(2) 凹区间 $(-\sqrt3,0)$、$(\sqrt3,+\infty)$，凸区间 $(-\infty,-\sqrt3)$、$(0,\sqrt3)$；拐点 $(0,0)$、$\left(\sqrt3,\sqrt3e^{-\frac32}\right)$、$\left(-\sqrt3,-\sqrt3e^{-\frac32}\right)$`,
      solution: R`<p>(1) 一阶线性方程，乘积分因子 $e^{\int x\,dx}=e^{\frac{x^2}2}$：</p>$$\left(ye^{\frac{x^2}2}\right)'=1\ \Rightarrow\ y=(x+C)e^{-\frac{x^2}2}.$$<p>由 $y(0)=0$ 得 $C=0$，$y=xe^{-\frac{x^2}2}$.</p><p>(2) $y'=(1-x^2)e^{-\frac{x^2}2}$，$y''=(x^3-3x)e^{-\frac{x^2}2}=x(x-\sqrt3)(x+\sqrt3)e^{-\frac{x^2}2}$.</p><p>$y''>0$ 的区间 $(-\sqrt3,0)$、$(\sqrt3,+\infty)$ 为凹区间；$y''<0$ 的区间 $(-\infty,-\sqrt3)$、$(0,\sqrt3)$ 为凸区间。$y''$ 在 $x=0,\pm\sqrt3$ 处变号，拐点为 $(0,0)$、$\left(\sqrt3,\sqrt3e^{-\frac32}\right)$、$\left(-\sqrt3,-\sqrt3e^{-\frac32}\right)$.</p>`
    },
    {
      id: '2018-ode', ch: 'ode', topic: '一阶微分方程', year: 2018, type: '解答',
      stem: R`已知微分方程 $y'+y=f(x)$，其中 $f(x)$ 是 $\mathbb R$ 上的连续函数。<br>(1) 若 $f(x)=x$，求方程的通解；<br>(2) 若 $f(x)$ 是周期为 $T$ 的函数，证明：方程存在唯一的以 $T$ 为周期的解。`,
      answer: R`(1) $y=x-1+Ce^{-x}$；(2) 证明题，见解析。`,
      solution: R`<p>(1) 由一阶线性方程通解公式，$y=e^{-x}\left(\int xe^xdx+C\right)=x-1+Ce^{-x}$.</p><p>(2) 通解为 $y(x)=e^{-x}\left(C+\displaystyle\int_0^xe^tf(t)\,dt\right)$。在积分里令 $t=u+T$，并利用 $f(u+T)=f(u)$：</p>$$\int_0^{x+T}e^tf(t)dt=\int_0^Te^tf(t)dt+e^T\int_0^xe^uf(u)du.$$<p>记 $A=\displaystyle\int_0^Te^tf(t)dt$，则</p>$$y(x+T)=e^{-x-T}(C+A)+e^{-x}\int_0^xe^uf(u)du.$$<p>$y(x+T)\equiv y(x)$ 当且仅当 $e^{-T}(C+A)=C$，即 $C=\dfrac{A}{e^T-1}$。这样的 $C$ 存在且唯一，所以以 $T$ 为周期的解存在且唯一。</p>`
    },
    {
      id: '2004-euler', ch: 'ode', topic: '高阶线性方程', year: 2004, type: '填空',
      stem: R`欧拉方程 $x^2\dfrac{d^2y}{dx^2}+4x\dfrac{dy}{dx}+2y=0\ (x>0)$ 的通解为 ______.`,
      answer: R`$y=\dfrac{C_1}x+\dfrac{C_2}{x^2}$`,
      solution: R`<p>令 $x=e^t$，记 $D=\dfrac{d}{dt}$，则 $x\dfrac{dy}{dx}=Dy$，$x^2\dfrac{d^2y}{dx^2}=D(D-1)y$。方程化为</p>$$D(D-1)y+4Dy+2y=0,\quad\text{即}\quad\frac{d^2y}{dt^2}+3\frac{dy}{dt}+2y=0.$$<p>特征根 $r=-1,-2$，$y=C_1e^{-t}+C_2e^{-2t}=\dfrac{C_1}x+\dfrac{C_2}{x^2}$.</p>`
    },
    {
      id: '2017-ode', ch: 'ode', topic: '高阶线性方程', year: 2017, type: '填空',
      stem: R`微分方程 $y''+2y'+3y=0$ 的通解为 $y=$ ______.`,
      answer: R`$e^{-x}\left(C_1\cos\sqrt2x+C_2\sin\sqrt2x\right)$`,
      solution: R`<p>特征方程 $r^2+2r+3=0$，$r=-1\pm\sqrt2\,i$，所以 $y=e^{-x}\left(C_1\cos\sqrt2x+C_2\sin\sqrt2x\right)$.</p>`
    },
    {
      id: '2013-ode', ch: 'ode', topic: '高阶线性方程', year: 2013, type: '填空',
      stem: R`已知 $y_1=e^{3x}-xe^{2x}$，$y_2=e^x-xe^{2x}$，$y_3=-xe^{2x}$ 是某二阶常系数非齐次线性微分方程的 3 个解，则该方程的通解为 $y=$ ______.`,
      answer: R`$C_1e^{3x}+C_2e^x-xe^{2x}$`,
      solution: R`<p>非齐次方程两个解之差是对应齐次方程的解：$y_1-y_3=e^{3x}$，$y_2-y_3=e^x$，二者线性无关。$y_3=-xe^{2x}$ 是一个特解。所以通解为</p>$$y=C_1e^{3x}+C_2e^x-xe^{2x}.$$`,
      tip: R`解的结构：非齐次通解 = 齐次通解 + 非齐次特解；非齐次解之差是齐次解。`
    },
    {
      id: '2015-ode', ch: 'ode', topic: '高阶线性方程', year: 2015, type: '选择',
      note: '原题为选择题，这里去掉选项直接求解。',
      stem: R`设 $y=\dfrac12e^{2x}+\left(x-\dfrac13\right)e^x$ 是二阶常系数非齐次线性微分方程 $y''+ay'+by=ce^x$ 的一个特解，求 $a,b,c$.`,
      answer: R`$a=-3,\ b=2,\ c=-1$`,
      solution: R`<p>自由项是 $ce^x$，所以 $\frac12e^{2x}$ 和 $-\frac13e^x$ 只能来自齐次通解，特征根为 $2$ 和 $1$：</p>$$r^2+ar+b=(r-1)(r-2)=r^2-3r+2\ \Rightarrow\ a=-3,\ b=2.$$<p>剩下的 $xe^x$ 是非齐次特解，代入：$y=xe^x$，$y'=(x+1)e^x$，$y''=(x+2)e^x$，</p>$$(x+2)e^x-3(x+1)e^x+2xe^x=-e^x\ \Rightarrow\ c=-1.$$`
    },
    {
      id: '2016-ode', ch: 'ode', topic: '高阶线性方程', year: 2016, type: '解答',
      stem: R`设函数 $y(x)$ 满足方程 $y''+2y'+ky=0$，其中 $0<k<1$。<br>(1) 证明：反常积分 $\displaystyle\int_0^{+\infty}y(x)\,dx$ 收敛；<br>(2) 若 $y(0)=1$，$y'(0)=1$，求 $\displaystyle\int_0^{+\infty}y(x)\,dx$ 的值。`,
      answer: R`(1) 证明题；(2) $\dfrac3k$`,
      solution: R`<p>(1) 特征根 $r_{1,2}=-1\pm\sqrt{1-k}$，由 $0<k<1$ 知 $0<\sqrt{1-k}<1$，两根都是负实数。通解 $y=C_1e^{r_1x}+C_2e^{r_2x}$，而 $\int_0^{+\infty}e^{r_ix}dx=-\dfrac1{r_i}$ 收敛，所以 $\int_0^{+\infty}y\,dx$ 收敛。</p><p>(2) 由 (1)，$x\to+\infty$ 时 $y\to0$，$y'\to0$。把方程从 $0$ 到 $+\infty$ 积分：</p>$$\Big[y'\Big]_0^{+\infty}+2\Big[y\Big]_0^{+\infty}+k\int_0^{+\infty}y\,dx=0\ \Rightarrow\ -1-2+k\int_0^{+\infty}y\,dx=0,$$<p>所以 $\displaystyle\int_0^{+\infty}y\,dx=\frac3k$.</p>`,
      tip: R`不必解出 $y$：把方程本身积分，用端点值就能得到答案。`
    }
  ];
})();
