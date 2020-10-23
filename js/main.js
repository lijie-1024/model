
;(function () {
  // 屏幕大于800
  var designW = 750
  var font_rate = 16
  var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  //适配
  document.getElementsByTagName('html')[0].style.fontSize = (browserWidth / designW) * font_rate + 'px'
  document.getElementsByTagName('body')[0].style.fontSize = (browserWidth / designW) * font_rate + 'px'
  //监测窗口大小变化
  window.addEventListener(
    'onorientationchange' in window ? 'orientationchange' : 'resize',
    function () {
      document.getElementsByTagName('html')[0].style.fontSize = (browserWidth / designW) * font_rate + 'px'
      document.getElementsByTagName('body')[0].style.fontSize = (browserWidth / designW) * font_rate + 'px'
    },
    false
  )
})()

