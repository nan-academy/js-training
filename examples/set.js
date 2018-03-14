'use strict'

// Now that we know how to access properties
// We can dynamicaly set them !

// first let's create an empty Object and store it in a variable

const street = {}

console.log(street.name)
// Yep, it's empty

// Now much like a variable, we can assign a value to a property
street.name = 'Matabiau'

console.log(street.name)
// Nice right ?

// we don't need to write `const` because we are not creating a new variable
// Just a property on our Object
// let's fill the rest of the user !

street.number = 175

const address = {
  country: 'Peru',
  town: 'Toulouse',
}

// We can both declare and assign property later :
address.postalCode = 31000

// We can use a variable value
address.street = street

// And we can set a nested object
address.street.type = 'boulevard'

console.log(address)

// Since we need to access our value first,
// if we try to set a property to an undefined value it will fail
// address.postalCode.type = 'boulevard'

// We can re-assign values in objects, let's fix my mistake in the declaration
address.country = 'France'

console.log(address)

const multipleOf5 = []

// We could do the same for arrays :
multipleOf5[0] = 5
multipleOf5[1] = 10
multipleOf5[2] = 15

// Their is another way to do things for Arrays using Array methods
// but I'll show we about those later


// So we just have to access the value we want to set
// and assign a value to it with `=`
// The way we access to set or get is exactly the same
// So every way to access show in the previous example hold true here.
