const flags = ({ help, ...input }) => {
  help || (help = Object.keys(input))
  const alias = { h: 'help' }
  for (let key of Object.keys(input)) {
    alias[key[0]] = key
  }
  let descriptions = help.map((flag) => formDes(flag, input))
  return { alias, description: descriptions.join('\n') }
}

const formDes = (flag, input) => `-${flag[0]}, --${flag}: ${input[flag]}`
