const numbers=[1,2,3,4,5,6,7,8,9,10];

//Map function-> array.map()
const newNums=numbers.map((num)=>num+10);
console.log(newNums); 
// output: [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

// const newNums1=numbers.map((num)=>{num+10}); //here we give a braces so it returns undefined
// console.log(newNums1); 
// output:[
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined
// ]


//map,filter chaning:

const newData=numbers.map((num)=>(num*10))  //** mostly used
                     .map((num)=>(num+1))
                     .filter((num)=>(num>40));
console.log(newData);                     

//Important : the main difference between map and filter is using map we can perform each item in the array
//but in filter we can use true / false operations , if we use otherthan true/false it will not work but not given any error
// because it treated as true / false values