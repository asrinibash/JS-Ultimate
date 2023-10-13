//Immediate invoked function expression: iife

// named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();//--> IIFE                    ()()-> first: function defination 
                                //    -> second: function execution

//ehyto use `iife` : for ignoring global scope polution which variable name we used here iife funtion                                

//we can write it with arrow function
//unamed iife
(()=>{
    console.log(`I'm from arrow funtion`);
})(); //here semicolon is important
//`;` semicolon helps to stop the iife at the point if we not use ; then after the rest of the function will not execute gives error 

//unamed iife with parameter
((name)=>{
    console.log(`I'm${name}...from arrow funtion`);
})("iife");//-> we can give parameter here also

//Implicite Scope
if(20>10) console.log("test1");

//we can write in this way also // prefer not to use- not much readable code 
if(20>10) console.log("test 1"),console.log("test 2");// using `,` we can add  more line of code no need to use curlu braces

//nested if-else if-else
// if(){          --> from first if one statement is true then other will not execute

// }else if{

// }else if(){

// }else{

// }

// AND OR 
if(true && true){ // AND 
    //both condition must be true
}
if(false || true){// OR
    //if one of condition is true then it will execute
}