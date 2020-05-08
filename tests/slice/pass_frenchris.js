const treat = (el, start, end) => {
        let answer = []
        end < 0 ? (end = el.length + end) : end
        start < 0 ? (start = el.length + start) : start
        end === undefined ? (end = el.length) : end
        for (let i = start; i < end; i++) answer.push(el[i])
        return answer
}

const slice = (el, start, end) => {
        if (Array.isArray(el)) return treat(el, start, end)
        else return treat(el.split(''), start, end).join('')
}
