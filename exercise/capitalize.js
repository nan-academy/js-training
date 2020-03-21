/*
## Capitalize

### Instructions

Create a `capitalize` function that takes a string
and transforms it to upper case only for the first letter,
and in lowercase for the rest of the string

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => capitalize('str') === 'Str')
t(() => capitalize('qsdqsdqsd') === 'Qsdqsdqsd')
t(() => capitalize('STR') === 'Str')
t(() => capitalize('zapZAP') === 'Zapzap')

Object.freeze(tests)
