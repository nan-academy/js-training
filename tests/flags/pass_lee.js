const flags = ({ fl = { h: 'help' }, description = {}, ...input }) => {
  let result = {}
  !input.hasOwnProperty('help') && (description = { ...input })

  for (let [key, value] of Object.entries(input)) {
    if (key === 'help') {
      value.forEach((ele) => {
        description[ele] = input[ele]
      })
    }
    fl[key[0]] = key
  }
  result['flags'] = fl
  result['help_description'] = description
  return result
}
