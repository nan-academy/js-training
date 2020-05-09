const adder = (arr, start = 0) => arr.reduce((a, b) => a + b, start)
const sumOrMul = (arr, ...args) => arr.reduce((a, b) => b % 2 ? a + b : a * b, ...args)
const funcExec = (arr, ...args) => arr.reduce((x,f) => f(x), ...args)
