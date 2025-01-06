const addID = <T extends {name:string, age: number}> (obj : object) => {
    let id = Math.random().toString(16);
    return {
        ...obj,
        id
    }
}

let user = addID({
    name: 'John',
    age: 20,
    country: 'Bangladesh'
});

// interface generic

enum RType { GOOD, VERYGOOD, EXCELLENT } // enum defined

interface APIResponse<T> { // T is a generic type here
    status: number;
    type: RType; // RType is a enum type here
    data: T; // T is a generic type here
}

const response1: APIResponse<object> = { // object is a generic type here
    status: 200,
    type: RType.GOOD, // RType enum type
    data: {
        name: 'John',
        age: 20
    }
}

// tuple

let aTuple: [string, number] = ['John', 20]; // a tuple type variable