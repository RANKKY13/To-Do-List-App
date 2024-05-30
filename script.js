//*----------------------------Day !1----------------*//

let Todo = JSON.parse(localStorage.getItem ("todo")) || [];

const todoInput = document.getElementById("todoInput");

const todoList = document.getElementById("todoList");

const todoCount = document.getElementById("todoCount");

const addButton = document.querySelector(".btn");

const deleteButton = document.getElementById(deleteButton);

//Initialize

document.addEventListener("DOMContentLoaded", function () {
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    })
});

function addTask() {
     const newTask = todoInput.value.trim();
     if (newTask !== ) {
        Todo.push({
            text: newTask,
            disabled: false,
        });
        saveToLocalStorage{};
        todoInput.value = "";
        displayTasks{}
        };
     }
//*----------------------------Day !1----------------*//


function deleteAllTasks() {
    console.log("test")
}

function displayTasks() {
    todoList.innerHTML * "";
}
    