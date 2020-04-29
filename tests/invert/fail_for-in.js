const invert = (obj) => {
  let ret = {}
  for (let key in obj) {
    ret[obj[key]] = key
  }
  obj = ret
  return ret
}
