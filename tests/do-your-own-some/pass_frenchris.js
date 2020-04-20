const Some = (el, fun) => {
  for (let e of el) {
    if (fun(e)) return true
  }
  return false
}
