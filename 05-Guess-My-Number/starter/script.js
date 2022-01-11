'use strict';

const rno=Math.trunc(Math.random()*20)+1;
console.log(rno);

let score = 20;
let highscore= 0;


console.log('bjcj')
document.querySelector('.check').addEventListener('click',function(){

    const guess=document.querySelector('.guess').value;
    console.log(guess,typeof(guess));

    console.log(document.querySelector('.guess').value);
//when there is no input
    if(!guess){
        document.querySelector('.message').textContent='no is not entered';
        //when player wins
    }else if(guess == rno){
        document.querySelector('.message').textContent=' Correct no';
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').style.width ='30 rem';
        document.querySelector('.number').textContent=rno;
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //when player lose

    }else if(guess > rno){

        if(score > 0){
            console.log(score);
            document.querySelector('.message').textContent=' no is too high';
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent=' you lost the game';
        }
        


    }else if(guess < rno){
        if(score > 0){
            document.querySelector('.message').textContent=' no is too low';
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent=' you lost the game';
        }
        
        
    }
});

 document.querySelector('.again').addEventListener('click',function(){
    console.log('this is again addeventlistener');
   // document.getElementById('.message').textContent = 'Start guessing';
    document.querySelector('.message').textContent= 'start guessing';
    //document.getElementById('.score').value = 20;
    //document.getElementById('.guess').value = 5;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#FFBD33';
    document.querySelector('.score').textContent= 0;
    document.querySelector('.number').textContent='?';

 });