const filterKeys = (obj, filtering) => {
  let entrie = Object.entries(obj).filter((ele) => filtering(ele[0]) && ele)
  let result = Object.fromEntries(entrie)
  return result
}

const mapKeys = (obj, f) => {
  let entrie = Object.entries(obj).map((ele) => {
    ele[0] = f(ele[0])
    return ele
  })
  let result = Object.fromEntries(entrie)
  return result
}

const reduceKey = (obj, f, init) =>
  init == undefined
    ? Object.keys(obj).reduce(f)
    : Object.keys(obj).reduce(f, init)
