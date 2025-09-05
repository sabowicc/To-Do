const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("OII write a task!!");
    return;
  }

  // create li
  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
  `;

  listContainer.appendChild(li);
  inputBox.value = "";

  // get elements INSIDE this li
  const checkbox = li.querySelector("input");
  const taskSpan = li.querySelector("span");
  const editBtn = li.querySelector(".edit-btn");
  const deleteBtn = li.querySelector(".delete-btn");

  // ✅ checkbox toggle
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

  // ✅ edit task
  editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      checkbox.checked = false;
      updateCounters();
    }
  });

  // ✅ delete task
     deleteBtn.addEventListener("click", function () {
        if (confirm("pssst, sure to delete this?")) {
           li.remove();
           updateCounters();
        }
  });


  // update counters after adding
  updateCounters();
}

// ✅ counters function
function updateCounters() {
  const completedTasks = document.querySelectorAll("li.completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}
