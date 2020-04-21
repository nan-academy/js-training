/*
## defaults

### Instructions

Create a function called defaultHttp that returns the object received.
But by default it will have the properties :
  - `http` as `403`
  - `age` as `0`
  - `connection` as `closed`

### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js


// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(defaultHttp({}), { http: 403, age: 0, connection: 'closed' }))
t(({ eq }) =>
  eq(defaultHttp({ connection: 'keep-alive', contentType: 'image/gif' }), $ct)
)
t(({ eq }) => eq(defaultHttp($session), $session))
t(({ eq }) =>
  eq(defaultHttp($change), { http: 200, age: 0, connection: 'keep-alive' })
)

Object.freeze(tests)

const $session = {
  http: 200,
  contentType: 'text/html',
  contentLength: 55743,
  connection: 'keep-alive',
  date: 'Thu, 06 Dec 2018 17:37:18 GMT',
  server: 'meinheld/0.6.1',
  age: 7,
}
const $change = { http: 200, connection: 'keep-alive' }
const $ct = {
  http: 403,
  age: 0,
  connection: 'keep-alive',
  contentType: 'image/gif',
}
