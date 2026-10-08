// 数学一 · 高等数学考点体系（按考试大纲组织）。题目的 kp 标签与讲解的 id 都必须取自这里。
registerTaxonomy({
  chapters: [
    { id: 'lim', no: 1, title: '函数、极限、连续' },
    { id: 'diff', no: 2, title: '一元函数微分学' },
    { id: 'int', no: 3, title: '一元函数积分学' },
    { id: 'vec', no: 4, title: '向量代数与空间解析几何' },
    { id: 'mdiff', no: 5, title: '多元函数微分学' },
    { id: 'mint', no: 6, title: '多元函数积分学' },
    { id: 'series', no: 7, title: '无穷级数' },
    { id: 'ode', no: 8, title: '常微分方程' }
  ],
  kps: [
    // 第 1 章
    { id: 'lim.func', ch: 'lim', title: '函数的概念与性质', scope: '函数、复合函数、反函数、分段函数、隐函数；有界性、单调性、奇偶性、周期性；基本初等函数与初等函数' },
    { id: 'lim.seqdef', ch: 'lim', title: '数列极限的定义与性质', scope: 'ε-N 定义；唯一性、有界性、保号性；子数列与收敛的关系' },
    { id: 'lim.funcdef', ch: 'lim', title: '函数极限的定义与性质', scope: 'ε-δ 与 ε-X 定义；左右极限；唯一性、局部有界性、局部保号性；海涅定理（归结原则）' },
    { id: 'lim.inf', ch: 'lim', title: '无穷小与无穷大', scope: '无穷小与无穷大的概念和关系；无穷小的比较（高阶、同阶、等价、k 阶）；等价无穷小代换定理' },
    { id: 'lim.rules', ch: 'lim', title: '极限运算法则与存在准则', scope: '四则运算法则、复合函数极限；夹逼准则、单调有界准则；两个重要极限' },
    { id: 'lim.compute', ch: 'lim', title: '未定式极限的计算', scope: '0/0、∞/∞、0·∞、∞−∞、1^∞、0^0、∞^0 七种未定式；等价代换、洛必达、泰勒展开的综合运用；已知极限反求参数' },
    { id: 'lim.seqcalc', ch: 'lim', title: '数列极限的计算与证明', scope: '递推数列（单调有界 + 不动点）、夹逼求和式极限、化为定积分、Stolz 思想、数列极限证明题' },
    { id: 'lim.cont', ch: 'lim', title: '函数的连续性与间断点', scope: '连续的定义（含左右连续）；间断点分类（可去、跳跃、无穷、振荡）；初等函数的连续性' },
    { id: 'lim.closed', ch: 'lim', title: '闭区间上连续函数的性质', scope: '有界性与最值定理、介值定理、零点定理及其应用' },

    // 第 2 章
    { id: 'diff.def', ch: 'diff', title: '导数与微分的概念', scope: '导数定义（含左右导数）、几何与物理意义、可导与连续的关系；微分的定义与几何意义；切线与法线' },
    { id: 'diff.calc', ch: 'diff', title: '求导法则与高阶导数', scope: '四则、复合、反函数、隐函数、参数方程求导；对数求导法；高阶导数与莱布尼茨公式；分段函数求导' },
    { id: 'diff.mvt', ch: 'diff', title: '微分中值定理', scope: '费马引理、罗尔定理、拉格朗日中值定理、柯西中值定理；构造辅助函数证明中值等式' },
    { id: 'diff.taylor', ch: 'diff', title: '泰勒公式', scope: '带佩亚诺余项与拉格朗日余项的泰勒公式；常用麦克劳林展开；泰勒公式在极限、证明、高阶导数中的应用' },
    { id: 'diff.lhopital', ch: 'diff', title: '洛必达法则', scope: '洛必达法则的条件、证明与使用限制' },
    { id: 'diff.mono', ch: 'diff', title: '单调性、极值与最值', scope: '单调性判别；极值的必要条件与两个充分条件；最大值最小值及应用题' },
    { id: 'diff.convex', ch: 'diff', title: '凹凸性与拐点', scope: '凹凸性的定义与判别；拐点的必要条件与充分条件' },
    { id: 'diff.asym', ch: 'diff', title: '渐近线与函数作图', scope: '铅直、水平、斜渐近线；函数图形的描绘' },
    { id: 'diff.curv', ch: 'diff', title: '弧微分与曲率', scope: '弧微分；曲率、曲率半径、曲率圆' },
    { id: 'diff.ineq', ch: 'diff', title: '不等式证明与方程的根', scope: '用单调性、最值、中值定理、泰勒公式证明不等式；方程实根个数与存在性' },

    // 第 3 章
    { id: 'int.concept', ch: 'int', title: '原函数与不定积分的概念', scope: '原函数存在定理、不定积分的性质、基本积分公式表' },
    { id: 'int.indef', ch: 'int', title: '不定积分的计算', scope: '第一、二类换元法，分部积分法；有理函数、三角函数有理式、简单无理函数的积分' },
    { id: 'int.def', ch: 'int', title: '定积分的概念与性质', scope: '定积分定义（黎曼和）、可积条件、几何意义；线性、区间可加、比较、估值、积分中值定理' },
    { id: 'int.ftc', ch: 'int', title: '变限积分与微积分基本定理', scope: '积分上限函数及其导数；牛顿—莱布尼茨公式；变限积分的极限、单调性、奇偶性' },
    { id: 'int.defcalc', ch: 'int', title: '定积分的计算', scope: '换元与分部积分；对称性、周期性、区间再现；华里士公式；分段函数与绝对值的积分' },
    { id: 'int.improper', ch: 'int', title: '反常积分', scope: '无穷限与无界函数的反常积分；计算；比较判别法与 p 判别；Γ 函数思想' },
    { id: 'int.app', ch: 'int', title: '定积分的应用', scope: '平面图形面积、旋转体体积、平行截面体积、弧长、旋转曲面面积；功、水压力、引力、质心形心；函数平均值' },
    { id: 'int.proof', ch: 'int', title: '积分等式与不等式的证明', scope: '利用积分中值定理、变限积分构造函数、柯西—施瓦茨等证明积分等式与不等式' },

    // 第 4 章
    { id: 'vec.vector', ch: 'vec', title: '向量及其运算', scope: '向量的坐标表示；数量积、向量积、混合积；方向角与方向余弦；平行、垂直、共面的条件' },
    { id: 'vec.planeline', ch: 'vec', title: '平面与直线', scope: '平面方程与直线方程的各种形式；夹角、平行垂直关系；点到平面、点到直线距离；平面束' },
    { id: 'vec.surface', ch: 'vec', title: '曲面与空间曲线', scope: '曲面方程；旋转曲面、柱面、常用二次曲面；空间曲线的一般式与参数式；投影曲线' },

    // 第 5 章
    { id: 'mdiff.limit', ch: 'mdiff', title: '多元函数的极限与连续', scope: '二元函数的概念；二重极限的定义与存在性判断；连续性；有界闭区域上连续函数的性质' },
    { id: 'mdiff.diffable', ch: 'mdiff', title: '偏导数与全微分', scope: '偏导数的定义与几何意义；全微分的定义；可微的必要条件与充分条件；连续、偏导存在、可微之间的关系；高阶偏导与混合偏导相等的条件' },
    { id: 'mdiff.chain', ch: 'mdiff', title: '多元复合函数求导', scope: '链式法则；抽象复合函数的一阶、二阶偏导；全微分形式不变性；变量代换化简偏微分方程' },
    { id: 'mdiff.implicit', ch: 'mdiff', title: '隐函数求导', scope: '隐函数存在定理；一个方程与方程组确定的隐函数的偏导数' },
    { id: 'mdiff.dir', ch: 'mdiff', title: '方向导数与梯度', scope: '方向导数的定义与计算公式；梯度及其与方向导数的关系' },
    { id: 'mdiff.geo', ch: 'mdiff', title: '多元微分的几何应用', scope: '空间曲线的切线与法平面；曲面的切平面与法线' },
    { id: 'mdiff.extreme', ch: 'mdiff', title: '多元函数的极值与最值', scope: '无条件极值的必要条件与充分条件；条件极值与拉格朗日乘数法；有界闭区域上的最值；应用题' },

    // 第 6 章
    { id: 'mint.double', ch: 'mint', title: '二重积分', scope: '概念与性质、中值定理；直角坐标与极坐标计算；交换积分次序；对称性与轮换对称性；无界区域简单情形' },
    { id: 'mint.triple', ch: 'mint', title: '三重积分', scope: '概念与性质；直角坐标（先一后二、先二后一）、柱面坐标、球面坐标计算；对称性' },
    { id: 'mint.line1', ch: 'mint', title: '第一类曲线积分', scope: '对弧长的曲线积分的概念、性质与计算；对称性' },
    { id: 'mint.line2', ch: 'mint', title: '第二类曲线积分与格林公式', scope: '对坐标的曲线积分；两类曲线积分的关系；格林公式；平面曲线积分与路径无关的条件；全微分的原函数' },
    { id: 'mint.surf1', ch: 'mint', title: '第一类曲面积分', scope: '对面积的曲面积分的概念、性质与计算；曲面面积；对称性' },
    { id: 'mint.surf2', ch: 'mint', title: '第二类曲面积分与高斯公式', scope: '对坐标的曲面积分；两类曲面积分的关系；高斯公式与补面法' },
    { id: 'mint.stokes', ch: 'mint', title: '斯托克斯公式', scope: '斯托克斯公式及其应用；空间曲线积分与路径无关' },
    { id: 'mint.field', ch: 'mint', title: '场论初步与积分的应用', scope: '散度、旋度；重积分与曲线曲面积分的几何与物理应用（体积、面积、质量、质心、转动惯量、引力、功、通量）' },

    // 第 7 章
    { id: 'series.concept', ch: 'series', title: '常数项级数的概念与性质', scope: '收敛、发散与和；基本性质；收敛的必要条件；几何级数与 p 级数' },
    { id: 'series.positive', ch: 'series', title: '正项级数的审敛法', scope: '比较判别法（含极限形式）、比值判别法、根值判别法、积分判别法' },
    { id: 'series.alt', ch: 'series', title: '交错级数与绝对收敛', scope: '莱布尼茨判别法；绝对收敛与条件收敛；任意项级数敛散性判断' },
    { id: 'series.power', ch: 'series', title: '幂级数的收敛域', scope: '阿贝尔定理；收敛半径、收敛区间、收敛域的求法；缺项幂级数' },
    { id: 'series.sum', ch: 'series', title: '幂级数的和函数与数项级数求和', scope: '幂级数的运算与分析性质（逐项求导、逐项积分）；求和函数；借助幂级数求数项级数的和' },
    { id: 'series.expand', ch: 'series', title: '函数展开成幂级数', scope: '泰勒级数与展开的条件；常用展开式；间接展开法' },
    { id: 'series.fourier', ch: 'series', title: '傅里叶级数', scope: '傅里叶系数；狄利克雷收敛定理；正弦级数与余弦级数；一般周期 2l 的展开' },

    // 第 8 章
    { id: 'ode.basic', ch: 'ode', title: '微分方程的基本概念', scope: '阶、解、通解、特解、初始条件、积分曲线' },
    { id: 'ode.first', ch: 'ode', title: '一阶微分方程', scope: '变量可分离方程、齐次方程、一阶线性方程、伯努利方程、全微分方程；简单变量代换' },
    { id: 'ode.reduce', ch: 'ode', title: '可降阶的高阶方程', scope: 'y^(n)=f(x)、y\'\'=f(x,y\')、y\'\'=f(y,y\') 型方程' },
    { id: 'ode.linear', ch: 'ode', title: '线性微分方程解的结构', scope: '齐次与非齐次线性方程解的性质与结构定理；叠加原理' },
    { id: 'ode.const', ch: 'ode', title: '常系数线性微分方程', scope: '二阶及高阶常系数齐次方程；常见自由项的非齐次方程特解设法' },
    { id: 'ode.euler', ch: 'ode', title: '欧拉方程', scope: '欧拉方程的变换与求解' },
    { id: 'ode.app', ch: 'ode', title: '微分方程的应用', scope: '几何问题、物理问题建模；与积分方程、变限积分结合的综合题' }
  ]
});
