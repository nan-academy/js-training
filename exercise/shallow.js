/*
## shallow

### Instructions

Create a function called `shallow` that allows you to copy the values of all properties from one or more
objects to a target object.

### Notions

- https://devdocs.io/javascript/global_objects/object/assign


// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(shallow({}, $a), $a))
t(() => shallow({}, $a) !== $a)

t(({ eq }) => eq(shallow($b1, $b2, $b3), $b))
t(() => shallow($b1, $b2, $b3) !== $b)

t(({ eq }) => eq(shallow($config, { port: 1289 }).port, 1289))
t(({ eq }) => eq(shallow($config, { port: 8080 }), $config))
t(({ eq }) => eq(shallow($config, { ip: '127.0.0.1' }, { user: 'Josh' }), $c))
t(() => shallow($config, { ip: '127.0.0.1' }, { user: 'Josh' }) !== $c)

t(() => shallow($config, { user: 'mat' }) === $config)

Object.freeze(tests)

const $a = { a: 1, b: 2 }
const $b = { name: 'abraham', age: 30, date: '2021/08/06' }
const $b1 = { name: 'abraham', age: 23, date: '2002/01/05' }
const $b2 = { age: 30, date: '1762/01/05' }
const $b3 = { date: '2021/08/06' }
const $config = {
  user: 'user',
  pass: 'pass',
  server: 'HP/MSSQLSERVER',
  database: 'company',
  port: 8000,
}
const $c = { ...$config }
$c.user = 'Josh'
$c.ip = '127.0.0.1'
$c.port = 8080
