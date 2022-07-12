let projectList = [
    {projectName : "First Project", projectPriority: "Normal", taskList: []},
    {projectName : "Second Project", projectPriority: "High", taskList: []},
    {projectName : "Third Project", projectPriority: "High", taskList: []},
    {projectName : "Fourth Project", projectPriority: "High", taskList: []},
]

function createProject(projectName, priority) {
    return {
        projectName : projectName,
        projectPriority: priority
    }
}

export default projectList;