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
// interface generic
var RType;
(function (RType) {
    RType[RType["GOOD"] = 0] = "GOOD";
    RType[RType["VERYGOOD"] = 1] = "VERYGOOD";
    RType[RType["EXCELLENT"] = 2] = "EXCELLENT";
})(RType || (RType = {})); // enum defined
const response1 = {
    status: 200,
    type: RType.GOOD, // RType enum type
    data: {
        name: 'John',
        age: 20
    }
};
// tuple
let aTuple = ['John', 20]; // a tuple type variable
