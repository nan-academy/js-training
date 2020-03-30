/*
## same-amount

### Instruction

Create a `sameAmount` function that takes three strings as parameter.

The objective is to confirm that the second and the third parameter occurred
 the same amount of times in the first parameter.


### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_regular_expressions_in_JavaScript

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = f => tests.push(f)

t(() => sameAmount('hello how are you', /l/, /e/))
t(() => sameAmount('hello how are you', /h/, /e/))
t(() => sameAmount('hello how are you', /he/, /ho/))

t(() => sameAmount(data, /i/, /p/))
t(() => !sameAmount(data, /h/, /w/))
t(() => sameAmount(data, /qqqq /, /qqqqqqq/))
t(() => !sameAmount(data, /q /, /qqqqqqq/))
t(() => sameAmount(data, /fs[^q]/, /q /))
t(() => sameAmount(data, /^[qs]/, /^[gq]/))
t(() => sameAmount(data, /j/, /w/))
t(() => !sameAmount(data, /j/, / /))
t(() => sameAmount(data, /fs./, /jn./))

Object.freeze(tests)

const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
