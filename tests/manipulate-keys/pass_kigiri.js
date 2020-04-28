const e = Object.entries.bind(Object)
const f = Object.fromEntries.bind(Object)

const filterKeys = (obj, fn) => f(e(obj).filter(([k, v]) => fn(k)))
const mapKeys = (obj, fn) => f(e(obj).map(([k, v]) => [fn(k), v]))
const reduceKeys = (obj, ...args) => Object.keys(obj).reduce(...args)
