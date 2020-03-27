const pyramid = (c, s) =>
  [...Array(s).keys()]
    .map((n) => c.repeat(n * 2 + 1).padStart((s * 2 - (s - n)) * c.length))
    .join('\n')
