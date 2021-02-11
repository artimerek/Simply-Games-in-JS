'use strict';

const scorePlayer = document.querySelector('#score--0');
const scorePlayer1 = document.getElementById('score--1');
const diceDisplay = document.querySelector('.dice');

//setting default values
scorePlayer.textContent = 0;
scorePlayer1.textContent = 0;

diceDisplay.classList.add('hidden');
