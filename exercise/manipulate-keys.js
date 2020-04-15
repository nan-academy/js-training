/*
## manipulate-Keys

### Instruction

I do not want onions. I want oranges!!!

Create 3 functions that works like the `.filter`, `.map` and `.reduce` array method but for the keys of your grocery cart.
- `filterKeys` filters the name of items you have
- `mapKeys` changes the name of items you have
- `reduceKeys` reducing you grocery cart


### Notions

- https://devdocs.io/javascript/global_objects/array/filter
- https://devdocs.io/javascript/global_objects/array/map
- https://devdocs.io/javascript/global_objects/array/reduce

*/

const groceriesCart = {
  vinegar: 80,
  sugar: 100,
  oil: 50,
  onion: 200,
  garlic: 22,
  paprika: 4,
}

// small database with nutrition facts, per 100 grams
// prettier-ignore
const nutritionDB = {
  tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
  vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
  oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
  onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
  garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
  sugar: { calories: 387, protein: 0, carbs: 100, fiber: 0, fat: 0 },
  orange: { calories: 49, protein: 0.9, carbs: 13, fiber: 0.2, fat: 0.1 }
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// filter keys
t(({ eq }) =>
  eq($filterK1, {
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
  })
)
t(({ eq }) => eq($filterK2, { onion: 200 }))

// map keys
t(({ eq }) => eq($mapK1, $1))
t(({ eq }) => eq($mapK2, { orange: 200 }))
t(({ eq }) => eq($mapK3, $2))

// reduce keys
t(({ eq }) => eq($reduceK1, 'vinegar, sugar, oil, onion, garlic, paprika'))
t(({ eq }) => eq($reduceK2, 5))
t(({ eq }) => eq($reduceK3, 1))

Object.freeze(tests)

// filter keys
const $filterK1 = filterKeys(groceriesCart, (k) => k.length <= 6)
const $filterK2 = filterKeys(groceriesCart, (k) => /onion/.test(k))

// map keys
const $mapK1 = mapKeys(groceriesCart, (k) => `✔️${k}`)
const $mapK2 = mapKeys(
  filterKeys(groceriesCart, (k) => k === 'onion'),
  (k) => (k = 'orange')
)
const $mapK3 = mapKeys(
  filterKeys(nutritionDB, (k) => k === 'tomato'),
  (k) => `small_${k}`
)

// reduce keys
const $reduceK1 = reduceKey(groceriesCart, (acc, cr) => acc.concat(', ', cr))
const $reduceK2 = reduceKey(
  groceriesCart,
  (acc, cr) => (acc += (cr.length <= 4) ^ 1),
  0
)
const $reduceK3 = reduceKey(
  groceriesCart,
  (acc, cr) => (acc += (cr.length <= 4) & 1),
  0
)
const $1 = {
  '✔️vinegar': 80,
  '✔️sugar': 100,
  '✔️oil': 50,
  '✔️onion': 200,
  '✔️garlic': 22,
  '✔️paprika': 4,
}

const $2 = {
  small_tomato: {
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    sugar: 2.6,
    fiber: 1.2,
    fat: 0.2,
  },
}
