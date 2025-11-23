// Create an object called student with properties: name, age, and grade.
// Print each value using dot notation.

let student = 
{
    name: 'Satish',
    age: 23,
    grade: 'B'
}

for(let key in student){
    console.log(`${key}: ${student[key]}`)
}