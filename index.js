//this is my first javascript code
console.log('Hello World');
let name='Ruch';
console.log(name);

// variable
// cannot be a reserved keyword
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen
// are case-sensitive

// let firstName = 'Ruch', lastName = 'Skyeye';
let firstName = "Ruch";
let lastName = "skyeye";

const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);

//primitive datatype
let Name = 'Ruch'; //string literal
let age = 20; //number literal
let isApproved = false; //boolean literal
let fName; //let fName = undefined
let selectedColor = null;

//reference types
// object
let person = {
    name: 'Ruch',
    age: 20
};

//Dot Notation
person.name = "Skyeye";


//Bracket Notation
let selection = 'name';
person[selection] = "sky";
console.log(person.name);

//array
let colors = ['red', 'blue'];
colors[2] = 1;
console.log(colors.length);

//function  
function greet(name, lName){ //parameter
    console.log('Hello ' + name + ' ' + lName)
}

greet('Ruch', 'Skyeye') //arguement

function square(number) {
    return number*number;
}

console.log(square(2));