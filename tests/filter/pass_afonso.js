const filter = (arr, fun) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i], i, arr)) {
      res.push(arr[i])
    }
  }
  return res
}

const reject = (arr, fun) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i], i, arr)) {
      res.push(arr[i])
    }
  }
  return res
}

const partition = (arr, fun) => {
  return [filter(arr, fun), reject(arr, fun)]
}
