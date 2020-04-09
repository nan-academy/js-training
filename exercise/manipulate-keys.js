/*
## manipulate-Keys

### Instruction

Create 3 functions that works like the `.filter`, `.map` and `.reduce` array method but for the keys of an objects
- `filterKeys` filters the keys
- `mapKeys` changes the keys
- `reduceKeys` reducing each key of an object


### Notions

- https://devdocs.io/javascript/global_objects/array/filter
- https://devdocs.io/javascript/global_objects/array/map
- https://devdocs.io/javascript/global_objects/array/reduce

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const validate = ({ eq }, obj, ...a) =>
  Object.keys(obj).length == a.length &&
  a.every((prop) => obj.hasOwnProperty(prop)) &&
  a.every((prop) => eq(obj[prop], $1[prop.replace(/\w+_/, '')]))

// filter keys
t((_) =>
  validate(
    _,
    filterKeys($1, (k) => k.length <= 6),
    'jobs',
    'age'
  )
)
t((_) =>
  validate(
    _,
    filterKeys($1, (k) => /Name/.test(k)),
    'firstName',
    'lastName'
  )
)

t((_) =>
  validate(
    _,
    filterKeys($1, (k) => /firstName|jobs/.test(k)),
    'firstName',
    'jobs'
  )
)

// map keys
t((_) =>
  validate(
    _,
    mapKeys($1, (k) => `failed_${k}`),
    'failed_firstName',
    'failed_lastName',
    'failed_age',
    'failed_codingLng',
    'failed_jobs',
    'failed_computer'
  )
)
t((_) =>
  validate(
    _,
    mapKeys(
      filterKeys($1, (k) => k === 'jobs'),
      (k) => 'previous_jobs'
    ),
    'previous_jobs'
  )
)
t((_) =>
  validate(
    _,
    mapKeys(
      filterKeys($1, (k) => k.length >= 8),
      (k) => `version1_${k}`
    ),
    'version1_firstName',
    'version1_lastName',
    'version1_codingLng',
    'version1_computer'
  )
)

// reduce keys
t(({ eq }) =>
  eq(
    reduceKey($1, (acc, cr) => acc.concat(', ', cr)),
    'firstName, lastName, age, codingLng, jobs, computer'
  )
)
t(({ eq }) =>
  eq(
    reduceKey($1, (acc, cr) => (acc += (cr.length <= 4) ^ 1), 0),
    4
  )
)
t(({ eq }) =>
  eq(
    reduceKey($1, (acc, cr) => (acc += (cr.length <= 4) & 1), 0),
    2
  )
)

Object.freeze(tests)

const $1 = {
  firstName: 'Luis',
  lastName: 'Archibald',
  age: 36,
  codingLng: ['Prolog', 'SQL', 'Shell', 'C'],
  jobs: ['Amazon'],
  computer: {
    brand: 'HP',
    model: 'Elite Dragonfly',
    OS: 'Microsoft',
  },
}
