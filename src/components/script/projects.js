function getProjects() {
    var projectList = JSON.parse(localStorage.getItem("ProjectList"))
    if (projectList == null) {
        console.log("UGANDA")
        var projectList = createProject("All projects","Normal")
        localStorage.setItem("ProjectList",JSON.stringify(projectList));
        console.log(projectList);
        return projectList
    } else {
        console.log("how??")
        var projectList = JSON.parse(localStorage.getItem("ProjectList"))
        console.log(typeof projectList)
        return projectList
    }
}
// [
//     {projectName : "First Project", projectPriority: "Normal", taskList: []},
//     {projectName : "Second Project", projectPriority: "High", taskList: []},
//     {projectName : "Third Project", projectPriority: "High", taskList: []},
//     {projectName : "Fourth Project", projectPriority: "High", taskList: []},
// ]
// var storedNames = JSON.parse(localStorage.getItem("names"));
const createProject = (name, prio) => {
    const project = [];
        project.projectName = name;
        project.projectPriority = prio;
        project.taskList = []
        console.log(project)
    return project
}

export { getProjects, createProject };