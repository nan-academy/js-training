const sumOrMul = (arr, acc = 0) =>
  arr.reduce((res, n) => (n % 2 === 0 ? res * n : res + n), acc)

const adder = (arr, acc = 0) => arr.reduce((x, y) => x + y, acc)

const funcExec = (arr, acc = 0) => arr.reduce((x, fun) => fun(x), acc)
