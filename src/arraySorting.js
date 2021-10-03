let todayArray = (() => {

    const sortToday = (allTasksArray) => {
    let today = new Date();
    let day;
    if (today.getDate() <= 10) {
        day = "0" + today.getDate();
    }


    let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ day;
        console.log(todayDate);
        let todayArray = {};
        for (var key in allTasksArray) {
            if (allTasksArray.hasOwnProperty(key)) {
              if ((allTasksArray[key].dueDate) == todayDate) {
               Object.assign(todayArray, allTasksArray[key]);
                console.log(todayArray)
              };
            }
    }
    /* doesnt put all equal dates in array, sort this problem */
    return {todayArray};
    }
    return {sortToday}
})();

export {todayArray as todayArray};