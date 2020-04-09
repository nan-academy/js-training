function multiply(x, y) {
  if (y > 0) {
    return x + multiply(x, y - 1)
  } else if ((y < 0) & (x !== 0)) {
    return -multiply(x, -y)
  }
  return 0
}

const divide = function (dividend, divisor) {
  if (divisor === 0) {
    return Number.MAX_VALUE
  }

  if (dividend === 0) {
    return 0
  }

  var result = 0,
    isNeg = false,
    temp,
    i = 0

  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    isNeg = true
  }

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  if (divisor === 1 || divisor === -1) {
    return isNeg ? -dividend : dividend
  }

  temp = divisor

  while (divisor << (i + 1) <= dividend) {
    i++
  }

  while (dividend >= divisor) {
    temp = divisor << i

    if (dividend >= temp) {
      result += 1 << i
      dividend -= temp
    }

    i--
  }

  return isNeg ? -result : result
}
function modulo(num1, num2) {
  var sign = num1 < 0 ? -1 : 1
  var dividend = Math.abs(num1)
  var divisor = Math.abs(num2)

  if (dividend === 0) {
    return 0
  }
  if (dividend === 0 || isNaN(dividend) || isNaN(divisor)) {
    return NaN
  }
  if (dividend < divisor) {
    return multiply(sign, dividend)
  }

  var counter = dividend
  while (counter >= divisor) {
    counter = counter - divisor
  }
  return multiply(sign, counter)
}
