'use strict'

/*
  while

  While is the first loop statement that we will learn to use.
  It allows you to repeat a block of code while the condition is truthy.

  Here is the basic syntax :
  while (condition) {
    // code
  }
 */

// The most common while loop is a simple counter
let count = 0 // `count` value will change so it needs to be declared with let !

while (count < 10) {
  count = count + 1 // we update the value of count to it's previous value + 1
  console.log('counter at', count)
  // Here we can add all the code we want to repeat !
}

// Let's create a function that add the given argument 5 times with while
const times5 = n => {
  let result = 0 // create for holding the result or our operation
  let count = 0 // create a counter to keep track of how many loops we did

  while (count < 5) { // check the condition, see if we have made enough loops
    count = count + 1 // increment our loop counter variable by one
    result = result + n // add our given value `n` to our result
  }
  // loop is over !
  return result // return our result
}


/*

  for..of

  For..Of is a cleaner way to iterate over an iterable (Array, Strings, etc...)
  It's the most usefull type of loops.

  Here is the basic syntax :
  for (const element of iterable) {
    // code
  }

 */

// Let's see how we could count how many letter O are in this sentence :
const sentence = 'How are you today ?'

let countOfTheLetterO = 0 // this will hold our total

// for each element of our string
// we assign it's value to a const variable named letter
for (const letter of sentence) { // our loop will stop on reaching the end
  if (letter === 'o') {
    // we have a match ! better add it to our total now...
    countOfTheLetterO = countOfTheLetterO + 1
  }
}

// and that's all there is to it !
