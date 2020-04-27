const isObj = (v) => v && v.constructor === Object
const cloneEntry = ([k, v]) => [k, cloneDeep(v)]
const cloneDeep = (v) => {
  if (Array.isArray(v)) return v.map(cloneDeep)
  if (!isObj(v)) return v
  return Object.fromEntries(Object.entries(v).map(cloneEntry))
}
