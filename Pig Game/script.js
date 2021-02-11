'use strict';

const player = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scorePlayerDisplay = document.querySelector('#score--0');
const scorePlayer1Display = document.getElementById('score--1');
const diceDisplay = document.querySelector('.dice');
const buttonNewGame = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const currentPlayerScore = document.getElementById('current--0');
const currentPlayer1Score = document.getElementById('current--1');

const scores = [0, 0];

let isPlayin = true;
let currentScore = 0;
let activePlayer = 0;

//setting default values

scorePlayerDisplay.textContent = 0;
scorePlayer1Display.textContent = 0;
diceDisplay.classList.add('hidden');

//Drawing impl
buttonRoll.addEventListener('click', function () {
  if (isPlayin) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceDisplay.classList.remove('hidden');
    diceDisplay.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (isPlayin) {
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isPlayin = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceDisplay.classList.add('hidden');
    } else switchPlayer();
  }
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
