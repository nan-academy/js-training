const filterKeys = (cart, f) =>
  Object.fromEntries(Object.entries(cart).filter((k) => f(k[0])))

const mapKeys = (cart, f) =>
  Object.fromEntries(Object.entries(cart).map((k) => [f(k[0]), k[1]]))

const reduceKeys = (cart, f, acc) =>
  acc === undefined ? Object.keys(cart).reduce(f) : Object.keys(cart).reduce(f,acc)
