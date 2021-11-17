import { addToDo } from "./addFromForm.js";
import { addTaskForm } from "./addTaskForm";
import { displayTask } from "./displayTask.js";
const projectTab = (() => {
  let currentProject = "";
  let eventAdded = false;
  let projectContainer = {
    
  };
  const createAddButton = () => {
    let projectButton = document.querySelector("#allProjects");

    let addNewProject = document.createElement("button");
    addNewProject.innerHTML = "Add New Project";
    addNewProject.id = "newProject";
    addNewProject.classList.add("projectButtons");
    projectButton.after(addNewProject);
    addNewProject.addEventListener("click", createNewProject);
  };
  const projectTitle = () => {
    let getTitleBox = document.createElement("div");
    let insertTitle = document.createElement("input");
    insertTitle.id = "projectName";
    getTitleBox.classList.add("getTitleBox");

    let projectButton = document.querySelector("#newProject");
    projectButton.after(getTitleBox);
    getTitleBox.appendChild(insertTitle);
  };
  const createNewProject = () => {
    const projectName = document.getElementById("projectName");
    if (projectName.value !== "") {
      let projectValue = projectName.value;
      let newProject = document.createElement("button");
      newProject.classList.add("projects");
      newProject.setAttribute("pjName" , projectValue );
      
      newProject.addEventListener("click", function () {
        displayTask.displayArray(projectContainer[projectValue]);
        currentProject = newProject.getAttribute("pjName");
      });

      newProject.innerHTML = projectValue;
      let addTaskToProject = document.createElement("button");
      addTaskToProject.innerHTML = "Add Task";
      addTaskToProject.id = projectValue;
      newProject.appendChild(addTaskToProject);
      document.querySelector("#allProjects").after(newProject);
      currentProject = projectName.value;
      addButtonCall(projectName.value);


      /*let newObj = {
        [projectValue] : {}
        };
    console.log(newObj);
        return  newObj;*/
      projectName.value = "";

      
    }
  };
  const addTaskFromForm = (projectValue) => {
   let index;
    if (!(projectContainer[projectValue])) {
      index = 0;
      projectContainer[projectValue] = {};
      console.log("this");
    }
    else {
    index = Object.keys(projectContainer[projectValue]).length;
  console.log("that");

  for (var key in projectContainer[projectValue]) {
    if (Object.prototype.hasOwnProperty.call(projectContainer[projectValue], key)) {
      index = parseInt(key) + 1;
    }
  }  console.log(index);
}

  projectContainer[projectValue] = Object.assign( projectContainer[projectValue], addToDo.getFormValues(index));
  displayTask.displayArray(projectContainer[projectValue]);
  
  document.querySelector(".formStyle").style.display = "none";
  console.log(projectContainer);
};

   
 
  const addButtonCall = (projectValue) => {
      let sg = "#"+ projectValue.toString();
     
    document.querySelector(sg).addEventListener("click", function () {
        document.querySelector(".formStyle").style.display = "flex";
        if (eventAdded == false) {
          document.querySelector("#addTask").removeEventListener("click",function() {
            addTaskFromForm(currentProject);});
        document.querySelector("#addTask").addEventListener("click", function() {
            addTaskFromForm(currentProject);
            eventAdded = true;
        });}
      });
  };
 /* a problema hogy mind a ket projecthez hozza adja ugyan azt a taskot*/
  return { createAddButton, projectTitle };
})();

export { projectTab as projectTab };
