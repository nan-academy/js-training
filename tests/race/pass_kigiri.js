const race = (promises) =>
  new Promise((s, f) => {
    for (const p of promises) {
      Promise.resolve(p).then(s, f)
    }
  })

const some = (promises, count) =>
  new Promise((s, f) => {
    if (count < 1 || !promises.length) return s([])
    const values = []
    for (const [i, p] of promises.entries()) {
      Promise.resolve(p).then((value) => {
        values.push({ i, value })
        if (--count === 0) {
          s(values.sort((a, b) => a.i - b.i).map((x) => x.value))
        }
      }, f)
    }
  })