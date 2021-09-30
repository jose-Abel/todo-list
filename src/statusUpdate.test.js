import { todosTasks } from './__mocks__/myLocalStorage';
import { JSDOM } from 'jsdom';
import {checkingBoxesAndLine} from "./__mocks__/checkingBoxesAndLine";

describe('statusUpdate function', () => {

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

    // Act
    const parentLi = document.getElementById(todosTasks[0].index);
    const checkbox = parentLi.firstChild;
    checkingBoxesAndLine();
    const event = new window.MouseEvent('click', { view: window, bubbles: true, cancelable: true }); 
    checkbox.dispatchEvent(event);
  
    test('The complete property changes when checked the checkbox', () => {

      // Assert
      expect(todosTasks[0].completed).toEqual(true);
    });
      
    test('The complete property changes back when checked the checkbox again', () => {
        // Act
        checkbox.dispatchEvent(event);

        // Assert
        expect(todosTasks[0].completed).toEqual(false);
      });
});