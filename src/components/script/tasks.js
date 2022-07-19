function getTasks() {
    var taskList = JSON.parse(localStorage.getItem('TaskList'))
    if (taskList == null || taskList.length == 0) {
        taskList = [];
        return taskList
    } else {
        return taskList
    }
}

function createTask(taskTitle, taskDescription, taskDueDate, taskPriority, projectName) {
    return {
        taskTitle : taskTitle,
        taskDescription : taskDescription,
        taskDueDate : taskDueDate,
        taskPriority: taskPriority,
        projectName : projectName,
        status: "notcompleted"
    }
}

export {getTasks , createTask};