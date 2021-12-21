'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
// Your code :
function jadenCase(chaine) {
    var tableau = chaine.split(" ");
    for ( var i = 0; i < tableau.length; i++ )
    {
        var j = tableau[i].charAt(0).toUpperCase();
        tableau[i] = j + tableau[i].substr(1).toLowerCase();
    }
    return tableau.join(" ");
   
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('bonjour'), 'Bonjour')
assert.strictEqual(jadenCase('comment vas tu'), 'Comment Vas Tu')
assert.strictEqual(jadenCase('STR'), 'Str')
assert.strictEqual(jadenCase('zap zap'), 'Zap Zap')



// End of tests */
