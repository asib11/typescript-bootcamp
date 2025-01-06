"use strict";
const addID = (obj) => {
    let id = Math.random().toString(16);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: 'John',
    age: 20,
    country: 'Bangladesh'
});
const response1 = {
    status: 200,
    type: 'good',
    data: {
        name: 'John',
        age: 20
    }
};
