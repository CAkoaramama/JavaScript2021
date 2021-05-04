let firstName = 'Asab'
let lastName = 'Yeta'
let age = 250
let isMarried = true

// Object => property: model. type, color, manyal
// person: tall, firstName, lastNmae, age, hair, color,......

// Object

const person ={
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  skills: ['HTML', 'CSS', 'JS', 'React'],
  getPersonInfo: function(){
    return `${this.firstName} ${this.lastName}. His skills are ${this.skills.join()}`
    // return this.
  }
}
console.log (person.firstName)
console.log (person ['firstName'])
console.log (person.nationality)
person.nationality = 'Etiopian'
console.log (person.nationality)
console.log (person)
console.log ('What is the output from here?',person.getPersonInfo())
// Object method
// hasOwnProperty, Object.keys, Object.values, Object.assign, entries
const keys = Object.keys (person)
console.log (keys)
const values = Object.values (person)
console.log (values)
console.log (person.hasOwnProperty('firstName'))

if (person.hasOwnProperty ('skills')) {
  person.skills.push('react')
}
console.log (person)

const entries = Object.entries (person)
console.log (entries)

const p1 = Object.assign ({}, person, {city:'Espoo'})
console.log (p1)


