/*

## Is Winner

###Instructions

You have to rectify the following commented code in order to return a Promise
with the string:

- <country> + ' never was a winner', if the country passed
in `isWinner` is not on the `winners` table

- <country> + ' is not what we are looking for because of
the continent', if the country passed in `isWinner` is not from the european
continent

- <country> + ' is not what we are looking for because of
the times it was champion', if the country passed in `isWinner` was champion
less than 3 times

- <country> + ' is up to the standards required', otherwise

*/
const winners = {
  Brazil: { times: '5', continent: 'South America' },
  Germany: { times: '4', continent: 'Europe' },
  Italy: { times: '4', continent: 'Europe' },
  Argentina: { times: '2', continent: 'South America' },
  France: { times: '2', continent: 'Europe' },
  Uruguay: { times: '2', continent: 'South America' },
  England: { times: '1', continent: 'Europe' },
  Spain: { times: '1', continent: 'Europe' },
}
/*
const isWinner = (candidate) =>
  new Promise((resolve, reject) => {
    if (candidate in winners) {
      resolve(candidate)
    } else {
      reject(candidate + ' never was a winner')
    }
  })

    .catch((notWinner) => notWinner)

    .then((country) => {
      if (winners[country].continent !== 'Europe') {
        return country
      } else {
        country + ' is not what we are looking for because of the continent'
      }
    })

    .then((country) => (reject, resolve) => {
      if (winners[country].times >= 3) {
        resolve(country)
      }
      reject(
        country +
          ' is not what we are looking for because of the times it was champion'
      )
    })

    .catch((error) => {
      console.log(error)
      return 'End'
    })

    .then((data) => data + ' is up to the standards required')

    .catch((error) => error)
*/
/// * //

/// * //
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) =>
  isWinner('England').then((data) => {
    return eq(
      data,
      'England is not what we are looking for because of the times it was champion'
    )
  })
)

t(({ eq }) =>
  isWinner('Colombia').then((data) => {
    return eq(data, 'Colombia never was a winner')
  })
)

t(({ eq }) =>
  isWinner('Uruguay').then((data) => {
    return eq(
      data,
      'Uruguay is not what we are looking for because of the continent'
    )
  })
)

t(({ eq }) =>
  isWinner('').then((data) => {
    return eq(data, ' never was a winner')
  })
)

t(({ eq }) =>
  isWinner('Brazil').then((data) => {
    return eq(
      data,
      'Brazil is not what we are looking for because of the continent'
    )
  })
)

t(({ eq }) =>
  isWinner('Germany').then((data) => {
    return eq(data, 'Germany is up to the standards required')
  })
)

Object.freeze(tests)
