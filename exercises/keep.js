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
function keepFirst(chaine) {
    return chaine.substring(0,2);
}

function keepLast(chaine) {
    return chaine.substr(chaine.length-2);
}




//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, "function")
assert.strictEqual(typeof keepLast, "function")
assert.strictEqual(keepFirst('bonjour'), 'bo')
assert.strictEqual(keepFirst('comment vas tu'), 'co')
assert.strictEqual(keepLast('STR'), 'TR')
assert.strictEqual(keepLast('zap zap'), 'ap')



// End of tests */
