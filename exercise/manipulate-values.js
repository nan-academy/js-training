/*
## manipulate-values

### Instruction

Create 3 functions that works like the `.filter`, `.map` and `.reduce` array method but for the values of an objects
- `filterValues` filters the values
- `mapValues` changes the values
- `reduceValues` reducing each value


### Notions

- https://devdocs.io/javascript/global_objects/array/filter
- https://devdocs.io/javascript/global_objects/array/map
- https://devdocs.io/javascript/global_objects/array/reduce

*/

const object = {
  firstName: 'Cassie',
  lastName: 'Hayes',
  age: 23,
  codingLng: ['Prolog', 'C++', 'Assembly', 'JS', 'Shell', 'C', 'Go'],
  jobs: ['Uni-Partner', 'M-ITI'],
  computer: {
    brand: 'DELL',
    model: 'XPS 13',
    OS: 'Linux',
  },
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const isString = (v) => typeof v === 'string'
const isArray = (v) => Array.isArray(v)
const isObj = (v) => v && (v.constructor === Object || !v.constructor)

const validate = ({ eq }, obj, ...a) =>
  Object.keys(obj).length == a.length &&
  a.every((prop) => obj.hasOwnProperty(prop)) &&
  a.every((prop) => eq(obj[prop], object[prop.replace(/\w+_/, '')]))

// filter values
t((_) =>
  validate(
    _,
    filterValues(object, (v) => isString(v)),
    'firstName',
    'lastName'
  )
)
t((_) =>
  validate(
    _,
    filterValues(object, (v) => isArray(v)),
    'codingLng',
    'jobs'
  )
)
t((_) =>
  validate(
    _,
    filterValues(object, (v) => /a/.test(v)),
    'firstName',
    'lastName',
    'jobs'
  )
)

// map value
t(({ eq }) =>
  eq(
    mapValues(object, (ele) => (isString(ele) ? `category_2_${ele}` : ele)),
    $1
  )
)
t(({ eq }) =>
  eq(
    mapValues(object, (ele) =>
      isObj(ele) ? mapValues(ele, (v) => `ASPEC_${v}`) : ele
    ),
    $2
  )
)

// reduce value
t(({ eq }) =>
  eq(
    reduceValues(object, (acc, cr) =>
      isString(cr) ? acc.concat(', ', cr) : acc
    ),
    'Cassie, Hayes'
  )
)
t(() => reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr) === 6)
t(() => reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3) === 9)

Object.freeze(tests)

const $1 = { ...object }
const $2 = { ...object }
$1.firstName = 'category_2_Cassie'
$1.lastName = 'category_2_Hayes'
$2.computer = { brand: 'ASPEC_DELL', model: 'ASPEC_XPS 13', OS: 'ASPEC_Linux' }
