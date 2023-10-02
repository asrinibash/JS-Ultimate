//array

//Declaration:
let arr=[0,1,2,3,4,5];
// const myArr=["shaktiman","Hanuman","SuperMan"];
// const myArr1=new Array(1,2,3,4,5);
// console.log(arr);
// console.log(myArr);
// console.log(myArr1);

//Methods:
// arr.push(6); //Adding element in last
// arr.pop(); // remove element from last

// arr.unshift(0);//Adding element in first- it shifts all elements to next and add new elem in first(not good)
// arr.shift();//remove from first

// console.log(arr.includes(9));//return boolean 9 is exist or not
// console.log(arr.indexOf(9));
// console.log(arr);

// const newArr=arr.join();// returns-> 0,1,2,3,4,5- join the elements with comma - convert to string 
// arr.join('');//returns -> 012345 by trying to print
//This method mutates the array and returns a reference to the same array
// console.log(newArr);

//Slice-> it doesn't manupulate original array it gives only the portion
const myn1=arr.slice(1,3); // here 3 is not include 
console.log(myn1);//-> [ 1, 2 ]
console.log(arr);//-> [ 0, 1, 2, 3, 4, 5 ] array will not affected(difference between slice and splice)

const myn2=arr.splice(1,3);// here 3 is  include 
console.log(myn2);//->[ 1, 2, 3 ]
console.log(arr);// -> [ 0, 4, 5 ] -> here original array will manipulated / affected(difference between slice and splice)