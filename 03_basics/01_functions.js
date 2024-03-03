// Funtion is nothing but just the package in which we wrap our code to use it multiple Times

function sayMyName() {
    console.log("S");
    console.log("O");
    console.log("M");
    console.log("U");
}

// sayMyName();
                    // parameters
function addTwoNumbers(num1, num2) {
    // console.log(num1+num2);
    return num1+num2;
}
         // Arguments 
// addTwoNumbers(3,4);

const result = addTwoNumbers(2,2);
// console.log(result);


function loginUserMessage (userName) {
    if(userName === ""){
        console.log("Please enter a User Name");
        return
    }
    return(`${userName} just logged In`)
}

// console.log(loginUserMessage(""));

function calculateCartPrice (...num1){ //... <= this is a rest operator when we dosen't know the number of arguments that will be given than we use it "it makes them in array from".
    return num1;
}
// console.log(calculateCartPrice(200,300,400));

const user= {
    name: "Somu",
    age: 20
}

function handleObjects(anyObject) {
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObjects(user)

// pass Object in Parameters 
// handleObjects({name : "somu, age = 20"})

// passing arrays
const myArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(myArray));