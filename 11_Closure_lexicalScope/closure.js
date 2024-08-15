//Understanding Lexixal Scoping ->

// function Outer(){
//     let outerVar="srinu";

//     function inner1(){
//         let innerVar="Secret";
//         console.log(outerVar);
//     }
//     function inner2(){
//         // console.log(innerVar); //parent function properties can access but childrens can't access their properties with each other 
//         inner1(); //we can called parent functions
//     }
//     inner2();
// }

// Outer();

//Summerize: lexical Scoping
//-> child can access parent properties
//-> parent cannot access child properties
//-> parent share its global contex memory with its child


//Understanding Closure ->

function Outer(){
    let secret=123;

    function inner(){
        console.log(secret);
    }

    return inner; //***when we return a function reference it not only return its reference it return its whole Lexixal Scope
}

const refer=Outer();
refer();

//Summerize->
//when we return a function it not only return its refernece(like its varibles, call reference) it returns its lexical scope means its total memory(like which properties of its parent it can access)



