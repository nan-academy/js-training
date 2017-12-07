'use strict'

/*
 * Create a function `sentence` that takes an array of strings
 * and return a strings of all the element separated by spaces
 *
 * @next words
 */


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words([ 'a', 'b', 'c' ]), 'a b c')
assert.deepStrictEqual(words([ 'a', '1', 'c' ]), 'a 1 c')
assert.deepStrictEqual(words([ 'a', '1', 'c', 'd', 'e', 'f' ]), 'a 1 c d e f')
assert.deepStrictEqual(words([ 'wol.lol', 'lo,lol']), 'wol.lol lo,lol')
// End of tests */
