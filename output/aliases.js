"use strict";
const userDetails = (id, user) => {
    return (`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
console.log(userDetails(1, { name: 'John', age: 20 })); // Output: user id is 1, name is John and age is 20
// function signature
let calc; // calc is a alias defined for function signature
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(5, 10, 'add')); // Output: 15
const userInformation = (id, user) => {
    return (`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
