let a=10;//->block scoped
const b=10;//->block scoped
var c=10;//->global scoped

//---->>>the global scope of node environment is different from browser console****


addOne(12); //we can access normal function before define,but we have to letter define
function addOne(num){
    return num+1;
}


addTwo(22);// But we cant access variable function before defining...**
const addTwo=function(num){
    return num+2;
}