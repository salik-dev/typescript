// basic types (01)
const username = "bahadur ali";
const isLoggedIn = false;

isLoggedIn = "" // ts not permitted
username = 20 // ts not permitted

console.log(username)

// ary types

const elements = [10, 20, 30];
const mixed = [20, false, 'bahadur ali']

elements = [20, false, 'bahadur '] // ts not permitted
mixed.push(true)
mixed[3] = 200/3939

console.log(mixed)

// objects types

const userData = {
    name: "bahadur ali",
    age: 23,
    jobStatus: false
}

userData.name = "irfan ali";

console.