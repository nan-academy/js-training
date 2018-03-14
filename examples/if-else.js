'use strict'

/*
  if / else

  We could use ternary and composition for all of our program
  but sometimes it's juste more readable to use if / else instead

  if / else can do a bit more than ternaries
    - you can have an if and no else
    - you can have multiple expression in an if statement
     (you would have to create a function do that in a ternary)

  But if don't return a value by themself
  that's why we need to introduce the keyword return
  that allow us to specify the return value of our function

  note that once a function return, the rest of it's code is never executed
  so return is also a way to interrupt a function execution

*/

const condition = true
if (condition) {
  console.log('the condition is truthy')
  console.log('hey 2 expression yo !')
}

// like for values, we can inverse with !
if (!condition) {
  // this block will never be executed as our condition is false
} else {
  console.log('the condition is truthy')
}


// now, a simplification can be made, our else isn't necessary here
const min = (a, b) => {
  if (a < b) {
    return b
  }
  return a
  // since we return in our if, we are sure that the condition is false
  // if this code is executed

  // Thanks to this you will very rarely need else and else if conditions
}

console.log(min(4, 29))
console.log(min(4, 2))


// TODO: find some exemples good fonctions to learn if if if if #obama
