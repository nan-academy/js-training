const format = (dateObj, formatStr) => {

        let year = dateObj.getFullYear()
        let month = dateObj.getMonth()
        let dayOfWeek = dateObj.getDay()
        let dateOfMonth = dateObj.getDate()

        let hours = dateObj.getHours()
        let minutes = dateObj.getMinutes()
        let seconds = dateObj.getSeconds()

        let months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"]
        let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        if (formatStr === "y") {
                if (year > 0) return String(year)
                return String(-year)
        }
        if (formatStr === "yyyy") {
                if (year > 0) return String(year)
                return '0' + String(-year)
        }
        if (formatStr === "yyyy G") {
                if (year > 0) return String(year) + ' AD'
                return '0' + String(-year) + ' BC'
        }
        if (formatStr === "yyyy GGGG") {
                if (year > 0) return String(year) + ' Anno Domini'
                return '0' + String(-year) + ' Before Christ'
        }
        if (formatStr === "M") return String(month + 1)
        if (formatStr === "MM") {
                if (String(month + 1).length === 2) return String(month + 1)
                return '0' + String(month + 1)
        }
        if (formatStr === "MMM") return months[month].slice(0, 3)
        if (formatStr === "MMMM") return months[month]
        if (formatStr === "d") return String(dateOfMonth)
        if (formatStr === "dd") {
                if (String(dateOfMonth).length === 1) return '0' + String(dateOfMonth)
                return String(dateOfMonth)
        }
        if (formatStr === 'E') return weekdays[dayOfWeek].slice(0, 3)
        if (formatStr === 'EEEE') return weekdays[dayOfWeek]
        if (formatStr === 'H:m:s') return String(hours) + ":" + String(minutes) + ":" + String(seconds)
        if (formatStr === 'HH:mm:ss') {
                let treatedHours = String(hours)
                let treatedMins = String(minutes)
                let treatedSeconds = String(seconds)
                if (String(treatedHours).length === 1) treatedHours = "0" + treatedHours
                if (String(treatedMins).length === 1) treatedMins = "0" + treatedMins
                if (String(treatedSeconds).length === 1) treatedSeconds = "0" + treatedSeconds
                return treatedHours + ":" + treatedMins + ":" + treatedSeconds
        }
        if (formatStr === 'h:m:s a') {
                let a = " "
                if (hours >= 12) {
                        a += "PM"
                        hours += -12
                }
                else a += "AM"
                return String(hours) + ":" + String(minutes) + ":" + String(seconds) + a
        }
        if (formatStr === 'hh:mm:ss a') {
                let a = " "
                let zeroHour = ""
                let zeroMinute = ""

                if (hours >= 12) {
                        a += "PM"
                        hours += -12


                }
                else a += "AM"
                if (String(hours).length === 1) zeroHour = "0"
                if (String(minutes).length === 1) zeroMinute = "0"

                return zeroHour + String(hours) + ":" + zeroMinute + String(minutes) + ":" + String(seconds) + a
        }
        if (formatStr === 'HH(mm)ss [dd] <MMM>') {
                let zeroHour = ""
                let zeroMinute = ""
                let zeroDate = ""

                if (hours >= 12) {

                        hours += -12


                }
                if (String(hours).length === 1) zeroHour = "0"
                if (String(minutes).length === 1) zeroMinute = "0"
                if (String(dateOfMonth).length === 1) zeroDate = "0"

                return zeroHour + String(hours) + "(" + zeroMinute + String(minutes) + ")" + String(seconds) + ` [` + zeroDate + `${dateOfMonth}] ` + `<${months[month].slice(0, 3)}>`

        }
        if (formatStr === 'dd/MM/yyyy') {
                let zeroDayOfTheMonth = ''
                let zeroMonth = ''
                let zeroYear = ''
                if (String(dateOfMonth).length === 1) zeroDayOfTheMonth = "0"
                if (String(month + 1).length === 1) zeroMonth = "0"
                if (String(year).length === 3) zeroYear = "0"
                return zeroDayOfTheMonth + String(dateOfMonth) + '/' + zeroMonth + String(month + 1) + '/' + zeroYear + String(year)
        }
}
