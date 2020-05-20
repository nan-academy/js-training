const neuron = (series) => {
  return series.reduce((acc, res) => {
    let groups = res.split(/: | - /)
    let key = groups[0].toLowerCase()
    let question = groups[1]
      .toLowerCase()
      .replace(/\'|\?|\!/g, '')
      .replace(/ /g, '_')
    if (!acc[key]) acc[key] = {}
    if (!acc[key][question]) {
      acc[key][question] = {}
      acc[key][question]['responses'] = []
    }
    acc[key][question][key.slice(0, -1)] = groups[1]
    acc[key][question]['responses'].push(groups[3])
    return acc
  }, {})
}
