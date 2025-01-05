"use strict";
class Cars2 {
    // access modifier
    constructor(name, // can not modified from outside
    color // can not modified from outside but can be read
    ) {
        this.name = name;
        this.color = color;
    }
    carDetails() {
        return `Car name is ${this.name} and color is ${this.color}`;
    }
}
const car11 = new Cars('BMW', 'Black');
const car21 = new Cars('Audi', 'White');
console.log(car1.carDetails()); // Output: Car name is BMW and color is Black
const carArraay = []; // here cars used as a type
carArraay.push(car11); // only car object can be pushed
carArraay.push(car21);
