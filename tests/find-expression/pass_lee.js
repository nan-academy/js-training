const findExpression = (nbr) => find(1, '1', nbr)

const find = (current, history, target) =>
  current == target
    ? history
    : current > target
    ? undefined
    : find(current + 4, `${history} ${add4}`, target) ||
      find(current * 2, `${history} ${mul2}`, target)
