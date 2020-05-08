// const add4 = '+4'
// const mul2 = '*2'

const multipleOf2 = nbr => {

        let count = -1
        let answer = 1
        while (answer <= nbr / 2) {
                answer = answer * 2
                count++
        }
        return count
}

const multiplyBy2 = nbr => {
        if (nbr === 1) {
                return 2
        } else {
                return (2 * multiplyBy2(nbr - 1))
        }
}



const findExpression = nbr => {
        let result = '1'
        let countMult2 = multipleOf2(nbr)
        let acc = 1 * multiplyBy2(countMult2)
        let countAdd4 = 0

        let diff = nbr - acc
        if (diff % 4 === 0) {
                countAdd4 = diff / 4
        } else {
                return undefined
        }

        for (let i = 0; i < countMult2; i++) {
                result = result + ' ' + mul2
        }
        for (let i = 0; i < countAdd4; i++) {
                result = result + ' ' + add4
        }

        return result
}

console.log(findExpression(14))
