const containerEl = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
left.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-left");
});
left.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-left");
});
right.addEventListener("mouseover", () => {
  containerEl.classList.add("active-right");
});
right.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-right");
});
