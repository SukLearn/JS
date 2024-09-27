"use strict";

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
// way better to just make esc key work then background-page is pressed
// if (!modal.classList.contains("hidden")) {
//   console.log(`this works`);
//   closeModal();
// }
