const mapEntriesCurry = (obj) => (fn) => {
  return Object.fromEntries(Object.entries(obj).map(fn))
}

const reduceOBJ = (obj, f, init) => Object.entries(obj).reduce(f, init)

const addToCart = ([key, value]) => [key, value + 100]

const caloriesMedia = ([key, value]) => [
  key,
  reduceOBJ(
    nutritionDB,
    (acc, cr) => {
      if (cr.includes(key)) {
        acc['calories'] = (value * cr[1].calories) / 100
      }
      return acc
    },
    {}
  ),
]
