import {tests} from "./its-a-match";

/**
 * ##Sums
 *
 * ###Instructions
 *
 * Create a function called `sums` that receives a number and returns its partitions.
 * A partition of a number is a group of numbers that its sum is equal to that number.
 *
 * Sums must ignore duplicates ([1,2] and [2,1] are duplicates).
 *
 * Example:
 * sums(4) = [[1, 3], [2, 2], [1, 1, 2], [1, 1, 1, 1]]
 *
 * ### Notions
 *
 * - Looping
 * - Recursive
 * */

///*/// ⚡

///*/// ⚡
//Test

export const tests = []
const t = f => tests.push(f)

t(({eq}) => eq(typeof sums, "function"))
t(({eq}) => eq(sums.length, 1))
t(({eq}) => eq(sums(4), [[1, 3], [2, 2], [1, 1, 2], [1, 1, 1, 1]]))
t(({eq}) => eq(sums(2), [[1, 1]]))
t(({eq}) => eq(sums(0), []))
t(({eq}) => eq(sums(7), [[1, 6], [2, 5], [3, 4], [1, 1, 5], [1, 2, 4], [1, 3, 3], [2, 2, 3], [1, 1, 1, 4], [1, 1, 2, 3], [1, 2, 2, 2], [1, 1, 1, 1, 3], [1, 1, 1, 2, 2], [1, 1, 1, 1, 1, 2], [1, 1, 1, 1, 1, 1, 1]]))
t(({eq}) => eq(sums(1), []))
t(({eq}) => eq(sums(10), [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5], [1, 1, 8], [1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 2, 6], [2, 3, 5], [1, 1, 1, 7], [1, 1, 2, 6], [1, 1, 3, 5], [1, 1, 4, 4], [1, 2, 2, 5], [1, 2, 3, 4], [1, 1, 1, 1, 6], [1, 1, 1, 2, 5], [1, 1, 1, 3, 4], [1, 1, 2, 2, 4], [1, 1, 2, 3, 3], [1, 1, 1, 1, 1, 5], [1, 1, 1, 1, 2, 4], [1, 1, 1, 1, 3, 3], [1, 1, 1, 2, 2, 3], [1, 1, 1, 1, 1, 1, 4], [1, 1, 1, 1, 1, 2, 3], [1, 1, 1, 1, 2, 2, 2], [1, 1, 1, 1, 1, 1, 1, 3], [1, 1, 1, 1, 1, 1, 2, 2], [1, 1, 1, 1, 1, 1, 1, 1, 2], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]))

Object.freeze(tests)
