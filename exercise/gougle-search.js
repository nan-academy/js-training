/*
## Gougle Search

### Instructions

Create the `queryServers` function, that takes 2 arguments:
- `serverName` a string of the name of the server
- `q` a string of the query given by the user

You have to construct 2 urls, using `q` as a search parameter,
prepending a `'/'` and for the 2nd appending `'_backup'`.

Then return the first value of those 2 calls

```js
queryServers('pouet', 'hello+world')
  // return the fastests of those 2 calls:
  // -> getJSON('/pouet?q=hello+world')
  // -> getJSON('/pouet_backup?q=hello+world')
```


Create a `gougleSearch` function that takes a single query argument.
It must call `queryServers` in concurrently on 3 servers:
`'web'`, `'image'` and `'video'`.

A timeout of 80milliseconds must be set for the whole operation.

You must return the value from each servers in an object
using a the server name as key.


### Notions

- https://devdocs.io/javascript/global_objects/promise/race
- https://devdocs.io/javascript/global_objects/promise/all

*/

// fake `getJSON` function
let getJSON = async (url) => url

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// queryServers with main server be fastest
t(async ({ eq, ctx }) => {
  ctx.setTimings({ pouet_backup: 2 })
  return eq(await queryServers('pouet', ctx.r), `/pouet?q=${ctx.r}`)
})

// queryServers with backup server be fastest
t(async ({ eq, ctx }) => {
  ctx.setTimings({ pouet: 2 })
  return eq(await queryServers('pouet', ctx.r), `/pouet_backup?q=${ctx.r}`)
})

// gougleSearch fast enough
t(async ({ eq, ctx }) => {
  ctx.setTimings({ web_backup: 3, image: 2, video_backup: 4 })
  return eq(await gougleSearch(ctx.r), {
    web: `/web?q=${ctx.r}`,
    image: `/image_backup?q=${ctx.r}`,
    video: `/video?q=${ctx.r}`,
  })
})

// gougleSearch fast enough, alternate timings
t(async ({ eq, ctx }) => {
  ctx.setTimings({ web: 3, image_backup: 1, video: 4 })
  return eq(await gougleSearch(ctx.r), {
    web: `/web_backup?q=${ctx.r}`,
    image: `/image?q=${ctx.r}`,
    video: `/video_backup?q=${ctx.r}`,
  })
})

// gougleSearch too slow !
t(async ({ eq, ctx }) => {
  ctx.setTimings({ web: 85, web_backup: 99 })
  return eq(
    await gougleSearch(ctx.r).then(
      () => Promise.reject(Error('Should fail')),
      (err) => err.message
    ),
    'timeout'
  )
})

Object.freeze(tests)

export const setup = () => ({
  r: Math.random().toString(36).slice(2),
  setTimings: (timings) =>
    (getJSON = (url) =>
      new Promise((s) =>
        setTimeout(s, timings[url.split(/\/([^?]+)?/)[1]] || 0, url)
      )),
})