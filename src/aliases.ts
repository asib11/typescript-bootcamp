type stringOrNum = string | number; // stringOrNum is a alias defined for union type of string and number
type userType = {name: string, age: number}; // userType is a alias defined for object type having name and age properties

const userDetails= (id: stringOrNum, user: userType ) : string  => {
    return (`user id is ${id}, name is ${user.name} and age is ${user.age}`);
}

console.log(userDetails(1, {name: 'John', age: 20})); // Output: user id is 1, name is John and age is 20

// function signature

let calc: (a: number, b: number, c: string) => number; // calc is a alias defined for function signature

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

console.log(calc(5, 10, 'add')); // Output: 15

// Example 2
type stringOrNumber = string | number;
type userDetail = {name: string, age: number};

const userInformation = (id: stringOrNumber, user: userDetail) : string => {
    return (`user id is ${id}, name is ${user.name} and age is ${user.age}`);
}