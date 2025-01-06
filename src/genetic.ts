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

interface APIResponse<T> { // T is a generic type here
    status: number;
    type: string;
    data: T; // T is a generic type here
}

const response1: APIResponse<object> = { // object is a generic type here
    status: 200,
    type: 'good',
    data: {
        name: 'John',
        age: 20
    }
}