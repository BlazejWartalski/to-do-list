import {getTasks , createTask} from "./script/tasks.js"

var taskList = getTasks();


function createDisplay() {
    const displayBox = document.createElement('div');
    displayBox.innerHTML = ("TASKS");
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
    displayTasks.innerHTML = ("Today's tasks!");
    displayTasks.setAttribute("id","dailyDisplay")
    // displayTasks.classList.add("DisplayTasks");
    const box = document.getElementById("DisplayBox");
    box.appendChild(displayTasks);
}

function getTodaysDate() {
    let today = new Date().toISOString().slice(0,10);
    return today
}

function displayWeeklyTasks() {
    var displayWeeklyTasks = document.createElement("div");
    var todayDate = getTodaysDate();
    var nextWeek = new Date(new Date().getTime()+(7*24*60*60*1000)).toISOString().slice(0,10);
    displayWeeklyTasks.innerHTML = (`This week's tasks ${todayDate} until ${nextWeek}`);
    displayWeeklyTasks.setAttribute("id","weeklyDisplay")
    // displayWeeklyTasks.classList.add("WeeklyTasks");
    const box = document.getElementById("DisplayBox");
    box.appendChild(displayWeeklyTasks)
}

function renderDailyTask(task) {
    const box = document.getElementById("dailyDisplay");
    const taskTile = document.createElement("div");
    const titleElement = document.createElement("p");
    titleElement.innerHTML = task.taskTitle;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = task.taskDescription;
    const dueDateElement = document.createElement("p");
    dueDateElement.innerHTML = task.taskDueDate;
    const projectElement = document.createElement("p");
    projectElement.innerHTML = task.projectName;
    const priorityElement = document.createElement("p");
    priorityElement.innerHTML = task.taskPriority;
    taskTile.classList.add("class", task.taskPriority)

    taskTile.appendChild(titleElement)
    taskTile.appendChild(descriptionElement)
    taskTile.appendChild(dueDateElement)
    taskTile.appendChild(projectElement)
    taskTile.appendChild(priorityElement)
    box.appendChild(taskTile)
}

function renderWeeklyTask(task) {
    const box = document.getElementById("weeklyDisplay");
    const taskTile = document.createElement("div");
    const titleElement = document.createElement("p");
    titleElement.innerHTML = task.taskTitle;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = task.taskDescription;
    const dueDateElement = document.createElement("p");
    dueDateElement.innerHTML = task.taskDueDate;
    const projectElement = document.createElement("p");
    projectElement.innerHTML = task.projectName;
    const priorityElement = document.createElement("p");
    priorityElement.innerHTML = task.taskPriority;
    taskTile.classList.add("class", task.taskPriority)

    taskTile.appendChild(titleElement)
    taskTile.appendChild(descriptionElement)
    taskTile.appendChild(dueDateElement)
    taskTile.appendChild(projectElement)
    taskTile.appendChild(priorityElement)
    box.appendChild(taskTile)
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
    for (var i = 0; i < 7; i++) {
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