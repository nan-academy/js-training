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

const reduceKeys = (obj, ...rest) => Object.keys(obj).reduce(...rest)
