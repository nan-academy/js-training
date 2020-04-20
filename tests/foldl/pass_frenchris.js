const foldl = (fn, acc, el) => {
  for (let e of el) {
    acc = fn(acc, e)
  }
  return acc
}
