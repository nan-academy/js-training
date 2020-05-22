//to be redone by frenchris

const neuron = (phrase) => {
  return phrase.reduce((acc, cr) => {
    let groups = cr.split(/: | - /)
    let type = convertStr(groups[0])
    let question = convertStr(groups[1])
    if (!acc[type]) acc[type] = {}
    if (!acc[type][question]) {
      acc[type][question] = {}
      acc[type][question]['responses'] = []
    }
    acc[type][question][type.slice(0, -1)] = groups[1]
    acc[type][question]['responses'].push(groups[3])
    return acc
  }, {})
}

const convertStr = (string) =>
  string
    .toLowerCase()
    .replace(/\'|\?|\!/g, '')
    .replace(/ /g, '_')
