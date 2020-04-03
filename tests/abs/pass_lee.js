const isPositive = nbr =>
  Math.sign(nbr) == -1 || Math.sign(nbr) == 0 ? false : true

const abs = nbr => (isPositive(nbr) || nbr == 0 ? nbr : -nbr)
