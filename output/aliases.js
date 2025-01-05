"use strict";
const userDetails = (id, user) => {
    return (`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
console.log(userDetails(1, { name: 'John', age: 20 })); // Output: user id is 1, name is John and age is 20
