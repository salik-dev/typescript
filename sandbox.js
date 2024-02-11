// basic types (01)
var username = "bahadur ali";
var isLoggedIn = false;
isLoggedIn = ""; // ts not permitted
username = 20; // ts not permitted
console.log(username);
// ary types
var elements = [10, 20, 30];
var mixed = [20, false, 'bahadur ali'];
elements = [20, false, 'bahadur ']; // ts not permitted
mixed.push(true);
mixed[3] = 200 / 3939;
console.log(mixed);
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
console.log(userData);
