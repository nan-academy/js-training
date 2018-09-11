'use strict'

/*
 * Create the `min` function that takes 2 number as arguments
 * and returns the lowest
 * You must not just use `Math.min`, make your own.
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 *
 * @notions Functions, Ternary
 */

// Your code :
function min(arg1, arg2) {
  let res;
  if (arg1 < arg2) {
    res = arg1;
  } else {
    if (arg2 < arg1) {
      res = arg2;
    } else {
      res = "equals";
    }
  }
  return res;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof min, 'function')
assert.strictEqual(min.length, 2)
assert.strictEqual(min.toString().includes('Math.min'), false)
assert.notStrictEqual(min, Math.min)
assert.strictEqual(min(0, -2), -2)
assert.strictEqual(min(-1, 10), -1)
assert.strictEqual(min(-13.2, -222), -222)
assert.strictEqual(min(132, 133), 132)
// End of tests */
