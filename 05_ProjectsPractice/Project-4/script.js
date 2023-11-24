const randomNum=(parseInt(Math.random()*100)+1);

const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guesSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement('p');

let prevGuess=[]
let numGuess=0

let playgame=true;


if(playgame){
    submit.addEventListener('click',function(e) {
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}



function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a valid a Number');
    }else if(guess< 1){
        alert('Enter a number more than 0');
    }
    else if(guess>100){
        alert('Enter a number smaller than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess===10){
            displayGuess(guess);
            displayMessage(`Game Over...Random Number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    
}

function checkGuess(guess){
if(guess===randomNum){
    displayMessage("You guessed it right...");
    endGame();
}else if(guess<randomNum){
    displayMessage("Number is TOOO Low")
}else if(guess>randomNum){
    displayMessage("Number is TOOO High")
}

}

function displayGuess(guess){
    userInput.value='';
    guesSlot.innerHTML+=`${guess}, `
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`;

}

function displayMessage(message){
   lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    prevGuess=[];
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML='<h2 id="newgame"> start new Game</h2>';
    startOver.appendChild(p);
    playgame=false;
    newGame();
}
function newGame(){
    const newGameBtn=document.querySelector('#newGame');
    newGameBtn.addEventListener('click',function(){
      randomNum=(parseInt(Math.random()*100)+1);
      prevGuess=[];
      numGuess=1;
      guesSlot.innerHTML=''
      remaining.innerHTML=`${10-numGuess}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playgame=true;
    })
}