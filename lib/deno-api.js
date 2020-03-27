import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { readFileStr, writeFileStr } from 'https://deno.land/std/fs/mod.ts'

export const eq = (a, b) => (assertEquals(a, b), true)
export const readFileOrEmpty = path => readFileStr(path).then(
  str => str.replace(/\r\n/g, '\n'),
  err => err.name === 'NotFound' ? '' : Promise.reject(err)
)

export const importCode = async code => {
  // inline imports are failing in deno at the moment, creating a temp file
  const path = `.tmp-mod-${Math.random().toString(36).slice(2)}.js`
  await writeFileStr(path, code)
  return import(`../${path}`).finally(() => Deno.remove(path))
}
