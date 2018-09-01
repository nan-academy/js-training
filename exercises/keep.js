'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(s){
    return s.slice(0,2);
}

function keepLast(s) {
    return s.slice(-2);
}

function keepFirstLast(s) {
    return s.slice(0,2) + s.slice(-3);
}


//* Begin of tests
const assert = require('assert')

//assert.fail('You must write your own tests')
assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(keepFirst('azerty'), 'az');
assert.strictEqual(keepLast('azerty'), 'ty');
assert.strictEqual(keepFirstLast('uyff yogo'), 'uyogo');
// End of tests */
