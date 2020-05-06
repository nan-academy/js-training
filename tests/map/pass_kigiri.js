const MapFunc = (arr, fn) => {
  const result = Array(arr.length)
  let i = -1
  while (++i < arr.length) {
    result[i] = fn(arr[i], i, arr)
  }
  return result
}
