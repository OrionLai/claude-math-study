// 格式示例（只示范两道题；真实文件要包含该年全部高数题）
registerYear(2008, function (R) {
  return [
    {
      id: '2008-1', year: 2008, no: '第1题', type: '选择', score: 4,
      stem: R`设函数 $f(x)=\int_0^{x^2}\ln(2+t)\,dt$，则 $f'(x)$ 的零点个数为`,
      options: [R`$0$`, R`$1$`, R`$2$`, R`$3$`],
      answer: 'B',
      figure: null,
      kp: ['int.ftc'],
      methods: ['变限积分求导'],
      difficulty: 2,
      analysis: R`<p>题目问的是 $f'(x)$ 的零点，所以第一步一定是把 $f'(x)$ 求出来。上限是 $x^2$ 而不是 $x$，这是复合函数，要用变限积分求导公式再乘上限的导数。</p>`,
      solution: R`<p><b>第一步：求导。</b>由变限积分求导公式，</p>$$f'(x)=\ln(2+x^2)\cdot(x^2)'=2x\ln(2+x^2).$$<p><b>第二步：找零点。</b>$\ln(2+x^2)\ge\ln2>0$ 恒成立，所以 $f'(x)=0\iff x=0$，只有一个零点，选 B。</p>`,
      pitfalls: R`<p>忘记乘上限的导数 $(x^2)'=2x$，就会得出 $f'(x)=\ln(2+x^2)$ 没有零点，错选 A。</p>`,
      summary: R`<p>变限积分 $\int_{a}^{\varphi(x)}f(t)dt$ 求导 = 被积函数在上限处的值 × 上限的导数。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy: diff(integrate(log(2+t),(t,0,x**2)),x) 化简为 2x·log(x²+2)，零点只有 x=0' },
      flags: []
    },
    {
      id: '2008-15', year: 2008, no: '第15题', type: '解答', score: 9,
      stem: R`求极限 $\displaystyle\lim_{x\to0}\frac{[\sin x-\sin(\sin x)]\sin x}{x^4}$.`,
      options: null,
      answer: R`$\dfrac16$`,
      figure: null,
      kp: ['lim.compute', 'lim.inf'],
      methods: ['等价无穷小代换', '变量代换', '泰勒公式'],
      difficulty: 2,
      analysis: R`<p>这是 $\frac00$ 型。分子是"差 × 乘积因子"的结构：乘积因子 $\sin x$ 可以直接换成 $x$，而差 $\sin x-\sin(\sin x)$ 不能逐项替换。观察到差的形状是 $t-\sin t$（$t=\sin x$），这是熟知的三阶无穷小，于是想到换元。</p>`,
      solution: R`<p><b>第一步：处理乘积因子。</b>$x\to0$ 时 $\sin x\sim x$，乘积中的因子可以等价替换：</p>$$\text{原式}=\lim_{x\to0}\frac{\sin x-\sin(\sin x)}{x^3}.$$<p><b>第二步：换元。</b>令 $t=\sin x$，则 $x\to0$ 时 $t\to0$，且 $t\sim x$，所以</p>$$\text{原式}=\lim_{x\to0}\frac{t-\sin t}{t^3}\cdot\frac{t^3}{x^3}=\lim_{t\to0}\frac{t-\sin t}{t^3}\cdot1.$$<p>这里能把 $\frac{t^3}{x^3}$ 换成 $1$，是因为 $\lim\limits_{x\to0}\frac{t}{x}=\lim\limits_{x\to0}\frac{\sin x}{x}=1$；换元后极限变量从 $x$ 变成 $t$，只要 $t\to0$ 且 $t\ne0$ 就不改变极限值。</p><p><b>第三步：算基本极限。</b>由 $\sin t=t-\frac{t^3}{6}+o(t^3)$ 得 $t-\sin t=\frac{t^3}{6}+o(t^3)$，所以原式 $=\dfrac16$.</p>`,
      pitfalls: R`<p>把 $\sin x-\sin(\sin x)$ 写成 $x-\sin x$ 是错误的逐项替换；加减运算中的等价替换必须保证替换后不抵消到更高阶。</p>`,
      summary: R`<p>"乘除可换，加减慎换"；遇到 $u-\sin u$、$\tan u-u$ 这类结构，先换元成基本三阶差。</p>`,
      alt: R`<p>也可以直接对 $\sin(\sin x)$ 做泰勒展开：$\sin(\sin x)=\sin x-\frac{\sin^3x}{6}+o(x^3)$，分子立刻得到 $\frac{x^3}{6}\cdot x$。</p>`,
      verify: { by: 'sympy', ok: true, note: 'sympy limit 结果 1/6' },
      flags: []
    }
  ];
});
