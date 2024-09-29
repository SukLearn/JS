const textarea = document.getElementById("textarea");
const remainingCount = document.querySelector(".remainingCount");
const totalCount = document.querySelector(".totalCount");

textarea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCount.innerText = textarea.value.length;
  remainingCount.innerText =
    textarea.getAttribute("maxLength") - textarea.value.length;
}
