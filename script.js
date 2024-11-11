'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score1 = 20
let highScore = 0

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    

    if(!guess){
        document.querySelector('.message').textContent = 'No Number Entered!, Please enter a number to play'

    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'GOOD GUESS'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.
        backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        score1++;
        document.querySelector('.score').textContent = score1

        if(highScore < score1){
            highScore = score1;
            document.querySelector('.highscore').textContent = highScore
        }
     
    }else if(guess > secretNumber){
        if(score1 > 1){
            document.querySelector('.message').textContent = 'BAD GUESS, Too High!'
            score1--;
            document.querySelector('.score').textContent = score1
        }else{
            document.querySelector('.message').textContent = 'You lost the Game'
            document.querySelector('.score').textContent = 0
        }
        

    }else if(guess < secretNumber){
        if(score1 > 1){
            document.querySelector('.message').textContent = 'BAD GUESS, Too Low!'
            score1--;
            document.querySelector('.score').textContent = score1
        }else{
            document.querySelector('.message').textContent = 'You lost the Game'
            document.querySelector('.score').textContent = 0

        }
        
    }
})

document.querySelector('.again').addEventListener('click', function reset(){
    
    document.querySelector('.message').textContent = 'Start Guessing...'
    score1 = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = score1
    document.querySelector('body').style.
        backgroundColor = '#222'
     document.querySelector('.number').style.width = '15rem'
    

    
})