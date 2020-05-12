const currify = (f) => (...args) =>
  f.length <= args.length ? f(...args) : (value) => currify(f)(...args, value)