"use strict";

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");

const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

// buttons
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

let scores, currentScore, activePlayer, playing;

// functions for not reusing same code

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// game starting logic
const Game = function () {
  playing = true;
  scores = [0, 0];

  currentScore = 0;
  activePlayer = 0;

  current0.textContent = 0;
  current1.textContent = 0;

  score0.textContent = 0;
  score1.textContent = 0;

  diceEl.classList.add("hidden");

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");

  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

// starting game
Game();

// Roll button logic
btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `/dices/dice-${dice}.png`;
    if (dice !== 1) {
      console.log(dice);
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      console.log(`1`);
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", Game);

// background-page code
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// closing function to not repeat code
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// opening function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// background page
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    console.log(`button clicked ${i + 1}`);
    openModal();
    // close button
    btnCloseModal.addEventListener("click", closeModal);

    // listens to keyboard press and if esc pressed closes background-page
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeModal();
    });
    // if we click on the background it background-page closes
    overlay.addEventListener("click", closeModal);
  });
}
