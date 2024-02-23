// # Primitive 

// 7 types : string, number, boolean, null, undefined, symbol, bigInt


// # Reference Type (Non Primitive) 

// Arrays, Objects, Functions

const heros =["Shaktiman", "Nagraj", "Doga"]    //arrays

// Objects
let myObj = {
    name: "Somya", 
    age: 20
}

// functions
const myFunction = function(){
    console.log("Hello World");
}


// ########################################################

// Stack (primitive) , Heap (Non-Primitive)

let myName = "Somya"
let anotherName = myName
anotherName = "Sakshi"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upiId : "user@ybl"
}

let userTwo = userOne

userTwo.email = "somu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);