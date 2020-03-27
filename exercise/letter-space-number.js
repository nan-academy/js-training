/*
## Letter Space Number

### Instruction

Make a function called `letterSpaceNumber` that receives a string and returns an array with every instance of a letter, followed by a space, followed by a number only if that number has only one digit.

### Notions

- https://www.regular-expressions.info/shorthand.html

// /*/ // ⚡



// /*/ // ⚡

export const tests = []
const t = f => tests.push(f)

t(({eq}) => eq(typeof letterSpaceNumber, "function")
t(({eq}) => eq(letterSpaceNumber.length, 1))
t(({eq}) =>
  eq(letterSpaceNumber('He is 8 or 9 years old, not 10.'), ['s 8', 'r 9'])
)
t(({eq}) => eq(letterSpaceNumber("I like 7up."), []))
t(({eq}) => eq(letterSpaceNumber("Definitely 9."), ["y 9"]))

Object.freeze(tests)
