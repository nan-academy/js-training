/*
## Curry 2

### Instructions

create the following functions with the "currying" process:

-Mult2 that mutiplies two numbers.
-Add3 that adds three numbers.
-Sub4 that substract four numbers.

Please note that those functions can only have one argument each.

### Notions

-currying

https://stackoverflow.com/questions/36314/what-is-currying

*/

///*/ // ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

t(() => Mult2.length === 1)
t(() => Add3.length === 1)
t(() => Sub4.length === 1)

t(({ eq }) => eq(Mult2(2)(5), 10))
t(({ eq }) => eq(Mult2(3)(6), 18))
t(({ eq }) => eq(Mult2(4)(7), 28))
t(({ eq }) => eq(Add3(1)(2)(3), 6))
t(({ eq }) => eq(Add3(4)(5)(11), 20))
t(({ eq }) => eq(Add3(4)(7)(10), 21))
t(({ eq }) => eq(Sub4(4)(7)(10)(30), -43))
t(({ eq }) => eq(Sub4(5)(17)(-10)(3), -5))
t(({ eq }) => eq(Sub4(3)(72)(-211)(99), 43))
t(({ eq }) => eq(Sub4(5)(7)(10)(26), -38))

Object.freeze(tests)
