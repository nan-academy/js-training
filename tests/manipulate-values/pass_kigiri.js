const { fromEntries: f, entries: e } = Object
const filterValues = (o, fn) => f(e(o).filter(([, v]) => fn(v)))
const mapValues = (o, fn) => f(e(o).map(([k, v]) => [k, fn(v)]))
const reduceValues = (o, ...args) => Object.values(o).reduce(...args)