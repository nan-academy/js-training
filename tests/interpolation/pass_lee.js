const interpolation = ({ step, start, end, callback, duration }) => {
  let fraction = (end - start) / step
  let timeStamp = duration / step
  let count = 0
  let countTime = 0
  const interval = setInterval(
    () =>
      count >= step
        ? clearInterval(interval)
        : callback([
            start + count++ * fraction,
            (countTime = countTime + timeStamp),
          ]),
    timeStamp
  )
}
