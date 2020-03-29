const sign = nbr => (nbr > 0 ? 1 : nbr < 0 ? -1 : 0)

const sameSign = (nbr, nbr1) => sign(nbr) === sign(nbr1)
