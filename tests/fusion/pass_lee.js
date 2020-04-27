const fusion = (obj, obj1) => {
  for (let k of Object.keys(obj1)) {
    if (!obj[k]) {
      obj[k] = obj1[k]
    } else if (typeof obj[k] === 'string') {
      obj[k] = concatString(obj[k], obj1[k])
    } else if (Array.isArray(obj[k])) {
      obj[k] = mergeArray(obj[k], obj1[k])
    } else if (obj[k].constructor === Object || !obj[k].constructor) {
      Object.assign(obj[k], obj1[k])
    } else if (typeof obj[k] === 'number') {
      obj[k] = mergeAdd(obj[k], obj1[k])
    }
  }
  return obj
}

const concatString = (str, str1) => str.concat(' ', str1)
const mergeArray = (arr, arr1) => arr.push(...arr1) && arr
const mergeAdd = (nbr, nbr1) => nbr + nbr1

/*
fusion(
      {
        str: 'hello',
        object: { a: 'b', b: 'a' },
        nbr: 2,
      },
      {
        str: 'world',
        object: { a: 'string' },
        nbr1: 3,
      }
    ) */
