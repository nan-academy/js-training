const throttle = (callback, limit = 0, t) => (...args) => {
  const now = Date.now()
  if (now - t < limit) return
  t = now
  callback(...args)
}

const opThrottle = (callback, limit, { leading, trailing } = {}, n, t) => (
  ...args
) => {
  const now = Date.now()
  if (!n && !leading) n = now
  clearTimeout(t)
  if (now - n < limit) {
    return trailing && (t = setTimeout(callback, limit, ...args))
  }
  n = now
  callback(...args)
}