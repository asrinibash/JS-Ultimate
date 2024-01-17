// Syntax-01 of Promises ::-::

// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async Task is Completed");
//     //here after we complete the task we call resolve to make confirm to User
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("resolve called");
// });

//Syntax: 02 of Promises ::-::

// new Promise(function(resolve,reject){
//  setTimeout(()=>{
//     console.log("Async Task Called");
//     resolve();
//  },1000)
// }).then(()=>{
//     console.log("Resolve called");
// })

//Syntax-03 of Promises::-:: (Share data with use of resolve)
// const promiseThree=new Promise(function(resolve, reject){
//   setTimeout(function(){
//     //After Async task completed it fetch data and we can share the data using resolve
//     resolve({userName:"Srinu", email:"asrinibash@gmail.com"})
//   },1000);
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

//Syntax-04 of Promises::-::
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const error = false;
//     if (!error) {
//       resolve({ userName: "Srinu", password: "123" });
//     } else {
//       reject("Error: Error got Caughted");
//     }
//   }, 1000);
// });

// //it works like try catch finally block in java just type not exctly for
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.userName; //it will return to the 2nd chain(then)-here return will not to return  to a variable if we had given
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((error) => {
//     //Catch will run if error() will run
//     console.log(error);
//   })
//   .finally(() => console.log("the promise either resolved or rejected")); //it will run every time

//Handle Promise without 'then', 'catch', 'finally' using Async-Await
// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const error = true;
//     if (!error) {
//       resolve({ userName: "JavaScript", password: "123" });
//     } else {
//       reject("Error: JS got Caughted");
//     }
//   }, 1000);
// });

// async function consumePromiseFive(){
//    try{  // we have handle the eception if it occurs->it doesnot give error if promise returns true-> else with out try-catch block it gives error
//    const response=await promiseFive;
//    console.log(response);
//    }catch{
//       console.log("Error");
//    }
// }
// consumePromiseFive(); // we have to call the function

//Real Life Example:

//Syntax of async-await
// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: " + error);
//   }
// }

//Same Example with 'then','catch', 'finally'
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json; //here don't have to handle with try catch block because if then run then 2nd then will run
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
