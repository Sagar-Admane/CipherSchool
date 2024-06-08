var x = 15;
{
    let x = 5;
    console.log(x);
}

console.log(x);

{
    const x = 5;
    console.log(x);
}

//Arrow function : 

const a = (x, y)=>{
    return x+y;
}

console.log(a(5,6));

//spread operator

const q1 = ["Jan", "feb", "mar"];
const q2 = ["april", "may", "june"];
const q3 = ["July", "aug", "sep"];
const q4 = ["oct", "nov", "dec"];


const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);


const my = [25, 12, 50, 77, -1];
let val = 0;
for(let num of my){
    val = val+num;
}

console.log(val);


//Javascript map


const fruits = new Map([["apples", 500], ["banana", 300], ["oranges", 200]]);
console.log(fruits);
console.log(fruits.get("oranges"));


// Sets: 


const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("a");

console.log(letters);


//classes: 

class Car{
    constructor(name, mfgYear) {
        this.name = name;
        this.mfgYear = mfgYear;
    }
}

const myCar1 = new Car("Merecedez", 2022);
const myCar2 = new Car("Porche", 2020);
console.log(myCar1,myCar2);


//Promise: 

const myFunction = () => {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("This is inside promise.");
        resolve();
    }, 2000);
})
}


myFunction().then(() => {
    console.log("Resolved");
}).catch(() => {
    console.log("Rejected");
})

//Default Parameters:


const addTwoNumbers = (a, b = 10) => {
    return a+b;
}

console.log(addTwoNumbers(10));

//Rest :


const Add = (...args) => {
    let s = 0;
    for(let num of args){
        s = s + num;
    }
    return s;
}

console.log(Add(10,16,15,7,15));

