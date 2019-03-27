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
//code
function cutFirst(string){ 
    return string.slice(0, 2);
}
function cutLast(string){
    return string.slice(-2); 
}
function cutFirstLast(string){
    return string.slice(2, 4);
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(cutFirst("Canard"),"Ca" )
assert.strictEqual(cutLast("Canard"),"rd" )
assert.strictEqual(cutFirstLast("Canard"),"na" )
// End of tests */
