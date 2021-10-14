import { isThisISOWeek, parseISO } from "date-fns";

let arraySorting = (() => {
  const today = (allTasksArray) => {
    let today = new Date();
    let day;
    if (today.getDate() <= 9) {
      day = "0" + today.getDate();
    }
    else  { day = today.getDate();}
    let todayDate =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + day;
    console.log(todayDate);
    let dayArray = new Object();
    for (var key in allTasksArray) {
      if (Object.prototype.hasOwnProperty.call(allTasksArray, key)) {
        if (allTasksArray[key].dueDate == todayDate) {
          console.log(allTasksArray[key].deleteId);
          let newObj = {
            [allTasksArray[key].deleteId]: allTasksArray[key],
          };
          Object.assign(dayArray, newObj);
        }
      }
    }

    return dayArray;
  };
  const week = (allTasksArray) => {
    let weekArray = new Object();
    for (var key in allTasksArray) {
      if (Object.prototype.hasOwnProperty.call(allTasksArray, key)) {
        if (isThisISOWeek(parseISO(allTasksArray[key].dueDate)) === true) {
          console.log(parseISO(allTasksArray[key].dueDate));
          let newObj = {
            [allTasksArray[key].deleteId]: allTasksArray[key],
          };
          Object.assign(weekArray, newObj);
        }
      }
    }
    return weekArray;
  };

  return { today, week };
})();

export { arraySorting as arraySorting };
