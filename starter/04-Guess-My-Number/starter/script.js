'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// 🎯 Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// 🧮 Initial score value
let score = 20;

// 🏆 Track the highest score
let highScore = 0;

// 📢 Helper function to display a message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// 🕵️‍♂️ Display the secret number (for testing)
// document.querySelector('.number').textContent = secretNumber;

// ✅ Add event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  // 🔢 Get the user's guess and convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // ❌ No input provided
  if (!guess) {
    displayMessage('⛔ No number!');

    // 🎯 If the guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    // 🕵️‍♂️ Show the secret number
    document.querySelector('.number').textContent = secretNumber;

    // 🌿 Change background color to green
    document.querySelector('body').style.backgroundColor = '#60b347';

    // 📏 Enlarge the number box
    document.querySelector('.number').style.width = '30rem';

    // 🏆 Update highscore if needed
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // ❌ If guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // 💥 Player lost the game
      displayMessage('🤯 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  // 📈 If the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

  // 📉 If the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

// 🔁 Add event listener for the "Again" button to reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // ♻️ Reset UI elements
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
