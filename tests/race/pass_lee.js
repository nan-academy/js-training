const race = (promises) =>
  new Promise((res, rej) => {
    for (let v of promises) {
      v.then(res).catch(rej)
    }
  })

const some = (promises, howMany) =>
  new Promise((res, rej) => {
    if (!promises.length || !howMany) res([])
    let results = []
    let completed = 0
    for (let [i, v] of promises.entries()) {
      Promise.resolve(v)
        .then((result) => {
          results[i] = result
          completed += 1
          if (completed == howMany) {
            res(results.filter((v) => v === undefined || v))
          }
        })
        .catch(rej)
    }
  })
