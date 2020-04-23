#!/usr/bin/env node

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

const save = proto => (entries => () => {
  const changed = entries.filter(([k,v]) => proto[k] !== v).map(([k,v]) => [k, proto[v]])
  return {
    init: () => changed.forEach(([k,v]) => proto[k] = v),
    restore: () => entries.forEach(([k,v]) => proto[k] = v),
  }
})
  (Object.getOwnPropertyNames(proto).map(k => [k, proto[k]]).filter(([,v]) => typeof v === 'function'))

const messages = []
const log = console.log.bind(console)
// console.log = (...args) => messages.push(args) || undefined
const protoSave = [ RegExp.prototype, Array.prototype, String.prototype, Math, () => messages.length = 0 ]
  .map(save)

const wait = (delay, arg) => new Promise(s => setTimeout(s, delay, arg))
const fail = fn => { try { fn() } catch (err) { return true } }

const loadCode = async ({ path, api, solution }) => {
  const solutionDir = path.replace(/\bexercise\b/, 'tests').slice(0, -3)
  const [exerciseCode, solutionCode] = await Promise.all([
    api.readFileOrEmpty(path),
    api.readFileOrEmpty(`${solutionDir}/pass_${solution}.js`),
  ])
  if (!exerciseCode) throw Error(`No code found for ${path}`)
  const parts = exerciseCode.split('// /*/ // ⚡')
  if (parts.length !== 3) {
    // show error of invalid exercise file !
  }

  const code = solutionCode ? `\n${solutionCode}\n` : parts[1] 
  return [ parts[0], code, parts[2] ].join('// /*/ // ⚡')
}

const openExercise = async ({ path, api, solution, code }) => {
  code || (code = await loadCode({ path, api, solution }))
  const mod = await api.importCode(code)
  const handlers = protoSave.map(s => s())
  const init = () => handlers.forEach(h => h.init())
  const restore = () => handlers.forEach(h => h.restore())
  restore()

  return { ...mod, code: code.split('// /*/ // ⚡')[1], init, restore }
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

export const test = async ({ name, timeout, api, failFast, ...rest }) => {
  const ex = await openExercise({ path: `./exercise/${name}.js`, api, ...rest })
  let pass = true
  const ctx = {}
  const results = []
  const eq = (a,b) => (ex.restore(), api.eq(a, b))
  const start = performance.now()
  for (const t of ex.tests) {
    if (failFast && !pass) continue
    let err = ''
    const pause = wait(timeout)
    const tools = { eq, fail, wait, code: ex.code }
    const running = (async () => (ex.init(), t(tools, ctx)))()
      .catch(e => (err = e, false))
      .finally(ex.restore)

    if (!await Promise.race([ running, pause ])) {
      results.push(`  ${`✗`.red()} ${prettify(t)}`)
      pass && err && results.push(`   ${prettyStack(err)}`)
      pass = false
    } else {
      results.push(`  ${'✓'.grn()} ${prettify(t, true)}`)
    }
  }

  const duration = performance.now() - start
  const msg = pass
    ? `${'✓'.grn()} ${name} ${duration.toFixed(2)} ${`(${results.length} tests)`.blu()}`
    : `${`✗`.red()} ${name} ${duration.toFixed(2)} \n${results.join('\n')}`

  return { pass, msg, duration }
}

const runMod = async ({ modname, exname, api, solution }) => {
  const path = `../module/${modname}.js`
  const { exercises, next, timeout = 200 } = await import(path)
  for (const [name, props] of Object.entries(exercises)) {
    if (exname && name !== exname) continue
    try {
      const { pass, msg } = await test({ name, timeout, api, solution })
      log(msg)
      if (!pass) return
    } catch (err) { return log(err) }
  }

  return (!exname && next)
    ? runMod({ modname: next, api, solution })
    : log('All done !')
}

export const run = async ({args, ...api}) => {
  const [ path = 'data', solution = 'solution' ] = args
  const [ modname, exname = '' ] = path.split('/')
  return runMod({ modname, exname, api, solution })
}
