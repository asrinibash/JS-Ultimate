//Adding new properties to a String / Object ****

// const myArray="Srinu    ";  
// const myChai="chai   ";

//target to Add a new property to all the string  
// console.log(myArray.trueLength);


const myArray=["thor", "hulk","spiderman"];

const heroPower={
    thor:"hammer",
    hulk:"muscle",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

//To inject a new property to the String/Array/functions- we can use .prototype 

// As we need for all the datatypes we inject a property so we use top hierchy 'Object' -we inject propertiy to direct object 
//Beacause we Object is last referenced So, it can used by all the objects in JS

Object.prototype.srinu=function(){
    console.log("Srinu is present in all the objects");
}

// myArray.srinu();
// heroPower.srinu();  //Now all Array/Object/function can use this function 


Array.prototype.heySrinu=function(){
    console.log("hey Srinu");
}
// myArray.heySrinu();// Array can acces its properties
// heroPower.heySrinu(); //But Object can't access because parent can't acces children properties


//Inheritance:  

//   By using - ' __proto__ '  (Old Style code)

const Teacher={
    makeVideo:false
}

const TeachingAsst={
    isAvailabel:true
}

const TASupport={
    makeAssignment:'JS Assignment',
    fulltime:true,
    __proto__:Teacher //By using __proto__ TASupport can access Teacher properties
}

//Modern Syntax:

Object.setPrototypeOf(TASupport,Teacher); //TASupport can access Teacher Properties


let anotherUser="Srinibash     ";

String.prototype.trueLength=function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUser.trueLength();
"srinu".trueLength();
"hitesh".trueLength();  