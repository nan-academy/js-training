const formatResults = (country) =>
  db.getResults(country.id).then((results) => {
    if (results.length < 3) {
      return `${name} is not what we are looking for because of the number of times it was champion`
    }

    const years = results.map((r) => r.year).join(', ')
    const scores = results.map((r) => r.score).join(', ')
    return `${name} won the FIFA World Cup in ${years} winning by ${scores}`
  })

const isWinner = (name) =>
  db
    .getWinner(name)
    .then((country) =>
      country.continent === 'Europe'
        ? formatResults(country)
        : `${name} is not what we are looking for because of the continent`
    )
    .catch((err) => {
      if (err.message === 'Country Not Found') {
        return `${name} never was a winner`
      }
      throw err
    })