const COOKIE_OPTIONS = ['name', 'value']
// 设置cookie
const SetCookie = function (...COOKIE_OPTIONS) {
  let expdate = new Date()
  let argv = COOKIE_OPTIONS
  let argc = COOKIE_OPTIONS.length
  let expires = (argc > 2) ? argv[2] : null
  let path = (argc > 3) ? argv[3] : null
  let domain = (argc > 4) ? argv[4] : null
  let secure = (argc > 5) ? argv[5] : false
  if (expires != null) {
    expdate.setTime(expdate.getTime() + (expires * 1000))
    document.cookie = COOKIE_OPTIONS[0] + '=' + escape(COOKIE_OPTIONS[1]) + ((expires == null) ? '' : ('; expires=' + expdate.toGMTString())) + ((path == null) ? '' : ('; path=' + path)) + ((domain == null) ? '' : ('; domain=' + domain)) + ((secure === true) ? '; secure' : '')
  }
}
const GetCookie = function (cname) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim()
    if (c.indexOf(name) === 0) return unescape(c.substring(name.length, c.length))
  }
  return ''
}
const fliterNullArr = function (arr) {
  arr.map(item => {
    for (let [k, v] of Object.entries(item)) {
      if (v === '' || v === null) {
        item[k] = '--'
      }
    }
  })
  return arr
}
const UTIL = {SetCookie, COOKIE_OPTIONS, GetCookie, fliterNullArr}
export default UTIL
