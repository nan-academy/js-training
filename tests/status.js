const dir = 'tests'

const work = async (w, n) => {
  const result = Array(w.length)
  await Promise.all(Array(n).fill().map(async function next() {
    const el = w.pop()
    if (!el) return
    const i = w.length
    result[i] = await el()
    return next()
  }))
  return result
}

const exercises = (await Deno.readdir(dir))
  .filter(f => f.isDirectory())

const users = ['afonso', 'kigiri', 'lee', 'ms', 'frenchris' ]
const base = (actual) =>
  Object.fromEntries(users.map(user => [user, actual[user] || 'fail']))

const solutions = await work(exercises.map(f => async () => ({
  name: f.name,
  ...Object.fromEntries((await Deno.readdir(`${dir}/${f.name}`))
    .map(f => {
      const [, type, key] = f.name.split(/(pass|fail)_(.+)\.js/)
      return [key, type]
    }))
})), 10)

const red = s => `\u001b[31m${s}\u001b[0m`
const grn = s => `\u001b[32m${s}\u001b[0m`
console.log(solutions
  .map(ex => {
    const colorizedUsers = users.map(u => ex[u] === 'pass' ? grn(u) : red(u))
    return `${ex.name.padStart(30)}: ${colorizedUsers.join(' | ')}`
  })
  .join('\n'))
