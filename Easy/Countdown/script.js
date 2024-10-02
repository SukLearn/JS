const countDownTitle = document.querySelector(".countDown-title");
const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const newYear = new Date().getFullYear() + 1;
const want = new Date(`Jan 1, ${newYear} 00:00:00`);

countDownTitle.innerHTML = newYear;

function getUpdate() {
  const now = new Date().getTime();
  const gap = want - now;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const d = Math.floor(gap / days);
  const h = Math.floor((gap % days) / hours);
  const m = Math.floor((gap % hours) / minutes);
  const s = Math.floor((gap % minutes) / seconds);
  daysEl.innerHTML = d;
  hoursEl.innerHTML = h;
  minutesEl.innerHTML = m;
  secondsEl.innerHTML = s;
  setTimeout(getUpdate, 1000);
}
getUpdate();
