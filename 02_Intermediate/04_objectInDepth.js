//Singleton-> always  object create from constructor is a singleton object
// Object.create--> by this we can create singleton object

// const tinderUser=new Object(); --> Singleton Object declaration --> '{}'
const tinderUser={}; //--> normal Object same output as above line '{}'
tinderUser.id=1234;
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);//-->{ id: 1234, name: 'Sammy', isLoggedIn: false }

//Object inside Objects-> imp Interview Perpective ***
// const user={
    // email:"srinu@amzon.com",
    // fullname:{
    //     userFullname:{
    //         firstname:"Srinibash",
    //         lastname:"achary",
    //     }
    // },
    // password:"xxxxxx"
// };
// console.log(user);
//output:-->{
//     email: 'srinu@amzon.com',
//     fullname: { userFullname: { firstname: 'Srinibash', lastname: 'achary' } },
//     password: 'xxxxxx'
//   }

//accesing inside object
// console.log(user.fullname.userFullname);//->{ firstname: 'Srinibash', lastname: 'achary' }


//Merging Objects:
// let obj1={1:"a",2:"b"};
// let obj2={1:"a",2:"b"};

// let obj3={obj1,obj2} //like array
// console.log(obj3);//-> { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }



//Object.assign(target,source); (first parameter is taget then others are source )

// let obj4=Object.assign(obj1,obj2);
// let obj4=Object.assign({},obj1,obj2); // same as above-> here we declare that merge given array and put it on empty braces
// when we have multiple objects to merge then as target we use empty braces


//Spread Operator:
// let obj5={...obj1,...obj2};
// console.log(obj5);//-->{ '1': 'a', '2': 'b' }


//Getting data from database is likes: Array of Objects

const arr=[
    {
        id:101,
        password:"XXXX",
    },
    {
        id:102,
        password:"XXXX",
    },
    {
        id:103,
        password:"XXXX",
    }
];

//very Useful:**
console.log(Object.keys(tinderUser));//->[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//->[ 1234, 'Sammy', false ]
console.log(Object.entries(tinderUser));//->[ [ 'id', 1234 ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//some time we need to confirm to avoid exception in project
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//->true



//Object destructure:** 
const course={
    coursename:"DSA using Java",
    price:"999",
    courseInstructor:"Srinibash"
};
// to access the object properties :
// (course.courseInstructor)-> by dot operator -> basic syntax

//Advanced syntax -> Mostly used
// const {courseInstructor}=course; we can access now directly courseInstructor
const {courseInstructor: instructor}=course;//-> we can give a name as per choice like instructor
console.log(courseInstructor);//->Srinibash






     