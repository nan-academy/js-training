const some = (arr, fn) => {
        for (let el of arr) if (fn(el) === true) return true
        return false
}

const every = (arr, fn) => {
        for (let el of arr) if (fn(el) === false) return false
        return true
}

const none = (arr, fn) => !some(arr, fn)
