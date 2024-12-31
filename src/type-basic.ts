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

// dynamic type or any type

let a: any;
a = 20;
a = 'twenty';

// array
let b : any[] = [];
b.push(1);
b.push('two');

// object
let c: {name: any, age: any};
c = {name: 'John', age: 20};