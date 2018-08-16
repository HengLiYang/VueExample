
const versionController = function () {
    const version = '1.2.3'
    const links = document.getElementsByTagName('link')
    const scripts = document.getElementsByTagName('script')
    // es6可以换种语法针对domlist集合做处理
    for (let i = 0; i < links.length; i++) {
      let linkItem
      linkItem = links[i].getAttribute('href')
        if (linkItem !== null) {
            links[i].setAttribute('href', linkItem + '?version=' + version)
        } else {
            // console.log('true is null')
        }
    }
    for (let i = 0; i < scripts.length; i++) {
      let scriptItem
      scriptItem = scripts[i].getAttribute('src')
        if (scriptItem !== null) {
            scripts[i].setAttribute('src', scriptItem + '?version=' + version)
        } else {
            // console.log('true is null')
        }
    }
}
const ieBrowserVersion = function () {
  var isIE = navigator.userAgent.indexOf('compatible') > -1 && navigator.userAgent.indexOf('MSIE') > -1 //判断是否IE浏览器
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(navigator.userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion < 10) {
      window.location.href = '/common/versionOutDated.html'
    }
  }
}
export {versionController, ieBrowserVersion}
