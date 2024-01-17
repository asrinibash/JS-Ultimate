const user={
    username:"Srinu",
    loginCount:7,
    signIn:true,
    getUserDetails:function(){
        // console.log(this.username);//here this represents current Context
        console.log(this);// when the function is called it will print whole object because it pointing to current object
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,signIn){
    this.username=username;
    this.loginCount=loginCount;
    this.signIn=signIn;
    this.greetings=function(){
        console.log(`${this.username}`);
    }

    return this;
}
// // const userOne=User("User1",9,false);
// // const userTwo=User("User2",3,true);  
// console.log(userOne); //In the above we didn't use new keyword so userOne data will Overided

const userOne=new User("User1",9,false);
const userTwo=new User("User2",3,true);  
// console.log(userOne); 
//here data is not overided because every time with the help of 'new' keyWord we got new instances

console.log(userTwo.constructor);//it returns the reference of the object

//In the function we have write this.variable name it is new name int its context not refer to the above object

