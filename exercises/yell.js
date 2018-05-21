'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = str => str.toUpperCase();

//* Begin of tests
const assert = require('assert')
assert.strictEqual(yell('toto'), 'TOTO');
assert.strictEqual(yell('Ma Phrase'), 'MA PHRASE');
// End of tests */
