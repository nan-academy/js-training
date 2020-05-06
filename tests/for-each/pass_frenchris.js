const forEach = (arr, f) => {
  for (const [i, val] of arr.entries()) f(val, i, arr)
}
