const groupPrice = (str) => {
  const parts = str.split(/((?:\$|USD)(\d+)\.(\d+))/g)
  const ret = []
  let i = -1
  while ((++i+3) < parts.length) {
    ret.push([ parts[++i], parts[++i], parts[++i] ])
  }

  return ret
}
