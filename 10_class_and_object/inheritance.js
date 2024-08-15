class User {
  constructor(username) {
    this.username = username;
  }
  logMe(){
    console.log(this.username+" is loged");
  }
}

//if we want to make user to Admin in a Project

class Admin extends User{    //Now Admin Class can Access user Class properties
    constructor(username,email,password){
        super(username)     //calling the parent class constructor
        this.email=email;
        this.password=password;
    }

    addFunctionality(){
        console.log(`A new functionalty was added by ${this.username}`);
    }
}

const user2=new Admin("admin","admin@microsoft.com",3345);
console.log(user2.addFunctionality());


//Child class can access the properties of its parent class
//But Parent can't access the properties of its child class

//for check the given object is instance of given class - there we can use 'instanceof'

console.log(user2===Admin);//false
console.log(user2 instanceof Admin); //true
console.log(user2 instanceof User); //true -> because it refer to its parent class also