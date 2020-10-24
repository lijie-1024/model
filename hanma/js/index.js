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
  // 实际放大后的字体
  var size = parseInt(window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size'))

  var resizeSize = parseInt((browserWidth / designW) * font_rate)

  var newSize = (resizeSize * resizeSize) / size
  console.log(size)
  console.log(resizeSize)
  console.log(newSize)
  document.getElementsByTagName('html')[0].style.fontSize = newSize + 'px'
  document.getElementsByTagName('body')[0].style.fontSize = newSize + 'px'

  document.getElementById('test').innerHTML = size + ',' + parseInt(resizeSize) + ',' + newSize
})()
