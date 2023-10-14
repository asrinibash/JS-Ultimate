const coding=["pythone","java","c++","javascript"];
// coding.forEach(function(val){  //here we dont need to write funtion name 
//     console.log(val);
// })


// coding.forEach((val)=>{   //arrow funtion
//    console.log(val);
// })

// coding.forEach(printItem); //**here we have to give function reference not function execution
// //if we give the function execution it will give error
// function printItem(item){
//     console.log(item);
// }


// coding.forEach((item,index,arr)=>{  //** 
//     console.log(item,index,arr); //it can access index, index value and total array in a single line of code
// })//advanced concept***


//forEach Loop in Array Object:**

const object=[
    {
        languageName:"java",
        languageFileName:".java"
    },
    {
        languageName:"javascript",
        languageFileName:".js"
    },
    {
        languageName:"python",
        languageFileName:".py"
    }
];

object.forEach((item)=>{  //here we can access object properties
    console.log(item.languageName);
})

//if we store the forEach function in a variables

const value=coding.forEach((item)=>{
    return item;
})// if we returning values and try to store it with a variable it return undefined
// forEach loop doesnot return any thing