const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");

// Lista inicial com 5 frutas
const initialTasks = ["Acordar", "Escovar os dentes", "Tomar café", "Jogar", "Estudar"];

function createTaskItem(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("remove");
    removeButton.onclick = function () {
        li.remove();
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
}

// Adiciona os itens iniciais à lista
initialTasks.forEach(createTaskItem);

// Adiciona nova tarefa
addTaskButton.addEventListener("click", () => {
    const task = newTaskInput.value.trim();
    
    if (task !== "") {
        createTaskItem(task);
        newTaskInput.value = ""; // Limpa o campo
    }
});