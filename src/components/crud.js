import { getProjects, createProject  } from "./script/projects.js"

var projectList = getProjects();

function createPage() {
    const createNewTask = document.createElement("div")
    createNewTask.classList.add("createPage","hidden")
    document.body.appendChild(createNewTask);
        const formContainer = document.createElement("div")
        formContainer.classList.add("formContainer");
        createNewTask.appendChild(formContainer);
            const form = document.createElement("div")

            formContainer.appendChild(form)
            
            var projectName = document.createElement("input");
            projectName.setAttribute("type","text");
            projectName.setAttribute("name","projectName");
            projectName.setAttribute("id","projectName");
            projectName.setAttribute("placeholder","Please enter the project name");
            form.appendChild(projectName)

            var projectPriority = document.createElement("input");
            projectPriority.setAttribute("type","text");
            projectPriority.setAttribute("name","projectPriority");
            projectPriority.setAttribute("id","projectPriority");
            projectPriority.setAttribute("placeholder","Please enter the project priority");
            form.appendChild(projectPriority)

            var submitbtn = document.createElement("button");
            submitbtn.setAttribute("type","submit");
            form.appendChild(submitbtn);

            submitbtn.addEventListener("click", () => {
                var name = document.getElementById("projectName").value;
                var priority = document.getElementById("projectPriority").value;
                const newProject = createProject(name, priority);
                console.log("magia");
                localStorage.setItem("ProjectList",JSON.stringify(projectList));
                createNewTask.classList.add("hidden");
            })
}

function newProjectBtn() {
    const newProjectBtn = document.querySelectorAll("NewProjectBtn")
    newProjectBtn.forEach(x => 
        x.addEventListener("click", newProject)
    )
}

function newProject() {
    const createPage = document.getElementsByClassName("createPage")
    console.log(createPage)
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
    console.log(projectForDeletion)
    console.log(typeof projectList);
    projectList.forEach(x => {
        console.log(x.projectName)
        if (x.projectName == projectForDeletion) {
            console.log("yeet this shit")
            projectList.splice(projectList.indexOf(x),1);
            console.log(projectList);
        }
    })
}

function initializeButtons() {
    newProjectBtn()
    deleteProjectBtn()
}

export { createPage, initializeButtons };