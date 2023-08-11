let currentActiveCard = null;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("priority");
    const dueDateInput = document.getElementById("dueDate");
    const taskList = document.querySelector(".task-list");

    if (taskInput.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task-card");

    const taskDetails = document.createElement("div");
    taskDetails.innerHTML = `
    <h3>${taskInput.value}</h3>
    <p>Priority: <span class="priority-${prioritySelect.value}">${prioritySelect.value.charAt(0).toUpperCase() + prioritySelect.value.slice(1)}</span></p>
    <p>Due Date: ${dueDateInput.value}</p>
  `;
    li.appendChild(taskDetails);

    const taskActions = document.createElement("div");
    taskActions.innerHTML = `
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;
    li.appendChild(taskActions);

    li.addEventListener("click", function() {
        if (currentActiveCard) {
            currentActiveCard.classList.remove("active");
        }
        this.classList.add("active");
        currentActiveCard = this;
    });

    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(editButton) {
    const taskCard = editButton.parentElement.parentElement;
    const taskDetails = taskCard.querySelector("div:first-child");
    const taskTitle = taskDetails.querySelector("h3").textContent;
    const priority = taskDetails.querySelector("span").textContent.toLowerCase();
    const dueDate = taskDetails.querySelector("p:nth-child(3)").textContent.split(": ")[1];

    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("priority");
    const dueDateInput = document.getElementById("dueDate");

    taskInput.value = taskTitle;
    prioritySelect.value = priority;
    dueDateInput.value = dueDate;

    taskCard.remove();
}

function deleteTask(deleteButton) {
    const taskCard = deleteButton.parentElement.parentElement;
    taskCard.remove();
}