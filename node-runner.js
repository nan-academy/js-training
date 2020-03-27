#!/usr/bin/env node

import fs from 'fs'
import { deepStrictEqual } from 'assert'
import { run } from './lib/tester.js'
const { readFile } = fs.promises
  
run({
  args: process.argv.slice(2),
  eq: (a, b) => (deepStrictEqual(a, b), true),
  readFileOrEmpty: path => readFile(path, 'utf8').then(
    str => str.replace(/\r\n/g, '\n'),
    err => err.code === 'ENOENT' ? '' : Promise.reject(err)
  ),
  importCode: code => {
    const b64 = Buffer.from(code).toString('base64')
    return import(`data:text/javascript;base64,${b64}`)
  },
})
  .catch(err => (process.stdout.write(err.stack), process.exit(1)))
