const addDays = (d, days) => {
  const date = new Date(d.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

const firstDayWeek = (week, year) => {
  if (week === 1) return '01-01-' + year
  let date = new Date(year + '-01-01')
  while (date.getUTCDay() !== 1) {
    date = addDays(date, 1)
  }
  let searchedWeek = date.getUTCDate() === 1 ? 1 : 2
  while (searchedWeek !== week) {
    date = addDays(date, 7)
    if (date.getUTCHours() === 23) {
      date = addDays(date, 1)
      date.setUTCHours(0)
    }
    searchedWeek++
  }
  const day =
    date.getUTCDate().toString().length === 1
      ? '0' + date.getUTCDate()
      : date.getUTCDate()
  const month =
    (date.getUTCMonth() + 1).toString().length === 1
      ? '0' + (date.getUTCMonth() + 1)
      : date.getMonth() + 1

  return day + '-' + month + '-' + year
}