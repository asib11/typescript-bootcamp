export class Cars2 {
    // access modifier
    constructor(
        private name: string, // can not modified from outside
        readonly color: string // can not modified from outside but can be read
    ){ }

    carDetails(){
        return `Car name is ${this.name} and color is ${this.color}`;
    }
}