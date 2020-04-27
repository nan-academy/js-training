/*
## fusion

### Instructions

The objective of this exercise is to merge objects depending on the values type

Create a function `fusion` that will merge two objects:
- If the type is an array you must append it
- If it is a string you must concatenate with a space
- If it is numbers you must added them
- If it is objects you must merge them
- In case of other types you must replace it

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

// testing strings, arrays, objects and numbers
t(({ eq }) =>
  eq(
    fusion(
      {
        str: 'hello',
        array: [1, 3, 5, 7],
        object: { a: 'b', b: 'a' },
        nbr: 2,
        nbr1: 34,
      },
      {
        str: 'world',
        array: [2, 4, 6],
        object: { a: 'a', b: 'a', c: 33 },
        nbr: 1,
        nbr1: 3,
      }
    ),
    {
      str: 'hello world',
      array: [1, 3, 5, 7, 2, 4, 6],
      object: { a: 'a', b: 'a', c: 33 },
      nbr: 3,
      nbr1: 37,
    }
  )
)

// testing if a property doesn't exist
t(({ eq }) =>
  eq(
    fusion(
      {
        array: [1, 3, 5, 7],
        nbr: 2,
        nbr1: 34,
      },
      {
        nbr: 1,
      }
    ),
    {
      array: [1, 3, 5, 7],
      nbr: 3,
      nbr1: 34,
    }
  )
)

// testing objects merging
t(({ eq }) =>
  eq(
    fusion(
      {
        obj: { a: 'a', b: 'b' },
        obj1: { a: 123 },
        obj2: { a: 'b', b: 'a' },
        nbr: 2,
      },
      {
        obj: { a: 'b', b: 'a' },
        obj2: { a: 'string' },
        nbr1: 3,
      }
    ),
    {
      obj: { a: 'b', b: 'a' },
      obj1: { a: 123 },
      obj2: { a: 'string', b: 'a' },
      nbr: 2,
      nbr1: 3,
    }
  )
)

// testing arrays
t(({ eq }) =>
  eq(
    fusion(
      {
        arr: [1, '2'],
        arr1: [],
        arr2: [1, 2, 3, 4],
      },
      {
        arr: [2],
        arr1: [123, 321],
      }
    ),
    {
      arr: [1, '2', 2],
      arr1: [123, 321],
      arr2: [1, 2, 3, 4],
    }
  )
)

// testing other types
t(({ eq }) =>
  eq(
    fusion(
      { data: new Date('December 17, 1995 03:24:00'), reg: /\w/, a: 1 },
      { a: 1 }
    ),
    {
      data: new Date('December 17, 1995 03:24:00'),
      reg: /\w/,
      a: 2,
    }
  )
)

Object.freeze(tests)
