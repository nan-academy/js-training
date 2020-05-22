const filterKeys = (obj, filterCondition) => {
        let answer = {}
        for (let [key, value] of Object.entries(obj)) if (filterCondition(key)) answer[key] = value
        return answer
}

const mapKeys = (obj, fun) => {
        let answer = {}
        for (let [key, value] of Object.entries(obj)) answer[fun(key)] = value
        return answer
}

const reduceKeys = (obj, ...args) => Object.keys(obj).reduce(...args)
