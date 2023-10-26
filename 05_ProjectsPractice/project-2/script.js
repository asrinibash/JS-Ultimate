const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();//by default form(submit btn) send input to server so, we have to stop it

    let height=parseInt(document.querySelector('#height').value);
    let weight=parseInt(document.querySelector('#weight').value);
    let results=document.querySelector('#results');

    if(height==='' || height<0|| isNaN(height)){
        results.innerHTML=`Give valid input ${height}`;
    }else if(weight==='' || weight<0|| isNaN(weight)){
        results.innerHTML=`Give valid input ${weight}`;
    }else{
        let bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
        results.innerHTML=`<span>Ans: ${bmi} | underweight</span>`
        }
       else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML=`<span>Ans: ${bmi} | Normalrange</span>`
            }
           else{
                results.innerHTML=`<span>Ans: ${bmi} | overweight</span>`
     }
    }
})