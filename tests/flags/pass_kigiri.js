const flags = ({ help, ...rest }) => {
  help || (help = Object.keys(rest))
  const alias = { h: 'help' }
  for (const flag of Object.keys(rest)) {
    alias[flag[0]] = flag
  }
  const descriptions = help.map(flag => `-${flag[0]}, --${flag}: ${rest[flag]}`)
  return { alias, description: descriptions.join('\n') }
}
