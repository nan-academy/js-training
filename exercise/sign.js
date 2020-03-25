/*
## Sign

### Instructions

Create the `sign` function that takes one number argument
and return 1 if the number is positive, -1 if the number is negative
and 0 if the number is exactly 0
You must not just use `Math.sign`, make your own.

Create the `sameSign` function that takes 2 numbers as arguments and check
if they both have the same sign


### Notions

- Functions
- If-Else
- devdocs.io/javascript/global_objects/math/sign

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => typeof sign === 'function')
t(() => !sign.toString().includes('Math.sign'))
t(() => sign.length === 1)
t(() => sign !== Math.sign)
t(() => sign(-2) === -1)
t(() => sign(10) === 1)
t(() => sign(0) === 0)
t(() => sign(132) === 1)

t(() => typeof sameSign === 'function')
t(() => sameSign.length === 2)
t(() => sameSign(-2, -1))
t(() => sameSign(0, 0))
t(() => sameSign(12, 3232))
t(() => !sameSign(1, -1))
t(() => !sameSign(-231, 1))
t(() => !sameSign(-231, 0))
t(() => !sameSign(0, 231))
t(() => !sameSign(231, -233))

Object.freeze(tests)
