const Mult2 = (el1) => (el2) => el1 * el2
const Add3 = (el1) => (el2) => (el3) => el1 + el2 + el3
const Sub4 = (el1) => (el2) => (el3) => (el4) => el1 - el2 - el3 - el4

// const curry = (fn, ...args) =>
//   fn.length <= args.length
//     ? fn(...args)
//     : (...more) => curry(fn, ...args, ...more)

// console.log(curry((el1, el2) => el1 + el2, 1, 2, 3, 4))

// const volume = (l, w, h) => l * w * h
// const add = (el1, el2) => el1 + el2
// const sub = (el1, el2) => el1 - el2

// const curried = curry(volume)

// console.log(volume(2, 3, 4)) // 24
// console.log(curried(2)(3)(4)(5)(6))

// const addCurry = (el1) => (el2) => el1 + el2

// console.log(addCurry(3)(7))
// console.log(addCurry.length)
// console.log(volume.length)
