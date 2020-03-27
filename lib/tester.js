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

const openExercise = async (path, api, solutionDir) => {
  const [exerciseCode, solution] = await Promise.all([
    api.readFileOrEmpty(path),
    api.readFileOrEmpty(path.replace(/\bexercise\b/, solutionDir)),
  ])

  const parts = exerciseCode.split('// /*/ // ⚡')
  if (parts.length !== 3) {
    // show error of invalid exercise file !
  }

  const code = solution ? `\n${solution}\n` : parts[1] 
  const mod = await api.importCode([ parts[0], code, parts[2] ].join('// /*/ // ⚡'))
  const handlers = protoSave.map(s => s())
  const init = () => handlers.forEach(h => h.init())
  const restore = () => handlers.forEach(h => h.restore())

  return { ...mod, code, init, restore }
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

const test = async ({ name, timeout, api, solution }) => {
  const ex = await openExercise(`./exercise/${name}.js`, api, solution)
  let i = 0, PASS = true
  const ctx = {}
  const results = []
  const eq = (a,b) => {
    ex.restore()
    return api.eq(a, b)
  }
  for (const t of ex.tests) {
    ++i
    let err = ''
    ex.init()
    const tools = { eq, fail, wait, code: ex.code }
    const running = (async () => t(tools, ctx))()
      .catch(e => (err = e, false))
      .finally(ex.restore)

    if (!await Promise.race([ running, wait(timeout) ])) {
      results.push(`  ${`✗`.red()} ${prettify(t)}`)
      PASS && err && results.push(`   ${prettyStack(err)}`)
      PASS = false
    } else {
      results.push(`  ${'✓'.grn()} ${prettify(t, true)}`)
    }
  }
  PASS
    ? console.log('✓'.grn(), name, `(${results.length} tests)`.blu())
    : console.log(`${`✗`.red()} ${name}\n${results.join('\n')}`)
  return PASS
}

const runMod = async ({ modname, exname, api, solution }) => {
  const path = `../module/${modname}.js`
  const { exercises, next, timeout = 200 } = await import(path)
  for (const [name, props] of Object.entries(exercises)) {
    if (exname && name !== exname) continue
    try { if (!await test({ name, timeout, api, solution })) return }
    catch (err) { return log(err) }
  }

  return (!exname && next)
    ? runMod({ modname: next, api, solution })
    : log('All done !')
}

export const run = async ({args, ...api}) => {
  const [ path = '', solution = 'solution' ] = args
  const [ modname = 'data', exname = '' ] = path.split('/')
  return runMod({ modname, exname, api, solution })
}
