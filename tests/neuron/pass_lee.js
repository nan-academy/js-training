const neuron = (series) => {
  let responses = []
  return series.reduce((acc, cr) => {
    let groups = cr.split(/: | - /)
    let type = convertStr(groups[0])
    let question = convertStr(groups[1])
    if (!acc[type]) acc[type] = {}
    if (!acc[type][question]) responses = []
    
    responses.push(groups[3])
    acc[type][question] = {}
    acc[type][question][type.slice(0, -1)] = groups[1],
    acc[type][question]['responses']= responses
    return acc
  }, {})
}

const convertStr = (string) =>
  string
    .toLowerCase()
    .replace(/\'|\?|\!/g, '')
    .replace(/ /g, '_')
