const every = (arr, fun) => {
  for (let a of arr) {
    if (!fun(a)){
      return false
    }
  }
  return true
}
