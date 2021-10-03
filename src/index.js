import "./style.css";
import { header } from "./header.js";
import { navBar } from "./navBar.js";
import { addTaskForm } from "./addTaskForm.js";
import { displayTask } from "./displayTask.js";
import { addToDo } from "./addFromForm.js";
import {todayArray} from "./arraySorting.js"

navBar.addButton("button0", "All tasks", "allTasks");
navBar.addButton("button1", "Today", "today");
navBar.addButton("button2", "This Week", "week");
navBar.addButton("button3", "High Priority", "highPriority");
navBar.addButton("button4", "All Projects", "allProjects");
navBar.addButton("button5", "+", "add");
navBar.addButton("button6", "Delete", "delete" );

let taskArray = {
  0: {
    title: "washing",
    description: "clothes",
    dueDate: "2021-10-03",
    priority: "Low Priority",
    deleteId: "0",
  },
  1: {
    title: "dancing",
    description: "allNight",
    dueDate: "2021-10-03",
    priority: "Low Priority",
    deleteId: "1",
  },
};


displayTask.createContainer();
displayTask.displayArray(taskArray);

document.querySelector("#allTasks").addEventListener("click", function () { displayTask.displayArray(taskArray)});

document.querySelector("#delete").addEventListener("click", displayTask.emptyContainer);


function addTaskFromForm() {
  
  let index = Object.keys(taskArray).length;
  console.log(index);
  taskArray = Object.assign(taskArray, addToDo.getFormValues(index));
  document.querySelector(".formStyle").style.display = "none";
  displayTask.displayArray(taskArray);
  document
    .querySelector("#addTask")
    .removeEventListener("click", addTaskFromForm);
}
addTaskForm();
document.querySelector("#add").addEventListener("click", function () {
  
  document.querySelector(".formStyle").style.display = "flex";

  document.querySelector("#addTask").addEventListener("click", addTaskFromForm);
});

let todaysTask = todayArray.sortToday(taskArray);
console.log(todaysTask);