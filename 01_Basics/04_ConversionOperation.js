// const score=33  //-> number
// const score="33"  //-> String


// " Conversion Operation -> convert one datatype to another datatype (Important in JS) "

// 1. Number() -> convert to number
// const score="33"  //-> number
// const score="33abc"//-> Nan (Not a Number)
// const score=null; //-> null -> output is 0 when we convert to number using Number() function
// const score=undefined; //-> undefined -> output is NaN when we convert to number using Number() function
// const score="Srinu"; //-> NaN (Not a Number) when we convert to number using Number() function
// const score="true"; //-> true -> output is 1 when we convert to number using Number() function

// console.log(typeof score); //-> 1st way to check datatype
// console.log(typeof(score));//-> 2nd way to check datatype as function

// let valueInNumber=Number(score); //-> convert string to number
// console.log(typeof valueInNumber); //-> number
// console.log(valueInNumber); //-> NaN (Not a Number) if string is not a valid number


//2. boolean() -> convert to boolean
// let score=1; //-> 0 is false
// let booleanValue=Boolean(score); //-> convert to boolean
// let name=""; //-> false if Empty string if space is there then true
// let name="Srinu"; //-> true


//3. String() -> convert to string
let Score = 35
let stringValue = String(Score); //-> convert to string
console.log(typeof stringValue); //-> string

// Just like this we can convert to other datatypes also -->BigInt(), Symbol(), Object() etc
