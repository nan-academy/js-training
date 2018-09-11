'use strict'

/*
 * Create a constant variable named `arr` that is an array containing the values 4 and '2'
 *
 * @notions Data-Structures
 */

// Your code :
const arr = [4, '2']
//* Begin of tests
const assert = require('assert')

assert.strictEqual(Array.isArray(arr), true)
assert.strictEqual(arr[0], 4)
assert.strictEqual(arr[1], '2')
assert.strictEqual(arr.length, 2)
// End of tests */
