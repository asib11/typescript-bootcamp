"use strict";
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    return width * length;
}
let threeDRectangle = {
    width: 10,
    length: 20,
    height: 30
};
let rectangle = drawRectangle({ width: 10, length: 20 }); // have to pass width and length properties hard coded
let threeDRectangleArea = drawRectangle(threeDRectangle); // but we can pass object with extra properties through create object
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    greet(message) {
        return message;
    }
}
