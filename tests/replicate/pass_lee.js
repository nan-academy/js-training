const replica = (target, ...obj) => deepCopy(Object.assign(target, ...obj))

const deepCopy = (target) => {
  var result = Array.isArray(target) ? [] : {}
  for (let [k, v] of Object.entries(target)) {
    result[k] = typeof v === 'object' && v !== null ? replica(v) : v
  }
  return result
}
