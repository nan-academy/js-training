const forEach = (arr, fun) => {
  for (let i = 0; i < arr.length; i++) {
    fun(arr[i], i, arr)
  }
}
