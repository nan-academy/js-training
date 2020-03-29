const findExpression = nbr => {
  return find(1, '1', nbr)
}

const find = (current, history, target) => {
  return current == target
    ? history
    : current > target
    ? null
    : find(current + 4, `${history} ${add4}`, target) ||
      find(current * 2, `${history} ${mul2}`, target)
}
