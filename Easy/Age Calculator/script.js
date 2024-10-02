const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".birth");
const calculateAge = (birthDayValue) => {
  const age = new Date(birthDayValue);
  const now = new Date();
  let ageY = now.getFullYear() - age.getFullYear();
  const ageM = now.getMonth() - age.getMonth();
  if (ageM < 0 || (ageM == 0 && now.getDate() < age.getDate())) {
    ageY--;
  }
  document.querySelector(".age").innerHTML = ageY;
  document.querySelector(".answer__text").style.visibility = "visible";

  if (ageY < 0) {
    document.querySelector(".answer__text").innerHTML =
      "You are not born yet xD";
  }
};
function inputCheck() {
  const birthDayValue = inputEl.value;
  if (birthDayValue == "") {
    inputEl.style.border = "2px solid red";
  } else {
    inputEl.style.border = "1px solid black";
  }
  calculateAge(birthDayValue);
}

btnEl.addEventListener("click", () => {
  inputCheck();
});
