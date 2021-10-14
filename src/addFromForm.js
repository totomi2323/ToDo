const addToDo = (() => {

function taskValues(title, description, dueDate, priority,deleteId) {
 
        (this.title = title),
          (this.description = description),
          (this.dueDate = dueDate),
          (this.priority = priority); 
          (this.deleteId = deleteId);
}
  const getFormValues = (index) => {
     let theTask;
    let form = document.querySelector("#taskForm");
    let title = form.elements[0].value;
    let description = form.elements[1].value;
    let dueDate = form.elements[2].value;
    let priority = form.elements[3].value;
    let deleteId = index;
    theTask = new taskValues(title,description,dueDate,priority,deleteId);
    let newObj = {
    [index] : theTask,
    };
    return  newObj;
    
    
   
  };
  return {getFormValues};
})();
export { addToDo as addToDo }; 