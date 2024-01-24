
//"this"--> refers to current context
// const user={
//     userName:"Srinibash",
//     price:999,

//     message:function message(){
//          console.log(`${this.userName}, welcome to website`);
//          console.log(this);//it prints like we print object (user)
//     }  //"this"--> refers to current context instance
// }
// user.message();

// console.log(this);//-->{} empty bracket
//when we try to print `this` in global scope in browser console it prints `window` object...***

// function chai(){
//     console.log(this);
// }
// chai();//when we print `this` keyword in a function it prints a lot of things...(Object[global]) 


// function message(){
//     const user1= "srinu"
//     console.log(this.user1);
// }
// message();//-->undefined --> we cant access user1 using this keyword
  // Because it only use in object not in funtion

// const two=function (){  //-->In variable function also we cant use this keyword
//     const user1= "srinu"
//     console.log(this.user1);
// }  


//Arrow funtions
// const three=()=>{  //-->In arrow function also we cant use this keyword
//     const user1= "srinu"
//     console.log(this.user1);
// }

let sum=(num,num1)=>{
    return num+num1;
}
console.log(sum(3,4));//->7


//Inplicite return:****

// let addTwo=(num1,num2)=>num1+num2;  //-> type 1

let addTwo=(num1,num2)=>(num1+num2);  //-> type 2

console.log(addTwo(3,4));//-->7

//if we use {} curly baces then we have to use return keyword...otherwise in this type of arrow funtion it didn't require

//when we returning object in inplace returning
let wow=()=>({username:"srinu",pass:90282});  //-> type 2
//we have to wrap up with () otherwise it prints undefined

