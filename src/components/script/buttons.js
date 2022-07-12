function newProjectBtn() {
    const newProjectBtn = document.getElementById("NewProjectBtn")
    newProjectBtn.addEventListener("click", newProject)
}

function newProject() {
    const createPage = document.getElementsByClassName("createPage")
    console.log(createPage)
    createPage[0].classList.remove("hidden");
}

export default newProjectBtn;