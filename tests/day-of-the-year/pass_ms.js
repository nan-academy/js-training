const dayOfTheYear = (d) => {
  let year = d.getUTCFullYear()
  let month = d.getUTCMonth()
  let day = d.getUTCDate()
  return (
    (Date.UTC(year, month, day) - Date.UTC(year, 0, 0)) / 24 / 60 / 60 / 1000
  )
}
