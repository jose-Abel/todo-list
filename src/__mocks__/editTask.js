import { localStorage, todosTasks } from './myLocalStorage';

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
          localStorage.setItem('todos', JSON.stringify(todosTasks));
          changeInputToSpan(inputElement, hasTheLineThroughClass);
        }
      });
    });

    inputElement.addEventListener('keyup', (event) => {
      if (event.code === 'Enter') {
        console.log('enter pressed')
        if (inputElement.value !== '') {
          inputElement.blur();
          taskFromLi.description = inputElement.value;
          localStorage.setItem('todos', JSON.stringify(todosTasks));
          removeDeleteIcon(deleteIcon);
          changeInputToSpan(inputElement, hasTheLineThroughClass);
        }
      }
    });
  }
};

const changeInputToSpan = (inputDescription, hasTheLineThroughClass) => {
  const parentLi = inputDescription.parentNode;
  const removeIcon = inputDescription.nextElementSibling;
  const span = document.createElement('span');
  span.classList.add('description');

  if (removeIcon) {
    removeDeleteIcon(removeIcon);
  }

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

const removeDeleteIcon = (deleteIcon) => {
  const parentLi = deleteIcon.parentNode;
  if (parentLi) {
    parentLi.removeChild(deleteIcon);
  }
};

export { editTask }