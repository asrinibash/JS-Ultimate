
/*
Note: On basis of how data will store and how data will access data types are categorise into 2 types in JS => primitive and non-primitive

Primitive : 
7 data types => number, string, boolean, undefined, null, symbol, BigInt  (null means empty not zero )

Note : JavaScript is a dynamically typed language, which means that data types of variables 
are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

Important concept of Symbol datatype: **
let id=Symbol('123')
let anotherId=Symbol('123')
console.log(id===anotherId);  
    --> it is return false because Symbol returning unique identifier so they are not equal

Important concept of BigInt datatype: **

let num=1234567890123456789012345678901234567890n // --> n is used to represent BigInt
 --> it will automaticaly detect the datatype as BigInt 

Non-primitive : (Reference data types)
1 data type => object (array, function, object)

Note: In JS, we can't create user defined data types **
Note : there is no difference in Number it can hold decimal and integer both **

//arrays: type is refernce tpye or non-primitive type 

const heros=["hanuman","shaktiman","naagraj","batman","krish","chacha chaudhary","ninja hattori"]
*/
//objects :
/*
const myObj={
    name: "srinu",
    age:23,
    isMale:true
};

const myFunction=function(){
    console.log("hello Srinu");
}

console.log(typeof(Object)); //type of object is "function" **
console.log(typeof(function(){}));  //type of function is "function" **
*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory in JS : Stack(primitive) and Heap(non-primitive)**

let str1="hello";
let str2=str1;
console.log(str1,str2); // --> hello hello (obiously they are equal)
str2="world";
console.log(str1,str2); // --> hello world (By changing str 2 value str1 value is not changed)
                        // --> because str1 and str2 are primitive data types and they are stored in stack memory passing copy of its value


let userOne={
    email:"achary@google.com",
    upi: "user@ybl"
};
let userTwo=userOne;
console.log(userOne,userTwo);//--> they are equal
userTwo.email="srinibash@google.com";
console.log(userOne,userTwo);//--> out put will same
                            //--> because userOne and userTwo are are non-primitive so they passing their referce of its heap memory
                            //--> if we make change on usertwo it will make change on userOne also
                            //--> because they are pointing to same memory location in heap memory