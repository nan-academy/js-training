const filterObj = (obj, filtering, keyVal) => {
  let entrie = Object.entries(obj).filter(
    (ele) => filtering(ele[keyVal]) && ele
  )
  let result = Object.fromEntries(entrie)
  return result
}

const filterValues = (obj, filtering) => filterObj(obj, filtering, 1)

const mapObj = (obj, f, keyVal) => {
  let entrie = Object.entries(obj).map((ele) => {
    if (!keyVal) {
      ele = f(ele)
      return ele
    }
    ele[keyVal - 1] = f(ele[keyVal - 1])
    return ele
  })
  let result = Object.fromEntries(entrie)
  return result
}

const mapValues = (obj, f) => mapObj(obj, f, 2)

const reduceValues = (obj, f, init) =>
  init == undefined
    ? Object.values(obj).reduce(f)
    : Object.values(obj).reduce(f, init)
