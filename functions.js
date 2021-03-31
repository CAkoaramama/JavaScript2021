// why need functions?
// what is functions?
//  to reuse, to test, easy to read

// Arrow function
const doSomeThing = () => 'I am teaching'
console.log (doSomeThing())

const addTwoNumber = (a,b) => a + b

// function addTwoNumber (a,b) {
  // let sum = a + b
  // return sum
// }

console.log (addTwoNumber(1,4))
console.log (addTwoNumber(4,1453))
console.log (addTwoNumber(35,312))

// makeSquare(n), write this function in three way
//  1.

const makeSquare = (n) => n**2

// 2.
// function makeSquare (n) {
  // return n**2
// }

// 3.
// const makeSquare = function (n) {
  // return n**2
// }

console.log (makeSquare (10))
