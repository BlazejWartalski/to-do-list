function newProjectBtn() {
    const newProjectBtn = document.getElementsByClassName(".NewProjectBtn")
    newProjectBtn.addEventListener("click", newProject)
}

function newProject() {
    const createPage = document.getElementsByClassName("createPage")
    console.log(createPage)
    createPage[0].classList.remove("hidden");
}

function deleteProjectBtn(i) {
    const dltbtn = document.getElementById("deleteProject")
    dltbtn.addEventListener("click", deleteProject)
}

function deleteProject() {
    prompt("Deleting this project will also remove tasks assigned to this project. Are you happy to proceed?")
    
}

function initializeButtons() {
    newProjectBtn()
    deleteProjectBtn()
}
export default initializeButtons;