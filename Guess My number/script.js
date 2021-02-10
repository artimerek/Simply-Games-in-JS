"use strict";

const random = Math.floor(Math.random() * 20) + 1;

let counter = 0;

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
    document.querySelector("body").style.backgroundColor = "#ecd540";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(
      ".label-score"
    ).textContent = `💯 Score: ${ammountOfPoints(counter)}`;
    counter = 0;

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
