/*
## manipulate-values

### Instruction

Go buy groceries!!! You have a grocery cart with some items you need.
The items will have a key being the name and a value thats the amount in grams.

Create 3 functions that works like the `.filter`, `.map` and `.reduce` array method but for the values of your grocery cart.
- `filterValues` filters the values of your grocery cart
- `mapValues` changes the values of your grocery cart
- `reduceValues` that will reduce your grocery cart

You will have a small database to help with the groceries!!

### Notions

- https://devdocs.io/javascript/global_objects/array/filter
- https://devdocs.io/javascript/global_objects/array/map
- https://devdocs.io/javascript/global_objects/array/reduce

*/
const groceriesCart = {
  tomato: 200,
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
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// filter values
t(({ eq }) =>
  eq(
    filterValues(groceriesCart, (v) => v < 80),
    {
      oil: 50,
      garlic: 22,
      paprika: 4,
    }
  )
)
t(({ eq }) =>
  eq(
    filterValues(groceriesCart, (v) => v === 100),
    { sugar: 100 }
  )
)
t(({ eq }) =>
  eq(
    filterValues(
      nutritionDB,
      (v) => Object.entries(filterValues(v, (ele) => ele === 0)).length !== 0
    ),
    $2
  )
)

// map value
t(({ eq }) =>
  eq(
    mapValues(
      filterValues(groceriesCart, (v) => v === 200),
      (ele) => ele - 100
    ),
    { tomato: 100, onion: 100 }
  )
)
t(({ eq }) =>
  eq(
    mapValues(groceriesCart, (ele) => ele + 100),
    $1
  )
)

// reduce value
t(() => reduceValues(groceriesCart, (acc, cr) => acc + cr) === 656)
t(() => reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr) === 6)
t(() => reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3) === 9)

Object.freeze(tests)

const $1 = {
  tomato: 300,
  vinegar: 180,
  sugar: 200,
  oil: 150,
  onion: 300,
  garlic: 122,
  paprika: 104,
}

// prettier-ignore
const $2 = {
  onion: { calories: 40, carbs: 0, fat: 100, fiber: 0, protein: 0, sugar: 0 },
  vinegar: { calories: 20, carbs: 0.6, fat: 0, fiber: 0, protein: 0.04, sugar: 0.4 },
}
