'use strict'

// first line of the file must be 'use strict' to ensure we use javascript
// in strict mode

// lines starting with two slashes are comments.
// Comments allow you to annotate your code with text that will be ignored
// by javascript, it's for keep notes and help too clarify code

/* To avoid adding // before each lines
  Multiline comments start with slash-star,
  and end with star-slash
*/



/*
  Primitives and operators
*/

// Booleans are the simplest type
console.log(true)
console.log(false)

// Numbers
console.log(42)
console.log(21 + 21)
console.log(21 * 2)
console.log(84 / 2)
console.log(1042 % 50)
console.log(2.1 * 10 + 21)
console.log(4.2 * (5 + 5)) // Precedence is enforced with parentheses.


// Strings are with ', " or `
console.log('Hello World!')
console.log("I'm such a nice boy") // but you may use " if your string contains '

// if you need to have a quote in a string you can escape it with a backslash \
console.log('It\'s time to escape !!')
console.log('Hello' + 'World!')
console.log('Hello\nWorld!')
console.log(`Hello
World!`)

// There's also `null` and `undefined`.
console.log(null) // used to indicate a deliberate non-value
console.log(undefined) // used to indicate a value is not currently present
// (although `undefined` is actually a value itself)
// I recommand to avoid using null as much as possible and always use undefined


// You may mix types, but results may not be what you expect
console.log('21' + 21)
console.log('21' * 2)
console.log('21' * true) // true is cooerced to be the number 1
console.log('21' * false) // false become the number 0

// When javascript can't compute a number it returns NaN (stands for 'Not a Number')
console.log(NaN)
console.log('21' * 'pouet')

// Infinity is another special number
console.log(Infinity)
console.log(1 / 0)
console.log(-Infinity) // it can be negative
console.log(-1 / 0)

// Comparaisons always return a boolean :

// Equality is ===
console.log(1 === 1) // true
console.log(1 === 2) // false

// Inequality is !==
console.log(1 !== 1) // = false
console.log(1 !== 2) // = true

// You can use the Negation ! symbol to get the inverse boolean of any value
console.log(!true) // = false
console.log(!false) // = true

// Greater than and lesser than
console.log(1 < 10) // = true
console.log(1 > 10) // = false
console.log(2 <= 2) // = true
console.log(2 >= 2) // = true

// and it works for strings
console.log('a' < 'b') // = true
console.log('aba' < 'abc') // = true


// THE MORE YOU KNOW :

// Non boolean values are either 'truthy' or 'falsy'
console.log(!0) // = true
console.log(!1) // = false
console.log(!123) // = false
console.log(!'') // = true
console.log(!'pouet') // = false

// Type coercion is performed for comparisons with double equals...
console.log('5' == 5) // = true
console.log(null == undefined) // = true

// ...avoid loosing your hairs and you use the strict === instead... please...
console.log('5' === 5) // = false
console.log(null === undefined) // = false

// JavaScript has one number type (which is a 64-bit IEEE 754 double).
// Doubles have a 52-bit mantissa, which is enough to store integers
// up to about 9✕10¹⁵ precisely.

// Float have limited precision, this is why :
console.log(0.1 + 0.2) // is not precisly 0.3 but 0.30000000000000004
