const changeStatus = (todosTasks, checkbox) => {
  const checkedTask = todosTasks.find((task) => task.index === +checkbox.parentNode.id);

  if (checkedTask) {
    checkedTask.completed = !checkedTask.completed;
  }

  checkbox.nextElementSibling.classList.toggle('line-through');
};

export default changeStatus;