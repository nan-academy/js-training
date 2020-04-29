function pick(obj, keys) {
  const result = {}
  if (Array.isArray(keys)) {
    for (let [k, v] of Object.entries(obj))
      keys.indexOf(k) != -1 ? (result[k] = v) : {}
    return result
  }
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => [keys].indexOf(key) != -1)
  )
}

function omit(obj, keys) {
  var target = {}
  for (let i of Object.keys(obj)) {
    if (keys.indexOf(i) != -1) {
      continue
    }
    if (!Object.hasOwnProperty.call(obj, i)) {
      continue
    }
    target[i] = obj[i]
  }
  return target
}
