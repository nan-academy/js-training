const Reduce = (f, arr, acc = 0) => {
  let res = acc
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && res === 0) {
      res = arr[i]
    } else {
      res = f(res, arr[i])
    }
  }
  return res
}
