function deepCopy(target, ...objs) {
  for (let source of objs) {
    for (let [k] of Object.entries(source)) {
      let vs = source[k]
      if (isObject(vs) && isObject(target[k])) {
        target[k] = copyObject(target[k], vs)
      } else {
        target[k] = vs
      }
      target[k] = target[k]
    }
  }
  return target
}
