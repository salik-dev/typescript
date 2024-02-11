// basic types (01)
const username = "bahadur ali";
const isLoggedIn = false;

isLoggedIn = "" // ts not permitted
username = 20 // ts not permitted

// ary types

const elements = [10, 20, 30];
const mixed = [20, false, 'bahadur ali']

elements = [20, false, 'bahadur '] // ts not permitted
mixed.push(true)
mixed[3] = 200/3939


// objects types

const userData = {
    name: "bahadur ali",
    age: 23,
    jobStatus: false,
    skills: ['react.js', 'next.js', 'node.js', 'express.js']
}

userData.name = "irfan ali";
userData ={ // TS not permitted
    name: "bahadur ali",
    age: 23,
    jobStatus: false,
    skills: ['react.js', 'next.js', 'node.js', 'express.js']
}

// Explicit Types

let personName: string;

personName = "bahadur ali";
personName = false; // TS not permitted

// array explicit type
let data: (string|boolean|number)[] = []
data.push(20);
data.push('user details')
data.push(false>=true)

// object explicit type

let profile:object;

profile = {
    firstName:'Bahadur',
    lastName: 'Ali',
    age: '23',
    jobStatus: false
}

let courseDetails: {
    name: string,
    version: number,
    available: boolean
}
courseDetails = {
    name: "bahadur ali",
    version: 1.2,
    available: true
}

console.log('courseDetails', courseDetails)