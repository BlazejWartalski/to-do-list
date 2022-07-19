import { getProjects, createProject } from './script/projects.js'
import { getTasks , createTask } from './script/tasks.js'
import { createPage, initializeButtons, initializeCheckbox } from './crud.js';

var projectList = getProjects();

var tasksList = getTasks();

function createSideNav() {
    const sideNav = document.createElement('div');
    sideNav.innerHTML = ("List of projects");
    sideNav.classList.add("NavigationBox")
    document.body.appendChild(sideNav);
}

function assignTasksToProjects() {
    tasksList.forEach(tasksToProjects);
}

function createProjectBox() {
    projectList.forEach(renderProjectList);
}

function tasksToProjects(task) {

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].projectName == task.projectName) {
            projectList[i].taskList.push(task)
        }
    }

}

function createButton(btnName, btnText, master, classname) {
    var btnName = document.createElement("button");
    btnName.innerHTML = (btnText);
    master.appendChild(btnName);
    if (classname != undefined) {
        btnName.setAttribute("class",classname)
    }
}

function renderProjectList(i) {
    var ul = document.createElement("ul");
    ul.setAttribute('class',i.projectName)
    const box = document.getElementsByClassName("NavigationBox");
    box[0].appendChild(ul);
    ul.innerHTML=i.projectName;
    createButton("deleteBtn","delete",ul, "deleteProject")
    if (i.taskList.length > 0) {
        i.taskList.forEach(item=>buildTaskList(item))
    }
}

function buildTaskList(item) {
    var li = document.createElement("LI");
    li.setAttribute('class',item.taskTitle)
    const ul = document.getElementsByClassName(item.projectName);
    var text = document.createElement("p");
    text.classList.add("taskName");
    text.innerText = item.taskTitle + " " + item.taskPriority + " priority";
    li.appendChild(text);
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("class","checkbox");
    li.appendChild(checkbox);
    createButton("deleteBtn","delete",li, "deleteTask");
    createButton("editBtn","edit",li, "editTask");
    createButton("viewBtn","view",li, "viewTask");
    ul[0].appendChild(li);
}

function createSettingButtons() {
    const box = document.getElementsByClassName("NavigationBox");
    createButton("nightModeBtn", "Switch to Night Mode", box[0],"nightmode");
    createButton("newProjectBtn", "Add a new project", box[0],"NewProjectBtn");
    createButton("newTaskBtn", "Add a new task", box[0],"NewTaskBtn");
}
function initializeSideNav() {
    createSideNav();
    assignTasksToProjects();
    createProjectBox();
    createSettingButtons();
    initializeButtons();
    initializeCheckbox();
}
export default initializeSideNav ;