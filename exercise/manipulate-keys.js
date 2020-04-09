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

*/

const object = {
  firstName: 'Luis',
  lastName: 'Archibald',
  age: 36,
  codingLng: ['Prolog', 'SQL', 'Shell', 'C'],
  jobs: ['Amazon'],
  record: function () {
    return `${this.lastName} ${this.firstName}, age ${this.age}`
  },
  computer: {
    brand: 'HP',
    model: 'Elite Dragonfly',
    OS: 'Microsoft',
  },
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const validate = ({ eq }, obj, ...a) =>
  Object.keys(obj).length == a.length &&
  a.every((prop) => obj.hasOwnProperty(prop)) &&
  a.every((prop) =>
    eq(obj[prop], object[prop.replace(/\w+[^\nA-Za-z0-9]/g, '')])
  )

// filter keys
t((_) =>
  validate(
    _,
    filterKeys(object, (k) => k.length <= 6),
    'jobs',
    'age',
    'record'
  )
)
t((_) =>
  validate(
    _,
    filterKeys(object, (k) => /Name/.test(k)),
    'firstName',
    'lastName'
  )
)

t((_) =>
  validate(
    _,
    filterKeys(object, (k) => /firstName|jobs/.test(k)),
    'firstName',
    'jobs'
  )
)

// map keys
t((_) =>
  validate(
    _,
    mapKeys(object, (k) => `failed_${k}`),
    'failed_firstName',
    'failed_lastName',
    'failed_age',
    'failed_codingLng',
    'failed_jobs',
    'failed_record',
    'failed_computer'
  )
)
t((_) =>
  validate(
    _,
    mapKeys(
      filterKeys(object, (k) => k === 'jobs'),
      (k) => 'previous_jobs'
    ),
    'previous_jobs'
  )
)
t((_) =>
  validate(
    _,
    mapKeys(
      filterKeys(object, (k) => k.length >= 8),
      (k) => `v.a_${k}`
    ),
    'v.a_firstName',
    'v.a_lastName',
    'v.a_codingLng',
    'v.a_computer'
  )
)

// reduce keys
t(({ eq }) =>
  eq(
    reduceKey(object, (acc, cr) => acc.concat(', ', cr)),
    'firstName, lastName, age, codingLng, jobs, record, computer'
  )
)
t(({ eq }) =>
  eq(
    reduceKey(object, (acc, cr) => (acc += (cr.length <= 4) ^ 1), 0),
    5
  )
)
t(({ eq }) =>
  eq(
    reduceKey(object, (acc, cr) => (acc += (cr.length <= 4) & 1), 0),
    2
  )
)

Object.freeze(tests)
