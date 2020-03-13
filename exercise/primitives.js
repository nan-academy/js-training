/*
## Primitive

### Instructions

Create a constant variables for each primitives:
  - `str` for `String`
  - `num` for `Number`
  - `bool` for `Boolean`
  - `undef` for `undefined`

### Notions
  - Primitive and Operators
  - Variables

*/








export const tests = [
  // str is declared and of type string
  () => typeof str === 'string',

  // num is declared and of type number
  () => typeof num === 'number',

  // bool is declared and of type boolean
  () => typeof bool === 'boolean',

  // undef is declared and of type undefined
  () => undef === undefined,
]
