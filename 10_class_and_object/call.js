//Example to show case the use 'call()'

function setUserName(username){
    //Complex DB Calls
    this.username=username;
    console.log("Called");
}

function createUser(username,email,password){
    // setUserName(username)//it called but not saving its username properties

    //Now we share our Object reference to outer object when that object done work it will save the details in its owner object
    setUserName.call(this,username);
 
    this.email=email;
    this.password=password;
}

const user1=new createUser("chai","chai@google.com","123456");
console.log(user1);