const body = document.querySelector("body");
body.addEventListener("mousemove", (event) => {
  const posX = event.offsetX;
  const posY = event.offsetY;
  const heart = document.createElement("div");
  heart.style.top = posY + "px";
  heart.style.left = posX + "px";
  const size = Math.random() * 100;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 2000);
});
