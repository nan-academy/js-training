const filterEntries = (obj, f) => {
  return Object.fromEntries(Object.entries(obj).filter(f))
}

const mapEntries = (obj, f) => {
  return Object.fromEntries(Object.entries(obj).map(f))
}

const reduceEntries = (obj, ...k) => {
  return Object.entries(obj).reduce(...k)
}

const floats = (n) => {
  return Number(n.toFixed(10))
}

const lowCarbs = (car) => {
  return filterEntries(car, ([k, v]) => (nutritionDB[k].carbs * v) / 100 < 50)
}

const totalCalories = (car) => {
  return floats(
    reduceEntries(
      car,
      (acc, cr) => (nutritionDB[cr[0]].calories * cr[1]) / 100 + acc,
      0
    )
  )
}

const cartTotal = (car) => {
  return mapEntries(car, ([k, v]) => [
    k,
    mapEntries(nutritionDB[k], ([ing, howmany]) => [
      ing,
      floats((v / 100) * howmany),
    ]),
  ])
}
