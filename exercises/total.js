'use strict'

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */
const total = arr => arr.reduce((a, b) => a + b)

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1 ]), 3)
assert.deepStrictEqual(total([ 10, 10, 10 ]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
