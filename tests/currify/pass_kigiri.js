const currify = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...rest) => currify(fn, ...args, ...rest)
