const invert = (obj) => {
  let ret = {}
  for (let key of Object.keys(obj)) {
    ret[obj[key]] = key
  }
  obj = ret
  return ret
}
