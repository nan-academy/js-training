const Some = (arr, fun) => {
  for (let a of arr) {
    if (fun(a)){
      return true
    }
  }
  return false
}
