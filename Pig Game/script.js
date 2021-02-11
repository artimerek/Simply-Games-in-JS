'use strict';

const scorePlayer = document.querySelector('#score--0');
const scorePlayer1 = document.getElementById('score--1');
const diceDisplay = document.querySelector('.dice');
const buttonNewGame = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

//setting default values

scorePlayer.textContent = 0;
scorePlayer1.textContent = 0;
diceDisplay.classList.add('hidden');

//Drawing impl
buttonRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1);

  diceDisplay.classList.remove('hidden');
  diceDisplay.src = `dice-${dice}.png`;
});
