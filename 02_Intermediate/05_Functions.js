// In JS functions are first class function-> means we can store a funtion in a variable

// function sayMyName(){
//     console.log("Srinibash");
// }
// sayMyName //-> refernce --> used react
// sayMyName() //-> execution

// function addNum(num1,num2){//can got false output, when user give other datatype
//     console.log(num1+num2);//type checking is not there
// }
// addNum();//->without argument ->Nan(output)

// const fun=function fff(){ //->when we return something from function then we can use a variable to store
//     return "Srinu";
// }


function loginUserMesg(username="user"){//->we can assign default value
    if(username=== undefined){
        console.log("Plese enter your username");
        return;//-> it produce undefined
    }
    return `${username} just logged in...`
}
console.log(loginUserMesg("Srinibash"));
console.log(loginUserMesg());//-> when we didnt pass any thing it return undefined justLoggedin

//Rest-Operator: rest operator is also like spread operator in the use cse situation we called rest or spread
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(2));

//object type safety
const user={
    username:"hitesh",
    prices:6000
};
function handelObject(anyObject){
    return `username ${anyObject.username} is want ${anyObject.prices} prices`;
};
console.log(handelObject(user));// here type is same so we didnt get any exception
//if object type is not mathc we get undefined**

//passing direct object
console.log(handelObject({username:"sam",prices:300}));

const myArr=[200,300,340];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArr));//passing array
console.log(returnSecondValue([200,300,400]));////direct passing array
