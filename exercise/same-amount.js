/*
## same-amount

### Instruction

Create a `sameAmount` function that takes three strings has parameter.

The objective is to confirm that the second and the third parameter occurred
 the same amount of times in the first parameter.

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = f => tests.push(f)
t(() => typeof sameAmount === 'function')
t(() => sameAmount.length === 3)

t(() => sameAmount('hello how are you', 'l', 'e'))
t(() => sameAmount('hello how are you', 'h', 'e'))
t(() => sameAmount('hello how are you', 'he', 'ho'))

let data =
  'qqqqqqq q qqqqqqqqqqqq q qq  qw w wq wqw  wqw  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd'
t(() => sameAmount(data, 'i', 'p'))
t(() => !sameAmount(data, 'h', 'w'))
t(() => sameAmount(data, 'qqqq ', 'qqqqqqq'))
t(() => !sameAmount(data, 'q ', 'qqqqqqq'))
t(() => sameAmount(data, 'fs', 'q '))
t(() => !sameAmount(data, 'fs', 'q'))
t(() => sameAmount(data, 'j', 'w'))

Object.freeze(tests)
