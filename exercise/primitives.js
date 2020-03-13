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

export const tests = []
const t = f => tests.push(f)
// str is declared and of type string
t(() => typeof str === 'string')

// num is declared and of type number
t(() => typeof num === 'number')

// bool is declared and of type boolean
t(() => typeof bool === 'boolean')

// undef is declared and of type undefined
t(() => undef === undefined)

