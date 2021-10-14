const addTaskForm = () => {
  console.log("semmi");
  const form = document.createElement("form");
  form.classList.add("formStyle");
  form.id = "taskForm";
  const titleSpan = document.createElement("span");
  titleSpan.innerHTML = "Title:";
  const title = document.createElement("input");
  title.name = "title";
  title.type = "text";

  const descriptionSpan = document.createElement("span");
  descriptionSpan.innerHTML = "Description:";
  const description = document.createElement("input");
  description.name = "description";
  description.type = "text";

  const dateSpan = document.createElement("span");
  dateSpan.innerHTML = "Due Date:";
  const dueDate = document.createElement("input");
  dueDate.name = "duedate";
  dueDate.type = "date";

  const prioLabel = document.createElement("label");
  prioLabel.htmlFor = "priority";
  prioLabel.innerHTML = "Select a priority level";

  const prioSelect = document.createElement("select");
  prioSelect.name = "priority";
  prioSelect.id = "priority";
  prioSelect.required = true;

  const priorityLevels = [
    "",
    "Low Priority",
    "Medium Priority",
    "High Priority",
  ];

  for (let i = 0; i <= 3; i++) {
    const option = document.createElement("option");
    option.value = priorityLevels[i];
    option.innerHTML = priorityLevels[i];
    prioSelect.appendChild(option);
  }
  const pushButton = document.createElement("button");
  pushButton.type = "button";
  pushButton.id = "addTask";
  pushButton.innerHTML = "Add";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.id = "close";
  closeButton.innerHTML = "Close";
  closeButton.addEventListener("click", function() {
    document.getElementById("taskForm").style.display = "none";
  });

  document.body.appendChild(form);
  form.appendChild(titleSpan);
  form.appendChild(title);
  form.appendChild(descriptionSpan);
  form.appendChild(description);
  form.appendChild(dateSpan);
  form.appendChild(dueDate);

  form.appendChild(prioLabel);
  form.appendChild(prioSelect);
  form.appendChild(pushButton);
  form.appendChild(closeButton);
};

export { addTaskForm as addTaskForm };
