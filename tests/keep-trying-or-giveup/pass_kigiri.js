const retry = (count, action) => {
  const retrier = (tries, args) =>
    action(...args).catch(err => {
      if (tries >= count) throw err
      return retrier(tries + 1, args)
    })

  return (...args) => retrier(0, args)
}

const timeout = (delay, action) => (...args) =>
  Promise.race([
    action(...args),
    new Promise((_, r) => setTimeout(r, delay, Error('timeout'))),
  ])
