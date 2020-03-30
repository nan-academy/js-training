const getURL = (data, reg) => data.match(/https?:\/\/\S+/g)
const greedyQuery = (data) => data.match(/http:\/\/www\.example\S+/g)
const notSoGreedy = (data) => data.match(/https?:\/\/[\S?]+\?[^\s&]+(&[^\s&]+){1,2}/g)
  .slice(0, -1)
