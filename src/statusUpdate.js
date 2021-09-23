const changeStatus = (todoTasks, checkbox) => {
  const checkedTask = todoTasks.find((task) => task.index === +checkbox.parentNode.id);

  checkedTask.completed = !checkedTask.completed;

  checkbox.nextElementSibling.classList.toggle('line-through');

  localStorage.removeItem('todos');
};

export default changeStatus;