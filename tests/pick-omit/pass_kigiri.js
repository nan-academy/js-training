const cond = (fn) => (o, keys) =>
  Object.fromEntries(Object.entries(o).filter(([k]) => fn(keys, k)))

const eq = (keys, k) => typeof keys === 'string' ? keys === k : keys.includes(k)
const pick = cond((keys, k) => eq(keys, k))
const omit = cond((keys, k) => !eq(keys, k))