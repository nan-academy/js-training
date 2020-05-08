const isPositive = el => (el > 0 ? true : false)

const abs = el => {
        if (el === 0) return 0
        else if (isPositive(el)) return el
        return -el
}
