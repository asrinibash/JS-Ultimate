//previously we saw that forEach Loop doesnot return anything

//array.Filter
const coding=[1,2,3,4,5,6,7,8,9];
// const arr=coding.filter((item)=>(item<3))
// console.log(arr); // filter return an array of items that satisfy the condition we give

const myarr=coding.filter((item)=>{
     return item<3;  // here we have to explicitly return the values because when we use curly braces it will scope so we have to return the value
})
// console.log(myarr);


//same as above : just we puting above implimentation logic
const arr2=[];
coding.filter((item)=>{
    if(item<3){
        arr2.push(item);
    }
})
console.log(arr2);


//Exercise:
const array=[
    {
        book:"one",
        genre:"fiction",
        publish:"2001",
        edition:"1978"
    },
    {
        book:"two",
        genre:"non-fiction",
        publish:"1950",
        edition:"1978"
    },
    {
        book:"tree",
        genre:"History",
        publish:"1956",
        edition:"1970"
    },
    {
        book:"four",
        genre:"History",
        publish:"2022",
        edition:"2000"
    },
    {
        book:"five",
        genre:"non-fiction",
        publish:"1947",
        edition:"1975"
    },
    {
        book:"six",
        genre:"History",
        publish:"1996",
        edition:"1906"
    }
];

let userBooks;
// userBooks=array.filter((bk)=>bk.genre=="History");
userBooks=array.filter((bk)=>{
     return bk.publish>=2000 && bk.genre==='History'
    
}); //here we use {} so we use return
console.log(userBooks);