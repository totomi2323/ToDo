import { taskAdjustment } from "./taskAdjustments";

const displayTask = (() => {
  const createContainer = () => {
    const content = document.createElement("div");
    content.id = "cont";
    content.classList.add("content");
    document.body.appendChild(content);
  };
  const emptyContainer = () => {
    const refresh = document.querySelector("#cont");
    const allTask = document.querySelectorAll(".task");
    allTask.forEach((task) => {
      refresh.removeChild(task);
    });
  };
  const addTask = (list) => {
    const task = document.createElement("div");
    task.classList.add("task");
    const taskTitle = document.createElement("div");
    taskTitle.innerHTML = list.title;
    const taskDescription = document.createElement("div");
    taskDescription.innerHTML = list.description;

    const taskDueDate = document.createElement("input");
    taskDueDate.type = "date";
    taskDueDate.setAttribute("change", "date");
    taskDueDate.value = list.dueDate;
    taskDueDate.id= list.deleteId;
    const taskPriority = document.createElement("select");
    taskPriority.setAttribute("change", "priority");
    taskPriority.id= list.deleteId;

    const priorityLevels = ["Low Priority", "Medium Priority", "High Priority"];
    for (let i = 0; i <= 2; i++) {
      const option = document.createElement("option");
      option.value = priorityLevels[i];
      option.innerHTML = priorityLevels[i];
      taskPriority.appendChild(option);
    }

    taskPriority.value = list.priority;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.id = list.deleteId;
    deleteButton.setAttribute("delete", "del");

    document.querySelector("#cont").appendChild(task);
    task.appendChild(taskTitle);
    task.appendChild(taskDescription);
    task.appendChild(taskDueDate);
    task.appendChild(taskPriority);
    task.appendChild(deleteButton);
  };
  const displayArray = (allTasksArray) => {
    displayTask.emptyContainer();
    for (var key in allTasksArray) {
      if (allTasksArray.hasOwnProperty(key)) {
        displayTask.addTask(allTasksArray[key]);
      }
      taskAdjustment.del(allTasksArray);
      taskAdjustment.changeDate(allTasksArray);
      taskAdjustment.changePriority(allTasksArray);
    }
  };

  return { addTask, createContainer, emptyContainer, displayArray };
})();

export { displayTask as displayTask };
