const filterEntries = (obj, f) =>
  Object.fromEntries(Object.entries(obj).filter(f))

const mapEntries = (obj, f) => Object.fromEntries(Object.entries(obj).map(f))

const red = (obj, f, i) => {
  if (i == undefined) {
    return Object.entries(obj).reduce(f)
  } else {
    return Object.entries(obj).reduce(f, i)
  }
}

const reduceEntries = (obj) =>
  red(obj,(acc, cr) => {
      acc[cr[0]] = mapEntries(nutritionDB[cr[0]], ([k, v]) => [
        k,
        (v * cr[1]) / 100,
      ])
      return acc
    },
    {}
  )
