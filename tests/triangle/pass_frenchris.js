const triangle = (char, size) => {
        let answer = ''
        for (let i = 0; i < size; i++) {
                let chunk = ''
                for (let j = 0; j <= i; j++) chunk = chunk + char
                answer = answer + chunk + '\n'
        }
        return answer.slice(0, -1)
}
