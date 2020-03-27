const isPos = nbr => nbr >= 0

const round = nbr =>
  nbr % 1 == 0
    ? nbr
    : isPos(nbr) && nbr % 1 >= 0.5
    ? nbr + 1 - (nbr % 1)
    : !isPos(nbr) && nbr % -1 < -0.5
    ? nbr - 1 - (nbr % -1)
    : trunc(nbr)

const ceil = nbr =>
  nbr % 1 == 0
    ? nbr
    : isPos(nbr)
    ? nbr + 1 - (nbr % 1)
    : trunc(nbr)

const floor = nbr =>
  nbr % 1 == 0 ? nbr : nbr < 0 ? nbr - 1 - (nbr % 1) : nbr - (nbr % 1)

const trunc = nbr =>
  nbr % 1 == 0 ? nbr : nbr > 0 ? nbr - (nbr % 1) : nbr - (nbr % 1)
