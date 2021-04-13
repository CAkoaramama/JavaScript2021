//  conditions =. decision making
// some condition => time

// l

// let isRaining = true
// if(isRaining) {
//   console.log('Take unbrela with you')
// } else {
//   console.log ('It is justa shiny day, go out freely. Enjoy your day')
// }

function calculateWeight (mass, gravity) {
  let weight = mass * gravity
  return weight
}
console.log (calculateWeight (75, 9.81))

function calculateAreaOfCircle (r){
  let area = Math.PI * r * r
  return `The area of the circle with ${r} is ${area.toFixed(2)}m2`
}
console.log (calculateAreaOfCircle (100))

// Global Objects

Math.sqrt
console.log (Math.sqrt(4))
console.log (Math.random()) // 0 to 0.99999999
console.log (Math.round (9.81))
console.log (Math.floor(9.81))
console.log (Math.ceil(3.14))

// generate array of 7 random numbers ?
const generateSevenNums = (n = 7) => {
  const nums = []
  for (let i = 0; i < 7; i++) {
    nums.push(randNum)
  }
  return nums
}
console.log (generateSevenNums())
