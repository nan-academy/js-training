/*
## Arr

### Instructions

Create a constant variable named `arr` that is an array
containing the values 4 and '2'


### Notions

 - Data-Structures

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => Array.isArray(arr)) // arr is declared and is an array
t(({ eq }) => eq(arr[0], 4)) // arr first element is 4
t(({ eq }) => eq(arr[1], '2')) // arr second element is "2"
t(({ eq }) => eq(arr.length, 2)) // arr length is 2

Object.freeze(tests)
