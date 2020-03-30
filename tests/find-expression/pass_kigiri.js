const doOp = (stack, current, expected) => {
  const a = current + 4
  if (a === expected) return [...stack, add4]
  if (a > expected) return
  const nextA = doOp([...stack, add4], a, expected)
  if (nextA) return nextA

  const b = current * 2
  if (a === expected) return [...stack, mul2]
  if (b > expected) return
  const nextB = doOp([...stack, mul2], b, expected)
  if (nextB) return nextB
}

const findExpression = n => {
  const stack = doOp([], 1, n)
  return stack && `1 ${stack.join(' ')}`
}
