const invert = (obj) =>
  Object.entries(obj).reduce((acc, cr) => {
    acc[cr[1]] = cr[0]
    return acc
  }, {})
