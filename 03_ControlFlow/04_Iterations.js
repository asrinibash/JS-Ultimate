//Loops:
//for loop syntax: initialise - condition check - block code execution- increment/decreament
// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

//nested for loop:
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     for (let index = 0; index < 6; index++) {
//         console.log(index);
        
//     }   
// }
//In javaScript there is outbound exception it prints undefined***

//break: it used to terminate the programe when we hit desire output
//continue: it used to skip rest of code in the loop then goes to increament/decre



//while-Loop-it is used when we dont know how many times loop will run by the condition it will break
//syntax
// while (condition) {
    
// }

//do-while loop- it is used when we have to run the loop atleast one times
// do {
    
// } while (condition);



//Specialise loop in JS for array and objects
// 1->for of
// 2->forin
// 3->for 

//for of Loop-
// for (const iterator of object) {
    
// }

const arr=[1,2,3,4,5];
// for (const i of arr) {
//     console.log(i);
// }
//  Example:
// let greetings="Hello World!";
// for (const greet of greetings) {//greet of greetings -> name convension for good readability
//     console.log(`Each charactor is ${greet}`);
// }

//Map datatype:
const map=new Map();
map.set('IN','INDIA');
map.set('IN','INDIA');//it doesnot accept duplicate values
map.set('USA','America');
map.set('UAE','Dubai');
map.set('JA','JAPAN');
console.log(map);
// Map(4) {
//     'IN' => 'INDIA',
//     'USA' => 'America',
//     'UAE' => 'Dubai',
//     'JA' => 'JAPAN'
//   }
for (const key of map) {
    console.log(key);
    
}
// output:
// [ 'IN', 'INDIA' ]
// [ 'USA', 'America' ]
// [ 'UAE', 'Dubai' ]
// [ 'JA', 'JAPAN' ]

// for (const [key,values] of map) {  //Array destructuring
//     console.log(key,' :- ',values);
// }
// output:
// IN  :-  INDIA
// USA  :-  America
// UAE  :-  Dubai
// JA  :-  JAPAN


//For of loop in Object:
// const object={
//     'game1':'spiderman',
//     'game2':'superman'
// };
// for (const [key,values] of object) {  //error: we cant iterate object with for of loop
//     console.log(key,' :- ',values);
// }
//for iterate object we use for in loop