'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper = (str) => str.toLowerCase();


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof(whisper), 'function');
assert.strictEqual(whisper('MA CHAINE'), 'ma chaine');
assert.strictEqual(whisper('Ma ChAinE'), 'ma chaine');
assert.strictEqual(whisper('ma chaine'), 'ma chaine');
// End of tests */
