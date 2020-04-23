const filterEntries = (obj, f) =>
  Object.fromEntries(Object.entries(obj).filter(f))

const mapEntries = (obj, f) => Object.fromEntries(Object.entries(obj).map(f))

const reduceOBJ = (obj, f, init) =>
  init == undefined
    ? Object.entries(obj).reduce(f)
    : Object.entries(obj).reduce(f, init)

const reduceEntries = (obj) =>
  reduceOBJ(
    obj,
    (acc, cr) => {
      acc[cr[0]] = mapEntries(nutritionDB[cr[0]], ([k, v]) => [
        k,
        (v * cr[1]) / 100,
      ])
      return acc
    },
    {}
  )
