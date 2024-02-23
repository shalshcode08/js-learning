const name = "somya"
const count = 50

// console.log(name + count + " shrestha")

// console.log(`Hello my name is ${name} and my repo count is ${count}`);

const getName = new String("Somya")

// console.log(getName[0])
// console.log(getName.toUpperCase());
// console.log(getName.length);
// console.log(getName.charAt(2));

const newString = getName.substring(0,4);
// console.log(newString);

const anotherString = getName.slice(-4,3);
// console.log(anotherString);

const gameName = new String("Somya-Shrestha-07")
console.log(gameName.split('-'));
