const imageContainerEl = document.querySelector(".image-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let x = 0;

const updateGallery = () => {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
};
prev.addEventListener("click", () => {
  x = x + 45;
  updateGallery();
});

next.addEventListener("click", () => {
  x = x - 45;
  updateGallery();
});
