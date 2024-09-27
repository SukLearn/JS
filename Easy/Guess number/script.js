"use strict";
let number = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

// for easy reading and shortening code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (text) {
  document.querySelector(".number").textContent = text;
};
// const element = displayNumber();

// const displayScore = function(scoreText){
//   document.querySelector('.score').textContent = scoreText;
// }
// const displayHighScore = function(highscoreText){
//   document.querySelector('.highscore').textContent = highscoreText;
// }

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".check").click();
  } else if (event.key === "a") {
    document.querySelector(".again").click();
  }
});

// Game Logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // if nothing were written
  if (!guess) {
    displayMessage(`No number entered!`);
    // if guess/number is correct why i am writing this like i can forget this easy code
  } else if (guess === number) {
    displayMessage("🥇 Congrats U win");
    displayNumber(number);

    // style changing
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // element.style.width = "30rem"; DOESN'T WORK
    // sets new record
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // if it isn't the right answer
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? `Number is too big` : `Number is too low`
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(`U lost looser`);
    }
  }
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  // game logic restore
  score = 20;
  number = Math.trunc(Math.random() * 100) + 1;

  // styles restore
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  // element.style.width = "15rem"; DOESN'T WORK

  // text restore
  displayNumber("?");
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
});
