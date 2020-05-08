const indexOf = (el, val, fromIndex) => {
        fromIndex === undefined ? (fromIndex = 0) : fromIndex
        for (let i = fromIndex; i <= el.length; i++) if (el[i] === val) return i
        return -1
}

const lastIndexOf = (el, val, fromIndex) => {
        fromIndex === undefined ? (fromIndex = el.length) : fromIndex
        for (let i = fromIndex; i >= 0; i--) if (el[i] === val) return i
        return -1
}

const includes = (el, val) => {
        for (let e of el) if (e === val) return true
        return false
}
