const chunk = (el, size) => {
        let answer = []
        let chunk = []
        let counter = 0
        for (let i = 0; i < el.length; i++) {
                chunk.push(el[i])
                counter++
                if (counter === size) {
                        answer.push(chunk)
                        chunk = []
                }
        }
        if (chunk.length) answer.push(chunk)
        return answer
}
