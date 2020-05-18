const flags = ({ help, ...obj }) => {
  let res = { alias: { h: 'help' }, description: '' }
  res.description = help
    ? help.map((f) => `-${f[0]}, --${f}: ${obj[f]}`).join('\n')
    : Object.keys(obj)
        .map((f) => `-${f[0]}, --${f}: ${obj[f]}`)
        .join('\n')
  res.alias = Object.keys(obj).reduce(
    (newO, k) => {
      newO[k[0]] = k
      return newO
    },
    { h: 'help' }
  )
  return res
}
