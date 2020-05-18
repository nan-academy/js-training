const isObject = o => o && o.constructor === Object

const deepCopy = (obj) => {
  let res = Array.isArray(obj) ? [] : isObject(obj) ? {} : obj
  for (let [key, value] of Object.entries(obj)){
    res[key] = isObject(value) || Array.isArray(value) ? deepCopy(value) : value
  }
  return res
}
