'use strict'

// First let's declare some data to use in our exemples :

const street = {
  number: 175,
  type: 'boulevard',
  name: 'Matabiau',
}

const address = {
  country: 'France',
  town: 'Toulouse',
  postalCode: 31000,
  street,
}

const userClement = {
  firstname: 'Clement',
  lastname: 'Denis',
  email: 'cdenis@thot.space',
  age: 29,
  address,
}

// let's create an array of users with 2 users
const users = [
  userClement,
  {
    firstname: 'Sofiane',
    lastname: 'Martinez',
    email: 'smartine@thot.space',
    age: 34,
    address: {
      country: 'France',
      town: 'St-Ouens',
      postalCode: 93400,
      street: {
        number: 78,
        type: 'rue',
        name: 'Garibaldi',
      },
    },
  },
]

const allowedCountries = ['France', 'Spain', 'Portugal', 'Russia', 'Iceland']

const coords = [[32, 45], [-38, 57], [87, 99], [57, -2], [-74, -29]]

// Ok so now that we have all those structures, let's see how to access values
// The first way to access value is using square brackets and the key `['key']`

console.log(street['number'])
// this will get the value of the property at the key 'number'

console.log(street['name'])
// here we access the name of the street

// what happen if we try to access a non existing property ?
console.log(userClement['name'])
// the key 'name' isn't defined in userClement so we get undefined

console.log(userClement['firstname'])
console.log(userClement['address']['town'])
console.log(userClement['address']['street'])
console.log(userClement['address']['street']['name'])

// What about arrays ?
// well it's pretty simple, since arrays keys are numeral indexes
// you just have to remember we start counting at 0

console.log(allowedCountries[0])
console.log(allowedCountries[1])
console.log(allowedCountries[2])

// Nested arrays ? you guessed it :
console.log(coords[0][0])
console.log(coords[0][1])
console.log(coords[3][1])
console.log(coords[3][0])

// But, you have to becarefull not to try to access a property that
// doesn't exsist, uncomment this line to have an exemple of error :
// console.log(coords[151][0])

// Since keys are strings, we can use variables values to access our structures
const myKey = 'name'

// and so if we give our brackets an identifier instead of a string
// It will find the value of it's variable and use that as a key
// so here :
console.log(street[myKey])
// our key is 'name', the value of myKey

// But if we would have written :
console.log(street['myKey'])
// now we are using a string again, those quotes here
// and we didn't set any property with the key 'myKey' so, that's undefined

// In fact you can write anything between those [] as long as it return you
// a valid string
console.log(userClement['last' + myKey])

// You can use operators for Arrays too
const start = 1
let position = 0

console.log(allowedCountries[start + position++])
console.log(allowedCountries[start + position++])
console.log(allowedCountries[start + position++])

// Now since most of the time we don't need to do complicated access
// like that, there is another, simplified way to access values
// that works only if your key is a valid identifier, introducing dot `.`
console.log(userClement.address.street.name)
// Now you might recognise this funny guy from `console.log`
// .id
// That's right, console is an Object and 'log' is one of it's property !
// So you have been using the simplified accessor since the begining
// We could have written :
console['log']('This is tedious...')
// Glad we didn't have to do that.

// But no matter which way we write it, JavaScript will always convert keys
// to strings before accessing an Object property

// Mixing arrays and objects

console.log(users[1].address.street.number)
console.log(users[0].address.street.number)
// We can't use users.1 because, as you know, 1 isn't a valid identifier
