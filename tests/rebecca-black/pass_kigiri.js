const isFriday = (d) => d.getDay() === 5
const isWeekend = (d) => d.getDay() === 6 || d.getDay() === 0
const isLeapYear = (d) => {
  const y = d.getFullYear()
  return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)
}

const isLastDayOfMonth = (date) => {
  const d = date.getUTCDate()
  const m = date.getUTCMonth()
  return d === (m === 1 ? 28 + isLeapYear(date) : 30 + (m % 2))
}
