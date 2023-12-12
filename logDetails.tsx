// TypeScript > function signature ()=>
// example #01
let greet: (n: string, g: string)=> void;
greet = (name: string, greeting: string)=>{
    console.log(`${name} is saying ${greeting}`);
}

greet("bahadur", "aoa");


// example #02
let calc: (n1: number, n2: number, a: string)=>number;
calc = (numberOne: number, numberTwo: number, action: "add")=>{
    if(action==="add"){
        return numberOne + numberTwo;
    }
    else{
        return numberOne - numberTwo;
    }
}

const result = calc(10, 2, "minus");
console.log(result)

// example #03
let logDetail: (obj: {username: string, password: string|number})=>void;
logDetail = (salik: {username: string, password: string|number})=>{
    console.log(`${salik.username} recently loggedIn at `+new Date()+`with password ${salik.password}`);
}

const logResult = logDetail( {username: "salik-dev@gmail.com", password: "salik-dev.eng1212"})

