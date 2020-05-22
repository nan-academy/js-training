const reducer1 = (acc, el) => acc + el
const adder = (arr, initialVal) => arr.reduce(reducer1, initialVal || 0)

const reducer2 = (acc, el) => (el % 2 === 0 ? acc * el : acc + el)
const sumOrMul = (arr, initialVal) => arr.reduce(reducer2, initialVal || 0)

const reducer3 = (acc, el) => acc = el(acc)
const funcExec = (arr, initialVal) => arr.reduce(reducer3, initialVal || 0)
