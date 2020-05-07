const isObj = (v) => v && v.constructor === Object

const replica = (target, first, ...rest) => {
  if (!first) return target
  for (let [k, v] of Object.entries(first)) {
    if (isObj(v) && isObj(target[k])) {
      replica(target[k], v)
    } else {
      target[k] = v
    }
  }
  return rest.length ? replica(target, ...rest) : target
}
