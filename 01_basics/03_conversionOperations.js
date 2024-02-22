let score = "33"

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// "null" => 0
// "undefined" => NaN
// boolean "true" => 1 ; "false" => 0


let isLogged = 1

let booleanIsLogged = Boolean(isLogged);
console.log(booleanIsLogged)

// 1 => true, 0 => false
// "" => false
// "somu" => true