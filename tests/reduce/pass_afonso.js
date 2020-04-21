const sumOrMul = (arr) =>
  arr.reduce((res, n) => (n % 2 === 0 ? res * n : res + n))
