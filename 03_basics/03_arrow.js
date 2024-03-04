const user = {
    userName : "Somya",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName} , Welcome to Web Site`);
        // console.log(this);
    }

}

// user.welcomeMessage();
// user.userName = "Sam"
// user.welcomeMessage();

// console.log(this);

// function chai()
// {
//     console.log(this);
// }

// chai()


//arrow function
// const chai = () => {
//     let Name = "hitesh"
//     console.log(this);
// }

// chai()

// addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

// implisite return
addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(2,2));