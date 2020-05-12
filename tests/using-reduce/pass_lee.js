const adder = (arr, rest = 0) => arr.reduce((acc, cr) => acc + cr, rest)
const sumOrMul = (arr, ...rest) =>
  arr.reduce(
    (acc, cr) => (acc = cr % 2 ? acc + cr : acc * cr),
    ...rest || 0
  )
  
  const funcExec = (arr, ...rest) => arr.reduce((acc, cr) => cr(acc), ...rest)