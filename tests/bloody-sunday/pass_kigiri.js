const countLeapYears = (d) => {
  const y = d.getFullYear() - 1
  return Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)
}

const isLeapYear = (d) => {
  const y = d.getFullYear()
  return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)
}

const dayOfTheYear = (d) => {
  const m = d.getMonth()
  let i = -1,
    total = d.getDate()
  while (++i < m) {
    if (i === 1) {
      total += isLeapYear(d) ? 29 : 28
    } else {
      total += i % 2 ? 30 : 31
    }
  }
  return total
}

const daysMap = [
  'Saturday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
]

const bloodySunday = (date) => {
  const y = date.getFullYear() - 1
  const days = y * 365 + countLeapYears(date) + dayOfTheYear(date)
  return daysMap[days % 6]
}
