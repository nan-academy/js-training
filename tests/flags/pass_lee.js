const flags = ({ fl = { h: 'help' }, description = {}, ...input }) => {
  !input.hasOwnProperty('help') && (description = { ...input })

  for (let [key, value] of Object.entries(input)) {
    if (key === 'help') {
      value.forEach((ele) => {
        description[ele] = input[ele]
      })
    }
    fl[key[0]] = key
  }
  return { flags: fl, help_description: description }
}
