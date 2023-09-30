
// Comparision operators

//Normal comparision : >, <, >=, <=, ==, !=

// console.log(2>1);
// console.log(2<1);
// console.log(2==1);


// console.log("2">1); //-> true
// console.log("2"<1); //-> false

console.log(null===undefined); //-> false   /  -->sometimes null convert to Nan  and sometimes 0 
console.log(null==undefined); //-> true     /  --> here we didn't get predictable result 
console.log(null>0); //-> false             / 
console.log(null>=0); //-> true             /
console.log(null==0); //-> false            /

//Strict comparision : ===, !==
// it checks both value and datatype whereas normal comparision checks only value

console.log(2==="2"); //-> false  --> here string 2 is not convert to number 2
console.log(2!=="2"); //-> true
