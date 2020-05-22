const groupPrice = str => {
        let answer = []
        let pattern1 = new RegExp(/(\$|USD)\d+\.\d+/g)
        let pattern2 = new RegExp(/(?<=(\$|USD))\d+/g)
        let pattern3 = new RegExp(/(?<=\.)\d+/g)

        let group1 = str.match(pattern1) || []
        let group2 = str.match(pattern2) || []
        let group3 = str.match(pattern3) || []

        for (let i = 0; i < group1.length; i++) answer.push([group1[i], group2[i], group3[i]])

        return answer
}
