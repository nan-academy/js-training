'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

 // Your code :
const capitalize = s => s[0].toUpperCase() + s.substring(1).toLowerCase();   // ou return s.charAt(0).toUpperCase() + s.slice(1);

/*
function capitalize(s){   
    return s[0].toUpperCase() + s.substring(1).toLowerCase();   // ou return s.charAt(0).toUpperCase() + s.slice(1);     
}
*/

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
