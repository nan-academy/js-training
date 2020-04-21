/*
## replicate

### Instructions

Create a function called `replica` that allows you to copy the values of all properties from one or more
objects to a target object.

Attention with the shallow copies.

### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js


// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({ code }) => !code.includes('JSON'))

t(({ fail, eq }) => fail(() => eq($sorted, $a)))
t(() => $sorted !== $a)

t(({ fail, eq }) => fail(() => eq($sorted.obj.arr2, $a.obj.arr2)))

t(({ eq }) => eq(replica($f1, $f2, $f3), $f))
t(({ eq }) => eq(replica($f1, $f2, $f3).a, $f.a))
t(({ eq }) => eq(replica($f1, $f2, $f3).a.b, $f.a.b))
t(({ eq }) => eq(replica($f1, $f2, $f3).a.c, $f.a.c))
t(({ eq }) => eq(replica($f1, $f2, $f3).a.c.d.e, $f.a.c.d.e))

t(({ fail, eq }) => fail(() => eq($change, $f)))

Object.freeze(tests)

const $a = {
  arr: [23, 1, 34, 5, 5],
  obj: { something: 'hello', arr2: [1, 0] },
}
const $sorted = replica({}, $a)
$sorted.arr.sort()
$sorted.obj.arr2.sort()

const $f1 = { a: { b: 3 } }
const $f2 = { a: { b: 3, c: { d: { e: 'hello' } } } }
const $f3 = { a: { b: 4, c: { d: { e: 'xau' } } } }
const $f = { a: { b: 4, c: { d: { e: 'xau' } } } }
const $change = replica($f1, $f2, $f3)
$change.a.c.d.e = 'hello'
