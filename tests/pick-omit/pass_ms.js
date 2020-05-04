const pick = (obj, keys) => {
  if (!Array.isArray(keys)) {
    keys = [keys]
  }
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key))
  )
}

const omit = (obj, keys) => {
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
