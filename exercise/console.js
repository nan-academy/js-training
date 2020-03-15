/*

## Console

We will now start by learning to use the console.

This is your most usefull tool to see what your code is doing.

You must first open the console of your browser.
(this step depends of your browser, I'll let you google how to do that)

All right, from here we can do a bunch of stuff,
but want we want to do is login values

///*/// ⚡

console.log('Hello')
// you should see this text in your console

// now texts in javascript are called `strings`
// I think it's because they are a chain of characters
// H, e, l, l, o
// theys are enclosed by ', " or `
console.log('World !')   // single quotes
console.log("It's automatic !") // double quotes
console.log(`"WoW" !`)          // back quotes

// Some characters need to be escaped with a backslash \
console.log('It\'s automatic')
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




///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => true)

// The more you know:
// - https://mathiasbynens.be/notes/javascript-escapes (more about escape sequences)