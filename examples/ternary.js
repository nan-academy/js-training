'use strict'

/*

  Ternary Operator

  This operator is the simplest way to express a condition

  It allow you to decide if you want to do one thing or the other
  It looks like that:

  condition ? true : false

  or :
  count > 9000 ? 'OVER 9000!!' : 'not over 9000'

  and read such as is count superior of 9000 ?
    yes return the string 'OVER 9000!!'
    no : return the string 'not over 9000'


  So you have 3 expression and 2 symbols, the first is the condition
  followed by ? then the expression executed if the condition is truthy
  followed by : then the expression executed if the condition is falsy
*/

const isTruthy = value => value ? 'yes' : 'no'

console.log(isTruthy(5))
console.log(isTruthy(0))
console.log(isTruthy([]))
console.log(isTruthy(''))
console.log(isTruthy(null))

// for long expression, we can split our ternary in mutiline like so :
const isTruthyVerbose = value => value
  ? 'It appears to be something the truth can be find in'
  : 'no, It is not anything close to the truth'

console.log(isTruthyVerbose({}))
console.log(isTruthyVerbose())
console.log(isTruthyVerbose(undefined))

// let's use a condition to rewrite the function Math.min
const min = (a, b) => a < b ? a : b
// So we declare a constant variable min and assign it a function
// this function takes 2 arguments, a and b
// if a is lower than b we return a otherwise b is returned

// let's test this out
console.log(min(4, 29))
console.log(min(4, 2))
// looking good, you should try to rewrite
// Math.max
// Math.sign
// Math.abs
