'use strict'

/*
 * Create an object `circular` that has a property named `cicrcular` with
 * itself as the value
 *
 * @notions Data-Structures, Get, Set
 * @next get-length
 */

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof circular, 'object')
assert.strictEqual(circular.circular, circular)
assert.strictEqual(circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular.circular, circular)
// End of tests */
