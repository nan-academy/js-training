const pyramid = (el, size) => {
        let answer = ''
        for (let i = 0; i < size; i++) {
                let arr = [...Array(i * 2 + 1)].fill(el).join('')
                let arr2 = [...Array((size - 1 - i) * el.length)].fill(' ').join('')
                arr = arr2 + arr + '\n'
                answer = answer + arr
        }
        return answer.slice(0, -1)
}
