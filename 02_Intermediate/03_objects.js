
//Object literals-> {} -> curlybraces defines objects
const mySym=Symbol("key2"); //Symbol declaration
const jsObj={
    name:"Srinu",                 //Internally key is like "name":"Srinu",
    email:"srinibash@google.com",
    isLoggedIn:false,
    lastScene:["Monday","Saturday"],
    location:"Bhubaneswar",
    [mySym]:"Key1" // imp-> way to declare a symbol-> we have declare at line-5
};

//Access of object
// console.log(jsObj.location);// Not a right way 
// console.log(jsObj["name"]); // right way because if key is defined as ("name") with doubleInverted comma then we cant access that key, by this sysntax we can access all key (new Syntax)**
// console.log(jsObj[mySym]);//Access of Symbol

//Object Freeze-> After Freezing object we cant make chages objects keys value
// Object.freeze(jsObj);
// jsObj.email="srinibash@microsoft.com"; // it doesnot change because we use Object.freeze() 
// console.log(jsObj); 
// output of jsObj: 
// {
//     name: 'Srinu',
//     email: 'srinibash@google.com',
//     isLoggedIn: false,
//     lastScene: [ 'Monday', 'Saturday' ],
//     location: 'Bhubaneswar',
//     [Symbol(key2)]: 'Key1'
//   }

//we can add a another key like this
jsObj.gretings=function(){ 
    console.log("Hello...Srinibash");
}
// console.log(jsObj.gretings);// -> [Function (anonymous)]
// console.log(jsObj.gretings());// -> Hello...Srinibash (bydefault: and with undefined also)

jsObj.gretingsTwo=function(){
    // console.log("hello.."+jsObj[name]);//Errror
    console.log(`hello...${jsObj.name}`);// -> hello...Srinu
    console.log(`hello...${this.name}`);// -> hello...Srinu -> same
}
jsObj.gretingsTwo();





