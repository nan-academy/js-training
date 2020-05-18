const fusion = (obj1, obj2) => {
  let resObj = Object.assign({}, obj1)
  for (let [key, value] of Object.entries(obj2)) {
    if (typeof obj1[key] !== typeof value) {
      resObj[key] = value
    } else if (Array.isArray(value) && Array.isArray(obj1[key])) {
      resObj[key] = resObj[key].push(...value) && obj1[key]
    } else if (typeof value === 'string') {
      resObj[key] = obj1[key].concat(' ', value)
    } else if (typeof value === 'number') {
      resObj[key] = obj1[key] + value
    } else if (isObject(obj1[key]) && isObject(value)) {
      resObj[key] = fusion(obj1[key], value)
    } else {
      resObj[key] = value
    }
  }
  return resObj
}

const isObject = (obj) => obj.constructor === Object
