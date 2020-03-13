/*
## Id

### Instructions

Create an `id` function that takes one argument and return it


### Notions

- Functions

*/


export const test = [
  // id is declared and is a function
  () => typeof id === 'function',

  // id take 1 argument
  () => id.length === 1,

  // id return numbers back
  () => id(5) === 5,

  // id return strings back
  () => id('pouet') === 'pouet',

  // id return itself, why not
  () => id(id) === id,

  // id return anything really
  _ => id(_) === _,
]
