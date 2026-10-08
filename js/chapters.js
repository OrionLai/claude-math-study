// 章节：大纲要求、必会工具、真题规律
// 数学公式用 LaTeX，$...$ 行内，$$...$$ 独立成行，由 MathJax 渲染。
(function () {
  var R = String.raw;

  window.CHAPTERS = [
    {
      id: 'lim', no: 1, title: '函数、极限、连续',
      brief: '无穷小比较、未定式、$1^\\infty$ 型、数列极限',
      syllabus: [
        '理解函数、复合函数、反函数、分段函数的概念；了解函数的有界性、单调性、周期性和奇偶性。',
        '理解极限的概念与性质，掌握极限四则运算法则；掌握单调有界准则和夹逼准则，会用两个重要极限。',
        '理解无穷小、无穷大的概念，掌握无穷小的比较方法，会用等价无穷小求极限。',
        '理解函数连续性（含左、右连续），会判别间断点的类型；了解闭区间上连续函数的性质（有界性、最值定理、介值定理）。'
      ],
      tools: [
        { name: '常用等价无穷小（$x\\to0$）', body: R`$$\sin x\sim\tan x\sim\arcsin x\sim\arctan x\sim\ln(1+x)\sim e^x-1\sim x$$$$1-\cos x\sim\frac{x^2}{2},\qquad(1+x)^\alpha-1\sim\alpha x,\qquad a^x-1\sim x\ln a$$` },
        { name: '高阶差（选择题高频）', body: R`$$x-\sin x\sim\frac{x^3}{6},\quad\tan x-x\sim\frac{x^3}{3},\quad x-\arctan x\sim\frac{x^3}{3},\quad\arcsin x-x\sim\frac{x^3}{6},\quad x-\ln(1+x)\sim\frac{x^2}{2}$$` },
        { name: '泰勒公式（$x\\to0$）', body: R`$$e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+o(x^3),\qquad\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)$$$$\sin x=x-\frac{x^3}{6}+o(x^3),\qquad\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4)$$$$(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2}x^2+o(x^2),\qquad\tan x=x+\frac{x^3}{3}+o(x^3)$$<p>展开到分子分母"同阶"为止：分母是 $x^k$，分子就展开到 $x^k$。</p>` },
        { name: '$1^\\infty$ 型', body: R`<p>当 $u\to1$，$v\to\infty$ 时：</p>$$\lim u^v=e^{\lim v(u-1)}.$$` },
        { name: '数列极限三件套', body: R`<p><b>单调有界准则</b>（递推数列首选，常配合中值定理证单调）；<b>夹逼准则</b>（和式、带 $\max$ 的式子）；<b>定积分定义</b>：</p>$$\lim_{n\to\infty}\frac1n\sum_{k=1}^nf\left(\frac kn\right)=\int_0^1f(x)\,dx.$$` }
      ],
      patterns: [
        '选择题开篇常考无穷小阶的比较：2013 年比较 $x-\\arctan x$、2019 年比较 $x-\\tan x$，背熟高阶差就能秒选。',
        '填空题的极限多为 $1^\\infty$ 型或 $\\infty-\\infty$ 型（2010、2018、2020）。',
        '解答题第一题经常是一道极限计算（2008、2011、2021）；数列极限证明（2011、2018）几乎都靠"中值定理证单调 + 单调有界准则"。'
      ]
    },
    {
      id: 'diff', no: 2, title: '一元函数微分学',
      brief: '导数定义、渐近线、中值定理证明、不等式',
      syllabus: [
        '理解导数和微分的概念、导数的几何意义，理解可导与连续的关系。',
        '掌握导数四则运算法则和复合函数求导法则；会求分段函数、隐函数、参数方程所确定函数及反函数的导数；了解高阶导数。',
        '理解罗尔定理、拉格朗日中值定理，了解泰勒定理、柯西中值定理，掌握这四个定理的简单应用。',
        '会用洛必达法则求极限。',
        '理解极值的概念，掌握用导数判断单调性、求极值与最值的方法；会判断凹凸性、求拐点及渐近线；了解曲率与曲率半径。'
      ],
      tools: [
        { name: '导数定义的伪装', body: R`$$f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h},\qquad\lim_{n\to\infty}n\left[f\left(x_0+\frac1n\right)-f(x_0)\right]=f'(x_0)\ (\text{已知 }f'(x_0)\text{ 存在时})$$` },
        { name: '参数方程求导', body: R`$$\frac{dy}{dx}=\frac{y'(t)}{x'(t)},\qquad\frac{d^2y}{dx^2}=\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{x'(t)}$$` },
        { name: '渐近线', body: R`<p><b>铅直</b>：$\lim\limits_{x\to x_0}f(x)=\infty$（只需单侧）。<b>水平</b>：$\lim\limits_{x\to\pm\infty}f(x)=b$。<b>斜</b>：</p>$$k=\lim_{x\to\infty}\frac{f(x)}{x},\qquad b=\lim_{x\to\infty}\left[f(x)-kx\right].$$<p>同一方向（$+\infty$ 或 $-\infty$）有水平渐近线就没有斜渐近线。</p>` },
        { name: '中值定理的辅助函数', body: R`<div class="tbl"><table><thead><tr><th>要证的结论</th><th>辅助函数</th></tr></thead><tbody><tr><td>$f'(\xi)=k$</td><td>$f(x)-kx$</td></tr><tr><td>$f'(\xi)+f(\xi)=0$</td><td>$e^xf(x)$</td></tr><tr><td>$f'(\xi)+g'(\xi)f(\xi)=0$</td><td>$e^{g(x)}f(x)$</td></tr><tr><td>$\xi f'(\xi)+f(\xi)=0$</td><td>$xf(x)$</td></tr><tr><td>$f(\xi)f''(\xi)+[f'(\xi)]^2=0$</td><td>$f(x)f'(x)$</td></tr></tbody></table></div>` },
        { name: '曲率', body: R`$$K=\frac{|y''|}{(1+y'^2)^{3/2}},\qquad\rho=\frac1K$$` }
      ],
      patterns: [
        '渐近线是稳定考点：2005、2012、2014、2023 都考了，要会同时检查铅直、水平、斜三种。',
        '中值定理证明题常和奇偶性、零点定理、极限保号性组合（2013、2017），两问之间有递进关系。',
        '导数定义会伪装成数列极限出现（2013）；课本定理本身的证明也考过（2009 拉格朗日中值定理）。'
      ]
    },
    {
      id: 'int', no: 3, title: '一元函数积分学',
      brief: '定积分计算、变限积分、反常积分、定积分定义',
      syllabus: [
        '理解原函数、不定积分和定积分的概念；掌握基本积分公式、积分的性质及积分中值定理。',
        '掌握换元积分法与分部积分法；会求有理函数、三角函数有理式和简单无理函数的积分。',
        '理解积分上限的函数，会求它的导数，掌握牛顿—莱布尼茨公式。',
        '理解反常积分的概念，了解反常积分收敛的比较判别法，会计算反常积分。',
        '掌握用定积分表达和计算几何量（面积、弧长、旋转体体积与侧面积、平行截面面积已知的立体体积）和物理量（功、引力、压力、质心、形心）及函数平均值。'
      ],
      tools: [
        { name: '变限积分求导', body: R`$$\frac{d}{dx}\int_{a(x)}^{b(x)}f(t)\,dt=f\big(b(x)\big)b'(x)-f\big(a(x)\big)a'(x)$$<p>被积函数里含 $x$ 时，先换元或提出去，再求导。</p>` },
        { name: '对称性与区间再现', body: R`$$\int_{-a}^af(x)dx=\begin{cases}0,&f\text{ 为奇函数}\\2\int_0^af(x)dx,&f\text{ 为偶函数}\end{cases}\qquad\int_a^bf(x)dx=\int_a^bf(a+b-x)dx$$` },
        { name: '华里士公式', body: R`$$\int_0^{\frac\pi2}\sin^nx\,dx=\int_0^{\frac\pi2}\cos^nx\,dx=\begin{cases}\dfrac{(n-1)!!}{n!!}\cdot\dfrac\pi2,&n\text{ 为偶数}\\[2mm]\dfrac{(n-1)!!}{n!!},&n\text{ 为奇数}\end{cases}$$` },
        { name: '反常积分的 $p$ 判别法', body: R`$$\int_1^{+\infty}\frac{dx}{x^p}\text{ 收敛}\Leftrightarrow p>1,\qquad\int_0^1\frac{dx}{x^p}\text{ 收敛}\Leftrightarrow p<1$$<p>一个积分里同时有瑕点和无穷限时，必须拆开分别判断。</p>` },
        { name: '旋转体体积', body: R`$$\text{绕 }x\text{ 轴：}V=\pi\int_a^bf^2(x)\,dx,\qquad\text{绕 }y\text{ 轴：}V=2\pi\int_a^bx|f(x)|\,dx$$` }
      ],
      patterns: [
        '填空题偏计算：对称区间拆奇偶（2015）、几何意义（2012）、分部积分（2013）。',
        '变限积分几乎总是和极限一起考（2014、2016），套路是"等价无穷小化简分母 + 洛必达"。',
        '反常积分的敛散性考 $p$ 判别法（2016）；和式极限转化为定积分（2017）。'
      ]
    },
    {
      id: 'vec', no: 4, title: '向量代数与空间解析几何',
      brief: '旋转曲面、切平面法向量，多作为工具出现',
      syllabus: [
        '理解空间直角坐标系，理解向量的概念及其表示；掌握向量的运算（线性运算、数量积、向量积），了解混合积。',
        '掌握平面方程和直线方程及其求法；会求平面与平面、平面与直线、直线与直线之间的夹角，会求点到平面和点到直线的距离。',
        '了解曲面方程和空间曲线方程的概念；会求以坐标轴为旋转轴的旋转曲面方程，以及空间曲线在坐标面上的投影曲线方程。',
        '了解常用二次曲面的方程及其图形。'
      ],
      tools: [
        { name: '三种积', body: R`$$\mathbf a\cdot\mathbf b=|\mathbf a||\mathbf b|\cos\theta,\qquad\mathbf a\times\mathbf b=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix},\qquad[\mathbf a\,\mathbf b\,\mathbf c]=(\mathbf a\times\mathbf b)\cdot\mathbf c$$<p>$\mathbf a\perp\mathbf b\Leftrightarrow\mathbf a\cdot\mathbf b=0$；$\mathbf a\parallel\mathbf b\Leftrightarrow\mathbf a\times\mathbf b=\mathbf0$；三向量共面 $\Leftrightarrow[\mathbf a\,\mathbf b\,\mathbf c]=0$。</p>` },
        { name: '平面与直线', body: R`<p>点法式 $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$；对称式 $\dfrac{x-x_0}{m}=\dfrac{y-y_0}{n}=\dfrac{z-z_0}{p}$。</p>$$d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$$` },
        { name: '旋转曲面', body: R`<p>$yOz$ 面上的曲线 $f(y,z)=0$ 绕 $z$ 轴旋转：$f\left(\pm\sqrt{x^2+y^2},z\right)=0$。</p><p>口诀：<b>绕谁转，谁不变；另外两个变量合成平方和。</b></p>` },
        { name: '投影曲线', body: R`<p>曲线 $\begin{cases}F(x,y,z)=0\\G(x,y,z)=0\end{cases}$ 在 $xOy$ 面的投影：消去 $z$ 得投影柱面 $H(x,y)=0$，再与 $z=0$ 联立。重积分、曲面积分确定投影区域时都要用到。</p>` }
      ],
      patterns: [
        '本章在数学一中很少单独出大题，2009 年"旋转曲面 + 体积"是单独命题的典型。',
        '更多时候它是工具：切平面和法线的法向量、曲面积分的投影区域、斯托克斯公式中曲面的法向量都要用到本章知识。下面"相关真题"里收了以本章为工具的题。'
      ]
    },
    {
      id: 'mdiff', no: 5, title: '多元函数微分学',
      brief: '抽象复合求导、可微性、极值最值、切平面与方向导数',
      syllabus: [
        '理解多元函数的概念，了解二元函数的极限与连续的概念及有界闭区域上连续函数的性质。',
        '理解偏导数和全微分的概念，会求全微分，了解全微分存在的必要条件和充分条件。',
        '理解方向导数与梯度的概念，并掌握其计算方法。',
        '掌握多元复合函数一阶、二阶偏导数的求法；了解隐函数存在定理，会求多元隐函数的偏导数。',
        '了解空间曲线的切线和法平面及曲面的切平面和法线的概念，会求它们的方程。',
        '理解多元函数极值和条件极值的概念，掌握多元函数极值存在的必要条件，了解二元函数极值存在的充分条件；会求二元函数的极值，会用拉格朗日乘数法求条件极值，会求简单多元函数的最大值和最小值。'
      ],
      tools: [
        { name: '可微的判定', body: R`$$\lim_{\rho\to0}\frac{\Delta z-f'_x(x_0,y_0)\Delta x-f'_y(x_0,y_0)\Delta y}{\rho}=0,\qquad\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}$$<p>偏导数连续 $\Rightarrow$ 可微 $\Rightarrow$ 连续且偏导数存在；反方向都不成立。</p>` },
        { name: '链式法则', body: R`<p>$z=f(u,v)$，$u=u(x,y)$，$v=v(x,y)$：</p>$$\frac{\partial z}{\partial x}=f'_1\frac{\partial u}{\partial x}+f'_2\frac{\partial v}{\partial x}$$<p>求二阶导时，$f'_1$、$f'_2$ 仍然是 $(u,v)$ 的函数，要接着用链式法则；$f''_{12}=f''_{21}$（二阶偏导连续时）。</p>` },
        { name: '无条件极值', body: R`<p>驻点处记 $A=f''_{xx}$，$B=f''_{xy}$，$C=f''_{yy}$：</p><ul><li>$AC-B^2>0$：有极值，$A>0$ 极小，$A<0$ 极大；</li><li>$AC-B^2<0$：不是极值；</li><li>$AC-B^2=0$：方法失效，需另行判断。</li></ul>` },
        { name: '条件极值', body: R`<p>求 $f(x,y,z)$ 在 $\varphi=0$、$\psi=0$ 下的极值：</p>$$L=f+\lambda\varphi+\mu\psi,\qquad L'_x=L'_y=L'_z=0,\ \varphi=0,\ \psi=0.$$<p>闭区域上的最值 = 内部驻点 + 边界上的条件最值，全部比较。</p>` },
        { name: '几何应用与方向导数', body: R`<p>曲面 $F(x,y,z)=0$ 的法向量 $\mathbf n=(F'_x,F'_y,F'_z)$；曲面 $z=f(x,y)$ 的法向量 $(f'_x,f'_y,-1)$。</p>$$\frac{\partial f}{\partial\mathbf l}=\nabla f\cdot\mathbf e_l,\qquad\max_{\mathbf l}\frac{\partial f}{\partial\mathbf l}=|\nabla f|\ (\text{沿梯度方向})$$` }
      ],
      patterns: [
        '抽象复合函数的二阶偏导几乎每隔一两年就出现（2009、2011、2017），失分点是漏掉 $f\'_1$、$f\'_2$ 的二次求导。',
        '无条件极值是解答题高频（2009、2012、2013）；条件极值和闭区域最值隔几年考一次（2007、2008）。',
        '切平面、方向导数、梯度以小题为主（2012、2013、2014、2017）；可微性的概念辨析也出过选择题（2012）。'
      ]
    },
    {
      id: 'mint', no: 6, title: '多元函数积分学',
      brief: '重积分、曲线积分、曲面积分与三大公式',
      syllabus: [
        '理解二重积分、三重积分的概念，了解重积分的性质，了解二重积分的中值定理。',
        '掌握二重积分的计算方法（直角坐标、极坐标），会计算三重积分（直角坐标、柱面坐标、球面坐标）。',
        '理解两类曲线积分的概念，了解两类曲线积分的性质及两类曲线积分的关系；掌握两类曲线积分的计算方法。',
        '掌握格林公式并会运用平面曲线积分与路径无关的条件，会求二元函数全微分的原函数。',
        '了解两类曲面积分的概念、性质及两类曲面积分的关系，掌握两类曲面积分的计算方法；掌握用高斯公式计算曲面积分的方法，并会用斯托克斯公式计算曲线积分。',
        '了解散度与旋度的概念并会计算；会用重积分、曲线积分及曲面积分求一些几何量与物理量。'
      ],
      tools: [
        { name: '坐标变换', body: R`$$\text{极坐标 }dxdy=r\,dr\,d\theta,\qquad\text{柱坐标 }dV=r\,dr\,d\theta\,dz,\qquad\text{球坐标 }dV=r^2\sin\varphi\,dr\,d\varphi\,d\theta$$` },
        { name: '格林公式', body: R`$$\oint_{L}P\,dx+Q\,dy=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dxdy\quad(L\text{ 取正向})$$<p>与路径无关 $\Leftrightarrow\dfrac{\partial Q}{\partial x}=\dfrac{\partial P}{\partial y}$（单连通区域内）。</p>` },
        { name: '高斯公式', body: R`$$\iint_{\Sigma\text{ 外侧}}P\,dydz+Q\,dzdx+R\,dxdy=\iiint_\Omega\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dV$$<p>曲面不封闭时补面：补的面取什么侧、补面上哪些项为零、最后减去补面积分。</p>` },
        { name: '斯托克斯公式', body: R`$$\oint_\Gamma P\,dx+Q\,dy+R\,dz=\iint_\Sigma\begin{vmatrix}dydz&dzdx&dxdy\\\frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\P&Q&R\end{vmatrix}$$<p>$\Gamma$ 的方向与 $\Sigma$ 的侧符合右手法则。</p>` },
        { name: '对称性', body: R`<p>重积分、第一类曲线/曲面积分：区域关于 $x=0$ 对称时，被积函数关于 $x$ 为奇函数则积分为 $0$，为偶函数则取一半的两倍。</p><p><b>轮换对称</b>：区域对 $x,y,z$ 轮换不变时，$\iiint x^2dV=\iiint y^2dV=\iiint z^2dV$。</p><p>第二类积分的对称性规则相反，用时要小心。</p>` }
      ],
      patterns: [
        '曲面积分大题出现频率最高，基本套路是"补面 + 高斯公式"（2004、2014、2016、2018）。',
        '小题常考用对称性化简的三重积分（2009、2015）、第一类曲面积分（2012）、斯托克斯公式（2011）。',
        '格林公式也会以新形式出现，比如比较四个曲线积分的大小（2013）；含抽象函数的二重积分要用分部积分（2011）。'
      ]
    },
    {
      id: 'series', no: 7, title: '无穷级数',
      brief: '数项级数判别、幂级数求和、傅里叶级数',
      syllabus: [
        '理解常数项级数收敛、发散以及收敛级数的和的概念，掌握级数的基本性质及收敛的必要条件。',
        '掌握几何级数与 $p$ 级数的收敛与发散的条件；掌握正项级数的比较、比值、根值判别法，会用积分判别法。',
        '掌握交错级数的莱布尼茨判别法；了解任意项级数绝对收敛与条件收敛的概念以及绝对收敛与收敛的关系。',
        '理解幂级数收敛半径的概念，掌握收敛半径、收敛区间及收敛域的求法；了解幂级数和函数的性质，会求简单幂级数的和函数，并会由此求出某些数项级数的和。',
        '掌握 $e^x$、$\\sin x$、$\\cos x$、$\\ln(1+x)$、$(1+x)^\\alpha$ 的麦克劳林展开式，会用它们将简单函数间接展开为幂级数。',
        '了解傅里叶级数的概念和狄利克雷收敛定理，会将 $[-l,l]$ 上的函数展开为傅里叶级数，会将 $[0,l]$ 上的函数展开为正弦级数与余弦级数。'
      ],
      tools: [
        { name: '两个基准级数', body: R`$$\sum_{n=0}^\infty q^n\text{ 收敛}\Leftrightarrow|q|<1,\qquad\sum_{n=1}^\infty\frac1{n^p}\text{ 收敛}\Leftrightarrow p>1$$` },
        { name: '判别法', body: R`<p><b>正项级数</b>：比较（极限形式：$\lim\frac{u_n}{v_n}=l\in(0,+\infty)$ 则同敛散）、比值、根值。</p><p><b>交错级数</b>：$u_n$ 单调递减且 $u_n\to0$ 则收敛（莱布尼茨）。</p><p><b>任意项</b>：先看绝对收敛；一般项不趋于 $0$ 直接发散。</p>` },
        { name: '常用展开式', body: R`$$\frac1{1-x}=\sum_{n=0}^\infty x^n\ (|x|<1),\qquad e^x=\sum_{n=0}^\infty\frac{x^n}{n!},\qquad\ln(1+x)=\sum_{n=1}^\infty\frac{(-1)^{n-1}}nx^n\ (-1<x\le1)$$$$\sin x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!},\qquad\cos x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n}}{(2n)!},\qquad\arctan x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{2n+1}\ (|x|\le1)$$` },
        { name: '求和函数的套路', body: R`<p>系数里有 $n$ 在分子：先积分再求导；有 $n$ 在分母：先求导再积分。分子次数高时先拆项。端点处单独讨论，含 $\frac1x$ 时单独写 $x=0$ 的值。</p>` },
        { name: '狄利克雷收敛定理', body: R`<p>傅里叶级数在连续点收敛于 $f(x)$，在间断点收敛于 $\dfrac{f(x^-)+f(x^+)}{2}$；在区间端点收敛于 $\dfrac{f(-l^+)+f(l^-)}{2}$。</p>` }
      ],
      patterns: [
        '幂级数求收敛域与和函数是最稳定的解答题（2010、2012）。',
        '数项级数选择题考：用展开式比较一般项的阶（2017）、凑已知展开式求和（2018）、阿贝尔定理定半径（2015）。',
        '级数也会和数列极限结合出证明题（2016）；傅里叶级数考"展开 + 代点求和"（2008）。'
      ]
    },
    {
      id: 'ode', no: 8, title: '常微分方程',
      brief: '一阶方程、线性方程解的结构、常系数与欧拉方程',
      syllabus: [
        '了解微分方程及其阶、解、通解、初始条件和特解等概念。',
        '掌握变量可分离的微分方程及一阶线性微分方程的解法；会解齐次微分方程、伯努利方程和全微分方程，会用简单的变量代换解某些微分方程。',
        '会用降阶法解 $y^{(n)}=f(x)$、$y\'\'=f(x,y\')$ 和 $y\'\'=f(y,y\')$ 型方程。',
        '理解线性微分方程解的性质及解的结构；掌握二阶常系数齐次线性微分方程的解法，会解某些高于二阶的常系数齐次线性微分方程。',
        '会解自由项为多项式、指数函数、正弦函数、余弦函数以及它们的和与积的二阶常系数非齐次线性微分方程。',
        '会解欧拉方程；会用微分方程解决一些简单的应用问题。'
      ],
      tools: [
        { name: '一阶线性方程', body: R`<p>$y'+p(x)y=q(x)$ 的通解：</p>$$y=e^{-\int p(x)dx}\left(\int q(x)e^{\int p(x)dx}dx+C\right)$$` },
        { name: '变量代换', body: R`<p>齐次方程 $y'=\varphi\left(\frac yx\right)$：令 $u=\frac yx$。伯努利方程 $y'+py=qy^n$：令 $z=y^{1-n}$。</p>` },
        { name: '特征方程', body: R`<p>$y''+py'+qy=0$，特征方程 $r^2+pr+q=0$：</p><ul><li>两个不等实根：$y=C_1e^{r_1x}+C_2e^{r_2x}$</li><li>二重根：$y=(C_1+C_2x)e^{rx}$</li><li>共轭复根 $\alpha\pm\beta i$：$y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$</li></ul>` },
        { name: '特解的设法', body: R`<p>$f(x)=P_m(x)e^{\lambda x}$：设 $y^*=x^kQ_m(x)e^{\lambda x}$，$k$ 是 $\lambda$ 作为特征根的重数（0、1、2）。</p><p>$f(x)=e^{\alpha x}[P_l(x)\cos\beta x+P_n(x)\sin\beta x]$：设 $y^*=x^ke^{\alpha x}[R_m(x)\cos\beta x+S_m(x)\sin\beta x]$，$m=\max\{l,n\}$，$\alpha+\beta i$ 是特征根时 $k=1$，否则 $k=0$。</p>` },
        { name: '欧拉方程', body: R`<p>令 $x=e^t$，记 $D=\frac{d}{dt}$：</p>$$xy'=Dy,\qquad x^2y''=D(D-1)y,\qquad x^3y'''=D(D-1)(D-2)y$$` }
      ],
      patterns: [
        '小题考解的结构（2013、2015）和直接求通解（2004、2008、2017）。',
        '解答题常把微分方程和其他知识结合：凹凸性与拐点（2019）、周期解的存在唯一性（2018）、反常积分（2016）。'
      ]
    }
  ];
})();
