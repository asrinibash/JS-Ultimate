const name="srinibash"
const repocount= 22;

console.log(name+" has "+repocount+" public repositories on github");  //--> old way to concatinate string

//String-Inter polation : (new way to concatinate string)
// console.log(`Hello my name is ${name} and i have ${repocount} ropositories on github`);**
// In the new way we can add functions also to the strings like :
console.log(`hello ${name.toUpperCase()}`); // makes easier

//another Way to declare String
 let gameName=new String('valorant');
//  console.log(gameName); // now it has more function as compared to above declaration
//  console.log(typeof gameName);  // because now type of string is object type

//  console.log(gameName[0]); //-> access its key value
//  console.log(gameName.__proto__); // returns {} empty object basically it is the syntax to access string methods but it not needed 
// console.log(gameName.length); //return it s length 
// console.log(gameName.charAt(0));//-> here we provide index number
console.log(gameName.indexOf('t')); //--> return its index if exist if not exist then return -1

const newString=gameName.substring(2,6); //it 2nd parameter index is not include in the substring
console.log(newString);   //if we give (-)ve parameter in substring method 

const anotherString=gameName.slice(-8,4); //-> its starts reversly prints valo
console.log(anotherString);

const newStringOne="    Hello    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //it removes first and last spaces 

//important: replace
const url="https://srinibash.com/srinibash%20achary"; // some times browser replace spaces with %20 so there we use replace method 
console.log(url.replace('%20','-')); //it will replace %20 ti '-'

const str3="Srinibash Achary"
console.log(str3.includes('Achary')); //returns true because Achary is exst in the string

const str="hii-every-one";
console.log(str.split('-')); //split based on '-'