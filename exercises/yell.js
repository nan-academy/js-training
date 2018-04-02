'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = str => str.toUpperCase()

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('hello'), 'HELLO')
assert.strictEqual(yell('Hello'), 'HELLO')
assert.strictEqual(yell('HELLO'), 'HELLO')
assert.strictEqual(yell(''), '')
// End of tests */
