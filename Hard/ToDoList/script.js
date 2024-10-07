const inputFieldEl = document.querySelector(".task__input");
const taskUlEl = document.querySelector(".container__tasks");
const taskTotal = document.querySelector(".total");
const accomplishContainer = document.querySelector(".container__accomplish");
let total = 0;

function addTask() {
  const inputText = inputFieldEl.value.trim();
  if (inputText !== "") {
    const li = document.createElement("li");
    li.textContent = inputText;

    const btnContainer = document.createElement("div");
    const btnSuccess = document.createElement("button");
    const btnTrash = document.createElement("button");

    li.classList.add("li__item");

    btnSuccess.classList.add("btn", "btn__success");
    btnTrash.classList.add("btn", "btn__trash");

    btnSuccess.innerHTML = `<img src="assets/images/square.png" alt="accomplishing icon" />`;
    btnTrash.innerHTML = `<img src="assets/images/trash.png" alt="trash icon" />`;

    btnContainer.appendChild(btnSuccess);
    btnContainer.appendChild(btnTrash);

    li.appendChild(btnContainer);
    taskUlEl.appendChild(li);

    inputFieldEl.value = "";
    btnTrash.addEventListener("click", () => {
      li.remove();
    });
    btnSuccess.addEventListener("click", () => {
      accomplish(li, btnSuccess);
    });
  }
}

function accomplish(taskItem, btnSuccess) {
  if (taskItem.parentElement === taskUlEl) {
    accomplishContainer.appendChild(taskItem);
    btnSuccess.innerHTML = `<img src="assets/images/checked.png" alt="accomplishing icon" />`;
    total++;
  } else {
    taskUlEl.appendChild(taskItem);
    btnSuccess.innerHTML = `<img src="assets/images/square.png" alt="accomplishing icon" />`;
    total--;
  }
  taskTotal.innerHTML = `Tasks Done: ${total}`;
}

inputFieldEl.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
});
