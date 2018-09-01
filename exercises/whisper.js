'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code : 
const whisper = (s) => `*${s.toLowerCase()}*`;

/*
function whisper(s) {
    return '*' + s.toLowerCase() + '*';
}
*/


//* Begin of tests
const assert = require('assert')

//assert.fail('You must write your own tests')
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper('hHibo'), '*hhibo*');
// End of tests */
