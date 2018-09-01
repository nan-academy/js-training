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
const min = (a,b) => (a > b) ? b : a;

/*
function min(a,b){
    if(a > b){
        return b;
    }else if(b > a){
        return a;
    }else{
        return egal
    }
}
*/


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
