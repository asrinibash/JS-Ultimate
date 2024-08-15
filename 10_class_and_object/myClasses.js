//This is Moder Syntax is introduced in ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encriptedPass() {
    return this.password.concat("abc");
  }

  changeUserName() {
    return this.username.toUpperCase();
  }
}
const user1 = new User("srinu", "srinu@microsoft.com", "123");

console.log(user1.encriptedPass());
console.log(user1.changeUserName());

//If we didn't get this Syntactical sugar then how it will be :
//behind the Scenes

function Users() {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encriptedPass = function () {
  return this.password.concat("abc");
};

User.prototype.changeUserName = function () {
  return this.username.toUpperCase();
};

const user2 = new User("srinibash", "srinibash@microsoft.com", "123");

console.log(user2.encriptedPass());
console.log(user2.changeUserName());
