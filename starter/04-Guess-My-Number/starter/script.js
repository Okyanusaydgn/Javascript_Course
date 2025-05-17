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
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// 🧮 Initial score value
let score = 20;

// 🕵️‍♂️ Display the secret number (for testing)
document.querySelector('.number').textContent = secretNumber;

// ✅ Add event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  // 🔢 Get the user's guess and convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // ❌ If there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // 🎉 If the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // 🌿 Change background color to green
    document.querySelector('body').style.backgroundColor = '#60b347';

    // 📏 Enlarge the number box
    document.querySelector('.number').style.width = '30rem';

    // 📈 If the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // 💥 Player loses the game
      document.querySelector('.message').textContent = '🤯 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // 📉 If the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // 💥 Player loses the game
      document.querySelector('.message').textContent = '🤯 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
