const isWinner = (candidate) =>
  winners()
    .getWinner(candidate)

    .catch((err) => Promise.reject(candidate + ' never was a winner'))

    .then((countryInfo) =>
      countryInfo.continent === 'Europe'
        ? Promise.resolve(countryInfo.id)
        : Promise.reject(
            candidate +
              ' is not what we are looking for because of the continent'
          )
    )

    .then(async (countryId) => {
      let arrInfo = await winners().getResults(countryId)
      return arrInfo.length >= 3
        ? Promise.resolve(
            candidate +
              ' won the FIFA World Cup in ' +
              (arrInfo.length === 1
                ? arrInfo[0].year
                : arrInfo.reduce((acc, obj, i) =>
                    i === 1 ? acc.year + ', ' + obj.year : acc + ', ' + obj.year
                  )) +
              ' winning by ' +
              (arrInfo.length === 1
                ? arrInfo[0].result
                : arrInfo.reduce((acc, obj, i) =>
                    i === 1
                      ? acc.result + ', ' + obj.result
                      : acc + ', ' + obj.result
                  ))
          )
        : Promise.reject(
            candidate +
              ' is not what we are looking for because of the number of times it was champion'
          )
    })

    .catch((d) => d)
