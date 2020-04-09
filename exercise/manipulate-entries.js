/*
## manipulate-Keys

### Instruction

Create 3 functions that works like the `.filter`, `.map` and `.reduce` array method but for entries of an objects
- `filterEntries` filters using both key and value
- `mapEntries` changes either the key or the value or both
- `reduceEntries` reducing each entries of an object


### Notions

- https://devdocs.io/javascript/global_objects/array/filter
- https://devdocs.io/javascript/global_objects/array/map
- https://devdocs.io/javascript/global_objects/array/reduce

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// filter entries
t(({ eq }) =>
  eq(
    filterEntries($3, ([k, v]) => k == 'lastName' || v == 'Sonia'),
    { firstName: 'Sonia', lastName: 'Silva' }
  )
)
t(({ eq }) =>
  eq(
    filterEntries($3, ([k, v]) => /age/.test(k) || /C/g.test(v)),
    { age: 20, codingLng: ['Assembly', 'C'] }
  )
)

// map entries
t(({ eq }) =>
  eq(
    mapEntries({ a: 'b', b: 'c', c: 'a' }, ([k, v]) => [
      `prefix_${k}`,
      `prefix_${v}`,
    ]),
    { prefix_a: 'prefix_b', prefix_b: 'prefix_c', prefix_c: 'prefix_a' }
  )
)
t(({ eq }) =>
  eq(
    mapEntries(
      filterEntries($3, ([k, v]) => typeof v == 'string'),
      ([k, v]) => [`prefix_${k}`, `prefix_${v}`]
    ),
    { prefix_firstName: 'prefix_Sonia', prefix_lastName: 'prefix_Silva' }
  )
)

// reduce entries
t(({ eq }) =>
  eq(
    reduceEntries($1, (acc, cr) => (acc += Math.max(...cr[1]) / 3), 0),
    12.333333333333332
  )
)
t(({ eq }) =>
  eq(
    reduceEntries($2, (acc, cr) => acc.push(Math.round(cr[1])) && acc, []),
    [1, 1, 34]
  )
)

Object.freeze(tests)

const $1 = { a: [1, 2, 3], b: [22], c: [12, 2] }
const $2 = { a: 1.23, b: 0.92, c: 33.999 }
const $3 = {
  firstName: 'Sonia',
  lastName: 'Silva',
  age: 20,
  codingLng: ['Assembly', 'C'],
  jobs: ['IBM', 'cisco'],
  computer: {
    brand: 'Lenovo',
    model: 'ThinkPad X390',
    OS: 'Linux',
  },
}
