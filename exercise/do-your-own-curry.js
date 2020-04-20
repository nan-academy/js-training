/*
## Do your own curry (function)

### Instructions

Create the function Curry that will curry any functions put as argument.

example:

const Mult2 = (el1,el2) => el1 * el2
console.log(Mult2(2,2)) // result epected 4


const Mult2Curried = Curry(Mult2)

console.log(Mult2Curried(2)(2)) // result expected 4 (same result,
with a function that has technically only one argument)

### Notions

-currying

https://stackoverflow.com/questions/36314/what-is-currying

*/

///*/ // ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

const Mult2 = (el1, el2) => el1 * el2
const Add3 = (el1, el2, el3) => el1 + el2 + el3
const Sub4 = (el1, el2, el3, el4) => el1 - el2 - el3 - el4

t(({ eq }) => eq(Curry(Mult2)(2)(5), 10))
t(({ eq }) => eq(Curry(Mult2)(3)(6), 18))
t(({ eq }) => eq(Curry(Mult2)(4)(7), 28))
t(({ eq }) => eq(Curry(Add3)(1)(2)(3), 6))
t(({ eq }) => eq(Curry(Add3)(4)(5)(11), 20))
t(({ eq }) => eq(Curry(Add3)(4)(7)(10), 21))
t(({ eq }) => eq(Curry(Sub4)(4)(7)(10)(30), -43))
t(({ eq }) => eq(Curry(Sub4)(5)(17)(-10)(3), -5))
t(({ eq }) => eq(Curry(Sub4)(3)(72)(-211)(99), 43))
t(({ eq }) => eq(Curry(Sub4)(5)(7)(10)(26), -38))

Object.freeze(tests)
