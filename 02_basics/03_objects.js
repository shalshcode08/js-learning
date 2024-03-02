// Objects in JS is made from "Constructor" and "Literals"
// If Objects is made from Literals than it not forms Singleton else in constructor it forms singleton

// object Literals(Object ko declare karne ka trika hai)
// Object.create => object constructor


//ther is keys and values in objects

const mySym = Symbol("key1")


const jsUser = {
    name:"Somya",
    "full name" : "Somya Shrestha",
    age:22,
    mySym : "mySymbol", // its datatype will not will symbol it will be strings
    [mySym] : "MyKey1", // to acces it as symbol 
    location:"Bhubaneswar",
    email:"somu@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof(jsUser.mySym));
// console.log(jsUser[mySym]);

// to change values in object 
jsUser.email = "somya@gmail.com"
// console.log(jsUser.email);

// Object.freeze(jsUser) // if we want to freez the change in the objects
jsUser.email = "somyaShrestha@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

