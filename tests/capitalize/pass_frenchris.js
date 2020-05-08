const capitalize = el => {
        let str = el.toLowerCase().split('')
        str[0] = str[0].toUpperCase()
        return str.join('')
}
