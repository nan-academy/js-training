/*
## curry-string

### Instruction

Create two functions which can only take one argument each.
Those functions will be passed in the `modString` function:

- toUpper (Only one arg):

A function that turns every letter of a matching pattern in the received string into an upper
case.

- addSpace (Only one arg):

A function that adds a space after every instance of a string matching the received
string.

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq('EntErtainmEnt', toUpper('e')('entertainment')))
t(({ eq }) => eq('e nte rtainme nt', addSpace('e')('entertainment')))

t(({ eq }) => eq('example string', toUpper('o')('example string')))
t(({ eq }) => eq('example string', addSpace('o')('example string')))

t(({ eq }) => eq('agAIn and agAIn', toUpper('ai')('again and again')))
t(({ eq }) => eq('agai n and agai n', addSpace('ai')('again and again')))
t(({ eq }) =>
  eq(
    'The quick brown fox jumps over THE lazy dog',
    toUpper('the')('The quick brown fox jumps over the lazy dog')
  )
)
Object.freeze(tests)
