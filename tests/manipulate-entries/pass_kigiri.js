const _do = k => (obj, ...args) => Object.fromEntries(Object.entries(obj)[k](...args))

const mapEntries = _do('map')
const filterEntries = _do('filter')
const reduceEntries = (obj, ...args) => Object.entries(obj).reduce(...args)
const rfloat = n => Number(n.toFixed(10))

const lowCarbs = cart =>
  filterEntries(cart, ([k, v]) => nutritionDB[k].carbs/100*v < 50)

const totalCalories = cart => 
  rfloat(reduceEntries(cart, (total, [k, v]) => total + nutritionDB[k].calories/100*v, 0))

const cartTotal = cart => mapEntries(cart, ([ingredient, amount]) => [
  ingredient,
  mapEntries(nutritionDB[ingredient], ([k, v]) => [k, rfloat(v/100*amount)]),
])
