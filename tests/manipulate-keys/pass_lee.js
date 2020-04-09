// filter
const filterObj = (obj, filtering, keyVal) => {
  let entrie = Object.entries(obj).filter(
    (ele) => filtering(ele[keyVal]) && ele
  )
  let result = Object.fromEntries(entrie)
  return result
}

const filterKeys = (obj, filtering) => filterObj(obj, filtering, 0)

// map
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

const mapKeys = (obj, f) => mapObj(obj, f, 1)

// reduce
const reduceKey = (obj, f, init) =>
  init == undefined
    ? Object.keys(obj).reduce(f)
    : Object.keys(obj).reduce(f, init)
