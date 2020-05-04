const Filter = (arr, fun) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}

const Reject = (arr, fun) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}

const Partition = (arr, fun) => {
  return [Filter(arr, fun), Reject(arr, fun)]
}
