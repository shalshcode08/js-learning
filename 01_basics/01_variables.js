const accountId = 144553
let accountEmail = "somu@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 11441 // not allowed

accountEmail = "hdfc@google.com"
accountPassword = "88992"
accountCity = "bengaluru"


console.log(accountId)

/*
prefer not to use var
because of issue in block scope and fucntional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])