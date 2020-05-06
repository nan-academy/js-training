/*
## Console

### Instructions

We will now start by learning to use the console.

This is your most usefull tool to see what your code is doing.

You must first open the console of your browser.
(this step depends of your browser, I'll let you google how to do that)

All right, from here we can do a bunch of stuff,
but want we want to do is login values

console.log('Hello')
// you should see this text in your console

// now texts in javascript are called `strings`
// I think it's because they are a chain of characters
// H, e, l, l, o
// theys are enclosed by ', " or `
console.log('World !') // single quotes
console.log("It's automatic !") // double quotes
console.log(`"WoW" !`) // back quotes

// Some characters need to be escaped with a backslash \
console.log("It's automatic")
// for example, here we started a string with '
// as such, the next ' would signal the end of the string
// or, we want to include the ' inside the string
// the \' tells it to ignore the special meaning of the character
// and just use it as a litteral character.

// line break in strings only work inside ` (back quotes)
console.log(`Hello
World!`)

// the rest of them must be written as \n
console.log(`Hello\nWorld!`)
// that's called an escape sequence

// ok moving on to the numbers:
console.log(42)
console.log(0.75)
console.log(-75)

// you can also use operators to do basic math
console.log(21 + 21)
console.log(21 * 2)
console.log(84 / 2)
console.log(1042 % 50)
console.log(2.1 * 10 + 21)
console.log(4.2 * (5 + 5)) // Precedence is enforced with parentheses.

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

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => true)

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

// links: - https://mathiasbynens.be/notes/javascript-escapes (more about escape sequences)
