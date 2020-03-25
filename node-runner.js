#!/usr/bin/env node

import fs from 'fs'
import { performance } from 'perf_hooks'
import Module from 'module'
import { dirname, join } from 'path'
import assert from 'assert'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const { now } = performance
const { readFile } = fs.promises

const readFileOrEmpty = path => readFile(path, 'utf8').then(
  str => str.replace(/\r\n/g, '\n'),
  err => err.code === 'ENOENT' ? '' : Promise.reject(err)
)

const importCode = code => {
  const b64 = Buffer.from(code).toString('base64')
  return import(`data:text/javascript;base64,${b64}`)
}

// extend str for colors
'no0.blk30.red31.grn32.ylw33.blu34.mgt35.cyn36.wht37'
  .split('.')
  .map(str => str.split(/([0-9]+)$/))
  .forEach(([ name, value ]) => {
    String.prototype[name]       = function () { return `\u001b[${value}m${this}\u001b[0m` }
    String.prototype[`_${name}`] = function () { return `\u001b[${value};1m${this}\u001b[0m` }
  })


const current = []
const ok = '  ✓ '.grn()

const formatPathParts = (value, i) => i
  ? ':'.mgt() + value.blu()
  : value.wht()

const wrapInParen = ((open, close) => str => `${open}${str}${close}`)('('.wht(), ')'.wht())

const prettyPath = p => p.split(':').map(formatPathParts).join('')
const parseStackLine = (line, err) => {
  if (!line) return ''
  let [ , src, path ] = line.split(/at (.+) \((.+)\)$/)
  if (!src) return wrapInParen(prettyPath(line))
  if ((src).includes('anonymous')) {
    src = err.key ? `assert.${err.key.cyn()}` : (err.name || 'Error').cyn()
  }
  return wrapInParen(`${src} ${prettyPath(path)}`)
}

const prettyStack = err => err.message.red()
  +' '+ parseStackLine(err.stack.split('\n')
    .filter(line => line.includes(current.filename))[0], err)

Object.keys(assert).filter(key => key !== 'fail').forEach(key => {
  const fn = assert[key]
  const last = fn.length - 1
  assert[key] = (...args) => {
    try {
      fn(...args)
      current.push(`${ok}${current.length + 1} - ${args[last] || key}`)
    } catch (err) {
      current.allPass = false
      err.key = key
      current.push(`  ✗`.red() +' '+ (current.length + 1) +' '+ prettyStack(err))
    }
  }
})


const save = proto => (entries => () => entries.forEach(([k,v]) => proto[k] = v))
  (Object.getOwnPropertyNames(proto).map(k => [k, proto[k]]).filter(([,v]) => typeof v === 'function'))


const messages = []
const log = console.log.bind(console)
// console.log = (...args) => messages.push(args) || undefined
const restore = [ Array.prototype, String.prototype, Math, () => messages.length = 0 ]
  .map(save)
  .reduce((a, b) => _ => b(a(_)), _ => _) // pipe

const wait = (delay, arg) => new Promise(s => setTimeout(s, delay, arg))
const fail = fn => { try { fn() } catch (err) { return true } }
const eq = assert.assertDeepEqual

const openExercise = async path => {
  const [exerciseCode, solution] = await Promise.all([
    readFileOrEmpty(path),
    readFileOrEmpty(path.replace(/\bexercise\b/, 'solution')),
  ])

  const parts = exerciseCode.split('// /*/ // ⚡')
  if (parts.length !== 3) {
    // show error of invalid exercise file !
  }

  const code = solution ? `\n${solution}\n` : parts[1] 
  const mod = await importCode([ parts[0], code, parts[2] ].join('// /*/ // ⚡'))
  const descriptions = parts[2].split(/(\nt\(.+)/g).filter((_,i) => i%2)

  return { ...mod, code, descriptions }
}

const test = async (name, timeout) => {
  const ex = await openExercise(`./${join('exercise', `${name}.js`)}`)
  let i = 0
  const ctx = {}
  for (const t of ex.tests) {
    ++i
    const tools = { eq, fail, wait, code: ex.code }
    if (!await Promise.race([ t(tools, ctx), wait(timeout) ])) {
      log('test', i, 'failed:', ex.descriptions[i]._blk())
      return false
    }
  }
  return true
}

const run = async modname => {
  const path = `./${join('module', `${modname}.js`)}`
  const { exercises, next, timeout = 200 } = await import(path)
  for (const [ex, props] of Object.entries(exercises)) {
    try {
      log(ex)
      if (!await test(ex, timeout).finally(restore)) return
    } catch (err) {
      log(err)
      return
    }
  }
  return next ? run(next) : log('All done !')
  /*
  const codes = await Promise.all(pkg.tests.map(async ({ name }) => ({
    code: await readFile(join(__dirname, 'exercises', name +'.js'), 'utf-8'),
    filename: name + '.js',
    name,
  }))).catch(err => (console.error(err), process.exit(1)))

  let failedTestCount = 0
  for (const { code, filename, name } of codes) {
    current.length = 0
    current.allPass = true
    current.filename = filename

    try {
      (new Module(filename, module.parent))._compile(code, filename)
      if (current.allPass) {
        console.log('✓'.grn(), name)
      } else {
        failedTestCount++
        console.log('-'.blu(), name)
        console.log(current.join('\n'))
      }
    } catch (err) {
      if (!failedTestCount) {
        console.log(`✗`.red(), name, prettyStack(err))
      }
      failedTestCount++
    }
  }
  if (failedTestCount > 1) {
    console.log(`...and ${failedTestCount - 1} more to pass.`.wht())
  }
  process.exit(failedTestCount)
  */
}

const args = process.argv.slice(2)
if (args.length) {
  
} else {
  run('data')
    .catch(err => (log(err), process.exit(1)))
}
