import { JSDOM } from 'jsdom';
import { addTask } from './add-edit-remove';
import { removeTask } from './__mocks__/mockRemoveTask';
import { removeAllCompletedTasks } from './__mocks__/removeAllCompletedTasks';
import { editTask } from './__mocks__/editTask';
import { todosTasks, localStorage } from './__mocks__/myLocalStorage';

describe('addTask function', () => {
  // Act
  const result = addTask(todosTasks, 'Learning Jest');

  test('Returns an object ', () => {
    // Assert
    expect(typeof result).toEqual('object');
  });

  test('The description property of the returned object is equal to the value pass as a second argument', () => {
    // Assert
    expect(result.description).toEqual('Learning Jest');
  });

  test('The completed property of the returned object is equal to false', () => {
    // Assert
    expect(result.completed).toEqual(false);
  });

  test('The index property of the returned object is equal to the length of the array pass as a first argument plus one more', () => {
    // Assert
    expect(result.index).toEqual(todosTasks.length);
  });
});

describe('removeTask function', () => {
  //Arrange
  todosTasks.push({description: 'Do the laundry', completed: false, index: 1}, {description: 'Create mocking test', completed: true, index: 2});
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;

  document.body.innerHTML =
  '<ul>' +
    `<li class="todoitem" id=${todosTasks[0].index}><input type="checkbox" class="input-checkbox"> <span class="description">${todosTasks[0].description}</span> <span class="delete-icon"></span></li>` +
    `<li class="todoitem" id=${todosTasks[1].index}><input type="checkbox" class="input-checkbox"> <span class="description">${todosTasks[1].description}</span> <span class="delete-icon"></span></li>` +
  '</ul>';

  const parentLi = document.getElementById(`${todosTasks[1].index}`);
  removeTask(parentLi);

  //Act
  test('Remove one task from the list', () => {
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(1);
  });

  test('Remove the element from the array', () => {
    // Assert
    expect(todosTasks.length).toBe(1);
  });

  test('Check if localStorage updates', () => {
    // Act
    const itemDescription = JSON.parse(localStorage.getItem('todos'))[0].description;

    // Assert
    expect(itemDescription).toEqual(todosTasks[0].description);
  })

  test('Check if the removed item left local storage', () => {
    // Act
    const newTasks = JSON.parse(localStorage.getItem('todos'));
    
    // Assert
    expect(todosTasks).toEqual(newTasks);
  })
})

describe('editTask function', () => {
  //Arrange
  const firstLi = document.getElementById(todosTasks[0].index);

  const firstSpan = firstLi.querySelector('.description');

  let taskFromLi;

  if (firstLi) {
    taskFromLi = todosTasks.find((task) => task.index === +firstLi.id);
  }

  firstSpan.innerHTML = 'Something new';

  editTask(firstSpan);

  const inputElement = document.querySelector('.input-description');

  test('the value of the input changed by the inner HTML of the span', ()=>{
    // Assert
    expect(inputElement.value).toBe('Something new');

  });

  test('the value in the inner HTML of the span for the first todo changed when a click event is trigger', ()=>{
    // Act
    inputElement.blur() 
    const event = new window.MouseEvent('click', { view: window, bubbles: true, cancelable: true }); 
    document.body.dispatchEvent(event) 
    
    // Assert
    expect(taskFromLi.description).toBe(inputElement.value);
  });

  test('the value in the inner HTML of the span for the first todo changed when a click event is trigger', ()=>{    
    // Assert
    expect(taskFromLi.description).toBe(JSON.parse(localStorage.getItem('todos'))[0].description);
  });
});


describe('Remove all function', () => {
  test('Check if elements are removed from the DOM', () => {
    //Arrange
    todosTasks.push({description: 'Do the laundry', completed: false, index: 2}, {description: 'Create mocking test', completed: true, index: 3}, {description: 'Finish Project', completed: false, index: 4}, {description: 'Prepare lunch', completed: true, index: 5});
  document.body.innerHTML =
      `<div id='todolist-placeholder'> `+
        `<ul>` +
          `<li class="todoitem" id=${todosTasks[0].index}><input type="checkbox" class="input-checkbox"> <span class="description">${todosTasks[0].description}</span> <span class="delete-icon"></span></li>` +
          `<li class="todoitem" id=${todosTasks[1].index}><input type="checkbox" class="input-checkbox"> <span class="description">${todosTasks[1].description}</span> <span class="delete-icon"></span></li>` +
          `<li class="todoitem" id=${todosTasks[2].index}><input type="checkbox" class="input-checkbox"> <span class="description">${todosTasks[2].description}</span> <span class="delete-icon"></span></li>` +
          `<li class="todoitem" id=${todosTasks[3].index}><input type="checkbox" class="input-checkbox"> <span class="description">${todosTasks[3].description}</span> <span class="delete-icon"></span></li>` +
          `<li class="todoitem" id=${todosTasks[4].index}><input type="checkbox" class="input-checkbox"> <span class="description">${todosTasks[4].description}</span> <span class="delete-icon"></span></li>` +
        `</ul>` +
      `</div>`;

    // Act
    removeAllCompletedTasks()
    const taskList = document.querySelectorAll('li');
    expect(taskList).toHaveLength(3);
  })
  test('Check if all completed elements are removed', () => {
    // Assert
    expect(todosTasks.length).toBe(3)
  });

  test('Check if both removed items are out of the array', () => {
    // Act
    const removedItems = [{description: 'Create mocking test', completed: true, index: 2}, {description: 'Prepare lunch', completed: true, index: 2}];
    
    // Assert
    expect(todosTasks).not.toContain(removedItems);
  });

  test('Check if all the remaining items have completed set to false', () => {
    // Arrange
    const completedArray = [];
    // Act
    todosTasks.forEach((elements) => {
      if(elements.completed === false) {
        completedArray.push(elements.completed)
      }
    })
    // Assert
    expect(completedArray).not.toContain(true);
  })
})