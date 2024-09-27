const inputEl = document.querySelector(".input");
const body = document.querySelector("body");
const savedMode = localStorage.getItem("mode") === "true";
inputEl.checked = savedMode;
body.style.backgroundColor = savedMode ? "black" : "grey";

const changeColor = () => {
  change = inputEl.checked
    ? (body.style.backgroundColor = "black")
    : (body.style.backgroundColor = "grey");
};
const saveLocale = () => {
  localStorage.setItem("mode", inputEl.checked);
};

inputEl.addEventListener("input", () => {
  changeColor();
  saveLocale();
});
