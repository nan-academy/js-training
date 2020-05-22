const fold = (arr, fn, acc) => (arr.length === 1) ? fn(acc, arr[0]) : fold(arr.slice(1), fn, fn(acc, arr[0]))

const foldRight = (arr, fn, acc) => {
        let cloneArr = [...arr].reverse()
        return fold(cloneArr, fn, acc)
}

const reduce = (arr, fn, acc) => {
        acc = acc || arr[0]
        if (arr.length === 1) return acc
        return reduce(arr.slice(1), fn, fn(acc, arr[1]))
}

const reduceRight = (arr, fn, acc) => {
        let cloneArr = [...arr].reverse()
        return reduce(cloneArr, fn, acc)
}
