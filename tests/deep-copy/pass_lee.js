const isObj = (x) => x && (x.constructor === Object || !x.constructor)
const isArr = (x) => Array.isArray(x)
const deepCopy = (target) => {
  let result = isArr(target) ? [] : isObj(target) ? {} : target
  for (let [k, v] of Object.entries(target)) {
    result[k] = (isObj(v) || isArr(v)) ? deepCopy(v) : v
  }
  return result
}
