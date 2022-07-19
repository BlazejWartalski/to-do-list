import { getProjects, createProject  } from "./script/projects.js"
import {getTasks , createTask} from "./script/tasks.js"

var projectList = getProjects();
var taskList = getTasks();

function createPage() {
    const createNewProject = document.createElement("div")
    createNewProject.classList.add("createPage","hidden")
    document.body.appendChild(createNewProject);
        const formContainer = document.createElement("div")
        formContainer.classList.add("formContainer");
        createNewProject.appendChild(formContainer);
            const form = document.createElement("div")

            formContainer.appendChild(form)

            var closeFormBtn = document.createElement("button");
            closeFormBtn.setAttribute("id","closeWindowBtn");
            closeFormBtn.innerHTML="Exit"
            formContainer.appendChild(closeFormBtn)
            closeFormBtn.addEventListener("click", () => {
                createNewProject.classList.add("hidden");
            })
            
            var projectName = document.createElement("input");
            projectName.setAttribute("type","text");
            projectName.setAttribute("name","projectName");
            projectName.setAttribute("id","projectName");
            projectName.setAttribute("placeholder","Please enter the project name");
            form.appendChild(projectName)

            var submitbtn = document.createElement("button");
            submitbtn.innerHTML = "Add"
            submitbtn.setAttribute("type","submit");
            form.appendChild(submitbtn);

            submitbtn.addEventListener("click", () => {
                var name = document.getElementById("projectName").value;
                const newProject = createProject(name);
                projectList.push(newProject)
                localStorage.setItem("ProjectList",JSON.stringify(projectList));
                window.location.reload();
                createNewProject.classList.add("hidden");
            })
}

function createTaskPage() {
    const createNewTask = document.createElement("div")
    createNewTask.classList.add("createTaskPage","hidden")
    document.body.appendChild(createNewTask);
        const formContainer = document.createElement("div")
        formContainer.classList.add("formContainer");
        createNewTask.appendChild(formContainer);
            const form = document.createElement("div")

            formContainer.appendChild(form)

            var closeFormBtn = document.createElement("button");
            closeFormBtn.setAttribute("id","closeWindowBtn");
            closeFormBtn.innerHTML="Exit"
            formContainer.appendChild(closeFormBtn)
            closeFormBtn.addEventListener("click", () => {
                createNewTask.classList.add("hidden");
            })
            var taskName = document.createElement("input");
            taskName.setAttribute("type","text");
            taskName.setAttribute("name","taskName");
            taskName.setAttribute("id","taskName");
            taskName.setAttribute("placeholder","Please enter the task name");
            form.appendChild(taskName)

            var taskPriority = document.createElement("select");
            const priorityOptions = ["high","medium","low"];
            for (var i = 0; i < priorityOptions.length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value",priorityOptions[i]);
                option.text = priorityOptions[i];
                taskPriority.appendChild(option)
            }
            taskPriority.setAttribute("type","text");
            taskPriority.setAttribute("name","taskPriority");
            taskPriority.setAttribute("id","taskPriority");
            taskPriority.setAttribute("placeholder","Please enter the task priority");
            form.appendChild(taskPriority)

            var taskDescription = document.createElement("input");
            taskDescription.setAttribute("type","text");
            taskDescription.setAttribute("name","taskDescription");
            taskDescription.setAttribute("id","taskDescription");
            taskDescription.setAttribute("placeholder","Please enter the task description")
            form.appendChild(taskDescription)

            var taskDueDate = document.createElement("input");
            taskDueDate.setAttribute("type","date");
            taskDueDate.setAttribute("name","taskDueDate");
            taskDueDate.setAttribute("id","taskDueDate");
            taskDueDate.setAttribute("placeholder","Please enter the task due date")
            form.appendChild(taskDueDate)

            var projectName = document.createElement("select");

            for (var i = 0; i < projectList.length; i++) {
                var option = document.createElement("option");
                option.setAttribute("value",projectList[i].projectName);
                option.text = projectList[i].projectName;
                projectName.appendChild(option);
            }
            // projectName.setAttribute("type","text");
            // projectName.setAttribute("name","projectName");
            projectName.setAttribute("id","selectProjectName");
            // projectName.setAttribute("placeholder","Please enter the project this should fall under")
            form.appendChild(projectName)

            var submitbtn = document.createElement("button");
            submitbtn.setAttribute("type","submit");
            form.appendChild(submitbtn);

            submitbtn.addEventListener("click", () => {
                var title = document.getElementById("taskName").value;
                var description = document.getElementById("taskPriority").value;
                var dueDate = document.getElementById("taskDueDate").value
                var priority = document.getElementById("taskPriority").value
                var select = document.getElementById("selectProjectName").value;
                console.log(select.value)
                const newProject = createTask(title, description, dueDate, priority, select);
                taskList.push(newProject)
                console.log(newProject)
                localStorage.setItem("TaskList",JSON.stringify(taskList));
                window.location.reload();
                createNewTask.classList.add("hidden");
            })
}

function newProjectBtn() {
    const newProjectBtn = document.querySelectorAll(".NewProjectBtn")
    newProjectBtn.forEach(x => 
        x.addEventListener("click", newProject)
    )
}

function newProject() {
    const createPage = document.getElementsByClassName("createPage")
    createPage[0].classList.remove("hidden");
}

function deleteProjectBtn() {
    const dltbtn = document.querySelectorAll(".deleteProject")
    dltbtn.forEach(x => 
    x.addEventListener("click", deleteProject)
    )
}

function deleteProject() {
    prompt("Deleting this project will also remove tasks assigned to this project. Are you happy to proceed?")
    const projectForDeletion = this.parentNode.attributes[0].nodeValue;
    projectList.forEach(x => {
        if (x.projectName == projectForDeletion) {
            projectList.splice(projectList.indexOf(x),1);
            localStorage.setItem("ProjectList",JSON.stringify(projectList));
            window.location.reload();
        }
    })
}

function newTaskBtn() {
    const newProjectBtn = document.querySelectorAll(".NewTaskBtn")
    newProjectBtn.forEach(x => 
        x.addEventListener("click", newTask)
    )
}

function newTask() {
    const createTaskPage = document.getElementsByClassName("createTaskPage")
    createTaskPage[0].classList.remove("hidden");
}

function deleteTaskBtn() {
    const dltbtn = document.querySelectorAll(".deleteTask")
    dltbtn.forEach(x => 
    x.addEventListener("click", deleteTask)
    )
}

function deleteTask() {
    prompt("Do you wish to permanently remove this task?")
    const taskForDeletion = this.parentNode.attributes[0].nodeValue;
    console.log(taskForDeletion , taskList)
    taskList.forEach(x => {
        if (x.taskTitle == taskForDeletion) {
            taskList.splice(taskList.indexOf(x),1);
            localStorage.setItem("TaskList",JSON.stringify(taskList));
            window.location.reload();
        }
    })
}

function initializeCheckbox() {
    var checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(x =>
        x.addEventListener("click", changestatus)
    )
}

function changestatus() {
    console.log(taskList)
    var changeTaskStatus = this.parentNode.attributes[0].nodeValue;
    taskList.forEach(x => {
        if (x.taskTitle == changeTaskStatus) {
            console.log(x.status)
            if (x.status == "notcompleted") {
                x.status = "completed"
                this.previousSibling.classList.add("checked")
            } else if (x.status == "completed") {
                x.status = "notcompleted"
                this.previousSibling.classList.remove("checked")
            }
        }
    })
}
function initializeButtons() {
    newProjectBtn()
    deleteProjectBtn()
    newTaskBtn()
    deleteTaskBtn()
}

export { createPage, createTaskPage, initializeButtons, initializeCheckbox };