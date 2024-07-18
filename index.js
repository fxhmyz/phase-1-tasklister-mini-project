document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission from reloading the page
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = ""; // Clear the input field after adding the task
      }
    });
  });
  