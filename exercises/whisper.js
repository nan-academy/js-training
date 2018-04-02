'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

const whisper = str => {
  if (str.length > 0) {
    return `*${str.toLowerCase()}*`
  }

  return ''
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('Hello'), '*hello*')
assert.strictEqual(whisper('hello'), '*hello*')
assert.strictEqual(whisper('HELLO'), '*hello*')
assert.strictEqual(whisper(''), '')
// End of tests */
