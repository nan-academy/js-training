const MapFunc = (arr, f) => {
  let res = []
  for (let a of arr) {
    res.push(f(a))
  }
  return res
}
