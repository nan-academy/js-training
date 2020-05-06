/*
## Curry

### Instruction

Create a function `modString` that receives as parameters a string and a
function.

`modString` will call the function in parameter with the string inside the parameter of
the function called.

Create two functions which can only take one argument each.
Those functions will be passed in the `modString` function:

- toUpper (Only one arg) :

A function that turns every letter of a matching pattern in the received string into an upper
case.

- addSpace (Only one arg):

A function that adds a space after every instance of a string matching the received
string.

### Notions

- Curry

 */
// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(toUpper.length, 1))
t(({ eq }) => eq(addSpace.length, 1))

t(({ eq }) => eq('EntErtainmEnt', modString('e', toUpper('entertainment'))))
t(({ eq }) => eq('e nte rtainme nt', modString('e', addSpace('entertainment'))))

t(({ eq }) => eq('example string', modString('o', toUpper('example string'))))
t(({ eq }) => eq('example string', modString('o', addSpace('example string'))))

t(({ eq }) =>
  eq('agAIn and agAIn', modString('ai', toUpper('again and again')))
)
t(({ eq }) =>
  eq('agai n and agai n', modString('ai', addSpace('again and again')))
)
t(({ eq }) =>
  eq(
    'The quick brown fox jumps over THE lazy dog',
    modString('the', toUpper('The quick brown fox jumps over the lazy dog'))
  )
)

Object.freeze(tests)
