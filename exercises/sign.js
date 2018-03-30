'use strict'

/*
 * Create the `sign` function that takes one number argument
 * and return 1 if the number is positive, -1 if the number is negative
 * and 0 if the number is exactly 0
 * You must not just use `Math.sign`, make your own.
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 *
 * @notions Functions, If-Else
 */

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sign, 'function')
assert.strictEqual(sign.toString().includes('Math.sign'), false)
assert.strictEqual(sign.length, 1)
assert.notStrictEqual(sign, Math.sign)
assert.strictEqual(sign(-2), -1)
assert.strictEqual(sign(10), 1)
assert.strictEqual(sign(0), 0)
assert.strictEqual(sign(132), 1)
// End of tests */
