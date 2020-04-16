/*
## Curry

### Instruction

Create a function `curry` that receives as parameters a string `repl` and a
function `f`.

Also create two functions with one argument each that will be used in the
`curry` function:
- toUpper : turns every instance of a string in the received string into upper
case.
- addSpace : adds a space after every instance of a string in the received
string.

 */
///*/// ⚡

///*/// ⚡
export const tests = []
const t = (f) => tests.push(f)

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
