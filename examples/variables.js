'use strict'

/*
  Variables
*/
// A variable allow you to store any values at the given identifier
// To achieve such a feat we first need to declare our variable
// We do that using the keyword `let` and then pick an identifier of our liking

let pouet


// Now the identifier pouet can be use in the rest of my code
// but we didn't gave any value to our variable so showing it's value
// will output undefined :

console.log(pouet)


// to assign a value to it, we use a simple =

pouet = 42

// Great, our variable identified by `pouet` now has the number 42 for value
// let's see what is showed now :

console.log(pouet)

// I can re assign the value of my variable just like we did before :
pouet = 'hehe'
console.log(pouet) // the same line of code now show the new value

// Valid identifiers can only contain: number, $, caps letter (A-Z),
// normal letter (a-z) and undescore `_`
let POUET_pouet // valid
let pouet4 // valid

// but POUET-pouet and 4pouet would be invalid identifers
// In JavaScript, it's standard to use camelCase for identifers
// since we can't use - as separator

// You can not use a variable before it's declaration
// You can do both the declaration and the assignation in one line:

let yo = 'lo'
// Here, we set the string value 'lo' to the variable identified by yo

/*
  Constant variables
*/

// Since in most cases we don't want the value of our variables to change
// It's better to use constant variables, using 'const' instead of 'let'

const isConstant = true
// Here, we set the boolean true value
// to the constant variable identified by 'isConstant'

// now we protected our variable against re-assignement


// There's shorthand for performing math operations on variables:
someVar += 5 // equivalent to someVar = someVar + 5 someVar is 10 now
someVar *= 10 // now someVar is 100
