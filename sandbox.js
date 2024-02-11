// basic types (01)
var username = "bahadur ali";
var isLoggedIn = false;
isLoggedIn = ""; // ts not permitted
username = 20; // ts not permitted
// ary types
var elements = [10, 20, 30];
var mixed = [20, false, 'bahadur ali'];
elements = [20, false, 'bahadur ']; // ts not permitted
mixed.push(true);
mixed[3] = 200 / 3939;
// objects types
var userData = {
    name: "bahadur ali",
    age: 23,
    jobStatus: false,
    skills: ['react.js', 'next.js', 'node.js', 'express.js']
};
userData.name = "irfan ali";
userData = {
    name: "bahadur ali",
    age: 23,
    jobStatus: false,
    skills: ['react.js', 'next.js', 'node.js', 'express.js']
};
// Explicit Types
var personName;
personName = "bahadur ali";
personName = false; // TS not permitted
// array explicit type
var data = [];
data.push(20);
data.push('user details');
data.push(false >= true);
// object explicit type
var profile;
profile = {
    firstName: 'Bahadur',
    lastName: 'Ali',
    age: '23',
    jobStatus: false
};
var courseDetails;
courseDetails = {
    name: "bahadur ali",
    version: 1.2,
    available: true
};
console.log('courseDetails', courseDetails);
