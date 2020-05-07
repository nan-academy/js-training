const forEach = (arr, fn) => {
  for (const [index, el] of arr.entries()) {
    fn(el, index, arr)
  }
}
