const fusion = (obj, obj1) => {
  let newObj = Object.assign({}, obj)
  for (let k of Object.keys(obj1)) {
    if (!obj[k] || !obj1[k]) {
      newObj[k] = obj1[k]
    } else if (typeof obj[k] === 'string') {
      newObj[k] = concatString(obj[k], obj1[k])
    } else if (Array.isArray(obj[k])) {
      newObj[k] = mergeArray(obj[k], obj1[k])
    } else if (typeof obj[k] === 'number') {
      newObj[k] = add(obj[k], obj1[k])
    } else if (isObj(obj[k]) && isObj(obj1[k])) {
      newObj[k] = fusion(obj[k], obj1[k])
    } else {
      Object.assign(newObj, obj1)
    }
  }
  return newObj
}

const isObj = (obj) => obj.constructor === Object || !obj.constructor
const concatString = (str, str1) => str.concat(' ', str1)
const mergeArray = (arr, arr1) => arr.push(...arr1) && arr
const add = (nbr, nbr1) => nbr + nbr1
