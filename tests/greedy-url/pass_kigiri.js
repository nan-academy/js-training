const getURL = (data, reg) => data.match(/https?:\/\/\S+/g)

const greedyQuery = (data) =>
  data.match(/https?:\/\/[\S?]+\?[^\s&]+(&[^\s&]+){2,}/g)

const notSoGreedy = (data) =>
  data
    .match(/https?:\/\/[\S?]+\?[^\s&]+(&[^\s&]+){1,2}&?/g)
    .filter((s) => !s.endsWith('&'))
