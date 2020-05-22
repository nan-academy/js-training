const filterValues = (obj, filterCondition) => {
        let answer = {}
        for (let [key, value] of Object.entries(obj)) if (filterCondition(obj[key])) answer[key] = value
        return answer
}

const mapValues = (obj, fun) => {
        let answer = {}
        for (let [key] of Object.entries(obj)) answer[key] = fun(obj[key])
        return answer
}

const reduceValues = (obj, fun, initialValue) => {
        let answer = initialValue || 0
        for (let [_, value] of Object.entries(obj)) answer = fun(answer, value)
        return answer
}
