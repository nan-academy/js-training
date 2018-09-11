'use strict'

/*
 * Create the `sameSign` function that takes 2 numbers as arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 */

// Your code :
function sameSign(arg1, arg2) {
  let res;
  if (arg1 > 0 && arg2 > 0) {
    res = true;
  } else {
    if (arg1 < 0 && arg2 < 0) {
      res = true;
    } else {
      if (arg1 === 0 && arg2 === 0) {
        res = true;
      } else {
        res = false;
      }

    }
  }
  return res;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sameSign, 'function')
assert.strictEqual(sameSign.length, 2)
assert.notStrictEqual(sameSign, Math.sameSign)
assert.strictEqual(sameSign(-2, -1), true)
assert.strictEqual(sameSign(0, 0), true)
assert.strictEqual(sameSign(12, 3232), true)
assert.strictEqual(sameSign(1, -1), false)
assert.strictEqual(sameSign(-231, 1), false)
assert.strictEqual(sameSign(-231, 0), false)
assert.strictEqual(sameSign(0, 231), false)
assert.strictEqual(sameSign(231, -233), false)
// End of tests */
