const nasa = (n) =>
  [...Array(n + 1).keys()]
    .slice(1)
    .map((n) => `${n % 3 ? '' : 'NA'}${n % 5 ? '' : 'SA'}` || n)
    .join(' ')
