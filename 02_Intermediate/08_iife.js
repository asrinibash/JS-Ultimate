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