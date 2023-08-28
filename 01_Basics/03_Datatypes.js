"use strict"; // --> treat all JS code as newer version

//alert(3+3) // --> 6 in browser pop-up  not allowed in node.js , can be used in browser console

let age=18; // --> number datatype (range -2^53 to 2^53)
let name="John"; // --> string datatype " " or ' '
let isMale=true; // --> boolean datatype
let x; // --> undefined datatype
let y=null; // --> null datatype but typeof y is 'object' (may be consider as bug in JS)
let z=Symbol("id"); // --> symbol datatype (unique identifier)
                    // mostly uses in react.js
//object datatype => array, function, object (functions are first class objects in JS)
