let slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let interval;

const showImage = () => {
  slides[slideIndex].classList.add("show");
  interval = setInterval(next, 3000);
  console.log(slides);
};

const images = (index) => {
  slides.forEach((slide) => {
    slide.classList.remove("show");
  });
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }
  slides[slideIndex].classList.add("show");
};

const next = () => {
  images(slideIndex + 1);
};
const prev = () => {
  clearInterval(interval);
  images(slideIndex - 1);
};
document.addEventListener("DOMContentLoaded", showImage);
