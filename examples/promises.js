/*
  Promises

  While callbacks are sweet and simple to delay code execution, they have a
  critical flaw: no return values !

  Promises are a way arround this issue, creating a state that will hold
  the value of the callback once it's resolved.


*/



// const vow = (then) => ({ then })
// vow(resolve => setTimeout(resolve, 1000, 100))
//   .then(console.log)



// just chaining
//const chain = (value) => ({ add: (x) => chain(value + x), value })
//console.log(chain(0).add(10).add(20).add(30).add(5).value)

// flattening

const chain = (value) => ({ add: (x) => chain(value + (typeof x.value === 'number' ? x.value : x)), value })
console.log(
  chain(0).add(10).add(chain(0).add(10).add(20).add(30)).add(30).add(5).value
)
// vow chaining
/*
const vow = executor => ({
  map: callback => vow(resolve => executor(value => resolve(callback(value)))),
  run: () => executor(_ => _),
})

vow(resolve => setTimeout(resolve, 1000, 100))
  .map(n => n + 5)
  .map(console.log)
  .run()


//*/// flat map
/*
const vow = executor => ({
  map: callback => vow(resolve => executor(value => resolve(callback(value)))),
  flatMap: callback => vow(resolve => executor(value => {
    value = callback(value)
    return (value && typeof value.flatMap === 'function')
      ? value.flatMap(resolve).run()
      : resolve(value)
  })),
  run: () => executor(_ => _),
})

const v = vow(resolve => setTimeout(resolve, 1000, 100))
v
  .map(n => n + 5)
  .flatMap(n => vow(resolve => setTimeout(resolve, 100, n + 10)))
  .map(console.log)
  .run()



const vow = executor => {
  const state = {
    value: undefined
  }

  executor(value => state.value = value)

  return state
}


const syncV = vow(setValue => setValue(10))
console.log(syncV.value) // 10


const asyncV = vow(setValue => setTimeout(() => setValue(15), 10))
asyncV.value // undefined
setTimeout(() => console.log(asyncV.value), 15) // will log 15

*/


// event
const vow = executor => {
  const state = {
    value: undefined,
    onValue: _ => _,
  }

  executor(value => state.onValue(state.value = value))

  return state
}


const asyncV = vow(setValue => setTimeout(() => setValue(15), 10))
asyncV.onValue = value => console.log('my value:', value)
// will log my "my value: 15" after the 10 ms

// Problem 1
  // return value

// Problem 2
  // nesting (the pyramid)

// Bonus 1
  // composition


