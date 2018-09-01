'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply(a, b) {
    let resultat = 0;
    if (a > 0 && b > 0)
        for (let i = 0; i < b; i++)
            resultat += a;
    else if (a < 0 && b > 0)
        for (let i = 0; i < b; i++)
            resultat += a;
    else if (a > 0 && b < 0)
        for (let i = 0; i > b; i--)
            resultat -= a;
    else
        for (let i = 0; i > b; i--)
            resultat -= a;
    return resultat;
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
