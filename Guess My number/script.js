"use strict";

const random = Math.floor(Math.random() * 20) + 1;

let counter = 0;
let highscore = 0;

//restores default values
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#0099ff";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".label-score").textContent = "💯 Score: ";
});

//checking value of number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Not a number!";
  } else if (guess > random) {
    document.querySelector(".message").textContent = "Too much..";
    counter++;
    console.log(counter);
  } else if (guess < random) {
    document.querySelector(".message").textContent = "Too low..";
    counter++;
    console.log(counter);
  } else {
    document.querySelector(".message").textContent = "Correct answer!";
    document.querySelector("body").style.backgroundColor = "#ff5050";
    document.querySelector(".number").style.width = "30rem";

    let points = ammountOfPoints(counter);
    document.querySelector(".label-score").textContent = `💯 Score: ${points}`;
    counter = 0;
    if (highscore < points)
      document.querySelector(
        ".label-highscore"
      ).textContent = `🥇 Highscore: ${points}`;

    document.querySelector(".number").textContent = random;
  }

  console.log(document.querySelector(".guess").value);
});

const ammountOfPoints = function (count) {
  if (count < 1) return 30;
  else if (count < 3) return 10;
  else if (count < 6) return 2;
  else return 0;
};
