const treat = el => {
        for (let i = 0; i < el.length / 2; i++)
                [el[i], el[el.length - 1 - i]] = [el[el.length - 1 - i], el[i]]
        return el
}

const reverse = el => {
        if (Array.isArray(el)) return treat(el)
        else return treat(el.split('')).join('')
}
