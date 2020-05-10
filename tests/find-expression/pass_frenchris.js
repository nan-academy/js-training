const findExpression = (nbr, acc, answer) => {
        acc = acc || 1
        answer = answer || "1"
        if (acc > nbr)
                return undefined
        if (acc === nbr)
                return answer
        if (acc + 4 === nbr)
                return answer + " " + add4
        if (acc * 2 === nbr)
                return answer + " " + mul2
        return (findExpression(nbr, acc + 4, answer + " " + add4) || findExpression(nbr, acc * 2, answer + " " + mul2))
}
