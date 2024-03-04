// Immediately Invoked Fcuntion Expression (IIFE) 

(function chai () {
    console.log(`DB connected`);
})();
// we use semicolon ; here to end the invoked function

( (name)=>{
    console.log(`DB connected Two ${name}`);
} ) ("Somya")

// here we wrap the function in ()
// to remove the pollution from global scope we use iife