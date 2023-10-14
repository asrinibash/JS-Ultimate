const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift bu apple"
}
for (const key in myObject) { //output:    js
    console.log(key);         //           cpp
}                             //           rb
                              //           swift
    
for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}//for printing object values

//for-in loop in Array
const arr=["c++","java","js","pythone"];
for (const key in arr) {
    console.log(arr[key]);//print arr values
}

//for-in Loop in Map
const map=new Map();
map.set('IN','INDIA');
map.set('USA','America');
map.set('UAE','Dubai');
map.set('JA','JAPAN');

