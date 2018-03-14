'use strict'

/*
  Recursion

  It's when a a function call itself, this way you can avoid the need for while.

  Here is the basic syntax :
  const recursive = (arg) => condition ? recursive(arg) : arg
 */

// The most common while loop is a simple counter

const countTo10 = count => {
  if (count < 10) {
    console.log('counter at', count)
    countTo10(count + 1) // call itself with the updated value of count
  }
}

countTo10(0) // we need to call it to start the recursion with an initial value

// As you can see, looping this way we were able to remove the need for mutable
// variables (let)

// Let's create a function that add the given argument 5 times with recursion
const times5R = (n, count, result) => (count < 5) // we test our count
  ? times5R(n, count + 1, result + n) // we call ourself with the new values
  : result // we return our results
// this function need 3 as we need to start with an initial count and result

// so we can create a wrapper function that call it with the initial parameters
const times5 = n => times5R(n, 0, 0)

