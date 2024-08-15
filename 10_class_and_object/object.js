function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;
// ****
//here we know that we can behave a function like a object because all the stuffs in JS in prototypical inheritance to object
// ****
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5);
console.log(multiplyBy5.prototype);

//Output:
// 25
// 2
// [Function: multiplyBy5] { power: 2 }
// {}

/* 
    function ----\                           //Object is parent of all
                  \
    Array------------> Object ---->null
                  /  (imp)
    String-------/
*/

// function object: ***

function createUser(username, price) {
  this.username = username;
  this.price = username;
}

//In this way we can add properties to the functional objec declared in the above
createUser.prototype.increment = function () {
  price++;
}
createUser.prototype.pritMe=function(){
  console.log(`price is ${this.price}`);
}
let coffe = new createUser("cofee", 250);   //*** by using 'new' keyword we can initialise a new object
let chai =  createUser("tea", 25);// with out new keyword it doesnot work give error undefined

// Imp Notes of 'new' keyword :
/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned. 
*/
