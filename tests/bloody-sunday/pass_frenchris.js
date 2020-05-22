const bloodySunday = date => {
        let baseTime = Number(new Date('0001-01-01').getTime())
        let dateTreated = Number(date.getTime())
        let nbrOfDays = (dateTreated - baseTime) / 86400000

        if (nbrOfDays % 6 === 0) return 'Monday'
        if (nbrOfDays % 6 === 1) return 'Tuesday'
        if (nbrOfDays % 6 === 2) return 'Wednesday'
        if (nbrOfDays % 6 === 3) return 'Thursday'
        if (nbrOfDays % 6 === 4) return 'Friday'
        if (nbrOfDays % 6 === 5) return 'Saturday'
}
