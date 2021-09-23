const addTask = (todosTasks, value) => {
  const newTask = {}
  newTask.description = value;
  newTask.completed = false;
  newTask.index = todosTasks.length + 1;

  return newTask;
}

const editTask = () => {

}

const removeTask = () => {

}

export { addTask, editTask, removeTask };
