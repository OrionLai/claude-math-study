// 启动：数据就绪后初始化 AI 面板并渲染当前页面。
(function () {
  'use strict';
  var KY = window.KY;
  function updateWrong() {
    var n = KY.meta.problems.filter(function (p) { return KY.status(p.id) === 'bad'; }).length;
    var el = document.getElementById('wrong-count');
    el.textContent = n;
    if (n) el.removeAttribute('data-zero'); else el.setAttribute('data-zero', '');
  }
  KY.listen('progress', updateWrong);

  // 清空记录：页面内二次确认（嵌入环境不支持 confirm()）
  var slot = document.getElementById('reset-slot');
  function idle() { slot.innerHTML = '<button type="button" id="reset">清空做题与学习记录</button>'; }
  slot.addEventListener('click', function (e) {
    if (e.target.id === 'reset') slot.innerHTML = '<span class="confirm">确定清空全部记录？<button type="button" id="reset-yes">清空</button><button type="button" id="reset-no">取消</button></span>';
    else if (e.target.id === 'reset-yes') { KY.resetProgress(); idle(); KY.render(KY.current, { keepScroll: true }); KY.toast('记录已清空'); }
    else if (e.target.id === 'reset-no') idle();
  });

  if (!KY.meta) {
    document.getElementById('view').innerHTML = '<div class="wrap"><div class="empty"><b>数据没有加载成功</b><span>请确认 data/meta.js 存在，然后刷新页面。</span></div></div>';
    return;
  }
  document.getElementById('built').textContent = '数据更新于 ' + KY.meta.built;
  updateWrong();
  KY.ai.init();
  KY.render(location.hash.slice(1));
})();
