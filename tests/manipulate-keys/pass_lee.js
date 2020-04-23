const filterKeys = (obj, filtering) =>
  Object.fromEntries(
    Object.entries(obj).filter((ele) => filtering(ele[0]) && ele)
  )

const mapKeys = (obj, f) =>
  Object.fromEntries(
    Object.entries(obj).map((ele) => {
      ele[0] = f(ele[0])
      return ele
    })
  )

const reduceKey = (obj, f, init) =>
  init == undefined
    ? Object.keys(obj).reduce(f)
    : Object.keys(obj).reduce(f, init)
