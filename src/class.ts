class Cars {
    name: string;
    color: string;

    constructor( n: string, c: string){
        this.name = n;
        this.color = c;
    }

    carDetails(){
        return `Car name is ${this.name} and color is ${this.color}`;
    }
}

const car1 = new Cars('BMW', 'Black');
const car2 = new Cars('Audi', 'White');
console.log(car1.carDetails()); // Output: Car name is BMW and color is Black

const carArray: Cars[] = []; // here cars used as a type
carArray.push(car1); // only car object can be pushed
carArray.push(car2);