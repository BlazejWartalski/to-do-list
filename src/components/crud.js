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
            projectName.setAttribute("placeholder","Please enter the project name");
            form.appendChild(projectName)

            var projectPriority = document.createElement("input");
            projectPriority.setAttribute("type","text");
            projectPriority.setAttribute("name","projectPriority");
            projectPriority.setAttribute("placeholder","Please enter the project priority");
            form.appendChild(projectPriority)

            var submitbtn = document.createElement("button");
            submitbtn.setAttribute("type","submit");
            form.appendChild(submitbtn);

            submitbtn.addEventListener("click", () => {
                createNewTask.classList.add("hidden");
            })
}

function submitNew() {

}

export default createPage;