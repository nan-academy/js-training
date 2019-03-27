'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string){
    let mots = string.split(" ");
    let phrase = '';
    for(let i=0;i<mots.length;i++){
        let max = mots[i].slice(0, 1)
        let min = mots[i].slice(1)
        max = max.toUpperCase()
        min = min.toLowerCase()
        
        phrase += max+min;
        phrase += " "
    }
    return phrase.slice(0, -1);
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("How are you ?"),"How Are You ?" )
assert.strictEqual(jadenCase("Muda muda muda"),"Muda Muda Muda" )
// End of tests */
