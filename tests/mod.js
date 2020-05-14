import * as api from '../lib/deno-api.js'
import { test } from '../lib/tester.js'
import { readFileStr } from 'https://deno.land/std@0.50.0/fs/read_file_str.ts'

const blacklist = new Set([
  'console.js',
  'introduction.js',
  'congratulation.js',
])

// check for module validity
const parseModule = async (path, acc) => {
  if (!path) return { ...acc }
  const { exercises, next } = await import(`../module/${path}.js`)
  const mod = Object.fromEntries(Object.keys(exercises)
    .map(name => [ name, { name, module: path }]))
  return parseModule(next, { ...mod, ...acc })
}

const modules = await parseModule('data')
const orphans = {}
const results = {}
for await (const exInfo of Deno.readDir('exercise')) {
  if (blacklist.has(exInfo.name)) continue
  if (!exInfo.isFile) continue
  const baseName = exInfo.name.slice(0, -3)
  const NOT_FOUND = `Missing tests for exercise ${exInfo.name}`
  const parts = (await readFileStr(`exercise/${exInfo.name}`)).split('// /*/ // ⚡')
  console.log(`\ntests/${baseName}:`)
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
    } else {
      const T = type === 'pass' ? 'PASS'.grn() : 'FAIL'.red()
      console.debug('✓'.grn(), baseName.blu(), T, result.duration.toFixed(2), info.name.slice(5, -3))
    }

    Object.assign(results[baseName] || (results[baseName] = {}), {
      [info.name.slice(5, -3)]: { ex: baseName, ok, ...result },
    })

    if (modules[baseName]) {
      modules[baseName].seen = true
    } else {
      orphans[baseName] = { name: baseName }
    }
  }
}

console.log('\nmodules:')
const unseen = Object.values(modules).filter(mod => !mod.seen)
if (unseen.length) {
  for (const ex of unseen) {
    console.log('Module:'.red(), ex.module, 'unseen exercise', ex.name)
  }
}

if (Object.values(orphans).length) {
  for (const ex of Object.values(orphans)) {
    console.log('Exercise:'.red(), ex.name.blu(), 'not found in any modules')
  }
}
const moduleFail = unseen.length || Object.values(orphans).length
if (!moduleFail) {
  console.log(`✓`.grn(), 'all modules are valid')
}

console.log('\nrecap:')
const check = (ok, str = '') => ok ? `✓ ${str}`.grn() : `✗ ${str}`.red()
const users = ['afonso', 'kigiri', 'lee', 'ms', 'frenchris' ]
const resultEntries = Object.entries(results)
let totalMissing = 0
console.log(users
  .map(user => {
    const cumul = { user, duration: 0, passed: 0, missing: [] }
    for (const [k, {[user]: result = { duration: 0 }}] of resultEntries) {
      result.ok && cumul.passed++
      cumul.duration += result.duration
      result.ok || cumul.missing.push(k)
    }
    return cumul
  })
  .sort((a, b) => a.passed - b.passed)
  .map(({ passed, user, missing }) => {
    const score = `${((passed / resultEntries.length) * 100).toFixed(2)}%`
    totalMissing += missing.length
    const left = missing.length < 4
      ? missing.slice(0, 3).join(', ')
      : `${missing.slice(0, 3).join(', ')} ...and ${missing.length - 3} more`
    return `${check(passed === resultEntries.length, user)} ${score.blu()}${left ? `\n   missing: ${left}`: ''}`
  })
  .join('\n\n'))

console.log('\nresult:')
const all = resultEntries.flatMap(e => Object.values(e[1]))
const totalFailed = all.reduce((acc, result) => acc + !result.ok, 0)
if (totalFailed > 0) {
  console.log(`${check(0)}${totalFailed} tests failed (${totalMissing} missing)`)
  Deno.exit(1)
} else {
  console.log(`${check(1)}all tests pass (${totalMissing} missing)`)
  Deno.exit(moduleFail ? 1 : 0)
}

