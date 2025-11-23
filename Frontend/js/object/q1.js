// Create an object called student with properties: name, age, and grade.
// Print each value using dot notation.

let student = 
{
    name: 'Satish',
    age: 23,
    grade: 'B'
}


// Add a new property city to the student object created in Q1 and print the updated object.

student.city = 'Delhi'

for(let key in student){
    console.log(`${key}: ${student[key]}`)
}