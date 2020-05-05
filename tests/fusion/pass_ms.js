const fusion = (obj, res) => {
  let newObj = Object.assign({}, obj)
  for (let k of Object.keys(res)) {
    if (!obj[k] || !res[k]) {
      newObj[k] = res[k]
    } else if (typeof obj[k] === 'number' && typeof res[k] === 'number') {
      newObj[k] = obj[k] + res[k]
    } else if (typeof obj[k] === 'string' && typeof res[k] === 'string') {
      newObj[k] = obj[k].concat(' ', res[k])
    } else if (
      (obj[k].constructor === Object || !obj[k].constructor) &&
      (res[k].constructor === Object || !res[k].constructor)
    ) {
      newObj[k] = fusion(obj[k], res[k])
    } else if (Array.isArray(obj[k]) && Array.isArray(res[k])) {
      newObj[k] = obj[k].concat(res[k])
    } else {
      Object.assign(newObj, res)
    }
  }
  return newObj
}
