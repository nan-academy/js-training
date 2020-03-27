#!/usr/bin/env deno

import { run } from './lib/tester.js'
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { readFileStr, writeFileStr } from 'https://deno.land/std/fs/mod.ts'

await run({
  args: Deno.args,
  eq: (a, b) => (assertEquals(a, b), true),
  readFileOrEmpty: path => readFileStr(path).then(
    str => str.replace(/\r\n/g, '\n'),
    err => err.name === 'NotFound' ? '' : Promise.reject(err)
  ),
  importCode: async code => {
    // inline imports are failing in deno at the moment, creating a temp file
    const path = `./.tmp-mod-${Math.random().toString(36).slice(2)}.js`
    await writeFileStr(path, code)
    return import(path).finally(() => Deno.remove(path))
  },
})
