import * as api from '../lib/deno-api.js'
import { test } from '../lib/tester.js'
import { readFileStr } from 'https://deno.land/std/fs/mod.ts'

const generateTests = async (user) =>
  Promise.all(
    (await Deno.readdir(user)).map(async ({ name }) => {
      const dir = `tests/${name.slice(0, -3)}`
      await Deno.mkdir(dir)
        .catch(err => err.name === 'AlreadyExists' || Promise.reject(err))

      return Deno.copyFile(`${user}/${name}`, `${dir}/pass_${user}.js`)
        .then(() => console.log(`copied: ${dir}/pass_${user}.js`))
    })
  )

// generateTests('kigiri')

const blacklist = new Set([
  'console.js',
  'introduction.js',
  'congratulation.js',
])

for (const exInfo of await Deno.readdir('exercise')) {
  if (blacklist.has(exInfo.name)) continue
  if (!exInfo.isFile()) continue
  const baseName = exInfo.name.slice(0, -3)
  const NOT_FOUND = `Missing tests for exercise ${exInfo.name}`
  const tests = await Deno.readdir(
    `tests/${baseName}`
  ).catch((e) => Promise.reject(e.name === 'NotFound' ? Error(NOT_FOUND) : e))
  const parts = (await readFileStr(`exercise/${exInfo.name}`)).split('// /*/ // ⚡')
  for (const info of tests) {
    const code = await readFileStr(`tests/${baseName}/${info.name}`)
    const [ type ] = info.name.split('_', 1)
    const result = await test({
      api,
      name: `${baseName}/${info.name}`,
      failFast: true,
      code: `${parts[0]}// /*/ // ⚡\n${code}// /*/ // ⚡\n${parts[2]}`
    })

    const ok = (type === 'pass' && result.pass)
      || (type === 'fail' && !result.pass)

    if (!ok) {
      console.debug('Expected to', type, 'but got')
      console.debug(result.msg)
      Deno.exit(1)
    } else {
      const T = type === 'pass' ? 'PASS'.grn() : 'FAIL'.red()
      console.debug('✓'.grn(), baseName.blu(), T, info.name.slice(5, -3))
    }
  }
}
