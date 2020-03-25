/*
## Chunk

### Instruction

Create the `chunk` function that returns an array of elements
split into groups the length of the given size.

If array can't be split evenly,
the final chunk will be the remaining elements.

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// prettier-ignore
t(({ eq }) => eq(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]))
t(({ eq }) => eq(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]))

Object.freeze(tests)
