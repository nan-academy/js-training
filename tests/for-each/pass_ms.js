const forEach = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i]
    f(elem, i, arr)
  }
}
