const types = [
  (d) => d.getMinutes(),
  (d) => d.getHours(),
  (d) => d.getDate(),
  (d) => d.getMonth() + 1,
  (d) => d.getDay(),
]

const matchCron = (pattern, d) =>
  pattern.split(' ').every((value, i) => value === '*' || types[i](d) == value)
