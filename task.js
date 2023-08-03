
function loadTasks() {
  
  if (localStorage.getItem("tasks") == null) return;

  
  let tasks = JSON.parse(localStorage.getItem("tasks"));


  const list = document.querySelector("ul");
  tasks.forEach((task, index) => {
    const li = createTaskElement(task.task, task.completed);
    list.appendChild(li);
  });
}



function createTaskElement(taskName, isCompleted) {
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" class="check" ${isCompleted ? "checked" : ""}>
    <input type="text" value="${taskName}" class="task ${isCompleted ? "completed" : ""}" 
    onfocus="getCurrentTask(this)" onblur="editTask(this)">
    <i class="fa fa-chevron-up move-button" onclick="moveTaskUp(this)"></i>
    <i class="fa fa-chevron-down move-button" onclick="moveTaskDown(this)"></i>
    <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  return li;
}



document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});


function addTask() {
  const taskInput = document.querySelector("form input");
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please add some task!");
    return false;
  }

  const existingTask = document.querySelector(`input[value="${taskName}"]`);
  if (existingTask) {
    alert("Task already exists!");
    return false;
  }


  const task = { task: taskName, completed: false };
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));


  const li = createTaskElement(taskName, false);
  const list = document.querySelector("ul");
  list.appendChild(li);


  taskInput.value = "";
}



function taskComplete(event) {
  const taskName = event.nextElementSibling.value;
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task) => {
    if (task.task === taskName) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}



function removeTask(event) {
  const taskName = event.parentNode.children[1].value;
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = tasks.filter((task) => task.task !== taskName);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}


let currentTask = null;



function getCurrentTask(event) {
  currentTask = event.value;
}




function editTask(event) {
  const taskName = event.value.trim();
  if (taskName === "") {
    alert("Task is empty!");
    event.value = currentTask;
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks"));
 
  const existingTask = tasks.find((task) => task.task === taskName);
  if (existingTask) {
    alert("Task already exists!");
    event.value = currentTask;
    return;
  }


  tasks.forEach((task) => {
    if (task.task === currentTask) {
      task.task = taskName;
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}



function moveTaskUp(event) {
  const taskItem = event.parentNode;
  const prevTaskItem = taskItem.previousElementSibling;
  if (prevTaskItem) {
    taskItem.parentNode.insertBefore(taskItem, prevTaskItem);
    updateLocalStorageOrder();
  }
}




function moveTaskDown(event) {
  const taskItem = event.parentNode;
  const nextTaskItem = taskItem.nextElementSibling;
  if (nextTaskItem) {
    taskItem.parentNode.insertBefore(nextTaskItem, taskItem);
    updateLocalStorageOrder();
  }
}



function updateLocalStorageOrder() {
  const tasks = Array.from(document.querySelectorAll("ul li"));
  const taskData = tasks.map((task) => {
    return {
      task: task.querySelector(".task").value,
      completed: task.querySelector(".check").checked,
    };
  });
  localStorage.setItem("tasks", JSON.stringify(taskData));
}



function filterTasks(completed) {
  const taskItems = document.querySelectorAll("ul li");
  taskItems.forEach((taskItem) => {
    const checkbox = taskItem.querySelector(".check");
    if (completed === "all" || (completed === "completed" && checkbox.checked) || (completed === "uncompleted" && !checkbox.checked)) {
      taskItem.style.display = "flex";
    } else {
      taskItem.style.display = "none";
    }
  });
}


document.querySelector("#filter-btn").addEventListener("click", function () {
  const filterValue = document.querySelector("#filter-select").value;
  filterTasks(filterValue);
});


window.onload = function () {
  loadTasks();
};
