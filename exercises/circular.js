'use strict'

/*
 * Create an object named `circular` that has a property named `circular` with
 * itself as the value
 *
 * @notions Data-Structures, Get, Set
 */

// Your code :

/* class Circular {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
}
var circular = new Circular("toto");
console.log(circular); */

/* const circular = { get circular() {return this}}; */
const circular = {};
circular.circular = circular;


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof circular, 'object')
assert.strictEqual(circular.circular, circular)
assert.strictEqual(circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular.circular, circular)
// End of tests
