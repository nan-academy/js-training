const getURL = (str) => str.match(/http[s]?:\/\/\S+/g)

const greedyQuery = (str) => str.match(/http[s]?:\/\/\S+\?(\S+=){3}\S+/g)

const notSoGreedy = (str) =>
  str
    .match(/https?:\/\/[\S?]+\?[^\s&]+(&[^\s&]+){1,2}&?/g)
    .filter((s) => !s.endsWith('&'))
