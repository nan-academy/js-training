const currify = (fn) => (...args) =>
  args.length < fn.length
    ? (...newarg) => currify(fn)(...args, ...newarg)
    : fn(...args)
