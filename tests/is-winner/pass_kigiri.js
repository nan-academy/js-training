const isWinner = async (name) => {
  try {
    const country = await db.getWinner(name)
    if (country.continent !== 'Europe') {
      return `${name} is not what we are looking for because of the continent`
    }

    const results = await db.getResults(country.id)
    if (results.length < 3) {
      return `${name} is not what we are looking for because of the number of times it was champion`
    }

    const years = results.map(r => r.year).join(', ')
    const scores = results.map(r => r.score).join(', ')
    return `${name} won the FIFA World Cup in ${years} winning by ${scores}`
  } catch (err) {
    if (err.message === 'Country Not Found') {
      return `${name} never was a winner`
    }
    throw err
  }
}
