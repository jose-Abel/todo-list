const changeStatus = (todosTasks, checkbox) => {
  const checkedTask = todosTasks.find((task) => task.index === +checkbox.parentNode.id);

  checkedTask.completed = !checkedTask.completed;

  checkbox.nextElementSibling.classList.toggle('line-through');

  localStorage.removeItem('todos');
};

export default changeStatus;