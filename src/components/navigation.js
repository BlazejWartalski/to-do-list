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
    ul.setAttribute('class','projects')
    ul.setAttribute('id',i.projectName)
    const box = document.getElementsByClassName("NavigationBox");
    box[0].appendChild(ul);
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("projectBox")
    var p = document.createElement("p");
    p.innerHTML = i.projectName;
    ul.appendChild(projectDiv);
    console.log(p)
    projectDiv.appendChild(p);
    createButton("deleteBtn","delete",projectDiv, "deleteProject")
    if (i.taskList.length > 0) {
        i.taskList.forEach(item=>buildTaskList(item))
    }
}

function buildTaskList(item) {
    var taskBox = document.createElement("div");
    taskBox.classList.add("navigationBarTasks")

    var li = document.createElement("LI");
    li.setAttribute('class',"navigationTask")
    li.setAttribute('id',item.taskTitle)
    const ul = document.getElementById(item.projectName);
    var text = document.createElement("p");
    text.classList.add("taskName");
    text.innerText = item.taskTitle;
    li.appendChild(text);
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("class","checkbox");
    if (item.status == "completed") {
        checkbox.setAttribute("checked", true)        
    }
    li.appendChild(checkbox);
    createButton("viewBtn","view",li, "viewTask");
    createButton("editBtn","edit",li, "editTask");
    createButton("deleteBtn","delete",li, "deleteTask");
    taskBox.appendChild(li);
    if (item.status == "completed") {
        text.classList.add("checked")        
    }
    console.log(item)
    ul.appendChild(taskBox);
}

function createSettingButtons() {
    const box = document.getElementsByClassName("NavigationBox");
    const btnsContainer = document.createElement("div");
    btnsContainer.setAttribute("id","btnsContainer")
    box[0].appendChild(btnsContainer);
    // createButton("nightModeBtn", "Switch to Night Mode", box[0],"nightmode");
    createButton("newProjectBtn", "Add a new project", btnsContainer,"NewProjectBtn");
    createButton("newTaskBtn", "Add a new task", btnsContainer,"NewTaskBtn");
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