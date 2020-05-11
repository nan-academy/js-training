const every = (arr, fun) => {
  for (let a of arr) {
    if (!fun(a)) {
      return false
    }
  }
  return true
}
const some = (arr, fun) => {
  for (let a of arr) {
    if (fun(a)) {
      return true
    }
  }
  return false
}

const none = (arr, fun) => !some(arr, fun)
