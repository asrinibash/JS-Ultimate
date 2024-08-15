//Importance of Static:-  there is some properties of a Class, we don't give permission to its objects to access

//***Even with extends class object can't access parent class static object

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return 123;
  }
}

const men1=new User("Bruh");
men1.logMe();//it can access this function 

console.log(men1.createId()); // But men1 object can't access static function
