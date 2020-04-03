const get = (src, path) =>
  path
    .split('.')
    .reduce((acc, cr) => (typeof acc == 'undefined' ? acc : acc[cr]), src)
