/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
 */

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => typeof words === 'function')
t(() => words.length === 1)
t(({ eq }) => eq(words('a b c'), [ 'a', 'b', 'c' ]))
t(({ eq }) => eq(words('a 1 c'), [ 'a', '1', 'c' ]))
t(({ eq }) => eq(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ]))
t(({ eq }) => eq(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol']))
