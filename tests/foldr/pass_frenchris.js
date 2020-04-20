const foldr = (fn, acc, el) => {
  el = el.reverse()
  for (let e of el) {
    acc = fn(acc, e)
  }
  return acc
}
