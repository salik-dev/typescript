// basic types (01)
const username = "bahadur ali";
const isLoggedIn = false;

// isLoggedIn = "" // ts not permitted
// username = 20 // ts not permitted

// ary types

const elements = [10, 20, 30];
const mixed = [20, false, 'bahadur ali']

// elements = [20, false, 'bahadur '] // ts not permitted
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
// userData ={ // TS not permitted
//     name: "bahadur ali",
//     age: 23,
//     jobStatus: false,
//     skills: ['react.js', 'next.js', 'node.js', 'express.js']
// }

// Explicit Types

let personName: string;

personName = "bahadur ali";
// personName = false; // TS not permitted

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

// Dynamic Types

let age: any = 23;
age = false
age = 'twenty three'

let lists: any[] = []

lists.push(20)
lists.push('bahadur ali')
lists.push(false)

let fetchData: {
    id: any,
    data: any,
}

fetchData = {
    id: 1,
    data: [
        {country: "pakistan", code: '20kd'}
    ]
}

// Function basic types

let greet: Function

greet = () => {
    console.log('function basic type')
}

// let sum=0;
// const calc = (a: number, b: number, c: string|number=20): void=>{
//    console.log(a, b, c)
// }

// const requireResult = calc(20, 30, "sume: ")

// Typescript Aliases
type strOrNum =  number | string;
type objWithName = {name: string, uid: strOrNum}

const logDetails = (uid: strOrNum, username: string): string => {
    return `${username} is loggedIn of ID: ${uid}`
}
const welcome = (uid: objWithName) : string => { 
    return `${uid.name} welcome in application`
}
const result = welcome({name: "salik-dev", uid: "20209393-kd"})


// Function signature

// example 01
let msge: (x: string, y: number | string) => void;
msge = (username : string, msge: number | string) => {
    console.log(`${username} says ${msge}`);
}

// example 02
let calc: (a: number, b: number, c: string) => number;
calc = (n1: number, n2: number, action: string)=>{
    return action ==='add' ?  n1 + n2 : n1 - n2;
}

// example 03
type person= {name: string, age: number};
let auth: (obj: person)=> void;

auth = (salik: person)=> {
    console.log(`${salik.name} is loggedIn with age: ${salik.age}`);
}

const output = auth({name: "dev", age: 20});
console.log(output)