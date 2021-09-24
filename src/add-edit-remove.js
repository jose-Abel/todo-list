import { setLocalStorage, todosTasks } from './myLocalStorage.js';

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
}

const removeDeleteIcon = (deleteIcon) => {
  const parentLi = deleteIcon.parentNode;
  if(parentLi) {
    parentLi.removeChild(deleteIcon);
  }
}

const changeInputToSpan = (inputDescription) => {
  const parentLi = inputDescription.parentNode;

  const span = document.createElement('span');
  span.classList.add('description');

  if(inputDescription.description === '') {
    console.log('Is empty')
    return
  }

  inputDescription.insertAdjacentElement('beforebegin', span);
  span.innerHTML = inputDescription.value;

  if(parentLi) {
    parentLi.removeChild(inputDescription);

    if(parentLi.classList.contains('input-description-bg')) {
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
}

const addTask = (todosTasks, value) => {
  const newTask = {}
  newTask.description = value;
  newTask.completed = false;
  newTask.index = todosTasks.length + 1;

  return newTask;
}


const removeTask = (parentLi) => {
  const taskFromLi = todosTasks.find((task) => task.index === +parentLi.id);
}

const editTask = (span) => {
  const parentLi = span.parentNode;
  const deleteIcon = document.querySelector('.delete-icon');
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
    inputElement.classList.add('input-description-bg')
  }

  if (inputElement) {
    inputElement.addEventListener('focusout', () => {
      if (inputElement.value !== '') {
        taskFromLi.description = inputElement.value;
        setLocalStorage();
        removeDeleteIcon(deleteIcon);
        changeInputToSpan(inputElement);
      }
    });

    inputElement.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') {
        if (inputElement.value !== '') {
          inputElement.blur();
          taskFromLi.description = inputElement.value;
          setLocalStorage();
          removeDeleteIcon(deleteIcon);
        }
      }
    });
  }
}

export { addTask, editTask, removeTask, addDeleteIcon };
