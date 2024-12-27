const country: string = 'Bangladesh';
console.log(country); // Output: Bangladesh

// normal variable
let age: number;
age = 20;

// varible with union type
let mixed: number | string;

// array

let arr : number[];
arr = [1, 2, 3];

let arr2 : (string | number)[]; // take nuber and string
arr2 = [1, 'two', 3];

// object

let person: {
    name: string,
    age: number
};

person = {
    name: 'John',
    age: 20
}