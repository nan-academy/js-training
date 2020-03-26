/*
## Ions Out

### Instruction

Make a function that receives a string and returns an array with every word containing 'ion' following a t, without the 'ion'.

You have to use the positive lookahead, (?=).

 */
///*/// ⚡



///*/// ⚡

export const tests = []
const t = f => tests.push(f)

console.log(typeof inOut === 'function')
console.log(inOut.length === 1)
t(({ code }) => code.includes('?='))
t(({eq}) => eq(inOut("attention, direction"), ['attent', 'direct']))
t(({eq}) => eq(inOut("promotion, provision"),['promot']))
t(({ eq }) => eq(inOut(" 1st position is the vision of the 2nd position"),['posit', 'posit']))


Object.freeze(tests)
