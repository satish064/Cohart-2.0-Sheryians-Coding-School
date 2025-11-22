
let age = prompt('Enter your age: ')

function checkAge(age) {
    if(age === null) return 'Please Enter Something...'

if(age.trim() === "") return 'Please Give A Number'

age = Number(age)

if(isNaN(age)) return 'Enter a Number Please Not a String!!'

         if(age < 0) return 'Enter a right age please!!!'
         else if( age >= 18 ) return 'You can vote'
         else return "YOu can't vote"
}

console.log(checkAge(age))