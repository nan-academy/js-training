'use strict'

/*
 * Create a get function that takes a key and return the corresponding value
 * in the sourceObject
 */

const sourceObject = {
  num: 42,
  str: 'some text',
  bool: true,
  log: console.log,
}

// Your code

// examples of tests :
const assert = require('assert')

assert.strictEqual(get('num'), 42)
assert.strictEqual(get('bool'), true)
assert.strictEqual(get('str'), 'some text')
assert.strictEqual(get('log'), console.log)
assert.strictEqual(get('noexist'), undefined)
