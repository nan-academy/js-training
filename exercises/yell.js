'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Code 
function yell(string){
    return string.toUpperCase();
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('Au secour'), 'AU SECOUR')
// End of tests */
