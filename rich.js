var _age = prompt('Enter age', '');
var _name = prompt('Enter your name', '');
var _gender = prompt('Enter your gender', '');

function showName() {
    console.log(_age)
    console.log(_name)
}
showName();

function checkAge(_age) {

    if (_age > 18) {
        return true;
    } else {
        return false;
    }
}

if (checkAge(_age)) {
    console.log("Hi " + _name + " (Gender) here " + _gender.substring(0, 1) + " , you are above 18");
} else {
    console.log("Hi " + _name + " (Gender) here " + _gender.substring(0, 1) + " , you are below 18");
}

//Array
let sname = [];
let surname = [];
let gender = [];
let age = [];

for (let i = 0; i < 2; i++) {
    sname[i] = prompt('Enter your name', '');
    surname[i] = prompt('Enter your surname', '');
    gender[i] = prompt('Enter your gender', '');
    age[i] = prompt('Enter age', '');
}
console.log("Name |Surname |Gender |Age");

for (let j = 0; j < 2; j++) {
    console.log(sname[j], surname[j], gender[j], age[j]);
}

//Arrow function
let sum = function(num1, num2, num3) {
    return num1 + num2 + num3;
};

console.log(sum(4, 6, 7));