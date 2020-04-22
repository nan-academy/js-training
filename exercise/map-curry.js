/*
## Map Curry

### Instruction

Create a function `mapEntriesCurry` that receives as parameters an object and a function.
You will also have to create two other functions that will be used in the `mapEntriesCurry` function:
- `addToCart` that adds 100g to each element of the grocery cart.
- `caloriesMedia` that calculates the media of calories for each element in the cart.
*/

const groceriesCart = {
  oil: 500,
  onion: 230,
  garlic: 220,
  paprika: 480,
  tomato: 100,
  vinegar: 100,
  sugar: 249,
  orange: 833,
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

///*/// ⚡

///*/// ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(mapEntriesCurry(groceriesCart)(addToCart), $addCart))
t(({ eq }) => eq(mapEntriesCurry($secondCart)(addToCart), $addSolSecondCart))

t(({ eq }) => eq(mapEntriesCurry(groceriesCart)(caloriesMedia), $cart))
t(({ eq }) => eq(mapEntriesCurry($secondCart)(caloriesMedia), $solSecondCart))

Object.freeze(tests)

const $cart = {
  oil: { calories: 240 },
  onion: { calories: 0 },
  garlic: { calories: 327.8 },
  paprika: { calories: 1353.6 },
  tomato: { calories: 18 },
  vinegar: { calories: 20 },
  sugar: { calories: 963.63 },
  orange: { calories: 408.17 },
}
const $addCart = {
  oil: 600,
  onion: 330,
  garlic: 320,
  paprika: 580,
  tomato: 200,
  vinegar: 200,
  sugar: 349,
  orange: 933,
}

const $secondCart = { oil: 500, onion: 230, paprika: 480, tomato: 100 }
const $solSecondCart = {
  oil: { calories: 240 },
  onion: { calories: 0 },
  paprika: { calories: 1353.6 },
  tomato: { calories: 18 },
}
const $addSolSecondCart = { oil: 600, onion: 330, paprika: 580, tomato: 200 }
