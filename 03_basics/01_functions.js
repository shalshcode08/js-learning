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

console.log(loginUserMessage(""));