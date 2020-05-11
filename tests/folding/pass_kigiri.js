const fold = (arr, fn, acc, i=0) =>
  i < arr.length
    ? fold(arr, fn, fn(acc, arr[i], i, arr), i + 1)
    : acc

const foldRight = (arr, fn, acc, i = arr.length - 1) =>
  i >= 0
    ? foldRight(arr, fn, fn(acc, arr[i], i, arr), i - 1)
    : acc

const reduce = (arr, fn) => {
  if (!arr.length) throw Error('Reduce of empty array with no initial value')
  return fold(arr.slice(1), fn, arr[0])
}

const reduceRight = (arr, fn) => {
  if (!arr.length) throw Error('Reduce of empty array with no initial value')
  return foldRight(arr.slice(0, -1), fn, arr[arr.length - 1])
}