import { displayTask } from "./displayTask.js";

const taskAdjustment = (() => {
  const del = (taskArray, toCompare) => {
    let taskDeleteButtons = document.querySelectorAll('[delete="del"');
    if (typeof toCompare === "undefined") {
      toCompare = "";
    }
    taskDeleteButtons.forEach((delButton) => {
      delButton.addEventListener("click", function () {
        let k = delButton.id;
        delete taskArray[k];
        if (typeof toCompare !== undefined) {
          delete toCompare[k];
        }
        displayTask.displayArray(taskArray, toCompare);
        taskAdjustment.del(taskArray);
        console.log(Object.keys(taskArray));
        for (var key of Object.keys(taskArray)) {
          console.log(taskArray[key]);
        }
      });
    });
  };
  const changeDate = (taskArray) => {
    let changes = document.querySelectorAll('[change="date"');
    changes.forEach((change) => {
      change.addEventListener("change", function (e) {
        let x = e.path[0].id;
        taskArray[x].dueDate = e.target.value;
        console.log(taskArray);
      });
    });
  };
  const changePriority = (taskArray) => {
    let changes = document.querySelectorAll('[change="priority"');
    changes.forEach((change) => {
      change.addEventListener("change", function (e) {
        let x = e.path[0].id;
        taskArray[x].priority = e.target.value;
        console.log(taskArray);
      });
    });
  };

  return { del, changeDate, changePriority };
})();

export { taskAdjustment as taskAdjustment };
