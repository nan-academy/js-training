const interpolation = ({ step, start, end, callback, duration }) => {
  const stepDuration = duration / step
  const stepValue = (end - start) / step
  let count = 0
  const interval = setInterval(() => {
    callback([start + count++ * stepValue, count * stepDuration])
    if (count >= step) clearInterval(interval)
  }, stepDuration)
}
