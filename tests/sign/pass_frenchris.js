const sign = el => {
        if (el > 0) return 1
        else if (el === 0) return 0
        else return -1
}

const sameSign = (el1, el2) => sign(el1) === sign(el2)
