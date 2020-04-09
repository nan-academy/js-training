const filterValues = (obj, filtering) => {
  let entrie = Object.entries(obj).filter((ele) => filtering(ele[1]) && ele)
  let result = Object.fromEntries(entrie)
  return result
}
const mapValues = (obj, f) => {
  let entrie = Object.entries(obj).map((ele) => {
    ele[1] = f(ele[1])
    return ele
  })
  let result = Object.fromEntries(entrie)
  return result
}

const reduceValues = (obj, f, init) =>
  init == undefined
    ? Object.values(obj).reduce(f)
    : Object.values(obj).reduce(f, init)
