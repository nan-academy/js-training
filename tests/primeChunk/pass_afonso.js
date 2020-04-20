const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false
  return num > 1
}

function chunkArray(myArray, chunk_size) {
  let results = []/**/
  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size))
  }
  return results
}

const primeChunk = (a, b) => {
  let nbrs = []
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) nbrs.push(i)
  }
  return nbrs.length <= 4 ? nbrs : chunkArray(nbrs, 2)
}
