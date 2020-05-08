const currify = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...extraArg) => currify(fn, ...args, ...extraArg)
