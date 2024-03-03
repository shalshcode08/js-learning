// let a  = 10
// const b = 20
// var c = 30

// {} //scope

if(true){
    let a  = 10 // this will give error as the scope is only till this if block
    const b = 20 // same with it
    var c = 30 // but this will print and thats the problem
}

// console.log(a);
// console.log(b);
console.log(c);