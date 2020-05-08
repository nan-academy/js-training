const sign = (el1, el2) =>
        (el1 < 0 && el2 >= 0) || (el1 >= 0 && el2 < 0) ? -1 : 1

const multiplyRec = (el1, el2) =>
        el2 === 0 || el1 === 0 ? 0 : el1 + multiplyRec(el1, el2 - 1)
const multiply = (el1, el2) =>
        sign(el1, el2) >= 0
                ? multiplyRec(Math.abs(el1), Math.abs(el2))
                : -multiplyRec(Math.abs(el1), Math.abs(el2))

const divideAbs = (el1, el2) => {
        let result = 0
        for (let i = el2; i <= el1; i = i + el2) {
                result++
        }
        return result
}
const divide = (el1, el2) =>
        sign(el1, el2) >= 0
                ? divideAbs(Math.abs(el1), Math.abs(el2))
                : -divideAbs(Math.abs(el1), Math.abs(el2))

const modulo = (el1, el2) => el1 - multiply(el2, divide(el1, el2))
