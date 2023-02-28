'use strict';

// DOM - >> Dom manipulation ->> document object model
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);

//Handling clickk events using dom in js
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);
  //   when players does not put any number in the input box
  if (!guessNumber) {
    document.querySelector('.message').textContent =
      'Enter the number first 😃';
    //   when players winns
  } else if (guessNumber === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
  } else if (guessNumber > number) {
    document.querySelector('.message').textContent = 'The Number is Smaller!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Loose The Game 💥';
    }
  } else if (guessNumber < number) {
    document.querySelector('.message').textContent = 'The Number is Greater!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Loose The Game 💥';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing..';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

// Manipulating css style using DOM
