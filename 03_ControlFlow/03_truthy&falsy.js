// //Truthy values and Falsy values

// // let email="srinu@google.com";//string true 
// let email="";//empty string false
// let arr=[] ;//Empty array true



// if (arr) {
//     console.log("User Email");
// }

// //falsy values: false, 0, -0, BigInt 0n,"", null, undefined, Nan
// //these are falsy values except these al are true is javascript

// //truthy values: "0", "false"(it is in string so true), [], {}, function(){}
// //these kept in mind that these will also true

// //how to check array is false 
// // if(arr.length===0){
// //     console.log("Array is Empty");
// // }

// let object={}

// //how to check object is false
// if(Object.keys(object).length===0){// Object.keys returns an array of its keys
//     console.log("Object is Empty");
// }

// // Important truthy values:**
// //if(false==0) console.log("true"); (here operator check do true)
// //if(false=='') console.log("true"); (here operator check do true)
// //if(0=='') console.log("true"); (here operator check do true)



// //Nullish Coalescing Operator (??)--> this is all for 2 keywords: null and undefined
//used in database operations

// let val= 10 ?? 15; //`??` nullish coalescing operator 
// //here 10 will be assignes
// // how it works: if first value id null then it will assign 2nd value

// let val2=null ?? 234; //here it will assign 2nd value because first value is null 
// let val3=undefined?? 22; ////here it will assign 2nd value because first value is undefined

// we can give nested nullish operator
// let val= null?? undefined ?? "string";// the first true value will assigned
// console.log(val);


//Ternary Operator :
//ternary operator is different from nullish coalescing operator
// condition ? true : false //syntax

//Example:
const iceTeaPrice=100
iceTeaPrice>80?console.log("price is more than 80"):console.log("price is less than 80");