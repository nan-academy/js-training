'use strict'

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */

//Code
function total(array){
    let result = 0;
    for(let i=0;i<array.length;i++){
        result += array[i]
    }
    return result;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
