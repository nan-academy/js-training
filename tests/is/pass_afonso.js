is.num = function (a) {
  return typeof a === typeof 1
}
is.nan = function (a) {
  return a !== a
}
is.str = function (a) {
  return typeof a === typeof 'a'
}
is.bool = function (a) {
  return typeof a === typeof true
}
is.undef = function (a) {
  return typeof a === typeof undefined
}
is.def = function (a) {
  return typeof a !== typeof undefined
}
is.arr = function (a) {
  return Array.isArray(a)
}
is.obj = function (a) {
  return Object.prototype.toString.call(a) === '[object Object]'
}
is.fun = function (a) {
  return typeof a === 'function'
}
is.truthy = function (a) {
  return !(
    a === false ||
    a === null ||
    a === undefined ||
    a === 0 ||
    a !== a ||
    a === ''
  )
}
is.falsy = function (a) {
  return (
    a === false ||
    a === null ||
    a === undefined ||
    a === 0 ||
    a !== a ||
    a === ''
  )
}
