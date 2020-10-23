// ;(function(doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function() {
//       var clientWidth = docEl.clientWidth
//       if (!clientWidth) return
//       if (clientWidth >= 750) {
//         docEl.style.fontSize = '16px'
//       } else {
//         docEl.style.fontSize = 16 * (clientWidth / 750) + 'px'
//       }
//     }
//   if (!doc.addEventListener) return
//   win.addEventListener(resizeEvt, recalc, false)
//   doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window)




;(function () {
  // 屏幕大于800
  var designW = 750
  var font_rate = 16
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
})()

