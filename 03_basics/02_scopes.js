// let a  = 10
// const b = 20
// var c = 30

// {} //scope

if(true){
    let a  = 10 // this will give error as the scope is only till this if block
    const b = 20 // same with it
    var c = 30 // but this will print and thats the problem
}

// for(let i=0; i<array.length; i++){
//     const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

// nested Scope 
function one(){
    const userName = "Somya"

    function two(){
        const website = "YouTube"
        console.log(userName);
    }

    // console.log(website);

    two();
}
one();