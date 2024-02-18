"use strict";
// basic types (01)
const username = "bahadur ali";
const isLoggedIn = false;
// isLoggedIn = "" // ts not permitted
// username = 20 // ts not permitted
// ary types
const elements = [10, 20, 30];
const mixed = [20, false, 'bahadur ali'];
// elements = [20, false, 'bahadur '] // ts not permitted
mixed.push(true);
mixed[3] = 200 / 3939;
// objects types
const userData = {
    name: "bahadur ali",
    age: 23,
    jobStatus: false,
    skills: ['react.js', 'next.js', 'node.js', 'express.js']
};
userData.name = "irfan ali";
// userData ={ // TS not permitted
//     name: "bahadur ali",
//     age: 23,
//     jobStatus: false,
//     skills: ['react.js', 'next.js', 'node.js', 'express.js']
// }
// Explicit Types
let personName;
personName = "bahadur ali";
// personName = false; // TS not permitted
// array explicit type
let data = [];
data.push(20);
data.push('user details');
data.push(false >= true);
// object explicit type
let profile;
profile = {
    firstName: 'Bahadur',
    lastName: 'Ali',
    age: '23',
    jobStatus: false
};
let courseDetails;
courseDetails = {
    name: "bahadur ali",
    version: 1.2,
    available: true
};
// Dynamic Types
let age = 23;
age = false;
age = 'twenty three';
let lists = [];
lists.push(20);
lists.push('bahadur ali');
lists.push(false);
let fetchData;
fetchData = {
    id: 1,
    data: [
        { country: "pakistan", code: '20kd' }
    ]
};
// Function basic types
let greet;
greet = () => {
    console.log('function basic type');
};
const logDetails = (uid, username) => {
    return `${username} is loggedIn of ID: ${uid}`;
};
const welcome = (uid) => {
    return `${uid.name} welcome in application`;
};
const result = welcome({ name: "salik-dev", uid: "20209393-kd" });
// Function signature
// example 01
let msge;
msge = (username, msge) => {
    console.log(`${username} says ${msge}`);
};
// example 02
let calc;
calc = (n1, n2, action) => {
    return action === 'add' ? n1 + n2 : n1 - n2;
};
let auth;
auth = (salik) => {
    console.log(`${salik.name} is loggedIn with age: ${salik.age}`);
};
const output = auth({ name: "dev", age: 20 });
console.log(output);
// crash new course
const n1 = 0;
const n2 = 0;
const sum = 'result: ';
const nl = null; // absense of value
let und; // default value of uninitialized variable
// falsy values
if (n1) {
    console.log(' value specified');
}
else {
    console.log("no value specified");
}
if (0) {
    console.log('false');
}
else {
    console.log('true');
}
