const dayOfTheYear = date => {
        let year = date.getFullYear()
        if (year < 1911) date.setMinutes(date.getMinutes() + 37)
        let month = date.getMonth()
        let day = date.getDate()
        let countDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
                countDays[1] = 29
        countDays = countDays.slice(0, -(12 - month))
        let daysPreviousMonths = countDays.length
                ? countDays.reduce((acc, el) => acc + el)
                : 0
        return daysPreviousMonths + day
}
