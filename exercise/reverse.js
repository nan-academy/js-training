/*
## Reverse

### Instructions

Create a `reverse` function that works on both arrays and strings.

Like `[].reverse()` but working also for strings (without using the actual method)

### Notions

- https://devdocs.io/javascript/global_objects/array/reverse

*/

Array.prototype.reverse = undefined

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t((_, ctx) => ctx.rn = Math.random())
t(({ eq }) => eq(reverse([1, 2, 3]), [3, 2, 1])
t(({ eq }, { rn }) => eq(reverse([1, eq, 3, rn]), [rn, 3, eq, 1])
t(({ eq }) => eq(reverse('pouet'), 'teuop')
t(({ eq }) => eq(reverse("salut c'est cool"), "looc tse'c tulas")

Object.freeze(tests)

