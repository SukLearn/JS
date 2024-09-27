const imageContainer = document.querySelector(".imageContainer");
const btn = document.querySelector(".btn");
btn.addEventListener("mouseover", (event) => {
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;
  btn.style.setProperty("--PosX", x + "px");
  btn.style.setProperty("--PosY", y + "px");
});

btn.addEventListener("click", () => {
  newImages();
});
function newImages() {
  for (let i = 0; i < 6; i++) {
    const newImgEl = document.createElement("img");
    const random = Math.floor(Math.random() * 2000);
    newImgEl.src = `https://picsum.photos/300?random=${random}`;
    newImgEl.alt = "not working";
    imageContainer.append(newImgEl);
  }
}
