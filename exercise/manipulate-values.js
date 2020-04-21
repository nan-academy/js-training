/*
## manipulate-values

### Instructions

Go buy groceries!!!

You have a grocery cart with some items you need.
The items will have a `key` being the name and a `value` that is the amount in grams.

Create 3 functions that works like the `.filter`, `.map` and `.reduce` array method but for the values of your grocery cart.
- `filterValues` filters the values of your grocery cart.
- `mapValues` changes the values of your grocery cart.
- `reduceValues` that will reduce your grocery cart.

You will have a small database to help you with the groceries.

### Notions

- https://devdocs.io/javascript/global_objects/array/filter
- https://devdocs.io/javascript/global_objects/array/map
- https://devdocs.io/javascript/global_objects/array/reduce
- https://devdocs.io/javascript/global_objects/object/entries
- https://devdocs.io/javascript/global_objects/object/fromentries

*/

const groceriesCart = {
  tomato: 200,
  vinegar: 80,
  oil: 50,
  onion: 220,
  garlic: 22,
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
  orange: { calories: 49, protein: 0.9, carbs: 13, fiber: 0.2, fat: 0.1 },
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// filter values
t(({ eq }) => eq($filter1, { oil: 50, garlic: 22 }))
t(({ eq }) => eq($filter2, { onion: 220 }))
t(({ eq }) => eq($filter3, $2))

// map value
t(({ eq }) => eq($map1, { tomato: 100, onion: 120 }))
t(({ eq }) => eq($map2, $1))

// reduce value
t(() => reduceValues(groceriesCart, (acc, cr) => acc + cr) === 572)
t(() => reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr) === 6)
t(() => reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3) === 9)

Object.freeze(tests)

// filter values
const $filter1 = filterValues(groceriesCart, (v) => v < 80)
const $filter2 = filterValues(groceriesCart, (v) => v === 220)
const $filter3 = filterValues(
  nutritionDB,
  (v) => Object.entries(filterValues(v, (ele) => ele === 0)).length !== 0
)

// map value
const $map1 = mapValues(
  filterValues(groceriesCart, (v) => v >= 200),
  (ele) => ele - 100
)
const $map2 = mapValues(groceriesCart, (ele) => ele + 100)

const $1 = {
  tomato: 300,
  vinegar: 180,
  oil: 150,
  onion: 320,
  garlic: 122,
}

// prettier-ignore
const $2 = {
  vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
  oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
  onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
  sugar: { calories: 387, protein: 0, carbs: 100, fiber: 0, fat: 0 }
}
