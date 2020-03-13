/*
## Arr

### Instructions

Create a constant variable named `arr` that is an array
containing the values 4 and '2'


### Notions

 - Data-Structures

*/







export const tests = [
  // arr is declared and is an array
  () => Array.isArray(arr),

  // arr first element is 4
  () => arr[0] === 4,

  // arr second element is "2"
  () => arr[1] === '2',

  // arr length is 2
  () => arr.length === 2,
]
