const pick = (obj, arrKeys) => {
        let ArrEntries = Object.entries(obj).filter(arr => Array.isArray(arrKeys) ? arrKeys.includes(arr[0]) : [arrKeys].includes(arr[0]))
        let answer = {}
        for (let val of ArrEntries) answer[val[0]] = val[1]
        return answer
}

const omit = (obj, arrKeys) => {
        let ArrEntries = Object.entries(obj).filter(arr => Array.isArray(arrKeys) ? !arrKeys.includes(arr[0]) : ![arrKeys].includes(arr[0]))
        let answer = {}
        for (let val of ArrEntries) answer[val[0]] = val[1]
        return answer
}
