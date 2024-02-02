const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);


const questionEle = document.getElementById('question');
const inputEle = document.getElementById('input');
const FormEle = document.getElementById('form');
const scoreEle = document.getElementById('score');



let score = JSON.parse(localStorage.getItem("score"));//JSON.parse() converts string to number.

if(!score){
    score=0;
}

scoreEle.innerText = `score: ${score}`;

questionEle.innerText = `What is ${num1} Multiply by ${num2}?`;

const correctAns = num1 * num2;

FormEle.addEventListener("submit",()=>{
    const userAns = +inputEle.value;
    if(userAns===correctAns){
        score++;
        updatelocalStorage()
    }
    else{
        score--;
        updatelocalStorage()
    }
});

function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score)); //score is a numbr, so to convert number to a string, we use JSON.stringify();
}




