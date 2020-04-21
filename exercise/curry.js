/*
## Curry

### Instruction

Create a function `curry` that receives as parameters a string and a
function.

This function will call the function in parameter with the string inside the parameter of
the function called.

Create two functions which can only take one argument each.
Those functions will be passed in the `curry` function:

- toUpper (Only one arg) :

A function that turns every letter of a matching pattern in the received string into an upper
case.

- addSpace (Only one arg):

A function that adds a space after every instance of a string matching the received
string.

### Notions

https://stackoverflow.com/questions/36314/what-is-currying

 */
///*/// ⚡

///*/// ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => toUpper.length === 1)
t(() => addSpace.length === 1)

t(() => 'EntErtainmEnt' === curry('e', toUpper('entertainment')))
t(() => 'e nte rtainme nt' === curry('e', addSpace('entertainment')))

t(() => 'example string' === curry('o', toUpper('example string')))
t(() => 'example string' === curry('o', addSpace('example string')))

t(() => 'agAIn and agAIn' === curry('ai', toUpper('again and again')))
t(() => 'agai n and agai n' === curry('ai', addSpace('again and again')))

let randLet = String.fromCharCode(97 + Math.floor(Math.random() * 26))
let re = new RegExp(randLet, 'g')

t(
  () =>
    'The quick brown fox jumps over the lazy dog'.replace(
      re,
      randLet.toUpperCase()
    ) === curry(randLet, toUpper('The quick brown fox jumps over the lazy dog'))
)

Object.freeze(tests)
