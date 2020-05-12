const getOnes = (nbr, arr) =>
  nbr != 0 ? getOnes(nbr - 1, arr) && arr.push(1) && arr : []

const sums = (nbr) => {
  console.log()
  let hip = getOnes(nbr, [])
  let result = []
  result.push(hip)

  for (let i = 0; i < nbr-1; i++) {
    console.log(i)
    hip = [result[i][0] + result[i][1], ...getOnes(nbr - (2 + i), [])]
    result.push(hip)
  }
  return result
}
// console.log(sums(0))
// console.log(sums(1))
// console.log(sums(2))
console.log(sums(4))
console.log(sums(7))
/*

nbr = 2

1 1
 2

 nbr = 4

 1 1 1 1  | 1 1 1 1
  2 1 1   |  2 1 1
   2 2    |   3 1
    4     |    4

  nbr = 7
 1 1 1 1 1 1 1 | 1 1 1 1 1 1 1 |
  2 1 1 1 1 1  |  2 1 1 1 1 1  |
   3 1 1 1 1   |   2 2 1 1 1   | .......
    4 1 1 1    |    2 2 2 1    | 3 2 1 1 | .....
     5 1 1     |     4 2 1     |  3 2 2  | 3 3 1
      6 1      |      2 5      |   3 4   |  3 4
       7       |       7       |    7    |   7



*/
