const arr=[1,2,3,4,5];
const myTotal=arr.reduce((accumulator,currentValue)=>(accumulator+currentValue),1);
console.log(myTotal); //-> 15
//what is done here?
/* here... `accumulator`and `currentValues` are two variables
accumulator holds the initial value that we given and update itself with the operation result
and that result make operation with currentvalue in further operations
we can give a initial value to accumulator just like we given `1` to above condition
*/
// syntax:
// const op=arr.reduce((accumulator,currentvalue)=>(accumulator+currentvalue),initialValue);
//

const op=arr.reduce((acc,curr)=>(acc+curr),0); //it will give total sum of elements in the array

const shoppingCart=[
    {
        course:"JS course",
        price:2999
    },
    {
        course:"py course",
        price:999
    },
    {
        course:"Java course",
        price:3999
    },
    {
        course:"Data Science course",
        price:12999
    },
];
//here task is add total price user will give in shopping cart
const total=shoppingCart.reduce((acc,curr)=>(acc+curr.price),0);
console.log(total);