/*
## Keep Cut

### Instructions

Create a `keepFirst` function that takes a string as parameter
and return the string only keeping the 2 first characters.

Create a `keepLast` function that takes a string as parameter
and return the string only keeping the 2 last characters.

Create a `keepFirstLast` function that takes a string as parameter
and only keep 2 first characters and 2 last characters.

Create the `cutFirst` function that takes a string
and remove the 2 first characters.

Create the `cutLast` function that takes a string
and remove the 2 last characters.

Create the `cutFirstLast` function that takes a string as parameter
and remove the 2 first characters and 2 last characters.


### Notions

- https://devdocs.io/javascript/global_objects/array/slice

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => keepFirst('abcdef') === 'ab')
t(() => keepFirst('a') === 'a')

t(() => cutFirst('abcdef') === 'cdef')
t(() => cutFirst('a') === '')

t(() => keepLast('abcdef') === 'ef')
t(() => keepLast('a') === 'a')

t(() => cutLast('abcdef') === 'abcd')
t(() => cutLast('a') === '')

t(() => keepFirstLast('abcdef') === 'abef')
t(() => keepFirstLast('af') === 'af')
t(() => keepFirstLast('afd') === 'afd')
t(() => keepFirstLast('yoafdyo') === 'yoyo')

t(() => cutFirstLast('abcdef') === 'cd')
t(() => cutFirstLast('af') === '')
t(() => cutFirstLast('afd') === '')
t(() => cutFirstLast('yoafdyo') === 'afd')