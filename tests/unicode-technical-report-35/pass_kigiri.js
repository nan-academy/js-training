const _n = (n, f) => ((f.n = n), f)
const pad0 = (n, s) => String(s).padStart(n, '0')
const count = (n, f) => _n(n, (d, l) => pad0(l, f(d)))

const days = [
  'Sunday',
  'Monday',
  'Thuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'Jun',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const replacers = {
  y: count(4, (d) => Math.abs(d.getFullYear())),
  G: _n(4, (d, l) => {
    if (l < 4) return d.getFullYear() < 0 ? 'BC' : 'AD'
    return d.getFullYear() < 0 ? 'Before Christ' : 'Anno Domini'
  }),
  M: _n(4, (d, l) => {
    const M = d.getMonth()
    if (l < 3) return pad0(l, M + 1)
    if (l < 4) return months[M].slice(0, 3)
    return months[M]
  }),
  d: count(2, (d) => d.getDate()),
  E: _n(4, (d, l) => (l < 4 ? days[d.getDay()].slice(0, 3) : days[d.getDay()])),
  H: count(2, (d) => d.getHours()),
  h: count(2, (d) => d.getHours() % 12),
  m: count(2, (d) => d.getMinutes()),
  s: count(2, (d) => d.getSeconds()),
  a: _n(1, (d) => (d.getHours() > 12 ? 'PM' : 'AM')),
}

const match = new RegExp(
  `${Object.entries(replacers)
    .map(([k, f]) => `${k}{1,${f.n}}`)
    .join('|')}`,
  'g'
)
const format = (date, str) =>
  str.replace(match, (m, b, c, d) => replacers[m[0]](date, m.length))
