const map = (arr, fn) => {
  const result = Array(arr.length)
  let i = -1
  while (++i < arr.length) {
    result[i] = fn(arr[i], i, arr)
  }
  return result
}

const flat = arr => arr.reduce((acc, el) => Array.isArray(el)
  ? [...acc, ...el]
  : [...acc, el], [])

const flatMap = (arr, fn) => flat(map(arr, fn))