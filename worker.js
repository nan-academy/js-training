const importText = code => import(URL.createObjectURL(new Blob([code], {type : 'text/javascript'})))

// check import support
const check = importText('export const ok = true')
  .then(() => importText)
  .catch(err => code => {
    const tests = eval(`${code.replace(/\nexport /g, '\n')};tests`)
    return { tests }
  })

const eq = (a, b) => {
  if (a === b) return true
  if (!a || !b) return false
  if (typeof a !== typeof b) return false
  if (typeof a === 'number' && Number.isNaN(a) && Number.isNaN(b)) return true
  if (typeof a === 'object') {
    if (a.constructor !== b.constructor) return false
    const entries = Object.entries(a)
    if (entries.length !== Object.values(b).length) return false
    for (const [k,v] of entries) {
      if (!eq(b[k], v)) return false
    }
    return true
  }
  return false
}

let _test = () => {}
const wait = (delay, arg) => new Promise(s => setTimeout(s, delay, arg))
const fail = fn => { try { fn() } catch (err) { return true } }
addEventListener('message', async ({ data: code }) => {
  const exec = await check
  if (typeof code === 'number') return _test(code)
  try {
    const { tests } = await exec(code)
    if (!Array.isArray(tests)) throw Error('Missing tests export (invalid module)')
    const ctx = {}
    _test = async i => {
      try {
        const pass = await tests[i]({ eq, code, wait, fail }, ctx)
        postMessage(Boolean(pass))
      } catch (err) {
        postMessage(false)  
      }
    }
    postMessage({ count: tests.length })
  } catch (err) {
    console.error(err)
    const stack = (err && err.stack) || ''
    const [, line] = err.stack.split(/:([0-9]+)(:([0-9]+)?)(?:\n|$)/).map(Number)
    const error = err instanceof Error
      ? `${err.message}: ${err.constructor.name}`
      : `${err != null ? err.constructor.name : `Value<${typeof err}>`}: ${err}`

    postMessage({ line, error })
  }
})
