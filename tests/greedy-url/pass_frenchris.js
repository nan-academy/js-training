const getURL = (data) => data.match(/http(|s):\/\/\S+/g)
const greedyQuery = data => data.match(/http(|s):\/\/\S+\?\S+\&\S+/g).filter(el => el.match(/&/g).length > 1)
const notSoGreedy = data => data.match(/http(|s):\/\/\S+\?\S+\&\S+/g).filter(el => el[el.length - 1] !== '&').filter(el => el.match(/&/g).length >= 1 && el.match(/&/g).length <= 2)
