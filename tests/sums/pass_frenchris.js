const sumArray = arr => arr.reduce((acc, el) => acc + el)
const eqArrays = (arr1, arr2) => arr1.toString() === arr2.toString()
const containsArray = (arr1, arr2beAdded) => arr1.some(el => eqArrays(el, arr2beAdded))
const arrToNbr = arr => Number(arr.map(el => el.toString()).join(''))
const nbrToArr = nbr => String(nbr).split('').map(el => Number(el))

const minimum = arr => {
        let answer = [...Array(arr.length).keys()].map(el => el = 1)
        let sum = sumArray(arr)
        answer[answer.length - 1] = sum - answer.length + 1
        return arrToNbr(answer)
}

const checkPossibleArrays = (arr, nbr) => {
        let max = arrToNbr(arr)
        let min = minimum(arr)
        let answer = []
        for (let i = min; i <= max; i++) {
                let arrChecked = nbrToArr(i)
                if (sumArray(arrChecked) === nbr && !containsArray(answer, arrChecked.sort()) && !arrChecked.includes(0)) {
                        answer.push(arrChecked)
                }
        }
        return answer
}

const arrayMax = nbr => {
        let answer = []
        for (let i = 2; i <= nbr; i++) {
                if (nbr % i === 0) {
                        let arr = []
                        for (let j = 0; j < i; j++)arr.push(nbr / i)
                        answer.push(arr)
                } else {
                        let arr = []
                        for (let j = 0; j < i; j++) arr.push(Math.floor(nbr / i))
                        let remainer = nbr % i
                        for (let k = arr.length - 1; remainer > 0; k--) {
                                arr[k]++
                                remainer--
                        }
                        answer.push(arr)
                }
        }
        return answer
}

const sums = nbr => {
        let answer = []
        if (nbr === 1) return answer
        answer = arrayMax(nbr)
        return answer.flatMap(el => checkPossibleArrays(el, nbr)).sort()
}
