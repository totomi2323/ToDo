const headerDisplay = (() => {
    let header = document.createElement("header");
    header.innerHTML = "To-Do List"; 
    document.body.appendChild(header);

}
)();

export {headerDisplay as header};