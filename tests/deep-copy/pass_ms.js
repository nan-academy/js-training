function deepCopy(obj) {
  let res = Array.isArray(obj) ? [] : obj.constructor === Object ? {} : obj
  for (let k of Object.keys(obj)) {
    let v = obj[k]
    if (v && typeof v === 'object' && v !== null) {
      res[k] = deepCopy(v)
    } else {
      res[k] = v
    }
  }
  return res
}
