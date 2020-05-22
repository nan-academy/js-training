const findIP = str => {
        let pattern1 = "([2][0-5][0-5]|[1][0-9][0-9]|[1-9][0-9]|[0-9])"
        let pattern2 = new RegExp(pattern1 + "\\." + pattern1 + "\\." + pattern1 + "\\." + pattern1 + "(:\\d+|(?=\\b)|$)", "g")
        return str.match(pattern2)
}
