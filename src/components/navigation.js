import { getProjects, createProject } from './script/projects.js'
import tasksList from './script/tasks.js'
import { createPage, initializeButtons } from './crud.js';

var projectList = getProjects();

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
    console.log(projectList);
    projectList.forEach(renderProjectList);
}

function tasksToProjects(task) {
    console.log("liczymy")
    console.log(projectList);
    console.log(projectList.length);

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].projectName == task.projectName) {
            projectList[i].taskList.push(task)
            console.log(projectList[i].taskList)
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
    console.log(i)
    ul.setAttribute('class',i.projectName)
    const box = document.getElementsByClassName("NavigationBox");
    box[0].appendChild(ul);
    ul.innerHTML=i.projectName + " " + i.projectPriority + " priority";
    createButton("deleteBtn","delete",ul, "deleteProject")
    if (i.taskList.length > 0) {
        console.log("hewwo")
        console.log(i.taskList)
        i.taskList.forEach(item=>buildTaskList(item))
    }
}

function buildTaskList(item) {
    var li = document.createElement("LI");
    // li.setAttribute('class',task)
    const ul = document.getElementsByClassName(item.projectName);
    li.innerHTML=item.taskTitle + " " + item.taskPriority + " priority";
    createButton("deleteBtn","delete",li);
    createButton("editBtn","edit",li);
    createButton("viewBtn","view",li);
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
}
export default initializeSideNav ;