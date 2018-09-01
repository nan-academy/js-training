'use strict'

/*
 * Create an object named `circular` that has a property named `circular` with
 * itself as the value
 *
 * @notions Data-Structures, Get, Set
 */

// Your code :
let circular = new Object( this.circular = this );

/* ou
let circular = new Object();
circular.circular = circular;
*/

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof circular, 'object')
assert.strictEqual(circular.circular, circular)
assert.strictEqual(circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular.circular, circular)
// End of tests */
