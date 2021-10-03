import { displayTask } from "./displayTask.js";

const taskAdjustment = (() => {

    const del = (taskArray) => {
  let taskDeleteButtons = document.querySelectorAll('[delete="del"');
  taskDeleteButtons.forEach(delButton => {
    delButton.addEventListener("click" , function() {
      let k = delButton.id;
     delete taskArray[k];
     console.log(taskArray);
     displayTask.displayArray(taskArray);
     taskAdjustment.del(taskArray);
      console.log(Object.keys(taskArray))
      for (var key of Object.keys(taskArray)) {
        console.log(taskArray[key]);
      }
    })
  })}
   const changeDate = (taskArray) => {
       let  changes = document.querySelectorAll('[change="date"');
       changes.forEach(change => {
           change.addEventListener("change", function(e) {
             let x = e.path[0].id;
               taskArray[x].dueDate = e.target.value;
            console.log(taskArray);
           })
           
       })
   }
   const changePriority = (taskArray) => {
    let  changes = document.querySelectorAll('[change="priority"');
    changes.forEach(change => {
        change.addEventListener("change", function(e) {
          let x = e.path[0].id;
            taskArray[x].priority = e.target.value;
         console.log(taskArray);
        })
        
    })
}
   /* copy past ChangeDate Function and make it to changePriority*/
   
  return {del, changeDate, changePriority};
  })();

  export {taskAdjustment as taskAdjustment};