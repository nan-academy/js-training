/*
## fusion

### Instructions

The objective of this exercise is to merge objects into a new object depending on the values type

With this create a function called `fusion` that:
- If the type is an array you must concat it
- If it is a string you must concatenate with a space
- If it is numbers you must added them
- If it is an object you must use recursion
- In case of other types you must replace it with the second object

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

// simple numbers
t(({ eq }) => eq(fusion({ nbr: 12 }, { nbr: 23 }).nbr, 35))

// multiply numbers
t(({ eq }) =>
  eq(fusion({ a: 12, b: 2, c: 43 }, { a: 23, b: 2 }), { a: 35, b: 4, c: 43 })
)

// simple string
t(({ eq }) => eq(fusion({ str: 'hello' }, { str: 'there' }).str, 'hello there'))

// multiple strings
t(({ eq }) =>
  eq(fusion({ a: 'A', b: 'B', c: 'C' }, { a: 'B', b: 'C' }), {
    a: 'A B',
    b: 'B C',
    c: 'C',
  })
)

// simple arrays
t(({ eq }) => eq(fusion({ arr: [1, '2'] }, { arr: [2] }).arr, [1, '2', 2]))

// multiple arrays
t(({ eq }) =>
  eq(
    fusion(
      { arr: [], arr1: [1] },
      { arr: [12, 3], arr1: [2, 3], arr2: ['2', '1'] }
    ),
    { arr: [12, 3], arr1: [1, 2, 3], arr2: ['2', '1'] }
  )
)

// deep nested objects
t(({ eq }) =>
  eq(
    fusion(
      { a: { b: [1, 2], c: { d: 2 } } },
      { a: { b: [0, 2, 1], c: { d: 23 } } }
    ),
    { a: { b: [1, 2, 0, 2, 1], c: { d: 25 } } }
  )
)

// object mutability
t(({ eq }) =>
  eq(
    fusion(Object.freeze({ a: { b: 1 } }), Object.freeze({ a: { b: 2 } })).a.b,
    3
  )
)

// other types
t(({ eq }) =>
  eq(
    fusion(
      { data: new Date('December 17, 1995 03:24:00') },
      { data: new Date('April 12, 2999 03:24:00') }
    ).data,
    new Date('April 12, 2999 03:24:00')
  )
)
t(({ eq }) => eq(fusion({ reg: /\w/ }, { reg: /\S/ }).reg, /\S/))

Object.freeze(tests)
