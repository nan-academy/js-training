/*
## Prime Chunk

### Instruction

Create a function called `primeChunk` that receives as parameters two numbers,
`a` and `b` and returns an array composed by every prime numbers between `a` and
`b` that are divided in several arrays with two elements each.

If it is not possible to put two elements in each array, the last one should be
the only one with different size.

Make also a function called primes that returns all the prime numbers between
`a` and `b`.

Example:
primeChunk(8, 30) = [[11, 13], [17, 19], [23, 29]]

### Notions

- Chunk

 */
///*/// ⚡

///*/// ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) =>
  eq(primeChunk(8, 30), [
    [11, 13],
    [17, 19],
    [23, 29],
  ])
)
t(({ eq }) =>
  eq(primeChunk(1, 47), [
    [2, 3],
    [5, 7],
    [11, 13],
    [17, 19],
    [23, 29],
    [31, 37],
    [41, 43],
    [47],
  ])
)
t(({ eq }) => eq(primeChunk(20, 30), [[23, 29]]))

t(({ eq }) =>
  eq(primeChunk(20, 30), [
    [2, 3],
    [5, 7],
    [11, 13],
    [17, 19],
    [23, 29],
    [31, 37],
    [41, 43],
    [47, 53],
    [59, 61],
    [67, 71],
    [73, 79],
    [83, 89],
    [97],
  ])
)



Object.freeze(tests)
