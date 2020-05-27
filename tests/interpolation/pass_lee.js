const interpolation = (step, start, end, callback, duration) => {
  let fraction = (end - start) / step
  let timeStamp = duration / step
  let count = 0
  let countTime = 0
  const interval = setInterval(() => {
    let a = [
      Math.round((start + count++ * fraction) * 100) / 100,
      (countTime = Math.round((countTime + timeStamp) * 100) / 100),
    ]
    if (count >= step) clearInterval(interval)
    callback(a)
  }, timeStamp)
}
