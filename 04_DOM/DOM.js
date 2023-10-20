document.getElementById('title'); //-->return the tag
document.getElementById('title').id  // return the id 
document.getElementById('title').className //return the class name
document.getElementById('title').getAttribute('class')//return the class name

//important:- DOM always overide the recent codes**

const title=document.getElementById('title');
//we can direct access the elemets by storing in a varialble
title.style.backgroundColor='green'
title.style.margin="15px"
title.style.height="50px"
title.style.padding="25px"
title.style.borderRadius="10px"


//how to set the class or id to a given tag
title.setAttribute('class','test');


/*
innerText->returns the text content which is displyed (only visible)
innertextContent= returns all contents visible/not visible
*/

//Query selector ->returns the first html element if select the html element
document.querySelector('h1')//->returns the first h1 tag
document.querySelector('#heading')//->select id
document.querySelector('.bg-body')//->select class

const templist=document.querySelectorAll('li');
// templist[0].style.color='green'
// templist[1].style.color='blue'
// templist[2].style.color='red'

templist.forEach(function (l){
    l.style.backgroundColor='aqua';
    l.style.borderRadius='5px'
    l.style.color='blue'
})


//*** 
//when we use getElementByClassname it returns html collection(data structure in js) so, we need to convert it into Array to usew map or types of loop
// so, there we use 'Array.from('Objectname'); 