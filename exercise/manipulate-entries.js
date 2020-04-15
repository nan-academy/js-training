/*
## manipulate-Keys

### Instruction

Finnish your groceries!!!

Create 3 functions that works like the `.filter`, `.map` and `.reduce` array method but for the entries of the grocery cart
- `filterEntries` filters using both key and value
- `mapEntries` changes either the key or the value or both
- `reduceEntries` that will give you the average of calories, proteins, ..., of all items in your grocery cart


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

// the database has the calories, .... per 100 grams
// prettier-ignore
const nutritionDB = {
  tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
  vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
  oil: { calories: 884, protein: 123, carbs: 123, sugar: 123, fiber: 123, fat: 100 },
  onion: { calories: 40, protein: 0, carbs: 0, sugar: 0, fiber: 0, fat: 100 },
  garlic: { calories: 40, protein: 0, carbs: 0, sugar: 0, fiber: 0, fat: 100 },
  sugar: { calories: 400, protein: 23, carbs: 0, sugar: 100, fiber: 0, fat: 100 },
  paprika: { calories: 230, protein: 12.2, carbs: 2.1, sugar: 0, fiber: 0, fat: 23.1 },
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// filter entries
t(({ eq }) =>
  eq(
    filterEntries(groceriesCart, ([k, v]) => k == 'garlic' || v == 480),
    { garlic: 220, paprika: 480 }
  )
)
t(({ eq }) =>
  eq(
    filterEntries(groceriesCart, ([k, v]) => /oil/.test(k) || v === 230),
    { oil: 500, onion: 230 }
  )
)

// map entries
t(({ eq }) =>
  eq(
    mapEntries(groceriesCart, ([k, v]) => [`✔️${k}`, v - v]),
    $1
  )
)
t(({ eq }) =>
  eq(
    mapEntries(
      filterEntries(groceriesCart, ([k, v]) => k === 'onion'),
      ([k, v]) => [`✔️${k}`, v - 100]
    ),
    { '✔️onion': 130 }
  )
)

// reduce entries
t(({ eq }) => eq(reduceEntries(groceriesCart), $2))

Object.freeze(tests)

const $1 = {
  '✔️oil': 0,
  '✔️onion': 0,
  '✔️garlic': 0,
  '✔️paprika': 0,
}

// prettier-ignore
const $2 = {
  garlic: { calories: 88, carbs: 0, fat: 220, fiber: 0, protein: 0, sugar: 0},
  oil: { calories: 4420, carbs: 615, fat: 500, fiber: 615, protein: 615, sugar: 615 },
  onion: { calories: 92, carbs: 0, fat: 230, fiber: 0, protein: 0, sugar: 0 },
  paprika: { calories: 1104, carbs: 10.08, fat: 110.88, fiber: 0, protein: 58.56, sugar: 0 }
}
