const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading__bar__front");

let i = 0;
const updateBar = () => {
  counterEl.innerHTML = i + "%";
  barEl.style.width = i + "%";
  i += 5;
  if (i < 101) {
    setTimeout(updateBar, 20);
  }
};
updateBar();
