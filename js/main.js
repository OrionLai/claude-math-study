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

  // 导出 / 导入记录：存成 JSON 文件，换设备或清缓存后再导入；导入前同样在页面内确认
  var dataSlot = document.getElementById('data-slot');
  var fileInput = document.getElementById('import-file');
  var incoming = null;
  function dataIdle() { incoming = null; dataSlot.innerHTML = '<button type="button" id="export">导出记录</button><button type="button" id="import">导入记录</button>'; }
  function summary(prog) {
    var ok = 0, bad = 0;
    Object.keys(prog.p).forEach(function (id) { if (prog.p[id] === 'ok') ok++; else bad++; });
    var done = Object.keys(prog.l).filter(function (id) { return prog.l[id] && prog.l[id].done; }).length;
    return '会了 ' + ok + ' 道、错题 ' + bad + ' 道、学完讲解 ' + done + ' 篇';
  }
  function download(name, text) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }
  dataSlot.addEventListener('click', function (e) {
    var id = e.target.id;
    if (id === 'export') {
      var d = new Date();
      var day = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
      download('数一高数学习记录-' + day + '.json', JSON.stringify(KY.exportData()));
      KY.toast('已导出（' + summary(KY.prog) + '），在新设备上点「导入记录」选这个文件');
    } else if (id === 'import') fileInput.click();
    else if (id === 'import-yes') { KY.importProgress(incoming); dataIdle(); KY.render(KY.current, { keepScroll: true }); KY.toast('已导入：' + summary(KY.prog)); }
    else if (id === 'import-no') dataIdle();
  });
  fileInput.addEventListener('change', function () {
    var f = fileInput.files[0];
    fileInput.value = ''; // 同一个文件可以再选一次
    if (!f) return;
    var reader = new FileReader();
    reader.onload = function () {
      var data = null;
      try { data = JSON.parse(reader.result); } catch (err) { /* 不是 JSON */ }
      var prog = KY.parseImport(data);
      if (!prog) { KY.toast('这个文件不是本站导出的学习记录'); return; }
      incoming = prog;
      var when = typeof data.exported === 'string' ? '（' + data.exported.slice(0, 10) + ' 导出）' : '';
      dataSlot.innerHTML = '<span class="confirm">文件里' + when + '：' + summary(prog) + '。导入会替换当前记录（' + summary(KY.prog) + '），确定？' +
        '<button type="button" id="import-yes">导入</button><button type="button" id="import-no">取消</button></span>';
      var yes = document.getElementById('import-yes');
      yes.scrollIntoView({ block: 'nearest' });
      yes.focus({ preventScroll: true });
    };
    reader.onerror = function () { KY.toast('读取文件失败，请再试一次'); };
    reader.readAsText(f);
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
