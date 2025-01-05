"use strict";
let myFunc; // Function type
myFunc = () => {
    console.log('Hello from function');
    // void means no return type
    // undefined means return type is undefined. its a valid return type. a value can be undefined
};
const sumCalculate = (a, b) => {
    const sum = parseInt(a) + parseInt(b); // no need to define sum return type. it will automatically detect
    return sum;
};
const otherFunc = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
const otherFunc2 = (a, b, c = 2) => {
    console.log(a + b);
    console.log(c);
};
