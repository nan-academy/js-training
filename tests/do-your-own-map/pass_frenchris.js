const MapFunc = (el, fn) => {
  let result = []
  for (let e of el) result.push(fn(e))
  return result
}
