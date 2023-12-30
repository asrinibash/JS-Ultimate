// const score=33  //-> number
// const score="33"  //-> String


// " Conversion Operation -> convert one datatype to another datatype (Important in JS) "

// 1. Number() -> convert to number
// const score=33 //-> number
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


// //3. String() -> convert to string
// let Score = 35
// let stringValue = String(Score); //-> convert to string
// console.log(typeof stringValue); //-> string

// Just like this we can convert to other datatypes also -->BigInt(), Symbol(), Object() etc




// *************************Operators*************************
let value=10;
let negVlaue=-value; //-> -10

// console.log(2+2); //-> Addition
// console.log(2-2); //->Substraction
// console.log(2*2); //->Multiplication
// console.log(2**3); //->Exponentiation (2^3) -> 2 power 3 
// console.log(2/2); //->Division
// console.log(2%2); //->Modulus (Remainder)

let str1="hello";     // Only Addition operator is used for string
let str2=" Srinu";
console.log(str1+str2); //-> Concatenation (hello Srinu)


// Complex Operators  "Prefer to use brackets if needed other wise Dont write complex code"
// console.log(1+"2"); //-> 12 
// console.log("1"+2); //-> 12
// console.log("1"+2+3); //-> 123 (1st string then number)
// console.log(1+2+"3"); //-> 33  
// console.log(1-"2"); //-> -1

console.log(true); //-> true
console.log(+true); //-> 1
console.log(+""); //-> 0

let num1,num2,num3;  //-> Declaring multiple variables in single line
num1=num2=num3=10;   // But dont use like this because it is not readable


// Increment and Decrement Operators
let num=15;
num++; //->post increment
++num; //->pre increment