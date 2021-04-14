//  conditions =. decision making
// some condition => time

// let a = 5
// let time = 17
// if(time === 17) {
//   console.log ('Attend lesson')
// }
// function checkNumber (n) {
// if(n > 0) {
//   result = 'Positive'
// } else if ( n === 0 ){
//   result = 'This is zero'
// } else if (n < 0 ) {
//   result = 'Negative'
// } else {
//   result = 'not a number'
// }
// return result
// }
// console.log (checkNumber (3))
// console.log (checkNumber(0))
// console.log (checkNumber(-2))

// let weather = prompt ('Enter weather').toLowerCase ()
// if(weather === 'rainy') {
//   console.log('Take unbrela with you')
// } else if (weather === 'cloudy') {
//   console.log ('It is cloudy and a high probability of rain')
// } else if (weather ==='windy') {
//   console.log ('It is so windy, take care of youself you taken')
// } else if (weather === 'snowy') {
//   console.log ('It is snowy')
// } else {
//   console.log ('No one knows about the weather')
// } 

// function getWeatherCondition(weather) {
//   weather = weather.toLowerCase ()
//   let result = ''

// if(weather === 'rainy') {
//   result = 'Take umbrela with you'
// } else if (weather === 'cloudy') {
//   result = 'It is cloudy and a high probability of rain'
// } else if (weather ==='windy') {
//   result = 'It is so windy, take care of youself you taken'
// } else if (weather === 'snowy') {
//   result = 'It is snowy'
// } else {
//   result = 'No one knows about the weather'
// } 
// return result
// }
// console.log (getWeatherCondition ('RaiNy'))
// console.log (getWeatherCondition ('SnoWy'))
// console.log (getWeatherCondition ('wIndy'))

// switch

// function weatherCondition () {
// let weather = prompt ('Enter weather:'). toLowerCase()
// switch (weather) {
//   case 'showery':
//   case 'dripping':
//   case 'rainy':
//     return 'Take your unbrela with you.'
//   case 'sunny': 
//     return 'It is beautiful sunny day'
//   case 'snowy': x
//     return 'It is beautiful sunny day'
//   case 'windy': 
//     return 'It is so windy, take care of youself you taken'
//   case 'cloudy': 
//     return 'It is cloudy and a high probability of rain'
//   default:
//     return 'It is just a shiny day go out freely. Enjoy you day!'

// }
// }
// console.log (weatherCondition())

// ternary = > x, Y, z

// let name ='Emi'
// let value = name.length > 5 ? 'Long name' : 'Short name'
// console.log (value)

// Loops
/*
for (initialization, condition, increment/decrement) {

}*/
// ======= 0 to 100 ======
for (let i = 50; i <= 55; i = i + 2) {
  console.log (i)
}

// function generateEvenNums (n) {
//   const evens = []
//   for (let i = 0; i <= n; i = i + 2) {
//     console.log (i)
//     evens.push(i)
//   }
//   return evens
// }
// console.log (generateEvenNums(20))

// ======= 5 to 0 =======

for (let i = 5; i > 0; i--) {
  console.log (i)
}
//  ====== revers ======= [2,5,6,7,0] => [0,7,6,5,2]
function reverseArray (arr) {
  let newArray = []
  for (let i = arr.length; i >= 0; i--) {
    newArray.push(arr[i])
  }
  return newArray
}
console.log (reverseArray([2,5,6,7,0]))

// function pringFullName (firstName, LastName) {
//   return firstName + '' + LastName}

// function expression
// const pringFullName = function (firstName, LastName) {
//     return firstName + '' + LastName}
//   console.log (pringFullName ('Motomi', 'Yamagata'))

// allow function

// const pringFullName = (firstName, LastName) => firstName + '' + LastName
//   console.log (pringFullName ('Motomi', 'Yamagata'))

// function calculateWeight (mass, gravity) {
//   let weight = mass * gravity
//   return weight
// }
// console.log (calculateWeight (75.45, 9.81))

const calculateWeight = (mass, gravity = 9.81) => {
  let weight = mass * gravity
  return `${weight.toFixed(2)}`
}
console.log (calculateWeight (20,)) //earth graivity, written as defalt
console.log (calculateWeight(75.45, 1.62)) //Moon gravity


// function calculateAreaOfCircle (r){
//   let area = Math.PI * r * r
//   return `The area of the circle with ${r} is ${area.toFixed(2)}m2`
// }
// console.log (calculateAreaOfCircle (100))

const calculateAreaOfCircle = (r) => {
  let area = Math.PI * r**2
  return `The area of the circlewith ${r}m radius is ${area.toFixed(2)}m2`
}
console.log (calculateAreaOfCircle (100))

// // Global Objects


console.log (Math.sqrt(4))
console.log (Math.random()) // 0 to 0.99999999
console.log (Math.round (9.81)) //10
console.log (Math.floor(9.81)) //9
console.log (Math.ceil(3.14)) //4

// generate array of 7 random numbers ?
const generateSevenNums = (n = 100) => {
  const nums = []
  for (let i = 0; i < n; i++) 
    nums.push(Math.floor(Math.random() * 101))
  
  return nums
}
console.log (generateSevenNums (15))

