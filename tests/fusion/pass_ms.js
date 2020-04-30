const fusion = (obj, res) => {
  for (let k of Object.keys(res)) {
    if (!obj[k]) {
      obj[k] = res[k]
    } else if (typeof obj[k] === 'number') {
      obj[k] = obj[k] + res[k]
    } else if (typeof obj[k] === 'string') {
      obj[k] = obj[k].concat(' ', res[k])
    } else if (obj[k].constructor === Object || !obj[k].constructor) {
      Object.assign(obj[k], res[k])
    } else if (Array.isArray(obj[k])) {
      obj[k] = obj[k].concat(res[k])
    } else {
      obj[k] = res[k]
    }
  }
  return obj
}
