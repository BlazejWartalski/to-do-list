//getProjects checks the local storage for 'ProjectList' from which it returns the projectList.
//if it has 0 entries or is null, it creates the initial project titled All Projects.
function getProjects() {
    var projectList = JSON.parse(localStorage.getItem('ProjectList'))
    if (projectList == null || projectList.length == 0) {
        console.log("halo")
        var projectList = [];
        localStorage.setItem('ProjectList',JSON.stringify(projectList));
        return projectList
    } else {
        return projectList
    }
}

const createProject = (name, prio) => {
    var projectList = JSON.parse(localStorage.getItem('ProjectList'))
    const project = {};
        project.projectName = name;
        project.projectPriority = prio;
        project.taskList = []
        projectList.push(project);
    return project
}

export { getProjects, createProject };