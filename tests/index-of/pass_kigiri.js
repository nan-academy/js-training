const indexOf = (x, el, i = 0) =>
  i >= x.length ? -1 : x[i] === el ? i : indexOf(x, el, i + 1)

const lastIndexOf = (x, el, i = x.length - 1) =>
  i < 0 ? -1 : x[i] === el ? i : lastIndexOf(x, el, i - 1)

const includes = (x, el) => indexOf(x, el) > -1