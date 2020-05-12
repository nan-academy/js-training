const forEach = (arr, f) => {
  for (let [i, v] of arr.entries()) f(v, i, arr)
}
