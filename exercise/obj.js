/*
## Obj

### Instructions

Create a constant variable named `Obj` that is an object
containing a property for each primitives:
  - `str` for `String`
  - `num` for `Number`
  - `bool` for `Boolean`
  - `undef` for `undefined`

### Notions

 - Data-Structures

*/









export const tests = [
  // obj is declared and of type object
  () => obj.constructor === Object,

  // obj is constant and can not be re-assigned
  ({ fail }) => obj && fail(() => obj = 10),

  // obj.str is of type string
  () => typeof obj.str === 'string',

  // obj.num is of type number
  () => typeof obj.num === 'number',

  // obj.bool is of type boolean
  () => typeof obj.bool === 'boolean',

  // obj.undef is of type undefined
  () => 'undef' in obj && typeof obj.undef === 'undefined',
]
