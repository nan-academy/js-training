const floor = (nbr) => {
  if (nbr % 1 == 0) {
    return nbr
  } else if (nbr < 0) {
    return nbr - 1 - (nbr % 1)
  } else {
    return nbr - (nbr % 1)
  }
}

const trunc = (nbr) => {
  if (nbr % 1 === 0) {
    return nbr
  } else {
    return nbr - (nbr % 1)
  }
}

const ceil = (nbr) => {
  return trunc(nbr + (nbr > 0))
}

const round = (nbr) => {
  if (nbr % 1 == 0) {
    return nbr
  } else if (nbr >= 0 && nbr % 1 >= 0.5) {
    return nbr + 1 - (nbr % 1)
  } else if (!nbr >= 0 && nbr % -1 < -0.5) {
    return nbr - 1 - (nbr % -1)
  } else {
    return trunc(nbr)
  }
}
