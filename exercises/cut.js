'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code :
function cutFirst(a){
    return a.slice(2);
}

function cutLast (a){
    return a.slice(0,-2);
}

function cutFirstLast(a){
    return a.slice(2,-2);
}


//* Begin of tests
const assert = require('assert')

//assert.fail('You must write your own tests')
assert.strictEqual(typeof cutFirst, 'function', 'Should be a function')
assert.strictEqual(typeof cutLast, 'function', 'Should be a function')
assert.strictEqual(typeof cutFirstLast, 'function', 'Should be a function')
assert.strictEqual(cutFirst.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutLast.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutFirstLast.length, 1, 'Should takes 1 arguments')
assert.strictEqual(cutFirst('tatouti'), 'touti')
assert.strictEqual(cutLast('tatouti'), 'tatou')
assert.strictEqual(cutFirstLast('tatouti'), 'tou')
// End of tests */


