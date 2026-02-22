const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.querySelector("button");

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value = "";
}

