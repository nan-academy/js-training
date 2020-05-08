const repeat = (el, nbr) => (nbr > 0 ? `${el}${repeat(el, nbr - 1)}` : '')
