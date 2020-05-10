const nasa = nbr =>
        [...Array(nbr).keys()]
                .map(el => el + 1)
                .map(el => (el % 5 === 0 && el % 3 === 0 ? 'NASA' : el))
                .map(el => (el % 5 === 0 ? 'SA' : el))
                .map(el => (el % 3 === 0 ? 'NA' : el))
                .join(' ')
