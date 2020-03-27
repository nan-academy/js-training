const repeat = (str, nbr) => nbr == 0 ? '' : repeat(str, nbr - 1) + str
