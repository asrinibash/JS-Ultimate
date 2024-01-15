const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'

    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let IntervalID;
const startChangingColor=function(){
    function BGChange(){ document.body.style.backgroundColor=randomColor();}
    if(!IntervalID){  //for cleanup code 
    IntervalID =setInterval(BGChange,1000);
    }
}
const stopChangingColor=function(){
    clearInterval(IntervalID);
    IntervalID=null;//for clear code here we flush out the variable
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);