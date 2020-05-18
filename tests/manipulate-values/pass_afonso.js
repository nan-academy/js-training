const filterValues = (cart, f) =>
  Object.fromEntries(Object.entries(cart).filter((k) => f(k[1])))

const mapValues = (cart, f) =>
  Object.fromEntries(Object.entries(cart).map((k) => [k[0], f(k[1])]))

const reduceValues = (cart, f, acc = 0) =>Object.values(cart).reduce(f,acc)
