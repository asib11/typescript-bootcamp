export class Cars2 {
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
