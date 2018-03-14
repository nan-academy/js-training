'use strict'

// Data structures allow us to structure and organise multiple primitive data

/*
  Object

  Objects are the most common data structure in JavaScript
  It is the base to all other data structures

  They hold properties
  A property is a key / value pair

  The key is a string and we associate it to a value, very much like variables

  We use the curly braces `{}` to create an object
*/

console.log({}) // Loggin an empty object

// To create a property we use the colon `:`
// The first string is a key, and after the colon is the value
console.log({ 'awesome key': 'great value' })
// here I set the string 'great value' to the key 'awesome key'
// I repeate, keys are always strings

// Now, the true power of objects lies in storing multiple properties in them
// To do that we just separate properties with a comma `,` like so :
console.log({ 'first key': 1, 'second key': 22 })
// here I set the number 1 to the key 'first key'
// and the number 22 to 'second key'

// for big objects we split them into multiple lines, one per property
console.log({
  'first key': 1,
  'second key': 22,
  'third key': 333,
  'fourth key': 4444,
  'the last key': 'the end',
})


// If our key is a valid identifiers (like variables identifiers)
// We can omit the quotes ''
console.log({ validKey: 'valid value !' })
// Since this syntax is lighter it is prefered in JavaScript
// so try to use valid identifiers and camelCase whenever possible
// (same rules as variabes)

// Ok let's see how we can model usefull data with that
// here's an address
console.log({
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  streetNumber: 175,
  streetLabel: 'boulevard',
  streetName: 'Matabiau',
})

// Now since objects are values, we can nest them !
// let's refactor a bit our previous object to avoid repetition in the keys
console.log({
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  street: {
    number: 175,
    label: 'boulevard',
    name: 'Matabiau',
  },
})

// And like all values, we can store them in variables
const myStreet = {
  number: 175,
  label: 'boulevard',
  name: 'Matabiau',
}

// sweet, let's log that variable value
console.log(myStreet)


// Guess what, we can use variables values when creating objects !
console.log({
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  street: myStreet, // here, the value contained in myStreet is used
})


// Let's store this address into a variable
const address = {
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  street: myStreet,
}

// Now that would be a more complete user object :
console.log({
  firstname: 'Clement',
  lastname: 'Denis',
  email: 'cdenis@thot.space',
  age: 29,
  address: address,
})


// If we use a variable as a property, like here in address
// We can omit the key, JavaScript will use the variable identifier as it's key
// So we can rewrite the previous user object like so :
console.log({
  firstname: 'Clement',
  lastname: 'Denis',
  email: 'cdenis@thot.space',
  age: 29,
  address, // look ma, no key !
})
// Of course this works only when our variable identifier is our key.
// That's it on declaring objects !


/*
  Array

  They are used to keep ordered lists of values.

  In JavaScript, Arrays are Objects with special rules:
  - They use number as keys, we call those keys index (starting at 0)
  - They keep their content in order
  - They have a special property 'length' to get the size of our list
  - And much, much more (but that's enough for now)

  We use the square brackets `[]` to create an Array
*/

console.log([]) // Here I log an empty array

console.log([ 1, 2, 3 ]) // We don't need to specify the index
// that would roughly translate to this object:
console.log({ '0': 1, '1': 2, '2': 3  })

// So if we have a bunch of values we want to group together
// but the keys are not important, we can use an array
// to automaticaly create ordered index for our values.

// Overall the syntax to create them is quite simpler than objects
// since we don't need to specify the keys.

// Just like objects, they are values
// So like all other values we can store them in variables

const allowedCountries = [
  'France',
  'Spain',
  'Portugal',
  'Russia',
  'Iceland',
]

console.log(allowedCountries)

// Of course we can make arrays of arrays
console.log([
  [  32, 45 ],
  [ -38, 57 ],
  [  87, 99 ],
  [  57, -2 ],
  [ -74, -29 ],
])

// we can use variables values
console.log([ allowedCountries, allowedCountries, allowedCountries ])
// Here I made an array with 3 countries

// And we can freely mix arrays and objects, any values really, surprise me
console.log({
  head: [
    { x: 5, y: 5 },
    { x: 6, y: 4 },
    { x: 7, y: 3 },
  ],
  tail: [
    { x: 3, y: 7 },
    { x: 4, y: 6 },
    { x: 5, y: 5 },
  ],
})

// This way we can model our data to have a structure that
// help us understand it and access it
