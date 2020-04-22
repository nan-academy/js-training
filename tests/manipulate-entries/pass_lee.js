const filterEntries = (obj, f) => {
  const entries = Object.entries(obj).filter(f)
  return Object.fromEntries(entries)
}

const mapEntries = (obj, f) => {
  const entries = Object.entries(obj).map(f)
  return Object.fromEntries(entries)
}

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
