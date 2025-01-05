let myFunc : Function // Function type
myFunc = () => {
    console.log('Hello from function');
    // void means no return type
    // undefined means return type is undefined. its a valid return type. a value can be undefined
}

const sumCalculate = (a: string , b: string) : number => {
    const sum = parseInt(a) + parseInt(b); // no need to define sum return type. it will automatically detect
    return sum;
}

const otherFunc = (a: number, b: number, c? : number) : void => { // c is optional parameter
    console.log(a + b);
    console.log(c);
}

const otherFunc2 = (a: number, b: number, c : number = 2) : void => { // c is default parameter
    console.log(a + b);
    console.log(c);
}