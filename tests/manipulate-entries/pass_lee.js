const filterEntries = (obj, f) =>
  Object.fromEntries(Object.entries(obj).filter(f))

const mapEntries = (obj, f) => Object.fromEntries(Object.entries(obj).map(f))

const reduceEntries = (obj, ...rest) => Object.entries(obj).reduce(...rest)

const totalCalories = (obj) =>
  Number(
    reduceEntries(
      obj,
      (acc, cr) => (nutritionDB[cr[0]].calories * cr[1]) / 100 + acc,
      0
    ).toFixed(1)
  )

const lowCarbs = (obj) =>
  filterEntries(obj, ([k, v]) => (nutritionDB[k].carbs * v) / 100 < 50)

const media = (cartAmount, dbAmount) =>
  Number(((cartAmount * dbAmount) / 100).toFixed(3))
const cartTotal = (obj) =>
  mapEntries(obj, ([k, v]) => [
    k,
    mapEntries(nutritionDB[k], ([dbK, dbV]) => [dbK, media(v, dbV)]),
  ])
