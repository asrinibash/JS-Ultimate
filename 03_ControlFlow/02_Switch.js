//it used to check multiple condition for one particular operation
//Basic sysntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//Example:
let month =3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default:
        //if upper condition is not true then it will execute
        break;
}