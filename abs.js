'use strict'

/*
 * Create the function `abs` that takes one number argument
 * and returns it's absolute value.
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 *
 * @notions Functions, Ternary
 * @next max
 */

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof abs, 'function')
assert.notStrictEqual(abs, Math.abs)
assert.strictEqual(abs.length, 2)
assert.strictEqual(abs(0), 0)
assert.strictEqual(abs(-1), 1)
assert.strictEqual(abs(-13.2), 13.2)
assert.strictEqual(abs(132), 132)
// End of tests */
