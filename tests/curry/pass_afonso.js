const toUpper = (s) => {
  return function(elem) {
    let re = new RegExp(elem, "g");
    return s.replace(re, elem.toUpperCase())
  }
}

const addSpace = (s) => {
  return function(elem) {
    let re = new RegExp(elem, "g");
    return s.replace(re, elem+' ')
  }
}

function curry(value, f) {
  return f(value)
}
