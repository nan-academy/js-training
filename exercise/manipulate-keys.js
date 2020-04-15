/*
## manipulate-Keys

### Instruction

I do not want onions. I want apples!!!

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

// the database has the calories, .... per 100 grams
// prettier-ignore
const nutritionDB = {
  tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
  vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
  oil: { calories: 884, protein: 123, carbs: 123, sugar: 123, fiber: 123, fat: 100 },
  onion: { calories: 40, protein: 0, carbs: 0, sugar: 0, fiber: 0, fat: 100 },
  garlic: { calories: 40, protein: 0, carbs: 0, sugar: 0, fiber: 0, fat: 100 },
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const validate = (obj, ...a) =>
  Object.keys(obj).length == a.length &&
  a.every((prop) => obj.hasOwnProperty(prop))

// filter keys
t(() =>
  validate(
    filterKeys(groceriesCart, (k) => k.length <= 6),
    'sugar',
    'oil',
    'onion',
    'garlic'
  )
)
t(() =>
  validate(
    filterKeys(groceriesCart, (k) => /onion/.test(k)),
    'onion'
  )
)
t(() =>
  validate(
    filterKeys(nutritionDB, (k) => /onion|garlic/.test(k)),
    'onion',
    'garlic'
  )
)

// map keys
t(({ eq }) =>
  eq(
    mapKeys(groceriesCart, (k) => `✔️${k}`),
    $1
  )
)
t(({ eq }) =>
  eq(
    mapKeys(
      filterKeys(groceriesCart, (k) => k === 'onion'),
      (k) => (k = 'orange')
    ),
    { orange: 200 }
  )
)
t(({ eq }) =>
  eq(
    mapKeys(
      filterKeys(nutritionDB, (k) => k === 'tomato'),
      (k) => `small_${k}`
    ),
    $2
  )
)

// reduce keys
t(({ eq }) =>
  eq(
    reduceKey(groceriesCart, (acc, cr) => acc.concat(', ', cr)),
    'vinegar, sugar, oil, onion, garlic, paprika'
  )
)
t(({ eq }) =>
  eq(
    reduceKey(groceriesCart, (acc, cr) => (acc += (cr.length <= 4) ^ 1), 0),
    5
  )
)
t(({ eq }) =>
  eq(
    reduceKey(groceriesCart, (acc, cr) => (acc += (cr.length <= 4) & 1), 0),
    1
  )
)

Object.freeze(tests)

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
