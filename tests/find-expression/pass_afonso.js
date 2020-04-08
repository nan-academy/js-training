const findExpression = nbr => {
  let result = '1', resultNbr = 1, restFour = false
  if (nbr % 2 !== 0){
    return undefined
  }
  while (resultNbr !== nbr) {
    if (resultNbr * 2 <= nbr && !restFour) {
      resultNbr *= 2
      result += ' ' + mul2
    } else if (resultNbr + 4 <= nbr) {
      resultNbr += 4
      result += ' ' + add4
      restFour = false
    } else {
      let help = result.split(' ')
      while (help[help.length - 1] !== '*2') {
        help.pop()
        resultNbr -= 4
      }
      help.pop()
      result = help.join(' ')
      resultNbr /= 2
      restFour = true
    }
  }
  return result
}
