const all = (n) =>
  [...Array(n + 1).keys()]
    .slice(1)
    .reduce((s, x) => [...s, [x], ...all(n - x).map((t) => [t, x])], [])

const sums = (n) =>
  [...new Set(all(n)
    .map((n) => n.flat(Infinity).sort().join('.')))]
    .map(n => n.split('.').map(Number))
    .filter((r) => r.length > 1 && r.reduce((a, b) => a + b) === n)
