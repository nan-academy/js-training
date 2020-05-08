const check = (el, sep, i) => {
        if (el.length - i < sep.length) return false
        for (let j = 0; j < sep.length; j++) if (el[i + j] !== sep[j]) return false
        return true
}

const split = (el, sep) => {
        if (sep === '') return el
        let answer = []
        let word = ''
        for (let i = 0; i < el.length; i++) {
                if (check(el, sep, i)) {
                        answer.push(word)
                        word = ''
                        i = i + sep.length - 1
                } else word = word + el[i]
        }
        answer.push(word)
        return answer
}

const join = (el, sep) => {
        let answer = ''
        for (let e of el) answer = answer + sep + e
        return answer.slice(sep.length)
}
