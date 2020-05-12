const filter = (arr, f) => {
  let acc = []
  for (let [i, v] of arr.entries()) f(v, i, arr) && acc.push(v)
  return acc
}

const reject = (arr, f) => {
  let acc = []
  for (let [i, v] of arr.entries()) f(v, i, arr) || acc.push(v)
  return acc
}

const partition = (arr, f) => [filter(arr, f), reject(arr, f)]
