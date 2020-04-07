const isLeapYear = (d) => {
  const y = d.getFullYear()
  return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)
}

const dayOfTheYear = (d) => {
  const m = d.getMonth()
  let i = -1,
    total = d.getDate()
  while (++i < m) {
    total += i === 1 ? 28 + isLeapYear(d) : 31 - (i < 7 == i % 2)
  }
  return total
}
