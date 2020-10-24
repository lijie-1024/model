;(function () {
  // 屏幕大于800
  var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  var designW = browserWidth > 760 ? 2455 : 760 //设计稿宽
  var font_rate = browserWidth > 760 ? 16 : 6 //设计稿宽

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
  // 放大后的字体
  var size = window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size')

  var resizeSize = (browserWidth / designW) * font_rate
  console.log(size)
  console.log(resizeSize)
})()
