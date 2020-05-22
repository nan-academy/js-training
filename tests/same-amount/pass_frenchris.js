const sameAmount = (str, reg1, reg2) => {

        let pattern1 = new RegExp(reg1, 'g')
        let pattern2 = new RegExp(reg2, 'g')

        let result1 = str.match(pattern1)
        let result2 = str.match(pattern2)

        if (result1 && result2 && result1.length === result2.length) return true
        return false

}
