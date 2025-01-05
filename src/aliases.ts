type stringOrNum = string | number; // stringOrNum is a alias defined for union type of string and number
type userType = {name: string, age: number}; // userType is a alias defined for object type having name and age properties

const userDetails= (id: stringOrNum, user: userType ) : string  => {
    return (`user id is ${id}, name is ${user.name} and age is ${user.age}`);
}

console.log(userDetails(1, {name: 'John', age: 20})); // Output: user id is 1, name is John and age is 20