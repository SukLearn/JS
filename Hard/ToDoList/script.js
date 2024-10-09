const inputFieldEl = document.querySelector(".task__input");
const accomplishedBtn = document.querySelector(".btn-accomplished");
const taskUlEl = document.querySelector(".container__tasks");
const taskTotal = document.querySelector(".total");
const accomplishContainer = document.querySelector(".container__accomplish");
let total = 0;
let existingSucceedTasks = 0;
const createBtn = (className, icon) => {
  const btn = document.createElement("button");
  btn.classList.add("btn", className);
  btn.innerHTML = `<img src="assets/images/${icon}.png" alt="${icon} icon" />`;
  return btn;
};
const addTask = () => {
  const inputText = inputFieldEl.value.trim();
  if (inputText !== "") {
    const li = document.createElement("li");
    li.classList.add("li__item");

    const spanTaskText = document.createElement("span");
    spanTaskText.classList.add("task-text");
    spanTaskText.textContent = wordCutter(inputText);

    const btnContainer = document.createElement("div");
    const btnSuccess = createBtn("btn__success", "square");
    const btnTrash = createBtn("btn__trash", "trash");

    btnContainer.append(btnSuccess, btnTrash);

    li.append(spanTaskText, btnContainer);
    accomplishContainer.appendChild(li);
    taskUlEl.appendChild(li);

    inputFieldEl.value = "";
    btnTrash.addEventListener("click", () => {
      removeTask(li);
    });
    btnSuccess.addEventListener("click", () => {
      toggleSucceedTask(li, btnSuccess);
    });
  }
};
const removeTask = (li) => {
  if (li.parentElement === accomplishContainer) existingSucceedTasks--;
  li.remove();
  showSucceedBtn();
};
const toggleSucceedTask = (taskItem, btnSuccess) => {
  if (taskItem.parentElement === taskUlEl) {
    accomplishContainer.appendChild(taskItem);
    btnSuccess.innerHTML = `<img src="assets/images/checked.png" alt="accomplishing icon" />`;
    existingSucceedTasks++;
    total++;
    showSucceedBtn();
  } else {
    taskUlEl.appendChild(taskItem);
    btnSuccess.innerHTML = `<img src="assets/images/square.png" alt="accomplishing icon" />`;
    existingSucceedTasks--;
    total--;
  }
  showSucceedBtn();
  taskTotal.innerHTML = `Tasks Done: ${total}`;
};

const wordCutter = (text) => text.replace(/(.{45})/g, "$1 ").trim();
const showSucceedBtn = () => {
  accomplishedBtn.style.display = existingSucceedTasks > 0 ? "inline" : "none";
};

accomplishedBtn.addEventListener("click", () => {
  accomplishContainer.classList.toggle("hidden");
});

inputFieldEl.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
});
