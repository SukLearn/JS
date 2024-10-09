document.addEventListener("DOMContentLoaded", () => {
  const inputFieldEl = document.querySelector(".task__input");
  const accomplishedBtn = document.querySelector(".btn-accomplished");
  const taskUlEl = document.querySelector(".container__tasks");
  const taskTotal = document.querySelector(".total");
  const accomplishContainer = document.querySelector(".container__accomplish");

  let localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let total = parseInt(localStorage.getItem("total"), 10) || 0;
  let existingSucceedTasks = localTasks.filter((task) => task.completed).length;

  const saveToLocalStorage = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));
  const updateTotal = (change) => {
    total += change;
    taskTotal.innerHTML = `Task Done: ${total}`;
    saveToLocalStorage("total", total);
  };

  const wordCutter = (text) => text.replace(/(.{40})/g, "$1 ").trim();

  const createButton = (className, icon) => {
    const btn = document.createElement("button");
    btn.classList.add("btn", className);
    btn.innerHTML = `<img src="assets/images/${icon}.png" alt="${icon} icon" />`;
    return btn;
  };

  const addTaskToDOM = (taskText, isCompleted = false) => {
    const li = document.createElement("li");
    li.classList.add("li__item");

    const spanTaskText = document.createElement("span");
    spanTaskText.classList.add("task-text");
    spanTaskText.textContent = wordCutter(taskText);

    const btnSuccess = createButton(
      "btn__success",
      isCompleted ? "checked" : "square"
    );
    const btnTrash = createButton("btn__trash", "trash");

    btnSuccess.addEventListener("click", () =>
      toggleCompleteTask(li, btnSuccess, taskText)
    );
    btnTrash.addEventListener("click", () => removeTask(li, taskText));

    const btnContainer = document.createElement("div");
    btnContainer.append(btnSuccess, btnTrash);

    li.append(spanTaskText, btnContainer);
    (isCompleted ? accomplishContainer : taskUlEl).appendChild(li);
  };

  const removeTask = (taskItem, taskText) => {
    if (taskItem.parentElement === accomplishContainer) existingSucceedTasks--;
    taskItem.remove();
    localTasks = localTasks.filter((task) => task.text !== taskText);
    saveToLocalStorage("tasks", localTasks);
    showSucceedBtn();
  };

  const toggleCompleteTask = (taskItem, btnSuccess, taskText) => {
    const task = localTasks.find((task) => task.text === taskText);
    task.completed = !task.completed;
    taskItem.parentElement === taskUlEl
      ? accomplishContainer.appendChild(taskItem)
      : taskUlEl.appendChild(taskItem);
    btnSuccess.innerHTML = `<img src="assets/images/${
      task.completed ? "checked" : "square"
    }.png" alt="icon" />`;
    existingSucceedTasks += task.completed ? 1 : -1;
    updateTotal(task.completed ? 1 : -1);
    saveToLocalStorage("tasks", localTasks);
    showSucceedBtn();
  };

  const showSucceedBtn = () => {
    accomplishedBtn.style.display =
      existingSucceedTasks > 0 ? "inline" : "none";
  };

  const addTask = () => {
    const inputText = inputFieldEl.value.trim();
    if (inputText) {
      addTaskToDOM(inputText);
      localTasks.push({ text: inputText, completed: false });
      saveToLocalStorage("tasks", localTasks);
      inputFieldEl.value = "";
    }
  };

  inputFieldEl.addEventListener("keyup", (event) => {
    if (event.key === "Enter") addTask();
  });

  accomplishedBtn.addEventListener("click", () =>
    accomplishContainer.classList.toggle("hidden")
  );

  const displayTasks = () => {
    localTasks.forEach(({ text, completed }) => addTaskToDOM(text, completed));
    taskTotal.innerHTML = `Tasks Done: ${total}`;
    showSucceedBtn();
  };

  displayTasks();
});
