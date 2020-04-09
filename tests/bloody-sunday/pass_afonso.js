const bloodySunday = (date) => {
  let year = date.getUTCFullYear()
  let month = date.getUTCMonth()
  let day = date.getUTCDate()
  let d = new Date()
  d.setFullYear(year, month, day)

  let s = new Date()
  s.setFullYear(1, 0, 1)

  let nbr = 1
  while (s.getTime() !== d.getTime()) {
    s.setDate(s.getDate() + 1)
    nbr++
    if (nbr === 7) {
      nbr = 1
    }
  }
  switch (nbr) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
  }
}
