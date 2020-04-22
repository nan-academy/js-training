const Every = (arr, fun) => {
  for (let a of arr) {
    if (!fun(a)) {
      return false
    }
  }
  return true
}
const Some = (arr, fun) => {
  for (let a of arr) {
    if (fun(a)) {
      return true
    }
  }
  return false
}

const None = (arr, fun) => !Some(arr, fun)
