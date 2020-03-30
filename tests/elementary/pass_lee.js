const multiply = (nbr, nbr1) =>
  nbr1 == 0
    ? 0
    : nbr1 < 0
    ? multiply(nbr, nbr1 + 1) - nbr
    : multiply(nbr, nbr1 - 1) + nbr

const divide = (nbr, nbr1) => {
  let sign = (nbr < 0) ^ (nbr1 < 0) ? -1 : 1
  nbr = Math.abs(nbr)
  nbr1 = Math.abs(nbr1)

  let qut = 0
  while (nbr >= nbr1) {
    nbr -= nbr1
    qut++
  }
  return multiply(sign, qut)
}

const modulo = (nbr, nbr1) => {
  let sign = (nbr < 0 && nbr1 < 0) || (nbr < 0 && nbr1 > 0) ? -1 : 1
  nbr = Math.abs(nbr)
  nbr1 = Math.abs(nbr1)

  let qut = 0
  while (nbr >= nbr1) {
    nbr -= nbr1
    qut++
  }
  return multiply(sign, nbr)
}
