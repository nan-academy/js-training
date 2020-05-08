/*
## Curry Easy

### Instructions

create the following functions with the "currying" process:

- mult2 that mutiplies two numbers.
- add3 that adds three numbers.
- sub4 that substract four numbers.

Please note that those functions can only have one argument each.

### Notions

- https://stackoverflow.com/questions/36314/what-is-currying

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(() => mult2.length === 1)
t(() => add3.length === 1)
t(() => sub4.length === 1)

t(({ eq }) => eq(mult2(2)(5), 10))
t(({ eq }) => eq(mult2(3)(6), 18))
t(({ eq }) => eq(mult2(4)(7), 28))
t(({ eq }) => eq(add3(1)(2)(3), 6))
t(({ eq }) => eq(add3(4)(5)(11), 20))
t(({ eq }) => eq(add3(4)(7)(10), 21))
t(({ eq }) => eq(sub4(4)(7)(10)(30), -43))
t(({ eq }) => eq(sub4(5)(17)(-10)(3), -5))
t(({ eq }) => eq(sub4(3)(72)(-211)(99), 43))
t(({ eq }) => eq(sub4(5)(7)(10)(26), -38))

Object.freeze(tests)