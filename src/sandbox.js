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
const calc = (a, b, c = 20) => {
    return a + b + c;
};
const requireResult = calc(20, 30, "sume: ");
console.log('requireResult', requireResult);
