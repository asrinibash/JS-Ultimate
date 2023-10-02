// In JS array can accept any datatype in a single array 
let marvel_hero=["ironman","CaptainAmerica","Spiderman"]; 
let DC_hero=["Superman","BatMan","Flash"]; 

// marvel_hero.push(DC_hero);->it added in existing ARRAY
// console.log(marvel_hero);
// output:  it can accept an array also 
//   [
//     'ironman',
//     'CaptainAmerica',
//     'Spiderman',
//     [ 'Superman', 'BatMan', 'Flash' ]
//   ]

// console.log(marvel_hero[3][1]); // to access array of array - here we access batman

// #Concat->Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// const newArr=marvel_hero.concat(DC_hero);
// console.log(newArr);
//output: [
//     'ironman',
//     'CaptainAmerica',
//     'Spiderman',
//     'Superman',
//     'BatMan',
//     'Flash'
//   ]

//#Spread Operator:here we can concatinate multiple arrays in single line - Most used**
// let allHeros=[...marvel_hero,...DC_hero];
// console.log(allHeros);

//Flat:returns a new array wiht sub arrays concatenated - it uses receursive approach
let anotherArray=[1,2,3,[4,5,7],8,[9,10,[11,12,13],14],15];//array holds array of array 
let real_anotherArray=anotherArray.flat(Infinity);
//output: [
//     'ironman',
//     'CaptainAmerica',
//     'Spiderman',
//     'Superman',
//     'BatMan',
//     'Flash'
//   ]

// Other methods:
// console.log(Array.isArray("Srinu"));//->returns boolean
// console.log(Array.from("Srinu"));//create an array from iterable object
//->[ 'S', 'r', 'i', 'n', 'u' ]

//convert Array from Object - Interview Imp***
console.log(Array.from({name:"Srinu"}));// returns [] empty ->we have to give preference (key/value) to make array-keyArray or Value Array

//Array.of
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//returns its value of array
