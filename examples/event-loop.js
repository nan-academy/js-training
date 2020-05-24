/*
  Async

  Being single threaded, JS doesn't block the CPU to wait for long operations.
  Instead it relies on an another mechanism called:

                The Event Loop

     main thread               ╔════════════╗
    ╔═══════════╗              ║ ┌────────┐ ║
    ║   stack   ╟───schedule───╫>│callback│ ║
    ║ ┌───────┐ ║ to the queue ║ └────┬───┘ ║
    ║ │  run  │ ║              ║ ┌────┴───┐ ║
    ║ └───┬───┘ ║              ║ │callback│ ║
    ║ ┌───┴───┐ ║  event loop  ║ └────┬───┘ ║
    ║ │  run  │ ║              ║ ┌────┴───┐ ║
    ║ └───┬───┘ ║              ║ │callback│ ║
    ║ ┌───┴───┐ ║              ║ └────┬───┘ ║
    ║ │  run  │<╫─────push─────╫──────┘queue║
    ║ └───────┘ ║ to the stack ╚════════════╝
    ╚═══════════╝               off thread

  > (very incomplete) diagram on how it works

*/

// So, from your code (main thread) you can schedule a task
// one way of doing that is to use setTimeout:

setTimeout(() => console.log('wesh'), 2000)

//   main thread           ╔═════════════════════════════╗
//  ╔═══════════╗          ║ ┌─────────────────────────┐ ║
//  ║   stack   ╟─schedule─╫>│() => console.log('wesh')│ ║
//  ║           ║          ║ └─────────────────────────┘ ║
//  ║           ║          ║  queue (wait 2000ms)        ║
//  ║           ║          ╚═════════════════════════════╝
//  ╚═══════════╝           off thread

// now the off thread wait 2000 milliseconds (so, 2 seconds)
// off the main thread, and once it's done waiting
// push the callback into the stack

//   main thread                           ╔═══════╗
//  ╔═══════════════════════╗              ║ queue ║
//  ║   stack               ╟──────────────╫─┐     ║
//  ║ ┌───────────────────┐ ║              ║ │     ║
//  ║ │console.log('wesh')│<╫─────push─────╫─┘     ║
//  ║ └───────────────────┘ ║              ╚═══════╝
//  ╚═══════════════════════╝               off thread

// and now the code in the callback is executed.

// nice.

// let me now show you how this mix with synchronous code:
setTimeout(() => console.log('hello'), 2000)
console.log('world')

// here we first, scheduled callback to log, and imediatly after
// we ask to log world
//                              ╔══════════════════════════════╗
//  ╔════════════════════════╗  ║ ┌──────────────────────────┐ ║
//  ║   stack                ╟──╫>│() => console.log('hello')│ ║
//  ║ ┌────────────────────┐ ║  ║ └──────────────────────────┘ ║
//  ║ │console.log('world')│ ║  ║  queue (wait 2000ms)         ║
//  ║ └────────────────────┘ ║  ╚══════════════════════════════╝
//  ╚════════════════════════╝

// being held by the web API the main thread is free to do the work
// so we now log 'world', clearing the stack

//                              ╔══════════════════════════════╗
//  ╔════════════════════════╗  ║ ┌──────────────────────────┐ ║
//  ║   stack                ╟──╫>│() => console.log('hello')│ ║
//  ║                        ║  ║ └──────────────────────────┘ ║
//  ║                        ║  ║  queue (wait 2000ms)         ║
//  ║                        ║  ╚══════════════════════════════╝
//  ╚════════════════════════╝

// nothing else happen for 2seconds...

//                              ╔═══════╗
//  ╔════════════════════════╗  ║ queue ║
//  ║   stack                ╟──╫─┐     ║
//  ║ ┌────────────────────┐ ║  ║ │     ║
//  ║ │console.log('hello')│<╫──╫─┘     ║
//  ║ └────────────────────┘ ║  ╚═══════╝
//  ╚════════════════════════╝

// and finally the main thread get the callback pushed
// into the stack and execute it, and we see 'hello' !
// pfew...

// so to go back at the code:

setTimeout(() => console.log('hello'), 2000) // execute in 2 sec
console.log('world') // execute instantlys
// -> outputs:
// world
// hello

// this kind of non-linear code execution is one of the most
// challenging things to get used to in javascript.
// So don't panic if you feel a bit lost !
