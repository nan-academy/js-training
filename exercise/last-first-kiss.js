/*
## Last First Kiss

### Instructions

Create 3 functions:

- a `first` function that takes an array or a string
  and return the first element.

- a `last` function that takes an array or a string
  and return the last element.

- a `kiss` function that returns an array of 2 elements
  the last and the first element, in that order


### Notions

- Data-Structures
- Get

*/


export const tests = []
const t = f => tests.push(f)

t(() => last([ 2, 42 ]) === 42) // Oh
t(() => last([ 'pouet', 4, true ]) === true)
t(() => last([ last ]) === last) // I wanna be last, yeah
t(() => last('salut') === 't') // Baby let me be your last
t(() => last([]) === undefined) // Your last first kiss
t(() => first([ 2, 42 ]) === 2)
t(() => first([ 'pouet', 4, true ]) === 'pouet')
t(() => first([ first ]) === first)
t(() => first('salut') === 's')
t(() => first([]) === undefined)
t(({ eq }) => eq(kiss([1, 2, 3, 4, 5, 6]), [6, 1]))
t(({ eq }) => eq(kiss([eq, kiss, first]), [first, eq]))
t(({ eq }) => eq(kiss([]), [undefined, undefined]))
