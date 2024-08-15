//Question - is ther any way that we can overide the Math.PI value in JS, its constant value is 3.1415

// console.log(Math.PI); //3.141592653589793

Math.PI=5; //it doesnot overide and didn't give error

//there is a method or property of Object which give predefined objects values

const test= Object.getOwnPropertyDescriptor(Math,"PI");
//it only returns properties of given class/object

console.log(test);
/* Output: 
{
  value: 3.141592653589793,
  writable: false,            --> this is the main reason why we can't overide its value
  enumerable: false,          --> JS denide its writabel access in its core (C++ file) 
  configurable: false
}
*/

//Example-> define a object property like above Math.PI property

const chai={
    name:"ginger chai",
    price:250,
    isAvailabe:true
}

const des=Object.getOwnPropertyDescriptor(chai,"name");

// console.log(des);
/* Output-
 {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

//As we creator of the object JS give control to changes of it behaviors

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})              //-->By using 'Object.defineProperty' we can change the default property behaviors of a object 

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
/*Output-
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

//Loop on Objects->

// forOf loop

for (const [key,value] of Object.entries(chai)) {
  console.log(`${key} : ${value}`);
}

// it will not print key and value of 'name' because we manually enumerable-false at line- 46




