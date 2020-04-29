const filterValues = (obj, f) =>
  Object.fromEntries(Object.entries(obj).filter((ele) => f(ele[1]) && ele))

const mapValues = (obj, f) =>
  Object.fromEntries(
    Object.entries(obj).map((ele) => {
      ele[1] = f(ele[1])
      return ele
    })
  )

const reduceValues = (obj, f, i) => {
  if (i == undefined) {
    return Object.values(obj).reduce(f)
  }
  return Object.values(obj).reduce(f, i)
}