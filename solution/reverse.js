
const reverse = (x) =>
  typeof x === 'string'
    ? reverse([...x]).join('')
    : x.reduce((acc, e) => [e, ...acc], [])
