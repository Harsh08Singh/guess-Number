'use strict';

// Generate secret number

// o we need to calculate the random number for one session and till the 20 attempts

// So we need a loop structure

// if the user just clicks we have to give him a message stating guess a number first

// Now when the user inputs the number and clicks on it we have to give him some messages

// - Too HIgh
// - Too Low
// - Little Less
// - Little High
// - Too Close
// - Correct

// What should be the range

// If user gets correct input he will be asked if he want to continue

// After repeated 20 failed attempts the user will get a message that you failed to predict the number and ask him to guess again

// Generate Secret Number
let secretNumber = Math.floor(Math.random() * 20) + 1;
let numberOfAttempts = 20;
let highScore = 0;

// TODO ADDING EVENTLISTENER TO PLAY AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  numberOfAttempts = 20;
  document.querySelector('.score').textContent = 20;
  // IMPORTANT again hiding the secret number from the user
  document.querySelector('.number').textContent = '?';
});

// TODO ADDING EVENTLISTENER TO CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  // Capture the user input
  const guessedNumber = Number(document.querySelector('.guess').value);

  // Check for no input
  if (!guessedNumber) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guessedNumber === secretNumber) {
    // Change the text content when the user hits the right answer
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Success';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (numberOfAttempts > highScore) {
      highScore = numberOfAttempts;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessedNumber > secretNumber) {
    if (numberOfAttempts > 1) {
      // Change the text content when the user guesses high
      document.querySelector('.message').textContent = 'Too High';
      document.querySelector('body').style.backgroundColor = 'brown';
      numberOfAttempts--;
      document.querySelector('.score').textContent = numberOfAttempts;
    } else {
      // User is out of attempts
      document.querySelector('.message').textContent = 'you lose';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessedNumber < secretNumber) {
    if (numberOfAttempts > 1) {
      // Change the text content when the user guesses low
      document.querySelector('.message').textContent = 'Too LOw';
      document.querySelector('body').style.backgroundColor = 'pink';
      numberOfAttempts--;
      document.querySelector('.score').textContent = numberOfAttempts;
    } else {
      // User is out of attempts
      document.querySelector('.message').textContent = 'you lose';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});
