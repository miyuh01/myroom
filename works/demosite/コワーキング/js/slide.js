$(function() {
  setTimeout(init, 10);
  function init() {
    var scrollElemToWatch_1 = document.getElementById('sample'),      //idを指定
         watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300), //監視領域を設定
         rev1 = new RevealFx(scrollElemToWatch_1, {
          revealSettings : {
            //ボックスの設定
            bgcolor: '#454545',
            duration: 300,
            onStart: function(contentEl, revealerEl) {
              anime.remove(contentEl);
              contentEl.style.opacity = 0;
            },
            onCover: function(contentEl, revealerEl) {
              contentEl.style.opacity = 1;
              anime({
                //表示要素の設定 (Sample text箇所)
                targets: contentEl,
                easing: 'easeOutExpo',
              });
            }
          }
        })
    watcher_1.enterViewport(function() { //監視領域に入ったら実行
      rev1.reveal();                     //アニメーション実行
      watcher_1.destroy();               //一度のみ実行する場合記述
    });
  }
});
