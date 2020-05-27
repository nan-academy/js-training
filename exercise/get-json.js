/*
## Get JSON

### Instructions

In this exercise, we will focus on building complexe async flows with promises.

Create a `getJSON` function that takes 2 parameters:
- `path`, that will be the url called by your function
- `params` *optional*, that will be the search parameters appended to your url

`getJSON` must construct a valid url with the `path` and stringified `params`
and call `fetch` with it.
If the response is not ok, your function must throw an error using
the response status message.

The response body must then be read and parsed from json.

The parsed object contains one of those 2 properties:
- `"data"` the actual data to return
- `"error"` the error message to throw


### Notions

- https://nan-academy.github.io/js-training/examples/promise.js
- https://devdocs.io/dom/fetch_api/using_fetch
- https://devdocs.io/dom/urlsearchparams
- https://devdocs.io/javascript/global_objects/json

// /*/ // ⚡


// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)
const fakeFetch = async ({ data, error, ...opts } = {}) => ({
  ok: !opts.status,
  type: 'basic',
  status: 200,
  statusText: 'OK',
  json: async () => ({ data, error }),
  text: async () => JSON.stringify({ data, error }),
  ...opts,
})

// check url parsing
t(async ({ eq, ctx }) => {
  let url
  fetch = async (arg) => fakeFetch({ url: (url = arg) })
  const pending = getJSON('/test', { query: 'hello world', b: 5 })
  return eq(url, '/test?query=hello%20world&b=5')
})

// check that it return the given value
t(async ({ eq, ctx }) => {
  const data = Math.random()
  fetch = (url) => fakeFetch({ url, data })
  return eq(await getJSON('/', { q: 1 }), data)
})

// check that it throw an error with the correct message
t(async ({ eq, ctx }) => {
  const error = `oops: ${Math.random()}`
  fetch = (url) => fakeFetch({ url, error })

  return eq(
    await getJSON('/', { q: 1 }).then(
      () => Promise.reject(Error('Should fail')),
      (err) => err.message
    ),
    error
  )
})

// check that it throw if the request is not ok
t(async ({ eq, ctx }) => {
  fetch = (url) =>
    fakeFetch({ url, status: 500, statusText: 'Internal Server Error' })

  return eq(
    await getJSON('/', { q: 1 }).then(
      () => Promise.reject(Error('Should fail')),
      (err) => err.message
    ),
    'Internal Server Error'
  )
})

// if fetch fail, the error should not be handled
t(async ({ eq, ctx }) => {
  const error = `oops: ${Math.random()}`
  fetch = (url) => Promise.reject(Error(error))

  return eq(
    await getJSON('/', { q: 1 }).then(
      () => Promise.reject(Error('Should fail')),
      (err) => err.message
    ),
    error
  )
})

export const setup = () => globalThis.fetch