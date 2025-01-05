"use strict";
let myFunc; // Function type
myFunc = () => {
    console.log('Hello from function');
    // void means no return type
    // undefined means return type is undefined. its a valid return type. a value can be undefined
};
let sumCalculate = (a, b) => {
    const sum = parseInt(a) + parseInt(b); // no need to define sum return type. it will automatically detect
    return sum;
};
