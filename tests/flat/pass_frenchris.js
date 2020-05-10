const flat = (el, count) => {
        let answer = []
        if (count === undefined) count = 1
        let array = false
        for (let e of el) {
                if (Array.isArray(e)) {
                        array = true
                        answer.push(...e)
                } else answer.push(e)
        }
        if (count > 1 && array) answer = flat(answer, count - 1)
        return answer
}
