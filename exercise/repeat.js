/*

## Repeat

### Instructions

Create a `repeat` function that takes a string and a number as parameters
and return the repeated string by the given number
Like the method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Of course you may not use the method directly


### Notions

- https://nan-academy.github.io/js-training/examples/loops.js
- https://nan-academy.github.io/js-training/examples/recursion.js
- https://devdocs.io/javascript/global_objects/string/repeat
*/

String.prototype.repeat = undefined

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => typeof repeat === 'function')
t(() => repeat.length === 2)
t(() => repeat('a', 3) === 'aaa')
t(() => repeat('ba', 10) === 'babababababababababa')
t(() => repeat('pouet', 2) === 'pouetpouet')
t(() => repeat('haha', 1) === 'haha')
t(() => repeat('hehehe', 0) === '')

Object.freeze(tests)
