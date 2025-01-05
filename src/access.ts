class Cars2 {
    // access modifier
    constructor(
        private name: string, // can not modified from outside
        readonly color: string // can not modified from outside but can be read
    ){ }

    carDetails(){
        return `Car name is ${this.name} and color is ${this.color}`;
    }
}

const car11 = new Cars('BMW', 'Black');
const car21 = new Cars('Audi', 'White');
console.log(car1.carDetails()); // Output: Car name is BMW and color is Black

const carArraay: Cars[] = []; // here cars used as a type
carArraay.push(car11); // only car object can be pushed
carArraay.push(car21);