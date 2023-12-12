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
