/* eslint-disable no-use-before-define */

import { setLocalStorage, todosTasks, changeTodosTasks } from './myLocalStorage.js';

const addDeleteIcon = (span) => {
  const parentLi = span.parentNode;
  const deleteSpanIcon = document.createElement('span');

  deleteSpanIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon');

  if (parentLi) {
    parentLi.appendChild(deleteSpanIcon);
  }

  deleteSpanIcon.addEventListener('click', () => {
    removeTask(parentLi);
  });
};

const removeDeleteIcon = (deleteIcon) => {
  const parentLi = deleteIcon.parentNode;
  if (parentLi) {
    parentLi.removeChild(deleteIcon);
  }
};

const changeInputToSpan = (inputDescription, hasTheLineThroughClass) => {
  const parentLi = inputDescription.parentNode;

  const span = document.createElement('span');
  span.classList.add('description');

  inputDescription.insertAdjacentElement('beforebegin', span);
  span.innerHTML = inputDescription.value;

  if (hasTheLineThroughClass) {
    span.classList.add('line-through');
  }

  if (parentLi) {
    parentLi.removeChild(inputDescription);

    if (parentLi.classList.contains('input-description-bg')) {
      parentLi.classList.remove('input-description-bg');
    }
  }

  const allSpan = document.querySelectorAll('.description');

  allSpan.forEach((span) => {
    span.addEventListener('click', () => {
      addDeleteIcon(span);
      editTask(span);
    });
  });
};

const addTask = (todosTasks, value) => {
  const newTask = {};
  newTask.description = value;
  newTask.completed = false;
  newTask.index = todosTasks.length + 1;

  return newTask;
};

const removeTask = (parentLi) => {
  const taskFromLi = todosTasks.find((task) => task.index === +parentLi.id);

  const newTodos = todosTasks.filter((task) => task.index !== taskFromLi.index);

  const [deletedTodo] = todosTasks.filter((task) => task.index === taskFromLi.index);

  newTodos.forEach((todo) => {
    if (todo.index > deletedTodo.index) {
      todo.index -= 1;
    }
  });

  changeTodosTasks(newTodos);

  const ul = parentLi.parentNode;

  ul.removeChild(parentLi);

  setLocalStorage();
};

const removeAllCompletedTasks = () => {
  const newTodos = todosTasks.filter((task) => !task.completed);
  const allDeletedTodos = todosTasks.filter((task) => task.completed);
  const allLi = document.querySelectorAll('.todoitem');
  const ul = document.querySelector('ul');

  const liToDelete = [];

  allLi.forEach((li) => {
    allDeletedTodos.forEach((deleted) => {
      if (deleted.index === +li.id) {
        liToDelete.push(li);
      }
    });
  });

  newTodos.forEach((todo, index) => {
    todo.index = index + 1;
  });

  changeTodosTasks(newTodos);

  if (!allLi) {
    const ulParent = ul.parentNode;
    ulParent.removeChild(ul);
  }

  if (liToDelete) {
    liToDelete.forEach((li) => {
      ul.removeChild(li);
    });
  }

  setLocalStorage();
};

const editTask = (span) => {
  const parentLi = span.parentNode;
  const deleteIcon = document.querySelector('.delete-icon');
  const hasTheLineThroughClass = span.classList.contains('line-through');

  let taskFromLi;

  if (parentLi) {
    taskFromLi = todosTasks.find((task) => task.index === +parentLi.id);
  }

  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.classList.add('input-description');

  span.insertAdjacentElement('beforebegin', inputElement);

  inputElement.value = span.innerHTML;
  inputElement.focus();
  inputElement.setSelectionRange(0, 0);

  if (parentLi) {
    parentLi.removeChild(span);
    parentLi.classList.add('input-description-bg');
    inputElement.classList.add('input-description-bg');
  }

  if (inputElement) {
    inputElement.addEventListener('blur', () => {
      document.addEventListener('click', () => {
        if (inputElement.value !== '') {
          taskFromLi.description = inputElement.value;
          setLocalStorage();
          removeDeleteIcon(deleteIcon);
          changeInputToSpan(inputElement, hasTheLineThroughClass);
        }
      });
    });

    inputElement.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') {
        if (inputElement.value !== '') {
          inputElement.blur();
          taskFromLi.description = inputElement.value;
          setLocalStorage();
          removeDeleteIcon(deleteIcon);
          changeInputToSpan(inputElement, hasTheLineThroughClass);
        }
      }
    });
  }
};

export {
  addTask, editTask, removeTask, addDeleteIcon, removeAllCompletedTasks,
};
