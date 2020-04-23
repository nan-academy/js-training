const formDes = (flag, input) => `-${flag[0]}, --${flag}: ${input[flag]}`

const flags = ({ descriptions, ...input }) => {
  descriptions = input.hasOwnProperty('help')
    ? input.help.map((flag) => formDes(flag, input))
    : Object.keys(input).map((flag) => formDes(flag, input))

  const alias = { h: 'help' }
  for (let key of Object.keys(input)) {
    alias[key[0]] = key
  }
  return { alias, description: descriptions.join('\n') }
}
