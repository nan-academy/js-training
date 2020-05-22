const invert = obj => {
        let ArrEntries = Object.entries(obj).map(arr => arr.reverse())
        let answer = {}
        for (let val of ArrEntries) answer[val[0]] = val[1]
        return answer
}
