const days = [
  'Saturday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

const isLeapYear = (year) =>
  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)

const leapYears = (date) => {
  const year = date.getFullYear()
  let count = -1
  for (let i = 1; i < year; i++) {
    count = count + (isLeapYear(i) ? 1 : 0)
  }
  return count
}

const dayOfYear = (date) => {
  const month = date.getUTCMonth()
  let total = date.getUTCDate(),
    i = 0
  while (i < month) {
    if (i === 1) {
      total += isLeapYear(date.getFullYear()) ? 29 : 28
    } else {
      total += i <= 6 ? (i % 2 === 0 ? 31 : 30) : i % 2 === 0 ? 30 : 31
    }
    i++
  }
  return total
}

const bloodySunday = (date) => {
  const year = date.getFullYear()
  return year === 0
    ? days[(leapYears(date) + dayOfYear(date)+1) % 6]
    : days[
    ((date.getUTCFullYear() - 1) * 365 +
      leapYears(date) +
      dayOfYear(date) +
      1) %
    6
      ]
}
