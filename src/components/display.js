import {getTasks , createTask} from "./script/tasks.js"

var taskList = getTasks();


function createDisplay() {
    const displayBox = document.createElement('div');
    displayBox.setAttribute("id","DisplayBox");
    document.body.appendChild(displayBox);
    getTodaysDate();
    displayTodayTasks();
    displayWeeklyTasks();
    checkForDailyTasks();
    checkForWeeklyTasks();
}

function displayTodayTasks() {
    var displayTasks = document.createElement('div');
    var today = getTodaysDate();
    console.log(today)
    displayTasks.innerHTML = (`The date is ${today}. Here are today's tasks!`);
    displayTasks.setAttribute("id","dailyDisplay")
    const box = document.getElementById("DisplayBox");
    box.appendChild(displayTasks);
}

function getTodaysDate() {
    let today = new Date().toISOString().slice(0,10);
    return today
}

function displayWeeklyTasks() {
    var displayWeeklyTasks = document.createElement("div");
    var tomorrowDate = new Date(new Date().getTime()+(1*24*60*60*1000)).toISOString().slice(0,10);
    var nextWeek = new Date(new Date().getTime()+(7*24*60*60*1000)).toISOString().slice(0,10);
    displayWeeklyTasks.innerHTML = (`Tasks for the week starting from ${tomorrowDate} until ${nextWeek}`);
    displayWeeklyTasks.setAttribute("id","weeklyDisplay")
    const box = document.getElementById("DisplayBox");
    box.appendChild(displayWeeklyTasks)
}

function renderDailyTask(task) {
    const box = document.getElementById("dailyDisplay");

    const taskTile = document.createElement("div");
    taskTile.classList.add("DailyTasks");

    const titleElement = document.createElement("p");
    titleElement.classList.add("taskTileTitle")
    titleElement.innerHTML = task.taskTitle;

    const projectElement = document.createElement("p");
    projectElement.classList.add("taskTileProject");
    projectElement.innerHTML = task.projectName;

    const priorityElement = document.createElement("p");
    priorityElement.classList.add("taskTilePriority");
    priorityElement.innerHTML = task.taskPriority + " priority";

    const topContainer = document.createElement("div");
    topContainer.classList.add("dailyTaskTopContainer")
    topContainer.appendChild(titleElement);
    topContainer.appendChild(projectElement);
    topContainer.appendChild(priorityElement);
    

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("taskTileDescription")
    descriptionElement.innerHTML = task.taskDescription;

    var checkbox = document.createElement("INPUT");
    checkbox.classList.add("checkbox","taskTileCheckbox")
    checkbox.setAttribute("type","checkbox");

    const bottomContainer = document.createElement("div");
    bottomContainer.classList.add("dailyTaskBottomContainer")
    bottomContainer.appendChild(descriptionElement);
    bottomContainer.appendChild(checkbox);
    
    taskTile.appendChild(topContainer)
    taskTile.appendChild(bottomContainer)
    box.appendChild(taskTile)
}

function renderWeeklyTask(task) {
    // const box = document.getElementById("weeklyDisplay");
    // const taskTile = document.createElement("div");
    // const titleElement = document.createElement("p");
    // titleElement.innerHTML = task.taskTitle;

    // const descriptionElement = document.createElement("p");
    // descriptionElement.innerHTML = task.taskDescription;

    // const dueDateElement = document.createElement("p");
    // dueDateElement.innerHTML = task.taskDueDate;

    // const projectElement = document.createElement("p");
    // projectElement.innerHTML = task.projectName;

    // const priorityElement = document.createElement("p");
    // priorityElement.innerHTML = task.taskPriority;
    // taskTile.classList.add("WeeklyTasks");

    // taskTile.appendChild(titleElement)
    // taskTile.appendChild(descriptionElement)
    // taskTile.appendChild(dueDateElement)
    // taskTile.appendChild(projectElement)
    // taskTile.appendChild(priorityElement)
    // box.appendChild(taskTile)
    ///
    const box = document.getElementById("weeklyDisplay");

    const taskTile = document.createElement("div");
    taskTile.classList.add("DailyTasks");

    const titleElement = document.createElement("p");
    titleElement.classList.add("taskTileTitle")
    titleElement.innerHTML = task.taskTitle;

    const projectElement = document.createElement("p");
    projectElement.classList.add("taskTileProject");
    projectElement.innerHTML = task.projectName;

    const priorityElement = document.createElement("p");
    priorityElement.classList.add("taskTilePriority");
    priorityElement.innerHTML = task.taskPriority + " priority";

    const dueDateElement = document.createElement("p");
    dueDateElement.classList.add("taskTileDueDate")
    dueDateElement.innerHTML = task.taskDueDate;

    const topContainer = document.createElement("div");
    topContainer.classList.add("dailyTaskTopContainer")
    topContainer.appendChild(titleElement);
    topContainer.appendChild(projectElement);
    topContainer.appendChild(priorityElement);
    

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("taskTileDescription")
    descriptionElement.innerHTML = task.taskDescription;

    var checkbox = document.createElement("INPUT");
    checkbox.classList.add("checkbox","taskTileCheckbox")
    checkbox.setAttribute("type","checkbox");

    const bottomContainer = document.createElement("div");
    bottomContainer.classList.add("dailyTaskBottomContainer")
    bottomContainer.appendChild(descriptionElement);
    bottomContainer.appendChild(dueDateElement);
    bottomContainer.appendChild(checkbox);
    
    taskTile.appendChild(topContainer)
    taskTile.appendChild(bottomContainer)
    box.appendChild(taskTile)
    ///
}

function checkForDailyTasks() {
    var date = getTodaysDate();
    var taskList = getTasks();
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].taskDueDate == date) {
            renderDailyTask(taskList[i]);            
        } else {
        }
    } 
}

function checkForWeeklyTasks() {
    var date = getTodaysDate();
    var arrayOfWeek = [];
    var weeklyTasks = [];
    for (var i = 1; i < 7; i++) {
        var day = new Date(new Date().getTime()+(i*24*60*60*1000)).toISOString().slice(0,10);
        arrayOfWeek.push(day);
    }
    for (var i = 0; i < arrayOfWeek.length; i++) {
        var date = arrayOfWeek[i]
        for (var z = 0; z < taskList.length; z++) {
             if (taskList[z].taskDueDate == date) {
                weeklyTasks.push(taskList[z]);
             }
        }
    }
    weeklyTasks.forEach(task => renderWeeklyTask(task));
}

export default createDisplay;