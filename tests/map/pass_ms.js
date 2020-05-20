const map = (arr, fun) =>
  arr.reduce((acc, n, i) => acc.push(fun(n, i, arr)) && acc, [])

const flat = (arr) => (Array.isArray(arr) ? [...arr] : arr)

const flatMap = (arr, fun) => flat(map(arr, fun))
