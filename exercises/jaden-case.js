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
const jadenCase = str => str.split(' ').map(word => word[0].toUpperCase() + word.toLowerCase().slice(1)).join(' ');


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('zAp zAP !!!'), 'Zap Zap !!!')
// End of tests */
