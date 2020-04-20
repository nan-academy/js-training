const Filter = (arr, fun) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])){
      res.push(arr[i])
    }
  }
  return res
}
