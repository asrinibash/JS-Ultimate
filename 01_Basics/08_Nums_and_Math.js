//normal way to declare and initialise a Number variable
// const num=5000; //JS detect variable should be number automatically by initialising with a number
// console.log(num); // output: 5000
//Another way to create Number variable by using new keyword
// const n=new Number(5000); //specially cast to Number
// console.log(n);  // output: [Number: 5000]

//when we create a number obeject it unlock some properties of number just like string properties
// console.log(n.toString().length);//now it became string we use string methods here
// console.log(n.toFixed(2));//just like float we use in c it means %.2f
// const otherNumber=123.8966;
// console.log(otherNumber.toPrecision(3)); //it gives pririty to beore decimals value

// const Hundreds=10000000;
// console.log(Hundreds.toLocaleString());//it increses readabily by separating by comas
// console.log(Hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++

// console.log(Math); //it is object and have useful functionalities
// console.log(Math.abs(-4));//it only change negative to positive
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.9));//gives lower value ->4

// console.log(Math.max(2,4,6,8));
// console.log(Math.min(2,4,6,8));

// console.log(Math.random());// it gives range between 0-1(mostly decimal)

// console.log((Math.random()*10)+1);//to avoid 0 we add 1

const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min); //range min-max (max and min both are included)