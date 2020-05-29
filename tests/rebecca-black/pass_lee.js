const isFriday = (date) => date.getDay() === 5
const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0

const isLeapYear = (date) => {
  const y = date.getFullYear()
  return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)
}

const isLastDayOfMonth = (date) => {
  const d = date.getUTCDate()
  const m = date.getUTCMonth()
  let leap = m === 1 && d === (isLeapYear(date) ? 29 : 28)
  let normal = d === (m < 7 == m % 2 ? 30 : 31)
  return leap || normal
}
