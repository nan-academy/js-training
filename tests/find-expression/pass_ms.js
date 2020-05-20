const findExpression = (nbr) => {
    if (nbr % 2 !== 0) {
        return undefined
      }
  const find = (current, history) => {
    if (current == nbr) {
      return history
    } else if (current > nbr) {
      return null
    } else {
      return (
        find(current + 4, `${history} ${add4}`) ||
        find(current * 2, `${history} ${mul2}`)
      )
    }
  }
  return find(1, '1')
}
