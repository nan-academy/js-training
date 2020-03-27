import fs from 'fs'
import { deepStrictEqual } from 'assert'

const { readFile } = fs.promises

export const eq = (a, b) => (deepStrictEqual(a, b), true)
export const readFileOrEmpty = path => readFile(path, 'utf8').then(
  str => str.replace(/\r\n/g, '\n'),
  err => err.code === 'ENOENT' ? '' : Promise.reject(err)
)

export const importCode = code => {
  const b64 = Buffer.from(code).toString('base64')
  return import(`data:text/javascript;base64,${b64}`)
}
