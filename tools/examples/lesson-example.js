// 格式示例（真实讲解要详细得多：每个定义、定理都要讲透，每个定理都给完整证明）
registerLesson(function (R) {
  return {
    id: 'diff.mvt', ch: 'diff', title: '微分中值定理',
    summary: R`罗尔、拉格朗日、柯西三个定理说的是同一件事：光滑曲线上一定有一点的切线平行于弦。`,
    prereq: ['lim.closed', 'diff.def', 'diff.mono'],
    sections: [
      { kind: 'why', title: '为什么需要中值定理', html: R`<p>导数只描述"一个点附近"的变化，而我们关心的往往是"一整段"上的变化……</p>` },
      { kind: 'def', title: '极值点（回顾）', html: R`<p>若存在 $\delta>0$，使得对 $x\in U(x_0,\delta)$ 都有 $f(x)\le f(x_0)$，称 $x_0$ 为极大值点……</p>` },
      {
        kind: 'thm', title: '费马引理',
        statement: R`<p>设 $f$ 在 $x_0$ 处可导，且 $x_0$ 是 $f$ 的极值点，则 $f'(x_0)=0$。</p>`,
        intuition: R`<p>山顶处的切线一定是水平的：往前走和往后走的斜率一正一负，可导意味着它们相等，只能是 $0$。</p>`,
        steps: [
          { s: R`<p>不妨设 $x_0$ 是极大值点，则 $x_0$ 附近 $f(x)-f(x_0)\le0$。</p>`, why: R`<p>极小值的情形把 $f$ 换成 $-f$ 即可，所以只证一种。</p>` },
          { s: R`<p>当 $x>x_0$ 时 $\dfrac{f(x)-f(x_0)}{x-x_0}\le0$，令 $x\to x_0^+$ 得 $f'_+(x_0)\le0$。</p>`, why: R`<p>分子 $\le0$、分母 $>0$；极限保号性保证极限也 $\le0$。</p>` },
          { s: R`<p>同理 $x\lt x_0$ 时差商 $\ge0$，得 $f'_-(x_0)\ge0$。由可导，$f'(x_0)=f'_+(x_0)=f'_-(x_0)$，只能等于 $0$。</p>`, why: R`<p>可导 ⇔ 左右导数存在且相等，这是把两个不等式夹成等式的关键。</p>` }
        ],
        remark: R`<p>逆命题不成立：$f(x)=x^3$ 在 $0$ 处导数为 $0$，却不是极值点。</p>`
      },
      { kind: 'example', title: '例：验证罗尔定理的条件', html: R`<p>……</p>` },
      { kind: 'pitfall', title: '常见误区', html: R`<ul><li>中值定理中的 $\xi$ 依赖于区间，不能当成常数……</li></ul>` },
      { kind: 'method', title: '构造辅助函数的套路', html: R`<p>……</p>` },
      { kind: 'exam', title: '考研怎么考', html: R`<p>……</p>` },
      {
        kind: 'check', title: '自测',
        items: [
          { q: R`<p>$f(x)=|x|$ 在 $[-1,1]$ 上满足罗尔定理的结论吗？为什么？</p>`, a: R`<p>不满足：$f(-1)=f(1)$，但 $f$ 在 $0$ 处不可导，$(-1,1)$ 内找不到导数为 $0$ 的点。条件"可导"不能去掉。</p>` },
          { q: R`<p>拉格朗日中值定理中的 $\xi$：</p>`, options: [R`<p>唯一确定</p>`, R`<p>至少存在一个</p>`, R`<p>一定是区间中点</p>`, R`<p>与区间无关</p>`], correct: 1, explain: R`<p>定理只保证存在，可能有多个，一般不是中点。</p>` }
        ]
      }
    ]
  };
});
