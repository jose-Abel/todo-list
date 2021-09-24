import statusUpdate from './statusUpdate.js';
import { addTask, editTask, removeTask, addDeleteIcon } from './add-edit-remove.js';
import { setLocalStorage, getLocalStorage, todosTasks } from './myLocalStorage.js';
import './style.css';

// let todosTasks = [];

// const setLocalStorage = () => {
//   localStorage.setItem('todos', JSON.stringify(todosTasks));
// };

// const getLocalStorage = () => {
//   const data = JSON.parse(localStorage.getItem('todos'));

//   if (!data) return;

//   todosTasks = data;
// };

const createAllLiElement = (todosTasks) => {
  const placeholder = document.getElementById('todolist-placeholder');
  const ul = document.createElement('ul');
  const button = document.createElement('button');
  const liArray = [];

  todosTasks.forEach((task) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    
    span.innerHTML = task.description;
    li.id = task.index;
    li.classList.add('todoitem');
    span.classList.add('description');

    input.type = 'checkbox';
    input.classList.add('input-checkbox');

    if (task.completed) span.classList.add('line-through');

    li.appendChild(input);
    li.appendChild(span);

    liArray.push(li);
  });

  button.classList.add('button');
  button.innerHTML = 'Clear all completed';

  const sortedLi = liArray.sort((a, b) => a.id - b.id);

  sortedLi.forEach((li) => {
    ul.appendChild(li);
  });

  placeholder.appendChild(ul);
  placeholder.appendChild(button);
};

const deleteUlFromDOM = () => {
  const placeholder = document.getElementById('todolist-placeholder');
  const ul = document.querySelector("ul");
  const button = document.querySelector('.button');
  placeholder.removeChild(ul);
  placeholder.removeChild(button);
}

const checkingBoxesAndLine = () => {
  const checkboxes = document.querySelectorAll('.input-checkbox');
  const allLi = document.querySelectorAll('.todoitem');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function checkboxHandler() {
      statusUpdate(todosTasks, this);

      setLocalStorage();
    });
  });

  getLocalStorage();

  if (todosTasks.length > 0) {
    todosTasks.forEach((task) => {
      if (task.completed) {
        const liLineThrough = Array.from(allLi).find((li) => +li.id === task.index);
        liLineThrough.children[1].classList.add('line-through');
      }
    });

    checkboxes.forEach((checkbox) => {
      if (checkbox.nextElementSibling.classList.contains('line-through')) {
        checkbox.checked = true;
      }
    });
  }

  setLocalStorage();
}

// const addDeleteIcon = (span) => {
//   const parentLi = span.parentNode;
//   const deleteSpanIcon = document.createElement('span');

//   deleteSpanIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon');

//   if (parentLi) {
//     parentLi.appendChild(deleteSpanIcon);
//   }
// }


// const removeDeleteIcon = (deleteIcon) => {
//   const parentLi = deleteIcon.parentNode;
//   if(parentLi) {
//     parentLi.removeChild(deleteIcon);
//   }
// }

// const changeInputToSpan = (inputDescription) => {
//   const parentLi = inputDescription.parentNode;

//   const span = document.createElement('span');
//   span.classList.add('description');

//   if(inputDescription.description === '') {
//     console.log('Is empty')
//     return
//   }

//   inputDescription.insertAdjacentElement('beforebegin', span);
//   span.innerHTML = inputDescription.value;

//   if(parentLi) {
//     parentLi.removeChild(inputDescription);

//     if(parentLi.classList.contains('input-description-bg')) {
//       parentLi.classList.remove('input-description-bg');
//     }
//   }

//   const allSpan = document.querySelectorAll('.description');

//   allSpan.forEach((span) => {
//     span.addEventListener('click', () => {
//       addDeleteIcon(span);
//       changeSpanToInput(span);
//     });
//   });
// }

// const changeSpanToInput = (span) => {
  // const parentLi = span.parentNode;
  // const deleteIcon = document.querySelector('.delete-icon');
  // let taskOfLi;

  // if (parentLi) {
  //   taskOfLi = todosTasks.find((task) => task.index === +parentLi.id);
  // }

  // if (parentLi) {
  //   parentLi.removeChild(span);
  //   parentLi.classList.add('input-description-bg');
  //   inputDescription.classList.add('input-description-bg')
  // }

  // deleteIcon.addEventListener('click', () => {
  //   console.log("Run");
  // });

  // if (allInputDescriptions) {
  //   allInputDescriptions.forEach((inputDescription) => {
  //     inputDescription.addEventListener('focusout', () => {
  //       if (taskOfLi) {
  //         taskOfLi.description = inputDescription.value;
  //         setLocalStorage();
  //       }

  //       removeDeleteIcon(deleteIcon);
  //       changeInputToSpan(inputDescription);

  //     });

  //     inputDescription.addEventListener('keyup', (event) => {
  //       if (event.code === 'Enter') {
  //         if (taskOfLi) {
  //           inputDescription.blur();
  //           taskOfLi.description = inputDescription.value;
  //           setLocalStorage();
  //         }
  //         removeDeleteIcon(deleteIcon);
  //       }
  //     });
  //   });
// }


document.addEventListener('DOMContentLoaded', () => {
  const addInput = document.getElementById('add-input');
  createAllLiElement(todosTasks);

  addInput.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      if (addInput.value) {
        const newTask = addTask(todosTasks, addInput.value);
        todosTasks.push(newTask);

        setLocalStorage();
        deleteUlFromDOM();
        createAllLiElement(todosTasks);
        checkingBoxesAndLine();
        addInput.value = '';

        const allSpan = document.querySelectorAll('.description');

        allSpan.forEach((span) => {
          span.addEventListener('click', () => {
            addDeleteIcon(span);
            editTask(span);
          });
        });
      }
    }
  });

  getLocalStorage();
  deleteUlFromDOM();
  createAllLiElement(todosTasks);

  const allSpan = document.querySelectorAll('.description');

  allSpan.forEach((span) => {
    span.addEventListener('click', () => {
      addDeleteIcon(span);

      editTask(span);
    });
  });

  checkingBoxesAndLine();

})
