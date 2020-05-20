const sign = (n) => (n > 0 ? 1 : n < 0 ? -1 : 0)

const sameSign = (a, b) => sign(a) === sign(b)
