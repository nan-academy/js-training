const isObj = (v) => v && v.constructor === Object
const copyEntry = ([k, v]) => [k, deepCopy(v)]
const deepCopy = (v) => {
  if (Array.isArray(v)) return v.map(deepCopy)
  if (!isObj(v)) return v
  return Object.fromEntries(Object.entries(v).map(copyEntry))
}
