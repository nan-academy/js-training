const compute = (f, check) => (a, b) =>
  a &&
  b &&
  (check(a, b) ? f(Math.abs(a), Math.abs(b)) : -f(Math.abs(a), Math.abs(b)))

const mul = (n, f) => (f > 0 ? n + mul(n, f - 1) : 0)
const div = (n, f, c = 0) => (f < n ? div(n - f, f, c + 1) : c)
const mod = (n, f, c = 0) => (f < n ? mod(n - f, f, c + 1) : n)

const multiply = compute(mul, (a, b) => Math.sign(a) === Math.sign(b))
const divide = compute(div, (a, b) => Math.sign(a) === Math.sign(b))
const modulo = compute(mod, (a) => a > -1)
