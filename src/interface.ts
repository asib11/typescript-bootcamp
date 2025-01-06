interface rectangleOptions {
    width: number;
    length: number;
    }

function drawRectangle(options: rectangleOptions) {
    let width = options.width;
    let length = options.length;
    return width * length;
}

let threeDRectangle = {
    width: 10,
    length: 20,
    height: 30
};

let rectangle = drawRectangle({width: 10, length: 20}); // have to pass width and length properties hard coded
let threeDRectangleArea = drawRectangle(threeDRectangle); // but we can pass object with extra properties through create object


// class based interface

interface Person {
    name: string;
    greet(message: string): string;
    getAge(): number;
}

class Student implements Person {

    constructor(
        public name:string ,
        private age:number ,
    ){}

    getAge(): number {
        return this.age;
    }

    greet(message: string): string {
        return message;
    }
}