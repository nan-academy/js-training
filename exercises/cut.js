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
// Code
function cutFirst(string){
    let res = string.slice(2); 
    return res;
}
function cutLast(string){
    return string.slice(0,-2); 
}
function cutFirstLast(string){
    let res = string.slice(2);
    return res.slice(0,-2); 
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(cutFirst("Canard"),"nard" )
assert.strictEqual(cutLast("Canard"),"Cana" )
assert.strictEqual(cutFirstLast("Canard"),"na" )
// End of tests */
