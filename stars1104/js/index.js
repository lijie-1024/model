;(function () {
  // 屏幕大于800
  var designW = document.body.offsetWidth > 760 ? 1920 : 375 //设计稿宽
  var font_rate = document.body.offsetWidth > 760 ? 16 : 10.3 //设计稿宽
  //适配
  document.getElementsByTagName('html')[0].style.fontSize = (document.body.offsetWidth / designW) * font_rate + 'px'
  document.getElementsByTagName('body')[0].style.fontSize = (document.body.offsetWidth / designW) * font_rate + 'px'
  //监测窗口大小变化
  window.addEventListener(
    'onorientationchange' in window ? 'orientationchange' : 'resize',
    function () {
      document.getElementsByTagName('html')[0].style.fontSize = (document.body.offsetWidth / designW) * font_rate + 'px'
      document.getElementsByTagName('body')[0].style.fontSize = (document.body.offsetWidth / designW) * font_rate + 'px'
    },
    false
  )
  $(window).scroll(function (e) {
    if ($(document).scrollTop() > 0) {
      $('.pc_logo').hide()
      $('.pc_logo_scroll').show(200)
    }
    if ($(document).scrollTop() == 0) {
      $('.pc_logo_scroll').hide()
      $('.pc_logo').show(200)
    }
  })
})()
