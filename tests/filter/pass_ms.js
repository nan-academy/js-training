const filter = (arr, f) => {
  let res = []
  for (let [i, v] of arr.entries()) f(v, i, arr) && res.push(v)
  return res
}

const reject = (arr, f) => {
    let res = []
    for (let [i, v] of arr.entries()) {
        if(!f(v, i, arr)) res.push(v)
    }
    return res
}

const partition = (arr, f) => [filter(arr, f), reject(arr, f)]