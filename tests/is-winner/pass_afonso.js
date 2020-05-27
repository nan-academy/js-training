const isWinner = (candidate) =>
  new Promise((resolve, reject) => {
    if (candidate in winners) {
      resolve(candidate)
    } else {
      reject(candidate + ' never was a winner')
    }
  })
    .then(
      (country) =>
        new Promise((resolve, reject) => {
          if (winners[country].continent === 'Europe') {
            resolve(country)
          } else {
            reject(
              country +
                ' is not what we are looking for because of the continent'
            )
          }
        })
    )
    .then((country) => {
      if (winners[country].times >= 3) {
        return country
      }
      throw (
        country +
        ' is not what we are looking for because of the times it was champion'
      )
    })

    .then((data) => data + ' is up to the standards required')

    .catch((error) => error)
