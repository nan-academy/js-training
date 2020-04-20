const reducer = (acc, e) => (e % 2 === 0 ? acc * e : acc + e)

const sumOrMul = (el) => el.reduce(reducer)
