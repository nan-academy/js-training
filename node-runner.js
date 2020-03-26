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

const prettyStack = err => {
  const msg = err.message.red()
  const [line] = err.stack.split('\n')
    .filter(line => line.startsWith('    at data:text/'))
  if (!line) return msg
  const [ , src, l, c ] = line.split(/:/)
  return src ? `${msg} (${l.blu()}${':'.mgt()}${c.blu()})` : msg
}

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
const eq = (a, b) => (assert.deepStrictEqual(a, b), true)

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
  return { ...mod, code }
}
const prettify = (fn, short) => {
  const code = fn.toString()
  const full = code.slice(code.split('=>', 1)[0].length + 3).trim()
  if (!short) return full._blk()
  const lines = full.split('\n')

  return lines.length > 1
    ? `${lines[0]} [...] ${lines[lines.length-1].trim()}`._blk()
    : lines[0]._blk()
}

const test = async (name, timeout) => {
  const ex = await openExercise(`./${join('exercise', `${name}.js`)}`)
  let i = 0
  const ctx = {}
  for (const t of ex.tests) {
    ++i
    let err = ''
    const tools = { eq, fail, wait, code: ex.code }
    const running = (async () => t(tools, ctx))().catch(e => (err = e, false)).finally(restore)
    if (!await Promise.race([ running, wait(timeout) ])) {
      log(`  ✗`.red(), prettify(t))
      err && log('   ', prettyStack(err))
      return false
    } else {
      console.log('  ✓ '.grn(), prettify(t, true))
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
      if (!await test(ex, timeout)) return
    } catch (err) {
      log(err)
      return
    }
  }
  return next ? run(next) : log('All done !')
}

const args = process.argv.slice(2)
if (args.length) {
  
} else {
  run('data')
    .catch(err => (log(err), process.exit(1)))
}
