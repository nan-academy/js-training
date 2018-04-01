'use strict'

/*
 * Create a `isPositive` function that takes a number as
 * parameter and return true if the given number is
 * stricly positive, or false otherwise
 *
 */

// Your code:


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof isPositive, 'function')
assert.strictEqual(isPositive.length, 1)
assert.strictEqual(isPositive(3), true)
assert.strictEqual(isPositive(1998790), true)
assert.strictEqual(isPositive(-1), false)
assert.strictEqual(isPositive(-0.7), false)
assert.strictEqual(isPositive(-787823), false)
assert.strictEqual(isPositive(0), false)
// End of tests */
