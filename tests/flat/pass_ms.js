const flat = (arr, size = 1) => {
  const res = []

  if (size < 1) {
    return arr
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flat(arr[i], size - 1))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
