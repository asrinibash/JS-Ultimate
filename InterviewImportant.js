//* Interview Questions

//Hoisting in js is applicable for 'var' only-> Because var is global scope
// console.log(asyno);
// var asyno=0;  


//Shallow Copy and Deep Copy**
// Shallow copies are often sufficient and more performant, but deep copies are necessary when you need true independence between the original and copied data, especially with nested structures.


// Shallow Copy:
// A shallow copy creates a new object or array and copies the values of the original object or array into the new one.
// However, if the original object or array contains nested objects or arrays, a shallow copy only copies references to those nested objects or arrays, not the objects or arrays themselves.

// // Shallow copy using spread operator (for arrays) or Object.assign (for objects)
// const originalArray = [1, 2, [3, 4]];
// const shallowCopyArray = [...originalArray];

// const originalObject = { a: 1, b: { c: 2 } };
// const shallowCopyObject = Object.assign({}, originalObject);
// In the examples above, changes to originalArray[2] or originalObject.b.c would affect the corresponding values in the shallow copies.

//Deep Copy:
// A deep copy creates a completely independent copy of the original object or array along with all of its nested objects or arrays.
// It ensures that changes to the original object or array, or any of its nested structures, do not affect the deep copy, and vice versa.
// Deep copying can be achieved using external libraries like "lodash" or through a custom implementation. Here's an example using "JSON.parse" and "JSON.stringify".

// // Deep copy using JSON.parse and JSON.stringify
// const originalArray = [1, 2, [3, 4]];
// const deepCopyArray = JSON.parse(JSON.stringify(originalArray));

// const originalObject = { a: 1, b: { c: 2 } };
// const deepCopyObject = JSON.parse(JSON.stringify(originalObject));


