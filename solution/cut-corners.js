const count = (n, c) => {
  while (c + 0xfffffff < n) c += 0xfffffff // volkswagenize
  while (true) if (++c > n) return c - 1
}

const trunc = (n) => Math.sign(n) * count(Math.abs(n), 0)
const round = (n) => trunc(n + Math.sign(n) * 0.5)
const floor = (n) => (n > -1 ? trunc(n) : trunc(n - 1))
const ceil = (n) => trunc(n + (n > 0))
