'use strict';

const scorePlayerDisplay = document.querySelector('#score--0');
const scorePlayer1Display = document.getElementById('score--1');
const diceDisplay = document.querySelector('.dice');
const buttonNewGame = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const currentPlayerScore = document.getElementById('current--0');
const currentPlayer1Score = document.getElementById('current--1');

let currentScore = 0;
let playerScore = 0;
let player1Score = 0;
let activePlayer = 0;

//setting default values

scorePlayerDisplay.textContent = 0;
scorePlayer1Display.textContent = 0;
diceDisplay.classList.add('hidden');

//Drawing impl
buttonRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1);

  diceDisplay.classList.remove('hidden');
  diceDisplay.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
