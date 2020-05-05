const isObj = (x) => x && (x.constructor === Object || !x.constructor)
const fusionValue = (a, b) => {
  if (typeof a !== typeof b) return b
  if (typeof a === 'string') return `${a} ${b}`
  if (typeof a === 'number') return a + b
  if (Array.isArray(a) && Array.isArray(b)) return a.concat(b)
  return isObj(a) && isObj(b) ? fusion(a, b) : b
}

const fusion = (a, b) => ({
  ...a,
  ...Object.fromEntries(
    Object.entries(b).map(([k, v]) => [k, fusionValue(a[k], v)])
  ),
})
