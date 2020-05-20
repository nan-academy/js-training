const fold = (arr, f, acc) => {
  for (let v of arr) acc = f(acc, v)
  return acc
}

const foldRight = (arr, f, acc) => {
  for (let i = arr.length - 1; i >= 0; i--) acc = f(acc, arr[i])
  return acc
}

const reduce = (arr, f, acc) => {
  acc = arr[0]
  for (let [i, v] of arr.entries()) i && (acc = f(acc, v))
  return acc
}

const reduceRight = (arr, f, acc = arr[arr.length - 1]) => {
  for (let i = arr.length - 2; i >= 0; i--) acc = f(acc, arr[i])
  return acc
}
