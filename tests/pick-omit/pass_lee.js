const pick = (obj, k) => {
  k = !Array.isArray(k) ? [k] : k
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => k.includes(key))
  )
}

const omit = (obj, keys, target = {}) => {
  for (let [k, v] of Object.entries(obj)) {
    keys.includes(k) || (target[k] = v)
  }
  return target
}
