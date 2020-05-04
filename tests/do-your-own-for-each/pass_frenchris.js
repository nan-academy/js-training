const forEach = (arr, f) => {
  for (let i in arr) f(arr[i], i, arr)
  return undefined
}
