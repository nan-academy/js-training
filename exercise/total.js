/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => typeof total === 'function')
t(() => total.length === 1)
t(() => total([ 1, 1, 1]) === 3)
t(() => total([ 10, 10, 10]) === 30)
t(() => total([ 24, -10, 10, 0, 0, 100 ]) === 124)
