function createDisplay() {
    const displayBox = document.createElement('div');
    displayBox.innerHTML = ("TASKS");
    displayBox.classList.add("DisplayBox");
    document.body.appendChild(displayBox);
    displayContent();
    getTodaysDate();
}

function displayContent() {
    var displayTasks = document.createElement('div');
    displayTasks.innerHTML = ("Today's tasks!");
    displayTasks.classList.add("DisplayTasks");
    const box = document.getElementsByClassName("DisplayBox");
    box[0].appendChild(displayTasks);
}

function getTodaysDate() {
    let today = new Date().toISOString().slice(0,10);
    var todaysDate = document.createElement('div');
    todaysDate.innerHTML = (today);
    todaysDate.classList.add("date");
    const box = document.getElementsByClassName("DisplayBox");
    box[0].appendChild(todaysDate);
}

export default createDisplay;