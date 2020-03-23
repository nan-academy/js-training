/*
## Is Positive

### Instructions

Create a `isPositive` function that takes a number as
parameter and return true if the given number is
stricly positive, or false otherwise

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => isPositive(3))
t(() => isPositive(1998790))
t(() => !isPositive(-1))
t(() => !isPositive(-0.7))
t(() => !isPositive(-787823))
t(() => !isPositive(0))

Object.freeze(tests)
