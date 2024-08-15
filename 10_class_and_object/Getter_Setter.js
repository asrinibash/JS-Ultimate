//New Syntax of Getter and Setter***
/*
class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    get password(){
        // return this.password;  it will not work
        return this._password.toUpperCase();
    }
    set password(value){
        //  this.password=value;  it will not work
         this._password=value;
    }
}
 */ 
// When we trying set password in constructor and using 'setter' also then we get-maximum call stack size exceeded error

//But in new syntax by using _password it will save to same password-here constructor will not set password

// const obj=new User("chai","abs");
// console.log(obj.password);


// ****
// Funtional old Syntax ->
// function User(email,password){
//     this._email=email;
//     this._password=password;

//     //Getter Setter of email
//     Object.defineProperty(this,'email',{
//         get:function(){
//             return this._email
//         },
//         set:function(value){
//             this._email=value;
//         }
//     })

//     //Getter Setter of Password
//     Object.defineProperty(this,'password',{
//         get:function(){
//             return this._password;
//         },
//         set:function(value){
//             this._password=value;
//         }
//     })
// }

// const chai=new User("chai@meesho.com",123);
// console.log(chai.email); //we don't have call getEmail -> by calling chai.email it will called its getter


//*** How Old javaScript Object Syntax for Getter and Setter

const User={
    _email:'h@hc.com',    //Here we have to give hardcored values
    _password:1234,

    get email(){
        return this._email;
    },
    set email(value){
        this._email=value;
    }
}
const tea=Object.create(User);  //factory methods
console.log(tea.email);