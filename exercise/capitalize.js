/*
## Capitalize

### Instructions

Create a `capitalize` function that takes a string
and transforms it to upper case only for the first letter,
and in lowercase for the rest of the string

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(capitalize('str'), 'Str'))
t(({ eq }) => eq(capitalize('qsdqsdqsd'), 'Qsdqsdqsd'))
t(({ eq }) => eq(capitalize('STR'), 'Str'))
t(({ eq }) => eq(capitalize('zapZAP'), 'Zapzap'))
t(({ eq }) => eq(capitalize('zap ZAP'), 'Zap zap'))

Object.freeze(tests)
