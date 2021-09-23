// {
//     description: 'Study React Native',
//     completed: false,
//     index: 2,
//     }
// {
//     description: 'Go to the supermarket',
//     completed: false,
//     index: 3
// }
// {
//     description: 'Do my Microverse tasks',
//     completed: false,
//     index: 1,
// }

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
