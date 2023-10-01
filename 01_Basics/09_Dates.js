//Dates
/*
let myDate=new Date();
console.log(myDate);//returns not readable data
console.log(myDate.toString()); //it returns a a readable current indian time
console.log(myDate.toDateString());//it returns exact time fully readable in name format
console.log(myDate.toLocaleDateString());//it returns current date with the syntax 00/00/0000
*/
// let myCustomDate=new Date(2023,0,23);//month start from 0 so when give 0 it returns january
// console.log(myCustomDate.toDateString());//returns -> Mon Jan 23 2023

// let myCustomDate=new Date(2023,0,23,5,3);// we can give extra data like time 
// console.log(myCustomDate.toLocaleString());//returns -> 23/1/2023, 5:03:00 am

// let myCreatedDate =new Date("2023-01-23");// yyyy-mm-dd -> not indian format
// console.log(myCreatedDate.toLocaleString());//returns 23/1/2023, 5:30:00 am
// -> toLocaleString() - returns date + time, either we had given or not 
// -> toLocaleDateString() - returns onley date,either we we had given or not 

// let myCreatedDate =new Date("20-01-2023");// -> dd-mm-yyyy -> Indian Format
// console.log(myCreatedDate.getTime());// returns Nan

//TimeSataps-> used for polls designing,quizes designing
// let myTimeStamps=Date.now();
// console.log(myTimeStamps);// -> returns Long type  miliseconds value from 1970-jan-01 from mid night
//it used for time comaparision 

console.log(Date.now());//Long type miliseconds

//to get seconds->
console.log(Math.floor(Date.now()/1000)); //-> it returns second data

let newDate=new Date();
console.log(newDate.getMonth());//it returns no. of month of current date starting from Zero - 0
console.log(newDate.getDate());//it returns no. of date of current date starting from One - 1

//Important -> we can customise timeformat
newDate.toLocaleString('dafault',{
    weekday:"long",
    // timeZone:
})