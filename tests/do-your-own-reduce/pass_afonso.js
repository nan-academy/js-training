const Reduce = (f, arr) => {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    i === 0 ? (res = arr[i]) : (res = f(res, arr[i]))
  }
  return res
}
