/*
 * Create a `sentence` function that takes an array of strings
 * and return a string of all the element separated by a space
 *
 */


///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => sentence([ 'a', 'b', 'c' ]) === 'a b c')
t(() => sentence([ 'a', '1', 'c' ]) === 'a 1 c')
t(() => sentence([ 'a', '1', 'c', 'd', 'e', 'f' ]) === 'a 1 c d e f')
t(() => sentence([ 'wol.lol', 'lo,lol']) === 'wol.lol lo,lol')
// End of tests */
