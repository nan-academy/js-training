import * as api from '../lib/deno-api.js'
import { test } from '../lib/tester.js'
import { readFileStr } from 'https://deno.land/std@v1.0.0-rc1/fs/read_file_str.ts'

const blacklist = new Set([
  'console.js',
  'introduction.js',
  'congratulation.js',
])

const results = {}
for await (const exInfo of Deno.readDir('exercise')) {
  if (blacklist.has(exInfo.name)) continue
  if (!exInfo.isFile) continue
  const baseName = exInfo.name.slice(0, -3)
  const NOT_FOUND = `Missing tests for exercise ${exInfo.name}`
  const parts = (await readFileStr(`exercise/${exInfo.name}`)).split('// /*/ // ⚡')
  for await (const info of Deno.readDir(`tests/${baseName}`)) {
    const code = await readFileStr(`tests/${baseName}/${info.name}`)
    const [ type ] = info.name.split('_', 1)
    const result = await test({
      api,
      name: `${baseName}/${info.name}`,
      timeout: 200,
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
      console.debug('✓'.grn(), baseName.blu(), T, result.duration.toFixed(2), info.name.slice(5, -3))
    }

    Object.assign(results[baseName] || (results[baseName] = {}), {
      [info.name.slice(5, -3)]: { ex: baseName, ok, ...result },
    })

  }
}

const users = ['afonso', 'kigiri', 'lee', 'ms', 'frenchris' ]

const values = Object.values(results)
console.log(users
  .map(user => {
    const cumul = { user, duration: 0, passed: 0 }
    for (const {[user]: result = { duration: 0 }} of values) {
      result.ok && cumul.passed++
      cumul.duration += result.duration
    }
    return cumul
  })
  .sort((a, b) => a.passed - b.passed)
  .map(({ passed, user }) => {
    const score = `${((passed / values.length) * 100).toFixed(2)}%`
    const ico = passed === values.length
      ? `✓ ${user}`.grn()
      : `✗ ${user}`.red()

    return `${ico} ${score.blu()}`
  })
  .join('\n'))


