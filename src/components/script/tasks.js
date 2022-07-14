
function createTask(taskTitle, taskDescription, taskDueDate, taskPriority, projectName) {
    return {
        taskTitle : taskTitle,
        taskDescription : taskDescription,
        taskDueDate : taskDueDate,
        taskPriority: taskPriority,
        projectName : projectName
    }
}

let tasksList = [
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "All projects"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "All projects"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "Second Project"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "Third Project"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "Fourth Project"},
    {taskTitle : "Task1", taskDescription: "owoTask123", taskDueDate : "20/09/2022", taskPriority: "High", projectName: "Fourth Project"},
]
export default tasksList;