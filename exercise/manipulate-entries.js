/*
## manipulate-Keys

### Instructions

Finnish your groceries!!!

Create 3 functions that works like the `.filter`, `.map` and `.reduce` array method but for the entries of the grocery cart.
- `filterEntries` filters using both key and value.
- `mapEntries` changes either the key or the value or both.
- `reduceEntries` that will give you the right amount of calories, proteins, ..., of all items in your grocery cart.

### Notions

- https://devdocs.io/javascript/global_objects/array/filter
- https://devdocs.io/javascript/global_objects/array/map
- https://devdocs.io/javascript/global_objects/array/reduce

*/

const groceriesCart = {
  oil: 500,
  onion: 230,
  garlic: 220,
  paprika: 480,
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
  orange: { calories: 49, protein: 0.9, carbs: 13, fiber: 0.2, sugar: 9, fat: 0.1 }
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// filter entries
t(({ eq }) => eq($filterE1, { garlic: 220, paprika: 480 }))
t(({ eq }) => eq($filterE2, { oil: 500, onion: 230 }))

// map entries
t(({ eq }) => eq($mapE1, $1))
t(({ eq }) => eq($mapE2, { '✔️onion': 130 }))

// reduce entries
t(({ eq }) => eq(reduceEntries(groceriesCart), $2))

Object.freeze(tests)

// filter entries
const $filterE1 = filterEntries(
  groceriesCart,
  ([k, v]) => k == 'garlic' || v == 480
)
const $filterE2 = filterEntries(
  groceriesCart,
  ([k, v]) => /oil/.test(k) || v === 230
)

// map entries
const $mapE1 = mapEntries(groceriesCart, ([k, v]) => [`✔️${k}`, v - v])
const $mapE2 = mapEntries(
  filterEntries(groceriesCart, ([k, v]) => k === 'onion'),
  ([k, v]) => [`✔️${k}`, v - 100]
)

const $1 = {
  '✔️oil': 0,
  '✔️onion': 0,
  '✔️garlic': 0,
  '✔️paprika': 0,
}

// prettier-ignore
const $2 = {
  oil: { calories: 240, protein: 0, carbs: 0, sugar: 615, fiber: 0, fat: 755},
  onion: { calories: 0, protein: 2.3, carbs: 20.7, sugar: 0, fiber: 0, fat: 0},
  garlic: { calories: 327.8, protein: 14.08, carbs: 72.6, sugar: 2.2, fiber: 4.62, fat: 1.1},
  paprika: { calories: 1353.6, protein: 67.87200000000001, carbs: 259.152, sugar: 4.8, fiber: 0, fat: 61.87200000000001}
}
