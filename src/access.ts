import {Cars2} from './cars';

const car11 = new Cars2('BMW', 'Black');
const car21 = new Cars2('Audi', 'White');
console.log(car11.carDetails()); // Output: Car name is BMW and color is Black

const carArraay: Cars2[] = []; // here cars used as a type
carArraay.push(car11); // only car object can be pushed
carArraay.push(car21);