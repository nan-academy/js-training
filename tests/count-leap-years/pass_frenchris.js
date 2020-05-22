const countLeapYears = date => {
        let year = date.getYear() + 1900
        let count = -1
        for (let i = 0; i < year; i++)
                if (i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)) count++
        return count
}
