const accountId=123455
var accountName="Savings Account"
let accountBalance=10000
accountCity="Bangalore"

console.table([accountId,accountName,accountBalance,accountCity]);
// --> it will print the values in a table format

//const :
// accountId=001 --> not allowed as it is a constant
// it can be declared only once
// it should be initialized at the time of declaration
//it is block scoped and not global scoped --> it cannot be accessed outside the block

// var :
// var accountName="CC Account" --> allowed to change the value as it is a var
// it can be declared multiple times
// it can be initialized at the time of declaration or later
// it is a global variable and can be accessed anywhere in the program
// prefer not to use var beacuse of its global nature creates issues in large programs
// var is global scoped and not block scoped --> it can be accessed outside the block

// let :
// let accountBalance=20000 --> allowed to change the value as it is a let
// it can be declared multiple times
// it can be initialized at the time of declaration or later
// it is a local variable and can be accessed only within the block
// let is block scoped and not global scoped --> it cannot be accessed outside the block
// it is a better alternative to var

// Automatically :  auto declaration 
// accountCity="Bangalore" --> allowed to change the value 
// it can be declared multiple times
// it is not consider good programming practice so always declare variables before using them