const isObj = (x) => x && (x.constructor === Object || !x.constructor)
const deepCopy = (target) => {
  let result = Array.isArray(target) ? [] : isObj(target) ? {} : target
  for (let [k, v] of Object.entries(target)) {
    result[k] = typeof v === 'object' && v !== undefined ? deepCopy(v) : v
  }
  return result
}
