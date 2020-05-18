const filterEntries = (cart, f) =>
  Object.fromEntries(Object.entries(cart).filter(([k, v]) => f([k, v])))

const mapEntries = (cart, f) =>
  Object.fromEntries(Object.entries(cart).map(([k, v]) => f([k, v])))

const reduceEntries = (cart, f, acc) =>
  acc === undefined
    ? Object.entries(cart).reduce(f)
    : Object.entries(cart).reduce(f, acc)

const lowCarbs = (cart) =>
  filterEntries(cart, ([k, v]) => (nutritionDB[k]['carbs'] * v) / 100 < 50)

const totalCalories = (cart) =>
  Number.parseFloat(
    reduceEntries(
      cart,
      (v, arr) => v + (nutritionDB[arr[0]].calories * arr[1]) / 100,
      0
    ).toFixed(1)
  )

const cartTotal = (cart) =>
  mapEntries(cart, ([k, v]) => [
    k,
    {
      calories: Number.parseFloat(
        ((nutritionDB[k]['calories'] * v) / 100).toFixed(3)
      ),
      protein: Number.parseFloat(
        ((nutritionDB[k]['protein'] * v) / 100).toFixed(3)
      ),
      carbs: Number.parseFloat(
        ((nutritionDB[k]['carbs'] * v) / 100).toFixed(3)
      ),
      sugar: Number.parseFloat(
        ((nutritionDB[k]['sugar'] * v) / 100).toFixed(3)
      ),
      fiber: Number.parseFloat(
        ((nutritionDB[k]['fiber'] * v) / 100).toFixed(3)
      ),
      fat: Number.parseFloat(((nutritionDB[k]['fat'] * v) / 100).toFixed(3)),
    },
  ])
